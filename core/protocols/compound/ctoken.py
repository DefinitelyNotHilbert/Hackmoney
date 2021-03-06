import json
from typing import List, Optional

import requests

from core.common.token import Token
from core.protocols.compound.types import CompoundPrecise
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

    @staticmethod
    def get(token: str) -> Optional[CToken]:
        payload = {'addresses': [token]}
        response = requests.get(f'https://api.compound.finance/api/v2/ctoken/', params=payload)
        if response.ok:
            raw = response.text
        else:
            return None  # FIXME
        tok_resp = CTokenResponse(raw)
        return tok_resp.cToken[0]
