from flask import Flask, render_template, send_from_directory
import os
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('musicPlayer.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

@app.route('/randomTrack')
def random_track():
    music_directory = "C:/Users/SiliCon/Desktop/bdaProject/dataset/"
    tracks = [track for track in os.listdir(music_directory) if track.endswith('.mp3')]
    random_track = random.choice(tracks)
    return send_from_directory(music_directory, random_track)

if __name__ == '__main__':
    app.run(debug=True)
