import json
from typing import List, Optional

import requests

from core import settings
from core.cache.cache import Cache
from core.cache.sqlite_cache import SQLiteCache
from core.common.token import Token
from core.protocols.compound.user_summary import CompoundPrecise
from core.protocols.data_provider import UserDataProvider


class CToken:
    token_address: str
    total_supply: CompoundPrecise
    total_borrows: CompoundPrecise
    reserves: CompoundPrecise
    cash: CompoundPrecise
    exchange_rate: CompoundPrecise
    supply_rate: CompoundPrecise
    borrow_rate: CompoundPrecise
    collateral_factor: CompoundPrecise
    number_of_suppliers: int
    number_of_borrowers: int
    underlying_price: CompoundPrecise
    underlying_address: str
    name: str
    underlying_symbol: str
    underlying_name: str
    interest_rate_model_address: str
    reserve_factor: CompoundPrecise
    comp_supply_apy: CompoundPrecise
    comp_borrow_apy: CompoundPrecise
    borrow_cap: CompoundPrecise

    def to_token(self) -> Token:
        return Token(self.underlying_address, self.underlying_name, self.underlying_symbol)


class CTokenMeta:
    unique_suppliers: int
    unique_borrowers: int


class CTokenResponse:
    error: object
    request: object
    cToken: List[CToken]
    meta: CTokenMeta

    def __init__(self, ser: str):
        self.__dict__ = json.loads(ser)


class CompoundTokenDataProvider(UserDataProvider[CToken]):
    cache: Cache = SQLiteCache(settings.DB, 'compound_tokens')
    url = "https://api.compound.finance/api/v2/ctoken"

    @staticmethod
    def get(token: str) -> Optional[CToken]:
        cached = CompoundTokenDataProvider.__class__.cache.get(token)
        if cached:
            raw = cached
        else:
            payload = {'addresses': [token]}
            response = requests.get(token, params=payload)
            if response.ok:
                CompoundTokenDataProvider.__class__.cache.put(token, response.raw)
                raw = response.raw
            else:
                return None  # FIXME
        tok_resp = CTokenResponse(raw)
        return tok_resp.cToken[0]
