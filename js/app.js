
let prendas;

prendas = [
    {
        id: "aher002",
        size: "",
        quantity: 1,
        price: 75000,
    }
];

function removeSessionItem(){
    sessionStorage.removeItem("a");
    window.location.reload();
}


// create and display the product


const container = document.createElement("div");
container.setAttribute("class", "container")
const c = JSON.parse(sessionStorage.getItem("a"));
const carritoMain = document.getElementById("carrito-main")

if (sessionStorage.length !== 0){
    container.innerHTML =`
        <button class="removeBtn" onclick="removeSessionItem()" type="button">remover</button> 
        <div>${c.id}</div>
        <div>${c.size}</div>
        <div>${c.quantity}</div>
        <div>${"$" + c.price}</div>
    `;

    const cartRoot = document.getElementById("carrito-root");
    carritoMain.append(container);
}

    const total = document.createElement("div");
    total.setAttribute( "id", "total")
    total.innerHTML = `<p>TOTAL: ${c.price}$</p>`;
    carritoMain.append(total);





