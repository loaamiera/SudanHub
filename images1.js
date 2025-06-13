


var flag = document.getElementById("largeImage");


flag.onmouseover = function different() {
  flag.src = 'diffFlag.png' ;
  flag.mouseleave = function back() {
      flag.src = 'flag.png' ;
} ;



