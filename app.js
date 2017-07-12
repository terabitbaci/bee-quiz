/********************************
 * 1) Single-state object        *
 *********************************/
//create an array of questions and answers
var questionsArray = [
    // Question 1
    {
        questionText: "How many honey bees live and work in a healthy backyard hive?",
        questionChoices: ["100 to 1000", "2000 to 10,000", "20,000 to 80,000", "90,000 to 120,000"],
        questionCorrectChoice: 2,
        correctDetails: "Between 20,000 and 80,000 honey bees live and work in a healthy backyard hive."
    },
    // Question 2
    {
        questionText: "In her entire lifetime, a worker bee does not perform which job in a healthy hive?",
        questionChoices: ["egg layer", "larvae feeder", "undertaker", "comb builder"],
        questionCorrectChoice: 0,
        correctDetails: "In her entire lifetime, a worker bee should never lay eggs. If she does, there is something going on that the hive will have to correct; perhaps replace the queen. A honey bee's eggs are not viable."
    },
    // Question 3
    {
        questionText: "How far can a honey bee travel, one way, to forage for her hive?",
        questionChoices: ["500 feet", "1 mile", "3 miles", "5 miles"],
        questionCorrectChoice: 3,
        correctDetails: "A honey bee will travel up to 5 miles per trip, or more, to forage for her hive. One way!"
    },
    // Question 4
    {
        questionText: "How many eggs will the queen bee lay in a day?",
        questionChoices: ["up to 100", "up to 500", "up to 1000", "up to 2000"],
        questionCorrectChoice: 3,
        correctDetails: "The queen bee will lay up to 2000 eggs in a day, with great precision."
    },
    // Question 5
    {
        questionText: "How does a worker bee carry pollen from the flower back to her hive?",
        questionChoices: ["in pollen baskets on her legs", "in her stomach", "in her mouth", "in her arms"],
        questionCorrectChoice: 0,
        correctDetails: "A worker bee carries pollen in pollen baskets on her legs. It is as if cargo pants were invented by insects."
    },
    // Question 6
    {
        questionText: "What is the first job the newborn worker bee does?",
        questionChoices: ["eat a meal", "fly out to forage", "clean the cell she just emerged from", "tend to the queen"],
        questionCorrectChoice: 2,
        correctDetails: "A worker bee must chew her way through a wax cap to emerge from her cell, then clean out her own cell before doing anything else."
    },
    // Question 7
    {
        questionText: "How do bees cool themselves when it is too hot outside?",
        questionChoices: ["by fanning each other with their wings", "by bearding outside the hive", "by dipping into some water", "heat has no effect on bees"],
        questionCorrectChoice: 1,
        correctDetails: "Bees collect outside the hive and hang off each other in a beard-like clump to cool themselves down."
    },
    // Question 8
    {
        questionText: "If you see a zillion bees making a hugh cloud in the air, what is going on?",
        questionChoices: ["This is a swarm. Run!!", "This is a swarm. Call a local beekeeper.", "This is a swarm. Freeze!!", "This is a swarm. Spray!!"],
        questionCorrectChoice: 1,
        correctDetails: "It is a swarm. The old queen is taking a major part of the hive to find a location for their new hive, leaving the hive to the about-to-hatch new queen. It is like a cell dividing. It is a very healthy thing for the hive, and for the bee population in general. Leave them alone and they will be gone in a day or two. Or call a local beekeeper who will gleefully come and collect them to put into their backyard hive."
    },
// Question 9
    {
        questionText: "If you see a lone honey bee languishing but not dead, what should you do?",
        questionChoices: ["Kill it before it stings you!", "Capture it and try to start a new hive", "Give her water/sugar nurishment", "Feed it some honey"],
        questionCorrectChoice: 2,
        correctDetails: "Offer the bee a drop of 1:1 sugar water for nurishment. If she drinks it and is able to fly off, she will continue foraging for her hive until she dies. Don't give her honey. Other bees' honey can carry viruses safe for people but harmful to bees, in which case she would carry the deadly virus back to infect her hive."
},
// Question 10
    {
        questionText: "Which of the following do bees NOT like?",
        questionChoices: ["bears", "horses", "fire", "all of the above"],
        questionCorrectChoice: 3,
        correctDetails: "Bees understandably fear fire because it will destroy the hive. The also are very defensive with bears and horses because, for thousands of years, bears have robbed and destroyed hives, and horses have disturbed them with all their racing around."
}
]


// create question counter
var currentQuestionNumber = 0;

// create total number of questions; also serves as total number of correct answers possible
var totalNumberOfQuestion = questionsArray.length;

// create total number of correct answers by user
var totalNumberOfCorrectAnswers = 0;

console.log("The current question number is " + currentQuestionNumber);
console.log("The total number of questions is " + totalNumberOfQuestion);
console.log("The total number of correct answers is " + totalNumberOfCorrectAnswers);



/************************************
 * 2) Functions that modify state    *
 *************************************/

function questionDisplay() {
    // 1 - update the question text to the current question (questionsArray.[currentQuestionNumber])
    $('#question').text(questionsArray[currentQuestionNumber].questionText);

    console.log("The current question is " + questionsArray[currentQuestionNumber].questionText);


    // 2 - display the choices for the current question:
    // empty the current choices;
    $('#choices').empty();

    // get the total number of choices for the current question; loop through all the choices...;
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length
    for (var i = 0; i < totalNumberOfChoices; i++) {

        //...and append the choices to the choices container, each on their own line and with their own radio button.

        var buildEachChoiceHTML = "<input class='option' type='radio' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        $('#choices').append(buildEachChoiceHTML);
    }


    // 3 - displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);

}


/************************************
 * 3) Functions that render state    *
 *************************************/

$(document).ready(function () {


    // hide the quiz and result sections on load
    $('.quiz-section').hide();
    $('.result-section').hide();


    // when the startQuizButton is clicked, run a function to:
    // hide the start and result sections; show the quiz section; empty the results of the details container; show the first question by running the questionDisplay function from 2) above
    $('#startQuizButton').click(function () {
        $('.start-section').hide();
        $('.quiz-section').show();
        $('.result-section').hide();

        $('#result_msg').empty();
        questionDisplay();

        //        alert("The test has started.")
    })


    // process the user answers:

    // when the user clicks the radio button
    $('.quiz-section').on('click', '.option', function () {

        // get the user's answer
        var userAnswer = $("input[class='option']:checked").val();

        // get the correct answer from the questionsArray
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        console.log("the userAnswer is " + userAnswer);
        console.log("the correctAnswer is " + correctAnswer);
        // compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {

            // if the user is correct, increment the totalNumberCorrectAnswers
            totalNumberOfCorrectAnswers++;

            console.log(totalNumberOfCorrectAnswers);
        }


        // append the questionText and correctDetails to the result_msg that displays at the end of the quiz
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");



        // if all the questions have been asked/answered:
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

            //hide the quiz and start sections; show the result section
            $('.start-section').hide();
            $('.quiz-section').hide();
            $('.result-section').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display the next question
            questionDisplay();
        }

    });


    // when the #tryagain button is clicked:
    $('.result-section').on('click', '#tryagain', function () {

        // hide the quiz and result sections, show the start section
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();

        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });

});
