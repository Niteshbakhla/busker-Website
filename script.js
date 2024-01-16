document.addEventListener("DOMContentLoaded", function () {
    var scrollEffect = document.getElementById("scrollEffect");
  
    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;
  
      // Adjust the width and height of the container based on the scroll position
      scrollEffect.style.width = 300 + scrollPosition / 5 + "px";
      scrollEffect.style.height = 150 + scrollPosition / 5 + "px";
    });
  });
  