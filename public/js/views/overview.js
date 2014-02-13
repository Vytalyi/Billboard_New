define([
    'jquery',
    'underscore',
    'backbone',
    'cookiehelper',
    'text!templates/overview.html'
], function ($, _, Backbone, cookieHelper, pageHtml) {

    var OverviewView = Backbone.View.extend({

        el: $("#content"),

        viewID: "overview",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
            this.viewMode = cookieHelper.get("viewMode") || "grid";
        },

        render: function () {

            this.$el.attr("data-view", "overview");

            var viewModel = this.collection;
            viewModel = _.extend(viewModel, { mode: this.viewMode });
            this.$el.html(this.template(viewModel));

            this.attachViewModeSwitcher();

            return this;
        },

        attachViewModeSwitcher: function() {
            var that = this;
            $(".btn-group .btn:not(.active)").off("click").on("click", function() {
                that.viewMode = $(this).data("viewmode");
                that.render();

                // remember viewMode
                cookieHelper.set("viewMode", $(this).data("viewmode"));
            });
        }

    });

    return OverviewView;

});
