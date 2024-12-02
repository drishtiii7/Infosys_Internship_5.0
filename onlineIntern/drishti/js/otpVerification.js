async function sendOTP() {
    const email = document.getElementById('email').value;
    const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });

    if (response.ok) {
        document.getElementById('otpSection').style.display = 'block';
        document.getElementById('message').textContent = 'OTP sent to your email. Please check your inbox.';
    } else {
        document.getElementById('message').textContent = 'Error sending OTP. Please try again.';
    }
}

async function verifyOTP() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
    });

    if (response.ok) {
        document.getElementById('message').textContent = 'Verification complete! You are verified.';
    } else {
        document.getElementById('message').textContent = 'Invalid OTP. Please try again.';
    }
}

function logout() {
    // Clear session and redirect to login
    window.location.href = "login.html";
}
