const darkButton = document.querySelector('#darkmode');
const main = document.querySelector("main");

darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
})