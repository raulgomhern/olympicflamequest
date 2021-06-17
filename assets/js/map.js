var modalolymp = document.getElementById("modalolymp");
var btnolymp = document.getElementById("pantheonolympia");
var spanolymp = document.getElementsByClassName("closeolymp")[0];
var modalrules = document.getElementById("modalrul");
var openrules = document.getElementById ("openrul");
var closerules = document.getElementsByClassName("closerul")[0];
var startrules = document.getElementsByClassName("startrul")[0];
var btntheb = document.getElementById("pantheontheb");
var modaltheb = document.getElementById("modaltheb");
var modalrun= document.getElementById("modalrun");
var btnplaytheb = document.getElementsByClassName("playtheb")[0];
var btnbacktheb = document.getElementsByClassName("backrun")[0];
var closerun = document.getElementsByClassName("closerun")[0];
var btnmilet = document.getElementById("pantheonmilet");
var modalmiletus1 = document.getElementById("modalmilet1");
var modalmiletus2= document.getElementById("modalmilet2");
var modalmemorycard= document.getElementById("modalmemorycard");
var btnnextmilet = document.getElementsByClassName("nextmiletus")[0];
var btnplaymilet = document.getElementsByClassName("playmiletus")[0];
var btnbackmilet = document.getElementsByClassName("backmiletus")[0];
var btnbackmemorycard = document.getElementsByClassName("backmemorycard")[0];
var closememorycard = document.getElementsByClassName("closememorycard")[0];
var btncorinth = document.getElementById("pantheoncorinth");
var modalcorinth = document.getElementById("modalcorinth");
var modalpuzzle= document.getElementById("modalpuzzle");
var btnplaycorinth = document.getElementsByClassName("playcorinth")[0];
var btnbackpuzzle = document.getElementsByClassName("backpuzzle")[0];
var closepuzzle = document.getElementsByClassName("closepuzzle")[0];
var btnsparta = document.getElementById("pantheonsparta");
var modalsparta = document.getElementById("modalsparta");
var modalquiz= document.getElementById("modalquiz");
var btnplaysparta = document.getElementsByClassName("playsparta")[0];
var btnbackquiz = document.getElementsByClassName("backquiz")[0];
var closequiz = document.getElementsByClassName("closequiz")[0];
var btnathens = document.getElementById("pantheonathens");
var modalathens = document.getElementById("modalathens");
var modaltheatre= document.getElementById("modaltheatre");
var btnplayathens = document.getElementsByClassName("playathens")[0];
var btnbacktheatre = document.getElementsByClassName("backtheatre")[0];
var closetheatre = document.getElementsByClassName("closetheatre")[0];
var continuefin = document.getElementsByClassName("continuefinal")[0];
var star1yellow =document.getElementsByClassName("star1yellow")[0];
var star2yellow =document.getElementsByClassName("star2yellow")[0];
var star3yellow =document.getElementsByClassName("star3yellow")[0];
var star4yellow =document.getElementsByClassName("star4yellow")[0];
var star5yellow =document.getElementsByClassName("star5yellow")[0];
var star6yellow =document.getElementsByClassName("star6yellow")[0];
var videOlympia = document.getElementById("videoOlympia");
var videCorinth = document.getElementById("videoCorinth");
var videSparta = document.getElementById("videoAllanSparta");



btnolymp.onclick = function() {
  modalolymp.style.display = "block";
  star1yellow.style.visibility = "visible";
}
spanolymp.onclick = function() {
  modalolymp.style.display = "none";
  videOlympia.pause();
  videOlympia.currentTime = 0;
}
startrules.onclick = function() {
  modalrules.style.display = "none";
  modalolymp.style.display = "block";
  star1yellow.style.visibility = "visible";

}
openrules.onclick = function() {
startrules.style.visibility = "hidden";
modalrules.style.display = "block";
}
closerules.onclick = function() {
modalrules.style.display = "none";
}

btntheb.onclick = function() {
  modaltheb.style.display = "block";
}
btnplaytheb.onclick = function() {
  modaltheb.style.display = "none";
  modalrun.style.display =  "block";
  star2yellow.style.visibility = "visible";
//load game everytime anyone come back/
}
btnbacktheb.onclick = function() {
  modalrun.style.display="none";
  modaltheb.style.display = "block";
}
closerun.onclick = function() {
  modalrun.style.display="none";
}
btnmilet.onclick = function() {
  modalmiletus1.style.display = "block";
}
btnnextmilet.onclick = function() {
  modalmiletus1.style.display = "none";
  modalmiletus2.style.display =  "block";
}
btnplaymilet.onclick = function() {
  modalmiletus2.style.display="none";
  modalmemorycard.style.display = "block";
  star3yellow.style.visibility = "visible";
}
btnbackmemorycard.onclick = function() {
  modalmemorycard.style.display="none";
  modalmiletus2.style.display = "block";
}
btnbackmilet.onclick = function() {
  modalmiletus2.style.display="none";
  modalmiletus1.style.display = "block";
}
closememorycard.onclick = function() {
  modalmemorycard.style.display="none";
}
btncorinth.onclick = function() {
  modalcorinth.style.display = "block";
}
btnplaycorinth.onclick = function() {
  modalcorinth.style.display="none";
  modalpuzzle.style.display = "block";
  star4yellow.style.visibility = "visible";
  videCorinth.pause();
  videCorinth.currentTime = 0;
  
}
closepuzzle.onclick = function() {
  modalpuzzle.style.display="none";
}
btnbackpuzzle.onclick = function() {
  modalpuzzle.style.display="none";
  modalcorinth.style.display = "block";
}
btnsparta.onclick = function() {
  modalsparta.style.display = "block";
}
btnplaysparta.onclick = function() {
  modalsparta.style.display="none";
  videSparta.pause();
  videSparta.currentTime = 0;
  modalquiz.style.display = "block";
  star5yellow.style.visibility = "visible";
}
closequiz.onclick = function() {
  modalquiz.style.display="none";
}
btnbackquiz.onclick = function() {
  modalquiz.style.display="none";
  modalsparta.style.display = "block";
}
btnathens.onclick = function() {
  modalathens.style.display = "block";
}
btnplayathens.onclick = function() {
  modalathens.style.display="none";
  modaltheatre.style.display = "block";
  star6yellow.style.visibility = "visible";
}

btnbacktheatre.onclick = function() {
  modaltheatre.style.display="none";
  modalathens.style.display = "block";
}
closetheatre.onclick = function() {
  modaltheatre.style.display="none";
  continuefin.style.visibility = "visible";
}
continuefin.onclick = function(){
  window.location.href = './final.html';
}
function load() {
  modalrules.style.display = "block";
};
window.onload = load;




  