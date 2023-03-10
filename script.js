// Add smooth scrolling to links
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
  
      var target = $(this.getAttribute('href'));
  
      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  
    });
  });
  
  // Show/hide mobile navigation
  $(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active');
    });
  });
  