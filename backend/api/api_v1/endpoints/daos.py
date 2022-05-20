from fastapi import APIRouter

from core.protocols.snapshot.user_summary import SnapshotUserSummary

router = APIRouter()


@router.get("/{address}")
async def get_dao_activity_summary(address: str):
    response = SnapshotUserSummary.get(address)
    return response
