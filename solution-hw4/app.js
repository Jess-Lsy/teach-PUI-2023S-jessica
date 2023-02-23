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

const cart = {

}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

function getBasePrice(){
    for (var aRoll in rolls){
        if (aRoll == rollType){
            const basePrice = rolls[aRoll].basePrice;
            return basePrice;
        }
    }
}

function getImageURL(){
    for (var aRoll in rolls){
        if (aRoll == rollType){
            const imageURL = rolls[aRoll].imageFile;
            return imageURL;
        }
    }
}

function getTitle(){
    for (var aRoll in rolls){
        if (aRoll == rollType){
            const title = aRoll;
            return title.charAt(0).toUpperCase()+ title.slice(1);
        }
    }
}

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

for (const [pack,price] of Object.entries(packSizes)){
    const option = document.createElement("option");
    option.textContent = pack;
    option.value = price;
    packSelect.appendChild(option);
}

displayPrice();

function glazingChange(element){
    currGlazePrice = parseFloat(element.value);
    displayPrice();
}

function sizingChange(element){
    currPackPrice = parseFloat(element.value);
    displayPrice();
}

function displayPrice(){
    const basePrice = getBasePrice(rollType);
    const totalPrice = (basePrice + currGlazePrice) * currPackPrice;
    const totalPriceField = document.querySelector("#totalPrice");
    totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

const headerElement = document.querySelector('#header');
headerElement.innerText = getTitle() + " Cinnamon Roll";

const productImage = document.querySelector('#detail-thumbnail');
productImage.src ='./products/' + getImageURL();

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addRoll(){
    console.log(packSelect);
    const packSelectValue = packSelect.option[packSelect.selectedIndex].text;
    const glazingSelectValue = glazeSelect.option[glazeSelect.selectedIndex].text;
    const roll = new Roll(rollType + "cinnamon-roll", glazingSelectValue, packSelectValue, basePrice);
    cart.push(roll);
    console.log(cart);
}

