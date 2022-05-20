import json
from dataclasses import dataclass
from typing import List, Optional

import requests

from core.common.token import Token
from core.protocols.compound.ctoken import CompoundTokenDataProvider
from core.protocols.compound.types import CompoundPrecise
from core.protocols.data_provider import UserDataProvider


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

    @staticmethod
    def get(user: str) -> Optional[CompoundUserAccount]:

        payload = {'addresses': [user]}
        response = requests.get(f'https://api.compound.finance/api/v2/account/', params=payload)
        if response.ok:
            raw = response.text
        else:
            return None  # FIXME
        print(raw)
        acc_resp = AccountResponse(raw)
        if len(acc_resp.accounts) == 0:
            return None
        account = acc_resp.accounts[0]
        print(account)
        borrowed: List[Token] = []
        supplied: List[Token] = []
        for token in account['tokens']:
            c_token = CompoundTokenDataProvider.get(token['address'])
            c_token = Token(c_token['underlying_address'], c_token['underlying_name'], c_token['underlying_symbol'])
            if token['borrow_balance_underlying']['value'] != 0:
                borrowed.append(c_token)
            if token['supply_balance_underlying']['value'] != 0:
                supplied.append(c_token)
        health = None if not account.get('health') else float(account['health']['value'])
        total_collateral_value_in_eth = None if not account.get('total_collateral_value_in_eth') else float(
            account['total_collateral_value_in_eth']['value'])
        total_borrow_value_in_eth = None if not account.get('total_borrow_value_in_eth') else float(
            account['total_borrow_value_in_eth']['value'])
        account = CompoundUserAccount(health,
                                      total_collateral_value_in_eth,
                                      total_borrow_value_in_eth,
                                      borrowed, supplied)
        return account
