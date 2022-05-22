#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 16:56:03 2022

@author: Massendefekt
"""

# TODO:
# Port https://github.com/aave/aave-utilities/blob/cdf8a8bf87c8848a2f0865c58defbd04e0871171/packages/math-utils/src/formatters/user/index.ts#L144

from core.protocols.data_provider import UserDataProvider

"""
Query for debt and balance per asset.
{
  userReserves(where: {user: "0x0000000000007f150bd6f54c40a34d7c3d5e9f56"}) {
    user {
      id
    }
    reserve{
      underlyingAsset
    }
    currentATokenBalance
    currentTotalDebt
  }
}

"""


class AaveV2UserDataProvider(UserDataProvider):
    pass
