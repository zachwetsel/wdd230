
document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('meet-and-greet-banner');
    const closeButton = document.getElementById('close-banner-btn');

    function isMeetAndGreetDay() {
        const today = new Date();
        const dayOfWeek = today.getDay();
        return dayOfWeek >= 1 && dayOfWeek <3;
    }

    if (isMeetAndGreetDay()) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', function () {
        banner.style.display = 'none';
    });
});