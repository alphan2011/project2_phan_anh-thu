$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: true
  });
});

var instance = new vidbg('.home-header', {
   mp4: 'videos/aerial-ocean.mp4',
   webm: 'media/webm_video.webm',
   poster: 'images/hero.jpg',
   overlay: true,
   overlayColor: '#808080',
   overlayAlpha: 0.3
});
