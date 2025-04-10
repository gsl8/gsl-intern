document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("form-success");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop form from reloading page

        // Get values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            successMessage.style.color = "red";
            successMessage.textContent = "Please fill out all fields.";
            return;
        }

        // If everything is filled
        successMessage.style.color = "green";
        successMessage.textContent = "Thanks! Your message has been sent.";

        // Clear form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });
