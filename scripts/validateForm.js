const pw = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

pw2.addEventListener('focusout',checkSame);

function checkSame() {
    if (pw.value !== pw2.value) {
        feedback.textContent = "Passwords DO NOT MATCH!";
        feedback.style.visibility = "show";
        pw.style.backgroundColor = "#fff0f3";
        pw2.style.backgroundColor = "#fff0f3";
        pw.value = "";
        pw2.value = "";
        pw.focus();
    } else {
        feedback.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}