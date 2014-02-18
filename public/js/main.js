require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        text: "libs/text",
        templates: '../templates',
        bootstrap: 'libs/bootstrap/js/bootstrap.min',
        jqueryui: "libs/jquery/jquery-ui.min",
        jqueryuiautocomplete: 'libs/jquery/jquery.ui.autocomplete.min',
        jqueryuitooltip: 'libs/jquery/jquery.ui.tooltip.min',
        cookiehelper: 'helpers/cookies'
    },
    shim: {
        "bootstrap": {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        "jqueryuiautocomplete": {
            deps: ['jqueryui'],
            exports: 'jqueryuiautocomplete'
        },
        "jqueryuitooltip": {
            deps: ['jqueryui'],
            exports: 'jqueryuitooltip'
        }
    }
});

define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'bootstrap'
], function ($, _, Backbone, Router) {
    /* Initialize Backbone router */
    window.app_router = new Router();

    /* Override all links with custom navigation behavior */
    $("a[data-navigation='true']").on("click", function (e) {
        var href = $(e.target).attr("href") || "/";
        window.app_router.navigate(href, { trigger: true });

        // activate link
        $(".navbar .nav li.active").removeClass("active");
        $(e.target).parent().addClass("active");

        return false;
    });

    // precaching all images so they can be shown more fast
    var imagesArr = ["/css/hero.jpg", "/css/logo.png"];
    for (var i=0, len=imagesArr.length; i<len; i++) {
        new Image().src = imagesArr[i];
    }

    /* Enable history */
    Backbone.history.start({ pushState: true });
});
