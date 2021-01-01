var dog, happyDog,foodS,hunger=0;
var database, foodStock, dogName;
 

function preload(){
    happyDog=loadImage("Images/happydog.png");
    dog=loadImage("Images/Dog.png");
}

function setup(){
    createCanvas(800,500);
    database=firebase.database();
    foodStock=database.ref('pet/food');
    food = new Food();

    dog = new Dog(600,250,{happy:happyDog,hungry:dog});    
    form = new Form();
    form.display();  
    dog.getName();
    food.getFoodStock();
}

function draw(){
    background("white");
    dog.display();
    textSize(20);
    fill("black");
    text(dogName+" the dog",550,175)

    drawSprites();
}
