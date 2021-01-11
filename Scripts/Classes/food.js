class Food{
    constructor(){

    }

    display(){

    }

    getFoodStock(){
        var foodStockRef=database.ref('pet/foodStock');
        foodStockRef.on("value",function(data){
            console.log(data.val());
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
        foodStock=foodStock+amount;
        database.ref('pet').update({foodStock:foodStock});
    }

    getLastFed(amount){
        database.ref('pet').update({lastFed:hour()});
    }

    updateLastFed(amount){
        var lastFedRef=database.ref('pet/lastFed');
        lastFedRef.on("value",function(data){
            lastFed=data.val();
        });
    }

    updateHunger(amount){
        hunger=hunger+amount;
        database.ref('pet').update({hunger:hunger});
    }
}