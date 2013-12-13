// Late load
interactions.lateload = function ( fragment ) {
  var groups = findElements(fragment, "lateload");

  var targets = {
    "DOMContentLoaded": document,
    "load": window
  }

  $.each(groups, function(id, group) {
    $(group[""]).each(function() {
      var self = $(this);
      var href = self.attr("data-ur-href");
      var src = self.attr("data-ur-src");
      var value;
      var attr;
      if (href) {
        attr = "href";
        value = href;
      }
      else if (src) {
        attr = "src";
        value = src;
      }
      var trigger = self.attr("data-ur-event") || "load";
      if (trigger == "scroll") {
        var threshold = self.attr("data-ur-threshold") || 100;
        function scroll() {
          if (scrollY + innerHeight >= self.offset().top - threshold)
            self.attr(attr, value);
        }
        scroll();
        $(window).on("scroll.ur.lateload", scroll);
      }
      else
        $(targets[trigger]).on(trigger + ".ur.lateload", function() {
          self.attr(attr, value);
        });
    });
  });
};
