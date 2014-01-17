define([
  'jquery',
  'backbone',
  'models/tag'
], function ($, Backbone, TagModel) {

    var TagCollection = Backbone.Collection.extend({

        Model: TagModel,

		url: "/tags"
    });

    return TagCollection;

});
