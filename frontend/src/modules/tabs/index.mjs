export let execPolyfill = () => {
  if (!!!window.customElements) {
    // CustomElementsV1.min.js v1 polyfill from https://github.com/webcomponents/webcomponentsjs/tree/v1/src/CustomElements/v1.
    /*
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    'use strict';(function(){function q(a){return l.test(a)&&-1===r.indexOf(a)}function e(){this.a=new Map;this.l=new Map;this.o=new Map;this.m=new Set;this.D=new MutationObserver(this.F.bind(this));this.f=null;this.L=!0;this.h=!1;this.g(document)}var g=document,f=window,r="annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),l=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/;e.prototype={J:function(a,b){function c(a){var b=m[a];if(void 0!==b&&
        "function"!==typeof b)throw Error(d+" '"+a+"' is not a Function");return b}a=a.toString().toLowerCase();if("function"!==typeof b)throw new TypeError("constructor must be a Constructor");if(!q(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.has(a))throw Error("An element with name '"+a+"' is already defined");if(this.l.has(b))throw Error("Definition failed for '"+a+"': The constructor is already used.");var d=a,m=b.prototype;if("object"!==typeof m)throw new TypeError("Definition failed for '"+
        a+"': constructor.prototype must be an object");var e=c("connectedCallback"),f=c("disconnectedCallback"),h=c("attributeChangedCallback");this.a.set(d,{name:a,localName:d,constructor:b,w:e,A:f,v:h,K:b.observedAttributes||[]});this.l.set(b,d);this.b(g.childNodes);if(e=this.o.get(d))e.resolve(void 0),this.o.delete(d)},get:function(a){return(a=this.a.get(a))?a.constructor:void 0},M:function(a){if(!l.test(a))return Promise.reject(new SyntaxError("The element name '"+a+"' is not valid."));if(this.a.has(a))return Promise.resolve();
        var b={B:null};b.B=new Promise(function(a){b.resolve=a});this.o.set(a,b);return b.B},C:function(){this.h&&(console.warn("flush!!!"),this.m.forEach(function(a){this.s(a.takeRecords())},this))},H:function(a){this.f=a},g:function(a){a.c=new MutationObserver(this.s.bind(this));a.c.observe(a,{childList:!0,subtree:!0});this.h&&this.m.add(a.c)},I:function(a){a.c&&(a.c.disconnect(),a.c=null,this.h&&this.m.delete(a.c))},s:function(a){for(var b=0;b<a.length;b++){var c=a[b];"childList"===c.type&&(this.b(c.addedNodes),
        this.G(c.removedNodes))}},b:function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType===Node.ELEMENT_NODE){this.I(c);c=g.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,null,!1);do{var d=c.currentNode,e=this.a.get(d.localName);e&&(d.j||this.u(d,e,!0),d.j&&!d.i&&(d.i=!0,e&&e.w&&e.w.call(d)));d.shadowRoot&&this.b(d.shadowRoot.childNodes);if("LINK"===d.tagName){var f=function(){var a=d;return function(){a.removeEventListener("load",f);this.g(a.import);this.b(a.import.childNodes)}.bind(this)}.call(this);
        d.import?f():d.addEventListener("load",f)}}while(c.nextNode())}}},G:function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType===Node.ELEMENT_NODE){this.g(c);c=g.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,null,!1);do{var d=c.currentNode;if(d.j&&d.i){d.i=!1;var e=this.a.get(d.localName);e&&e.A&&e.A.call(d)}}while(c.nextNode())}}},u:function(a,b,c){a.__proto__=b.constructor.prototype;c&&(this.H(a),a.j=!0,new b.constructor,console.assert(null==this.f));c=b.K;if(b.v&&0<c.length)for(this.D.observe(a,
        {attributes:!0,attributeOldValue:!0,attributeFilter:c}),b=0;b<c.length;b++){var d=c[b];if(a.hasAttribute(d)){var e=a.getAttribute(d);a.v(d,null,e)}}},F:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("attributes"===c.type){var d=c.attributeName,e=c.oldValue,f=c.target,g=f.getAttribute(d);f.attributeChangedCallback(d,e,g,c.attributeNamespace)}}}};window.CustomElementsRegistry=e;e.prototype.define=e.prototype.J;e.prototype.get=e.prototype.get;e.prototype.whenDefined=e.prototype.M;e.prototype.flush=
      e.prototype.C;e.prototype.polyfilled=e.prototype.L;e.prototype.enableFlush=e.prototype.h;var h=f.HTMLElement;f.HTMLElement=function(){var a=f.customElements;if(a.f){var b=a.f;a.f=null;return b}if(this.constructor)return a=a.l.get(this.constructor),g.b(a,!1);throw Error("unknown constructor. Did you call customElements.define()?");};f.HTMLElement.prototype=Object.create(h.prototype);Object.defineProperty(f.HTMLElement.prototype,"constructor",{value:f.HTMLElement});for(var h="Button Canvas Data Head Mod TableCell TableCol Anchor Area Base Body BR DataList Details Dialog Div DList Embed FieldSet Form Heading HR Html IFrame Image Input Keygen Label Legend LI Link Map Media Menu MenuItem Meta Meter Object OList OptGroup Option Output Paragraph Param Picture Pre Progress Quote Script Select Slot Source Span Style TableCaption Table TableRow TableSection Template TextArea Time Title Track UList Unknown".split(" "),
      k=0;k<h.length;k++){var n=window["HTML"+h[k]+"Element"];n&&(n.prototype.__proto__=f.HTMLElement.prototype)}var t=g.createElement;g.b=function(a,b){var c=f.customElements,d=t.call(g,a),e=c.a.get(a.toLowerCase());e&&c.u(d,e,b);c.g(d);return d};g.createElement=function(a){return g.b(a,!0)};var u=g.createElementNS;g.createElementNS=function(a,b){return"http://www.w3.org/1999/xhtml"===a?g.createElement(b):u.call(document,a,b)};var p=Element.prototype.attachShadow;p&&Object.defineProperty(Element.prototype,
      "attachShadow",{value:function(a){a=p.call(this,a);f.customElements.g(a);return a}});window.customElements=new e})();
  }
}

export let checkCustom = () => {
  if (!(window.customElements && document.body.attachShadow)) {
    document.querySelector('venus-tabs').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
  }
}

export default async () => {
  let selected_ = null;
  customElements.define('venus-tabs', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: var(--width, 25%);
          font-family: var(--font-family, 'Roboto Slab');
          contain: content;
          margin: 0;
          min-width: var(--min-width, 20.1vw);
          max-width: var(--max-width, 20.1vw);
        }

        :host(section) {
            padding: 1vw;
        }

        :host([background]) {
          background: var(--background-color, #9E9E9E);
          border-radius: var(--border-radius, 0.2vw);
          padding: var(--padding, 0.2vw);
        }

        #tabsSlot {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        #panels {
          box-shadow: var(--box-shadow, 0 2px 2px rgba(0, 0, 0, .3));
          background: var(--background, white);
          border-radius: var(--border-radius, 0.2vw);
          padding: var(--padding, 0.2vw);
          height: var(--height, auto);
          overflow: auto;
        }

        #tabs {
          display: inline-flex;
          -webkit-user-select: none;
          user-select: none;
        }

        #tabs slot {
          display: inline-flex; /* Safari bug. Treats <slot> as a parent */

        }
        /* Safari does not support #id prefixes on ::slotted
           See https://bugs.webkit.org/show_bug.cgi?id=160538 */
        #tabs ::slotted(*) {
          font: var(--tabs-font, 400 1.2vw/0.4vw 'Roboto');
          padding: 1vw 0.8vw;
          margin: 0;
          text-align: center;
          width: var(--tabs-width, 5vw);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          background: linear-gradient(#fafafa, #eee);
          border: none; /* if the user users a <button> */
        }

        #tabs ::slotted(*):last-child {
            margin: 0;
        }

        #tabs ::slotted([aria-selected="true"]) {
          font-weight: 600;
          background: white;
          box-shadow: none;
        }

        #tabs ::slotted(:focus) {
          z-index: 1; /* make sure focus ring doesn't get buried */
        }

        #panels ::slotted([aria-hidden="true"]) {
          display: none;
        }

        #panels ::slotted([aria-hidden="false"]) {
          padding: 1vw;
        }
      </style>
      <div id="tabs">
        <slot id="tabsSlot" name="title"></slot>
      </div>
      <div id="panels">
        <slot id="panelsSlot"></slot>
      </div>
    `;
    }

    get selected() {
      return selected_;
    }

    set selected(idx) {
      selected_ = idx;
      this._selectTab(idx);

      // Updated the element's selected attribute value when
      // backing property changes.
      this.setAttribute('selected', idx);
    }

    connectedCallback() {
      this.setAttribute('role', 'tablist');

      const tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
      const panelsSlot = this.shadowRoot.querySelector('#panelsSlot');

      this.tabs = tabsSlot.assignedNodes({flatten: true});
      this.panels = panelsSlot.assignedNodes({flatten: true}).filter(el => {
        return el.nodeType === Node.ELEMENT_NODE;
      });

      // Add aria role="tabpanel" to each content panel.
      for (let [i, panel] of this.panels.entries()) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', 0);
      }

      // Save refer to we can remove listeners later.
      this._boundOnTitleClick = this._onTitleClick.bind(this);
      this._boundOnKeyDown = this._onKeyDown.bind(this);

      tabsSlot.addEventListener('click', this._boundOnTitleClick);
      tabsSlot.addEventListener('keydown', this._boundOnKeyDown);

      this.selected = this._findFirstSelectedTab() || 0;
    }

    disconnectedCallback() {
      const tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
      tabsSlot.removeEventListener('click', this._boundOnTitleClick);
      tabsSlot.removeEventListener('keydown', this._boundOnKeyDown);
    }

    _onTitleClick(e) {
      if (e.target.slot === 'title') {
        this.selected = this.tabs.indexOf(e.target);
        e.target.focus();
      }
    }

    _onKeyDown(e) {
      switch (e.code) {
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          var idx = this.selected - 1;
          idx = idx < 0 ? this.tabs.length - 1 : idx;
          this.tabs[idx].click();
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          var idx = this.selected + 1;
          this.tabs[idx % this.tabs.length].click();
          break;
        default:
          break;
      }
    }

    _findFirstSelectedTab() {
      let selectedIdx;
      for (let [i, tab] of this.tabs.entries()) {
        tab.setAttribute('role', 'tab');

        // Allow users to declaratively select a tab
        // Highlight last tab which has the selected attribute.
        if (tab.hasAttribute('selected')) {
          selectedIdx = i;
        }
      }
      return selectedIdx;
    }

    _selectTab(idx = null) {
      for (let i = 0, tab; tab = this.tabs[i]; ++i) {
        let select = i === idx;
        tab.setAttribute('tabindex', select ? 0 : -1);
        tab.setAttribute('aria-selected', select);
        this.panels[i].setAttribute('aria-hidden', !select);
      }
    }
  })
}

