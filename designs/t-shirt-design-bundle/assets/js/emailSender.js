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
                    messageDiv.innerHTML = `
        <span style="color: black;">
            Access the demo sample here:
            <a href="https://drive.google.com/drive/folders/12AZYM8cbVSCCsQnzlB7uJ_ArmleffCbu?usp=drive_link" target="_blank" style="color: #1a73e8;">https://drive.google.com/drive/folders/12AZYM8cbVSCCsQnzlB7uJ_ArmleffCbu?usp=drive_link</a><br> 
            We've also emailed the samples to you. Please check your inbox or spam folder.
        </span>
    `;
                }, (error) => {
                    console.error('Failed to send email:', error);
                    messageDiv.textContent = 'Failed to send email.';
                });
            });
        });