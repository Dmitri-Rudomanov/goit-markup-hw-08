 
  $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');

});
$('.menu__body').click(function(){
       $('.icon-menu, .menu__body').removeClass('active');

});