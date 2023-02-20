let glazes = [
    {
        name: 'Keep original',
        price: 0.00,
    },
    {
        name: 'Sugar milk',
        price: 0.00,
    },
    {
        name: 'Vanila milk',
        price: 0.50,
    },
    {
        name: 'Double chocolate',
        price: 1.50,
    }
    ]
    
let packSize = [
    {
        size: 1,
        adaptation: 1,
    },
    {
        size: 3,
        adaptation: 3,
    },
    {
        size: 6,
        adaptation: 5,
    },
    {
        size: 12,
        adaptation: 10,
    }
    ]

let finalPrice = 2.49;

function glazingChange(){
    const newPrice = this.value;
    console.log("newPrice"+ newPrice);
    let glazePrice = parseFloat(glazes[newPrice].price);
    let size = parseInt(document.querySelector('#Pack-size').value);
    console.log("glazePrice"+ glazePrice);
    console.log("size"+ size);

    for (let i = 0; i < size-1; i += 1) {
        finalPrice += glazePrice;
        console.log("price updating"+ finalPrice);
    }
    displayPrice(finalPrice);
}

function sizeChange(element){
    const size = element.value;
    let glazeIndex = parseInt(document.querySelector("#Glazing").value);
    let glazePrice = parseFloat(glazes[glazeIndex].price);

    for (let i = 0; i < size-1; i += 1) {
        price += glazePrice;
    }

    displayPrice(price);
}

function displayPrice(price){
    let priceElement = document.querySelector('#totalPrice');
    priceElement.innerHTML = '$' + (price).toFixed(2);
}

glazingChange();
sizeChange();