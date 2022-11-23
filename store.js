let addToCardBox = document.getElementsByClassName("shop-item-button");
// let addToCardBox= document.querySelectorAll(".shop-item-button")

for (let index = 0; index < addToCardBox.length; index++) {
  addToCardBox[index].addEventListener("click", addToCardBoxProduct);
}
function addToCardBoxProduct(params) {
  let shopItem = params.target.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  let image = shopItem.getElementsByClassName("shop-item-image")[0].src;
  AddItemCard(title, price, image);
}
function AddItemCard(title, price, image) {
  var cardRow = document.createElement("div");
  cardRow.classList.add("cart-row");
  let cardItems = document.querySelector(".cart-items");
  let cardItemsNames = cardItems.getElementsByClassName("cart-item-title");
  let cardValues = cardItems.getElementsByClassName("cart-quantity-input")
  for (let index = 0; index < cardItemsNames.length; index++) {
    if (cardItemsNames[index].innerText == title) {
      cardValues[index].value ++
      return;
    }
  }
  let cardRowContent = `<div class="cart-item cart-column">
      <img class="cart-item-image" src="${image}">
      <span class="cart-item-title">${title}</span>
   </div>
   <span class="cart-price cart-column">${price}</span>
   <div class="cart-quantity cart-column">
      <input class="cart-quantity-input"  value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
      <p>Haydi Al</p>
   </div>`;
  cardRow.innerHTML = cardRowContent;
  cardItems.append(cardRow);
  cardRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeItem);
  cardRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", inputChange)
  lastPrice()
}
let buttonDelete = document.getElementsByClassName("btn-danger");
for (let index = 0; index < buttonDelete.length; index++) {
  buttonDelete[index].addEventListener("click", removeItem);
}
function removeItem(pParam) {
  pParam.target.parentElement.parentElement.remove();
  lastPrice()
}
function inputChange(pParam) {
  if (isNaN(pParam.target.value)|| pParam.target.value<=0) {
    pParam.target.value=1
  }
  lastPrice()
}
function lastPrice() {
  let cartRow= document.getElementsByClassName("cart-items")[0].getElementsByClassName("cart-row")
  let total=0;
  for (let index = 0; index < cartRow.length; index++) {
    let price= cartRow[index].getElementsByClassName("cart-price")[0]
    let input=cartRow[index].getElementsByClassName("cart-quantity-input")[0]
    let priceNumber=Number(price.innerText.replace("$", ""))
    total=total+priceNumber*input.value
  }
  total=Math.round(total*100)/100
  document.getElementsByClassName("cart-total-price")[0].innerText=`$${total}`
} 
