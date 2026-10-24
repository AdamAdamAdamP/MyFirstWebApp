//REF XYZ - shows how to add a class to javascript using classlist.add https://stackoverflow.com/questions/507138/how-to-add-a-class-to-an-html-element-with-javascript


//https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_from_click script function and html button here
//
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_style
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml change inner html i.e. discount 


// This is a Function Declaration because its reusable
//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
//As per https://www.w3schools.com/js/js_function_definition.asp

function changeNewsletterText() {
  //Removed to use jQuery
 document.getElementById("newsletter-discount").innerHTML = "Subscribe to receive 10% off merchandise!";
// document.getElementById("newsletter-discount").classList.add("blue-text");
// document.getElementById("newsletter").classList.add("blue-text");
$("#newsletter-discount").addClass("subscribe-text");
$("#newsletter").addClass("subscribe-text");
$("#newsletter-discount").fadeIn(2000);
}


//document.getElementById("newsletter").innerHTML = "Sign up for the newsletter to get 10% discount voucher for merchandise!";   THIS IS HOW TO CHANGE TEXT THATS ALREADY THERE





//https://www.w3schools.com/js/tryit.asp?filename=tryjs_htmlfirst_script ref for submitting form with alert

// this is Function Expression (Anonymous) 
/*A function expression stores a function inside a variable.

The function can be anonymous (without a name).

Function expressions are executed only when the code reaches them.
as per //As per https://www.w3schools.com/js/js_function_definition.asp*/

//this is ASYNCRONOUS CALLBACK - executed at a later time allowing programm to run and essential to prevent freezing (as per w3 function callbacls)

const form = document.querySelector("#form-newsletter");
form.addEventListener("submit", function(event) {
     event.preventDefault();
var firstname = document.getElementById("firstname").value;
  alert("Hi " + firstname + "! Thanks for subscribing ");
});







// https://www.geeksforgeeks.org/javascript/preventdefault-event-method/


const quizForm = document.querySelector("#form-quiz");
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    beatlesQuiz()
});

//Quiz - https://www.w3schools.com/Js/tryit.asp?filename=tryjs_if

function beatlesQuiz() {
  var userAnswer = document.getElementById("beatles-singles").value;

let text = "Perfect, you got it right!";

if (userAnswer > 18) {
  text = "Wrong go lower!";
}

if (userAnswer < 18) {
  text = "Wrong go higher!";
}


document.getElementById("quizAnswer").innerHTML = text;
  $("#quizAnswer").hide();
$("#quizAnswer").fadeIn(2000);
}


// music API


const musicForm = document.querySelector("#form-music");
musicForm.addEventListener("submit", function(event) {
  event.preventDefault()
var search = document.getElementById("beatles-search").value;
 loadMusicJSON(search)
});






/* Week 5.5 APIs 
MUSIC API URL
https://www.theaudiodb.com/free_music_api
https://www.theaudiodb.com/docs_json
USE THIS SECTION FOR APIS*/
async function loadMusicJSON(search) {
 /*Use for the space inbetween the beatles https://stackoverflow.com/questions/5442658/spaces-in-urls*/
  const url = "https://www.rotaryspin.com/mc/api/beatles.php?query="+search;

       
  //OLD "https://www.theaudiodb.com/api/v1/json/123/search.php?s=beatles";
 
/*try catches errors for errors https://www.w3schools.com/js/tryit.asp?filename=tryjs_json_fetch_array_try*/
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
  const apiMusic = await response.json();



 // document.getElementById("result").innerHTML="";     REMOVED THIS TO TEST jQUERY
$("#music-result").empty(); /*added this jQuery*/
  myDisplayer2("<strong>Album: " + apiMusic.albums[0].title + "<strong>");
  
    myDisplayer2("Release Date: " + apiMusic.albums[0].date);


    
 
  //  myDisplayer2("Tracks: " + apiMusic.albums[0].tracks);


   //https://stackoverflow.com/questions/10612667/create-html-table-from-comma-separated-strings-javascript turn string into table
 
 var tracks = apiMusic.albums[0].tracks;

 myDisplayer2("Tracks: ");
for (var i=0; i< tracks.length; i++) {
    myDisplayer2(tracks[i]);

}

}
  
  catch(err) {
    //myDisplayer(err.message); //Removed this so users get an approprite message (usability)
    document.getElementById("music-result").innerHTML="";
    myDisplayer2("Apologies, there are no results found, please try again!")
console.error(err);
  }
}


// Function to display any text
function myDisplayer2(text) {
  document.getElementById("music-result").innerHTML += text + "<br>";
}






/* NEW WEATHER API TEST */



async function loadWeatherJSON() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=53.40&longitude=-2.99&current=temperature_2m,wind_speed_10m&timezone=Europe/London";
 
//try catches errors for errors https://www.w3schools.com/js/tryit.asp?filename=tryjs_json_fetch_array_try
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
  const apiWeather = await response.json();

  console.log(apiWeather)

  const weatherTime = new Date(apiWeather.current.time);
  let formatDate = weatherTime.toLocaleString();
 // document.getElementById("result").innerHTML="";     REMOVED THIS TO TEST jQUERY
//$("#result").empty(); /*added this jQuery*/

 
  myDisplayer3("Temperature: " + apiWeather.current.temperature_2m + "°C"  );
myDisplayer3("Wind Speed: " + apiWeather.current.wind_speed_10m +" km/h" )
myDisplayer3("Weather recorded at: " + formatDate);
}
  
  catch(err) {
    //myDisplayer(err.message); //Removed this so users get an approprite message (usability)
    document.getElementById("weather-result").innerHTML="";
    myDisplayer3("Apologies there's an error generating random quotes, we are working 'eight days a week' to fix it!")

  }
}

loadWeatherJSON();
// Function to display any text
function myDisplayer3(text) {
  document.getElementById("weather-result").innerHTML += text + "<br>";
}









// Get the button
let mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}










//   const myPara = document.getElementById("newsletter-signup-message")
// myPara.innerHTML = "hello world";



//Greeting https://www.w3schools.com/js/js_if_else.asp

// const time = new Date().getHours();
// let greeting;
// if (time < 5) {
//   greeting = "Good evening";
// } else if (time < 12) {
//   greeting = "Good morning";
//   } else if (time < 18) {
//   greeting = "Good afternoon";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;
