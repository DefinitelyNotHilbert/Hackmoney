import json
from dataclasses import dataclass
from typing import Optional, Set, Dict, List

import requests

VOTES_QUERY = """
query {
  votes (
    first: 1000
    skip: 0
    where: {
      voter: "<USER>"
    }
    orderBy: "created",
    orderDirection: desc
  ) {
    id
    voter
    vp
    vp_by_strategy
    vp_state
    created
    proposal {
      id
    }
    choice
    space {
      id
    }
  }
}

"""

PROPOSALS_QUERY = """
query Proposals {
  proposals (
    first: 9999
    skip: 0,
    where: {
      space_in: ["<DAO>"],
      state: "closed"
    },
    orderBy: "created",
    orderDirection: desc
  ) {
    id
  }
}
"""

SPACE_QUERY = """
query {
  space(id: "<DAO>") {
    id
    name
    about
    network
    symbol
    members
    strategies {
      name
      params
    }
  }
}
"""

from core.protocols.data_provider import UserDataProvider


@dataclass(init=True)
class SnapshotDAOUserAccount:
    daos: List[str]
    dao_token_map: Dict[str, object]
    total_proposals: Dict[str, int]
    votes: Dict[str, int]


class SnapshotUserSummary(UserDataProvider[SnapshotDAOUserAccount]):

    @staticmethod
    def get(user: str) -> Optional[SnapshotDAOUserAccount]:
        query = VOTES_QUERY.replace('<USER>', user)
        response = requests.post(f'https://hub.snapshot.org/graphql', json={'query': query})
        if not response.ok:
            return None  # FIXME
        data = json.loads(response.text)['data']
        daos = set()
        votes = {}
        for vote in data['votes']:
            dao = vote['space']['id']
            daos.add(dao)
            votes.setdefault(dao, 0)
            votes[dao] += 1

        dao_token_map = {}
        total_proposals_per_dao = {}
        for dao in daos:
            query = PROPOSALS_QUERY.replace('<DAO>', dao)
            response = requests.post(f'https://hub.snapshot.org/graphql', json={'query': query})
            if not response.ok:
                continue
            proposals = json.loads(response.text)['data']['proposals']
            total_proposals_per_dao[dao] = len(proposals)
            query = SPACE_QUERY.replace('<DAO>', dao)
            response = requests.post(f'https://hub.snapshot.org/graphql', json={'query': query})
            if not response.ok:
                continue
            strategies = json.loads(response.text)['data']['space']['strategies']
            for strategy in strategies:
                if strategy['name'] in ["erc20-votes", "erc20-balance-of", "comp-like-votes", "uniswap", "balancer"]:
                    dao_token_map.setdefault(dao, [])
                    dao_token_map[dao].append({'symbol': strategy['params'].get('symbol'),
                                               'name': strategy['params'].get('name'),
                                               'address': strategy['params']['address']})
                elif strategy['name'] in ["multichain", "delegation"]:
                    strategies.extend(strategy['params']['strategies'])
        account = SnapshotDAOUserAccount(list(daos), dao_token_map, total_proposals_per_dao, votes)
        return account
