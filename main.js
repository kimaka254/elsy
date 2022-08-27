$(function() {
  let date = new Date();
  $("#nav-item").hide();
  $("#year").html(date.getFullYear());
});

$("#navbar").click(function () {
  $("#nav-item").slideToggle(500);
});





/**
   * Back to top button
   */
 const backtotop = document.querySelector('.back-to-top')
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  startDelay: 30,
  typeSpeed:100,
  backSpeed:80,
  showCursor:false,
  loop: true,
});
