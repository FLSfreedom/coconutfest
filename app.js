window.onscroll = function() {slideOnScrollLeft("logo2djs", 1), slideOnScrollLeft("logo2djs2", 1750)};

function slideOnScrollLeft(selectedElement, scrollPosition) {
  if (document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
    document.getElementById(selectedElement).style.left = "0px";
  } else {
    document.getElementById(selectedElement).style.left = "-100%";
  }
}