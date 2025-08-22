let cartCnt = document.getElementById("cartData")
let totalPrice=document.getElementById("totalPrice")
let cartData = JSON.parse(localStorage.getItem("addToCart")) || []

function displayCartData(){
    let input = ""
    if (cartData.length == 0) {
        // alert("cart is empty")
        cartCnt.innerHTML = `
    <img src="/asset/EC.png">

    `
    }
    else {
        let price=0
        cartData.map((val) => {
        price+=val.price
            input += `
        <div class="cartCnt">
        <img src=${val.images[0]} height="120">
        <h2> Title: ${val.title}</h2>
        <h2> Price : ${val.price}$</h2>
        <button onclick="deleteProduct(${val.id})">Delete</button>
        </div>
        `
        console.log(price);
        })
        cartCnt.innerHTML = input;
        if(cartData.length==0){
            totalPrice.innerHTML=""
        }
        else{
            totalPrice.innerHTML=`Total price : ${price}$`
        }
    }
}

function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("addToCart"))
    let a = cartData.find((val)=>{
        return val.id==id
    })
    console.log(data);   //array
    console.log(a);   //object
    let index_num=cartData.indexOf(a)
    data.splice(index_num,1)
    console.log("updated value",data);
    localStorage.setItem("addToCart",JSON.stringify(data))
    cartData=data
    displayCartData()
    alert("product Deleted...")   

}

displayCartData()