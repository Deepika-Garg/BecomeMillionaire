

document.addEventListener("DOMContentLoaded", () => {
  const startGame = document.getElementById("startGameBtn");
  if (startGame) {
    startGame.onclick = () => {
      window.location.href = "quiz.html";
    }
  }});
document.addEventListener("DOMContentLoaded", function () {
  const rulesBtn = document.getElementById("rulesBtn");
  const rulesModal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const closeButton = document.querySelector(".closeButton");

  if (rulesBtn && rulesModal && overlay && closeButton) {
    // Open rulesModal
    rulesBtn.addEventListener("click", () => {
      rulesModal.classList.add("active");
      overlay.classList.add("active");
    });

    // Close rulesModal
    closeButton.addEventListener("click", () => {
      rulesModal.classList.remove("active");
      overlay.classList.remove("active");
    });

    // Close rulesModal when overlay is clicked
    overlay.addEventListener("click", () => {
      rulesModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  } else {
    console.log(" Rules Modal elements not found");
  }
});
const q1set = [
  {
    question:
      "What is the name of the ancient Incan city in Peru that is considered one of the new Seven Wonders of the World?",
    a: "Angkor Wat",
    b: "Petra",
    c: "Machu Picchu",
    d: "The Colosseum",
    correct: "Machu Picchu",
  },
  {
    question:
      "What is the name of the famous tower in Italy that leans to one side?",
    a: "Eiffel Tower",
    b: "CN Tower",
    c: "Leaning Tower of Pisa",
    d: "Tokyo Tower",
    correct: "Leaning Tower of Pisa",
  },
  {
    question:
      "What is the name of the famous monument in the USA that was built to commemorate the first US President?",
    a: "Mount Rushmore",
    b: "Lincoln Memorial",
    c: "Statue of Liberty",
    d: "Washington Monument",
    correct: "Washington Monument",
  },
];

const q2set = [
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Jupiter",
    c: "Mars",
    d: "Venus",
    correct: "Mars",
  },
  {
    question: "Which is the longest river in the world?",
    a: "Amazon River",
    b: "Yangtze River",
    c: "Mississippi River",
    d: "Nile River",
    correct: "Nile River",
  },
  {
    question: "Which country is famous for the Great Barrier Reef?",
    a: "USA",
    b: "Brazil",
    c: "Australia",
    d: "India",
    correct: "Australia",
  },
];

const q3set = [
  {
    question: "What is the largest ocean in the world?",
    a: "Atlantic Ocean",
    b: "Arctic Ocean",
    c: "Indian Ocean",
    d: "Pacific Ocean",
    correct: "Pacific Ocean",
  },
  {
    question: "What is the smallest ocean in the world?",
    a: "Arctic Ocean",
    b: "Southern Ocean",
    c: "Indian Ocean",
    d: "Atlantic Ocean",
    correct: "Southern Ocean",
  },
  {
    question: "What is the deepest ocean in the world?",
    a: "Atlantic Ocean",
    b: "Arctic Ocean",
    c: "Indian Ocean",
    d: "Pacific Ocean",
    correct: "Pacific Ocean",
  },
];

const q4set = [
  {
    question: "What is the largest desert in the world?",
    a: "Gobi Desert",
    b: "Sahara Desert",
    c: "Mojave Desert",
    d: "Kalahari Desert",
    correct: "Sahara Desert",
  },
  {
    question:
      "What is the only desert in the world that is home to a large number of wild camels?",
    a: "Mojave Desert",
    b: "Sahara Desert",
    c: "Gobi Desert",
    d: "Arabian Desert",
    correct: "Gobi Desert",
  },
  {
    question: "What is the largest hot desert in the world?",
    a: "Sahara Desert",
    b: "Mojave Desert",
    c: "Gobi Desert",
    d: "Kalahari Desert",
    correct: "Sahara Desert",
  },
];

const q5set = [
  {
    question: "What is the capital of Japan?",
    a: "Tokyo",
    b: "Osaka",
    c: "Kyoto",
    d: "Hiroshima",
    correct: "Tokyo",
  },
  {
    question: "What is the largest country in South America?",
    a: "Argentina",
    b: "Peru",
    c: "Brazil",
    d: "Colombia",
    correct: "Brazil",
  },
  {
    question: "What is the deepest point in the ocean?",
    a: "Mariana Trench",
    b: "Puerto Rico Trench",
    c: "Java Trench",
    d: "Aleutian Trench",
    correct: "Mariana Trench",
  },
];
const q6set = [
  {
    question: "What is the largest desert in the world?",
    a: "Sahara Desert",
    b: "Arabian Desert",
    c: "Gobi Desert",
    d: "Antarctica",
    correct: "Sahara Desert",
  },
  {
    question: "What is the capital of Canada?",
    a: "Toronto",
    b: "Montreal",
    c: "Ottawa",
    d: "Vancouver",
    correct: "Ottawa",
  },
  {
    question: "What is the smallest continent in the world?",
    a: "Africa",
    b: "Europe",
    c: "Asia",
    d: "Australia",
    correct: "Australia",
  },
];

const q7set = [
  {
    question: "What is the highest waterfall in the world?",
    a: "Angel Falls",
    b: "Niagara Falls",
    c: "Iguazu Falls",
    d: "Victoria Falls",
    correct: "Angel Falls",
  },
  {
    question: "What is the capital of Italy?",
    a: "Rome",
    b: "Venice",
    c: "Milan",
    d: "Florence",
    correct: "Rome",
  },
  {
    question: "What is the largest lake in Africa?",
    a: "Lake Tanganyika",
    b: "Lake Malawi",
    c: "Lake Victoria",
    d: "Lake Turkana",
    correct: "Lake Victoria",
  },
];

const q8set = [
  {
    question: "What is the tallest animal in the world?",
    a: "Hippopotamus",
    b: "Giraffe",
    c: "Elephant",
    d: "Rhino",
    correct: "Giraffe",
  },
  {
    question: "What is the capital of Brazil?",
    a: "Rio de Janeiro",
    b: "Brasília",
    c: "São Paulo",
    d: "Belo Horizonte",
    correct: "Brasília",
  },
  {
    question: "What is the largest country in the world?",
    a: "Russia",
    b: "Canada",
    c: "China",
    d: "United States",
    correct: "Russia",
  },
];

const q9set = [
  {
    question: "Which scientist developed the theory of general relativity?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Galileo Galilei",
    d: "Stephen Hawking",
    correct: "Albert Einstein",
  },
  {
    question: "Which country was the first to land a human on the Moon?",
    a: "China",
    b: "Soviet Union",
    c: "United States",
    d: "India",
    correct: "United States",
  },
  {
    question: "Which ancient civilization built the pyramids of Giza?",
    a: "Romans",
    b: "Mesopotamians",
    c: "Aztecs",
    d: "Egyptians",
    correct: "Egyptians",
  },
];

const q10set = [
  {
    question: "What is the largest continent in the world?",
    a: "Africa",
    b: "Asia",
    c: "North America",
    d: "South America",
    correct: "Asia",
  },
  {
    question: "What is the smallest continent in the world?",
    a: "Antarctica",
    b: "Europe",
    c: "Australia",
    d: "South America",
    correct: "Australia",
  },
  {
    question: "What is the only continent that is also a country?",
    a: "Europe",
    b: "Africa",
    c: "Australia",
    d: "North America",
    correct: "Australia",
  },
];

const q11set = [
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    a: "let",
    b: "const",
    c: "var",
    d: "static",
    correct: "const",
  },
  {
    question: "What is the output of: typeof null?",
    a: "object",
    b: "null",
    c: "undefined",
    d: "boolean",
    correct: "object",
  },
  {
    question: "Which method is used to convert a JSON string into an object?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "parse.JSON()",
    d: "object.parse()",
    correct: "JSON.parse()",
  },
];

