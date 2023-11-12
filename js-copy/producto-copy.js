

let currentSizeArr = [""];

const allSizes = document.querySelectorAll(".size-var");
const add2cartBtn = document.getElementById("add-carrito");

let parentId
let lastDigit


allSizes.forEach(span => {
    // for each element of the array allsizes

    span.addEventListener("click",() => {
        // listen for a click and execute the following code when clicked

        allSizes.forEach(size => size.classList.remove("selected"));
        // we call each element of the array again and remove the class "selected"

        span.classList.add("selected");
        // then we add to the current element of the array a "selected" class


        add2cartBtn.innerText = "agregar al carrito";
        // we are in the current element function, so we change text of the button

        if (span.classList.contains("selected")){
            currentSizeArr[0] = span.innerHTML;
        }
        // if the current element of the array contains the selected class
        // save the current element into the currentSize's array first element

        parentId = span.parentElement.id;
        lastDigit = parentId.substring(parentId.length - 1) - 1
        // save the last digit of the parent's id to use it as an index in prendas array

        console.log(lastDigit)
    });
});

        // add the product

add2cartBtn.addEventListener("click", answer => {

    // addItem2Cart()

        prendas[lastDigit]["size"] = currentSizeArr[0]


        let b = JSON.stringify(prendas[lastDigit]);
        sessionStorage.setItem("a", b);

        // added notification
        Toastify({
            text: "Producto agregado!",
            duration: 3000,
            style: {background: "#cccccc"},
            onClick: function(){
                location.href = '../carrito.html'
            },
            offset: {
                x: 10,
                y: 25
            }
        }).showToast();
});


// Issue: overriding the sessionItem
// Solution: create a new sessionItem if is not the same sessionItem being created


//Code does not exactly follow a linear sequence
//Yes, it does execute line by line, but It's jumping from place to place as it executes

//My question is, where do I even start?