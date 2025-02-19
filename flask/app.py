import pickle
from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer

# Initialize Flask app
app = Flask(__name__)

# Load model and vectorizer
with open("sentiment_model.pkl", "rb") as model_file:
    loaded_model = pickle.load(model_file)

with open("vectorizer.pkl", "rb") as vectorizer_file:
    loaded_vectorizer = pickle.load(vectorizer_file)

# Function to predict sentiment
def predict_sentiment(tweet):
    tweet_vec = loaded_vectorizer.transform([tweet])  # Convert text to TF-IDF
    prediction = loaded_model.predict(tweet_vec)  # Predict sentiment
    sentiment = "Positive" if prediction[0] == 1 else "Negative"
    return sentiment

# 🔹 Basic "Hello, World!" route
@app.route('/api/', methods=['GET'])
def hello():
    return jsonify({"message": "Hello, World! Welcome to the Sentiment Analysis API 🚀"}), 200

# 🔹 Flask API route for sentiment prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get JSON request
    tweet = data.get("tweet", "")  # Extract tweet text
    if not tweet:
        return jsonify({"error": "No tweet provided"}), 400  # Handle empty input
    
    sentiment = predict_sentiment(tweet)  # Get sentiment
    return jsonify({"tweet": tweet, "sentiment": sentiment})  # Return JSON response

# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)
