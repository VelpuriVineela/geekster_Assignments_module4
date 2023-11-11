# Sticky Notes

A simple web application for creating and managing sticky notes. You can write notes, choose colors, and add them to your collection.

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
| `<link rel="stylesheet" href="style.css" />`  | Links an external CSS stylesheet.                                           |
| `<script defer src="script.js"></script>`     | Links an external JavaScript file with the `defer` attribute.              |
| `<title>Sticky Notes</title>`                 | Sets the title of the HTML document displayed in the browser's tab.        |
| `<body>`                                     | The body of the HTML document where content is displayed.                 |

### Left Section (Creating Notes)

| Element/Class                               | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `.left`                                     | Styles the left section for creating notes.                               |
| `.notes-create-section`                     | Styles the container for note creation.                                    |
| `<textarea>`                                | A textarea for writing notes with placeholder text.                         |
| `.select-container`                         | A container for color selection and the "Add" button.                      |
| `<input id="colorPicker" type="color" />`    | A color picker input for choosing the note color.                         |
| `<button id="addNoteBtn"><span class="front">Add</span></button>` | A button for adding a new note.                              |

### Note Section (Displaying Notes)

| Element/Class                               | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `.noteSection`                              | Styles the section for displaying notes.                                  |
| `<h1>`                                      | A title for the notes section.                                             |
| `<div id="notesContainer" class="notes-container"></div>` | A container for displaying individual sticky notes.                |

## CSS

| Selector/Property                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| Various styles for layout, formatting, and styling of the page elements.    |
| Styles for textareas, color pickers, and buttons to create sticky notes.     |
| Styles for individual sticky note elements, including their layout, colors, and close button. |

## JavaScript

| Variable/Function                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `const addNoteBtn = document.getElementById("addNoteBtn");` | Selects the "Add" button by its ID.                        |
| `const inputValue = document.getElementById("textArea");` | Selects the textarea element by its ID. |
| `const inputColor = document.getElementById("colorPicker");` | Selects the color picker input element by its ID. |
| `const createNoteCard = (inputValue, inputColor = "brown") => { ... }` | A function that creates a sticky note card element based on input values and color. |
| Inside the `createNoteCard` function         | Creates individual elements for the note card, title, and close button, and adds functionality to the close button for deleting notes. |
| `addNoteBtn.addEventListener("click", () => { ... })` | Adds a click event listener to the "Add" button for creating and appending sticky notes to the container. |
| Inside the event listener                   | Creates a new note card element, sets its properties based on user input, and appends it to the container. |
| Conditional check                           | Ensures that a note is not created if the input is empty.                   |

-Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/sticky_notes/index.html
