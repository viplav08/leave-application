document.getElementById('leaveForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission

  // Collect form data
  var formData = {
    employeeId: document.getElementById('employeeId').value,
    leaveType: document.getElementById('leaveType').value,
    startDate: document.getElementById('startDate').value,
    endDate: document.getElementById('endDate').value,
    reason: document.getElementById('reason').value
  };

  // Log the form data to check
  console.log('Form Data:', formData);

  // Send the data to the Google Apps Script via POST request
  fetch('https://script.google.com/macros/s/AKfycbxe9NpvvteFX6g6icWmIUhpKI3o_YCX10ImeYnf8g0/dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  // Set the correct content type
    },
    body: JSON.stringify(formData)  // Send the data as JSON
  })
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    if (data.status === 'success') {
      document.getElementById('responseMessage').innerText = "Leave application submitted successfully!";
      document.getElementById('leaveForm').reset();  // Reset the form
    } else {
      document.getElementById('responseMessage').innerText = "Error: " + data.message;
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('responseMessage').innerText = "An error occurred, please try again.";
  });
});
