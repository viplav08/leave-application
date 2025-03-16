document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(this);
    let jsonData = {};
    
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_URL_HERE/exec", {
        method: "POST",
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("statusMessage").innerText = data.message;
        document.getElementById("leaveForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
