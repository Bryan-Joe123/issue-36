class Food{
    constructor(){

    }

    display(){

    }

    getFoodStock(){
        var foodStockRef=database.ref('pet/foodStock');
        foodStockRef.on("value",function(data){
            foodStock=data.val();
        });
    }

    getHunger(){
        var hungerRef=database.ref('pet/hunger');
        hungerRef.on("value",function(data){
            hunger=data.val();
        });
    }

    updateFoodStock(amount){
        console.log(foodStock);
        foodStock=foodStock+amount;
        database.ref('pet').update({foodStock:foodStock});
    }

    updateHunger(amount){
        hunger=hunger+amount;
        database.ref('pet').update({hunger:hunger});
    }
}