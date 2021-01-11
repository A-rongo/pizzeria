let items = [];
const price = [
    {
        size: "small",
        typeCrust: [
            {
                name: "Gluten-free",
                price: 550       
            },
            {
                name: "Crispy",
                price: 950       
            },
            {
                name: "Stuffed",
                price: 1050       
            },
        ],
        toppings: [
            {
                name: "Sausage & Kale",
                price: 150
            },
            {
                name: "Ham & Pineapple",
                price: 250
            },
            {
                name: "Capricciosa",
                price: 100
            },
        ]
    },
    {
        size: "medium",
        typeCrust: [
            {
                name: "Gluten-free",
                price: 650       
            },
            {
                name: "Crispy",
                price: 1050       
            },
            {
                name: "Stuffed",
                price: 1150       
            },
        ],
        toppings: [
            {
                name: "Sausage & Kale",
                price: 200
            },
            {
                name: "Ham & Pineapple",
                price: 300
            },
            {
                name: "Capricciosa",
                price: 150
            },
        ]
    },
    {
        size: "large",
        typeCrust: [
            {
                name: "Gluten-free",
                price: 750       
            },
            {
                name: "Crispy",
                price: 1150       
            },
            {
                name: "Stuffed",
                price: 1250       
            },
        ],
        toppings: [
            {
                name: "Sausage & Kale",
                price: 300
            },
            {
                name: "Ham & Pineapple",
                price: 400
            },
            {
                name: "Capricciosa",
                price: 250
            },
        ]
    },
]
function addtocart(){
    console.log("works")
    const size = document.getElementById("sizeYu");
    const crust = document.getElementById("crustYu");
    const toppings = document.getElementById("toppingYu");
    const quantity = document.getElementById("quantityYu");

    let pizzaPrice = 0;
    price.forEach(element => {
        if(element.size ===size.value) {
            element.typeCrust.forEach(element22 => {
                if(element22.name ===crust.value) {
                    pizzaPrice = +(""+element22.price)+pizzaPrice;
                }
            });
            element.toppings.forEach(element22 => {
                if(element22.name ===toppings.value) {
                    pizzaPrice = +(""+element22.price)+pizzaPrice;
                }
            });
        }
    });
    const dattts = {
        name: quantity.value+" "+size.value+" "+toppings.value+" "+ crust.value,
        each: pizzaPrice,
        quantity: +(""+quantity.value)
    }
    items.push(dattts);
    generateCart();
}
function generateCart() {
    let totalCost =0;
    let theHtml = '';
    console.log(items)
    items.forEach(element => {
        console.log(element)
        totalCost = totalCost + (element.each * element.quantity);
        theHtml = theHtml + `<div class="cartsss">
                                <p>`+element.quantity+`</p>
                                <p>`+element.name+`</P>
                                <p>`+element.each+`</P>
                                <p>`+(element.each * element.quantity)+`</p>
                            </div>`
        console.log("tessd",theHtml)
    });
    console.log("items",items)
    document.getElementById("cart").innerHTML = theHtml
}