
//durch jquery toggleclass verwendete, um von bestimmten Class in css zu andere wechselen für selben Elment
$(document).ready(function() {
  $(".rightClick").click(function() {
   $(".backImg").toggleClass("active");
   $(".rightClick").toggleClass("active");
   $(".nav_komplet").toggleClass("active");
   $(".ul_view").toggleClass("active");
  });
});

let n;
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var audio = new Audio('Biochip_musik.mp3');
//hie wieder toggleClass verwendet mit Audio zu starten, wenn der User Audio Starteclick drückt.
//Aussdem schreibte ich eine for-Schleife, um bis 28 sek. zu zählen, wobei das Audio beenden.
$(document).ready(function() {
  $(".p_aus").click(function() { 
    $(".p_aus").toggleClass("aktive");
    $(".p_an").toggleClass("aktive");
     //document.getElementById("img1").src = "/fotoBiochip/playerAn.png";  
     audio.play();
        for (let i = 28; i >= 0; i--) {
     
          setTimeout(() => {
              console.log(i);
              if (i==0) {
                $(".p_an").toggleClass("aktive");
                $(".p_aus").toggleClass("aktive");
              }
          }, (27 - i) * 1000); 
      }
  });
});
//Audio pausieren
$(document).ready(function() {
  $(".p_an").click(function() {
     $(".p_an").toggleClass("aktive");
     $(".p_aus").toggleClass("aktive");
     audio.pause();
  });
});
//Audio herrunterladen
function downloadAudio(fileURL) {
  var link = document.createElement("a");
  link.download = fileURL;
  link.href = fileURL;
  link.click();
}
//Foto herrunterladen
function downloadFoto(fileURL) {
  var link = document.createElement("a");
  link.download = fileURL;
  link.href = fileURL;
  link.click();
}
/*function playM() {
  audio.play();
}*/
