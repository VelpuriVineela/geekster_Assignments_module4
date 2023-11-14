# LeaderBoard Readme

This is a simple leaderboard web application implemented using HTML, CSS, and JavaScript. The application allows users to add player information, including first name, last name, country, and player score. Players are displayed in a scoreboard, and users can interact with each player's score using buttons for incrementing, decrementing, and removing.

## HTML Elements

| Element                      | Description                                                                          |
|------------------------------|--------------------------------------------------------------------------------------|
| `<!DOCTYPE html>`            | HTML5 document type declaration.                                                    |
| `<html>`                     | Root element of the HTML document.                                                  |
| `<head>`                     | Contains meta-information about the HTML document, such as character set and title. |
| `<meta>`                     | Provides metadata about the HTML document.                                           |
| `<title>`                    | Sets the title of the HTML document.                                                 |
| `<link>`                     | Links an external stylesheet (style.css) to the HTML document.                       |
| `<body>`                     | Contains the content of the HTML document.                                           |
| `<main>`                     | Main container for the leaderboard application.                                     |
| `<h1 class="main_title">`    | Heading displaying "LeaderBoard".                                                   |
| `<form class="main_form">`   | Form for adding player information.                                                 |
| `<input>`                    | Input fields for first name, last name, country, and player score.                   |
| `<button class="main_form-submit-btn">` | Button to add a new player.                                              |
| `<p class="main_error-prompter">` | Error prompt for indicating that all fields are required.                   |
| `<div class="main_scoreboard-wrapper">` | Container for the player scoreboard.                                     |
| `<div class="main_scoreboard">` | Individual player entry in the scoreboard.                                |
| Various `<p>` elements       | Display player name, time stamp, country, and player score.                          |
| `<div class="main_scoreboard-btn-container">` | Container for buttons to interact with player score.                 |
| `<button>`                   | Buttons for deleting a player, adding 5 to the score, and subtracting 5 from the score.  |

## CSS Styles

| Selector            | Description                                                                          |
|---------------------|--------------------------------------------------------------------------------------|
| `*`                 | Resets margin, padding, and box-sizing for all elements.                               |
| `body`              | Styles for the body, including text alignment, font, and background color.            |
| `main`              | Styles for the main container, including flexbox properties and gap.                  |
| Various class selectors | Styles for form elements, input fields, error prompt, buttons, scoreboard, etc.     |
| `@media` query      | Responsive styles for larger screens.                                               |

## JavaScript Functions

| Function                  | Description                                                                          |
|---------------------------|--------------------------------------------------------------------------------------|
| `activateBtnEventListener()` | Adds event listeners to scoreboard buttons for interactive functionality.         |
| `sortScoreBoard()`         | Sorts the scoreboard entries based on player scores in descending order.            |
| `generateDateAndTime()`    | Generates and returns a formatted date and time string.                              |
| Event Listener            | Listens for form submissions to add new players to the scoreboard.                  |

## JavaScript Code

The JavaScript code in `script.js` dynamically handles form submissions, updates the scoreboard, and provides interactive functionality for buttons.

Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/LeaderBoard(Major_Project2)/index.html
