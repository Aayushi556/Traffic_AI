import os
import joblib
import pandas as pd
import xgboost as xgb

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "models", "risk_analysis_model.json")
ENCODER_PATH = os.path.join(BASE_DIR, "encoders", "risk_label_encoders.pkl")

model = xgb.XGBRegressor()
model.load_model(MODEL_PATH)

label_encoders = joblib.load(ENCODER_PATH)



def predict_risk(features):

    data = pd.DataFrame([features])

    print("\n========== INPUT ==========")
    print(data)

    for col in data.columns:
        if col in label_encoders:
            print(f"\nColumn: {col}")
            print("Value :", data[col].iloc[0])
            print("Classes:", label_encoders[col].classes_)

            data[col] = label_encoders[col].transform(data[col])

    print("\n========== ENCODED ==========")
   
    prediction = model.predict(data)

    return float(prediction[0])