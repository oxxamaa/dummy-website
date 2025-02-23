document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const submitButton = document.querySelector('.contact-form button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevents the default form submission

        // Show loading indicator
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        // Use Fetch API to send the form data to Formspree
        fetch('https://formspree.io/f/maykewkp', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // If successful, clear the form and show a success message
                form.reset();
                alert('Your message has been sent successfully!');
            } else {
                // If there's an error, show a failure message
                alert('There was an issue sending your message. Please try again.');
            }
        })
        .catch(() => {
            alert('Network error. Please try again.');
        })
        .finally(() => {
            // Reset button text and enable it again
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
    });
});