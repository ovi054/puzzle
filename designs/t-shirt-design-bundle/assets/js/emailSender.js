(function() {
            emailjs.init('KCyjX0-GoRpgqDX7a'); // Replace with your actual user ID (public key) from EmailJS
        })();

        // Email validation function
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        document.addEventListener('DOMContentLoaded', function() {
            const emailInput = document.getElementById('semail');
            const messageDiv = document.getElementById('message');

            document.getElementById('signup-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form from submitting the default way

                // Collect form data
                const email = emailInput.value;

                // Validate email
                if (!validateEmail(email)) {
                    messageDiv.textContent = 'Please enter a valid email address.';
                    return; // Exit the function if email is invalid
                }

                // Display a message immediately
                messageDiv.textContent = 'Sending email...';

                // Send the email via EmailJS
                emailjs.send('service_o8h8znr', 'template_1saddj9', {
                    to_email: email // Make sure this matches the placeholder in your EmailJS template
                }).then((response) => {
                    messageDiv.textContent = 'Demo T-Shirt bundle is sent! Please check your email inbox/spam box.';
                }, (error) => {
                    console.error('Failed to send email:', error);
                    messageDiv.textContent = 'Failed to send email.';
                });
            });
        });