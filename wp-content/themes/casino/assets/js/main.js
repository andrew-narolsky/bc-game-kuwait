jQuery(document).ready(function () {
    jQuery(document).on('click', function (e) {
        if (!e.target.closest('.js-menu') && jQuery('.js-menu').hasClass('active')) {
            if (!e.target.closest('.header__menu')) {
                jQuery('.js-menu').removeClass('active');
            }
        } else {
            if (e.target.closest('.js-menu')) {
                if (!jQuery('.js-menu').hasClass('active')) {
                    jQuery('.js-menu').addClass('active');
                } else {
                    jQuery('.js-menu').removeClass('active');
                }
            }
        }
    });

    var expanderList = document.querySelectorAll('.js-button-expander');

    jQuery('.js-button-expander').click(function (e) {
        var expandParent = jQuery(this).parent();
        var expandTarget = jQuery(expandParent).children('.js-expand-content');

        for (var i = 0; i < expanderList.length; i++) {
            if (expanderList[i] == this) {
                for (var j = 0; j < expandTarget.length; j++) {
                    if (jQuery(expandTarget[j]).hasClass('expanded')) {
                        jQuery(expandParent).removeClass('active');
                        jQuery(expandTarget[j]).removeClass('expanded').slideUp();
                    } else {
                        jQuery(expandParent).addClass('active');
                        jQuery(expandTarget[j]).addClass('expanded').slideDown();
                    }
                }
            } else {
                var expanderListParent = jQuery(expanderList[i]).parent();
                var expanderListTarget = jQuery(expanderListParent).children('.js-expand-content');
                if (jQuery(expanderListTarget).hasClass('expanded') && jQuery(expanderListParent).hasClass('active')) {
                    jQuery(expanderListParent).removeClass('active');
                    jQuery(expanderListTarget).removeClass('expanded').slideUp();
                }
            }
        }
    });
});