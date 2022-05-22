from dataclasses import dataclass


@dataclass
class Token:
    address: str
    name: str
    symbol: str
