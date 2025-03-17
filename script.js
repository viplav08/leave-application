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

    fetch("document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        leaveType: document.getElementById("leaveType").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        reason: document.getElementById("reason").value
    };

    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
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
", {
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
