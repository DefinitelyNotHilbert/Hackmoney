#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 15:34:49 2022

@author: Massendefekt
"""

from fastapi import FastAPI

from api.api_v1.api import api_router

app = FastAPI(title="Candid")

app.include_router(api_router)
