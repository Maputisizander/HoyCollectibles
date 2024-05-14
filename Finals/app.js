let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

total.addEventListener('click', ()=>{

    if(total.innerHTML === "PHP 0"){
        alert("Please Select First.");
    }
    else{
        alert("Ordered Complete");
    }
    
})

let products = [
    {
        id: 1,
        name: 'Quotes Design',
        image: 'prod1.jpg',
        price: 99
    },
    {
        id: 2,
        name: 'Digital Paint Design',
        image: 'prod2.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'One piece Designs',
        image: 'prod3.jpg',
        price: 220
    },
    {
        id: 4,
        name: 'Naruto Design',
        image: 'prod4.jpg',
        price: 1230
    },
    {
        id: 5,
        name: 'OutLine Design',
        image: 'prod5.jpg',
        price: 320
    },
    {
        id: 6,
        name: 'DBZ Designs',
        image: 'prod6.jpg',
        price: 1200
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">PHP ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})" class = "btn" style = "cursor: pointer"  >Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>PHP ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = "PHP " + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}