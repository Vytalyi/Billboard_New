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

            var viewModel = this.collection.models;
            this.$el.html(this.template(viewModel));

            return this;
        }

    });

    return OverviewView;

});
