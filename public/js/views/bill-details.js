define([
    'jquery',
    "jqueryui",
    'underscore',
    'backbone',
    'text!templates/bill-details.html'
], function ($, jqueryui, _, Backbone, pageHtml) {

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

            return this;
        }

    });

    return billDetailsView;

});
