
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const spotlightContainer = document.getElementById('spotlight-container');
        const spotlightMembers = getSpotlightMembers(data);
        displaySpotlightMembers(spotlightMembers, spotlightContainer);
    })
    .catch(error => console.error('Error loading member data: ', error));

function getSpotlightMembers(membersData) {
    const qualifiedMembers = membersData.filter(member => member.membership === 'Silver' || member.membership === 'Gold');

    const spotlightMembers = [];
    const numSpotlightMembers = Math.min(3, qualifiedMembers.length);
    for (let i = 0; i< numSpotlightMembers; i++) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        spotlightMembers.push(qualifiedMembers[randomIndex]);
        qualifiedMembers.splice(randomIndex, 1);
    }

    return spotlightMembers;
}

function displaySpotlightMembers(spotlightMembers, container) {
    spotlightMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

        memberElement.innerHTML = `
            <h3>${member.name}</h3>
            <p>Membership Level: ${member.membership}</p>
            <img src="images/${member.image}" alt="${member.name}">
            <p>Contact: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        container.appendChild(memberElement);
    });
}