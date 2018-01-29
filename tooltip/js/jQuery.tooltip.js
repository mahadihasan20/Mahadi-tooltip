(function($){
    $.fn.tooltip = function(options) {

        var
            defaults = {
                background: '0080ff',
                color: 'red',
                margin: '50px',
                rounded: false
            },
            settings = $.extend({}, defaults, options);


            
            


        this.each(function() {
            var $this = $(this);
            var title = this.title;

            if($this.is('a') && $this.attr('title') != '') {
                this.title = '';
                $this.hover(function(e) {
                    // mouse over
                    $('<div id="tooltip" />')
                        .appendTo('body')
                        .text(title)
                        .hide()
                        .css({
                            backgroundColor: settings.background,
                            color: settings.color,
                            top: e.pageY + 10,
                            left: e.pageX + 20,
                            triAngle: settings.triAngle

                        })
                        .fadeIn(350);

                    if(settings.rounded) {
                        $('#tooltip').addClass('rounded');
                    }
                    if(settings.color){
                        $('#tooltip').addClass('color');
                    }
                    
                    
                    /*if(settings.margin){
                        $('#tooltip').addClass('margin');
                    }*/
                    if(settings.padding){
                        $('#tooltip').addClass('padding');
                    }
                    if(settings.font){
                        $('#tooltip').addClass('font');
                    }
                    if(settings.placement){
                        $('#tooltip').addClass(settings.placement + ' leftA');
                    }
                  /*  if(settings.placementLeft){
                        $('#tooltip').addClass('placementLeft rightMargin');

                    }

                   if(settings.placementRight){
                        $('#tooltip').addClass('placementRight leftMargin');

                    }
                    if(settings.placementTop){
                        $('#tooltip').addClass('placementTop bottomMargin');
                    }*/
                    /*if(settings.leftMargin){
                        $('#tooltip').addClass('leftMargin');
                    }
                    
                    if(settings.rightMargin){
                        $('#tooltip').addClass('rightMargin');
                    }
                    if(settings.bottomMargin){
                        $('#tooltip').addClass('bottomMargin');
                    }
                    */
                }, function() {
                    // mouse out
                    $('#tooltip').remove();
                });
            }

            $this.mousemove(function(e) {
                $('#tooltip').css({
                    top: e.pageY + 10,
                    left: e.pageX + 20
                });
            });
        });
        // returns the jQuery object to allow for chainability.
        return this;
    }
})(jQuery);