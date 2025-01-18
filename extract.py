import zipfile

# Path to the ZIP file
zip_path = "titanic.zip"
extract_to = "."

# Extract the ZIP file
with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_to)

print("Dataset extracted successfully!")
