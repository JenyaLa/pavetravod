
//Lazy-load

(function(a,b){var c=a(b);a.fn.lazyload=function(d){function h(){var b=0;e.each(function(){var c=a(this);if(g.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,g)&&!a.leftofbegin(this,g))if(!a.belowthefold(this,g)&&!a.rightoffold(this,g))c.trigger("appear"),b=0;else if(++b>g.failure_limit)return!1})}var e=this,f,g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return d&&(undefined!==d.failurelimit&&(d.failure_limit=d.failurelimit,delete d.failurelimit),undefined!==d.effectspeed&&(d.effect_speed=d.effectspeed,delete d.effectspeed),a.extend(g,d)),f=g.container===undefined||g.container===b?c:a(g.container),0===g.event.indexOf("scroll")&&f.bind(g.event,function(a){return h()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(g.appear){var d=e.length;g.appear.call(b,d,g)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(g.data_attribute))[g.effect](g.effect_speed),b.loaded=!0;var d=a.grep(e,function(a){return!a.loaded});e=a(d);if(g.load){var f=e.length;g.load.call(b,f,g)}}).attr("src",c.data(g.data_attribute))}}),0!==g.event.indexOf("scroll")&&c.bind(g.event,function(a){b.loaded||c.trigger("appear")})}),c.bind("resize",function(a){h()}),a(document).ready(function(){h()}),this},a.belowthefold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.height()+c.scrollTop():f=a(e.container).offset().top+a(e.container).height(),f<=a(d).offset().top-e.threshold},a.rightoffold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.width()+c.scrollLeft():f=a(e.container).offset().left+a(e.container).width(),f<=a(d).offset().left-e.threshold},a.abovethetop=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollTop():f=a(e.container).offset().top,f>=a(d).offset().top+e.threshold+a(d).height()},a.leftofbegin=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollLeft():f=a(e.container).offset().left,f>=a(d).offset().left+e.threshold+a(d).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return!a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window)


$(document).ready(function () {
  
  //Подсветка частей станка при наведении на миниатюры шагов

  $(".dev-step-1").hover(
    function () {
      $(".sprite-development-process-overlay-1").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-1").fadeOut(200);
    }
  );
  $(".dev-step-2").hover(
    function () {
      $(".sprite-development-process-overlay-2").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-2").fadeOut(200);
    }
  );
  $(".dev-step-3").hover(
    function () {
      $(".sprite-development-process-overlay-3").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-3").fadeOut(200);
    }
  );
  $(".dev-step-4").hover(
    function () {
      $(".sprite-development-process-overlay-4").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-4").fadeOut(200);
    }
  );
  $(".dev-step-5").hover(
    function () {
      $(".sprite-development-process-overlay-5").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-5").fadeOut(200);
    }
  );
  $(".dev-step-6").hover(
    function () {
      $(".sprite-development-process-overlay-6").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-6").fadeOut(200);
    }
  );
  $(".dev-step-7").hover(
    function () {
      $(".sprite-development-process-overlay-7").fadeIn(200);
    },
    function () {
      $(".sprite-development-process-overlay-7").fadeOut(200);
    }
  );

  //Расширенная информация в шаге 4 и 7
  
  //Открытие
  
  $(".dev-step.dev-step-4 h3").click(function (e) {
    e.preventDefault();
    $(".dev-step-pop-up-container.one").fadeIn(200);
    $(".dev-step-4 h3").css("border-bottom-color","transparent");
  });
  $(".dev-step.dev-step-7 h3").click(function (e) {
    e.preventDefault();
    $(".dev-step-pop-up-container.two").fadeIn(200);
    $(".dev-step-7 h3").css("border-bottom-color","transparent");
  });

  //Закрытие
  
  $(".dev-step-pop-up-container.one .dev-step-pop-up-cross").click(function (e) {
    e.preventDefault();
    $(".dev-step-pop-up-container.one").fadeOut(200);
    $(".dev-step-4 h3").css("border-bottom-color","#656765");
  });
  
  $(".dev-step-pop-up-container.two .dev-step-pop-up-cross").click(function (e) {
    e.preventDefault();
    $(".dev-step-pop-up-container.two").fadeOut(200);
    $(".dev-step-7 h3").css("border-bottom-color","#656765");
  });
  
  //Fix ховера
  
  $(".dev-step-7 h3").hover(
    function () {
      $(this).css("border-bottom-color","transparent");
    },
    function () {
      $(this).css("border-bottom-color","#656765");
    }
  );
  
  $(".dev-step-4 h3").hover(
    function () {
      $(this).css("border-bottom-color","transparent");
    },
    function () {
      $(this).css("border-bottom-color","#656765");
    }
  );
  
  //Технология производства — по клику на миниатюры
  
  $(".thumb-1 .second").click(function (e) {
    e.preventDefault();
    $(".tech-gallery .first").fadeOut(200, 
      function () {$(".tech-gallery .third").fadeOut(200,
      function () {$(".tech-gallery .second").fadeIn(200);
    });
    });
  });
  
  $(".thumb-2 .third").click(function (e) {
    e.preventDefault();
    $(".tech-gallery .first").fadeOut(200, 
      function () {$(".tech-gallery .second").fadeOut(200,
      function () {$(".tech-gallery .third").fadeIn(200);
    });
    });
  });
  
  $(".tech-gallery .second").click(function (e) {
    e.preventDefault();
    $(this).fadeOut(200, 
      function () {$(".tech-gallery .third").fadeOut(200,
      function () {$(".tech-gallery .first").fadeIn(200);
    });
    });
  });
  
  $(".tech-gallery .third").click(function (e) {
    e.preventDefault();
    $(this).fadeOut(200, 
      function () {$(".tech-gallery .second").fadeOut(200,
      function () {$(".tech-gallery .first").fadeIn(200);
    });
    });
  });
  
});


//Cлайдер и лайтбокс

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
  

var site = require('./site-lib');
window.site = site;
var define = site.define;

  
define('touch'    , require('./site-touch'));
define('slider'   , require('./site-slider'));
define('lightbox' , require('./site-lightbox'));



},{"./site-lib":2,"./site-lightbox":3,"./site-slider":4,"./site-touch":5}],2:[function(require,module,exports){
'use strict';


var site = {};
var modules = {};
var primary = [];
var secondary = window.site || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = site._ = require('plugins/underscore-custom');
var tram = require('plugins/tram-min') && $.tram;
var domready = false;
var Modernizr = window.Modernizr;
var noop = function() {};
tram.config.hideBackface = false;
tram.config.keepInherited = true;

/**
 * site.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @return {object}
 */
site.define = function(name, factory) {
  if (modules[name]) unbindModule(modules[name]);
  var instance = modules[name] = factory($, _) || {};
  bindModule(instance);
  return instance;
};

/**
 * site.require - Require a named module
 * @param  {string} name
 * @return {object}
 */
site.require = function(name) {
  return modules[name];
};

function bindModule(module) {
  // If running in site app, subscribe to design/preview events
  if (site.env()) {
    isFunction(module.design) && $win.on('__wf_design', module.design);
    isFunction(module.preview) && $win.on('__wf_preview', module.preview);
  }
  // Subscribe to front-end destroy event
  isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
  // Look for a ready method on module
  if (module.ready && isFunction(module.ready)) {
    // If domready has already happened, call ready method
    if (domready) module.ready();
    // Otherwise push ready method into primary queue
    else primary.push(module.ready);
  }
}

function unbindModule(module) {
  // Unsubscribe module from window events
  isFunction(module.design) && $win.off('__wf_design', module.design);
  isFunction(module.preview) && $win.off('__wf_preview', module.preview);
  isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);

  // Remove from primary queue if domready hasn't happened
  if (!domready) {
    primary = _.filter(primary, function(readyFn) {
      return readyFn !== module.ready;
    });
  }
}

/**
 * site.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */
site.push = function(ready) {
  // If domready has already happened, invoke handler
  if (domready) {
    isFunction(ready) && ready();
    return;
  }
  // Otherwise push into secondary queue
  secondary.push(ready);
};

/**
 * site.env - Get the state of the site app
 * @param {string} mode [optional]
 * @return {boolean}
 */
site.env = function(mode) {
  var designFlag = window.__wf_design;
  var inApp = typeof designFlag != 'undefined';
  if (!mode) return inApp;
  if (mode == 'design') return inApp && designFlag;
  if (mode == 'preview') return inApp && !designFlag;
  if (mode == 'slug') return inApp && window.__wf_slug;
  if (mode == 'editor') return window.siteEditor;
  if (mode == 'test') return window.__wf_test;
};

// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var appVersion = navigator.appVersion.toLowerCase();
var touch = site.env.touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = site.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(appVersion.match(/chrome\/(\d+)\./)[1], 10);
var ios = site.env.ios = Modernizr && Modernizr.ios;
site.env.safari = /safari/.test(userAgent) && !chrome && !ios;

// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function(evt) {
  touchTarget = evt.target;
});

