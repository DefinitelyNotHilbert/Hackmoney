#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May 15 10:17:57 2022

@author: Massendefekt
"""
from abc import ABC, abstractmethod
from typing import TypeVar, Optional, Generic

D = TypeVar("D")


class UserDataProvider(ABC, Generic[D]):
    @abstractmethod
    def get(self, user: str) -> Optional[D]:
        pass
