// API details
const API_URL = "https://api.nasa.gov/planetary/apod";

// Constants used to refence various HTML elements for modifications/event triggers
const imageElement = document.getElementById("external_image");
const imageDate = document.getElementById("external_image_date");
const imageDescription = document.getElementById("external_image_description");
const imageButton = document.getElementById("image_button");
const searchDate = document.getElementById("search_date");
const searchButton = document.getElementById("search_button");

// Generate random date
function getRandomDate() {
  let fromDate = (new Date(2015,0,1)).getTime();  // Start date 1 Jan 2015 (first day this API service went live). .getTime() method returns date in milliseconds
  let currentDate = (new Date()).getTime();       // Today's date
  let newDate = new Date(fromDate + Math.random() * (currentDate - fromDate));   // Selecting a random date
  let formattedDate = newDate.toISOString().split('T')[0];    // Modifying the date to format (YYYY-MM-DD)
  getNasaImage(formattedDate);    
}

// Use user supplied date to lookup specific image published on that date
function userSearchDate() {
  let newDate = searchDate.value;
  getNasaImage(newDate);
}

// Get image from NASA APOD - Astronomy Picture of the Day
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
