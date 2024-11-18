function handleClick() {

    const button = document.getElementById("button");
    const mainSection = document.getElementById("main");
    const inputHouseName = document.getElementById("houseName");
    const inputHouseImage = document.getElementById("imageUpload");
    const inputDescription = document.getElementById("description")
    const inputSquareMeters = document.getElementById("squareMeters")
    const inputPricePerSQMT = document.getElementById("pricePerSQMT");

    inputHouseName.addEventListener("blur", function () {
        if (inputHouseName.value.trim() === "") {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
    
    button.addEventListener("click", function () {

        const complete = isFormComplete();
        if (!complete) {
            alert("You must fill every field!")
            return;
        } 

        const houseName = inputHouseName.value;
        const houseImage = inputHouseImage.files[0];
        const houseDescription = inputDescription.value;
        const squareMeters = inputSquareMeters.value;
        const pricePerSQMT = inputPricePerSQMT.value;

        const totalCost = squareMeters * pricePerSQMT;

        const card = new HouseCard(houseName, houseImage, houseDescription, squareMeters, totalCost);
        card.generateElement(mainSection);

        // Reset the fields after creating the card
        inputHouseName.value = "";
        inputHouseImage.value = "";
        inputDescription.value = "";
        inputSquareMeters.value = "";
        inputPricePerSQMT.value = "";

    });

};

document.addEventListener("DOMContentLoaded", handleClick);

function HouseCard(houseName, houseImage, description, squareMeters, totalCost) {
    this.houseName = houseName;
    this.houseImage = houseImage;
    this.houseDescription = description;
    this.squareMeters = squareMeters;
    this.totalCost = totalCost;
}

HouseCard.prototype.generateElement = function (mainSection) {

    //HOUSE DIV GENERATOR
    const house = document.createElement("div");
    house.id = "house";
    mainSection.appendChild(house);

    //HOUSE TITLE SETTER
    const houseNameH = document.createElement("h2");
    houseNameH.id = "houseHeading"
    houseNameH.textContent = this.houseName;
    house.appendChild(houseNameH);

    //HOUSE IMG SETTER
    const houseImg = document.createElement("img");
    houseImg.id = "img";
    houseImg.src = URL.createObjectURL(this.houseImage);
    houseImg.alt = `Image of ${this.houseName}`;
    house.appendChild(houseImg);

    //HOUSE DESCRIPTION SETTER
    const descriptionP = document.createElement("p");
    descriptionP.id = "houseDescription";
    descriptionP.textContent = "Description: " + this.houseDescription;
    house.appendChild(descriptionP);

    //SQUARE METERS SETTER
    const squareMetersP = document.createElement("p");
    squareMetersP.id = "squareMetersP";
    squareMetersP.textContent = "Square meters: " + this.squareMeters;
    house.appendChild(squareMetersP);

    //TOTAL COST SETTER
    const totalCostP = document.createElement("p");
    totalCostP.id = "totalCost";
    totalCostP.textContent = "Total cost: "+this.totalCost;
    house.appendChild(totalCostP);

    return house;
};

function isFormComplete() {
    const inputHouseName = document.getElementById("houseName");
    const inputHouseImage = document.getElementById("imageUpload");
    const inputDescription = document.getElementById("description");
    const inputSquareMeters = document.getElementById("squareMeters");
    const inputPricePerSQMT = document.getElementById("pricePerSQMT");

    if (!inputHouseName.value || !inputHouseImage.files[0] || !inputDescription.value || !inputSquareMeters.value || !inputPricePerSQMT.value) {
        return false;  // Form is not complete
    }
    return true;  
};