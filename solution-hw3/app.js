const glazes ={
    'Keep original': 0.00,
    'Sugar milk': 0.00,
    'Vanila milk': 0.50,
    'Double chocolate': 1.50
};

const packSize = {
    "1" : 1,
    "3" : 3,
    "6" : 5,
    "12": 10
};

const basePrice = 2.49;
let currGlazePrice = 0;
let currPackPrice = 1;

const glazeSelect = document.querySelector("select#Glazing");

for (const [glazing,price] of Object.entries(glazes)){
    const option = document.createElement("option");
    option.textContent = glazing;
    option.value = price;
    glazeSelect.appendChild(option);
}

const packSelect = document.querySelector("select#Pack-size");

for (const [pack,price] of Object.entries(packSize)){
    const option = document.createElement("option");
    option.textContent = pack;
    option.value = price;
    packSelect.appendChild(option);
}

function glazingChange(element){
    currGlazePrice = parseFloat(element.value);
    displayPrice();
}

function sizingChange(element){
    currPackPrice = parseFloat(element.value);
    displayPrice();
}

function displayPrice(){
    const totalPrice = (basePrice + currGlazePrice) * currPackPrice;
    const totalPriceField = document.querySelector("#totalPrice");
    console.log(totalPrice);
    totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}