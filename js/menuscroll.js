let lastScrollTop = 0;
const headerHeight = 82;
const scrollThreshold = 0.55; 

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  let scrollLimit = window.innerHeight * scrollThreshold;

  if (currentScroll > lastScrollTop && currentScroll > scrollLimit) {
 
    document.getElementById("header").classList.add("hide");
    
  } else {
    document.getElementById("header").classList.remove("hide");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
