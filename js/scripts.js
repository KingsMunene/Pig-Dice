//business logic//
//created by kings munene//
var total = 49;
var total1 = 0;

var sorrymsg = ("Oops! You rolled a one, Back to zero pig. Next player please!");

//UI logic//
//players function//

$(document).ready(  
  function(){
    //Function for roll button for player 1
  $("#roll").click(
    
  function(){
    var score = Math.floor((Math.random()*6)+1);
    if(score != 1){

      total += score;
      winnergen()

    }else{
      $("#roll").hide()

      $("#hold").hide()

      $("#hold1").show()
      $("#roll1").show()
      $("#sorry").text(sorrymsg)
      $("#sorry1").text("")
      total = 0
    }

    $("#current").text(score)

    $("#total").text(total)

    event.preventDefault();
  })

  // Hold button function for player one
  $("#hold").click(
    function(){
      hidePOneButtons();

      showPTwoButtons();

      $("#sorry1").text("")

      event.preventDefault();
    }
  )

  //Function for roll button for player 2
  $("#roll1").click(
    function(){
    var score1 = Math.floor((Math.random()*6)+1);

    if(score1 != 1){

    total1 += score1;
    winnergen();

  }else{

    hidePTwoButtons();
    $("#sorry").text("");
    $("#sorry1").text(sorrymsg)

     showPOneButtons();

      event.preventDefault();
    
    total1 = 0;
    
  }
  $("#current1").text(score1);

  $("#total1").text(total1);

  event.preventDefault();
}
);

//Hold button for player two
$("#hold1").click(
  function(){
    $("#sorry").text("");
    hidePTwoButtons()
    showPOneButtons()
    event.preventDefault();
  }
)
event.preventDefault();
restartgame()

});

function hidePOneButtons() {
  $("#roll").hide();
  $("#hold").hide();
}

function showPTwoButtons() {
  $("#roll1").show();

  $("#hold1").show();
}

function showPOneButtons() {
  $("#roll").show();
  $("#hold").show();
}

function hidePTwoButtons() {
  $("#roll1").hide();
  $("#hold1").hide();
}

function hideAll(){
  hidePOneButtons()
  hidePTwoButtons()
}

function showAll(){
  showPOneButtons()
  showPTwoButtons()
}

function winnergen() {
  if (total >= 50) {
    $("#winner").text("A win for player One");
    hideAll()
  } else if (total1 >= 50) {
    $("#winner").text("A win for player Two");
    hideAll()
  }
}

function restartgame(){
      showAll()
      total = 0;
      total1 = 0;
}
