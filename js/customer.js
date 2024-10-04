const customerList = [
    { customerId: "SL01", customerName: "Kumara Perera", telephoneNumber: "+94 77 123 4567", address: "15 Galle Road, Colombo 03", img: "../img/img/profile.png" },
    { customerId: "SL02", customerName: "Nirmala Fernando", telephoneNumber: "+94 71 234 5678", address: "42 Kandy Road, Kandy", img: "../img/img/profile.png" },
    { customerId: "SL03", customerName: "Ahmed Farook", telephoneNumber: "+94 76 345 6789", address: "7 Main Street, Galle", img: "../img/img/profile.png" },
    { customerId: "SL04", customerName: "Lakshmi Gunawardena", telephoneNumber: "+94 75 456 7890", address: "23 Temple Road, Nuwara Eliya", img: "../img/img/profile.png"},
    { customerId: "SL05", customerName: "Ravi Bandara", telephoneNumber: "+94 78 567 8901", address: "56 Beach Road, Negombo", img: "../img/img/profile.png"},
    { customerId: "SL06", customerName: "Fathima Hussain", telephoneNumber: "+94 70 678 9012", address: "9 Hill Street, Badulla", img: "../img/img/profile.png"},
    { customerId: "SL07", customerName: "Chaminda Silva", telephoneNumber: "+94 77 789 0123", address: "31 Lake Road, Anuradhapura", img: "../img/img/profile.png"},
    { customerId: "SL08", customerName: "Priyanka Rajapaksa", telephoneNumber: "+94 71 890 1234", address: "18 Fort Road, Galle", img: "../img/img/profile.png"},
    { customerId: "SL09", customerName: "Nalini Wickramasinghe", telephoneNumber: "+94 76 901 2345", address: "5 Temple Street, Kataragama", img: "../img/img/profile.png"},
    { customerId: "SL10", customerName: "Asanka Jayawardena", telephoneNumber: "+94 75 012 3456", address: "27 Beach Avenue, Trincomalee", img: "../img/img/profile.png"},
    { customerId: "SL11", customerName: "Dilshan Mendis", telephoneNumber: "+94 78 123 4567", address: "14 Hill Road, Nuwara Eliya", img: "../img/img/profile.png"},
    { customerId: "SL12", customerName: "Shirani De Silva", telephoneNumber: "+94 70 234 5678", address: "39 Main Road, Jaffna", img: "../img/img/profile.png"},
    { customerId: "SL13", customerName: "Mohamed Ismail", telephoneNumber: "+94 77 345 6789", address: "8 Galle Face Terrace, Colombo 03", img: "../img/img/profile.png"},
    { customerId: "SL14", customerName: "Deepika Perera", telephoneNumber: "+94 71 456 7890", address: "22 Kandy Road, Peradeniya", img: "../img/img/profile.png"},
    { customerId: "SL15", customerName: "Rohan Gunasekara", telephoneNumber: "+94 76 567 8901", address: "11 Beach Road, Bentota", img: "../img/img/profile.png"},
    { customerId: "SL16", customerName: "Samanthi Ratnayake", telephoneNumber: "+94 75 678 9012", address: "45 Temple Street, Polonnaruwa", img: "../img/img/profile.png"},
    { customerId: "SL17", customerName: "Tariq Jameel", telephoneNumber: "+94 78 789 0123", address: "3 Main Street, Kalmunai", img: "../img/img/profile.png"},
    { customerId: "SL18", customerName: "Ayesha Munasinghe", telephoneNumber: "+94 70 890 1234", address: "17 Hill Road, Hatton", img: "../img/img/profile.png"},
    { customerId: "SL19", customerName: "Lasith Malinga", telephoneNumber: "+94 77 901 2345", address: "29 Galle Road, Matara", img: "../img/img/profile.png"},
    { customerId: "SL20", customerName: "Chandrika Kumaratunga", telephoneNumber: "+94 71 012 3456", address: "6 Lake View Drive, Kurunegala", img: "../img/img/profile.png"},
];

window.onload = function() {
    renderCustomerList();
    nextCustomerId();
}

function renderCustomerList() {
    const customerListContainer = document.getElementById('customer-list');
    customerListContainer.innerHTML = '';

    if (customerList) {
        customerList.forEach((customer, index) => {
            const customerCard = document.createElement('div');
            customerCard.className = 'col-12 mb-3';
            customerCard.innerHTML = `
                <div class="row card customer-card m-0" onclick="addToTextField(${index})">
                    <div class="col-4">
                        <img src="${customer.img}" class="card-img"  alt="${customer.customerName}">
                    </div>
                    <div class="col-8 card-body">
                        <h6 class="card-title">Customer ID: ${customer.customerId}</h6>
                        <p class="card-text mb-0">Name: ${customer.customerName}</p>
                        <p class="card-text mb-0">Telephone No: ${customer.telephoneNumber}</p>
                        <p class="card-text">Address: ${customer.address}</p>
                    </div>
                </div>`;
            customerListContainer.appendChild(customerCard);
        });
    }
}

