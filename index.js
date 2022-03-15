// Array to hold services requested
let listOfServices = [];

// Objects that hold the details concerning the services
let wasCarDetails = {
    nameOfService: "Wash Car",
    price: 10,
    id: 1
}

let lawnMowDetalis = {
    nameOfService: "Mow Lawn",
    price: 20,
    id: 2
}

let pullWeedsDetails = {
    nameOfService: "Pull Weeds",
    price: 30,
    id: 3
} 

// Get elements from HTML
let car = document.getElementById("wash-car");
let lawn = document.getElementById("mow-lawn");
let weeds = document.getElementById("pull-weeds");
let tasks = document.getElementById("invoice-description-body");
let totalCost = document.getElementById("total-amount");
let sendInvoice = document.getElementById("send-invoice");
let notes = document.getElementById("notes");


// Buttons
car.addEventListener("click", function(){
    if (listOfServices.length === 0) {
        listOfServices.push(wasCarDetails);
    } else {
        if (listOfServices.includes(wasCarDetails)) {
        } else {listOfServices.push(wasCarDetails)};
    }
    update();
})

lawn.addEventListener("click", function(){
    if (listOfServices.length === 0) {
        listOfServices.push(lawnMowDetalis);
    } else {
        if (listOfServices.includes(lawnMowDetalis)) {
        } else {listOfServices.push(lawnMowDetalis)};
    }
    update();
})

weeds.addEventListener("click", function(){
    if (listOfServices.length === 0) {
        listOfServices.push(pullWeedsDetails);
    } else {
        if (listOfServices.includes(pullWeedsDetails)) {
        } else {listOfServices.push(pullWeedsDetails)};
    }
    update();
})

// Change HTML: List of services and total amount
function update() {
    // list of services
    let services = "";
    for (let i = 0; i < listOfServices.length; i++) {
        services += `
        <div class="service-and-price">
            <div>
                <p class="service-description">
                    ${listOfServices[i].nameOfService}
                </p>
                <button class="remove" onclick="remove_${listOfServices[i].id}()">Remove</button>
            </div>
            <div>
                <p class="price">
                    <span class="dollar">$</span>${listOfServices[i].price}
                </p>
            </div>  
        </div>
        `
    }
    tasks.innerHTML = services;

    // total amount & notes
    let cost = 0;
    let finalAmount = "";
    if (listOfServices.length > 0) {
        for (let i = 0; i < listOfServices.length; i++) {
            cost += listOfServices[i].price
            finalAmount = `$${cost}`
        }
        totalCost.textContent = finalAmount;
        notes.textContent = "We accept cash, credit card or PayPal";
    } else {
        totalCost.textContent = "$0";
        notes.textContent = "";
    }
}

// Remove buttons
function remove_1() {
    // find the index of the object - wasCarDetails in the array
    let itemToRemoveIndex = listOfServices.findIndex(function(listOfServices) {
        return listOfServices.id === 1;
    });
    
    // remove object - wasCarDetails from the array
    listOfServices.splice(itemToRemoveIndex, 1);

    // update the HTML content based on the new array
    update();
}

function remove_2() {
    let itemToRemoveIndex = listOfServices.findIndex(function(listOfServices) {
        return listOfServices.id === 2;
    });
    
    listOfServices.splice(itemToRemoveIndex, 1);

    update();
}

function remove_3() {
    let itemToRemoveIndex = listOfServices.findIndex(function(listOfServices) {
        return listOfServices.id === 3;
    });

    listOfServices.splice(itemToRemoveIndex, 1);

    update();
}

// Reset button - Send invoice
sendInvoice.addEventListener("click", function(){
    listOfServices = [];
    tasks.innerHTML = "";
    totalCost.textContent = "$0";
    notes.textContent = "";
})

