
import os
import xgboost as xgb

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

model = xgb.XGBRegressor()
model.load_model(
    os.path.join(BASE_DIR, "models", "risk_analysis_model.json")
)

print("Risk Features")
print(model.get_booster().feature_names)