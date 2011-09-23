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
            element.prev(".fileinput").click(function() {
                element.click();
            });
        });
        return selector;
    };
})(jQuery);