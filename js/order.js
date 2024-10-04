
const orderList = [
    {
        customerId: "SL01", customerName: "Kumara Perera", telephoneNumber: "+94 77 123 4567", address: "15 Galle Road, Colombo 03", orderId: "OD01",
        items: [
            { itemId: "B1004", itemName: "Chicken Burger (Large)", quantity: 2, unitPrice: 1400.00 },
            { itemId: "B1027", itemName: "French Fries (Medium)", quantity: 1, unitPrice: 650.00 },
            { itemId: "B10043", itemName: "Pepsi (330 ml)", quantity: 1, unitPrice: 990.00 }
        ],
        totalItems: 4, subTotal: 4440.00, Discount: 49.50, totalAmount: 4390.50
    },
    {
        customerId: "SL02", customerName: "Nirmala Fernando", telephoneNumber: "+94 71 234 5678", address: "42 Kandy Road, Kandy", orderId: "OD02",
        items: [
            { itemId: "B1002", itemName: "Classic Burger (Regular)", quantity: 1, unitPrice: 1500.00 }
        ],
        totalItems: 1, subTotal: 1500.00, Discount: 225.00, totalAmount: 1275.00
    },
    {
        customerId: "SL03", customerName: "Ahmed Farook", telephoneNumber: "+94 76 345 6789", address: "7 Main Street, Galle", orderId: "OD03",
        items: [
            { itemId: "B1015", itemName: "Crispy Chicken Submarine (Large)", quantity: 1, unitPrice: 2000.00 },
            { itemId: "B1024", itemName: "Steak Fries (Large)", quantity: 1, unitPrice: 1200.00 },
            { itemId: "B10045", itemName: "Sprite (330 ml)", quantity: 2, unitPrice: 1500.00 },
            { itemId: "B10037", itemName: "Fried Chicken (Small)", quantity: 1, unitPrice: 1200.00 }
        ],
        totalItems: 5, subTotal: 7400.00, Discount: 90.00, totalAmount: 7310.00
    },
    {
        customerId: "SL04", customerName: "Lakshmi Gunawardena", telephoneNumber: "+94 75 456 7890", address: "23 Temple Road, Nuwara Eliya", orderId: "OD04",
        items: [
            { itemId: "B10030", itemName: "Chicken Cheese Pasta", quantity: 1, unitPrice: 1600.00 },
            { itemId: "B1008", itemName: "Bacon Burger", quantity: 2, unitPrice: 650.00 }
        ],
        totalItems: 3, subTotal: 2900.00, Discount: 435.00, totalAmount: 2465.00
    },
    {
        customerId: "SL05", customerName: "Ravi Bandara", telephoneNumber: "+94 78 567 8901", address: "56 Beach Road, Negombo", orderId: "OD05",
        items: [
            { itemId: "B1026", itemName: "French Fries (Large)", quantity: 1, unitPrice: 800.00 },
            { itemId: "B10044", itemName: "Coca-Cola (330 ml)", quantity: 1, unitPrice: 1230.00 }
        ],
        totalItems: 2, subTotal: 2030.00, Discount: 0, totalAmount: 2030.00
    },
    {
        customerId: "SL06", customerName: "Fathima Hussain", telephoneNumber: "+94 70 678 9012", address: "9 Hill Street, Badulla", orderId: "OD06",
        items: [
            { itemId: "B10037", itemName: "Fried Chicken (Small)", quantity: 1, unitPrice: 1200.00 },
            { itemId: "B10045", itemName: "Sprite (330 ml)", quantity: 1, unitPrice: 1500.00 },
            { itemId: "B1014", itemName: "Paneer Burger", quantity: 1, unitPrice: 900.00 }
        ],
        totalItems: 3, subTotal: 3600.00, Discount: 45.00, totalAmount: 3555.00
    },
    {
        customerId: "SL07", customerName: "Chaminda Silva", telephoneNumber: "+94 77 789 0123", address: "31 Lake Road, Anuradhapura", orderId: "OD07",
        items: [
            { itemId: "B1021", itemName: "Double Cheese Chicken Submarine", quantity: 2, unitPrice: 1900.00 },
            { itemId: "B1029", itemName: "Sweet Potato Fries (Large)", quantity: 1, unitPrice: 600.00 },
            { itemId: "B10043", itemName: "Pepsi (330 ml)", quantity: 2, unitPrice: 990.00 }
        ],
        totalItems: 5, subTotal: 6380.00, Discount: 707.00, totalAmount: 5673.00
    },
    {
        customerId: "SL08", customerName: "Priyanka Rajapaksa", telephoneNumber: "+94 71 890 1234", address: "18 Fort Road, Galle", orderId: "OD08",
        items: [
            { itemId: "B1011", itemName: "Double-cheese Burger", quantity: 1, unitPrice: 1250.00 }
        ],
        totalItems: 1, subTotal: 1250.00, Discount: 250.00, totalAmount: 1000.00
    },
    {
        customerId: "SL09", customerName: "Nalini Wickramasinghe", telephoneNumber: "+94 76 901 2345", address: "5 Temple Street, Kataragama", orderId: "OD09",
        items: [
            { itemId: "B10032", itemName: "Ground Turkey Pasta Bake", quantity: 1, unitPrice: 2900.00 },
            { itemId: "B1027", itemName: "French Fries (Medium)", quantity: 2, unitPrice: 650.00 },
            { itemId: "B10046", itemName: "Mirinda (330 ml)", quantity: 1, unitPrice: 850.00 }
        ],
        totalItems: 4, subTotal: 5050.00, Discount: 349.50, totalAmount: 4700.50
    },
    {
        customerId: "SL10", customerName: "Asanka Jayawardena", telephoneNumber: "+94 75 012 3456", address: "27 Beach Avenue, Trincomalee", orderId: "OD10",
        items: [
            { itemId: "B1013", itemName: "Crispy Chicken Burger (Large)", quantity: 1, unitPrice: 1600.00 },
            { itemId: "B1025", itemName: "Steak Fries (Medium)", quantity: 1, unitPrice: 600.00 },
            { itemId: "B10044", itemName: "Coca-Cola (330 ml)", quantity: 1, unitPrice: 1230.00 }
        ],
        totalItems: 3, subTotal: 3430.00, Discount: 160.00, totalAmount: 3270.00
    },
    {
        customerId: "SL11", customerName: "Dilshan Mendis", telephoneNumber: "+94 78 123 4567", address: "14 Hill Road, Nuwara Eliya", orderId: "OD11",
        items: [
            { itemId: "B1019", itemName: "Grinder Submarine", quantity: 1, unitPrice: 2300.00 },
            { itemId: "B10046", itemName: "Mirinda (330 ml)", quantity: 2, unitPrice: 850.00 },
            { itemId: "B1028", itemName: "French Fries (Small)", quantity: 1, unitPrice: 450.00 }
        ],
        totalItems: 4, subTotal: 4450.00, Discount: 119.00, totalAmount: 4331.00
    },
    {
        customerId: "SL12", customerName: "Shirani De Silva", telephoneNumber: "+94 70 234 5678", address: "39 Main Road, Jaffna", orderId: "OD12",
        items: [
            { itemId: "B1005", itemName: "Chicken Burger (Regular)", quantity: 2, unitPrice: 800.00 }
        ],
        totalItems: 2, subTotal: 1600.00, Discount: 320.00, totalAmount: 1280.00
    },
    {
        customerId: "SL13", customerName: "Mohamed Ismail", telephoneNumber: "+94 77 345 6789", address: "8 Galle Face Terrace, Colombo 03", orderId: "OD13",
        items: [
            { itemId: "B10038", itemName: "Fried Chicken (Regular)", quantity: 1, unitPrice: 2300.00 },
            { itemId: "B10043", itemName: "Pepsi (330 ml)", quantity: 1, unitPrice: 990.00 },
            { itemId: "B1024", itemName: "Steak Fries (Large)", quantity: 1, unitPrice: 1200.00 }
        ],
        totalItems: 3, subTotal: 4490.00, Discount: 279.50, totalAmount: 4210.50
    },
    {
        customerId: "SL14", customerName: "Deepika Perera", telephoneNumber: "+94 71 456 7890", address: "22 Kandy Road, Peradeniya", orderId: "OD14",
        items: [
            { itemId: "B1014", itemName: "Paneer Burger", quantity: 1, unitPrice: 900.00 },
            { itemId: "B1024", itemName: "Steak Fries (Large)", quantity: 1, unitPrice: 1200.00 },
            { itemId: "B10045", itemName: "Sprite (330 ml)", quantity: 1, unitPrice: 1500.00 }
        ],
        totalItems: 3, subTotal: 3600.00, Discount: 45.00, totalAmount: 3555.00
    },
    {
        customerId: "SL15", customerName: "Rohan Gunasekara", telephoneNumber: "+94 76 567 8901", address: "11 Beach Road, Bentota", orderId: "OD15",
        items: [
            { itemId: "B10031", itemName: "Chicken Penne Pasta", quantity: 2, unitPrice: 1700.00 },
            { itemId: "B10045", itemName: "Sprite (330 ml)", quantity: 1, unitPrice: 1500.00 },
            { itemId: "B1029", itemName: "Sweet Potato Fries (Large)", quantity: 1, unitPrice: 600.00 }
        ],
        totalItems: 4, subTotal: 5500.00, Discount: 45.00, totalAmount: 5455.00
    },
    {
        customerId: "SL16", customerName: "Samanthi Ratnayake", telephoneNumber: "+94 75 678 9012", address: "45 Temple Street, Polonnaruwa", orderId: "OD16",
        items: [
            { itemId: "B1017", itemName: "Chicken Submarine (Large)", quantity: 1, unitPrice: 1800.00 },
            { itemId: "B1026", itemName: "French Fries (Large)", quantity: 1, unitPrice: 800.00 },
            { itemId: "B10044", itemName: "Coca-Cola (330 ml)", quantity: 2, unitPrice: 1230.00 }
        ],
        totalItems: 4, subTotal: 5060.00, Discount: 54.00, totalAmount: 5006.00
    },
    {
        customerId: "SL17", customerName: "Tariq Jameel", telephoneNumber: "+94 78 789 0123", address: "3 Main Street, Kalmunai", orderId: "OD17",
        items: [
            { itemId: "B10040", itemName: "Hot Wings (Large)", quantity: 1, unitPrice: 2400.00 },
            { itemId: "B10044", itemName: "Coca-Cola (330 ml)", quantity: 2, unitPrice: 1230.00 },
            { itemId: "B1028", itemName: "French Fries (Small)", quantity: 1, unitPrice: 450.00 }
        ],
        totalItems: 4, subTotal: 5310.00, Discount: 0, totalAmount: 5310.00
    },
    {
        customerId: "SL18", customerName: "Ayesha Munasinghe", telephoneNumber: "+94 70 890 1234", address: "17 Hill Road, Hatton", orderId: "OD18",
        items: [
            { itemId: "B1009", itemName: "Shawarma Burger", quantity: 1, unitPrice: 800.00 },
            { itemId: "B1027", itemName: "French Fries (Medium)", quantity: 1, unitPrice: 650.00 },
            { itemId: "B10043", itemName: "Pepsi (330 ml)", quantity: 1, unitPrice: 990.00 }
        ],
        totalItems: 3, subTotal: 2440.00, Discount: 49.50, totalAmount: 2390.50
    },
    {
        customerId: "SL19", customerName: "Lasith Malinga", telephoneNumber: "+94 77 901 2345", address: "29 Galle Road, Matara", orderId: "OD19",
        items: [
            { itemId: "B10035", itemName: "Tagliatelle Chicken Pasta", quantity: 1, unitPrice: 2400.00 },
            { itemId: "B10046", itemName: "Mirinda (330 ml)", quantity: 2, unitPrice: 850.00 }
        ],
        totalItems: 3, subTotal: 4100.00, Discount: 143.00, totalAmount: 3957.00
    },
    {
        customerId: "SL20", customerName: "Chandrika Kumaratunga", telephoneNumber: "+94 71 012 3456", address: "6 Lake View Drive, Kurunegala", orderId: "OD20",
        items: [
            { itemId: "B1023", itemName: "MOS Special Submarine", quantity: 1, unitPrice: 3000.00 },
            { itemId: "B1029", itemName: "Sweet Potato Fries (Large)", quantity: 1, unitPrice: 600.00 }
        ],
        totalItems: 2, subTotal: 3600.00, Discount: 0, totalAmount: 3600.00
    }
];

