var jsdom = require('jsdom');
var test = require('tape');
var lazyEmbeds = require('./');

test('lazy embeds', function (t) {
  var html = [
    '<div class="container">',
    '<iframe id="frame1" class="lazy-embed" data-src="http://iframe1.url"></iframe>',
    '<iframe id="frame2" class="lazy-embed" data-src="http://iframe2.url"></iframe>',
    '</div>'
  ].join('\n');

  jsdom.env(html, [], function (errors, window) {
    global.window = window;
    var document = window.document;
    var container = document.querySelector('.container');
    lazyEmbeds.addContainer(container);
    lazyEmbeds.test();

    var frame1 = document.getElementById('frame1');
    t.equal(frame1.src, 'http://iframe1.url');

    var frame2 = document.getElementById('frame2');
    t.equal(frame2.src, 'http://iframe2.url');

    lazyEmbeds.removeAll();
    t.end();
  });
});
