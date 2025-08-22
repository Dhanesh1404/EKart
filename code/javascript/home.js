let productcnt = document.getElementById("productcnt");

fetch("https://dummyjson.com/products").then((res) => {
    return res.json();
}).then((data) => {
    console.log(data.products);
    localStorage.setItem("products", JSON.stringify(data.products))


    fetchData(data.products)
})
function fetchData(p) {
    let input = ""
    p.map((value) => {
        input += `
        <div class="product_box">
        <img src=${value.images[0]} alt=${value.title}/>
        <h4>${value.title}</h4>
        <div class = "priceContainer">
                    <p id="productPrice">${value.price}</p>
                   
                    <p id="productRating">${value.rating}</p>
                </div>
        <p><b>Id:-</b>${value.id}</b></p>
        <div >
        <button class="btnView" onclick="handleBtn(${value.id})">view more</button>
         </div>
        </div>
         </div>
        `
    })
    productcnt.innerHTML = input
}

function handleBtn(id) {
    localStorage.setItem("productId", id)
    window.location.href = "productview.html"
}

const groceries = document.getElementById("groceries")
const groceriespd = document.getElementById("groceriesproduct")

groceries.addEventListener("mouseover", () => {
    groceriespd.style.display = "block";
})

groceriespd.addEventListener("mouseout", () => {
    setTimeout(() => {
        groceriespd.style.display = "none"
    }, 2000)
})


const mobile = document.getElementById("mobile")
const mobilepd = document.getElementById("mobileproduct")
mobile.addEventListener("mouseover", () => {
    mobilepd.style.display = "block";
})

mobilepd.addEventListener("mouseout", () => {
    setTimeout(() => {
        mobilepd.style.display = "none"
    }, 2000)
})

const furniture = document.getElementById("furniture")
const furniturepd = document.getElementById("furnitureproduct")
furniture.addEventListener("mouseover", () => {
    furniturepd.style.display = "block";
})

furniturepd.addEventListener("mouseout", () => {
    setTimeout(() => {
        furniturepd.style.display = "none"
    }, 2000)
})


const electronic = document.getElementById("electronic")
const electronicpd = document.getElementById("electronicproduct")
electronic.addEventListener("mouseover", () => {
    electronicpd.style.display = "block";
})

electronicpd.addEventListener("mouseout", () => {
    setTimeout(() => {
        electronicpd.style.display = "none"
    }, 2000)
})


const fashion = document.getElementById("fashion")
const fashionpd = document.getElementById("fashionproduct")
fashion.addEventListener("mouseover", () => {
    fashionpd.style.display = "block";
})

fashionpd.addEventListener("mouseout", () => {
    setTimeout(() => {
        fashionpd.style.display = "none"
    }, 2000)
})

let chatbot_div = document.getElementById("chatbot_div");
let chatMessageBox = document.getElementById("chatMessageBox");
let rightNone = document.getElementsByClassName("right")[1];


chatbot_div.addEventListener("click", (e) => {
    e.preventDefault();
    chatMessageBox.style.display = "block";
})
rightNone.addEventListener("click", (e) => {
    e.preventDefault();
    chatMessageBox.style.display = "none";
})


let messageBox = document.getElementById("msgBox")
let send = document.getElementById("send");
let userInput = document.getElementById("userInput");
let s = 0;
let botMessage = ["Enter name", "How may i help you?", "Enter your problem", "thank you"];


send.addEventListener('click', () => {
    let userValue = userInput.value;
    displayData(userValue, s);
    s++
    userInput.value = " "
})

function displayData(val, index) {
    let pTag = document.createElement("p");
    let spanTag = document.createElement("span");
    spanTag.textContent = val;
    pTag.textContent = botMessage[index];
    messageBox.appendChild(spanTag)
    messageBox.appendChild(pTag);

}
let cart = document.getElementById("cart");

cart.addEventListener("click", () => {
    window.location.href = "Cart.html"
})


let products = document.getElementById("productCnt")
// to fetch the data
fetch("https://dummyjson.com/products").then((e) => e.json()).then((data) => {
    console.log(data)
    console.log(data.products)

    localStorage.setItem("products", JSON.stringify(data.products))

    fetchData(data.products)


})

function fetchData(p) {
    let input = ""
    p.map((value) => {
        input += `

     <div class="product_box">
     <img src =${value.images[0]} alt=${value.title} >
     <h4>${value.title}</h4>
     <div class="price-cnt">
     <p>Price:${value.price}</p>
     <p>Ratings:${value.rating}</p>
     <p>Product Id:${value.id}</p>
     </div>
     <button class="viewbtn" onclick="handleBtn(${value.id})">View More</button>
     </div>
     `
    })
    productcnt.innerHTML = input
}


function handleBtn(id) {
    localStorage.setItem("productId", id);
    window.location.href = "productView.html"
}

// Global variable to store fetched products data
let productsData = [];

// Fetch the product data
fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        productsData = data.products; // Store fetched products data

        localStorage.setItem("products", JSON.stringify(productsData));

        fetchData(productsData); // Initial rendering of products
    });

// Fetch data and render products
function fetchData(p) {
    let input = "";
    p.map((value) => {
        input += `
     <div class="product_box">
       <img src="${value.images[0]}" alt="${value.title}">
       <h4>${value.title}</h4>
       <div class="price-cnt">
         <p>Price: ${value.price} $</p>
         <p>Ratings: ${value.rating}</p>
         <p>Product Id: ${value.id}</p>
       </div>
       <button class="viewbtn" onclick="handleBtn(${value.id})">View More</button>
     </div>
   `;
    });
    // Display products in the product container
    document.getElementById("productcnt").innerHTML = input;
}

// Search filter logic
let searchProduct = document.getElementById("searchProduct");
searchProduct.addEventListener("input", (e) => {
    let userVal = e.target.value.toLowerCase(); // Convert input to lowercase
    let filterData = productsData.filter((val) => {
        // Filter products based on title or category
        return (
            val.title.toLowerCase().includes(userVal) ||
            val.category.toLowerCase().includes(userVal)
        );
    });
    console.log(filterData); // Log filtered data for debugging
    fetchData(filterData); // Re-render filtered products
});

// Handle button click for "View More"
function handleBtn(id) {
    localStorage.setItem("productId", id);
    window.location.href = "productView.html"; // Redirect to a product details page
}
    
  // Show Register Form
  function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden'); // Hide login form
    document.getElementById('registerForm').classList.remove('hidden'); // Show register form
  }
  
  // Show Login Form
  function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden'); // Hide register form
    document.getElementById('loginForm').classList.remove('hidden'); // Show login form
  }
  
  // Handle Login
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
   
    
  });
  

  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    const email = document.querySelector("#loginForm input[type='email']").value;
    const password = document.querySelector("#loginForm input[type='password']").value;
  
    // Retrieve user details from localStorage
    const storedUser = localStorage.getItem(email);
  
    if (!storedUser) {
        alert("No account found with this email. Please register first.");
        return;
    }
  
    const userData = JSON.parse(storedUser);
   
    
    // Validate password
    if (userData.password === password) {
        alert("Login successful! Welcome, " + userData.fullName);
       
    } else {
        alert("Incorrect password. Please try again.");
    }
  });


