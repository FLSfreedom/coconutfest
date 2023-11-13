window.addEventListener('scroll', function() {
  const logo2djs = document.getElementById("logo2djs");
  const logo2djs2 = document.getElementById("logo2djs2");
  const logo2djs2Position = logo2djs2.offsetTop;

  const positionForScrolling = logo2djs2Position - window.innerHeight;

  if (window.scrollY > 1) {
      logo2djs.style.left = "0px";
  } else {
      logo2djs.style.left = "-100%";
  }

  if (window.scrollY > positionForScrolling) {
      logo2djs2.style.left = "0px";
  } else {
      logo2djs2.style.left = "100%";
  }
});