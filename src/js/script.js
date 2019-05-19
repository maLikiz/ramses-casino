$(window).ready(function () {

    $('.game-aside__button .user-button--settings').on('click', function () {
        $('.game-aside__button .user-button--deposit').removeClass('active').addClass('not-active')
        $('.game-aside__button .user-button--settings').removeClass('not-active').addClass('active')
        $('.game-aside .user-aside').css('display', 'none')
        $('.user-aside--game').fadeIn()
    })
    $('.game-aside__button .user-button--deposit').on('click', function () {
        $('.game-aside__button .user-button--settings').removeClass('active').addClass('not-active')
        $('.game-aside__button .user-button--deposit').removeClass('not-active').addClass('active')
        $('.user-aside--game').css('display', 'none')
        $('.game-aside .user-aside').fadeIn()
    })

    $('.menu__list').on('click', '.enter__link--log-in', function (e) {
        $('.popup-enter').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden')
        e.preventDefault();
    });
    $('.menu__list').on('click', '.enter__link--registration', function (e) {
        $('.popup-registration').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden')
        e.preventDefault();
    });
    $('.aside').on('click', '.enter__link--registration', function (e) {
        $('.popup-registration').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden')
        e.preventDefault();
    });

    $('.enter__link--registration').on('click', function (e) {
        $('.popup-registration').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden')
        e.preventDefault();
    }), $('.enter__link--log-in').on('click', function (e) {
        $('.popup-enter').fadeIn().css('display', 'flex');
        $('body').css('overflow', 'hidden')
        e.preventDefault();
    })

    $('.close-popup').on('click', function (e) {
        $('.popup-registration').fadeOut();
        $('.popup-enter').fadeOut();
        $('body').css('overflow', 'auto')
        e.preventDefault();
    })

    $('.popup-bg').click(function () {
        $('.popup-registration').fadeOut();
        $('.popup-enter').fadeOut();
        $('body').css('overflow', 'auto');
    });

    $('.share__button--detailed').on('click', function () {
        $('.share__desc').fadeOut()
        $(this).closest('.share__item').find('.share__desc').fadeIn().css('display', 'flex');
        $('.share__button--close').on('click', function () {
            $('.share__desc').fadeOut();
        })
    })
    $('.general-information__information').on('click', function () {
        $('.tournaments-item__top-list').css('display', 'none')
        $(this).closest('.tournaments-item__general-information').find('.tournaments-item__top-list').fadeIn().css('display', 'flex');
        $('.tournaments-item__close').on('click', function () {
            $('.tournaments-item__top-list').fadeOut();
        })
    })

    $('.user-content__menu-item--close').on('click', function () {
        $('.user-content').fadeOut()
        $('.user-content__menu-item').removeClass('active')
        $('body').css('overflow', 'auto')
    })

    $('.user-button--settings').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--settings').addClass('active')
        $('.user-content__items-item--settings').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-button--deposit').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--deposit').addClass('active')
        $('.user-content__items-item--deposit').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--deposit').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__items-item--deposit').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--conclusion').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--conclusion').addClass('active')
        $('.user-content__items-item--conclusion').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--transactions').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--transactions').addClass('active')
        $('.user-content__items-item--transactions').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--bonuses').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--bonuses').addClass('active')
        $('.user-content__items-item--bonuses').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--settings').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--settings').addClass('active')
        $('.user-content__items-item--settings').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.user-content__menu-item--to-partners').on('click', function () {
        $('.user-content').fadeIn().css('display', 'flex')
        $('.user-content__menu-item').removeClass('active')
        $('.user-content__menu-item--to-partners').addClass('active')
        $('.user-content__items-item--to-partners').fadeIn().siblings('.user-content__items-item').css('display', 'none')
        $('body').css('overflow', 'hidden')
    })
    $('.top-bt_link').on('click', function (e) {
        var completeCalled = false;
        $("html, body").animate({
            scrollTop: "0px"
        }, {
            complete: function () {
                if (!completeCalled) {
                    completeCalled = true;
                }
            }
        });
        e.preventDefault();
    })
    // var handleMatchMedia = function (mediaQuery) {
        // if (mediaQuery.matches) {
            // $('.aside').append('<span class="open-menu"></span>');

            // $('.aside-bg').remove()
            
            // $('.aside .menu .menu__list').append('<div class="aside-bg"></div>');

            // $('.aside .lang').appendTo('.menu__list');
            // $('.aside .online-chat').appendTo('.menu__list');

            // $('.menu__list').css('display', 'none')

            $('.open-menu').on('click', function () {
                    $('.open-menu').addClass('active')
                    $('.aside-bg').css('display', 'block')
                    $('.menu__list').fadeIn().css('z-index', '1');
                }),
                $('.aside-bg').click(function () {
                    $('.open-menu.active').removeClass('active');
                    $('.menu__list').fadeOut().css('z-index', '0');
                    $('.aside-bg').css('display', 'none')
                    $('body').css('overflow', 'auto')
                }),
                $('.header.header-other').addClass('m-top')

            $('.open-menu').on('click', function () {
                $('.user-aside').fadeIn()
                $('body').css('overflow', 'hidden')
            })

            $('.user-aside .bg').click(function () {
                $('.open-menu.active').removeClass('active')
                $('.user-aside').fadeOut().css('z-index', '0')
                $('body').css('overflow', 'auto')
            });

            $('.statistics__item').on('click', function () {
                $('.statistics__item.active').removeClass('active')
                $(this).addClass('active')
            })
            $('.statistics__amount--item').on('click', function () {
                $('.statistics__amount--item.active').removeClass('active')
                $(this).addClass('active')
            })
        // } else {
        //     $('body').css('overflow', 'auto')

        //     $('.open-menu').remove();
        //     $('.aside-bg').remove()

        //     $('.menu__list').addClass('menu__list--desktop')

            // $('.menu__list').css('display', 'flex')

            // $('.menu__list .menu__list .lang').appendTo('.aside');
            // $('.menu__list .menu__list .online-chat').appendTo('.aside');

            // $('.menu__list .lang').remove();
            // $('.menu__list .online-chat').remove();
        // }
    // }
    // mql = window.matchMedia('all and (max-width: 1200px)');

    // handleMatchMedia(mql);
    // mql.addListener(handleMatchMedia);


    // var handleMatchMedia1 = function (mediaQuery) {
    //     if (mediaQuery.matches) {
    //         $('body').css('overflow', 'auto')

            // $('.aside .enter').clone().appendTo('.menu__list');
            // $('.aside > .enter .enter__link--registration').remove();
        // } else {
            // $('.menu__list .menu__list .enter .enter__link--registration').clone().appendTo('.aside > .enter');
            // $('.menu__list .enter').remove();
        // }
    // }
    // mql = window.matchMedia('all and (max-width: 767px)');

    // handleMatchMedia1(mql);
    // mql.addListener(handleMatchMedia1);


    $('.gift-registration__list .gift-registration__item').on('click', function () {
        $('.gift-registration__list .gift-registration__item').removeClass('active');
        $(this).addClass('active');
    })
    $('.filter__list--left .filter__item').on('click', function () {
        $('.filter__list--left .filter__item').removeClass('active');
        $(this).addClass('active');
    })

})

