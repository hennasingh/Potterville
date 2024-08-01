# Potterville - Testing

This page contains all the testing details the website was run through to produce performance insights.

## Automated Testing and Debugging

### W3C Validator

HTML and CSS code for the website were tested and validated by using [HTML Validator](https://validator.w3.org/#validate_by_input) and [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)


#### HTML Validation
<hr>

1. The HTML Validation for index page showed errors on first try, those were on section without heading . That was corrected and the test passed

<details>
    <summary>index.html</summary>

![HTML Validation for Index Page](assets/readMeFiles/indexHtmlValidate.png)
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


4. The HTML Validation for the 404 HTML page showed an error. This was a new learning for me and I was not aware that anchor tag could not be a descendant of a button.

<details>
    <summary>404.html page with errors</summary>

![404 HTML Page with errors](assets/readMeFiles/page404HtmlValidateErrors.png)    
</details>


4. The 404 HTML Page was fixed by removing button and using div tag instead as a wrapper of anchor tag.

<details>
    <summary>404.html Page without errors</summary>

![404 HTML Page without errors](assets/readMeFiles/page404HtmlValidate.png)
</details>


#### CSS Validation
<hr>

1. There was one file for CSS that passed validation in the first try

<details>
    <summary>Styles.css</summary>

![CSS Validation for Stylesheet](assets/readMeFiles/stylesCssValidate.png)
</details>


#### JavaScript Validation
<hr>

The javascript validation was done using [JSHint](https://jshint.com/)

1. The small script to open accordion panels was added in the script tag within index.html page. It showed no errors

<details>
    <summary>index script</summary>

![JS Validation for index.html script tag](assets/readMeFiles/indexJSValidate.png)
</details>

2. There were warnings on missing semicolon and they were fixed. I had to ignore the warning on function as it was designed to be that way.

<details>
<summary>game.js</summary>

![JS Validation for game.js file](assets/readMeFiles/gameJSValidate.png)
</details>

3. One semi colon warning on questions.js file which was fixed

<details>
    <summary>questions.js</summary>
    
![JS Validation for questions.js file](assets/readMeFiles/quesJSValidate.png)
</details>

4. There were semi-colon warnings for end.js as well and those were fixed.

<details>
    <summary>end.js</summary>

![JS Validation for end.js file](assets/readMeFiles/endJSValidate.png)
</details>


### Lighthouse Testing - Performance

#### Desktop

The lighthouse testing for desktop gave 100 results in all key areas: Performance, Accessibility, Best Practices and SEO

![Lighthouse - Desktop](assets/readMeFiles/lighthouseDesktop.png)

#### Mobile

![Lighthouse - Mobile](assets/readMeFiles/lighthouseMobile.png)


### Accessibility Tetsing - Wave Evaluation Tool

1. The initial test reported text contrast errors on the headings and footer titles. It took a lot of hit and trial to fix this with changing text shadows, adding box shadow and finally fixing it with applying linear gradient to background image

<details><summary>index.html page with errors</summary>

![Wave Evaluation (Errors) - Index.html](assets/readMeFiles/indexWaveErrors.png)
</details>


2. The Index Html page after fixing the contrast errors

<details><summary>index.html page without errors</summary>

![Wave Evaluation (No Errors ) - index.html](assets/readMeFiles/indexWaveNoErrors.png)
</details>


3. The game.html page had few errors that were fixed
- The fieldset had a missing legend that was added but hidden.
- There was no description to label attached to input that accepted answers, so aria-label attribute was added.
- The font-awesome icons were aria-hidden and were kept as is.
- The Alert was on HTML Audio that needed a transcript attached. I have ignored the alert for now.

<details><summary>game.html page with no errors</summary>

![Wave Evaluation - game.html](assets/readMeFiles/gameWaveValidate.png)
</details>

4. The end.html had one error on missing a heading level, I was missing h3 and I replaced the Magic Quotient with h3 instead of h2 and increased the font-size in the css.

<details><summary>end.html page with no errors</summary>

![Wave Evaluation - end.html](assets/readMeFiles/endWaveValidate.png.png)
</details>
