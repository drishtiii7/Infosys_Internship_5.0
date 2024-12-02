const agents = [
    { name: "Riya", available: true },
    { name: "Saurabh", available: false },
    { name: "Pranshul", available: true },
    { name: "Kshipra", available: false },
    { name: "Sarthak", available: true },
    { name: "Drishti", available: true },
    { name: "Sudhanshu", available: true },
    { name: "Billie", available: false },
];

// Function to load agents into the UI
function loadAgents() {
    const agentList = document.getElementById('agent-list');

    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.classList.add('agent-card');

        const agentName = document.createElement('h2');
        agentName.textContent = agent.name;
        agentCard.appendChild(agentName);

        const availabilityStatus = document.createElement('div');
        availabilityStatus.className = 'availability';
        availabilityStatus.textContent = agent.available ? "Available" : "Unavailable";
        availabilityStatus.classList.add(agent.available ? 'available' : 'unavailable');
        agentCard.appendChild(availabilityStatus);

        const contactButton = document.createElement('button');
        contactButton.textContent = agent.available ? "Contact Agent" : "Notify Me";
        contactButton.onclick = () => {
            if (agent.available) {
                alert(`Contacting ${agent.name}...`);
            } else {
                alert(`You will be notified when ${agent.name} is available.`);
            }
        };
        agentCard.appendChild(contactButton);

        agentList.appendChild(agentCard);
    });
}

// Load agents when the page loads
document.addEventListener('DOMContentLoaded', loadAgents);


