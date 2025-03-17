document.getElementById("leaveForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var employeeId = document.getElementById("employeeId").value;
    var leaveType = document.getElementById("leaveType").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    fetch("https://script.google.com/macros/s/AKfycbza7ol1LNRZrVMxcMQJBCeBM5Sc04pn2oszPDsSlwsW9Db58C3ntPiN2TBKc_QVEA9Z/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            employeeId: employeeId,
            leaveType: leaveType,
            startDate: startDate,
            endDate: endDate
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.status === "success") {
            document.getElementById("leaveForm").reset();
        }
    })
    .catch(error => console.error("Error:", error));
});
