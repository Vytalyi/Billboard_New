define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    var TagModel = Backbone.Model.extend({
        //idAttribute: "billID",

        defaults: {
            title: "",
            message: "",
            tags: ""
        }
    });

    return TagModel;

});
