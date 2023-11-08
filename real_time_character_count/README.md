# Real-Time Character Count

A simple web page that counts and displays the number of characters in real-time as you type in a textarea. The page also includes an animated text header and some CSS animations for visual appeal.

## Table of Contents

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)

## HTML

| Element/Attribute                             | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `<!DOCTYPE html>`                            | Declares the document type and language of the HTML document.              |
| `<html lang="en">`                           | The root element containing the entire HTML content with "en" as the language. |
| `<head>`                                     | Contains metadata and links to external resources.                         |
| `<meta charset="UTF-8">`                      | Specifies the character encoding for the document.                         |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Sets the viewport for responsive design. |
| `<title>Real Time Character Count</title>`    | Sets the title of the HTML document displayed in the browser's tab.        |
| `<link rel="stylesheet" href="style.css" />`  | Links an external CSS stylesheet.                                           |
| `<script defer src="script.js"></script>`     | Links an external JavaScript file with the `defer` attribute.              |
| `<body>`                                     | The body of the HTML document where content is displayed.                 |

### Character Count Section

| Element/Class                               | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `<section class="char-counter-container shadow-animate">` | A section with character counting and animation. |
| `<div class="text">`                        | A container for animated text at the top of the section.                  |
| `<textarea id="inputArea" placeholder="Please write your text here..." rows="5" cols="11" maxlength="50"></textarea>` | A textarea for user input with a placeholder and character limit. |
| `<div class="output-counter">`              | A container for displaying character count information.                     |
| `<div>Total Characters :<span id="totalChars"> 0</span></div>` | Displays the total character count.                                    |
| `<div>Remaining :<span id="remainingChars"> 50</span></div>` | Displays the remaining character count.                                |

## CSS

| Selector/Property                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `.char-counter-container`                    | Styles the main container for character counting and animations.            |
| `.text`                                     | Styles the container for the animated text at the top.                    |
| `.text span`                                | Styles individual letters of the animated text.                           |
| `textarea`                                  | Styles the textarea for user input.                                       |
| `.output-counter`                           | Styles the container for character count information.                     |
| `#totalChars`                               | Styles the total character count element.                                 |
| `#remainingChars`                           | Styles the remaining character count element.                             |
| `.shadow-animate`                           | Adds a shadow animation to the container.                                  |

## JavaScript

| Variable/Function                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `const inputArea = document.getElementById("inputArea");` | Selects the textarea element by its ID.                        |
| `const totalCharsSpan = document.getElementById("totalChars");` | Selects the total character count element by its ID.       |
| `const remainingCharsSpan = document.getElementById("remainingChars");` | Selects the remaining character count element by its ID. |
| `inputArea.addEventListener("keyup", (e) => { ... });` | Adds a keyup event listener to the textarea for real-time character count updates. |
| Inside the event listener                   | Calculates the total character count and remaining character count based on user input and updates the respective elements in the HTML. |

- Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/real_time_character_count/index.html
