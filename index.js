var elementClass = require('element-class');
var watchElements = [];

function load (element) {
  if (!element) {
    return;
  }

  elementClass(element).remove('lazy-embed');
  var src = element.getAttribute('data-src');
  if (!src) {
    return;
  }

  element.src = src;
}

function test (el) {
  var rect = el.getBoundingClientRect();
  var innerHeight = window.innerHeight || document.documentElement.clientHeight;
  var th = innerHeight / 2; /* load a bit earlier */
  return rect.top < innerHeight + th;
}

var testAll = exports.test = function () {
  if (watchElements.length === 0) {
    return;
  }

  for (var i = 0, l = watchElements.length; i < l; ++i) {
    var element = watchElements[i];
    if (element && test(element)) {
      watchElements[i] = null;
      load(element);
    }
  }
};

exports.removeAll = function () {
  watchElements = [];
};

exports.addContainer = function (container) {
  var lazyElements = container.querySelectorAll('.lazy-embed');
  for (var i = 0; i < lazyElements.length; ++i) {
    watchElements.push(lazyElements[i]);
  }

  testAll();
};
