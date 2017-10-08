import uuid
import logging
import logging.handlers
from aiohttp import web
import aiohttp_cors

async def user_joined(request):
    user_id = str(uuid.uuid4())
    print("User with id %s just joined" % (user_id))
    uid = { "user_uuid": user_id }
    return web.json_response(uid)


app = web.Application()
app.router.add_get('/join', user_joined)

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
})

for route in list(app.router.routes()):
    cors.add(route)

web.run_app(app)
