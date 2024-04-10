
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

function displayMembers(members) {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member-card');

        memberElement.innerHTML =`
        <h3>${member.name}</h3>
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membership}</p>
        <img src="images/${member.image}" alt="${member.name}">
        `;

        directory.appendChild(memberElement);
    });
}

function toggleView(view) {
    const directory = document.getElementById('directory');
    if (view === 'grid') {
        directory.classList.remove('member-list');
    } else {
        directory.classList.add('member-list');
    }
}

window.onload = function() {
    loadMembers();
};