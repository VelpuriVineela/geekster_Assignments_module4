# Stopwatch Readme

This is a simple stopwatch web application implemented using HTML, CSS, and JavaScript. The application features a timer display and basic functionality such as start, pause, and reset buttons.

## HTML Elements

| Element             | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| `<!DOCTYPE html>`   | HTML5 document type declaration.                                                    |
| `<html>`            | Root element of the HTML document.                                                  |
| `<head>`            | Contains meta-information about the HTML document, such as character set and title. |
| `<meta>`            | Provides metadata about the HTML document.                                           |
| `<title>`           | Sets the title of the HTML document.                                                 |
| `<link>`            | Links an external stylesheet (style.css) to the HTML document.                       |
| `<body>`            | Contains the content of the HTML document.                                           |
| `<div class="container">` | Container for the entire stopwatch application.                                 |
| `<div class="timer-display">` | Display area for the stopwatch timer.                                         |
| `<div class="buttons">`       | Container for control buttons (Start, Pause, Reset).                             |
| `<button id="start-timer">`  | Button to start the stopwatch timer.                                            |
| `<button id="pause-timer">`  | Button to pause the stopwatch timer.                                            |
| `<button id="reset-timer">`  | Button to reset the stopwatch timer.                                            |

## CSS Styles

| Selector            | Description                                                                          |
|---------------------|--------------------------------------------------------------------------------------|
| `*`, `*:before`, `*:after` | Resets padding, margin, and box-sizing for all elements and pseudo-elements.        |
| `body`              | Sets the background color for the entire page.                                       |
| `.container`        | Styles the container for the stopwatch application.                                 |
| `.timer-display`    | Styles the display area for the stopwatch timer.                                     |
| `.buttons`          | Styles the container for control buttons.                                            |
| `.buttons button`   | Styles the control buttons (Start, Pause, Reset).                                    |
| `.buttons button:nth-last-child(2)` | Styles the pause button with a different background color.                  |
| `.buttons button:nth-last-child(1)` | Styles the reset button with a different background color.                  |
| `.buttons button:hover` | Applies a box shadow when a button is hovered over.                               |

## JavaScript Functions

| Function            | Description                                                                          |
|---------------------|--------------------------------------------------------------------------------------|
| `displayTimer()`    | Updates the timer display and increments time values (hours, minutes, seconds, milliseconds). |
| Event Listeners     | Listens for clicks on the start, pause, and reset buttons, triggering corresponding actions. |


-Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/stop_watch/index.html
