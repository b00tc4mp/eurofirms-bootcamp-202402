//Objetos

var basementGallery = {
    0: 'Garden at Vethelieu by Monet',
    1: 'Waterlily by Monet',
    2: 'Flower Garden by Monet',
    3: 'Waterlilies by Monet',

    'Total Pictures':4
    
};
var firstFloorGallery = {
    0: 'The starry night by Van Gogh',
    1: 'cafe terrace at night by Van Gogh',
    2: 'Sunflowers by Van Gogh',
    3: 'Bedroom in Arles by Van Gogh',
    
    'Total Pictures':4 
};

var secondFloorGallery = {
    0: 'Aeneas and the Sibyl by Turner',
    1: 'Snow storm by Turner',
    2: 'Fishermen at Sea by Turner',
    3: 'Sunrise with sea monsters by Turner',
    
    'Total Pictures': 4
};

console.log(basementGallery);

//Array

var museum =[basementGallery, firstFloorGallery, secondFloorGallery];

//funciones

//AddPicture

function addPicture(galleryIndex, pictureTitle, artist, museum){
    if (galleryIndex < 0 || galleryIndex >= museum.length){
        //por si te equivocas al escribir o no existe galeria
        console.log ('error: esta galeria no existe');
        return;
    }
    var gallery = museum[galleryIndex];
    //para obtener el numero total de obras
    var totalPictures = gallery['total Pictures']|| 0;

    //añadir
    gallery[totalPictures]= '${pictureTitle}by ${artist}';
    totalPicures++;//incrementa el numero en la galeria después de añadir
    
    //Actualiza el total de la galeria
    gallery['Total Pictures']= totalPictures;

    console.log('la obra ha sido añadida');
}

addPicture(4, 'A lot of Flowers', 'Monet', museum);


//sumar AllPictures

function allPictures(museum){
    var allMuseumPictures = 0;
    //Primero recorreré cada galería
    for (var i= 0;i < museum.lenght; i++){
        //obtendré el objeto
        var gallery = museum[i];
        //sumar el numero de cuadros en las galerias
        if (gallery.hasOwnProperty('Total Pictures')){
            allMuseumPictures += gallery['Total Pictures'];
        } else{

            //sumar el número de propiedades en 'Total Pictures'
            allMuseumPictures +=Object.keys(gallery).length;
        }
    }
    //Return cuadros totales
    return allMuseumPictures
}


console.log(allPictures(museum));

//lista de cuadros de Van Gogh
function vanGoghPaintings(museum){
    //array de cuadros de van gogh
    var vanGoghList =[];
    //recorrer las galerias
    for (var j = 0; j < museum.lenght; j++){
        //obtener el objeto de galeria 
        var gallery = museum[j];
        //iterar sobre las porpiedades del objeto
        for(var key in gallery){
            if(gallery.hasOwnProperty(key) && gallery[key].includes('Van Gogh')){
                //agregar cuadros a una lista 
                vanGoghList.push(gallery[key]);
                
            }
        }
        
    }

    //devolver lista de cuadros
    return vanGoghList;
    
}

console.log(vanGoghPaintings(museum));




