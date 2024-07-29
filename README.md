# Potterville - Trivial Pursuit

Potterville is a brief insight into magical Harry Potter series. The quiz app is built using HTML5, CSS3, JavaScript for the Milestone 2 project of Code Institute's Full Stack Development diploma.

Live Link: https://hennasingh.github.io/Potterville/

## User Experience - UX

### Strategy

I have always been fond of Harry Potter book series. The books have a way of giving a magical pleasant feeling. I have had a Trivial Pursuit game (bought from London Airport) for a while and thought of making a more fun digital version of it.

<quote> The project has no prospective client, it is built for fun and engagement and learning purposes.</quote>

__User Stories__
- I want to be able to understand the purpose of the site.
- I want to be able to choose categories within Harry Potter series.
- I want to be able to challenge myself and time my game.
- I want to be able to see my magical quotient at the end of the game.
- I want to be able to see magical items I collected.

__User Goals__
 - Play a simple adventure game that is fun and engaging.
 - Player earns a magical item on each correct answer

 __Site Owner Goals__
 - Create a fun, interactive and engaging game.
 - Design the game to be visually appealing.
 - Add an extra challenge for Harry Potter fans aka Potterheads.
 - The site is responsive and easy to navigate.


### Scope

This took a bit of time in figuring out, it was a continuous development in this as I progressed in my javascript learning. The initial setting is to have 3 pages but this may change as I develop the working version of the website:

- Welcome Page: Introduction to Potterville and rules of the game
- Game Page: The main quiz game, that starts with category options and shows spells earned on correct answers
- End Page: Game Over Page showing magical quotient and a link to restart the game.


### Skeleton

The wireframes for mobile and desktop were created using Balsamiq. These are the initial ideas but may change as I learn and progress in the actual development of the quiz


## User  Interface - Design

### Typography

Font suggestions were taken from chatGPT. Harry Potter font was downloaded from font-space while MedievalSharp font was taken from Google Fonts.

### Colors

Color Scheme suggestions were taken from [Coolers](coolers.co) on uploading the Hogwarts background image.

<details><summary>Color Palette</summary>

![color-palette](./assets/readMeFiles/colorPalette.png)

</details>

## Future Implementations

1. In the next version of the quiz, I would like to add a battleground along with answering the quiz questions. Each spell earned can be used to hit the enemy to reduce their power, as it shows in the design wireframe.

2. In the next version, the website will take user details (name) and offers to sort into house using Sorting Hat as per the design wireframe.

3. In the next version of the website, there will be a restriction to play the same category again.

4. In the next version of the website, user scores will be saved and a leaderboard will be shown.


## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript

### Other Sites and Softwares

- Git/Github - For version control and deployment.
- [chatGPT](https://chat.openai.com/) - For content on description, and css animations.
- [cwebp](https://www.npmjs.com/package/cwebp) - For converting images from jpg/png to webp formats.
- [Balsamiq](https://balsamiq.com/) - For designing wireframes for desktop and mobile.
- [Font Awesome](https://fontawesome.com/icons) - For icons in the footer, magic wand and timer challenge.


## Testing

The testing details for the website can be found in [testing.md](testing.md)

## Deployment

### Github Pages

The website is deployed using Github Pages functionality provided by Github. The steps to follow are:

1. Create a Github account if you dont already have one
2. The repository for Potterville was created using a template provided by Code Institute. This can be found on the repository title [here](https://github.com/hennasingh/Potterville).
3. Go to settings tab on the menu bar of the repository.
4. In the left section, under Code and automation, click on Pages.
5. Under the title "Build and deployment", select the source: Deploy from a branch.
6. Under the branch section below that, select /root folder and save.
7. Come back to Code section of the repository. Give a few minutes and refresh the page. You will find Deployments section generated the right side with a URL to the deployed site.

### Local Clones

You can clone the project to deploy it locally on your own computer

1. Navigate to the project repository
2. Click on green "Code" button and local tab as shown below:

![Local Clone](./assets/images/local-clones.png)

3. There are 3 methods provided to clone 'HTTPS', 'SSH',or 'Github Cli' that requires you to copy the repository link and type `git clone`in your terminal (mac) or command prompt (windows) in the chosen directory.
4. The 4th option requires you to install Github Desktop and you can open the repository in your chosen local directory.


## Credits
- [font-space](https://www.fontspace.com/category/harry-potter) - For HarryPotter font
- [Google Fonts](https://fonts.google.com/specimen/MedievalSharp) - For MedievalSharp font
- [Wizarding World](https://www.wizardingworld.com/features/try-out-our-new-harry-potter-video-call-backgrounds) - For Hogwarts Castle background
- [Accordion - W3C Schools](https://www.w3schools.com/howto/howto_js_accordion.asp) - For logic on Accordions
- [Icon Finder](https://www.iconfinder.com/) - Triwizard Cup Favicon and Sorting Hat vector


