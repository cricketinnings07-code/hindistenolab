function sendDataToSheet(name, mistakes, acc) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxQRj2ivFy6eiuwHpumMQDbKxv5MYjB30aNXf73QHdPranuIGHmmZtZE8Jo2XazVLtq/exec'; // यहाँ अपना गूगल स्क्रिप्ट लिंक डालें
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ name: name, errors: mistakes, accuracy: acc })
    })
    .then(() => {
        alert("आपका रिजल्ट सुरक्षित सेव हो गया है और रैंक अपडेट हो गई है!");
        location.reload(); // पेज रिफ्रेश करें ताकि अपडेटेड लीडरबोर्ड दिखे
    })
    .catch(error => console.error('Error!', error.message));
}
