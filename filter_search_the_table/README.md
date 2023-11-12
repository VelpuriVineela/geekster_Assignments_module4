# Filter Table Search

A simple web page demonstrating a table with a search filter for filtering data based on the first name, last name, or country.

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
| `<title>Filter Table Search - Parwinder Singh Batra</title>` | Sets the title of the HTML document displayed in the browser's tab.        |
| `<link rel="stylesheet" href="style.css">`   | Links an external CSS stylesheet.                                           |
| `<body>`                                     | The body of the HTML document where content is displayed.                 |
| `<div class="main">`                         | The main container for the search input and the table.                     |
| `<input type="text" id="search" placeholder="Enter the First Name or Last Name or Country........"/>` | The search input field. |
| `<table id="customers">`                     | The table element with the ID "customers" for displaying data.             |
| `<thead>`                                    | The table header containing column names.                                  |
| `<tr><th>First Name</th> <th>Last Name</th><th>Country</th></tr>` | Table header row with column names.                            |
| `<tbody>`                                    | The table body where data rows are inserted dynamically.                   |
| `</tbody>`                                   | Closing tag for the table body.                                           |
| `</table>`                                  | Closing tag for the table.                                                 |
| `</div>`                                    | Closing tag for the main container.                                        |
| `<script type="text/javascript"| src="script.js"></script>` | Links an external JavaScript file.                                |
| `</body>`                                   | Closing tag for the body.                                                  |
| `</html>`                                   | Closing tag for the HTML document.                                         |

## CSS

| Selector/Property                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `#search`                                   | Styles the search input field.                                             |
| `#customers`                                | Styles the table and its components.                                       |
| `#customers td, #customers th`              | Styles table cells and header cells.                                       |
| `#customers tr:nth-child(even)`             | Styles even rows with a background color.                                  |
| `#customers tr:hover`                       | Styles rows on hover with a background color.                              |
| `#customers th`                             | Styles table header cells.                                                 |

## JavaScript

| Variable/Function                           | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `const searchResult = document.getElementById('search')` | Selects the search input field by its ID.                        |
| `const tableData`                            | An array containing sample data for the table.                           |
| `const searchTableResult = (dataset) => { ... }` | A function to populate the table with data.                   |
| Inside the `searchTableResult` function      | Iterates through the dataset and creates HTML table rows dynamically.     |
| `searchResult.addEventListener('keyup', (e) => { ... })` | Adds a keyup event listener to the search input for real-time filtering. |
| Inside the event listener                   | Filters the table data based on user input and updates the table dynamically. |

- Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/filter_search_the_table/index.html
