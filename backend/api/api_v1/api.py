#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 15:42:14 2022

@author: Massendefekt
"""

from fastapi import APIRouter

from api.api_v1.endpoints import defi

api_router = APIRouter()
api_router.include_router(defi.router, prefix='/defi', tags=['defi'])
