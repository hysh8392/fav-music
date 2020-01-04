$(function () {
  var previousPosition = 0;
  $(window).scroll(function (event) {
    var navbarHeight = $('#x-navbar').outerHeight(true);
    var currentPosition = $(event.target).scrollTop();
    if (currentPosition < previousPosition) {
      $('#x-navbar').css('top', 0 + 'px');
      if (navbarHeight > $(window).scrollTop()) {
        $('#x-back-to-top').hide();
      }
    } else {
      if (navbarHeight < $(window).scrollTop()) {
        $('#x-navbar').css('top', '-' + navbarHeight + 'px');
        $('#x-back-to-top').show();
      }
    }
    previousPosition = currentPosition;
  });
  $('#x-back-to-top').click(function (event) {
    $('html,body').animate({ scrollTop: 0 });
  });
});
