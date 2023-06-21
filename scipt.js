var menu = {
    "Caffe Americano": { price: 3.99, image:"images/Americano.jpg"},
    "Caffe Latte": { price: 4.59, image: "images/latte.jpg"},
    "Capuccino": { price: 3.99, image: "images/cappuccino.webp"},
    "Moccha": { price: 2.99, image: "images/mocha.jpg"},
    "White Chocolate Mocha": {price: 4.99, image: "images/1.jpg"},
    "Caramel Macchiato": {price: 4.79, image: "images/2.jpg"},
    "Java chip Frappuccino": {price: 5.49, image: "images/3.jpg"},
    "Green Tea Frappuccino": {price: 4.99, image: "images/4.jpg"},
    "Chai Tea Latte": {price: 3.99, image:"images/5.jpg"},
};
function createDrinkMenu() {
    var  menuContainer = document.getElementById("menu-container");
    var menuList = document.createElement("ul");
   // console.log(here);//ai bảo thêm cái lệnh này chỗ đây thế?? what?tự mình làm ra rồi kêu k biết?K biết sao biết lệnh này mà gõ vào?

    for (var drink in menu) {
        var price = menu[drink].price.toFixed(2);
        var image = menu[drink].image;
        var menuItem = document.createElement("li");
        var drinkImage = document.createElement("img");
        var drinkName = document.createElement("p");
        var drinkPrice = document.createElement("p");
        drinkImage.src = image;
        drinkImage.alt = drink;
        drinkName.textContent = drink;
        drinkPrice.textContent = "$" + price;
        
        menuItem.appendChild(drinkImage);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkPrice);
        menuList.appendChild(menuItem);
    }
    menuContainer.appendChild(menuList);
}
window.onload =  createDrinkMenu;