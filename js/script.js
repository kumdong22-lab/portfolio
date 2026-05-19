$(document).ready(function () {

    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed: 1000,
        anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'],

        afterLoad: function (anchorLink, index) {
            const $header = $('header');
            const $section = $('.section').eq(index - 1);

            $header.removeClass('light dark');

            if ($section.hasClass('light')) {
                $header.addClass('light');
            } else {
                $header.addClass('dark');
            }

            console.log('현재 섹션:', index);
        }
    });


    // 모달 열기
    // $('#processopen').click(function(){
    //     $('.modal').addClass('open');
    //     $('.background').addClass('open');

    //     $.fn.fullpage.setAllowScrolling(false);
    //     $.fn.fullpage.setKeyboardScrolling(false);
    // });


    // 모달 닫기
    // $('.modalbtn, .background').click(function(){
    //     $('.modal').removeClass('open');
    //     $('.background').removeClass('open');

    //     $.fn.fullpage.setAllowScrolling(true);
    //     $.fn.fullpage.setKeyboardScrolling(true);
    // });

});

new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    }
  });