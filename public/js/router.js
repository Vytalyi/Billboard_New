define([
    /* Global libraries */
    'jquery',
    'underscore',
    'backbone',

    /* Custom resources */
    'models/tag',
    'models/tag-collection',
    'models/bill',
    'models/bill-collection'
], function ($, _, Backbone, TagModel, TagCollection, BillModel, BillCollection) {

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

    /* Code below is for processing tags model/collection */
    var _getRecentBills = function _getRecentBills(callback) {
        var _bills = new BillCollection();
        _bills.fetch({
            success: function (response, models) {
                callback(response.models);
            }
        })
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
                _getRecentBills(function(bills) {
                    var contentView = new OverviewView({
                        model: bills
                    });
                    contentView.render();
                })
            });
        },

        newBill: function () {
            require(["views/new-bill"], function (NewBillView) {
                _getAllTags(function(tags) {
                    var bill = new BillModel();

                    var contentView = new NewBillView({
                        model: bill, // new empty bill
                        tags: tags // all existing tags
                    });
                    contentView.render();
                })
            });
        }

    });

    return AppRouter;
});
