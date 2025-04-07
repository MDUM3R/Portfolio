
// nav bar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
  
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPage.includes(linkPath)) {
        link.classList.add('active');
      }
    });
});
  

// contact form
function sendMail() {
    // Get the input fields
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let subjectField = document.getElementById("subject");
    let messageField = document.getElementById("message");

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let subject = subjectField.value.trim();
    let message = messageField.value.trim();

    let isValid = true;

    // Reset previous error styles
    nameField.style.border = "";
    emailField.style.border = "";
    subjectField.style.border = "";
    messageField.style.border = "";

    // Simple Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (name === "") {
        nameField.style.border = "2px solid red";
        isValid = false;
    }
    if (email === "" || !emailPattern.test(email)) {
        emailField.style.border = "2px solid red";
        isValid = false;
    }
    if (subject === "") {
        subjectField.style.border = "2px solid red";
        isValid = false;
    }
    if (message === "") {
        messageField.style.border = "2px solid red";
        isValid = false;
    }

    // Show alert and stop submission if invalid
    if (!isValid) {
        alert("Please fill all fields correctly before submitting!");
        return;
    }

    // Proceed if valid
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs.send("service_zsqp0d6", "template_uwsluld", parms)
        .then(function (response) {
            alert("Email Sent!");

            // Clear fields after submission
            nameField.value = "";
            emailField.value = "";
            subjectField.value = "";
            messageField.value = "";
        });
}

