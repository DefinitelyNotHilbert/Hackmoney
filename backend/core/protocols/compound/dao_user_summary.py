import json
from dataclasses import dataclass
from typing import Optional

import requests

from core.protocols.data_provider import UserDataProvider


@dataclass
class CompoundDAOUserAccount:
    balance: float
    votes: float
    vote_weight: float
    proposals_created: int
    proposals_voted: int
    total_delegates: int


class CompoundDAOUserDataProvider(UserDataProvider[CompoundDAOUserAccount]):

    @staticmethod
    def get(user: str) -> Optional[CompoundDAOUserAccount]:
        payload = {'addresses': [user]}
        response = requests.get(f'https://api.compound.finance/api/v2/governance/accounts/', params=payload)
        if not response.ok:
            return None  # FIXME
        data = json.loads(response.text)
        if len(data['accounts']) == 0:
            return None
        else:
            account = data['accounts'][0]
        balance = float(account['balance'])
        votes = float(account['votes'])
        vote_weight = float(account['vote_weight'])
        proposals_created = int(account['proposals_created'])
        proposals_voted = int(account['proposals_voted'])
        total_delegates = int(account['total_delegates'])

        account = CompoundDAOUserAccount(balance, votes, vote_weight, proposals_created, proposals_voted,
                                         total_delegates)
        return account
