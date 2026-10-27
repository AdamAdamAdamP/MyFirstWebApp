
//NEWSLETTER: Why subscribe 

//Button logic: https://www.w3schools.com/js/tryit.asp?filename=tryjs_function_from_click  
//Change text logic: https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml 
//Function logic: https://www.w3schools.com/js/js_function_definition.asp

function changeNewsletterText() {

  document.getElementById("newsletter-discount").innerHTML = "Subscribe to receive 10% off merchandise!";

  $("#newsletter-discount").addClass("subscribe-text");
  $("#newsletter").addClass("subscribe-text");
  $("#newsletter-discount").fadeIn(2000);
}


//NEWSLETTER: Personalised greeting upon clicking submit

//Alert logic: https://www.w3schools.com/js/tryit.asp?filename=tryjs_htmlfirst_script  
//Clear form after submit logic: https://stackoverflow.com/questions/3786694/how-to-reset-clear-form-through-javascript

const form = document.querySelector("#form-newsletter");

form.addEventListener("submit", function (event) {

  event.preventDefault();
  const firstname = document.getElementById("firstname").value;
  alert("Hi " + firstname + "! Thanks for subscribing ");

  form.reset();

});


//QUIZ

//Prevent default logic: https://www.geeksforgeeks.org/javascript/preventdefault-event-method/
//If logic - https://www.w3schools.com/Js/tryit.asp?filename=tryjs_if
const quizForm = document.querySelector("#form-quiz");

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();
  beatlesQuiz();
});

function beatlesQuiz() {
  let userAnswer = document.getElementById("beatles-singles").value;

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


// MUSIC API

const musicForm = document.querySelector("#form-music");

musicForm.addEventListener("submit", function (event) {

  event.preventDefault();
  const search = document.getElementById("beatles-search").value;
  loadMusicJSON(search);
});

async function loadMusicJSON(search) {
  const url = "https://www.rotaryspin.com/mc/api/beatles.php?query=" + search;

  /*Error logic: https://www.w3schools.com/js/tryit.asp?filename=tryjs_json_fetch_array_try */
  try {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

    const apiMusic = await response.json();

    $("#music-result").empty();
    displayMusic("<strong>Album: " + apiMusic.albums[0].title + "</strong>");
    displayMusic("Release Date: " + apiMusic.albums[0].date);

    //Loop through songs logic: https://stackoverflow.com/questions/10612667/create-html-table-from-comma-separated-strings-javascript 
    const tracks = apiMusic.albums[0].tracks;

    displayMusic("Tracks: ");
    for (let i = 0; i < tracks.length; i++) {
      displayMusic(tracks[i]);
    }
  }

  catch (err) {
    document.getElementById("music-result").innerHTML = "";
    displayMusic("Apologies, no results found. Please try again!")  
  }
}

function displayMusic(text) {
  document.getElementById("music-result").innerHTML += text + "<br>";
}


//WEATHER API

async function loadWeatherJSON() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=53.40&longitude=-2.99&current=temperature_2m,wind_speed_10m&timezone=Europe/London";
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const apiWeather = await response.json();

    console.log(apiWeather)

    const weatherTime = new Date(apiWeather.current.time);
    let formatDate = weatherTime.toLocaleString();

    displayWeather("Temperature: " + apiWeather.current.temperature_2m + "°C");
    displayWeather("Wind Speed: " + apiWeather.current.wind_speed_10m + " km/h")
    displayWeather("Weather recorded at: " + formatDate);
  }

  catch (err) {
    document.getElementById("weather-result").innerHTML = "";
    displayWeather("Apologies, there's an error generating the weather forecast. Please check later.")
  }
}
loadWeatherJSON();

function displayWeather(text) {
  document.getElementById("weather-result").innerHTML += text + "<br>";
}

//TOP BUTTON
//Back to the top button logic: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

let mybutton = document.getElementById("top-button");

 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}









