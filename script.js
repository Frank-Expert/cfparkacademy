// Dummy data for teams and fixtures
const teams = [
    { name: "U13 Team", coach: "Coach James" },
    { name: "U15 Team", coach: "Coach Sarah" },
    { name: "U17 Team", coach: "Coach John" }
];

const fixtures = [
    { date: "2024-10-05", opponent: "Lakeside FC", location: "CF Park Stadium" },
    { date: "2024-10-12", opponent: "Hilltop United", location: "Hilltop Arena" }
];

// Populate teams
const teamList = document.getElementById('team-list');
teams.forEach(team => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${team.name}</strong> - Coach: ${team.coach}`;
    teamList.appendChild(div);
});

// Populate fixtures
const fixturesList = document.getElementById('fixtures-list');
fixtures.forEach(fixture => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>Date:</strong> ${fixture.date}, <strong>Opponent:</strong> ${fixture.opponent}, <strong>Location:</strong> ${fixture.location}`;
    fixturesList.appendChild(div);
});


function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}
