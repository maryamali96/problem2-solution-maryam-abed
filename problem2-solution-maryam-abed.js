function validateRecipeWithQuantity(fridge,ingredients){
  let result;

for(let i=0;i<ingredients.length;i++){
  for(let j=0;j<fridge.length;j++){
    if(ingredients[i]===fridge[j]&& ingredients[i+1]<=fridge[j+1]){

     result=true;
     i=i+1
     j=j+1
    }
    
    else{
       result=false;
       i=i+1
       j=j+1
    }
    }
    }
alert (result)

}
validateRecipeWithQuantity(['banana',5],['banana',6])