// This is the data that Code4CT already has about its students
var student_data = [
    {name: "Sasha", grade: 11, phone: "560066849861", year: 3, active: true},
    {name: "Tracy", grade: 12, phone: "928929859866", year: 5, active: false},
    {name: "Lauren", grade: 10, phone: "254891981919", year: 2, active: true}
];

//**************************** PART 1 ****************************//

//Activity - Create an empty array called active_students
var active_students = [];

//This function should add names of all active students
//to the empty active_students array that you've created above
function addActiveStudents(){
  //Activity 1 - Inside the function: Create a loop to go through the student_data array.
  //Inside the loop, have an if statement that if the "active" property of the current array element
  //is true (active: true) then you should take their name from student_data and
  //add it as an element to the active_student array

  //Add your code for Activity 1 HERE

}

//Activity 2 - Now that you've completed the addActiveStudents function,
//Call it below

//ACTIVITY 2 - CALL THE FUNCTION HERE

//Activity 3 - To test if you've completed part 1 correctly, console.log the
//active student array below. You should see "Sasha" and "Lauren" as the elements of the array

//DO ACTIVITY 3 HERE


//**************************** PART 2 ****************************//
//Activity 1 - Create 2 new student objects that have the same
//properties as the elements of student_data

//Object 1 - Name the variable newStudent1 and set its active property to false


//Object 2 - Name the variable newStudent2 and set its active property to true




//Activity 2 - Add the new students you just created to the student_data array.
//If you've done this part correctly, you will see all 5 students appear in the
//table of your webpage.


//The addStudents function takes a student's name as a parameter
//and adds that student to the active_students array.
function addStudents(studentName){
  //Activity 3 - use conditionals to check whether the studentName
  //is already in the active_students array.  If it isn't, add it to the array.
  //If it is already in the array, print a console message saying it's already an active student
  //Hint: use the indexOf method to check if an element is already in an array

  //DO ACTIVITY 3 HERE
}

//Activity 4 - Using the addStudents function, take the name of newStudent2
//and add their name to the active_students array


/**************************** PART 3 ****************************/
//Lauren has decided that she does not want be apart of the program anymore.
//We need a function to remove students from the active students list.


//This function will remove students from the active_students array and switch a student's
//status to inactive in the student_data array.
function removeStudent(studentName){
    var studentArrayIndex = active_students.indexOf(studentName);
    //Activity 1 - Use the indexOf method to check whether the
    //student exists in the active students array.
    //If yes, remove that student's name using the splice method
    //(ask your facilitator if you need help here)
    //If not, console log a message that says the name given does not exist.

    //DO ACTIVITY 1 HERE

    //Now, change that student's active property to false
    for(i = 0; i < student_data.length; i++){
        //The line below checks whether the current student object
        //has the name we're looking for
        if(student_data[i].name === studentName){
          //Activity 2 - Set the student's active property to false.
          //DO ACTIVITY 2 HERE

        }
    }
}

//Activity 3 - Call the removeStudents function below, passing "Lauren" as the parameter.
//This will remove Lauren from the active_Students array and set her status to inactive.
//If you've completed part 3 correctly, the table on your webpage will change to
//show Lauren's status as "Not Active"

//**************************** PART 4 ****************************//

//Activity 1- Write the function definition for a function called changeNumber
// that takes two parameters: a name and a phone number

//PUT YOUR FUNCTION DEFINITION HERE {
  //Inside changeNumber, iterate through the student_data array
  for(var i = 0; i < student_data.length; i++){
    var currStudent = student_data[i];
    //Activity 2 - use conditions to check whether currStudent
    //has the same name as the name parameter.  If yes, change
    //currStudent's phone property to be the phone parameter.
    //DO ACTIVITY 2 HERE
  }

//} //END OF FUNCTION FROM ACTIVITY 1.

//Activity 3 - Sasha's phone number has changed, you must now update her phone number
//using the function you have created and passing in the appropriate parameters.
//Her new number is - 25818128261

//DO ACTIVITY 3 HERE

//If you did everything correctly, then your webpage should show Sasha's number as 25818128261

//Activity 4 - sort the student_data Array by grade
//Use the sort method and inside the parenthesis add the following code: function(a, b){return a.grade - b.grade}
//If you've done this part correctly, you should see the students on the webpage organized by grade.

//**************************** PART 5 ****************************//
//**************************** OPTIONAL ****************************//
//Activity 1 - Create a function that adds the names of the active_students to the DOM
//The function name should be displayTable_active_students
//Look at the displayTable_student_data function for guidance
//Once you've made the function call it below


//**************************** COMPLETED CODE ****************************//
//You don't have to worry about this part of the code, unless you're interested!
//This function is given so that you can see your changes in the HTML DOM
function displayTable_student_data(){
    for(i = 0; i < student_data.length; i++){
        var createNameField = document.createElement("td");
        var createGradeField = document.createElement("td");
        var createPhoneField = document.createElement("td");
        var createYearField = document.createElement("td");
        var createActiveField = document.createElement("td");

        var addNames = document.createTextNode(student_data[i].name);
        var addGrade = document.createTextNode(student_data[i].grade);
        var addPhone = document.createTextNode(student_data[i].phone);
        var addYear = document.createTextNode(student_data[i].year);

        if(student_data[i].active == true){
        var addActive = document.createTextNode("Active");
        } else {
        var addActive = document.createTextNode("Not Active");
        }

        createNameField.appendChild(addNames);
        createGradeField.appendChild(addGrade);
        createPhoneField.appendChild(addPhone);
        createYearField.appendChild(addYear);
        createActiveField.appendChild(addActive);

        document.getElementById("student_data_name").appendChild(createNameField);
        document.getElementById("student_data_grade").appendChild(createGradeField);
        document.getElementById("student_data_phone").appendChild(createPhoneField);
        document.getElementById("student_data_year").appendChild(createYearField);
        document.getElementById("student_data_active").appendChild(createActiveField);

    }
}
displayTable_student_data();
