// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"56Vnr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4pp4s":[function(require,module,exports) {
//  // core version + navigation, pagination modules:
//  import Swiper, { Navigation, Pagination } from 'swiper';
//  // import Swiper and modules styles
//  import 'swiper/css';
//  import 'swiper/css/navigation';
//  import 'swiper/css/pagination';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _accordionJs = require("accordion-js");
var _accordionJsDefault = parcelHelpers.interopDefault(_accordionJs);
var _accordionMinCss = require("accordion-js/dist/accordion.min.css");
const swiper = new Swiper(".education__swipper", {
    // modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        slideShadows: false
    }
});
const acc = new (0, _accordionJsDefault.default)(".accordion-container");
acc.open(0);
const swiperModal = new Swiper(".modal__swiper", {
    // modules: [Navigation, Pagination],
    // loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
const advBtn = document.querySelectorAll(".advantages__buttom-item");
const modalWin = document.querySelector(".modal");
const modalSwiperDom = document.querySelector(".modal__swiper");
const modalNextSlide = document.querySelector(".modal__swiper-next");
advBtn.forEach((el)=>{
    el.addEventListener("click", ()=>{
        modalWin.classList.add("vissual");
        modalSwiperDom.classList.add("vissual");
        let slide = getSlide(el);
        console.log(slide);
        changeSlide(swiperModal, slide);
    });
});
function getSlide(button) {
    return Number(button.dataset.slide);
}
function changeSlide(swiper, slide) {
    swiper.slideTo(slide - 1);
}
modalSwiperDom.addEventListener("click", (event)=>{
    event._isClickWithinModal = true;
});
modalWin.addEventListener("click", (event)=>{
    if (event._isClickWithinModal) return;
    modalWin.classList.remove("vissual");
    modalSwiperDom.classList.remove("vissual");
});
const anchors = document.querySelectorAll('a[href*="#"]') // links
;
for (let anchor of anchors)anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

},{"accordion-js":"d3ArU","accordion-js/dist/accordion.min.css":"ObqJV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3ArU":[function(require,module,exports) {
/**
 * Accordion v3.3.2
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 * 
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */ "use strict";
!function(e) {
    var t = 0, n = function e(n, s) {
        var i = this, o = this, a = !1;
        if (Array.isArray(n)) return !!n.length && n.map(function(t) {
            return new e(t, s);
        });
        var r = {
            init: function() {
                this.options = Object.assign({
                    duration: 600,
                    ariaEnabled: !0,
                    collapse: !0,
                    showMultiple: !1,
                    onlyChildNodes: !0,
                    openOnInit: [],
                    elementClass: "ac",
                    triggerClass: "ac-trigger",
                    panelClass: "ac-panel",
                    activeClass: "is-active",
                    beforeOpen: function() {},
                    onOpen: function() {},
                    beforeClose: function() {},
                    onClose: function() {}
                }, s);
                var e = "string" == typeof n;
                this.container = e ? document.querySelector(n) : n, this.createDefinitions(), o.attachEvents();
            },
            createDefinitions: function() {
                var e = this, n = this.options, s = n.elementClass, i = n.openOnInit, o = n.onlyChildNodes ? this.container.childNodes : this.container.querySelectorAll(".".concat(s));
                this.elements = Array.from(o).filter(function(e) {
                    return e.classList && e.classList.contains(s);
                }), this.firstElement = this.elements[0], this.lastElement = this.elements[this.elements.length - 1], this.elements.filter(function(e) {
                    return !e.classList.contains("js-enabled");
                }).forEach(function(n) {
                    n.classList.add("js-enabled"), e.generateIDs(n), e.setARIA(n), e.setTransition(n);
                    var s = e.elements.indexOf(n);
                    t++, i.includes(s) ? e.showElement(n, !1) : e.closeElement(n, !1);
                });
            },
            setTransition: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.options, s = n.duration, i = n.panelClass, o = e.querySelector(".".concat(i)), a = c("transitionDuration");
                o.style[a] = t ? null : "".concat(s, "ms");
            },
            generateIDs: function(e) {
                var n = this.options, s = n.triggerClass, i = n.panelClass, o = e.querySelector(".".concat(s)), a = e.querySelector(".".concat(i));
                e.setAttribute("id", "ac-".concat(t)), o.setAttribute("id", "ac-trigger-".concat(t)), a.setAttribute("id", "ac-panel-".concat(t));
            },
            removeIDs: function(e) {
                var t = this.options, n = t.triggerClass, s = t.panelClass, i = e.querySelector(".".concat(n)), o = e.querySelector(".".concat(s));
                e.removeAttribute("id"), i.removeAttribute("id"), o.removeAttribute("id");
            },
            setARIA: function(e) {
                var n = this.options, s = n.ariaEnabled, i = n.triggerClass, o = n.panelClass;
                if (s) {
                    var a = e.querySelector(".".concat(i)), r = e.querySelector(".".concat(o));
                    a.setAttribute("role", "button"), a.setAttribute("aria-controls", "ac-panel-".concat(t)), a.setAttribute("aria-disabled", !1), a.setAttribute("aria-expanded", !1), r.setAttribute("role", "region"), r.setAttribute("aria-labelledby", "ac-trigger-".concat(t));
                }
            },
            updateARIA: function(e, t) {
                var n = t.ariaExpanded, s = t.ariaDisabled, i = this.options, o = i.ariaEnabled, a = i.triggerClass;
                if (o) {
                    var r = e.querySelector(".".concat(a));
                    r.setAttribute("aria-expanded", n), r.setAttribute("aria-disabled", s);
                }
            },
            removeARIA: function(e) {
                var t = this.options, n = t.ariaEnabled, s = t.triggerClass, i = t.panelClass;
                if (n) {
                    var o = e.querySelector(".".concat(s)), a = e.querySelector(".".concat(i));
                    o.removeAttribute("role"), o.removeAttribute("aria-controls"), o.removeAttribute("aria-disabled"), o.removeAttribute("aria-expanded"), a.removeAttribute("role"), a.removeAttribute("aria-labelledby");
                }
            },
            focus: function(e, t) {
                e.preventDefault();
                var n = this.options.triggerClass;
                t.querySelector(".".concat(n)).focus();
            },
            focusFirstElement: function(e) {
                this.focus(e, this.firstElement), this.currFocusedIdx = 0;
            },
            focusLastElement: function(e) {
                this.focus(e, this.lastElement), this.currFocusedIdx = this.elements.length - 1;
            },
            focusNextElement: function(e) {
                var t = this.currFocusedIdx + 1;
                if (t > this.elements.length - 1) return this.focusFirstElement(e);
                this.focus(e, this.elements[t]), this.currFocusedIdx = t;
            },
            focusPrevElement: function(e) {
                var t = this.currFocusedIdx - 1;
                if (t < 0) return this.focusLastElement(e);
                this.focus(e, this.elements[t]), this.currFocusedIdx = t;
            },
            showElement: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.options, s = n.panelClass, i = n.activeClass, o = n.collapse, a = n.beforeOpen;
                t && a(e);
                var r = e.querySelector(".".concat(s)), c = r.scrollHeight;
                e.classList.add(i), requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        r.style.height = t ? "".concat(c, "px") : "auto";
                    });
                }), this.updateARIA(e, {
                    ariaExpanded: !0,
                    ariaDisabled: !o
                });
            },
            closeElement: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.options, s = n.panelClass, i = n.activeClass, o = n.beforeClose, a = e.querySelector(".".concat(s)), r = a.scrollHeight;
                e.classList.remove(i), t ? (o(e), requestAnimationFrame(function() {
                    a.style.height = "".concat(r, "px"), requestAnimationFrame(function() {
                        a.style.height = 0;
                    });
                })) : a.style.height = 0, this.updateARIA(e, {
                    ariaExpanded: !1,
                    ariaDisabled: !1
                });
            },
            toggleElement: function(e) {
                var t = this.options, n = t.activeClass, s = t.collapse, i = e.classList.contains(n);
                if (!i || s) return i ? this.closeElement(e) : this.showElement(e);
            },
            closeElements: function() {
                var e = this, t = this.options, n = t.activeClass;
                t.showMultiple || this.elements.forEach(function(t, s) {
                    t.classList.contains(n) && s !== e.currFocusedIdx && e.closeElement(t);
                });
            },
            handleClick: function(e) {
                var t = this, n = e.currentTarget;
                this.elements.forEach(function(s, i) {
                    s.contains(n) && "A" !== e.target.nodeName && (t.currFocusedIdx = i, t.closeElements(), t.focus(e, s), t.toggleElement(s));
                });
            },
            handleKeydown: function(e) {
                var t = 38, n = 40, s = 36, i = 35;
                switch(e.keyCode){
                    case t:
                        return this.focusPrevElement(e);
                    case n:
                        return this.focusNextElement(e);
                    case s:
                        return this.focusFirstElement(e);
                    case i:
                        return this.focusLastElement(e);
                    default:
                        return null;
                }
            },
            handleTransitionEnd: function(e) {
                if ("height" === e.propertyName) {
                    var t = this.options, n = t.onOpen, s = t.onClose, i = e.currentTarget, o = parseInt(i.style.height), a = this.elements.find(function(e) {
                        return e.contains(i);
                    });
                    o > 0 ? (i.style.height = "auto", n(a)) : s(a);
                }
            }
        };
        this.attachEvents = function() {
            if (!a) {
                var e = r.options, t = e.triggerClass, n = e.panelClass;
                r.handleClick = r.handleClick.bind(r), r.handleKeydown = r.handleKeydown.bind(r), r.handleTransitionEnd = r.handleTransitionEnd.bind(r), r.elements.forEach(function(e) {
                    var s = e.querySelector(".".concat(t)), i = e.querySelector(".".concat(n));
                    s.addEventListener("click", r.handleClick), s.addEventListener("keydown", r.handleKeydown), i.addEventListener("webkitTransitionEnd", r.handleTransitionEnd), i.addEventListener("transitionend", r.handleTransitionEnd);
                }), a = !0;
            }
        }, this.detachEvents = function() {
            if (a) {
                var e = r.options, t = e.triggerClass, n = e.panelClass;
                r.elements.forEach(function(e) {
                    var s = e.querySelector(".".concat(t)), i = e.querySelector(".".concat(n));
                    s.removeEventListener("click", r.handleClick), s.removeEventListener("keydown", r.handleKeydown), i.removeEventListener("webkitTransitionEnd", r.handleTransitionEnd), i.removeEventListener("transitionend", r.handleTransitionEnd);
                }), a = !1;
            }
        }, this.toggle = function(e) {
            var t = r.elements[e];
            t && r.toggleElement(t);
        }, this.open = function(e) {
            var t = r.elements[e];
            t && r.showElement(t);
        }, this.openAll = function() {
            var e = r.options, t = e.activeClass, n = e.onOpen;
            r.elements.forEach(function(e) {
                e.classList.contains(t) || (r.showElement(e, !1), n(e));
            });
        }, this.close = function(e) {
            var t = r.elements[e];
            t && r.closeElement(t);
        }, this.closeAll = function() {
            var e = r.options, t = e.activeClass, n = e.onClose;
            r.elements.forEach(function(e) {
                e.classList.contains(t) && (r.closeElement(e, !1), n(e));
            });
        }, this.destroy = function() {
            i.detachEvents(), i.openAll(), r.elements.forEach(function(e) {
                r.removeIDs(e), r.removeARIA(e), r.setTransition(e, !0);
            }), a = !0;
        }, this.update = function() {
            r.createDefinitions(), i.detachEvents(), i.attachEvents();
        };
        var c = function(e) {
            return "string" == typeof document.documentElement.style[e] ? e : (e = l(e), e = "webkit".concat(e));
        }, l = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        };
        r.init();
    };
    void 0 !== module.exports ? module.exports = n : e.Accordion = n;
}(window);

},{}],"ObqJV":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["56Vnr","4pp4s"], "4pp4s", "parcelRequire41e4")

//# sourceMappingURL=index.4de9b498.js.map
