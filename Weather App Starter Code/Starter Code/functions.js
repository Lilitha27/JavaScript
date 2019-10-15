/* JAVASCRIPT FUNDAMENTALS MODULE 1: WEATHER APP */

/* This is an object that contains information about the weather in a city.*/
var weatherData = {"city" : "Rio de Janeiro", "temp_celsius" : [27,29,28,21,25, 28, 29], "conditions" : ["rainy","cloudy","sunny","rainy","rainy", "sunny","cloudy"]};
const ZIKA_ITEMS_TO_PACK = ["Bug Spray", "Long Sleeves", "Long Pants", "Swimsuit", "Umbrella"];
const REGULAR_ITEMS_TO_PACK =["Short Sleeves", "Shorts", "Swimsuit", "Sandals"];

/* This variable keeps track of the current temperature unit.
* When its value is "true", that means the web page is displaying
* the temperature in Celsius. When it is false, it means the temperature
* is in fahrenheit. You will use this for converting the 
* temparature to fahrenheit later.
*/
var isCelsius = true;

//Variable for changing the Button text from Fehrenheid to Celsuis
const buttonTextCelsius = "Convert &#8451; to &#8457;";

//Variable for changing the Button text from Celsuis to Fahrenheit
const buttonTextFahrenheit = "Convert &#8457; to &#8451;"; 

//Theses variables store the values of the file paths of the images respectively
const sunnyIcon = "icons/wi-day-sunny.svg";
const rainyIcon = "icons/wi-rain.svg";
const cloudyIcon = "icons/wi-cloudy.svg";

/***************************** PART 1 *****************************/

/* This function takes as a parameter an object that represents the
* weather in one city.  It then uses DOM methods to display temperature
* and condition for each day of the week on the webpage.
*/
function displayAllWeather(){
	var daysArray = document.getElementsByClassName("days");
	var tempArray = document.getElementsByClassName("temp");
	var locationDiv = document.getElementsByClassName("location")[0];

	locationDiv.innerHTML = "<h5>" + weatherData.city + "</h5>";

	for(var i = 0; i < weatherData.conditions.length; i++){
	var iconDiv = daysArray[i];
	var tempDiv = tempArray[i];

/************************************ START STUDENT CODE HERE *******************************/

		//if statement with the weatherData.conditions[i] that gets looped through and if the condition is true an icon will be displayed in the HTML DOM
		if(weatherData.conditions[i] === 'sunny'){

			iconDiv.children[1].src = sunnyIcon;
		} else if(weatherData.conditions[i] === 'rainy'){
		//Activity - Add the rainyIcon here
			iconDiv.children[1].src = rainyIcon;
		} else {
		//Activity - Add the cloudyIcon here
			iconDiv.children[1].src = cloudyIcon;
		}

		if(isCelsius){
			tempDiv.children[0].innerHTML = weatherData.temp_celsius[i];
		} else {
			tempDiv.children[0].innerHTML = weatherData.temp_fahrenheit[i];
		}
	}
}

//Activity - Call the displayAllWeather function here
displayAllWeather();
/***************************** PART 2 *****************************/


/******************************** START STUDENT CODE HERE ***************************/
/* This function takes as a parameter the Celsius temperature, and then 
* converts it to a temperature in fahrenheit.
*/
function CelsiusToFahr(cTemp){

//Activity - Write the calculation for converting celsius to fahrenheit using the cTemp as the Celsius value that needs to be converted
//Return the value using the return statement here
return 1.8*cTemp + 32
}
console.log(CelsiusToFahr(20))
/* Takes as a parameter an array of temperatures in Celsius,
* and creates a new array of the same temperatures in Fahrenheit. 
*/
function ConvertArrayToFahr(celsiusArray){
	//empty Array where the Fahrenheit value will be stored into using the push() method
	newArray = []; 

//Activity - mmmm... something seems to be missing in the for loop statement thats probably why it's not working
//We need to get the this loop up and running. Do some debugging and fix the loop

	for(var i = 0; i < celsiusArray.length; i++){
		var curr = celsiusArray[i];
		var converted = CelsiusToFahr(curr);
//Activity - newArray needs to have the new values added into it. Use the push() method to add the new value
	converted = Math.round(converted)	
	newArray.push(converted)
	}
//Activity - Use the return statement to return values of newArray. Add it here
	return newArray
}

/* This function adds a new property to each weather object in weatherData.
* This property is an array that contains the temperatures for the next week
* in fahrenheit.
*/
function ConvertToFahreheit(){
	var temp_fahr = [];
	//iterate through weather_data Array
	var c_array = weatherData.temp_celsius;
	var f_array = ConvertArrayToFahr(c_array);
	weatherData.temp_fahrenheit = f_array;
}
//Activity - call the ConvertToFahreheit function here
ConvertToFahreheit()
/* Changes the HTML so as to change units of the 
* temperature displayed on the webpage.
*/

