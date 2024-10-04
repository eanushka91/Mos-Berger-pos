let productList = {
    "Burgers": [
        { itemCode: "B1001", name: "Classic Burger (Large)", price: 750.00, discount: 0, img: "img/burgers/Classic Burger.jpg" },
        { itemCode: "B1002", name: "Classic Burger (Regular)", price: 1500.00, discount: 15, img: "img/burgers/Classic Burger1.jpg" },
        { itemCode: "B1003", name: "Turkey Burger", price: 1600.00, discount: 0, img: "img/burgers/Turkey Burger.webp" },
        { itemCode: "B1004", name: "Chicken Burger (Large)", price: 1400.00, discount: 0, img: "img/burgers/Chicken Burger.jpg" },
        { itemCode: "B1005", name: "Chicken Burger (Regular)", price: 800.00, discount: 20, img: "img/burgers/Chicken Burger1.webp" },
        { itemCode: "B1006", name: "Cheese Burger (Large)", price: 1000.00, discount: 0, img: "img/burgers/Cheese Burger.webp" },
        { itemCode: "B1007", name: "Cheese Burger (Regular)", price: 600.00, discount: 0, img: "img/burgers/Cheese Burger1.avif" },
        { itemCode: "B1008", name: "Bacon Burger", price: 650.00, discount: 15, img: "img/burgers/Bacon Burger.jpeg" },
        { itemCode: "B1009", name: "Shawarma Burger", price: 800.00, discount: 0, img: "img/burgers/Shawarma Burger.avif" },
        { itemCode: "B1010", name: "Olive Burger", price: 1800.00, discount: 0, img: "img/burgers/Olive Burger.jpg" },
        { itemCode: "B1011", name: "Double-cheese Burger", price: 1250.00, discount: 20, img: "img/burgers/Double-cheese Burger.webp" },
        { itemCode: "B1012", name: "Crispy Chicken Burger (Regular)", price: 1200.00, discount: 0, img: "img/burgers/Crispy Chicken Burger.webp" },
        { itemCode: "B1013", name: "Crispy Chicken Burger (Large)", price: 1600.00, discount: 10, img: "img/burgers/Crispy Chicken Burger1.webp" },
        { itemCode: "B1014", name: "Paneer Burger", price: 900.00, discount: 0, img: "img/burgers/Paneer Burger.webp" }
    ],
    
    "Submarines": [ 
        { itemCode: "B1015", name: "Crispy Chicken Submarine (Large)", price: 2000.00, discount: 0, img: "img/submarines/Crispy Chicken Submarine.png" },
        { itemCode: "B1016", name: "Crispy Chicken Submarine (Regular)", price: 1500.00, discount: 0, img: "img/submarines/Crispy Chicken Submarine1.jpg" },
        { itemCode: "B1017", name: "Chicken Submarine (Large)", price: 1800.00, discount: 3, img: "img/submarines/Chicken Submarine2.webp" },
        { itemCode: "B1018", name: "Chicken Submarine (Regular)", price: 1400.00, discount: 0, img: "img/submarines/Chicken Submarine.webp" },
        { itemCode: "B1019", name: "Grinder Submarine", price: 2300.00, discount: 0, img: "img/submarines/Grinder Submarine.jpg" },
        { itemCode: "B1020", name: "Cheese Submarine", price: 2200.00, discount: 0, img: "img/submarines/Cheese Submarine.jpeg" },
        { itemCode: "B1021", name: "Double Cheese Chicken Submarine", price: 1900.00, discount: 16, img: "img/submarines/Double Cheese Chicken Submarine.jpg" },
        { itemCode: "B1022", name: "Special Horgie Submarine", price: 2800.00, discount: 0, img: "img/submarines/Special Horgie Submarine.avif" },
        { itemCode: "B1023", name: "MOS Special Submarine", price: 3000.00, discount: 0, img: "img/submarines/MOS Special Submarine.jpg" }
    ],
    "Fries": [
        { itemCode: "B1024", name: "Steak Fries (Large)", price: 1200.00, discount: 0, img: "img/fries/Steak Fries1.webp" },
        { itemCode: "B1025", name: "Steak Fries (Medium)", price: 600.00, discount: 0, img: "img/fries/Steak Fries.jpeg" },
        { itemCode: "B1026", name: "French Fries (Large)", price: 800.00, discount: 0, img: "img/fries/French Fries1.jpg" },
        { itemCode: "B1027", name: "French Fries (Medium)", price: 650.00, discount: 0, img: "img/fries/French Fries.webp" },
        { itemCode: "B1028", name: "French Fries (Small)", price: 450.00, discount: 0, img: "img/fries/French Fries2.webp" },
        { itemCode: "B1029", name: "Sweet Potato Fries (Large)", price: 600.00, discount: 0, img: "img/fries/Sweet Potato Fries.webp" }
    ],
    "Pasta": [
        { itemCode: "B10030", name: "Chicken Cheese Pasta", price: 1600.00,discount: 15, img: "img/pasta/Chicken Cheese Pasta.webp" },
        { itemCode: "B10031", name: "Chicken Penne Pasta", price: 1700.00,discount: 0, img: "img/pasta/Chicken Penne Pasta.webp" },
        { itemCode: "B10032", name: "Ground Turkey Pasta Bake", price: 2900.00,discount: 10, img: "img/pasta/Ground Turkey Pasta Bake.webp" },
        { itemCode: "B10033", name: "Creamy Shrimp Pasta", price: 2000.00,discount: 0, img: "img/pasta/Creamy Shrimp Pasta.jpg" },
        { itemCode: "B10034", name: "Lemon Butter Pasta", price: 1950.00,discount: 0, img: "img/pasta/Lemon Butter Pasta.avif" },
        { itemCode: "B10035", name: "Tagliatelle Chicken Pasta", price: 2400.00,discount: 1, img: "img/pasta/Tagliatelle Chicken Pasta.jpg" },
        { itemCode: "B10036", name: "Baked Ravioli", price: 2000.00,discount: 1, img: "img/pasta/Baked Ravioli.webp" }
    ],
    "Chicken": [
        { itemCode: "B10037", name: "Fried Chicken (Small)", price: 1200.00,discount: 0, img: "img/chicken/Fried Chicken.webp" },
        { itemCode: "B10038", name: "Fried Chicken (Regular)", price: 2300.00,discount: 10, img: "img/chicken/Fried ChickenR.webp" },
        { itemCode: "B10039", name: "Fried Chicken (Large)", price: 3100.00,discount: 5, img: "img/chicken/Fried ChickenL.jpg" },
        { itemCode: "B10040", name: "Hot Wings (Large)", price: 2400.00,discount: 0, img: "img/chicken/Hot Wings.webp" },
        { itemCode: "B10041", name: "Devilled Chicken (Large)", price: 900.00,discount: 0, img: "img/chicken/Devilled Chicken.jpeg" },
        { itemCode: "B10042", name: "BBQ Chicken (Regular)", price: 2100.00,discount: 0, img: "img/chicken/BBQ Chicken.webp" }
    ],
    "Beverages": [
        { itemCode: "B10043", name: "Pepsi (330 ml)", price: 990.00,discount: 5, img: "img/beverages/pepsi (330ml).webp" },
        { itemCode: "B10044", name: "Coca-Cola (330 ml)", price: 1230.00,discount: 0, img: "img/beverages/coca-cola(300ml).webp" },
        { itemCode: "B10045", name: "Sprite (330 ml)", price: 1500.00,discount: 3, img: "img/beverages/sprite(300ml).jpg" },
        { itemCode: "B10046", name: "Mirinda (330 ml)", price: 850.00,discount: 7, img: "img/beverages/mirinda(300ml).jpg" }
    ]
};

