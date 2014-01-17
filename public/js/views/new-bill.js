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

            var viewModel = _.extend({ });

            this.$el.html(this.template(viewModel));

            this.initTagAutocomplete();

            return this;
        },

        initTagAutocomplete: function() {
            var availableTags = [];
            for (var i= 0, len=this.options.tags.length; i<len; i++ ) {
                var d = this.options.tags[i];
                availableTags.push(d["name"]);
            }

            $("#Tag").autocomplete({
                source: availableTags,
                select: function(event, ui) {
                    var holder = $("#Tags"),
                        txt = ui.item.value,
                        item = $("<div/>").addClass("tag").html(txt);

                    holder.append(item);

                    setTimeout(function() {
                        $("#Tag").val("");
                    }, 0)
                }
            });
        }

    });

    return NewBillView;

});
