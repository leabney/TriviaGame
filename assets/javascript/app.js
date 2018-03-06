//variables//
var correct;
var incorrect;
var unanswered;
var selectionMade;
var index;

//on start//
function newGame() {
    $("#instructions").show();
    $("#start").show();
    $("#restart").hide();
    $("#answers").empty();
    $("#timer").hide();
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    selectionMade = false;
    index = 0
}

//on restart//
function restart() {
    $(this).hide();
    $("#instructions").show();
    $("#start").show();
}

newGame();

//questions//
var questionBank = [
    {
        question: "1.  Which country actually has the world’s longest official name (except it’s known by a shortened version)?",
        answers: {
            A: "Libya"
            , B: "Tajikistan"
            , C: "Guatemala"
            , D: "Mongolia"
        },
        correctAnswer: "A",
        message: "<br><h4>The answer is Libya.</h4><br>It's full name is: Al Jumahiriyah al Arabiyah al Libiyah ash Shabiyah al Ishtirakiyah al Uzma"
    },
    {
        question: "2.  Which country speaks the most languages?",
        answers: {
            A: "China"
            , B: "Papua New Guinea"
            , C: "Madagascar"
            , D: "India"
        },
        correctAnswer: "B",
        message: "<br><h4>The answer is Papua New Guinea.</h4><br>Here, you can find 820 of the world's 6,912 languages."
    },
    {
        question: "3.  One of these countries isn’t landlocked. Which is it?",
        answers: {
            A: "Zambia"
            , B: "Paraguay"
            , C: "Slovakia"
            , D: "Croatia"
        },
        correctAnswer: "D",
        message: "<br><h4>The answer is Croatia.</h4><br>It lies on the Adriatic Sea."
    },
    {
        question: "4.  The second longest coastline, after Canada, is where?",
        answers: {
            A: "Chile"
            , B: "Australia"
            , C: "Russia"
            , D: "Indonesia"
        },
        correctAnswer: "D",
        message: "<br><h4>The answer is Indonesia.</h4><br>It comes in second at 33,998 miles."
    },
    {
        question: "5.  The Nile River is the longest river in the world (at 4,160 miles). Which one’s the next longest?",
        answers: {
            A: "Yangtze River"
            , B: "Congo River"
            , C: "Amazon River"
            , D: "Hunang He"
        },
        correctAnswer: "C",
        message: "<br><h4>The answer is the Amazon River.</h4><br>It is 4,049 miles long."
    },
    {
        question: "6.  The Prime Meridian does not run through which of the following continents?",
        answers: {
            A: "Europe"
            , B: "Africa"
            , C: "Antartica"
            , D: "South America"
        },
        correctAnswer: "D",
        message: "<br><h4>The answer is South America.</h4></br>The Prime Meridian, at 0 degress longitude, does not touch South America."
    },
    {
        question: "7.  Which country does not rank in the top 10 for population according to the United Nations?",
        answers: {
            A: "Pakistan"
            , B: "Nigeria"
            , C: "Japan"
            , D: "Bangladesh"
        },
        correctAnswer: "C",
        message: "<br><h4>The answer is Japan.</h4></br>It slides in 11th with a population of 127,484,450."
    },
    {
        question: "8.  What is the driest place on earth?",
        answers: {
            A: "Kufra, Libya"
            , B: "Atacama Desert"
            , C: "Sahara Desert"
            , D: "Luxor, Egypt"
        },
        correctAnswer: "B",
        message: "<br><h4>The answer is the Atacama Desert.</h4></br>Located in Chile, the Atacama Desert is the driest place on earth."
    },

];

function countdown() {
    seconds = 15;
    selectionMade=true;
    $("#timer").html("<h2>" + seconds + "</h2>");
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    console.log(seconds)
    $("#timer").html("<h2>" + seconds + "</h2>");
    if (seconds < 1) {
        clearInterval(time);
        selectionMade = false;
        $("#question").empty();
    $("#answers").empty();
    $("#answers").html(questionBank[index].message);
    $("#question").html("Time's up!");
    unanswered++;
    if(index<questionBank.length-1){
        index++;
        console.log("Index++: "+ index);
        setTimeout(question,4000);
    }
    else{
        $("#question").empty();
        $("#answers").empty();
        $("question").html("Results:");
        $("#answers").html("Correct: " + correct + "<br>Incorrect: " + incorrect + "<br>Unanswered: " + unanswered);
        $("#restart").show();
    }
    }
}

function question() {
    countdown();

    $("#question").empty();
    $("#answers").empty();

    $("#question").html(questionBank[index].question);
    Object.keys(questionBank[index].answers).forEach(function (key) {
        var answerDisplay = '<button type="button" class="btn btn-primary" id="' + (key) + '">' + questionBank[index].answers[key] + '</button>';
        $("#answers").append(answerDisplay);
    });

    console.log("Index: " + index);
    console.log("Question: " + questionBank[index].question);
    console.log("Correct Answer: " + questionBank[index].correctAnswer);

};


$('#answers').on('click', '.btn', function () {
    clearInterval(time)
    var userGuess = $(this).attr("id");
    console.log("Guess: " + userGuess);
    $("#question").empty();
    $("#answers").empty();
    $("#answers").html(questionBank[index].message);
    if (userGuess === questionBank[index].correctAnswer) {
        $("#question").html("Correct!");
        correct++;
    }
    else{
        $("#question").html("Incorrect!");
        incorrect++;
    }
    


    if(index<questionBank.length-1){
        index++;
        console.log("Index++: "+ index);
        setTimeout(question,4000);
    }
    else{
        $("#question").empty();
        $("#answers").empty();
        $("question").html("Results:");
        $("#answers").html("Correct: " + correct + "<br>Incorrect: " + incorrect + "<br>Unanswered: " + unanswered);
        $("#restart").show();
    }
});


$("#start").click(function () {
    $(this).hide();
    $("#instructions").hide();
    question();
    $("#timer").show();
});

$("#restart").click(function(){
    newGame();
})
