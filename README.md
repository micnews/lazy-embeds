## SYNOPSIS

Load embeds/iframes lazily, only when they're in viewport.

[![Build Status](https://travis-ci.org/micnews/lazy-embeds.svg?branch=master)](https://travis-ci.org/micnews/lazy-embeds)

## USAGE

Setup:

```html
<div class="container">
  <iframe class="lazy-embed" data-src="http://iframe.url"></iframe>
</div>
```

```js
var lazyEmbeds = require('lazy-embeds');
var container = document.querySelector('.container');
lazyEmbeds.addContainer(container);

window.addEventListener('scroll', _.debounce(lazyEmbeds.test, 50));
```

##LICENSE

MIT
