$(document).ready(function(){
  // GLOBAL VARIABLES ========================================
  var timer = 120;
  var timeId;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;

  // FUNCTIONS ===============================================
  //Render Questions
  let gameManager = {
    setGameStart: function() {
      this.setQuestion();
      this.setAnswers();
    },
    setQuestion: function (){

    },
    setAnswers: function (){

    }
  }
  
  //Check Answers
  function checkAnswers (){
    for (var q = 1; q <= 10; q++){
      for (var a = 1; a <= 3; a++){
        var answerValue = document.getElementById("inlineRadio" + [a]).value;
        //console.log(answerValue);
        if (answerValue === "correct"){
          correctAnswers++;
          //console.log(correctAnswers);
        }
        if (answerValue === "incorrect"){
          incorrectAnswers++;
        }
        else {
          unanswered++;
        }
      }
    }
  };

  //Timer 
  $("#timer").text("0:00")
  $(".question-container").hide();
  $(".timer-container").hide();
  $("#done").hide();

  $("#play").on("click",function(){
    function startTimer(){
      clearInterval(timeId);
      timeId = setInterval(decrement, 1000);
    };
    function decrement(){
      timer--;
      var converted = timeConverter(timer);
      $("#timer").text(converted);
      if (timer === 0) {
        stopTimer();
      }
    };
    function timeConverter(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "0";
      }
      return minutes + ":" + seconds;
    }
    $(".question-container").show();
    $(".timer-container").show();
    $("#play").hide();
    $("#done").show();
    startTimer();
    
    if (timer === 0){
      clearInterval(timeId);
      $(".timer-container").hide();
      $(".question-container").hide();
      checkAnswers();
    }
    $("#done").on("click",function(){
      clearInterval(timeId);
      $(".timer-container").hide();
      $(".question-container").hide();
      $("#done").hide();
      checkAnswers();
    })
  });

});