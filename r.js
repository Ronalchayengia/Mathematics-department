alert ("👉 CLICK ON THE IMAGE 👈")
alert (" MY FRIENDS✨")

var i = 0;
var txt ="চকু আৰু মন দুটা পৰিচয় আৰু ঠিকনা নিচিনা! সময়ত তোমাৰ ঠিকনা সলনি হৈ গৈ থাকিব কিন্তু পৰিচয় তোমাৰ এটাই হব।বন্ধুত্ব‌ মাথোঁ এটি শব্দ নহয়, মাথোঁ এটি সম্পৰ্ক নহয় । ই এটা নিৰৱ প্ৰতিশ্ৰুতি - মই আছিলোঁ, মই আছোঁ, মই থাকিম । -মনজিত বৰা";
var speed = 100;

function typ() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typ, speed);
  }
}
