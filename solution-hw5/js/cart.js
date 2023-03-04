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

function glazingChange(element){
    glazingOption = element.options[element.selectedIndex].text;
    displayPrice();
}

function sizingChange(element){
    packOption = element.options[element.selectedIndex].text;
    displayPrice();
}

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addRoll(rollType, glazingOption, packOption){
    const itemPrice = packOption*(rolls[rollType]["basePrice"] + glazes[glazingOption]);
    console.log(rolls[rollType]["basePrice"]);
    console.log(glazes[glazingOption]);
    console.log(itemPrice);
    const roll = new Roll(rollType, glazingOption, packOption, itemPrice);
    cart.push(roll);
    console.log(cart);
}

function createElement(roll){
    console.log("createElement");
    const template = document.querySelector('#cart-template');
    updateElement(roll);
    const btnDelete = roll.element.querySelector("#remove");
    console.log(btnDelete);
    btnDelete.addEventListener('click',() => {
        deleteRoll(roll);
    });
}
function deleteRoll(roll){
    roll.element.remove();
    cart.delete(roll);
    console.log("deleted");
}

let template = document.getElementsByClassName("cart-item");
let templateContent = template.content;

function updateElement(roll){
    console.log("updateElement");
    const rollImageElement = roll.element.querySelector(".cart");
    const rollTitleElement = roll.element.querySelector("#roll-name");
    const rollGlazingElement = roll.element.querySelector("#glaze-name");
    const rollPackSizeElement = roll.element.querySelector("#pack-size");
    const rollItemPriceElement = roll.element.querySelector("#item-price");
    const rollTotalPriceElement = roll.element.querySelector("#total-price");

    rollImageElement.src = './products/'+ roll.type + "-cinnamon-roll.jpg";
    rollTitleElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackSizeElement.innerText = "Pack size: " +roll.size;
    rollItemPriceElement.innerText = "$ " + roll.basePrice;
    rollTotalPriceElement.innerText = "$ " + (roll.basePrice + glazes[glazingOption]) * roll.size;
}

for (const roll of cart){
    console.log(note);
    createElement(roll);
}