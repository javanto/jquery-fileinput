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
        var replacementHtml = "<button class=\"fileinput\" tabindex=\"-1\" style=\"display: inline-block;\">Browse...</button>";
        if (replacement) {
            replacementHtml = $(replacement).removeAttr("id").addClass("fileinput").attr("tabindex", "-1").clone().wrap("<div />").parent().html();
            $(replacement).remove();
        }
        selector.each(function(index, element) {
            $(element).wrap("<div class=\"fileinput-wrapper\" style=\"position: relative; display: inline-block; overflow: hidden;\" />");
            $(element).attr("style", "font-size: 100px; height: 100%; filter: alpha(opacity=1); -moz-opacity: 0.01; opacity: 0.01; position: absolute; right: 0; top: 0;");
            $(element).parent().append(replacementHtml);
            $(element).hover(function() {
                $(this).siblings(".fileinput").addClass("hover");
            }, function() {
                $(this).siblings(".fileinput").removeClass("hover");
            }).focusin(function() {
                $(this).siblings(".fileinput").addClass("focus");
            }).focusout(function() {
                $(this).siblings(".fileinput").removeClass("focus");
            }).mousedown(function() {
                $(this).siblings(".fileinput").addClass("active");
            }).mouseup(function() {
                $(this).siblings(".fileinput").removeClass("active");
            });
        });
        return selector;
    };
})(jQuery);
