document.getElementById('userDataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    // FormData is a built-in JavaScript object that lets you construct a set of key/value pairs representing form fields and their values. 
    // In this case, this refers to the form element (userDataForm). By passing this to FormData, it automatically collects all the form data.
    
    const userData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        village: formData.get('village'),
        city: formData.get('city')
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    displayUserData(userData);
    this.reset();
});

function displayUserData(userData) {
    const displayDiv = document.getElementById('userDataDisplay');
    displayDiv.innerHTML = `
        <h2>User Data:</h2>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Phone Number:</strong> ${userData.phone}</p>
        <p><strong>Village:</strong> ${userData.village}</p>
        <p><strong>City:</strong> ${userData.city}</p>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
        displayUserData(JSON.parse(savedUserData));
    }
});

