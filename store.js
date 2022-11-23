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
  let cardRow = document.createElement("div");
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
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
   </div>`;
  cardRow.innerHTML = cardRowContent;
  cardItems.append(cardRow);
  cardRow.getElementsByClassName("btn-danger")[0].addEventListener("click", deleteItem)
  cardRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", inputChange)
}

/* REMOVE BUTTON */
let removeButtons = document.querySelectorAll("btn-danger")

for (let index = 0; index < removeButtons.length; index++) {
  console.log(index)
  removeButtons[index].addEventListener("click", deleteItem)
}
function deleteItem(p){
  p.target.parentElement.parentElement.remove()
}

function inputChange(pParam){
  if(isNan(pParam.target.value) || pParam.target.value<0){

  }
}