$(document).ready(function() {
    $('.succeess__item-num').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        easing: 'swing',
        duration: 4000,
        step: function(now) {
          $(this).text(Math.ceil(now).toFixed(0));
        }
      });
    });
  });
  