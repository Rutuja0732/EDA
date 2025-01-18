import joblib

# Assuming you have already defined and trained your pipeline in EDA_titanic.ipynb
joblib.dump(pipeline, 'titanic_model.pkl')
