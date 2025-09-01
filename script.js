// Query parameters
// Define the API URL
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "gNDqlB62a1CVhBH4VRrcjxOXo77gK6J6eZ6UB9hn";

// Testing code
//console.log(newDate);

const imageElement = document.getElementById("external_image");
const imageDescription = document.getElementById("external_image_description");
const button = document.getElementById("image_button");

// Function to get image from NASA APOD - Astronomy Picture of the Day
async function getNasaImage() {
  try {
    // Query parameters
    // Define the API URL
    const API_URL = "https://api.nasa.gov/planetary/apod";
    const API_KEY = "gNDqlB62a1CVhBH4VRrcjxOXo77gK6J6eZ6UB9hn";

    // Testing code
    //console.log(newDate);

    const imageElement = document.getElementById("external_image");
    const imageDescription = document.getElementById(
      "external_image_description"
    );
    const button = document.getElementById("image_button");

    // Random date generator 0 to 9
    let randomYear = 2015 + Math.floor(Math.random() * 10);

    let tempDate = Math.floor(Math.random() * 10);
    let newDate = randomYear + "-06-1" + tempDate;
    //const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&date=` );
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&date=${newDate}`
    );

    const data = await response.json();

    //const imageUrl = data[0].urls.regular; // Get the URL of the image
    const imageUrl = data["url"]; // Get the URL of the image
    const imageExplanation = data["explanation"];

    imageElement.src = imageUrl; // Update the src of the image element
    imageDescription.textContent = imageExplanation; // Update the content of the paragraph element
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Event listener to trigger image update
button.addEventListener("click", getNasaImage);
