let users = JSON.parse(localStorage.getItem('users')) || [];
function addUser(name, contactNumber, email,  password) {
    
    // if (!name || !contactNumber || !email || !password) {
    //     console.error("All fields are required");
    //     alert("All fields are required");
    //     return false;
    // }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("User with this email already exists");
        return false;
    }

    users.push({
        name: name,
        contactNumber: contactNumber,
        email: email,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users));

    return true;
}

if (users.length === 0) {
    addUser("Employee", "+94771234567", "Employee@example.com", "123");
}

console.log("Current users:", users);

function regLetsGo() {
    let userDetails = {
        name: document.getElementById("regName").value.trim(),
        contactNumber: document.getElementById("regContactNumber").value.trim(),
        email: document.getElementById("regEmail").value.trim(),
        password: document.getElementById("regPassword").value
    };
    
    if (addUser(userDetails.name, userDetails.contactNumber, userDetails.email, userDetails.address, userDetails.password)) {
        document.getElementById("regName").value = "";
        document.getElementById("regContactNumber").value = "";
        document.getElementById("regEmail").value = "";
        document.getElementById("regPassword").value = "";

        alert("User registered successfully!");
        window.location.href = "../html/placeorder.html";
        renderProductList('Burgers');
    } else {
        alert("Registration failed. Please check your inputs and try again.");
    }
}

function regClear() {
    document.getElementById("regName").value = "";
    document.getElementById("regContactNumber").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPassword").value = "";
}

function loginLetsGo() {
    let name = document.getElementById("logName").value.trim();
    let password = document.getElementById("logPassword").value;
    let user = users.find(user => user.name === name && user.password === password);
    if (user) {
        window.location.href = "../html/placeorder.html";
        renderProductList('Burgers');
    } else {
        alert("Invalid credentials. Please try again.");
    }
}