//import * as JSONdata from "./j.json" 
//const data =require("./j.json")
//require() 
//console.log(document.getElementById("data"));
let he=0
let shop = document.getElementById("shop")

let no = parseInt(localStorage.getItem('no'))
let quantity = parseInt( localStorage.getItem("quantity3") ) || 0
let heartIcon = parseInt(localStorage.getItem('heart'))
let number = parseInt(localStorage.getItem('number')) || 0
document.getElementById("heartH").innerText = number
document.getElementById("cartAmount").innerText = quantity
let basket = JSON.parse(localStorage.getItem("cart3")) || []
console.log(basket)
let alldata = []
let getJsonData= async()=>{
    let url ="j.json"
    let response= await fetch(url)
    let data = await response.json()//{products:[]}
    alldata= data.products;
    console.log(alldata)

    renderHtml(data.products)
 }
 let renderHtml =(products)=>{
    let no = parseInt(localStorage.getItem('no'))
    localStorage.setItem('no',JSON.stringify(products))
    for (let i=0; i<products.length; i++){
      console.log(products)
      let search = basket.find((item)=> item.id == products[i].id )
      shop.innerHTML+= `<div class="item" >

         <div class="details">
            <h1 class='name'>${products[i].name}</h1>
            <div class='images'>
              <img width="220" src="${products[i].img}" alt="" class='img'>
            </div>
         <div class="price-quantity">
               <h2 class='price'> ${products[i].price} AED</h2>
               <p class='description'><span>About this item: </span>${products[i].description} </p>
               <div class="buttons">
                  <p class='minus' onclick="decreaseQuantity(${i})">-</p>
                  <div id='product-quantity-${products[i].id}' class="quantity">
                  ${search == undefined?  0:search.quantity }
                  </div>
                  <p class='plus' onclick="increaseQuantity(${i})">+</p>
               </div>
               <i class="fa-solid fa-heart" id="heart-icon" onclick="heart(${i})"></i>
               <p id='ri'>${0}</p>

         </div>
         </div>
      </div>`;
    }
 }
 getJsonData()

// 1) add to cart   page number
//  localStorage 
// 2) product quantity
// 3)  localStorage 
let increaseQuantity = (index)=>{
    // produts  -> index -> quantity
    let products =JSON.parse( localStorage.getItem("cart3")) || []
    console.log(`product number ${index}`)
    let i = products.findIndex((item)=> item.id == alldata[index].id )
    console.log(i)
    console.log(`find product in local storage ${i}`)
    if (i>=0){
        products[i].quantity+=1
        document.getElementById(`product-quantity-${alldata[index].id}`).innerHTML=products[i].quantity

    }else{
        // first time
        alldata[index].quantity=1
        products.push(alldata[index])
        document.getElementById(`product-quantity-${alldata[index].id}`).innerHTML=1
    }
    //if products
    quantity++
    localStorage.setItem("quantity3", quantity)
    document.getElementById("cartAmount").innerText = quantity
    localStorage.setItem("cart3", JSON.stringify(products))
    
}

let decreaseQuantity = (index)=>{
    let products =JSON.parse( localStorage.getItem("cart3")) || []
    let i = products.findIndex((item)=> item.id == alldata[index].id )
    if ( products[i].quantity >0){
        products[i].quantity-=1
        document.getElementById(`product-quantity-${alldata[index].id}`).innerHTML=products[i].quantity
        quantity--
        localStorage.setItem("quantity3", quantity)
        document.getElementById("cartAmount").innerText = quantity
        localStorage.setItem("cart3", JSON.stringify(products))
        if (products[i].quantity == 0){
            products.splice(i,1)
            localStorage.setItem("cart3", JSON.stringify(products))
        }
    }
}




let heart =(index) => { 
    let products =parseInt( localStorage.getItem("heart")) || []  
    let ri = document.getElementById('ri')
    let no = JSON.parse(localStorage.getItem('no'))
    console.log(no)
    let number = parseInt(localStorage.getItem('number'))
    he+=1
    document.getElementById("heartH").innerText = number+1
    let New = JSON.parse(localStorage.getItem('New'))
    console.log(he)
    //let heart = parseInt(localStorage.getItem('heart'))
    id = alldata[index].id
    //ri[id-1]+=1
    console.log(no[id-1])
    let value = ri.innerHTML;
    console.log(value);
    let ba = products.u = value;
    console.log(ba[id])
    console.log(id-1)
    let list = []
    list.push(no[id-1])
    let j = products.quantity = ri;
    console.log(j)

    console.log(products[id])
    //let i = products.findIndex((item)=> item.id == alldata[index].id )
    console.log(no[id-1])
    //products.push(no[id-1])
    //console.log(products.push(no[id-1]))
    //console.log(products[i].heartIcon)
    let heartElements = document.querySelectorAll('#heart-icon');
    console.log(id); // It seems that the "id" variable is not defined in the provided code snippet.
    
    localStorage.setItem('heart', JSON.stringify(list)); // Make sure to define and assign a value to the "list" variable before using it here.
    localStorage.setItem('number', he); // Make sure to define and assign a value to the "he" variable before using it here.
    
    console.log(products.length); // Make sure to define and assign a value to the "products" variable before using it here.
    console.log(index); // Make sure to define and assign a value to the "index" variable before using it here.
    
    heartElements.forEach(heartElement => {
      heartElement.addEventListener("click", () => {
        if (heartElement.classList.contains("clicked")) {
          heartElement.classList.remove("clicked");
          // Perform any desired actions when the element has the "clicked" class
        } else {
          heartElement.classList.add("clicked");
          // Perform any desired actions when the element does not have the "clicked" class
        }
      });
    });
}

