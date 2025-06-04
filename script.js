// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) { // Attach an event listener to the form for the 'submit' event
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value.trim();   // User's name
    const email = document.getElementById('email').value.trim();    // User's email address
    const message = document.getElementById('message').value.trim();    
    
    if (name && email && message) {
        document.getElementById('feedback').classList.remove('hidden');
    } else {
        alert('Please fill out all fields!');
    }
});
