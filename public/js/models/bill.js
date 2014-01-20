define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    var TagModel = Backbone.Model.extend({
        idAttribute: "_id",

        url: "/bill",

        defaults: {
            title: "",
            message: "",
            tags: "",
            contacts: ""
        },

        initialize: function() {
            this.on("invalid",function(model, error){
                alert(error);
            });
        },

        /* Validate method will be called before .save() by default
           If validation will fail - Invalid event will be fired */
        validate: function(attrs, options) {
            if (attrs.title.replace(/\s/g, "") === "") {
                return "Title should be specified";
            }
            if (attrs.message.replace(/\s/g, "") === "") {
                return "Message should be specified";
            }
            if (attrs.tags.replace(/\s/g, "") === "") {
                return "At least one Tag should be specified";
            }
            if (attrs.contacts.replace(/\s/g, "") === "") {
                return "Contacts should be specified";
            }
        }
    });

    return TagModel;

});
