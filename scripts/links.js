const baseURL = "https://zachwetsel.github.io/wdd230/";
const linksURL = "https://zachwetsel.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data[0].weeks);
}
getLinks();

function displayLinks(weeks) {
    const activitiesList= document.getElementById("activities-list");
    activitiesList.innerHTML = "";

    weeks.forEach((week) => {
        const weekNumber = week.week;
        const weekLinks = week.links;

        const weekListItem = document.createElement("li");
        const weekTitle = document.createElement("h3");
        weekTitle.textContent = weekNumber;
        weekListItem.appendChild(weekTitle);

        const linksList = document.createElement("ul");
        weekLinks.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.textContent = link.title;
            anchor.href = `${baseURL}${link.url}`;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekListItem.appendChild(linksList);
        activitiesList.appendChild(weekListItem);
    });
}