generate.onclick = function() {
  var x, y, z;  // Declare 3 variables
  x = Math.round(Math.random()*10);    // Assign the value 5 to x
  y = Math.round(Math.random()*10);    // Assign the value 6 to y
  z = x + y;  // Assign the sum of x and y to z

  document.getElementById("uppgift").innerHTML =
  "Bestäm värdet av " + x + "+" + y +".";
  document.getElementById("svar").innerHTML =
  "Lösningen är " + x + "+" + y +" = "+ z + ".";

 }
