GIVEN user needs a new, secure password
WHEN button clicked to generate a password
THEN the user is presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN the user selects which criteria to include in the password
WHEN prompted for the length of the password
THEN the user chooses a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN the user choose lowercase, uppercase, numeric, and/or special characters
WHEN each prompt is answered
THEN the input will be validated and at least one character type will be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is written to the page
```
Deployed Link:
https://marcuspramirez.github.io/password-generator/develop/index.html
