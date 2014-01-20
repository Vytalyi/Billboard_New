define([
    'jquery',
    'backbone',
    'models/bill'
], function ($, Backbone, BillModel) {

    var BillCollection = Backbone.Collection.extend({

        Model: BillModel,

        url: "/bills"

    });

    return BillCollection;

});
