var rows = document.getElementsByClassName("row");
var value = 1;

for (var i = 0; i < rows.length; i++) {
    rows[i].innerHTML = value;  //changes content
    value *= 2; }