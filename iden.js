const users = [
    { username: "anchal", password: "anvis" },
    { username: "aditya", password: "adii" },
    { username: "shruti", password: "shruti" }
];

// Function to handle login
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert("Login successful!");
        // You can redirect here if needed
        window.location.href = "Idx.html"; // Replace with your page
    } else {
        alert("Invalid username or password");
    }
}
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
        return ;
    }
}

// Event listener for login button
document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get username and password from form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Call the login function
    login(username, password);
    signup();
});