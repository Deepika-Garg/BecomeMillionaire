# Who wants to be a Millionaire Quiz

[Live site](https://deepika-garg.github.io/BecomeMillionaire/index.html)

![am I responsive screenshot](assets/readmeImages/responsive.png) 

## User Experience (UX)

### **User Stories:**

### User
  > - As a user I want to be able to play a fun and engaging game.
  > - As a user I want to test my general Knowledge about the world.
  > - As a user I want to intuitively navigate the site without confusion.
  > - As a user I want to be able to see a running score as the game progresses.
  > - As a user I want to see my final score when I have completed the quiz.
  > - As a user I want to see if any help/hint available for me to complete the quiz and win as much as possible.

### Quiz site Owner
  > - As the site owner I want to provide a fun and engaging quiz for the user.
  > - As the site owner I want the user to be able to replay the game multiple times.
  > - As the site owner I want to questions to appear randomly and different for the same level to make it more engaging.

### Scope Plane
  > - The website should have a link to the home page visible at all times so the user can reset the quiz without using browser navigation buttons. 
  > - The website should have a welcome message for the user that concisely describes the purpose of the site.
  > - The website should be visually appealing to the user and be styled in a way that is relevant to the Who wants to be millionaire theme.
  > - The website should keep a running total of the user's winning amount and display this to them in the progress ladder on the right.
  > - The website should let the user know whether they have selected the correct answer or not.
  > - Game should finish once user give the wrong answer. 
  > - Every time the user give wrong answer and game finishes, they must have choice to start the game again.

## Structure Plane 
### (This is a single page game. Messages are shown on click of buttons in form of Modal and are hidden or displayed via display: block/hidden css)

> - Site logo/title 

Home page
> - On click of Rules button on the page a modal appears and briefly describes quiz.
> - Different sounds has been added for the right and wrong answer and sound button can be used to toggle on/off the sound.
> - Who wants to be a millionaire logo/image for asthetic.
> - Randomly generated question with four answer buttons(with hover effect) to select from.
> - Progress ladder/bar on the right to show the winning amount.
> - Lifeline 50-50 to help the user for answer the questions. it will remove 2 wrong answers.
> - Lifeline Audiance Poll will highlight the right answer in green color. 

End game Modal/PopUp
> - PopUp will appear if the wrong answer selected to 'Start again' button to encourage user to restart the game.
> - Modal will show your winning amount with a congratulations message.

404 Page
> - 404 Page with the logo.
> - Error Message.
> - Return to home button to go back to the quiz 

### Wireframes:

Homepage:
![Home wireframes](assets/readmeImages/wireframe.png)
 

### Surface plane

**Color**
Very less colors are used so that quiz looks neat and tidy. [Color Adobe](https://color.adobe.com/) is used to create the color pallete. contrast of color is good. Only first two colors purple and white is used as site colors. Red and Green color is used to highlight the wrong and right answers respectively and Golden color is used to show the progress. 

![Colors Pallete](assets/readmeImages/colorsPallete.png)

**Font:**
Font for the quiz is used 'Segoe UI'. Different font size is being used between question and answers to differentiate but same font.

**Images:**
In total only three images are used in the quiz. One for logo and favicon and two images of phone and audiance for two life lines respectively. 

Image Sources  
[WhoWantsToBeMillionaireLogo](https://img.playstationtrophies.org/images/trophies/1297/ico.png)

[AudiancePoll](https://millionaire.fandom.com/wiki/Ask_the_Audience?file=ATA_2018.gif)

[Fifty-Fifty](https://millionaire.fandom.com/wiki/50:50?file=50-50_2018.gif)


## Existing Features
> - Title/logo
![Logo](assets/images/KBC.png)


> - Rules Explained
Modal is used to describe the rules of the game on the click of rules button on the top of page.


![Rules screenshot](assets/readmeImages/rules.png)

The background and logo change colour accordingly using JS.

> - Sound On/Off Button

Correct answer and wrong answer sound has been added, which can be which can be toggle on and off by the user for there preference.

![Sound On screenshot](assets/readmeImages/soundOn.png)
![Sound Off screenshot](assets/readmeImages/soundOff.png)

> - Quiz questions and answers

Questions are pulled from the defined list of 12 sets with 3 questions in each set.

Answer buttons highlight when hovered over (large devices) to create positive UX.

![Quiz screenshot](assets/readmeImages/quiz.png)

Score/Prize Money increments with every correct answer.

![ProgressBar screenshot](assets/readmeImages/progressBar.png)

After user has selected an answer, if the answer is correct then new question appear and progress bar get updated as in previous image. If the answer is wrong then selected answer get highlighted with red color and right answer with Green color. screen freeze and this is end of game.

![wrongAnswer screenshot](assets/readmeImages/wrongAnswer.png)

Just after 1 second a modal appear and indicate Game End. It shows the prize money, congratulate the player and give option to play again.

![Alert screenshot](assets/readmeImages/alertScreenshot.png)

## Lifelines

There are 2 lifelines are provided to help player, called '50:50' and 'AudiancePoll'. These will help user to figure out the right answer and win maximum money they can. 

![Lifelines screenshot](assets/readmeImages/lifeLines.png)

**LifeLine Fifty-Fifty**
 On click of '50:50' two actions occur.
 1. Two random wrong answers get deleted and player is left with only 2 choices to select from including the right one. It makes game easy for player.

 ![Removed wrong options screenshot](assets/readmeImages/quizAfter50-50Used.png)

2. Button itself get faded to indicate that it is used.

![Faded '50:50' screenshot](assets/readmeImages/faded50-50.png)

**LifeLine AudiancePoll**
 On click of 'AudiancePoll' lifeline two actions occur.
 1. Right answer will get highlight with 'Green' color.

 ![Highlight Right option screenshot](assets/readmeImages/quizAfterAPUsed.png)

2. Button itself get faded to indicate that it is used.

![Faded 'AudiancePoll' screenshot](assets/readmeImages/fadedAP.png)

3. If you try to use any of the lifeline again during the same game. It shows a message "Lifelines can be used only once".

![Lifeline alert message screenshot](assets/readmeImages/lifelineUsedAlert.png)


## Future Features
### Home page
> - Ratherthan a single page application I will add a home page with welcome message and game rule and then convert this only page as a quiz page.
> - I would like to include some sort of animation when user win £1,000,000.
> - I want to add the third lifeline Phone a Friend like actual original game.  
> - I would learn and add keyboard Navigation for my quiz.

## Languages used

> - HTML5
> - CSS3
> - Javascript

## Technologies used
> - Bootstrap: I used [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/) to help build my site in a responsive layout. 
> - Google Fonts: The font 'Segoe UI' was used for the main body of the site. 
> - Font Awesome: was used to import sound on/off icons for the sound button. 
> - Git: I used VSCode as a code space to create the site from which I pushed my site to Github for deployment.
> - GitHub: I used GitHub as the respository for the projects code after being pushed from VSCode.
> - Balsamiq: I used Balsamiq to create wireframes to outline to design of the site.
> - Color Adobe: I used color Adobe to generate a colour palette.

## Testing


## HTML validator:

Errors thrown by HTML Validator during Testing. 

![HTML validator error screenshot](testing/HTMLValidator/validationFailImageHTML.png)

Errors has been corrected and following is the screenshot provided.

![HTML validator Pass screenshot](testing/HTMLValidator/validationPassImageHTML.png)


## CSS validator:

Errors thrown by CSS Validator during Testing.

![CSS validator error screenshot](testing/CSSValidation/validationFailImageCSS.png)

Errors has been corrected and following is the screenshot provided.

![CSS validator error screenshot](testing/CSSValidation/validationPassImageCSS.png)

## JavaScript validator:

![javaScript validator screenshot](testing/JavascriptValidation/JSHintTest.png)

Note: Functions shown unused in the Validator image are the function which are called in HTML file on onclick() event of corresponding buttons.

## Lighthouse Testing

**Testing for Desktop**
![Lighthouse Desktop testing screenshot](testing/LighthouseValidation/DesktopLHTestingBeforeCorrection.png)

Some Meta tags and aria-labels has been added to improve the testing results.
![Lighthouse Desktop testing after correction screenshot](testing/LighthouseValidation/DesktopLHTestingAfterCorrection.png)


**Testing for Mobile Device**
![Lighthouse Mobile testing screenshot](testing/LighthouseValidation/MobileLHTesting.png)


## Manual Testing
### User testing
| Feature being tested:| Steps                                | Expected outcome  | Pass/Fail |
|:---------------------|:-------------------------------------|:------------------|-----|
| Rules button - Logo | Click of Rules button. | A popup should appear with all the game rules.           | PASS |
| Rules Popup/Modal | click on X/close button or click on anywhere on the screen other than popup.                                 | Popup should disappear.  | PASS |
| Sound button | click the sound button | Sound of correct answer and wrong answer should be toggle on/off | PASS |
| Game Logo | Hover on the game logo | Logo should be bigger in size by 10% | PASS |
| Question's font size | Test on smaller screen size | It's font size should be smaller on small screen. | PASS |
| Questions | Play quiz multiple time. | Questions should be randomly generated out of set of 3 questions for same level/prize money. | PASS |
| Answer buttons | Hover mouse over buttons/Tap on mobile device. | Buttons should highlight when hovered and select the answer when clicked. | PASS |
| Answer buttons |Select the correct answer | 1. Button should highlight with 'Green' color. 2. In the progress bar on the right winning amount should be green and next question amount should be golden color. 3. Next question should appear randomly on the screen from set of 3 questions.  | PASS |
| Answer buttons | Select the wrong answer | Buttons should highlight with 'Red' color and correct answer should highlight with 'Green' color. PopUp should appear to warn that game is over and 'Start Again' button. | PASS |
| Quiz/Home page - UX | Read through every question. | Text should all be clear and easily readable and the questions make sense. | PASS|
|Progress Bar/Ladder - score/PrizeMoney counter | Play quiz whole way through on each level. | Score should incrememnt by 1 step up for every correct answer. Current Question should be highlighted with golden color and score for completed questions should be highlighted with green color. | PASS |
| Fifty-Fifty Lifeline | Click on it. | Two wrong answers should disappear randomly. Now you should be left with only two answer options including correct one. Lifeline's visibility should be degraded immidiately to indicate that it has been used.| PASS |
| Fifty-Fifty Lifeline | Click on it again during the same game. | Alert message should appear to warn Lifelines can be used only once. No answer option is removed this time.| PASS |
| Audiance Poll Lifeline | Click on it. | Right answer should be highlighted with Green Color. Lifeline's visibility should be degraded immidiately to indicate that it has been used.| PASS |
| Audiance Poll Lifeline | Click on it again during the same game. | Alert message should appear to warn Lifelines can be used only once. No answer option is highlighted green this time.| PASS |
| End game - finish message | Complete quiz or select wrong answer | End game message should alter based on winning amount. Text should be clear and legible. | PASS |
| End game  - Start again button | Click button | Quiz should reset back to the beginning | PASS| 
| Responsiveness - UX | Resize site for all device sizes. | Check that images/text/other elements resize as expected, text should be readable and elements should all be visible and not overlap randomly. | PASS|
| 404 Page - UX | Make a mistake in browser address | 404 Page should appear with the site logo and an Error message with a back to main quiz button | PASS|
| Back to Home Page Button | Click on it | It should redirect you to home/main/quiz page with a reset quiz. | PASS|











