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
    var _getAllBills = function _getAllBills(sort, callback) {
        var _bills = new BillCollection(sort);
        _bills.fetch({
            data: { sort: sort },
            success: function (response, models) {
                for (var i=0, len=response.models.length; i<len; i++) {
                    var _model = response.models[i]
                        _date = new Date(_model.get("createdDate"));

                    // extend model with created date in desired format
                    _model.set({
                        createdDateFormatted: _date.getFullYear() + "-" + _date.getMonth() + "-" + _date.getDate()
                    });
                }
                callback(response);
            }
        })
    };
    /* -------------------------------------------------- */


    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "/": "index",
            "all": "overview",
            "recent": "overviewRecent",
            "popular": "overviewPopular",

            "new-bill": "newBill"
        },

        index: function () { this.navigate("/all", { trigger: true }); },
        overview: function (sort) {
            require(["views/overview"], function (OverviewView) {
                _getAllBills(sort || "no", function(bills) {
                    var contentView = new OverviewView({
                        collection: bills
                    });
                    contentView.render();
                })
            });
        },
        overviewRecent: function () { this.overview("recent"); },
        overviewPopular: function () { this.overview("popular"); },

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
