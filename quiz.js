$(document).ready(function(){
    correct = [
        "Canada",
        "Skin",
        "Leonardo da Vinci",
        "Jupiter",
        "Tokyo"];
    questions = [
        "Which country has the longest coastline in the world?",
        "What is the largest organ in the human body?",
        "Who painted the famous painting 'The Mona Lisa'?",
        "Which planet in our solar system has the most moons?",
        "What is the capital of Japan?"];
    choice_options = [
        ["Canada", "Russia", "Australia", "United States"],
        ["Liver", "Heart", "Skin", "Brain"],
        ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        ["Jupiter", "Saturn", "Uranus", "Neptune"],
        ["Beijing", "Seoul", "Tokyo", "Shanghai"]];
    

    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 

    countCorrect = 0;
    reset = false;
    $.each(questions, function(key, value) {
        let num = key + 1
        $('.question').append("<p class='d'> Q"+ num + "." + value + "</p>");

        $.each(choice_options[key], function(j, choice) {
            $('.question').append ("<label><input type='radio' name='q" + num + "'>" + choice + "</label>");
        });
    })
    


    $("button").click ( function (event){
        countCorrect = 0;
        $("h2").remove();
        $("label").each( function(i){
            questionNumber = i + 1;
            $("input[name=q"+questionNumber+"]").each(function (j){
                choice = $(this).parent().text();
                if ($( this ).prop("checked") == true && correct [i] == choice){
                    countCorrect+=1;
                }
            })
        })
        $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    })

});