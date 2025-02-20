import pandas as pd
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
import joblib

# Sample dataset (Replace this with your real dataset)
data = {
    "text": ["I love this!", "This is terrible.", "Amazing product!", "Worst experience ever."],
    "sentiment": ["Positive", "Negative", "Positive", "Negative"]
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Preprocessing
df.dropna(inplace=True)

# Train model
X_train, X_test, y_train, y_test = train_test_split(df["text"], df["sentiment"], test_size=0.2, random_state=42)

# Use TF-IDF + Naive Bayes
vectorizer = TfidfVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)

model = MultinomialNB()
model.fit(X_train_vec, y_train)

# Save model and vectorizer
joblib.dump(model, "new_model.pkl")
joblib.dump(vectorizer, "new_vectorizer.pkl")

print("Model trained and saved as new_model.pkl")
