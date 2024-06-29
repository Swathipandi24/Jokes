# API Dashboard

This project is a simple API dashboard that fetches and displays a random joke from the "Official Joke API". 
The UI is built using HTML, CSS, Bootstrap, and JavaScript, following the specified constraints and best practices.

## Project Structure

api-dashboard/
│
├── index.html
├── styles.css
└── script.js

- `index.html`: The main HTML file that contains the structure of the webpage.
- `styles.css`: The CSS file for custom styles.
- `script.js`: The JavaScript file that fetches data from the API and updates the webpage.

## Requirements

- Ensure you have an active internet connection as the project fetches data from an external API and uses Bootstrap from a CDN.


## Project Details

### HTML (`index.html`)

- Uses Bootstrap for a responsive layout.
- Contains a container with a card that displays the random joke.

### CSS (`styles.css`)

- Styles the card with a shadow effect.
- Sets a background color for the body.
- Adjusts typography for better readability.

### JavaScript (`script.js`)

- Fetches a random joke from the "Official Joke API".
- Updates the card text with the fetched joke.
- Handles errors and displays a fallback message if the fetch operation fails.

## Example API Data

The project fetches data from the following API:

- Random Joke API: `https://official-joke-api.appspot.com/random_joke`

## Future Enhancements

- Add more APIs to fetch different types of data.
- Improve the UI with more Bootstrap components.
- Enhance error handling and user feedback.



