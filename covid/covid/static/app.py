from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from tensorflow import keras
from keras.models import load_model
from keras.preprocessing import image
from keras.applications.resnet50 import preprocess_input
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the pre-trained ResNet model
model_path = "ecg_model.h5"
model = load_model(model_path)

# Assuming you have a data generator during training, you need to define train_generator here
# Make sure it's associated with the same model and preprocessing steps
# Replace the following line with your actual train_generator definition
class_labels = {0:'Normal Person',1:'Myocardial Infarction Patients',2:'COVID-19 Patients',3:'Patient that have abnormal heart beats',4:'Patient that have History of MI'}

@app.route('/predict', methods=['POST'])
def predict():
    #try:
        # Get the image file from the request
        img_file = request.files['image']
        img_file.save("images.png")
        # Load and preprocess the image
        img = image.load_img("images.png", target_size=(256, 256))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)
        img_array /= 255.0
        # Make prediction
        predictions = model.predict(img_array)

        # Get the predicted category name
        predicted_category_index = np.argmax(predictions[0])
        predicted_category_name = class_labels[predicted_category_index]

        return jsonify({"predicted_category": predicted_category_name})

    #except Exception as e:
        #return jsonify({"error": str(e)})

@app.route('/')
def index():
    return "hello world"

if __name__ == '__main__':
    app.run(debug=True)

