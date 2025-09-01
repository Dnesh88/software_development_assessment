// Function to get image from NASA APOD - Astronomy Picture of the Day
async function getNasaImage() {
  try {
    // Query parameters
    // Define the API URL
    const API_URL = "https://api.nasa.gov/planetary/apod";
    const API_KEY = "gNDqlB62a1CVhBH4VRrcjxOXo77gK6J6eZ6UB9hn";

    const imageElement = document.getElementById("external_image");
    const imageDescription = document.getElementById("external_image_description");

    // Random year (2015 to 2024) and date generator (0 to 9)
    // Used to display random images
    let randomYear = 2015 + Math.floor(Math.random() * 10);
    let tempDate = Math.floor(Math.random() * 10);
    let newDate = randomYear + "-06-1" + tempDate;

    // API Call
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&date=${newDate}`);
    const data = await response.json();

    //Using the JSON response to update image src and description
    const imageUrl = data["url"]; // Get the URL of the image
    const imageExplanation = data["explanation"]; // Get the image description text

    imageElement.src = imageUrl; // Update the src of the image element
    imageDescription.textContent = imageExplanation; // Update the content of the paragraph element
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Event listener to trigger image update
button.addEventListener("click", getNasaImage);
