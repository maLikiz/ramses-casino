$(document).ready(function() {
  function getScrollbarWidth() {
    var outer = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';
    var inner = document.createElement('div');
    inner.style.width = '100%';

    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  $('.chatbutton').bind('keyup click', function() {
    jivo_api.open();
  });





$('#dep_amount').on('keyup change input click', function() {
mindep = Number(min);
if (getCookie('lng') == 'EN') {
deppperr = '<b>Minimum amount ' + znak + mindep + '!</b>';
deppperr2 = 'Select payment system:';
deppperr3 = '<b>Invalid format, example: 79876543210!</b>';
deppperr4 = '<b>Invalid format, example: 9876543210!</b>';
deppperr5 = '<b>System is temporarily unavailable!</b>';
deppperr6 = '<b>Incorrect amount!</b>';
deppperr7 = '<b class="white">We are sent SMS to you for the deposit</b>';
}
if (getCookie('lng') == null) {
deppperr = '<b>Минимальная сумма ' + znak + mindep + '!</b>';
deppperr2 = 'Выберите платежную систему:';
deppperr3 = '<b>Неверный формат, пример: 79876543210!</b>';
deppperr4 = '<b>Неверный формат, пример: 9876543210!</b>';
deppperr5 = '<b>Система временно недоступна!</b>';
deppperr6 = '<b>Некорректная сумма!</b>';
deppperr7 = '<b class="white">Вам отправлено SMS для депозита</b>';
}
if (this.value.match(/[^0-9.]/g)) {
this.value = this.value.replace(/[^0-9.]/g, '');
}
amount = Number($('#dep_amount').val());
if (mindep > amount) {
$('#dep_button').attr('disabled', true).css({'opacity': '0.7'});
$('.deptext').html(deppperr);
return false;
} else {
$('.deptext').html(deppperr2);
$('#dep_button').attr('disabled', false).css({'opacity': '1'});
}
});
$('#dep_button').on('keyup click', function() {
deway = $('input[name=deposit-payment]:checked').val();
console.log(deway);
desum = $('#dep_amount').val();
phone = $('#qiwiphone').val();
if (phone == '') {
phone = $('#smsphone').val();
}
if ((deway == 'qiwi_rub') || (deway == 'qiwi_usd') || (deway == 'qiwi_eur')) {
if (phone.length < 11) {
$('.deptext').html(deppperr3);
return;
}
}
if ((deway == 'mts_rub') || (deway == 'beeline_rub') || (deway == 'tele2_rub') || (deway == 'megafon_rub')) {
if (phone.length < 10) {
$('.deptext').html(deppperr4);
return;
}
}
if (phone == '') {
depositlink = '/deposit/pay/?payway=' + deway + '&amount=' + desum;
window.open(depositlink, '_blank');
errrr = $('.depwindow').text();
if (errrr == 1) {
$('.deptext').html(deppperr4);
}
if (errrr == 2) {
$('.deptext').html(deppperr3);
}
if (errrr == 3) {
$('.deptext').html(deppperr6);
}
if (errrr == 4) {
$('.deptext').html(deppperr5);
}
} else {
depositlink = '/deposit/pay/?payway=' + deway + '&amount=' + desum + '&phone=' + phone;

window.open(depositlink, '_blank');

errrr = $('.depwindow').text();
if ((deway == 'mts_rub') || (deway == 'beeline_rub') || (deway == 'tele2_rub') || (deway == 'megafon_rub')) {
$('.deptext').html(deppperr7);
if (errrr == 5) {
$('.deptext').html(deppperr7);
}
}
if (errrr == 1) {
$('.deptext').html(deppperr3);
}
if (errrr == 2) {
$('.deptext').html(deppperr4);
}
if (errrr == 3) {
$('.deptext').html(deppperr6);
}
if (errrr == 4) {
$('.deptext').html(deppperr5);
}
}
return false;
});

  // function jivo_onLoadCallback() {
  //   window.jivo_cstm_widget = document.createElement('div');
  //   jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
  //   document.body.appendChild(jivo_cstm_widget);
  //   jivo_cstm_widget.onclick = function() {
  //     jivo_api.open();
  //   };
  //   if (jivo_config.chat_mode == 'online') {
  //     jivo_cstm_widget.setAttribute('class', 'jivo_online');
  //   }
  //   window.jivo_cstm_widget.style.display = 'block';
  // }

  $('.payment').on('keyup click', function() {
    $('.payment.active').removeClass('active');
    $(this).addClass('active');
  });


$('.payment').on('keyup click', function() {
$('.depositsms, .depositqiwi').hide();
});
$('.payment.phonemobile').on('keyup click', function() {
$('.depositqiwi').hide();
$('.depositsms').show();
});
$('.payment.phoneqiwi').on('keyup click', function() {
$('.depositsms').hide();
$('.depositqiwi').show();
});
$('#smsphone, #qiwiphone').on('keyup change input click', function() {
if (this.value.match(/[^0-9+]/g)) {
this.value = this.value.replace(/[^0-9+]/g, '');
}
});


  $('.select_currency').on('keyup click', function() {
    var $this = $(this);
    $('#reg_currency').val($this.data('value'));
    $('.selected_currency').text($this.text());
  });

  $('#reg_phone').on('keyup change input click', function() {
    var $this = $(this);

    if (!$this.val()) {
      $this.val('+');
    }
  });

  function checkValue($elem) {
    $elem.val($elem.val() == 0 ? 1 : 0);
  }

  $('.reg_terms').on('keyup click', function() {
    checkValue($('#reg_terms'));
    checkValue($('#reg_news'));
  });

  $('#reg_button').on('keyup click', function() {
    $('#registration').submit();
  });

  $('#registration').on('submit', function() {
    reg();

    return false;
  });


  $('#log_button').on('keyup click', function() {
    $('#login').submit();
  });

  $('#login').on('submit', function() {
    login();

    return false;
  });


  $('.full-screen__btn').on('click', function() {
    $('.game-main').addClass('game-full-screen');
  });


  $('.button-game-to-un-fullscreen').on('click', function() {
    $('.game-main').removeClass('game-full-screen');
  });

  $('.game-aside__button .user-button--settings').on('click', function() {
    $('.game-aside__button .user-button--deposit').removeClass('active').addClass('not-active');
    $('.game-aside__button .user-button--settings').removeClass('not-active').addClass('active');
    $('.game-aside .user-aside').css('display', 'none');
    $('.user-aside--game').fadeIn();
  });
  $('.game-aside__button .user-button--deposit').on('click', function() {
    $('.game-aside__button .user-button--settings').removeClass('active').addClass('not-active');
    $('.game-aside__button .user-button--deposit').removeClass('not-active').addClass('active');
    $('.user-aside--game').css('display', 'none');
    $('.game-aside .user-aside').fadeIn();
  });

  function openPopup(e, popup) {
    $(popup).fadeIn().css('display', 'inline-block');
    setBodyOverflowHidden();
    e.preventDefault();
  }

  function closePopupRegistration() {
    $('.popup-registration').fadeOut();
    $('.popup-enter').fadeOut();
    setBodyOverflowVisible();
  }

  function setBodyOverflowHidden() {
    $('body').css({
      overflow: 'hidden',
      paddingRight: getScrollbarWidth(),
    });
  }

  function setBodyOverflowVisible() {
    $popups = $('.popup-wrap, .user-content');

    $('body').css({
      overflow: 'visible',
      paddingRight: '',
    });

    $popups.css({
      overflowY: 'hidden',
    });

    setTimeout(function() {
      $popups.css({
        overflowY: '',
      });
    }, 400);
  }

  $('.menu__list').on('click', '.enter__link--log-in', function(e) {
    openPopup(e, '.popup-enter');
  });
  $('.menu__list').on('click', '.enter__link--registration', function(e) {
    openPopup(e, '.popup-registration');
  });
  $('.aside').on('click', '.enter__link--registration', function(e) {
    openPopup(e, '.popup-registration');
  });

  $('.enter__link--registration').on('click', function(e) {
    openPopup(e, '.popup-registration');
  });

  $('.enter__link--log-in').on('click', function(e) {
    openPopup(e, '.popup-enter');
  });

  $('.close-popup').on('click', function(e) {
    closePopupRegistration();
    e.preventDefault();
  });

  $('.popup-wrap').click(function(event) {
    if ($(this).is(event.target)) {
      closePopupRegistration();
    }
  });

  $('.share__button--detailed').on('click', function() {
    $('.share__desc').fadeOut();
    $(this).closest('.share__item').find('.share__desc').fadeIn().css('display', 'flex');
    $('.share__button--close').on('click', function() {
      $('.share__desc').fadeOut();
    });
  });
  $('.general-information__information').on('click', function() {
    $('.tournaments-item__top-list').css('display', 'none');
    $(this).closest('.tournaments-item__general-information').find('.tournaments-item__top-list').fadeIn().css('display', 'flex');
    $('.tournaments-item__close').on('click', function() {
      $('.tournaments-item__top-list').fadeOut();
    });
  });

  function closeUserContent() {
    $('.user-content').fadeOut();
    setBodyOverflowVisible();
  }

  $('.user-content__menu-item--close').on('click', function() {
    closeUserContent();
  });

  $('.user-content .bg').on('click', function() {
    closeUserContent();
    console.log('asd');
  });

  $('.user-content__menu-item').on('click', function() {
    var $this = $(this);
    var index = $(this).index();

    if (index != 6) {
      var $current_item = $('.user-content__items-item').eq(index);
      $this.addClass('active').siblings().removeClass('active');
      $current_item.fadeIn().siblings('.user-content__items-item').css('display', 'none');
    }
  });

  function showUserContent() {
    $('.user-content').fadeIn().css('display', 'inline-block');
    $('.user-content__menu-item').removeClass('active');
  }

  $('.user-button--deposit').on('click', function() {
    showUserContent();
    $('.user-content__menu-item--deposit').addClass('active');
    $('.user-content__items-item--deposit').fadeIn().siblings('.user-content__items-item').css('display', 'none');
    setBodyOverflowHidden();
  });

  $('.user-button--settings').on('click', function() {
    showUserContent();
    $('.user-content__menu-item--settings').addClass('active');
    $('.user-content__items-item--settings').fadeIn().siblings('.user-content__items-item').css('display', 'none');
    setBodyOverflowHidden();
  });

  $('.top-bt_link').on('click', function(e) {
    var completeCalled = false;
    $('html, body').animate({
      scrollTop: '0px',
    }, {
      complete: function() {
        if (!completeCalled) {
          completeCalled = true;
        }
      },
    });
    e.preventDefault();
  });

  $('.open-menu').on('click', function() {
    $('.open-menu').addClass('active');
    $('.aside-bg').css('display', 'block');
    $('.menu__list').fadeIn().css('z-index', '1');
  });

  $('.aside-bg').click(function() {
    $('.open-menu.active').removeClass('active');
    $('.menu__list').fadeOut().css('z-index', '0');
    $('.aside-bg').css('display', 'none');
    setBodyOverflowVisible();
  }),
    $('.header.header-other').addClass('m-top');

  $('.open-menu').on('click', function() {
    $('.user-aside').fadeIn();
    setBodyOverflowHidden();
  });

  $('.user-aside .bg').click(function() {
    $('.open-menu.active').removeClass('active');
    $('.user-aside').fadeOut().css('z-index', '0');
    setBodyOverflowVisible();
  });

  $('.statistics__item').on('click', function() {
    $('.statistics__item.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.statistics__amount--item').on('click', function() {
    $('.statistics__amount--item.active').removeClass('active');
    $(this).addClass('active');
  });


  $('.gift-registration__list .gift-registration__item').on('keyup click', function() {
    var $this = $(this);

    $('.gift-registration__list .gift-registration__item').removeClass('active');

    if ($this.hasClass('active')) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }

    $('#reg_gift').val($this.index() + 1);
  });
  $('.filter__list--left .filter__item').on('click', function() {
    $('.filter__list--left .filter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.select-amount__item-wrapper input').on('click', function() {
    console.log($(this).val());
    $(this).parents('.choose-sum').find('.enter-amount__item input').val($(this).val());
  });

  // form
  $('.g-input--password .show-pass').on('click', function() {
    $('.hide-pass').addClass('active');
    $('.g-input--password input').attr('type', 'text');
    $('.g-input--password.fill-information__input').addClass('hide-after');
  });
  $('.g-input--password .hide-pass').on('click', function() {
    $('.hide-pass').removeClass('active');
    $('.g-input--password input').attr('type', 'password');
    $('.g-input--password.fill-information__input.hide-after').removeClass('hide-after');
  });

// end form validate

//Reset form
  $('.reset-form').click(function() {
    var $customForm = $('.customForm');
    $customForm.find('input').val('');
    $customForm.find('input:checked').removeAttr('checked');
    $customForm.find('.check').removeClass('active');
    $customForm.find('.radio').removeClass('active');
    $customForm.find('.slct').html('');
  });
// Checkbox
  $('.g-checkboxes').find('.g-check').click(function() {
    if ($(this).find('input').is(':checked')) {
      $(this).removeClass('active');
      $(this).find('input').removeAttr('checked');
    } else {
      $(this).addClass('active');
      $(this).find('input').attr('checked', true);
    }
  });

  // Select
  (function() {
    var timeout = null;
    var $gSelect = $('.g-select');

    function hideAllSelects() {
      $gSelect.removeClass('active').css({ zIndex: 0 });
    }

    $(window).on('click', function(event) {
      if ($('.g-select, .g-select *').not(event.target)) {
        hideAllSelects();
      }
    });

    $gSelect.click(function() {
      var $this = $(this);

      if (!$this.hasClass('active')) {
        hideAllSelects();
        $this.addClass('active').css({ zIndex: 10 });

        if (timeout) {
          clearTimeout(timeout);
        }
      } else {
        $this.removeClass('active');
        timeout = setTimeout(function() {
          $this.css({ zIndex: '' });
        }, 400);
      }

      return false;
    });

    $('.drop-select').find('li').click(function() {
      var $this = $(this);
      var selectResult = $this.text();

      $this.parents('.g-select').find('.slct').removeClass('active').text(selectResult);
    });
  })();

  $('.g-radioblock').find('.g-radio').click(function() {
    var valueRadio = $(this).html();

    $(this).parent().find('.g-radio').removeClass('active');
    $(this).addClass('active');
    $(this).parent().find('input').val(valueRadio);
  });


  /* Game */
  (function() {
    function setActive($element) {
      $element.addClass('active').siblings().removeClass('active');
    }

    $('.game-sidebar-switcher-button').on('click', function() {
      const $this = $(this);
      const index = $this.index();

      setActive($this);
      setActive($('.game-sidebar-tab').eq(index));
    });

    $('.game-button.fullscreen').on('click', function() {
      $('.game-screen').addClass('full');
    });

    $('.game-hide-fullscreen').on('click', function() {
      $('.game-screen').removeClass('full');
    });
  })();
});
