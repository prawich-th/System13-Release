let i = 0;
let txt = 'Lorem ipsum typing effect!'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}