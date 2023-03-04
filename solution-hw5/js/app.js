const glazes ={
    'Keep original': 0.00,
    'Sugar milk': 0.00,
    'Vanila milk': 0.50,
    'Double chocolate': 1.50
};

const packSizes = {
    "1" : 1,
    "3" : 3,
    "6" : 5,
    "12": 10
};

const rolls = {
    "original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "double-chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const cart = [];

let basePrice = 0;
let packOption = 1;
let rollType = NaN;
let glazingOption="Keep original";

populateCinnamonData();
populateSelectOptions();

function populateCinnamonData(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    rollType = params.get('roll');
    const imageURL = "./products/" + rolls[rollType]["imageFile"];

    const price = rolls[rollType]["basePrice"];

    const headerElement = document.querySelector("#header");
    headerElement.innerText = rollType.charAt(0).toUpperCase()+ rollType.slice(1) + " Cinnamon Roll";

    const productImage = document.querySelector('.detail-thumbnail');
    productImage.src =imageURL;

    basePrice = parseFloat(price);
    displayPrice();
}

function populateSelectOptions(){
    const glazeSelect = document.querySelector("select#glazing-options");

    for (const [glazing,price] of Object.entries(glazes)){
        const option = document.createElement("option");
        option.textContent = glazing;
        option.value = price;
        glazeSelect.appendChild(option);
    }
    const packSelect = document.querySelector("select#pack-options");

    for (const [pack,price] of Object.entries(packSizes)){
        const option = document.createElement("option");
        option.textContent = pack;
        option.value = price;
        packSelect.appendChild(option);
    }
}

displayPrice();

function glazingChange(element){
    glazingOption = element.options[element.selectedIndex].text;
    displayPrice();
}

function sizingChange(element){
    packOption = element.options[element.selectedIndex].text;
    displayPrice();
}

function displayPrice(){
    const glazePrice = glazes[glazingOption];
    const packPrice = packSizes[packOption];
    const totalPrice = (basePrice + glazePrice) * packPrice;
    const totalPriceField = document.querySelector("#totalPrice");
    totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addRoll(){
    const roll = new Roll(rollType, glazingOption, packOption, basePrice);
    cart.push(roll);
}