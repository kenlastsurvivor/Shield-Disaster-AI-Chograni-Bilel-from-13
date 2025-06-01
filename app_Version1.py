from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Charger le modèle pré-entraîné (exemple : RandomForest)
model = joblib.load('model_random_forest.pkl')

@app.route('/predict-earthquake', methods=['POST'])
def predict():
    data = request.get_json()
    if not data or 'vibrations' not in data:
        return jsonify({'error': 'Aucune donnée de vibrations fournie.'}), 400

    try:
        vibrations = np.array(data['vibrations']).reshape(1, -1)
        prediction = model.predict(vibrations)
        return jsonify({"alert": int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)