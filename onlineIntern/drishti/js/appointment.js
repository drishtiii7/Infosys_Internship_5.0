async function loadAgents() {
    const response = await fetch('/api/availability');
    const data = await response.json();
    const agentSelect = document.getElementById('agent');

    data.forEach(agent => {
        const option = document.createElement('option');
        option.value = agent.id;
        option.textContent = `Agent ${agent.id} - ${agent.startTime} to ${agent.endTime}`;
        agentSelect.appendChild(option);
    });
}

async function bookAppointment(event) {
    event.preventDefault();
    const agentId = document.getElementById('agent').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointmentData = { agentId, date, time };

    const response = await fetch('/api/appointment/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
    });

    if (response.ok) {
        alert("Appointment booked successfully!");
    } else {
        alert("Failed to book appointment.");
    }
}

document.addEventListener('DOMContentLoaded', loadAgents);
