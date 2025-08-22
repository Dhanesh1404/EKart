document.addEventListener("DOMContentLoaded", () => {
    let jsData = JSON.parse(localStorage.getItem("products"));
    let productId = JSON.parse(localStorage.getItem("productId"));
    console.log(jsData)
    console.log(productId)

    if (jsData.length) {
        jsData.map((products) => {
            return products.id === productId;
        })
    }
    else {
        console.log("product is not available...")
    }
    find((product) => {
        return product.id === productId
    }
    )

    let productView = jsData.find((product) => {
        return product.id === productId;
    })


    let productCnt = document.getElementById("productCtn");
    console.log(productCnt)

    productCnt.innerHTML = `
<div id="cnt">
<div id="mainCnt">
<div id="left">
<img src="${productView.images}" alt="" id="productImg"/>
</div>
<div id="right">
<h2 id="title">${productView.title}</h2>
<p id="description">${productView.description}</p>
<p id="brand">Brand- ${productView.brand}</p>
<p id="productPrice">${productView.price}</p>
<div id="reviewRating">
    <p id="description">Rating:</p>
    <div class="btn  rating">  ${productView.reviews[0].rating}&nbsp;&nbsp<i class="fa-solid fa-star"></i></div>
   </div>

<button id="reviewBtn">See review </button>
</div>
</div>
<div id="review">
</div>
<button id="addToCart">Add to cart </button>
</div>
`
    let addToCartItem = document.getElementById("addToCart");
    console.log(addToCartItem)
    document.getElementById("addToCart").addEventListener("click", () => {
        storageLocal(productView)
    })
    function storageLocal(p) {
        let cartProduct = JSON.parse(localStorage.getItem("addToCart")) || []

        let existingProduct = cartProduct.find((val) => {
            return val.id === p.id;
        });

        if (existingProduct) {
            alert("Product already EXISTS in the cart");
        } else {
            cartProduct.push(p);
            localStorage.setItem("addToCart", JSON.stringify(cartProduct));
            alert("Product is added to cart...");
        }

        
    window.location.href = '../html/home.html'; 
    }
    //review button logic onclick we see more more 
    let hasExecuted = false;
    let SeeMoreReview = document.getElementById("reviewBtn")
    let 
    
    reviewContainer = document.getElementById("review");
    SeeMoreReview.addEventListener("click", () => {
        if (!hasExecuted) {
            reviewFun();
            hasExecuted = true;
            SeeMoreReview.innerText = "See less"
        }
        else {
            hasExecuted = false;
            reviewContainer.innerHTML = "";
            SeeMoreReview.innerText = "See review"
        }

    })
    let review = document.getElementById("review");
    function reviewFun() {
        productView.reviews.map((value) => {
            review.innerHTML += `
    <div id="reviewRating">
    <p id="description">Rating:</p>
    <div class="btn btn-success rating">  ${value.rating}&nbsp;&nbsp <i class="fa-solid fa-star"></i></div>
   </div>
    <div id="reviwerName">
    <p id="description">Comment:<b>${value.comment}</b></p>
    <p id="description">Review By-: ${value.reviewerName}</p>
    </div>
    `
        })
    }

})


