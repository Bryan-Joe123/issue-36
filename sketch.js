var dog, happyDog,foodS,hunger=0;
var database, foodStock, dogName, lastFed;
 

function preload(){
    happyDog=loadImage("Images/happydog.png");
    dog=loadImage("Images/Dog.png");
}

function setup(){
    createCanvas(800,500);
    database=firebase.database();
    foodStock=database.ref('pet/food');
    food = new Food();
    food.getFoodStock();
    food.updateLastFed();

    dog = new Dog(600,250,{happy:happyDog,hungry:dog});    
    form = new Form();
    form.display();  
    dog.getName();
}

function draw(){
    background("white");
    dog.display();
    textSize(20);
    fill("black");
    text(dogName+" the dog",550,175)

    if(lastFed>=12){
        text("Last Fed: "+lastFed%12+"PM",250,30);
    }else if(lastFed==0){
        text("Last Fed: 12AM",250,30);
    }else{
        text("Last Fed: "+lastFed+"AM",250,50);
    }

    drawSprites();
}