const q12set = [
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    a: "William Shakespeare",
    b: "Charles Dickens",
    c: "Jane Austen",
    d: "Leo Tolstoy",
    correct: "William Shakespeare",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    a: "Gold",
    b: "Oxygen",
    c: "Osmium",
    d: "Oxide",
    correct: "Oxygen",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    a: "Gold",
    b: "Iron",
    c: "Diamond",
    d: "Granite",
    correct: "Diamond",
  },
];

/*-- Define progressSet array with 12 ids and their corresponding prize values sets --*/
const progressSet = [
  {
    id: 1,
    prize: 100,
  },
  {
    id: 2,
    prize: 500,
  },
  {
    id: 3,
    prize: 1000,
  },
  {
    id: 4,
    prize: 4000,
  },
  {
    id: 5,
    prize: 8000,
  },
  {
    id: 6,
    prize: 16000,
  },
  {
    id: 7,
    prize: 32000,
  },
  {
    id: 8,
    prize: 64000,
  },
  {
    id: 9,
    prize: 125000,
  },
  {
    id: 10,
    prize: 250000,
  },
  {
    id: 11,
    prize: 500000,
  },
  {
    id: 12,
    prize: 1000000,
  },
];


const ladderEl = document.getElementById("ladder");

// Render the ladder
function renderLadder(currentId = 1) {
  ladderEl.innerHTML = "";

  // Reverse so highest prize is at top
  [...progressSet].reverse().forEach((item) => {
    const li = document.createElement("li");//creating a list element by element
    li.textContent = `£${item.prize.toLocaleString()}`;//assigning prize money to each element in the loop

    if (item.id === currentId) {
      li.classList.add("active");// current item corresponding to current question will be golden color
    } else if (item.id < currentId) {
      li.classList.add("passed");// all the items/score below current item will be green color. 
    }

    ladderEl.appendChild(li);//finally append the child to the ladder element one by one and list will render on the screen
  });
}

