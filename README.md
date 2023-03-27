# Harry Potter API 
This is a web application that displays information from the Harry Potter API using HTML, CSS, JavaScript, and fetch.

## Features
The application allows users to:

* View a list of all characters in the Harry Potter universe, along with information about their house, wand, patronus, and other details.
* Filter the characters by name, house, and other attributes.
* View a list of all spells in the Harry Potter universe, along with information about their type, effect, and other details.
* Filter the spells by name and type.
* View a list of all Hogwarts houses, along with information about their founder, mascot, and other details.
* View a list of all Hogwarts staff members, along with information about their position, house, and other details.
* View a list of all Hogwarts students, along with information about their house, blood status, and other details.
## Getting Started
To use the web application, you'll need to:

* Clone this repository to your local machine.
* Open the index.html file in a web browser.
## Dependencies
The web application uses the following dependencies:

* Bootstrap: to style the web page.
* wallpaperaccess: to include Harry Potter-themed background.
## API Endpoints
The web application uses the following API endpoints:

1. https://www.potterapi.com/v1/characters: returns a list of all characters in the Harry Potter universe.
2. https://www.potterapi.com/v1/spells: returns a list of all spells in the Harry Potter universe.
3. https://www.potterapi.com/v1/houses: returns a list of all Hogwarts houses.
4. https://www.potterapi.com/v1/staff: returns a list of all Hogwarts staff members.
5. https://www.potterapi.com/v1/students: returns a list of all Hogwarts students.
## Authentication
The Harry Potter API requires an API key to access its endpoints. To obtain an API key, register for an account on the Harry Potter API website.

* Once you have an API key, you'll need to include it in your fetch requests. 
* You can do this by adding the API key as a query parameter in the URL of the API endpoint, like this:

javascript:
1. const apiKey = 'YOUR_API_KEY';
2. const endpointUrl = 'https://www.potterapi.com/v1/characters?key=' + apiKey;

