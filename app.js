let type = new Audio('music/keyboard-typing-139083.mp3');
$(document).ready(type.play()); 

setTimeout(() => {
  $('.typewriter1').css('border-right', 'none');
  $('.typewriter').css('visibility', 'visible');
  
}, "2025");