function searchCustomers() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const customerListContainer = document.getElementById("customer-list");
    customerListContainer.innerHTML = "";

    if (customerList) {
        const filterCustomer = customerList.filter((customer) => {
            return customer.customerName.toLowerCase().includes(searchTerm);
        });
        
        filterCustomer.forEach((customer, index) => {
            const customerCard = document.createElement('div');
            
            customerCard.className = 'col-12 mb-3';
            customerCard.innerHTML = `
                <div class="row card customer-card m-0" onclick="addToTextField(${index})">
                    <div class="col-4">
                        <img src="${customer.img}" class="card-img"  alt="${customer.customerName}">
                    </div>
                    <div class="col-8 card-body">
                        <h6 class="card-title">Customer ID: ${customer.customerId}</h6>
                        <p class="card-text mb-0">Name: ${customer.customerName}</p>
                        <p class="card-text mb-0">Telephone No: ${customer.telephoneNumber}</p>
                        <p class="card-text">Address: ${customer.address}</p>
                    </div>
                </div>`;
                
            customerListContainer.appendChild(customerCard);
        });
    }
}
document.getElementById('search-bar').addEventListener("input", searchCustomers);

function addToTextField(index) {
    const customer = customerList[index];
    if (customer) {
        document.getElementById('customer-id').value = customer.customerId;
        document.getElementById('customer-name').value = customer.customerName;
        document.getElementById('customer-tele').value = customer.telephoneNumber;
        document.getElementById('customer-address').value = customer.address;
    } else {
        console.error("Customer not found at index: " + index);
    }
}

function generateNextCustomerId() {
    return `SL${customerList.length + 1}`;
}

function nextCustomerId(){
    const nextCustomerId = generateNextCustomerId();
    document.getElementById('customer-id').value = nextCustomerId; 
}

function addCustomer() {
    const customerId = document.getElementById('customer-id').value;
    const customerName = document.getElementById('customer-name').value;
    const customerTele = document.getElementById('customer-tele').value;
    const customerAddress = document.getElementById('customer-address').value;

    if (!customerId || !customerName || !customerTele || !customerAddress) {
        console.error("All fields are required");
        alert("All fields are required");
        return;
    }

    const nextCustomerId = generateNextCustomerId();
    const newCustomer = {
        customerId: nextCustomerId,
        customerName: customerName,
        telephoneNumber: customerTele,
        address: customerAddress,
        img: "../img/user.webp"
    };

    customerList.push(newCustomer);
    localStorage.setItem('customerList', JSON.stringify(customerList));
    alert("Customer added successfully!");
    searchCustomers(); 
    document.getElementById('customer-id').value = nextCustomerId;
}

function updateCustomer() {
    const customerId = document.getElementById('customer-id').value;
    const customerName = document.getElementById('customer-name').value;
    const customerTele = document.getElementById('customer-tele').value;
    const customerAddress = document.getElementById('customer-address').value;

    if (!customerId || !customerName || !customerTele || !customerAddress) {
        console.error("All fields are required");
        alert("All fields are required");
        return;
    }

    const index = customerList.findIndex(customer => customer.customerId === customerId);
    if (index !== -1) {
        customerList[index].customerName = customerName;
        customerList[index].telephoneNumber = customerTele;
        customerList[index].address = customerAddress;
        localStorage.setItem('customerList', JSON.stringify(customerList));
        alert("Customer updated successfully!");
        searchCustomers();
    } else {
        console.error("Customer not found with ID: " + customerId);
        alert("Customer not found with ID: " + customerId);
    }
}

function deleteCustomer() {
    const customerId = document.getElementById('customer-id').value;

    if (!customerId) {
        console.error("Customer ID is required");
        alert("Customer ID is required");
        return;
    }

    const index = customerList.findIndex(customer => customer.customerId === customerId);
    if (index !== -1) {
        customerList.splice(index, 1);
        localStorage.setItem('customerList', JSON.stringify(customerList));
        alert("Customer deleted successfully!");
        searchCustomers();
        document.getElementById('customer-id').value = '';
        document.getElementById('customer-name').value = '';
        document.getElementById('customer-tele').value = '';
        document.getElementById('customer-address').value = '';
    } else {
        console.error("Customer not found with ID: " + customerId);
        alert("Customer not found with ID: " + customerId);
    }
}