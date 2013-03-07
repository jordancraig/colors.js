(function($){
    $.fn.loopBg = function(options){
        var self = this;       
        var settings = {
            colors: Array('#f00', '#0f0', '#00f'),
            duration: 50000
        }
        var opts = $.extend({},settings,options);
        var color_index = 1;
        var bgImg = 'https://github.com/JieeHD/colors.js/blob/gh-pages/blurrrrr.png';
        $("#test").css('background-image', 'url('+bgImg+')');

    $.fn.recurseAnim = function(){
        $(self).animate({ backgroundColor: opts.colors[color_index] }, opts.duration,
            function() {
                if( color_index+1 == opts.colors.length){
                    color_index = 1;
                } else {
                    ++color_index;
                }
                $.fn.recurseAnim();
            }
        );
    };
    $.fn.recurseAnim();

    return this;
    }

    })(jQuery);

    $(function(){
        $("body").loopBg(
        {
            colors: Array('#b500fe', '#077bf4', '#bada55'),
            duration: 8000
        }
    );
});