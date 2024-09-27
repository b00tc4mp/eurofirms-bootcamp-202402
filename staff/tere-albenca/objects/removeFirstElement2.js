//remove first element of object

var planets = {
    0:'Tierra',
    1:'Urano',
    2:'Jupiter',
    3:'Neptuno', 
    4:'Venus',
    5:'Marte',
    length:6
}

//var planets = {0:'Tierra', 1:'Urano', 2:'Jupiter', 3:'Neptuno',  4:'Venus', 5:'Marte', length:6}
//var planets = {1:'Urano', 2:'Jupiter', 3:'Neptuno',  4:'Venus', 5:'Marte', length:6}
//var planets = {0:'Urano', 1:'Jupiter', 2:'Neptuno',  3:'Venus', 4:'Marte', length:6}
//var planets = {0:'Tierra', 1:'Urano', 2:'Jupiter', 3:'Neptuno',  4:'Venus', 5:'Marte', length:6}
//var planets = {0:'Tierra', 1:'Urano', 2:'Jupiter', 3:'Neptuno',  4:'Venus', 5:'Marte', length:6}
//var planets = {0:'Tierra', 1:'Urano', 2:'Jupiter', 3:'Neptuno',  4:'Venus', 5:'Marte', length:6}

var deleteplanet = planets[0]
function removeFirstPlanet(planet){ 

    for(var i = 0; i < planet.length; i++){
        planet[i] = planet[i + 1];

    }
    
    delete planet[planet.legth -1]
    planets.length--
    return deleteplanet;
}
removeFirstPlanet(planets)
console.log(planets)
