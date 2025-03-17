function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LeaveRequests"); // Sheet name should match
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([data.name, data.email, data.leaveType, data.startDate, data.endDate, data.reason, new Date()]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" })).setMimeType(ContentService.MimeType.JSON);
}
