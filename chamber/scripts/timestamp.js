
function setTimestamp() {
    var timestampField = document.getElementById("timestamp");
    var currentDate = new Date().toISOString();
    timestampField.value = currentDate;
}

window.onload = setTimestamp;