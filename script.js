document.getElementById('leaveForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const employeeId = document.getElementById('employeeId').value;
  const leaveType = document.getElementById('leaveType').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  // Create data object
  const data = {
    employeeId: employeeId,
    leaveType: leaveType,
    startDate: startDate,
    endDate: endDate
  };

  // Send data to Google Apps Script
  fetch('https://script.google.com/macros/s/AKfycbyJdaQxqed6LQjh9sAlEfrBKKJSNMYN6_VcTF84XpYhWWZUIVXIAQvx6gTYAPJfRj4P/exec', {
    method: 'POST',
    body: new URLSearchParams(data)
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('responseMessage').textContent = "Leave request submitted successfully!";
  })
  .catch(error => {
    document.getElementById('responseMessage').textContent = "An error occurred, please try again.";
  });
});
