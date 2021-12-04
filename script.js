

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
            listedPlanetsResponse.then(function (response) {response.json().then(function (listedPlanets) {          
                let index = Math.floor(Math.random() * (listedPlanets.length));
                    console.log(myFetch());
                    console.log(typeof jsonObject);
                    console.log(listedPlanets); 
        })
    });
    preventDefault();
        return listedPlanets;
});
                                pickPlanet();
                            
                                    validateInput();

                                    