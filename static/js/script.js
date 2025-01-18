document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect input data from the form
    const inputData = {
        Pclass: parseInt(document.querySelector('input[name="Pclass"]').value),
        Sex: document.querySelector('input[name="Sex"]').value,
        Age: parseFloat(document.querySelector('input[name="Age"]').value),
        SibSp: parseInt(document.querySelector('input[name="SibSp"]').value),
        Parch: parseInt(document.querySelector('input[name="Parch"]').value),
        Fare: parseFloat(document.querySelector('input[name="Fare"]').value),
        Embarked: document.querySelector('select[name="Embarked"]').value,
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([inputData]) // Send as an array of objects
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Prediction: ${data}`;
    });
});


