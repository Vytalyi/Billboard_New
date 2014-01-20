define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/overview.html'
], function ($, _, Backbone, pageHtml) {

    var OverviewView = Backbone.View.extend({

        el: $("#content"),

        viewID: "overview",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {

            this.$el.attr("data-view", "overview");

            var viewModel = _.extend(this.model);

            this.$el.html(this.template(viewModel));

            return this;
        }

    });

    return OverviewView;

});
