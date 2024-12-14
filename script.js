// Validate IPv6 Address
function validateIPv6() {
    const ipv6Input = document.getElementById('ipv6-input').value;
    const validationResult = document.getElementById('validation-result');

    const ipv6Regex = /([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})/;
    
    if (ipv6Regex.test(ipv6Input)) {
        validationResult.textContent = 'Valid IPv6 Address';
        validationResult.style.color = 'green';
    } else {
        validationResult.textContent = 'Invalid IPv6 Address';
        validationResult.style.color = 'red';
    }

    // Create a diagram of IPv6 address breakdown
    createIPv6Diagram(ipv6Input);
}

// Create IPv6 Diagram
function createIPv6Diagram(address) {
    const diagramDiv = document.getElementById('ipv6-diagram');
    diagramDiv.innerHTML = ''; // Clear previous diagram
    if (!address) return;

    const segments = address.split(':');
    segments.forEach((segment, index) => {
        const segmentDiv = document.createElement('div');
        segmentDiv.textContent = `${index + 1}: ${segment}`;
        segmentDiv.style.padding = '5px';
        segmentDiv.style.margin = '5px';
        segmentDiv.style.backgroundColor = '#007bff';
        segmentDiv.style.color = 'white';
        segmentDiv.style.borderRadius = '5px';
        diagramDiv.appendChild(segmentDiv);
    });
}

// Simulate IPv6 Packet Transmission
function simulateTransmission() {
    const networkDiv = document.getElementById('network-animation');
    networkDiv.innerHTML = '<p>Simulating IPv6 Packet Transmission...</p>';

    // Simple animation for network transmission
    setTimeout(() => {
        networkDiv.innerHTML = '<p>Transmission Successful!</p>';
        networkDiv.style.backgroundColor = '#28a745';
    }, 3000);
}

// Show IPv6 Security Demo
function showSecurityDemo() {
    const securityDemo = document.getElementById('security-demo');
    securityDemo.innerHTML = '<p>Displaying IPv6 Security Features...</p>';

    setTimeout(() => {
        securityDemo.innerHTML = '<p>Security Demo: IP Authentication and Encryption Mechanisms</p>';
        securityDemo.style.color = '#007bff';
    }, 2000);
}

// Congestion Control Chart Update
function updateCongestionChart() {
    const ctx = document.getElementById('congestionChart').getContext('2d');
    const congestionData = {
        labels: ['Time 1', 'Time 2', 'Time 3', 'Time 4', 'Time 5'],
        datasets: [{
            label: 'Queue Size',
            data: [30, 40, 35, 50, 45],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: congestionData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        });
}
