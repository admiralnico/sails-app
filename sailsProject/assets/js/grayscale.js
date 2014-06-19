//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var disabler = new UserScrollDisabler();
        disabler.disable_scrolling();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo', function(){
             disabler.enable_scrolling();
        });
       
        event.preventDefault();
    });

    
});

//Disable scrolling while page animation
var UserScrollDisabler = function() {

    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // left: 37, up: 38, right: 39, down: 40
    this.scrollEventKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    this.$window = $(window);
    this.$document = $(document);

};
UserScrollDisabler.prototype = {

    disable_scrolling : function() {
        var t = this;
        t.$window.on("mousewheel.UserScrollDisabler DOMMouseScroll.UserScrollDisabler", this._handleWheel);
        t.$document.on("mousewheel.UserScrollDisabler touchmove.UserScrollDisabler", this._handleWheel);
        t.$document.on("keydown.UserScrollDisabler", function(event) {
            t._handleKeydown.call(t, event);
        });
    },

    enable_scrolling : function() {
        var t = this;
        t.$window.off(".UserScrollDisabler");
        t.$document.off(".UserScrollDisabler");
    },

    _handleKeydown : function(event) {
        for (var i = 0; i < this.scrollEventKeys.length; i++) {
            if (event.keyCode === this.scrollEventKeys[i]) {
                event.preventDefault();
                return;
            }
        }
    },

    _handleWheel : function(event) {
        event.preventDefault();
    }

};