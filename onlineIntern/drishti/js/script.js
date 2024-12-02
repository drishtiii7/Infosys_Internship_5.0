function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    window.location.href = "home.html"; 
    return true; // Allow form submission (but this might not be necessary if you're redirecting)

}

document.getElementById('availabilityForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const isAvailable = document.getElementById('isAvailable').checked;

    const availabilityData = {
        date,
        startTime,
        endTime,
        isAvailable
    };

    try {
        const response = await fetch('/api/availability', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(availabilityData)
        });

        if (response.ok) {
            alert("Availability saved successfully!");
            document.getElementById('availabilityForm').reset();
        } else {
            alert("Failed to save availability. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
