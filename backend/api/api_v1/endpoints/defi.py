# -*- coding: utf-8 -*-

from fastapi import APIRouter

from core.protocols.protocols import Protocol

router = APIRouter()


@router.get("/{protocol}/{address}")
async def get_protocol_stats(protocol: Protocol, address: str):
    response = protocol(address)
    return response
