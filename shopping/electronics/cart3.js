let quantity3 = parseInt( localStorage.getItem("quantity3") ) || 0
console.log(quantity3)
let basket = JSON.parse(localStorage.getItem("cart3")) || []
let number = document.getElementById('number').innerHTML= quantity3
let div = document.getElementById('div')
let write = document.getElementById('write')

let total =()=>{
   let totalcart=0
   basket.forEach((item)=>{
       totalcart += item.price*item.quantity
       console.log(item.quantity)
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
                   <div class="price-quantity3">
                       <h4 class="title-price">
                       <p id='theName'>${basket[i].name}</p>
                       <p class="cart-item-price">$ ${basket[i].price}</p>
                       </h4>
                       <i class="fa-solid fa-xmark" onclick="remove(${i})"></i>
                   </div>

                   <div class="cart-buttons">
                   <div class="buttons">
                           <i  class="fa-solid fa-minus" onclick="decreaseQuantity(${i})"></i>
                           <div id="search${basket[i].id}" class="quantity3">${basket[i].quantity}</div>
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
                <a href="index.html" class="HomeBtn">Back to shop</a>
            `
        }
    }
    renderHtml() 
    
function remove (index){
   quantity3 = quantity3 - basket[index].quantity3
   basket.splice(index,1)
   document.getElementById("number").innerHTML= quantity3
   localStorage.setItem("cart3",JSON.stringify(basket))
   localStorage.setItem("quantity3",quantity3)
   renderHtml()
}
let increaseQuantity=(productNumber)=>{
   basket=JSON.parse(localStorage.getItem("cart3")) || [];
   basket[productNumber].quantity += 1
   quantity3+=1
   document.getElementById(`search${basket[productNumber].id}`).innerHTML =  basket[productNumber].quantity
   document.getElementById("number").innerHTML= quantity3

   localStorage.setItem("cart3",JSON.stringify(basket))
   localStorage.setItem("quantity3",quantity3)
   renderHtml()

}
let decreaseQuantity=(productNumber)=>{
   basket=JSON.parse(localStorage.getItem("cart3")) || [];
   
    if (basket[productNumber].quantity >1){
       basket[productNumber].quantity -= 1
       quantity3-=1
       document.getElementById(`search${basket[productNumber].id}`).innerHTML =  basket[productNumber].quantity3
       document.getElementById("number").innerHTML= quantity3
       localStorage.setItem("cart3",JSON.stringify(basket))
       localStorage.setItem("quantity3",quantity3)
       renderHtml()     
   }else if (basket[productNumber].quantity ==1){
       basket.splice(productNumber,1)
       quantity3-=1
       localStorage.setItem("cart3",JSON.stringify(basket))
       localStorage.setItem("quantity3",quantity3)
       document.getElementById("number").innerHTML= quantity3

       renderHtml()
   }
}

function away(){
    div.innerHTML = ''
    localStorage.clear()
    document.getElementById("number").innerText = '0'
    write.innerHTML = `<h3>Your cart is empty</h3>
                 <a href="index.html" class="HomeBtn">Back to shop</a>
             `
 }
