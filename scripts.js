// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('All fields are required!');
    } else {
      alert('Thank you for your message!');
      // Optional: reset the form
      this.reset();
    }
  });
  