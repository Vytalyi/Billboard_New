define([
  'jquery',
  'backbone'
], function ($, Backbone) {

    var BillModel = Backbone.Model.extend({
        idAttribute: "_id",

        urlRoot: "/bills",

        defaults: function() {
            return {
                title: "",
                message: "",
                tags: "",
                contacts: ""
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
            if (attrs.title.replace(/\s/g, "") === "") {
                errors.push({
                    input: "title",
                    msg: "Укажите заголовок"
                });
            }
            if (attrs.title.length > 255) {
                errors.push({
                    input: "title",
                    msg: "Заголовок не дожлен быть более 255 симаолов"
                });
            }
            if (attrs.message.replace(/\s/g, "") === "") {
                errors.push({
                    input: "message",
                    msg: "Укажите текст объявления"
                });
            }
            if (attrs.length < 50) {
                errors.push({
                    input: "message",
                    msg: "Текст объявления должен составлять не менее 50 символов"
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
                    msg: "Укажите контактные данные"
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

    return BillModel;

});
