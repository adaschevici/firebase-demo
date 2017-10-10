import pyrebase
import constants

config = {
    "apiKey": constants.API_KEY,
    "authDomain": constants.AUTH_DOMAIN,
    "databaseURL": constants.DB_URL,
    "projectId": constants.PROJECT_ID,
    "storageBucket": constants.STORAGE_BUCKET,
    "messagingSenderId": constants.SENDER_ID
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
user = {}

def firebase_insert_user(user_id):

    # Log the user in
    global user
    if not user.get('idToken'):
        print("Logging in")
        user = auth.sign_in_with_email_and_password(constants.USER_EMAIL, constants.USER_PASSWORD)

    # Get a reference to the database service
    db = firebase.database()

    # data to save
    data = {
        "claps": 0
    }

    # Pass the user's idToken to the push method
    results = db.child("users").child(user_id).set(data, user['idToken'])

def firebase_update_claps(user_id):
    global user
    if not user.get('idToken'):
        user = auth.sign_in_with_email_and_password(constants.USER_EMAIL, constants.USER_PASSWORD)
    db = firebase.database()

    claps = db.child("users").child(user_id).get(user['idToken']).val()['claps']

    db.child("users").child(user_id).update({"claps": claps + 1}, user['idToken'])
