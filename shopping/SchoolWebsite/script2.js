let shop = document.getElementById("shop");
localStorage.getItem('value');
let storedValue = localStorage.getItem('cart');
let storedNumber = localStorage.getItem('number');
document.getElementById("cartAmount").innerText = storedValue;

console.log(storedValue);

const test=async()=>{
 await fetch('j.json')
  .then(response => response.json())
  .then(data => {
    renderHtml(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
test()

let renderHtml = (data) => {
  console.log(data)
  data.forEach((product, index) => {
    const productId = product-{index}; // Unique identifier for each product
    const productId2 = product-{index}; // Unique identifier for each product

    shop.innerHTML += `<div id='main'>
      <h1>${product.name}</h1>
      <p>${product.id}</p>
      <div class='image'>
        <img src="${product.img}" id="img">
        </div>
      <h2 class='price'>Price: ${product.price} AED</h2> <br>
      <h2 class='description'><span>About this item: </span>${product.description } AED</h2>
    
      <div id='using'>
        <p id='plus-${productId}' class='plus' onclick="plus('${productId}', '${product.name}', '${product.price}', '${product.img}', '${product.description}')"><b>+</b></p>
        <p id='number-${productId}' class='number'><b>0</b></p>
        <p id='minus-${productId2}' class='minus' onclick="minus('${productId2}')"><b>-</b></p>
      </div>
    </div>`;

    document.getElementById(number-{productId}).innerText = storedNumber;
});
};

//
//let increaseQuantity = (index) => {
  //let products = JSON.parse(localStorage.getItem("cart2")) || [];
  //console.log(products)
  //localStorage.setItem("cart2", JSON.stringify(products));
//};

num = {}

function plus(productId, productName, productPrice, productImg, productDescription) {
  let products = [];
  //let productsJSON = JSON.stringify(localStorage.getItem('cart2'));
  //localStorage.setItem("cart2", productId);

  console.log(productId);
  //localStorage.setItem("cart2", productsJSON);
  let storedValue = localStorage.getItem('cart');
  if (!storedValue) {
    storedValue = 0;
  } else {
    storedValue = parseInt(storedValue); // Convert the stored value to a number
    all = parseInt(storedValue) + 1;
    console.log(all);
    document.getElementById("cartAmount").innerText = all;
  }
  storedValue += 1;
  localStorage.setItem('cart', storedValue);

  localStorage.setItem('value',[productId,productImg]);
  
  if (!num[productId]) {
    num[productId] = 0;
  }
  num[productId] += 1;
  document.getElementById(number-{productId}).innerHTML = num[productId];
  
  console.log(num[productId]);

  console.log(storedValue);
  localStorage.setItem('number',num[productId]);

}

function minus(productId2) {
  if (num[productId2] > 0) {
    num[productId2] -= 1;
    document.getElementById(number-{productId2}).innerHTML = num[productId2];
  } else if (num[productId2] === 0) {
    console.log("can't");
  }
}

console.log(document.querySelectorAll('#using'));
console.log(shop);