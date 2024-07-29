# Potterville - Testing

This page contains all the testing details the website was run through to produce performance insights.

## Automated Testing and Debugging

### W3C Validator

HTML and CSS code for the website were tested and validated by using [HTML Validator](https://validator.w3.org/#validate_by_input) and [CSS Validator](https://jigsaw.w3.org/css-validator/)


__HTML Validation__

1. The HTML Validation for index page showed errors on first try, those were on section without heading . That was corrected and the test passed

<details>
    <summary>index.html</summary>
</details>


2. The HTML Validation test for Game Page, showed info messages on trailing '/' slashes on meta tags. Those were removed and the test passed
<details>
    <summary>game.html</summary>

![HTML Validation for Game Page](assets/readMeFiles/gameHtmlValidate.png)
</details>


3. The HTML Validation for the End Page did not show any errors and passed in the first try :) 
<details>
    <summary>end.html</summary>

![HTML Validation for end Page](assets/readMeFiles/endHtmlValidate.png)
</details>



__CSS Validation__

1. There was one file for CSS that passed validation in the first try

<details>
    <summary>Styles.css</summary>

![CSS Validation for Stylesheet](assets/readMeFiles/stylesCssValidate.png)
</details>