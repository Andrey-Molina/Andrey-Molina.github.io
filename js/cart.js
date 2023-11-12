const cartComponents = document.getElementById("cart-components");
const carritoMain = document.getElementById("carrito-main");
function displayCart() {

     for (let key in localStorage){
         if (localStorage.hasOwnProperty(key)){
             const itemVal = JSON.parse(localStorage.getItem(key));
             displayProduct(itemVal)
         }
     }

     function displayProduct(x){
         let currentKey;
         currentKey = x;
         const id = currentKey[0]["id"];
         const container = document.createElement("div");
         container.setAttribute("class", "product-container")
         container.innerHTML += `
        <section class="item">
            <button class="removeBtn" onclick="removeSessionItem('${id}')" type="button">x</button>
            <div>${x[0].id}</div>
            <div>${x[0].size}</div>
            <div>${x[0].quantity}</div>
            <p>$</p>
            <div class="productPrice">${(x[0].price.top + x[0].price.falda + x[0].price.polainas)}</div>
        </section>`;
         cartComponents.append(container);
     }
}

function removeSessionItem(x){
    localStorage.removeItem(x);
    window.location.reload();
}

const displayTotal = () =>{
    const productPrices = document.getElementsByClassName("productPrice")
    let sum = 0;
    for (let i = 0; i < productPrices.length; i++) {
        const numericValue = parseFloat(productPrices[i].textContent) || 0;
        sum += numericValue;
    }

    const total = document.createElement("div");
    total.setAttribute( "id", "total");
    total.innerHTML = `<p>TOTAL: ${sum}$</p>`;
    cartComponents.append(total);
}


if(localStorage.length !== 0){
    displayCart();
    displayTotal();
}else {
    const cartRow = document.querySelector(".cart-row");
    cartRow.style.display = "none";
    const emptyCart = document.createElement("p");
    emptyCart.setAttribute("class", "empty-cart");
    emptyCart.innerHTML = "Carrito Vacio";
    carritoMain.append(emptyCart);
}



