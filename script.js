"use strict";

let AirBudget = 0;
let money = document.getElementById("money");
let planess = document.getElementById("planes");
let chopperss = document.getElementById("choppers");
let sailBoat = document.getElementById("sailBoat");
let cruiseBoat = document.getElementById("cruiseBoat");
let motorBoat = document.getElementById("motorBoat");
let speedBoat = document.getElementById("speedBoat");
let yachtBoat = document.getElementById("yachtBoat");
let btType = "";
let btPrice = 0;
let features = document.getElementsByClassName('boatFeatures');
let featuresList = "";
let cAir = document.getElementById("cAir");
let cWater = document.getElementById("cWater");
let cLand = document.getElementById("cLand");
let pAir = document.getElementById("pAir");
let pWater = document.getElementById("pWater");
let pLand = document.getElementById("pLand");
let regex =/[0-9]/;
let aircraftType;
let priceCar;
let carBrand;
let plane1 = document.getElementById("plane1");
let plane2 = document.getElementById("plane2");
let plane3 = document.getElementById("plane3");
let plane4 = document.getElementById("plane4");
let plane5 = document.getElementById("plane5");
let plane6 = document.getElementById("plane6");

let heli1 = document.getElementById("heli1");
let heli2 = document.getElementById("heli2");
let heli3 = document.getElementById("heli3");
let heli4 = document.getElementById("heli4");
let heli5 = document.getElementById("heli5");
let heli6 = document.getElementById("heli6");

function checkMed() {
    //console.log(cAir.checked);
    if (cAir.checked === true) {
        pAir.style.display = "block";
        pWater.style.display = "none";
        pLand.style.display = "none";
    }
    else if (cWater.checked === true) {
        pAir.style.display = "none";
        pWater.style.display = "block";
        pLand.style.display = "none";
    }
    else if (cLand.checked === true) {
        pAir.style.display = "none";
        pWater.style.display = "none";
        pLand.style.display = "block";
    }
    else {
        pAir.style.display = "none";
        pWater.style.display = "none";
        pLand.style.display = "none";
    }
}
function checkType() {
    aircraftType= document.getElementById("aircraftType").value;
    AirBudget = pAirBudget.value;
    
    if (aircraftType === "Airplane") {
        money.innerHTML = "$" + AirBudget + " Plane";
        chopperss.style.display = "none";
        planess.style.display = "block";
        if(AirBudget < 900000)
    {
    plane1.style.display = "block";
    plane2.style.display = "none";
    plane3.style.display = "none";
    plane4.style.display = "none";
    plane5.style.display = "none";
    plane6.style.display = "none";
    }
    else if(AirBudget > 900000  && AirBudget < 1800000) 
    {
    plane1.style.display = "none";
    plane2.style.display = "block";
    plane3.style.display = "none";
    plane4.style.display = "none";
    plane5.style.display = "none";
    plane6.style.display = "none";
    }
    else if(AirBudget > 1800000 && AirBudget < 2700000)
    {
    plane1.style.display = "none";
    plane2.style.display = "none";
    plane3.style.display = "block";
    plane4.style.display = "none";
    plane5.style.display = "none";
    plane6.style.display = "none";
    }
    else if(AirBudget > 2700000 && AirBudget < 3600000)
    {
    plane1.style.display = "none";
    plane2.style.display = "none";
    plane3.style.display = "none";
    plane4.style.display = "block";
    plane5.style.display = "none";
    plane6.style.display = "none";
    }
    else if(AirBudget > 3600000 && AirBudget < 5000000)
    {
    plane1.style.display = "none";
    plane2.style.display = "none";
    plane3.style.display = "none";
    plane4.style.display = "none";
    plane5.style.display = "block";
    plane6.style.display = "none";
    }
    else
    {
    plane1.style.display = "none";
    plane2.style.display = "none";
    plane3.style.display = "none";
    plane4.style.display = "none";
    plane5.style.display = "none";
    plane6.style.display = "block";
    }    
    }
    else if (aircraftType === "Helicopter") {
        money.innerHTML = "$" + AirBudget + " Helicopter";
        planess.style.display = "none";
        chopperss.style.display = "block";
        if(AirBudget < 900000)
        {
        heli1.style.display = "block";
        heli2.style.display = "none";
        heli3.style.display = "none";
        heli4.style.display = "none";
        heli5.style.display = "none";
        heli6.style.display = "none";
        }
        else if(AirBudget > 900000  && AirBudget < 1800000) 
        {
        heli1.style.display = "none";
        heli2.style.display = "block";
        heli3.style.display = "none";
        heli4.style.display = "none";
        heli5.style.display = "none";
        heli6.style.display = "none";
        }
        else if(AirBudget > 1800000 && AirBudget < 2700000)
        {
        heli1.style.display = "none";
        heli2.style.display = "none";
        heli3.style.display = "block";
        heli4.style.display = "none";
        heli5.style.display = "none";
        heli6.style.display = "none";
        }
        else if(AirBudget > 2700000 && AirBudget < 3600000)
        {
        heli1.style.display = "none";
        heli2.style.display = "none";
        heli3.style.display = "none";
        heli4.style.display = "block";
        heli5.style.display = "none";
        heli6.style.display = "none";
        }
        else if(AirBudget > 3600000 && AirBudget < 5000000)
        {
        heli1.style.display = "none";
        heli2.style.display = "none";
        heli3.style.display = "none";
        heli4.style.display = "none";
        heli5.style.display = "block";
        heli6.style.display = "none";
        }
        else
        {
        heli1.style.display = "none";
        heli2.style.display = "none";
        heli3.style.display = "none";
        heli4.style.display = "none";
        heli5.style.display = "none";
        heli6.style.display = "block";
        }
    
    }
    else{
        money.innerHTML = "$" + AirBudget + " Both";
        planess.style.display = "block";
        chopperss.style.display = "block";
    }       
    
}

