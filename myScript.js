


//https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_from_click script function and html button here
//
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_style
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml change inner html i.e. discount 


// This is a Function Declaration because its reusable
//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
//As per https://www.w3schools.com/js/js_function_definition.asp

function changeNewsletterText() {
document.getElementById("newsletter-discount").innerHTML = "Subscribe to receive 10% off merchandise!";
document.getElementById("newsletter-discount").style.color = "blue";
document.getElementById("newsletter").style.color = "blue";
//document.getElementById("newsletter").innerHTML = "Sign up for the newsletter to get 10% discount voucher for merchandise!";   THIS IS HOW TO CHANGE TEXT THATS ALREADY THERE

}



//https://www.w3schools.com/js/tryit.asp?filename=tryjs_htmlfirst_script ref for submitting form with alert

// this is Function Expression (Anonymous) 
/*A function expression stores a function inside a variable.

The function can be anonymous (without a name).

Function expressions are executed only when the code reaches them.
as per //As per https://www.w3schools.com/js/js_function_definition.asp*/

//this is ASYNCRONOUS CALLBACK - executed at a later time allowing programm to run and essential to prevent freezing (as per w3 function callbacls)

const form = document.querySelector("#form-newsletter");

form.addEventListener("submit", function() {
  alert("Thanks for subscribing. Check your email for the latest newsletter. Enjoy!");


});







/* Week 5.5 APIs 
USE THIS SECTION FOR APIS*/
async function loadJSON() {
  const url = "https://api.freeapi.app/api/v1/public/quotes/quote/randoma";
 



/*try catches errors for errors https://www.w3schools.com/js/tryit.asp?filename=tryjs_json_fetch_array_try*/


try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

  const apiQuotes = await response.json();
  
  myDisplayer("Author: " + apiQuotes.data.author  );
myDisplayer("Quote: " + apiQuotes.data.content)
}

  
  catch(err) {
    myDisplayer(err.message);
  }
}

loadJSON();

// Function to display any text
function myDisplayer(text) {
  document.getElementById("result").innerHTML += text + "<br>";
}






















// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }















//newsletter-para













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
