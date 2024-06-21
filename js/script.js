// conditional navbar scrolling
const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
  scrollposition = window.scrollY;

  if(scrollposition >= 60 ) {
     nav.classList.add('nav-dark');
  } else if (scrollposition <= 0) {
    nav.classList.remove('nav-dark')
  }
})


// transition effect
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.transition-item');

  function checkInView() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  }

  // Initial check
  checkInView();

  // Listen to scroll event
  document.addEventListener('scroll', checkInView);
});
