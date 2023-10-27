

let currentSizeArr = ["size"];
const allSizes = document.querySelectorAll(".product-var");
const add2cartBtn = document.getElementById("add-carrito");



// run an event on every size and save the current selected size

allSizes.forEach(span => {
    span.addEventListener("click",() => {
        allSizes.forEach(size => size.classList.remove("selected"));
        span.classList.add("selected");

        add2cartBtn.innerText = "agregar al carrito";

        if (span.classList.contains("selected")){
            currentSizeArr[0] = span.innerHTML;
            // console.log(currentSizeArr);
        }
    });
});


// add the product



add2cartBtn.addEventListener("click",
    add2cartBtn => {
    prendas[0]["size"] = currentSizeArr[0]

        // store the prendas object in the session storage

        let b = JSON.stringify(prendas[0]);
        sessionStorage.setItem("a", b);
        console.log(currentSizeArr)
        console.log(prendas[0].size)

        Toastify({
            text: "Producto agregado!",
            duration: 3000,
            style: {background: "#cccccc",},
            onClick: function(){
                location.href = '../carrito.html'
            },
            offset: {
                x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 25 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            }
        }).showToast();
});