window.onload = function () {
    renderOrderList();
}

function renderOrderList() {
    const orderListContainer = document.getElementById('order-list');
    orderListContainer.innerHTML = '';

    if (orderList) {
        orderList.forEach((order, index) => {
            const orderCard = document.createElement('div');
            orderCard.className = 'col-12 mb-3';
            orderCard.innerHTML = `
                    <div class="row card order-card m-0" onclick="addToTextField(${index})">
                        <div class="col-7 card-body">
                            <h6 class="card-title">Customer ID: ${order.customerId}</h6>
                            <p class="card-text mb-0">Name: ${order.customerName}</p>
                            <p class="card-text mb-0">Telephone No: ${order.telephoneNumber}</p>
                            <p class="card-text">Address: ${order.address}</p>
                        </div>
                        <div class="col-5 card-body">
                            <h6 class="card-title">Order ID: ${order.orderId}</h6>
                            <p class="card-text mb-0">Total Items: ${order.totalItems}</p>
                            <p class="card-text mb-0">Sub Total: ${order.subTotal}</p>
                            <p class="card-text mb-0">Discount: ${order.Discount}</p>
                            <p class="card-text">Total Amount: ${order.totalAmount}</p>
                        </div>
                    </div>`;
            orderListContainer.appendChild(orderCard);
        });
    }
}

