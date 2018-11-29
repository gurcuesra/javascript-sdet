var total = 0;

outer:
while(true){
    var mainScreen = parseInt(prompt("What type of product you want to buy, please enter number \n1-Vegetables \n2-Fruits"));
    
    if(mainScreen == 1){
        outer_in_1:
        while(true){
            var vegetablesScreen = parseInt(prompt("1-Cucumber $2.5 \n2-Tomatoes $3 \n3-Onion $1.5 \n4-Pepper $2 \n5-Carrot $4"));
            
            if(vegetablesScreen == 1){
                outer_in_ve_1:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Cucumber"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 2.5;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_ve_1;
                    }
                    
                }
                
            } else if(vegetablesScreen == 2){
                outer_in_ve_2:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Tomatoes"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 3;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_ve_2;
                    }
                }
                
            } else if(vegetablesScreen == 3){
                outer_in_ve_3:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Onion"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 1.5;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_ve_3;
                    }
                }
                
            } else if(vegetablesScreen == 4){
                outer_in_ve_4:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Pepper"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 2;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                        
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_ve_4;
                    }
                }
                
            } else if(vegetablesScreen == 5){
                outer_in_ve_5:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Carrot"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 4;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_ve_5;
                    }
                }
                
            } else {
                alert("Please enter valid option");
                continue outer_in_1;
            }
        }
        
        
    } else if(mainScreen == 2){
        outer_in_2:
        while(true){
            var fruitsScreen = parseInt(prompt("1-Orange $3.5 \n2-Banana $4 \n3-WaterMelon $7 \n4-Apple $8 \n5-Cherry $4"));
            
            if(fruitsScreen == 1){
                outer_in_fr_1:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Orange"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 3.5;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_fr_1;
                    }
                    
                }
                
            } else if(fruitsScreen == 2){
                outer_in_fr_2:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Banana"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 4;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_fr_2;
                    }
                    
                }
                
            } else if(fruitsScreen == 3){
                outer_in_fr_3:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of WaterMelon"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 7;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_fr_3;
                    }
                    
                }
                
            } else if(fruitsScreen == 4){
                outer_in_fr_4:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Apple"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 8;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_fr_4;
                    }
                    
                }
                
            } else if(fruitsScreen == 5){
                outer_in_fr_5:
                while(true){
                    var amountScreen = parseInt(prompt("Please enter amount of Cherry"));
                    
                    if(amountScreen >=1 && amountScreen <=100){
                        total = total + amountScreen * 4;
                        alert("Your total is: $" + total);
                        
                        inner:
                        while(true){
                            var continueShopping = parseInt(prompt("Do you want to continue shopping? \n1-Yes \n2-No"));
        
                            if (continueShopping == 1){
                                continue outer;
                            } else if(continueShopping == 2){
                                alert("Your cart total is: $" + total + "\nThank you for shopping with us!");
                                break outer;
                            } else {
                                alert("Please enter valid number");
                                continue inner;
                            }
                        }
                    } else {
                        alert("Please enter amount between 1 to 100");
                        continue outer_in_fr_5;
                    }
                    
                }
                
            } else {
                alert("Please enter valid option");
                continue outer_in_2;
            }
        }
        
        
    } else {
        alert("Please enter valid option");
        continue outer;
    }
   
}