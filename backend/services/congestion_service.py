import os
import pandas as pd
import xgboost as xgb

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "xgboost_model_congestion.json"
)

model = xgb.XGBRegressor()
model.load_model(MODEL_PATH)

def predict_congestion(features):
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]
    return float(prediction)