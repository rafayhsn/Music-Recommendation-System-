Music Recommendation System
This repository contains code for building a music recommendation system using audio features extracted from music tracks.

Preprocessing
The preprocessing code extracts audio features, specifically Mel-frequency cepstral coefficients (MFCCs), from a collection of music tracks. It follows these steps:

Data Loading: Reads metadata about tracks from a CSV file and defines file paths for audio files.
Feature Extraction: Extracts MFCC features from audio files using the Librosa library.
Normalization: Normalizes MFCC features and performs dimensionality reduction using Principal Component Analysis (PCA).
Data Storage: Stores the extracted features in a MongoDB database for later use in model training.

Model Training:
The model training code trains a neural network-based recommender system using the extracted audio features. It follows these steps:

Data Retrieval: Retrieves the preprocessed features from the MongoDB database.
Dataset Creation: Creates a PyTorch dataset using the retrieved features.
Model Definition: Defines a neural network architecture for the recommendation model.
Training Loop: Trains the model using cosine similarity as the loss function and Mean Squared Error (MSE) as the optimization criterion.
Evaluation: Evaluates the trained model using MSE on a separate validation set.

Deployment:
The music streaming and recommendation platform was deployed using Flask for backend logic and HTML, CSS, and JavaScript for frontend development. Flask routes were defined in app.py to handle different URLs and requests, rendering the main HTML template (musicPlayer.html) at the root route (/). Static files such as CSS stylesheets and JavaScript scripts were served using Flask's send_from_directory function. By combining Flask with HTML, CSS, and JavaScript, the platform was successfully deployed, providing a user-friendly experience for music streaming and recommendations.
