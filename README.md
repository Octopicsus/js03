# JavaScript Script Description

## Overview

This JavaScript script simulates a simple interactive scenario where a user can ask specific questions about the fictional `myUser` object. Based on the user's input, the script provides context-specific answers. It utilizes randomization, conditional logic, and basic user input handling.

---

### User Interaction

The script prompts the user to ask specific questions (`"year?"`, `"location?"`, or `"sport?"`).

---

## Features

### Data Structure

The script defines a `myUser` object containing the following properties:

- `age`: Year of birth of the user (e.g., `1986`).
- `location`: An array of cities in the Czech Republic (e.g., `"Prague"`, `"Brno"`).
- `isCapital`: A boolean array indicating if a city is the capital.
- `country`: The name of the country (e.g., `"Czech Republic"`).
- `sport`: An array of sports associated with the user.
- `sportIdol`: An array of sports idols corresponding to the first three sports.

### Random Scenario Selection

A random index is generated to select one of the five predefined scenarios for `location` and `sport`.



### Conditional Responses

- **Year**: If the user asks `"year?"`, the script responds with the birth year of the `myUser`.
- **Location**: If the user asks `"location?"`, the script responds with a city from the `location` array. If the selected city is a capital, it includes additional information.
- **Sport**: If the user asks `"sport?"`, the script provides the sport and, for the first three indices, also mentions a related sports idol.

### Error Handling

If the user provides an invalid question, an alert is displayed listing the correct questions.