/**
 * site.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */
site.validClick = touch ? function(clickTarget) {
  return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function() { return true; };

/**
 * site.resize, site.scroll - throttled event proxies
 */
var resizeEvents = 'resize.site orientationchange.site load.site';
var scrollEvents = 'scroll.site' + resizeEvents;
site.resize = eventProxy($win, resizeEvents);
site.scroll = eventProxy($win, scrollEvents);
site.redraw = eventProxy();

// Create a proxy instance for throttled events
function eventProxy(target, types) {

  // Set up throttled method (using custom frame-based _.throttle)
  var handlers = [];
  var proxy = {};
  proxy.up = _.throttle(function(evt) {
    _.each(handlers, function(h) { h(evt); });
  });

  // Bind events to target
  if (target && types) target.on(types, proxy.up);

  /**
   * Add an event handler
   * @param  {function} handler
   */
  proxy.on = function(handler) {
    if (typeof handler != 'function') return;
    if (_.contains(handlers, handler)) return;
    handlers.push(handler);
  };

  /**
   * Remove an event handler
   * @param  {function} handler
   */
  proxy.off = function(handler) {
    // If no arguments supplied, clear all handlers
    if (!arguments.length) {
      handlers = [];
      return;
    }
    // Otherwise, remove handler from the list
    handlers = _.filter(handlers, function(h) {
      return h !== handler;
    });
  };

  return proxy;
}

// Provide optional IX events to components
site.ixEvents = function() {
  var ix = site.require('ix');
  return (ix && ix.events) || {
    reset: noop,
    intro: noop,
    outro: noop
  };
};

// site.location - Wrap window.location in api
site.location = function(url) {
  window.location = url;
};

// site.app - Designer-specific methods
site.app = site.env() ? {} : null;
if (site.app) {

  // Trigger redraw for specific elements
  var redraw = new Event('__wf_redraw');
  site.app.redrawElement = function(i, el) { el.dispatchEvent(redraw); };

  // site.location - Re-route location change to trigger an event
  site.location = function(url) {
    window.dispatchEvent(new CustomEvent('__wf_location', { detail: url }));
  };
}

// site.ready - Call primary and secondary handlers
site.ready = function() {
  domready = true;
  _.each(primary.concat(secondary), callReady);
  // Trigger resize
  site.resize.up();
};

function callReady(readyFn) {
  isFunction(readyFn) && readyFn();
}

/**
 * site.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */
var deferLoad;
site.load = function(handler) {
  deferLoad.then(handler);
};

function bindLoad() {
  // Reject any previous deferred (to support destroy)
  if (deferLoad) {
    deferLoad.reject();
    $win.off('load', deferLoad.resolve);
  }
  // Create deferred and bind window load event
  deferLoad = new $.Deferred();
  $win.on('load', deferLoad.resolve);
}

// site.destroy - Trigger a destroy event for all modules
site.destroy = function() {
  $win.triggerHandler('__wf_destroy');

  // Unbind and clear modules
  _.each(modules, unbindModule);
  modules = {};

  // Clear any proxy event handlers
  site.resize.off();
  site.scroll.off();
  site.redraw.off();

  // If load event has not yet fired, replace the deferred
  if (deferLoad.state() == 'pending') bindLoad();
};

// Listen for domready
$(site.ready);

// Listen for window.onload and resolve deferred
bindLoad();

// Export commonjs module
module.exports = site;

},{"plugins/tram-min":8,"plugins/underscore-custom":9}],3:[function(require,module,exports){
'use strict';

/**
 * site: Lightbox component
 */

var site = require('./site-lib');

function createLightbox(window, document, $, undefined) {
  var tram = $.tram;
  var isArray = Array.isArray;
  var namespace = 'lightbox';
  var prefix = namespace + '-';
  var prefixRegex = /(^|\s+)/g;

  // Array of objects describing items to be displayed.
  var items = [];

  // Index of the currently displayed item.
  var currentIndex;

  // Object holding references to jQuery wrapped nodes.
  var $refs;

  // Instance of Spinner
  var spinner;

  function lightbox(thing, index) {
    items = isArray(thing) ? thing : [thing];

    if (!$refs) {
      lightbox.build();
    }

    if (items.length > 1) {
      $refs.items = $refs.empty;

      items.forEach(function (item) {
        var $thumbnail = dom('thumbnail');
        var $item = dom('item').append($thumbnail);

        $refs.items = $refs.items.add($item);

        loadImage(item.thumbnailUrl || item.url, function ($image) {
          if ($image.prop('width') > $image.prop('height')) {
            addClass($image, 'wide');
          } else {
            addClass($image, 'tall');
          }
          $thumbnail.append(addClass($image, 'thumbnail-image'));
        });
      });

      $refs.strip.empty().append($refs.items);
      addClass($refs.content, 'group');
    }

    tram(
      // Focus the lightbox to receive keyboard events.
      removeClass($refs.lightbox, 'hide').focus()
    )
      .add('opacity .3s')
      .start({opacity: 1});

    // Prevent document from scrolling while lightbox is active.
    addClass($refs.html, 'noscroll');

    return lightbox.show(index || 0);
  }

  /**
   * Creates the DOM structure required by the lightbox.
   */
  lightbox.build = function () {
    // In case `build` is called more than once.
    lightbox.destroy();

    $refs = {
      html: $(document.documentElement),
      // Empty jQuery object can be used to build new ones using `.add`.
      empty: $()
    };

    $refs.arrowLeft = dom('control left inactive');
    $refs.arrowRight = dom('control right inactive');
    $refs.close = dom('control close');

    $refs.spinner = dom('spinner');
    $refs.strip = dom('strip');

    spinner = new Spinner($refs.spinner, prefixed('hide'));

    $refs.content = dom('content')
      .append($refs.spinner, $refs.arrowLeft, $refs.arrowRight, $refs.close);

    $refs.container = dom('container')
      .append($refs.content, $refs.strip);

    $refs.lightbox = dom('backdrop hide')
      .append($refs.container);

      // We are delegating events for performance reasons and also
      // to not have to reattach handlers when images change.
      $refs.strip.on('tap', selector('item'), itemTapHandler);
      $refs.content
        .on('swipe', swipeHandler)
        .on('tap', selector('left'), handlerPrev)
        .on('tap', selector('right'), handlerNext)
        .on('tap', selector('close'), handlerHide)
        .on('tap', selector('image, caption'), handlerNext);
      $refs.container
        .on('tap', selector('view, strip'), handlerHide)
        // Prevent images from being dragged around.
        .on('dragstart', selector('img'), preventDefault);
      $refs.lightbox
        .on('keydown', keyHandler)
        // IE loses focus to inner nodes without letting us know.
        .on('focusin', focusThis);

    // The `tabindex` attribute is needed to enable non-input elements
    // to receive keyboard events.
    $('body').append($refs.lightbox.prop('tabIndex', 0));

    return lightbox;
  };

  /**
   * Dispose of DOM nodes created by the lightbox.
   */
  lightbox.destroy = function () {
    if (!$refs) {
      return;
    }

    // Event handlers are also removed.
    $refs.lightbox.remove();
    $refs = undefined;
  };

  /**
   * Show a specific item.
   */
  lightbox.show = function (index) {
    // Bail if we are already showing this item.
    if (index === currentIndex) {
      return;
    }

    var item = items[index];
    if (!item) { return lightbox.hide(); }

    var previousIndex = currentIndex;
    currentIndex = index;
    spinner.show();

    // For videos, load an empty SVG with the video dimensions to preserve
    // the video’s aspect ratio while being responsive.
    var url = item.html && svgDataUri(item.width, item.height) || item.url;
    loadImage(url, function ($image) {
      // Make sure this is the last item requested to be shown since
      // images can finish loading in a different order than they were
      // requested in.
      if (index != currentIndex) {
        return;
      }

      var $figure = dom('figure', 'figure').append(addClass($image, 'image'));
      var $frame = dom('frame').append($figure);
      var $newView = dom('view').append($frame);
      var $html, isIframe;

      if (item.html) {
        $html = $(item.html);
        isIframe = $html.is('iframe');

        if (isIframe) {
          $html.on('load', transitionToNewView);
        }

        $figure.append(addClass($html, 'embed'));
      }

      if (item.caption) {
        $figure.append(dom('caption', 'figcaption').text(item.caption));
      }

      $refs.spinner.before($newView);

      if (!isIframe) {
        transitionToNewView();
      }

      function transitionToNewView() {
        spinner.hide();

        if (index != currentIndex) {
          $newView.remove();
          return;
        }


        toggleClass($refs.arrowLeft, 'inactive', index <= 0);
        toggleClass($refs.arrowRight, 'inactive', index >= items.length - 1);

        if ($refs.view) {
          tram($refs.view)
            .add('opacity .3s')
            .start({opacity: 0})
            .then(remover($refs.view));

          tram($newView)
            .add('opacity .3s')
            .add('transform .3s')
            .set({x: index > previousIndex ? '80px' : '-80px'})
            .start({opacity: 1, x: 0});
        } else {
          $newView.css('opacity', 1);
        }

        $refs.view = $newView;

        if ($refs.items) {
          // Mark proper thumbnail as active
          addClass(removeClass($refs.items, 'active').eq(index), 'active');
        }
      }
    });

    return lightbox;
  };

  /**
   * Hides the lightbox.
   */
  lightbox.hide = function () {
    tram($refs.lightbox)
      .add('opacity .3s')
      .start({opacity: 0})
      .then(hideLightbox);

    return lightbox;
  };

  lightbox.prev = function () {
    if (currentIndex > 0) {
      lightbox.show(currentIndex - 1);
    }
  };

  lightbox.next = function () {
    if (currentIndex < items.length - 1) {
      lightbox.show(currentIndex + 1);
    }
  };

  function createHandler(action) {
    return function (event) {
      // We only care about events triggered directly on the bound selectors.
      if (this != event.target) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      action();
    };
  }

  var handlerPrev = createHandler(lightbox.prev);
  var handlerNext = createHandler(lightbox.next);
  var handlerHide = createHandler(lightbox.hide);

  var itemTapHandler = function(event) {
    var index = $(this).index();

    event.preventDefault();
    lightbox.show(index);
  };

  var swipeHandler = function (event, data) {
    // Prevent scrolling.
    event.preventDefault();

    if (data.direction == 'left') {
      lightbox.next();
    } else if (data.direction == 'right') {
      lightbox.prev();
    }
  };

  var focusThis = function () {
    this.focus();
  };

  function preventDefault(event) {
    event.preventDefault();
  }

  function keyHandler(event) {
    var keyCode = event.keyCode;

    // [esc]
    if (keyCode == 27) {
      lightbox.hide();
    }

    // [◀]
    else if (keyCode == 37) {
      lightbox.prev();
    }

    // [▶]
    else if (keyCode == 39) {
      lightbox.next();
    }
  }

  function hideLightbox() {
    removeClass($refs.html, 'noscroll');
    addClass($refs.lightbox, 'hide');
    $refs.strip.empty();
    $refs.view && $refs.view.remove();

    // Reset some stuff
    removeClass($refs.content, 'group');
    addClass($refs.arrowLeft, 'inactive');
    addClass($refs.arrowRight, 'inactive');

    currentIndex = $refs.view = undefined;
  }

  function loadImage(url, callback) {
    var $image = dom('img', 'img');

    $image.one('load', function () {
      callback($image);
    });

    // Start loading image.
    $image.attr('src', url);

    return $image;
  }

  function remover($element) {
    return function () {
      $element.remove();
    };
  }

  /**
   * Spinner
   */
  function Spinner($spinner, className, delay) {
    this.$element = $spinner;
    this.className = className;
    this.delay = delay || 200;
    this.hide();
  }

  Spinner.prototype.show = function () {
    var spinner = this;

    // Bail if we are already showing the spinner.
    if (spinner.timeoutId) {
      return;
    }

    spinner.timeoutId = setTimeout(function () {
      spinner.$element.removeClass(spinner.className);
      delete spinner.timeoutId;
    }, spinner.delay);
  };

  Spinner.prototype.hide = function () {
    var spinner = this;
    if (spinner.timeoutId) {
      clearTimeout(spinner.timeoutId);
      delete spinner.timeoutId;
      return;
    }

    spinner.$element.addClass(spinner.className);
  };

  function prefixed(string, isSelector) {
    return string.replace(prefixRegex, (isSelector ? ' .' : ' ') + prefix);
  }

  function selector(string) {
    return prefixed(string, true);
  }

  /**
   * jQuery.addClass with auto-prefixing
   * @param  {jQuery} Element to add class to
   * @param  {string} Class name that will be prefixed and added to element
   * @return {jQuery}
   */
  function addClass($element, className) {
    return $element.addClass(prefixed(className));
  }

  /**
   * jQuery.removeClass with auto-prefixing
   * @param  {jQuery} Element to remove class from
   * @param  {string} Class name that will be prefixed and removed from element
   * @return {jQuery}
   */
  function removeClass($element, className) {
    return $element.removeClass(prefixed(className));
  }

  /**
   * jQuery.toggleClass with auto-prefixing
   * @param  {jQuery}  Element where class will be toggled
   * @param  {string}  Class name that will be prefixed and toggled
   * @param  {boolean} Optional boolean that determines if class will be added or removed
   * @return {jQuery}
   */
  function toggleClass($element, className, shouldAdd) {
    return $element.toggleClass(prefixed(className), shouldAdd);
  }

  /**
   * Create a new DOM element wrapped in a jQuery object,
   * decorated with our custom methods.
   * @param  {string} className
   * @param  {string} [tag]
   * @return {jQuery}
   */
  function dom(className, tag) {
    return addClass($(document.createElement(tag || 'div')), className);
  }

  function isObject(value) {
    return typeof value == 'object' && null != value && !isArray(value);
  }

  function svgDataUri(width, height) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"/>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURI(svg);
  }

  // Compute some dimensions manually for iOS, because of buggy support for VH.
  // Also, Android built-in browser does not support viewport units.
  (function () {
    var ua = window.navigator.userAgent;
    var iOS = /(iPhone|iPod|iPad).+AppleWebKit/i.test(ua);
    var android = ua.indexOf('Android ') > -1 && ua.indexOf('Chrome') == -1;

    if (!iOS && !android) {
      return;
    }

    var styleNode = document.createElement('style');
    document.head.appendChild(styleNode);
    window.addEventListener('orientationchange', refresh, true);

    function refresh() {
      var vh = window.innerHeight;
      var vw = window.innerWidth;
      var content =
        '.lightbox-content, .lightbox-view, .lightbox-view:before {' +
          'height:' + vh + 'px' +
        '}' +
        '.lightbox-view {' +
          'width:' + vw + 'px' +
        '}' +
        '.lightbox-group, .lightbox-group .lightbox-view, .lightbox-group .lightbox-view:before {' +
          'height:' + (0.86 * vh) + 'px' +
        '}' +
        '.lightbox-image {' +
          'max-width:' + vw + 'px;' +
          'max-height:' + vh + 'px' +
        '}' +
        '.lightbox-group .lightbox-image {' +
          'max-height:' + (0.86 * vh) + 'px' +
        '}' +
        '.lightbox-strip {' +
          'padding: 0 ' + (0.01 * vh) + 'px' +
        '}' +
        '.lightbox-item {' +
          'width:' + (0.1 * vh) + 'px;' +
          'padding:' + (0.02 * vh) + 'px ' + (0.01 * vh) + 'px' +
        '}' +
        '.lightbox-thumbnail {' +
          'height:' + (0.1 * vh) + 'px' +
        '}' +
        '@media (min-width: 768px) {' +
          '.lightbox-content, .lightbox-view, .lightbox-view:before {' +
            'height:' + (0.96 * vh) + 'px' +
          '}' +
          '.lightbox-content {' +
            'margin-top:' + (0.02 * vh) + 'px' +
          '}' +
          '.lightbox-group, .lightbox-group .lightbox-view, .lightbox-group .lightbox-view:before {' +
            'height:' + (0.84 * vh) + 'px' +
          '}' +
          '.lightbox-image {' +
            'max-width:' + (0.96 * vw) + 'px;' +
            'max-height:' + (0.96 * vh) + 'px' +
          '}' +
          '.lightbox-group .lightbox-image {' +
            'max-width:' + (0.823 * vw) + 'px;' +
            'max-height:' + (0.84 * vh) + 'px' +
          '}' +
        '}';

      styleNode.textContent = content;
    }

    refresh();
  })();

  return lightbox;
}

module.exports = function($, _) {
  var api = {};
  var lightbox = createLightbox(window, document, $);
  var $doc = $(document);
  var $body;
  var $lightboxes;
  var designer;
  var inApp = site.env();
  var namespace = '.lightbox';
  var groups;

  // -----------------------------------
  // Module methods

  api.ready = api.design = api.preview = init;

  // -----------------------------------
  // Private methods

  function init() {
    designer = inApp && site.env('design');
    $body = $(document.body);

    // Reset Lightbox
    lightbox.destroy();

    // Reset groups
    groups = {};

    // Find all instances on the page
    $lightboxes = $doc.find(namespace);

    // Instantiate all lighboxes
    $lightboxes.siteLightBox();
  }

  jQuery.fn.extend({
    siteLightBox: function() {
      var $el = this;
      $.each($el, function(i, el) {
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) data = $.data(el, namespace, {
          el: $(el),
          mode: 'images',
          images: [],
          embed: ''
        });

        // Remove old events
        data.el.off(namespace);

        // Set config from json script tag
        configure(data);

        // Add events based on mode
        if (designer) {
          data.el.on('setting' + namespace, configure.bind(null, data));
        } else {
          data.el
            .on('tap' + namespace, tapHandler(data))
            // Prevent page scrolling to top when clicking on lightbox triggers.
            .on('click' + namespace, function (e) { e.preventDefault(); });
        }
      });
    }
  });

  function configure(data) {
    var json = data.el.children('.json').html();
    var groupName, groupItems;

    if (!json) {
      data.items = [];
      return;
    }

    try {
      json = JSON.parse(json);

      supportOldLightboxJson(json);

      groupName = json.group;

      if (groupName) {
        groupItems = groups[groupName];
        if (!groupItems) {
          groupItems = groups[groupName] = [];
        }

        data.items = groupItems;

        if (json.items.length) {
          data.index = groupItems.length;
          groupItems.push.apply(groupItems, json.items);
        }
      } else {
        data.items = json.items;
      }
    }
    catch (e) {
      console.error('Malformed lightbox JSON configuration.', e.message);
    }
  }

  function tapHandler(data) {
    return function () {
      data.items.length && lightbox(data.items, data.index || 0);
    };
  }

  function supportOldLightboxJson(data) {
    if (data.images) {
      data.images.forEach(function (item) {
        item.type = 'image';
      });
      data.items = data.images;
    }

    if (data.embed) {
      data.embed.type = 'video';
      data.items = [data.embed];
    }

    if (data.groupId) {
      data.group = data.groupId;
    }
  }

  // Export module
  return api;
};

},{"./site-lib":2}],4:[function(require,module,exports){
'use strict';

/**
 * site: Slider component
 */

var site = require('./site-lib');

module.exports = function($, _) {
  var api = {};
  var tram = $.tram;
  var $doc = $(document);
  var $sliders;
  var designer;
  var inApp = site.env();
  var namespace = '.slider';
  var dot = '<div class="slider-dot" data-wf-ignore />';
  var ix = site.ixEvents();
  var fallback;
  var redraw;

  // -----------------------------------
  // Module methods

  api.ready = function() {
    init();
  };

  api.design = function() {
    designer = true;
    init();
  };

  api.preview = function() {
    designer = false;
    init();
  };

  api.redraw = function() {
    redraw = true;
    init();
  };

  api.destroy = removeListeners;

  // -----------------------------------
  // Private methods

  function init() {
    // Find all sliders on the page
    $sliders = $doc.find(namespace);
    if (!$sliders.length) return;
    $sliders.filter(':visible').each(build);
    redraw = null;
    if (fallback) return;

    // Wire events
    removeListeners();
    addListeners();
  }

  function removeListeners() {
    site.resize.off(renderAll);
    site.redraw.off(api.redraw);
  }

  function addListeners() {
    site.resize.on(renderAll);
    site.redraw.on(api.redraw);
  }

  function renderAll() {
    $sliders.filter(':visible').each(render);
  }

  function build(i, el) {
    var $el = $(el);

    // Store slider state in data
    var data = $.data(el, namespace);
    if (!data) data = $.data(el, namespace, {
      index: 0,
      depth: 1,
      el: $el,
      config: {}
    });
    data.mask = $el.children('.slider-mask');
    data.left = $el.children('.slider-arrow-left');
    data.right = $el.children('.slider-arrow-right');
    data.nav = $el.children('.slider-nav');
    data.slides = data.mask.children('.slide');
    data.slides.each(ix.reset);
    if (redraw) data.maskWidth = 0;

    // Disable in old browsers
    if (!tram.support.transform) {
      data.left.hide();
      data.right.hide();
      data.nav.hide();
      fallback = true;
      return;
    }

    // Remove old events
    data.el.off(namespace);
    data.left.off(namespace);
    data.right.off(namespace);
    data.nav.off(namespace);

    // Set config from data attributes
    configure(data);

    // Add events based on mode
    if (designer) {
      data.el.on('setting' + namespace, handler(data));
      stopTimer(data);
      data.hasTimer = false;
    } else {
      data.el.on('swipe' + namespace, handler(data));
      data.left.on('tap' + namespace, previous(data));
      data.right.on('tap' + namespace, next(data));

      // Start timer if autoplay is true, only once
      if (data.config.autoplay && !data.hasTimer) {
        data.hasTimer = true;
        data.timerCount = 1;
        startTimer(data);
      }
    }

    // Listen to nav events
    data.nav.on('tap' + namespace, '> div', handler(data));

    // Remove gaps from formatted html (for inline-blocks)
    if (!inApp) {
      data.mask.contents().filter(function() {
        return this.nodeType === 3;
      }).remove();
    }

    // Run first render
    render(i, el);
  }

  function configure(data) {
    var config = {};

    config.crossOver = 0;

    // Set config options from data attributes
    config.animation = data.el.attr('data-animation') || 'slide';
    if (config.animation == 'outin') {
      config.animation = 'cross';
      config.crossOver = 0.5;
    }
    config.easing = data.el.attr('data-easing') || 'ease';

    var duration = data.el.attr('data-duration');
    config.duration = duration != null ? +duration : 500;

    if (+data.el.attr('data-infinite')) config.infinite = true;

    if (+data.el.attr('data-hide-arrows')) {
      config.hideArrows = true;
    } else if (data.config.hideArrows) {
      data.left.show();
      data.right.show();
    }

    if (+data.el.attr('data-autoplay')) {
      config.autoplay = true;
      config.delay = +data.el.attr('data-delay') || 2000;
      config.timerMax = +data.el.attr('data-autoplay-limit');
      // Disable timer on first touch or mouse down
      var touchEvents = 'mousedown' + namespace + ' touchstart' + namespace;
      if (!designer) data.el.off(touchEvents).one(touchEvents, function() {
        stopTimer(data);
      });
    }

    // Use edge buffer to help calculate page count
    var arrowWidth = data.right.width();
    config.edge = arrowWidth ? arrowWidth + 40 : 100;

    // Store config in data
    data.config = config;
  }

  function previous(data) {
    return function(evt) {
      change(data, { index: data.index - 1, vector: -1 });
    };
  }

  function next(data) {
    return function(evt) {
      change(data, { index: data.index + 1, vector: 1 });
    };
  }

  function select(data, value) {
    // Select page based on slide element index
    var found = null;
    if (value === data.slides.length) {
      init(); layout(data); // Rebuild and find new slides
    }
    _.each(data.anchors, function(anchor, index) {
      $(anchor.els).each(function(i, el) {
        if ($(el).index() === value) found = index;
      });
    });
    if (found != null) change(data, { index: found, immediate: true });
  }

  function startTimer(data) {
    stopTimer(data);
    var config = data.config;
    var timerMax = config.timerMax;
    if (timerMax && data.timerCount++ > timerMax) return;
    data.timerId = window.setTimeout(function() {
      if (data.timerId == null || designer) return;
      next(data)();
      startTimer(data);
    }, config.delay);
  }

  function stopTimer(data) {
    window.clearTimeout(data.timerId);
    data.timerId = null;
  }

  function handler(data) {
    return function(evt, options) {
      options = options || {};

      // Designer settings
      if (designer && evt.type == 'setting') {
        if (options.select == 'prev') return previous(data)();
        if (options.select == 'next') return next(data)();
        configure(data);
        layout(data);
        if (options.select == null) return;
        select(data, options.select);
        return;
      }

      // Swipe event
      if (evt.type == 'swipe') {
        if (site.env('editor')) return;
        if (options.direction == 'left') return next(data)();
        if (options.direction == 'right') return previous(data)();
        return;
      }

      // Page buttons
      if (data.nav.has(evt.target).length) {
        change(data, { index: $(evt.target).index() });
      }
    };
  }

  function change(data, options) {
    options = options || {};
    var config = data.config;
    var anchors = data.anchors;

    // Set new index
    data.previous = data.index;
    var index = options.index;
    var shift = {};
    if (index < 0) {
      index = anchors.length-1;
      if (config.infinite) {
        // Shift first slide to the end
        shift.x = -data.endX;
        shift.from = 0;
        shift.to = anchors[0].width;
      }
    } else if (index >= anchors.length) {
      index = 0;
      if (config.infinite) {
        // Shift last slide to the start
        shift.x = anchors[anchors.length-1].width;
        shift.from = -anchors[anchors.length-1].x;
        shift.to = shift.from - shift.x;
      }
    }
    data.index = index;

    // Select page nav
    var active = data.nav.children().eq(data.index).addClass('active');
    data.nav.children().not(active).removeClass('active');

    // Hide arrows
    if (config.hideArrows) {
      data.index === anchors.length-1 ? data.right.hide() : data.right.show();
      data.index === 0 ? data.left.hide() : data.left.show();
    }

    // Get page offset from anchors
    var lastOffsetX = data.offsetX || 0;
    var offsetX = data.offsetX = -anchors[data.index].x;
    var resetConfig = { x: offsetX, opacity: 1, visibility: '' };

    // Transition slides
    var targets = $(anchors[data.index].els);
    var previous = $(anchors[data.previous] && anchors[data.previous].els);
    var others = data.slides.not(targets);
    var animation = config.animation;
    var easing = config.easing;
    var duration = Math.round(config.duration);
    var vector = options.vector || (data.index > data.previous ? 1 : -1);
    var fadeRule = 'opacity ' + duration + 'ms ' + easing;
    var slideRule = 'transform ' + duration + 'ms ' + easing;

    // Trigger IX events
    if (!designer) {
      targets.each(ix.intro);
      others.each(ix.outro);
    }

    // Set immediately after layout changes (but not during redraw)
    if (options.immediate && !redraw) {
      tram(targets).set(resetConfig);
      resetOthers();
      return;
    }

    // Exit early if index is unchanged
    if (data.index == data.previous) return;

    // Cross Fade / Out-In
    if (animation == 'cross') {
      var reduced = Math.round(duration - duration * config.crossOver);
      var wait = Math.round(duration - reduced);
      fadeRule = 'opacity ' + reduced + 'ms ' + easing;
      tram(previous)
        .set({ visibility: '' })
        .add(fadeRule)
        .start({ opacity: 0 });
      tram(targets)
        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
        .add(fadeRule)
        .wait(wait)
        .then({ opacity: 1 })
        .then(resetOthers);
      return;
    }

    // Fade Over
    if (animation == 'fade') {
      tram(previous)
        .set({ visibility: '' })
        .stop();
      tram(targets)
        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
        .add(fadeRule)
        .start({ opacity: 1 })
        .then(resetOthers);
      return;
    }

    // Slide Over
    if (animation == 'over') {
      resetConfig = { x: data.endX };
      tram(previous)
        .set({ visibility: '' })
        .stop();
      tram(targets)
        .set({ visibility: '', zIndex: data.depth++, x: offsetX + anchors[data.index].width * vector })
        .add(slideRule)
        .start({ x: offsetX })
        .then(resetOthers);
      return;
    }

    // Slide - infinite scroll
    if (config.infinite && shift.x) {
      tram(data.slides.not(previous))
        .set({ visibility: '', x: shift.x })
        .add(slideRule)
        .start({ x: offsetX });
      tram(previous)
        .set({ visibility: '', x: shift.from })
        .add(slideRule)
        .start({ x: shift.to });
      data.shifted = previous;

    } else {
      if (config.infinite && data.shifted) {
        tram(data.shifted).set({ visibility: '', x: lastOffsetX });
        data.shifted = null;
      }

      // Slide - basic scroll
      tram(data.slides)
        .set({ visibility: '' })
        .add(slideRule)
        .start({ x: offsetX });
    }

    // Helper to move others out of view
    function resetOthers() {
      var targets = $(anchors[data.index].els);
      var others = data.slides.not(targets);
      if (animation != 'slide') resetConfig.visibility = 'hidden';
      tram(others).set(resetConfig);
    }
  }

  function render(i, el) {
    var data = $.data(el, namespace);
    if (maskChanged(data)) return layout(data);
    if (designer && slidesChanged(data)) layout(data);
  }

  function layout(data) {
    // Determine page count from width of slides
    var pages = 1;
    var offset = 0;
    var anchor = 0;
    var width = 0;
    var maskWidth = data.maskWidth;
    var threshold = maskWidth - data.config.edge;
    if (threshold < 0) threshold = 0;
    data.anchors = [{ els: [], x: 0, width: 0 }];
    data.slides.each(function(i, el) {
      if (anchor - offset > threshold) {
        pages++;
        offset += maskWidth;
        // Store page anchor for transition
        data.anchors[pages-1] = { els: [], x: anchor, width: 0 };
      }
      // Set next anchor using current width + margin
      width = $(el).outerWidth(true);
      anchor += width;
      data.anchors[pages-1].width += width;
      data.anchors[pages-1].els.push(el);
    });
    data.endX = anchor;

    // Build dots if nav exists and needs updating
    if (designer) data.pages = null;
    if (data.nav.length && data.pages !== pages){
      data.pages = pages;
      buildNav(data);
    }

    // Make sure index is still within range and call change handler
    var index = data.index;
    if (index >= pages) index = pages-1;
    change(data, { immediate: true, index: index });
  }

  function buildNav(data) {
    var dots = [];
    var $dot;
    var spacing = data.el.attr('data-nav-spacing');
    if (spacing) spacing = parseFloat(spacing) + 'px';
    for (var i=0; i<data.pages; i++) {
      $dot = $(dot);
      if (data.nav.hasClass('w-num')) $dot.text(i+1);
      if (spacing != null) $dot.css({
        'margin-left': spacing,
        'margin-right': spacing
      });
      dots.push($dot);
    }
    data.nav.empty().append(dots);
  }

  function maskChanged(data) {
    var maskWidth = data.mask.width();
    if (data.maskWidth !== maskWidth) {
      data.maskWidth = maskWidth;
      return true;
    }
    return false;
  }

  function slidesChanged(data) {
    var slidesWidth = 0;
    data.slides.each(function(i, el) {
      slidesWidth += $(el).outerWidth(true);
    });
    if (data.slidesWidth !== slidesWidth) {
      data.slidesWidth = slidesWidth;
      return true;
    }
    return false;
  }

  // Export module
  return api;
};

},{"./site-lib":2}],5:[function(require,module,exports){
'use strict';

/**
 * site: Touch events
 */

module.exports = function($, _) {
  var api = {};
  var fallback = !document.addEventListener;
  var getSelection = window.getSelection;

  // Fallback to click events in old IE
  if (fallback) {
    $.event.special.tap = { bindType: 'click', delegateType: 'click' };
  }

  api.init = function(el) {
    if (fallback) return null;
    el = typeof el === 'string' ? $(el).get(0) : el;
    return el ? new Touch(el) : null;
  };

  function Touch(el) {
    var active = false;
    var dirty = false;
    var useTouch = false;
    var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
    var startX, startY, lastX;

    el.addEventListener('touchstart', start, false);
    el.addEventListener('touchmove', move, false);
    el.addEventListener('touchend', end, false);
    el.addEventListener('touchcancel', cancel, false);
    el.addEventListener('mousedown', start, false);
    el.addEventListener('mousemove', move, false);
    el.addEventListener('mouseup', end, false);
    el.addEventListener('mouseout', cancel, false);

    function start(evt) {
      // We don’t handle multi-touch events yet.
      var touches = evt.touches;
      if (touches && touches.length > 1) {
        return;
      }

      active = true;
      dirty = false;

      if (touches) {
        useTouch = true;
        startX = touches[0].clientX;
        startY = touches[0].clientY;
      } else {
        startX = evt.clientX;
        startY = evt.clientY;
      }

      lastX = startX;
    }

    function move(evt) {
      if (!active) return;

      if (useTouch && evt.type === 'mousemove') {
        evt.preventDefault();
        evt.stopPropagation();
        return;
      }

      var touches = evt.touches;
      var x = touches ? touches[0].clientX : evt.clientX;
      var y = touches ? touches[0].clientY : evt.clientY;

      var velocityX = x - lastX;
      lastX = x;

      // Allow swipes while pointer is down, but prevent them during text selection
      if (Math.abs(velocityX) > thresholdX && getSelection && getSelection() + '' === '') {
        triggerEvent('swipe', evt, { direction: velocityX > 0 ? 'right' : 'left' });
        cancel();
      }

      // If pointer moves more than 10px flag to cancel tap
      if (Math.abs(x - startX) > 10 || Math.abs(y - startY) > 10) {
        dirty = true;
      }
    }

    function end(evt) {
      if (!active) return;
      active = false;

      if (useTouch && evt.type === 'mouseup') {
        evt.preventDefault();
        evt.stopPropagation();
        useTouch = false;
        return;
      }

      if (!dirty) triggerEvent('tap', evt);
    }

    function cancel(evt) {
      active = false;
    }

    function destroy() {
      el.removeEventListener('touchstart', start, false);
      el.removeEventListener('touchmove', move, false);
      el.removeEventListener('touchend', end, false);
      el.removeEventListener('touchcancel', cancel, false);
      el.removeEventListener('mousedown', start, false);
      el.removeEventListener('mousemove', move, false);
      el.removeEventListener('mouseup', end, false);
      el.removeEventListener('mouseout', cancel, false);
      el = null;
    }

    // Public instance methods
    this.destroy = destroy;
  }

  // Wrap native event to supoprt preventdefault + stopPropagation
  function triggerEvent(type, evt, data) {
    var newEvent = $.Event(type, { originalEvent: evt });
    $(evt.target).trigger(newEvent, data);
  }

  // Listen for touch events on all nodes by default.
  api.instance = api.init(document);

  // Export module
  return api;
};

},{}],8:[function(require,module,exports){
/*!
 * tram.js v0.8.1-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
window.tram=function(a){function b(a,b){var c=new L.Bare;return c.init(a,b)}function c(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function d(a){var b=parseInt(a.slice(1),16),c=b>>16&255,d=b>>8&255,e=255&b;return[c,d,e]}function e(a,b,c){return"#"+(1<<24|a<<16|b<<8|c).toString(16).slice(1)}function f(){}function g(a,b){_("Type warning: Expected: ["+a+"] Got: ["+typeof b+"] "+b)}function h(a,b,c){_("Units do not match ["+a+"]: "+b+", "+c)}function i(a,b,c){if(void 0!==b&&(c=b),void 0===a)return c;var d=c;return Z.test(a)||!$.test(a)?d=parseInt(a,10):$.test(a)&&(d=1e3*parseFloat(a)),0>d&&(d=0),d===d?d:c}function j(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}var k=function(a,b,c){function d(a){return"object"==typeof a}function e(a){return"function"==typeof a}function f(){}function g(h,i){function j(){var a=new k;return e(a.init)&&a.init.apply(a,arguments),a}function k(){}i===c&&(i=h,h=Object),j.Bare=k;var l,m=f[a]=h[a],n=k[a]=j[a]=new f;return n.constructor=j,j.mixin=function(b){return k[a]=j[a]=g(j,b)[a],j},j.open=function(a){if(l={},e(a)?l=a.call(j,n,m,j,h):d(a)&&(l=a),d(l))for(var c in l)b.call(l,c)&&(n[c]=l[c]);return e(n.init)||(n.init=h),j},j.open(i)}return g}("prototype",{}.hasOwnProperty),l={ease:["ease",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-2.75*f*e+11*e*e+-15.5*f+8*e+.25*a)}],"ease-in":["ease-in",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-1*f*e+3*e*e+-3*f+2*e)}],"ease-out":["ease-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(.3*f*e+-1.6*e*e+2.2*f+-1.8*e+1.9*a)}],"ease-in-out":["ease-in-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(2*f*e+-5*e*e+2*f+2*e)}],linear:["linear",function(a,b,c,d){return c*a/d+b}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(a,b,c,d){return c*(a/=d)*a+b}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(a,b,c,d){return-c*(a/=d)*(a-2)+b}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(a,b,c,d){return c*(a/=d)*a*a+b}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(a,b,c,d){return c*(a/=d)*a*a*a+b}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(a,b,c,d){return c*(a/=d)*a*a*a*a+b}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(a,b,c,d){return 0===a?b:a===d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}]},m={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},n=document,o=window,p="bkwld-tram",q=/[\-\.0-9]/g,r=/[A-Z]/,s="number",t=/^(rgb|#)/,u=/(em|cm|mm|in|pt|pc|px)$/,v=/(em|cm|mm|in|pt|pc|px|%)$/,w=/(deg|rad|turn)$/,x="unitless",y=/(all|none) 0s ease 0s/,z=/^(width|height)$/,A=" ",B=n.createElement("a"),C=["Webkit","Moz","O","ms"],D=["-webkit-","-moz-","-o-","-ms-"],E=function(a){if(a in B.style)return{dom:a,css:a};var b,c,d="",e=a.split("-");for(b=0;b<e.length;b++)d+=e[b].charAt(0).toUpperCase()+e[b].slice(1);for(b=0;b<C.length;b++)if(c=C[b]+d,c in B.style)return{dom:c,css:D[b]+a}},F=b.support={bind:Function.prototype.bind,transform:E("transform"),transition:E("transition"),backface:E("backface-visibility"),timing:E("transition-timing-function")};if(F.transition){var G=F.timing.dom;if(B.style[G]=l["ease-in-back"][0],!B.style[G])for(var H in m)l[H][0]=m[H]}var I=b.frame=function(){var a=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame;return a&&F.bind?a.bind(o):function(a){o.setTimeout(a,16)}}(),J=b.now=function(){var a=o.performance,b=a&&(a.now||a.webkitNow||a.msNow||a.mozNow);return b&&F.bind?b.bind(a):Date.now||function(){return+new Date}}(),K=k(function(b){function d(a,b){var c=j((""+a).split(A)),d=c[0];b=b||{};var e=X[d];if(!e)return _("Unsupported property: "+d);if(!b.weak||!this.props[d]){var f=e[0],g=this.props[d];return g||(g=this.props[d]=new f.Bare),g.init(this.$el,c,e,b),g}}function e(a,b,c){if(a){var e=typeof a;if(b||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==e&&b)return this.timer=new R({duration:a,context:this,complete:h}),void(this.active=!0);if("string"==e&&b){switch(a){case"hide":n.call(this);break;case"stop":k.call(this);break;case"redraw":o.call(this);break;default:d.call(this,a,c&&c[1])}return h.call(this)}if("function"==e)return void a.call(this,this);if("object"==e){var f=0;t.call(this,a,function(a,b){a.span>f&&(f=a.span),a.stop(),a.animate(b)},function(a){"wait"in a&&(f=i(a.wait,0))}),s.call(this),f>0&&(this.timer=new R({duration:f,context:this}),this.active=!0,b&&(this.timer.complete=h));var g=this,j=!1,l={};I(function(){t.call(g,a,function(a){a.active&&(j=!0,l[a.name]=a.nextStyle)}),j&&g.$el.css(l)})}}}function f(a){a=i(a,0),this.active?this.queue.push({options:a}):(this.timer=new R({duration:a,context:this,complete:h}),this.active=!0)}function g(a){return this.active?(this.queue.push({options:a,args:arguments}),void(this.timer.complete=h)):_("No active transition timer. Use start() or wait() before then().")}function h(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var a=this.queue.shift();e.call(this,a.options,!0,a.args)}}function k(a){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var b;"string"==typeof a?(b={},b[a]=1):b="object"==typeof a&&null!=a?a:this.props,t.call(this,b,u),s.call(this)}function l(a){k.call(this,a),t.call(this,a,v,w)}function m(a){"string"!=typeof a&&(a="block"),this.el.style.display=a}function n(){k.call(this),this.el.style.display="none"}function o(){this.el.offsetHeight}function q(){k.call(this),a.removeData(this.el,p),this.$el=this.el=null}function s(){var a,b,c=[];this.upstream&&c.push(this.upstream);for(a in this.props)b=this.props[a],b.active&&c.push(b.string);c=c.join(","),this.style!==c&&(this.style=c,this.el.style[F.transition.dom]=c)}function t(a,b,e){var f,g,h,i,j=b!==u,k={};for(f in a)h=a[f],f in Y?(k.transform||(k.transform={}),k.transform[f]=h):(r.test(f)&&(f=c(f)),f in X?k[f]=h:(i||(i={}),i[f]=h));for(f in k){if(h=k[f],g=this.props[f],!g){if(!j)continue;g=d.call(this,f)}b.call(this,g,h)}e&&i&&e.call(this,i)}function u(a){a.stop()}function v(a,b){a.set(b)}function w(a){this.$el.css(a)}function x(a,c){b[a]=function(){return this.children?z.call(this,c,arguments):(this.el&&c.apply(this,arguments),this)}}function z(a,b){var c,d=this.children.length;for(c=0;d>c;c++)a.apply(this.children[c],b);return this}b.init=function(b){if(this.$el=a(b),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,T.keepInherited&&!T.fallback){var c=V(this.el,"transition");c&&!y.test(c)&&(this.upstream=c)}F.backface&&T.hideBackface&&U(this.el,F.backface.css,"hidden")},x("add",d),x("start",e),x("wait",f),x("then",g),x("next",h),x("stop",k),x("set",l),x("show",m),x("hide",n),x("redraw",o),x("destroy",q)}),L=k(K,function(b){function c(b,c){var d=a.data(b,p)||a.data(b,p,new K.Bare);return d.el||d.init(b),c?d.start(c):d}b.init=function(b,d){var e=a(b);if(!e.length)return this;if(1===e.length)return c(e[0],d);var f=[];return e.each(function(a,b){f.push(c(b,d))}),this.children=f,this}}),M=k(function(a){function b(){var a=this.get();this.update("auto");var b=this.get();return this.update(a),b}function c(a,b,c){return void 0!==b&&(c=b),a in l?a:c}function d(a){var b=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return(b?e(b[1],b[2],b[3]):a).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var f={duration:500,ease:"ease",delay:0};a.init=function(a,b,d,e){this.$el=a,this.el=a[0];var g=b[0];d[2]&&(g=d[2]),W[g]&&(g=W[g]),this.name=g,this.type=d[1],this.duration=i(b[1],this.duration,f.duration),this.ease=c(b[2],this.ease,f.ease),this.delay=i(b[3],this.delay,f.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=z.test(this.name),this.unit=e.unit||this.unit||T.defaultUnit,this.angle=e.angle||this.angle||T.defaultAngle,T.fallback||e.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+A+this.duration+"ms"+("ease"!=this.ease?A+l[this.ease][0]:"")+(this.delay?A+this.delay+"ms":""))},a.set=function(a){a=this.convert(a,this.type),this.update(a),this.redraw()},a.transition=function(a){this.active=!0,a=this.convert(a,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==a&&(a=b.call(this))),this.nextStyle=a},a.fallback=function(a){var c=this.el.style[this.name]||this.convert(this.get(),this.type);a=this.convert(a,this.type),this.auto&&("auto"==c&&(c=this.convert(this.get(),this.type)),"auto"==a&&(a=b.call(this))),this.tween=new Q({from:c,to:a,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.get=function(){return V(this.el,this.name)},a.update=function(a){U(this.el,this.name,a)},a.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,U(this.el,this.name,this.get()));var a=this.tween;a&&a.context&&a.destroy()},a.convert=function(a,b){if("auto"==a&&this.auto)return a;var c,e="number"==typeof a,f="string"==typeof a;switch(b){case s:if(e)return a;if(f&&""===a.replace(q,""))return+a;c="number(unitless)";break;case t:if(f){if(""===a&&this.original)return this.original;if(b.test(a))return"#"==a.charAt(0)&&7==a.length?a:d(a)}c="hex or rgb string";break;case u:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit)";break;case v:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit or %)";break;case w:if(e)return a+this.angle;if(f&&b.test(a))return a;c="number(deg) or string(angle)";break;case x:if(e)return a;if(f&&v.test(a))return a;c="number(unitless) or string(unit or %)"}return g(c,a),a},a.redraw=function(){this.el.offsetHeight}}),N=k(M,function(a,b){a.init=function(){b.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),t))}}),O=k(M,function(a,b){a.init=function(){b.init.apply(this,arguments),this.animate=this.fallback},a.get=function(){return this.$el[this.name]()},a.update=function(a){this.$el[this.name](a)}}),P=k(M,function(a,b){function c(a,b){var c,d,e,f,g;for(c in a)f=Y[c],e=f[0],d=f[1]||c,g=this.convert(a[c],e),b.call(this,d,g,e)}a.init=function(){b.init.apply(this,arguments),this.current||(this.current={},Y.perspective&&T.perspective&&(this.current.perspective=T.perspective,U(this.el,this.name,this.style(this.current)),this.redraw()))},a.set=function(a){c.call(this,a,function(a,b){this.current[a]=b}),U(this.el,this.name,this.style(this.current)),this.redraw()},a.transition=function(a){var b=this.values(a);this.tween=new S({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease});var c,d={};for(c in this.current)d[c]=c in b?b[c]:this.current[c];this.active=!0,this.nextStyle=this.style(d)},a.fallback=function(a){var b=this.values(a);this.tween=new S({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.update=function(){U(this.el,this.name,this.style(this.current))},a.style=function(a){var b,c="";for(b in a)c+=b+"("+a[b]+") ";return c},a.values=function(a){var b,d={};return c.call(this,a,function(a,c,e){d[a]=c,void 0===this.current[a]&&(b=0,~a.indexOf("scale")&&(b=1),this.current[a]=this.convert(b,e))}),d}}),Q=k(function(b){function c(a){1===n.push(a)&&I(g)}function g(){var a,b,c,d=n.length;if(d)for(I(g),b=J(),a=d;a--;)c=n[a],c&&c.render(b)}function i(b){var c,d=a.inArray(b,n);d>=0&&(c=n.slice(d+1),n.length=d,c.length&&(n=n.concat(c)))}function j(a){return Math.round(a*o)/o}function k(a,b,c){return e(a[0]+c*(b[0]-a[0]),a[1]+c*(b[1]-a[1]),a[2]+c*(b[2]-a[2]))}var m={ease:l.ease[1],from:0,to:1};b.init=function(a){this.duration=a.duration||0,this.delay=a.delay||0;var b=a.ease||m.ease;l[b]&&(b=l[b][1]),"function"!=typeof b&&(b=m.ease),this.ease=b,this.update=a.update||f,this.complete=a.complete||f,this.context=a.context||this,this.name=a.name;var c=a.from,d=a.to;void 0===c&&(c=m.from),void 0===d&&(d=m.to),this.unit=a.unit||"","number"==typeof c&&"number"==typeof d?(this.begin=c,this.change=d-c):this.format(d,c),this.value=this.begin+this.unit,this.start=J(),a.autoplay!==!1&&this.play()},b.play=function(){this.active||(this.start||(this.start=J()),this.active=!0,c(this))},b.stop=function(){this.active&&(this.active=!1,i(this))},b.render=function(a){var b,c=a-this.start;if(this.delay){if(c<=this.delay)return;c-=this.delay}if(c<this.duration){var d=this.ease(c,0,1,this.duration);return b=this.startRGB?k(this.startRGB,this.endRGB,d):j(this.begin+d*this.change),this.value=b+this.unit,void this.update.call(this.context,this.value)}b=this.endHex||this.begin+this.change,this.value=b+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},b.format=function(a,b){if(b+="",a+="","#"==a.charAt(0))return this.startRGB=d(b),this.endRGB=d(a),this.endHex=a,this.begin=0,void(this.change=1);if(!this.unit){var c=b.replace(q,""),e=a.replace(q,"");c!==e&&h("tween",b,a),this.unit=c}b=parseFloat(b),a=parseFloat(a),this.begin=this.value=b,this.change=a-b},b.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=f};var n=[],o=1e3}),R=k(Q,function(a){a.init=function(a){this.duration=a.duration||0,this.complete=a.complete||f,this.context=a.context,this.play()},a.render=function(a){var b=a-this.start;b<this.duration||(this.complete.call(this.context),this.destroy())}}),S=k(Q,function(a,b){a.init=function(a){this.context=a.context,this.update=a.update,this.tweens=[],this.current=a.current;var b,c;for(b in a.values)c=a.values[b],this.current[b]!==c&&this.tweens.push(new Q({name:b,from:this.current[b],to:c,duration:a.duration,delay:a.delay,ease:a.ease,autoplay:!1}));this.play()},a.render=function(a){var b,c,d=this.tweens.length,e=!1;for(b=d;b--;)c=this.tweens[b],c.context&&(c.render(a),this.current[c.name]=c.value,e=!0);return e?void(this.update&&this.update.call(this.context)):this.destroy()},a.destroy=function(){if(b.destroy.call(this),this.tweens){var a,c=this.tweens.length;for(a=c;a--;)this.tweens[a].destroy();this.tweens=null,this.current=null}}}),T=b.config={defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!F.transition,agentTests:[]};b.fallback=function(a){if(!F.transition)return T.fallback=!0;T.agentTests.push("("+a+")");var b=new RegExp(T.agentTests.join("|"),"i");T.fallback=b.test(navigator.userAgent)},b.fallback("6.0.[2-5] Safari"),b.tween=function(a){return new Q(a)},b.delay=function(a,b,c){return new R({complete:b,duration:a,context:c})},a.fn.tram=function(a){return b.call(null,this,a)};var U=a.style,V=a.css,W={transform:F.transform&&F.transform.css},X={color:[N,t],background:[N,t,"background-color"],"outline-color":[N,t],"border-color":[N,t],"border-top-color":[N,t],"border-right-color":[N,t],"border-bottom-color":[N,t],"border-left-color":[N,t],"border-width":[M,u],"border-top-width":[M,u],"border-right-width":[M,u],"border-bottom-width":[M,u],"border-left-width":[M,u],"border-spacing":[M,u],"letter-spacing":[M,u],margin:[M,u],"margin-top":[M,u],"margin-right":[M,u],"margin-bottom":[M,u],"margin-left":[M,u],padding:[M,u],"padding-top":[M,u],"padding-right":[M,u],"padding-bottom":[M,u],"padding-left":[M,u],"outline-width":[M,u],opacity:[M,s],top:[M,v],right:[M,v],bottom:[M,v],left:[M,v],"font-size":[M,v],"text-indent":[M,v],"word-spacing":[M,v],width:[M,v],"min-width":[M,v],"max-width":[M,v],height:[M,v],"min-height":[M,v],"max-height":[M,v],"line-height":[M,x],"scroll-top":[O,s,"scrollTop"],"scroll-left":[O,s,"scrollLeft"]},Y={};F.transform&&(X.transform=[P],Y={x:[v,"translateX"],y:[v,"translateY"],rotate:[w],rotateX:[w],rotateY:[w],scale:[s],scaleX:[s],scaleY:[s],skew:[w],skewX:[w],skewY:[w]}),F.transform&&F.backface&&(Y.z=[v,"translateZ"],Y.rotateZ=[w],Y.scaleZ=[s],Y.perspective=[u]);var Z=/ms/,$=/s|\./,_=function(){var a="warn",b=window.console;return b&&b[a]?function(c){b[a](c)}:f}();return a.tram=b}(window.jQuery);

},{}],9:[function(require,module,exports){
'use strict';

/*jshint -W054 */

// Include tram for frame-throttling
var $ = window.$;
var tram = require('plugins/tram-min') && $.tram;

/*!
 * site._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (site)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
module.exports = (function() {
  var _ = {};

  // Current version.
  _.VERSION = '1.6.0-site';

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    /* jshint shadow:true */
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Function (ahem) Functions
  // --------------------

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered once every
  // browser animation frame - using tram's requestAnimationFrame polyfill.
  _.throttle = function(func) {
    var wait, args, context;
    return function() {
      if (wait) return;
      wait = true;
      args = arguments;
      context = this;
      tram.frame(function() {
        wait = false;
        func.apply(context, args);
      });
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Object Functions
  // ----------------

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Utility Functions
  // -----------------

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Export underscore
  return _;
}());

},{"plugins/tram-min":8}],10:[function(require,module,exports){
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3
 * 2014-12-16 site - Removed UMD wrapper
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * @license MIT (/blob/master/LICENSE.txt)
 */
module.exports=function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var httpRegEx=/^https?:\/\//i;var getOrPostRegEx=/^get|post$/i;var sameSchemeRegEx=new RegExp("^"+location.protocol,"i");$.ajaxTransport("* text html xml json",function(options,userOptions,jqXHR){if(!options.crossDomain||!options.async||!getOrPostRegEx.test(options.type)||!httpRegEx.test(options.url)||!sameSchemeRegEx.test(options.url)){return}var xdr=null;return{send:function(headers,complete){var postData="";var userType=(userOptions.dataType||"").toLowerCase();xdr=new XDomainRequest;if(/^\d+$/.test(userOptions.timeout)){xdr.timeout=userOptions.timeout}xdr.ontimeout=function(){complete(500,"timeout")};xdr.onload=function(){var allResponseHeaders="Content-Length: "+xdr.responseText.length+"\r\nContent-Type: "+xdr.contentType;var status={code:200,message:"success"};var responses={text:xdr.responseText};try{if(userType==="html"||/text\/html/i.test(xdr.contentType)){responses.html=xdr.responseText}else if(userType==="json"||userType!=="text"&&/\/json/i.test(xdr.contentType)){try{responses.json=$.parseJSON(xdr.responseText)}catch(e){status.code=500;status.message="parseerror"}}else if(userType==="xml"||userType!=="text"&&/\/xml/i.test(xdr.contentType)){var doc=new ActiveXObject("Microsoft.XMLDOM");doc.async=false;try{doc.loadXML(xdr.responseText)}catch(e){doc=undefined}if(!doc||!doc.documentElement||doc.getElementsByTagName("parsererror").length){status.code=500;status.message="parseerror";throw"Invalid XML: "+xdr.responseText}responses.xml=doc}}catch(parseMessage){throw parseMessage}finally{complete(status.code,status.message,responses,allResponseHeaders)}};xdr.onprogress=function(){};xdr.onerror=function(){complete(500,"error",{text:xdr.responseText})};if(userOptions.data){postData=$.type(userOptions.data)==="string"?userOptions.data:$.param(userOptions.data)}xdr.open(options.type,options.url);xdr.send(postData)},abort:function(){if(xdr){xdr.abort()}}}})}(window.jQuery);
},{}]},{},[1]);