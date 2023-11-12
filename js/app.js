let parentId
let lastDigitOfParentId
let currentSizeArr = [""];
const allSizes = document.querySelectorAll(".size-var");
const add2cartBtn = document.getElementById("add-carrito");


allSizes.forEach(span => {
    span.addEventListener("click",() => {
        allSizes.forEach(size => size.classList.remove("selected"));
        span.classList.add("selected");
        add2cartBtn.innerText = "agregar al carrito";
        if (span.classList.contains("selected")){
            currentSizeArr[0] = span.innerHTML;
        }
        parentId = span.parentElement.id;
        lastDigitOfParentId = parentId.substring(parentId.length - 1) - 1
        console.log(lastDigitOfParentId + ' parent id in forEach event')
        console.log(currentSizeArr[0])
    });
});


let cart = [];

if(add2cartBtn){
    add2cartBtn.addEventListener("click", answer => {
        getData()
    });
}

function getData(){
        fetch('/js/prendas.json')
        .then(r => {
            if (!r.ok){
                throw new Error('Error al obtener datos.')
            }
            return r.json()
        })
        .then(data => {
            // data processing logic:
            const saveSize = () => {
                data[lastDigitOfParentId]['size'] = currentSizeArr[0];
            }

            if (currentSizeArr[0] === ""){
            } else{
                showToast()
            }

            saveSize();
            pushCart(data);
            storeCart();
            cartFix()

        })
        .catch(error => console.error(error));
}

const pushCart = (data) => {

    if (cart.length >= 1){
        cart.pop()
        cart.push(data[lastDigitOfParentId]);
    }else{
        cart.push(data[lastDigitOfParentId]);

    }
 };

const storeCart = () => {

    let value = JSON.stringify(cart);
    localStorage.setItem("AHER00" + (lastDigitOfParentId + 1), value);
}

// this executes before the fetch requests
// fetch requests are asynchonous, so the code doesn't wait for it to complete before moving on
// to next statements

const showToast = () => {
    if (localStorage.getItem("AHER00" + (lastDigitOfParentId + 1))){
        Toastify({

            text: "Talla actualizada",
            duration: 3000,
            style: {
                boxShadow: "none",
                fontSize: "18px",
                border: "dashed #cccccc 2px",
                color: "#000000",
                background: "rgb(255,255,255)"
            },
            onClick: function(){
                location.href = '../carrito.html'
            },
            offset: {
                x: 10,
                y: 25
            }
        }).showToast();
    } else {
        Toastify({
            text: "Producto añadido al carrito ✔",
            duration: 3000,
            style: {
                color: "#000000",
                boxShadow: "none",
                fontSize: "18px",
                border: "dashed #cccccc 2px",
                background: "rgb(255,255,255)"
            },
            onClick: function(){
                location.href = '../carrito.html'
            },
            offset: {
                x: 10,
                y: 25
            }
        }).showToast();
    }
}

const cartFix = () => {
    const fixedLogo = document.querySelector(".carrito-logo");
    fixedLogo.style.position = "fixed";
    fixedLogo.style.zIndex = "999"
}

if(localStorage.length >= 1){
    cartFix();
}


