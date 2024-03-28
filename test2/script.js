function update() {
  red1 = document.getElementById("red1").value;
  green1 = document.getElementById("green1").value;
  blue1 = document.getElementById("blue1").value;
  red2 = document.getElementById("red2").value;
  green2 = document.getElementById("green2").value;
  blue2 = document.getElementById("blue2").value;
  body = document.getElementById("body");
  body.style.background = "linear-gradient(to bottom right, rgb("+red1 + ", "+ green1 + ", "+ blue1 + "), rgb(" +red2 + ", "+ green2 + ", "+ blue2 + "))";
  body.style.backgroundSize = "500%, 500%";
}