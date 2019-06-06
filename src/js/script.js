$(document).ready(function(){
function getScrollbarWidth(){
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
return widthNoScroll - widthWithScroll; }
$('.chatbutton').bind('keyup click', function(){
jivo_api.open(); });
function checkamount(){


pregsum = $('#dep_amount').val().replace(/[^\d.]/ig, '');
$('#dep_amount').val(pregsum);




amount=Number($('#dep_amount').val());
mindeposit=Number($('.payments .payment.active').data('mindeposit'));
if(amount<mindeposit){
$('#dep_button').attr('disabled', true);
$('#dep_button').css({'opacity':'0.7'});
$('#dep_amount').css({'border':'1px solid #ff0000'});
}else{ $('#dep_button').attr('disabled', false);
$('#dep_button').css({'opacity':'1'});
$('#dep_amount').css({'border':'1px solid #6469bd'}); } }


function checkwit(){


pregsum = $('#wit_amount').val().replace(/[^\d.]/ig, '');
$('#wit_amount').val(pregsum);




amount=Number($('#wit_amount').val());
minwithdraw=Number($('.withdraw .payment.active').data('minwithdraw'));
if(amount<minwithdraw){
$('#wit_button').attr('disabled', true);
$('#wit_button').css({'opacity':'0.7'});
$('#wit_amount').css({'border':'2px solid #ff0000'});
}else{ $('#wit_button').attr('disabled', false);
$('#wit_button').css({'opacity':'1'});
$('#wit_amount').css({'border':'2px solid #6469bd'}); } }


function checkpop(){


pregsum = $('#pop_amount').val().replace(/[^\d.]/ig, '');
$('#pop_amount').val(pregsum);




amount=Number($('#pop_amount').val());
mindeposit=Number($('.poppayments .payment.active').data('mindeposit'));
if(amount<mindeposit){
$('#pop_button').attr('disabled', true);
$('#pop_button').css({'opacity':'0.7'});
$('#pop_amount').css({'border':'2px solid #ff0000'});
}else{ $('#pop_button').attr('disabled', false);
$('#pop_button').css({'opacity':'1'});
$('#pop_amount').css({'border':'2px solid #6469bd'}); } }



$('#pop_button').on('keyup click', function(){

depositway = $('.poppayments .payment.active').data('system');
depositsum = $('#pop_amount').val();
depositphone = $('#pop_phone').val();


if (depositphone == '') {
window.open('/deposit/pay/?payway=' + depositway + '&amount=' + depositsum);
}else{
window.open('/deposit/pay/?payway=' + depositway + '&amount=' + depositsum + '&phone=' + depositphone);
}



});



$('#wit_button').on('keyup click', function(){ withdraw(); });



$('#dep_button').on('keyup click', function(){

depositway = $('.payments .payment.active').data('system');
depositsum = $('#dep_amount').val();
depositphone = $('#dep_phone').val();


if (depositphone == '') {
window.open('/deposit/pay/?payway=' + depositway + '&amount=' + depositsum);
}else{
window.open('/deposit/pay/?payway=' + depositway + '&amount=' + depositsum + '&phone=' + depositphone);
}



});


$('#dep_phone').on('keyup click change input', function(){
$this = $(this);
systemphone=$('.payments .payment.phone.active').data('system'); console.log(systemphone);
newValue = $this.val().replace(/[^0-9]/g, '');
if(systemphone=='qiwi_rub' || systemphone=='qiwi_usd' || systemphone=='qiwi_eur'){


      if (newValue[0] != '+') {
        newValue = ('+' + newValue).substr(0, 13);
      }
}else{

     if (newValue[0] != '9') {
        newValue = ('9' + newValue).substr(0, 10);
} }
      $this.val(newValue);
    });

$('#pop_phone').on('keyup click change input', function(){
$this = $(this);
systemphone=$('.poppayments .payment.phone.active').data('system'); console.log(systemphone);
newValue = $this.val().replace(/[^0-9]/g, '');
if(systemphone=='qiwi_rub' || systemphone=='qiwi_usd' || systemphone=='qiwi_eur'){


      if (newValue[0] != '+') {
        newValue = ('+' + newValue).substr(0, 13);
      }
}else{

     if (newValue[0] != '9') {
        newValue = ('9' + newValue).substr(0, 10);
} }
      $this.val(newValue);
    });


  $('.poppayments .payment').on('keyup click change input', function() {

    $('.poppayments .payment.active').removeClass('active');
    $(this).addClass('active');
$('.popphone').hide();
$('#popmindeposit').text($(this).data('mindeposit'));
$('#popmaxdeposit').text($(this).data('maxdeposit'));
checkpop();


  });

  $('.payments .payment').on('keyup click change input', function() {

    $('.payments .payment.active').removeClass('active');
    $(this).addClass('active');
$('.depositphone').hide();
$('#mindeposit').text($(this).data('mindeposit'));
$('#maxdeposit').text($(this).data('maxdeposit'));
checkamount();


  });

  $('.withdraw .payment').on('keyup click change input', function() {

    $('.withdraw .payment.active').removeClass('active');
    $(this).addClass('active');
$('#minwithdraw').text($(this).data('minwithdraw'));
$('#maxwithdraw').text($(this).data('maxwithdraw'));
checkamount();


  });

$('#wit_amount').on('keyup click change input', function() {

checkwit();

});


$('#dep_amount').on('keyup click change input', function() {

checkamount();

});
$('#pop_amount').on('keyup click change input', function() {

checkpop();

});

 $('.poppayments .payment.phone').on('keyup click', function() {
    $('.popphone').css({'display':'inline-block'});
  });

 $('.payments .payment.phone').on('keyup click', function() {
    $('.depositphone').show();
  });




  $('.select_currency').on('keyup click', function() {
    var $this = $(this);
    $('#reg_currency').val($this.data('value'));
    $('#signup_currency').val($this.data('value'));
    //$('.selected_currency').text($this.text());
  });

  $('.select_gift').on('keyup click', function() {
    var $this = $(this);
    $('#signup_gift').val($this.data('value'));
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

  });

  $('.reg_news').on('keyup click', function() {
    checkValue($('#reg_news'));
  });

  $('.signup_terms').on('keyup click', function() {
    checkValue($('#signup_terms'));

  });
  $('.remember').on('keyup click', function() {
    checkValue($('#log_remember'));

  });

  $('.signup_news').on('keyup click', function() {
    checkValue($('#signup_news'));
  });

  $('#reg_button').on('keyup click', function() {
    $('#registration').submit();
  });

  $('#registration').on('submit', function() {
    reg();

    return false;
  });

  $('#signup_button').on('keyup click', function() {
    $('#signup').submit();
  });

  $('#signup').on('submit', function() {
    signup();

    return false;
  });

  $('#log_button').on('keyup click', function() {
    $('#login').submit();
  });

  $('#login').on('submit', function() {
    login();

    return false;
  });

  $('#res_button').on('keyup click', function() {
    $('#restore').submit();
  });

  $('#restore').on('submit', function() {
    restore();

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

  function openPopup(e, popup, duration) {
    $(popup).fadeIn(duration != undefined ? duration : 400).css('display', 'inline-block');
    setBodyOverflowHidden();
    e.preventDefault();
  }

  function closePopup(e, popup, duration) {
    $(popup).fadeOut(duration != undefined ? duration : 400).css('display', 'none');
    setBodyOverflowHidden();
    e.preventDefault();
  }

  function closePopupRegistration() {
    $('.popup-registration').fadeOut();
    $('.popup-enter').fadeOut();
    $('.popup-reset').fadeOut();
    setBodyOverflowVisible();
  }

  $popups = $('.popup-wrap, .user-content');

  function setBodyOverflowHidden() {
    $popups.css({
      overflowY: 'hidden',
    });

    setTimeout(function() {
      $('.aside').css({
        right: getScrollbarWidth(),
      });
      $('body').css({
        paddingRight: getScrollbarWidth(),
        overflow: 'hidden',
      });
      $popups.css({
        overflowY: 'scroll',
      });
    }, 400);
  }

  function setBodyOverflowVisible() {

    $('body').css({
      overflow: '',
      paddingRight: '',
    });

    $popups.css({
      overflowY: 'hidden',
    });


    $('.aside').css({
      right: '',
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

  $('.openreset').on('click', function(e) {
    $('.popup-enter').hide();
    $('.popup-reset').css({ display: 'inline-block' });
  });


  $('.close-popup').on('click', function(e) {
    closePopupRegistration();
    e.preventDefault();
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


  $('.transactions').on('click', function() {
    showUserContent();
    $('.user-content__menu-item--transactions').addClass('active');
    $('.user-content__items-item--transactions').fadeIn().siblings('.user-content__items-item').css('display', 'none');
    setBodyOverflowHidden();
  });
  $('.cashier').on('click', function() {
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
    $('.user-aside').fadeIn();
    setBodyOverflowHidden();
  });

  $('.aside-bg').click(function() {
    $('.open-menu.active').removeClass('active');
    $('.menu__list').fadeOut().css('z-index', '0');
    $('.aside-bg').css('display', 'none');
    setBodyOverflowVisible();
  }),
    $('.header.header-other').addClass('m-top');


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

  (function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    $(window).on('resize', function() {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;

      /* Call functions */
      toggleScrollWhenOpenSidebar();
    });

    /* Functions */
    function toggleScrollWhenOpenSidebar() {
      if ($('.open-menu').hasClass('active')) {
        isHiddenBody = $('body').css('overflow') == 'hidden';

        if (windowWidth > 1200) {
          if (isHiddenBody) {
            setBodyOverflowVisible();
          }

          if (!isHiddenBody) {
            setBodyOverflowHidden();
          }
        }
      }
    }
  })();
});
