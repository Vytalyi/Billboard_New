define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/overview.html'
], function ($, _, Backbone, pageHtml) {

    var OverviewView = Backbone.View.extend({

        el: $("#content"),

        viewID: "new-bill",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {
            debugger;

            this.$el.attr("data-view", "overview");

            var viewModel = _.extend(this.model);

            this.$el.html(this.template(viewModel));

            return this;
        }

    });

    return OverviewView;

});
