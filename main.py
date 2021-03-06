#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 15:34:49 2022

@author: Massendefekt
"""

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.api_v1.api import api_router
from core.common.static_files import SPAStaticFiles

app = FastAPI(title="Candid")
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])
app.include_router(api_router)
app.mount('/', SPAStaticFiles(directory='frontend/pages', html=True), name='index')
