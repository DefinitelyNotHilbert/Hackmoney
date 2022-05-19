#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 15:59:36 2022

@author: Massendefekt
"""

from abc import ABC, abstractmethod
from typing import TypeVar, Optional, List, Generic


K = TypeVar("K")
V = TypeVar("V")


class Cache(ABC, Generic[K, V]):
    """Very simple cache interface."""

    @abstractmethod
    def get(self, key: K) -> Optional[V]:
        pass

    @abstractmethod
    def put(self, key: K, val: V):
        pass

    @abstractmethod
    def evict(self, key: K) -> Optional[V]:
        pass

    @abstractmethod
    def flush(self) -> Optional[List[V]]:
        pass
