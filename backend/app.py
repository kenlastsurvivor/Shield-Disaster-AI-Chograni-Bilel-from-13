import os

import numpy as np
from flask import Flask, jsonify, request

app = Flask(__name__)

MODEL_PATH = os.environ.get("MODEL_PATH", "model_random_forest.pkl")
_model = None
_model_load_error = None

try:
    import joblib

    if os.path.exists(MODEL_PATH):
        _model = joblib.load(MODEL_PATH)
    else:
        _model_load_error = f"Fichier modèle introuvable : {MODEL_PATH}"
except Exception as exc:  # pragma: no cover - defensive load
    _model_load_error = str(exc)


@app.route("/health", methods=["GET"])
def health():
    """Endpoint de supervision : indique si le modèle est chargé."""
    return jsonify(
        {
            "status": "ok" if _model is not None else "degraded",
            "model_loaded": _model is not None,
            "model_error": _model_load_error,
        }
    ), (200 if _model is not None else 503)


@app.route("/predict-earthquake", methods=["POST"])
def predict():
    if _model is None:
        return jsonify(
            {
                "error": "Modèle non disponible sur le serveur. "
                "Vérifiez MODEL_PATH / déploiement du fichier modèle.",
                "details": _model_load_error,
            }
        ), 503

    data = request.get_json(silent=True)
    if not data or "vibrations" not in data:
        return jsonify({"error": "Aucune donnée de vibrations fournie."}), 400

    vibrations = data["vibrations"]
    if not isinstance(vibrations, list) or not vibrations:
        return jsonify({"error": "'vibrations' doit être une liste non vide de nombres."}), 400
    if not all(isinstance(v, (int, float)) for v in vibrations):
        return jsonify({"error": "'vibrations' ne doit contenir que des nombres."}), 400

    try:
        vibrations_arr = np.array(vibrations, dtype=float).reshape(1, -1)
        prediction = _model.predict(vibrations_arr)
        return jsonify({"alert": int(prediction[0])})
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


if __name__ == "__main__":
    debug_mode = os.environ.get("FLASK_DEBUG", "0") == "1"
    app.run(debug=debug_mode, host="127.0.0.1", port=int(os.environ.get("PORT", 5000)))
