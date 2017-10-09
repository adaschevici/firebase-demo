import uuid
import logging
import logging.handlers
from aiohttp import web
import firebase
import aiohttp_cors

async def user_joined(request):
    user_id = str(uuid.uuid4())
    print("User with id %s just joined" % (user_id))
    firebase.firebase_insert_user(user_id)
    uid = { "user_uuid": user_id }
    return web.json_response(uid)

async def user_clapped(request):
    print("User with id %s just clapped" % (user_id))
    firebase.update_claps(user_id)
    return web.json_response({ 200: "OK" })

app = web.Application()
app.router.add_get('/join', user_joined)
app.router.add_get('/clap', user_clapped)

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
