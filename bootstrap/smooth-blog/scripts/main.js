/* jshint devel:true */


// Scroll to top button
// Only enable if the document has a long scroll bar
// Note the window height + offset
;(function(window, document) {
    'use strict';
    if (($(window).height() + 100) < $(document).height()) {
        $('#scroll-to-top').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {
                top: 100
            }
        });
    }
})(window, document);
