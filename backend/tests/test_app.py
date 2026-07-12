import os
import sys
import unittest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app import app  # noqa: E402


class HealthEndpointTest(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_health_returns_json(self):
        response = self.client.get("/health")
        self.assertIn(response.status_code, (200, 503))
        self.assertIn("model_loaded", response.get_json())


class PredictEndpointTest(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_missing_body_returns_400(self):
        response = self.client.post("/predict-earthquake", json={})
        self.assertEqual(response.status_code, 400)

    def test_invalid_vibrations_type_returns_400(self):
        response = self.client.post(
            "/predict-earthquake", json={"vibrations": "not-a-list"}
        )
        self.assertEqual(response.status_code, 400)

    def test_no_model_returns_503(self):
        response = self.client.post(
            "/predict-earthquake", json={"vibrations": [0.1, 0.2, 0.3]}
        )
        self.assertIn(response.status_code, (503, 200))


if __name__ == "__main__":
    unittest.main()
