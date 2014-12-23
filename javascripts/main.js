var site = {
  initialize: function () {
    site.bind();
  },

  bind: function () {
    $('[data-behavior="open-section"]').on('click', function () {
      if (!$('.intro').hasClass('closed')) $('.intro').addClass('closed');
      $(this).closest('.section-holder').addClass('open-section');
    });

    $('[data-behavior="close-section"]').on('click', function () {
      $(this).closest('.section-holder').removeClass('open-section');
      if ($('.open-section').length < 1) $('.intro').removeClass('closed');
    });
  }
}

$(function () {
  site.initialize();
})