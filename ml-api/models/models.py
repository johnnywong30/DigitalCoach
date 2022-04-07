import os
import pickle
import requests
from fer import Video, FER
from dotenv import load_dotenv
from configs.definitions import ROOT_DIR
from helpers.av_processing import read_audio_file

TEXT_MODEL = pickle.load(open("models/text_model.pkl", "rb"))
TFIDF_MODEL = pickle.load(open("models/tfidf_model.pkl", "rb"))

env_path = os.path.join(ROOT_DIR, ".env")
load_dotenv(env_path)


def detect_emotions(video_fname):
    videofile_path = os.path.join(ROOT_DIR, "data", video_fname)
    print(videofile_path)
    face_detection = FER(mtcnn=True)
    try:
        input_video = Video(videofile_path)
        processed_data = input_video.analyze(
            face_detection, display=False, frequency=15
        )
        vid_df = input_video.to_pandas(processed_data)
        vid_df = input_video.get_emotions(vid_df)
        sum_emotions = {
            "angry": sum(vid_df.angry),
            "disgust": sum(vid_df.disgust),
            "fear": sum(vid_df.fear),
            "happy": sum(vid_df.happy),
            "sad": sum(vid_df.sad),
            "surprise": sum(vid_df.surprise),
            "neutral": sum(vid_df.neutral),
        }
        return sum_emotions
    except OSError as exception:
        return {"errors": str(exception)}


def detect_audio_sentiment(fname):
    headers = {
        "authorization": os.getenv("AAPI_KEY"),
        "content-type": "application/json",
    }
    res_upload = requests.post(
        os.getenv("UPLOAD_ENDPOINT"), headers=headers, data=read_audio_file(fname)
    )

    upload_url = res_upload.json()["upload_url"]

    res_transcript = requests.post(
        os.getenv("TRANSCRIPT_ENDPOINT"),
        headers=headers,
        json={"audio_url": upload_url, "sentiment_analysis": True},
    )

    return res_transcript.json()
