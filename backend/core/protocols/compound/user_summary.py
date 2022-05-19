import json
from dataclasses import dataclass
from typing import List, Optional

import requests

from core import settings
from core.cache.cache import Cache
from core.cache.sqlite_cache import SQLiteCache
from core.common.token import Token
from core.protocols.compound.ctoken import CompoundTokenDataProvider
from core.protocols.data_provider import UserDataProvider
from core.protocols.protocols import register, Protocol


class CompoundPrecise:
    value: str


class CompoundToken:
    address: str
    symbol: str
    supply_balance_underlying: CompoundPrecise
    borrow_balance_underlying: CompoundPrecise
    lifetime_borrow_interest_accrued: CompoundPrecise
    lifetime_borrow_interest_accrued: CompoundPrecise
    supply_balance_underlying: CompoundPrecise


class CompoundAccount:
    address: str
    health: CompoundPrecise
    tokens: List[CompoundToken]
    total_borrow_value_in_eth: CompoundPrecise
    total_collateral_value_in_eth: CompoundPrecise


class AccountResponse:
    error: str
    request: object
    pagination_summary: object
    accounts: List[CompoundAccount]

    def __init__(self, ser: str):
        self.__dict__ = json.loads(ser)


@dataclass(init=True)
class CompoundUserAccount:
    health: float
    total_collateral: float
    total_debt: float
    borrowed_tokens: List[Token]
    supplied_tokens: List[Token]


class CompoundUserDataProvider(UserDataProvider[CompoundUserAccount]):
    cache: Cache = SQLiteCache(settings.DB, 'compound_user_accounts')
    url = "https://api.compound.finance/api/v2/ctokens"

    @staticmethod
    def get(user: str) -> Optional[CompoundUserAccount]:
        cached = CompoundUserAccount.__class__.get(user)
        if cached:
            raw = cached
        else:
            payload = {'addresses': [user]}
            response = requests.get(user, params=payload)
            if response.ok:
                CompoundUserAccount.__class__.cache.put(user, response.raw)
                raw = response.raw
            else:
                return None  # FIXME
        acc_resp = AccountResponse(raw)
        account = acc_resp.accounts[0]
        borrowed: List[Token] = []
        supplied: List[Token] = []
        for token in account.tokens:
            c_token = CompoundTokenDataProvider.get(token.address).to_token()
            if token.borrow_balance_underlying != 0:
                borrowed.append(c_token)
            if token.supply_balance_underlying != 0:
                supplied.append(c_token)
        account = CompoundUserAccount(float(account.health.value),
                                      float(account.total_collateral_value_in_eth.value),
                                      float(account.total_borrow_value_in_eth.value),
                                      borrowed, supplied)
        return account


@register(Protocol.compound)
def get_compound_user_summary(user: str):
    return UserDataProvider.get(user)
