generate.onclick = function() {

  //Funktion som gör slumpmässiga tal.
  function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
  }

  var a, b, c, d, m, n;  // Declare 3 variables

  a = random(1, 5);
  b = random(1, 10);
  c = random(1, 5);
  d = random(1, 10);

  m = (a*d + b*c);
  n = b * d;


  document.getElementById("uppgift").innerHTML =
  "Bestäm värdet av " + a + "/" + b + "+" + c + "/" + d + ".";
  document.getElementById("svar").innerHTML =
  "Lösningen är " + m + "/" + n + "." + 
  "Vi förläger med " + d + " och " + b + ".";
  "Vi får ";

 }
