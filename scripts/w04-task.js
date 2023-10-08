/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myPfofile = {

    name: "Bruno Panzacchi",
    photo: "images/bruno.png",
    favoriteFood : ['Pizza','Asado','French toast','Chivito','Dulce de leche'],
    hobbies: ['Drive race cars','Play videogames','Read', 'Dance', 'Camping'],
    placesLived: []

};

const imageElement = document.querySelector('img');

/* Populate Profile Object with placesLive objects */

myPfofile.placesLived.push({
    place:'Montevideo, Uruguay',
    length: '37 years'
})
myPfofile.placesLived.push({
    place:'Bogota, Colombia',
    length: '2 years'
})
myPfofile.placesLived.push({
    place:'Lima Peru',
    length: '1 week'
})


/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myPfofile.name

/* Name */

/* Photo with attributes */

imageElement.setAttribute('src', myPfofile.photo);
const imgElement = document.getElementById("photo");

/* Favorite Foods List*/

const ulElement = document.getElementById('favorite-foods');
myPfofile.favoriteFood.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */


myPfofile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});



/* Places Lived DataList */

const dlElement = document.getElementById("places-lived");

myPfofile.placesLived.forEach(function(placeInfo) {
    const dtElement = document.createElement("dt");
    dtElement.textContent = placeInfo.place;
    const ddElement = document.createElement("dd");
    ddElement.textContent = placeInfo.length;
    
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});