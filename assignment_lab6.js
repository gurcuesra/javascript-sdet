// Task

var listArray=["Orange", "Apple"];

while(true){
    var shoppingList=parseInt(prompt("Please select one of them: \n 1- Add a new product to your shopping list \n 2- Remove a product from your sopping list \n 3- Edit a product from your shopping list \n 4- Print the shopping list \n 5- Exit the program."));
    
    
    if(shoppingList==1){      // 1- Add a product
        var list = prompt("Currently you have:" + listArray + "\nWhat you want to add?");

        listArray.push(list);
        alert("New list: " +listArray);
    
    
    } else if (shoppingList == 2){    // 2 - Remove
      var removeElement= prompt("Currently you have:" + listArray + "\nWhat you want to remove?")

      var removed = false;
        for(var i=0; i<listArray.length; i++){
            if(removeElement == listArray[i]){
                listArray.splice(i,1);
                removed = true;
            }
        }

        if(removed == true){
            alert(removeElement + " is succesfully removed");
            alert(listArray);
        } else {
            alert(removeElement + " could not found");
        }  
        
        
    } else if(shoppingList == 3){    // 3- Edit a product
        
        var editElement= prompt("Currently you have:" + listArray + "\nEnter what you want to change?")
        var newElement= prompt("What is the new product that you want to enter?")

        var edited = false;
        for(var i=0; i < listArray.length; i++){
            if(editElement == listArray[i]){
                listArray.splice(i,1,newElement);
                edited = true;
            }
        }

        if(edited == true){
            alert("Succesfully changed");
            alert(listArray);
        } else {
            alert(newElement + " could not found");
        }
        
        
        
    } else if (shoppingList == 4){     // 4 - Print the shopping list
        
        for(var p=1; p<=listArray.length; p++){
            for(var i=0; i<p; i++){
                var a = listArray[i]; 
        }
        alert(p + "-" + a);
        }
        
        
        
    } else if (shoppingList == 5) {     // 5- Exit the program
        alert("Thank you");
        break;
        
        
        
    } else {
        alert("Please write numbers between 1 to 5!!!");
    }
}



