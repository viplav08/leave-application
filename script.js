document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        leaveType: document.getElementById("leaveType").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        reason: document.getElementById("reason").value
    };

    // Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL' with the Google Apps Script URL
    fetch("https://script.google.com/a/macros/commoditiescontrol.com/s/AKfycbxe9NpvvteFX6g6icWmIUhpKI3o_YCX10ImeYnf8g0/dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").innerText = "Leave application submitted successfully!";
        document.getElementById("leaveForm").reset();
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Error submitting form.";
        console.error("Error:", error);
    });
});
