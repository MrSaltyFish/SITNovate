from flask import Flask, request, jsonify
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)

# 🔹 Load Old Twitter Sentiment Model
with open("sentiment_model.pkl", "rb") as model_file:
    twitter_model = pickle.load(model_file)

with open("vectorizer.pkl", "rb") as vectorizer_file:
    twitter_vectorizer = pickle.load(vectorizer_file)

# 🔹 Function to Predict Sentiment for Twitter Model
def predict_twitter_sentiment(tweet):
    tweet_vec = twitter_vectorizer.transform([tweet])
    prediction = twitter_model.predict(tweet_vec)
    return "Positive" if prediction[0] == 1 else "Negative"

# 🔹 Home Route
@app.route("/")
def home():
    return "Hello, Flask on Render! API is Running."

# 🔹 Twitter Sentiment Route (Old Model)
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    tweet = data.get("tweet", "")
    
    if not tweet:
        return jsonify({"error": "No tweet provided"}), 400
    
    sentiment = predict_twitter_sentiment(tweet)
    return jsonify({"tweet": tweet, "sentiment": sentiment})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
