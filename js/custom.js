(function () {
    'use strict';
    /*-----------------------------------
    One Page Nav
    -----------------------------------*/
    if ($('#one-page-nav').length > 0) {
        $('#one-page-nav').onePageNav({
            currentClass: 'active',
            filter: ':not(#search-toggle):not(.pages)'
        });
    }
})();