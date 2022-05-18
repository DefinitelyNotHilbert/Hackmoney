# -*- coding: utf-8 -*-

from fastapi import APIRouter

from core.protocols.protocols import Protocol

router = APIRouter()


@router.get("/{protocol}/{address}")
async def get_protocol_stats(proto: Protocol, addr: str):
    response = proto(addr)
    return response