function searchOrders() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const orderListContainer = document.getElementById("order-list");
    orderListContainer.innerHTML = '';

    if (orderList) {
        const filterOrder = orderList.filter((order) => {
            return order.customerName.toLowerCase().includes(searchTerm);
        });

        filterOrder.forEach((order, index) => {
            const orderCard = document.createElement('div');
            orderCard.className = 'col-12 mb-3';
            orderCard.innerHTML = `
                    <div class="row card order-card m-0" onclick="addToTextField(${index})">
                        <div class="col-7 card-body" >
                            <h6 class="card-title">Customer ID: ${order.customerId}</h6>
                            <p class="card-text mb-0">Name: ${order.customerName}</p>
                            <p class="card-text mb-0">Telephone No: ${order.telephoneNumber}</p>
                            <p class="card-text">Address: ${order.address}</p>
                        </div>
                        <div class="col-5 card-body" >
                            <h6 class="card-title">Order ID: ${order.orderId}</h6>
                            <p class="card-text mb-0">Total Items: ${order.totalItems}</p>
                            <p class="card-text mb-0">Sub Total: ${order.subTotal}</p>
                            <p class="card-text mb-0">Discount: ${order.Discount}</p>
                            <p class="card-text">Total Amount: ${order.totalAmount}</p>
                        </div>
                    </div>`;
            orderListContainer.appendChild(orderCard);
        });
    }
}
document.getElementById('search-bar').addEventListener("input", searchOrders);

