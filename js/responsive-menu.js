jQuery(document).ready(function() {

  //* Main menu toggle function
  $('.menu-toggle').click(function(){
    console.log('Main Toggle Clicked.');
    $(this).toggleClass('active');
    $('.nav-primary').slideToggle('fast');
  });

  //* Sub menu toggle function
  $('.sub-menu-toggle').click(function(){
    $(this).toggleClass('active');
    $(this).next('.sub-menu').slideToggle('fast');

    others = $(this).closest('.menu-item').siblings();
    others.find('.sub-menu-toggle').removeClass('active');
    others.find('.sub-menu').slideUp('fast');
  });

});
