var terrainImage;

var z,z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12,z13,z14,z15,z16,z17,z18,z19,z20,z21,z22,z23,z24,z25,z26,z27,z28,z29,z30,z31,z32,z33,z34,z35,z36,z37,z38,z39,z40;
var c,c1,c2,c3,c4,c5,c6,c7,c8;
function preload(){
    terrainImage = loadImage("./assets/cesped.jpeg");
    defaultPlaceImg = loadImage("./assets/defaulHouse.png");
    
}
function setup(){
    createCanvas(1280,720);

    newTerrains();
   // newPlaces();
    
   

   
  
}
function draw(){
    background('black');
    
    

   
    showTerrains(terrainImage,z);
    //showPlaces();
}


function newTerrains() {
    z = new terrain(0,0);
    z1 = new terrain(0,100);
    z2 = new terrain(0,200);
    z3 = new terrain(0,300);
    z4 = new terrain(0,400);
    z5 = new terrain(0,500);
    z6 = new terrain(0,600);
    z7 = new terrain(100,0);
    z8 = new terrain(200,0);
    z9 = new terrain(300,0);
    z10 = new terrain(400,0);
    z11 = new terrain(500,0);
    z12 = new terrain(600,0);
    z13 = new terrain(700,0);
    z14 = new terrain(800,0);
    z15 = new terrain(900,0);
    z16 = new terrain(1000,0);
    z17 = new terrain(1100,0);
    z18 = new terrain(1200,0);
    z19 = new terrain(1200,100);
    z20 = new terrain(1100,100);
    z12 = new terrain(1000,100);
    z22 = new terrain(900,100);
    z32 = new terrain(800,100);
    z24 = new terrain(700,100);
    z25 = new terrain(600,100);
    z26 = new terrain(500,100);
    z27 = new terrain(400,100);
    z28 = new terrain(300,100);
    z29 = new terrain(200,100);
    z30 = new terrain(100,100);
    z32 = new terrain(0,100);
    z33 = new terrain(0,100);
    z34 = new terrain(0,100);
    z35 = new terrain(0,100);
    z36 = new terrain(0,100);
    z37 = new terrain(0,100);
    z39 = new terrain(0,100);
    z40 = new terrain(0,100);
}

function showTerrains(imagen,recta){
     
     recta.display();
     image(imagen,recta.x,recta.y,100,100);
     image(imagen,recta.x,recta.y,100,200);
     image(imagen,recta.x,recta.y,100,300);
     image(imagen,recta.x,recta.y,100,400);
     image(imagen,recta.x,recta.y,100,500);
     image(imagen,recta.x,recta.y,100,600);
     image(imagen,recta.x,recta.y,100,700);
     image(imagen,recta.x,recta.y,100,100);
     image(imagen,recta.x,recta.y,200,100);
     image(imagen,recta.x,recta.y,300,100);
     image(imagen,recta.x,recta.y,400,100);
     image(imagen,recta.x,recta.y,500,100);
     image(imagen,recta.x,recta.y,600,100);
     image(imagen,recta.x,recta.y,800,100);
     image(imagen,recta.x,recta.y,900,100);
     image(imagen,recta.x,recta.y,1000,100);
     image(imagen,recta.x,recta.y,1100,100);
     image(imagen,recta.x,recta.y,1200,100);
     
     image(imagen,recta.x,recta.y,200,100);
     image(imagen,recta.x,recta.y,200,200);
     image(imagen,recta.x,recta.y,200,300);
     image(imagen,recta.x,recta.y,200,400);
     image(imagen,recta.x,recta.y,200,500);
     image(imagen,recta.x,recta.y,200,600);
     image(imagen,recta.x,recta.y,200,700);
     image(imagen,recta.x,recta.y,100,100);
     image(imagen,recta.x,recta.y,200,200);
     image(imagen,recta.x,recta.y,300,200);
     image(imagen,recta.x,recta.y,400,200);
     image(imagen,recta.x,recta.y,500,200);
     image(imagen,recta.x,recta.y,600,200);
     image(imagen,recta.x,recta.y,800,200);
     image(imagen,recta.x,recta.y,900,200);
     image(imagen,recta.x,recta.y,1000,200);
     image(imagen,recta.x,recta.y,1100,200);
     image(imagen,recta.x,recta.y,1200,200);
     
     


    


}

function newPlaces(){
    c = new places(z.x,z.y);
}

/*function showPlaces(imagen,recta){
    c.display();

    //display
        
    let D = 50; //defaultPlacesSise
    image(defaultPlaceImg,c.x,c.y,D,D);
    
}*/