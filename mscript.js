document.getElementById('hostingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simulate fetching data from a carbon footprint calculator API
    const carbonFootprint = fetchCarbonFootprint();

    // Predefined thresholds for carbon footprint
    const maxCarbonFootprint = 100; // Example threshold

    if (carbonFootprint <= maxCarbonFootprint) {
        alert('Certification Completed! Your hosting plan meets sustainability criteria.');
    } else {
        alert('Certification Failed. Please improve your hosting plan’s carbon footprint.');
    }

    // Optionally, you can proceed with form submission here
    // e.g., using AJAX to send data to the server
});

// Mock function to simulate fetching carbon footprint data
function fetchCarbonFootprint() {
    // Simulate a value fetched from an external API
    return Math.floor(Math.random() * 200); // Returns a random number between 0 and 200
}
