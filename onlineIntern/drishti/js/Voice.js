// Voice.js

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-btn");
    const stopButton = document.getElementById("stop-btn");
    const queryText = document.getElementById("query-text");
    const errorMessage = document.getElementById("error-message");
    const responseText = document.getElementById("response-text");

    // Check if SpeechRecognition is supported in the browser
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // If the browser does not support SpeechRecognition
    if (!SpeechRecognition) {
        errorMessage.classList.remove("hidden");
        errorMessage.textContent =
            "Sorry, your browser does not support speech recognition. Please use Google Chrome or Microsoft Edge.";
        startButton.disabled = true;
        stopButton.disabled = true;
        return;
    }

    // Initialize SpeechRecognition
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US"; // Set language to US English
    recognition.continuous = true; // Continuous listening
    recognition.interimResults = false; // Only final results

    let isRecognitionActive = false;

    // Start speech recognition
    startButton.addEventListener("click", function () {
        errorMessage.classList.add("hidden");
        recognition.start(); // Start recognizing speech
        isRecognitionActive = true;
        toggleButtons(); // Update button visibility
        queryText.textContent = "Listening..."; // Update status
    });

    // Stop speech recognition
    stopButton.addEventListener("click", function () {
        recognition.stop(); // Stop recognizing speech
        isRecognitionActive = false;
        toggleButtons(); // Update button visibility
        queryText.textContent = "Voice recognition stopped.";
    });

    // Handle speech recognition results
    recognition.onresult = function (event) {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        queryText.textContent = transcript;
        processQuery(transcript); // Process the recognized query
    };

    // Handle errors in speech recognition
    recognition.onerror = function (event) {
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = `Error occurred: ${event.error}. Please try again.`;
        console.error("Speech recognition error:", event.error);
    };

    // Handle the end of speech recognition
    recognition.onend = function () {
        if (isRecognitionActive) {
            recognition.start(); // Restart if manually stopped
        } else {
            toggleButtons(); // Update button visibility
        }
    };

    // AI response simulation based on recognized query
    function processQuery(query) {
        const lowerCaseQuery = query.toLowerCase();
        let response = "Sorry, I didn’t understand your query."; // Default response

        // Simple AI response based on keywords
        if (lowerCaseQuery.includes("help")) {
            response = "Sure! How can I assist you today? Please provide more details.";
        } else if (lowerCaseQuery.includes("price")) {
            response = "Can you please specify which product or service you want the price for?";
        } else if (lowerCaseQuery.includes("appointment")) {
            response = "I can help you schedule an appointment. Please provide the date and time.";
        } else if (lowerCaseQuery.includes("status")) {
            response = "Please provide your appointment ID to check the status.";
        } else if (lowerCaseQuery.includes("hello") || lowerCaseQuery.includes("hi")) {
            response = "Hello! How can I assist you today?";
        } else if (lowerCaseQuery.includes("thank")) {
            response = "You're welcome! If you need further assistance, feel free to ask.";
        }

        // Display AI response
        responseText.textContent = response;
    }

    // Toggle visibility of Start and Stop buttons
    function toggleButtons() {
        startButton.classList.toggle("hidden");
        stopButton.classList.toggle("hidden");
    }
});
