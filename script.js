// Function to fetch a random joke
function fetchJoke() {
    const jokeUrl = 'https://official-joke-api.appspot.com/random_joke';

    fetch(jokeUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            document.getElementById('joke').innerText = 'Failed to load joke';
            console.error('Error fetching joke:', error);
        });
}
fetchJoke();
