require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        text: "libs/text",
        templates: '../templates',
        bootstrap: 'libs/bootstrap/js/bootstrap.min'
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

        return false;
    });

    /* Enable history */
    Backbone.history.start({ pushState: true });
});
