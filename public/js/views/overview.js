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

            this.$el.attr("data-view", this.viewID);

            var viewModel = this.collection;
            viewModel = _.extend(viewModel, { mode: this.viewMode });
            this.$el.html(this.template(viewModel));

            this.attachViewModeSwitcher();
            this.activateHeaderLink();
            this.attachDetailsClickHandlers();
            this.initializeTooltips();

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
        },

        activateHeaderLink: function() {
            // make one of navigation links at the top active
            $(".navbar a[href=" + this.options.sort + "]:not(.active)").parent().addClass("active");
        },

        attachDetailsClickHandlers: function() {
            /* Override all links with custom navigation behavior */
            this.$el.find("a[data-navigation=true]").on("click", function (e) {
                var href = $(e.target).attr("href") || "/";
                window.app_router.navigate(href, { trigger: true });

                // deactivate active links
                $(".navbar .nav li.active").removeClass("active");

                return false;
            });
        },

        initializeTooltips: function() {
            setTimeout(function () {
                $("a[data-toggle=tooltip]").tooltip({
                    // options
                });
            }, 200);
        }

    });

    return OverviewView;

});
