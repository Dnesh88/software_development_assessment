// Query parameters
// Define the API URL
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "gNDqlB62a1CVhBH4VRrcjxOXo77gK6J6eZ6UB9hn";

// Random date generator 0 to 9
let numericalDateInAMonth = Math.floor(Math.random() * 10);
let new date = "2024-06-1"+numericalDateInAMonth



const imageElement = document.getElementById("external_image");
const button = document.getElementById("image_button");

// Function to get image from NASA APOD - Astronomy Picture of the Day
async function getNasaImage() {
  try {
    //const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&date=` );
    const response = await fetch(`${API_URL}?client_id=${API_KEY}&date=2024-06-`);

    const data = await response.json();
    const imageUrl = data[0].urls.regular; // Get the URL of the image
    imageElement.src = imageUrl; // Update the src of the image element
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Event listener to trigger image update
button.addEventListener("click", fetchRandomImage);









