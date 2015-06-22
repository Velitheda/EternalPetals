// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // $('.ui.checkbox').checkbox();
    // $('.ui.toggle').checkbox();
    $('.sidebar').sidebar({dimPage: false}).sidebar('attach events', '.header-hamburger');
    $('.ui.dropdown').dropdown();
    $('.menu .item').tab();


    /******************************
    MODALS
    ******************************/

    // Settings Page Modals
    $('.export-modal').modal('setting', 'transition', 'fade up').modal('useCSS', true).modal('attach events', '.action-export-modal');
    $('.install-modal').modal('setting', 'transition', 'fade up').modal('useCSS', true).modal('attach events', '.action-install-modal');
    $('.uninstall-modal').modal('setting', 'transition', 'fade up').modal('useCSS', true).modal('attach events', '.action-uninstall-modal');

    // Account Security - Two Factor Authentication Modal
    $('.tfa-modal').modal('setting', 'closable', false).modal('useCSS', true).modal('setting', 'transition', 'fade up').modal('attach events', '.action-tfa-modal');
    $('.tfa-verify-modal').modal('setting', 'closable', false).modal('useCSS', true).modal('setting', 'transition', 'fade up').modal('attach events', '.tfa-modal .action-tfa-verify-modal');

    // Account Summary - Cancel Account Modal
    $('.cancel-modal').modal('useCSS', true).modal('setting', 'transition', 'fade up').modal('attach events', '.action-cancel-modal');

    /******************************
    BUTTON GROUP STATES
    ******************************/

    $('.special.card .image').dimmer({on: 'hover'});

    semantic = {};
    // ready event
    semantic.ready = function() {
      // selector cache
      var
        $buttons = $('.ui.buttons .button'),
        $toggle  = $('.main .ui.toggle.button'),
        $button  = $('.ui.button').not($buttons).not($toggle),
        // alias
        handler = {
          activate: function() {
            $(this).addClass('active').siblings().removeClass('active');
          }
        };

      $buttons.on('click', handler.activate);

      $toggle.state({
          text: {
            inactive : 'Vote',
            active   : 'Voted'
          }
        });
      console.log("semantic button toggle working!");
    };

    semantic.ready();
});



