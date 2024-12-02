document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("appointment-form");
    const notificationStatus = document.getElementById("notification-status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        notificationStatus.textContent = "Appointment successfully booked!";
    });
});