const questionSets = {
  1: q1set,
  2: q2set,
  3: q3set,
  4: q4set,
  5: q5set,
  6: q6set,
  7: q7set,
  8: q8set,
  9: q9set,
  10: q10set,
  11: q11set,
  12: q12set,
};
let currentQuestion = 1;
let score = 0;

const question = document.querySelector(".question div p");
const allAnswers = document.querySelector(".answer");
let currentRandomQuestion = null;

//sound variables
const correctSound = new Audio("assets/sounds/right_answer.mp3");
const wrongSound = new Audio("assets/sounds/wrong_answer.mp3");
//preload code for sound/audio variables to make it faster load of page
correctSound.preload='auto';
wrongSound.preload='auto';


//set random question and their answer from the given set to show on screen
function setQueAndAns(queSet) {
  let random = Math.floor(Math.random() * queSet.length);
  currentRandomQuestion = queSet[random];
  question.textContent = currentRandomQuestion.question;

  allAnswers.innerHTML = `<div class="row">
                <div class="col-12 col-md-6 mb-2">
                  <button type="button" class="btn w-100" data-answer="${currentRandomQuestion.a}">
                   <span>A. </span>${currentRandomQuestion.a}</button>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <button type="button" class="btn w-100" 
                   data-answer="${currentRandomQuestion.b}">
                   <span>B. </span>${currentRandomQuestion.b}</button>
                </div>
              </div>
              <div class="row ">
                <div class="col-12 col-md-6 mb-2">
                  <button type="button" class="btn w-100"  
                  data-answer="${currentRandomQuestion.c}">
                  <span>C. </span>${currentRandomQuestion.c}</button>
                </div>
                <div class="col-12 col-md-6 mb-2">
                  <button type="button" class="btn w-100" 
                   data-answer="${currentRandomQuestion.d}">
                   <span>D. </span>${currentRandomQuestion.d}</button>
                </div>
              </div>`;

  // Add click handlers to each answer button
  const buttons = allAnswers.querySelectorAll("button");

  // remove disabled state and any answer-related classes
  buttons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });


  // button clicked by user will go to selected answer variablefrom following arrow function
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedAnswer = button.dataset.answer;
      // Safety check
      if (!selectedAnswer) {
        alert("No answer selected.");
        return;
      }
      // Disable all buttons immediately
      buttons.forEach((btn) => (btn.disabled = true));

      // logic if selected answer is correct
      if (selectedAnswer === currentRandomQuestion.correct) { //Compare selected answer with current question correct answer 
        button.classList.add("correct");    //if yes, button will highlight green
        correctSound.play();                // correct sound will play
        score = progressSet[currentQuestion - 1].prize; //score will be set from progress set 
        setTimeout(() => {
          currentQuestion++;
          renderLadder(currentQuestion);//updated ladder/progress bar will render on screen 
          if (currentQuestion <= 12) {
            showQueAndAns(currentQuestion);//if haven't played all 12 questions then next random question will render on screen with all the answers
          } else {
            showResetModal();   //If already played 12th question, start again popup will show up with congratulation message.
          }
        }, 1000); // 1 second delay to show feedback
      }
      //Logic if selected answer is wrong
      else {
        button.classList.add("wrong");//if selected answer is wrong then it will be highlighted with red color.
        wrongSound.play();            //Wrong Answer sound will play.
        // Highlight the correct answer
        buttons.forEach((btn) => {
          //checking for each button if it contains the correct answer
          if (btn.dataset.answer === currentRandomQuestion.correct) {
            btn.classList.add("correct"); //button with correct answer will highlight with green color
          }
        });
        setTimeout(() => {//time delay added for breathing space
          showResetModal();//With every wrong answer game will finish and reset modal show up, which ask if you want to play again.
        }, 1000);
      }
    });
  });
}
const showQueAndAns = (currentQuestion) => {

  setQueAndAns(questionSets[currentQuestion]);
};

