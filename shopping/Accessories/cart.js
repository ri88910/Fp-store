console.log('h')
let quantity = parseInt( localStorage.getItem("quantity2") ) || 0
let basket = JSON.parse(localStorage.getItem("cart2")) || []
let number = document.getElementById('number').innerHTML= quantity
let div = document.getElementById('div')
let write = document.getElementById('write')

let total =()=>{
   let totalcart=0
   basket.forEach((item)=>{
       totalcart += item.price*item.quantity
   })
   write.innerHTML = ` 
   <h1 id="write">Total Bill: $${totalcart} </h1> 
   <div id="marks">
      <button id="check">check out</button>
      <button id="clear" onclick="away()">clear cart</button>
   </div>
   `
}

let  renderHtml= ()=>{
   div.innerHTML=''
   if (basket.length >0){ 
    console.log(basket)
       for (let i = 0 ;i <basket.length ;i++){
           div.innerHTML += 
           `<div class="cart-item">
            <div class ='inside'>
                   <img width="100" src="${basket[i].img}" alt="" />
                   <div class="details">
                   <div class="price-quantity">
                       <h4 class="title-price">
                       <p>${basket[i].name}</p>
                       <p class="cart-item-price">$ ${basket[i].price}</p>
                       </h4>
                       <i class="fa-solid fa-xmark" onclick="remove(${i})"></i>
                   </div>

                   <div class="cart-buttons">
                   <div class="buttons">
                           <i  class="fa-solid fa-minus" onclick="decreaseQuantity(${i})"></i>
                           <div id="search${basket[i].id}" class="quantity">${basket[i].quantity}</div>
                             <i  class="fa-solid fa-plus" onclick="increaseQuantity(${i})"></i>
                       </div>
                   </div>

                   <h3>$${basket[i].price* basket[i].quantity} </h3>

                   </div>
                   </div>
               </div>`;
            }
            total()
        }else{
            write.innerHTML = `<h3 class='empty'>Your cart is empty</h3>
                <a href="html.html" class="HomeBtn">Back to shop</a>
            `
        }
    }
    renderHtml() 
    
function remove (index){
   quantity = quantity - basket[index].quantity
   basket.splice(index,1)
   document.getElementById("number").innerHTML= quantity
   localStorage.setItem("cart2",JSON.stringify(basket))
   localStorage.setItem("quantity2",quantity)
   renderHtml()
}
let increaseQuantity=(productNumber)=>{
   basket=JSON.parse(localStorage.getItem("cart2")) || [];
   basket[productNumber].quantity += 1
   quantity+=1
   document.getElementById(`search${basket[productNumber].id}`).innerHTML =  basket[productNumber].quantity
   document.getElementById("number").innerHTML= quantity

   localStorage.setItem("cart2",JSON.stringify(basket))
   localStorage.setItem("quantity2",quantity)
   renderHtml()

}
let decreaseQuantity=(productNumber)=>{
   basket=JSON.parse(localStorage.getItem("cart2")) || [];
   
    if (basket[productNumber].quantity >1){
       basket[productNumber].quantity -= 1
       quantity-=1
       document.getElementById(`search${basket[productNumber].id}`).innerHTML =  basket[productNumber].quantity
       document.getElementById("number").innerHTML= quantity
       localStorage.setItem("cart2",JSON.stringify(basket))
       localStorage.setItem("quantity2",quantity)
       renderHtml()     
   }else if (basket[productNumber].quantity ==1){
       basket.splice(productNumber,1)
       quantity-=1
       localStorage.setItem("cart2",JSON.stringify(basket))
       localStorage.setItem("quantity2",quantity)
       document.getElementById("number").innerHTML= quantity

       renderHtml()
   }
}

function away(){
    div.innerHTML = ''
    localStorage.clear()
    document.getElementById("number").innerText = '0'
    write.innerHTML = `<h3>Your cart is empty</h3>
                 <a href="html.html" class="HomeBtn">Back to shop</a>
             `
 }
