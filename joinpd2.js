// Task

// 1- Add a program

//var listArray = [];
//
//for(var i=0; i<3; i++){
//    var list = prompt("Currently you have:" + listArray + " What you want to add?");
//    listArray.push(list);
//}
//console.log("Your bag is: " +listArray.toString());


// Jamal's way:

//var userArray=["Orange", "Apple"];
//var element = prompt("Currently you have:" + userArray + "\nWhat you want to add?");
//
//userArray.push(element);
//alert("new list: " +userArray);
//
//
//
//// 2 - Remove 
//var removeElement= prompt("Currently you have:" + userArray + "\nWhat you want to remove?")
//
//var removed = false;
//for(var i=0; i<userArray.length; i++){
//    if(removeElement == userArray[i]){
//        userArray.splice(i,1);
//        removed = true;
//    }
//}
//
//if(removed == true){
//    alert(removeElement + " is succesfully removed");
//    alert(userArray);
//} else {
//    alert(removeElement + " could not found");
//}
//
//
//
//
//
//
//// 3- Edit a product
//
//var editElement= prompt("Currently you have:" + userArray + "\nEnter what you want to change?")
//var newElement= prompt("What is the new product that you want to enter?")
//
//var edited = false;
//for(var i=0; i<userArray.length; i++){
//    if(editElement == userArray[i]){
//        userArray.splice(i,1,newElement);
//        edited = true;
//    }
//}
//
//if(edited == true){
//    alert("Succesfully changed");
//    alert(userArray);
//} else {
//    alert(newElement + " could not found");
//}




// 4 - Print the shopping list


var shoppinList=["Orange","Apple"];
var element=prompt("Currently you have: "+ shoppinList+"\nWhat do you want to add?");
var removed=false
 shoppinList.push(element);
 alert("new list: "+ shoppinList);
element=prompt("Currently you have: "+ shoppinList+"\nWhat do you want to change?");
for(a=0;a< shoppinList.length;a++){
  if( shoppinList[a]==element){
     shoppinList.splice(a,1,element);
      removed=true
  }
}
   if(removed){
       alert("succesfully cganged"); 
       alert(shoppinList);
   }else {
       alert("didnt change")
   }

