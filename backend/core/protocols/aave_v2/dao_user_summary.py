import json
from dataclasses import dataclass
from typing import Optional

import requests

from core.protocols.data_provider import UserDataProvider


@dataclass
class AaveDAOUserAccount:
    balance: float
    votes: float
    vote_weight: float
    proposals_created: int
    proposals_voted: int
    total_delegates: int


class AaveDAOUserDataProvider(UserDataProvider[AaveDAOUserAccount]):

    @staticmethod
    def get(user: str) -> Optional[AaveDAOUserAccount]:
        payload = {'address': [user]}
        response = requests.get(f'https://aave-api-v2.aave.com/data/governance-user-search', params=payload)
        if not response.ok:
            return None  # FIXME
        account = json.loads(response.text)
        if not account:
            return None
        balance = float(account['aaveBalance'])
        votes = float(account['votingPower'])
        vote_weight = float(account['votingWeight'])
        proposals_created = len(account['proposalHistory'])
        proposals_voted = len(account['votingHistory'])
        total_delegates = len(account['usersRepresented'])

        account = AaveDAOUserAccount(balance, votes, vote_weight, proposals_created, proposals_voted,
                                     total_delegates)
        return account
