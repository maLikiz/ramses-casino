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
$('.chatbutton').bind('keyup click', function(){ jivo_api.open(); });
function jivo_onLoadCallback(){
window.jivo_cstm_widget=document.createElement('div');
jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
document.body.appendChild(jivo_cstm_widget);
jivo_cstm_widget.onclick=function(){ jivo_api.open();	}
if(jivo_config.chat_mode=='online'){
jivo_cstm_widget.setAttribute('class', 'jivo_online'); }
window.jivo_cstm_widget.style.display='block'; }



$('.select_currency').on('keyup click', function(){
$('#reg_currency').val($(this).data('value'));
$('.selected_currency').text($(this).text()); });

$('#reg_phone').on('keyup change input click', function(){
$this=$('#reg_phone');
if($this.val()==''){ $this.val('+'); } });


$('.reg_terms').on('keyup click', function(){
$this=$('#reg_terms');
if($this.val()==0){ $this.val(1); }else{ $this.val(0); }  console.log('1');  });


$('.reg_terms').on('keyup click', function(){
$this=$('#reg_news');
if($this.val()==0){ $this.val(1); }else{ $this.val(0); }  console.log('1');  });





  $('#reg_button').on('keyup click', function() {
    $('#registration').submit();
  });

  $('#registration').on('submit', function() {
    reg();

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
$('#reg_gift').val($this.index()+1);
  });
  $('.filter__list--left .filter__item').on('click', function() {
    $('.filter__list--left .filter__item').removeClass('active');
    $this.addClass('active');
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
});
