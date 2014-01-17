define([
    'jquery',
    "jqueryui",
    'underscore',
    'backbone',
    'text!templates/new-bill.html'
], function ($, jqueryui, _, Backbone, pageHtml) {

    var NewBillView = Backbone.View.extend({

        el: $("#content"),

        viewID: "new-bill",

        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {
            this.$el.attr("data-view", "new-bill");

            var viewModel = _.extend(this.model.attributes, { });

            this.$el.html(this.template(viewModel));

            this.initTagAutocomplete();

            return this;
        },

        initTagAutocomplete: function() {
            // get all existing tags to provide autocomplete for users
            var availableTags = [];
            for (var i= 0, len=this.options.tags.length; i<len; i++ ) {
                var d = this.options.tags[i];
                availableTags.push(d["name"]);
            }

            // init jquery autocomplete
            $("#Tag").autocomplete({
                source: availableTags,
                select: function(event, ui) {
                    var tag = $("<div/>").addClass("tag").html(ui.item.value);

                    // append new tag and clear text field so user can type new one
                    $("#Tags").append(tag);
                    setTimeout(function() {
                        $("#Tag").val("");
                    }, 0)

                    // concat tags and save it to hidden field
                    $("#TagsConcated").val($("#TagsConcated").val() + ui.item.value + ", ")
                }
            });
        }

    });

    return NewBillView;

});
