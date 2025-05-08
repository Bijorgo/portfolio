from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

projects = [
    {
        "id": 2,
        "title": "Mixtape Maker",
        "description": "Create and share playlists.",
        "url": "https://github.com/bijorgo/mixtape-maker",
        "demo": "https://mixtape-maker.netlify.app",
        "photo": "https://i.imgur.com/lsDKqa6.jpeg",
        "alt": "Temp Alt Text"
    },
    {
        "id": 1,
        "title": "Thyme to Grow",
        "description": "A virtual gardening sim with a Flask API and Pygame frontend.",
        "url": "https://github.com/bijorgo/thyme-to-grow",
        "demo": "https://youtu.be/demo-link",
        "photo": "https://i.imgur.com/lsDKqa6.jpeg",
        "alt": "Temp Alt Text"
    },
    {
        "id": 3,
        "title": "Photo Gallery",
        "description": "A photo gallery featuring a React frontend",
        "url": "https://github.com/bijorgo/photo-gallery",
        "demo": "https://youtu.be/demo-link",
        "photo": "https://i.imgur.com/lsDKqa6.jpeg",
        "alt": "Temp Alt Text"
    }
]

@app.route('/')
def home():
    return {'message': 'Flask backend is running!'}

@app.route('/projects')
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True)