function buyBoat() {
    if (sailBoat.checked) {
        btType = "Sail Boat";
        btPrice = 50000;
        features[0].disabled = true;
        features[1].disabled = true;
        features[7].disabled = true;
    }
    else if (cruiseBoat.checked) {
        btType = "Cruise Boat";
        btPrice = 100000;
        features[3].disabled = true;
        features[0].disabled = true;
        features[1].disabled = true;
        features[7].disabled = true; 
    }
    else if (motorBoat.checked) {
        btType = "Motor Boat";
        btPrice = 200000;
    }
    else if (speedBoat.checked) {
        btType = "Speed Boat";
        btPrice = 500000;
    }
    else if (yachtBoat.checked) {
        btType = "Yacht Boat";
        btPrice = 1000000;
    }
    console.log(btType + "$" + btPrice);

    window.onload = function(){
    for (let i = 0; i < features.length; i++) {
        if ( features[i].checked == true)
            featuresList += features[i].value + "\t";
        }
        for(let i = 0; i < features.length; i++) {
        if (i = 0 && features[i].checked == true) { btPrice += 5000; }
        if (i = 1 && features[i].checked == true) { btPrice += 1000; }
        if (i = 2 && features[i].checked == true) { btPrice += 1500; }
        if (i = 3 && features[i].checked == true) { btPrice += 200; }
        if (i = 4 && features[i].checked == true) { btPrice += 7000; }
        if (i = 5 && features[i].checked == true) { btPrice += 1000; }
        if (i = 6 && features[i].checked == true) { btPrice += 2500; }
        if (i = 7 && features[i].checked == true) { btPrice += 5000; }
        if (i = 8 && features[i].checked == true) { btPrice += 200; }
    }
    let color = document.getElementById("ColorSelect");
    let col = color[color.innerText];
    console.log(btPrice + " " + featuresList + " " + col);
}

}
function genderCheck(){
    if(document.getElementById("male").checked == true){
        document.getElementById("pMale").style.display = "block";
        document.getElementById("pFemale").style.display = "none";
        document.getElementById("pOther").style.display = "none";

    }
    else if(document.getElementById("female").checked == true){
        document.getElementById("pMale").style.display = "none";
        document.getElementById("pFemale").style.display = "block";
        document.getElementById("pOther").style.display = "none";
    }
    else if(document.getElementById("other").checked == true){
        document.getElementById("pMale").style.display = "none";
        document.getElementById("pFemale").style.display = "none";
        document.getElementById("pOther").style.display = "block";
    }
    
}
function manCar(){
    priceCar = document.getElementById("priceBox").value;
    //console.log(priceCar);
    if(!priceCar.match(regex)){
        alert("Please dakhil ra2m");
    }
    carBrand = document.getElementById("carBrand").value;
    //console.log(carBrand);
    if(priceCar < 10000){
        alert("You'll just get a shitbox on wheels like a KIA Picanto");
    }
    else if(priceCar > 1000000){
        alert("Don't you have like some sort of car counselor with that much money?");
    }
    else if(carBrand == "Honda" || carBrand == "Toyota"){
        alert("You just went with a lame option... Stupid");
    }
    else if(carBrand == "Bmw" || carBrand == "Mercedes"){
        alert("You know your stuff");
    }
    else if(carBrand == "VolksWagen" || carBrand == "Audi" ) {
        alert("You seem to have a love affair with check engine lights, don't you?");
    }  
}

