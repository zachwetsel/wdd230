
document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
        if (!localStorage.getItem('lastVisit')) {
            document.querySelector('.visit-counter').innerHTML = "Welcome! Let us know if you have any questions.";
        } else {
            var lastVisit = new Date(parseInt(localStorage.getItem('lastVisit')));
            var currentDate = new Date();

            var timeDifference = currentDate.getTime() - lastVisit.getTime();
            var daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

            if (daysDifference === 0) {
                document.querySelector('.visit-counter').innerHTML = "Back so soon! Awesome!";
            } else {
                var message = (daysDifference === 1) ? "day" : "days";
                document.querySelector('.visit-counter').innerHTML = `You last visited ${daysDifference} ${message} ago.`;
            }
        }
        localStorage.setItem('lastVisit', Date.now());
    } else {
        console.log("Sorry, your browser does not support web storage...")
    }
});