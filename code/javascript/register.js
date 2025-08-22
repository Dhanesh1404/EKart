// Get the registration form
const registrationForm = document.getElementById('registrationForm');


registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    alert('Registration Successful!');

    
    window.location.href = '../html/home.html'; 
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   

    // Check if the user already exists
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
        alert("An account with this email already exists. Please use a different email.");
        return;
    }

    // Save user details in localStorage
    const userDetails = {
        fullName,
        username,
        password,
    };

    localStorage.setItem(email, JSON.stringify(userDetails));
    alert("Registration successful! You can now log in.");
    window.location.href ='../html/home.html';
});

