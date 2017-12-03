import pytest
import uuid
import io
from firebase import firebase
from aiohttp import web
from server import user_joined, user_clapped

@pytest.fixture
def fakeserver(loop, test_client):
    app = web.Application()
    app.router.add_get('/join', user_joined)
    app.router.add_post('/clap', user_clapped)
    return loop.run_until_complete(test_client(app))

async def test_user_joined(monkeypatch, fakeserver):
    def mockuuid():
        return 'random_uuid'
    def mockfirebase(user_id):
        return 'firebase'
    monkeypatch.setattr(uuid, 'uuid4', mockuuid)
    monkeypatch.setattr(firebase, 'firebase_insert_user', mockfirebase)
    resp = await fakeserver.get('/join')
    assert resp.status == 200
    assert await resp.text() == '{"user_uuid": "random_uuid"}'

async def test_user_clapped(monkeypatch, fakeserver):
    def mockuuid():
        return 'random_uuid'
    def mockfirebase(user_id):
        return 'firebase'
    monkeypatch.setattr(uuid, 'uuid4', mockuuid)
    # monkeypatch.setattr(firebase, 'firebase_insert_user', mockfirebase)
    monkeypatch.setattr(firebase, 'firebase_update_claps', mockfirebase)
    resp = await fakeserver.post('/clap', data=io.BytesIO(b'{\"userId\": \"1234\"}'))
    assert resp.status == 200
    # assert await resp.text() == '{"status": "Ok"}'
