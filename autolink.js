// Generated by CoffeeScript 1.6.1
(function() {
  var autoLink,
    __slice = [].slice;

  autoLink = function() {
    var callbackThunk, key, linkAttributes, option, options, pattern, value;
    options = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    linkAttributes = '';
    option = options[0];
    pattern = /(^|\s)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026@#\/%?=~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~_|])/gi;
    if (!(options.length > 0)) {
      return this.replace(pattern, "$1<a href='$2'>$2</a>");
    }
    if ((option['callback'] != null) && typeof option['callback'] === 'function') {
      callbackThunk = option['callback'];
      delete option['callback'];
    }
    for (key in option) {
      value = option[key];
      linkAttributes += " " + key + "='" + value + "'";
    }
    return this.replace(pattern, function(match, space, url) {
      var link, returnCallback;
      returnCallback = callbackThunk && callbackThunk(url);
      link = returnCallback || ("<a href='" + url + "'" + linkAttributes + ">" + url + "</a>");
      return "" + space + link;
    });
  };

  String.prototype['autoLink'] = autoLink;

}).call(this);
