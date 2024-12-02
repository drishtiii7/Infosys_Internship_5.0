document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customer-form");
    const responseMessage = document.getElementById("response-message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        responseMessage.classList.add("hidden");
        errorMessage.classList.add("hidden");

        // Validation logic
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const dob = document.getElementById("dob").value;
        const planType = document.getElementById("plan-type").value;
        const amount = document.getElementById("amount").value.trim();

        let isValid = true;

        // Validate Name
        if (name === "" || name.length < 2) {
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
        }

        // Validate Date of Birth
        const today = new Date();
        const dobDate = new Date(dob);
        if (dob === "" || dobDate >= today) {
            isValid = false;
        }

        // Validate Plan Type
        if (planType === "") {
            isValid = false;
        }

        // Validate Plan Amount
        if (amount <= 0 || isNaN(amount)) {
            isValid = false;
        }

        // Show appropriate message based on validation
        if (isValid) {
            responseMessage.textContent = `Thank you, ${name}! Your ${planType} plan information has been successfully submitted.`;
            responseMessage.classList.remove("hidden");
            responseMessage.style.color = "green";
            form.reset(); // Reset the form after successful validation
        } else {
            errorMessage.textContent = "Please fill out all fields correctly before submitting.";
            errorMessage.classList.remove("hidden");
            errorMessage.style.color = "red";
        }
    });
});



    