/**
 * jQuery Fileinput Plugin v3.0.0
 *
 * Copyright 2013, Hannu Leinonen <hleinone@gmail.com>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.support.cssPseudoClasses = (function() {
        var input = $("<input type='checkbox' checked/>").appendTo('body');
        var style = $('<style type="text/css" />').appendTo('head');
        style.text("input:checked {width: 200px; display: none}");
        var support = input.css('width') == "200px";
        input.remove();
        style.remove();
        return support;
    })();

    $.fn.fileinput = function(replacement) {
        var selector = this;
        var replacementHtml = "<button class=\"fileinput\">Browse...</button>";
        if (replacement) {
            if (replacement instanceof jQuery)
                replacementHtml = $(replacement).wrap("<div />").parent().html();
            else
                replacementHtml = replacement;
        }
        selector.each(function() {
            var element = $(this);
            element.wrap("<div class=\"fileinput-wrapper\" style=\"position: relative; display: inline-block;\" />");
            element.attr("tabindex", "-1").css({height: "100%", width: "100%", filter: "alpha(opacity=0)", "-moz-opacity": 0, opacity: 0, position: "absolute", right: 0, top: 0, "z-index": -1});
            element.before(replacementHtml);
            element.prev().addClass("fileinput");
            if (!$.support.cssPseudoClasses) {
                element.css("z-index", "auto");
                element.prev(".fileinput").css("z-index", -1);
                element.removeAttr("tabindex");
                element.prev(".fileinput").attr("tabindex", "-1");
                element.hover(function() {
                    $(this).prev(".fileinput").addClass("hover");
                }, function() {
                    $(this).prev(".fileinput").removeClass("hover");
                }).focusin(function() {
                    $(this).prev(".fileinput").addClass("focus");
                }).focusout(function() {
                    $(this).prev(".fileinput").removeClass("focus");
                }).mousedown(function() {
                    $(this).prev(".fileinput").addClass("active");
                }).mouseup(function() {
                    $(this).prev(".fileinput").removeClass("active");
                });
            } else {
                element.prev(".fileinput").click(function() {
                    element.click();
                });
                element.prev(":submit.fileinput").click(function(event) {
                    event.preventDefault();
                });
            }
        });
        return selector;
    };
})(jQuery);
