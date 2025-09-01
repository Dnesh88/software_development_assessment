// API details
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "gNDqlB62a1CVhBH4VRrcjxOXo77gK6J6eZ6UB9hn";

// Constants used to refence various HTML elements for modifications
const imageElement = document.getElementById("external_image");
const imageDate = document.getElementById("external_image_date");
const imageDescription = document.getElementById("external_image_description");
const imageButton = document.getElementById("image_button");
const searchDate = document.getElementById("search_date");
const searchButton = document.getElementById("search_button");

// Generate a random date which determies the next random image to display
// Random year (2015 to 2024) and date generator (0 to 9)
function getRandomDate() {
  let randomYear = 2015 + Math.floor(Math.random() * 10);
  let tempDate = Math.floor(Math.random() * 10);
  let newDate = randomYear + "-06-1" + tempDate;
  getNasaImage(newDate);
}

// Use user supplied date to lookup specific image published on that date
function userSearchDate() {
  let newDate = searchDate.value;
  getNasaImage(newDate);
}

// Function to get image from NASA APOD - Astronomy Picture of the Day
async function getNasaImage(newDate) {
  try {

    // API Call
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&date=${newDate}`);
    const data = await response.json();

    //Using the JSON response to update image src, date, description
    const sourceImageUrl = data["url"]; // Get the URL of the image
    const sourceImageExplanation = data["explanation"]; // Get the image description text
    const sourceImageDate = data["date"]; // Get the image date

    imageElement.src = sourceImageUrl; // Update the src of the image element
    imageDescription.textContent = "Explanation: " + sourceImageExplanation; // Update the content of the paragraph element
    imageDate.textContent = "Date: " + sourceImageDate; // Update date
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Event listeners to trigger image update
imageButton.addEventListener("click", getRandomDate);
searchButton.addEventListener("click", userSearchDate);
