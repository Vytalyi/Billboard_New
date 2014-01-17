define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    var TagModel = Backbone.Model.extend({
        idAttribute: "tagID"
    });

    return TagModel;

});
