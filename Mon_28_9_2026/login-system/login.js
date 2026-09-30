let users = JSON.parse(localStorage.getItem("users")) || [];

let adminExists = false;

for (let i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
        adminExists = true;
    }
}

if (adminExists === false) {
    let admin = {
        fullName: "Admin",
        email: "admin@gmail.com",
        address: "Amman",
        password: "admin123",
        role: "admin",
    };

    users.push(admin);

    localStorage.setItem("users", JSON.stringify(users));
}
let loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let message = document.querySelector("#message");

    if (email === "" || password === "") {
        message.innerText = "Please fill all fields";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            currentUser = users[i];
        }
    }

    if (currentUser === null) {
        message.innerText = "Email or password is incorrect";
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    message.innerText = "Login successful!";

    if (currentUser.role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "dashboard.html";
    }
});
