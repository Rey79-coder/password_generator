
// DEFINE VARABLES AN ARRAYS FOR EACH LETTER
var caseArray = [];
var lowerCaseChar= ["a","b","c","d", "d","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar= ["!","@","#","@","#","$","%","^","&","*","(",")","{","}","[","]",",","<",">","?","/"];

// CREATE MAIN FUNCTION

function generatePassword() {

    var passwordString = "";

    // DECLARE BOOLEAN - USER'S CONFIRM QUESTIONS

    var useLowerCase=confirm("Do you want to include lower case?");
    var useUpperCase=confirm("Do you want to include uppercase?");
    var useNumeric=confirm("Do you want to include numbers?");
    var useSpecial=confirm("Do you want to include special characters?");

    
    // RUNNING A LOOP to check if all variables are false. If so, user is prompted to select again

    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
        alert("Please confirm the character's type");

        useLowerCase=confirm("Do you want to include lower case?");
        useUpperCase=confirm("Do you want to include uppercase?");
        useNumeric=confirm("Do you want to include numbers?");
        useSpecial=confirm("Do you want to include special characters?");

    }

    // WHILE LOOP to check for password length. 
    // If number less than 8 or over 128, or if input is a string or NaN, user is asked for input again

    var passwordLength = prompt("How many characters do you want for your password? Enter a number between 8 - 128");

    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number between 8 - 128");
        passwordLength=parseInt(prompt("How many characters do you want for your password? Password must be min 8 characters lenght"),
        )}

    // IF CHARACTER'S type is selected, the array name is stored into a group array

    if(useLowerCase == true){
        caseArray.push(lowerCaseChar);
    }
    if(useUpperCase == true){
        caseArray.push(upperCaseChar)
    }
    if(useNumeric == true){
        caseArray.push(numericChar)
    }
    if(useSpecial == true){
        caseArray.push(specialChar)
    }


    // A LOOP IS RUN for the length of the password

    for(let i=0;i<passwordLength;i++){
        let randomCharArrayNum;
        let selectedCharArray;
        let randomCharNum;
        let randomChar;

        // A RANDOM NUMBER IS GENERATED for the group array (length of group array)

        randomCharArrayNum= parseInt(Math.floor(Math.random()*caseArray.length)); //rA RANDOM NUMBER based on length of case array
        // A RANDOM NUMBER IS GENERATED for the character array (length of character array)
        selectedCharArray=caseArray[randomCharArrayNum]; //variable that stores selected array from case array
        
        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);// variable that stores random number based on length of selected array
        
        randomChar=selectedCharArray[randomCharNum];
        // NOW NEED TO accumulate the string

        passwordString+=randomChar;
        // return passwordString;
    }

    //alert(“Your password is ” + passwordString);
    passwordEntry.textContent=passwordString;

}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
let generateButton=document.getElementById("generate");
let passwordEntry=document.getElementById("password");
generateButton.onclick = generatePassword;