let addToCardBox= document.getElementsByClassName("shop-item-button");
// let addToCardBox= document.querySelectorAll(".shop-item-button")

for (let index = 0; index < addToCardBox.length; index++) {
   addToCardBox[index].addEventListener("click", addToCardBoxProduct)
    
}

function addToCardBoxProduct(params) {
    let shopItem=params.target.parentElement.parentElement
    let title= shopItem.getElementsByClassName("shop-item-title")[0].innerText
    let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    let image= shopItem.getElementsByClassName("shop-item-image")[0].src
    console.log(title, price, image)
   }