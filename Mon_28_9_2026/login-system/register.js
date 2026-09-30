let registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.querySelector("#fullName").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    let message = document.querySelector("#message");

    if (
        fullName === "" ||
        email === "" ||
        address === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        message.innerText = "Please fill all fields";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExists = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            emailExists = true;
        }
    }

    if (emailExists === true) {
        message.innerText = "Email is already registered";
        return;
    }

    let user = {
        fullName: fullName,
        email: email,
        address: address,
        password: password,
        role: "user",
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    message.innerText = "Registration successful";

    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
});