//This function is ready to go all we need to do now is call it somewhere.
//Activity - Call this function in the HTML Document (index.html) using the onclick event listener
function convertDisplayUnits(){
	isCelsius = !isCelsius;
	displayAllWeather();
	var button = document.getElementById("button");

	if(isCelsius){
		button.innerHTML = buttonTextCelsius;
	} else {
		button.innerHTML = buttonTextFahrenheit;
	}
}


/***************************** PART 3 *****************************/

/* This function counts the number
* of days in which it is going to rain, and returns 
* the number of days of rain. If it rains often, the
*/
function calculateTotalRisk(){
	var rainCount = 0;

//Activity - Change the index number in the conditions[] Array so that shows the risk for Monday
//Step 1 - Below, make a for loop that iterates through the elements of the array weatherData.conditions
for(i=0;i < weatherData.conditions.length; i++){
	if( arrayItem = weatherData.conditions[i] === 'rainy'){
		rainCount ++;
		console.log(rainCount);
	}
	
}
//Step 2 - Inside of the loop, create an if statement that checks whether the current element of 
// weatherData.conditions matches the string 'rainy'
// HINT: to check whether the first element of weatherData.conditions matches the string 'rainy', you would write
// if(weatherData.conditions[0] === 'rainy')

//Step 3 - inside of the if statement, add 1 to the rainCount variable. 
//This makes it so that you count the number of rainy days.

//Activity - Return rainCount here
	return rainCount
}


function displayRisk(){
	var rainCount = calculateTotalRisk(); //tells us about the risk of Zika
	var zikaRisk = "Low"; //this variable will keep track of the message to display to the user.
	if(rainCount >= 2 && rainCount <= 4){
		zikaRisk = "medium";
//Activity - Complete the if statement by changing the variable "zikaRisk" to be the string "medium"
		
	} else if (rainCount > 4){
//Activity - Complete the if statement by changing the variable "zikaRisk" to be the string "high"
		zikaRisk = "high";
	}
//Activity - addRiskMessage is missing a parameter! Fill in the missing parameter by looking at the function definition below.
	addRiskMessageToDOM(zikaRisk);
}

//Activity - call the displayRisk function here

displayRisk();

/* This function is responsible for adding the
* Zika risk level to the webpage.  It takes
* the string representing the risk level as a parameter
* (the risk level is either "low", "medium", or "high")
* and adds it to the DOM.  You can use this function
* to help you complete Step 3.
*/
function addRiskMessageToDOM(riskString){
	//Example 1
	var mosquitoIcon = "icons/mosquito.png";
//Activity - Create a variable called healthIcon and create a String that contains the path for the health icon.
var healthIcon = "icons/health.png";
//Refer to Example 1 for an example

//Activity - Create a variable called virusIcon and create a String that contains the path for the virus icon.
var virusIcon = "icons/virus.png";	

	var riskPanel = document.getElementsByClassName("risks")[0];
	var txt = document.createTextNode(riskString);
	var wrapper = document.createElement("h4");
	wrapper.appendChild(txt);
	riskPanel.appendChild(wrapper);
	var img = document.createElement("img");
	img.src = mosquitoIcon;
	img.src = healthIcon;
	img.src = virusIcon;
	if(riskString === 'Low'){
		//Example 2
		img.src = mosquitoIcon;
	}else if(riskString === 'Medium'){
//Activity - Add in code so that when the riskString is Medium the health icon will appear. 
		img.src = healthIcon;
	}else{
//Activity - Add in code so that when the riskString is High the virus icon wuill appear.		
		img.src = virusIcon
	}
	riskPanel.appendChild(img);
}

/***************************** PART 4 *****************************/

/* This function is responsible for adding the
* packing list item to the webpage.  It takes
* the string representing the packing list
* item as an input (ex. "shoes") and adds
* it to the DOM in list form.  You should use this function
* to help you complete Step 4.
*/
function addPackingItemToDOM(packingItemString){
	var listDiv = document.getElementsByClassName("packingItems")[0];
	var newListItem = document.createElement("li");
	var newText = document.createTextNode(packingItemString);
	var newImage = document.createElement("img");
	newImage.src = "icons/virus.png";
	newListItem.appendChild(newText);
	listDiv.appendChild(newListItem);
	
}

//Activity - call the displayPackingList function here
displayPackingList()

function displayPackingList(){
//Activity - Create a variable called numRisk and assign the Call calculateTotalRisk function
var numRisk = calculateTotalRisk()	
	if(numRisk <= 1){
		//display No Zika Packing List
		for(var i = 0; i < REGULAR_ITEMS_TO_PACK.length; i++){
			addPackingItemToDOM(REGULAR_ITEMS_TO_PACK[i]);
		}

	} else{
		for(var i = 0; i < ZIKA_ITEMS_TO_PACK.length; i++){
			addPackingItemToDOM(ZIKA_ITEMS_TO_PACK[i]);
		}
			
	}
}

/********* END STUDENT CODE HERE *********/