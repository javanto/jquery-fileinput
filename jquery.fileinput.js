/**
* jQuery Fileinput Plugin v1.0
*
* Copyright 2011, Hannu Leinonen
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function($) {
    $.fn.fileinput = function(replacement) {
        var selector = this;
        var replacementHtml = "<button class=\"fileinput\">Browse...</button>";
        if (replacement) {
            replacementHtml = $(replacement).removeAttr("id").addClass("fileinput").clone().wrap("<div />").parent().html();
            $(replacement).remove();
        }
        selector.each(function() {
            var element = $(this);
            element.wrap("<div class=\"fileinput-wrapper\" style=\"position: relative; display: inline-block; overflow: hidden;\" />");
            element.attr("tabindex", "-1").css({"font-size": "100px", height: "100%", filter: "alpha(opacity=0)", "-moz-opacity": 0, opacity: 0, position: "absolute", right: 0, top: 0, "z-index": -1});
            element.before(replacementHtml);
            var ua = $.browser;
            alert(ua.version);
            if (ua.opera || (ua.mozilla && ua.version < "2.0")) {
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
            }
        });
        return selector;
    };
})(jQuery);