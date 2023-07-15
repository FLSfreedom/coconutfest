let scrollQ_secondlogo = 0;

if(screen.width <= 450) {
  scrollQ_secondlogo = 200} else if (screen.width <= 600) {
    scrollQ_secondlogo = 350
  } else {
    scrollQ_secondlogo = 1750  
  };

window.onscroll = function() {slideOnScrollLeft("logo2djs", 1), slideOnScrollLeft("logo2djs2", scrollQ_secondlogo)};

function slideOnScrollLeft(selectedElement, scrollPosition) {
  if (document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
    document.getElementById(selectedElement).style.left = "0px";
  } else {
    document.getElementById(selectedElement).style.left = "-100%";
  }
}