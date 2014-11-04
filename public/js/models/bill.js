define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    return Backbone.Model.extend({
        idAttribute: "_id",

        urlRoot: "/bills",

        defaults: function() {
            return {
                title: "",
                message: "",
                tags: "",
                createdBy: "",
                contacts: "",
                images: "" // images separated by '_SEPARATOR_'
            };
        },

        initialize: function() {
            this.on("invalid",function(model, error){
                alert(error);
            });
        },

        /* Validate method will be called before .save() by default
           If validation will fail - Invalid event will be fired */
        validate: function(attrs, options) {
            var errors = [];
            if (attrs.title.replace(/\s/g, "") === "" || attrs.title.length > 255 || attrs.title.length < 10) {
                errors.push({
                    input: "title",
                    msg: "Заголовок должен содержать от 10 до 255 симаолов"
                });
            }
            if (attrs.length < 30 || attrs.message.replace(/\s/g, "") === "") {
                errors.push({
                    input: "message",
                    msg: "Текст объявления должен содержать не менее 30 символов"
                });
            }
            if (attrs.tags.replace(/\s/g, "") === "") {
                errors.push({
                    input: "tag",
                    msg: "Укажите хотя бы одно ключевое слово"
                });
            }
            if (attrs.contacts.replace(/\s/g, "") === "") {
                errors.push({
                    input: "contacts",
                    msg: "Укажите свои контактные данные"
                });
            }

            // if validation failed - return errors
            if (errors.length > 0) {
                return errors;
            }
        },

        formatDate: function (date) {
            return date;
        }

    });
});
