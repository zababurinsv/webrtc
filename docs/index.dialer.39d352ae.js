// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2rAXy":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"fNmB3"}],"fNmB3":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"1CJiQ"}],"1CJiQ":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"luVIP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "60b3b43d39d352ae";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cXIbU":[function(require,module,exports) {
var global = arguments[3];
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $parcel$global = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {
};
var $parcel$modules = {
};
var $parcel$inits = {
};
var parcelRequire = $parcel$global["parcelRequiree565"];
if (parcelRequire == null) {
    parcelRequire = function(id) {
        if (id in $parcel$modules) return $parcel$modules[id].exports;
        if (id in $parcel$inits) {
            var init = $parcel$inits[id];
            delete $parcel$inits[id];
            var module = {
                id: id,
                exports: {
                }
            };
            $parcel$modules[id] = module;
            init.call(module.exports, module, module.exports);
            return module.exports;
        }
        var err = new Error("Cannot find module '" + id + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
    };
    parcelRequire.register = function register(id, init) {
        $parcel$inits[id] = init;
    };
    $parcel$global["parcelRequiree565"] = parcelRequire;
}
parcelRequire.register("4TeMe", function(module, exports) {
    var $kCpuf = parcelRequire("kCpuf");
    if (!Object.keys) Object.keys = function(o) {
        if (o !== Object(o)) throw new TypeError('Object.keys called on a non-object');
        var k = [];
        var p;
        for(p in o)if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
        return k;
    };
    customElements.define('page-external', class extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.innerHTML = `\n<div id="external"><slot name="jason"></slot></div>\n<style>\n:host(.hidden){\ndisplay: none;\n}\n:host(img) {\n  width: 100%;\n}\ndiv#external{\n    border-radius: 0.5vw;\n    height:100%;\n    width: 100%;\n}\n</style>`;
            if (this.dataset.height) this.style.height = `${this.dataset.height}vh`;
            else this.style.height = "auto";
            if (this.dataset.width) this.style.width = `${this.dataset.width}vw`;
            else this.style.width = "100%";
            (async (obj)=>{
                obj['function'] = {
                };
                obj['function']['create'] = function($root) {
                    return new Promise(function(resolve, reject) {
                        /// /////////////////////
                        /*
                       *   {cell}
                       *
                       *   - Membrane: "The cell membrane (also known as the plasma membrane or cytoplasmic membrane) is a biological membrane that separates the interior of all cells from the outside environment"
                       *   - Gene: "The transmission of genes to an organism's offspring is the basis of the inheritance of phenotypic traits. These genes make up different DNA sequences called genotypes. Genotypes along with environmental and developmental factors determine what the phenotypes will be."
                       *   - Genotype: "Genotype is an organism's full hereditary information."
                       *   - Phenotype: "Phenotype is an organism's actual observed properties, such as morphology, development, or behavior."
                       *   - Nucleus: "The nucleus maintains the integrity of genes and controls the activities of the cell by regulating gene expression???the nucleus is, therefore, the control center of the cell."
                       */ var Membrane = {
                            /*
                                 *  [Membrane] The Shell
                                 *
                                 *  "The cell membrane (also known as the plasma membrane or cytoplasmic membrane) is a biological membrane that separates the interior of all cells from the outside environment"
                                 *    - https://en.wikipedia.org/wiki/Cell_membrane
                                 *
                                 *  The Membrane module determines how a cell is inserted into the DOM. There are two ways: Replacing an existing node with cell (inject), or Creating an additional cell node (add).
                                 *   - inject(): attempts to inject cell into an existing host node
                                 *   - add(): creates a new cell node and adds it to the DOM without touching other nodes
                                 */ inject: function($host, gene, namespace, replace) {
                                // console.assert(false, 'inject')
                                /*
                                       *  Membrane.inject() : Inject cell into an existing node
                                       *
                                       *  @param {Object} $host - existing host node to inject into
                                       *  @param {Object} gene - gene object
                                       *  @param {String} namespace - for handling namespaced elements such as SVG https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
                                       *  @param {Boolean} replace - if true, create a node and replace it with the host node. Used for manual instantiation
                                       */ var $node = null;
                                var $replacement;
                                // console.log('-----$root.getElementById------>', $root.querySelector(`#${gene.id}`))
                                // console.assert(false, $host)
                                if (replace && $host) {
                                    // 1. Inject into an existing node ($host) by explicit instantiation
                                    $replacement = Phenotype.$type(gene, namespace);
                                    if (gene.hasOwnProperty('$cell')) {
                                        $node = $host;
                                        if ($node.parentNode) $node.parentNode.replaceChild($replacement, $node);
                                    }
                                    $node = $replacement;
                                } else if (gene.$type && (gene.$type === 'head' || gene.$type === 'body') && $root.getElementsByTagName(gene.$type)) $node = $root.getElementsByTagName(gene.$type)[0];
                                else if (gene.id && $root.querySelector(`#${gene.id}`)) {
                                    // 3. Inject into an existing nodes by ID
                                    $node = $root.querySelector(`#${gene.id}`);
                                    if ($node.nodeName.toLowerCase() !== (gene.$type || 'div')) {
                                        $replacement = Phenotype.$type(gene, namespace);
                                        $node.parentNode.replaceChild($replacement, $node);
                                        $node = $replacement;
                                    }
                                }
                                if ($node && !$node.Meta) $node.Meta = {
                                };
                                return $node;
                            },
                            add: function($parent, gene, index, namespace) {
                                // console.assert(false, 'add')
                                /*
                                       *  Membrane.add() : Adds a new cell node into the DOM tree
                                       *
                                       *  @param $parent - The parent node to which the new cell node will be added
                                       *  @param gene - gene object
                                       *  @param index - the position within the parent's childNodes array to which this cell node will be added. Not used in the initial render but used for subsequent renders based on the diff logic
                                       *  @param namespace - namespace URL for namespaced elements such as SVG
                                       */ var $node = Phenotype.$type(gene, namespace);
                                if (index !== null && index !== undefined && $parent.childNodes && $parent.childNodes[index]) $parent.insertBefore($node, $parent.childNodes[index]);
                                else $parent.appendChild($node);
                                return $node;
                            },
                            build: function($parent, gene, index, namespace, replace) {
                                /*
                                       * Membrane.build() : The main builder function that interfaces with Membrane.inject() and Membrane.add().
                                       */ // 1. Attempt to inject into an existing node
                                var $existing = Membrane.inject($parent, gene, namespace, replace);
                                if ($existing) return $existing;
                                else return Membrane.add($parent, gene, index, namespace);
                            }
                        };
                        var Genotype = {
                            /*
                                 *  [Genotype] Internal Storage of Genes
                                 *
                                 *  "Genotype is an organism's full hereditary information."
                                 *    - https://en.wikipedia.org/wiki/Genotype
                                 *
                                 *   The Genotype module is an internal storage for all the variables required to construct a cell node (attributes, $variables, and _variables)
                                 *   When you set a variable on a cell (for example: this._index=1), it's actually stored under the node's Genotype instead of directly on the node itself.
                                 *
                                 *   - set(): a low-level function to simply set a key/value pair on the Genotype object, used by update() and build()
                                 *   - update(): updates a key/value pair from the genotype and schedules a phenotype (view) update event to be processed on the next tick
                                 *   - build(): builds a fresh genotype object from a gene object
                                 */ set: function($node, key, val) {
                                if ([
                                    '$init'
                                ].indexOf(key) === -1) $node.Genotype[key] = Nucleus.bind($node, val);
                                else {
                                    // colorLog('~~~~~~~~~~~~~~Genotype~set~~~~~~~~~~~~~~~~~~~', 'yellow', val)
                                    val.snapshot = val // snapshot of $init
                                    ;
                                    $node.Genotype[key] = val;
                                }
                            },
                            update: function($node, key, val) {
                                Nucleus.queue($node, key, 'w');
                                Genotype.set($node, key, val);
                            },
                            build: function($node, gene, inheritance) {
                                $node.Genotype = {
                                };
                                $node.Inheritance = inheritance;
                                for(var key in gene)Genotype.set($node, key, gene[key]);
                            },
                            infect: function(gene) {
                                var virus = gene.$virus;
                                if (!virus) return gene;
                                var mutations = Array.isArray(virus) ? virus : [
                                    virus
                                ];
                                delete gene.$virus;
                                return mutations.reduce(function(g, mutate) {
                                    var mutated = mutate(g);
                                    if (mutated === null || typeof mutated !== 'object') throw new Error('$virus mutations must return an object');
                                    mutated.$type = mutated.$type || 'div';
                                    return mutated;
                                }, gene);
                            }
                        };
                        var Gene = {
                            /*
                                 *  [Gene] Gene manipulation/diff functions
                                 *
                                 *  "The transmission of genes to an organism's offspring is the basis of the inheritance of phenotypic traits. These genes make up different DNA sequences called genotypes. Genotypes along with environmental and developmental factors determine what the phenotypes will be."
                                 *    - https://en.wikipedia.org/wiki/Gene
                                 *
                                 *  The Gene module is a collection of utility functions used for comparing gene objects to determine if a node needs to be replaced or left alone when there's an update.
                                 *   - freeze(): stringifies a Javascript object snapshot for comparison
                                 *   - LCS(): Longest Common Subsequence algorithm https://en.wikipedia.org/wiki/Longest_common_subsequence_problem
                                 *   - diff(): A diff algorithm that returns what have been added (+), and removed (-)
                                 */ freeze: function(gene) {
                                var cache = [];
                                var res = JSON.stringify(gene, function(key, val) {
                                    if (typeof val === 'function') return val.toString();
                                    if (typeof val === 'object' && val !== null) {
                                        if (cache.indexOf(val) !== -1) return '[Circular]';
                                        cache.push(val);
                                    }
                                    return val;
                                });
                                cache = null;
                                return res;
                            },
                            LCS: function(a, b) {
                                var m = a.length;
                                var n = b.length;
                                var C = [];
                                var i;
                                var j;
                                var af = [];
                                var bf = [];
                                for(i = 0; i < m; i++)af.push(Gene.freeze(a[i]));
                                for(j = 0; j < n; j++)bf.push(Gene.freeze(b[j]));
                                for(i = 0; i <= m; i++)C.push([
                                    0
                                ]);
                                for(j = 0; j < n; j++)C[0].push(0);
                                for(i = 0; i < m; i++)for(j = 0; j < n; j++)C[i + 1][j + 1] = af[i] === bf[j] ? C[i][j] + 1 : Math.max(C[i + 1][j], C[i][j + 1]);
                                return (function bt(i1, j1) {
                                    if (i1 * j1 === 0) return [];
                                    if (af[i1 - 1] === bf[j1 - 1]) return bt(i1 - 1, j1 - 1).concat([
                                        {
                                            item: a[i1 - 1],
                                            _old: i1 - 1,
                                            _new: j1 - 1
                                        }
                                    ]);
                                    return C[i1][j1 - 1] > C[i1 - 1][j1] ? bt(i1, j1 - 1) : bt(i1 - 1, j1);
                                })(m, n);
                            },
                            diff: function(_old, _new) {
                                var lcs = Gene.LCS(_old, _new);
                                var old_common = lcs.map(function(i) {
                                    return i._old;
                                });
                                var minus = _old.map(function(item, index) {
                                    return {
                                        item: item,
                                        index: index
                                    };
                                }).filter(function(item, index) {
                                    return old_common.indexOf(index) === -1;
                                });
                                var new_common = lcs.map(function(i) {
                                    return i._new;
                                });
                                var plus = _new.map(function(item, index) {
                                    return {
                                        item: item,
                                        index: index
                                    };
                                }).filter(function(item, index) {
                                    return new_common.indexOf(index) === -1;
                                });
                                return {
                                    '-': minus,
                                    '+': plus
                                };
                            }
                        };
                        var Phenotype = {
                            /*
                                 *  [Phenotype] Actual observed properties of a cell
                                 *
                                 *  "Phenotype is an organism's actual observed properties, such as morphology, development, or behavior."
                                 *    - https://en.wikipedia.org/wiki/Phenotype
                                 *
                                 *  The Phenotype module manages a cell's actual observed properties, such as textContent ($text), nodeType ($type), innerHTML ($html), childNodes ($components), and DOM attributes
                                 *
                                 *   - build(): Build phenotype from genotype
                                 *   - set(): Sets a key/value pair of phenotype
                                 *   - $type(): translates the "$type" attribute to nodeType
                                 *   - $text(): translates the "$type" attribute to textContent
                                 *   - $html(): translates the "$type" attribute to innerHTML
                                 *   - $components(): translates the "$components" attribute to childNodes
                                 *   - $init(): executes the "$init" callback function after the element has been rendered
                                 *   - $update(): executes the "$update" callback function when needed (called by Nucleus on every tick)
                                 */ build: function($node, genotype) {
                                Phenotype.$init($node);
                                for(var key in genotype)if (genotype[key] !== null && genotype[key] !== undefined) Phenotype.set($node, key, genotype[key]);
                            },
                            multiline: function(fn) {
                                return /\/\*!?(?:@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//.exec(fn.toString())[1];
                            },
                            get: function(key) {
                                return Object.getOwnPropertyDescriptor($root.HTMLElement.prototype, key) || Object.getOwnPropertyDescriptor($root.Element.prototype, key);
                            },
                            set: function($node, key, val) {
                                if (key[0] === '$') {
                                    if (key === '$type') {
                                        // recreate and rebind the node if it's different from the old one
                                        var tag = $node.tagName ? $node.tagName.toLowerCase() : 'text';
                                        if (val.toLowerCase() !== tag) {
                                            var fragment = Phenotype.$type({
                                                $type: 'fragment'
                                            });
                                            var replacement = fragment.$build($node.Genotype, $node.Inheritance, null, $node.Meta.namespace);
                                            $node.parentNode.replaceChild(replacement, $node);
                                            $node = replacement;
                                        }
                                    } else if (key === '$text') {
                                        if (typeof val === 'function') val = Phenotype.multiline(val);
                                        $node.textContent = val;
                                    } else if (key === '$html') {
                                        // colorLog('~~~~~~~~~~~~~~~Phenotype.multiline(val)~~~~~~~~~~~~~~~~~~~~', 'orange', val)
                                        if (typeof val === 'function') val = Phenotype.multiline(val);
                                        $node.innerHTML = val;
                                    } else if (key === '$components') Phenotype.$components($node, val);
                                } else if (key[0] === '_') ;
                                else if (key === 'value') $node[key] = val;
                                else if (key === 'style' && typeof val === 'object') {
                                    var CSSStyleDeclaration1 = Phenotype.get(key).get.call($node);
                                    for(var attr in val)CSSStyleDeclaration1[attr] = val[attr];
                                } else if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean') {
                                    if ($node.setAttribute) $node.setAttribute(key, val);
                                } else if (typeof val === 'function') {
                                    // For natively supported HTMLElement.prototype methods such as onclick()
                                    var prop = Phenotype.get(key);
                                    if (prop) prop.set.call($node, val);
                                }
                            },
                            $type: function(model, namespace) {
                                var meta = {
                                };
                                var $node;
                                if (model.$type === 'svg') {
                                    $node = $root.createElementNS('http://www.w3.org/2000/svg', model.$type);
                                    meta.namespace = $node.namespaceURI;
                                } else if (namespace) {
                                    $node = $root.createElementNS(namespace, model.$type);
                                    meta.namespace = $node.namespaceURI;
                                } else if (model.$type === 'fragment') $node = $root.createDocumentFragment();
                                else if (model.$type === 'text') {
                                    if (model.$text && typeof model.$text === 'function') model.$text = Phenotype.multiline(model.$text);
                                    $node = $root.createTextNode(model.$text);
                                } else $node = $root.createElement(model.$type || 'div');
                                $node.Meta = meta;
                                return $node;
                            },
                            $components: function($parent, components) {
                                if (!components) components = [];
                                var old = [].map.call($parent.childNodes, function($node) {
                                    return $node.Genotype;
                                }).filter(function(item) {
                                    return item // only compare with Cells (that have Genotype), not additional elements created by another javascript library
                                    ;
                                });
                                if (old.length > 0) {
                                    // If childNodes already exist, try to insert into a correct position.
                                    var diff = Gene.diff(old, components);
                                    diff['-'].forEach(function(item) {
                                        $parent.childNodes[item.index].Kill = true;
                                    });
                                    [].filter.call($parent.childNodes, function($node) {
                                        return $node.Kill;
                                    }).forEach(function($node) {
                                        $parent.removeChild($node);
                                    });
                                    diff['+'].forEach(function(item) {
                                        var inheritance = $parent.Inheritance;
                                        for(var key in $parent.Genotype)if (key[0] === '_') inheritance = inheritance.concat([
                                            key
                                        ]);
                                        // colorLog('~~~~~~~~~$parent.$build~~~item.item~~~~~~~~~~', 'red', item.item)
                                        // colorLog('~~~~~~~~~$parent.$build~~~item.index~~~~~~~~~~', 'red', item.index)
                                        // colorLog('~~~~~~~~~$parent.$build~~~$parent.Meta.namespace~~~~~~~~~~', 'red', $parent.Meta.namespace)
                                        $parent.$build(item.item, inheritance, item.index, $parent.Meta.namespace);
                                        $parent.$components[item.index] = $parent.childNodes[item.index].Genotype;
                                    });
                                } else {
                                    // first time construction => no childNodes => build a fragment and insert at once
                                    var $fragment = Phenotype.$type({
                                        $type: 'fragment'
                                    });
                                    var inheritance = $parent.Inheritance;
                                    for(var key in $parent.Genotype)if (key[0] === '_') inheritance = inheritance.concat([
                                        key
                                    ]);
                                    while($parent.firstChild)$parent.removeChild($parent.firstChild);
                                    // remove empty text nodes
                                    components.forEach(function(component) {
                                        // colorLog('~~~~~~~~~$fragment.$build~~~component~~~~~~~~~~', 'red', component)
                                        // colorLog('~~~~~~~~~$fragment.$build~~~inheritance~~~~~~~~~~', 'red', inheritance)
                                        // colorLog('~~~~~~~~~$fragment.$build~~~$parent.Meta.namespace~~~~~~~~~~', 'red', $parent.Meta.namespace)
                                        $fragment.$build(component, inheritance, null, $parent.Meta.namespace);
                                    });
                                    // colorLog('~~~~~~~~~$parent.appendChild~~~~~~~$fragment~~~', 'green', $fragment)
                                    $parent.appendChild($fragment);
                                    $parent.$components = [].map.call($parent.childNodes, function($node) {
                                        // colorLog('~~~~~~~~~$node.Genotype~~~~~~~~~~', 'grey', $node.Genotype)
                                        return $node.Genotype;
                                    });
                                }
                            },
                            $init: function($node) {
                                Nucleus.tick.call($root, function() {
                                    // colorLog('~~~~~~~~~$node.Genotype.$init~~~~~~~$node~~~', 'grey', $node.Genotype.$init)
                                    if ($node.Genotype && $node.Genotype.$init) Nucleus.bind($node, $node.Genotype.$init)();
                                });
                            },
                            $update: function($node) {
                                if ($node.parentNode && !$node.Meta.$updated && $node.$update) {
                                    $node.Meta.$updated = true;
                                    $node.$update();
                                    for(var key in $node.Dirty)Phenotype.set($node, key, $node.Genotype[key]);
                                    $node.Meta.$updated = false;
                                    $node.Dirty = null;
                                }
                            }
                        };
                        var Nucleus = {
                            /*
                                 *  [Nucleus] Handles the cell cycle
                                 *
                                 *  "The nucleus maintains the integrity of genes and controls the activities of the cell by regulating gene expression???the nucleus is, therefore, the control center of the cell."
                                 *    - https://en.wikipedia.org/wiki/Cell_nucleus
                                 *
                                 *  The Nucleus module creates a proxy that lets Cell interface with the outside world. Its main job is to automatically trigger phenotype updates based on genotype updates
                                 *
                                 *   - set(): Starts listening to a single attribute.
                                 *   - build(): Starts listening to all attributes defined on the gene
                                 *   - bind(): Creates a wrapper function that executes the original function, and then automatically updates the Phenotype if necessary.
                                 *   - queue(): A function that queues up all potential genotype mutation events so that they can be batch-processed in a single tick.
                                 */ tick: $root.requestAnimationFrame || $root.webkitRequestAnimationFrame || $root.mozRequestAnimationFrame || $root.msRequestAnimationFrame || function(cb) {
                                // console.dir($root)
                                //  console.assert(false, $root)
                                return $root.setTimeout(cb, 1000 / 60);
                            },
                            set: function($node, key) {
                                // Object.defineProperty is used for overriding the default getter and setter behaviors.
                                try {
                                    Object.defineProperty($node, key, {
                                        configurable: true,
                                        get: function() {
                                            // 1. get() overrides the node's getter to create an illusion that users are directly accessing the attribute on the node (In reality they are accessing the genotype via nucleus)
                                            // 2. get() also queues up the accessed variable so it can potentially trigger a phenotype update in case there's been a mutation
                                            if (key[0] === '$' || key[0] === '_') {
                                                if (key in $node.Genotype) {
                                                    Nucleus.queue($node, key, 'r');
                                                    return $node.Genotype[key];
                                                } else if (key[0] === '_') {
                                                    // Context Inheritance: If a _variable cannot be found on the current node, propagate upwards until we find a node with the attribute.
                                                    var $current = $node;
                                                    while($current = $current.parentNode)if ($current && $current.Genotype && key in $current.Genotype) {
                                                        Nucleus.queue($current, key, 'r');
                                                        return $current.Genotype[key];
                                                    }
                                                } else return null;
                                            } else {
                                                // DOM Attributes.
                                                if (key === 'value') return Object.getOwnPropertyDescriptor(Object.getPrototypeOf($node), key).get.call($node);
                                                else if (key === 'style') return Phenotype.get(key).get.call($node);
                                                else if (key in $node.Genotype) return $node.Genotype[key];
                                                else // For example, there are many DOM attributes such as "tagName" that come with the node by default.
                                                // These are not something we directly define on a gene object, but we still need to be able to access them..
                                                // In this case we just use the native HTMLElement.prototype accessor
                                                return Phenotype.get(key).get.call($node);
                                            }
                                        },
                                        set: function(val) {
                                            // set() overrides the node's setter to create an illusion that users are directly setting an attribute on the node (In reality it's proxied to set the genotype value instead)
                                            // set() also queues up the mutated variable so it can trigger a phenotype update once the current call stack becomes empty
                                            // 0. Context Inheritance: If a _variable cannot be found on the current node, cell propagates upwards until it finds a node with the attribute.
                                            var $current = $node;
                                            if (!(key in $node.Genotype) && key[0] === '_') while($current = $current.parentNode){
                                                if ($current && $current.Genotype && key in $current.Genotype) break;
                                            }
                                            // 1. Set genotype by default
                                            Genotype.update($current, key, val);
                                            // 2. DOM attribute handling (anything that doesn't start with $ or _)
                                            if (key[0] !== '$' && key[0] !== '_') {
                                                if (key === 'value') return Object.getOwnPropertyDescriptor(Object.getPrototypeOf($node), key).set.call($node, val);
                                                else if (key === 'style' && typeof val === 'object') Phenotype.get(key).set.call($node, val);
                                                else if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean') $node.setAttribute(key, val);
                                                else if (typeof val === 'function') Phenotype.get(key).set.call($node, val);
                                            }
                                        }
                                    });
                                } catch (e) {
                                }
                            },
                            build: function($node) {
                                // 1. The special attributes "$type", "$text", "$html", "$components" are tracked by default even if not manually defined
                                [
                                    '$type',
                                    '$text',
                                    '$html',
                                    '$components'
                                ].forEach(function(key) {
                                    if (!(key in $node.Genotype)) Nucleus.set($node, key);
                                });
                                // 2. Used for context inheritance. We want to track not just the attributes directly defined on the current node but all the attributes inherited from ancestors.
                                if ($node.Inheritance) $node.Inheritance.forEach(function(key) {
                                    Nucleus.set($node, key);
                                });
                                // 3. Track all keys defined on the gene object
                                for(var key in $node.Genotype)Nucleus.set($node, key);
                            },
                            _queue: [],
                            bind: function($node, v) {
                                // Binding an attribute to the nucleus.
                                // 1. No difference if the attribute is just a regular variable
                                // 2. If the attribute is a function, we create a wrapper function that first executes the original function, and then triggers a phenotype update depending on the queue condition
                                if (typeof v === 'function') {
                                    var fun = function() {
                                        // In the following code, everything inside Nucleus.tick.call is executed AFTER the last line--v.apply($node, arguments)--because it gets added to the event loop and waits until the next render cycle.
                                        // 1. Schedule phenotype update by wrapping them in a single tick (requestAnimationFrame)
                                        Nucleus.tick.call($root, function() {
                                            // At this point, Nucleus._queue contains all the nodes that have been touched since the last tick.
                                            // We process each node one by one to determine whether to update phenotype and whether to auto-trigger $update().
                                            // Note: If we're in a middle of multiple nested function calls (fnA calls fnB calls fnC), the queue will be processed from the first function (fnA) only,
                                            // This is because the Nucleus._queue will have been drained empty by the time the second function (fnB)'s Nucleus.tick.call reaches this point.
                                            Nucleus._queue.forEach(function($node1) {
                                                var needs_update = false;
                                                /*
                                                           *  At this point, $node.Dirty looks something like this:
                                                           *  { "_index": 1, "_items": [0,1,2]  }
                                                           *
                                                           *  We go through each and compare with the latest version of the Genotype.
                                                           *  If there's been a change we set the Phenotype and mark it as "needs_update"
                                                           */ for(var key in $node1.Dirty)if (Gene.freeze($node1.Genotype[key]) !== $node1.Dirty[key]) {
                                                    Phenotype.set($node1, key, $node1.Genotype[key]);
                                                    if (key[0] === '_') needs_update = true;
                                                // If any of the _ variables have changed, need to call $update
                                                }
                                                if (needs_update && '$update' in $node1.Genotype && typeof $node1.Genotype.$update === 'function') Phenotype.$update($node1);
                                                else $node1.Dirty = null;
                                            });
                                            // Remove the $node from the queue
                                            var index = Nucleus._queue.indexOf($node);
                                            if (index !== -1) Nucleus._queue.splice(index, 1);
                                        });
                                        // 2. Run the actual function, which will modify the queue
                                        return v.apply($node, arguments);
                                    };
                                    fun.snapshot = v;
                                    return fun;
                                } else return v;
                            },
                            queue: function($node, key, mode) {
                                var val = $node.Genotype[key];
                                if (mode === 'r') {
                                    /*
                                             * Read mode access => the key was queued as a result of a "get()", which doesn't normally mutate the variable.
                                             *
                                             * But we still need to take into account the cases where its descendants get mutated, which happens when we're dealing with an array or an object. For example:
                                             *  - this._items.push(item);
                                             *  - this._module.name="cell";
                                             *
                                             * In these cases we didn't directly mutate the variables (Direct mutations would have been something like: this._items=[1,2]; or this._module={name: "cell"};)
                                             * but each variable's value *did* change as a result of each expression. To make sure we don't miss these types, we queue them up with a "r" (read) type.
                                             * But we only need to do this for objects and arrays. (not string, number, etc. because they can't have descendants)
                                             */ if (typeof val !== 'object' && !Array.isArray(val)) return;
                                }
                                if (Nucleus._queue.indexOf($node) === -1) Nucleus._queue.push($node);
                                if (!$node.Dirty) $node.Dirty = {
                                };
                                if (!(key in $node.Dirty)) /*
                                             * Caches the original gene under $node.Dirty when a key is touched.
                                             *
                                             * {
                                             *   Dirty: {
                                             *     "_index": 1,
                                             *     "_items": [0,1,2]
                                             *   }
                                             * }
                                             *
                                             */ $node.Dirty[key] = Gene.freeze($node.Genotype[key]) // stores the original value under "Dirty"
                                ;
                            }
                        };
                        var God = {
                            /*
                                 * The Creator
                                 * The only purpose of this module is to create cells and get out of the way.
                                 */ detect: function($context) {
                                $context['input'] = $context['this'];
                                // takes a context, returns all the objects containing thew '$cell' key
                                if ($context === undefined) $context = this;
                                return Object.keys($context['input']).filter(function(k) {
                                    try {
                                        if (/webkitStorageInfo|webkitIndexedDB/.test(k) || $context['input'][k] instanceof $context['input'].Element) return false // Only look for plain javascript object
                                        ;
                                        return $context['input'][k] && Object.prototype.hasOwnProperty.call($context['input'][k], '$cell');
                                    } catch (e) {
                                        return false;
                                    }
                                }).map(function(k) {
                                    return $context['input'][k];
                                });
                            },
                            plan: function($context) {
                                // console.log('-------------->>>>>', $context)
                                // Tick($context, 'plan', $context['tick']['God']['plan']++, 0, 'goodPlan')
                                //   .then((obj) => {
                                //     console.log('tick plan ->', obj)
                                //     console.assert(true, obj)
                                //   })
                                // Prepare the DOM for cell creation by adding prototype methods to nodes.
                                // As a result, all HTML elements become autonomous.
                                if ($context['input'] === undefined) $context['input'] = $root['this'];
                                else $root = $context['input'];
                                $context['input'].DocumentFragment.prototype.$build = $context['input'].Element.prototype.$build = function(healthy_gene, inheritance, index, namespace, replace) {
                                    var gene = $context['cell']['Genotype'].infect(healthy_gene);
                                    var $node = $context['cell']['Membrane'].build(this, gene, index, namespace, replace);
                                    $context['cell']['Genotype'].build($node, gene, inheritance || [], index);
                                    $context['cell']['Nucleus'].build($node);
                                    $context['cell']['Phenotype'].build($node, $node.Genotype);
                                    return $node;
                                };
                                $context['input'].DocumentFragment.prototype.$cell = $context['input'].Element.prototype.$cell = function(gene, options) {
                                    return this.$build(gene, [], null, options && options.namespace || null, true);
                                };
                                $context['input'].DocumentFragment.prototype.$snapshot = $context['input'].Element.prototype.$snapshot = function() {
                                    var json = JSON.stringify(this.Genotype, function(k, v) {
                                        if (typeof v === 'function' && v.snapshot) return '(' + v.snapshot.toString() + ')';
                                        return v;
                                    });
                                    return JSON.parse(json, function(k, v) {
                                        if (typeof v === 'string' && v.indexOf('function') >= 0) return eval(v);
                                        return v;
                                    });
                                };
                                // console.assert(false, obj['this'])
                                // console.assert(false, $root)
                                if ($root.NodeList && !$root.NodeList.prototype.forEach) $root.NodeList.prototype.forEach = Array.prototype.forEach // NodeList.forEach override polyfill
                                ;
                            },
                            create: function($context) {
                                // console.dir($context)
                                // console.assert(false, $context['this'])
                                // obj['tick'](obj, 'style',0, 0, $context)
                                // Automatic cell generation based on declarative rules
                                return $context['cell']['God'].detect($context).map(function(gene) {
                                    // console.assert(false, $context['input'])
                                    return $context['input'].$build(gene, []);
                                });
                            }
                        };
                        // For testing
                        // if (typeof exports !== 'undefined') {
                        //   let x = {
                        //     Phenotype: Phenotype,
                        //     Genotype: Genotype,
                        //     Nucleus: Nucleus,
                        //     Gene: Gene,
                        //     Membrane: Membrane,
                        //     God: God,
                        //     plan: God.plan.bind(God),
                        //     create: God.create.bind(God)
                        //   }
                        //   if (typeof module !== 'undefined' && module.exports) { exports = module.exports = x }
                        //   exports = x
                        // } else {
                        // console.assert(true, $root)
                        $root['input'] = $root['this'];
                        $root['tick'] = {
                        };
                        $root['tick']['Phenotype'] = {
                        };
                        $root['tick']['Phenotype']['index.html'] = 0;
                        $root['tick']['Genotype'] = {
                        };
                        $root['tick']['Genotype']['index.html'] = 0;
                        $root['tick']['Nucleus'] = {
                        };
                        $root['tick']['Nucleus']['index.html'] = 0;
                        $root['tick']['Gene'] = {
                        };
                        $root['tick']['Gene']['index.html'] = 0;
                        $root['tick']['Membrane'] = {
                        };
                        $root['tick']['Membrane']['index.html'] = 0;
                        $root['tick']['God'] = {
                        };
                        $root['tick']['God']['plan'] = 0;
                        $root['cell'] = {
                            Phenotype: Phenotype,
                            Genotype: Genotype,
                            Nucleus: Nucleus,
                            Gene: Gene,
                            Membrane: Membrane,
                            God: God,
                            plan: God.plan.bind(God),
                            create: God.create.bind(God)
                        };
                        let obj1 = $root;
                        $root['cell']['God'].plan($root);
                        obj1['this'] = $root;
                        obj1['input'] = $root;
                        obj1['cell']['God'].create(obj1);
                    // if (window.addEventListener) {
                    //   window.addEventListener('load', function () {
                    //     console.assert(false, obj)
                    // obj['cell']['God'].create(obj)
                    // })
                    // }
                    // }
                    });
                };
                obj['function']['type'] = function(obj1) {
                    if (parseInt(obj1['this']['slot'].length, 10) === 0) {
                        if (!obj1['this']) obj1['slot'] = 'varan-editor';
                        else obj1['slot'] = obj1['this'].getAttribute('children');
                    } else ;
                    return obj1;
                };
                obj['function']['proxy'] = function(obj1) {
                    return new Promise(function(resolve, reject) {
                        resolve(true);
                    });
                };
                obj['this'] = this;
                obj['input'] = this;
                if (obj['this'].slot === null || obj['this'].slot.length === 0) {
                    obj['this'].slot = obj['this'].tagName.toLowerCase();
                    obj['slot'] = obj['this'].tagName.toLowerCase();
                } else obj['slot'] = obj['this'].slot;
                obj = obj['function']['type'](obj);
                this.DocumentFragment = new DocumentFragment();
                this.DocumentFragment.prototype = window.DocumentFragment.prototype;
                this.createDocumentFragment = function() {
                    return document.createDocumentFragment();
                };
                this.Element = window.Element;
                this.setTimeout = window.setTimeout.bind(window);
                this.createElementNS = document.createElementNS;
                this.createTextNode = document.createTextNode;
                this.createElement = function(obj1) {
                    return document.createElement(obj1);
                };
                this.NodeList = this.childNodes;
                this.NodeList.prototype = Array.prototype;
                this.HTMLElement = window.HTMLElement;
                // let scriptJ = document.createElement('script')
                // scriptJ.src = './jason.mjs'
                // scriptJ.type = 'module'
                // document.body.appendChild(scriptJ)
                // scriptJ.onload = () => {
                // let scriptS = document.createElement('script')
                // scriptS.src = './st.mjs'
                // document.body.appendChild(scriptS)
                // scriptS.onload = async () => {
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
                // let Jason = await loader('/static/html/components/component_modules/cell-index/jason.mjs','Jason')
                // let ST = await loader('/static/html/components/component_modules/cell-index/st.mjs','ST')
                let url = '';
                url = obj.this.dataset.url;
                // if(obj.this.dataset.url){
                //   url =  obj.this.dataset.url
                //   if(url.indexOf('${location.origin}') !== -1) {
                //     if(location.origin.indexOf('localhost') !== -1) {
                //       url = url.replace('${location.origin}', '')
                //     } else {
                //       url = url.replace('${location.origin}', `${location.origin}`)
                //     }
                //   }
                //   url = url.toString()
                // }else{
                //   if(obj.this.dataset.json) {
                //     url = `${location.origin}${obj.this.dataset.json}`
                //   } else {
                //     console.assert(false, '???? ???????? ?????? ???????? ????????????')
                //   }
                // }
                let style = document.createElement('style');
                style.innerText = '@import "./jason.css"';
                obj.this.appendChild(style);
                let json = {
                };
                // if(location.origin === 'http://localhost:9876') {
                //   json = await fetch(`${location.origin}/android/index.json`)
                // } else {
                //   json = await fetch(`${location.origin}/android/index.json`)
                // }
                // json = await json.json()
                if (url) json['$jason'] = {
                    'head': {
                        'title': 'Basic'
                    },
                    'body': {
                        'background': {
                            'type': 'html',
                            'url': `${url}`
                        }
                    }
                };
                let app = $kCpuf.default({
                    $cell: true,
                    style: {
                        width: '100%',
                        height: '100%',
                        margin: '0 auto'
                    }
                }, {
                    '$jason': json['$jason']
                });
                console.log('~~~~~~~~~~~~', app);
                console.assert(false);
                this.app = app;
                obj['function']['create'](obj);
                if (!this.dataset.url) ;
                else {
                    // console.log('ffgfgf')
                    // let host = this.dataset.url.replace('/import','')
                    let frame = obj['this'].querySelector('iframe');
                // iframe.set(host, ifr, obj['this'])
                // ifr.onload = function () {
                // setTimeout(function() {
                // document.dispatchEvent( new CustomEvent(`iframe`,{
                // detail:host
                // }))
                // }, 0);
                // }
                }
            // }
            // }
            })(this);
        }
    });
});
parcelRequire.register("kCpuf", function(module, exports) {
    $parcel$export(module.exports, "default", ()=>$b59153a545d3ef5f$export$9099ad97b570f7c
    );
    var $eiX3k = parcelRequire("eiX3k");
    let $b59153a545d3ef5f$var$ST = $eiX3k.default();
    function $b59153a545d3ef5f$export$9099ad97b570f7c(options, jason) {
        var node = {
            $type: "div",
            class: "jason",
            slot: "jason",
            _body: null,
            _styles: null,
            $init: function() {
                if (jason) this._update(jason);
                else this.classList.add("hidden");
                this.style.minHeight = window.innerHeight;
            },
            $update: function() {
                // Style
                var b = this._body;
                if (b.background) {
                    if (typeof b.background === 'string') {
                        if (/http/.test(b.background)) {
                            this.style.backgroundImage = "url(" + b.background + ")";
                            this.style.backgroundSize = "cover";
                        } else this.style.backgroundColor = b.background;
                    } else if (b.background.type === 'html') this.querySelector(".webcontainer")._update(b.background);
                } else if (b.style && b.style.background) {
                    if (typeof b.style.background === 'string') {
                        if (/http/.test(b.style.background)) {
                            this.style.backgroundImage = "url(" + b.style.background + ")";
                            this.style.backgroundSize = "cover";
                        } else this.style.backgroundColor = b.style.background;
                    } else if (b.style.background.type === 'html') this.querySelector(".webcontainer")._update(b.style.background);
                }
                if (this._styles) this.querySelector("style")._update(this._styles);
            },
            _draw: function(body) {
                this._body = body;
                this.querySelector(".sections")._update(this._body);
                this.querySelector(".layers")._update(this._body);
                this.querySelector(".header")._update(this._body);
                this.querySelector(".footer")._update(this._body);
            },
            _update: function(root) {
                var self = this;
                // Declare mixins with '$jason.head.type = "mixin"'
                if (root && root.$jason && root.$jason.head && root.$jason.head.type === "mixin") {
                    self.classList.add("hidden");
                    return;
                }
                $b59153a545d3ef5f$var$Mixin.loaded = [];
                $b59153a545d3ef5f$var$Mixin.parse(root).then(function(root1) {
                    var head = root1.$jason.head;
                    var body = root1.$jason.body;
                    if (body) {
                        self.classList.remove("hidden");
                        self._draw(body);
                    } else self.classList.add("hidden");
                    if (head) {
                        if (head.templates && head.templates.body && head.data) {
                            var parsed = $b59153a545d3ef5f$var$ST.transform(head.templates.body, head.data);
                            if (parsed) {
                                self.classList.remove("hidden");
                                self._draw(parsed);
                            } else self.classList.add("hidden");
                        }
                        if (head.styles) self._styles = head.styles;
                    }
                }).catch(function(err) {
                    console.log("Error", err);
                    self.classList.add("hidden");
                });
            },
            $components: [
                $b59153a545d3ef5f$var$Css,
                $b59153a545d3ef5f$var$Header,
                $b59153a545d3ef5f$var$Sections,
                $b59153a545d3ef5f$var$Layers,
                $b59153a545d3ef5f$var$Footer,
                $b59153a545d3ef5f$var$WebContainer
            ]
        };
        if (options) Object.keys(options).forEach(function(key) {
            if (key === 'class') {
                console.assert(false);
                node.class = "jason" + options[key];
            } else node[key] = options[key];
        });
        return node;
    }
    let $b59153a545d3ef5f$var$Components = {
        slider: function(o) {
            var style = undefined;
            if (o.style) style = {
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                $type: "input",
                type: "range",
                value: o.value,
                class: o.className,
                style: $b59153a545d3ef5f$var$Utils.clean(style)
            });
        },
        textfield: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined,
                color: o.style.color,
                fontFamily: o.style.font,
                fontSize: o.style.size ? o.style.size + 'px' : undefined,
                textAlign: o.style.align
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                $type: "input",
                type: o.type,
                value: o.value,
                class: o.className,
                style: $b59153a545d3ef5f$var$Utils.clean(style),
                placeholder: o.placeholder
            });
        },
        textarea: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined,
                color: o.style.color,
                fontFamily: o.style.font,
                fontSize: o.style.size ? o.style.size + 'px' : undefined,
                textAlign: o.style.align
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                $type: "textarea",
                value: o.value,
                class: o.className,
                style: $b59153a545d3ef5f$var$Utils.clean(style),
                placeholder: o.placeholder
            });
        },
        button: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined,
                borderRadius: o.style.corner_radius ? o.style.corner_radius + 'px' : undefined,
                fontFamily: o.style.font,
                fontSize: o.style.size ? o.style.size + 'px' : undefined,
                textAlign: o.style.align,
                lineHeight: o.style.height ? o.style.height + 'px' : undefined,
                color: o.style.color
            };
            if (o.url) return $b59153a545d3ef5f$var$Utils.clean({
                $type: "span",
                $components: [
                    {
                        $type: "img",
                        src: o.url,
                        class: o.className,
                        style: $b59153a545d3ef5f$var$Utils.clean(style)
                    }
                ]
            });
            else return $b59153a545d3ef5f$var$Utils.clean({
                $type: "span",
                $components: [
                    {
                        $type: "button",
                        $text: o.text,
                        class: o.className,
                        style: $b59153a545d3ef5f$var$Utils.clean(style)
                    }
                ]
            });
        },
        image: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined,
                borderRadius: o.style.corner_radius ? o.style.corner_radius + 'px' : undefined,
                color: o.style.color
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                $type: "img",
                src: o.url,
                class: o.className,
                style: $b59153a545d3ef5f$var$Utils.clean(style)
            });
        },
        label: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined,
                borderRadius: o.style.corner_radius ? o.style.corner_radius + 'px' : undefined,
                fontFamily: o.style.font,
                fontSize: o.style.size ? o.style.size + 'px' : undefined,
                textAlign: o.style.align,
                lineHeight: o.style.height ? o.style.height + 'px' : undefined,
                color: o.style.color
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                $type: "p",
                $text: o.text,
                class: o.className,
                style: $b59153a545d3ef5f$var$Utils.clean(style)
            });
        },
        space: function(o) {
            var style = undefined;
            if (o.style) style = {
                background: o.style.background,
                width: o.style.width ? o.style.width + 'px' : undefined,
                height: o.style.height ? o.style.height + 'px' : undefined,
                padding: o.style.padding ? o.style.padding + 'px' : undefined,
                paddingLeft: o.style.padding_left ? o.style.padding_left + 'px' : undefined,
                paddingRight: o.style.padding_right ? o.style.padding_right + 'px' : undefined,
                paddingTop: o.style.padding_top ? o.style.padding_top + 'px' : undefined,
                paddingBottom: o.style.padding_bottom ? o.style.padding_bottom + 'px' : undefined
            };
            return $b59153a545d3ef5f$var$Utils.clean({
                class: o.className,
                "data-flex": true,
                style: $b59153a545d3ef5f$var$Utils.clean(style)
            });
        }
    };
    var $b59153a545d3ef5f$var$Css = {
        $type: "style",
        $text: "",
        _cssText: "",
        $update: function() {
            this.$text = this._cssText;
        },
        _update: function(s) {
            var new_stylesheet = {
            };
            for(var key in s){
                var attrs = {
                };
                var stylesheet = s[key];
                if (stylesheet.background && !/http/.test(stylesheet.background)) attrs["background-color"] = stylesheet.background;
                if (stylesheet.background && /http/.test(stylesheet.background)) {
                    attrs["background-image"] = 'url(' + stylesheet.background + ')';
                    attrs["background-size"] = "cover";
                }
                if (stylesheet.color) attrs["color"] = stylesheet.color;
                if (stylesheet.bottom) {
                    attrs["bottom"] = stylesheet.bottom + "px";
                    attrs["position"] = "absolute";
                }
                if (stylesheet.left) {
                    attrs["left"] = stylesheet.left + "px";
                    attrs["position"] = "absolute";
                }
                if (stylesheet.right) {
                    attrs["right"] = stylesheet.right + "px";
                    attrs["position"] = "absolute";
                }
                if (stylesheet.top) {
                    attrs["top"] = stylesheet.top + "px";
                    attrs["position"] = "absolute";
                }
                if (stylesheet.padding) attrs["padding"] = stylesheet.padding + "px";
                if (stylesheet.padding_left) attrs["padding-left"] = stylesheet.padding_left + "px";
                if (stylesheet.padding_right) attrs["padding-right"] = stylesheet.padding_right + "px";
                if (stylesheet.padding_top) attrs["padding-top"] = stylesheet.padding_top + "px";
                if (stylesheet.padding_bottom) attrs["padding-bottom"] = stylesheet.padding_bottom + "px";
                if (stylesheet.width) attrs["width"] = stylesheet.width + "px";
                if (stylesheet.height) attrs["height"] = stylesheet.height + "px";
                if (stylesheet.size) attrs["font-size"] = stylesheet.size + "px";
                if (stylesheet.font) attrs["font-family"] = stylesheet.font;
                if (stylesheet.corner_radius) attrs["border-radius"] = stylesheet.corner_radius;
                if (stylesheet.align) {
                    attrs["text-align"] = stylesheet.align;
                    attrs["align-items"] = stylesheet.align;
                }
                var new_attrs = {
                };
                Object.keys(attrs).forEach(function(k) {
                    new_attrs[k] = $b59153a545d3ef5f$var$Utils.units(attrs[k]);
                });
                new_stylesheet[key] = new_attrs;
            }
            /*******
    s looks like this:

    "item": {
      color: "#ff0000",
      padding: "10px",
      "fonts-family": "HelveticaNeue"
    }

    Need to transform to a string

    .item {
      color: #ff0000;
      padding: 10px;
      fonts-family: "HelveticaNeue"
    }

    ********/ var css = Object.keys(new_stylesheet).map(function(classname) {
                var firstLine = "#jason ." + classname + " {\n";
                var content = Object.keys(new_stylesheet[classname]).map(function(attr) {
                    return "\t" + attr + ": " + new_stylesheet[classname][attr] + ";";
                }).join("\n") + "\n";
                var lastLine = "}";
                return firstLine + content + lastLine;
            }).join("\n");
            this._cssText = css;
        }
    };
    var $b59153a545d3ef5f$var$Footer = {
        $type: "nav",
        class: "footer nav nav-justified",
        _title: null,
        _items: [],
        _footer: null,
        _style: null,
        _tpl: {
            tabs: function(item) {
                return {
                    class: "nav-item",
                    $components: [
                        {
                            $type: "img",
                            src: item.image,
                            $init: function() {
                                $b59153a545d3ef5f$var$Style.node(this);
                            }
                        },
                        {
                            $text: item.text,
                            class: "letter"
                        }
                    ]
                };
            }
        },
        _update: function(body) {
            if (body.footer) this._footer = body.footer;
        },
        $update: function() {
            if (this._footer.tabs) {
                if (this._footer.tabs.items) {
                    if (this._footer.tabs.style) this._style = this._footer.tabs.style;
                    this.$components = this._footer.tabs.items.map(this._tpl.tabs);
                }
            } else if (this._footer.input) {
                if (this._footer.input.style) this._style = this._footer.input.style;
                var i = this._footer.input;
                var inputItems = [];
                if (i.left && i.left.image) {
                    var lb = {
                        $type: "img",
                        src: i.left.image
                    };
                    if (i.left.style) lb.style = $b59153a545d3ef5f$var$Style.transform(i.left.style);
                    inputItems.push({
                        class: "input-item button-item",
                        $components: [
                            lb
                        ]
                    });
                }
                if (i.textfield) {
                    var tf = {
                        $type: "input"
                    };
                    if (i.textfield.placeholder) tf.placeholder = i.textfield.placeholder;
                    if (i.textfield.style) tf.style = $b59153a545d3ef5f$var$Style.transform(i.textfield.style);
                    inputItems.push({
                        class: "input-item textfield",
                        $components: [
                            tf
                        ]
                    });
                }
                if (i.right && i.right.text) {
                    var rb = {
                        $type: "span",
                        $text: i.right.text
                    };
                    if (i.right.style) rb.style = $b59153a545d3ef5f$var$Style.transform(i.right.style);
                    inputItems.push({
                        class: "input-item button-item",
                        $components: [
                            rb
                        ]
                    });
                }
                this.$components = inputItems;
            }
            $b59153a545d3ef5f$var$Style.node(this);
        }
    };
    var $b59153a545d3ef5f$var$Header = {
        $type: "nav",
        class: "header nav nav-justified",
        _title: null,
        _menu: null,
        _style: null,
        _update: function(body) {
            if (body.header) {
                // title
                if (body.header.title) {
                    if (typeof body.header.title === 'string') this._title = {
                        type: "label",
                        text: body.header.title
                    };
                    else this._title = body.header.title;
                }
                // menu
                if (body.header.menu) this._menu = body.header.menu;
                // style
                if (body.header.style) this._style = body.header.style;
            }
        },
        $update: function() {
            // style
            $b59153a545d3ef5f$var$Style.node(this);
            // menu drawing
            var menuItem;
            if (this._menu) {
                if (this._menu.image) menuItem = {
                    class: "nav-item",
                    $components: [
                        {
                            $type: "img",
                            src: this._menu.image,
                            class: "icon float-right"
                        }
                    ]
                };
                else if (this._menu && this._menu.text) menuItem = {
                    class: "nav-item",
                    $components: [
                        {
                            $type: "span",
                            $text: this._menu.text,
                            class: "icon nav-item float-right"
                        }
                    ]
                };
                if (this._menu.style) menuItem.style = $b59153a545d3ef5f$var$Style.transform(this._menu.style);
            } else menuItem = {
                class: "nav-item",
                $components: [
                    {
                        $type: "span",
                        $text: "",
                        class: "icon float-right"
                    }
                ]
            };
            // Build title
            /*
    label type
    {
      "type": "label",
      "text": "this isa title",
      "style": {
        "fonts": "..",
        "size": "..",
        "color": ".."
      }
    }

    image type
    {
      "type": "image",
      "url": "..",
      "style": {
        "width": "..",
        "height": ".."
      }
    }
    */ var titleItem;
            if (this._title) {
                var t = this._title;
                if (t.type) {
                    var newStyle = {
                    };
                    if (t.style) {
                        var style = $b59153a545d3ef5f$var$Style.transform(t.style);
                        for(var key in style)newStyle[key] = $b59153a545d3ef5f$var$Utils.units(style[key]);
                    }
                    if (t.type === 'label') {
                        titleItem = {
                            $type: "h5",
                            $text: t.text,
                            class: "nav-item"
                        };
                        if (newStyle) titleItem.style = newStyle;
                    } else if (t.type === 'image') {
                        titleItem = {
                            class: "nav-item",
                            $components: [
                                {
                                    $type: "img",
                                    src: t.url
                                }
                            ]
                        };
                        if (newStyle) titleItem.$components[0].style = newStyle;
                    }
                }
            } else titleItem = {
                $type: "h5",
                $text: "",
                class: "nav-item"
            };
            this.$components = [
                {
                    $type: "span",
                    $text: "",
                    class: "nav-item"
                },
                titleItem,
                menuItem
            ];
        }
    };
    var $b59153a545d3ef5f$var$Item = {
        build: function(layout, parentLayout) {
            if (layout.components) return $b59153a545d3ef5f$var$Item.layout(layout, parentLayout);
            else return $b59153a545d3ef5f$var$Item.components(layout, parentLayout);
        },
        layout: function(layout, parentLayout) {
            var style = {
            };
            if (layout && layout.style) {
                if (layout.style.background && !/http/.test(layout.style.background)) style.backgroundColor = layout.style.background;
                if (layout.style.background && /http/.test(layout.style.background)) style.backgroundImage = 'url(' + layout.style.background + ')';
                if (layout.style.background && /http/.test(layout.style.background)) style.backgroundSize = 'cover';
                if (layout.style.padding) style.padding = layout.style.padding + 'px';
                if (layout.style.width) style.width = layout.style.width + 'px';
                if (layout.style.height) style.height = layout.style.height + 'px';
                if (layout.style.align) style.textAlign = layout.style.align;
                if (layout.style.align) style.alignItems = layout.style.align;
                if (parentLayout && parentLayout.type == 'vertical' && layout.style.height || parentLayout && parentLayout.type == 'horizontal' && layout.style.width) style.flexGrow = "0";
                else style.flexGrow = "1";
                if (parentLayout && parentLayout.type == 'vertical' && parentLayout.style && parentLayout.style.spacing) style.marginBottom = parentLayout.style.spacing + 'px';
                if (parentLayout && parentLayout.type == 'horizontal' && parentLayout.style && parentLayout.style.spacing) style.marginRight = parentLayout.style.spacing + 'px';
            }
            var transformed = {
                style: style,
                class: layout.type + " layout",
                $components: layout.components ? layout.components.map(function(component) {
                    return $b59153a545d3ef5f$var$Item.build(component, layout);
                }) : []
            };
            if (layout.href) transformed.onclick = function(e) {
                if (layout.href.view === 'web') window.location.href = layout.href.url;
                else window.location.href = layout.href.url.replace(/\.json$/, '') + "/edit";
            };
            return transformed;
        },
        components: function(input, parentLayout) {
            var c = $b59153a545d3ef5f$var$Components[input.type];
            var transformed;
            if (c) {
                if (input.class) input.className = input.class;
                transformed = c(input);
            } else if (input.class === 'spacing') transformed = {
                class: input.class
            };
            else transformed = {
                $text: input.type
            };
            var style = {
            };
            if (parentLayout && parentLayout.type === 'vertical' && parentLayout.style && parentLayout.style.spacing) style["marginBottom"] = parentLayout.style.spacing + "px";
            else if (parentLayout && parentLayout.type === 'horizontal' && parentLayout.style && parentLayout.style.spacing) style["marginRight"] = parentLayout.style.spacing + "px";
            if (transformed.style) Object.keys(style).forEach(function(key) {
                transformed.style[key] = style[key];
            });
            else transformed.style = style;
            return transformed;
        }
    };
    var $b59153a545d3ef5f$var$Layers = {
        _items: [],
        class: "layers hidden",
        _update: function(body) {
            if (body.layers) {
                this.classList.remove("hidden");
                this._items = body.layers;
            }
        },
        $update: function() {
            this.$components = this._items.map($b59153a545d3ef5f$var$Layers.tpl);
        },
        tpl: function(item) {
            var component = {
            };
            if (item.type === 'image') {
                component.$type = 'img';
                if (item.url) component.src = item.url;
            } else if (item.type === 'label') {
                component.$type = 'span';
                if (item.text) component.$text = item.text;
            }
            if (item.class) component.class = item.class;
            if (item.style) {
                /// common styling
                for(var key in item.style){
                    if (/^[0-9]+$/.test(item.style[key])) item.style[key] = item.style[key] + "px";
                    else if (/.*%[ ]*[+-][ ]*[0-9]+[ ]*/.test(item.style[key])) item.style[key] = ("calc(" + item.style[key] + "px)").split("+").join(" + ").split("-").join(" - ");
                    else item.style[key] = item.style[key];
                }
                component.style = $b59153a545d3ef5f$var$Style.transform(item.style);
                // layer specific styling - top,left,right,bottom
                if (item.style.top != undefined) component.style.top = item.style.top;
                if (item.style.left != undefined) component.style.left = item.style.left;
                if (item.style.right != undefined) component.style.right = item.style.right;
                if (item.style.bottom != undefined) component.style.bottom = item.style.bottom;
                component.style.position = "absolute";
            }
            return component;
        }
    };
    let $b59153a545d3ef5f$var$Mixin = {
        cache: {
        },
        plugin: function(o, path, new_val) {
            if (path && path.length > 0) {
                var fn = Function('new_val', 'with(this) {this' + path + '=new_val; return this;}').bind(o);
                return fn(new_val);
            } else {
                Object.keys(new_val).forEach(function(k) {
                    o[k] = new_val[k];
                });
                return o;
            }
        },
        remote: function(root) {
            return new Promise(function(success, error) {
                // MIXIN
                var selection = $b59153a545d3ef5f$var$ST.select(root, function(key, val) {
                    console.log('~~~~~~~~~~~', !/^[ ]*\$document/.test(val), val);
                    return key === '@' && !/^[ ]*\$document/.test(val);
                });
                var paths = selection.paths();
                var values = selection.values();
                if (values.length > 0) {
                    var subpaths = [];
                    values.forEach(function(value, index) {
                        if (/@/.test(value)) {
                            var tokens = value.split("@");
                            subpaths.push(tokens[0]);
                            values[index] = tokens[1];
                        } else subpaths.push("");
                    });
                    var promises = values.map(function(url, index) {
                        return new Promise(function(success1, error1) {
                            if ($b59153a545d3ef5f$var$Mixin.cache[url]) {
                                var res = $b59153a545d3ef5f$var$Mixin.cache[url];
                                success1(JSON.parse(JSON.stringify(res)));
                            } else fetch(url).then(function(res) {
                                return res.json();
                            }).then(function(res) {
                                $b59153a545d3ef5f$var$Mixin.cache[url] = res;
                                success1(JSON.parse(JSON.stringify(res)));
                            });
                        });
                    });
                    var resolved_root = root;
                    var self = this;
                    Promise.all(promises).then(function(objects) {
                        paths.forEach(function(path, index) {
                            var plugin = objects[index];
                            if (subpaths[index] != "") {
                                var fn = Function('with(this) { return this.' + subpaths[index] + ';}').bind(plugin);
                                plugin = fn();
                            }
                            resolved_root = $b59153a545d3ef5f$var$Mixin.plugin(resolved_root, path, plugin);
                        });
                        $b59153a545d3ef5f$var$Mixin.loaded = $b59153a545d3ef5f$var$Mixin.loaded.concat(values);
                        success(resolved_root);
                    });
                } else success(root);
            });
        },
        local: function(root) {
            return new Promise(function(success, error) {
                var selection = $b59153a545d3ef5f$var$ST.select(root, function(key, val) {
                    console.log('~~~~~~2~~~~~', !/^[ ]*\$document/.test(val), val);
                    return key === '@' && /\$document\./.test(val);
                });
                var paths = selection.paths();
                var values = selection.values();
                paths.forEach(function(path, index) {
                    /***
          Example

          local_ref := "$document.db"
        }
        *****/ var local_ref = values[index];
                    // local_resolver finds the value at $document.db
                    var local_resolver = Function('with(this) { return ' + local_ref + ';}').bind({
                        $document: root
                    });
                    var resolved = local_resolver();
                    if (resolved instanceof Object && resolved.constructor === Object) {
                        var func = Function('with(this) {return this' + path + ';}').bind(root);
                        Object.keys(resolved).forEach(function(key) {
                            var branch = func(path);
                            branch[key] = resolved[key];
                        });
                    } else {
                        var func = Function('new_val', 'with(this) {this' + path + '=new_val; return this;}').bind(root);
                        root = func(resolved);
                    }
                });
                success(root);
            });
        },
        parse: function(root) {
            console.log('~~~~~~~~~~ddddd~~', root);
            // MIXIN
            var selection = $b59153a545d3ef5f$var$ST.select(root, function(key, val) {
                console.log('~~~~~~~~3~~~', !/\$document\./.test(val) && $b59153a545d3ef5f$var$Mixin.loaded.indexOf(val) === -1, val);
                return key === '@' && !/\$document\./.test(val) && $b59153a545d3ef5f$var$Mixin.loaded.indexOf(val) === -1;
            });
            if (selection.values().length > 0) return $b59153a545d3ef5f$var$Mixin.remote(root).then($b59153a545d3ef5f$var$Mixin.parse);
            else return $b59153a545d3ef5f$var$Mixin.local(root);
        }
    };
    var $b59153a545d3ef5f$var$Section = {
        build: function(input) {
            var output = [];
            var h = $b59153a545d3ef5f$var$Section.header(input);
            if (h) output = output.concat(h);
            var i = $b59153a545d3ef5f$var$Section.items(input);
            if (i) output = output.concat({
                class: "section-items",
                $components: i
            });
            return output;
        },
        header: function(input) {
            if (input.header) {
                var output = {
                    class: "section-header"
                };
                if (input.header.style) {
                    output["style"] = {
                    };
                    if (input.header.style.background) output["style"]["backgroundColor"] = input.header.style.background;
                    if (input.header.style.padding) output["style"]["padding"] = input.header.style.padding;
                    if (input.header.style.width) output["style"]["width"] = input.header.style.width;
                    if (input.header.style.height) output["style"]["height"] = input.header.style.height;
                }
                output["$components"] = [
                    $b59153a545d3ef5f$var$Item.build(input.header)
                ];
                return output;
            } else return null;
        },
        items: function(input) {
            if (input.items) return input.items.map(function(item) {
                var style = {
                };
                if (item.style) {
                    if (item.style.background) style.backgroundColor = item.style.background;
                    if (item.style.padding) style.padding = item.style.padding + 'px';
                    if (item.style.width) style.width = item.style.width + 'px';
                    if (item.style.height) style.height = item.style.height + 'px';
                }
                return {
                    class: "section-item",
                    $components: [
                        $b59153a545d3ef5f$var$Item.build(item)
                    ],
                    style: style
                };
            });
            else return null;
        }
    };
    var $b59153a545d3ef5f$var$Sections = {
        class: "sections hidden",
        _update: function(body) {
            var input = body.sections;
            if (input && input.length > 0) {
                this.classList.remove("hidden");
                this.$components = input.map(function(section) {
                    var output = {
                    };
                    // class
                    output.class = section.type + " section";
                    // style
                    if (section.style) output.style = $b59153a545d3ef5f$var$Style.transform(section.style);
                    // components
                    var ss = $b59153a545d3ef5f$var$Section.build(section);
                    if (ss) output["$components"] = ss;
                    return output;
                });
            } else this.$components = [];
        }
    };
    var $b59153a545d3ef5f$var$Style = {
        tpl: function(style) {
            var s = {
            };
            if (style.color) s.color = style.color;
            if (style.background && /http/.test(style.background)) {
                s.backgroundImage = 'url(' + style.background + ')';
                s.backgroundSize = 'cover';
            } else s.backgroundColor = style.background;
            if (style.padding) s.padding = style.padding;
            if (style.width) s.width = style.width;
            if (style.height) {
                s.height = style.height;
                s.lineHeight = style.height;
            }
            if (style.font) s.fontFamily = style.font;
            if (style.size) s.fontSize = style.size;
            if (style.corner_radius) s.borderRadius = style.corner_radius;
            if (style.align) {
                s.textAlign = style.align;
                s.alignItems = style.align;
            }
            return s;
        },
        /// style a node
        node: function($node) {
            if ($node._style) {
                var s = $b59153a545d3ef5f$var$Style.tpl($node._style);
                for(var key in s)$node.style[key] = $b59153a545d3ef5f$var$Utils.units(s[key]);
            }
        },
        transform: function(style) {
            return $b59153a545d3ef5f$var$Style.tpl(style);
        }
    };
    var $b59153a545d3ef5f$var$Utils = {
        units: function(str) {
            if (/^[0-9]+$/.test(str)) return str + "px";
            else if (/\(.*%[ ]*[+-][ ]*[0-9]+px[ ]*/.test(str)) return "calc(" + str + ")";
            else return str;
        },
        transformer: function(fn) {
            var result = {
            };
            for(var key in o)try {
                if (typeof o[key] !== "undefined") result[key] = o[key];
            } catch (e) {
            // no need to include
            }
            return result;
        },
        // Cleans up all undefined values from an object
        clean: function(obj) {
            if (obj) {
                Object.keys(obj).forEach(function(key) {
                    if (typeof obj[key] === 'undefined') delete obj[key];
                });
                if (Object.keys(obj).length === 0) return null;
                else return obj;
            } else return obj;
        }
    };
    var $b59153a545d3ef5f$var$WebContainer = {
        $type: "iframe",
        class: "webcontainer hidden",
        height: "100%",
        width: "100%",
        frameborder: "0",
        clipboard: "allow",
        scrolling: "yes",
        sandbox: "allow-downloads allow-modals allow-scripts allow-top-navigation-by-user-activation allow-same-origin",
        _update: function(background) {
            if (background.style) this.style = background.style;
            if (background.url) {
                this.classList.remove('hidden');
                this.src = background.url;
            } else if (background.text) {
                this.classList.remove('hidden');
                this.$html = background.text;
            }
        }
    };
});
parcelRequire.register("eiX3k", function(module, exports) {
    $parcel$export(module.exports, "default", ()=>$792d3a7a6a4c951d$export$9099ad97b570f7c
    );
    var $792d3a7a6a4c951d$export$9099ad97b570f7c = (self = document.body)=>{
        var $context = self;
        var root // root context
        ;
        var Helper = {
            is_template: function(str) {
                var re = /\{\{(.+)\}\}/g;
                return re.test(str);
            },
            is_array: function(item) {
                return Array.isArray(item) || !!item && typeof item === 'object' && typeof item.length === 'number' && (item.length === 0 || item.length > 0 && item.length - 1 in item);
            },
            resolve: function(o, path, new_val) {
                // 1. Takes any object
                // 2. Finds subtree based on path
                // 3. Sets the value to new_val
                // 4. Returns the object;
                if (path && path.length > 0) {
                    var func = Function('new_val', 'with(this) {this' + path + '=new_val; return this;}').bind(o);
                    return func(new_val);
                } else {
                    o = new_val;
                    return o;
                }
            }
        };
        var Conditional = {
            run: function(template, data) {
                // expecting template as an array of objects,
                // each of which contains '#if', '#elseif', 'else' as key
                // item should be in the format of:
                // {'#if item': 'blahblah'}
                // Step 1. get all the conditional keys of the template first.
                // Step 2. then try evaluating one by one until something returns true
                // Step 3. if it reaches the end, the last item shall be returned
                for(var i = 0; i < template.length; i++){
                    var item = template[i];
                    var keys = Object.keys(item);
                    // assuming that there's only a single kv pair for each item
                    var key = keys[0];
                    var func = TRANSFORM.tokenize(key);
                    if (func.name === '#if' || func.name === '#elseif') {
                        var expression = func.expression;
                        var res = TRANSFORM.fillout(data, '{{' + expression + '}}');
                        if (res === '{{' + expression + '}}') // we halt parsing and return the template;
                        return template;
                        else {
                            if (res) return TRANSFORM.run(item[key], data);
                        }
                    } else // if you reached this point, it means:
                    //  1. there were no non-evaluatable expressions
                    //  2. Yet all preceding expressions evaluated to falsy value
                    //  Therefore we run this branch
                    return TRANSFORM.run(item[key], data);
                }
                // if you've reached this point, it means nothing matched.
                // so return null
                return null;
            },
            is: function(template) {
                // TRUE ONLY IF it's in a correct format.
                // Otherwise return the original template
                // Condition 0. Must be an array
                // Condition 1. Must have at least one item
                // Condition 2. Each item in the array should be an object of a single key/value pair
                // Condition 3. starts with #if
                // Condition 4. in case there's more than two items, everything between the first and the last item should be #elseif
                // Condition 5. in case there's more than two items, the last one should be either '#else' or '#elseif'
                if (!Helper.is_array(template)) return false;
                // Condition 1.
                // Must have at least one item
                if (template.length === 0) return false;
                // Condition 2.
                // Each item in the array should be an object
                // , and  of a single key/value pair
                var containsValidObjects = true;
                for(var i = 0; i < template.length; i++){
                    var item = template[0];
                    if (typeof item !== 'object') {
                        containsValidObjects = false;
                        break;
                    }
                    if (Object.keys(item).length !== 1) {
                        // first item in the array has multiple key value pairs, so invalid.
                        containsValidObjects = false;
                        break;
                    }
                }
                if (!containsValidObjects) return false;
                // Condition 3.
                // the first item should have #if as its key
                // the first item should also contain an expression
                var first = template[0];
                var func;
                for(var key in first){
                    func = TRANSFORM.tokenize(key);
                    if (!func) return false;
                    if (!func.name) return false;
                    // '{{#if }}'
                    if (!func.expression || func.expression.length === 0) return false;
                    if (func.name.toLowerCase() !== '#if') return false;
                }
                if (template.length === 1) // template had one item which was '#if' so it's valid
                return true;
                // Condition 4.
                // in case there's more than two items, everything between the first and the last item should be #elseif
                var they_are_all_elseifs = true;
                for(var template_index = 1; template_index < template.length - 1; template_index++){
                    var template_item = template[template_index];
                    for(var template_key in template_item){
                        func = TRANSFORM.tokenize(template_key);
                        if (func.name.toLowerCase() !== '#elseif') {
                            they_are_all_elseifs = false;
                            break;
                        }
                    }
                }
                if (!they_are_all_elseifs) // therefore invalid
                return false;
                // If you've reached this point, it means we have multiple items and everything between the first and the last item
                // are elseifs
                // Now we need to check the validity of the last item
                // Condition 5.
                // in case there's more than one item, it should end with #else or #elseif
                var last = template[template.length - 1];
                for(var last_key in last){
                    func = TRANSFORM.tokenize(last_key);
                    if ([
                        '#else',
                        '#elseif'
                    ].indexOf(func.name.toLowerCase()) === -1) return false;
                }
                // Congrats, if you've reached this point, it's valid
                return true;
            }
        };
        var TRANSFORM = {
            memory: {
            },
            transform: function(template, data, injection, serialized) {
                var selector = null;
                if (/#include/.test(JSON.stringify(template))) selector = function(key, value) {
                    return /#include/.test(key) || /#include/.test(value);
                };
                var res;
                if (injection) {
                    // resolve template with selector
                    var resolved_template = SELECT.select(template, selector, serialized).transform(data, serialized).root();
                    // apply the resolved template on data
                    res = SELECT.select(data, null, serialized).inject(injection, serialized).transformWith(resolved_template, serialized).root();
                } else // select the template with selector and transform data
                res = SELECT.select(template, selector, serialized).transform(data, serialized).root();
                if (serialized) return JSON.stringify(res);
                else return res;
            },
            tokenize: function(str) {
                // INPUT : string
                // OUTPUT : {name: FUNCTION_NAME:STRING, args: ARGUMENT:ARRAY}
                var re = /\{\{(.+)\}\}/g;
                str = str.replace(re, '$1');
                // str : '#each $jason.items'
                var tokens = str.trim().split(' ');
                // => tokens: ['#each', '$jason.items']
                var func;
                if (tokens.length > 0) {
                    if (tokens[0][0] === '#') {
                        func = tokens.shift();
                        // => func: '#each' or '#if'
                        // => tokens: ['$jason.items', '&&', '$jason.items.length', '>', '0']
                        var expression = tokens.join(' ');
                        // => expression: '$jason.items && $jason.items.length > 0'
                        return {
                            name: func,
                            expression: expression
                        };
                    }
                }
                return null;
            },
            run: function(template, data) {
                var result;
                var fun;
                if (typeof template === 'string') {
                    // Leaf node, so call TRANSFORM.fillout()
                    if (Helper.is_template(template)) {
                        var include_string_re = /\{\{([ ]*#include)[ ]*([^ ]*)\}\}/g;
                        if (include_string_re.test(template)) {
                            fun = TRANSFORM.tokenize(template);
                            if (fun.expression) result = TRANSFORM.fillout(data, '{{' + fun.expression + '}}', true);
                            else // {'wrapper': '{{#include}}'}
                            result = template;
                        } else result = TRANSFORM.fillout(data, template);
                    } else result = template;
                } else if (Helper.is_array(template)) {
                    if (Conditional.is(template)) result = Conditional.run(template, data);
                    else {
                        result = [];
                        for(var i = 0; i < template.length; i++){
                            var item = TRANSFORM.run(template[i], data);
                            if (item) // null could mean #if clauses where nothing matched => In this case instead of rendering 'null', should just skip it completely
                            // Todo : Distinguish between #if arrays and ordinary arrays, and return null for ordinary arrays
                            result.push(item);
                        }
                    }
                } else if (Object.prototype.toString.call(template) === '[object Object]') {
                    // template is an object
                    result = {
                    };
                    // ## Handling #include
                    // This needs to precede everything else since it's meant to be overwritten
                    // in case of collision
                    var include_object_re = /\{\{([ ]*#include)[ ]*(.*)\}\}/;
                    var include_keys = Object.keys(template).filter(function(key) {
                        return include_object_re.test(key);
                    });
                    if (include_keys.length > 0) {
                        // find the first key with #include
                        fun = TRANSFORM.tokenize(include_keys[0]);
                        if (fun.expression) result = TRANSFORM.fillout(template[include_keys[0]], '{{' + fun.expression + '}}', true);
                        else result = template[include_keys[0]];
                    }
                    for(var key in template){
                        // Checking to see if the key contains template..
                        // Currently the only case for this are '#each' and '#include'
                        if (Helper.is_template(key)) {
                            fun = TRANSFORM.tokenize(key);
                            if (fun) {
                                if (fun.name === '#include') ;
                                else if (fun.name === '#let') {
                                    if (Helper.is_array(template[key]) && template[key].length == 2) {
                                        var defs = template[key][0];
                                        var real_template = template[key][1];
                                        // 1. Parse the first item to assign variables
                                        var parsed_keys = TRANSFORM.run(defs, data);
                                        // 2. modify the data
                                        for(var parsed_key in parsed_keys){
                                            TRANSFORM.memory[parsed_key] = parsed_keys[parsed_key];
                                            data[parsed_key] = parsed_keys[parsed_key];
                                        }
                                        // 2. Pass it into TRANSFORM.run
                                        result = TRANSFORM.run(real_template, data);
                                    }
                                } else if (fun.name === '#concat') {
                                    if (Helper.is_array(template[key])) {
                                        result = [];
                                        template[key].forEach(function(concat_item) {
                                            var res = TRANSFORM.run(concat_item, data);
                                            result = result.concat(res);
                                        });
                                        if (/\{\{(.*?)\}\}/.test(JSON.stringify(result))) // have successfully parsed.
                                        // so check for any template expression in the end result
                                        // and if there is one, revert to the original template
                                        result = template;
                                    }
                                } else if (fun.name === '#merge') {
                                    if (Helper.is_array(template[key])) {
                                        result = {
                                        };
                                        template[key].forEach(function(merge_item) {
                                            var res = TRANSFORM.run(merge_item, data);
                                            for(var key1 in res)result[key1] = res[key1];
                                        });
                                        // clean up $index from the result
                                        // necessary because #merge merges multiple objects into one,
                                        // and one of them may be 'this', in which case the $index attribute
                                        // will have snuck into the final result
                                        if (typeof data === 'object') {
                                            delete result['$index'];
                                            // #let handling
                                            for(var declared_vars in TRANSFORM.memory)delete result[declared_vars];
                                        } else {
                                            delete String.prototype.$index;
                                            delete Number.prototype.$index;
                                            delete Function.prototype.$index;
                                            delete Array.prototype.$index;
                                            delete Boolean.prototype.$index;
                                            // #let handling
                                            for(var declared_vars in TRANSFORM.memory){
                                                delete String.prototype[declared_vars];
                                                delete Number.prototype[declared_vars];
                                                delete Function.prototype[declared_vars];
                                                delete Array.prototype[declared_vars];
                                                delete Boolean.prototype[declared_vars];
                                            }
                                        }
                                    }
                                } else if (fun.name === '#each') {
                                    // newData will be filled with parsed results
                                    var newData = TRANSFORM.fillout(data, '{{' + fun.expression + '}}', true);
                                    // Ideally newData should be an array since it was prefixed by #each
                                    if (newData && Helper.is_array(newData)) {
                                        result = [];
                                        for(var index = 0; index < newData.length; index++){
                                            // temporarily set $index
                                            if (typeof newData[index] === 'object') {
                                                newData[index]['$index'] = index;
                                                // #let handling
                                                for(var declared_vars in TRANSFORM.memory)newData[index][declared_vars] = TRANSFORM.memory[declared_vars];
                                            } else {
                                                String.prototype.$index = index;
                                                Number.prototype.$index = index;
                                                Function.prototype.$index = index;
                                                Array.prototype.$index = index;
                                                Boolean.prototype.$index = index;
                                                // #let handling
                                                for(var declared_vars in TRANSFORM.memory){
                                                    String.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                                                    Number.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                                                    Function.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                                                    Array.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                                                    Boolean.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                                                }
                                            }
                                            // run
                                            var loop_item = TRANSFORM.run(template[key], newData[index]);
                                            // clean up $index
                                            if (typeof newData[index] === 'object') {
                                                delete newData[index]['$index'];
                                                // #let handling
                                                for(var declared_vars in TRANSFORM.memory)delete newData[index][declared_vars];
                                            } else {
                                                delete String.prototype.$index;
                                                delete Number.prototype.$index;
                                                delete Function.prototype.$index;
                                                delete Array.prototype.$index;
                                                delete Boolean.prototype.$index;
                                                // #let handling
                                                for(var declared_vars in TRANSFORM.memory){
                                                    delete String.prototype[declared_vars];
                                                    delete Number.prototype[declared_vars];
                                                    delete Function.prototype[declared_vars];
                                                    delete Array.prototype[declared_vars];
                                                    delete Boolean.prototype[declared_vars];
                                                }
                                            }
                                            if (loop_item) // null could mean #if clauses where nothing matched => In this case instead of rendering 'null', should just skip it completely
                                            result.push(loop_item);
                                        }
                                    } else // This probably means this #each is not for the current variable
                                    // For example {{#each items}} may not be an array, but just leave it be, so
                                    // But don't get rid of it,
                                    // Instead, just leave it as template
                                    // So some other parse run could fill it in later.
                                    result = template;
                                } // end of #each
                            } else {
                                // If the key is a template expression but aren't either #include or #each,
                                // it needs to be parsed
                                var k = TRANSFORM.fillout(data, key);
                                var v = TRANSFORM.fillout(data, template[key]);
                                if (k !== undefined && v !== undefined) result[k] = v;
                            }
                        } else if (typeof template[key] === 'string') {
                            fun = TRANSFORM.tokenize(template[key]);
                            if (fun && fun.name === '#?') {
                                // If the key is a template expression but aren't either #include or #each,
                                // it needs to be parsed
                                var filled = TRANSFORM.fillout(data, '{{' + fun.expression + '}}');
                                if (filled === '{{' + fun.expression + '}}' || !filled) ;
                                else result[key] = filled;
                            } else {
                                var item = TRANSFORM.run(template[key], data);
                                if (item !== undefined) result[key] = item;
                            }
                        } else {
                            var item = TRANSFORM.run(template[key], data);
                            if (item !== undefined) result[key] = item;
                        }
                    }
                } else return template;
                return result;
            },
            fillout: function(data, template, raw) {
                // 1. fill out if possible
                // 2. otherwise return the original
                var replaced = template;
                // Run fillout() only if it's a template. Otherwise just return the original string
                if (Helper.is_template(template)) {
                    var re = /\{\{(.*?)\}\}/g;
                    // variables are all instances of {{ }} in the current expression
                    // for example '{{this.item}} is {{this.user}}'s' has two variables: ['this.item', 'this.user']
                    var variables = template.match(re);
                    if (variables) {
                        if (raw) // Because #each is expecting an array, it shouldn't be stringified.
                        // Therefore we pass template:null,
                        // which will result in returning the original result instead of trying to
                        // replace it into the template with a stringified version
                        replaced = TRANSFORM._fillout({
                            variable: variables[0],
                            data: data,
                            template: null
                        });
                        else for(var i = 0; i < variables.length; i++){
                            var variable = variables[i];
                            replaced = TRANSFORM._fillout({
                                variable: variable,
                                data: data,
                                template: replaced
                            });
                        }
                    } else return replaced;
                }
                return replaced;
            },
            _fillout: function(options) {
                // Given a template and fill it out with passed slot and its corresponding data
                var re = /\{\{(.*?)\}\}/g;
                var full_re = /^\{\{((?!\}\}).)*\}\}$/;
                var variable = options.variable;
                var data = options.data;
                var template = options.template;
                try {
                    // 1. Evaluate the variable
                    var slot = variable.replace(re, '$1');
                    // data must exist. Otherwise replace with blank
                    if (data) {
                        var func;
                        // Attach $root to each node so that we can reference it from anywhere
                        var data_type = typeof data;
                        if ([
                            'number',
                            'string',
                            'array',
                            'boolean',
                            'function'
                        ].indexOf(data_type === -1)) data.$root = root;
                        // If the pattern ends with a return statement, but is NOT wrapped inside another function ([^}]*$), it's a function expression
                        var match = /function\([ ]*\)[ ]*\{(.*)\}[ ]*$/g.exec(slot);
                        if (match) func = Function('with(this) {' + match[1] + '}').bind(data);
                        else if (/\breturn [^;]+;?[ ]*$/.test(slot) && /return[^}]*$/.test(slot)) func = Function('with(this) {' + slot + '}').bind(data);
                        else // Ordinary simple expression that
                        func = Function('with(this) {return (' + slot + ')}').bind(data);
                        var evaluated = func();
                        delete data.$root // remove $root now that the parsing is over
                        ;
                        if (evaluated) evaluated = evaluated.valueOf();
                        if (typeof evaluated === 'undefined') // (example: var a = [1,2,3,4]; var b = a[5];)
                        return template;
                        else // Be forgiving and print any type, even functions, so it's easier to debug
                        if (evaluated) {
                            // IDEAL CASE : Return the replaced template
                            if (template) {
                                // if the template is a pure template with no additional static text,
                                // And if the evaluated value is an object or an array, we return the object itself instead of
                                // replacing it into template via string replace, since that will turn it into a string.
                                if (full_re.test(template)) return evaluated;
                                else return template.replace(variable, evaluated);
                            } else return evaluated;
                        } else {
                            // Treat false or null as blanks (so that #if can handle it)
                            if (template) {
                                // if the template is a pure template with no additional static text,
                                // And if the evaluated value is an object or an array, we return the object itself instead of
                                // replacing it into template via string replace, since that will turn it into a string.
                                if (full_re.test(template)) return evaluated;
                                else return template.replace(variable, '');
                            } else return '';
                        }
                    }
                    // REST OF THE CASES
                    // if evaluated is null or undefined,
                    // it probably means one of the following:
                    //  1. The current data being parsed is not for the current template
                    //  2. It's an error
                    //
                    //  In either case we need to return the original template unparsed.
                    //    1. for case1, we need to leave the template alone so that the template can be parsed
                    //      by another data set
                    //    2. for case2, it's better to just return the template so it's easier to debug
                    return template;
                } catch (err) {
                    return template;
                }
            }
        };
        var SELECT = {
            // current: currently accessed object
            // path: the path leading to this item
            // filter: The filter function to decide whether to select or not
            $val: null,
            $selected: [],
            $injected: [],
            $progress: null,
            exec: function(current, path, filter) {
                // if current matches the pattern, put it in the selected array
                if (typeof current === 'string') ;
                else if (Helper.is_array(current)) for(var i = 0; i < current.length; i++)SELECT.exec(current[i], path + '[' + i + ']', filter);
                else {
                    // object
                    for(var key in current)// so shouldn't be used to iterate
                    if (key !== '$root') {
                        if (filter(key, current[key])) {
                            var index = SELECT.$selected.length;
                            SELECT.$selected.push({
                                index: index,
                                key: key,
                                path: path,
                                object: current,
                                value: current[key]
                            });
                        }
                        SELECT.exec(current[key], path + '["' + key + '"]', filter);
                    }
                }
            },
            inject: function(obj, serialized) {
                SELECT.$injected = obj;
                try {
                    if (serialized) SELECT.$injected = JSON.parse(obj);
                } catch (error) {
                }
                if (Object.keys(SELECT.$injected).length > 0) SELECT.select(SELECT.$injected);
                return SELECT;
            },
            // returns the object itself
            select: function(obj, filter, serialized) {
                // iterate '$selected'
                //
                /*
            SELECT.$selected = [{
              value {
                '{{#include}}': {
                  '{{#each items}}': {
                    'type': 'label',
                    'text': '{{name}}'
                  }
                }
              },
              path: '$jason.head.actions.$load'
              ...
            }]
            */ var json = obj;
                try {
                    if (serialized) json = JSON.parse(obj);
                } catch (error) {
                }
                if (filter) {
                    SELECT.$selected = [];
                    SELECT.exec(json, '', filter);
                } else SELECT.$selected = null;
                if (json && (Helper.is_array(json) || typeof json === 'object')) {
                    if (!SELECT.$progress) {
                        // initialize
                        if (Helper.is_array(json)) {
                            SELECT.$val = [];
                            SELECT.$selected_root = [];
                        } else {
                            SELECT.$val = {
                            };
                            SELECT.$selected_root = {
                            };
                        }
                    }
                    Object.keys(json).forEach(function(key) {
                        // for (var key in json) {
                        SELECT.$val[key] = json[key];
                        SELECT.$selected_root[key] = json[key];
                    });
                } else {
                    SELECT.$val = json;
                    SELECT.$selected_root = json;
                }
                SELECT.$progress = true // set the 'in progress' flag
                ;
                return SELECT;
            },
            transformWith: function(obj, serialized) {
                SELECT.$parsed = [];
                SELECT.$progress = null;
                /*
            *  'selected' is an array that contains items that looks like this:
            *  {
            *    key: The selected key,
            *    path: The path leading down to the selected key,
            *    object: The entire object that contains the currently selected key/val pair
            *    value: The selected value
            *  }
            */ var template = obj;
                try {
                    if (serialized) template = JSON.parse(obj);
                } catch (error) {
                }
                // Setting $root
                SELECT.$template_root = template;
                String.prototype.$root = SELECT.$selected_root;
                Number.prototype.$root = SELECT.$selected_root;
                Function.prototype.$root = SELECT.$selected_root;
                Array.prototype.$root = SELECT.$selected_root;
                Boolean.prototype.$root = SELECT.$selected_root;
                root = SELECT.$selected_root;
                // generate new $selected_root
                if (SELECT.$selected && SELECT.$selected.length > 0) {
                    SELECT.$selected.sort(function(a, b) {
                        // sort by path length, so that deeper level items will be replaced first
                        // TODO: may need to look into edge cases
                        return b.path.length - a.path.length;
                    }).forEach(function(selection) {
                        // SELECT.$selected.forEach(function(selection) {
                        // parse selected
                        var parsed_object = TRANSFORM.run(template, selection.object);
                        // apply the result to root
                        SELECT.$selected_root = Helper.resolve(SELECT.$selected_root, selection.path, parsed_object);
                        // update selected object with the parsed result
                        selection.object = parsed_object;
                    });
                    SELECT.$selected.sort(function(a, b) {
                        return a.aws - b.aws;
                    });
                } else {
                    var parsed_object = TRANSFORM.run(template, SELECT.$selected_root);
                    // apply the result to root
                    SELECT.$selected_root = Helper.resolve(SELECT.$selected_root, '', parsed_object);
                }
                delete String.prototype.$root;
                delete Number.prototype.$root;
                delete Function.prototype.$root;
                delete Array.prototype.$root;
                delete Boolean.prototype.$root;
                return SELECT;
            },
            transform: function(obj, serialized) {
                SELECT.$parsed = [];
                SELECT.$progress = null;
                /*
            'selected' is an array that contains items that looks like this:

            {
              key: The selected key,
              path: The path leading down to the selected key,
              object: The entire object that contains the currently selected key/val pair
              value: The selected value
            }
            */ var data = obj;
                try {
                    if (serialized) data = JSON.parse(obj);
                } catch (error) {
                }
                // since we're assuming that the template has been already selected, the $template_root is $selected_root
                SELECT.$template_root = SELECT.$selected_root;
                String.prototype.$root = data;
                Number.prototype.$root = data;
                Function.prototype.$root = data;
                Array.prototype.$root = data;
                Boolean.prototype.$root = data;
                root = data;
                if (SELECT.$selected && SELECT.$selected.length > 0) {
                    SELECT.$selected.sort(function(a, b) {
                        // sort by path length, so that deeper level items will be replaced first
                        // TODO: may need to look into edge cases
                        return b.path.length - a.path.length;
                    }).forEach(function(selection) {
                        // parse selected
                        var parsed_object = TRANSFORM.run(selection.object, data);
                        // apply the result to root
                        SELECT.$template_root = Helper.resolve(SELECT.$template_root, selection.path, parsed_object);
                        SELECT.$selected_root = SELECT.$template_root;
                        // update selected object with the parsed result
                        selection.object = parsed_object;
                    });
                    SELECT.$selected.sort(function(a, b) {
                        return a.aws - b.aws;
                    });
                } else {
                    var parsed_object = TRANSFORM.run(SELECT.$selected_root, data);
                    // apply the result to root
                    SELECT.$template_root = Helper.resolve(SELECT.$template_root, '', parsed_object);
                    SELECT.$selected_root = SELECT.$template_root;
                }
                delete String.prototype.$root;
                delete Number.prototype.$root;
                delete Function.prototype.$root;
                delete Array.prototype.$root;
                delete Boolean.prototype.$root;
                return SELECT;
            },
            // Terminal methods
            objects: function() {
                SELECT.$progress = null;
                if (SELECT.$selected) return SELECT.$selected.map(function(item) {
                    return item.object;
                });
                else return [
                    SELECT.$selected_root
                ];
            },
            keys: function() {
                SELECT.$progress = null;
                if (SELECT.$selected) return SELECT.$selected.map(function(item) {
                    return item.key;
                });
                else {
                    if (Array.isArray(SELECT.$selected_root)) return Object.keys(SELECT.$selected_root).map(function(key) {
                        return parseInt(key);
                    });
                    else return Object.keys(SELECT.$selected_root);
                }
            },
            paths: function() {
                SELECT.$progress = null;
                if (SELECT.$selected) return SELECT.$selected.map(function(item) {
                    return item.path;
                });
                else {
                    if (Array.isArray(SELECT.$selected_root)) return Object.keys(SELECT.$selected_root).map(function(item) {
                        // key is integer
                        return '[' + item + ']';
                    });
                    else return Object.keys(SELECT.$selected_root).map(function(item) {
                        // key is string
                        return '["' + item + '"]';
                    });
                }
            },
            values: function() {
                SELECT.$progress = null;
                if (SELECT.$selected) return SELECT.$selected.map(function(item) {
                    return item.value;
                });
                else return Object.values(SELECT.$selected_root);
            },
            root: function() {
                SELECT.$progress = null;
                return SELECT.$selected_root;
            }
        };
        // Native JSON object override
        var _stringify = JSON.stringify;
        JSON.stringify = function(val, replacer, spaces) {
            var t = typeof val;
            if ([
                'number',
                'string',
                'boolean'
            ].indexOf(t) !== -1) return _stringify(val, replacer, spaces);
            if (!replacer) return _stringify(val, function(key, val1) {
                if (SELECT.$injected && SELECT.$injected.length > 0 && SELECT.$injected.indexOf(key) !== -1) return undefined;
                if (key === '$root' || key === '$index') return undefined;
                if (key in TRANSFORM.memory) return undefined;
                if (typeof val1 === 'function') return '(' + val1.toString() + ')';
                else return val1;
            }, spaces);
            else return _stringify(val, replacer, spaces);
        };
        return {
            TRANSFORM: TRANSFORM,
            // transform: TRANSFORM,
            SELECT: SELECT,
            Conditional: Conditional,
            Helper: Helper,
            inject: SELECT.inject,
            select: SELECT.select,
            transform: TRANSFORM.transform
        };
    // Export
    // if (typeof exports !== 'undefined') {
    //   var x =
    //   if (typeof module !== 'undefined' && module.exports) { exports = module.exports = x }
    //   exports = x
    // } else {
    //   $context.ST = {
    //     select: SELECT.select,
    //     inject: SELECT.inject,
    //     transform: TRANSFORM.transform
    //   }
    // }
    };
});
parcelRequire("4TeMe");

},{}]},["2rAXy","luVIP","cXIbU"], "cXIbU", "parcelRequire2674")

//# sourceMappingURL=index.dialer.39d352ae.js.map
