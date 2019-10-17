/****************** JAVASCRIPT FUNDAMENTALS - MODULE 2 - HOTEL RESERVATIONS ********/

/*********************************** PART 1: Displaying hotel information to user ***********************************/
/*Chelsea Lewis has given feedback about the web page and she wants to see more
information about the hotel that her customers were selecting, mainly the hotel price. */

//This is the information you are given about the client's hotels.
//The prices are related to the hotel name by index, so
//The Commodore costs R3000, The Table Bay Hotel costs R6000 and the Cape Grace costs R2000
var hotel = ["The Commodore Hotel", "The Table Bay Hotel", "Cape Grace"];
var priceofHotel = [3000, 6000, 2000];

//Function for displaying the hotel information (Hotel name and Price)
function displayHotelInfo(){
var div = document.getElementById("hotelInfo");
//for each hotel, add a paragraph tag containing name and price
  for(var i = 0; i < hotel.length; i++){
//Activity 1 - Create a variable called text and set it equal to - hotel[i] + " - " + "R" + priceofHotel[i];
//Please add the code below
var text = hotel[i] +" - " + "R" + priceofHotel[i];

//Activity 2 - You must create a text node using the document.createTextNode(); method
//Start by creating a new variable called textNode and set it equal to document.createTextNode();
///Pass the String variable you created in the last step as the parameter to createTextNode
//Please add the code below
textNode = document.createTextNode(text);

//Activity 3 - Create a variable called newParagraph and set it equal to - document.createElement("");
///Pass the p tag (paragraph tag) as the parameter.

newParagraph =document.createElement("p");

//Activity 4 - Now we need to append text to the paragraph element we created here’s how you would it - newParagraph.appendChild();
//Pass textNode as a parameter to appendChild();
//Please add the code below
newParagraph.appendChild(textNode);

//Activity 5 - Append the paragraph elements to the div tag. 
//Copy and paste div.appendChild(); below
//Pass in newParagraph as a parameter to appendChild();
    div.appendChild(newParagraph);
  }
}
//Activity 6 - Call the function displayHotelInfo here
//Please add the code below
displayHotelInfo()


/*********************************** PART 2: Dealing with the dropdown menu ***********************************/
/*Chelsea Lewis is happy with your solution to add the price to the hotel as a description.
*She now wants you to create a function that calculates the total cost of the hotel
*based on the number of night the customer will be staying.
*/

//Activity 7 - Write a function that gets the number of days entered by the user.  Call it "getDays"
//This function will get the number of days the user has entered.
//Inside the function create a variable called daysElement and use document.getElementById
//to return the <input> element that has the ID attribute “numDays”.
//Use the return method to return the value of the element. Use the .value method.
//Please add the code below - Remember ask your facilitator if you are stuck
function getDays(){
     var daysElement = document.getElementById("numDays");
    console.log(daysElement.value)
    return daysElement.value
  }
//  getDays()
//Activity 8.1 - Below, define a new function called getInputValue, that takes the id of the element.
//The parameter is used parse in the name of an id in an HTML tag and returns the value that user has inputted.
//Inside the function you have created you have to: 
        //Activity 8.2 -  create a variable and call it element and set it equal to document.getElementById() and pass id as a parameter
        //Activity 8.3 -  use the return method to return the value of the element. 
        //HINT: Look at the return in the getDays() function for guidance.
        //You can delete getDays() after you have completed the getInputValue function
function getInputValue(id) {
  var element = document.getElementById(id)
  return element.value
}

// getInputValue()
//Fill in this function
/*This function should get the hotel selected by the user in the dropdown
* and the number of nights.
* It should return the total cost of the reservation.
*/
function calculateTotalCost(){

//Activity 9 - Create a variable called selectedHotel that gets the value of the dropdown.
//HINT: use document.getElementById().value; to get the value
//Please add the code below
 var selectedHotel = document.getElementById("dropdown").value

//Activity 10 - Console log selectedHotel to test if you were successful.
//Please add the code below
//If you see "The Commodore Hotel" in the console then you are successful!

var hotelCost = getHotelCost(selectedHotel);


//Activity 11 - Get the number of days entered by the user, and save it in a variable.
//Create a variable called days and set it equal to getInputValue("").
//Pass in numDays as a parameter.
//Activity 12 - Console log days and if you get 3 as a value then you're successful!
days = getInputValue("numDays")

// return parseInt(days)*parseInt(hotelCost);

//Activity 13.1 - Now that you got the user’s input calculate the total cost and return the value, 
//you’ll have to convert a String into an integer using parseInt() method.
//Please add the code below

//Activity 24.1 - Ignore this activity until you've completed PART 3 - Create a variable called insurance and set it equal to zero

var insurance = 0
//Activity 24.2 - Create an if statement that has addInsurance as a condition
//Inside the if statement set the insurance variable to 50
//Now add the insurance value to the total cost calculation

if(document.getElementById("checkbox").checked){
  
  insurance= 50
}
return parseInt(days)*parseInt(hotelCost) + insurance;

}
//Activity 13.2 - Console log calculateTotalCost(). if you get 9000 as an answer then you are successful!
//Add the code below

console.log(calculateTotalCost())

/* This function has been written for you to use.
* It takes as a parameter the name of a hotel, and returns an integer representing that hotel's cost.
*/
function getHotelCost(hotelName){
  var index = hotel.indexOf(hotelName);
  return priceofHotel[index];
}


/****************** PART 3: Putting everything together ******************/
/*Everything is almost complete. All you need to do now is output a message that contains information that the user has inputted.
In the function below do the following:*/
var clickedSubmit = false 
function displayConfirmation(){

  if (clickedSubmit === true){
    return
  }
//Activity 15 - Get the total cost and save it in a variable.
//Please add the code below
  else{
var days = getInputValue("numDays")
var selectedHotel = document.getElementById("dropdown").value;
var hotelCost = getHotelCost(selectedHotel);
totalCost = parseInt(days) * parseInt(hotelCost);
var firstName = getInputValue("firstNameInput")
var surname = getInputValue("surnameInput")
var message = "Thank you for your reservation "+firstName + " "+surname+" at " +selectedHotel+". The total amount is R"+totalCost;
var div = document.getElementById("output");
var txtNode = document.createTextNode(message);
div.appendChild(txtNode);
  }
}

//Activity 16 - Use the getInputValue() function to get the first name entered by the user. Store the value in a variable.
//Please add the code below


//Activity 17 - Use the getInputValue() function to get the name of the hotel selected by the user. Store the value in a variable.
//Please add the code below


//Activity 18 - Now create a variable called message. Use the variables you made above
//to create an informative message confirming the user's reservation
//Example: Thank you for your reservation "Person's name" at "the selected hotel". The total cost is "total cost".
//Please add the code below


//Activity 19 - Create a variable called div and have it set to document.getElementById("output");
//Please add the code below


//Activity 20 - Create a variable called txtNode and have it set to document.createTextNode(message);
//Please add the code below


//Activity 21 - Copy and paste - div.appendChild(txtNode);
//Please add the code below




/****************** OPTIONAL******************/
/****************** PART 4: Adding a Checkbox ******************/

//Activity 22 - Write a function that returns true if the checkbox with id "checkbox"
//is checked (Hint: use the "checked" attribute), and false otherwise.



//Activity 23 - After you've written this function. Use it in calculateTotalCost and
// displayConfirmation to factor in the insurance cost of R50 to the user's confirmation message.
