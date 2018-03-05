$(document).ready(function () {
    $("#timer").hide();

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

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
            message: "<br><h4>The answer isPapua New Guinea.</h4><b4>Here, you can find 820 of the world's 6,912 languages."
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
            message: "<b4><h4>The answer is Indonesia.</h4><b4>It comes in second at 33,998 miles."
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
            message: "<br><h4>The answer is the Amazon River</h4><br>It is 4,049 miles long."
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
            message: "<br><h4>The answer is Japan.</h4></br>It slides in 11th with 127,484,450 people."
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
            message: "<br><h4>The answer is the Atacama Desert.</h4></br>It is located in Chile and is the driest place on earth."
        },

    ];



    var currentQuestionIndex = questionBank[0];
    var currentQuestion = currentQuestionIndex.question
    var answers = currentQuestionIndex.answers;
    var correctAnswer = currentQuestionIndex.correctAnswer
    var message = currentQuestionIndex.message

    function quiz() {
        $("#question").html(currentQuestion);

        Object.keys(answers).forEach(function (key) {
            var answerDisplay = '<button type="button" class="btn btn-primary" id="' + (key) + '">' + answers[key] + '</button>';
            $("#answers").append(answerDisplay);
        });

        $("#answers").on('click', '.btn', function () {
            currentQuestionIndex = { userGuess: $(this).attr("id") };
           
            if (currentQuestionIndex.userGuess === correctAnswer) {
                $("#question").html("Correct!");
                $("#answers").html(message);
                stop();
                correct++;
            }
            else {
                $("#question").html("Incorrect!");
                $("#answers").html(message);
                stop();
                incorrect++;
            }
        }
    )};


    $("#start").click(function () {
        start();
        $(this).hide();
        $("#instructions").hide();
        $("#timer").show();
        quiz();
    });

    var time = 20;

    function start() {
        $("#timer").html("Time Remaining:  <h2>" + time + "</h2>");
        seconds = setInterval(countDown, 1000);
    }

    function countDown() {
        time--;
        $("#timer").html("Time Remaining:  <h2>" + time + "</h2>");
        if (time === 0) {
            stop();
            $("#question").html("Time's Up!");
            $("#answers").html(message);
            unanswered++;
        }
    }

    function stop() {
        clearInterval(seconds);
    }

    function hideStart() {
        var startButton = document.getElementById("#start");
        startButton.style.display === "none";

    }

});

