// Write your helper functions here!
require('isomorphic-fetch');


async function pickPlanet () {
    window.addEventListener("load", () => {
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            response.json().then(function (planetaryData) {
                const missionTarget = document.getElementById("missionTarget");
                    let index = Math.floor(Math.random() * (planetaryData.length));
                        missionTarget.innerHTML += `
                            <div>                            
                                <h2>Mission Destination</h2>   
                                    <ol>        
                                        <li>Name:       ${planetaryData[index].name}</li>
                                        <li>Diameter:   ${planetaryData[index].diameter}</li>
                                        <li>Star:       ${planetaryData[index].star}</li>
                                        <li>Distance:   ${planetaryData[index].distance}</li>
                                        <li>Moons:      ${planetaryData[index].moons}</li>
                                    </ol>
                                    <img id="missionTarget img" src=${planetaryData[index].image}></img>
                                </div>
                            `;
            });
        });
    });
}

function formSubmission (document, pilot, copilot, fuelLevel, cargoMass) {

                        launchStatus.innerHTML += `
                        <div>
                            <ol>
                                `
                            pilotStatus.innerHTML = `Pilot ${pilot} Ready`
                                copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;

                            if (fuelLevel >= 10000) {
                                faultyItems.style.visibility = 'visible';
                                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                                        launchStatus.style.color = `green`;
                                            fuelStatus.innerHTML = `Fuel level high enough for launch`;
       
                            }
                            if (cargoMass <= 10000) {
                                faultyItems.style.visibility = 'visible';
                                    launchStatus.innerHTML = `Shuttle is ready for launch`;
                                        launchStatus.style.color = `green`;
                                            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
       
                            }    
                            if (fuelLevel <= 10000){
                                faultyItems.style.visibility = 'visible';
                                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                                        launchStatus.style.color = `red`;
                                            fuelStatus.innerHTML = `Fuel level too low for launch`;
                            }
                            if (cargoMass >= 10000) {
                                faultyItems.style.visibility = 'visible';
                                    launchStatus.innerHTML = `Shuttle not ready for launch`;
                                        launchStatus.style.color = `red`;
                                            cargoStatus.innerHTML = `Cargo mass over capacity for launch`;
                            }                                                     
                                    `
                                </ol>
                            </div>
                            `; 
                        
}

function validateInput() {
document.addEventListener("submit", function (event) {
    event.preventDefault();

            const pilotName = document.querySelector("[name=pilotName]").value;
            const copilotName = document.querySelector("[name=copilotName]").value;
            const fuelLevel = document.querySelector("[name=fuelLevel]").value;
            const cargoMass = document.querySelector("[name=cargoMass]").value;
                    let emptyFields = "";
                        let nonAlpha = "";
                            let nonNumeric = "";

                    if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
                    emptyFields = "All fields must be filled in.\n";
                    }

                    if (pilotName.match(/[0-9]/g) != null || copilotName.match(/[0-9]/g) != null) {
                    nonAlpha = "Pilots names must be alpha characters.\n";
                    }
            
                    if (isNaN(fuelLevel) || isNaN(cargoMass)) {
                    nonNumeric = "Fuel levels and Cargo mass must be numeric.\n";
                    }
            
                    if (emptyFields || nonAlpha || nonNumeric) {
                    let errorMessage = `${emptyFields}${nonAlpha}${nonNumeric}`;
                    alert(errorMessage);
                    }

                    else { formSubmission(event, pilotName, copilotName, fuelLevel, cargoMass); }

 });
}

async function myFetch() {
let planetsReturned;

await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {response.json().then(function (planetsReturned) {

    return planetsReturned;
    });

});


}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
// Here is the HTML formatting for our mission target div.

//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
//     response.json().then(function (json) {
     const missionTarget = document.getElementById("missionTarget");

                 missionTarget.innerHTML += `
                     <div>
                         <ol>        
                             <li>Name: ${name}</li>
                             <li>Diameter: ${diameter}</li>
                             <li>Star: ${star}</li>
                             <li>Distance: ${distance}</li>
                             <li>Moons: ${moons}</li>
                         </ol>
                         <img src=${imageUrl}></img>
                     </div>
                             `;

}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

