let prendas

// hacemos la conexion con el json

function getData(){
    fetch('/js/prendas.json')
        .then(r => r.json())
        .then(data => {
            prendas = data;

        })
}

getData();

const cart = []



function addItem2Cart(){

    // carrito.push()
    // pushiar el item que el que el objeto del array que esta siendo solicitado
    localStorage.setItem('cart', cart);

}

function displayCart(){

}

function removeSessionItem(){
    sessionStorage.removeItem("a");
    window.location.reload();
}


// create and display the product

const container = document.createElement("div");
container.setAttribute("class", "container")
const c = JSON.parse(sessionStorage.getItem("lastDigitOfParentId"));
const carritoMain = document.getElementById("carrito-main")



if (localStorage.length !== 0){
    container.innerHTML =`
        <button class="removeBtn" onclick="removeSessionItem()" type="button">remover</button> 
        <div>${c.id}</div>
        <div>${c.size}</div>
        <div>${c.quantity}</div>
        <div>${"$" + c.price}</div>
    `;

    carritoMain.append(container);
}


    const total = document.createElement("div");
    total.setAttribute( "id", "total")
    total.innerHTML = `<p>TOTAL: ${c.price}$</p>`;
    carritoMain.append(total);




// toastify para cuando se elimina el producto del carrito
