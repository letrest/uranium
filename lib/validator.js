// Validation
interactions.validator = function( fragment ) {
  var groups = findElements(fragment, "validator");
  $.each(groups, function(id, group) {

    // Grabbing all the possible validator components into variables

    var email = $(group['set']).find("input[data-ur-validator-component~='email']");
    var ccnum = $(group['set']).find("input[data-ur-validator-component~='ccnum']");
    var required = $(group['set']).find("input[data-ur-validator-component~='required']");

    var min = $(group['set']).find("[data-ur-validator-minval]");
    var max = $(group['set']).find("[data-ur-validator-maxval]");
    var minmax = $(group['set']).find("[data-ur-validator-minval][data-ur-validator-maxval]")

    // Functions for removing errors and adding errors
    // InputError = class of data-ur-state="error" on an input
    // SpanError = inserting a span with an error class into the (optional) error div

    function removeInputError(target) {
      $(target).removeAttr("data-ur-state");
    }
    function removeSpanError(type) {
      // The "length" if/else allows you to remove all errors if 
      // you don't specify a type - perfect for "blank"
      if (arguments.length == 0) {
        $(group['set']).find("[data-ur-validator-error]").remove();
      } else {
        $(group['set']).find("[data-ur-validator-error='"+type+"']").remove();
      }
    };
    function addInputError(target) {
      $(target).attr("data-ur-state", "error");
    }
    function addSpanError(target, type, message) {
      $(target).siblings("[data-ur-validator-component='error']").append("<span data-ur-validator-error='"+type+"'>"+message+"</span>");
    };

    function isNumber(target, num) {
      var isnum = /^\d+$/.test(num);
      if (isnum) {
      // If is a number, continue as normal
        removeInputError(this);
        removeSpanError("letter");
      } else if(num === "") {
        // Blank, so ignoring for now
        removeInputError(this);
        removeSpanError("letter")
      } else {
        removeSpanError("letter")
        addInputError(target);
        addSpanError(target, "letter", "Please enter a number. ");
        return false;
      }        
    }
    // E-mail validation
    email
      .on("blur", function() {
        var emailval = email.val();
        var noat=emailval.split("@").length-1;
        var atpos=emailval.indexOf("@");
        var dotpos=emailval.lastIndexOf(".");
        if (emailval ===  "") {
          // Ignore blank
        } else if ((atpos<1 || dotpos<atpos+2 || dotpos+2>=emailval.length) && (noat < 2)) {
          // console.log("E-mail is incorrect.")
          removeSpanError("email");
          addInputError(this);
          addSpanError(this, "email", "This e-mail is invalid. ");
          return false;
        } else {
          // console.log("Email is correct");
          removeInputError(this);
          removeSpanError("email");
          return true;
        }
      });
    // Credit card validation
    ccnum
      .on("blur", function() {
        var cc_num = ccnum.val();

        // Checking if input is a number
        isNumber(this, cc_num)
        // From https://github.com/kenkeiter/skeuocard/blob/master/javascripts/skeuocard.js
        var alt, i, num, sum, _i, _ref;
        sum = 0;
        alt = false;
        for (i = _i = _ref = cc_num.length - 1; _i >= 0; i = _i += -1) {
          num = parseInt(cc_num.charAt(i), 10);
          if (isNaN(num)) {
            return false;
          }
          if (alt) {
            num *= 2;
            if (num > 9) {
              num = (num % 10) + 1;
            }
          }
          alt = !alt;
          sum += num;
        }
        // If the credit card is valid, remove errors
        if ((sum % 10) == 0) {
          // console.log("Credit card is valid");
          removeInputError(this);
          removeSpanError("cc");

          // Card type detection, from Ben  Bayard
          var visa = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
          var mc = new RegExp(/^5[1-5][0-9]{14}$/);
          var amex = new RegExp(/^3[47][0-9]{13}$/);
          var discover = new RegExp(/^6(?:011|5[0-9]{2})[0-9]{12}$/);
          var detectedCardType = false;
          if (visa.test(cc_num)) {
            detectedCardType = "VISA";        
          }
          else if (mc.test(cc_num)){
            detectedCardType = "MASTERCARD";
          }
          else if (amex.test(cc_num)) {
            detectedCardType = "AMEX";
          }
          else if (discover.test(cc_num)) {
            detectedCardType = "DISCOVER";
          }
          // Adding an attribute to the input that has a value of the card type
          // console.log(detectedCardType);
          ccnum.attr("data-ur-validator-ccard-type", detectedCardType);
          return true;
        } else {
          // console.log("Credit card is invalid");
          removeSpanError("cc")
          addInputError(this);
          addSpanError(this, "cc", "This credit card number is invalid. ");
          return false;
        }
      });
    // Must be above minimum validator
    min
      .on("blur", function() {
        isNumber(this, min.val());
        var inputVal = parseInt(min.val());
        var minVal = parseInt(min.attr("data-ur-validator-minval"));
        // Input must be greater than (or equal to) the value assigned to the attribute
        if (isNaN(inputVal)) {
          // Do nothing if blank
          removeInputError(this);
          removeSpanError("min");
        } else if (inputVal >= minVal) {
          // console.log("Value is high enough");
          removeInputError(this);
          removeSpanError("min");
          return true;
        } else {
          // console.log("Value is too low input");
          removeSpanError("min");
          addInputError(this);
          addSpanError(this, "min", "This value is too low. Please enter a value of "+minVal+" or above. ");
          return false;
        }
      });
    // Must be below maximum validator
    max
      .on("blur", function() {
        isNumber(this, max.val());
        var inputVal = parseInt(max.val());
        var maxVal = parseInt(max.attr("data-ur-validator-maxval"));
        
        // Input must be less than (or equal to) the value assigned to the attribute
        if (isNaN(inputVal)) {
          // Do nothing if blank
          removeInputError(this);
          removeSpanError("min");
        } else if (inputVal <= maxVal) {
          // console.log("Value is low enough");
          removeInputError(this);
          removeSpanError("max")
          return true;
        } else {
          // console.log("Value is too high");
          removeSpanError("max");
          addInputError(this);
          addSpanError(this, "max", "This value is too high. Please enter a value of "+maxVal+" or below. ");
          return false;
        }
      });
    // This fixes an error where if you specified a minimum and a 
    // maximum, the error from a number being too low would be removed
    // by the 'max' function
    minmax
      .on("blur", function() {
        isNumber(this, max.val());
        var inputVal = parseInt(max.val());
        var minVal = parseInt(min.attr("data-ur-validator-minval"));
        var maxVal = parseInt(max.attr("data-ur-validator-maxval"));
        
        if (isNaN(inputVal)) {
          // Do nothing if blank
          removeInputError(this);
          removeSpanError("min");
        } else if (inputVal >= minVal && inputVal <= maxVal) {
          // console.log("Value is high enough");
          removeInputError(this);
          removeSpanError("min");
          return true;
        } else {
          // console.log("Value is too high");
          addInputError(this);
          return false;
        }
      });
    
    // Checks to see if the input is not blank
    required
      .on("blur", function() {
        var valLength = required.val().length;
        if (valLength === 0) {
          // console.log("Input is blank.")
          // Removing all span errors as we don't want type-specific errors to 
          // appear as well as a "not blank" error.
          removeSpanError();
          addInputError(this);
          addSpanError(this, "required", "The input is blank. ");
          return false;
        } else {
          // console.log("Input is not blank.")
          // If the input has other components, don't want to remove
          // the input error until they are done.
          if ($(this).attr("data-ur-validator-maxval") || $(this).attr("data-ur-validator-minval")) {
            // Should not remove the required error if we enter a number
            // and it needs to be checked as min/max
          } else if($(this).attr("data-ur-validator-component") === "required") {
            // If the only validation is 'required', we can remove the error
            removeInputError(this);
          } else {}
          removeSpanError("required");
          return true;
        }
      });
    $(group["set"]).data("urInit", true);
  });
}
