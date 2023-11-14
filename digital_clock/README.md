# Digital Clock

A simple web page displaying a digital clock with hours, minutes, seconds, and AM/PM status. The clock features a responsive and visually appealing design.

## Table of Contents

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)

## HTML

| Element/Attribute                             | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `<!DOCTYPE html>`                            | Specifies the document type and language of the HTML document.              |
| `<html lang="en">`                           | The root element containing the entire HTML content with "en" as the language. |
| `<head>`                                     | Contains metadata and links to external resources.                         |
| `<meta charset="UTF-8">`                      | Specifies the character encoding for the document.                         |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Sets the viewport for responsive design. |
| `<link rel="icon" type="image/x-icon" href="./assets/digital-clock.png" />` | Adds a favicon for the webpage. |
| `<title>Digital Clock</title>`               | Sets the title of the HTML document displayed in the browser's tab.        |
| `<link rel="stylesheet" href="style.css" />` | Links an external CSS stylesheet.                                           |
| `<script defer src="script.js"></script>`    | Links an external JavaScript file with the `defer` attribute.              |
| `</head>`                                   | Closing tag for the head.                                                  |
| `<body>`                                     | The body of the HTML document where content is displayed.                 |
| `<div class="container">`                   | The main container for the digital clock.                                  |
| `<h2>DIGITAL CLOCK</h2>`                    | Heading for the digital clock.                                             |
| `<div class="time-container">`              | Container for time-related information.                                    |
| Inside the `.time-container` div             | Four boxes displaying hours, minutes, seconds, and AM/PM status.          |
| `<audio id="audio1" controls style="display: none">` | An audio element for an alarm sound (hidden with `style="display: none"`). |
| `</body>`                                   | Closing tag for the body.                                                  |
| `</html>`                                   | Closing tag for the HTML document.                                         |

## CSS

| Selector/Property                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `*`                                        | Applies styles to all elements, removing default margin and padding.        |
| `body`                                     | Styles the body with a background image and centers content.                |
| `.container`                                | Styles the main container for the digital clock.                           |
| `.time-container`                           | Styles the container for time-related information.                         |
| `.box`, `.timeDigit`, `.digiName`           | Styles boxes, digits, and labels for hours, minutes, seconds, and AM/PM.     |
| `#timeStatus`                               | Styles the AM/PM status box with a green background.                       |

## JavaScript

| Variable/Function                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `const digiHour, digiMinute, digiSecond, timeStatus, audio1` | DOM elements for displaying time, AM/PM status, and an audio element. |
| `(function displayTime() { ... })`          | Immediately invoked function expression (IIFE) to display real-time clock. |
| Inside the IIFE                             | Retrieves the current time, formats hours, minutes, seconds, and AM/PM status. |
| Updates the corresponding HTML elements with the time data. |
| Uses `requestAnimationFrame` for smooth animation.                           |

- Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/digital_clock/index.html
