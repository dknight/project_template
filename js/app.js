$(function () {
    // body...
});

/* Not default value for Validator */
jQuery.validator.addMethod("notEqual", function(value, element, param) {
  return this.optional(element) || value !== param;
}, "Please choose a value!");