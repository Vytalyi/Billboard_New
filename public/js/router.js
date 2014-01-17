define([
    /* Global libraries */
    'jquery',
    'underscore',
    'backbone',

    /* Custom resources */
    'models/tag',
    'models/tag-collection'
], function ($, _, Backbone, TagModel, TagCollection) {

    /* Code below is for processing tags model/collection */
    var _tags = null,
        _getAllTags = function _getAllTags(callback) {
            if (_tags) {
                callback(_tags);
            }
            else {
                _tags = new TagCollection();
                _tags.fetch({
                    success: function (response, models) {
                        _tags = models;
                        callback(_tags);
                    }
                })
            }
        }
    /* -------------------------------------------------- */

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "/": "index",
            "overview": "overview",
            "new-bill": "newBill"
        },

        index: function () {
            this.navigate("/overview", { trigger: true });
        },

        overview: function () {
            require(["views/overview"], function (OverviewView) {
                var contentView = new OverviewView();
                contentView.render();
            });
        },

        newBill: function () {
            require(["views/new-bill"], function (NewBillView) {
                _getAllTags(function(tags) {
                    var contentView = new NewBillView({
                        tags: tags // all existing tags
                    });
                    contentView.render();
                })
            });
        }

    });

    return AppRouter;
});