let currentCategory = "Burgers";

function renderProductList(category) {
    currentCategory = category;
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = "";

    if (productList[category]) {
        productList[category].forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.className = "col-md-3 mb-3";
            productCard.innerHTML = `
                <div class="card product-card m-0 align-items-center" style=" height: 170px;" onclick="addToOrderList(${index})">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title">${product.name}</h6>
                    <p class="card-text product-price">${product.price.toFixed(2)} LKR</p>
                </div>
            </div>`;
            productListContainer.appendChild(productCard);
        });
    }
}

function searchProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = "";

    Object.keys(productList).forEach(category => {
        productList[category].forEach((product, index) => {
            if (product.name.toLowerCase().includes(searchInput)) {
                const productCard = document.createElement("div");
                productCard.className = "col-md-3 mb-3";
                productCard.innerHTML = `
                    <div class="card product-card align-items-center" onclick="addToOrderList(${index})">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h6 class="card-title">${product.name}</h6>
                        <p class="card-text product-price">${product.price.toFixed(2)} LKR</p>
                    </div>
                </div>`;
                productListContainer.appendChild(productCard);
            }
        });
    });
}

document.getElementById('search-bar').addEventListener('input', searchProducts);

window.onload = function() {
    console.log("onload");
    renderProductList(currentCategory);
}

document.getElementById('Burgers').addEventListener("click", renderProductList.bind(null, "Burgers"));
document.getElementById('Submarines').addEventListener("click", renderProductList.bind(null, "Submarines"));
document.getElementById('Fries').addEventListener("click", renderProductList.bind(null, "Fries"));
document.getElementById('Pasta').addEventListener("click", renderProductList.bind(null, "Pasta"));
document.getElementById('Chicken').addEventListener("click", renderProductList.bind(null, "Chicken"));
document.getElementById('Beverages').addEventListener("click", renderProductList.bind(null, "Beverages"));




function generateNextItemCode() {
    return `SL${productList.length + 1}`;
}

function nextitemcode(){
    const nextitemcode = generateNextItemCode();
    document.getElementById('itemcode').value = nextitemcode; 
}


function addItem() {
    const itemname = document.getElementById('itemname').value;
    const itemcode = document.getElementById('itemcode').value;
    const itemprice = document.getElementById('itemprice').value;
    const discount = document.getElementById('discount').value;

    if (!itemname || !itemcode || !itemprice || !discount) {
        console.error("All fields are required");
        alert("All fields are required");
        return;
    }

    const nextitemcode = generateNextItemCode();
    const newitem = {
        itemname: itemname,
        itemcode: nextitemcode,
        itemprice: itemprice,
        discount: discount,
        img: "../img/img/profile.png"
    };

    productList.push(newitem);
    localStorage.setItem('productList', JSON.stringify(productList));
    alert("Product added successfully!");
    searchProducts(); 
    document.getElementById('itemcode').value = nextitemcode;
}




function deleteitem() {
    const itemcode = document.getElementById('itemcode').value;
    console.log(itemcode);

    if (!itemcode) {
        console.error("Item Code is required");
        alert("Item Code is required");
        return;
    }

    let index = -1; 
    productList[currentCategory].forEach((product, id) => {
        if(product.itemCode === itemcode){
            index = id;
        }
    });

    console.log(index);
    if (index != -1) {
        productList[currentCategory].splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(productList));
        alert("Product deleted successfully!");
        searchProducts();
        document.getElementById('itemname').value = '';
        document.getElementById('itemcode').value = '';
        document.getElementById('itemprice').value = '';
        document.getElementById('discount').value = '';
    } else {
        console.error("Product not found with Code: " + itemcode);
        alert("Product not found with Code: " + itemcode);
    }
}