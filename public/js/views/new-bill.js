define([
    'jquery',
    "jqueryuitooltip",
    'underscore',
    'backbone',
    'text!templates/new-bill.html'
], function ($, j2, _, Backbone, pageHtml) {

    return Backbone.View.extend({

        el: $("#content"),
        viewID: "new-bill",
        template: _.template(pageHtml),

        render: function () {
            this.$el.attr("data-view", this.viewID);

            var viewModel = _.extend(this.model.attributes);

            this.$el.html(this.template(viewModel));

            this.initTagsSelection();
            this.overrideFormSubmit();
            this.initializeTooltips();
            this.attachBackBtnHandler();
            this.attachDeleteTaghandler();
            this.scrollTo();
            this.initFileUpload();

            return this;
        },

        initTagsSelection: function() {
            var input = $("#Tag"),
                tagsContainer = $("#Tags"),
                tagsHiddenInput = $("#TagsConcated");

            input.on("change", function() {
                var selectedOption = $(this).find(":selected"),
                    tag = $("<div/>").addClass("tag").html(selectedOption.html() + " <i>(X)</i>");

                // put tag on the UI
                tagsContainer.append(tag);

                // concat tags and save it to hidden field
                var str = "";
                if (tagsHiddenInput.val() === "") {
                    str = selectedOption.html();
                } else {
                    str = tagsHiddenInput.val() + ", " + selectedOption.html();
                }
                tagsHiddenInput.val(str);

                // clear select so user will able to add another one tag
                input.val("");
            });
        },

        overrideFormSubmit: function() {
            var that = this,
                form = $("#newBillForm");

            form.on("submit", function(e) {
                e.preventDefault();

                that.model.set({
                    title: form.find("[name='title']").val(),
                    message: form.find("[name='message']").val(),
                    tags: form.find("[name='tags']").val(),
                    contacts: form.find("[name='contacts']").val(),
                    images: form.find(".image-preview-box img").map(function() {
                        return $(this).attr("src");
                    }).get().join("_SEPARATOR_")
                }, {
                    silent: true // silent: true will prevent validation performing
                });

                that.model.save(that.model.attributes, {
                    success: function(model, response) {
                        window.app_router.navigate("/recent", { trigger: true });
                    },
                    error: function(model, errors) {
                        // hide error message if exists
                        $(".alert-error").filter(":not(.hidden)").addClass("hidden");

                        // clear old errors
                        $("#errorList").html("");

                        // process all errors
                        for (var i=0, len=errors.length; i<len; i++) {
                            var err = errors[i],
                                input = $("input[name=" + err.input + "], textarea[name=" + err.input + "]").filter(":not(.error)");
                            input.addClass("error");
                            input.off("keydown").on("keydown", function (e) {
                                $(this).removeClass("error"); // remove error borders on keydown
                            });
                            $("#errorList").append("<li>" + err.msg + "</li>");
                        }

                        // show error box - then hide on click
                        var el = $(".alert-error");
                        el.show(200, function() {
                            el.removeClass("hidden").off("click").on("click", function() {
                                el.hide(200, function() {
                                    el.addClass("hidden");
                                });
                            });
                        });
                    }
                });
            })
        },

        initializeTooltips: function() {
            setTimeout(function () {
                if ($.fn.tooltip) {
                    $("a[data-toggle=tooltip]").tooltip({ });
                }
            }, 100);
        },

        attachBackBtnHandler: function() {
            var that = this;
            this.$el.find("a[data-navigation=true]").on("click", function() {
                var lastVisiteAction = that.options.backAction || "/";
                if (lastVisiteAction != "") {
                    window.app_router.navigate(lastVisiteAction, { trigger: true });
                }
                return false;
            });
        },

        attachDeleteTaghandler: function() {
            $("#Tags").on("click", ".tag", function() {
                var self = $(this),
                    tagsHiddenInput = $("#TagsConcated"),
                    regEx = new RegExp(self.text().replace(/\s\(X\)/gi, "")),
                    newVal = tagsHiddenInput.val();

                newVal = newVal.replace(regEx, "");
                newVal = newVal.replace(/,$/, "");
                newVal = newVal.replace(/^,/, "");
                newVal = newVal.replace(/,,/, ",");
                newVal = $.trim(newVal);

                tagsHiddenInput.val(newVal);
                self.remove();

            });
        },

        scrollTo: function () {
            $("html, body").animate({
                scrollTop: "475"
            }, 500, function() {
                // done
            });
        },

        initFileUpload: function() {
            $('#fileInput').on("change", function(e) {
                var file = this.files[0], // get fine from input
                    previewBox = $("#imagePreview");

                if (previewBox.find("img").length === 0) {
                    previewBox.html("");
                }

                // create an image tag and append it to preview box
                var img = document.createElement("img");
                img.classList.add("obj");
                img.file = file;
                img.className = "img-polaroid";
                previewBox.append(img);

                // use HTML5 fileReader to get base64 image src
                var reader = new FileReader();
                reader.onload = (function(aImg) {
                    return function(e) {
                        aImg.src = e.target.result;
                    };
                })(img);
                reader.readAsDataURL(file);
            });
        }

    });
});
