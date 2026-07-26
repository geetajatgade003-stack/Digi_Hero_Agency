document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill out all fields before submitting.';
        return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    document.getElementById('contactForm').reset();
});