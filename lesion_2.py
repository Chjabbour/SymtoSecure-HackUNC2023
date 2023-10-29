import streamlit as st
from PIL import Image
import requests
import joblib
import numpy as np

# Define the URL of the hosted model on Google Cloud Storage
model_url = 'https://storage.googleapis.com/lesion_bucket/skin_lesion_svm_model.pkl'

# Download the model file
response = requests.get(model_url)

if response.status_code == 200:
    # Save the model to a local file
    with open('temp_model.pkl', 'wb') as model_file:
        model_file.write(response.content)
    # Load the model from the local file
    model = joblib.load('temp_model.pkl')
else:
    st.error("Failed to download the model. Please check the model URL.")

# Define the classify_image function
def classify_image(image):
    # Preprocess the image (scaling, reshaping, etc.)
    image = np.array(image)
    image = image / 255  # Scale the image
    image = image.reshape(1, -1)

    # Use your model to make a prediction
    prediction = model.predict(image)
    return "Benign" if prediction == 0 else "Malignant"

# Streamlit app code follows, including the UI and image upload handling
# ...

if __name__ == "__main__":
    st.title("Lesion Classifier")
    st.write("Upload an image of a lesion, and we will classify it as 'Benign' or 'Malignant.")

    uploaded_image = st.file_uploader("Choose an image...", type=["jpg", "png", "jpeg"])

    if uploaded_image is not None:
        image = Image.open(uploaded_image)
        st.image(image, caption="Uploaded Image", use_column_width=True)
        st.write("")
        st.write("Classifying...")

        result = classify_image(image)

        st.write(f"Prediction: {result}")