// form

$('.g-input--password .show-pass').on('click', function () {
    $('.hide-pass').addClass('active')
    $('.g-input--password input').attr('type', 'text')
    $('.g-input--password.fill-information__input').addClass('hide-after');
})
$('.g-input--password .hide-pass').on('click', function () {
    $('.hide-pass').removeClass('active')
    $('.g-input--password input').attr('type', 'password')
    $('.g-input--password.fill-information__input.hide-after').removeClass('hide-after');
})

// end form validate

//Reset form
$('.reset-form').click(function () {
    $('.customForm').find('input').val('');
    $('.customForm').find('input:checked').removeAttr('checked');
    $('.customForm').find('.check').removeClass('active');
    $('.customForm').find('.radio').removeClass('active');
    $('.customForm').find('.slct').html('');
});
// Checkbox
$('.g-checkboxes').find('.g-check').click(function () {
    if ($(this).find('input').is(':checked')) {
        $(this).removeClass('active');
        $(this).find('input').removeAttr('checked');
    } else {
        $(this).addClass('active');
        $(this).find('input').attr('checked', true);
    }
});
// Select
$('.slct').on('click', function () {
    $(this).closest('.g-select').toggleClass('active');
})
$('.slct--fill-information').on('click', function () {
    $('.g-select.g-select--currency.fill-information__select').toggleClass('active');
})
$('.slct--fill-information').click(function () {
    var dropBlock = $(this).parent().find('.drop-select');
    if (dropBlock.is(':hidden')) {
        dropBlock.fadeIn();
        $(this).addClass('active');
        $('.drop-select').find('li').click(function () {
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $('.slct--fill-information').removeClass('active').html(selectResult);
            dropBlock.fadeOut();
        });
    } else {
        $(this).removeClass('active');
        dropBlock.fadeOut();
    }
    return false;
});
$('.slct--filter-list').click(function () {
    var dropBlock1 = $(this).parent().find('.drop-select');
    if (dropBlock1.is(':hidden')) {
        dropBlock1.fadeIn();
        $(this).addClass('active');
        $('.drop-select').find('li').click(function () {
            var selectResult1 = $(this).html();
            $(this).parent().parent().find('input').val(selectResult1);
            $('.slct--filter-list').removeClass('active').html(selectResult1);
            dropBlock1.fadeOut();
        });
    } else {
        $(this).removeClass('active');
        dropBlock1.fadeOut();
    }
    return false;
});

$('.slct--popup-registration-currency').click(function () {
    var dropBlock2 = $(this).parent().find('.drop-select');
    if (dropBlock2.is(':hidden')) {
        dropBlock2.fadeIn();
        $(this).addClass('active');
        $('.drop-select').find('li').click(function () {
            var selectResult2 = $(this).html();
            $(this).parent().parent().find('input').val(selectResult2);
            $('.slct--popup-registration-currency').removeClass('active').html(selectResult2);
            dropBlock2.fadeOut();
        });
    } else {
        $(this).removeClass('active');
        dropBlock2.fadeOut();
    }
    return false;
});


$('.slct--popup-registration-present').click(function () {
    var dropBlock3 = $(this).parent().find('.drop-select');
    if (dropBlock3.is(':hidden')) {
        dropBlock3.fadeIn();
        $(this).addClass('active');
        $('.drop-select').find('li').click(function () {
            var selectResult3 = $(this).html();
            $(this).parent().parent().find('input').val(selectResult3);
            $('.slct--popup-registration-present').removeClass('active').html(selectResult3);
            dropBlock3.fadeOut();
        });
    } else {
        $(this).removeClass('active');
        dropBlock3.fadeOut();
    }
    return false;
});
$('.g-radioblock').find('.g-radio').click(function () {
    var valueRadio = $(this).html();
    $(this).parent().find('.g-radio').removeClass('active');
    $(this).addClass('active');
    $(this).parent().find('input').val(valueRadio);
});
// end form