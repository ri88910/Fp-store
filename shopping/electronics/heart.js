let basket = JSON.parse(localStorage.getItem("heart")) || []
console.log(basket)

let  renderHtml= ()=>{
   div.innerHTML=''
   if (basket.length >= 0){ 
       for (let i = 0 ;i <basket.length ;i++){
           div.innerHTML += 
           `<div class="cart-item">
            <div class ='inside'>
                <p id='theName'>${basket[i].name}</p>
                <i class="fa-solid fa-heart" id="heart-icon" onclick="heart()"></i>
                <img width="100" src="${basket[i].img}" alt="" />

               </div>`;
            
            }
        }else{
            write.innerHTML = `<h3 class='empty'>Your cart is empty</h3>
                <a href="index.html" class="HomeBtn">Back to shop</a>
            `
        }
    }
    renderHtml() 
    
function heart(index) {
    let heart = document.getElementById("heart-icon");
    if (heart.classList.contains("clicked")) {
        heart.classList.remove("clicked");
        //quantity3 = quantity3 - basket[index].quantity3
        basket.splice(index,1)
        localStorage.setItem("heart",JSON.stringify(basket))
        renderHtml()
        //localStorage.setItem("quantity3",quantity3)
    } else {
        heart.classList.add("clicked");
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
