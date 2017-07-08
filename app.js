/********************************
 * 1) Single-state object        *
 *********************************/

//create an array of questions and answers
var questionsArray = [
    // Question 1
    {
        questionText: 'How many bees live and work in a healthy backyard hive?',
        questionChoices: ['100 to 1000', '2000 to 10,000', '20,000 to 80,000', '90,000 to 120,000', ]
        questionCorrectChoice: 2
    }
    // Question 2
    {
        questionText: 'In her entire lifetime, a worker bee does not perform which job in a healthy hive?',
        questionChoices: ['egg layer', 'larvae feeder', 'undertaker', 'comb builder']
        questionCorrectChoice: 'egg layer'
    }
    // Question 3
    {
        questionText: 'How far can a honey bee travel, per trip, to forage for her hive?',
        questionChoices: ['500 feet', '1 mile', '3 miles', '5 miles']
        questionCorrectChoice: 3
    }
// Question 4
    {
        questionText: 'How many eggs will the queen bee lay in a day?',
        questionChoices: ['up to 100', 'up to 500', 'up to 1000', 'up to 2000']
        questionCorrectChoice: 3
    }
// Question 5
    {
        questionText: 'How does a worker bee carry pollen from the flower back to her hive?',
        questionChoices: ['in pollen baskets on her legs', 'in her stomach', 'in her mouth', 'in her arms']
        questionCorrectChoice: 0
    }
// Question 6
    {
        questionText: 'What is the first job the newborn worker bee does?',
        questionChoices: ['eat a meal', 'fly out to forage', 'clean the cell she just emerged from', 'tend to the queen']
        questionCorrectChoice: 2
}
// Question 7
    {
        questionText: 'How do bees cool themselves when it is too hot outside?',
        questionChoices: ['by fanning each other with their wings', 'by collecting outside the hive and hanging off each other in a beard-like clump', 'by dipping into some water', 'heat has no effect on bees']
        questionCorrectChoice: 1
}
// Question 8
    {
        questionText: 'If you see a zillion bees making a hugh cloud in the air, what is going on?',
        questionChoices: ['This is a swarm. The hive is too crowded and up to 60% of the bees have left in search of a new home', 'This is a swarm. RUN!!! (Just kidding. They are not interested in hurting you.) Call a local beekeeper to come and take the swarm away to a new home.', 'This is a swarm. The old queen is leaving with much of the workers and drones, and leaving the hive to the about-to-hatch new queen', 'All of the above. It is like a cell dividing and is a very healthy thing for the hive, and bee population in general.']
        questionCorrectChoice: 3
}
// Question 9
    {
        questionText: 'If you see a lone honey bee languishing but not dead, what should you do?',
        questionChoices: ['Kill that thing before it stings you!', 'Capture it and try to start an observation hive in your kid\'s bedroom', 'Put a drop of a 1\: 1 mixture of water and sugar next to her, and she will be able to fly away within moments after drinking it.', 'Feed it some honey. \(hint: don\'t do this! Other bees\' honey can carry viruses safe for people but harmful to bees.\)']
        questionCorrectChoice: 2
            }
// Question 10
    {
        questionText: 'Which of the following do bees NOT like?',
        questionChoices: ['bears', 'horses', 'fire', 'all of the above']
        questionCorrectChoice: 3
            }
]

// create question counter
var currentQuestionNumber = 0;

// create total number of questions; also serves as total number of correct answers possible
var totalNumberOfQuestion = questionsArray.length;

// create total number of correct answers by user
var totalNumberOfCorrectAnswers = 0;




/************************************
 * 2) Functions that modify state    *
 *************************************/

// 1 - updates the questions text to the current question


// 2 - displays the choices for the current question:
// empty the current choices; get the total number of choices for the current question; loop through all the choices and append them to the choices container on their own line and with their own radio button.


// 3 - displays the number of the current question




/************************************
 * 3) Functions that render state    *
 *************************************/

$(document).ready(function () {})


// hide the quiz and result sections on load

// when the startQuizButton is clicked, run a function to:
// hide the start and result sections; show the quiz section; empty the results of the details container; run the questionDisplay function from 2) //1 and //2  above

// show the quiz questions:
// when the user clicks the radio button for an answer, get/compare the user's answer and the correct answer

// if the user is correct, increment the totalNumberCorrectAnswers, and append the questionText and correctDetails to the result_msg that displays at the end of the quiz

// if all the questions have not been answered, increment the currentQuestionNumber and run the questionDisplay function from 2) //1 and //2  above

// when all the questions have been asked/answered:
// show the finalScore; hide the quiz and start sections and show the result section;

// when the #tryagain button is clicked:
// hide the quiz and result sections, show the start section, reset the currentQuestionNumber and totalNumberOfCorrectAnswers variables to 0


// ????? where is this section ?????
/************************
 * 4) Event listeners    *
 *************************/
