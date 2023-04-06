<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

var questions = [
  "What is the capital of France?",
  "What is the largest planet in our solar system?",
  "Who wrote the novel 'Pride and Prejudice'?",
  "What is the tallest mammal in the world?",
  "What is the largest ocean on Earth?"
];

var answers = ["Paris", "Jupiter", "Jane Austen", "Giraffe", "Pacific"];

var choice_options = [
  ["London", "Paris", "Rome", "Madrid"],
  ["Saturn", "Jupiter", "Neptune", "Mars"],
  ["Emily Bronte", "Jane Austen", "Agatha Christie", "Charles Dickens"],
  ["Elephant", "Giraffe", "Rhino", "Hippopotamus"],
  ["Atlantic", "Arctic", "Indian", "Pacific"]
];

$(document).ready(function() {
  for (var i = 0; i < questions.length; i++) {
    var question = "<div class='question'>" + questions[i] + "</div>";
    var choices = "";
    for (var j = 0; j < choice_options[i].length; j++) {
      choices += "<label><input type='radio' name='q" + i + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>";
    }
    $("#quiz").append(question + "<div class='choices'>" + choices + "</div>");
  }

    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
   
});