define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/gallery.html'
], function ($, _, Backbone, pageHtml) {

    return Backbone.View.extend({

        el: $("body"),
        viewID: "gallery",
        template: _.template(pageHtml),

        initialize: function () {
            // initialize
        },

        render: function () {
            this.$el.attr("data-view", this.viewID);

            var viewModel = _.extend({}, this.options);

            this.$el.append(this.template(viewModel));

            this.initializeGallery();

            return this;
        },

        initializeGallery: function() {
            var wrapper = $("#galleryView");

            wrapper.on("click", ".overlay", function() {
                wrapper.remove();
            });
        }

    });
});
