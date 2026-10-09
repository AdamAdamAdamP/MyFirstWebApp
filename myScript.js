// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }



//https://www.w3schools.com/js/tryit.asp?filename=tryjs_htmlfirst_script ref for submitting form with alert

const form = document.querySelector("#form-newsletter");

form.addEventListener("submit", function() {
  alert("Thanks for subscribing. Check your email for the latest newsletter. Enjoy!");


});



//https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_from_click script function and html button here
//
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_style
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml change inner html i.e. discount 

function changeNewsletterText() {
document.getElementById("newsletter-discount").innerHTML = "You will recieve a 10% discount voucher for merchandise when sigining up for the newsletter!";
document.getElementById("newsletter-discount").style.color = "blue";
document.getElementById("newsletter").style.color = "blue";
//document.getElementById("newsletter").innerHTML = "Sign up for the newsletter to get 10% discount voucher for merchandise!";   THIS IS HOW TO CHANGE TEXT THATS ALREADY THERE

}


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
