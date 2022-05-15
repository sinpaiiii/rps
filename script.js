var a,
  b = 0,
  c,
  d = false,
  r,
  p,
  s,
  g;
r = document.getElementById("rock");
p = document.getElementById("paper");
s = document.getElementById("scs");
g = document.getElementById("go");
function radi(a) {
  if (a == 1 && d == false) {
    b = 1;
    r.style.color = "black";
    p.style.color = "white";
    s.style.color = "white";
  } else if (a == 2 && d == false) {
    b = 2;
    r.style.color = "white";
    p.style.color = "black";
    s.style.color = "white";
  } else if (a == 3 && d == false) {
    b = 3;
    r.style.color = "white";
    p.style.color = "white";
    s.style.color = "black";
  } else alert("Game ended.");
}

function go() {
  if (b == 0) g.innerHTML = "Please choose and reclick";
  else {
    c = Math.floor(Math.random() * 3) + 1;
    if (c != b && d == false) {
      g.innerHTML = "You lost :(";
      g.style.cursor = "not-allowed";
      r.style.cursor = "not-allowed";
      p.style.cursor = "not-allowed";
      s.style.cursor = "not-allowed";
      g.className = "myButto";
      r.className = "myButto";
      p.className = "myButto";
      s.className = "myButto";
      d = true;
      document.getElementsByClassName("retry").style.visibility = "visible";
    } else if (c == b && d == false) {
      g.innerHTML = "you won!!!!";
      g.style.cursor = "not-allowed";
      r.style.cursor = "not-allowed";
      p.style.cursor = "not-allowed";
      s.style.cursor = "not-allowed";
      g.className = "myButto";
      r.className = "myButto";
      p.className = "myButto";
      s.className = "myButto";
      d = true;
      document.getElementsByClassName("retry").style.visibility = "visible";
    } else alert("Game ended.");
  }
}
