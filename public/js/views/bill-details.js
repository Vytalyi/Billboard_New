﻿define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/bill-details.html'
], function ($, _, Backbone, pageHtml) {

    var billDetailsView = Backbone.View.extend({

        el: $("#content"),

        viewID: "bill-details",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {
            this.$el.attr("data-view", this.viewID);

            var viewModel = _.extend(this.model.attributes);

            this.$el.html(this.template(viewModel));

            this.attachBackBtnHandler();
            this.scrollTo();

            return this;
        },

        attachBackBtnHandler: function() {
            var that = this;
            this.$el.find("a[data-navigation=true]").on("click", function() {
                var lastVisiteAction = that.options.backAction || "/";
                if (lastVisiteAction != "") {
                    window.app_router.navigate(lastVisiteAction, { trigger: true });
                }
                return false;
            });
        },

        scrollTo: function () {
            $("html, body").animate({
                scrollTop: "475"
            }, 500, function() {
                // done
            });
        }

    });

    return billDetailsView;

});
