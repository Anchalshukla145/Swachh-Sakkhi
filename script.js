// Signup Function
function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name === "" || email === "" || password === "") {
        document.getElementById('signup-msg').innerText = "All fields are required!";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        document.getElementById('signup-msg').innerText = "User already exists!";
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('signup-msg').innerText = "Registration Successful!";
    }
}

// Login Function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        document.getElementById('login-msg').innerText = "Login Successful!";
    } else {
        document.getElementById('login-msg').innerText = "Invalid Credentials!";
    }
}
