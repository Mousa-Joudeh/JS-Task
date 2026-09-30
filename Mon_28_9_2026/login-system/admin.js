let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser === null) {
    window.location.href = "login.html";
} else if (currentUser.role !== "admin") {
    window.location.href = "dashboard.html";
}

let users = JSON.parse(localStorage.getItem("users")) || [];

let usersList = document.querySelector("#usersList");

for (let i = 0; i < users.length; i++) {
    usersList.innerHTML += `
        <div class="user-card">

            <h3>${users[i].fullName}</h3>

            <p>Email: ${users[i].email}</p>

            <p>Address: ${users[i].address}</p>

            <p>Role: ${users[i].role}</p>

        </div>
    `;
}

let logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", function () {
    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
});
