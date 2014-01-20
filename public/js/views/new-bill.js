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
            this.overrideFormSubmit();

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
                    var str = "";
                    if ($("#TagsConcated").val() === "") {
                        str = ui.item.value;
                    } else {
                        str = $("#TagsConcated").val() + ", " + ui.item.value;
                    }

                    $("#TagsConcated").val(str);
                }
            });
        },

        overrideFormSubmit: function() {
            var that = this,
                form = $("#newBillForm");
            form.on("submit", function(e) {

                // update model attributes based on form values
                // silent: true will prevent validation performing
                that.model.set({
                    title: form.find("[name='title']").val(),
                    message: form.find("[name='message']").val(),
                    tags: form.find("[name='tags']").val()
                }, { silent: true });

                // save model to DB and redirect to overview once saved
                that.model.save(that.model.attributes, {
                    success: function(model, response) {
                        window.app_router.navigate("/", { trigger: true });
                    },
                    error: function(model, errors) {
                        alert(errors);
                    }
                });

                return false;
            })
        }

    });

    return NewBillView;

});
