import uuid
import logging
import logging.handlers
from aiohttp import web
import aiohttp_cors
import pytest

from firebase import firebase

async def user_joined(request):
    user_id = str(uuid.uuid4())
    print("User with id %s just joined" % (user_id))
    firebase.firebase_insert_user(user_id)
    uid = {"user_uuid": user_id}
    return web.json_response(uid)

async def user_clapped(request):
    payload = await request.json()
    print(payload)
    user_id = payload['userId']
    print("User with id %s just clapped" % (user_id))
    firebase.firebase_update_claps(user_id)
    return web.json_response({"status": "OK"})

app = web.Application()
app.router.add_get('/join', user_joined)
app.router.add_post('/clap', user_clapped)

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*",
        )
})

for route in list(app.router.routes()):
    cors.add(route)

if __name__ == "__main__":
    web.run_app(app, port=5000)

