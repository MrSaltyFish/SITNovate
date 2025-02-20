import praw
from textblob import TextBlob
from fastapi import FastAPI
from langdetect import detect
from deep_translator import GoogleTranslator
import nltk
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Download NLTK tokenizer
nltk.download('punkt')

# Initialize FastAPI
app = FastAPI()

# Reddit API Credentials
REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET")
REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT")

# Connect to Reddit API
reddit = praw.Reddit(
    client_id=REDDIT_CLIENT_ID,
    client_secret=REDDIT_CLIENT_SECRET,
    user_agent=REDDIT_USER_AGENT
)

def analyze_sentiment(text):
    try:
        language = detect(text)
        if language != "en":
            text = GoogleTranslator(source='auto', target='en').translate(text)

        analysis = TextBlob(text)
        sentiment_score = analysis.sentiment.polarity
        sentiment_label = "Positive" if sentiment_score > 0 else "Negative" if sentiment_score < 0 else "Neutral"

        return {"sentiment": sentiment_label, "language": language}
    except Exception as e:
        return {"error": f"Translation failed: {str(e)}"}

    """Detect language, translate if needed, and analyze sentiment."""
    try:
        language = detect(text)
        if language != "en":
            text = GoogleTranslator(source='auto', target='en').translate(text)

        analysis = TextBlob(text)
        sentiment_score = analysis.sentiment.polarity  # -1 (Negative) to 1 (Positive)
        sentiment_label = "Positive" if sentiment_score > 0 else "Negative" if sentiment_score < 0 else "Neutral"
        
        return {"sentiment": sentiment_label, "language": language}
    except Exception as e:
        return {"error": str(e)}

def fetch_reddit_data(subreddit_name, limit=10):
    try:
        subreddit = reddit.subreddit(subreddit_name)
        if subreddit is None:
            return {"error": f"Subreddit '{subreddit_name}' not found"}

        data = []
        for post in subreddit.hot(limit=limit):
            sentiment_result = analyze_sentiment(post.title)
            data.append({
                "title": post.title,
                "score": post.score,
                "sentiment": sentiment_result["sentiment"],
                "language": sentiment_result.get("language", "unknown"),
                "error": sentiment_result.get("error", None)
            })

        return data
    except Exception as e:
        return {"error": f"Failed to fetch subreddit '{subreddit_name}': {str(e)}"}

    """Fetch Reddit posts, detect language, translate if needed, and analyze sentiment."""
    subreddit = reddit.subreddit(subreddit_name)
    data = []

    for post in subreddit.hot(limit=limit):
        sentiment_result = analyze_sentiment(post.title)
        data.append({
            "title": post.title,
            "score": post.score,
            "sentiment": sentiment_result["sentiment"],
            "language": sentiment_result.get("language", "unknown"),
            "error": sentiment_result.get("error", None)
        })
    
    return data

@app.get("/sentiment/{subreddit}")
def get_sentiment(subreddit: str):
    """API Endpoint to fetch sentiment analysis results."""
    return fetch_reddit_data(subreddit)
