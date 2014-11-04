define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    return UserModel = Backbone.Model.extend({
        idAttribute: "userID",

        urlRoot: "/users",

        defaults: function() {
            return {
                userID: "",
                username: "",
                email: ""
            };
        }

    });
});
