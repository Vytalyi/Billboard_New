define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/new-bill.html'
], function ($, _, Backbone, pageHtml) {

    var NewBillView = Backbone.View.extend({

        el: $("#content"),

        viewID: "new-bill",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {
            this.$el.attr("data-view", "new-bill");

            var viewModel = _.extend({ });

            this.$el.html(this.template(viewModel));

            return this;
        }

    });

    return NewBillView;

});
