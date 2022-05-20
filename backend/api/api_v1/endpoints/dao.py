from fastapi import APIRouter

router = APIRouter()


@router.get("/dao/{protocol}/{address}")
async def get_dao_activity(address: str):
    pass
