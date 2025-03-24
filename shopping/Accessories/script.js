let shop = document.getElementById("shop")
//                               undefined    -> or   0
// quantity =0
//

 let quantity = parseInt( localStorage.getItem("quantity2") ) || 0
document.getElementById("cartAmount").innerText = quantity
let basket = JSON.parse(localStorage.getItem("cart2")) || []
console.log(basket)
let alldata = []
let getJsonData= async()=>{
    let url ="j.json"
    let response= await fetch(url)
    let data = await response.json()
    alldata= data.products;

    renderHtml(data.products)
 }
 let renderHtml =(products)=>{
    for (let i=0; i<products.length; i++){
      let search = basket.find((item)=> item.id == products[i].id )
      shop.innerHTML+= `<div id='product-id-${products[i].id}' class="item" >

         <div class="details">
            <h1 class='name'>${products[i].name}</h1>
            <div class='images'>
              <img width="220" src="${products[i].img}" alt="" class='img'>
            </div>
         <div class="price-quantity">
               <h2 class='price'>$ ${products[i].price}</h2>
               <p class='description'><span>About this item: </span>${products[i].description} </p>
               <div class="buttons">
                  <p class='minus' onclick="decreaseQuantity(${i})">-</p>
                  <div id='product-quantity-${products[i].id}' class="quantity">
                  ${search == undefined?  0:search.quantity }
                  </div>
                  <p class='plus' onclick="increaseQuantity(${i})">+</p>
               </div>
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
    let products =JSON.parse( localStorage.getItem("cart2")) || []
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
    localStorage.setItem("quantity2", quantity)
    document.getElementById("cartAmount").innerText = quantity
    localStorage.setItem("cart2", JSON.stringify(products))
    
}

let decreaseQuantity = (index)=>{
    let products =JSON.parse( localStorage.getItem("cart2")) || []
    let i = products.findIndex((item)=> item.id == alldata[index].id )
    if ( products[i].quantity >0){
        products[i].quantity-=1
        document.getElementById(`product-quantity-${alldata[index].id}`).innerHTML=products[i].quantity
        quantity--
        localStorage.setItem("quantity2", quantity)
        document.getElementById("cartAmount").innerText = quantity
        localStorage.setItem("cart2", JSON.stringify(products))
        if (products[i].quantity == 0){
            products.splice(i,1)
            localStorage.setItem("cart2", JSON.stringify(products))
        }
    }
}