function addToTextField(index) {
    const order = orderList[index];
    if (order) {
        document.getElementById('custID').innerHTML = order.customerId;
        document.getElementById('customer-nameO').innerHTML = order.customerName;
        document.getElementById('customer-teleO').innerHTML = order.telephoneNumber;
        document.getElementById('customer-addressO').innerHTML = order.address;

        const orderListContainer = document.getElementById('item-list');
        orderListContainer.innerHTML = '';
        const items = order.items;
        items.forEach((item, index) => {
            const orderItem = document.createElement('div');
            orderItem.className = 'ordered-item d-flex justify-content-between m-3';
            orderItem.innerHTML = `
                <div class="col-7" >
                    <p class="m-2">Item ID: ${item.itemId}</p>
                    <p class="m-2">Item Name: ${item.itemName}</p>
                </div>
                <div class="col-5" >
                    <p class="m-2">Quantity: ${item.quantity}</p>
                    <p class="m-2">Unit Price:  ${item.unitPrice} LKR</p>
                </div>`;
            orderListContainer.appendChild(orderItem);
        });
    } else {
        console.error("Order not found at index: " + index);
    }
}

function deleteOrder() {
    const customerId = document.getElementById('custID').textContent;
    if (customerId) {
        const index = orderList.findIndex(order => order.customerId === customerId);
        if (index !== -1) {
            orderList.splice(index, 1);
            document.getElementById('custID').innerHTML = '';
            document.getElementById('customer-nameO').innerHTML = '';
            document.getElementById('customer-teleO').innerHTML = '';
            document.getElementById('customer-addressO').innerHTML = '';
            document.getElementById('item-list').innerHTML = '';
            console.log("Order deleted successfully.");
            searchOrders();
        } else {
            console.error("Order not found with ID: " + customerId);
        }
    } else {
        console.error("No order selected for deletion.");
    }
}
