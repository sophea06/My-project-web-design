const roles = ["Web Developer", "Software Developer", "Quality Assurance & Testing", "UX & UI Designer", "IT Support & Network", "Cybersecurity Analyst", "DevOps Engineer"];
let index = 0;
const roleElement = document.getElementById("role");

function changeRole() {
    roleElement.textContent = roles[index];
    index = (index + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2000);