if (window.location.pathname.includes("quiz.html")) {
showQueAndAns(currentQuestion);
renderLadder(currentQuestion);
}
//Fuction to Return back to the home page from 404 Error page
function goHome() {
  window.location.href = "index.html";
}

//function for alert message if lifeline are already being used.
function alertMessage() {
  modalHeader.innerHTML = `<h5>Lifeline can be used only once and it has been already used.<h5>`;
  restartBtn.style.display = "none";
  exitBtn.style.display="none";
  modalBody.style.display = "none";
  cancelBtn.style.justifyContent = "center";
  cancelBtn.style.display="flex";
  resetModal.style.display = "flex";
}

//Function for 50-50 life line
let isFiftyLifeLineUsed = false;
const image50 = document.getElementById("50-50Img");
function fiftyFifty() {
  if (isFiftyLifeLineUsed) {
    alertMessage();
  } else {
    const buttons = allAnswers.querySelectorAll("button");
    const correctAnswer = currentRandomQuestion.correct;
    // Get all wrong buttons
    const wrongButtons = Array.from(buttons).filter(
      (btn) => btn.dataset.answer !== correctAnswer
    );
    //removing only 2 wrong buttons for 50-50 functionality
    for (let i = 0; i < 2; i++) {
      wrongButtons[i].disabled = true;
      wrongButtons[i].remove();
    }
    //disabling the image after one use
    image50.style.opacity = 0.5;
    image50.style.cursor = "not-allowed";
    isFiftyLifeLineUsed = true;
  }
}

//functionality for audiance poll button/Image
let isAPLifeLineUsed = false;
const imageAP = document.getElementById("audiancePollImg");
function audiancePoll() {

  if (isAPLifeLineUsed) {
    alertMessage();
  } else {
    const buttons = allAnswers.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn.dataset.answer === currentRandomQuestion.correct) {
        btn.classList.add("correct");
      }
    });
    //disabling the image after one use
    imageAP.style.opacity = 0.5;
    imageAP.style.cursor = "not-allowed";
    isAPLifeLineUsed = true;
  }
}
function lifeLineStatusReset(isLifeLineUsed, lifeLineimage) {
  if (!isLifeLineUsed) {
    lifeLineimage.style.cursor = "pointer"; // Makes it look clickable again
    lifeLineimage.style.opacity = 1; // Full visibility
  }
}

//functionality for toggling sound of all the audio
let isSoundOn = true;
const toggleSoundBtn = document.getElementById("toggleSoundBtn");
const allSounds = [correctSound, wrongSound];

function toggleSound() {
  isSoundOn = !isSoundOn;
  allSounds.forEach((sound) => (sound.muted = !isSoundOn));
  toggleSoundBtn.innerHTML = isSoundOn ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
}
if(toggleSoundBtn)
{
toggleSoundBtn.addEventListener("click", toggleSound);
}

//functionality for captured variable for reset game modal
const modalHeader = document.getElementById("modalHeader");
const modalBody = document.getElementById("modalBody");
const resetModal = document.getElementById("resetModal");
const cancelBtn = document.getElementById("cancelBtn");
const restartBtn = document.getElementById("restartBtn");
const exitBtn=document.getElementById("exitBtn");

// Function to show modal
function showResetModal() {
  modalHeader.innerHTML = score>0 ? `<h5>Well Played! Congratulations You have won £${score}<h5>`:`<h5>Better Luck, Next time! Keep Trying</h5>`;
  cancelBtn.style.display="none";
  exitBtn.style.justifyContent = "center";
  exitBtn.style.display = "flex";
  restartBtn.style.justifyContent = "center";
  restartBtn.style.display = "flex";
  resetModal.style.display = "flex";
}

// Cancel button closes modal
if(cancelBtn)
cancelBtn.onclick = () => {
  resetModal.style.display = "none";
};

//Exit button redirect to home page
if(exitBtn)
exitBtn.onclick = () => {
  resetModal.style.display = "none";
goHome();
};

// Start Again button logic
if(restartBtn)
restartBtn.onclick = () => {
  resetModal.style.display = "none";
  resetQuiz();
};

//Replay/play Again button logic
const homeBtn = document.getElementById("homeBtn");
if(homeBtn)
homeBtn.onclick = () => {
goHome();
};


function resetQuiz() {
  // Added reset logic here
  currentQuestion = 1;
  score = 0;
  renderLadder(currentQuestion);
  showQueAndAns(currentQuestion);
  isFiftyLifeLineUsed = false;
  lifeLineStatusReset(isFiftyLifeLineUsed, image50);
  isAPLifeLineUsed = false;
  lifeLineStatusReset(isAPLifeLineUsed, imageAP);
}
