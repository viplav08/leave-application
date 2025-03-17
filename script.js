document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way

    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        leaveType: document.getElementById('leaveType').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        reason: document.getElementById('reason').value
    };

    // Send the data to the Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxj1YgD17C_93bThuLq7L1_p5n_fFbmRrJ9XVNCs_oZhOmAz9vM4MBpfa_nxoYrxHLw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Send data as JSON
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response after submitting the data
        if (data.status === 'success') {
            document.getElementById('responseMessage').innerText = "Leave application submitted successfully!";
            document.getElementById('leaveForm').reset();
        } else {
            document.getElementById('responseMessage').innerText = "Error: " + data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = "An error occurred, please try again.";
    });
});
