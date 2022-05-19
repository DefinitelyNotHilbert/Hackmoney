#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 14 16:06:56 2022

@author: Massendefekt
"""
import atexit
import sqlite3
import time
from typing import Optional

from core.cache.cache import Cache

CREATE_TABLE_QUERY = """
CREATE TABLE IF NOT EXISTS (?) (
    request TEXT UNIQUE NOT NULL,
    response TEXT NOT NULL,
    cached_since INTEGER NOT NULL
    )
"""

GET_ENTRY_QUERY = """
SELECT response, cached_since FROM cache WHERE request=:req
"""

PUT_ENTRY_QUERY = """
INSERT INTO ? (`req`, `res`, `since`) VALUES (?, ?, ?) ON DUPLICATE KEY
UPDATE `req`=VALUES(`req`), `req`=VALUES(`res`),`since`=VALUES(`since`)
"""


class SQLiteCache(Cache[str, str]):
    """
    Implements a simple response cache to avoid calling 3rd party data APIs
    too frequently.
    """

    def __init__(self, db: str, table: str, ttl=-1):
        self.table = table
        self.ttl = ttl
        self.con = sqlite3.connect(db)
        self.con.execute(CREATE_TABLE_QUERY, (table,))
        atexit.register(self._cleanup)

    def get(self, key: str) -> Optional[str]:
        row = self.con.execute(GET_ENTRY_QUERY, {"req": key}).fetchone()
        if self.ttl == -1 or row[1] + self.ttl > time.time():
            return row[0]
        else:
            return None

    def put(self, key: str, val: str):
        self.con.execute(PUT_ENTRY_QUERY, (self.table, key, val, time.time()))

    def evict(self, key: str):
        pass

    def flush(self, key: str) -> Optional[str]:
        pass

    def _cleanup(self):
        self.con.close()
