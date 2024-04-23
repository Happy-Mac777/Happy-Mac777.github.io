var colour = 0;
var score = 0;
var top = 0;
onEvent("startbutton", "click", function() {
  setScreen("Game");
  hideElement("red");
  score = 0;
  setTimeout(function() {
    setText("score", score);
    setScreen("Score");
  }, 5000);
});
onEvent("image1", "mousedown", function() {
  score = score + 1;
  colour = randomNumber(1, 5);
  if (colour == 5) {
    setPosition("red", randomNumber(0, 200), randomNumber(0, 350), randomNumber(30, 100), 100);
    showElement("red");
    setTimeout(function() {
      hideElement("red");
    }, 1000);
  }
  setPosition("image1", randomNumber(0, 200), randomNumber(0, 350), randomNumber(30, 100), 100);
});
onEvent("red", "mousedown", function() {
  score = score - 1;
});
onEvent("PlayAgainButton", "click", function() {
  setScreen("Welcome");