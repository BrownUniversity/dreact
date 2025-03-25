# Brown Dreact
Brown Dreact is a Drupal module for handling the insertion of compiled react applications.

## Installation

Using Composer, Add the repository:

```json
{
  "type": "vcs",
  "url": "git@bitbucket.org:BrownUniversity/dreact.git"
}
```

and require the module:
```json
"require": {
  "brownuniversity/dreact": "^1.0.0"
}
```

Run composer install, and the module will be available to be enabled via the Drupal interface.

## Releases

A new patch release will be automatically tagged when new code is pushed to the
`main` branch.

## Usage

### Inserting an App

1. Add a new Basic Page content type.
2. In the section `Below Content Components` in the dropdown, select `Add React App`
3. In the `React Apps` dropdown, select the name of the app.
4. Save the page, and the React App will render in the `Below Content Components` block.

### Adding a new App

1. Compile the app down to a single `.js` file
2. Add the app to the `/apps` directory

Note: The `.js` filename will be used as the ID of the DIV that the app is rendered in, as well as the entry in the select menu with `-` converted to spaces, and individual words capitalized.

Example: `todo-app.js` needs to be looking for `<div id='todo-app'></div>` as its base div, and will display in the menu as `Todo App` 
