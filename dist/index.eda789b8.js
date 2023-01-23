function e(e){return e&&e.__esModule?e.default:e}var t,n,i,s={};t=window,n=0,i=function e(t,i){var s=this,o=this,a=!1;if(Array.isArray(t))return!!t.length&&t.map((function(t){return new e(t,i)}));var r={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},i);var e="string"==typeof t;this.container=e?document.querySelector(t):t,this.createDefinitions(),o.attachEvents()},createDefinitions:function(){var e=this,t=this.options,i=t.elementClass,s=t.openOnInit,o=t.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(".".concat(i));this.elements=Array.from(o).filter((function(e){return e.classList&&e.classList.contains(i)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(t){t.classList.add("js-enabled"),e.generateIDs(t),e.setARIA(t),e.setTransition(t);var i=e.elements.indexOf(t);n++,s.includes(i)?e.showElement(t,!1):e.closeElement(t,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,i=n.duration,s=n.panelClass,o=e.querySelector(".".concat(s)),a=c("transitionDuration");o.style[a]=t?null:"".concat(i,"ms")},generateIDs:function(e){var t=this.options,i=t.triggerClass,s=t.panelClass,o=e.querySelector(".".concat(i)),a=e.querySelector(".".concat(s));e.setAttribute("id","ac-".concat(n)),o.setAttribute("id","ac-trigger-".concat(n)),a.setAttribute("id","ac-panel-".concat(n))},removeIDs:function(e){var t=this.options,n=t.triggerClass,i=t.panelClass,s=e.querySelector(".".concat(n)),o=e.querySelector(".".concat(i));e.removeAttribute("id"),s.removeAttribute("id"),o.removeAttribute("id")},setARIA:function(e){var t=this.options,i=t.ariaEnabled,s=t.triggerClass,o=t.panelClass;if(i){var a=e.querySelector(".".concat(s)),r=e.querySelector(".".concat(o));a.setAttribute("role","button"),a.setAttribute("aria-controls","ac-panel-".concat(n)),a.setAttribute("aria-disabled",!1),a.setAttribute("aria-expanded",!1),r.setAttribute("role","region"),r.setAttribute("aria-labelledby","ac-trigger-".concat(n))}},updateARIA:function(e,t){var n=t.ariaExpanded,i=t.ariaDisabled,s=this.options,o=s.ariaEnabled,a=s.triggerClass;if(o){var r=e.querySelector(".".concat(a));r.setAttribute("aria-expanded",n),r.setAttribute("aria-disabled",i)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,i=t.triggerClass,s=t.panelClass;if(n){var o=e.querySelector(".".concat(i)),a=e.querySelector(".".concat(s));o.removeAttribute("role"),o.removeAttribute("aria-controls"),o.removeAttribute("aria-disabled"),o.removeAttribute("aria-expanded"),a.removeAttribute("role"),a.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(".".concat(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,i=n.panelClass,s=n.activeClass,o=n.collapse,a=n.beforeOpen;t&&a(e);var r=e.querySelector(".".concat(i)),c=r.scrollHeight;e.classList.add(s),requestAnimationFrame((function(){requestAnimationFrame((function(){r.style.height=t?"".concat(c,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!o})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,i=n.panelClass,s=n.activeClass,o=n.beforeClose,a=e.querySelector(".".concat(i)),r=a.scrollHeight;e.classList.remove(s),t?(o(e),requestAnimationFrame((function(){a.style.height="".concat(r,"px"),requestAnimationFrame((function(){a.style.height=0}))}))):a.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,i=t.collapse,s=e.classList.contains(n);if(!s||i)return s?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,i){t.classList.contains(n)&&i!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(i,s){i.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=s,t.closeElements(),t.focus(e,i),t.toggleElement(i))}))},handleKeydown:function(e){switch(e.keyCode){case 38:return this.focusPrevElement(e);case 40:return this.focusNextElement(e);case 36:return this.focusFirstElement(e);case 35:return this.focusLastElement(e);default:return null}},handleTransitionEnd:function(e){if("height"===e.propertyName){var t=this.options,n=t.onOpen,i=t.onClose,s=e.currentTarget,o=parseInt(s.style.height),a=this.elements.find((function(e){return e.contains(s)}));o>0?(s.style.height="auto",n(a)):i(a)}}};this.attachEvents=function(){if(!a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.handleClick=r.handleClick.bind(r),r.handleKeydown=r.handleKeydown.bind(r),r.handleTransitionEnd=r.handleTransitionEnd.bind(r),r.elements.forEach((function(e){var i=e.querySelector(".".concat(t)),s=e.querySelector(".".concat(n));i.addEventListener("click",r.handleClick),i.addEventListener("keydown",r.handleKeydown),s.addEventListener("webkitTransitionEnd",r.handleTransitionEnd),s.addEventListener("transitionend",r.handleTransitionEnd)})),a=!0}},this.detachEvents=function(){if(a){var e=r.options,t=e.triggerClass,n=e.panelClass;r.elements.forEach((function(e){var i=e.querySelector(".".concat(t)),s=e.querySelector(".".concat(n));i.removeEventListener("click",r.handleClick),i.removeEventListener("keydown",r.handleKeydown),s.removeEventListener("webkitTransitionEnd",r.handleTransitionEnd),s.removeEventListener("transitionend",r.handleTransitionEnd)})),a=!1}},this.toggle=function(e){var t=r.elements[e];t&&r.toggleElement(t)},this.open=function(e){var t=r.elements[e];t&&r.showElement(t)},this.openAll=function(){var e=r.options,t=e.activeClass,n=e.onOpen;r.elements.forEach((function(e){e.classList.contains(t)||(r.showElement(e,!1),n(e))}))},this.close=function(e){var t=r.elements[e];t&&r.closeElement(t)},this.closeAll=function(){var e=r.options,t=e.activeClass,n=e.onClose;r.elements.forEach((function(e){e.classList.contains(t)&&(r.closeElement(e,!1),n(e))}))},this.destroy=function(){s.detachEvents(),s.openAll(),r.elements.forEach((function(e){r.removeIDs(e),r.removeARIA(e),r.setTransition(e,!0)})),a=!0},this.update=function(){r.createDefinitions(),s.detachEvents(),s.attachEvents()};var c=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=l(e),e="webkit".concat(e))},l=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};r.init()},void 0!==s?s=i:t.Accordion=i;new Swiper(".education__swipper",{loop:!0,slidesPerView:3,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},effect:"coverflow",coverflowEffect:{rotate:50,slideShadows:!1}});new(e(s))(".accordion-container").open(0);const o=new Swiper(".modal__swiper",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),a=document.querySelectorAll(".advantages__buttom-item"),r=document.querySelector(".modal"),c=document.querySelector(".modal__swiper");document.querySelector(".modal__swiper-next");a.forEach((e=>{e.addEventListener("click",(()=>{r.classList.add("vissual"),c.classList.add("vissual");let t=Number(e.dataset.slide);console.log(t),function(e,t){e.slideTo(t-1)}(o,t)}))})),c.addEventListener("click",(e=>{e._isClickWithinModal=!0})),r.addEventListener("click",(e=>{e._isClickWithinModal||(r.classList.remove("vissual"),c.classList.remove("vissual"))}));const l=document.querySelectorAll('a[href*="#"]');for(let e of l)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}));