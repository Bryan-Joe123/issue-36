class Form{
    constructor(){

    }

    display(){
        //Name Button
        var nameInput=createInput("Name");
        nameInput.position(50,100);
        var changeNameButton=createButton("Change Name");
        changeNameButton.position(50,125);
        changeNameButton.mousePressed(function(){
            dog.setName(nameInput.value());
        }); 

        //Feed Button
        var feedButton=createButton("Feed");
        feedButton.position(width/2,10)
        feedButton.mousePressed(function(){
            food.updateHunger(+5)
            food.updateFoodStock(-1);
        }); 
    }
}