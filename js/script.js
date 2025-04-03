$(window).on("load", function() {
  $('.point-circles .circle').fadeIn(2000); 
});


function slideAnime() {
  $('.advice .flex-wrap, .service .circle, .others-wrap li, .recommend-text, .merit-item').each(function(){
    var elemPos = $(this).offset().top+250;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass('slide-in');
    } else {
      $(this).removeClass('slide-in');
    }
  }
)};

$(window).scroll(function() {
  slideAnime();
});


function growAnime() {
  $('.open-time, .more-unique').each(function(){
    var elemPos = $(this).offset().top+250;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass('grow');
    } else {
      $(this).removeClass('grow');
    }
  }
)};

$(window).scroll(function() {
  growAnime();
});


function fadeInAnime() {
  $('.target-member, .more-unique .flex-item').each(function(index){
    var elemPos = $(this).offset().top + 150;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scroll >= elemPos - windowHeight) {
      setTimeout(() => {
        $(this).addClass('fade-in');
      }, index * 300);
    } else {
      $(this).removeClass('fade-in');
    }
  });
}

$(window).on('scroll', fadeInAnime);
