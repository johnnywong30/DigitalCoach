"""
Main Flask application as well as routes of the app.
"""
from server import app
import uuid
import redis
from threading import Thread
from rq import Queue
from flask import Flask, jsonify, request
from flask_cors import CORS
from helpers.download_url import download_video_link
from helpers.score import create_answer
from .db_monitor import poll_connection

import ffmpeg

CORS(app)
r = redis.Redis()
q = Queue(connection=r)


@app.before_first_request
def launch_polling_script():
    Thread(target=poll_connection, args=(r,), daemon=True).start()
    print("Launched polling script in different thread.")


@app.route("/", methods=["GET"])
def index():
    """
    Home route.
    """
    return "Welcome to the ML API for Digital Coach"
# 58f909b0-f7a5-4ffb-be09-ab64bd32a787


@app.route("/predict", methods=["POST"])
def predict():
    """
    POST route that returns total text, audio and video predictions.
    """
    req = request.get_json()
    print(req)
    # req = request.get_json()
    # video_url, user_id, question_id, answer_id = (
    #     req["videoUrl"],
    #     req["userId"],
    #     req["questionId"],
    #     req["answerId"],
    # )
    # if (
    #     not video_url
    #     or not user_id
    #     or not question_id
    #     or not answer_id
    # ):
    #     return jsonify(errors="Required fields not in request body.")
    # print(video_url)
    download = download_video_link(req['videoUrl'])
    
    # input_path = 'data/video.mp4'
    # output_path = 'data/video2.mp4'
    # input_stream = ffmpeg.input(input_path)
    # output_stream = ffmpeg.output(input_stream, output_path)
    # ffmpeg.run(output_stream)

    # print('download successful!')
    # if "errors" in download:
    #     return jsonify(message="Download failed.", errors=str(download["errors"]))
    content = {
        "fname": "video2.mp4",
        "rename": str(uuid.uuid4()) + ".mp3",
        # "user_id": user_id,
        # "question_id": question_id,
        # "answer_id": answer_id,
    }
    job = q.enqueue(create_answer, content)
    print(job)
    print("Task " + job.id + " has been added to queue")
    message = "Task " + str(job.id) + \
        " added to queue at " + str(job.enqueued_at) + "."
    return jsonify(message=message)
