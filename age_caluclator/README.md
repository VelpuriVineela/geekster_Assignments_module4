# Age Calculator

## Table of Contents

1. [Introduction](#introduction)
2. [HTML Structure](#html-structure)
3. [CSS Styles](#css-styles)
4. [JavaScript Logic](#javascript-logic)

## Introduction

The Age Calculator is a simple web application that allows users to calculate their age based on their birthdate. It provides the age in years, months, and days. This README provides an overview of the HTML structure, CSS styles, and JavaScript logic used in this application.

## HTML Structure

| Element                     | Description                                                   |
|----------------------------- |--------------------------------------------------------------- |
| `<!DOCTYPE html>`           | HTML5 doctype declaration.                                    |
| `<html>`                    | Root HTML element.                                            |
| `<head>`                    | Contains metadata and links to external resources.           |
| `<meta charset="UTF-8" />`   | Character encoding meta tag.                                 |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` | Viewport settings meta tag. |
| `<link rel="stylesheet" href="style.css" />` | Link to external CSS file. |
| `<link rel="icon" type="image/x-icon" href="./age.png" />` | Link to favicon. |
| `<title>Age Calculator</title>` | Page title. |
| `<script defer src="script.js"></script>` | Link to external JavaScript file. |
| `<body>`                    | Page content container.                                       |
| `<div class="container">`    | Main content container.                                       |
| ...                         | (Other elements such as header, form, result box, error message.) |

## CSS Styles

| CSS Style                    | Description                                                 |
|------------------------------ |------------------------------------------------------------- |
| `* { margin: 0; padding: 0; box-sizing: border-box; }` | Reset default margin and padding. |
| `body { ... }`               | Styles for the body, including background and alignment.   |
| `.container { ... }`         | Styles for the main content container.                      |
| `.form { ... }`              | Styles for the input form.                                  |
| ...                          | (Other style rules for buttons, input, error messages, etc.) |

## JavaScript Logic

| JavaScript Code                             | Description                                        |
|--------------------------------------------- |---------------------------------------------------- |
| `const BTN = document.getElementById("btn");` | Selecting button element by ID.                   |
| `const BIRTHDATE = document.getElementById("birthday");` | Selecting input element by ID.       |
| `const YEARS = document.getElementById("years");` | Selecting elements by ID for age result display. |
| ...                                         | (Other constants and event listeners.)          |
| `BTN.addEventListener("click", (e) => { ... });` | Adding event listener for the "Calculate" button. |
| `const isLeapYear = (year, months) => { ... }` | Function to check for leap years.                 |
| ...                                         | (Age calculation and result display logic.)     |

-Hosted Link: https://velpurivineela.github.io/geekster_Assignments_module4/age_caluclator/index.html
