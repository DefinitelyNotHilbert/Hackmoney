#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 15:47:04 2022

@author: Massendefekt
"""

from enum import Enum

from core.protocols.compound.dao_user_summary import CompoundDAOUserDataProvider
from core.protocols.compound.user_summary import CompoundUserDataProvider
from core.protocols.snapshot.user_summary import SnapshotUserSummary


class DispatchingEnum(Enum):
    """
    Inherits Enum to create an Enum with callable fields.
    """

    @classmethod
    def register(cls, key: str):
        if not hasattr(cls, 'table'):
            cls._table = {}

        def _register(func):
            cls._table[key] = func

        return _register

    def __call__(self, *args, **kwargs):
        return self.__class__._table[self](*args, **kwargs)


def register(denum: DispatchingEnum):
    """
    Decorator to register a function with a Dispatching enum.
    """

    def ret(func):
        denum.__class__.register(denum)(func)

    return ret


class Protocol(str, DispatchingEnum):
    """
    Enum class that enumerates all supported (DeFi) protocols.
    """

    aave_v2 = 'aave_v2'
    compound = 'compound'


class DAO(str, DispatchingEnum):
    """
    Enum class that enumerates all supported DAOs protocols.
    """
    compound = 'compound'


@register(Protocol.compound)
def get_compound_user_summary(user: str):
    return CompoundUserDataProvider.get(user)


@register(DAO.compound)
def get_compound_dao_user_summary(user: str):
    return CompoundDAOUserDataProvider.get(user)
