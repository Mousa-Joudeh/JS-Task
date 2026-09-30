let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser === null) {
    window.location.href = "login.html";
} else {
    let userInfo = document.querySelector("#userInfo");

    userInfo.innerHTML = `
        <h3>Welcome ${currentUser.fullName}</h3>

        <p>Email: ${currentUser.email}</p>

        <p>Address: ${currentUser.address}</p>

        <p>Role: ${currentUser.role}</p>
    `;
}

let logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", function () {
    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
});
