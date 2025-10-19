const registrationForm = document.querySelector('#register form');
        const menuToggle = document.getElementById('menu-toggle');
        const mainNav = document.getElementById('main-nav');

        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the page from reloading

            const passwordInput = document.getElementById('password');

            // --- New: Add a check for password length ---
            if (passwordInput.value.length < 8) {
                alert('Password must be at least 8 characters long.');
                passwordInput.focus(); // Focus on the password field for the user
                return; // Stop the rest of the script from running
            }

            // Check if all required fields are filled and show the alert only if valid
            if (registrationForm.reportValidity()) {
                alert("You're registered for the upcoming Tech Week 2025");
                registrationForm.reset(); // Clears the form fields after successful submission
            }
        });

        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mainNav.classList.remove('active'));
        });

        // Highlight active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('#main-nav a');

        const onScroll = () => {
            const scrollPosition = window.scrollY + 150; // Add offset to trigger highlight sooner

            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        document.addEventListener('DOMContentLoaded', onScroll); // Run on page load as well