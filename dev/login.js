String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
sessionStorage.setItem("loggedIn", "false");
function sign() {
  userinputtedpin = document.getElementById("pin").value;
  if (userinputtedpin.hashCode() == 1485651290) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "devpage.html";
  }
}
function signauto() {
  if(document.getElementById("auto").checked) {
    if (document.getElementById("auto").value) {
      sign()
    }
  }
}
