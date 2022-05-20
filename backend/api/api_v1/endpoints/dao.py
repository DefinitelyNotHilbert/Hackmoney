from fastapi import APIRouter

from core.protocols.protocols import DAO

router = APIRouter()


@router.get("/{dao}/{address}")
async def get_dao_activity(dao: DAO, address: str):
    return dao(address)
