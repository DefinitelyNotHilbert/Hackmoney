from fastapi import APIRouter

from core.protocols.aave_v2.dao_user_summary import AaveDAOUserDataProvider
from core.protocols.compound.dao_user_summary import CompoundDAOUserDataProvider
from core.protocols.protocols import DAO

router = APIRouter()


@router.get("/{dao}/{address}")
async def get_dao_activity(dao: DAO, address: str):
    if DAO.aave == dao:
        return AaveDAOUserDataProvider.get(address)
    elif DAO.compound == dao:
        return CompoundDAOUserDataProvider.get(address)
    return None
