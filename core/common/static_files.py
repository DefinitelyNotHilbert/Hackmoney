from typing import Any

from fastapi.staticfiles import StaticFiles


class SPAStaticFiles(StaticFiles):
    """
    Helper class for serving a single page app from FastAPI.
    """
    async def get_response(self, path: str, scope: Any):
        response = await super().get_response(path, scope)
        if 404 == response.status_code:
            return await super().get_response('.', scope)
        return response
