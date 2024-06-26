function z_(A, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n)
        if (r !== "default" && !(r in A)) {
          const o = Object.getOwnPropertyDescriptor(n, r);
          o && Object.defineProperty(A, r, o.get ? o : {
            enumerable: !0,
            get: () => n[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }));
}
var Ra = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ph(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var iy = { exports: {} }, xf = {}, oy = { exports: {} }, yA = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), Y_ = Symbol.for("react.portal"), J_ = Symbol.for("react.fragment"), j_ = Symbol.for("react.strict_mode"), Z_ = Symbol.for("react.profiler"), q_ = Symbol.for("react.provider"), AT = Symbol.for("react.context"), eT = Symbol.for("react.forward_ref"), tT = Symbol.for("react.suspense"), nT = Symbol.for("react.memo"), rT = Symbol.for("react.lazy"), Zm = Symbol.iterator;
function iT(A) {
  return A === null || typeof A != "object" ? null : (A = Zm && A[Zm] || A["@@iterator"], typeof A == "function" ? A : null);
}
var ay = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sy = Object.assign, ly = {};
function la(A, e, t) {
  this.props = A, this.context = e, this.refs = ly, this.updater = t || ay;
}
la.prototype.isReactComponent = {};
la.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
la.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function uy() {
}
uy.prototype = la.prototype;
function Gh(A, e, t) {
  this.props = A, this.context = e, this.refs = ly, this.updater = t || ay;
}
var Vh = Gh.prototype = new uy();
Vh.constructor = Gh;
sy(Vh, la.prototype);
Vh.isPureReactComponent = !0;
var qm = Array.isArray, cy = Object.prototype.hasOwnProperty, $h = { current: null }, fy = { key: !0, ref: !0, __self: !0, __source: !0 };
function dy(A, e, t) {
  var n, r = {}, o = null, s = null;
  if (e != null) for (n in e.ref !== void 0 && (s = e.ref), e.key !== void 0 && (o = "" + e.key), e) cy.call(e, n) && !fy.hasOwnProperty(n) && (r[n] = e[n]);
  var l = arguments.length - 2;
  if (l === 1) r.children = t;
  else if (1 < l) {
    for (var c = Array(l), f = 0; f < l; f++) c[f] = arguments[f + 2];
    r.children = c;
  }
  if (A && A.defaultProps) for (n in l = A.defaultProps, l) r[n] === void 0 && (r[n] = l[n]);
  return { $$typeof: al, type: A, key: o, ref: s, props: r, _owner: $h.current };
}
function oT(A, e) {
  return { $$typeof: al, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function Wh(A) {
  return typeof A == "object" && A !== null && A.$$typeof === al;
}
function aT(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var AC = /\/+/g;
function Ng(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? aT("" + A.key) : e.toString(36);
}
function uc(A, e, t, n, r) {
  var o = typeof A;
  (o === "undefined" || o === "boolean") && (A = null);
  var s = !1;
  if (A === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (A.$$typeof) {
        case al:
        case Y_:
          s = !0;
      }
  }
  if (s) return s = A, r = r(s), A = n === "" ? "." + Ng(s, 0) : n, qm(r) ? (t = "", A != null && (t = A.replace(AC, "$&/") + "/"), uc(r, e, t, "", function(f) {
    return f;
  })) : r != null && (Wh(r) && (r = oT(r, t + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(AC, "$&/") + "/") + A)), e.push(r)), 1;
  if (s = 0, n = n === "" ? "." : n + ":", qm(A)) for (var l = 0; l < A.length; l++) {
    o = A[l];
    var c = n + Ng(o, l);
    s += uc(o, e, t, c, r);
  }
  else if (c = iT(A), typeof c == "function") for (A = c.call(A), l = 0; !(o = A.next()).done; ) o = o.value, c = n + Ng(o, l++), s += uc(o, e, t, c, r);
  else if (o === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function fu(A, e, t) {
  if (A == null) return A;
  var n = [], r = 0;
  return uc(A, n, "", "", function(o) {
    return e.call(t, o, r++);
  }), n;
}
function sT(A) {
  if (A._status === -1) {
    var e = A._result;
    e = e(), e.then(function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 1, A._result = t);
    }, function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 2, A._result = t);
    }), A._status === -1 && (A._status = 0, A._result = e);
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var Ye = { current: null }, cc = { transition: null }, lT = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: cc, ReactCurrentOwner: $h };
function gy() {
  throw Error("act(...) is not supported in production builds of React.");
}
yA.Children = { map: fu, forEach: function(A, e, t) {
  fu(A, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(A) {
  var e = 0;
  return fu(A, function() {
    e++;
  }), e;
}, toArray: function(A) {
  return fu(A, function(e) {
    return e;
  }) || [];
}, only: function(A) {
  if (!Wh(A)) throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
yA.Component = la;
yA.Fragment = J_;
yA.Profiler = Z_;
yA.PureComponent = Gh;
yA.StrictMode = j_;
yA.Suspense = tT;
yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lT;
yA.act = gy;
yA.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var n = sy({}, A.props), r = A.key, o = A.ref, s = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, s = $h.current), e.key !== void 0 && (r = "" + e.key), A.type && A.type.defaultProps) var l = A.type.defaultProps;
    for (c in e) cy.call(e, c) && !fy.hasOwnProperty(c) && (n[c] = e[c] === void 0 && l !== void 0 ? l[c] : e[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = t;
  else if (1 < c) {
    l = Array(c);
    for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
    n.children = l;
  }
  return { $$typeof: al, type: A.type, key: r, ref: o, props: n, _owner: s };
};
yA.createContext = function(A) {
  return A = { $$typeof: AT, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: q_, _context: A }, A.Consumer = A;
};
yA.createElement = dy;
yA.createFactory = function(A) {
  var e = dy.bind(null, A);
  return e.type = A, e;
};
yA.createRef = function() {
  return { current: null };
};
yA.forwardRef = function(A) {
  return { $$typeof: eT, render: A };
};
yA.isValidElement = Wh;
yA.lazy = function(A) {
  return { $$typeof: rT, _payload: { _status: -1, _result: A }, _init: sT };
};
yA.memo = function(A, e) {
  return { $$typeof: nT, type: A, compare: e === void 0 ? null : e };
};
yA.startTransition = function(A) {
  var e = cc.transition;
  cc.transition = {};
  try {
    A();
  } finally {
    cc.transition = e;
  }
};
yA.unstable_act = gy;
yA.useCallback = function(A, e) {
  return Ye.current.useCallback(A, e);
};
yA.useContext = function(A) {
  return Ye.current.useContext(A);
};
yA.useDebugValue = function() {
};
yA.useDeferredValue = function(A) {
  return Ye.current.useDeferredValue(A);
};
yA.useEffect = function(A, e) {
  return Ye.current.useEffect(A, e);
};
yA.useId = function() {
  return Ye.current.useId();
};
yA.useImperativeHandle = function(A, e, t) {
  return Ye.current.useImperativeHandle(A, e, t);
};
yA.useInsertionEffect = function(A, e) {
  return Ye.current.useInsertionEffect(A, e);
};
yA.useLayoutEffect = function(A, e) {
  return Ye.current.useLayoutEffect(A, e);
};
yA.useMemo = function(A, e) {
  return Ye.current.useMemo(A, e);
};
yA.useReducer = function(A, e, t) {
  return Ye.current.useReducer(A, e, t);
};
yA.useRef = function(A) {
  return Ye.current.useRef(A);
};
yA.useState = function(A) {
  return Ye.current.useState(A);
};
yA.useSyncExternalStore = function(A, e, t) {
  return Ye.current.useSyncExternalStore(A, e, t);
};
yA.useTransition = function() {
  return Ye.current.useTransition();
};
yA.version = "18.3.1";
oy.exports = yA;
var b = oy.exports;
const oA = /* @__PURE__ */ Ph(b), XB = /* @__PURE__ */ z_({
  __proto__: null,
  default: oA
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT = b, cT = Symbol.for("react.element"), fT = Symbol.for("react.fragment"), dT = Object.prototype.hasOwnProperty, gT = uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, BT = { key: !0, ref: !0, __self: !0, __source: !0 };
function By(A, e, t) {
  var n, r = {}, o = null, s = null;
  t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e) dT.call(e, n) && !BT.hasOwnProperty(n) && (r[n] = e[n]);
  if (A && A.defaultProps) for (n in e = A.defaultProps, e) r[n] === void 0 && (r[n] = e[n]);
  return { $$typeof: cT, type: A, key: o, ref: s, props: r, _owner: gT.current };
}
xf.Fragment = fT;
xf.jsx = By;
xf.jsxs = By;
iy.exports = xf;
var IA = iy.exports, py = { exports: {} }, Ft = {}, hy = { exports: {} }, wy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(A) {
  function e(P, V) {
    var X = P.length;
    P.push(V);
    A: for (; 0 < X; ) {
      var j = X - 1 >>> 1, BA = P[j];
      if (0 < r(BA, V)) P[j] = V, P[X] = BA, X = j;
      else break A;
    }
  }
  function t(P) {
    return P.length === 0 ? null : P[0];
  }
  function n(P) {
    if (P.length === 0) return null;
    var V = P[0], X = P.pop();
    if (X !== V) {
      P[0] = X;
      A: for (var j = 0, BA = P.length, OA = BA >>> 1; j < OA; ) {
        var GA = 2 * (j + 1) - 1, LA = P[GA], HA = GA + 1, Ee = P[HA];
        if (0 > r(LA, X)) HA < BA && 0 > r(Ee, LA) ? (P[j] = Ee, P[HA] = X, j = HA) : (P[j] = LA, P[GA] = X, j = GA);
        else if (HA < BA && 0 > r(Ee, X)) P[j] = Ee, P[HA] = X, j = HA;
        else break A;
      }
    }
    return V;
  }
  function r(P, V) {
    var X = P.sortIndex - V.sortIndex;
    return X !== 0 ? X : P.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    A.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, l = s.now();
    A.unstable_now = function() {
      return s.now() - l;
    };
  }
  var c = [], f = [], g = 1, B = null, p = 3, v = !1, F = !1, U = !1, L = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(P) {
    for (var V = t(f); V !== null; ) {
      if (V.callback === null) n(f);
      else if (V.startTime <= P) n(f), V.sortIndex = V.expirationTime, e(c, V);
      else break;
      V = t(f);
    }
  }
  function I(P) {
    if (U = !1, y(P), !F) if (t(c) !== null) F = !0, fA(H);
    else {
      var V = t(f);
      V !== null && J(I, V.startTime - P);
    }
  }
  function H(P, V) {
    F = !1, U && (U = !1, m(k), k = -1), v = !0;
    var X = p;
    try {
      for (y(V), B = t(c); B !== null && (!(B.expirationTime > V) || P && !sA()); ) {
        var j = B.callback;
        if (typeof j == "function") {
          B.callback = null, p = B.priorityLevel;
          var BA = j(B.expirationTime <= V);
          V = A.unstable_now(), typeof BA == "function" ? B.callback = BA : B === t(c) && n(c), y(V);
        } else n(c);
        B = t(c);
      }
      if (B !== null) var OA = !0;
      else {
        var GA = t(f);
        GA !== null && J(I, GA.startTime - V), OA = !1;
      }
      return OA;
    } finally {
      B = null, p = X, v = !1;
    }
  }
  var S = !1, O = null, k = -1, N = 5, W = -1;
  function sA() {
    return !(A.unstable_now() - W < N);
  }
  function iA() {
    if (O !== null) {
      var P = A.unstable_now();
      W = P;
      var V = !0;
      try {
        V = O(!0, P);
      } finally {
        V ? tA() : (S = !1, O = null);
      }
    } else S = !1;
  }
  var tA;
  if (typeof w == "function") tA = function() {
    w(iA);
  };
  else if (typeof MessageChannel < "u") {
    var lA = new MessageChannel(), mA = lA.port2;
    lA.port1.onmessage = iA, tA = function() {
      mA.postMessage(null);
    };
  } else tA = function() {
    L(iA, 0);
  };
  function fA(P) {
    O = P, S || (S = !0, tA());
  }
  function J(P, V) {
    k = L(function() {
      P(A.unstable_now());
    }, V);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, A.unstable_continueExecution = function() {
    F || v || (F = !0, fA(H));
  }, A.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < P ? Math.floor(1e3 / P) : 5;
  }, A.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, A.unstable_getFirstCallbackNode = function() {
    return t(c);
  }, A.unstable_next = function(P) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = p;
    }
    var X = p;
    p = V;
    try {
      return P();
    } finally {
      p = X;
    }
  }, A.unstable_pauseExecution = function() {
  }, A.unstable_requestPaint = function() {
  }, A.unstable_runWithPriority = function(P, V) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var X = p;
    p = P;
    try {
      return V();
    } finally {
      p = X;
    }
  }, A.unstable_scheduleCallback = function(P, V, X) {
    var j = A.unstable_now();
    switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? j + X : j) : X = j, P) {
      case 1:
        var BA = -1;
        break;
      case 2:
        BA = 250;
        break;
      case 5:
        BA = 1073741823;
        break;
      case 4:
        BA = 1e4;
        break;
      default:
        BA = 5e3;
    }
    return BA = X + BA, P = { id: g++, callback: V, priorityLevel: P, startTime: X, expirationTime: BA, sortIndex: -1 }, X > j ? (P.sortIndex = X, e(f, P), t(c) === null && P === t(f) && (U ? (m(k), k = -1) : U = !0, J(I, X - j))) : (P.sortIndex = BA, e(c, P), F || v || (F = !0, fA(H))), P;
  }, A.unstable_shouldYield = sA, A.unstable_wrapCallback = function(P) {
    var V = p;
    return function() {
      var X = p;
      p = V;
      try {
        return P.apply(this, arguments);
      } finally {
        p = X;
      }
    };
  };
})(wy);
hy.exports = wy;
var pT = hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT = b, yt = pT;
function $(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vy = /* @__PURE__ */ new Set(), Ls = {};
function Gi(A, e) {
  Xo(A, e), Xo(A + "Capture", e);
}
function Xo(A, e) {
  for (Ls[A] = e, A = 0; A < e.length; A++) vy.add(e[A]);
}
var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zB = Object.prototype.hasOwnProperty, wT = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eC = {}, tC = {};
function vT(A) {
  return zB.call(tC, A) ? !0 : zB.call(eC, A) ? !1 : wT.test(A) ? tC[A] = !0 : (eC[A] = !0, !1);
}
function mT(A, e, t, n) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function CT(A, e, t, n) {
  if (e === null || typeof e > "u" || mT(A, e, t, n)) return !0;
  if (n) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function Je(A, e, t, n, r, o, s) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = r, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = o, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  _e[A] = new Je(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  _e[e] = new Je(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  _e[A] = new Je(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  _e[A] = new Je(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  _e[A] = new Je(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  _e[A] = new Je(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  _e[A] = new Je(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  _e[A] = new Je(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  _e[A] = new Je(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var Xh = /[\-:]([a-z])/g;
function zh(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    Xh,
    zh
  );
  _e[e] = new Je(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(Xh, zh);
  _e[e] = new Je(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(Xh, zh);
  _e[e] = new Je(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  _e[A] = new Je(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  _e[A] = new Je(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function Yh(A, e, t, n) {
  var r = _e.hasOwnProperty(e) ? _e[e] : null;
  (r !== null ? r.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (CT(e, t, r, n) && (t = null), n || r === null ? vT(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : r.mustUseProperty ? A[r.propertyName] = t === null ? r.type === 3 ? !1 : "" : t : (e = r.attributeName, n = r.attributeNamespace, t === null ? A.removeAttribute(e) : (r = r.type, t = r === 3 || r === 4 && t === !0 ? "" : "" + t, n ? A.setAttributeNS(n, e, t) : A.setAttribute(e, t))));
}
var ar = hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, du = Symbol.for("react.element"), mo = Symbol.for("react.portal"), Co = Symbol.for("react.fragment"), Jh = Symbol.for("react.strict_mode"), YB = Symbol.for("react.profiler"), my = Symbol.for("react.provider"), Cy = Symbol.for("react.context"), jh = Symbol.for("react.forward_ref"), JB = Symbol.for("react.suspense"), jB = Symbol.for("react.suspense_list"), Zh = Symbol.for("react.memo"), yr = Symbol.for("react.lazy"), Qy = Symbol.for("react.offscreen"), nC = Symbol.iterator;
function Ka(A) {
  return A === null || typeof A != "object" ? null : (A = nC && A[nC] || A["@@iterator"], typeof A == "function" ? A : null);
}
var ne = Object.assign, Pg;
function Za(A) {
  if (Pg === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    Pg = e && e[1] || "";
  }
  return `
` + Pg + A;
}
var Gg = !1;
function Vg(A, e) {
  if (!A || Gg) return "";
  Gg = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (f) {
        var n = f;
      }
      Reflect.construct(A, [], e);
    } else {
      try {
        e.call();
      } catch (f) {
        n = f;
      }
      A.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        n = f;
      }
      A();
    }
  } catch (f) {
    if (f && n && typeof f.stack == "string") {
      for (var r = f.stack.split(`
`), o = n.stack.split(`
`), s = r.length - 1, l = o.length - 1; 1 <= s && 0 <= l && r[s] !== o[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (r[s] !== o[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || r[s] !== o[l]) {
              var c = `
` + r[s].replace(" at new ", " at ");
              return A.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", A.displayName)), c;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    Gg = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? Za(A) : "";
}
function QT(A) {
  switch (A.tag) {
    case 5:
      return Za(A.type);
    case 16:
      return Za("Lazy");
    case 13:
      return Za("Suspense");
    case 19:
      return Za("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = Vg(A.type, !1), A;
    case 11:
      return A = Vg(A.type.render, !1), A;
    case 1:
      return A = Vg(A.type, !0), A;
    default:
      return "";
  }
}
function ZB(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case Co:
      return "Fragment";
    case mo:
      return "Portal";
    case YB:
      return "Profiler";
    case Jh:
      return "StrictMode";
    case JB:
      return "Suspense";
    case jB:
      return "SuspenseList";
  }
  if (typeof A == "object") switch (A.$$typeof) {
    case Cy:
      return (A.displayName || "Context") + ".Consumer";
    case my:
      return (A._context.displayName || "Context") + ".Provider";
    case jh:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case Zh:
      return e = A.displayName || null, e !== null ? e : ZB(A.type) || "Memo";
    case yr:
      e = A._payload, A = A._init;
      try {
        return ZB(A(e));
      } catch {
      }
  }
  return null;
}
function yT(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return A = e.render, A = A.displayName || A.name || "", e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ZB(e);
    case 8:
      return e === Jh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function $r(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function yy(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function FT(A) {
  var e = yy(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), n = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var r = t.get, o = t.set;
    return Object.defineProperty(A, e, { configurable: !0, get: function() {
      return r.call(this);
    }, set: function(s) {
      n = "" + s, o.call(this, s);
    } }), Object.defineProperty(A, e, { enumerable: t.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(s) {
      n = "" + s;
    }, stopTracking: function() {
      A._valueTracker = null, delete A[e];
    } };
  }
}
function gu(A) {
  A._valueTracker || (A._valueTracker = FT(A));
}
function Fy(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(), n = "";
  return A && (n = yy(A) ? A.checked ? "true" : "false" : A.value), A = n, A !== t ? (e.setValue(A), !0) : !1;
}
function Tc(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function qB(A, e) {
  var t = e.checked;
  return ne({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? A._wrapperState.initialChecked });
}
function rC(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  t = $r(e.value != null ? e.value : t), A._wrapperState = { initialChecked: n, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Uy(A, e) {
  e = e.checked, e != null && Yh(A, "checked", e, !1);
}
function Ap(A, e) {
  Uy(A, e);
  var t = $r(e.value), n = e.type;
  if (t != null) n === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (n === "submit" || n === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? ep(A, e.type, t) : e.hasOwnProperty("defaultValue") && ep(A, e.type, $r(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function iC(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function ep(A, e, t) {
  (e !== "number" || Tc(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var qa = Array.isArray;
function ko(A, e, t, n) {
  if (A = A.options, e) {
    e = {};
    for (var r = 0; r < t.length; r++) e["$" + t[r]] = !0;
    for (t = 0; t < A.length; t++) r = e.hasOwnProperty("$" + A[t].value), A[t].selected !== r && (A[t].selected = r), r && n && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + $r(t), e = null, r = 0; r < A.length; r++) {
      if (A[r].value === t) {
        A[r].selected = !0, n && (A[r].defaultSelected = !0);
        return;
      }
      e !== null || A[r].disabled || (e = A[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function tp(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error($(91));
  return ne({}, e, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
}
function oC(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error($(92));
      if (qa(t)) {
        if (1 < t.length) throw Error($(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: $r(t) };
}
function Ey(A, e) {
  var t = $r(e.value), n = $r(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), n != null && (A.defaultValue = "" + n);
}
function aC(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function Iy(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function np(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? Iy(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var Bu, xy = function(A) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, n, r);
    });
  } : A;
}(function(A, e) {
  if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = e;
  else {
    for (Bu = Bu || document.createElement("div"), Bu.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Bu.firstChild; A.firstChild; ) A.removeChild(A.firstChild);
    for (; e.firstChild; ) A.appendChild(e.firstChild);
  }
});
function bs(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var fs = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, UT = ["Webkit", "ms", "Moz", "O"];
Object.keys(fs).forEach(function(A) {
  UT.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), fs[e] = fs[A];
  });
});
function Hy(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || fs.hasOwnProperty(A) && fs[A] ? ("" + e).trim() : e + "px";
}
function Sy(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var n = t.indexOf("--") === 0, r = Hy(t, e[t], n);
    t === "float" && (t = "cssFloat"), n ? A.setProperty(t, r) : A[t] = r;
  }
}
var ET = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rp(A, e) {
  if (e) {
    if (ET[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error($(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error($(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error($(62));
  }
}
function ip(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var op = null;
function qh(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var ap = null, Ro = null, Ko = null;
function sC(A) {
  if (A = ul(A)) {
    if (typeof ap != "function") throw Error($(280));
    var e = A.stateNode;
    e && (e = _f(e), ap(A.stateNode, A.type, e));
  }
}
function Ly(A) {
  Ro ? Ko ? Ko.push(A) : Ko = [A] : Ro = A;
}
function by() {
  if (Ro) {
    var A = Ro, e = Ko;
    if (Ko = Ro = null, sC(A), e) for (A = 0; A < e.length; A++) sC(e[A]);
  }
}
function _y(A, e) {
  return A(e);
}
function Ty() {
}
var $g = !1;
function Oy(A, e, t) {
  if ($g) return A(e, t);
  $g = !0;
  try {
    return _y(A, e, t);
  } finally {
    $g = !1, (Ro !== null || Ko !== null) && (Ty(), by());
  }
}
function _s(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var n = _f(t);
  if (n === null) return null;
  t = n[e];
  A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (A = A.type, n = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !n;
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error($(231, e, typeof t));
  return t;
}
var sp = !1;
if (qn) try {
  var Ma = {};
  Object.defineProperty(Ma, "passive", { get: function() {
    sp = !0;
  } }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
} catch {
  sp = !1;
}
function IT(A, e, t, n, r, o, s, l, c) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, f);
  } catch (g) {
    this.onError(g);
  }
}
var ds = !1, Oc = null, Dc = !1, lp = null, xT = { onError: function(A) {
  ds = !0, Oc = A;
} };
function HT(A, e, t, n, r, o, s, l, c) {
  ds = !1, Oc = null, IT.apply(xT, arguments);
}
function ST(A, e, t, n, r, o, s, l, c) {
  if (HT.apply(this, arguments), ds) {
    if (ds) {
      var f = Oc;
      ds = !1, Oc = null;
    } else throw Error($(198));
    Dc || (Dc = !0, lp = f);
  }
}
function Vi(A) {
  var e = A, t = A;
  if (A.alternate) for (; e.return; ) e = e.return;
  else {
    A = e;
    do
      e = A, e.flags & 4098 && (t = e.return), A = e.return;
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function Dy(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function lC(A) {
  if (Vi(A) !== A) throw Error($(188));
}
function LT(A) {
  var e = A.alternate;
  if (!e) {
    if (e = Vi(A), e === null) throw Error($(188));
    return e !== A ? null : A;
  }
  for (var t = A, n = e; ; ) {
    var r = t.return;
    if (r === null) break;
    var o = r.alternate;
    if (o === null) {
      if (n = r.return, n !== null) {
        t = n;
        continue;
      }
      break;
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === t) return lC(r), A;
        if (o === n) return lC(r), e;
        o = o.sibling;
      }
      throw Error($(188));
    }
    if (t.return !== n.return) t = r, n = o;
    else {
      for (var s = !1, l = r.child; l; ) {
        if (l === t) {
          s = !0, t = r, n = o;
          break;
        }
        if (l === n) {
          s = !0, n = r, t = o;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === t) {
            s = !0, t = o, n = r;
            break;
          }
          if (l === n) {
            s = !0, n = o, t = r;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error($(189));
      }
    }
    if (t.alternate !== n) throw Error($(190));
  }
  if (t.tag !== 3) throw Error($(188));
  return t.stateNode.current === t ? A : e;
}
function ky(A) {
  return A = LT(A), A !== null ? Ry(A) : null;
}
function Ry(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = Ry(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var Ky = yt.unstable_scheduleCallback, uC = yt.unstable_cancelCallback, bT = yt.unstable_shouldYield, _T = yt.unstable_requestPaint, ce = yt.unstable_now, TT = yt.unstable_getCurrentPriorityLevel, Aw = yt.unstable_ImmediatePriority, My = yt.unstable_UserBlockingPriority, kc = yt.unstable_NormalPriority, OT = yt.unstable_LowPriority, Ny = yt.unstable_IdlePriority, Hf = null, Un = null;
function DT(A) {
  if (Un && typeof Un.onCommitFiberRoot == "function") try {
    Un.onCommitFiberRoot(Hf, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var ln = Math.clz32 ? Math.clz32 : KT, kT = Math.log, RT = Math.LN2;
function KT(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (kT(A) / RT | 0) | 0;
}
var pu = 64, hu = 4194304;
function As(A) {
  switch (A & -A) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Rc(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var n = 0, r = A.suspendedLanes, o = A.pingedLanes, s = t & 268435455;
  if (s !== 0) {
    var l = s & ~r;
    l !== 0 ? n = As(l) : (o &= s, o !== 0 && (n = As(o)));
  } else s = t & ~r, s !== 0 ? n = As(s) : o !== 0 && (n = As(o));
  if (n === 0) return 0;
  if (e !== 0 && e !== n && !(e & r) && (r = n & -n, o = e & -e, r >= o || r === 16 && (o & 4194240) !== 0)) return e;
  if (n & 4 && (n |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= n; 0 < e; ) t = 31 - ln(e), r = 1 << t, n |= A[t], e &= ~r;
  return n;
}
function MT(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function NT(A, e) {
  for (var t = A.suspendedLanes, n = A.pingedLanes, r = A.expirationTimes, o = A.pendingLanes; 0 < o; ) {
    var s = 31 - ln(o), l = 1 << s, c = r[s];
    c === -1 ? (!(l & t) || l & n) && (r[s] = MT(l, e)) : c <= e && (A.expiredLanes |= l), o &= ~l;
  }
}
function up(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Py() {
  var A = pu;
  return pu <<= 1, !(pu & 4194240) && (pu = 64), A;
}
function Wg(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function sl(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - ln(e), A[e] = t;
}
function PT(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var n = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var r = 31 - ln(t), o = 1 << r;
    e[r] = 0, n[r] = -1, A[r] = -1, t &= ~o;
  }
}
function ew(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var n = 31 - ln(t), r = 1 << n;
    r & e | A[n] & e && (A[n] |= e), t &= ~r;
  }
}
var kA = 0;
function Gy(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vy, tw, $y, Wy, Xy, cp = !1, wu = [], Or = null, Dr = null, kr = null, Ts = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new Map(), Er = [], GT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cC(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      Or = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      kr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ts.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Os.delete(e.pointerId);
  }
}
function Na(A, e, t, n, r, o) {
  return A === null || A.nativeEvent !== o ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: n, nativeEvent: o, targetContainers: [r] }, e !== null && (e = ul(e), e !== null && tw(e)), A) : (A.eventSystemFlags |= n, e = A.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), A);
}
function VT(A, e, t, n, r) {
  switch (e) {
    case "focusin":
      return Or = Na(Or, A, e, t, n, r), !0;
    case "dragenter":
      return Dr = Na(Dr, A, e, t, n, r), !0;
    case "mouseover":
      return kr = Na(kr, A, e, t, n, r), !0;
    case "pointerover":
      var o = r.pointerId;
      return Ts.set(o, Na(Ts.get(o) || null, A, e, t, n, r)), !0;
    case "gotpointercapture":
      return o = r.pointerId, Os.set(o, Na(Os.get(o) || null, A, e, t, n, r)), !0;
  }
  return !1;
}
function zy(A) {
  var e = mi(A.target);
  if (e !== null) {
    var t = Vi(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = Dy(t), e !== null) {
          A.blockedOn = e, Xy(A.priority, function() {
            $y(t);
          });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function fc(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = fp(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var n = new t.constructor(t.type, t);
      op = n, t.target.dispatchEvent(n), op = null;
    } else return e = ul(t), e !== null && tw(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function fC(A, e, t) {
  fc(A) && t.delete(e);
}
function $T() {
  cp = !1, Or !== null && fc(Or) && (Or = null), Dr !== null && fc(Dr) && (Dr = null), kr !== null && fc(kr) && (kr = null), Ts.forEach(fC), Os.forEach(fC);
}
function Pa(A, e) {
  A.blockedOn === e && (A.blockedOn = null, cp || (cp = !0, yt.unstable_scheduleCallback(yt.unstable_NormalPriority, $T)));
}
function Ds(A) {
  function e(r) {
    return Pa(r, A);
  }
  if (0 < wu.length) {
    Pa(wu[0], A);
    for (var t = 1; t < wu.length; t++) {
      var n = wu[t];
      n.blockedOn === A && (n.blockedOn = null);
    }
  }
  for (Or !== null && Pa(Or, A), Dr !== null && Pa(Dr, A), kr !== null && Pa(kr, A), Ts.forEach(e), Os.forEach(e), t = 0; t < Er.length; t++) n = Er[t], n.blockedOn === A && (n.blockedOn = null);
  for (; 0 < Er.length && (t = Er[0], t.blockedOn === null); ) zy(t), t.blockedOn === null && Er.shift();
}
var Mo = ar.ReactCurrentBatchConfig, Kc = !0;
function WT(A, e, t, n) {
  var r = kA, o = Mo.transition;
  Mo.transition = null;
  try {
    kA = 1, nw(A, e, t, n);
  } finally {
    kA = r, Mo.transition = o;
  }
}
function XT(A, e, t, n) {
  var r = kA, o = Mo.transition;
  Mo.transition = null;
  try {
    kA = 4, nw(A, e, t, n);
  } finally {
    kA = r, Mo.transition = o;
  }
}
function nw(A, e, t, n) {
  if (Kc) {
    var r = fp(A, e, t, n);
    if (r === null) tB(A, e, n, Mc, t), cC(A, n);
    else if (VT(r, A, e, t, n)) n.stopPropagation();
    else if (cC(A, n), e & 4 && -1 < GT.indexOf(A)) {
      for (; r !== null; ) {
        var o = ul(r);
        if (o !== null && Vy(o), o = fp(A, e, t, n), o === null && tB(A, e, n, Mc, t), o === r) break;
        r = o;
      }
      r !== null && n.stopPropagation();
    } else tB(A, e, n, null, t);
  }
}
var Mc = null;
function fp(A, e, t, n) {
  if (Mc = null, A = qh(n), A = mi(A), A !== null) if (e = Vi(A), e === null) A = null;
  else if (t = e.tag, t === 13) {
    if (A = Dy(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return Mc = A, null;
}
function Yy(A) {
  switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (TT()) {
        case Aw:
          return 1;
        case My:
          return 4;
        case kc:
        case OT:
          return 16;
        case Ny:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hr = null, rw = null, dc = null;
function Jy() {
  if (dc) return dc;
  var A, e = rw, t = e.length, n, r = "value" in Hr ? Hr.value : Hr.textContent, o = r.length;
  for (A = 0; A < t && e[A] === r[A]; A++) ;
  var s = t - A;
  for (n = 1; n <= s && e[t - n] === r[o - n]; n++) ;
  return dc = r.slice(A, 1 < n ? 1 - n : void 0);
}
function gc(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function vu() {
  return !0;
}
function dC() {
  return !1;
}
function Ut(A) {
  function e(t, n, r, o, s) {
    this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in A) A.hasOwnProperty(l) && (t = A[l], this[l] = t ? t(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vu : dC, this.isPropagationStopped = dC, this;
  }
  return ne(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = vu);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = vu);
  }, persist: function() {
  }, isPersistent: vu }), e;
}
var ua = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, iw = Ut(ua), ll = ne({}, ua, { view: 0, detail: 0 }), zT = Ut(ll), Xg, zg, Ga, Sf = ne({}, ll, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ow, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== Ga && (Ga && A.type === "mousemove" ? (Xg = A.screenX - Ga.screenX, zg = A.screenY - Ga.screenY) : zg = Xg = 0, Ga = A), Xg);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : zg;
} }), gC = Ut(Sf), YT = ne({}, Sf, { dataTransfer: 0 }), JT = Ut(YT), jT = ne({}, ll, { relatedTarget: 0 }), Yg = Ut(jT), ZT = ne({}, ua, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qT = Ut(ZT), AO = ne({}, ua, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), eO = Ut(AO), tO = ne({}, ua, { data: 0 }), BC = Ut(tO), nO = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, rO = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, iO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oO(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = iO[A]) ? !!e[A] : !1;
}
function ow() {
  return oO;
}
var aO = ne({}, ll, { key: function(A) {
  if (A.key) {
    var e = nO[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = gc(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? rO[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ow, charCode: function(A) {
  return A.type === "keypress" ? gc(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? gc(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), sO = Ut(aO), lO = ne({}, Sf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pC = Ut(lO), uO = ne({}, ll, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ow }), cO = Ut(uO), fO = ne({}, ua, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dO = Ut(fO), gO = ne({}, Sf, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), BO = Ut(gO), pO = [9, 13, 27, 32], aw = qn && "CompositionEvent" in window, gs = null;
qn && "documentMode" in document && (gs = document.documentMode);
var hO = qn && "TextEvent" in window && !gs, jy = qn && (!aw || gs && 8 < gs && 11 >= gs), hC = " ", wC = !1;
function Zy(A, e) {
  switch (A) {
    case "keyup":
      return pO.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qy(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var Qo = !1;
function wO(A, e) {
  switch (A) {
    case "compositionend":
      return qy(e);
    case "keypress":
      return e.which !== 32 ? null : (wC = !0, hC);
    case "textInput":
      return A = e.data, A === hC && wC ? null : A;
    default:
      return null;
  }
}
function vO(A, e) {
  if (Qo) return A === "compositionend" || !aw && Zy(A, e) ? (A = Jy(), dc = rw = Hr = null, Qo = !1, A) : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return jy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var mO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function vC(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!mO[A.type] : e === "textarea";
}
function AF(A, e, t, n) {
  Ly(n), e = Nc(e, "onChange"), 0 < e.length && (t = new iw("onChange", "change", null, t, n), A.push({ event: t, listeners: e }));
}
var Bs = null, ks = null;
function CO(A) {
  cF(A, 0);
}
function Lf(A) {
  var e = Uo(A);
  if (Fy(e)) return A;
}
function QO(A, e) {
  if (A === "change") return e;
}
var eF = !1;
if (qn) {
  var Jg;
  if (qn) {
    var jg = "oninput" in document;
    if (!jg) {
      var mC = document.createElement("div");
      mC.setAttribute("oninput", "return;"), jg = typeof mC.oninput == "function";
    }
    Jg = jg;
  } else Jg = !1;
  eF = Jg && (!document.documentMode || 9 < document.documentMode);
}
function CC() {
  Bs && (Bs.detachEvent("onpropertychange", tF), ks = Bs = null);
}
function tF(A) {
  if (A.propertyName === "value" && Lf(ks)) {
    var e = [];
    AF(e, ks, A, qh(A)), Oy(CO, e);
  }
}
function yO(A, e, t) {
  A === "focusin" ? (CC(), Bs = e, ks = t, Bs.attachEvent("onpropertychange", tF)) : A === "focusout" && CC();
}
function FO(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return Lf(ks);
}
function UO(A, e) {
  if (A === "click") return Lf(e);
}
function EO(A, e) {
  if (A === "input" || A === "change") return Lf(e);
}
function IO(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var fn = typeof Object.is == "function" ? Object.is : IO;
function Rs(A, e) {
  if (fn(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), n = Object.keys(e);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var r = t[n];
    if (!zB.call(e, r) || !fn(A[r], e[r])) return !1;
  }
  return !0;
}
function QC(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function yC(A, e) {
  var t = QC(A);
  A = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (n = A + t.textContent.length, A <= e && n >= e) return { node: t, offset: e - A };
      A = n;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = QC(t);
  }
}
function nF(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? nF(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function rF() {
  for (var A = window, e = Tc(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = Tc(A.document);
  }
  return e;
}
function sw(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function xO(A) {
  var e = rF(), t = A.focusedElem, n = A.selectionRange;
  if (e !== t && t && t.ownerDocument && nF(t.ownerDocument.documentElement, t)) {
    if (n !== null && sw(t)) {
      if (e = n.start, A = n.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var r = t.textContent.length, o = Math.min(n.start, r);
        n = n.end === void 0 ? o : Math.min(n.end, r), !A.extend && o > n && (r = n, n = o, o = r), r = yC(t, o);
        var s = yC(
          t,
          n
        );
        r && s && (A.rangeCount !== 1 || A.anchorNode !== r.node || A.anchorOffset !== r.offset || A.focusNode !== s.node || A.focusOffset !== s.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), A.removeAllRanges(), o > n ? (A.addRange(e), A.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode; ) A.nodeType === 1 && e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var HO = qn && "documentMode" in document && 11 >= document.documentMode, yo = null, dp = null, ps = null, gp = !1;
function FC(A, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  gp || yo == null || yo !== Tc(n) || (n = yo, "selectionStart" in n && sw(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), ps && Rs(ps, n) || (ps = n, n = Nc(dp, "onSelect"), 0 < n.length && (e = new iw("onSelect", "select", null, e, t), A.push({ event: e, listeners: n }), e.target = yo)));
}
function mu(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var Fo = { animationend: mu("Animation", "AnimationEnd"), animationiteration: mu("Animation", "AnimationIteration"), animationstart: mu("Animation", "AnimationStart"), transitionend: mu("Transition", "TransitionEnd") }, Zg = {}, iF = {};
qn && (iF = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
function bf(A) {
  if (Zg[A]) return Zg[A];
  if (!Fo[A]) return A;
  var e = Fo[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in iF) return Zg[A] = e[t];
  return A;
}
var oF = bf("animationend"), aF = bf("animationiteration"), sF = bf("animationstart"), lF = bf("transitionend"), uF = /* @__PURE__ */ new Map(), UC = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ai(A, e) {
  uF.set(A, e), Gi(e, [A]);
}
for (var qg = 0; qg < UC.length; qg++) {
  var AB = UC[qg], SO = AB.toLowerCase(), LO = AB[0].toUpperCase() + AB.slice(1);
  Ai(SO, "on" + LO);
}
Ai(oF, "onAnimationEnd");
Ai(aF, "onAnimationIteration");
Ai(sF, "onAnimationStart");
Ai("dblclick", "onDoubleClick");
Ai("focusin", "onFocus");
Ai("focusout", "onBlur");
Ai(lF, "onTransitionEnd");
Xo("onMouseEnter", ["mouseout", "mouseover"]);
Xo("onMouseLeave", ["mouseout", "mouseover"]);
Xo("onPointerEnter", ["pointerout", "pointerover"]);
Xo("onPointerLeave", ["pointerout", "pointerover"]);
Gi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bO = new Set("cancel close invalid load scroll toggle".split(" ").concat(es));
function EC(A, e, t) {
  var n = A.type || "unknown-event";
  A.currentTarget = t, ST(n, e, void 0, A), A.currentTarget = null;
}
function cF(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var n = A[t], r = n.event;
    n = n.listeners;
    A: {
      var o = void 0;
      if (e) for (var s = n.length - 1; 0 <= s; s--) {
        var l = n[s], c = l.instance, f = l.currentTarget;
        if (l = l.listener, c !== o && r.isPropagationStopped()) break A;
        EC(r, l, f), o = c;
      }
      else for (s = 0; s < n.length; s++) {
        if (l = n[s], c = l.instance, f = l.currentTarget, l = l.listener, c !== o && r.isPropagationStopped()) break A;
        EC(r, l, f), o = c;
      }
    }
  }
  if (Dc) throw A = lp, Dc = !1, lp = null, A;
}
function $A(A, e) {
  var t = e[vp];
  t === void 0 && (t = e[vp] = /* @__PURE__ */ new Set());
  var n = A + "__bubble";
  t.has(n) || (fF(e, A, 2, !1), t.add(n));
}
function eB(A, e, t) {
  var n = 0;
  e && (n |= 4), fF(t, A, n, e);
}
var Cu = "_reactListening" + Math.random().toString(36).slice(2);
function Ks(A) {
  if (!A[Cu]) {
    A[Cu] = !0, vy.forEach(function(t) {
      t !== "selectionchange" && (bO.has(t) || eB(t, !1, A), eB(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Cu] || (e[Cu] = !0, eB("selectionchange", !1, e));
  }
}
function fF(A, e, t, n) {
  switch (Yy(e)) {
    case 1:
      var r = WT;
      break;
    case 4:
      r = XT;
      break;
    default:
      r = nw;
  }
  t = r.bind(null, e, t, A), r = void 0, !sp || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), n ? r !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: r }) : A.addEventListener(e, t, !0) : r !== void 0 ? A.addEventListener(e, t, { passive: r }) : A.addEventListener(e, t, !1);
}
function tB(A, e, t, n, r) {
  var o = n;
  if (!(e & 1) && !(e & 2) && n !== null) A: for (; ; ) {
    if (n === null) return;
    var s = n.tag;
    if (s === 3 || s === 4) {
      var l = n.stateNode.containerInfo;
      if (l === r || l.nodeType === 8 && l.parentNode === r) break;
      if (s === 4) for (s = n.return; s !== null; ) {
        var c = s.tag;
        if ((c === 3 || c === 4) && (c = s.stateNode.containerInfo, c === r || c.nodeType === 8 && c.parentNode === r)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = mi(l), s === null) return;
        if (c = s.tag, c === 5 || c === 6) {
          n = o = s;
          continue A;
        }
        l = l.parentNode;
      }
    }
    n = n.return;
  }
  Oy(function() {
    var f = o, g = qh(t), B = [];
    A: {
      var p = uF.get(A);
      if (p !== void 0) {
        var v = iw, F = A;
        switch (A) {
          case "keypress":
            if (gc(t) === 0) break A;
          case "keydown":
          case "keyup":
            v = sO;
            break;
          case "focusin":
            F = "focus", v = Yg;
            break;
          case "focusout":
            F = "blur", v = Yg;
            break;
          case "beforeblur":
          case "afterblur":
            v = Yg;
            break;
          case "click":
            if (t.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = gC;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = JT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = cO;
            break;
          case oF:
          case aF:
          case sF:
            v = qT;
            break;
          case lF:
            v = dO;
            break;
          case "scroll":
            v = zT;
            break;
          case "wheel":
            v = BO;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = eO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = pC;
        }
        var U = (e & 4) !== 0, L = !U && A === "scroll", m = U ? p !== null ? p + "Capture" : null : p;
        U = [];
        for (var w = f, y; w !== null; ) {
          y = w;
          var I = y.stateNode;
          if (y.tag === 5 && I !== null && (y = I, m !== null && (I = _s(w, m), I != null && U.push(Ms(w, I, y)))), L) break;
          w = w.return;
        }
        0 < U.length && (p = new v(p, F, null, t, g), B.push({ event: p, listeners: U }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (p = A === "mouseover" || A === "pointerover", v = A === "mouseout" || A === "pointerout", p && t !== op && (F = t.relatedTarget || t.fromElement) && (mi(F) || F[Ar])) break A;
        if ((v || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (F = t.relatedTarget || t.toElement, v = f, F = F ? mi(F) : null, F !== null && (L = Vi(F), F !== L || F.tag !== 5 && F.tag !== 6) && (F = null)) : (v = null, F = f), v !== F)) {
          if (U = gC, I = "onMouseLeave", m = "onMouseEnter", w = "mouse", (A === "pointerout" || A === "pointerover") && (U = pC, I = "onPointerLeave", m = "onPointerEnter", w = "pointer"), L = v == null ? p : Uo(v), y = F == null ? p : Uo(F), p = new U(I, w + "leave", v, t, g), p.target = L, p.relatedTarget = y, I = null, mi(g) === f && (U = new U(m, w + "enter", F, t, g), U.target = y, U.relatedTarget = L, I = U), L = I, v && F) e: {
            for (U = v, m = F, w = 0, y = U; y; y = so(y)) w++;
            for (y = 0, I = m; I; I = so(I)) y++;
            for (; 0 < w - y; ) U = so(U), w--;
            for (; 0 < y - w; ) m = so(m), y--;
            for (; w--; ) {
              if (U === m || m !== null && U === m.alternate) break e;
              U = so(U), m = so(m);
            }
            U = null;
          }
          else U = null;
          v !== null && IC(B, p, v, U, !1), F !== null && L !== null && IC(B, L, F, U, !0);
        }
      }
      A: {
        if (p = f ? Uo(f) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var H = QO;
        else if (vC(p)) if (eF) H = EO;
        else {
          H = FO;
          var S = yO;
        }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (H = UO);
        if (H && (H = H(A, f))) {
          AF(B, H, t, g);
          break A;
        }
        S && S(A, p, f), A === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && ep(p, "number", p.value);
      }
      switch (S = f ? Uo(f) : window, A) {
        case "focusin":
          (vC(S) || S.contentEditable === "true") && (yo = S, dp = f, ps = null);
          break;
        case "focusout":
          ps = dp = yo = null;
          break;
        case "mousedown":
          gp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gp = !1, FC(B, t, g);
          break;
        case "selectionchange":
          if (HO) break;
        case "keydown":
        case "keyup":
          FC(B, t, g);
      }
      var O;
      if (aw) A: {
        switch (A) {
          case "compositionstart":
            var k = "onCompositionStart";
            break A;
          case "compositionend":
            k = "onCompositionEnd";
            break A;
          case "compositionupdate":
            k = "onCompositionUpdate";
            break A;
        }
        k = void 0;
      }
      else Qo ? Zy(A, t) && (k = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (k = "onCompositionStart");
      k && (jy && t.locale !== "ko" && (Qo || k !== "onCompositionStart" ? k === "onCompositionEnd" && Qo && (O = Jy()) : (Hr = g, rw = "value" in Hr ? Hr.value : Hr.textContent, Qo = !0)), S = Nc(f, k), 0 < S.length && (k = new BC(k, A, null, t, g), B.push({ event: k, listeners: S }), O ? k.data = O : (O = qy(t), O !== null && (k.data = O)))), (O = hO ? wO(A, t) : vO(A, t)) && (f = Nc(f, "onBeforeInput"), 0 < f.length && (g = new BC("onBeforeInput", "beforeinput", null, t, g), B.push({ event: g, listeners: f }), g.data = O));
    }
    cF(B, e);
  });
}
function Ms(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function Nc(A, e) {
  for (var t = e + "Capture", n = []; A !== null; ) {
    var r = A, o = r.stateNode;
    r.tag === 5 && o !== null && (r = o, o = _s(A, t), o != null && n.unshift(Ms(A, o, r)), o = _s(A, e), o != null && n.push(Ms(A, o, r))), A = A.return;
  }
  return n;
}
function so(A) {
  if (A === null) return null;
  do
    A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function IC(A, e, t, n, r) {
  for (var o = e._reactName, s = []; t !== null && t !== n; ) {
    var l = t, c = l.alternate, f = l.stateNode;
    if (c !== null && c === n) break;
    l.tag === 5 && f !== null && (l = f, r ? (c = _s(t, o), c != null && s.unshift(Ms(t, c, l))) : r || (c = _s(t, o), c != null && s.push(Ms(t, c, l)))), t = t.return;
  }
  s.length !== 0 && A.push({ event: e, listeners: s });
}
var _O = /\r\n?/g, TO = /\u0000|\uFFFD/g;
function xC(A) {
  return (typeof A == "string" ? A : "" + A).replace(_O, `
`).replace(TO, "");
}
function Qu(A, e, t) {
  if (e = xC(e), xC(A) !== e && t) throw Error($(425));
}
function Pc() {
}
var Bp = null, pp = null;
function hp(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var wp = typeof setTimeout == "function" ? setTimeout : void 0, OO = typeof clearTimeout == "function" ? clearTimeout : void 0, HC = typeof Promise == "function" ? Promise : void 0, DO = typeof queueMicrotask == "function" ? queueMicrotask : typeof HC < "u" ? function(A) {
  return HC.resolve(null).then(A).catch(kO);
} : wp;
function kO(A) {
  setTimeout(function() {
    throw A;
  });
}
function nB(A, e) {
  var t = e, n = 0;
  do {
    var r = t.nextSibling;
    if (A.removeChild(t), r && r.nodeType === 8) if (t = r.data, t === "/$") {
      if (n === 0) {
        A.removeChild(r), Ds(e);
        return;
      }
      n--;
    } else t !== "$" && t !== "$?" && t !== "$!" || n++;
    t = r;
  } while (t);
  Ds(e);
}
function Rr(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = A.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function SC(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return A;
        e--;
      } else t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var ca = Math.random().toString(36).slice(2), yn = "__reactFiber$" + ca, Ns = "__reactProps$" + ca, Ar = "__reactContainer$" + ca, vp = "__reactEvents$" + ca, RO = "__reactListeners$" + ca, KO = "__reactHandles$" + ca;
function mi(A) {
  var e = A[yn];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[Ar] || t[yn]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (A = SC(A); A !== null; ) {
        if (t = A[yn]) return t;
        A = SC(A);
      }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function ul(A) {
  return A = A[yn] || A[Ar], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function Uo(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error($(33));
}
function _f(A) {
  return A[Ns] || null;
}
var mp = [], Eo = -1;
function ei(A) {
  return { current: A };
}
function zA(A) {
  0 > Eo || (A.current = mp[Eo], mp[Eo] = null, Eo--);
}
function PA(A, e) {
  Eo++, mp[Eo] = A.current, A.current = e;
}
var Wr = {}, Ne = ei(Wr), ot = ei(!1), Oi = Wr;
function zo(A, e) {
  var t = A.type.contextTypes;
  if (!t) return Wr;
  var n = A.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
  var r = {}, o;
  for (o in t) r[o] = e[o];
  return n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = r), r;
}
function at(A) {
  return A = A.childContextTypes, A != null;
}
function Gc() {
  zA(ot), zA(Ne);
}
function LC(A, e, t) {
  if (Ne.current !== Wr) throw Error($(168));
  PA(Ne, e), PA(ot, t);
}
function dF(A, e, t) {
  var n = A.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function") return t;
  n = n.getChildContext();
  for (var r in n) if (!(r in e)) throw Error($(108, yT(A) || "Unknown", r));
  return ne({}, t, n);
}
function Vc(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || Wr, Oi = Ne.current, PA(Ne, A), PA(ot, ot.current), !0;
}
function bC(A, e, t) {
  var n = A.stateNode;
  if (!n) throw Error($(169));
  t ? (A = dF(A, e, Oi), n.__reactInternalMemoizedMergedChildContext = A, zA(ot), zA(Ne), PA(Ne, A)) : zA(ot), PA(ot, t);
}
var Wn = null, Tf = !1, rB = !1;
function gF(A) {
  Wn === null ? Wn = [A] : Wn.push(A);
}
function MO(A) {
  Tf = !0, gF(A);
}
function ti() {
  if (!rB && Wn !== null) {
    rB = !0;
    var A = 0, e = kA;
    try {
      var t = Wn;
      for (kA = 1; A < t.length; A++) {
        var n = t[A];
        do
          n = n(!0);
        while (n !== null);
      }
      Wn = null, Tf = !1;
    } catch (r) {
      throw Wn !== null && (Wn = Wn.slice(A + 1)), Ky(Aw, ti), r;
    } finally {
      kA = e, rB = !1;
    }
  }
  return null;
}
var Io = [], xo = 0, $c = null, Wc = 0, Dt = [], kt = 0, Di = null, zn = 1, Yn = "";
function Bi(A, e) {
  Io[xo++] = Wc, Io[xo++] = $c, $c = A, Wc = e;
}
function BF(A, e, t) {
  Dt[kt++] = zn, Dt[kt++] = Yn, Dt[kt++] = Di, Di = A;
  var n = zn;
  A = Yn;
  var r = 32 - ln(n) - 1;
  n &= ~(1 << r), t += 1;
  var o = 32 - ln(e) + r;
  if (30 < o) {
    var s = r - r % 5;
    o = (n & (1 << s) - 1).toString(32), n >>= s, r -= s, zn = 1 << 32 - ln(e) + r | t << r | n, Yn = o + A;
  } else zn = 1 << o | t << r | n, Yn = A;
}
function lw(A) {
  A.return !== null && (Bi(A, 1), BF(A, 1, 0));
}
function uw(A) {
  for (; A === $c; ) $c = Io[--xo], Io[xo] = null, Wc = Io[--xo], Io[xo] = null;
  for (; A === Di; ) Di = Dt[--kt], Dt[kt] = null, Yn = Dt[--kt], Dt[kt] = null, zn = Dt[--kt], Dt[kt] = null;
}
var Ct = null, mt = null, ZA = !1, on = null;
function pF(A, e) {
  var t = Kt(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function _C(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, Ct = A, mt = Rr(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, Ct = A, mt = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Di !== null ? { id: zn, overflow: Yn } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = Kt(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, Ct = A, mt = null, !0) : !1;
    default:
      return !1;
  }
}
function Cp(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Qp(A) {
  if (ZA) {
    var e = mt;
    if (e) {
      var t = e;
      if (!_C(A, e)) {
        if (Cp(A)) throw Error($(418));
        e = Rr(t.nextSibling);
        var n = Ct;
        e && _C(A, e) ? pF(n, t) : (A.flags = A.flags & -4097 | 2, ZA = !1, Ct = A);
      }
    } else {
      if (Cp(A)) throw Error($(418));
      A.flags = A.flags & -4097 | 2, ZA = !1, Ct = A;
    }
  }
}
function TC(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
  Ct = A;
}
function yu(A) {
  if (A !== Ct) return !1;
  if (!ZA) return TC(A), ZA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !hp(A.type, A.memoizedProps)), e && (e = mt)) {
    if (Cp(A)) throw hF(), Error($(418));
    for (; e; ) pF(A, e), e = Rr(e.nextSibling);
  }
  if (TC(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error($(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              mt = Rr(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      mt = null;
    }
  } else mt = Ct ? Rr(A.stateNode.nextSibling) : null;
  return !0;
}
function hF() {
  for (var A = mt; A; ) A = Rr(A.nextSibling);
}
function Yo() {
  mt = Ct = null, ZA = !1;
}
function cw(A) {
  on === null ? on = [A] : on.push(A);
}
var NO = ar.ReactCurrentBatchConfig;
function Va(A, e, t) {
  if (A = t.ref, A !== null && typeof A != "function" && typeof A != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error($(309));
        var n = t.stateNode;
      }
      if (!n) throw Error($(147, A));
      var r = n, o = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
        var l = r.refs;
        s === null ? delete l[o] : l[o] = s;
      }, e._stringRef = o, e);
    }
    if (typeof A != "string") throw Error($(284));
    if (!t._owner) throw Error($(290, A));
  }
  return A;
}
function Fu(A, e) {
  throw A = Object.prototype.toString.call(e), Error($(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function OC(A) {
  var e = A._init;
  return e(A._payload);
}
function wF(A) {
  function e(m, w) {
    if (A) {
      var y = m.deletions;
      y === null ? (m.deletions = [w], m.flags |= 16) : y.push(w);
    }
  }
  function t(m, w) {
    if (!A) return null;
    for (; w !== null; ) e(m, w), w = w.sibling;
    return null;
  }
  function n(m, w) {
    for (m = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? m.set(w.key, w) : m.set(w.index, w), w = w.sibling;
    return m;
  }
  function r(m, w) {
    return m = Pr(m, w), m.index = 0, m.sibling = null, m;
  }
  function o(m, w, y) {
    return m.index = y, A ? (y = m.alternate, y !== null ? (y = y.index, y < w ? (m.flags |= 2, w) : y) : (m.flags |= 2, w)) : (m.flags |= 1048576, w);
  }
  function s(m) {
    return A && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, w, y, I) {
    return w === null || w.tag !== 6 ? (w = cB(y, m.mode, I), w.return = m, w) : (w = r(w, y), w.return = m, w);
  }
  function c(m, w, y, I) {
    var H = y.type;
    return H === Co ? g(m, w, y.props.children, I, y.key) : w !== null && (w.elementType === H || typeof H == "object" && H !== null && H.$$typeof === yr && OC(H) === w.type) ? (I = r(w, y.props), I.ref = Va(m, w, y), I.return = m, I) : (I = Cc(y.type, y.key, y.props, null, m.mode, I), I.ref = Va(m, w, y), I.return = m, I);
  }
  function f(m, w, y, I) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== y.containerInfo || w.stateNode.implementation !== y.implementation ? (w = fB(y, m.mode, I), w.return = m, w) : (w = r(w, y.children || []), w.return = m, w);
  }
  function g(m, w, y, I, H) {
    return w === null || w.tag !== 7 ? (w = Hi(y, m.mode, I, H), w.return = m, w) : (w = r(w, y), w.return = m, w);
  }
  function B(m, w, y) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return w = cB("" + w, m.mode, y), w.return = m, w;
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case du:
          return y = Cc(w.type, w.key, w.props, null, m.mode, y), y.ref = Va(m, null, w), y.return = m, y;
        case mo:
          return w = fB(w, m.mode, y), w.return = m, w;
        case yr:
          var I = w._init;
          return B(m, I(w._payload), y);
      }
      if (qa(w) || Ka(w)) return w = Hi(w, m.mode, y, null), w.return = m, w;
      Fu(m, w);
    }
    return null;
  }
  function p(m, w, y, I) {
    var H = w !== null ? w.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return H !== null ? null : l(m, w, "" + y, I);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case du:
          return y.key === H ? c(m, w, y, I) : null;
        case mo:
          return y.key === H ? f(m, w, y, I) : null;
        case yr:
          return H = y._init, p(
            m,
            w,
            H(y._payload),
            I
          );
      }
      if (qa(y) || Ka(y)) return H !== null ? null : g(m, w, y, I, null);
      Fu(m, y);
    }
    return null;
  }
  function v(m, w, y, I, H) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return m = m.get(y) || null, l(w, m, "" + I, H);
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case du:
          return m = m.get(I.key === null ? y : I.key) || null, c(w, m, I, H);
        case mo:
          return m = m.get(I.key === null ? y : I.key) || null, f(w, m, I, H);
        case yr:
          var S = I._init;
          return v(m, w, y, S(I._payload), H);
      }
      if (qa(I) || Ka(I)) return m = m.get(y) || null, g(w, m, I, H, null);
      Fu(w, I);
    }
    return null;
  }
  function F(m, w, y, I) {
    for (var H = null, S = null, O = w, k = w = 0, N = null; O !== null && k < y.length; k++) {
      O.index > k ? (N = O, O = null) : N = O.sibling;
      var W = p(m, O, y[k], I);
      if (W === null) {
        O === null && (O = N);
        break;
      }
      A && O && W.alternate === null && e(m, O), w = o(W, w, k), S === null ? H = W : S.sibling = W, S = W, O = N;
    }
    if (k === y.length) return t(m, O), ZA && Bi(m, k), H;
    if (O === null) {
      for (; k < y.length; k++) O = B(m, y[k], I), O !== null && (w = o(O, w, k), S === null ? H = O : S.sibling = O, S = O);
      return ZA && Bi(m, k), H;
    }
    for (O = n(m, O); k < y.length; k++) N = v(O, m, k, y[k], I), N !== null && (A && N.alternate !== null && O.delete(N.key === null ? k : N.key), w = o(N, w, k), S === null ? H = N : S.sibling = N, S = N);
    return A && O.forEach(function(sA) {
      return e(m, sA);
    }), ZA && Bi(m, k), H;
  }
  function U(m, w, y, I) {
    var H = Ka(y);
    if (typeof H != "function") throw Error($(150));
    if (y = H.call(y), y == null) throw Error($(151));
    for (var S = H = null, O = w, k = w = 0, N = null, W = y.next(); O !== null && !W.done; k++, W = y.next()) {
      O.index > k ? (N = O, O = null) : N = O.sibling;
      var sA = p(m, O, W.value, I);
      if (sA === null) {
        O === null && (O = N);
        break;
      }
      A && O && sA.alternate === null && e(m, O), w = o(sA, w, k), S === null ? H = sA : S.sibling = sA, S = sA, O = N;
    }
    if (W.done) return t(
      m,
      O
    ), ZA && Bi(m, k), H;
    if (O === null) {
      for (; !W.done; k++, W = y.next()) W = B(m, W.value, I), W !== null && (w = o(W, w, k), S === null ? H = W : S.sibling = W, S = W);
      return ZA && Bi(m, k), H;
    }
    for (O = n(m, O); !W.done; k++, W = y.next()) W = v(O, m, k, W.value, I), W !== null && (A && W.alternate !== null && O.delete(W.key === null ? k : W.key), w = o(W, w, k), S === null ? H = W : S.sibling = W, S = W);
    return A && O.forEach(function(iA) {
      return e(m, iA);
    }), ZA && Bi(m, k), H;
  }
  function L(m, w, y, I) {
    if (typeof y == "object" && y !== null && y.type === Co && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case du:
          A: {
            for (var H = y.key, S = w; S !== null; ) {
              if (S.key === H) {
                if (H = y.type, H === Co) {
                  if (S.tag === 7) {
                    t(m, S.sibling), w = r(S, y.props.children), w.return = m, m = w;
                    break A;
                  }
                } else if (S.elementType === H || typeof H == "object" && H !== null && H.$$typeof === yr && OC(H) === S.type) {
                  t(m, S.sibling), w = r(S, y.props), w.ref = Va(m, S, y), w.return = m, m = w;
                  break A;
                }
                t(m, S);
                break;
              } else e(m, S);
              S = S.sibling;
            }
            y.type === Co ? (w = Hi(y.props.children, m.mode, I, y.key), w.return = m, m = w) : (I = Cc(y.type, y.key, y.props, null, m.mode, I), I.ref = Va(m, w, y), I.return = m, m = I);
          }
          return s(m);
        case mo:
          A: {
            for (S = y.key; w !== null; ) {
              if (w.key === S) if (w.tag === 4 && w.stateNode.containerInfo === y.containerInfo && w.stateNode.implementation === y.implementation) {
                t(m, w.sibling), w = r(w, y.children || []), w.return = m, m = w;
                break A;
              } else {
                t(m, w);
                break;
              }
              else e(m, w);
              w = w.sibling;
            }
            w = fB(y, m.mode, I), w.return = m, m = w;
          }
          return s(m);
        case yr:
          return S = y._init, L(m, w, S(y._payload), I);
      }
      if (qa(y)) return F(m, w, y, I);
      if (Ka(y)) return U(m, w, y, I);
      Fu(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, w !== null && w.tag === 6 ? (t(m, w.sibling), w = r(w, y), w.return = m, m = w) : (t(m, w), w = cB(y, m.mode, I), w.return = m, m = w), s(m)) : t(m, w);
  }
  return L;
}
var Jo = wF(!0), vF = wF(!1), Xc = ei(null), zc = null, Ho = null, fw = null;
function dw() {
  fw = Ho = zc = null;
}
function gw(A) {
  var e = Xc.current;
  zA(Xc), A._currentValue = e;
}
function yp(A, e, t) {
  for (; A !== null; ) {
    var n = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function No(A, e) {
  zc = A, fw = Ho = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (nt = !0), A.firstContext = null);
}
function Gt(A) {
  var e = A._currentValue;
  if (fw !== A) if (A = { context: A, memoizedValue: e, next: null }, Ho === null) {
    if (zc === null) throw Error($(308));
    Ho = A, zc.dependencies = { lanes: 0, firstContext: A };
  } else Ho = Ho.next = A;
  return e;
}
var Ci = null;
function Bw(A) {
  Ci === null ? Ci = [A] : Ci.push(A);
}
function mF(A, e, t, n) {
  var r = e.interleaved;
  return r === null ? (t.next = t, Bw(e)) : (t.next = r.next, r.next = t), e.interleaved = t, er(A, n);
}
function er(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; ) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Fr = !1;
function pw(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function CF(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function Jn(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Kr(A, e, t) {
  var n = A.updateQueue;
  if (n === null) return null;
  if (n = n.shared, xA & 2) {
    var r = n.pending;
    return r === null ? e.next = e : (e.next = r.next, r.next = e), n.pending = e, er(A, t);
  }
  return r = n.interleaved, r === null ? (e.next = e, Bw(n)) : (e.next = r.next, r.next = e), n.interleaved = e, er(A, t);
}
function Bc(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, ew(A, t);
  }
}
function DC(A, e) {
  var t = A.updateQueue, n = A.alternate;
  if (n !== null && (n = n.updateQueue, t === n)) {
    var r = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var s = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? r = o = s : o = o.next = s, t = t.next;
      } while (t !== null);
      o === null ? r = o = e : o = o.next = e;
    } else r = o = e;
    t = { baseState: n.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function Yc(A, e, t, n) {
  var r = A.updateQueue;
  Fr = !1;
  var o = r.firstBaseUpdate, s = r.lastBaseUpdate, l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var c = l, f = c.next;
    c.next = null, s === null ? o = f : s.next = f, s = c;
    var g = A.alternate;
    g !== null && (g = g.updateQueue, l = g.lastBaseUpdate, l !== s && (l === null ? g.firstBaseUpdate = f : l.next = f, g.lastBaseUpdate = c));
  }
  if (o !== null) {
    var B = r.baseState;
    s = 0, g = f = c = null, l = o;
    do {
      var p = l.lane, v = l.eventTime;
      if ((n & p) === p) {
        g !== null && (g = g.next = {
          eventTime: v,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        A: {
          var F = A, U = l;
          switch (p = e, v = t, U.tag) {
            case 1:
              if (F = U.payload, typeof F == "function") {
                B = F.call(v, B, p);
                break A;
              }
              B = F;
              break A;
            case 3:
              F.flags = F.flags & -65537 | 128;
            case 0:
              if (F = U.payload, p = typeof F == "function" ? F.call(v, B, p) : F, p == null) break A;
              B = ne({}, B, p);
              break A;
            case 2:
              Fr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (A.flags |= 64, p = r.effects, p === null ? r.effects = [l] : p.push(l));
      } else v = { eventTime: v, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, g === null ? (f = g = v, c = B) : g = g.next = v, s |= p;
      if (l = l.next, l === null) {
        if (l = r.shared.pending, l === null) break;
        p = l, l = p.next, p.next = null, r.lastBaseUpdate = p, r.shared.pending = null;
      }
    } while (!0);
    if (g === null && (c = B), r.baseState = c, r.firstBaseUpdate = f, r.lastBaseUpdate = g, e = r.shared.interleaved, e !== null) {
      r = e;
      do
        s |= r.lane, r = r.next;
      while (r !== e);
    } else o === null && (r.shared.lanes = 0);
    Ri |= s, A.lanes = s, A.memoizedState = B;
  }
}
function kC(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var n = A[e], r = n.callback;
    if (r !== null) {
      if (n.callback = null, n = t, typeof r != "function") throw Error($(191, r));
      r.call(n);
    }
  }
}
var cl = {}, En = ei(cl), Ps = ei(cl), Gs = ei(cl);
function Qi(A) {
  if (A === cl) throw Error($(174));
  return A;
}
function hw(A, e) {
  switch (PA(Gs, e), PA(Ps, A), PA(En, cl), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : np(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = np(e, A);
  }
  zA(En), PA(En, e);
}
function jo() {
  zA(En), zA(Ps), zA(Gs);
}
function QF(A) {
  Qi(Gs.current);
  var e = Qi(En.current), t = np(e, A.type);
  e !== t && (PA(Ps, A), PA(En, t));
}
function ww(A) {
  Ps.current === A && (zA(En), zA(Ps));
}
var Ae = ei(0);
function Jc(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var iB = [];
function vw() {
  for (var A = 0; A < iB.length; A++) iB[A]._workInProgressVersionPrimary = null;
  iB.length = 0;
}
var pc = ar.ReactCurrentDispatcher, oB = ar.ReactCurrentBatchConfig, ki = 0, te = null, he = null, ye = null, jc = !1, hs = !1, Vs = 0, PO = 0;
function De() {
  throw Error($(321));
}
function mw(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!fn(A[t], e[t])) return !1;
  return !0;
}
function Cw(A, e, t, n, r, o) {
  if (ki = o, te = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, pc.current = A === null || A.memoizedState === null ? WO : XO, A = t(n, r), hs) {
    o = 0;
    do {
      if (hs = !1, Vs = 0, 25 <= o) throw Error($(301));
      o += 1, ye = he = null, e.updateQueue = null, pc.current = zO, A = t(n, r);
    } while (hs);
  }
  if (pc.current = Zc, e = he !== null && he.next !== null, ki = 0, ye = he = te = null, jc = !1, e) throw Error($(300));
  return A;
}
function Qw() {
  var A = Vs !== 0;
  return Vs = 0, A;
}
function mn() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ye === null ? te.memoizedState = ye = A : ye = ye.next = A, ye;
}
function Vt() {
  if (he === null) {
    var A = te.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = he.next;
  var e = ye === null ? te.memoizedState : ye.next;
  if (e !== null) ye = e, he = A;
  else {
    if (A === null) throw Error($(310));
    he = A, A = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ye === null ? te.memoizedState = ye = A : ye = ye.next = A;
  }
  return ye;
}
function $s(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function aB(A) {
  var e = Vt(), t = e.queue;
  if (t === null) throw Error($(311));
  t.lastRenderedReducer = A;
  var n = he, r = n.baseQueue, o = t.pending;
  if (o !== null) {
    if (r !== null) {
      var s = r.next;
      r.next = o.next, o.next = s;
    }
    n.baseQueue = r = o, t.pending = null;
  }
  if (r !== null) {
    o = r.next, n = n.baseState;
    var l = s = null, c = null, f = o;
    do {
      var g = f.lane;
      if ((ki & g) === g) c !== null && (c = c.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), n = f.hasEagerState ? f.eagerState : A(n, f.action);
      else {
        var B = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        c === null ? (l = c = B, s = n) : c = c.next = B, te.lanes |= g, Ri |= g;
      }
      f = f.next;
    } while (f !== null && f !== o);
    c === null ? s = n : c.next = l, fn(n, e.memoizedState) || (nt = !0), e.memoizedState = n, e.baseState = s, e.baseQueue = c, t.lastRenderedState = n;
  }
  if (A = t.interleaved, A !== null) {
    r = A;
    do
      o = r.lane, te.lanes |= o, Ri |= o, r = r.next;
    while (r !== A);
  } else r === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function sB(A) {
  var e = Vt(), t = e.queue;
  if (t === null) throw Error($(311));
  t.lastRenderedReducer = A;
  var n = t.dispatch, r = t.pending, o = e.memoizedState;
  if (r !== null) {
    t.pending = null;
    var s = r = r.next;
    do
      o = A(o, s.action), s = s.next;
    while (s !== r);
    fn(o, e.memoizedState) || (nt = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), t.lastRenderedState = o;
  }
  return [o, n];
}
function yF() {
}
function FF(A, e) {
  var t = te, n = Vt(), r = e(), o = !fn(n.memoizedState, r);
  if (o && (n.memoizedState = r, nt = !0), n = n.queue, yw(IF.bind(null, t, n, A), [A]), n.getSnapshot !== e || o || ye !== null && ye.memoizedState.tag & 1) {
    if (t.flags |= 2048, Ws(9, EF.bind(null, t, n, r, e), void 0, null), Ue === null) throw Error($(349));
    ki & 30 || UF(t, e, r);
  }
  return r;
}
function UF(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = te.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, te.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function EF(A, e, t, n) {
  e.value = t, e.getSnapshot = n, xF(e) && HF(A);
}
function IF(A, e, t) {
  return t(function() {
    xF(e) && HF(A);
  });
}
function xF(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !fn(A, t);
  } catch {
    return !0;
  }
}
function HF(A) {
  var e = er(A, 1);
  e !== null && un(e, A, 1, -1);
}
function RC(A) {
  var e = mn();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $s, lastRenderedState: A }, e.queue = A, A = A.dispatch = $O.bind(null, te, A), [e.memoizedState, A];
}
function Ws(A, e, t, n) {
  return A = { tag: A, create: e, destroy: t, deps: n, next: null }, e = te.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, te.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (n = t.next, t.next = A, A.next = n, e.lastEffect = A)), A;
}
function SF() {
  return Vt().memoizedState;
}
function hc(A, e, t, n) {
  var r = mn();
  te.flags |= A, r.memoizedState = Ws(1 | e, t, void 0, n === void 0 ? null : n);
}
function Of(A, e, t, n) {
  var r = Vt();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (o = s.destroy, n !== null && mw(n, s.deps)) {
      r.memoizedState = Ws(e, t, o, n);
      return;
    }
  }
  te.flags |= A, r.memoizedState = Ws(1 | e, t, o, n);
}
function KC(A, e) {
  return hc(8390656, 8, A, e);
}
function yw(A, e) {
  return Of(2048, 8, A, e);
}
function LF(A, e) {
  return Of(4, 2, A, e);
}
function bF(A, e) {
  return Of(4, 4, A, e);
}
function _F(A, e) {
  if (typeof e == "function") return A = A(), e(A), function() {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function() {
    e.current = null;
  };
}
function TF(A, e, t) {
  return t = t != null ? t.concat([A]) : null, Of(4, 4, _F.bind(null, e, A), t);
}
function Fw() {
}
function OF(A, e) {
  var t = Vt();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && mw(e, n[1]) ? n[0] : (t.memoizedState = [A, e], A);
}
function DF(A, e) {
  var t = Vt();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && mw(e, n[1]) ? n[0] : (A = A(), t.memoizedState = [A, e], A);
}
function kF(A, e, t) {
  return ki & 21 ? (fn(t, e) || (t = Py(), te.lanes |= t, Ri |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, nt = !0), A.memoizedState = t);
}
function GO(A, e) {
  var t = kA;
  kA = t !== 0 && 4 > t ? t : 4, A(!0);
  var n = oB.transition;
  oB.transition = {};
  try {
    A(!1), e();
  } finally {
    kA = t, oB.transition = n;
  }
}
function RF() {
  return Vt().memoizedState;
}
function VO(A, e, t) {
  var n = Nr(A);
  if (t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }, KF(A)) MF(e, t);
  else if (t = mF(A, e, t, n), t !== null) {
    var r = Xe();
    un(t, A, n, r), NF(t, e, n);
  }
}
function $O(A, e, t) {
  var n = Nr(A), r = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (KF(A)) MF(e, r);
  else {
    var o = A.alternate;
    if (A.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
      var s = e.lastRenderedState, l = o(s, t);
      if (r.hasEagerState = !0, r.eagerState = l, fn(l, s)) {
        var c = e.interleaved;
        c === null ? (r.next = r, Bw(e)) : (r.next = c.next, c.next = r), e.interleaved = r;
        return;
      }
    } catch {
    } finally {
    }
    t = mF(A, e, r, n), t !== null && (r = Xe(), un(t, A, n, r), NF(t, e, n));
  }
}
function KF(A) {
  var e = A.alternate;
  return A === te || e !== null && e === te;
}
function MF(A, e) {
  hs = jc = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function NF(A, e, t) {
  if (t & 4194240) {
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, ew(A, t);
  }
}
var Zc = { readContext: Gt, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useInsertionEffect: De, useLayoutEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useMutableSource: De, useSyncExternalStore: De, useId: De, unstable_isNewReconciler: !1 }, WO = { readContext: Gt, useCallback: function(A, e) {
  return mn().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: Gt, useEffect: KC, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, hc(
    4194308,
    4,
    _F.bind(null, e, A),
    t
  );
}, useLayoutEffect: function(A, e) {
  return hc(4194308, 4, A, e);
}, useInsertionEffect: function(A, e) {
  return hc(4, 2, A, e);
}, useMemo: function(A, e) {
  var t = mn();
  return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
}, useReducer: function(A, e, t) {
  var n = mn();
  return e = t !== void 0 ? t(e) : e, n.memoizedState = n.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, n.queue = A, A = A.dispatch = VO.bind(null, te, A), [n.memoizedState, A];
}, useRef: function(A) {
  var e = mn();
  return A = { current: A }, e.memoizedState = A;
}, useState: RC, useDebugValue: Fw, useDeferredValue: function(A) {
  return mn().memoizedState = A;
}, useTransition: function() {
  var A = RC(!1), e = A[0];
  return A = GO.bind(null, A[1]), mn().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var n = te, r = mn();
  if (ZA) {
    if (t === void 0) throw Error($(407));
    t = t();
  } else {
    if (t = e(), Ue === null) throw Error($(349));
    ki & 30 || UF(n, e, t);
  }
  r.memoizedState = t;
  var o = { value: t, getSnapshot: e };
  return r.queue = o, KC(IF.bind(
    null,
    n,
    o,
    A
  ), [A]), n.flags |= 2048, Ws(9, EF.bind(null, n, o, t, e), void 0, null), t;
}, useId: function() {
  var A = mn(), e = Ue.identifierPrefix;
  if (ZA) {
    var t = Yn, n = zn;
    t = (n & ~(1 << 32 - ln(n) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = Vs++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = PO++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, XO = {
  readContext: Gt,
  useCallback: OF,
  useContext: Gt,
  useEffect: yw,
  useImperativeHandle: TF,
  useInsertionEffect: LF,
  useLayoutEffect: bF,
  useMemo: DF,
  useReducer: aB,
  useRef: SF,
  useState: function() {
    return aB($s);
  },
  useDebugValue: Fw,
  useDeferredValue: function(A) {
    var e = Vt();
    return kF(e, he.memoizedState, A);
  },
  useTransition: function() {
    var A = aB($s)[0], e = Vt().memoizedState;
    return [A, e];
  },
  useMutableSource: yF,
  useSyncExternalStore: FF,
  useId: RF,
  unstable_isNewReconciler: !1
}, zO = { readContext: Gt, useCallback: OF, useContext: Gt, useEffect: yw, useImperativeHandle: TF, useInsertionEffect: LF, useLayoutEffect: bF, useMemo: DF, useReducer: sB, useRef: SF, useState: function() {
  return sB($s);
}, useDebugValue: Fw, useDeferredValue: function(A) {
  var e = Vt();
  return he === null ? e.memoizedState = A : kF(e, he.memoizedState, A);
}, useTransition: function() {
  var A = sB($s)[0], e = Vt().memoizedState;
  return [A, e];
}, useMutableSource: yF, useSyncExternalStore: FF, useId: RF, unstable_isNewReconciler: !1 };
function nn(A, e) {
  if (A && A.defaultProps) {
    e = ne({}, e), A = A.defaultProps;
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function Fp(A, e, t, n) {
  e = A.memoizedState, t = t(n, e), t = t == null ? e : ne({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Df = { isMounted: function(A) {
  return (A = A._reactInternals) ? Vi(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var n = Xe(), r = Nr(A), o = Jn(n, r);
  o.payload = e, t != null && (o.callback = t), e = Kr(A, o, r), e !== null && (un(e, A, r, n), Bc(e, A, r));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var n = Xe(), r = Nr(A), o = Jn(n, r);
  o.tag = 1, o.payload = e, t != null && (o.callback = t), e = Kr(A, o, r), e !== null && (un(e, A, r, n), Bc(e, A, r));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = Xe(), n = Nr(A), r = Jn(t, n);
  r.tag = 2, e != null && (r.callback = e), e = Kr(A, r, n), e !== null && (un(e, A, n, t), Bc(e, A, n));
} };
function MC(A, e, t, n, r, o, s) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(n, o, s) : e.prototype && e.prototype.isPureReactComponent ? !Rs(t, n) || !Rs(r, o) : !0;
}
function PF(A, e, t) {
  var n = !1, r = Wr, o = e.contextType;
  return typeof o == "object" && o !== null ? o = Gt(o) : (r = at(e) ? Oi : Ne.current, n = e.contextTypes, o = (n = n != null) ? zo(A, r) : Wr), e = new e(t, o), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Df, A.stateNode = e, e._reactInternals = A, n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = r, A.__reactInternalMemoizedMaskedChildContext = o), e;
}
function NC(A, e, t, n) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== A && Df.enqueueReplaceState(e, e.state, null);
}
function Up(A, e, t, n) {
  var r = A.stateNode;
  r.props = t, r.state = A.memoizedState, r.refs = {}, pw(A);
  var o = e.contextType;
  typeof o == "object" && o !== null ? r.context = Gt(o) : (o = at(e) ? Oi : Ne.current, r.context = zo(A, o)), r.state = A.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Fp(A, e, o, t), r.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && Df.enqueueReplaceState(r, r.state, null), Yc(A, t, r, n), r.state = A.memoizedState), typeof r.componentDidMount == "function" && (A.flags |= 4194308);
}
function Zo(A, e) {
  try {
    var t = "", n = e;
    do
      t += QT(n), n = n.return;
    while (n);
    var r = t;
  } catch (o) {
    r = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: A, source: e, stack: r, digest: null };
}
function lB(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function Ep(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var YO = typeof WeakMap == "function" ? WeakMap : Map;
function GF(A, e, t) {
  t = Jn(-1, t), t.tag = 3, t.payload = { element: null };
  var n = e.value;
  return t.callback = function() {
    Af || (Af = !0, Dp = n), Ep(A, e);
  }, t;
}
function VF(A, e, t) {
  t = Jn(-1, t), t.tag = 3;
  var n = A.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = e.value;
    t.payload = function() {
      return n(r);
    }, t.callback = function() {
      Ep(A, e);
    };
  }
  var o = A.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Ep(A, e), typeof n != "function" && (Mr === null ? Mr = /* @__PURE__ */ new Set([this]) : Mr.add(this));
    var s = e.stack;
    this.componentDidCatch(e.value, { componentStack: s !== null ? s : "" });
  }), t;
}
function PC(A, e, t) {
  var n = A.pingCache;
  if (n === null) {
    n = A.pingCache = new YO();
    var r = /* @__PURE__ */ new Set();
    n.set(e, r);
  } else r = n.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), n.set(e, r));
  r.has(t) || (r.add(t), A = lD.bind(null, A, e, t), e.then(A, A));
}
function GC(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function VC(A, e, t, n, r) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = r, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = Jn(-1, 1), e.tag = 2, Kr(t, e, 1))), t.lanes |= 1), A);
}
var JO = ar.ReactCurrentOwner, nt = !1;
function We(A, e, t, n) {
  e.child = A === null ? vF(e, null, t, n) : Jo(e, A.child, t, n);
}
function $C(A, e, t, n, r) {
  t = t.render;
  var o = e.ref;
  return No(e, r), n = Cw(A, e, t, n, o, r), t = Qw(), A !== null && !nt ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, tr(A, e, r)) : (ZA && t && lw(e), e.flags |= 1, We(A, e, n, r), e.child);
}
function WC(A, e, t, n, r) {
  if (A === null) {
    var o = t.type;
    return typeof o == "function" && !bw(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = o, $F(A, e, o, n, r)) : (A = Cc(t.type, null, n, e, e.mode, r), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (o = A.child, !(A.lanes & r)) {
    var s = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Rs, t(s, n) && A.ref === e.ref) return tr(A, e, r);
  }
  return e.flags |= 1, A = Pr(o, n), A.ref = e.ref, A.return = e, e.child = A;
}
function $F(A, e, t, n, r) {
  if (A !== null) {
    var o = A.memoizedProps;
    if (Rs(o, n) && A.ref === e.ref) if (nt = !1, e.pendingProps = n = o, (A.lanes & r) !== 0) A.flags & 131072 && (nt = !0);
    else return e.lanes = A.lanes, tr(A, e, r);
  }
  return Ip(A, e, t, n, r);
}
function WF(A, e, t) {
  var n = e.pendingProps, r = n.children, o = A !== null ? A.memoizedState : null;
  if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, PA(Lo, vt), vt |= t;
  else {
    if (!(t & 1073741824)) return A = o !== null ? o.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, PA(Lo, vt), vt |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : t, PA(Lo, vt), vt |= n;
  }
  else o !== null ? (n = o.baseLanes | t, e.memoizedState = null) : n = t, PA(Lo, vt), vt |= n;
  return We(A, e, r, t), e.child;
}
function XF(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Ip(A, e, t, n, r) {
  var o = at(t) ? Oi : Ne.current;
  return o = zo(e, o), No(e, r), t = Cw(A, e, t, n, o, r), n = Qw(), A !== null && !nt ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, tr(A, e, r)) : (ZA && n && lw(e), e.flags |= 1, We(A, e, t, r), e.child);
}
function XC(A, e, t, n, r) {
  if (at(t)) {
    var o = !0;
    Vc(e);
  } else o = !1;
  if (No(e, r), e.stateNode === null) wc(A, e), PF(e, t, n), Up(e, t, n, r), n = !0;
  else if (A === null) {
    var s = e.stateNode, l = e.memoizedProps;
    s.props = l;
    var c = s.context, f = t.contextType;
    typeof f == "object" && f !== null ? f = Gt(f) : (f = at(t) ? Oi : Ne.current, f = zo(e, f));
    var g = t.getDerivedStateFromProps, B = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    B || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== n || c !== f) && NC(e, s, n, f), Fr = !1;
    var p = e.memoizedState;
    s.state = p, Yc(e, n, s, r), c = e.memoizedState, l !== n || p !== c || ot.current || Fr ? (typeof g == "function" && (Fp(e, t, g, n), c = e.memoizedState), (l = Fr || MC(e, t, l, n, p, c, f)) ? (B || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = c), s.props = n, s.state = c, s.context = f, n = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
  } else {
    s = e.stateNode, CF(A, e), l = e.memoizedProps, f = e.type === e.elementType ? l : nn(e.type, l), s.props = f, B = e.pendingProps, p = s.context, c = t.contextType, typeof c == "object" && c !== null ? c = Gt(c) : (c = at(t) ? Oi : Ne.current, c = zo(e, c));
    var v = t.getDerivedStateFromProps;
    (g = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== B || p !== c) && NC(e, s, n, c), Fr = !1, p = e.memoizedState, s.state = p, Yc(e, n, s, r);
    var F = e.memoizedState;
    l !== B || p !== F || ot.current || Fr ? (typeof v == "function" && (Fp(e, t, v, n), F = e.memoizedState), (f = Fr || MC(e, t, f, n, p, F, c) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(n, F, c), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(n, F, c)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === A.memoizedProps && p === A.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === A.memoizedProps && p === A.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = F), s.props = n, s.state = F, s.context = c, n = f) : (typeof s.componentDidUpdate != "function" || l === A.memoizedProps && p === A.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === A.memoizedProps && p === A.memoizedState || (e.flags |= 1024), n = !1);
  }
  return xp(A, e, t, n, o, r);
}
function xp(A, e, t, n, r, o) {
  XF(A, e);
  var s = (e.flags & 128) !== 0;
  if (!n && !s) return r && bC(e, t, !1), tr(A, e, o);
  n = e.stateNode, JO.current = e;
  var l = s && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, A !== null && s ? (e.child = Jo(e, A.child, null, o), e.child = Jo(e, null, l, o)) : We(A, e, l, o), e.memoizedState = n.state, r && bC(e, t, !0), e.child;
}
function zF(A) {
  var e = A.stateNode;
  e.pendingContext ? LC(A, e.pendingContext, e.pendingContext !== e.context) : e.context && LC(A, e.context, !1), hw(A, e.containerInfo);
}
function zC(A, e, t, n, r) {
  return Yo(), cw(r), e.flags |= 256, We(A, e, t, n), e.child;
}
var Hp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sp(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function YF(A, e, t) {
  var n = e.pendingProps, r = Ae.current, o = !1, s = (e.flags & 128) !== 0, l;
  if ((l = s) || (l = A !== null && A.memoizedState === null ? !1 : (r & 2) !== 0), l ? (o = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (r |= 1), PA(Ae, r & 1), A === null)
    return Qp(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (s = n.children, A = n.fallback, o ? (n = e.mode, o = e.child, s = { mode: "hidden", children: s }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Kf(s, n, 0, null), A = Hi(A, n, t, null), o.return = e, A.return = e, o.sibling = A, e.child = o, e.child.memoizedState = Sp(t), e.memoizedState = Hp, A) : Uw(e, s));
  if (r = A.memoizedState, r !== null && (l = r.dehydrated, l !== null)) return jO(A, e, s, n, l, r, t);
  if (o) {
    o = n.fallback, s = e.mode, r = A.child, l = r.sibling;
    var c = { mode: "hidden", children: n.children };
    return !(s & 1) && e.child !== r ? (n = e.child, n.childLanes = 0, n.pendingProps = c, e.deletions = null) : (n = Pr(r, c), n.subtreeFlags = r.subtreeFlags & 14680064), l !== null ? o = Pr(l, o) : (o = Hi(o, s, t, null), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, n = o, o = e.child, s = A.child.memoizedState, s = s === null ? Sp(t) : { baseLanes: s.baseLanes | t, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = A.childLanes & ~t, e.memoizedState = Hp, n;
  }
  return o = A.child, A = o.sibling, n = Pr(o, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = t), n.return = e, n.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = n, e.memoizedState = null, n;
}
function Uw(A, e) {
  return e = Kf({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function Uu(A, e, t, n) {
  return n !== null && cw(n), Jo(e, A.child, null, t), A = Uw(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function jO(A, e, t, n, r, o, s) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, n = lB(Error($(422))), Uu(A, e, s, n)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (o = n.fallback, r = e.mode, n = Kf({ mode: "visible", children: n.children }, r, 0, null), o = Hi(o, r, s, null), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, e.mode & 1 && Jo(e, A.child, null, s), e.child.memoizedState = Sp(s), e.memoizedState = Hp, o);
  if (!(e.mode & 1)) return Uu(A, e, s, null);
  if (r.data === "$!") {
    if (n = r.nextSibling && r.nextSibling.dataset, n) var l = n.dgst;
    return n = l, o = Error($(419)), n = lB(o, n, void 0), Uu(A, e, s, n);
  }
  if (l = (s & A.childLanes) !== 0, nt || l) {
    if (n = Ue, n !== null) {
      switch (s & -s) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      r = r & (n.suspendedLanes | s) ? 0 : r, r !== 0 && r !== o.retryLane && (o.retryLane = r, er(A, r), un(n, A, r, -1));
    }
    return Lw(), n = lB(Error($(421))), Uu(A, e, s, n);
  }
  return r.data === "$?" ? (e.flags |= 128, e.child = A.child, e = uD.bind(null, A), r._reactRetry = e, null) : (A = o.treeContext, mt = Rr(r.nextSibling), Ct = e, ZA = !0, on = null, A !== null && (Dt[kt++] = zn, Dt[kt++] = Yn, Dt[kt++] = Di, zn = A.id, Yn = A.overflow, Di = e), e = Uw(e, n.children), e.flags |= 4096, e);
}
function YC(A, e, t) {
  A.lanes |= e;
  var n = A.alternate;
  n !== null && (n.lanes |= e), yp(A.return, e, t);
}
function uB(A, e, t, n, r) {
  var o = A.memoizedState;
  o === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: t, tailMode: r } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = t, o.tailMode = r);
}
function JF(A, e, t) {
  var n = e.pendingProps, r = n.revealOrder, o = n.tail;
  if (We(A, e, n.children, t), n = Ae.current, n & 2) n = n & 1 | 2, e.flags |= 128;
  else {
    if (A !== null && A.flags & 128) A: for (A = e.child; A !== null; ) {
      if (A.tag === 13) A.memoizedState !== null && YC(A, t, e);
      else if (A.tag === 19) YC(A, t, e);
      else if (A.child !== null) {
        A.child.return = A, A = A.child;
        continue;
      }
      if (A === e) break A;
      for (; A.sibling === null; ) {
        if (A.return === null || A.return === e) break A;
        A = A.return;
      }
      A.sibling.return = A.return, A = A.sibling;
    }
    n &= 1;
  }
  if (PA(Ae, n), !(e.mode & 1)) e.memoizedState = null;
  else switch (r) {
    case "forwards":
      for (t = e.child, r = null; t !== null; ) A = t.alternate, A !== null && Jc(A) === null && (r = t), t = t.sibling;
      t = r, t === null ? (r = e.child, e.child = null) : (r = t.sibling, t.sibling = null), uB(e, !1, r, t, o);
      break;
    case "backwards":
      for (t = null, r = e.child, e.child = null; r !== null; ) {
        if (A = r.alternate, A !== null && Jc(A) === null) {
          e.child = r;
          break;
        }
        A = r.sibling, r.sibling = t, t = r, r = A;
      }
      uB(e, !0, t, null, o);
      break;
    case "together":
      uB(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function wc(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function tr(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Ri |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error($(153));
  if (e.child !== null) {
    for (A = e.child, t = Pr(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; ) A = A.sibling, t = t.sibling = Pr(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function ZO(A, e, t) {
  switch (e.tag) {
    case 3:
      zF(e), Yo();
      break;
    case 5:
      QF(e);
      break;
    case 1:
      at(e.type) && Vc(e);
      break;
    case 4:
      hw(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context, r = e.memoizedProps.value;
      PA(Xc, n._currentValue), n._currentValue = r;
      break;
    case 13:
      if (n = e.memoizedState, n !== null)
        return n.dehydrated !== null ? (PA(Ae, Ae.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? YF(A, e, t) : (PA(Ae, Ae.current & 1), A = tr(A, e, t), A !== null ? A.sibling : null);
      PA(Ae, Ae.current & 1);
      break;
    case 19:
      if (n = (t & e.childLanes) !== 0, A.flags & 128) {
        if (n) return JF(A, e, t);
        e.flags |= 128;
      }
      if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), PA(Ae, Ae.current), n) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, WF(A, e, t);
  }
  return tr(A, e, t);
}
var jF, Lp, ZF, qF;
jF = function(A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Lp = function() {
};
ZF = function(A, e, t, n) {
  var r = A.memoizedProps;
  if (r !== n) {
    A = e.stateNode, Qi(En.current);
    var o = null;
    switch (t) {
      case "input":
        r = qB(A, r), n = qB(A, n), o = [];
        break;
      case "select":
        r = ne({}, r, { value: void 0 }), n = ne({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        r = tp(A, r), n = tp(A, n), o = [];
        break;
      default:
        typeof r.onClick != "function" && typeof n.onClick == "function" && (A.onclick = Pc);
    }
    rp(t, n);
    var s;
    t = null;
    for (f in r) if (!n.hasOwnProperty(f) && r.hasOwnProperty(f) && r[f] != null) if (f === "style") {
      var l = r[f];
      for (s in l) l.hasOwnProperty(s) && (t || (t = {}), t[s] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Ls.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in n) {
      var c = n[f];
      if (l = r != null ? r[f] : void 0, n.hasOwnProperty(f) && c !== l && (c != null || l != null)) if (f === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (t || (t = {}), t[s] = "");
        for (s in c) c.hasOwnProperty(s) && l[s] !== c[s] && (t || (t = {}), t[s] = c[s]);
      } else t || (o || (o = []), o.push(
        f,
        t
      )), t = c;
      else f === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (o = o || []).push(f, c)) : f === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(f, "" + c) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Ls.hasOwnProperty(f) ? (c != null && f === "onScroll" && $A("scroll", A), o || l === c || (o = [])) : (o = o || []).push(f, c));
    }
    t && (o = o || []).push("style", t);
    var f = o;
    (e.updateQueue = f) && (e.flags |= 4);
  }
};
qF = function(A, e, t, n) {
  t !== n && (e.flags |= 4);
};
function $a(A, e) {
  if (!ZA) switch (A.tailMode) {
    case "hidden":
      e = A.tail;
      for (var t = null; e !== null; ) e.alternate !== null && (t = e), e = e.sibling;
      t === null ? A.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = A.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : n.sibling = null;
  }
}
function ke(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, n = 0;
  if (e) for (var r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags & 14680064, n |= r.flags & 14680064, r.return = A, r = r.sibling;
  else for (r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags, n |= r.flags, r.return = A, r = r.sibling;
  return A.subtreeFlags |= n, A.childLanes = t, e;
}
function qO(A, e, t) {
  var n = e.pendingProps;
  switch (uw(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(e), null;
    case 1:
      return at(e.type) && Gc(), ke(e), null;
    case 3:
      return n = e.stateNode, jo(), zA(ot), zA(Ne), vw(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (A === null || A.child === null) && (yu(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, on !== null && (Kp(on), on = null))), Lp(A, e), ke(e), null;
    case 5:
      ww(e);
      var r = Qi(Gs.current);
      if (t = e.type, A !== null && e.stateNode != null) ZF(A, e, t, n, r), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null) throw Error($(166));
          return ke(e), null;
        }
        if (A = Qi(En.current), yu(e)) {
          n = e.stateNode, t = e.type;
          var o = e.memoizedProps;
          switch (n[yn] = e, n[Ns] = o, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              $A("cancel", n), $A("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              $A("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < es.length; r++) $A(es[r], n);
              break;
            case "source":
              $A("error", n);
              break;
            case "img":
            case "image":
            case "link":
              $A(
                "error",
                n
              ), $A("load", n);
              break;
            case "details":
              $A("toggle", n);
              break;
            case "input":
              rC(n, o), $A("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, $A("invalid", n);
              break;
            case "textarea":
              oC(n, o), $A("invalid", n);
          }
          rp(t, o), r = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var l = o[s];
            s === "children" ? typeof l == "string" ? n.textContent !== l && (o.suppressHydrationWarning !== !0 && Qu(n.textContent, l, A), r = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Qu(
              n.textContent,
              l,
              A
            ), r = ["children", "" + l]) : Ls.hasOwnProperty(s) && l != null && s === "onScroll" && $A("scroll", n);
          }
          switch (t) {
            case "input":
              gu(n), iC(n, o, !0);
              break;
            case "textarea":
              gu(n), aC(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Pc);
          }
          n = r, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          s = r.nodeType === 9 ? r : r.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = Iy(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = s.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof n.is == "string" ? A = s.createElement(t, { is: n.is }) : (A = s.createElement(t), t === "select" && (s = A, n.multiple ? s.multiple = !0 : n.size && (s.size = n.size))) : A = s.createElementNS(A, t), A[yn] = e, A[Ns] = n, jF(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (s = ip(t, n), t) {
              case "dialog":
                $A("cancel", A), $A("close", A), r = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                $A("load", A), r = n;
                break;
              case "video":
              case "audio":
                for (r = 0; r < es.length; r++) $A(es[r], A);
                r = n;
                break;
              case "source":
                $A("error", A), r = n;
                break;
              case "img":
              case "image":
              case "link":
                $A(
                  "error",
                  A
                ), $A("load", A), r = n;
                break;
              case "details":
                $A("toggle", A), r = n;
                break;
              case "input":
                rC(A, n), r = qB(A, n), $A("invalid", A);
                break;
              case "option":
                r = n;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!n.multiple }, r = ne({}, n, { value: void 0 }), $A("invalid", A);
                break;
              case "textarea":
                oC(A, n), r = tp(A, n), $A("invalid", A);
                break;
              default:
                r = n;
            }
            rp(t, r), l = r;
            for (o in l) if (l.hasOwnProperty(o)) {
              var c = l[o];
              o === "style" ? Sy(A, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && xy(A, c)) : o === "children" ? typeof c == "string" ? (t !== "textarea" || c !== "") && bs(A, c) : typeof c == "number" && bs(A, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ls.hasOwnProperty(o) ? c != null && o === "onScroll" && $A("scroll", A) : c != null && Yh(A, o, c, s));
            }
            switch (t) {
              case "input":
                gu(A), iC(A, n, !1);
                break;
              case "textarea":
                gu(A), aC(A);
                break;
              case "option":
                n.value != null && A.setAttribute("value", "" + $r(n.value));
                break;
              case "select":
                A.multiple = !!n.multiple, o = n.value, o != null ? ko(A, !!n.multiple, o, !1) : n.defaultValue != null && ko(
                  A,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof r.onClick == "function" && (A.onclick = Pc);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break A;
              case "img":
                n = !0;
                break A;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return ke(e), null;
    case 6:
      if (A && e.stateNode != null) qF(A, e, A.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error($(166));
        if (t = Qi(Gs.current), Qi(En.current), yu(e)) {
          if (n = e.stateNode, t = e.memoizedProps, n[yn] = e, (o = n.nodeValue !== t) && (A = Ct, A !== null)) switch (A.tag) {
            case 3:
              Qu(n.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && Qu(n.nodeValue, t, (A.mode & 1) !== 0);
          }
          o && (e.flags |= 4);
        } else n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n), n[yn] = e, e.stateNode = n;
      }
      return ke(e), null;
    case 13:
      if (zA(Ae), n = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (ZA && mt !== null && e.mode & 1 && !(e.flags & 128)) hF(), Yo(), e.flags |= 98560, o = !1;
        else if (o = yu(e), n !== null && n.dehydrated !== null) {
          if (A === null) {
            if (!o) throw Error($(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error($(317));
            o[yn] = e;
          } else Yo(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          ke(e), o = !1;
        } else on !== null && (Kp(on), on = null), o = !0;
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (n = n !== null, n !== (A !== null && A.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (A === null || Ae.current & 1 ? ve === 0 && (ve = 3) : Lw())), e.updateQueue !== null && (e.flags |= 4), ke(e), null);
    case 4:
      return jo(), Lp(A, e), A === null && Ks(e.stateNode.containerInfo), ke(e), null;
    case 10:
      return gw(e.type._context), ke(e), null;
    case 17:
      return at(e.type) && Gc(), ke(e), null;
    case 19:
      if (zA(Ae), o = e.memoizedState, o === null) return ke(e), null;
      if (n = (e.flags & 128) !== 0, s = o.rendering, s === null) if (n) $a(o, !1);
      else {
        if (ve !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (s = Jc(A), s !== null) {
            for (e.flags |= 128, $a(o, !1), n = s.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = t, t = e.child; t !== null; ) o = t, A = n, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = A, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, A = s.dependencies, o.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return PA(Ae, Ae.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        o.tail !== null && ce() > qo && (e.flags |= 128, n = !0, $a(o, !1), e.lanes = 4194304);
      }
      else {
        if (!n) if (A = Jc(s), A !== null) {
          if (e.flags |= 128, n = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), $a(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ZA) return ke(e), null;
        } else 2 * ce() - o.renderingStartTime > qo && t !== 1073741824 && (e.flags |= 128, n = !0, $a(o, !1), e.lanes = 4194304);
        o.isBackwards ? (s.sibling = e.child, e.child = s) : (t = o.last, t !== null ? t.sibling = s : e.child = s, o.last = s);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = ce(), e.sibling = null, t = Ae.current, PA(Ae, n ? t & 1 | 2 : t & 1), e) : (ke(e), null);
    case 22:
    case 23:
      return Sw(), n = e.memoizedState !== null, A !== null && A.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? vt & 1073741824 && (ke(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ke(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, e.tag));
}
function AD(A, e) {
  switch (uw(e), e.tag) {
    case 1:
      return at(e.type) && Gc(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return jo(), zA(ot), zA(Ne), vw(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return ww(e), null;
    case 13:
      if (zA(Ae), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error($(340));
        Yo();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return zA(Ae), null;
    case 4:
      return jo(), null;
    case 10:
      return gw(e.type._context), null;
    case 22:
    case 23:
      return Sw(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Eu = !1, Me = !1, eD = typeof WeakSet == "function" ? WeakSet : Set, eA = null;
function So(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    ie(A, e, n);
  }
  else t.current = null;
}
function bp(A, e, t) {
  try {
    t();
  } catch (n) {
    ie(A, e, n);
  }
}
var JC = !1;
function tD(A, e) {
  if (Bp = Kc, A = rF(), sw(A)) {
    if ("selectionStart" in A) var t = { start: A.selectionStart, end: A.selectionEnd };
    else A: {
      t = (t = A.ownerDocument) && t.defaultView || window;
      var n = t.getSelection && t.getSelection();
      if (n && n.rangeCount !== 0) {
        t = n.anchorNode;
        var r = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break A;
        }
        var s = 0, l = -1, c = -1, f = 0, g = 0, B = A, p = null;
        e: for (; ; ) {
          for (var v; B !== t || r !== 0 && B.nodeType !== 3 || (l = s + r), B !== o || n !== 0 && B.nodeType !== 3 || (c = s + n), B.nodeType === 3 && (s += B.nodeValue.length), (v = B.firstChild) !== null; )
            p = B, B = v;
          for (; ; ) {
            if (B === A) break e;
            if (p === t && ++f === r && (l = s), p === o && ++g === n && (c = s), (v = B.nextSibling) !== null) break;
            B = p, p = B.parentNode;
          }
          B = v;
        }
        t = l === -1 || c === -1 ? null : { start: l, end: c };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (pp = { focusedElem: A, selectionRange: t }, Kc = !1, eA = e; eA !== null; ) if (e = eA, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null) A.return = e, eA = A;
  else for (; eA !== null; ) {
    e = eA;
    try {
      var F = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (F !== null) {
            var U = F.memoizedProps, L = F.memoizedState, m = e.stateNode, w = m.getSnapshotBeforeUpdate(e.elementType === e.type ? U : nn(e.type, U), L);
            m.__reactInternalSnapshotBeforeUpdate = w;
          }
          break;
        case 3:
          var y = e.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error($(163));
      }
    } catch (I) {
      ie(e, e.return, I);
    }
    if (A = e.sibling, A !== null) {
      A.return = e.return, eA = A;
      break;
    }
    eA = e.return;
  }
  return F = JC, JC = !1, F;
}
function ws(A, e, t) {
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var r = n = n.next;
    do {
      if ((r.tag & A) === A) {
        var o = r.destroy;
        r.destroy = void 0, o !== void 0 && bp(e, t, o);
      }
      r = r.next;
    } while (r !== n);
  }
}
function kf(A, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & A) === A) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== e);
  }
}
function _p(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : e.current = A;
  }
}
function AU(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, AU(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[yn], delete e[Ns], delete e[vp], delete e[RO], delete e[KO])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function eU(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function jC(A) {
  A: for (; ; ) {
    for (; A.sibling === null; ) {
      if (A.return === null || eU(A.return)) return null;
      A = A.return;
    }
    for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      A.child.return = A, A = A.child;
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Tp(A, e, t) {
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Pc));
  else if (n !== 4 && (A = A.child, A !== null)) for (Tp(A, e, t), A = A.sibling; A !== null; ) Tp(A, e, t), A = A.sibling;
}
function Op(A, e, t) {
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (n !== 4 && (A = A.child, A !== null)) for (Op(A, e, t), A = A.sibling; A !== null; ) Op(A, e, t), A = A.sibling;
}
var He = null, rn = !1;
function wr(A, e, t) {
  for (t = t.child; t !== null; ) tU(A, e, t), t = t.sibling;
}
function tU(A, e, t) {
  if (Un && typeof Un.onCommitFiberUnmount == "function") try {
    Un.onCommitFiberUnmount(Hf, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      Me || So(t, e);
    case 6:
      var n = He, r = rn;
      He = null, wr(A, e, t), He = n, rn = r, He !== null && (rn ? (A = He, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : He.removeChild(t.stateNode));
      break;
    case 18:
      He !== null && (rn ? (A = He, t = t.stateNode, A.nodeType === 8 ? nB(A.parentNode, t) : A.nodeType === 1 && nB(A, t), Ds(A)) : nB(He, t.stateNode));
      break;
    case 4:
      n = He, r = rn, He = t.stateNode.containerInfo, rn = !0, wr(A, e, t), He = n, rn = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (n = t.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        r = n = n.next;
        do {
          var o = r, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && bp(t, e, s), r = r.next;
        } while (r !== n);
      }
      wr(A, e, t);
      break;
    case 1:
      if (!Me && (So(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = t.memoizedProps, n.state = t.memoizedState, n.componentWillUnmount();
      } catch (l) {
        ie(t, e, l);
      }
      wr(A, e, t);
      break;
    case 21:
      wr(A, e, t);
      break;
    case 22:
      t.mode & 1 ? (Me = (n = Me) || t.memoizedState !== null, wr(A, e, t), Me = n) : wr(A, e, t);
      break;
    default:
      wr(A, e, t);
  }
}
function ZC(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new eD()), e.forEach(function(n) {
      var r = cD.bind(null, A, n);
      t.has(n) || (t.add(n), n.then(r, r));
    });
  }
}
function An(A, e) {
  var t = e.deletions;
  if (t !== null) for (var n = 0; n < t.length; n++) {
    var r = t[n];
    try {
      var o = A, s = e, l = s;
      A: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            He = l.stateNode, rn = !1;
            break A;
          case 3:
            He = l.stateNode.containerInfo, rn = !0;
            break A;
          case 4:
            He = l.stateNode.containerInfo, rn = !0;
            break A;
        }
        l = l.return;
      }
      if (He === null) throw Error($(160));
      tU(o, s, r), He = null, rn = !1;
      var c = r.alternate;
      c !== null && (c.return = null), r.return = null;
    } catch (f) {
      ie(r, e, f);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) nU(e, A), e = e.sibling;
}
function nU(A, e) {
  var t = A.alternate, n = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (An(e, A), wn(A), n & 4) {
        try {
          ws(3, A, A.return), kf(3, A);
        } catch (U) {
          ie(A, A.return, U);
        }
        try {
          ws(5, A, A.return);
        } catch (U) {
          ie(A, A.return, U);
        }
      }
      break;
    case 1:
      An(e, A), wn(A), n & 512 && t !== null && So(t, t.return);
      break;
    case 5:
      if (An(e, A), wn(A), n & 512 && t !== null && So(t, t.return), A.flags & 32) {
        var r = A.stateNode;
        try {
          bs(r, "");
        } catch (U) {
          ie(A, A.return, U);
        }
      }
      if (n & 4 && (r = A.stateNode, r != null)) {
        var o = A.memoizedProps, s = t !== null ? t.memoizedProps : o, l = A.type, c = A.updateQueue;
        if (A.updateQueue = null, c !== null) try {
          l === "input" && o.type === "radio" && o.name != null && Uy(r, o), ip(l, s);
          var f = ip(l, o);
          for (s = 0; s < c.length; s += 2) {
            var g = c[s], B = c[s + 1];
            g === "style" ? Sy(r, B) : g === "dangerouslySetInnerHTML" ? xy(r, B) : g === "children" ? bs(r, B) : Yh(r, g, B, f);
          }
          switch (l) {
            case "input":
              Ap(r, o);
              break;
            case "textarea":
              Ey(r, o);
              break;
            case "select":
              var p = r._wrapperState.wasMultiple;
              r._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? ko(r, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? ko(
                r,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ko(r, !!o.multiple, o.multiple ? [] : "", !1));
          }
          r[Ns] = o;
        } catch (U) {
          ie(A, A.return, U);
        }
      }
      break;
    case 6:
      if (An(e, A), wn(A), n & 4) {
        if (A.stateNode === null) throw Error($(162));
        r = A.stateNode, o = A.memoizedProps;
        try {
          r.nodeValue = o;
        } catch (U) {
          ie(A, A.return, U);
        }
      }
      break;
    case 3:
      if (An(e, A), wn(A), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ds(e.containerInfo);
      } catch (U) {
        ie(A, A.return, U);
      }
      break;
    case 4:
      An(e, A), wn(A);
      break;
    case 13:
      An(e, A), wn(A), r = A.child, r.flags & 8192 && (o = r.memoizedState !== null, r.stateNode.isHidden = o, !o || r.alternate !== null && r.alternate.memoizedState !== null || (xw = ce())), n & 4 && ZC(A);
      break;
    case 22:
      if (g = t !== null && t.memoizedState !== null, A.mode & 1 ? (Me = (f = Me) || g, An(e, A), Me = f) : An(e, A), wn(A), n & 8192) {
        if (f = A.memoizedState !== null, (A.stateNode.isHidden = f) && !g && A.mode & 1) for (eA = A, g = A.child; g !== null; ) {
          for (B = eA = g; eA !== null; ) {
            switch (p = eA, v = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ws(4, p, p.return);
                break;
              case 1:
                So(p, p.return);
                var F = p.stateNode;
                if (typeof F.componentWillUnmount == "function") {
                  n = p, t = p.return;
                  try {
                    e = n, F.props = e.memoizedProps, F.state = e.memoizedState, F.componentWillUnmount();
                  } catch (U) {
                    ie(n, t, U);
                  }
                }
                break;
              case 5:
                So(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  AQ(B);
                  continue;
                }
            }
            v !== null ? (v.return = p, eA = v) : AQ(B);
          }
          g = g.sibling;
        }
        A: for (g = null, B = A; ; ) {
          if (B.tag === 5) {
            if (g === null) {
              g = B;
              try {
                r = B.stateNode, f ? (o = r.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = B.stateNode, c = B.memoizedProps.style, s = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = Hy("display", s));
              } catch (U) {
                ie(A, A.return, U);
              }
            }
          } else if (B.tag === 6) {
            if (g === null) try {
              B.stateNode.nodeValue = f ? "" : B.memoizedProps;
            } catch (U) {
              ie(A, A.return, U);
            }
          } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === A) && B.child !== null) {
            B.child.return = B, B = B.child;
            continue;
          }
          if (B === A) break A;
          for (; B.sibling === null; ) {
            if (B.return === null || B.return === A) break A;
            g === B && (g = null), B = B.return;
          }
          g === B && (g = null), B.sibling.return = B.return, B = B.sibling;
        }
      }
      break;
    case 19:
      An(e, A), wn(A), n & 4 && ZC(A);
      break;
    case 21:
      break;
    default:
      An(
        e,
        A
      ), wn(A);
  }
}
function wn(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (eU(t)) {
            var n = t;
            break A;
          }
          t = t.return;
        }
        throw Error($(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (bs(r, ""), n.flags &= -33);
          var o = jC(A);
          Op(A, o, r);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo, l = jC(A);
          Tp(A, l, s);
          break;
        default:
          throw Error($(161));
      }
    } catch (c) {
      ie(A, A.return, c);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function nD(A, e, t) {
  eA = A, rU(A);
}
function rU(A, e, t) {
  for (var n = (A.mode & 1) !== 0; eA !== null; ) {
    var r = eA, o = r.child;
    if (r.tag === 22 && n) {
      var s = r.memoizedState !== null || Eu;
      if (!s) {
        var l = r.alternate, c = l !== null && l.memoizedState !== null || Me;
        l = Eu;
        var f = Me;
        if (Eu = s, (Me = c) && !f) for (eA = r; eA !== null; ) s = eA, c = s.child, s.tag === 22 && s.memoizedState !== null ? eQ(r) : c !== null ? (c.return = s, eA = c) : eQ(r);
        for (; o !== null; ) eA = o, rU(o), o = o.sibling;
        eA = r, Eu = l, Me = f;
      }
      qC(A);
    } else r.subtreeFlags & 8772 && o !== null ? (o.return = r, eA = o) : qC(A);
  }
}
function qC(A) {
  for (; eA !== null; ) {
    var e = eA;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Me || kf(5, e);
            break;
          case 1:
            var n = e.stateNode;
            if (e.flags & 4 && !Me) if (t === null) n.componentDidMount();
            else {
              var r = e.elementType === e.type ? t.memoizedProps : nn(e.type, t.memoizedProps);
              n.componentDidUpdate(r, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = e.updateQueue;
            o !== null && kC(e, o, n);
            break;
          case 3:
            var s = e.updateQueue;
            if (s !== null) {
              if (t = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
              kC(e, s, t);
            }
            break;
          case 5:
            var l = e.stateNode;
            if (t === null && e.flags & 4) {
              t = l;
              var c = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && t.focus();
                  break;
                case "img":
                  c.src && (t.src = c.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (e.memoizedState === null) {
              var f = e.alternate;
              if (f !== null) {
                var g = f.memoizedState;
                if (g !== null) {
                  var B = g.dehydrated;
                  B !== null && Ds(B);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error($(163));
        }
        Me || e.flags & 512 && _p(e);
      } catch (p) {
        ie(e, e.return, p);
      }
    }
    if (e === A) {
      eA = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, eA = t;
      break;
    }
    eA = e.return;
  }
}
function AQ(A) {
  for (; eA !== null; ) {
    var e = eA;
    if (e === A) {
      eA = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, eA = t;
      break;
    }
    eA = e.return;
  }
}
function eQ(A) {
  for (; eA !== null; ) {
    var e = eA;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            kf(4, e);
          } catch (c) {
            ie(e, t, c);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = e.return;
            try {
              n.componentDidMount();
            } catch (c) {
              ie(e, r, c);
            }
          }
          var o = e.return;
          try {
            _p(e);
          } catch (c) {
            ie(e, o, c);
          }
          break;
        case 5:
          var s = e.return;
          try {
            _p(e);
          } catch (c) {
            ie(e, s, c);
          }
      }
    } catch (c) {
      ie(e, e.return, c);
    }
    if (e === A) {
      eA = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      l.return = e.return, eA = l;
      break;
    }
    eA = e.return;
  }
}
var rD = Math.ceil, qc = ar.ReactCurrentDispatcher, Ew = ar.ReactCurrentOwner, Pt = ar.ReactCurrentBatchConfig, xA = 0, Ue = null, ge = null, be = 0, vt = 0, Lo = ei(0), ve = 0, Xs = null, Ri = 0, Rf = 0, Iw = 0, vs = null, tt = null, xw = 0, qo = 1 / 0, Vn = null, Af = !1, Dp = null, Mr = null, Iu = !1, Sr = null, ef = 0, ms = 0, kp = null, vc = -1, mc = 0;
function Xe() {
  return xA & 6 ? ce() : vc !== -1 ? vc : vc = ce();
}
function Nr(A) {
  return A.mode & 1 ? xA & 2 && be !== 0 ? be & -be : NO.transition !== null ? (mc === 0 && (mc = Py()), mc) : (A = kA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : Yy(A.type)), A) : 1;
}
function un(A, e, t, n) {
  if (50 < ms) throw ms = 0, kp = null, Error($(185));
  sl(A, t, n), (!(xA & 2) || A !== Ue) && (A === Ue && (!(xA & 2) && (Rf |= t), ve === 4 && Ir(A, be)), st(A, n), t === 1 && xA === 0 && !(e.mode & 1) && (qo = ce() + 500, Tf && ti()));
}
function st(A, e) {
  var t = A.callbackNode;
  NT(A, e);
  var n = Rc(A, A === Ue ? be : 0);
  if (n === 0) t !== null && uC(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = n & -n, A.callbackPriority !== e) {
    if (t != null && uC(t), e === 1) A.tag === 0 ? MO(tQ.bind(null, A)) : gF(tQ.bind(null, A)), DO(function() {
      !(xA & 6) && ti();
    }), t = null;
    else {
      switch (Gy(n)) {
        case 1:
          t = Aw;
          break;
        case 4:
          t = My;
          break;
        case 16:
          t = kc;
          break;
        case 536870912:
          t = Ny;
          break;
        default:
          t = kc;
      }
      t = fU(t, iU.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function iU(A, e) {
  if (vc = -1, mc = 0, xA & 6) throw Error($(327));
  var t = A.callbackNode;
  if (Po() && A.callbackNode !== t) return null;
  var n = Rc(A, A === Ue ? be : 0);
  if (n === 0) return null;
  if (n & 30 || n & A.expiredLanes || e) e = tf(A, n);
  else {
    e = n;
    var r = xA;
    xA |= 2;
    var o = aU();
    (Ue !== A || be !== e) && (Vn = null, qo = ce() + 500, xi(A, e));
    do
      try {
        aD();
        break;
      } catch (l) {
        oU(A, l);
      }
    while (!0);
    dw(), qc.current = o, xA = r, ge !== null ? e = 0 : (Ue = null, be = 0, e = ve);
  }
  if (e !== 0) {
    if (e === 2 && (r = up(A), r !== 0 && (n = r, e = Rp(A, r))), e === 1) throw t = Xs, xi(A, 0), Ir(A, n), st(A, ce()), t;
    if (e === 6) Ir(A, n);
    else {
      if (r = A.current.alternate, !(n & 30) && !iD(r) && (e = tf(A, n), e === 2 && (o = up(A), o !== 0 && (n = o, e = Rp(A, o))), e === 1)) throw t = Xs, xi(A, 0), Ir(A, n), st(A, ce()), t;
      switch (A.finishedWork = r, A.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          pi(A, tt, Vn);
          break;
        case 3:
          if (Ir(A, n), (n & 130023424) === n && (e = xw + 500 - ce(), 10 < e)) {
            if (Rc(A, 0) !== 0) break;
            if (r = A.suspendedLanes, (r & n) !== n) {
              Xe(), A.pingedLanes |= A.suspendedLanes & r;
              break;
            }
            A.timeoutHandle = wp(pi.bind(null, A, tt, Vn), e);
            break;
          }
          pi(A, tt, Vn);
          break;
        case 4:
          if (Ir(A, n), (n & 4194240) === n) break;
          for (e = A.eventTimes, r = -1; 0 < n; ) {
            var s = 31 - ln(n);
            o = 1 << s, s = e[s], s > r && (r = s), n &= ~o;
          }
          if (n = r, n = ce() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * rD(n / 1960)) - n, 10 < n) {
            A.timeoutHandle = wp(pi.bind(null, A, tt, Vn), n);
            break;
          }
          pi(A, tt, Vn);
          break;
        case 5:
          pi(A, tt, Vn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return st(A, ce()), A.callbackNode === t ? iU.bind(null, A) : null;
}
function Rp(A, e) {
  var t = vs;
  return A.current.memoizedState.isDehydrated && (xi(A, e).flags |= 256), A = tf(A, e), A !== 2 && (e = tt, tt = t, e !== null && Kp(e)), A;
}
function Kp(A) {
  tt === null ? tt = A : tt.push.apply(tt, A);
}
function iD(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var n = 0; n < t.length; n++) {
        var r = t[n], o = r.getSnapshot;
        r = r.value;
        try {
          if (!fn(o(), r)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;
    else {
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Ir(A, e) {
  for (e &= ~Iw, e &= ~Rf, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - ln(e), n = 1 << t;
    A[t] = -1, e &= ~n;
  }
}
function tQ(A) {
  if (xA & 6) throw Error($(327));
  Po();
  var e = Rc(A, 0);
  if (!(e & 1)) return st(A, ce()), null;
  var t = tf(A, e);
  if (A.tag !== 0 && t === 2) {
    var n = up(A);
    n !== 0 && (e = n, t = Rp(A, n));
  }
  if (t === 1) throw t = Xs, xi(A, 0), Ir(A, e), st(A, ce()), t;
  if (t === 6) throw Error($(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, pi(A, tt, Vn), st(A, ce()), null;
}
function Hw(A, e) {
  var t = xA;
  xA |= 1;
  try {
    return A(e);
  } finally {
    xA = t, xA === 0 && (qo = ce() + 500, Tf && ti());
  }
}
function Ki(A) {
  Sr !== null && Sr.tag === 0 && !(xA & 6) && Po();
  var e = xA;
  xA |= 1;
  var t = Pt.transition, n = kA;
  try {
    if (Pt.transition = null, kA = 1, A) return A();
  } finally {
    kA = n, Pt.transition = t, xA = e, !(xA & 6) && ti();
  }
}
function Sw() {
  vt = Lo.current, zA(Lo);
}
function xi(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, OO(t)), ge !== null) for (t = ge.return; t !== null; ) {
    var n = t;
    switch (uw(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Gc();
        break;
      case 3:
        jo(), zA(ot), zA(Ne), vw();
        break;
      case 5:
        ww(n);
        break;
      case 4:
        jo();
        break;
      case 13:
        zA(Ae);
        break;
      case 19:
        zA(Ae);
        break;
      case 10:
        gw(n.type._context);
        break;
      case 22:
      case 23:
        Sw();
    }
    t = t.return;
  }
  if (Ue = A, ge = A = Pr(A.current, null), be = vt = e, ve = 0, Xs = null, Iw = Rf = Ri = 0, tt = vs = null, Ci !== null) {
    for (e = 0; e < Ci.length; e++) if (t = Ci[e], n = t.interleaved, n !== null) {
      t.interleaved = null;
      var r = n.next, o = t.pending;
      if (o !== null) {
        var s = o.next;
        o.next = r, n.next = s;
      }
      t.pending = n;
    }
    Ci = null;
  }
  return A;
}
function oU(A, e) {
  do {
    var t = ge;
    try {
      if (dw(), pc.current = Zc, jc) {
        for (var n = te.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), n = n.next;
        }
        jc = !1;
      }
      if (ki = 0, ye = he = te = null, hs = !1, Vs = 0, Ew.current = null, t === null || t.return === null) {
        ve = 1, Xs = e, ge = null;
        break;
      }
      A: {
        var o = A, s = t.return, l = t, c = e;
        if (e = be, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var f = c, g = l, B = g.tag;
          if (!(g.mode & 1) && (B === 0 || B === 11 || B === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var v = GC(s);
          if (v !== null) {
            v.flags &= -257, VC(v, s, l, o, e), v.mode & 1 && PC(o, f, e), e = v, c = f;
            var F = e.updateQueue;
            if (F === null) {
              var U = /* @__PURE__ */ new Set();
              U.add(c), e.updateQueue = U;
            } else F.add(c);
            break A;
          } else {
            if (!(e & 1)) {
              PC(o, f, e), Lw();
              break A;
            }
            c = Error($(426));
          }
        } else if (ZA && l.mode & 1) {
          var L = GC(s);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), VC(L, s, l, o, e), cw(Zo(c, l));
            break A;
          }
        }
        o = c = Zo(c, l), ve !== 4 && (ve = 2), vs === null ? vs = [o] : vs.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var m = GF(o, c, e);
              DC(o, m);
              break A;
            case 1:
              l = c;
              var w = o.type, y = o.stateNode;
              if (!(o.flags & 128) && (typeof w.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Mr === null || !Mr.has(y)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var I = VF(o, l, e);
                DC(o, I);
                break A;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      lU(t);
    } catch (H) {
      e = H, ge === t && t !== null && (ge = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function aU() {
  var A = qc.current;
  return qc.current = Zc, A === null ? Zc : A;
}
function Lw() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), Ue === null || !(Ri & 268435455) && !(Rf & 268435455) || Ir(Ue, be);
}
function tf(A, e) {
  var t = xA;
  xA |= 2;
  var n = aU();
  (Ue !== A || be !== e) && (Vn = null, xi(A, e));
  do
    try {
      oD();
      break;
    } catch (r) {
      oU(A, r);
    }
  while (!0);
  if (dw(), xA = t, qc.current = n, ge !== null) throw Error($(261));
  return Ue = null, be = 0, ve;
}
function oD() {
  for (; ge !== null; ) sU(ge);
}
function aD() {
  for (; ge !== null && !bT(); ) sU(ge);
}
function sU(A) {
  var e = cU(A.alternate, A, vt);
  A.memoizedProps = A.pendingProps, e === null ? lU(A) : ge = e, Ew.current = null;
}
function lU(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = AD(t, e), t !== null) {
        t.flags &= 32767, ge = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        ve = 6, ge = null;
        return;
      }
    } else if (t = qO(t, e, vt), t !== null) {
      ge = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      ge = e;
      return;
    }
    ge = e = A;
  } while (e !== null);
  ve === 0 && (ve = 5);
}
function pi(A, e, t) {
  var n = kA, r = Pt.transition;
  try {
    Pt.transition = null, kA = 1, sD(A, e, t, n);
  } finally {
    Pt.transition = r, kA = n;
  }
  return null;
}
function sD(A, e, t, n) {
  do
    Po();
  while (Sr !== null);
  if (xA & 6) throw Error($(327));
  t = A.finishedWork;
  var r = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error($(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (PT(A, o), A === Ue && (ge = Ue = null, be = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Iu || (Iu = !0, fU(kc, function() {
    return Po(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Pt.transition, Pt.transition = null;
    var s = kA;
    kA = 1;
    var l = xA;
    xA |= 4, Ew.current = null, tD(A, t), nU(t, A), xO(pp), Kc = !!Bp, pp = Bp = null, A.current = t, nD(t), _T(), xA = l, kA = s, Pt.transition = o;
  } else A.current = t;
  if (Iu && (Iu = !1, Sr = A, ef = r), o = A.pendingLanes, o === 0 && (Mr = null), DT(t.stateNode), st(A, ce()), e !== null) for (n = A.onRecoverableError, t = 0; t < e.length; t++) r = e[t], n(r.value, { componentStack: r.stack, digest: r.digest });
  if (Af) throw Af = !1, A = Dp, Dp = null, A;
  return ef & 1 && A.tag !== 0 && Po(), o = A.pendingLanes, o & 1 ? A === kp ? ms++ : (ms = 0, kp = A) : ms = 0, ti(), null;
}
function Po() {
  if (Sr !== null) {
    var A = Gy(ef), e = Pt.transition, t = kA;
    try {
      if (Pt.transition = null, kA = 16 > A ? 16 : A, Sr === null) var n = !1;
      else {
        if (A = Sr, Sr = null, ef = 0, xA & 6) throw Error($(331));
        var r = xA;
        for (xA |= 4, eA = A.current; eA !== null; ) {
          var o = eA, s = o.child;
          if (eA.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var f = l[c];
                for (eA = f; eA !== null; ) {
                  var g = eA;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ws(8, g, o);
                  }
                  var B = g.child;
                  if (B !== null) B.return = g, eA = B;
                  else for (; eA !== null; ) {
                    g = eA;
                    var p = g.sibling, v = g.return;
                    if (AU(g), g === f) {
                      eA = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = v, eA = p;
                      break;
                    }
                    eA = v;
                  }
                }
              }
              var F = o.alternate;
              if (F !== null) {
                var U = F.child;
                if (U !== null) {
                  F.child = null;
                  do {
                    var L = U.sibling;
                    U.sibling = null, U = L;
                  } while (U !== null);
                }
              }
              eA = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, eA = s;
          else A: for (; eA !== null; ) {
            if (o = eA, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                ws(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, eA = m;
              break A;
            }
            eA = o.return;
          }
        }
        var w = A.current;
        for (eA = w; eA !== null; ) {
          s = eA;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) y.return = s, eA = y;
          else A: for (s = w; eA !== null; ) {
            if (l = eA, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  kf(9, l);
              }
            } catch (H) {
              ie(l, l.return, H);
            }
            if (l === s) {
              eA = null;
              break A;
            }
            var I = l.sibling;
            if (I !== null) {
              I.return = l.return, eA = I;
              break A;
            }
            eA = l.return;
          }
        }
        if (xA = r, ti(), Un && typeof Un.onPostCommitFiberRoot == "function") try {
          Un.onPostCommitFiberRoot(Hf, A);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      kA = t, Pt.transition = e;
    }
  }
  return !1;
}
function nQ(A, e, t) {
  e = Zo(t, e), e = GF(A, e, 1), A = Kr(A, e, 1), e = Xe(), A !== null && (sl(A, 1, e), st(A, e));
}
function ie(A, e, t) {
  if (A.tag === 3) nQ(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      nQ(e, A, t);
      break;
    } else if (e.tag === 1) {
      var n = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Mr === null || !Mr.has(n))) {
        A = Zo(t, A), A = VF(e, A, 1), e = Kr(e, A, 1), A = Xe(), e !== null && (sl(e, 1, A), st(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function lD(A, e, t) {
  var n = A.pingCache;
  n !== null && n.delete(e), e = Xe(), A.pingedLanes |= A.suspendedLanes & t, Ue === A && (be & t) === t && (ve === 4 || ve === 3 && (be & 130023424) === be && 500 > ce() - xw ? xi(A, 0) : Iw |= t), st(A, e);
}
function uU(A, e) {
  e === 0 && (A.mode & 1 ? (e = hu, hu <<= 1, !(hu & 130023424) && (hu = 4194304)) : e = 1);
  var t = Xe();
  A = er(A, e), A !== null && (sl(A, e, t), st(A, t));
}
function uD(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), uU(A, t);
}
function cD(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var n = A.stateNode, r = A.memoizedState;
      r !== null && (t = r.retryLane);
      break;
    case 19:
      n = A.stateNode;
      break;
    default:
      throw Error($(314));
  }
  n !== null && n.delete(e), uU(A, t);
}
var cU;
cU = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || ot.current) nt = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return nt = !1, ZO(A, e, t);
    nt = !!(A.flags & 131072);
  }
  else nt = !1, ZA && e.flags & 1048576 && BF(e, Wc, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      wc(A, e), A = e.pendingProps;
      var r = zo(e, Ne.current);
      No(e, t), r = Cw(null, e, n, A, r, t);
      var o = Qw();
      return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, at(n) ? (o = !0, Vc(e)) : o = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, pw(e), r.updater = Df, e.stateNode = r, r._reactInternals = e, Up(e, n, A, t), e = xp(null, e, n, !0, o, t)) : (e.tag = 0, ZA && o && lw(e), We(null, e, r, t), e = e.child), e;
    case 16:
      n = e.elementType;
      A: {
        switch (wc(A, e), A = e.pendingProps, r = n._init, n = r(n._payload), e.type = n, r = e.tag = dD(n), A = nn(n, A), r) {
          case 0:
            e = Ip(null, e, n, A, t);
            break A;
          case 1:
            e = XC(null, e, n, A, t);
            break A;
          case 11:
            e = $C(null, e, n, A, t);
            break A;
          case 14:
            e = WC(null, e, n, nn(n.type, A), t);
            break A;
        }
        throw Error($(
          306,
          n,
          ""
        ));
      }
      return e;
    case 0:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : nn(n, r), Ip(A, e, n, r, t);
    case 1:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : nn(n, r), XC(A, e, n, r, t);
    case 3:
      A: {
        if (zF(e), A === null) throw Error($(387));
        n = e.pendingProps, o = e.memoizedState, r = o.element, CF(A, e), Yc(e, n, null, t);
        var s = e.memoizedState;
        if (n = s.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
          r = Zo(Error($(423)), e), e = zC(A, e, n, t, r);
          break A;
        } else if (n !== r) {
          r = Zo(Error($(424)), e), e = zC(A, e, n, t, r);
          break A;
        } else for (mt = Rr(e.stateNode.containerInfo.firstChild), Ct = e, ZA = !0, on = null, t = vF(e, null, n, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (Yo(), n === r) {
            e = tr(A, e, t);
            break A;
          }
          We(A, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return QF(e), A === null && Qp(e), n = e.type, r = e.pendingProps, o = A !== null ? A.memoizedProps : null, s = r.children, hp(n, r) ? s = null : o !== null && hp(n, o) && (e.flags |= 32), XF(A, e), We(A, e, s, t), e.child;
    case 6:
      return A === null && Qp(e), null;
    case 13:
      return YF(A, e, t);
    case 4:
      return hw(e, e.stateNode.containerInfo), n = e.pendingProps, A === null ? e.child = Jo(e, null, n, t) : We(A, e, n, t), e.child;
    case 11:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : nn(n, r), $C(A, e, n, r, t);
    case 7:
      return We(A, e, e.pendingProps, t), e.child;
    case 8:
      return We(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return We(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (n = e.type._context, r = e.pendingProps, o = e.memoizedProps, s = r.value, PA(Xc, n._currentValue), n._currentValue = s, o !== null) if (fn(o.value, s)) {
          if (o.children === r.children && !ot.current) {
            e = tr(A, e, t);
            break A;
          }
        } else for (o = e.child, o !== null && (o.return = e); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            s = o.child;
            for (var c = l.firstContext; c !== null; ) {
              if (c.context === n) {
                if (o.tag === 1) {
                  c = Jn(-1, t & -t), c.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? c.next = c : (c.next = g.next, g.next = c), f.pending = c;
                  }
                }
                o.lanes |= t, c = o.alternate, c !== null && (c.lanes |= t), yp(
                  o.return,
                  t,
                  e
                ), l.lanes |= t;
                break;
              }
              c = c.next;
            }
          } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error($(341));
            s.lanes |= t, l = s.alternate, l !== null && (l.lanes |= t), yp(s, t, e), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        We(A, e, r.children, t), e = e.child;
      }
      return e;
    case 9:
      return r = e.type, n = e.pendingProps.children, No(e, t), r = Gt(r), n = n(r), e.flags |= 1, We(A, e, n, t), e.child;
    case 14:
      return n = e.type, r = nn(n, e.pendingProps), r = nn(n.type, r), WC(A, e, n, r, t);
    case 15:
      return $F(A, e, e.type, e.pendingProps, t);
    case 17:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : nn(n, r), wc(A, e), e.tag = 1, at(n) ? (A = !0, Vc(e)) : A = !1, No(e, t), PF(e, n, r), Up(e, n, r, t), xp(null, e, n, !0, A, t);
    case 19:
      return JF(A, e, t);
    case 22:
      return WF(A, e, t);
  }
  throw Error($(156, e.tag));
};
function fU(A, e) {
  return Ky(A, e);
}
function fD(A, e, t, n) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Kt(A, e, t, n) {
  return new fD(A, e, t, n);
}
function bw(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function dD(A) {
  if (typeof A == "function") return bw(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === jh) return 11;
    if (A === Zh) return 14;
  }
  return 2;
}
function Pr(A, e) {
  var t = A.alternate;
  return t === null ? (t = Kt(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function Cc(A, e, t, n, r, o) {
  var s = 2;
  if (n = A, typeof A == "function") bw(A) && (s = 1);
  else if (typeof A == "string") s = 5;
  else A: switch (A) {
    case Co:
      return Hi(t.children, r, o, e);
    case Jh:
      s = 8, r |= 8;
      break;
    case YB:
      return A = Kt(12, t, e, r | 2), A.elementType = YB, A.lanes = o, A;
    case JB:
      return A = Kt(13, t, e, r), A.elementType = JB, A.lanes = o, A;
    case jB:
      return A = Kt(19, t, e, r), A.elementType = jB, A.lanes = o, A;
    case Qy:
      return Kf(t, r, o, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case my:
          s = 10;
          break A;
        case Cy:
          s = 9;
          break A;
        case jh:
          s = 11;
          break A;
        case Zh:
          s = 14;
          break A;
        case yr:
          s = 16, n = null;
          break A;
      }
      throw Error($(130, A == null ? A : typeof A, ""));
  }
  return e = Kt(s, t, e, r), e.elementType = A, e.type = n, e.lanes = o, e;
}
function Hi(A, e, t, n) {
  return A = Kt(7, A, n, e), A.lanes = t, A;
}
function Kf(A, e, t, n) {
  return A = Kt(22, A, n, e), A.elementType = Qy, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function cB(A, e, t) {
  return A = Kt(6, A, null, e), A.lanes = t, A;
}
function fB(A, e, t) {
  return e = Kt(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function gD(A, e, t, n, r) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wg(0), this.expirationTimes = Wg(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wg(0), this.identifierPrefix = n, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null;
}
function _w(A, e, t, n, r, o, s, l, c) {
  return A = new gD(A, e, t, l, c), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = Kt(3, null, null, e), A.current = o, o.stateNode = A, o.memoizedState = { element: n, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pw(o), A;
}
function BD(A, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mo, key: n == null ? null : "" + n, children: A, containerInfo: e, implementation: t };
}
function dU(A) {
  if (!A) return Wr;
  A = A._reactInternals;
  A: {
    if (Vi(A) !== A || A.tag !== 1) throw Error($(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (at(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error($(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (at(t)) return dF(A, t, e);
  }
  return e;
}
function gU(A, e, t, n, r, o, s, l, c) {
  return A = _w(t, n, !0, A, r, o, s, l, c), A.context = dU(null), t = A.current, n = Xe(), r = Nr(t), o = Jn(n, r), o.callback = e ?? null, Kr(t, o, r), A.current.lanes = r, sl(A, r, n), st(A, n), A;
}
function Mf(A, e, t, n) {
  var r = e.current, o = Xe(), s = Nr(r);
  return t = dU(t), e.context === null ? e.context = t : e.pendingContext = t, e = Jn(o, s), e.payload = { element: A }, n = n === void 0 ? null : n, n !== null && (e.callback = n), A = Kr(r, e, s), A !== null && (un(A, r, s, o), Bc(A, r, s)), s;
}
function nf(A) {
  if (A = A.current, !A.child) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function rQ(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Tw(A, e) {
  rQ(A, e), (A = A.alternate) && rQ(A, e);
}
function pD() {
  return null;
}
var BU = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function Ow(A) {
  this._internalRoot = A;
}
Nf.prototype.render = Ow.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null) throw Error($(409));
  Mf(A, e, null, null);
};
Nf.prototype.unmount = Ow.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    Ki(function() {
      Mf(null, A, null, null);
    }), e[Ar] = null;
  }
};
function Nf(A) {
  this._internalRoot = A;
}
Nf.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = Wy();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Er.length && e !== 0 && e < Er[t].priority; t++) ;
    Er.splice(t, 0, A), t === 0 && zy(A);
  }
};
function Dw(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function Pf(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function iQ() {
}
function hD(A, e, t, n, r) {
  if (r) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var f = nf(s);
        o.call(f);
      };
    }
    var s = gU(e, n, A, 0, null, !1, !1, "", iQ);
    return A._reactRootContainer = s, A[Ar] = s.current, Ks(A.nodeType === 8 ? A.parentNode : A), Ki(), s;
  }
  for (; r = A.lastChild; ) A.removeChild(r);
  if (typeof n == "function") {
    var l = n;
    n = function() {
      var f = nf(c);
      l.call(f);
    };
  }
  var c = _w(A, 0, !1, null, null, !1, !1, "", iQ);
  return A._reactRootContainer = c, A[Ar] = c.current, Ks(A.nodeType === 8 ? A.parentNode : A), Ki(function() {
    Mf(e, c, t, n);
  }), c;
}
function Gf(A, e, t, n, r) {
  var o = t._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var c = nf(s);
        l.call(c);
      };
    }
    Mf(e, s, A, r);
  } else s = hD(t, e, A, r, n);
  return nf(s);
}
Vy = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = As(e.pendingLanes);
        t !== 0 && (ew(e, t | 1), st(e, ce()), !(xA & 6) && (qo = ce() + 500, ti()));
      }
      break;
    case 13:
      Ki(function() {
        var n = er(A, 1);
        if (n !== null) {
          var r = Xe();
          un(n, A, 1, r);
        }
      }), Tw(A, 1);
  }
};
tw = function(A) {
  if (A.tag === 13) {
    var e = er(A, 134217728);
    if (e !== null) {
      var t = Xe();
      un(e, A, 134217728, t);
    }
    Tw(A, 134217728);
  }
};
$y = function(A) {
  if (A.tag === 13) {
    var e = Nr(A), t = er(A, e);
    if (t !== null) {
      var n = Xe();
      un(t, A, e, n);
    }
    Tw(A, e);
  }
};
Wy = function() {
  return kA;
};
Xy = function(A, e) {
  var t = kA;
  try {
    return kA = A, e();
  } finally {
    kA = t;
  }
};
ap = function(A, e, t) {
  switch (e) {
    case "input":
      if (Ap(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n !== A && n.form === A.form) {
            var r = _f(n);
            if (!r) throw Error($(90));
            Fy(n), Ap(n, r);
          }
        }
      }
      break;
    case "textarea":
      Ey(A, t);
      break;
    case "select":
      e = t.value, e != null && ko(A, !!t.multiple, e, !1);
  }
};
_y = Hw;
Ty = Ki;
var wD = { usingClientEntryPoint: !1, Events: [ul, Uo, _f, Ly, by, Hw] }, Wa = { findFiberByHostInstance: mi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vD = { bundleType: Wa.bundleType, version: Wa.version, rendererPackageName: Wa.rendererPackageName, rendererConfig: Wa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ar.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = ky(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: Wa.findFiberByHostInstance || pD, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xu.isDisabled && xu.supportsFiber) try {
    Hf = xu.inject(vD), Un = xu;
  } catch {
  }
}
Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wD;
Ft.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Dw(e)) throw Error($(200));
  return BD(A, e, null, t);
};
Ft.createRoot = function(A, e) {
  if (!Dw(A)) throw Error($(299));
  var t = !1, n = "", r = BU;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = _w(A, 1, !1, null, null, t, !1, n, r), A[Ar] = e.current, Ks(A.nodeType === 8 ? A.parentNode : A), new Ow(e);
};
Ft.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error($(188)) : (A = Object.keys(A).join(","), Error($(268, A)));
  return A = ky(e), A = A === null ? null : A.stateNode, A;
};
Ft.flushSync = function(A) {
  return Ki(A);
};
Ft.hydrate = function(A, e, t) {
  if (!Pf(e)) throw Error($(200));
  return Gf(null, A, e, !0, t);
};
Ft.hydrateRoot = function(A, e, t) {
  if (!Dw(A)) throw Error($(405));
  var n = t != null && t.hydratedSources || null, r = !1, o = "", s = BU;
  if (t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), e = gU(e, null, A, 1, t ?? null, r, !1, o, s), A[Ar] = e.current, Ks(A), n) for (A = 0; A < n.length; A++) t = n[A], r = t._getVersion, r = r(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(
    t,
    r
  );
  return new Nf(e);
};
Ft.render = function(A, e, t) {
  if (!Pf(e)) throw Error($(200));
  return Gf(null, A, e, !1, t);
};
Ft.unmountComponentAtNode = function(A) {
  if (!Pf(A)) throw Error($(40));
  return A._reactRootContainer ? (Ki(function() {
    Gf(null, null, A, !1, function() {
      A._reactRootContainer = null, A[Ar] = null;
    });
  }), !0) : !1;
};
Ft.unstable_batchedUpdates = Hw;
Ft.unstable_renderSubtreeIntoContainer = function(A, e, t, n) {
  if (!Pf(t)) throw Error($(200));
  if (A == null || A._reactInternals === void 0) throw Error($(38));
  return Gf(A, e, t, !1, n);
};
Ft.version = "18.3.1-next-f1338f8080-20240426";
function pU() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pU);
    } catch (A) {
      console.error(A);
    }
}
pU(), py.exports = Ft;
var Vf = py.exports;
const mD = /* @__PURE__ */ Ph(Vf);
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Mp = function(A, e) {
  return Mp = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }, Mp(A, e);
};
function gn(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mp(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Np = function() {
  return Np = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Np.apply(this, arguments);
};
function $e(A, e, t, n) {
  function r(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function l(g) {
      try {
        f(n.next(g));
      } catch (B) {
        s(B);
      }
    }
    function c(g) {
      try {
        f(n.throw(g));
      } catch (B) {
        s(B);
      }
    }
    function f(g) {
      g.done ? o(g.value) : r(g.value).then(l, c);
    }
    f((n = n.apply(A, [])).next());
  });
}
function Re(A, e) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, r, o, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(f) {
    return function(g) {
      return c([f, g]);
    };
  }
  function c(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, r && (o = f[0] & 2 ? r.return : f[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, f[1])).done) return o;
      switch (r = 0, o && (f = [f[0] & 2, o.value]), f[0]) {
        case 0:
        case 1:
          o = f;
          break;
        case 4:
          return t.label++, { value: f[1], done: !1 };
        case 5:
          t.label++, r = f[1], f = [0];
          continue;
        case 7:
          f = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            t = 0;
            continue;
          }
          if (f[0] === 3 && (!o || f[1] > o[0] && f[1] < o[3])) {
            t.label = f[1];
            break;
          }
          if (f[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = f;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(f);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      f = e.call(A, t);
    } catch (g) {
      f = [6, g], r = 0;
    } finally {
      n = o = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function Hu(A, e, t) {
  if (arguments.length === 2) for (var n = 0, r = e.length, o; n < r; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return A.concat(o || e);
}
var nr = (
  /** @class */
  function() {
    function A(e, t, n, r) {
      this.left = e, this.top = t, this.width = n, this.height = r;
    }
    return A.prototype.add = function(e, t, n, r) {
      return new A(this.left + e, this.top + t, this.width + n, this.height + r);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var n = Array.from(t).find(function(r) {
        return r.width !== 0;
      });
      return n ? new A(n.left + e.windowBounds.left, n.top + e.windowBounds.top, n.width, n.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), $f = function(A, e) {
  return nr.fromClientRect(A, e.getBoundingClientRect());
}, CD = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new nr(0, 0, n, r);
}, Wf = function(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var o = A.charCodeAt(t++);
      (o & 64512) === 56320 ? e.push(((r & 1023) << 10) + (o & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}, ue = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var n = [], r = -1, o = ""; ++r < t; ) {
    var s = A[r];
    s <= 65535 ? n.push(s) : (s -= 65536, n.push((s >> 10) + 55296, s % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return o;
}, oQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", QD = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Su = 0; Su < oQ.length; Su++)
  QD[oQ.charCodeAt(Su)] = Su;
var aQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Lu = 0; Lu < aQ.length; Lu++)
  ts[aQ.charCodeAt(Lu)] = Lu;
var yD = function(A) {
  var e = A.length * 0.75, t = A.length, n, r = 0, o, s, l, c;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var f = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), g = Array.isArray(f) ? f : new Uint8Array(f);
  for (n = 0; n < t; n += 4)
    o = ts[A.charCodeAt(n)], s = ts[A.charCodeAt(n + 1)], l = ts[A.charCodeAt(n + 2)], c = ts[A.charCodeAt(n + 3)], g[r++] = o << 2 | s >> 4, g[r++] = (s & 15) << 4 | l >> 2, g[r++] = (l & 3) << 6 | c & 63;
  return f;
}, FD = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 2)
    t.push(A[n + 1] << 8 | A[n]);
  return t;
}, UD = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 4)
    t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
  return t;
}, Si = 5, kw = 11, dB = 2, ED = kw - Si, hU = 65536 >> Si, ID = 1 << Si, gB = ID - 1, xD = 1024 >> Si, HD = hU + xD, SD = HD, LD = 32, bD = SD + LD, _D = 65536 >> kw, TD = 1 << ED, OD = TD - 1, sQ = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, DD = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, kD = function(A, e) {
  var t = yD(A), n = Array.isArray(t) ? UD(t) : new Uint32Array(t), r = Array.isArray(t) ? FD(t) : new Uint16Array(t), o = 24, s = sQ(r, o / 2, n[4] / 2), l = n[5] === 2 ? sQ(r, (o + n[4]) / 2) : DD(n, Math.ceil((o + n[4]) / 4));
  return new RD(n[0], n[1], n[2], n[3], s, l);
}, RD = (
  /** @class */
  function() {
    function A(e, t, n, r, o, s) {
      this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = o, this.data = s;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Si], t = (t << dB) + (e & gB), this.data[t];
        if (e <= 65535)
          return t = this.index[hU + (e - 55296 >> Si)], t = (t << dB) + (e & gB), this.data[t];
        if (e < this.highStart)
          return t = bD - _D + (e >> kw), t = this.index[t], t += e >> Si & OD, t = this.index[t], t = (t << dB) + (e & gB), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), lQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", KD = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var bu = 0; bu < lQ.length; bu++)
  KD[lQ.charCodeAt(bu)] = bu;
var MD = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", uQ = 50, ND = 1, wU = 2, vU = 3, PD = 4, GD = 5, cQ = 7, mU = 8, fQ = 9, Lr = 10, Pp = 11, dQ = 12, Gp = 13, VD = 14, ns = 15, Vp = 16, _u = 17, Xa = 18, $D = 19, gQ = 20, $p = 21, za = 22, BB = 23, lo = 24, wt = 25, rs = 26, is = 27, uo = 28, WD = 29, wi = 30, XD = 31, Tu = 32, Ou = 33, Wp = 34, Xp = 35, zp = 36, zs = 37, Yp = 38, Qc = 39, yc = 40, pB = 41, CU = 42, zD = 43, YD = [9001, 65288], QU = "!", UA = "×", Du = "÷", Jp = kD(MD), Pn = [wi, zp], jp = [ND, wU, vU, GD], yU = [Lr, mU], BQ = [is, rs], JD = jp.concat(yU), pQ = [Yp, Qc, yc, Wp, Xp], jD = [ns, Gp], ZD = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], n = [], r = [];
  return A.forEach(function(o, s) {
    var l = Jp.get(o);
    if (l > uQ ? (r.push(!0), l -= uQ) : r.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(o) !== -1)
      return n.push(s), t.push(Vp);
    if (l === PD || l === Pp) {
      if (s === 0)
        return n.push(s), t.push(wi);
      var c = t[s - 1];
      return JD.indexOf(c) === -1 ? (n.push(n[s - 1]), t.push(c)) : (n.push(s), t.push(wi));
    }
    if (n.push(s), l === XD)
      return t.push(e === "strict" ? $p : zs);
    if (l === CU || l === WD)
      return t.push(wi);
    if (l === zD)
      return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(zs) : t.push(wi);
    t.push(l);
  }), [n, t, r];
}, hB = function(A, e, t, n) {
  var r = n[t];
  if (Array.isArray(A) ? A.indexOf(r) !== -1 : A === r)
    for (var o = t; o <= n.length; ) {
      o++;
      var s = n[o];
      if (s === e)
        return !0;
      if (s !== Lr)
        break;
    }
  if (r === Lr)
    for (var o = t; o > 0; ) {
      o--;
      var l = n[o];
      if (Array.isArray(A) ? A.indexOf(l) !== -1 : A === l)
        for (var c = t; c <= n.length; ) {
          c++;
          var s = n[c];
          if (s === e)
            return !0;
          if (s !== Lr)
            break;
        }
      if (l !== Lr)
        break;
    }
  return !1;
}, hQ = function(A, e) {
  for (var t = A; t >= 0; ) {
    var n = e[t];
    if (n === Lr)
      t--;
    else
      return n;
  }
  return 0;
}, qD = function(A, e, t, n, r) {
  if (t[n] === 0)
    return UA;
  var o = n - 1;
  if (Array.isArray(r) && r[o] === !0)
    return UA;
  var s = o - 1, l = o + 1, c = e[o], f = s >= 0 ? e[s] : 0, g = e[l];
  if (c === wU && g === vU)
    return UA;
  if (jp.indexOf(c) !== -1)
    return QU;
  if (jp.indexOf(g) !== -1 || yU.indexOf(g) !== -1)
    return UA;
  if (hQ(o, e) === mU)
    return Du;
  if (Jp.get(A[o]) === Pp || (c === Tu || c === Ou) && Jp.get(A[l]) === Pp || c === cQ || g === cQ || c === fQ || [Lr, Gp, ns].indexOf(c) === -1 && g === fQ || [_u, Xa, $D, lo, uo].indexOf(g) !== -1 || hQ(o, e) === za || hB(BB, za, o, e) || hB([_u, Xa], $p, o, e) || hB(dQ, dQ, o, e))
    return UA;
  if (c === Lr)
    return Du;
  if (c === BB || g === BB)
    return UA;
  if (g === Vp || c === Vp)
    return Du;
  if ([Gp, ns, $p].indexOf(g) !== -1 || c === VD || f === zp && jD.indexOf(c) !== -1 || c === uo && g === zp || g === gQ || Pn.indexOf(g) !== -1 && c === wt || Pn.indexOf(c) !== -1 && g === wt || c === is && [zs, Tu, Ou].indexOf(g) !== -1 || [zs, Tu, Ou].indexOf(c) !== -1 && g === rs || Pn.indexOf(c) !== -1 && BQ.indexOf(g) !== -1 || BQ.indexOf(c) !== -1 && Pn.indexOf(g) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [is, rs].indexOf(c) !== -1 && (g === wt || [za, ns].indexOf(g) !== -1 && e[l + 1] === wt) || // ( OP | HY ) × NU
  [za, ns].indexOf(c) !== -1 && g === wt || // NU ×	(NU | SY | IS)
  c === wt && [wt, uo, lo].indexOf(g) !== -1)
    return UA;
  if ([wt, uo, lo, _u, Xa].indexOf(g) !== -1)
    for (var B = o; B >= 0; ) {
      var p = e[B];
      if (p === wt)
        return UA;
      if ([uo, lo].indexOf(p) !== -1)
        B--;
      else
        break;
    }
  if ([is, rs].indexOf(g) !== -1)
    for (var B = [_u, Xa].indexOf(c) !== -1 ? s : o; B >= 0; ) {
      var p = e[B];
      if (p === wt)
        return UA;
      if ([uo, lo].indexOf(p) !== -1)
        B--;
      else
        break;
    }
  if (Yp === c && [Yp, Qc, Wp, Xp].indexOf(g) !== -1 || [Qc, Wp].indexOf(c) !== -1 && [Qc, yc].indexOf(g) !== -1 || [yc, Xp].indexOf(c) !== -1 && g === yc || pQ.indexOf(c) !== -1 && [gQ, rs].indexOf(g) !== -1 || pQ.indexOf(g) !== -1 && c === is || Pn.indexOf(c) !== -1 && Pn.indexOf(g) !== -1 || c === lo && Pn.indexOf(g) !== -1 || Pn.concat(wt).indexOf(c) !== -1 && g === za && YD.indexOf(A[l]) === -1 || Pn.concat(wt).indexOf(g) !== -1 && c === Xa)
    return UA;
  if (c === pB && g === pB) {
    for (var v = t[o], F = 1; v > 0 && (v--, e[v] === pB); )
      F++;
    if (F % 2 !== 0)
      return UA;
  }
  return c === Tu && g === Ou ? UA : Du;
}, Ak = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = ZD(A, e.lineBreak), n = t[0], r = t[1], o = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (r = r.map(function(l) {
    return [wt, wi, CU].indexOf(l) !== -1 ? zs : l;
  }));
  var s = e.wordBreak === "keep-all" ? o.map(function(l, c) {
    return l && A[c] >= 19968 && A[c] <= 40959;
  }) : void 0;
  return [n, r, s];
}, ek = (
  /** @class */
  function() {
    function A(e, t, n, r) {
      this.codePoints = e, this.required = t === QU, this.start = n, this.end = r;
    }
    return A.prototype.slice = function() {
      return ue.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), tk = function(A, e) {
  var t = Wf(A), n = Ak(t, e), r = n[0], o = n[1], s = n[2], l = t.length, c = 0, f = 0;
  return {
    next: function() {
      if (f >= l)
        return { done: !0, value: null };
      for (var g = UA; f < l && (g = qD(t, o, r, ++f, s)) === UA; )
        ;
      if (g !== UA || f === l) {
        var B = new ek(t, g, c, f);
        return c = f, { value: B, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, nk = 1, rk = 2, fl = 4, wQ = 8, rf = 10, vQ = 47, Cs = 92, ik = 9, ok = 32, ku = 34, Ya = 61, ak = 35, sk = 36, lk = 37, Ru = 39, Ku = 40, Ja = 41, uk = 95, et = 45, ck = 33, fk = 60, dk = 62, gk = 64, Bk = 91, pk = 93, hk = 61, wk = 123, Mu = 63, vk = 125, mQ = 124, mk = 126, Ck = 128, CQ = 65533, wB = 42, yi = 43, Qk = 44, yk = 58, Fk = 59, Ys = 46, Uk = 0, Ek = 8, Ik = 11, xk = 14, Hk = 31, Sk = 127, vn = -1, FU = 48, UU = 97, EU = 101, Lk = 102, bk = 117, _k = 122, IU = 65, xU = 69, HU = 70, Tk = 85, Ok = 90, Ke = function(A) {
  return A >= FU && A <= 57;
}, Dk = function(A) {
  return A >= 55296 && A <= 57343;
}, co = function(A) {
  return Ke(A) || A >= IU && A <= HU || A >= UU && A <= Lk;
}, kk = function(A) {
  return A >= UU && A <= _k;
}, Rk = function(A) {
  return A >= IU && A <= Ok;
}, Kk = function(A) {
  return kk(A) || Rk(A);
}, Mk = function(A) {
  return A >= Ck;
}, Nu = function(A) {
  return A === rf || A === ik || A === ok;
}, of = function(A) {
  return Kk(A) || Mk(A) || A === uk;
}, QQ = function(A) {
  return of(A) || Ke(A) || A === et;
}, Nk = function(A) {
  return A >= Uk && A <= Ek || A === Ik || A >= xk && A <= Hk || A === Sk;
}, Ur = function(A, e) {
  return A !== Cs ? !1 : e !== rf;
}, Pu = function(A, e, t) {
  return A === et ? of(e) || Ur(e, t) : of(A) ? !0 : !!(A === Cs && Ur(A, e));
}, vB = function(A, e, t) {
  return A === yi || A === et ? Ke(e) ? !0 : e === Ys && Ke(t) : Ke(A === Ys ? e : A);
}, Pk = function(A) {
  var e = 0, t = 1;
  (A[e] === yi || A[e] === et) && (A[e] === et && (t = -1), e++);
  for (var n = []; Ke(A[e]); )
    n.push(A[e++]);
  var r = n.length ? parseInt(ue.apply(void 0, n), 10) : 0;
  A[e] === Ys && e++;
  for (var o = []; Ke(A[e]); )
    o.push(A[e++]);
  var s = o.length, l = s ? parseInt(ue.apply(void 0, o), 10) : 0;
  (A[e] === xU || A[e] === EU) && e++;
  var c = 1;
  (A[e] === yi || A[e] === et) && (A[e] === et && (c = -1), e++);
  for (var f = []; Ke(A[e]); )
    f.push(A[e++]);
  var g = f.length ? parseInt(ue.apply(void 0, f), 10) : 0;
  return t * (r + l * Math.pow(10, -s)) * Math.pow(10, c * g);
}, Gk = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Vk = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, $k = {
  type: 4
  /* COMMA_TOKEN */
}, Wk = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Xk = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, zk = {
  type: 21
  /* COLUMN_TOKEN */
}, Yk = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, Jk = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, jk = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Zk = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, qk = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Gu = {
  type: 23
  /* BAD_URL_TOKEN */
}, AR = {
  type: 1
  /* BAD_STRING_TOKEN */
}, eR = {
  type: 25
  /* CDO_TOKEN */
}, tR = {
  type: 24
  /* CDC_TOKEN */
}, nR = {
  type: 26
  /* COLON_TOKEN */
}, rR = {
  type: 27
  /* SEMICOLON_TOKEN */
}, iR = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, oR = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, aR = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Zp = {
  type: 32
  /* EOF_TOKEN */
}, SU = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Wf(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Zp; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case ku:
          return this.consumeStringToken(ku);
        case ak:
          var t = this.peekCodePoint(0), n = this.peekCodePoint(1), r = this.peekCodePoint(2);
          if (QQ(t) || Ur(n, r)) {
            var o = Pu(t, n, r) ? rk : nk, s = this.consumeName();
            return { type: 5, value: s, flags: o };
          }
          break;
        case sk:
          if (this.peekCodePoint(0) === Ya)
            return this.consumeCodePoint(), Wk;
          break;
        case Ru:
          return this.consumeStringToken(Ru);
        case Ku:
          return Gk;
        case Ja:
          return Vk;
        case wB:
          if (this.peekCodePoint(0) === Ya)
            return this.consumeCodePoint(), qk;
          break;
        case yi:
          if (vB(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Qk:
          return $k;
        case et:
          var l = e, c = this.peekCodePoint(0), f = this.peekCodePoint(1);
          if (vB(l, c, f))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Pu(l, c, f))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (c === et && f === dk)
            return this.consumeCodePoint(), this.consumeCodePoint(), tR;
          break;
        case Ys:
          if (vB(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case vQ:
          if (this.peekCodePoint(0) === wB)
            for (this.consumeCodePoint(); ; ) {
              var g = this.consumeCodePoint();
              if (g === wB && (g = this.consumeCodePoint(), g === vQ))
                return this.consumeToken();
              if (g === vn)
                return this.consumeToken();
            }
          break;
        case yk:
          return nR;
        case Fk:
          return rR;
        case fk:
          if (this.peekCodePoint(0) === ck && this.peekCodePoint(1) === et && this.peekCodePoint(2) === et)
            return this.consumeCodePoint(), this.consumeCodePoint(), eR;
          break;
        case gk:
          var B = this.peekCodePoint(0), p = this.peekCodePoint(1), v = this.peekCodePoint(2);
          if (Pu(B, p, v)) {
            var s = this.consumeName();
            return { type: 7, value: s };
          }
          break;
        case Bk:
          return iR;
        case Cs:
          if (Ur(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case pk:
          return oR;
        case hk:
          if (this.peekCodePoint(0) === Ya)
            return this.consumeCodePoint(), Xk;
          break;
        case wk:
          return jk;
        case vk:
          return Zk;
        case bk:
        case Tk:
          var F = this.peekCodePoint(0), U = this.peekCodePoint(1);
          return F === yi && (co(U) || U === Mu) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case mQ:
          if (this.peekCodePoint(0) === Ya)
            return this.consumeCodePoint(), Yk;
          if (this.peekCodePoint(0) === mQ)
            return this.consumeCodePoint(), zk;
          break;
        case mk:
          if (this.peekCodePoint(0) === Ya)
            return this.consumeCodePoint(), Jk;
          break;
        case vn:
          return Zp;
      }
      return Nu(e) ? (this.consumeWhiteSpace(), aR) : Ke(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : of(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: ue(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); co(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var n = !1; t === Mu && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), n = !0;
      if (n) {
        var r = parseInt(ue.apply(void 0, e.map(function(c) {
          return c === Mu ? FU : c;
        })), 16), o = parseInt(ue.apply(void 0, e.map(function(c) {
          return c === Mu ? HU : c;
        })), 16);
        return { type: 30, start: r, end: o };
      }
      var s = parseInt(ue.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === et && co(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var l = []; co(t) && l.length < 6; )
          l.push(t), t = this.consumeCodePoint();
        var o = parseInt(ue.apply(void 0, l), 16);
        return { type: 30, start: s, end: o };
      } else
        return { type: 30, start: s, end: s };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Ku ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ku ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === vn)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ru || t === ku) {
        var n = this.consumeStringToken(this.consumeCodePoint());
        return n.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === vn || this.peekCodePoint(0) === Ja) ? (this.consumeCodePoint(), { type: 22, value: n.value }) : (this.consumeBadUrlRemnants(), Gu);
      }
      for (; ; ) {
        var r = this.consumeCodePoint();
        if (r === vn || r === Ja)
          return { type: 22, value: ue.apply(void 0, e) };
        if (Nu(r))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === vn || this.peekCodePoint(0) === Ja ? (this.consumeCodePoint(), { type: 22, value: ue.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), Gu);
        if (r === ku || r === Ru || r === Ku || Nk(r))
          return this.consumeBadUrlRemnants(), Gu;
        if (r === Cs)
          if (Ur(r, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Gu;
        else
          e.push(r);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Nu(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Ja || e === vn)
          return;
        Ur(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, n = ""; e > 0; ) {
        var r = Math.min(t, e);
        n += ue.apply(void 0, this._value.splice(0, r)), e -= r;
      }
      return this._value.shift(), n;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", n = 0;
      do {
        var r = this._value[n];
        if (r === vn || r === void 0 || r === e)
          return t += this.consumeStringSlice(n), { type: 0, value: t };
        if (r === rf)
          return this._value.splice(0, n), AR;
        if (r === Cs) {
          var o = this._value[n + 1];
          o !== vn && o !== void 0 && (o === rf ? (t += this.consumeStringSlice(n), n = -1, this._value.shift()) : Ur(r, o) && (t += this.consumeStringSlice(n), t += ue(this.consumeEscapedCodePoint()), n = -1));
        }
        n++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = fl, n = this.peekCodePoint(0);
      for ((n === yi || n === et) && e.push(this.consumeCodePoint()); Ke(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      n = this.peekCodePoint(0);
      var r = this.peekCodePoint(1);
      if (n === Ys && Ke(r))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wQ; Ke(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      n = this.peekCodePoint(0), r = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((n === xU || n === EU) && ((r === yi || r === et) && Ke(o) || Ke(r)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = wQ; Ke(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [Pk(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], n = e[1], r = this.peekCodePoint(0), o = this.peekCodePoint(1), s = this.peekCodePoint(2);
      if (Pu(r, o, s)) {
        var l = this.consumeName();
        return { type: 15, number: t, flags: n, unit: l };
      }
      return r === lk ? (this.consumeCodePoint(), { type: 16, number: t, flags: n }) : { type: 17, number: t, flags: n };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (co(e)) {
        for (var t = ue(e); co(this.peekCodePoint(0)) && t.length < 6; )
          t += ue(this.consumeCodePoint());
        Nu(this.peekCodePoint(0)) && this.consumeCodePoint();
        var n = parseInt(t, 16);
        return n === 0 || Dk(n) || n > 1114111 ? CQ : n;
      }
      return e === vn ? CQ : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (QQ(t))
          e += ue(t);
        else if (Ur(t, this.peekCodePoint(0)))
          e += ue(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), LU = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new SU();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, n = this.consumeToken(); ; ) {
        if (n.type === 32 || lR(n, e))
          return t;
        this.reconsumeToken(n), t.values.push(this.consumeComponentValue()), n = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var n = this.consumeToken();
        if (n.type === 32 || n.type === 3)
          return t;
        this.reconsumeToken(n), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Zp : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), dl = function(A) {
  return A.type === 15;
}, fa = function(A) {
  return A.type === 17;
}, RA = function(A) {
  return A.type === 20;
}, sR = function(A) {
  return A.type === 0;
}, qp = function(A, e) {
  return RA(A) && A.value === e;
}, bU = function(A) {
  return A.type !== 31;
}, Aa = function(A) {
  return A.type !== 31 && A.type !== 4;
}, xn = function(A) {
  var e = [], t = [];
  return A.forEach(function(n) {
    if (n.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    n.type !== 31 && t.push(n);
  }), t.length && e.push(t), e;
}, lR = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, Xr = function(A) {
  return A.type === 17 || A.type === 15;
}, fe = function(A) {
  return A.type === 16 || Xr(A);
}, _U = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, Le = {
  type: 17,
  number: 0,
  flags: fl
}, Rw = {
  type: 16,
  number: 50,
  flags: fl
}, br = {
  type: 16,
  number: 100,
  flags: fl
}, os = function(A, e, t) {
  var n = A[0], r = A[1];
  return [NA(n, e), NA(typeof r < "u" ? r : n, t)];
}, NA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (dl(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, TU = "deg", OU = "grad", DU = "rad", kU = "turn", Xf = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case TU:
          return Math.PI * e.number / 180;
        case OU:
          return Math.PI / 200 * e.number;
        case DU:
          return e.number;
        case kU:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, RU = function(A) {
  return A.type === 15 && (A.unit === TU || A.unit === OU || A.unit === DU || A.unit === kU);
}, KU = function(A) {
  var e = A.filter(RA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [Le, Le];
    case "to top":
    case "bottom":
      return Mt(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [Le, br];
    case "to right":
    case "left":
      return Mt(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [br, br];
    case "to bottom":
    case "top":
      return Mt(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [br, Le];
    case "to left":
    case "right":
      return Mt(270);
  }
  return 0;
}, Mt = function(A) {
  return Math.PI * A / 180;
}, Gr = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = uR[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var n = e.value.substring(0, 1), r = e.value.substring(1, 2), o = e.value.substring(2, 3);
        return _r(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), 1);
      }
      if (e.value.length === 4) {
        var n = e.value.substring(0, 1), r = e.value.substring(1, 2), o = e.value.substring(2, 3), s = e.value.substring(3, 4);
        return _r(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16), parseInt(s + s, 16) / 255);
      }
      if (e.value.length === 6) {
        var n = e.value.substring(0, 2), r = e.value.substring(2, 4), o = e.value.substring(4, 6);
        return _r(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), 1);
      }
      if (e.value.length === 8) {
        var n = e.value.substring(0, 2), r = e.value.substring(2, 4), o = e.value.substring(4, 6), s = e.value.substring(6, 8);
        return _r(parseInt(n, 16), parseInt(r, 16), parseInt(o, 16), parseInt(s, 16) / 255);
      }
    }
    if (e.type === 20) {
      var l = jn[e.value.toUpperCase()];
      if (typeof l < "u")
        return l;
    }
    return jn.TRANSPARENT;
  }
}, Vr = function(A) {
  return (255 & A) === 0;
}, Qe = function(A) {
  var e = 255 & A, t = 255 & A >> 8, n = 255 & A >> 16, r = 255 & A >> 24;
  return e < 255 ? "rgba(" + r + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + n + "," + t + ")";
}, _r = function(A, e, t, n) {
  return (A << 24 | e << 16 | t << 8 | Math.round(n * 255) << 0) >>> 0;
}, yQ = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, FQ = function(A, e) {
  var t = e.filter(Aa);
  if (t.length === 3) {
    var n = t.map(yQ), r = n[0], o = n[1], s = n[2];
    return _r(r, o, s, 1);
  }
  if (t.length === 4) {
    var l = t.map(yQ), r = l[0], o = l[1], s = l[2], c = l[3];
    return _r(r, o, s, c);
  }
  return 0;
};
function mB(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var UQ = function(A, e) {
  var t = e.filter(Aa), n = t[0], r = t[1], o = t[2], s = t[3], l = (n.type === 17 ? Mt(n.number) : Xf.parse(A, n)) / (Math.PI * 2), c = fe(r) ? r.number / 100 : 0, f = fe(o) ? o.number / 100 : 0, g = typeof s < "u" && fe(s) ? NA(s, 1) : 1;
  if (c === 0)
    return _r(f * 255, f * 255, f * 255, 1);
  var B = f <= 0.5 ? f * (c + 1) : f + c - f * c, p = f * 2 - B, v = mB(p, B, l + 1 / 3), F = mB(p, B, l), U = mB(p, B, l - 1 / 3);
  return _r(v * 255, F * 255, U * 255, g);
}, uR = {
  hsl: UQ,
  hsla: UQ,
  rgb: FQ,
  rgba: FQ
}, Qs = function(A, e) {
  return Gr.parse(A, LU.create(e).parseComponentValue());
}, jn = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, cR = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (RA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, fR = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, zf = function(A, e) {
  var t = Gr.parse(A, e[0]), n = e[1];
  return n && fe(n) ? { color: t, stop: n } : { color: t, stop: null };
}, EQ = function(A, e) {
  var t = A[0], n = A[A.length - 1];
  t.stop === null && (t.stop = Le), n.stop === null && (n.stop = br);
  for (var r = [], o = 0, s = 0; s < A.length; s++) {
    var l = A[s].stop;
    if (l !== null) {
      var c = NA(l, e);
      c > o ? r.push(c) : r.push(o), o = c;
    } else
      r.push(null);
  }
  for (var f = null, s = 0; s < r.length; s++) {
    var g = r[s];
    if (g === null)
      f === null && (f = s);
    else if (f !== null) {
      for (var B = s - f, p = r[f - 1], v = (g - p) / (B + 1), F = 1; F <= B; F++)
        r[f + F - 1] = v * F;
      f = null;
    }
  }
  return A.map(function(U, L) {
    var m = U.color;
    return { color: m, stop: Math.max(Math.min(1, r[L] / e), 0) };
  });
}, dR = function(A, e, t) {
  var n = e / 2, r = t / 2, o = NA(A[0], e) - n, s = r - NA(A[1], t);
  return (Math.atan2(s, o) + Math.PI * 2) % (Math.PI * 2);
}, gR = function(A, e, t) {
  var n = typeof A == "number" ? A : dR(A, e, t), r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n)), o = e / 2, s = t / 2, l = r / 2, c = Math.sin(n - Math.PI / 2) * l, f = Math.cos(n - Math.PI / 2) * l;
  return [r, o - f, o + f, s - c, s + c];
}, en = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, IQ = function(A, e, t, n, r) {
  var o = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return o.reduce(function(s, l) {
    var c = l[0], f = l[1], g = en(t - c, n - f);
    return (r ? g < s.optimumDistance : g > s.optimumDistance) ? {
      optimumCorner: l,
      optimumDistance: g
    } : s;
  }, {
    optimumDistance: r ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, BR = function(A, e, t, n, r) {
  var o = 0, s = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? o = s = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - n)), s = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (A.shape === 0)
        o = s = Math.min(en(e, t), en(e, t - r), en(e - n, t), en(e - n, t - r));
      else if (A.shape === 1) {
        var l = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n)), c = IQ(n, r, e, t, !0), f = c[0], g = c[1];
        o = en(f - e, (g - t) / l), s = l * o;
      }
      break;
    case 1:
      A.shape === 0 ? o = s = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - n)), s = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (A.shape === 0)
        o = s = Math.max(en(e, t), en(e, t - r), en(e - n, t), en(e - n, t - r));
      else if (A.shape === 1) {
        var l = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n)), B = IQ(n, r, e, t, !1), f = B[0], g = B[1];
        o = en(f - e, (g - t) / l), s = l * o;
      }
      break;
  }
  return Array.isArray(A.size) && (o = NA(A.size[0], n), s = A.size.length === 2 ? NA(A.size[1], r) : o), [o, s];
}, pR = function(A, e) {
  var t = Mt(180), n = [];
  return xn(e).forEach(function(r, o) {
    if (o === 0) {
      var s = r[0];
      if (s.type === 20 && s.value === "to") {
        t = KU(r);
        return;
      } else if (RU(s)) {
        t = Xf.parse(A, s);
        return;
      }
    }
    var l = zf(A, r);
    n.push(l);
  }), {
    angle: t,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Vu = function(A, e) {
  var t = Mt(180), n = [];
  return xn(e).forEach(function(r, o) {
    if (o === 0) {
      var s = r[0];
      if (s.type === 20 && ["top", "left", "right", "bottom"].indexOf(s.value) !== -1) {
        t = KU(r);
        return;
      } else if (RU(s)) {
        t = (Xf.parse(A, s) + Mt(270)) % Mt(360);
        return;
      }
    }
    var l = zf(A, r);
    n.push(l);
  }), {
    angle: t,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, hR = function(A, e) {
  var t = Mt(180), n = [], r = 1, o = 0, s = 3, l = [];
  return xn(e).forEach(function(c, f) {
    var g = c[0];
    if (f === 0) {
      if (RA(g) && g.value === "linear") {
        r = 1;
        return;
      } else if (RA(g) && g.value === "radial") {
        r = 2;
        return;
      }
    }
    if (g.type === 18) {
      if (g.name === "from") {
        var B = Gr.parse(A, g.values[0]);
        n.push({ stop: Le, color: B });
      } else if (g.name === "to") {
        var B = Gr.parse(A, g.values[0]);
        n.push({ stop: br, color: B });
      } else if (g.name === "color-stop") {
        var p = g.values.filter(Aa);
        if (p.length === 2) {
          var B = Gr.parse(A, p[1]), v = p[0];
          fa(v) && n.push({
            stop: { type: 16, number: v.number * 100, flags: v.flags },
            color: B
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + Mt(180)) % Mt(360),
    stops: n,
    type: r
  } : { size: s, shape: o, stops: n, position: l, type: r };
}, MU = "closest-side", NU = "farthest-side", PU = "closest-corner", GU = "farthest-corner", VU = "circle", $U = "ellipse", WU = "cover", XU = "contain", wR = function(A, e) {
  var t = 0, n = 3, r = [], o = [];
  return xn(e).forEach(function(s, l) {
    var c = !0;
    if (l === 0) {
      var f = !1;
      c = s.reduce(function(B, p) {
        if (f)
          if (RA(p))
            switch (p.value) {
              case "center":
                return o.push(Rw), B;
              case "top":
              case "left":
                return o.push(Le), B;
              case "right":
              case "bottom":
                return o.push(br), B;
            }
          else (fe(p) || Xr(p)) && o.push(p);
        else if (RA(p))
          switch (p.value) {
            case VU:
              return t = 0, !1;
            case $U:
              return t = 1, !1;
            case "at":
              return f = !0, !1;
            case MU:
              return n = 0, !1;
            case WU:
            case NU:
              return n = 1, !1;
            case XU:
            case PU:
              return n = 2, !1;
            case GU:
              return n = 3, !1;
          }
        else if (Xr(p) || fe(p))
          return Array.isArray(n) || (n = []), n.push(p), !1;
        return B;
      }, c);
    }
    if (c) {
      var g = zf(A, s);
      r.push(g);
    }
  }), {
    size: n,
    shape: t,
    stops: r,
    position: o,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, $u = function(A, e) {
  var t = 0, n = 3, r = [], o = [];
  return xn(e).forEach(function(s, l) {
    var c = !0;
    if (l === 0 ? c = s.reduce(function(g, B) {
      if (RA(B))
        switch (B.value) {
          case "center":
            return o.push(Rw), !1;
          case "top":
          case "left":
            return o.push(Le), !1;
          case "right":
          case "bottom":
            return o.push(br), !1;
        }
      else if (fe(B) || Xr(B))
        return o.push(B), !1;
      return g;
    }, c) : l === 1 && (c = s.reduce(function(g, B) {
      if (RA(B))
        switch (B.value) {
          case VU:
            return t = 0, !1;
          case $U:
            return t = 1, !1;
          case XU:
          case MU:
            return n = 0, !1;
          case NU:
            return n = 1, !1;
          case PU:
            return n = 2, !1;
          case WU:
          case GU:
            return n = 3, !1;
        }
      else if (Xr(B) || fe(B))
        return Array.isArray(n) || (n = []), n.push(B), !1;
      return g;
    }, c)), c) {
      var f = zf(A, s);
      r.push(f);
    }
  }), {
    size: n,
    shape: t,
    stops: r,
    position: o,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, vR = function(A) {
  return A.type === 1;
}, mR = function(A) {
  return A.type === 2;
}, Kw = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var n = zU[e.name];
      if (typeof n > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return n(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function CR(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!zU[A.name]);
}
var zU = {
  "linear-gradient": pR,
  "-moz-linear-gradient": Vu,
  "-ms-linear-gradient": Vu,
  "-o-linear-gradient": Vu,
  "-webkit-linear-gradient": Vu,
  "radial-gradient": wR,
  "-moz-radial-gradient": $u,
  "-ms-radial-gradient": $u,
  "-o-radial-gradient": $u,
  "-webkit-radial-gradient": $u,
  "-webkit-gradient": hR
}, QR = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(n) {
      return Aa(n) && CR(n);
    }).map(function(n) {
      return Kw.parse(A, n);
    });
  }
}, yR = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (RA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, FR = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return xn(e).map(function(t) {
      return t.filter(fe);
    }).map(_U);
  }
}, UR = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return xn(e).map(function(t) {
      return t.filter(RA).map(function(n) {
        return n.value;
      }).join(" ");
    }).map(ER);
  }
}, ER = function(A) {
  switch (A) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
}, Go;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Go || (Go = {}));
var IR = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return xn(e).map(function(t) {
      return t.filter(xR);
    });
  }
}, xR = function(A) {
  return RA(A) || fe(A);
}, Yf = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, HR = Yf("top"), SR = Yf("right"), LR = Yf("bottom"), bR = Yf("left"), Jf = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return _U(t.filter(fe));
    }
  };
}, _R = Jf("top-left"), TR = Jf("top-right"), OR = Jf("bottom-right"), DR = Jf("bottom-left"), jf = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
      switch (t) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
}, kR = jf("top"), RR = jf("right"), KR = jf("bottom"), MR = jf("left"), Zf = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return dl(t) ? t.number : 0;
    }
  };
}, NR = Zf("top"), PR = Zf("right"), GR = Zf("bottom"), VR = Zf("left"), $R = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, WR = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, XR = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(RA).reduce(
      function(t, n) {
        return t | zR(n.value);
      },
      0
      /* NONE */
    );
  }
}, zR = function(A) {
  switch (A) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, YR = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, JR = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, af;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(af || (af = {}));
var jR = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return af.STRICT;
      case "normal":
      default:
        return af.NORMAL;
    }
  }
}, ZR = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, xQ = function(A, e) {
  return RA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : fe(A) ? NA(A, e) : e;
}, qR = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Kw.parse(A, e);
  }
}, AK = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, Ah = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, qf = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, eK = qf("top"), tK = qf("right"), nK = qf("bottom"), rK = qf("left"), iK = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(RA).map(function(t) {
      switch (t.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
}, oK = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, Ad = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, aK = Ad("top"), sK = Ad("right"), lK = Ad("bottom"), uK = Ad("left"), cK = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, fK = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, dK = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && qp(e[0], "none") ? [] : xn(e).map(function(t) {
      for (var n = {
        color: jn.TRANSPARENT,
        offsetX: Le,
        offsetY: Le,
        blur: Le
      }, r = 0, o = 0; o < t.length; o++) {
        var s = t[o];
        Xr(s) ? (r === 0 ? n.offsetX = s : r === 1 ? n.offsetY = s : n.blur = s, r++) : n.color = Gr.parse(A, s);
      }
      return n;
    });
  }
}, gK = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, BK = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = wK[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, pK = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, hK = function(A) {
  var e = A.filter(function(c) {
    return c.type === 17;
  }).map(function(c) {
    return c.number;
  }), t = e[0], n = e[1];
  e[2], e[3];
  var r = e[4], o = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var s = e[12], l = e[13];
  return e[14], e[15], e.length === 16 ? [t, n, r, o, s, l] : null;
}, wK = {
  matrix: pK,
  matrix3d: hK
}, HQ = {
  type: 16,
  number: 50,
  flags: fl
}, vK = [HQ, HQ], mK = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(fe);
    return t.length !== 2 ? vK : [t[0], t[1]];
  }
}, CK = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, ys;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(ys || (ys = {}));
var QK = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return ys.BREAK_ALL;
      case "keep-all":
        return ys.KEEP_ALL;
      case "normal":
      default:
        return ys.NORMAL;
    }
  }
}, yK = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (fa(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, YU = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, FK = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return fa(e) ? e.number : 1;
  }
}, UK = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, EK = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(RA).map(function(t) {
      switch (t.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, IK = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], n = [];
    return e.forEach(function(r) {
      switch (r.type) {
        case 20:
        case 0:
          t.push(r.value);
          break;
        case 17:
          t.push(r.number.toString());
          break;
        case 4:
          n.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && n.push(t.join(" ")), n.map(function(r) {
      return r.indexOf(" ") === -1 ? r : "'" + r + "'";
    });
  }
}, xK = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, HK = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (fa(e))
      return e.number;
    if (RA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, SK = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(RA).map(function(t) {
      return t.value;
    });
  }
}, LK = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, we = function(A, e) {
  return (A & e) !== 0;
}, bK = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, _K = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var n = [], r = e.filter(bU), o = 0; o < r.length; o++) {
      var s = r[o], l = r[o + 1];
      if (s.type === 20) {
        var c = l && fa(l) ? l.number : 1;
        n.push({ counter: s.value, increment: c });
      }
    }
    return n;
  }
}, TK = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], n = e.filter(bU), r = 0; r < n.length; r++) {
      var o = n[r], s = n[r + 1];
      if (RA(o) && o.value !== "none") {
        var l = s && fa(s) ? s.number : 0;
        t.push({ counter: o.value, reset: l });
      }
    }
    return t;
  }
}, OK = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(dl).map(function(t) {
      return YU.parse(A, t);
    });
  }
}, DK = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var n = [], r = e.filter(sR);
    if (r.length % 2 !== 0)
      return null;
    for (var o = 0; o < r.length; o += 2) {
      var s = r[o].value, l = r[o + 1].value;
      n.push({ open: s, close: l });
    }
    return n;
  }
}, SQ = function(A, e, t) {
  if (!A)
    return "";
  var n = A[Math.min(e, A.length - 1)];
  return n ? t ? n.open : n.close : "";
}, kK = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && qp(e[0], "none") ? [] : xn(e).map(function(t) {
      for (var n = {
        color: 255,
        offsetX: Le,
        offsetY: Le,
        blur: Le,
        spread: Le,
        inset: !1
      }, r = 0, o = 0; o < t.length; o++) {
        var s = t[o];
        qp(s, "inset") ? n.inset = !0 : Xr(s) ? (r === 0 ? n.offsetX = s : r === 1 ? n.offsetY = s : r === 2 ? n.blur = s : n.spread = s, r++) : n.color = Gr.parse(A, s);
      }
      return n;
    });
  }
}, RK = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], n = [];
    return e.filter(RA).forEach(function(r) {
      switch (r.value) {
        case "stroke":
          n.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          n.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          n.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(r) {
      n.indexOf(r) === -1 && n.push(r);
    }), n;
  }
}, KK = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, MK = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return dl(e) ? e.number : 0;
  }
}, NK = (
  /** @class */
  function() {
    function A(e, t) {
      var n, r;
      this.animationDuration = Z(e, OK, t.animationDuration), this.backgroundClip = Z(e, cR, t.backgroundClip), this.backgroundColor = Z(e, fR, t.backgroundColor), this.backgroundImage = Z(e, QR, t.backgroundImage), this.backgroundOrigin = Z(e, yR, t.backgroundOrigin), this.backgroundPosition = Z(e, FR, t.backgroundPosition), this.backgroundRepeat = Z(e, UR, t.backgroundRepeat), this.backgroundSize = Z(e, IR, t.backgroundSize), this.borderTopColor = Z(e, HR, t.borderTopColor), this.borderRightColor = Z(e, SR, t.borderRightColor), this.borderBottomColor = Z(e, LR, t.borderBottomColor), this.borderLeftColor = Z(e, bR, t.borderLeftColor), this.borderTopLeftRadius = Z(e, _R, t.borderTopLeftRadius), this.borderTopRightRadius = Z(e, TR, t.borderTopRightRadius), this.borderBottomRightRadius = Z(e, OR, t.borderBottomRightRadius), this.borderBottomLeftRadius = Z(e, DR, t.borderBottomLeftRadius), this.borderTopStyle = Z(e, kR, t.borderTopStyle), this.borderRightStyle = Z(e, RR, t.borderRightStyle), this.borderBottomStyle = Z(e, KR, t.borderBottomStyle), this.borderLeftStyle = Z(e, MR, t.borderLeftStyle), this.borderTopWidth = Z(e, NR, t.borderTopWidth), this.borderRightWidth = Z(e, PR, t.borderRightWidth), this.borderBottomWidth = Z(e, GR, t.borderBottomWidth), this.borderLeftWidth = Z(e, VR, t.borderLeftWidth), this.boxShadow = Z(e, kK, t.boxShadow), this.color = Z(e, $R, t.color), this.direction = Z(e, WR, t.direction), this.display = Z(e, XR, t.display), this.float = Z(e, YR, t.cssFloat), this.fontFamily = Z(e, IK, t.fontFamily), this.fontSize = Z(e, xK, t.fontSize), this.fontStyle = Z(e, LK, t.fontStyle), this.fontVariant = Z(e, SK, t.fontVariant), this.fontWeight = Z(e, HK, t.fontWeight), this.letterSpacing = Z(e, JR, t.letterSpacing), this.lineBreak = Z(e, jR, t.lineBreak), this.lineHeight = Z(e, ZR, t.lineHeight), this.listStyleImage = Z(e, qR, t.listStyleImage), this.listStylePosition = Z(e, AK, t.listStylePosition), this.listStyleType = Z(e, Ah, t.listStyleType), this.marginTop = Z(e, eK, t.marginTop), this.marginRight = Z(e, tK, t.marginRight), this.marginBottom = Z(e, nK, t.marginBottom), this.marginLeft = Z(e, rK, t.marginLeft), this.opacity = Z(e, FK, t.opacity);
      var o = Z(e, iK, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = Z(e, oK, t.overflowWrap), this.paddingTop = Z(e, aK, t.paddingTop), this.paddingRight = Z(e, sK, t.paddingRight), this.paddingBottom = Z(e, lK, t.paddingBottom), this.paddingLeft = Z(e, uK, t.paddingLeft), this.paintOrder = Z(e, RK, t.paintOrder), this.position = Z(e, fK, t.position), this.textAlign = Z(e, cK, t.textAlign), this.textDecorationColor = Z(e, UK, (n = t.textDecorationColor) !== null && n !== void 0 ? n : t.color), this.textDecorationLine = Z(e, EK, (r = t.textDecorationLine) !== null && r !== void 0 ? r : t.textDecoration), this.textShadow = Z(e, dK, t.textShadow), this.textTransform = Z(e, gK, t.textTransform), this.transform = Z(e, BK, t.transform), this.transformOrigin = Z(e, mK, t.transformOrigin), this.visibility = Z(e, CK, t.visibility), this.webkitTextStrokeColor = Z(e, KK, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Z(e, MK, t.webkitTextStrokeWidth), this.wordBreak = Z(e, QK, t.wordBreak), this.zIndex = Z(e, yK, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Vr(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return we(
        this.display,
        4
        /* INLINE */
      ) || we(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || we(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || we(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || we(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || we(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), PK = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = Z(e, bK, t.content), this.quotes = Z(e, DK, t.quotes);
    }
    return A;
  }()
), LQ = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = Z(e, _K, t.counterIncrement), this.counterReset = Z(e, TK, t.counterReset);
    }
    return A;
  }()
), Z = function(A, e, t) {
  var n = new SU(), r = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  n.write(r);
  var o = new LU(n.read());
  switch (e.type) {
    case 2:
      var s = o.parseComponentValue();
      return e.parse(A, RA(s) ? s.value : e.initialValue);
    case 0:
      return e.parse(A, o.parseComponentValue());
    case 1:
      return e.parse(A, o.parseComponentValues());
    case 4:
      return o.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Xf.parse(A, o.parseComponentValue());
        case "color":
          return Gr.parse(A, o.parseComponentValue());
        case "image":
          return Kw.parse(A, o.parseComponentValue());
        case "length":
          var l = o.parseComponentValue();
          return Xr(l) ? l : Le;
        case "length-percentage":
          var c = o.parseComponentValue();
          return fe(c) ? c : Le;
        case "time":
          return YU.parse(A, o.parseComponentValue());
      }
      break;
  }
}, GK = "data-html2canvas-debug", VK = function(A) {
  var e = A.getAttribute(GK);
  switch (e) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, eh = function(A, e) {
  var t = VK(A);
  return t === 1 || e === t;
}, Hn = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, eh(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new NK(e, window.getComputedStyle(t, null)), rh(t) && (this.styles.animationDuration.some(function(n) {
        return n > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = $f(this.context, t), eh(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), $K = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", bQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", as = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Wu = 0; Wu < bQ.length; Wu++)
  as[bQ.charCodeAt(Wu)] = Wu;
var WK = function(A) {
  var e = A.length * 0.75, t = A.length, n, r = 0, o, s, l, c;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var f = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), g = Array.isArray(f) ? f : new Uint8Array(f);
  for (n = 0; n < t; n += 4)
    o = as[A.charCodeAt(n)], s = as[A.charCodeAt(n + 1)], l = as[A.charCodeAt(n + 2)], c = as[A.charCodeAt(n + 3)], g[r++] = o << 2 | s >> 4, g[r++] = (s & 15) << 4 | l >> 2, g[r++] = (l & 3) << 6 | c & 63;
  return f;
}, XK = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 2)
    t.push(A[n + 1] << 8 | A[n]);
  return t;
}, zK = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 4)
    t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
  return t;
}, Li = 5, Mw = 11, CB = 2, YK = Mw - Li, JU = 65536 >> Li, JK = 1 << Li, QB = JK - 1, jK = 1024 >> Li, ZK = JU + jK, qK = ZK, AM = 32, eM = qK + AM, tM = 65536 >> Mw, nM = 1 << YK, rM = nM - 1, _Q = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, iM = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, oM = function(A, e) {
  var t = WK(A), n = Array.isArray(t) ? zK(t) : new Uint32Array(t), r = Array.isArray(t) ? XK(t) : new Uint16Array(t), o = 24, s = _Q(r, o / 2, n[4] / 2), l = n[5] === 2 ? _Q(r, (o + n[4]) / 2) : iM(n, Math.ceil((o + n[4]) / 4));
  return new aM(n[0], n[1], n[2], n[3], s, l);
}, aM = (
  /** @class */
  function() {
    function A(e, t, n, r, o, s) {
      this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = o, this.data = s;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Li], t = (t << CB) + (e & QB), this.data[t];
        if (e <= 65535)
          return t = this.index[JU + (e - 55296 >> Li)], t = (t << CB) + (e & QB), this.data[t];
        if (e < this.highStart)
          return t = eM - tM + (e >> Mw), t = this.index[t], t += e >> Li & rM, t = this.index[t], t = (t << CB) + (e & QB), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), TQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sM = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xu = 0; Xu < TQ.length; Xu++)
  sM[TQ.charCodeAt(Xu)] = Xu;
var lM = 1, yB = 2, FB = 3, OQ = 4, DQ = 5, uM = 7, kQ = 8, UB = 9, EB = 10, RQ = 11, KQ = 12, MQ = 13, NQ = 14, IB = 15, cM = function(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var o = A.charCodeAt(t++);
      (o & 64512) === 56320 ? e.push(((r & 1023) << 10) + (o & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}, fM = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var n = [], r = -1, o = ""; ++r < t; ) {
    var s = A[r];
    s <= 65535 ? n.push(s) : (s -= 65536, n.push((s >> 10) + 55296, s % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (o += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return o;
}, dM = oM($K), Ot = "×", xB = "÷", gM = function(A) {
  return dM.get(A);
}, BM = function(A, e, t) {
  var n = t - 2, r = e[n], o = e[t - 1], s = e[t];
  if (o === yB && s === FB)
    return Ot;
  if (o === yB || o === FB || o === OQ || s === yB || s === FB || s === OQ)
    return xB;
  if (o === kQ && [kQ, UB, RQ, KQ].indexOf(s) !== -1 || (o === RQ || o === UB) && (s === UB || s === EB) || (o === KQ || o === EB) && s === EB || s === MQ || s === DQ || s === uM || o === lM)
    return Ot;
  if (o === MQ && s === NQ) {
    for (; r === DQ; )
      r = e[--n];
    if (r === NQ)
      return Ot;
  }
  if (o === IB && s === IB) {
    for (var l = 0; r === IB; )
      l++, r = e[--n];
    if (l % 2 === 0)
      return Ot;
  }
  return xB;
}, pM = function(A) {
  var e = cM(A), t = e.length, n = 0, r = 0, o = e.map(gM);
  return {
    next: function() {
      if (n >= t)
        return { done: !0, value: null };
      for (var s = Ot; n < t && (s = BM(e, o, ++n)) === Ot; )
        ;
      if (s !== Ot || n === t) {
        var l = fM.apply(null, e.slice(r, n));
        return r = n, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, hM = function(A) {
  for (var e = pM(A), t = [], n; !(n = e.next()).done; )
    n.value && t.push(n.value.slice());
  return t;
}, wM = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var n = A.createElement("boundtest");
      n.style.height = e + "px", n.style.display = "block", A.body.appendChild(n), t.selectNode(n);
      var r = t.getBoundingClientRect(), o = Math.round(r.height);
      if (A.body.removeChild(n), o === e)
        return !0;
    }
  }
  return !1;
}, vM = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var n = e.firstChild, r = Wf(n.data).map(function(c) {
    return ue(c);
  }), o = 0, s = {}, l = r.every(function(c, f) {
    t.setStart(n, o), t.setEnd(n, o + c.length);
    var g = t.getBoundingClientRect();
    o += c.length;
    var B = g.x > s.x || g.y > s.y;
    return s = g, f === 0 ? !0 : B;
  });
  return A.body.removeChild(e), l;
}, mM = function() {
  return typeof new Image().crossOrigin < "u";
}, CM = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, QM = function(A) {
  var e = new Image(), t = A.createElement("canvas"), n = t.getContext("2d");
  if (!n)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    n.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, PQ = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, yM = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var n = e.getContext("2d");
  if (!n)
    return Promise.reject(!1);
  n.fillStyle = "rgb(0, 255, 0)", n.fillRect(0, 0, t, t);
  var r = new Image(), o = e.toDataURL();
  r.src = o;
  var s = th(t, t, 0, 0, r);
  return n.fillStyle = "red", n.fillRect(0, 0, t, t), GQ(s).then(function(l) {
    n.drawImage(l, 0, 0);
    var c = n.getImageData(0, 0, t, t).data;
    n.fillStyle = "red", n.fillRect(0, 0, t, t);
    var f = A.createElement("div");
    return f.style.backgroundImage = "url(" + o + ")", f.style.height = t + "px", PQ(c) ? GQ(th(t, t, 0, 0, f)) : Promise.reject(!1);
  }).then(function(l) {
    return n.drawImage(l, 0, 0), PQ(n.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, th = function(A, e, t, n, r) {
  var o = "http://www.w3.org/2000/svg", s = document.createElementNS(o, "svg"), l = document.createElementNS(o, "foreignObject");
  return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), l.setAttributeNS(null, "width", "100%"), l.setAttributeNS(null, "height", "100%"), l.setAttributeNS(null, "x", t.toString()), l.setAttributeNS(null, "y", n.toString()), l.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(l), l.appendChild(r), s;
}, GQ = function(A) {
  return new Promise(function(e, t) {
    var n = new Image();
    n.onload = function() {
      return e(n);
    }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, Se = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = wM(document);
    return Object.defineProperty(Se, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = Se.SUPPORT_RANGE_BOUNDS && vM(document);
    return Object.defineProperty(Se, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = QM(document);
    return Object.defineProperty(Se, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? yM(document) : Promise.resolve(!1);
    return Object.defineProperty(Se, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = mM();
    return Object.defineProperty(Se, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = CM();
    return Object.defineProperty(Se, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(Se, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(Se, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, Fs = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), FM = function(A, e, t, n) {
  var r = IM(e, t), o = [], s = 0;
  return r.forEach(function(l) {
    if (t.textDecorationLine.length || l.trim().length > 0)
      if (Se.SUPPORT_RANGE_BOUNDS) {
        var c = VQ(n, s, l.length).getClientRects();
        if (c.length > 1) {
          var f = Nw(l), g = 0;
          f.forEach(function(p) {
            o.push(new Fs(p, nr.fromDOMRectList(A, VQ(n, g + s, p.length).getClientRects()))), g += p.length;
          });
        } else
          o.push(new Fs(l, nr.fromDOMRectList(A, c)));
      } else {
        var B = n.splitText(l.length);
        o.push(new Fs(l, UM(A, n))), n = B;
      }
    else Se.SUPPORT_RANGE_BOUNDS || (n = n.splitText(l.length));
    s += l.length;
  }), o;
}, UM = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var n = t.createElement("html2canvaswrapper");
    n.appendChild(e.cloneNode(!0));
    var r = e.parentNode;
    if (r) {
      r.replaceChild(n, e);
      var o = $f(A, n);
      return n.firstChild && r.replaceChild(n.firstChild, n), o;
    }
  }
  return nr.EMPTY;
}, VQ = function(A, e, t) {
  var n = A.ownerDocument;
  if (!n)
    throw new Error("Node has no owner document");
  var r = n.createRange();
  return r.setStart(A, e), r.setEnd(A, e + t), r;
}, Nw = function(A) {
  if (Se.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return hM(A);
}, EM = function(A, e) {
  if (Se.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(n) {
      return n.segment;
    });
  }
  return HM(A, e);
}, IM = function(A, e) {
  return e.letterSpacing !== 0 ? Nw(A) : EM(A, e);
}, xM = [32, 160, 4961, 65792, 65793, 4153, 4241], HM = function(A, e) {
  for (var t = tk(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), n = [], r, o = function() {
    if (r.value) {
      var s = r.value.slice(), l = Wf(s), c = "";
      l.forEach(function(f) {
        xM.indexOf(f) === -1 ? c += ue(f) : (c.length && n.push(c), n.push(ue(f)), c = "");
      }), c.length && n.push(c);
    }
  }; !(r = t.next()).done; )
    o();
  return n;
}, SM = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, n) {
      this.text = LM(t.data, n.textTransform), this.textBounds = FM(e, this.text, n, t);
    }
    return A;
  }()
), LM = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(bM, _M);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, bM = /(^|\s|:|-|\(|\))([a-z])/g, _M = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, jU = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.src = n.currentSrc || n.src, r.intrinsicWidth = n.naturalWidth, r.intrinsicHeight = n.naturalHeight, r.context.cache.addImage(r.src), r;
    }
    return e;
  }(Hn)
), ZU = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.canvas = n, r.intrinsicWidth = n.width, r.intrinsicHeight = n.height, r;
    }
    return e;
  }(Hn)
), qU = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this, o = new XMLSerializer(), s = $f(t, n);
      return n.setAttribute("width", s.width + "px"), n.setAttribute("height", s.height + "px"), r.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(n)), r.intrinsicWidth = n.width.baseVal.value, r.intrinsicHeight = n.height.baseVal.value, r.context.cache.addImage(r.svg), r;
    }
    return e;
  }(Hn)
), AE = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.value = n.value, r;
    }
    return e;
  }(Hn)
), nh = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.start = n.start, r.reversed = typeof n.reversed == "boolean" && n.reversed === !0, r;
    }
    return e;
  }(Hn)
), TM = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], OM = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], DM = function(A) {
  return A.width > A.height ? new nr(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new nr(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, kM = function(A) {
  var e = A.type === RM ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, sf = "checkbox", lf = "radio", RM = "password", $Q = 707406591, Pw = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      switch (r.type = n.type.toLowerCase(), r.checked = n.checked, r.value = kM(n), (r.type === sf || r.type === lf) && (r.styles.backgroundColor = 3739148031, r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575, r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1, r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1, r.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], r.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], r.bounds = DM(r.bounds)), r.type) {
        case sf:
          r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = TM;
          break;
        case lf:
          r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = OM;
          break;
      }
      return r;
    }
    return e;
  }(Hn)
), eE = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this, o = n.options[n.selectedIndex || 0];
      return r.value = o && o.text || "", r;
    }
    return e;
  }(Hn)
), tE = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.value = n.value, r;
    }
    return e;
  }(Hn)
), nE = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      r.src = n.src, r.width = parseInt(n.width, 10) || 0, r.height = parseInt(n.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
      try {
        if (n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement) {
          r.tree = iE(t, n.contentWindow.document.documentElement);
          var o = n.contentWindow.document.documentElement ? Qs(t, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : jn.TRANSPARENT, s = n.contentWindow.document.body ? Qs(t, getComputedStyle(n.contentWindow.document.body).backgroundColor) : jn.TRANSPARENT;
          r.backgroundColor = Vr(o) ? Vr(s) ? r.styles.backgroundColor : s : o;
        }
      } catch {
      }
      return r;
    }
    return e;
  }(Hn)
), KM = ["OL", "UL", "MENU"], Fc = function(A, e, t, n) {
  for (var r = e.firstChild, o = void 0; r; r = o)
    if (o = r.nextSibling, oE(r) && r.data.trim().length > 0)
      t.textNodes.push(new SM(A, r, t.styles));
    else if (bo(r))
      if (uE(r) && r.assignedNodes)
        r.assignedNodes().forEach(function(l) {
          return Fc(A, l, t, n);
        });
      else {
        var s = rE(A, r);
        s.styles.isVisible() && (MM(r, s, n) ? s.flags |= 4 : NM(s.styles) && (s.flags |= 2), KM.indexOf(r.tagName) !== -1 && (s.flags |= 8), t.elements.push(s), r.slot, r.shadowRoot ? Fc(A, r.shadowRoot, s, n) : !uf(r) && !aE(r) && !cf(r) && Fc(A, r, s, n));
      }
}, rE = function(A, e) {
  return ih(e) ? new jU(A, e) : sE(e) ? new ZU(A, e) : aE(e) ? new qU(A, e) : PM(e) ? new AE(A, e) : GM(e) ? new nh(A, e) : VM(e) ? new Pw(A, e) : cf(e) ? new eE(A, e) : uf(e) ? new tE(A, e) : lE(e) ? new nE(A, e) : new Hn(A, e);
}, iE = function(A, e) {
  var t = rE(A, e);
  return t.flags |= 4, Fc(A, e, t, t), t;
}, MM = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Gw(A) && t.styles.isTransparent();
}, NM = function(A) {
  return A.isPositioned() || A.isFloating();
}, oE = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, bo = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, rh = function(A) {
  return bo(A) && typeof A.style < "u" && !Uc(A);
}, Uc = function(A) {
  return typeof A.className == "object";
}, PM = function(A) {
  return A.tagName === "LI";
}, GM = function(A) {
  return A.tagName === "OL";
}, VM = function(A) {
  return A.tagName === "INPUT";
}, $M = function(A) {
  return A.tagName === "HTML";
}, aE = function(A) {
  return A.tagName === "svg";
}, Gw = function(A) {
  return A.tagName === "BODY";
}, sE = function(A) {
  return A.tagName === "CANVAS";
}, WQ = function(A) {
  return A.tagName === "VIDEO";
}, ih = function(A) {
  return A.tagName === "IMG";
}, lE = function(A) {
  return A.tagName === "IFRAME";
}, XQ = function(A) {
  return A.tagName === "STYLE";
}, WM = function(A) {
  return A.tagName === "SCRIPT";
}, uf = function(A) {
  return A.tagName === "TEXTAREA";
}, cf = function(A) {
  return A.tagName === "SELECT";
}, uE = function(A) {
  return A.tagName === "SLOT";
}, zQ = function(A) {
  return A.tagName.indexOf("-") > 0;
}, XM = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(n) {
        return t.counters[n].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, n = e.counterIncrement, r = e.counterReset, o = !0;
      n !== null && n.forEach(function(l) {
        var c = t.counters[l.counter];
        c && l.increment !== 0 && (o = !1, c.length || c.push(1), c[Math.max(0, c.length - 1)] += l.increment);
      });
      var s = [];
      return o && r.forEach(function(l) {
        var c = t.counters[l.counter];
        s.push(l.counter), c || (c = t.counters[l.counter] = []), c.push(l.reset);
      }), s;
    }, A;
  }()
), YQ = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, JQ = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, zM = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, YM = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, fo = function(A, e, t, n, r, o) {
  return A < e || A > t ? Js(A, r, o.length > 0) : n.integers.reduce(function(s, l, c) {
    for (; A >= l; )
      A -= l, s += n.values[c];
    return s;
  }, "") + o;
}, cE = function(A, e, t, n) {
  var r = "";
  do
    t || A--, r = n(A) + r, A /= e;
  while (A * e >= e);
  return r;
}, le = function(A, e, t, n, r) {
  var o = t - e + 1;
  return (A < 0 ? "-" : "") + (cE(Math.abs(A), o, n, function(s) {
    return ue(Math.floor(s % o) + e);
  }) + r);
}, gi = function(A, e, t) {
  t === void 0 && (t = ". ");
  var n = e.length;
  return cE(Math.abs(A), n, !1, function(r) {
    return e[Math.floor(r % n)];
  }) + t;
}, wo = 1, mr = 2, Cr = 4, ss = 8, Gn = function(A, e, t, n, r, o) {
  if (A < -9999 || A > 9999)
    return Js(A, 4, r.length > 0);
  var s = Math.abs(A), l = r;
  if (s === 0)
    return e[0] + l;
  for (var c = 0; s > 0 && c <= 4; c++) {
    var f = s % 10;
    f === 0 && we(o, wo) && l !== "" ? l = e[f] + l : f > 1 || f === 1 && c === 0 || f === 1 && c === 1 && we(o, mr) || f === 1 && c === 1 && we(o, Cr) && A > 100 || f === 1 && c > 1 && we(o, ss) ? l = e[f] + (c > 0 ? t[c - 1] : "") + l : f === 1 && c > 0 && (l = t[c - 1] + l), s = Math.floor(s / 10);
  }
  return (A < 0 ? n : "") + l;
}, jQ = "十百千萬", ZQ = "拾佰仟萬", qQ = "マイナス", HB = "마이너스", Js = function(A, e, t) {
  var n = t ? ". " : "", r = t ? "、" : "", o = t ? ", " : "", s = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var l = le(A, 48, 57, !0, n);
      return l.length < 4 ? "0" + l : l;
    case 4:
      return gi(A, "〇一二三四五六七八九", r);
    case 6:
      return fo(A, 1, 3999, YQ, 3, n).toLowerCase();
    case 7:
      return fo(A, 1, 3999, YQ, 3, n);
    case 8:
      return le(A, 945, 969, !1, n);
    case 9:
      return le(A, 97, 122, !1, n);
    case 10:
      return le(A, 65, 90, !1, n);
    case 11:
      return le(A, 1632, 1641, !0, n);
    case 12:
    case 49:
      return fo(A, 1, 9999, JQ, 3, n);
    case 35:
      return fo(A, 1, 9999, JQ, 3, n).toLowerCase();
    case 13:
      return le(A, 2534, 2543, !0, n);
    case 14:
    case 30:
      return le(A, 6112, 6121, !0, n);
    case 15:
      return gi(A, "子丑寅卯辰巳午未申酉戌亥", r);
    case 16:
      return gi(A, "甲乙丙丁戊己庚辛壬癸", r);
    case 17:
    case 48:
      return Gn(A, "零一二三四五六七八九", jQ, "負", r, mr | Cr | ss);
    case 47:
      return Gn(A, "零壹貳參肆伍陸柒捌玖", ZQ, "負", r, wo | mr | Cr | ss);
    case 42:
      return Gn(A, "零一二三四五六七八九", jQ, "负", r, mr | Cr | ss);
    case 41:
      return Gn(A, "零壹贰叁肆伍陆柒捌玖", ZQ, "负", r, wo | mr | Cr | ss);
    case 26:
      return Gn(A, "〇一二三四五六七八九", "十百千万", qQ, r, 0);
    case 25:
      return Gn(A, "零壱弐参四伍六七八九", "拾百千万", qQ, r, wo | mr | Cr);
    case 31:
      return Gn(A, "영일이삼사오육칠팔구", "십백천만", HB, o, wo | mr | Cr);
    case 33:
      return Gn(A, "零一二三四五六七八九", "十百千萬", HB, o, 0);
    case 32:
      return Gn(A, "零壹貳參四五六七八九", "拾百千", HB, o, wo | mr | Cr);
    case 18:
      return le(A, 2406, 2415, !0, n);
    case 20:
      return fo(A, 1, 19999, YM, 3, n);
    case 21:
      return le(A, 2790, 2799, !0, n);
    case 22:
      return le(A, 2662, 2671, !0, n);
    case 22:
      return fo(A, 1, 10999, zM, 3, n);
    case 23:
      return gi(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return gi(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return le(A, 3302, 3311, !0, n);
    case 28:
      return gi(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
    case 29:
      return gi(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
    case 34:
      return le(A, 3792, 3801, !0, n);
    case 37:
      return le(A, 6160, 6169, !0, n);
    case 38:
      return le(A, 4160, 4169, !0, n);
    case 39:
      return le(A, 2918, 2927, !0, n);
    case 40:
      return le(A, 1776, 1785, !0, n);
    case 43:
      return le(A, 3046, 3055, !0, n);
    case 44:
      return le(A, 3174, 3183, !0, n);
    case 45:
      return le(A, 3664, 3673, !0, n);
    case 46:
      return le(A, 3872, 3881, !0, n);
    case 3:
    default:
      return le(A, 48, 57, !0, n);
  }
}, fE = "data-html2canvas-ignore", A1 = (
  /** @class */
  function() {
    function A(e, t, n) {
      if (this.context = e, this.options = n, this.scrolledElements = [], this.referenceElement = t, this.counters = new XM(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var n = this, r = JM(e, t);
      if (!r.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, s = e.defaultView.pageYOffset, l = r.contentWindow, c = l.document, f = qM(r).then(function() {
        return $e(n, void 0, void 0, function() {
          var g, B;
          return Re(this, function(p) {
            switch (p.label) {
              case 0:
                return this.scrolledElements.forEach(nN), l && (l.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (l.scrollY !== t.top || l.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(l.scrollX - t.left, l.scrollY - t.top, 0, 0))), g = this.options.onclone, B = this.clonedReferenceElement, typeof B > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
              case 1:
                p.sent(), p.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, ZM(c)] : [3, 4];
              case 3:
                p.sent(), p.label = 4;
              case 4:
                return typeof g == "function" ? [2, Promise.resolve().then(function() {
                  return g(c, B);
                }).then(function() {
                  return r;
                })] : [2, r];
            }
          });
        });
      });
      return c.open(), c.write(eN(document.doctype) + "<html></html>"), tN(this.referenceElement.ownerDocument, o, s), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), f;
    }, A.prototype.createElementClone = function(e) {
      if (eh(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (sE(e))
        return this.createCanvasClone(e);
      if (WQ(e))
        return this.createVideoClone(e);
      if (XQ(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return ih(t) && (ih(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), zQ(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return SB(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var n = [].slice.call(t.cssRules, 0).reduce(function(o, s) {
            return s && typeof s.cssText == "string" ? o + s.cssText : o;
          }, ""), r = e.cloneNode(!1);
          return r.textContent = n, r;
        }
      } catch (o) {
        if (this.context.logger.error("Unable to access cssRules property", o), o.name !== "SecurityError")
          throw o;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var n = e.ownerDocument.createElement("img");
        try {
          return n.src = e.toDataURL(), n;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var r = e.cloneNode(!1);
      try {
        r.width = e.width, r.height = e.height;
        var o = e.getContext("2d"), s = r.getContext("2d");
        if (s)
          if (!this.options.allowTaint && o)
            s.putImageData(o.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var l = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (l) {
              var c = l.getContextAttributes();
              (c == null ? void 0 : c.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            s.drawImage(e, 0, 0);
          }
        return r;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return r;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var n = t.getContext("2d");
      try {
        return n && (n.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || n.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var r = e.ownerDocument.createElement("canvas");
      return r.width = e.offsetWidth, r.height = e.offsetHeight, r;
    }, A.prototype.appendChildNode = function(e, t, n) {
      (!bo(t) || !WM(t) && !t.hasAttribute(fE) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !bo(t) || !XQ(t)) && e.appendChild(this.cloneNode(t, n));
    }, A.prototype.cloneChildNodes = function(e, t, n) {
      for (var r = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling)
        if (bo(o) && uE(o) && typeof o.assignedNodes == "function") {
          var s = o.assignedNodes();
          s.length && s.forEach(function(l) {
            return r.appendChildNode(t, l, n);
          });
        } else
          this.appendChildNode(t, o, n);
    }, A.prototype.cloneNode = function(e, t) {
      if (oE(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var n = e.ownerDocument.defaultView;
      if (n && bo(e) && (rh(e) || Uc(e))) {
        var r = this.createElementClone(e);
        r.style.transitionProperty = "none";
        var o = n.getComputedStyle(e), s = n.getComputedStyle(e, ":before"), l = n.getComputedStyle(e, ":after");
        this.referenceElement === e && rh(r) && (this.clonedReferenceElement = r), Gw(r) && oN(r);
        var c = this.counters.parse(new LQ(this.context, o)), f = this.resolvePseudoContent(e, r, s, Us.BEFORE);
        zQ(e) && (t = !0), WQ(e) || this.cloneChildNodes(e, r, t), f && r.insertBefore(f, r.firstChild);
        var g = this.resolvePseudoContent(e, r, l, Us.AFTER);
        return g && r.appendChild(g), this.counters.pop(c), (o && (this.options.copyStyles || Uc(e)) && !lE(e) || t) && SB(o, r), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([r, e.scrollLeft, e.scrollTop]), (uf(e) || cf(e)) && (uf(r) || cf(r)) && (r.value = e.value), r;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, n, r) {
      var o = this;
      if (n) {
        var s = n.content, l = t.ownerDocument;
        if (!(!l || !s || s === "none" || s === "-moz-alt-content" || n.display === "none")) {
          this.counters.parse(new LQ(this.context, n));
          var c = new PK(this.context, n), f = l.createElement("html2canvaspseudoelement");
          SB(n, f), c.content.forEach(function(B) {
            if (B.type === 0)
              f.appendChild(l.createTextNode(B.value));
            else if (B.type === 22) {
              var p = l.createElement("img");
              p.src = B.value, p.style.opacity = "1", f.appendChild(p);
            } else if (B.type === 18) {
              if (B.name === "attr") {
                var v = B.values.filter(RA);
                v.length && f.appendChild(l.createTextNode(e.getAttribute(v[0].value) || ""));
              } else if (B.name === "counter") {
                var F = B.values.filter(Aa), U = F[0], L = F[1];
                if (U && RA(U)) {
                  var m = o.counters.getCounterValue(U.value), w = L && RA(L) ? Ah.parse(o.context, L.value) : 3;
                  f.appendChild(l.createTextNode(Js(m, w, !1)));
                }
              } else if (B.name === "counters") {
                var y = B.values.filter(Aa), U = y[0], I = y[1], L = y[2];
                if (U && RA(U)) {
                  var H = o.counters.getCounterValues(U.value), S = L && RA(L) ? Ah.parse(o.context, L.value) : 3, O = I && I.type === 0 ? I.value : "", k = H.map(function(sA) {
                    return Js(sA, S, !1);
                  }).join(O);
                  f.appendChild(l.createTextNode(k));
                }
              }
            } else if (B.type === 20)
              switch (B.value) {
                case "open-quote":
                  f.appendChild(l.createTextNode(SQ(c.quotes, o.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  f.appendChild(l.createTextNode(SQ(c.quotes, --o.quoteDepth, !1)));
                  break;
                default:
                  f.appendChild(l.createTextNode(B.value));
              }
          }), f.className = oh + " " + ah;
          var g = r === Us.BEFORE ? " " + oh : " " + ah;
          return Uc(t) ? t.className.baseValue += g : t.className += g, f;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Us;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Us || (Us = {}));
var JM = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(fE, "true"), A.body.appendChild(t), t;
}, jM = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, ZM = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(jM));
}, qM = function(A) {
  return new Promise(function(e, t) {
    var n = A.contentWindow;
    if (!n)
      return t("No window assigned for iframe");
    var r = n.document;
    n.onload = A.onload = function() {
      n.onload = A.onload = null;
      var o = setInterval(function() {
        r.body.childNodes.length > 0 && r.readyState === "complete" && (clearInterval(o), e(A));
      }, 50);
    };
  });
}, AN = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], SB = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var n = A.item(t);
    AN.indexOf(n) === -1 && e.style.setProperty(n, A.getPropertyValue(n));
  }
  return e;
}, eN = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, tN = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, nN = function(A) {
  var e = A[0], t = A[1], n = A[2];
  e.scrollLeft = t, e.scrollTop = n;
}, rN = ":before", iN = ":after", oh = "___html2canvas___pseudoelement_before", ah = "___html2canvas___pseudoelement_after", e1 = `{
    content: "" !important;
    display: none !important;
}`, oN = function(A) {
  aN(A, "." + oh + rN + e1 + `
         .` + ah + iN + e1);
}, aN = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var n = t.createElement("style");
    n.textContent = e, A.appendChild(n);
  }
}, dE = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), sN = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (bB(e) || fN(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return $e(this, void 0, void 0, function() {
        var t, n, r, o, s = this;
        return Re(this, function(l) {
          switch (l.label) {
            case 0:
              return t = dE.isSameOrigin(e), n = !LB(e) && this._options.useCORS === !0 && Se.SUPPORT_CORS_IMAGES && !t, r = !LB(e) && !t && !bB(e) && typeof this._options.proxy == "string" && Se.SUPPORT_CORS_XHR && !n, !t && this._options.allowTaint === !1 && !LB(e) && !bB(e) && !r && !n ? [
                2
                /*return*/
              ] : (o = e, r ? [4, this.proxy(o)] : [3, 2]);
            case 1:
              o = l.sent(), l.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(c, f) {
                var g = new Image();
                g.onload = function() {
                  return c(g);
                }, g.onerror = f, (dN(o) || n) && (g.crossOrigin = "anonymous"), g.src = o, g.complete === !0 && setTimeout(function() {
                  return c(g);
                }, 500), s._options.imageTimeout > 0 && setTimeout(function() {
                  return f("Timed out (" + s._options.imageTimeout + "ms) loading image");
                }, s._options.imageTimeout);
              })];
            case 3:
              return [2, l.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, n = this._options.proxy;
      if (!n)
        throw new Error("No proxy defined");
      var r = e.substring(0, 256);
      return new Promise(function(o, s) {
        var l = Se.SUPPORT_RESPONSE_TYPE ? "blob" : "text", c = new XMLHttpRequest();
        c.onload = function() {
          if (c.status === 200)
            if (l === "text")
              o(c.response);
            else {
              var B = new FileReader();
              B.addEventListener("load", function() {
                return o(B.result);
              }, !1), B.addEventListener("error", function(p) {
                return s(p);
              }, !1), B.readAsDataURL(c.response);
            }
          else
            s("Failed to proxy resource " + r + " with status code " + c.status);
        }, c.onerror = s;
        var f = n.indexOf("?") > -1 ? "&" : "?";
        if (c.open("GET", "" + n + f + "url=" + encodeURIComponent(e) + "&responseType=" + l), l !== "text" && c instanceof XMLHttpRequest && (c.responseType = l), t._options.imageTimeout) {
          var g = t._options.imageTimeout;
          c.timeout = g, c.ontimeout = function() {
            return s("Timed out (" + g + "ms) proxying " + r);
          };
        }
        c.send();
      });
    }, A;
  }()
), lN = /^data:image\/svg\+xml/i, uN = /^data:image\/.*;base64,/i, cN = /^data:image\/.*/i, fN = function(A) {
  return Se.SUPPORT_SVG_DRAWING || !gN(A);
}, LB = function(A) {
  return cN.test(A);
}, dN = function(A) {
  return uN.test(A);
}, bB = function(A) {
  return A.substr(0, 4) === "blob";
}, gN = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || lN.test(A);
}, Y = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), go = function(A, e, t) {
  return new Y(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, zu = (
  /** @class */
  function() {
    function A(e, t, n, r) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = n, this.end = r;
    }
    return A.prototype.subdivide = function(e, t) {
      var n = go(this.start, this.startControl, e), r = go(this.startControl, this.endControl, e), o = go(this.endControl, this.end, e), s = go(n, r, e), l = go(r, o, e), c = go(s, l, e);
      return t ? new A(this.start, n, s, c) : new A(c, l, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Rt = function(A) {
  return A.type === 1;
}, BN = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, n = e.bounds, r = os(t.borderTopLeftRadius, n.width, n.height), o = r[0], s = r[1], l = os(t.borderTopRightRadius, n.width, n.height), c = l[0], f = l[1], g = os(t.borderBottomRightRadius, n.width, n.height), B = g[0], p = g[1], v = os(t.borderBottomLeftRadius, n.width, n.height), F = v[0], U = v[1], L = [];
      L.push((o + c) / n.width), L.push((F + B) / n.width), L.push((s + U) / n.height), L.push((f + p) / n.height);
      var m = Math.max.apply(Math, L);
      m > 1 && (o /= m, s /= m, c /= m, f /= m, B /= m, p /= m, F /= m, U /= m);
      var w = n.width - c, y = n.height - p, I = n.width - B, H = n.height - U, S = t.borderTopWidth, O = t.borderRightWidth, k = t.borderBottomWidth, N = t.borderLeftWidth, W = NA(t.paddingTop, e.bounds.width), sA = NA(t.paddingRight, e.bounds.width), iA = NA(t.paddingBottom, e.bounds.width), tA = NA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || s > 0 ? jA(n.left + N / 3, n.top + S / 3, o - N / 3, s - S / 3, TA.TOP_LEFT) : new Y(n.left + N / 3, n.top + S / 3), this.topRightBorderDoubleOuterBox = o > 0 || s > 0 ? jA(n.left + w, n.top + S / 3, c - O / 3, f - S / 3, TA.TOP_RIGHT) : new Y(n.left + n.width - O / 3, n.top + S / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || p > 0 ? jA(n.left + I, n.top + y, B - O / 3, p - k / 3, TA.BOTTOM_RIGHT) : new Y(n.left + n.width - O / 3, n.top + n.height - k / 3), this.bottomLeftBorderDoubleOuterBox = F > 0 || U > 0 ? jA(n.left + N / 3, n.top + H, F - N / 3, U - k / 3, TA.BOTTOM_LEFT) : new Y(n.left + N / 3, n.top + n.height - k / 3), this.topLeftBorderDoubleInnerBox = o > 0 || s > 0 ? jA(n.left + N * 2 / 3, n.top + S * 2 / 3, o - N * 2 / 3, s - S * 2 / 3, TA.TOP_LEFT) : new Y(n.left + N * 2 / 3, n.top + S * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || s > 0 ? jA(n.left + w, n.top + S * 2 / 3, c - O * 2 / 3, f - S * 2 / 3, TA.TOP_RIGHT) : new Y(n.left + n.width - O * 2 / 3, n.top + S * 2 / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || p > 0 ? jA(n.left + I, n.top + y, B - O * 2 / 3, p - k * 2 / 3, TA.BOTTOM_RIGHT) : new Y(n.left + n.width - O * 2 / 3, n.top + n.height - k * 2 / 3), this.bottomLeftBorderDoubleInnerBox = F > 0 || U > 0 ? jA(n.left + N * 2 / 3, n.top + H, F - N * 2 / 3, U - k * 2 / 3, TA.BOTTOM_LEFT) : new Y(n.left + N * 2 / 3, n.top + n.height - k * 2 / 3), this.topLeftBorderStroke = o > 0 || s > 0 ? jA(n.left + N / 2, n.top + S / 2, o - N / 2, s - S / 2, TA.TOP_LEFT) : new Y(n.left + N / 2, n.top + S / 2), this.topRightBorderStroke = o > 0 || s > 0 ? jA(n.left + w, n.top + S / 2, c - O / 2, f - S / 2, TA.TOP_RIGHT) : new Y(n.left + n.width - O / 2, n.top + S / 2), this.bottomRightBorderStroke = B > 0 || p > 0 ? jA(n.left + I, n.top + y, B - O / 2, p - k / 2, TA.BOTTOM_RIGHT) : new Y(n.left + n.width - O / 2, n.top + n.height - k / 2), this.bottomLeftBorderStroke = F > 0 || U > 0 ? jA(n.left + N / 2, n.top + H, F - N / 2, U - k / 2, TA.BOTTOM_LEFT) : new Y(n.left + N / 2, n.top + n.height - k / 2), this.topLeftBorderBox = o > 0 || s > 0 ? jA(n.left, n.top, o, s, TA.TOP_LEFT) : new Y(n.left, n.top), this.topRightBorderBox = c > 0 || f > 0 ? jA(n.left + w, n.top, c, f, TA.TOP_RIGHT) : new Y(n.left + n.width, n.top), this.bottomRightBorderBox = B > 0 || p > 0 ? jA(n.left + I, n.top + y, B, p, TA.BOTTOM_RIGHT) : new Y(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = F > 0 || U > 0 ? jA(n.left, n.top + H, F, U, TA.BOTTOM_LEFT) : new Y(n.left, n.top + n.height), this.topLeftPaddingBox = o > 0 || s > 0 ? jA(n.left + N, n.top + S, Math.max(0, o - N), Math.max(0, s - S), TA.TOP_LEFT) : new Y(n.left + N, n.top + S), this.topRightPaddingBox = c > 0 || f > 0 ? jA(n.left + Math.min(w, n.width - O), n.top + S, w > n.width + O ? 0 : Math.max(0, c - O), Math.max(0, f - S), TA.TOP_RIGHT) : new Y(n.left + n.width - O, n.top + S), this.bottomRightPaddingBox = B > 0 || p > 0 ? jA(n.left + Math.min(I, n.width - N), n.top + Math.min(y, n.height - k), Math.max(0, B - O), Math.max(0, p - k), TA.BOTTOM_RIGHT) : new Y(n.left + n.width - O, n.top + n.height - k), this.bottomLeftPaddingBox = F > 0 || U > 0 ? jA(n.left + N, n.top + Math.min(H, n.height - k), Math.max(0, F - N), Math.max(0, U - k), TA.BOTTOM_LEFT) : new Y(n.left + N, n.top + n.height - k), this.topLeftContentBox = o > 0 || s > 0 ? jA(n.left + N + tA, n.top + S + W, Math.max(0, o - (N + tA)), Math.max(0, s - (S + W)), TA.TOP_LEFT) : new Y(n.left + N + tA, n.top + S + W), this.topRightContentBox = c > 0 || f > 0 ? jA(n.left + Math.min(w, n.width + N + tA), n.top + S + W, w > n.width + N + tA ? 0 : c - N + tA, f - (S + W), TA.TOP_RIGHT) : new Y(n.left + n.width - (O + sA), n.top + S + W), this.bottomRightContentBox = B > 0 || p > 0 ? jA(n.left + Math.min(I, n.width - (N + tA)), n.top + Math.min(y, n.height + S + W), Math.max(0, B - (O + sA)), p - (k + iA), TA.BOTTOM_RIGHT) : new Y(n.left + n.width - (O + sA), n.top + n.height - (k + iA)), this.bottomLeftContentBox = F > 0 || U > 0 ? jA(n.left + N + tA, n.top + H, Math.max(0, F - (N + tA)), U - (k + iA), TA.BOTTOM_LEFT) : new Y(n.left + N + tA, n.top + n.height - (k + iA));
    }
    return A;
  }()
), TA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(TA || (TA = {}));
var jA = function(A, e, t, n, r) {
  var o = 4 * ((Math.sqrt(2) - 1) / 3), s = t * o, l = n * o, c = A + t, f = e + n;
  switch (r) {
    case TA.TOP_LEFT:
      return new zu(new Y(A, f), new Y(A, f - l), new Y(c - s, e), new Y(c, e));
    case TA.TOP_RIGHT:
      return new zu(new Y(A, e), new Y(A + s, e), new Y(c, f - l), new Y(c, f));
    case TA.BOTTOM_RIGHT:
      return new zu(new Y(c, e), new Y(c, e + l), new Y(A + s, f), new Y(A, f));
    case TA.BOTTOM_LEFT:
    default:
      return new zu(new Y(c, f), new Y(c - s, f), new Y(A, e + l), new Y(A, e));
  }
}, ff = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, pN = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, df = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, hN = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, n) {
      this.offsetX = e, this.offsetY = t, this.matrix = n, this.type = 0, this.target = 6;
    }
    return A;
  }()
), Yu = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), wN = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), vN = function(A) {
  return A.type === 0;
}, gE = function(A) {
  return A.type === 1;
}, mN = function(A) {
  return A.type === 2;
}, t1 = function(A, e) {
  return A.length === e.length ? A.some(function(t, n) {
    return t === e[n];
  }) : !1;
}, CN = function(A, e, t, n, r) {
  return A.map(function(o, s) {
    switch (s) {
      case 0:
        return o.add(e, t);
      case 1:
        return o.add(e + n, t);
      case 2:
        return o.add(e + n, t + r);
      case 3:
        return o.add(e, t + r);
    }
    return o;
  });
}, BE = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), pE = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new BN(this.container), this.container.styles.opacity < 1 && this.effects.push(new wN(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var n = this.container.bounds.left + this.container.styles.transformOrigin[0].number, r = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new hN(n, r, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = ff(this.curves), l = df(this.curves);
        t1(s, l) ? this.effects.push(new Yu(
          s,
          6
          /* CONTENT */
        )) : (this.effects.push(new Yu(
          s,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Yu(
          l,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, n = this.parent, r = this.effects.slice(0); n; ) {
        var o = n.effects.filter(function(c) {
          return !gE(c);
        });
        if (t || n.container.styles.position !== 0 || !n.parent) {
          if (r.unshift.apply(r, o), t = [
            2,
            3
            /* FIXED */
          ].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0) {
            var s = ff(n.curves), l = df(n.curves);
            t1(s, l) || r.unshift(new Yu(
              l,
              6
              /* CONTENT */
            ));
          }
        } else
          r.unshift.apply(r, o);
        n = n.parent;
      }
      return r.filter(function(c) {
        return we(c.target, e);
      });
    }, A;
  }()
), sh = function(A, e, t, n) {
  A.container.elements.forEach(function(r) {
    var o = we(
      r.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), s = we(
      r.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), l = new pE(r, A);
    we(
      r.styles.display,
      2048
      /* LIST_ITEM */
    ) && n.push(l);
    var c = we(
      r.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : n;
    if (o || s) {
      var f = o || r.styles.isPositioned() ? t : e, g = new BE(l);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        var B = r.styles.zIndex.order;
        if (B < 0) {
          var p = 0;
          f.negativeZIndex.some(function(F, U) {
            return B > F.element.container.styles.zIndex.order ? (p = U, !1) : p > 0;
          }), f.negativeZIndex.splice(p, 0, g);
        } else if (B > 0) {
          var v = 0;
          f.positiveZIndex.some(function(F, U) {
            return B >= F.element.container.styles.zIndex.order ? (v = U + 1, !1) : v > 0;
          }), f.positiveZIndex.splice(v, 0, g);
        } else
          f.zeroOrAutoZIndexOrTransformedOrOpacity.push(g);
      } else
        r.styles.isFloating() ? f.nonPositionedFloats.push(g) : f.nonPositionedInlineLevel.push(g);
      sh(l, g, o ? g : t, c);
    } else
      r.styles.isInlineLevel() ? e.inlineLevel.push(l) : e.nonInlineLevel.push(l), sh(l, e, t, c);
    we(
      r.flags,
      8
      /* IS_LIST_OWNER */
    ) && hE(r, c);
  });
}, hE = function(A, e) {
  for (var t = A instanceof nh ? A.start : 1, n = A instanceof nh ? A.reversed : !1, r = 0; r < e.length; r++) {
    var o = e[r];
    o.container instanceof AE && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Js(t, o.container.styles.listStyleType, !0), t += n ? -1 : 1;
  }
}, QN = function(A) {
  var e = new pE(A, null), t = new BE(e), n = [];
  return sh(e, t, t, n), hE(e.container, n), t;
}, n1 = function(A, e) {
  switch (e) {
    case 0:
      return Nt(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return Nt(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return Nt(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Nt(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, yN = function(A, e) {
  switch (e) {
    case 0:
      return Nt(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return Nt(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return Nt(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Nt(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, FN = function(A, e) {
  switch (e) {
    case 0:
      return Nt(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return Nt(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return Nt(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Nt(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, UN = function(A, e) {
  switch (e) {
    case 0:
      return Ju(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Ju(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Ju(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Ju(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Ju = function(A, e) {
  var t = [];
  return Rt(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), Rt(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, Nt = function(A, e, t, n) {
  var r = [];
  return Rt(A) ? r.push(A.subdivide(0.5, !1)) : r.push(A), Rt(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), Rt(n) ? r.push(n.subdivide(0.5, !0).reverse()) : r.push(n), Rt(e) ? r.push(e.subdivide(0.5, !1).reverse()) : r.push(e), r;
}, wE = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, gf = function(A) {
  var e = A.styles, t = A.bounds, n = NA(e.paddingLeft, t.width), r = NA(e.paddingRight, t.width), o = NA(e.paddingTop, t.width), s = NA(e.paddingBottom, t.width);
  return t.add(n + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + o + s));
}, EN = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? gf(e) : wE(e);
}, IN = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? gf(e) : wE(e);
}, _B = function(A, e, t) {
  var n = EN(vo(A.styles.backgroundOrigin, e), A), r = IN(vo(A.styles.backgroundClip, e), A), o = xN(vo(A.styles.backgroundSize, e), t, n), s = o[0], l = o[1], c = os(vo(A.styles.backgroundPosition, e), n.width - s, n.height - l), f = HN(vo(A.styles.backgroundRepeat, e), c, o, n, r), g = Math.round(n.left + c[0]), B = Math.round(n.top + c[1]);
  return [f, g, B, s, l];
}, Bo = function(A) {
  return RA(A) && A.value === Go.AUTO;
}, ju = function(A) {
  return typeof A == "number";
}, xN = function(A, e, t) {
  var n = e[0], r = e[1], o = e[2], s = A[0], l = A[1];
  if (!s)
    return [0, 0];
  if (fe(s) && l && fe(l))
    return [NA(s, t.width), NA(l, t.height)];
  var c = ju(o);
  if (RA(s) && (s.value === Go.CONTAIN || s.value === Go.COVER)) {
    if (ju(o)) {
      var f = t.width / t.height;
      return f < o != (s.value === Go.COVER) ? [t.width, t.width / o] : [t.height * o, t.height];
    }
    return [t.width, t.height];
  }
  var g = ju(n), B = ju(r), p = g || B;
  if (Bo(s) && (!l || Bo(l))) {
    if (g && B)
      return [n, r];
    if (!c && !p)
      return [t.width, t.height];
    if (p && c) {
      var v = g ? n : r * o, F = B ? r : n / o;
      return [v, F];
    }
    var U = g ? n : t.width, L = B ? r : t.height;
    return [U, L];
  }
  if (c) {
    var m = 0, w = 0;
    return fe(s) ? m = NA(s, t.width) : fe(l) && (w = NA(l, t.height)), Bo(s) ? m = w * o : (!l || Bo(l)) && (w = m / o), [m, w];
  }
  var y = null, I = null;
  if (fe(s) ? y = NA(s, t.width) : l && fe(l) && (I = NA(l, t.height)), y !== null && (!l || Bo(l)) && (I = g && B ? y / n * r : t.height), I !== null && Bo(s) && (y = g && B ? I / r * n : t.width), y !== null && I !== null)
    return [y, I];
  throw new Error("Unable to calculate background-size for element");
}, vo = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, HN = function(A, e, t, n, r) {
  var o = e[0], s = e[1], l = t[0], c = t[1];
  switch (A) {
    case 2:
      return [
        new Y(Math.round(n.left), Math.round(n.top + s)),
        new Y(Math.round(n.left + n.width), Math.round(n.top + s)),
        new Y(Math.round(n.left + n.width), Math.round(c + n.top + s)),
        new Y(Math.round(n.left), Math.round(c + n.top + s))
      ];
    case 3:
      return [
        new Y(Math.round(n.left + o), Math.round(n.top)),
        new Y(Math.round(n.left + o + l), Math.round(n.top)),
        new Y(Math.round(n.left + o + l), Math.round(n.height + n.top)),
        new Y(Math.round(n.left + o), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new Y(Math.round(n.left + o), Math.round(n.top + s)),
        new Y(Math.round(n.left + o + l), Math.round(n.top + s)),
        new Y(Math.round(n.left + o + l), Math.round(n.top + s + c)),
        new Y(Math.round(n.left + o), Math.round(n.top + s + c))
      ];
    default:
      return [
        new Y(Math.round(r.left), Math.round(r.top)),
        new Y(Math.round(r.left + r.width), Math.round(r.top)),
        new Y(Math.round(r.left + r.width), Math.round(r.height + r.top)),
        new Y(Math.round(r.left), Math.round(r.height + r.top))
      ];
  }
}, SN = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r1 = "Hidden Text", LN = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var n = this._document.createElement("div"), r = this._document.createElement("img"), o = this._document.createElement("span"), s = this._document.body;
      n.style.visibility = "hidden", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", s.appendChild(n), r.src = SN, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(r1)), n.appendChild(o), n.appendChild(r);
      var l = r.offsetTop - o.offsetTop + 2;
      n.removeChild(o), n.appendChild(this._document.createTextNode(r1)), n.style.lineHeight = "normal", r.style.verticalAlign = "super";
      var c = r.offsetTop - n.offsetTop + 2;
      return s.removeChild(n), { baseline: l, middle: c };
    }, A.prototype.getMetrics = function(e, t) {
      var n = e + " " + t;
      return typeof this._data[n] > "u" && (this._data[n] = this.parseMetrics(e, t)), this._data[n];
    }, A;
  }()
), vE = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), bN = 1e4, _N = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r._activeEffects = [], r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), n.canvas || (r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px"), r.fontMetrics = new LN(document), r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.ctx.textBaseline = "bottom", r._activeEffects = [], r.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), r;
    }
    return e.prototype.applyEffects = function(t) {
      for (var n = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(r) {
        return n.applyEffect(r);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), mN(t) && (this.ctx.globalAlpha = t.opacity), vN(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), gE(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return $e(this, void 0, void 0, function() {
        var n;
        return Re(this, function(r) {
          switch (r.label) {
            case 0:
              return n = t.element.container.styles, n.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              r.sent(), r.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return $e(this, void 0, void 0, function() {
        return Re(this, function(n) {
          switch (n.label) {
            case 0:
              if (we(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return n.sent(), [4, this.renderNodeContent(t)];
            case 2:
              n.sent(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, n, r) {
      var o = this;
      if (n === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + r);
      else {
        var s = Nw(t.text);
        s.reduce(function(l, c) {
          return o.ctx.fillText(c, l, t.bounds.top + r), l + o.ctx.measureText(c).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var n = t.fontVariant.filter(function(s) {
        return s === "normal" || s === "small-caps";
      }).join(""), r = RN(t.fontFamily).join(", "), o = dl(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, n, t.fontWeight, o, r].join(" "),
        r,
        o
      ];
    }, e.prototype.renderTextNode = function(t, n) {
      return $e(this, void 0, void 0, function() {
        var r, o, s, l, c, f, g, B, p = this;
        return Re(this, function(v) {
          return r = this.createFontStyle(n), o = r[0], s = r[1], l = r[2], this.ctx.font = o, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(s, l), f = c.baseline, g = c.middle, B = n.paintOrder, t.textBounds.forEach(function(F) {
            B.forEach(function(U) {
              switch (U) {
                case 0:
                  p.ctx.fillStyle = Qe(n.color), p.renderTextWithLetterSpacing(F, n.letterSpacing, f);
                  var L = n.textShadow;
                  L.length && F.text.trim().length && (L.slice(0).reverse().forEach(function(m) {
                    p.ctx.shadowColor = Qe(m.color), p.ctx.shadowOffsetX = m.offsetX.number * p.options.scale, p.ctx.shadowOffsetY = m.offsetY.number * p.options.scale, p.ctx.shadowBlur = m.blur.number, p.renderTextWithLetterSpacing(F, n.letterSpacing, f);
                  }), p.ctx.shadowColor = "", p.ctx.shadowOffsetX = 0, p.ctx.shadowOffsetY = 0, p.ctx.shadowBlur = 0), n.textDecorationLine.length && (p.ctx.fillStyle = Qe(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(m) {
                    switch (m) {
                      case 1:
                        p.ctx.fillRect(F.bounds.left, Math.round(F.bounds.top + f), F.bounds.width, 1);
                        break;
                      case 2:
                        p.ctx.fillRect(F.bounds.left, Math.round(F.bounds.top), F.bounds.width, 1);
                        break;
                      case 3:
                        p.ctx.fillRect(F.bounds.left, Math.ceil(F.bounds.top + g), F.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  n.webkitTextStrokeWidth && F.text.trim().length && (p.ctx.strokeStyle = Qe(n.webkitTextStrokeColor), p.ctx.lineWidth = n.webkitTextStrokeWidth, p.ctx.lineJoin = window.chrome ? "miter" : "round", p.ctx.strokeText(F.text, F.bounds.left, F.bounds.top + f)), p.ctx.strokeStyle = "", p.ctx.lineWidth = 0, p.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, n, r) {
      if (r && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var o = gf(t), s = df(n);
        this.path(s), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(r, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return $e(this, void 0, void 0, function() {
        var n, r, o, s, l, c, w, w, f, g, B, p, I, v, F, H, U, L, m, w, y, I, H;
        return Re(this, function(S) {
          switch (S.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), n = t.container, r = t.curves, o = n.styles, s = 0, l = n.textNodes, S.label = 1;
            case 1:
              return s < l.length ? (c = l[s], [4, this.renderTextNode(c, o)]) : [3, 4];
            case 2:
              S.sent(), S.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              if (!(n instanceof jU)) return [3, 8];
              S.label = 5;
            case 5:
              return S.trys.push([5, 7, , 8]), [4, this.context.cache.match(n.src)];
            case 6:
              return w = S.sent(), this.renderReplacedElement(n, r, w), [3, 8];
            case 7:
              return S.sent(), this.context.logger.error("Error loading image " + n.src), [3, 8];
            case 8:
              if (n instanceof ZU && this.renderReplacedElement(n, r, n.canvas), !(n instanceof qU)) return [3, 12];
              S.label = 9;
            case 9:
              return S.trys.push([9, 11, , 12]), [4, this.context.cache.match(n.svg)];
            case 10:
              return w = S.sent(), this.renderReplacedElement(n, r, w), [3, 12];
            case 11:
              return S.sent(), this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
            case 12:
              return n instanceof nE && n.tree ? (f = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: n.backgroundColor,
                x: 0,
                y: 0,
                width: n.width,
                height: n.height
              }), [4, f.render(n.tree)]) : [3, 14];
            case 13:
              g = S.sent(), n.width && n.height && this.ctx.drawImage(g, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), S.label = 14;
            case 14:
              if (n instanceof Pw && (B = Math.min(n.bounds.width, n.bounds.height), n.type === sf ? n.checked && (this.ctx.save(), this.path([
                new Y(n.bounds.left + B * 0.39363, n.bounds.top + B * 0.79),
                new Y(n.bounds.left + B * 0.16, n.bounds.top + B * 0.5549),
                new Y(n.bounds.left + B * 0.27347, n.bounds.top + B * 0.44071),
                new Y(n.bounds.left + B * 0.39694, n.bounds.top + B * 0.5649),
                new Y(n.bounds.left + B * 0.72983, n.bounds.top + B * 0.23),
                new Y(n.bounds.left + B * 0.84, n.bounds.top + B * 0.34085),
                new Y(n.bounds.left + B * 0.39363, n.bounds.top + B * 0.79)
              ]), this.ctx.fillStyle = Qe($Q), this.ctx.fill(), this.ctx.restore()) : n.type === lf && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + B / 2, n.bounds.top + B / 2, B / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = Qe($Q), this.ctx.fill(), this.ctx.restore())), TN(n) && n.value.length) {
                switch (p = this.createFontStyle(o), I = p[0], v = p[1], F = this.fontMetrics.getMetrics(I, v).baseline, this.ctx.font = I, this.ctx.fillStyle = Qe(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = DN(n.styles.textAlign), H = gf(n), U = 0, n.styles.textAlign) {
                  case 1:
                    U += H.width / 2;
                    break;
                  case 2:
                    U += H.width;
                    break;
                }
                L = H.add(U, 0, 0, -H.height / 2 + 1), this.ctx.save(), this.path([
                  new Y(H.left, H.top),
                  new Y(H.left + H.width, H.top),
                  new Y(H.left + H.width, H.top + H.height),
                  new Y(H.left, H.top + H.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Fs(n.value, L), o.letterSpacing, F), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!we(
                n.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (n.styles.listStyleImage === null) return [3, 19];
              if (m = n.styles.listStyleImage, m.type !== 0) return [3, 18];
              w = void 0, y = m.url, S.label = 15;
            case 15:
              return S.trys.push([15, 17, , 18]), [4, this.context.cache.match(y)];
            case 16:
              return w = S.sent(), this.ctx.drawImage(w, n.bounds.left - (w.width + 10), n.bounds.top), [3, 18];
            case 17:
              return S.sent(), this.context.logger.error("Error loading list-style-image " + y), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && n.styles.listStyleType !== -1 && (I = this.createFontStyle(o)[0], this.ctx.font = I, this.ctx.fillStyle = Qe(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", H = new nr(n.bounds.left, n.bounds.top + NA(n.styles.paddingTop, n.bounds.width), n.bounds.width, xQ(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Fs(t.listValue, H), o.letterSpacing, xQ(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), S.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return $e(this, void 0, void 0, function() {
        var n, r, m, o, s, m, l, c, m, f, g, m, B, p, m, v, F, m, U, L, m;
        return Re(this, function(w) {
          switch (w.label) {
            case 0:
              if (we(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              w.sent(), n = 0, r = t.negativeZIndex, w.label = 2;
            case 2:
              return n < r.length ? (m = r[n], [4, this.renderStack(m)]) : [3, 5];
            case 3:
              w.sent(), w.label = 4;
            case 4:
              return n++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              w.sent(), o = 0, s = t.nonInlineLevel, w.label = 7;
            case 7:
              return o < s.length ? (m = s[o], [4, this.renderNode(m)]) : [3, 10];
            case 8:
              w.sent(), w.label = 9;
            case 9:
              return o++, [3, 7];
            case 10:
              l = 0, c = t.nonPositionedFloats, w.label = 11;
            case 11:
              return l < c.length ? (m = c[l], [4, this.renderStack(m)]) : [3, 14];
            case 12:
              w.sent(), w.label = 13;
            case 13:
              return l++, [3, 11];
            case 14:
              f = 0, g = t.nonPositionedInlineLevel, w.label = 15;
            case 15:
              return f < g.length ? (m = g[f], [4, this.renderStack(m)]) : [3, 18];
            case 16:
              w.sent(), w.label = 17;
            case 17:
              return f++, [3, 15];
            case 18:
              B = 0, p = t.inlineLevel, w.label = 19;
            case 19:
              return B < p.length ? (m = p[B], [4, this.renderNode(m)]) : [3, 22];
            case 20:
              w.sent(), w.label = 21;
            case 21:
              return B++, [3, 19];
            case 22:
              v = 0, F = t.zeroOrAutoZIndexOrTransformedOrOpacity, w.label = 23;
            case 23:
              return v < F.length ? (m = F[v], [4, this.renderStack(m)]) : [3, 26];
            case 24:
              w.sent(), w.label = 25;
            case 25:
              return v++, [3, 23];
            case 26:
              U = 0, L = t.positiveZIndex, w.label = 27;
            case 27:
              return U < L.length ? (m = L[U], [4, this.renderStack(m)]) : [3, 30];
            case 28:
              w.sent(), w.label = 29;
            case 29:
              return U++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var n = this;
      t.forEach(function(r, o) {
        var s = Rt(r) ? r.start : r;
        o === 0 ? n.ctx.moveTo(s.x, s.y) : n.ctx.lineTo(s.x, s.y), Rt(r) && n.ctx.bezierCurveTo(r.startControl.x, r.startControl.y, r.endControl.x, r.endControl.y, r.end.x, r.end.y);
      });
    }, e.prototype.renderRepeat = function(t, n, r, o) {
      this.path(t), this.ctx.fillStyle = n, this.ctx.translate(r, o), this.ctx.fill(), this.ctx.translate(-r, -o);
    }, e.prototype.resizeImage = function(t, n, r) {
      var o;
      if (t.width === n && t.height === r)
        return t;
      var s = (o = this.canvas.ownerDocument) !== null && o !== void 0 ? o : document, l = s.createElement("canvas");
      l.width = Math.max(1, n), l.height = Math.max(1, r);
      var c = l.getContext("2d");
      return c.drawImage(t, 0, 0, t.width, t.height, 0, 0, n, r), l;
    }, e.prototype.renderBackgroundImage = function(t) {
      return $e(this, void 0, void 0, function() {
        var n, r, o, s, l, c;
        return Re(this, function(f) {
          switch (f.label) {
            case 0:
              n = t.styles.backgroundImage.length - 1, r = function(g) {
                var B, p, v, W, fA, J, tA, lA, k, F, W, fA, J, tA, lA, U, L, m, w, y, I, H, S, O, k, N, W, sA, iA, tA, lA, mA, fA, J, P, V, X, j, BA, OA, GA, LA;
                return Re(this, function(HA) {
                  switch (HA.label) {
                    case 0:
                      if (g.type !== 0) return [3, 5];
                      B = void 0, p = g.url, HA.label = 1;
                    case 1:
                      return HA.trys.push([1, 3, , 4]), [4, o.context.cache.match(p)];
                    case 2:
                      return B = HA.sent(), [3, 4];
                    case 3:
                      return HA.sent(), o.context.logger.error("Error loading background-image " + p), [3, 4];
                    case 4:
                      return B && (v = _B(t, n, [
                        B.width,
                        B.height,
                        B.width / B.height
                      ]), W = v[0], fA = v[1], J = v[2], tA = v[3], lA = v[4], k = o.ctx.createPattern(o.resizeImage(B, tA, lA), "repeat"), o.renderRepeat(W, k, fA, J)), [3, 6];
                    case 5:
                      vR(g) ? (F = _B(t, n, [null, null, null]), W = F[0], fA = F[1], J = F[2], tA = F[3], lA = F[4], U = gR(g.angle, tA, lA), L = U[0], m = U[1], w = U[2], y = U[3], I = U[4], H = document.createElement("canvas"), H.width = tA, H.height = lA, S = H.getContext("2d"), O = S.createLinearGradient(m, y, w, I), EQ(g.stops, L).forEach(function(Ee) {
                        return O.addColorStop(Ee.stop, Qe(Ee.color));
                      }), S.fillStyle = O, S.fillRect(0, 0, tA, lA), tA > 0 && lA > 0 && (k = o.ctx.createPattern(H, "repeat"), o.renderRepeat(W, k, fA, J))) : mR(g) && (N = _B(t, n, [
                        null,
                        null,
                        null
                      ]), W = N[0], sA = N[1], iA = N[2], tA = N[3], lA = N[4], mA = g.position.length === 0 ? [Rw] : g.position, fA = NA(mA[0], tA), J = NA(mA[mA.length - 1], lA), P = BR(g, fA, J, tA, lA), V = P[0], X = P[1], V > 0 && X > 0 && (j = o.ctx.createRadialGradient(sA + fA, iA + J, 0, sA + fA, iA + J, V), EQ(g.stops, V * 2).forEach(function(Ee) {
                        return j.addColorStop(Ee.stop, Qe(Ee.color));
                      }), o.path(W), o.ctx.fillStyle = j, V !== X ? (BA = t.bounds.left + 0.5 * t.bounds.width, OA = t.bounds.top + 0.5 * t.bounds.height, GA = X / V, LA = 1 / GA, o.ctx.save(), o.ctx.translate(BA, OA), o.ctx.transform(1, 0, 0, GA, 0, 0), o.ctx.translate(-BA, -OA), o.ctx.fillRect(sA, LA * (iA - OA) + OA, tA, lA * LA), o.ctx.restore()) : o.ctx.fill())), HA.label = 6;
                    case 6:
                      return n--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, o = this, s = 0, l = t.styles.backgroundImage.slice(0).reverse(), f.label = 1;
            case 1:
              return s < l.length ? (c = l[s], [5, r(c)]) : [3, 4];
            case 2:
              f.sent(), f.label = 3;
            case 3:
              return s++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, n, r) {
      return $e(this, void 0, void 0, function() {
        return Re(this, function(o) {
          return this.path(n1(r, n)), this.ctx.fillStyle = Qe(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, n, r, o) {
      return $e(this, void 0, void 0, function() {
        var s, l;
        return Re(this, function(c) {
          switch (c.label) {
            case 0:
              return n < 3 ? [4, this.renderSolidBorder(t, r, o)] : [3, 2];
            case 1:
              return c.sent(), [
                2
                /*return*/
              ];
            case 2:
              return s = yN(o, r), this.path(s), this.ctx.fillStyle = Qe(t), this.ctx.fill(), l = FN(o, r), this.path(l), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return $e(this, void 0, void 0, function() {
        var n, r, o, s, l, c, f, g, B = this;
        return Re(this, function(p) {
          switch (p.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), n = t.container.styles, r = !Vr(n.backgroundColor) || n.backgroundImage.length, o = [
                { style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth },
                { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth },
                { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth },
                { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }
              ], s = ON(vo(n.backgroundClip, 0), t.curves), r || n.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), Vr(n.backgroundColor) || (this.ctx.fillStyle = Qe(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              p.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(v) {
                B.ctx.save();
                var F = ff(t.curves), U = v.inset ? 0 : bN, L = CN(F, -U + (v.inset ? 1 : -1) * v.spread.number, (v.inset ? 1 : -1) * v.spread.number, v.spread.number * (v.inset ? -2 : 2), v.spread.number * (v.inset ? -2 : 2));
                v.inset ? (B.path(F), B.ctx.clip(), B.mask(L)) : (B.mask(F), B.ctx.clip(), B.path(L)), B.ctx.shadowOffsetX = v.offsetX.number + U, B.ctx.shadowOffsetY = v.offsetY.number, B.ctx.shadowColor = Qe(v.color), B.ctx.shadowBlur = v.blur.number, B.ctx.fillStyle = v.inset ? Qe(v.color) : "rgba(0,0,0,1)", B.ctx.fill(), B.ctx.restore();
              }), p.label = 2;
            case 2:
              l = 0, c = 0, f = o, p.label = 3;
            case 3:
              return c < f.length ? (g = f[c], g.style !== 0 && !Vr(g.color) && g.width > 0 ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                g.color,
                g.width,
                l,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return p.sent(), [3, 11];
            case 5:
              return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                g.color,
                g.width,
                l,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return p.sent(), [3, 11];
            case 7:
              return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, l, t.curves)];
            case 8:
              return p.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(g.color, l, t.curves)];
            case 10:
              p.sent(), p.label = 11;
            case 11:
              l++, p.label = 12;
            case 12:
              return c++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, n, r, o, s) {
      return $e(this, void 0, void 0, function() {
        var l, c, f, g, B, p, v, F, U, L, m, w, y, I, H, S, H, S;
        return Re(this, function(O) {
          return this.ctx.save(), l = UN(o, r), c = n1(o, r), s === 2 && (this.path(c), this.ctx.clip()), Rt(c[0]) ? (f = c[0].start.x, g = c[0].start.y) : (f = c[0].x, g = c[0].y), Rt(c[1]) ? (B = c[1].end.x, p = c[1].end.y) : (B = c[1].x, p = c[1].y), r === 0 || r === 2 ? v = Math.abs(f - B) : v = Math.abs(g - p), this.ctx.beginPath(), s === 3 ? this.formatPath(l) : this.formatPath(c.slice(0, 2)), F = n < 3 ? n * 3 : n * 2, U = n < 3 ? n * 2 : n, s === 3 && (F = n, U = n), L = !0, v <= F * 2 ? L = !1 : v <= F * 2 + U ? (m = v / (2 * F + U), F *= m, U *= m) : (w = Math.floor((v + U) / (F + U)), y = (v - w * F) / (w - 1), I = (v - (w + 1) * F) / w, U = I <= 0 || Math.abs(U - y) < Math.abs(U - I) ? y : I), L && (s === 3 ? this.ctx.setLineDash([0, F + U]) : this.ctx.setLineDash([F, U])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = n * 2 + 1.1, this.ctx.strokeStyle = Qe(t), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (Rt(c[0]) && (H = c[3], S = c[0], this.ctx.beginPath(), this.formatPath([new Y(H.end.x, H.end.y), new Y(S.start.x, S.start.y)]), this.ctx.stroke()), Rt(c[1]) && (H = c[1], S = c[2], this.ctx.beginPath(), this.formatPath([new Y(H.end.x, H.end.y), new Y(S.start.x, S.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return $e(this, void 0, void 0, function() {
        var n;
        return Re(this, function(r) {
          switch (r.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = Qe(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = QN(t), [4, this.renderStack(n)];
            case 1:
              return r.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(vE)
), TN = function(A) {
  return A instanceof tE || A instanceof eE ? !0 : A instanceof Pw && A.type !== lf && A.type !== sf;
}, ON = function(A, e) {
  switch (A) {
    case 0:
      return ff(e);
    case 2:
      return pN(e);
    case 1:
    default:
      return df(e);
  }
}, DN = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, kN = ["-apple-system", "system-ui"], RN = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return kN.indexOf(e) === -1;
  }) : A;
}, KN = (
  /** @class */
  function(A) {
    gn(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), r.options = n, r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px", r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), r;
    }
    return e.prototype.render = function(t) {
      return $e(this, void 0, void 0, function() {
        var n, r;
        return Re(this, function(o) {
          switch (o.label) {
            case 0:
              return n = th(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, MN(n)];
            case 1:
              return r = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Qe(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(vE)
), MN = function(A) {
  return new Promise(function(e, t) {
    var n = new Image();
    n.onload = function() {
      e(n);
    }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, NN = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, n = e.enabled;
      this.id = t, this.enabled = n, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Hu([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Hu([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Hu([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Hu([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), PN = (
  /** @class */
  function() {
    function A(e, t) {
      var n;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new NN({ id: this.instanceName, enabled: e.logging }), this.cache = (n = e.cache) !== null && n !== void 0 ? n : new sN(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), GN = function(A, e) {
  return e === void 0 && (e = {}), VN(A, e);
};
typeof window < "u" && dE.setContext(window);
var VN = function(A, e) {
  return $e(void 0, void 0, void 0, function() {
    var t, n, r, o, s, l, c, f, g, B, p, v, F, U, L, m, w, y, I, H, O, S, O, k, N, W, sA, iA, tA, lA, mA, fA, J, P, V, X, j, BA, OA, GA;
    return Re(this, function(LA) {
      switch (LA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (n = t.defaultView, !n)
            throw new Error("Document is not attached to a Window");
          return r = {
            allowTaint: (k = e.allowTaint) !== null && k !== void 0 ? k : !1,
            imageTimeout: (N = e.imageTimeout) !== null && N !== void 0 ? N : 15e3,
            proxy: e.proxy,
            useCORS: (W = e.useCORS) !== null && W !== void 0 ? W : !1
          }, o = Np({ logging: (sA = e.logging) !== null && sA !== void 0 ? sA : !0, cache: e.cache }, r), s = {
            windowWidth: (iA = e.windowWidth) !== null && iA !== void 0 ? iA : n.innerWidth,
            windowHeight: (tA = e.windowHeight) !== null && tA !== void 0 ? tA : n.innerHeight,
            scrollX: (lA = e.scrollX) !== null && lA !== void 0 ? lA : n.pageXOffset,
            scrollY: (mA = e.scrollY) !== null && mA !== void 0 ? mA : n.pageYOffset
          }, l = new nr(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight), c = new PN(o, l), f = (fA = e.foreignObjectRendering) !== null && fA !== void 0 ? fA : !1, g = {
            allowTaint: (J = e.allowTaint) !== null && J !== void 0 ? J : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: f,
            copyStyles: f
          }, c.logger.debug("Starting document clone with size " + l.width + "x" + l.height + " scrolled to " + -l.left + "," + -l.top), B = new A1(c, A, g), p = B.clonedReferenceElement, p ? [4, B.toIFrame(t, l)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return v = LA.sent(), F = Gw(p) || $M(p) ? CD(p.ownerDocument) : $f(c, p), U = F.width, L = F.height, m = F.left, w = F.top, y = $N(c, p, e.backgroundColor), I = {
            canvas: e.canvas,
            backgroundColor: y,
            scale: (V = (P = e.scale) !== null && P !== void 0 ? P : n.devicePixelRatio) !== null && V !== void 0 ? V : 1,
            x: ((X = e.x) !== null && X !== void 0 ? X : 0) + m,
            y: ((j = e.y) !== null && j !== void 0 ? j : 0) + w,
            width: (BA = e.width) !== null && BA !== void 0 ? BA : Math.ceil(U),
            height: (OA = e.height) !== null && OA !== void 0 ? OA : Math.ceil(L)
          }, f ? (c.logger.debug("Document cloned, using foreign object rendering"), O = new KN(c, I), [4, O.render(p)]) : [3, 3];
        case 2:
          return H = LA.sent(), [3, 5];
        case 3:
          return c.logger.debug("Document cloned, element located at " + m + "," + w + " with size " + U + "x" + L + " using computed rendering"), c.logger.debug("Starting DOM parsing"), S = iE(c, p), y === S.styles.backgroundColor && (S.styles.backgroundColor = jn.TRANSPARENT), c.logger.debug("Starting renderer for element at " + I.x + "," + I.y + " with size " + I.width + "x" + I.height), O = new _N(c, I), [4, O.render(S)];
        case 4:
          H = LA.sent(), LA.label = 5;
        case 5:
          return (!((GA = e.removeContainer) !== null && GA !== void 0) || GA) && (A1.destroy(v) || c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), c.logger.debug("Finished rendering"), [2, H];
      }
    });
  });
}, $N = function(A, e, t) {
  var n = e.ownerDocument, r = n.documentElement ? Qs(A, getComputedStyle(n.documentElement).backgroundColor) : jn.TRANSPARENT, o = n.body ? Qs(A, getComputedStyle(n.body).backgroundColor) : jn.TRANSPARENT, s = typeof t == "string" ? Qs(A, t) : t === null ? jn.TRANSPARENT : 4294967295;
  return e === n.documentElement ? Vr(r) ? Vr(o) ? s : o : r : s;
}, Bf = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Bf.exports;
(function(A, e) {
  (function() {
    var t, n = "4.17.21", r = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", l = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", f = 500, g = "__lodash_placeholder__", B = 1, p = 2, v = 4, F = 1, U = 2, L = 1, m = 2, w = 4, y = 8, I = 16, H = 32, S = 64, O = 128, k = 256, N = 512, W = 30, sA = "...", iA = 800, tA = 16, lA = 1, mA = 2, fA = 3, J = 1 / 0, P = 9007199254740991, V = 17976931348623157e292, X = NaN, j = 4294967295, BA = j - 1, OA = j >>> 1, GA = [
      ["ary", O],
      ["bind", L],
      ["bindKey", m],
      ["curry", y],
      ["curryRight", I],
      ["flip", N],
      ["partial", H],
      ["partialRight", S],
      ["rearg", k]
    ], LA = "[object Arguments]", HA = "[object Array]", Ee = "[object AsyncFunction]", Xt = "[object Boolean]", ut = "[object Date]", ha = "[object DOMException]", Ln = "[object Error]", ct = "[object Function]", C0 = "[object GeneratorFunction]", zt = "[object Map]", wa = "[object Number]", cx = "[object Null]", bn = "[object Object]", Q0 = "[object Promise]", fx = "[object Proxy]", va = "[object RegExp]", Yt = "[object Set]", ma = "[object String]", yl = "[object Symbol]", dx = "[object Undefined]", Ca = "[object WeakMap]", gx = "[object WeakSet]", Qa = "[object ArrayBuffer]", Xi = "[object DataView]", md = "[object Float32Array]", Cd = "[object Float64Array]", Qd = "[object Int8Array]", yd = "[object Int16Array]", Fd = "[object Int32Array]", Ud = "[object Uint8Array]", Ed = "[object Uint8ClampedArray]", Id = "[object Uint16Array]", xd = "[object Uint32Array]", Bx = /\b__p \+= '';/g, px = /\b(__p \+=) '' \+/g, hx = /(__e\(.*?\)|\b__t\)) \+\n'';/g, y0 = /&(?:amp|lt|gt|quot|#39);/g, F0 = /[&<>"']/g, wx = RegExp(y0.source), vx = RegExp(F0.source), mx = /<%-([\s\S]+?)%>/g, Cx = /<%([\s\S]+?)%>/g, U0 = /<%=([\s\S]+?)%>/g, Qx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yx = /^\w*$/, Fx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hd = /[\\^$.*+?()[\]{}|]/g, Ux = RegExp(Hd.source), Sd = /^\s+/, Ex = /\s/, Ix = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, xx = /\{\n\/\* \[wrapped with (.+)\] \*/, Hx = /,? & /, Sx = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Lx = /[()=,{}\[\]\/\s]/, bx = /\\(\\)?/g, _x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, E0 = /\w*$/, Tx = /^[-+]0x[0-9a-f]+$/i, Ox = /^0b[01]+$/i, Dx = /^\[object .+?Constructor\]$/, kx = /^0o[0-7]+$/i, Rx = /^(?:0|[1-9]\d*)$/, Kx = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fl = /($^)/, Mx = /['\n\r\u2028\u2029\\]/g, Ul = "\\ud800-\\udfff", Nx = "\\u0300-\\u036f", Px = "\\ufe20-\\ufe2f", Gx = "\\u20d0-\\u20ff", I0 = Nx + Px + Gx, x0 = "\\u2700-\\u27bf", H0 = "a-z\\xdf-\\xf6\\xf8-\\xff", Vx = "\\xac\\xb1\\xd7\\xf7", $x = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Wx = "\\u2000-\\u206f", Xx = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", S0 = "A-Z\\xc0-\\xd6\\xd8-\\xde", L0 = "\\ufe0e\\ufe0f", b0 = Vx + $x + Wx + Xx, Ld = "['’]", zx = "[" + Ul + "]", _0 = "[" + b0 + "]", El = "[" + I0 + "]", T0 = "\\d+", Yx = "[" + x0 + "]", O0 = "[" + H0 + "]", D0 = "[^" + Ul + b0 + T0 + x0 + H0 + S0 + "]", bd = "\\ud83c[\\udffb-\\udfff]", Jx = "(?:" + El + "|" + bd + ")", k0 = "[^" + Ul + "]", _d = "(?:\\ud83c[\\udde6-\\uddff]){2}", Td = "[\\ud800-\\udbff][\\udc00-\\udfff]", zi = "[" + S0 + "]", R0 = "\\u200d", K0 = "(?:" + O0 + "|" + D0 + ")", jx = "(?:" + zi + "|" + D0 + ")", M0 = "(?:" + Ld + "(?:d|ll|m|re|s|t|ve))?", N0 = "(?:" + Ld + "(?:D|LL|M|RE|S|T|VE))?", P0 = Jx + "?", G0 = "[" + L0 + "]?", Zx = "(?:" + R0 + "(?:" + [k0, _d, Td].join("|") + ")" + G0 + P0 + ")*", qx = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", AH = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", V0 = G0 + P0 + Zx, eH = "(?:" + [Yx, _d, Td].join("|") + ")" + V0, tH = "(?:" + [k0 + El + "?", El, _d, Td, zx].join("|") + ")", nH = RegExp(Ld, "g"), rH = RegExp(El, "g"), Od = RegExp(bd + "(?=" + bd + ")|" + tH + V0, "g"), iH = RegExp([
      zi + "?" + O0 + "+" + M0 + "(?=" + [_0, zi, "$"].join("|") + ")",
      jx + "+" + N0 + "(?=" + [_0, zi + K0, "$"].join("|") + ")",
      zi + "?" + K0 + "+" + M0,
      zi + "+" + N0,
      AH,
      qx,
      T0,
      eH
    ].join("|"), "g"), oH = RegExp("[" + R0 + Ul + I0 + L0 + "]"), aH = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, sH = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], lH = -1, VA = {};
    VA[md] = VA[Cd] = VA[Qd] = VA[yd] = VA[Fd] = VA[Ud] = VA[Ed] = VA[Id] = VA[xd] = !0, VA[LA] = VA[HA] = VA[Qa] = VA[Xt] = VA[Xi] = VA[ut] = VA[Ln] = VA[ct] = VA[zt] = VA[wa] = VA[bn] = VA[va] = VA[Yt] = VA[ma] = VA[Ca] = !1;
    var MA = {};
    MA[LA] = MA[HA] = MA[Qa] = MA[Xi] = MA[Xt] = MA[ut] = MA[md] = MA[Cd] = MA[Qd] = MA[yd] = MA[Fd] = MA[zt] = MA[wa] = MA[bn] = MA[va] = MA[Yt] = MA[ma] = MA[yl] = MA[Ud] = MA[Ed] = MA[Id] = MA[xd] = !0, MA[Ln] = MA[ct] = MA[Ca] = !1;
    var uH = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, cH = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, fH = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, dH = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, gH = parseFloat, BH = parseInt, $0 = typeof Ra == "object" && Ra && Ra.Object === Object && Ra, pH = typeof self == "object" && self && self.Object === Object && self, Ie = $0 || pH || Function("return this")(), Dd = e && !e.nodeType && e, ii = Dd && !0 && A && !A.nodeType && A, W0 = ii && ii.exports === Dd, kd = W0 && $0.process, It = function() {
      try {
        var _ = ii && ii.require && ii.require("util").types;
        return _ || kd && kd.binding && kd.binding("util");
      } catch {
      }
    }(), X0 = It && It.isArrayBuffer, z0 = It && It.isDate, Y0 = It && It.isMap, J0 = It && It.isRegExp, j0 = It && It.isSet, Z0 = It && It.isTypedArray;
    function ft(_, R, D) {
      switch (D.length) {
        case 0:
          return _.call(R);
        case 1:
          return _.call(R, D[0]);
        case 2:
          return _.call(R, D[0], D[1]);
        case 3:
          return _.call(R, D[0], D[1], D[2]);
      }
      return _.apply(R, D);
    }
    function hH(_, R, D, q) {
      for (var dA = -1, SA = _ == null ? 0 : _.length; ++dA < SA; ) {
        var Be = _[dA];
        R(q, Be, D(Be), _);
      }
      return q;
    }
    function xt(_, R) {
      for (var D = -1, q = _ == null ? 0 : _.length; ++D < q && R(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function wH(_, R) {
      for (var D = _ == null ? 0 : _.length; D-- && R(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function q0(_, R) {
      for (var D = -1, q = _ == null ? 0 : _.length; ++D < q; )
        if (!R(_[D], D, _))
          return !1;
      return !0;
    }
    function lr(_, R) {
      for (var D = -1, q = _ == null ? 0 : _.length, dA = 0, SA = []; ++D < q; ) {
        var Be = _[D];
        R(Be, D, _) && (SA[dA++] = Be);
      }
      return SA;
    }
    function Il(_, R) {
      var D = _ == null ? 0 : _.length;
      return !!D && Yi(_, R, 0) > -1;
    }
    function Rd(_, R, D) {
      for (var q = -1, dA = _ == null ? 0 : _.length; ++q < dA; )
        if (D(R, _[q]))
          return !0;
      return !1;
    }
    function JA(_, R) {
      for (var D = -1, q = _ == null ? 0 : _.length, dA = Array(q); ++D < q; )
        dA[D] = R(_[D], D, _);
      return dA;
    }
    function ur(_, R) {
      for (var D = -1, q = R.length, dA = _.length; ++D < q; )
        _[dA + D] = R[D];
      return _;
    }
    function Kd(_, R, D, q) {
      var dA = -1, SA = _ == null ? 0 : _.length;
      for (q && SA && (D = _[++dA]); ++dA < SA; )
        D = R(D, _[dA], dA, _);
      return D;
    }
    function vH(_, R, D, q) {
      var dA = _ == null ? 0 : _.length;
      for (q && dA && (D = _[--dA]); dA--; )
        D = R(D, _[dA], dA, _);
      return D;
    }
    function Md(_, R) {
      for (var D = -1, q = _ == null ? 0 : _.length; ++D < q; )
        if (R(_[D], D, _))
          return !0;
      return !1;
    }
    var mH = Nd("length");
    function CH(_) {
      return _.split("");
    }
    function QH(_) {
      return _.match(Sx) || [];
    }
    function Av(_, R, D) {
      var q;
      return D(_, function(dA, SA, Be) {
        if (R(dA, SA, Be))
          return q = SA, !1;
      }), q;
    }
    function xl(_, R, D, q) {
      for (var dA = _.length, SA = D + (q ? 1 : -1); q ? SA-- : ++SA < dA; )
        if (R(_[SA], SA, _))
          return SA;
      return -1;
    }
    function Yi(_, R, D) {
      return R === R ? TH(_, R, D) : xl(_, ev, D);
    }
    function yH(_, R, D, q) {
      for (var dA = D - 1, SA = _.length; ++dA < SA; )
        if (q(_[dA], R))
          return dA;
      return -1;
    }
    function ev(_) {
      return _ !== _;
    }
    function tv(_, R) {
      var D = _ == null ? 0 : _.length;
      return D ? Gd(_, R) / D : X;
    }
    function Nd(_) {
      return function(R) {
        return R == null ? t : R[_];
      };
    }
    function Pd(_) {
      return function(R) {
        return _ == null ? t : _[R];
      };
    }
    function nv(_, R, D, q, dA) {
      return dA(_, function(SA, Be, KA) {
        D = q ? (q = !1, SA) : R(D, SA, Be, KA);
      }), D;
    }
    function FH(_, R) {
      var D = _.length;
      for (_.sort(R); D--; )
        _[D] = _[D].value;
      return _;
    }
    function Gd(_, R) {
      for (var D, q = -1, dA = _.length; ++q < dA; ) {
        var SA = R(_[q]);
        SA !== t && (D = D === t ? SA : D + SA);
      }
      return D;
    }
    function Vd(_, R) {
      for (var D = -1, q = Array(_); ++D < _; )
        q[D] = R(D);
      return q;
    }
    function UH(_, R) {
      return JA(R, function(D) {
        return [D, _[D]];
      });
    }
    function rv(_) {
      return _ && _.slice(0, sv(_) + 1).replace(Sd, "");
    }
    function dt(_) {
      return function(R) {
        return _(R);
      };
    }
    function $d(_, R) {
      return JA(R, function(D) {
        return _[D];
      });
    }
    function ya(_, R) {
      return _.has(R);
    }
    function iv(_, R) {
      for (var D = -1, q = _.length; ++D < q && Yi(R, _[D], 0) > -1; )
        ;
      return D;
    }
    function ov(_, R) {
      for (var D = _.length; D-- && Yi(R, _[D], 0) > -1; )
        ;
      return D;
    }
    function EH(_, R) {
      for (var D = _.length, q = 0; D--; )
        _[D] === R && ++q;
      return q;
    }
    var IH = Pd(uH), xH = Pd(cH);
    function HH(_) {
      return "\\" + dH[_];
    }
    function SH(_, R) {
      return _ == null ? t : _[R];
    }
    function Ji(_) {
      return oH.test(_);
    }
    function LH(_) {
      return aH.test(_);
    }
    function bH(_) {
      for (var R, D = []; !(R = _.next()).done; )
        D.push(R.value);
      return D;
    }
    function Wd(_) {
      var R = -1, D = Array(_.size);
      return _.forEach(function(q, dA) {
        D[++R] = [dA, q];
      }), D;
    }
    function av(_, R) {
      return function(D) {
        return _(R(D));
      };
    }
    function cr(_, R) {
      for (var D = -1, q = _.length, dA = 0, SA = []; ++D < q; ) {
        var Be = _[D];
        (Be === R || Be === g) && (_[D] = g, SA[dA++] = D);
      }
      return SA;
    }
    function Hl(_) {
      var R = -1, D = Array(_.size);
      return _.forEach(function(q) {
        D[++R] = q;
      }), D;
    }
    function _H(_) {
      var R = -1, D = Array(_.size);
      return _.forEach(function(q) {
        D[++R] = [q, q];
      }), D;
    }
    function TH(_, R, D) {
      for (var q = D - 1, dA = _.length; ++q < dA; )
        if (_[q] === R)
          return q;
      return -1;
    }
    function OH(_, R, D) {
      for (var q = D + 1; q--; )
        if (_[q] === R)
          return q;
      return q;
    }
    function ji(_) {
      return Ji(_) ? kH(_) : mH(_);
    }
    function Jt(_) {
      return Ji(_) ? RH(_) : CH(_);
    }
    function sv(_) {
      for (var R = _.length; R-- && Ex.test(_.charAt(R)); )
        ;
      return R;
    }
    var DH = Pd(fH);
    function kH(_) {
      for (var R = Od.lastIndex = 0; Od.test(_); )
        ++R;
      return R;
    }
    function RH(_) {
      return _.match(Od) || [];
    }
    function KH(_) {
      return _.match(iH) || [];
    }
    var MH = function _(R) {
      R = R == null ? Ie : Zi.defaults(Ie.Object(), R, Zi.pick(Ie, sH));
      var D = R.Array, q = R.Date, dA = R.Error, SA = R.Function, Be = R.Math, KA = R.Object, Xd = R.RegExp, NH = R.String, Ht = R.TypeError, Sl = D.prototype, PH = SA.prototype, qi = KA.prototype, Ll = R["__core-js_shared__"], bl = PH.toString, DA = qi.hasOwnProperty, GH = 0, lv = function() {
        var i = /[^.]+$/.exec(Ll && Ll.keys && Ll.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), _l = qi.toString, VH = bl.call(KA), $H = Ie._, WH = Xd(
        "^" + bl.call(DA).replace(Hd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Tl = W0 ? R.Buffer : t, fr = R.Symbol, Ol = R.Uint8Array, uv = Tl ? Tl.allocUnsafe : t, Dl = av(KA.getPrototypeOf, KA), cv = KA.create, fv = qi.propertyIsEnumerable, kl = Sl.splice, dv = fr ? fr.isConcatSpreadable : t, Fa = fr ? fr.iterator : t, oi = fr ? fr.toStringTag : t, Rl = function() {
        try {
          var i = ci(KA, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), XH = R.clearTimeout !== Ie.clearTimeout && R.clearTimeout, zH = q && q.now !== Ie.Date.now && q.now, YH = R.setTimeout !== Ie.setTimeout && R.setTimeout, Kl = Be.ceil, Ml = Be.floor, zd = KA.getOwnPropertySymbols, JH = Tl ? Tl.isBuffer : t, gv = R.isFinite, jH = Sl.join, ZH = av(KA.keys, KA), pe = Be.max, Te = Be.min, qH = q.now, AS = R.parseInt, Bv = Be.random, eS = Sl.reverse, Yd = ci(R, "DataView"), Ua = ci(R, "Map"), Jd = ci(R, "Promise"), Ao = ci(R, "Set"), Ea = ci(R, "WeakMap"), Ia = ci(KA, "create"), Nl = Ea && new Ea(), eo = {}, tS = fi(Yd), nS = fi(Ua), rS = fi(Jd), iS = fi(Ao), oS = fi(Ea), Pl = fr ? fr.prototype : t, xa = Pl ? Pl.valueOf : t, pv = Pl ? Pl.toString : t;
      function C(i) {
        if (re(i) && !gA(i) && !(i instanceof FA)) {
          if (i instanceof St)
            return i;
          if (DA.call(i, "__wrapped__"))
            return hm(i);
        }
        return new St(i);
      }
      var to = /* @__PURE__ */ function() {
        function i() {
        }
        return function(a) {
          if (!qA(a))
            return {};
          if (cv)
            return cv(a);
          i.prototype = a;
          var u = new i();
          return i.prototype = t, u;
        };
      }();
      function Gl() {
      }
      function St(i, a) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = t;
      }
      C.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: mx,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Cx,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: U0,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: C
        }
      }, C.prototype = Gl.prototype, C.prototype.constructor = C, St.prototype = to(Gl.prototype), St.prototype.constructor = St;
      function FA(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = j, this.__views__ = [];
      }
      function aS() {
        var i = new FA(this.__wrapped__);
        return i.__actions__ = je(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = je(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = je(this.__views__), i;
      }
      function sS() {
        if (this.__filtered__) {
          var i = new FA(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function lS() {
        var i = this.__wrapped__.value(), a = this.__dir__, u = gA(i), d = a < 0, h = u ? i.length : 0, Q = C4(0, h, this.__views__), E = Q.start, x = Q.end, T = x - E, K = d ? x : E - 1, M = this.__iteratees__, G = M.length, z = 0, nA = Te(T, this.__takeCount__);
        if (!u || !d && h == T && nA == T)
          return Mv(i, this.__actions__);
        var uA = [];
        A:
          for (; T-- && z < nA; ) {
            K += a;
            for (var hA = -1, cA = i[K]; ++hA < G; ) {
              var CA = M[hA], EA = CA.iteratee, pt = CA.type, Ve = EA(cA);
              if (pt == mA)
                cA = Ve;
              else if (!Ve) {
                if (pt == lA)
                  continue A;
                break A;
              }
            }
            uA[z++] = cA;
          }
        return uA;
      }
      FA.prototype = to(Gl.prototype), FA.prototype.constructor = FA;
      function ai(i) {
        var a = -1, u = i == null ? 0 : i.length;
        for (this.clear(); ++a < u; ) {
          var d = i[a];
          this.set(d[0], d[1]);
        }
      }
      function uS() {
        this.__data__ = Ia ? Ia(null) : {}, this.size = 0;
      }
      function cS(i) {
        var a = this.has(i) && delete this.__data__[i];
        return this.size -= a ? 1 : 0, a;
      }
      function fS(i) {
        var a = this.__data__;
        if (Ia) {
          var u = a[i];
          return u === c ? t : u;
        }
        return DA.call(a, i) ? a[i] : t;
      }
      function dS(i) {
        var a = this.__data__;
        return Ia ? a[i] !== t : DA.call(a, i);
      }
      function gS(i, a) {
        var u = this.__data__;
        return this.size += this.has(i) ? 0 : 1, u[i] = Ia && a === t ? c : a, this;
      }
      ai.prototype.clear = uS, ai.prototype.delete = cS, ai.prototype.get = fS, ai.prototype.has = dS, ai.prototype.set = gS;
      function _n(i) {
        var a = -1, u = i == null ? 0 : i.length;
        for (this.clear(); ++a < u; ) {
          var d = i[a];
          this.set(d[0], d[1]);
        }
      }
      function BS() {
        this.__data__ = [], this.size = 0;
      }
      function pS(i) {
        var a = this.__data__, u = Vl(a, i);
        if (u < 0)
          return !1;
        var d = a.length - 1;
        return u == d ? a.pop() : kl.call(a, u, 1), --this.size, !0;
      }
      function hS(i) {
        var a = this.__data__, u = Vl(a, i);
        return u < 0 ? t : a[u][1];
      }
      function wS(i) {
        return Vl(this.__data__, i) > -1;
      }
      function vS(i, a) {
        var u = this.__data__, d = Vl(u, i);
        return d < 0 ? (++this.size, u.push([i, a])) : u[d][1] = a, this;
      }
      _n.prototype.clear = BS, _n.prototype.delete = pS, _n.prototype.get = hS, _n.prototype.has = wS, _n.prototype.set = vS;
      function Tn(i) {
        var a = -1, u = i == null ? 0 : i.length;
        for (this.clear(); ++a < u; ) {
          var d = i[a];
          this.set(d[0], d[1]);
        }
      }
      function mS() {
        this.size = 0, this.__data__ = {
          hash: new ai(),
          map: new (Ua || _n)(),
          string: new ai()
        };
      }
      function CS(i) {
        var a = tu(this, i).delete(i);
        return this.size -= a ? 1 : 0, a;
      }
      function QS(i) {
        return tu(this, i).get(i);
      }
      function yS(i) {
        return tu(this, i).has(i);
      }
      function FS(i, a) {
        var u = tu(this, i), d = u.size;
        return u.set(i, a), this.size += u.size == d ? 0 : 1, this;
      }
      Tn.prototype.clear = mS, Tn.prototype.delete = CS, Tn.prototype.get = QS, Tn.prototype.has = yS, Tn.prototype.set = FS;
      function si(i) {
        var a = -1, u = i == null ? 0 : i.length;
        for (this.__data__ = new Tn(); ++a < u; )
          this.add(i[a]);
      }
      function US(i) {
        return this.__data__.set(i, c), this;
      }
      function ES(i) {
        return this.__data__.has(i);
      }
      si.prototype.add = si.prototype.push = US, si.prototype.has = ES;
      function jt(i) {
        var a = this.__data__ = new _n(i);
        this.size = a.size;
      }
      function IS() {
        this.__data__ = new _n(), this.size = 0;
      }
      function xS(i) {
        var a = this.__data__, u = a.delete(i);
        return this.size = a.size, u;
      }
      function HS(i) {
        return this.__data__.get(i);
      }
      function SS(i) {
        return this.__data__.has(i);
      }
      function LS(i, a) {
        var u = this.__data__;
        if (u instanceof _n) {
          var d = u.__data__;
          if (!Ua || d.length < r - 1)
            return d.push([i, a]), this.size = ++u.size, this;
          u = this.__data__ = new Tn(d);
        }
        return u.set(i, a), this.size = u.size, this;
      }
      jt.prototype.clear = IS, jt.prototype.delete = xS, jt.prototype.get = HS, jt.prototype.has = SS, jt.prototype.set = LS;
      function hv(i, a) {
        var u = gA(i), d = !u && di(i), h = !u && !d && hr(i), Q = !u && !d && !h && oo(i), E = u || d || h || Q, x = E ? Vd(i.length, NH) : [], T = x.length;
        for (var K in i)
          (a || DA.call(i, K)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          Q && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
          Rn(K, T))) && x.push(K);
        return x;
      }
      function wv(i) {
        var a = i.length;
        return a ? i[ag(0, a - 1)] : t;
      }
      function bS(i, a) {
        return nu(je(i), li(a, 0, i.length));
      }
      function _S(i) {
        return nu(je(i));
      }
      function jd(i, a, u) {
        (u !== t && !Zt(i[a], u) || u === t && !(a in i)) && On(i, a, u);
      }
      function Ha(i, a, u) {
        var d = i[a];
        (!(DA.call(i, a) && Zt(d, u)) || u === t && !(a in i)) && On(i, a, u);
      }
      function Vl(i, a) {
        for (var u = i.length; u--; )
          if (Zt(i[u][0], a))
            return u;
        return -1;
      }
      function TS(i, a, u, d) {
        return dr(i, function(h, Q, E) {
          a(d, h, u(h), E);
        }), d;
      }
      function vv(i, a) {
        return i && pn(a, Ce(a), i);
      }
      function OS(i, a) {
        return i && pn(a, qe(a), i);
      }
      function On(i, a, u) {
        a == "__proto__" && Rl ? Rl(i, a, {
          configurable: !0,
          enumerable: !0,
          value: u,
          writable: !0
        }) : i[a] = u;
      }
      function Zd(i, a) {
        for (var u = -1, d = a.length, h = D(d), Q = i == null; ++u < d; )
          h[u] = Q ? t : bg(i, a[u]);
        return h;
      }
      function li(i, a, u) {
        return i === i && (u !== t && (i = i <= u ? i : u), a !== t && (i = i >= a ? i : a)), i;
      }
      function Lt(i, a, u, d, h, Q) {
        var E, x = a & B, T = a & p, K = a & v;
        if (u && (E = h ? u(i, d, h, Q) : u(i)), E !== t)
          return E;
        if (!qA(i))
          return i;
        var M = gA(i);
        if (M) {
          if (E = y4(i), !x)
            return je(i, E);
        } else {
          var G = Oe(i), z = G == ct || G == C0;
          if (hr(i))
            return Gv(i, x);
          if (G == bn || G == LA || z && !h) {
            if (E = T || z ? {} : sm(i), !x)
              return T ? f4(i, OS(E, i)) : c4(i, vv(E, i));
          } else {
            if (!MA[G])
              return h ? i : {};
            E = F4(i, G, x);
          }
        }
        Q || (Q = new jt());
        var nA = Q.get(i);
        if (nA)
          return nA;
        Q.set(i, E), km(i) ? i.forEach(function(cA) {
          E.add(Lt(cA, a, u, cA, i, Q));
        }) : Om(i) && i.forEach(function(cA, CA) {
          E.set(CA, Lt(cA, a, u, CA, i, Q));
        });
        var uA = K ? T ? wg : hg : T ? qe : Ce, hA = M ? t : uA(i);
        return xt(hA || i, function(cA, CA) {
          hA && (CA = cA, cA = i[CA]), Ha(E, CA, Lt(cA, a, u, CA, i, Q));
        }), E;
      }
      function DS(i) {
        var a = Ce(i);
        return function(u) {
          return mv(u, i, a);
        };
      }
      function mv(i, a, u) {
        var d = u.length;
        if (i == null)
          return !d;
        for (i = KA(i); d--; ) {
          var h = u[d], Q = a[h], E = i[h];
          if (E === t && !(h in i) || !Q(E))
            return !1;
        }
        return !0;
      }
      function Cv(i, a, u) {
        if (typeof i != "function")
          throw new Ht(s);
        return Da(function() {
          i.apply(t, u);
        }, a);
      }
      function Sa(i, a, u, d) {
        var h = -1, Q = Il, E = !0, x = i.length, T = [], K = a.length;
        if (!x)
          return T;
        u && (a = JA(a, dt(u))), d ? (Q = Rd, E = !1) : a.length >= r && (Q = ya, E = !1, a = new si(a));
        A:
          for (; ++h < x; ) {
            var M = i[h], G = u == null ? M : u(M);
            if (M = d || M !== 0 ? M : 0, E && G === G) {
              for (var z = K; z--; )
                if (a[z] === G)
                  continue A;
              T.push(M);
            } else Q(a, G, d) || T.push(M);
          }
        return T;
      }
      var dr = zv(Bn), Qv = zv(Ag, !0);
      function kS(i, a) {
        var u = !0;
        return dr(i, function(d, h, Q) {
          return u = !!a(d, h, Q), u;
        }), u;
      }
      function $l(i, a, u) {
        for (var d = -1, h = i.length; ++d < h; ) {
          var Q = i[d], E = a(Q);
          if (E != null && (x === t ? E === E && !Bt(E) : u(E, x)))
            var x = E, T = Q;
        }
        return T;
      }
      function RS(i, a, u, d) {
        var h = i.length;
        for (u = pA(u), u < 0 && (u = -u > h ? 0 : h + u), d = d === t || d > h ? h : pA(d), d < 0 && (d += h), d = u > d ? 0 : Km(d); u < d; )
          i[u++] = a;
        return i;
      }
      function yv(i, a) {
        var u = [];
        return dr(i, function(d, h, Q) {
          a(d, h, Q) && u.push(d);
        }), u;
      }
      function xe(i, a, u, d, h) {
        var Q = -1, E = i.length;
        for (u || (u = E4), h || (h = []); ++Q < E; ) {
          var x = i[Q];
          a > 0 && u(x) ? a > 1 ? xe(x, a - 1, u, d, h) : ur(h, x) : d || (h[h.length] = x);
        }
        return h;
      }
      var qd = Yv(), Fv = Yv(!0);
      function Bn(i, a) {
        return i && qd(i, a, Ce);
      }
      function Ag(i, a) {
        return i && Fv(i, a, Ce);
      }
      function Wl(i, a) {
        return lr(a, function(u) {
          return Kn(i[u]);
        });
      }
      function ui(i, a) {
        a = Br(a, i);
        for (var u = 0, d = a.length; i != null && u < d; )
          i = i[hn(a[u++])];
        return u && u == d ? i : t;
      }
      function Uv(i, a, u) {
        var d = a(i);
        return gA(i) ? d : ur(d, u(i));
      }
      function Pe(i) {
        return i == null ? i === t ? dx : cx : oi && oi in KA(i) ? m4(i) : _4(i);
      }
      function eg(i, a) {
        return i > a;
      }
      function KS(i, a) {
        return i != null && DA.call(i, a);
      }
      function MS(i, a) {
        return i != null && a in KA(i);
      }
      function NS(i, a, u) {
        return i >= Te(a, u) && i < pe(a, u);
      }
      function tg(i, a, u) {
        for (var d = u ? Rd : Il, h = i[0].length, Q = i.length, E = Q, x = D(Q), T = 1 / 0, K = []; E--; ) {
          var M = i[E];
          E && a && (M = JA(M, dt(a))), T = Te(M.length, T), x[E] = !u && (a || h >= 120 && M.length >= 120) ? new si(E && M) : t;
        }
        M = i[0];
        var G = -1, z = x[0];
        A:
          for (; ++G < h && K.length < T; ) {
            var nA = M[G], uA = a ? a(nA) : nA;
            if (nA = u || nA !== 0 ? nA : 0, !(z ? ya(z, uA) : d(K, uA, u))) {
              for (E = Q; --E; ) {
                var hA = x[E];
                if (!(hA ? ya(hA, uA) : d(i[E], uA, u)))
                  continue A;
              }
              z && z.push(uA), K.push(nA);
            }
          }
        return K;
      }
      function PS(i, a, u, d) {
        return Bn(i, function(h, Q, E) {
          a(d, u(h), Q, E);
        }), d;
      }
      function La(i, a, u) {
        a = Br(a, i), i = fm(i, a);
        var d = i == null ? i : i[hn(_t(a))];
        return d == null ? t : ft(d, i, u);
      }
      function Ev(i) {
        return re(i) && Pe(i) == LA;
      }
      function GS(i) {
        return re(i) && Pe(i) == Qa;
      }
      function VS(i) {
        return re(i) && Pe(i) == ut;
      }
      function ba(i, a, u, d, h) {
        return i === a ? !0 : i == null || a == null || !re(i) && !re(a) ? i !== i && a !== a : $S(i, a, u, d, ba, h);
      }
      function $S(i, a, u, d, h, Q) {
        var E = gA(i), x = gA(a), T = E ? HA : Oe(i), K = x ? HA : Oe(a);
        T = T == LA ? bn : T, K = K == LA ? bn : K;
        var M = T == bn, G = K == bn, z = T == K;
        if (z && hr(i)) {
          if (!hr(a))
            return !1;
          E = !0, M = !1;
        }
        if (z && !M)
          return Q || (Q = new jt()), E || oo(i) ? im(i, a, u, d, h, Q) : w4(i, a, T, u, d, h, Q);
        if (!(u & F)) {
          var nA = M && DA.call(i, "__wrapped__"), uA = G && DA.call(a, "__wrapped__");
          if (nA || uA) {
            var hA = nA ? i.value() : i, cA = uA ? a.value() : a;
            return Q || (Q = new jt()), h(hA, cA, u, d, Q);
          }
        }
        return z ? (Q || (Q = new jt()), v4(i, a, u, d, h, Q)) : !1;
      }
      function WS(i) {
        return re(i) && Oe(i) == zt;
      }
      function ng(i, a, u, d) {
        var h = u.length, Q = h, E = !d;
        if (i == null)
          return !Q;
        for (i = KA(i); h--; ) {
          var x = u[h];
          if (E && x[2] ? x[1] !== i[x[0]] : !(x[0] in i))
            return !1;
        }
        for (; ++h < Q; ) {
          x = u[h];
          var T = x[0], K = i[T], M = x[1];
          if (E && x[2]) {
            if (K === t && !(T in i))
              return !1;
          } else {
            var G = new jt();
            if (d)
              var z = d(K, M, T, i, a, G);
            if (!(z === t ? ba(M, K, F | U, d, G) : z))
              return !1;
          }
        }
        return !0;
      }
      function Iv(i) {
        if (!qA(i) || x4(i))
          return !1;
        var a = Kn(i) ? WH : Dx;
        return a.test(fi(i));
      }
      function XS(i) {
        return re(i) && Pe(i) == va;
      }
      function zS(i) {
        return re(i) && Oe(i) == Yt;
      }
      function YS(i) {
        return re(i) && lu(i.length) && !!VA[Pe(i)];
      }
      function xv(i) {
        return typeof i == "function" ? i : i == null ? At : typeof i == "object" ? gA(i) ? Lv(i[0], i[1]) : Sv(i) : Jm(i);
      }
      function rg(i) {
        if (!Oa(i))
          return ZH(i);
        var a = [];
        for (var u in KA(i))
          DA.call(i, u) && u != "constructor" && a.push(u);
        return a;
      }
      function JS(i) {
        if (!qA(i))
          return b4(i);
        var a = Oa(i), u = [];
        for (var d in i)
          d == "constructor" && (a || !DA.call(i, d)) || u.push(d);
        return u;
      }
      function ig(i, a) {
        return i < a;
      }
      function Hv(i, a) {
        var u = -1, d = Ze(i) ? D(i.length) : [];
        return dr(i, function(h, Q, E) {
          d[++u] = a(h, Q, E);
        }), d;
      }
      function Sv(i) {
        var a = mg(i);
        return a.length == 1 && a[0][2] ? um(a[0][0], a[0][1]) : function(u) {
          return u === i || ng(u, i, a);
        };
      }
      function Lv(i, a) {
        return Qg(i) && lm(a) ? um(hn(i), a) : function(u) {
          var d = bg(u, i);
          return d === t && d === a ? _g(u, i) : ba(a, d, F | U);
        };
      }
      function Xl(i, a, u, d, h) {
        i !== a && qd(a, function(Q, E) {
          if (h || (h = new jt()), qA(Q))
            jS(i, a, E, u, Xl, d, h);
          else {
            var x = d ? d(Fg(i, E), Q, E + "", i, a, h) : t;
            x === t && (x = Q), jd(i, E, x);
          }
        }, qe);
      }
      function jS(i, a, u, d, h, Q, E) {
        var x = Fg(i, u), T = Fg(a, u), K = E.get(T);
        if (K) {
          jd(i, u, K);
          return;
        }
        var M = Q ? Q(x, T, u + "", i, a, E) : t, G = M === t;
        if (G) {
          var z = gA(T), nA = !z && hr(T), uA = !z && !nA && oo(T);
          M = T, z || nA || uA ? gA(x) ? M = x : ae(x) ? M = je(x) : nA ? (G = !1, M = Gv(T, !0)) : uA ? (G = !1, M = Vv(T, !0)) : M = [] : ka(T) || di(T) ? (M = x, di(x) ? M = Mm(x) : (!qA(x) || Kn(x)) && (M = sm(T))) : G = !1;
        }
        G && (E.set(T, M), h(M, T, d, Q, E), E.delete(T)), jd(i, u, M);
      }
      function bv(i, a) {
        var u = i.length;
        if (u)
          return a += a < 0 ? u : 0, Rn(a, u) ? i[a] : t;
      }
      function _v(i, a, u) {
        a.length ? a = JA(a, function(Q) {
          return gA(Q) ? function(E) {
            return ui(E, Q.length === 1 ? Q[0] : Q);
          } : Q;
        }) : a = [At];
        var d = -1;
        a = JA(a, dt(aA()));
        var h = Hv(i, function(Q, E, x) {
          var T = JA(a, function(K) {
            return K(Q);
          });
          return { criteria: T, index: ++d, value: Q };
        });
        return FH(h, function(Q, E) {
          return u4(Q, E, u);
        });
      }
      function ZS(i, a) {
        return Tv(i, a, function(u, d) {
          return _g(i, d);
        });
      }
      function Tv(i, a, u) {
        for (var d = -1, h = a.length, Q = {}; ++d < h; ) {
          var E = a[d], x = ui(i, E);
          u(x, E) && _a(Q, Br(E, i), x);
        }
        return Q;
      }
      function qS(i) {
        return function(a) {
          return ui(a, i);
        };
      }
      function og(i, a, u, d) {
        var h = d ? yH : Yi, Q = -1, E = a.length, x = i;
        for (i === a && (a = je(a)), u && (x = JA(i, dt(u))); ++Q < E; )
          for (var T = 0, K = a[Q], M = u ? u(K) : K; (T = h(x, M, T, d)) > -1; )
            x !== i && kl.call(x, T, 1), kl.call(i, T, 1);
        return i;
      }
      function Ov(i, a) {
        for (var u = i ? a.length : 0, d = u - 1; u--; ) {
          var h = a[u];
          if (u == d || h !== Q) {
            var Q = h;
            Rn(h) ? kl.call(i, h, 1) : ug(i, h);
          }
        }
        return i;
      }
      function ag(i, a) {
        return i + Ml(Bv() * (a - i + 1));
      }
      function A4(i, a, u, d) {
        for (var h = -1, Q = pe(Kl((a - i) / (u || 1)), 0), E = D(Q); Q--; )
          E[d ? Q : ++h] = i, i += u;
        return E;
      }
      function sg(i, a) {
        var u = "";
        if (!i || a < 1 || a > P)
          return u;
        do
          a % 2 && (u += i), a = Ml(a / 2), a && (i += i);
        while (a);
        return u;
      }
      function vA(i, a) {
        return Ug(cm(i, a, At), i + "");
      }
      function e4(i) {
        return wv(ao(i));
      }
      function t4(i, a) {
        var u = ao(i);
        return nu(u, li(a, 0, u.length));
      }
      function _a(i, a, u, d) {
        if (!qA(i))
          return i;
        a = Br(a, i);
        for (var h = -1, Q = a.length, E = Q - 1, x = i; x != null && ++h < Q; ) {
          var T = hn(a[h]), K = u;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return i;
          if (h != E) {
            var M = x[T];
            K = d ? d(M, T, x) : t, K === t && (K = qA(M) ? M : Rn(a[h + 1]) ? [] : {});
          }
          Ha(x, T, K), x = x[T];
        }
        return i;
      }
      var Dv = Nl ? function(i, a) {
        return Nl.set(i, a), i;
      } : At, n4 = Rl ? function(i, a) {
        return Rl(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Og(a),
          writable: !0
        });
      } : At;
      function r4(i) {
        return nu(ao(i));
      }
      function bt(i, a, u) {
        var d = -1, h = i.length;
        a < 0 && (a = -a > h ? 0 : h + a), u = u > h ? h : u, u < 0 && (u += h), h = a > u ? 0 : u - a >>> 0, a >>>= 0;
        for (var Q = D(h); ++d < h; )
          Q[d] = i[d + a];
        return Q;
      }
      function i4(i, a) {
        var u;
        return dr(i, function(d, h, Q) {
          return u = a(d, h, Q), !u;
        }), !!u;
      }
      function zl(i, a, u) {
        var d = 0, h = i == null ? d : i.length;
        if (typeof a == "number" && a === a && h <= OA) {
          for (; d < h; ) {
            var Q = d + h >>> 1, E = i[Q];
            E !== null && !Bt(E) && (u ? E <= a : E < a) ? d = Q + 1 : h = Q;
          }
          return h;
        }
        return lg(i, a, At, u);
      }
      function lg(i, a, u, d) {
        var h = 0, Q = i == null ? 0 : i.length;
        if (Q === 0)
          return 0;
        a = u(a);
        for (var E = a !== a, x = a === null, T = Bt(a), K = a === t; h < Q; ) {
          var M = Ml((h + Q) / 2), G = u(i[M]), z = G !== t, nA = G === null, uA = G === G, hA = Bt(G);
          if (E)
            var cA = d || uA;
          else K ? cA = uA && (d || z) : x ? cA = uA && z && (d || !nA) : T ? cA = uA && z && !nA && (d || !hA) : nA || hA ? cA = !1 : cA = d ? G <= a : G < a;
          cA ? h = M + 1 : Q = M;
        }
        return Te(Q, BA);
      }
      function kv(i, a) {
        for (var u = -1, d = i.length, h = 0, Q = []; ++u < d; ) {
          var E = i[u], x = a ? a(E) : E;
          if (!u || !Zt(x, T)) {
            var T = x;
            Q[h++] = E === 0 ? 0 : E;
          }
        }
        return Q;
      }
      function Rv(i) {
        return typeof i == "number" ? i : Bt(i) ? X : +i;
      }
      function gt(i) {
        if (typeof i == "string")
          return i;
        if (gA(i))
          return JA(i, gt) + "";
        if (Bt(i))
          return pv ? pv.call(i) : "";
        var a = i + "";
        return a == "0" && 1 / i == -J ? "-0" : a;
      }
      function gr(i, a, u) {
        var d = -1, h = Il, Q = i.length, E = !0, x = [], T = x;
        if (u)
          E = !1, h = Rd;
        else if (Q >= r) {
          var K = a ? null : p4(i);
          if (K)
            return Hl(K);
          E = !1, h = ya, T = new si();
        } else
          T = a ? [] : x;
        A:
          for (; ++d < Q; ) {
            var M = i[d], G = a ? a(M) : M;
            if (M = u || M !== 0 ? M : 0, E && G === G) {
              for (var z = T.length; z--; )
                if (T[z] === G)
                  continue A;
              a && T.push(G), x.push(M);
            } else h(T, G, u) || (T !== x && T.push(G), x.push(M));
          }
        return x;
      }
      function ug(i, a) {
        return a = Br(a, i), i = fm(i, a), i == null || delete i[hn(_t(a))];
      }
      function Kv(i, a, u, d) {
        return _a(i, a, u(ui(i, a)), d);
      }
      function Yl(i, a, u, d) {
        for (var h = i.length, Q = d ? h : -1; (d ? Q-- : ++Q < h) && a(i[Q], Q, i); )
          ;
        return u ? bt(i, d ? 0 : Q, d ? Q + 1 : h) : bt(i, d ? Q + 1 : 0, d ? h : Q);
      }
      function Mv(i, a) {
        var u = i;
        return u instanceof FA && (u = u.value()), Kd(a, function(d, h) {
          return h.func.apply(h.thisArg, ur([d], h.args));
        }, u);
      }
      function cg(i, a, u) {
        var d = i.length;
        if (d < 2)
          return d ? gr(i[0]) : [];
        for (var h = -1, Q = D(d); ++h < d; )
          for (var E = i[h], x = -1; ++x < d; )
            x != h && (Q[h] = Sa(Q[h] || E, i[x], a, u));
        return gr(xe(Q, 1), a, u);
      }
      function Nv(i, a, u) {
        for (var d = -1, h = i.length, Q = a.length, E = {}; ++d < h; ) {
          var x = d < Q ? a[d] : t;
          u(E, i[d], x);
        }
        return E;
      }
      function fg(i) {
        return ae(i) ? i : [];
      }
      function dg(i) {
        return typeof i == "function" ? i : At;
      }
      function Br(i, a) {
        return gA(i) ? i : Qg(i, a) ? [i] : pm(bA(i));
      }
      var o4 = vA;
      function pr(i, a, u) {
        var d = i.length;
        return u = u === t ? d : u, !a && u >= d ? i : bt(i, a, u);
      }
      var Pv = XH || function(i) {
        return Ie.clearTimeout(i);
      };
      function Gv(i, a) {
        if (a)
          return i.slice();
        var u = i.length, d = uv ? uv(u) : new i.constructor(u);
        return i.copy(d), d;
      }
      function gg(i) {
        var a = new i.constructor(i.byteLength);
        return new Ol(a).set(new Ol(i)), a;
      }
      function a4(i, a) {
        var u = a ? gg(i.buffer) : i.buffer;
        return new i.constructor(u, i.byteOffset, i.byteLength);
      }
      function s4(i) {
        var a = new i.constructor(i.source, E0.exec(i));
        return a.lastIndex = i.lastIndex, a;
      }
      function l4(i) {
        return xa ? KA(xa.call(i)) : {};
      }
      function Vv(i, a) {
        var u = a ? gg(i.buffer) : i.buffer;
        return new i.constructor(u, i.byteOffset, i.length);
      }
      function $v(i, a) {
        if (i !== a) {
          var u = i !== t, d = i === null, h = i === i, Q = Bt(i), E = a !== t, x = a === null, T = a === a, K = Bt(a);
          if (!x && !K && !Q && i > a || Q && E && T && !x && !K || d && E && T || !u && T || !h)
            return 1;
          if (!d && !Q && !K && i < a || K && u && h && !d && !Q || x && u && h || !E && h || !T)
            return -1;
        }
        return 0;
      }
      function u4(i, a, u) {
        for (var d = -1, h = i.criteria, Q = a.criteria, E = h.length, x = u.length; ++d < E; ) {
          var T = $v(h[d], Q[d]);
          if (T) {
            if (d >= x)
              return T;
            var K = u[d];
            return T * (K == "desc" ? -1 : 1);
          }
        }
        return i.index - a.index;
      }
      function Wv(i, a, u, d) {
        for (var h = -1, Q = i.length, E = u.length, x = -1, T = a.length, K = pe(Q - E, 0), M = D(T + K), G = !d; ++x < T; )
          M[x] = a[x];
        for (; ++h < E; )
          (G || h < Q) && (M[u[h]] = i[h]);
        for (; K--; )
          M[x++] = i[h++];
        return M;
      }
      function Xv(i, a, u, d) {
        for (var h = -1, Q = i.length, E = -1, x = u.length, T = -1, K = a.length, M = pe(Q - x, 0), G = D(M + K), z = !d; ++h < M; )
          G[h] = i[h];
        for (var nA = h; ++T < K; )
          G[nA + T] = a[T];
        for (; ++E < x; )
          (z || h < Q) && (G[nA + u[E]] = i[h++]);
        return G;
      }
      function je(i, a) {
        var u = -1, d = i.length;
        for (a || (a = D(d)); ++u < d; )
          a[u] = i[u];
        return a;
      }
      function pn(i, a, u, d) {
        var h = !u;
        u || (u = {});
        for (var Q = -1, E = a.length; ++Q < E; ) {
          var x = a[Q], T = d ? d(u[x], i[x], x, u, i) : t;
          T === t && (T = i[x]), h ? On(u, x, T) : Ha(u, x, T);
        }
        return u;
      }
      function c4(i, a) {
        return pn(i, Cg(i), a);
      }
      function f4(i, a) {
        return pn(i, om(i), a);
      }
      function Jl(i, a) {
        return function(u, d) {
          var h = gA(u) ? hH : TS, Q = a ? a() : {};
          return h(u, i, aA(d, 2), Q);
        };
      }
      function no(i) {
        return vA(function(a, u) {
          var d = -1, h = u.length, Q = h > 1 ? u[h - 1] : t, E = h > 2 ? u[2] : t;
          for (Q = i.length > 3 && typeof Q == "function" ? (h--, Q) : t, E && Ge(u[0], u[1], E) && (Q = h < 3 ? t : Q, h = 1), a = KA(a); ++d < h; ) {
            var x = u[d];
            x && i(a, x, d, Q);
          }
          return a;
        });
      }
      function zv(i, a) {
        return function(u, d) {
          if (u == null)
            return u;
          if (!Ze(u))
            return i(u, d);
          for (var h = u.length, Q = a ? h : -1, E = KA(u); (a ? Q-- : ++Q < h) && d(E[Q], Q, E) !== !1; )
            ;
          return u;
        };
      }
      function Yv(i) {
        return function(a, u, d) {
          for (var h = -1, Q = KA(a), E = d(a), x = E.length; x--; ) {
            var T = E[i ? x : ++h];
            if (u(Q[T], T, Q) === !1)
              break;
          }
          return a;
        };
      }
      function d4(i, a, u) {
        var d = a & L, h = Ta(i);
        function Q() {
          var E = this && this !== Ie && this instanceof Q ? h : i;
          return E.apply(d ? u : this, arguments);
        }
        return Q;
      }
      function Jv(i) {
        return function(a) {
          a = bA(a);
          var u = Ji(a) ? Jt(a) : t, d = u ? u[0] : a.charAt(0), h = u ? pr(u, 1).join("") : a.slice(1);
          return d[i]() + h;
        };
      }
      function ro(i) {
        return function(a) {
          return Kd(zm(Xm(a).replace(nH, "")), i, "");
        };
      }
      function Ta(i) {
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return new i();
            case 1:
              return new i(a[0]);
            case 2:
              return new i(a[0], a[1]);
            case 3:
              return new i(a[0], a[1], a[2]);
            case 4:
              return new i(a[0], a[1], a[2], a[3]);
            case 5:
              return new i(a[0], a[1], a[2], a[3], a[4]);
            case 6:
              return new i(a[0], a[1], a[2], a[3], a[4], a[5]);
            case 7:
              return new i(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
          }
          var u = to(i.prototype), d = i.apply(u, a);
          return qA(d) ? d : u;
        };
      }
      function g4(i, a, u) {
        var d = Ta(i);
        function h() {
          for (var Q = arguments.length, E = D(Q), x = Q, T = io(h); x--; )
            E[x] = arguments[x];
          var K = Q < 3 && E[0] !== T && E[Q - 1] !== T ? [] : cr(E, T);
          if (Q -= K.length, Q < u)
            return em(
              i,
              a,
              jl,
              h.placeholder,
              t,
              E,
              K,
              t,
              t,
              u - Q
            );
          var M = this && this !== Ie && this instanceof h ? d : i;
          return ft(M, this, E);
        }
        return h;
      }
      function jv(i) {
        return function(a, u, d) {
          var h = KA(a);
          if (!Ze(a)) {
            var Q = aA(u, 3);
            a = Ce(a), u = function(x) {
              return Q(h[x], x, h);
            };
          }
          var E = i(a, u, d);
          return E > -1 ? h[Q ? a[E] : E] : t;
        };
      }
      function Zv(i) {
        return kn(function(a) {
          var u = a.length, d = u, h = St.prototype.thru;
          for (i && a.reverse(); d--; ) {
            var Q = a[d];
            if (typeof Q != "function")
              throw new Ht(s);
            if (h && !E && eu(Q) == "wrapper")
              var E = new St([], !0);
          }
          for (d = E ? d : u; ++d < u; ) {
            Q = a[d];
            var x = eu(Q), T = x == "wrapper" ? vg(Q) : t;
            T && yg(T[0]) && T[1] == (O | y | H | k) && !T[4].length && T[9] == 1 ? E = E[eu(T[0])].apply(E, T[3]) : E = Q.length == 1 && yg(Q) ? E[x]() : E.thru(Q);
          }
          return function() {
            var K = arguments, M = K[0];
            if (E && K.length == 1 && gA(M))
              return E.plant(M).value();
            for (var G = 0, z = u ? a[G].apply(this, K) : M; ++G < u; )
              z = a[G].call(this, z);
            return z;
          };
        });
      }
      function jl(i, a, u, d, h, Q, E, x, T, K) {
        var M = a & O, G = a & L, z = a & m, nA = a & (y | I), uA = a & N, hA = z ? t : Ta(i);
        function cA() {
          for (var CA = arguments.length, EA = D(CA), pt = CA; pt--; )
            EA[pt] = arguments[pt];
          if (nA)
            var Ve = io(cA), ht = EH(EA, Ve);
          if (d && (EA = Wv(EA, d, h, nA)), Q && (EA = Xv(EA, Q, E, nA)), CA -= ht, nA && CA < K) {
            var se = cr(EA, Ve);
            return em(
              i,
              a,
              jl,
              cA.placeholder,
              u,
              EA,
              se,
              x,
              T,
              K - CA
            );
          }
          var qt = G ? u : this, Nn = z ? qt[i] : i;
          return CA = EA.length, x ? EA = T4(EA, x) : uA && CA > 1 && EA.reverse(), M && T < CA && (EA.length = T), this && this !== Ie && this instanceof cA && (Nn = hA || Ta(Nn)), Nn.apply(qt, EA);
        }
        return cA;
      }
      function qv(i, a) {
        return function(u, d) {
          return PS(u, i, a(d), {});
        };
      }
      function Zl(i, a) {
        return function(u, d) {
          var h;
          if (u === t && d === t)
            return a;
          if (u !== t && (h = u), d !== t) {
            if (h === t)
              return d;
            typeof u == "string" || typeof d == "string" ? (u = gt(u), d = gt(d)) : (u = Rv(u), d = Rv(d)), h = i(u, d);
          }
          return h;
        };
      }
      function Bg(i) {
        return kn(function(a) {
          return a = JA(a, dt(aA())), vA(function(u) {
            var d = this;
            return i(a, function(h) {
              return ft(h, d, u);
            });
          });
        });
      }
      function ql(i, a) {
        a = a === t ? " " : gt(a);
        var u = a.length;
        if (u < 2)
          return u ? sg(a, i) : a;
        var d = sg(a, Kl(i / ji(a)));
        return Ji(a) ? pr(Jt(d), 0, i).join("") : d.slice(0, i);
      }
      function B4(i, a, u, d) {
        var h = a & L, Q = Ta(i);
        function E() {
          for (var x = -1, T = arguments.length, K = -1, M = d.length, G = D(M + T), z = this && this !== Ie && this instanceof E ? Q : i; ++K < M; )
            G[K] = d[K];
          for (; T--; )
            G[K++] = arguments[++x];
          return ft(z, h ? u : this, G);
        }
        return E;
      }
      function Am(i) {
        return function(a, u, d) {
          return d && typeof d != "number" && Ge(a, u, d) && (u = d = t), a = Mn(a), u === t ? (u = a, a = 0) : u = Mn(u), d = d === t ? a < u ? 1 : -1 : Mn(d), A4(a, u, d, i);
        };
      }
      function Au(i) {
        return function(a, u) {
          return typeof a == "string" && typeof u == "string" || (a = Tt(a), u = Tt(u)), i(a, u);
        };
      }
      function em(i, a, u, d, h, Q, E, x, T, K) {
        var M = a & y, G = M ? E : t, z = M ? t : E, nA = M ? Q : t, uA = M ? t : Q;
        a |= M ? H : S, a &= ~(M ? S : H), a & w || (a &= ~(L | m));
        var hA = [
          i,
          a,
          h,
          nA,
          G,
          uA,
          z,
          x,
          T,
          K
        ], cA = u.apply(t, hA);
        return yg(i) && dm(cA, hA), cA.placeholder = d, gm(cA, i, a);
      }
      function pg(i) {
        var a = Be[i];
        return function(u, d) {
          if (u = Tt(u), d = d == null ? 0 : Te(pA(d), 292), d && gv(u)) {
            var h = (bA(u) + "e").split("e"), Q = a(h[0] + "e" + (+h[1] + d));
            return h = (bA(Q) + "e").split("e"), +(h[0] + "e" + (+h[1] - d));
          }
          return a(u);
        };
      }
      var p4 = Ao && 1 / Hl(new Ao([, -0]))[1] == J ? function(i) {
        return new Ao(i);
      } : Rg;
      function tm(i) {
        return function(a) {
          var u = Oe(a);
          return u == zt ? Wd(a) : u == Yt ? _H(a) : UH(a, i(a));
        };
      }
      function Dn(i, a, u, d, h, Q, E, x) {
        var T = a & m;
        if (!T && typeof i != "function")
          throw new Ht(s);
        var K = d ? d.length : 0;
        if (K || (a &= ~(H | S), d = h = t), E = E === t ? E : pe(pA(E), 0), x = x === t ? x : pA(x), K -= h ? h.length : 0, a & S) {
          var M = d, G = h;
          d = h = t;
        }
        var z = T ? t : vg(i), nA = [
          i,
          a,
          u,
          d,
          h,
          M,
          G,
          Q,
          E,
          x
        ];
        if (z && L4(nA, z), i = nA[0], a = nA[1], u = nA[2], d = nA[3], h = nA[4], x = nA[9] = nA[9] === t ? T ? 0 : i.length : pe(nA[9] - K, 0), !x && a & (y | I) && (a &= ~(y | I)), !a || a == L)
          var uA = d4(i, a, u);
        else a == y || a == I ? uA = g4(i, a, x) : (a == H || a == (L | H)) && !h.length ? uA = B4(i, a, u, d) : uA = jl.apply(t, nA);
        var hA = z ? Dv : dm;
        return gm(hA(uA, nA), i, a);
      }
      function nm(i, a, u, d) {
        return i === t || Zt(i, qi[u]) && !DA.call(d, u) ? a : i;
      }
      function rm(i, a, u, d, h, Q) {
        return qA(i) && qA(a) && (Q.set(a, i), Xl(i, a, t, rm, Q), Q.delete(a)), i;
      }
      function h4(i) {
        return ka(i) ? t : i;
      }
      function im(i, a, u, d, h, Q) {
        var E = u & F, x = i.length, T = a.length;
        if (x != T && !(E && T > x))
          return !1;
        var K = Q.get(i), M = Q.get(a);
        if (K && M)
          return K == a && M == i;
        var G = -1, z = !0, nA = u & U ? new si() : t;
        for (Q.set(i, a), Q.set(a, i); ++G < x; ) {
          var uA = i[G], hA = a[G];
          if (d)
            var cA = E ? d(hA, uA, G, a, i, Q) : d(uA, hA, G, i, a, Q);
          if (cA !== t) {
            if (cA)
              continue;
            z = !1;
            break;
          }
          if (nA) {
            if (!Md(a, function(CA, EA) {
              if (!ya(nA, EA) && (uA === CA || h(uA, CA, u, d, Q)))
                return nA.push(EA);
            })) {
              z = !1;
              break;
            }
          } else if (!(uA === hA || h(uA, hA, u, d, Q))) {
            z = !1;
            break;
          }
        }
        return Q.delete(i), Q.delete(a), z;
      }
      function w4(i, a, u, d, h, Q, E) {
        switch (u) {
          case Xi:
            if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset)
              return !1;
            i = i.buffer, a = a.buffer;
          case Qa:
            return !(i.byteLength != a.byteLength || !Q(new Ol(i), new Ol(a)));
          case Xt:
          case ut:
          case wa:
            return Zt(+i, +a);
          case Ln:
            return i.name == a.name && i.message == a.message;
          case va:
          case ma:
            return i == a + "";
          case zt:
            var x = Wd;
          case Yt:
            var T = d & F;
            if (x || (x = Hl), i.size != a.size && !T)
              return !1;
            var K = E.get(i);
            if (K)
              return K == a;
            d |= U, E.set(i, a);
            var M = im(x(i), x(a), d, h, Q, E);
            return E.delete(i), M;
          case yl:
            if (xa)
              return xa.call(i) == xa.call(a);
        }
        return !1;
      }
      function v4(i, a, u, d, h, Q) {
        var E = u & F, x = hg(i), T = x.length, K = hg(a), M = K.length;
        if (T != M && !E)
          return !1;
        for (var G = T; G--; ) {
          var z = x[G];
          if (!(E ? z in a : DA.call(a, z)))
            return !1;
        }
        var nA = Q.get(i), uA = Q.get(a);
        if (nA && uA)
          return nA == a && uA == i;
        var hA = !0;
        Q.set(i, a), Q.set(a, i);
        for (var cA = E; ++G < T; ) {
          z = x[G];
          var CA = i[z], EA = a[z];
          if (d)
            var pt = E ? d(EA, CA, z, a, i, Q) : d(CA, EA, z, i, a, Q);
          if (!(pt === t ? CA === EA || h(CA, EA, u, d, Q) : pt)) {
            hA = !1;
            break;
          }
          cA || (cA = z == "constructor");
        }
        if (hA && !cA) {
          var Ve = i.constructor, ht = a.constructor;
          Ve != ht && "constructor" in i && "constructor" in a && !(typeof Ve == "function" && Ve instanceof Ve && typeof ht == "function" && ht instanceof ht) && (hA = !1);
        }
        return Q.delete(i), Q.delete(a), hA;
      }
      function kn(i) {
        return Ug(cm(i, t, mm), i + "");
      }
      function hg(i) {
        return Uv(i, Ce, Cg);
      }
      function wg(i) {
        return Uv(i, qe, om);
      }
      var vg = Nl ? function(i) {
        return Nl.get(i);
      } : Rg;
      function eu(i) {
        for (var a = i.name + "", u = eo[a], d = DA.call(eo, a) ? u.length : 0; d--; ) {
          var h = u[d], Q = h.func;
          if (Q == null || Q == i)
            return h.name;
        }
        return a;
      }
      function io(i) {
        var a = DA.call(C, "placeholder") ? C : i;
        return a.placeholder;
      }
      function aA() {
        var i = C.iteratee || Dg;
        return i = i === Dg ? xv : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function tu(i, a) {
        var u = i.__data__;
        return I4(a) ? u[typeof a == "string" ? "string" : "hash"] : u.map;
      }
      function mg(i) {
        for (var a = Ce(i), u = a.length; u--; ) {
          var d = a[u], h = i[d];
          a[u] = [d, h, lm(h)];
        }
        return a;
      }
      function ci(i, a) {
        var u = SH(i, a);
        return Iv(u) ? u : t;
      }
      function m4(i) {
        var a = DA.call(i, oi), u = i[oi];
        try {
          i[oi] = t;
          var d = !0;
        } catch {
        }
        var h = _l.call(i);
        return d && (a ? i[oi] = u : delete i[oi]), h;
      }
      var Cg = zd ? function(i) {
        return i == null ? [] : (i = KA(i), lr(zd(i), function(a) {
          return fv.call(i, a);
        }));
      } : Kg, om = zd ? function(i) {
        for (var a = []; i; )
          ur(a, Cg(i)), i = Dl(i);
        return a;
      } : Kg, Oe = Pe;
      (Yd && Oe(new Yd(new ArrayBuffer(1))) != Xi || Ua && Oe(new Ua()) != zt || Jd && Oe(Jd.resolve()) != Q0 || Ao && Oe(new Ao()) != Yt || Ea && Oe(new Ea()) != Ca) && (Oe = function(i) {
        var a = Pe(i), u = a == bn ? i.constructor : t, d = u ? fi(u) : "";
        if (d)
          switch (d) {
            case tS:
              return Xi;
            case nS:
              return zt;
            case rS:
              return Q0;
            case iS:
              return Yt;
            case oS:
              return Ca;
          }
        return a;
      });
      function C4(i, a, u) {
        for (var d = -1, h = u.length; ++d < h; ) {
          var Q = u[d], E = Q.size;
          switch (Q.type) {
            case "drop":
              i += E;
              break;
            case "dropRight":
              a -= E;
              break;
            case "take":
              a = Te(a, i + E);
              break;
            case "takeRight":
              i = pe(i, a - E);
              break;
          }
        }
        return { start: i, end: a };
      }
      function Q4(i) {
        var a = i.match(xx);
        return a ? a[1].split(Hx) : [];
      }
      function am(i, a, u) {
        a = Br(a, i);
        for (var d = -1, h = a.length, Q = !1; ++d < h; ) {
          var E = hn(a[d]);
          if (!(Q = i != null && u(i, E)))
            break;
          i = i[E];
        }
        return Q || ++d != h ? Q : (h = i == null ? 0 : i.length, !!h && lu(h) && Rn(E, h) && (gA(i) || di(i)));
      }
      function y4(i) {
        var a = i.length, u = new i.constructor(a);
        return a && typeof i[0] == "string" && DA.call(i, "index") && (u.index = i.index, u.input = i.input), u;
      }
      function sm(i) {
        return typeof i.constructor == "function" && !Oa(i) ? to(Dl(i)) : {};
      }
      function F4(i, a, u) {
        var d = i.constructor;
        switch (a) {
          case Qa:
            return gg(i);
          case Xt:
          case ut:
            return new d(+i);
          case Xi:
            return a4(i, u);
          case md:
          case Cd:
          case Qd:
          case yd:
          case Fd:
          case Ud:
          case Ed:
          case Id:
          case xd:
            return Vv(i, u);
          case zt:
            return new d();
          case wa:
          case ma:
            return new d(i);
          case va:
            return s4(i);
          case Yt:
            return new d();
          case yl:
            return l4(i);
        }
      }
      function U4(i, a) {
        var u = a.length;
        if (!u)
          return i;
        var d = u - 1;
        return a[d] = (u > 1 ? "& " : "") + a[d], a = a.join(u > 2 ? ", " : " "), i.replace(Ix, `{
/* [wrapped with ` + a + `] */
`);
      }
      function E4(i) {
        return gA(i) || di(i) || !!(dv && i && i[dv]);
      }
      function Rn(i, a) {
        var u = typeof i;
        return a = a ?? P, !!a && (u == "number" || u != "symbol" && Rx.test(i)) && i > -1 && i % 1 == 0 && i < a;
      }
      function Ge(i, a, u) {
        if (!qA(u))
          return !1;
        var d = typeof a;
        return (d == "number" ? Ze(u) && Rn(a, u.length) : d == "string" && a in u) ? Zt(u[a], i) : !1;
      }
      function Qg(i, a) {
        if (gA(i))
          return !1;
        var u = typeof i;
        return u == "number" || u == "symbol" || u == "boolean" || i == null || Bt(i) ? !0 : yx.test(i) || !Qx.test(i) || a != null && i in KA(a);
      }
      function I4(i) {
        var a = typeof i;
        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null;
      }
      function yg(i) {
        var a = eu(i), u = C[a];
        if (typeof u != "function" || !(a in FA.prototype))
          return !1;
        if (i === u)
          return !0;
        var d = vg(u);
        return !!d && i === d[0];
      }
      function x4(i) {
        return !!lv && lv in i;
      }
      var H4 = Ll ? Kn : Mg;
      function Oa(i) {
        var a = i && i.constructor, u = typeof a == "function" && a.prototype || qi;
        return i === u;
      }
      function lm(i) {
        return i === i && !qA(i);
      }
      function um(i, a) {
        return function(u) {
          return u == null ? !1 : u[i] === a && (a !== t || i in KA(u));
        };
      }
      function S4(i) {
        var a = au(i, function(d) {
          return u.size === f && u.clear(), d;
        }), u = a.cache;
        return a;
      }
      function L4(i, a) {
        var u = i[1], d = a[1], h = u | d, Q = h < (L | m | O), E = d == O && u == y || d == O && u == k && i[7].length <= a[8] || d == (O | k) && a[7].length <= a[8] && u == y;
        if (!(Q || E))
          return i;
        d & L && (i[2] = a[2], h |= u & L ? 0 : w);
        var x = a[3];
        if (x) {
          var T = i[3];
          i[3] = T ? Wv(T, x, a[4]) : x, i[4] = T ? cr(i[3], g) : a[4];
        }
        return x = a[5], x && (T = i[5], i[5] = T ? Xv(T, x, a[6]) : x, i[6] = T ? cr(i[5], g) : a[6]), x = a[7], x && (i[7] = x), d & O && (i[8] = i[8] == null ? a[8] : Te(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = h, i;
      }
      function b4(i) {
        var a = [];
        if (i != null)
          for (var u in KA(i))
            a.push(u);
        return a;
      }
      function _4(i) {
        return _l.call(i);
      }
      function cm(i, a, u) {
        return a = pe(a === t ? i.length - 1 : a, 0), function() {
          for (var d = arguments, h = -1, Q = pe(d.length - a, 0), E = D(Q); ++h < Q; )
            E[h] = d[a + h];
          h = -1;
          for (var x = D(a + 1); ++h < a; )
            x[h] = d[h];
          return x[a] = u(E), ft(i, this, x);
        };
      }
      function fm(i, a) {
        return a.length < 2 ? i : ui(i, bt(a, 0, -1));
      }
      function T4(i, a) {
        for (var u = i.length, d = Te(a.length, u), h = je(i); d--; ) {
          var Q = a[d];
          i[d] = Rn(Q, u) ? h[Q] : t;
        }
        return i;
      }
      function Fg(i, a) {
        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__")
          return i[a];
      }
      var dm = Bm(Dv), Da = YH || function(i, a) {
        return Ie.setTimeout(i, a);
      }, Ug = Bm(n4);
      function gm(i, a, u) {
        var d = a + "";
        return Ug(i, U4(d, O4(Q4(d), u)));
      }
      function Bm(i) {
        var a = 0, u = 0;
        return function() {
          var d = qH(), h = tA - (d - u);
          if (u = d, h > 0) {
            if (++a >= iA)
              return arguments[0];
          } else
            a = 0;
          return i.apply(t, arguments);
        };
      }
      function nu(i, a) {
        var u = -1, d = i.length, h = d - 1;
        for (a = a === t ? d : a; ++u < a; ) {
          var Q = ag(u, h), E = i[Q];
          i[Q] = i[u], i[u] = E;
        }
        return i.length = a, i;
      }
      var pm = S4(function(i) {
        var a = [];
        return i.charCodeAt(0) === 46 && a.push(""), i.replace(Fx, function(u, d, h, Q) {
          a.push(h ? Q.replace(bx, "$1") : d || u);
        }), a;
      });
      function hn(i) {
        if (typeof i == "string" || Bt(i))
          return i;
        var a = i + "";
        return a == "0" && 1 / i == -J ? "-0" : a;
      }
      function fi(i) {
        if (i != null) {
          try {
            return bl.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function O4(i, a) {
        return xt(GA, function(u) {
          var d = "_." + u[0];
          a & u[1] && !Il(i, d) && i.push(d);
        }), i.sort();
      }
      function hm(i) {
        if (i instanceof FA)
          return i.clone();
        var a = new St(i.__wrapped__, i.__chain__);
        return a.__actions__ = je(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a;
      }
      function D4(i, a, u) {
        (u ? Ge(i, a, u) : a === t) ? a = 1 : a = pe(pA(a), 0);
        var d = i == null ? 0 : i.length;
        if (!d || a < 1)
          return [];
        for (var h = 0, Q = 0, E = D(Kl(d / a)); h < d; )
          E[Q++] = bt(i, h, h += a);
        return E;
      }
      function k4(i) {
        for (var a = -1, u = i == null ? 0 : i.length, d = 0, h = []; ++a < u; ) {
          var Q = i[a];
          Q && (h[d++] = Q);
        }
        return h;
      }
      function R4() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var a = D(i - 1), u = arguments[0], d = i; d--; )
          a[d - 1] = arguments[d];
        return ur(gA(u) ? je(u) : [u], xe(a, 1));
      }
      var K4 = vA(function(i, a) {
        return ae(i) ? Sa(i, xe(a, 1, ae, !0)) : [];
      }), M4 = vA(function(i, a) {
        var u = _t(a);
        return ae(u) && (u = t), ae(i) ? Sa(i, xe(a, 1, ae, !0), aA(u, 2)) : [];
      }), N4 = vA(function(i, a) {
        var u = _t(a);
        return ae(u) && (u = t), ae(i) ? Sa(i, xe(a, 1, ae, !0), t, u) : [];
      });
      function P4(i, a, u) {
        var d = i == null ? 0 : i.length;
        return d ? (a = u || a === t ? 1 : pA(a), bt(i, a < 0 ? 0 : a, d)) : [];
      }
      function G4(i, a, u) {
        var d = i == null ? 0 : i.length;
        return d ? (a = u || a === t ? 1 : pA(a), a = d - a, bt(i, 0, a < 0 ? 0 : a)) : [];
      }
      function V4(i, a) {
        return i && i.length ? Yl(i, aA(a, 3), !0, !0) : [];
      }
      function $4(i, a) {
        return i && i.length ? Yl(i, aA(a, 3), !0) : [];
      }
      function W4(i, a, u, d) {
        var h = i == null ? 0 : i.length;
        return h ? (u && typeof u != "number" && Ge(i, a, u) && (u = 0, d = h), RS(i, a, u, d)) : [];
      }
      function wm(i, a, u) {
        var d = i == null ? 0 : i.length;
        if (!d)
          return -1;
        var h = u == null ? 0 : pA(u);
        return h < 0 && (h = pe(d + h, 0)), xl(i, aA(a, 3), h);
      }
      function vm(i, a, u) {
        var d = i == null ? 0 : i.length;
        if (!d)
          return -1;
        var h = d - 1;
        return u !== t && (h = pA(u), h = u < 0 ? pe(d + h, 0) : Te(h, d - 1)), xl(i, aA(a, 3), h, !0);
      }
      function mm(i) {
        var a = i == null ? 0 : i.length;
        return a ? xe(i, 1) : [];
      }
      function X4(i) {
        var a = i == null ? 0 : i.length;
        return a ? xe(i, J) : [];
      }
      function z4(i, a) {
        var u = i == null ? 0 : i.length;
        return u ? (a = a === t ? 1 : pA(a), xe(i, a)) : [];
      }
      function Y4(i) {
        for (var a = -1, u = i == null ? 0 : i.length, d = {}; ++a < u; ) {
          var h = i[a];
          d[h[0]] = h[1];
        }
        return d;
      }
      function Cm(i) {
        return i && i.length ? i[0] : t;
      }
      function J4(i, a, u) {
        var d = i == null ? 0 : i.length;
        if (!d)
          return -1;
        var h = u == null ? 0 : pA(u);
        return h < 0 && (h = pe(d + h, 0)), Yi(i, a, h);
      }
      function j4(i) {
        var a = i == null ? 0 : i.length;
        return a ? bt(i, 0, -1) : [];
      }
      var Z4 = vA(function(i) {
        var a = JA(i, fg);
        return a.length && a[0] === i[0] ? tg(a) : [];
      }), q4 = vA(function(i) {
        var a = _t(i), u = JA(i, fg);
        return a === _t(u) ? a = t : u.pop(), u.length && u[0] === i[0] ? tg(u, aA(a, 2)) : [];
      }), AL = vA(function(i) {
        var a = _t(i), u = JA(i, fg);
        return a = typeof a == "function" ? a : t, a && u.pop(), u.length && u[0] === i[0] ? tg(u, t, a) : [];
      });
      function eL(i, a) {
        return i == null ? "" : jH.call(i, a);
      }
      function _t(i) {
        var a = i == null ? 0 : i.length;
        return a ? i[a - 1] : t;
      }
      function tL(i, a, u) {
        var d = i == null ? 0 : i.length;
        if (!d)
          return -1;
        var h = d;
        return u !== t && (h = pA(u), h = h < 0 ? pe(d + h, 0) : Te(h, d - 1)), a === a ? OH(i, a, h) : xl(i, ev, h, !0);
      }
      function nL(i, a) {
        return i && i.length ? bv(i, pA(a)) : t;
      }
      var rL = vA(Qm);
      function Qm(i, a) {
        return i && i.length && a && a.length ? og(i, a) : i;
      }
      function iL(i, a, u) {
        return i && i.length && a && a.length ? og(i, a, aA(u, 2)) : i;
      }
      function oL(i, a, u) {
        return i && i.length && a && a.length ? og(i, a, t, u) : i;
      }
      var aL = kn(function(i, a) {
        var u = i == null ? 0 : i.length, d = Zd(i, a);
        return Ov(i, JA(a, function(h) {
          return Rn(h, u) ? +h : h;
        }).sort($v)), d;
      });
      function sL(i, a) {
        var u = [];
        if (!(i && i.length))
          return u;
        var d = -1, h = [], Q = i.length;
        for (a = aA(a, 3); ++d < Q; ) {
          var E = i[d];
          a(E, d, i) && (u.push(E), h.push(d));
        }
        return Ov(i, h), u;
      }
      function Eg(i) {
        return i == null ? i : eS.call(i);
      }
      function lL(i, a, u) {
        var d = i == null ? 0 : i.length;
        return d ? (u && typeof u != "number" && Ge(i, a, u) ? (a = 0, u = d) : (a = a == null ? 0 : pA(a), u = u === t ? d : pA(u)), bt(i, a, u)) : [];
      }
      function uL(i, a) {
        return zl(i, a);
      }
      function cL(i, a, u) {
        return lg(i, a, aA(u, 2));
      }
      function fL(i, a) {
        var u = i == null ? 0 : i.length;
        if (u) {
          var d = zl(i, a);
          if (d < u && Zt(i[d], a))
            return d;
        }
        return -1;
      }
      function dL(i, a) {
        return zl(i, a, !0);
      }
      function gL(i, a, u) {
        return lg(i, a, aA(u, 2), !0);
      }
      function BL(i, a) {
        var u = i == null ? 0 : i.length;
        if (u) {
          var d = zl(i, a, !0) - 1;
          if (Zt(i[d], a))
            return d;
        }
        return -1;
      }
      function pL(i) {
        return i && i.length ? kv(i) : [];
      }
      function hL(i, a) {
        return i && i.length ? kv(i, aA(a, 2)) : [];
      }
      function wL(i) {
        var a = i == null ? 0 : i.length;
        return a ? bt(i, 1, a) : [];
      }
      function vL(i, a, u) {
        return i && i.length ? (a = u || a === t ? 1 : pA(a), bt(i, 0, a < 0 ? 0 : a)) : [];
      }
      function mL(i, a, u) {
        var d = i == null ? 0 : i.length;
        return d ? (a = u || a === t ? 1 : pA(a), a = d - a, bt(i, a < 0 ? 0 : a, d)) : [];
      }
      function CL(i, a) {
        return i && i.length ? Yl(i, aA(a, 3), !1, !0) : [];
      }
      function QL(i, a) {
        return i && i.length ? Yl(i, aA(a, 3)) : [];
      }
      var yL = vA(function(i) {
        return gr(xe(i, 1, ae, !0));
      }), FL = vA(function(i) {
        var a = _t(i);
        return ae(a) && (a = t), gr(xe(i, 1, ae, !0), aA(a, 2));
      }), UL = vA(function(i) {
        var a = _t(i);
        return a = typeof a == "function" ? a : t, gr(xe(i, 1, ae, !0), t, a);
      });
      function EL(i) {
        return i && i.length ? gr(i) : [];
      }
      function IL(i, a) {
        return i && i.length ? gr(i, aA(a, 2)) : [];
      }
      function xL(i, a) {
        return a = typeof a == "function" ? a : t, i && i.length ? gr(i, t, a) : [];
      }
      function Ig(i) {
        if (!(i && i.length))
          return [];
        var a = 0;
        return i = lr(i, function(u) {
          if (ae(u))
            return a = pe(u.length, a), !0;
        }), Vd(a, function(u) {
          return JA(i, Nd(u));
        });
      }
      function ym(i, a) {
        if (!(i && i.length))
          return [];
        var u = Ig(i);
        return a == null ? u : JA(u, function(d) {
          return ft(a, t, d);
        });
      }
      var HL = vA(function(i, a) {
        return ae(i) ? Sa(i, a) : [];
      }), SL = vA(function(i) {
        return cg(lr(i, ae));
      }), LL = vA(function(i) {
        var a = _t(i);
        return ae(a) && (a = t), cg(lr(i, ae), aA(a, 2));
      }), bL = vA(function(i) {
        var a = _t(i);
        return a = typeof a == "function" ? a : t, cg(lr(i, ae), t, a);
      }), _L = vA(Ig);
      function TL(i, a) {
        return Nv(i || [], a || [], Ha);
      }
      function OL(i, a) {
        return Nv(i || [], a || [], _a);
      }
      var DL = vA(function(i) {
        var a = i.length, u = a > 1 ? i[a - 1] : t;
        return u = typeof u == "function" ? (i.pop(), u) : t, ym(i, u);
      });
      function Fm(i) {
        var a = C(i);
        return a.__chain__ = !0, a;
      }
      function kL(i, a) {
        return a(i), i;
      }
      function ru(i, a) {
        return a(i);
      }
      var RL = kn(function(i) {
        var a = i.length, u = a ? i[0] : 0, d = this.__wrapped__, h = function(Q) {
          return Zd(Q, i);
        };
        return a > 1 || this.__actions__.length || !(d instanceof FA) || !Rn(u) ? this.thru(h) : (d = d.slice(u, +u + (a ? 1 : 0)), d.__actions__.push({
          func: ru,
          args: [h],
          thisArg: t
        }), new St(d, this.__chain__).thru(function(Q) {
          return a && !Q.length && Q.push(t), Q;
        }));
      });
      function KL() {
        return Fm(this);
      }
      function ML() {
        return new St(this.value(), this.__chain__);
      }
      function NL() {
        this.__values__ === t && (this.__values__ = Rm(this.value()));
        var i = this.__index__ >= this.__values__.length, a = i ? t : this.__values__[this.__index__++];
        return { done: i, value: a };
      }
      function PL() {
        return this;
      }
      function GL(i) {
        for (var a, u = this; u instanceof Gl; ) {
          var d = hm(u);
          d.__index__ = 0, d.__values__ = t, a ? h.__wrapped__ = d : a = d;
          var h = d;
          u = u.__wrapped__;
        }
        return h.__wrapped__ = i, a;
      }
      function VL() {
        var i = this.__wrapped__;
        if (i instanceof FA) {
          var a = i;
          return this.__actions__.length && (a = new FA(this)), a = a.reverse(), a.__actions__.push({
            func: ru,
            args: [Eg],
            thisArg: t
          }), new St(a, this.__chain__);
        }
        return this.thru(Eg);
      }
      function $L() {
        return Mv(this.__wrapped__, this.__actions__);
      }
      var WL = Jl(function(i, a, u) {
        DA.call(i, u) ? ++i[u] : On(i, u, 1);
      });
      function XL(i, a, u) {
        var d = gA(i) ? q0 : kS;
        return u && Ge(i, a, u) && (a = t), d(i, aA(a, 3));
      }
      function zL(i, a) {
        var u = gA(i) ? lr : yv;
        return u(i, aA(a, 3));
      }
      var YL = jv(wm), JL = jv(vm);
      function jL(i, a) {
        return xe(iu(i, a), 1);
      }
      function ZL(i, a) {
        return xe(iu(i, a), J);
      }
      function qL(i, a, u) {
        return u = u === t ? 1 : pA(u), xe(iu(i, a), u);
      }
      function Um(i, a) {
        var u = gA(i) ? xt : dr;
        return u(i, aA(a, 3));
      }
      function Em(i, a) {
        var u = gA(i) ? wH : Qv;
        return u(i, aA(a, 3));
      }
      var A2 = Jl(function(i, a, u) {
        DA.call(i, u) ? i[u].push(a) : On(i, u, [a]);
      });
      function e2(i, a, u, d) {
        i = Ze(i) ? i : ao(i), u = u && !d ? pA(u) : 0;
        var h = i.length;
        return u < 0 && (u = pe(h + u, 0)), uu(i) ? u <= h && i.indexOf(a, u) > -1 : !!h && Yi(i, a, u) > -1;
      }
      var t2 = vA(function(i, a, u) {
        var d = -1, h = typeof a == "function", Q = Ze(i) ? D(i.length) : [];
        return dr(i, function(E) {
          Q[++d] = h ? ft(a, E, u) : La(E, a, u);
        }), Q;
      }), n2 = Jl(function(i, a, u) {
        On(i, u, a);
      });
      function iu(i, a) {
        var u = gA(i) ? JA : Hv;
        return u(i, aA(a, 3));
      }
      function r2(i, a, u, d) {
        return i == null ? [] : (gA(a) || (a = a == null ? [] : [a]), u = d ? t : u, gA(u) || (u = u == null ? [] : [u]), _v(i, a, u));
      }
      var i2 = Jl(function(i, a, u) {
        i[u ? 0 : 1].push(a);
      }, function() {
        return [[], []];
      });
      function o2(i, a, u) {
        var d = gA(i) ? Kd : nv, h = arguments.length < 3;
        return d(i, aA(a, 4), u, h, dr);
      }
      function a2(i, a, u) {
        var d = gA(i) ? vH : nv, h = arguments.length < 3;
        return d(i, aA(a, 4), u, h, Qv);
      }
      function s2(i, a) {
        var u = gA(i) ? lr : yv;
        return u(i, su(aA(a, 3)));
      }
      function l2(i) {
        var a = gA(i) ? wv : e4;
        return a(i);
      }
      function u2(i, a, u) {
        (u ? Ge(i, a, u) : a === t) ? a = 1 : a = pA(a);
        var d = gA(i) ? bS : t4;
        return d(i, a);
      }
      function c2(i) {
        var a = gA(i) ? _S : r4;
        return a(i);
      }
      function f2(i) {
        if (i == null)
          return 0;
        if (Ze(i))
          return uu(i) ? ji(i) : i.length;
        var a = Oe(i);
        return a == zt || a == Yt ? i.size : rg(i).length;
      }
      function d2(i, a, u) {
        var d = gA(i) ? Md : i4;
        return u && Ge(i, a, u) && (a = t), d(i, aA(a, 3));
      }
      var g2 = vA(function(i, a) {
        if (i == null)
          return [];
        var u = a.length;
        return u > 1 && Ge(i, a[0], a[1]) ? a = [] : u > 2 && Ge(a[0], a[1], a[2]) && (a = [a[0]]), _v(i, xe(a, 1), []);
      }), ou = zH || function() {
        return Ie.Date.now();
      };
      function B2(i, a) {
        if (typeof a != "function")
          throw new Ht(s);
        return i = pA(i), function() {
          if (--i < 1)
            return a.apply(this, arguments);
        };
      }
      function Im(i, a, u) {
        return a = u ? t : a, a = i && a == null ? i.length : a, Dn(i, O, t, t, t, t, a);
      }
      function xm(i, a) {
        var u;
        if (typeof a != "function")
          throw new Ht(s);
        return i = pA(i), function() {
          return --i > 0 && (u = a.apply(this, arguments)), i <= 1 && (a = t), u;
        };
      }
      var xg = vA(function(i, a, u) {
        var d = L;
        if (u.length) {
          var h = cr(u, io(xg));
          d |= H;
        }
        return Dn(i, d, a, u, h);
      }), Hm = vA(function(i, a, u) {
        var d = L | m;
        if (u.length) {
          var h = cr(u, io(Hm));
          d |= H;
        }
        return Dn(a, d, i, u, h);
      });
      function Sm(i, a, u) {
        a = u ? t : a;
        var d = Dn(i, y, t, t, t, t, t, a);
        return d.placeholder = Sm.placeholder, d;
      }
      function Lm(i, a, u) {
        a = u ? t : a;
        var d = Dn(i, I, t, t, t, t, t, a);
        return d.placeholder = Lm.placeholder, d;
      }
      function bm(i, a, u) {
        var d, h, Q, E, x, T, K = 0, M = !1, G = !1, z = !0;
        if (typeof i != "function")
          throw new Ht(s);
        a = Tt(a) || 0, qA(u) && (M = !!u.leading, G = "maxWait" in u, Q = G ? pe(Tt(u.maxWait) || 0, a) : Q, z = "trailing" in u ? !!u.trailing : z);
        function nA(se) {
          var qt = d, Nn = h;
          return d = h = t, K = se, E = i.apply(Nn, qt), E;
        }
        function uA(se) {
          return K = se, x = Da(CA, a), M ? nA(se) : E;
        }
        function hA(se) {
          var qt = se - T, Nn = se - K, jm = a - qt;
          return G ? Te(jm, Q - Nn) : jm;
        }
        function cA(se) {
          var qt = se - T, Nn = se - K;
          return T === t || qt >= a || qt < 0 || G && Nn >= Q;
        }
        function CA() {
          var se = ou();
          if (cA(se))
            return EA(se);
          x = Da(CA, hA(se));
        }
        function EA(se) {
          return x = t, z && d ? nA(se) : (d = h = t, E);
        }
        function pt() {
          x !== t && Pv(x), K = 0, d = T = h = x = t;
        }
        function Ve() {
          return x === t ? E : EA(ou());
        }
        function ht() {
          var se = ou(), qt = cA(se);
          if (d = arguments, h = this, T = se, qt) {
            if (x === t)
              return uA(T);
            if (G)
              return Pv(x), x = Da(CA, a), nA(T);
          }
          return x === t && (x = Da(CA, a)), E;
        }
        return ht.cancel = pt, ht.flush = Ve, ht;
      }
      var p2 = vA(function(i, a) {
        return Cv(i, 1, a);
      }), h2 = vA(function(i, a, u) {
        return Cv(i, Tt(a) || 0, u);
      });
      function w2(i) {
        return Dn(i, N);
      }
      function au(i, a) {
        if (typeof i != "function" || a != null && typeof a != "function")
          throw new Ht(s);
        var u = function() {
          var d = arguments, h = a ? a.apply(this, d) : d[0], Q = u.cache;
          if (Q.has(h))
            return Q.get(h);
          var E = i.apply(this, d);
          return u.cache = Q.set(h, E) || Q, E;
        };
        return u.cache = new (au.Cache || Tn)(), u;
      }
      au.Cache = Tn;
      function su(i) {
        if (typeof i != "function")
          throw new Ht(s);
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, a[0]);
            case 2:
              return !i.call(this, a[0], a[1]);
            case 3:
              return !i.call(this, a[0], a[1], a[2]);
          }
          return !i.apply(this, a);
        };
      }
      function v2(i) {
        return xm(2, i);
      }
      var m2 = o4(function(i, a) {
        a = a.length == 1 && gA(a[0]) ? JA(a[0], dt(aA())) : JA(xe(a, 1), dt(aA()));
        var u = a.length;
        return vA(function(d) {
          for (var h = -1, Q = Te(d.length, u); ++h < Q; )
            d[h] = a[h].call(this, d[h]);
          return ft(i, this, d);
        });
      }), Hg = vA(function(i, a) {
        var u = cr(a, io(Hg));
        return Dn(i, H, t, a, u);
      }), _m = vA(function(i, a) {
        var u = cr(a, io(_m));
        return Dn(i, S, t, a, u);
      }), C2 = kn(function(i, a) {
        return Dn(i, k, t, t, t, a);
      });
      function Q2(i, a) {
        if (typeof i != "function")
          throw new Ht(s);
        return a = a === t ? a : pA(a), vA(i, a);
      }
      function y2(i, a) {
        if (typeof i != "function")
          throw new Ht(s);
        return a = a == null ? 0 : pe(pA(a), 0), vA(function(u) {
          var d = u[a], h = pr(u, 0, a);
          return d && ur(h, d), ft(i, this, h);
        });
      }
      function F2(i, a, u) {
        var d = !0, h = !0;
        if (typeof i != "function")
          throw new Ht(s);
        return qA(u) && (d = "leading" in u ? !!u.leading : d, h = "trailing" in u ? !!u.trailing : h), bm(i, a, {
          leading: d,
          maxWait: a,
          trailing: h
        });
      }
      function U2(i) {
        return Im(i, 1);
      }
      function E2(i, a) {
        return Hg(dg(a), i);
      }
      function I2() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return gA(i) ? i : [i];
      }
      function x2(i) {
        return Lt(i, v);
      }
      function H2(i, a) {
        return a = typeof a == "function" ? a : t, Lt(i, v, a);
      }
      function S2(i) {
        return Lt(i, B | v);
      }
      function L2(i, a) {
        return a = typeof a == "function" ? a : t, Lt(i, B | v, a);
      }
      function b2(i, a) {
        return a == null || mv(i, a, Ce(a));
      }
      function Zt(i, a) {
        return i === a || i !== i && a !== a;
      }
      var _2 = Au(eg), T2 = Au(function(i, a) {
        return i >= a;
      }), di = Ev(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ev : function(i) {
        return re(i) && DA.call(i, "callee") && !fv.call(i, "callee");
      }, gA = D.isArray, O2 = X0 ? dt(X0) : GS;
      function Ze(i) {
        return i != null && lu(i.length) && !Kn(i);
      }
      function ae(i) {
        return re(i) && Ze(i);
      }
      function D2(i) {
        return i === !0 || i === !1 || re(i) && Pe(i) == Xt;
      }
      var hr = JH || Mg, k2 = z0 ? dt(z0) : VS;
      function R2(i) {
        return re(i) && i.nodeType === 1 && !ka(i);
      }
      function K2(i) {
        if (i == null)
          return !0;
        if (Ze(i) && (gA(i) || typeof i == "string" || typeof i.splice == "function" || hr(i) || oo(i) || di(i)))
          return !i.length;
        var a = Oe(i);
        if (a == zt || a == Yt)
          return !i.size;
        if (Oa(i))
          return !rg(i).length;
        for (var u in i)
          if (DA.call(i, u))
            return !1;
        return !0;
      }
      function M2(i, a) {
        return ba(i, a);
      }
      function N2(i, a, u) {
        u = typeof u == "function" ? u : t;
        var d = u ? u(i, a) : t;
        return d === t ? ba(i, a, t, u) : !!d;
      }
      function Sg(i) {
        if (!re(i))
          return !1;
        var a = Pe(i);
        return a == Ln || a == ha || typeof i.message == "string" && typeof i.name == "string" && !ka(i);
      }
      function P2(i) {
        return typeof i == "number" && gv(i);
      }
      function Kn(i) {
        if (!qA(i))
          return !1;
        var a = Pe(i);
        return a == ct || a == C0 || a == Ee || a == fx;
      }
      function Tm(i) {
        return typeof i == "number" && i == pA(i);
      }
      function lu(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= P;
      }
      function qA(i) {
        var a = typeof i;
        return i != null && (a == "object" || a == "function");
      }
      function re(i) {
        return i != null && typeof i == "object";
      }
      var Om = Y0 ? dt(Y0) : WS;
      function G2(i, a) {
        return i === a || ng(i, a, mg(a));
      }
      function V2(i, a, u) {
        return u = typeof u == "function" ? u : t, ng(i, a, mg(a), u);
      }
      function $2(i) {
        return Dm(i) && i != +i;
      }
      function W2(i) {
        if (H4(i))
          throw new dA(o);
        return Iv(i);
      }
      function X2(i) {
        return i === null;
      }
      function z2(i) {
        return i == null;
      }
      function Dm(i) {
        return typeof i == "number" || re(i) && Pe(i) == wa;
      }
      function ka(i) {
        if (!re(i) || Pe(i) != bn)
          return !1;
        var a = Dl(i);
        if (a === null)
          return !0;
        var u = DA.call(a, "constructor") && a.constructor;
        return typeof u == "function" && u instanceof u && bl.call(u) == VH;
      }
      var Lg = J0 ? dt(J0) : XS;
      function Y2(i) {
        return Tm(i) && i >= -P && i <= P;
      }
      var km = j0 ? dt(j0) : zS;
      function uu(i) {
        return typeof i == "string" || !gA(i) && re(i) && Pe(i) == ma;
      }
      function Bt(i) {
        return typeof i == "symbol" || re(i) && Pe(i) == yl;
      }
      var oo = Z0 ? dt(Z0) : YS;
      function J2(i) {
        return i === t;
      }
      function j2(i) {
        return re(i) && Oe(i) == Ca;
      }
      function Z2(i) {
        return re(i) && Pe(i) == gx;
      }
      var q2 = Au(ig), Ab = Au(function(i, a) {
        return i <= a;
      });
      function Rm(i) {
        if (!i)
          return [];
        if (Ze(i))
          return uu(i) ? Jt(i) : je(i);
        if (Fa && i[Fa])
          return bH(i[Fa]());
        var a = Oe(i), u = a == zt ? Wd : a == Yt ? Hl : ao;
        return u(i);
      }
      function Mn(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = Tt(i), i === J || i === -J) {
          var a = i < 0 ? -1 : 1;
          return a * V;
        }
        return i === i ? i : 0;
      }
      function pA(i) {
        var a = Mn(i), u = a % 1;
        return a === a ? u ? a - u : a : 0;
      }
      function Km(i) {
        return i ? li(pA(i), 0, j) : 0;
      }
      function Tt(i) {
        if (typeof i == "number")
          return i;
        if (Bt(i))
          return X;
        if (qA(i)) {
          var a = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = qA(a) ? a + "" : a;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = rv(i);
        var u = Ox.test(i);
        return u || kx.test(i) ? BH(i.slice(2), u ? 2 : 8) : Tx.test(i) ? X : +i;
      }
      function Mm(i) {
        return pn(i, qe(i));
      }
      function eb(i) {
        return i ? li(pA(i), -P, P) : i === 0 ? i : 0;
      }
      function bA(i) {
        return i == null ? "" : gt(i);
      }
      var tb = no(function(i, a) {
        if (Oa(a) || Ze(a)) {
          pn(a, Ce(a), i);
          return;
        }
        for (var u in a)
          DA.call(a, u) && Ha(i, u, a[u]);
      }), Nm = no(function(i, a) {
        pn(a, qe(a), i);
      }), cu = no(function(i, a, u, d) {
        pn(a, qe(a), i, d);
      }), nb = no(function(i, a, u, d) {
        pn(a, Ce(a), i, d);
      }), rb = kn(Zd);
      function ib(i, a) {
        var u = to(i);
        return a == null ? u : vv(u, a);
      }
      var ob = vA(function(i, a) {
        i = KA(i);
        var u = -1, d = a.length, h = d > 2 ? a[2] : t;
        for (h && Ge(a[0], a[1], h) && (d = 1); ++u < d; )
          for (var Q = a[u], E = qe(Q), x = -1, T = E.length; ++x < T; ) {
            var K = E[x], M = i[K];
            (M === t || Zt(M, qi[K]) && !DA.call(i, K)) && (i[K] = Q[K]);
          }
        return i;
      }), ab = vA(function(i) {
        return i.push(t, rm), ft(Pm, t, i);
      });
      function sb(i, a) {
        return Av(i, aA(a, 3), Bn);
      }
      function lb(i, a) {
        return Av(i, aA(a, 3), Ag);
      }
      function ub(i, a) {
        return i == null ? i : qd(i, aA(a, 3), qe);
      }
      function cb(i, a) {
        return i == null ? i : Fv(i, aA(a, 3), qe);
      }
      function fb(i, a) {
        return i && Bn(i, aA(a, 3));
      }
      function db(i, a) {
        return i && Ag(i, aA(a, 3));
      }
      function gb(i) {
        return i == null ? [] : Wl(i, Ce(i));
      }
      function Bb(i) {
        return i == null ? [] : Wl(i, qe(i));
      }
      function bg(i, a, u) {
        var d = i == null ? t : ui(i, a);
        return d === t ? u : d;
      }
      function pb(i, a) {
        return i != null && am(i, a, KS);
      }
      function _g(i, a) {
        return i != null && am(i, a, MS);
      }
      var hb = qv(function(i, a, u) {
        a != null && typeof a.toString != "function" && (a = _l.call(a)), i[a] = u;
      }, Og(At)), wb = qv(function(i, a, u) {
        a != null && typeof a.toString != "function" && (a = _l.call(a)), DA.call(i, a) ? i[a].push(u) : i[a] = [u];
      }, aA), vb = vA(La);
      function Ce(i) {
        return Ze(i) ? hv(i) : rg(i);
      }
      function qe(i) {
        return Ze(i) ? hv(i, !0) : JS(i);
      }
      function mb(i, a) {
        var u = {};
        return a = aA(a, 3), Bn(i, function(d, h, Q) {
          On(u, a(d, h, Q), d);
        }), u;
      }
      function Cb(i, a) {
        var u = {};
        return a = aA(a, 3), Bn(i, function(d, h, Q) {
          On(u, h, a(d, h, Q));
        }), u;
      }
      var Qb = no(function(i, a, u) {
        Xl(i, a, u);
      }), Pm = no(function(i, a, u, d) {
        Xl(i, a, u, d);
      }), yb = kn(function(i, a) {
        var u = {};
        if (i == null)
          return u;
        var d = !1;
        a = JA(a, function(Q) {
          return Q = Br(Q, i), d || (d = Q.length > 1), Q;
        }), pn(i, wg(i), u), d && (u = Lt(u, B | p | v, h4));
        for (var h = a.length; h--; )
          ug(u, a[h]);
        return u;
      });
      function Fb(i, a) {
        return Gm(i, su(aA(a)));
      }
      var Ub = kn(function(i, a) {
        return i == null ? {} : ZS(i, a);
      });
      function Gm(i, a) {
        if (i == null)
          return {};
        var u = JA(wg(i), function(d) {
          return [d];
        });
        return a = aA(a), Tv(i, u, function(d, h) {
          return a(d, h[0]);
        });
      }
      function Eb(i, a, u) {
        a = Br(a, i);
        var d = -1, h = a.length;
        for (h || (h = 1, i = t); ++d < h; ) {
          var Q = i == null ? t : i[hn(a[d])];
          Q === t && (d = h, Q = u), i = Kn(Q) ? Q.call(i) : Q;
        }
        return i;
      }
      function Ib(i, a, u) {
        return i == null ? i : _a(i, a, u);
      }
      function xb(i, a, u, d) {
        return d = typeof d == "function" ? d : t, i == null ? i : _a(i, a, u, d);
      }
      var Vm = tm(Ce), $m = tm(qe);
      function Hb(i, a, u) {
        var d = gA(i), h = d || hr(i) || oo(i);
        if (a = aA(a, 4), u == null) {
          var Q = i && i.constructor;
          h ? u = d ? new Q() : [] : qA(i) ? u = Kn(Q) ? to(Dl(i)) : {} : u = {};
        }
        return (h ? xt : Bn)(i, function(E, x, T) {
          return a(u, E, x, T);
        }), u;
      }
      function Sb(i, a) {
        return i == null ? !0 : ug(i, a);
      }
      function Lb(i, a, u) {
        return i == null ? i : Kv(i, a, dg(u));
      }
      function bb(i, a, u, d) {
        return d = typeof d == "function" ? d : t, i == null ? i : Kv(i, a, dg(u), d);
      }
      function ao(i) {
        return i == null ? [] : $d(i, Ce(i));
      }
      function _b(i) {
        return i == null ? [] : $d(i, qe(i));
      }
      function Tb(i, a, u) {
        return u === t && (u = a, a = t), u !== t && (u = Tt(u), u = u === u ? u : 0), a !== t && (a = Tt(a), a = a === a ? a : 0), li(Tt(i), a, u);
      }
      function Ob(i, a, u) {
        return a = Mn(a), u === t ? (u = a, a = 0) : u = Mn(u), i = Tt(i), NS(i, a, u);
      }
      function Db(i, a, u) {
        if (u && typeof u != "boolean" && Ge(i, a, u) && (a = u = t), u === t && (typeof a == "boolean" ? (u = a, a = t) : typeof i == "boolean" && (u = i, i = t)), i === t && a === t ? (i = 0, a = 1) : (i = Mn(i), a === t ? (a = i, i = 0) : a = Mn(a)), i > a) {
          var d = i;
          i = a, a = d;
        }
        if (u || i % 1 || a % 1) {
          var h = Bv();
          return Te(i + h * (a - i + gH("1e-" + ((h + "").length - 1))), a);
        }
        return ag(i, a);
      }
      var kb = ro(function(i, a, u) {
        return a = a.toLowerCase(), i + (u ? Wm(a) : a);
      });
      function Wm(i) {
        return Tg(bA(i).toLowerCase());
      }
      function Xm(i) {
        return i = bA(i), i && i.replace(Kx, IH).replace(rH, "");
      }
      function Rb(i, a, u) {
        i = bA(i), a = gt(a);
        var d = i.length;
        u = u === t ? d : li(pA(u), 0, d);
        var h = u;
        return u -= a.length, u >= 0 && i.slice(u, h) == a;
      }
      function Kb(i) {
        return i = bA(i), i && vx.test(i) ? i.replace(F0, xH) : i;
      }
      function Mb(i) {
        return i = bA(i), i && Ux.test(i) ? i.replace(Hd, "\\$&") : i;
      }
      var Nb = ro(function(i, a, u) {
        return i + (u ? "-" : "") + a.toLowerCase();
      }), Pb = ro(function(i, a, u) {
        return i + (u ? " " : "") + a.toLowerCase();
      }), Gb = Jv("toLowerCase");
      function Vb(i, a, u) {
        i = bA(i), a = pA(a);
        var d = a ? ji(i) : 0;
        if (!a || d >= a)
          return i;
        var h = (a - d) / 2;
        return ql(Ml(h), u) + i + ql(Kl(h), u);
      }
      function $b(i, a, u) {
        i = bA(i), a = pA(a);
        var d = a ? ji(i) : 0;
        return a && d < a ? i + ql(a - d, u) : i;
      }
      function Wb(i, a, u) {
        i = bA(i), a = pA(a);
        var d = a ? ji(i) : 0;
        return a && d < a ? ql(a - d, u) + i : i;
      }
      function Xb(i, a, u) {
        return u || a == null ? a = 0 : a && (a = +a), AS(bA(i).replace(Sd, ""), a || 0);
      }
      function zb(i, a, u) {
        return (u ? Ge(i, a, u) : a === t) ? a = 1 : a = pA(a), sg(bA(i), a);
      }
      function Yb() {
        var i = arguments, a = bA(i[0]);
        return i.length < 3 ? a : a.replace(i[1], i[2]);
      }
      var Jb = ro(function(i, a, u) {
        return i + (u ? "_" : "") + a.toLowerCase();
      });
      function jb(i, a, u) {
        return u && typeof u != "number" && Ge(i, a, u) && (a = u = t), u = u === t ? j : u >>> 0, u ? (i = bA(i), i && (typeof a == "string" || a != null && !Lg(a)) && (a = gt(a), !a && Ji(i)) ? pr(Jt(i), 0, u) : i.split(a, u)) : [];
      }
      var Zb = ro(function(i, a, u) {
        return i + (u ? " " : "") + Tg(a);
      });
      function qb(i, a, u) {
        return i = bA(i), u = u == null ? 0 : li(pA(u), 0, i.length), a = gt(a), i.slice(u, u + a.length) == a;
      }
      function A_(i, a, u) {
        var d = C.templateSettings;
        u && Ge(i, a, u) && (a = t), i = bA(i), a = cu({}, a, d, nm);
        var h = cu({}, a.imports, d.imports, nm), Q = Ce(h), E = $d(h, Q), x, T, K = 0, M = a.interpolate || Fl, G = "__p += '", z = Xd(
          (a.escape || Fl).source + "|" + M.source + "|" + (M === U0 ? _x : Fl).source + "|" + (a.evaluate || Fl).source + "|$",
          "g"
        ), nA = "//# sourceURL=" + (DA.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++lH + "]") + `
`;
        i.replace(z, function(cA, CA, EA, pt, Ve, ht) {
          return EA || (EA = pt), G += i.slice(K, ht).replace(Mx, HH), CA && (x = !0, G += `' +
__e(` + CA + `) +
'`), Ve && (T = !0, G += `';
` + Ve + `;
__p += '`), EA && (G += `' +
((__t = (` + EA + `)) == null ? '' : __t) +
'`), K = ht + cA.length, cA;
        }), G += `';
`;
        var uA = DA.call(a, "variable") && a.variable;
        if (!uA)
          G = `with (obj) {
` + G + `
}
`;
        else if (Lx.test(uA))
          throw new dA(l);
        G = (T ? G.replace(Bx, "") : G).replace(px, "$1").replace(hx, "$1;"), G = "function(" + (uA || "obj") + `) {
` + (uA ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + G + `return __p
}`;
        var hA = Ym(function() {
          return SA(Q, nA + "return " + G).apply(t, E);
        });
        if (hA.source = G, Sg(hA))
          throw hA;
        return hA;
      }
      function e_(i) {
        return bA(i).toLowerCase();
      }
      function t_(i) {
        return bA(i).toUpperCase();
      }
      function n_(i, a, u) {
        if (i = bA(i), i && (u || a === t))
          return rv(i);
        if (!i || !(a = gt(a)))
          return i;
        var d = Jt(i), h = Jt(a), Q = iv(d, h), E = ov(d, h) + 1;
        return pr(d, Q, E).join("");
      }
      function r_(i, a, u) {
        if (i = bA(i), i && (u || a === t))
          return i.slice(0, sv(i) + 1);
        if (!i || !(a = gt(a)))
          return i;
        var d = Jt(i), h = ov(d, Jt(a)) + 1;
        return pr(d, 0, h).join("");
      }
      function i_(i, a, u) {
        if (i = bA(i), i && (u || a === t))
          return i.replace(Sd, "");
        if (!i || !(a = gt(a)))
          return i;
        var d = Jt(i), h = iv(d, Jt(a));
        return pr(d, h).join("");
      }
      function o_(i, a) {
        var u = W, d = sA;
        if (qA(a)) {
          var h = "separator" in a ? a.separator : h;
          u = "length" in a ? pA(a.length) : u, d = "omission" in a ? gt(a.omission) : d;
        }
        i = bA(i);
        var Q = i.length;
        if (Ji(i)) {
          var E = Jt(i);
          Q = E.length;
        }
        if (u >= Q)
          return i;
        var x = u - ji(d);
        if (x < 1)
          return d;
        var T = E ? pr(E, 0, x).join("") : i.slice(0, x);
        if (h === t)
          return T + d;
        if (E && (x += T.length - x), Lg(h)) {
          if (i.slice(x).search(h)) {
            var K, M = T;
            for (h.global || (h = Xd(h.source, bA(E0.exec(h)) + "g")), h.lastIndex = 0; K = h.exec(M); )
              var G = K.index;
            T = T.slice(0, G === t ? x : G);
          }
        } else if (i.indexOf(gt(h), x) != x) {
          var z = T.lastIndexOf(h);
          z > -1 && (T = T.slice(0, z));
        }
        return T + d;
      }
      function a_(i) {
        return i = bA(i), i && wx.test(i) ? i.replace(y0, DH) : i;
      }
      var s_ = ro(function(i, a, u) {
        return i + (u ? " " : "") + a.toUpperCase();
      }), Tg = Jv("toUpperCase");
      function zm(i, a, u) {
        return i = bA(i), a = u ? t : a, a === t ? LH(i) ? KH(i) : QH(i) : i.match(a) || [];
      }
      var Ym = vA(function(i, a) {
        try {
          return ft(i, t, a);
        } catch (u) {
          return Sg(u) ? u : new dA(u);
        }
      }), l_ = kn(function(i, a) {
        return xt(a, function(u) {
          u = hn(u), On(i, u, xg(i[u], i));
        }), i;
      });
      function u_(i) {
        var a = i == null ? 0 : i.length, u = aA();
        return i = a ? JA(i, function(d) {
          if (typeof d[1] != "function")
            throw new Ht(s);
          return [u(d[0]), d[1]];
        }) : [], vA(function(d) {
          for (var h = -1; ++h < a; ) {
            var Q = i[h];
            if (ft(Q[0], this, d))
              return ft(Q[1], this, d);
          }
        });
      }
      function c_(i) {
        return DS(Lt(i, B));
      }
      function Og(i) {
        return function() {
          return i;
        };
      }
      function f_(i, a) {
        return i == null || i !== i ? a : i;
      }
      var d_ = Zv(), g_ = Zv(!0);
      function At(i) {
        return i;
      }
      function Dg(i) {
        return xv(typeof i == "function" ? i : Lt(i, B));
      }
      function B_(i) {
        return Sv(Lt(i, B));
      }
      function p_(i, a) {
        return Lv(i, Lt(a, B));
      }
      var h_ = vA(function(i, a) {
        return function(u) {
          return La(u, i, a);
        };
      }), w_ = vA(function(i, a) {
        return function(u) {
          return La(i, u, a);
        };
      });
      function kg(i, a, u) {
        var d = Ce(a), h = Wl(a, d);
        u == null && !(qA(a) && (h.length || !d.length)) && (u = a, a = i, i = this, h = Wl(a, Ce(a)));
        var Q = !(qA(u) && "chain" in u) || !!u.chain, E = Kn(i);
        return xt(h, function(x) {
          var T = a[x];
          i[x] = T, E && (i.prototype[x] = function() {
            var K = this.__chain__;
            if (Q || K) {
              var M = i(this.__wrapped__), G = M.__actions__ = je(this.__actions__);
              return G.push({ func: T, args: arguments, thisArg: i }), M.__chain__ = K, M;
            }
            return T.apply(i, ur([this.value()], arguments));
          });
        }), i;
      }
      function v_() {
        return Ie._ === this && (Ie._ = $H), this;
      }
      function Rg() {
      }
      function m_(i) {
        return i = pA(i), vA(function(a) {
          return bv(a, i);
        });
      }
      var C_ = Bg(JA), Q_ = Bg(q0), y_ = Bg(Md);
      function Jm(i) {
        return Qg(i) ? Nd(hn(i)) : qS(i);
      }
      function F_(i) {
        return function(a) {
          return i == null ? t : ui(i, a);
        };
      }
      var U_ = Am(), E_ = Am(!0);
      function Kg() {
        return [];
      }
      function Mg() {
        return !1;
      }
      function I_() {
        return {};
      }
      function x_() {
        return "";
      }
      function H_() {
        return !0;
      }
      function S_(i, a) {
        if (i = pA(i), i < 1 || i > P)
          return [];
        var u = j, d = Te(i, j);
        a = aA(a), i -= j;
        for (var h = Vd(d, a); ++u < i; )
          a(u);
        return h;
      }
      function L_(i) {
        return gA(i) ? JA(i, hn) : Bt(i) ? [i] : je(pm(bA(i)));
      }
      function b_(i) {
        var a = ++GH;
        return bA(i) + a;
      }
      var __ = Zl(function(i, a) {
        return i + a;
      }, 0), T_ = pg("ceil"), O_ = Zl(function(i, a) {
        return i / a;
      }, 1), D_ = pg("floor");
      function k_(i) {
        return i && i.length ? $l(i, At, eg) : t;
      }
      function R_(i, a) {
        return i && i.length ? $l(i, aA(a, 2), eg) : t;
      }
      function K_(i) {
        return tv(i, At);
      }
      function M_(i, a) {
        return tv(i, aA(a, 2));
      }
      function N_(i) {
        return i && i.length ? $l(i, At, ig) : t;
      }
      function P_(i, a) {
        return i && i.length ? $l(i, aA(a, 2), ig) : t;
      }
      var G_ = Zl(function(i, a) {
        return i * a;
      }, 1), V_ = pg("round"), $_ = Zl(function(i, a) {
        return i - a;
      }, 0);
      function W_(i) {
        return i && i.length ? Gd(i, At) : 0;
      }
      function X_(i, a) {
        return i && i.length ? Gd(i, aA(a, 2)) : 0;
      }
      return C.after = B2, C.ary = Im, C.assign = tb, C.assignIn = Nm, C.assignInWith = cu, C.assignWith = nb, C.at = rb, C.before = xm, C.bind = xg, C.bindAll = l_, C.bindKey = Hm, C.castArray = I2, C.chain = Fm, C.chunk = D4, C.compact = k4, C.concat = R4, C.cond = u_, C.conforms = c_, C.constant = Og, C.countBy = WL, C.create = ib, C.curry = Sm, C.curryRight = Lm, C.debounce = bm, C.defaults = ob, C.defaultsDeep = ab, C.defer = p2, C.delay = h2, C.difference = K4, C.differenceBy = M4, C.differenceWith = N4, C.drop = P4, C.dropRight = G4, C.dropRightWhile = V4, C.dropWhile = $4, C.fill = W4, C.filter = zL, C.flatMap = jL, C.flatMapDeep = ZL, C.flatMapDepth = qL, C.flatten = mm, C.flattenDeep = X4, C.flattenDepth = z4, C.flip = w2, C.flow = d_, C.flowRight = g_, C.fromPairs = Y4, C.functions = gb, C.functionsIn = Bb, C.groupBy = A2, C.initial = j4, C.intersection = Z4, C.intersectionBy = q4, C.intersectionWith = AL, C.invert = hb, C.invertBy = wb, C.invokeMap = t2, C.iteratee = Dg, C.keyBy = n2, C.keys = Ce, C.keysIn = qe, C.map = iu, C.mapKeys = mb, C.mapValues = Cb, C.matches = B_, C.matchesProperty = p_, C.memoize = au, C.merge = Qb, C.mergeWith = Pm, C.method = h_, C.methodOf = w_, C.mixin = kg, C.negate = su, C.nthArg = m_, C.omit = yb, C.omitBy = Fb, C.once = v2, C.orderBy = r2, C.over = C_, C.overArgs = m2, C.overEvery = Q_, C.overSome = y_, C.partial = Hg, C.partialRight = _m, C.partition = i2, C.pick = Ub, C.pickBy = Gm, C.property = Jm, C.propertyOf = F_, C.pull = rL, C.pullAll = Qm, C.pullAllBy = iL, C.pullAllWith = oL, C.pullAt = aL, C.range = U_, C.rangeRight = E_, C.rearg = C2, C.reject = s2, C.remove = sL, C.rest = Q2, C.reverse = Eg, C.sampleSize = u2, C.set = Ib, C.setWith = xb, C.shuffle = c2, C.slice = lL, C.sortBy = g2, C.sortedUniq = pL, C.sortedUniqBy = hL, C.split = jb, C.spread = y2, C.tail = wL, C.take = vL, C.takeRight = mL, C.takeRightWhile = CL, C.takeWhile = QL, C.tap = kL, C.throttle = F2, C.thru = ru, C.toArray = Rm, C.toPairs = Vm, C.toPairsIn = $m, C.toPath = L_, C.toPlainObject = Mm, C.transform = Hb, C.unary = U2, C.union = yL, C.unionBy = FL, C.unionWith = UL, C.uniq = EL, C.uniqBy = IL, C.uniqWith = xL, C.unset = Sb, C.unzip = Ig, C.unzipWith = ym, C.update = Lb, C.updateWith = bb, C.values = ao, C.valuesIn = _b, C.without = HL, C.words = zm, C.wrap = E2, C.xor = SL, C.xorBy = LL, C.xorWith = bL, C.zip = _L, C.zipObject = TL, C.zipObjectDeep = OL, C.zipWith = DL, C.entries = Vm, C.entriesIn = $m, C.extend = Nm, C.extendWith = cu, kg(C, C), C.add = __, C.attempt = Ym, C.camelCase = kb, C.capitalize = Wm, C.ceil = T_, C.clamp = Tb, C.clone = x2, C.cloneDeep = S2, C.cloneDeepWith = L2, C.cloneWith = H2, C.conformsTo = b2, C.deburr = Xm, C.defaultTo = f_, C.divide = O_, C.endsWith = Rb, C.eq = Zt, C.escape = Kb, C.escapeRegExp = Mb, C.every = XL, C.find = YL, C.findIndex = wm, C.findKey = sb, C.findLast = JL, C.findLastIndex = vm, C.findLastKey = lb, C.floor = D_, C.forEach = Um, C.forEachRight = Em, C.forIn = ub, C.forInRight = cb, C.forOwn = fb, C.forOwnRight = db, C.get = bg, C.gt = _2, C.gte = T2, C.has = pb, C.hasIn = _g, C.head = Cm, C.identity = At, C.includes = e2, C.indexOf = J4, C.inRange = Ob, C.invoke = vb, C.isArguments = di, C.isArray = gA, C.isArrayBuffer = O2, C.isArrayLike = Ze, C.isArrayLikeObject = ae, C.isBoolean = D2, C.isBuffer = hr, C.isDate = k2, C.isElement = R2, C.isEmpty = K2, C.isEqual = M2, C.isEqualWith = N2, C.isError = Sg, C.isFinite = P2, C.isFunction = Kn, C.isInteger = Tm, C.isLength = lu, C.isMap = Om, C.isMatch = G2, C.isMatchWith = V2, C.isNaN = $2, C.isNative = W2, C.isNil = z2, C.isNull = X2, C.isNumber = Dm, C.isObject = qA, C.isObjectLike = re, C.isPlainObject = ka, C.isRegExp = Lg, C.isSafeInteger = Y2, C.isSet = km, C.isString = uu, C.isSymbol = Bt, C.isTypedArray = oo, C.isUndefined = J2, C.isWeakMap = j2, C.isWeakSet = Z2, C.join = eL, C.kebabCase = Nb, C.last = _t, C.lastIndexOf = tL, C.lowerCase = Pb, C.lowerFirst = Gb, C.lt = q2, C.lte = Ab, C.max = k_, C.maxBy = R_, C.mean = K_, C.meanBy = M_, C.min = N_, C.minBy = P_, C.stubArray = Kg, C.stubFalse = Mg, C.stubObject = I_, C.stubString = x_, C.stubTrue = H_, C.multiply = G_, C.nth = nL, C.noConflict = v_, C.noop = Rg, C.now = ou, C.pad = Vb, C.padEnd = $b, C.padStart = Wb, C.parseInt = Xb, C.random = Db, C.reduce = o2, C.reduceRight = a2, C.repeat = zb, C.replace = Yb, C.result = Eb, C.round = V_, C.runInContext = _, C.sample = l2, C.size = f2, C.snakeCase = Jb, C.some = d2, C.sortedIndex = uL, C.sortedIndexBy = cL, C.sortedIndexOf = fL, C.sortedLastIndex = dL, C.sortedLastIndexBy = gL, C.sortedLastIndexOf = BL, C.startCase = Zb, C.startsWith = qb, C.subtract = $_, C.sum = W_, C.sumBy = X_, C.template = A_, C.times = S_, C.toFinite = Mn, C.toInteger = pA, C.toLength = Km, C.toLower = e_, C.toNumber = Tt, C.toSafeInteger = eb, C.toString = bA, C.toUpper = t_, C.trim = n_, C.trimEnd = r_, C.trimStart = i_, C.truncate = o_, C.unescape = a_, C.uniqueId = b_, C.upperCase = s_, C.upperFirst = Tg, C.each = Um, C.eachRight = Em, C.first = Cm, kg(C, function() {
        var i = {};
        return Bn(C, function(a, u) {
          DA.call(C.prototype, u) || (i[u] = a);
        }), i;
      }(), { chain: !1 }), C.VERSION = n, xt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        C[i].placeholder = C;
      }), xt(["drop", "take"], function(i, a) {
        FA.prototype[i] = function(u) {
          u = u === t ? 1 : pe(pA(u), 0);
          var d = this.__filtered__ && !a ? new FA(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Te(u, d.__takeCount__) : d.__views__.push({
            size: Te(u, j),
            type: i + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, FA.prototype[i + "Right"] = function(u) {
          return this.reverse()[i](u).reverse();
        };
      }), xt(["filter", "map", "takeWhile"], function(i, a) {
        var u = a + 1, d = u == lA || u == fA;
        FA.prototype[i] = function(h) {
          var Q = this.clone();
          return Q.__iteratees__.push({
            iteratee: aA(h, 3),
            type: u
          }), Q.__filtered__ = Q.__filtered__ || d, Q;
        };
      }), xt(["head", "last"], function(i, a) {
        var u = "take" + (a ? "Right" : "");
        FA.prototype[i] = function() {
          return this[u](1).value()[0];
        };
      }), xt(["initial", "tail"], function(i, a) {
        var u = "drop" + (a ? "" : "Right");
        FA.prototype[i] = function() {
          return this.__filtered__ ? new FA(this) : this[u](1);
        };
      }), FA.prototype.compact = function() {
        return this.filter(At);
      }, FA.prototype.find = function(i) {
        return this.filter(i).head();
      }, FA.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, FA.prototype.invokeMap = vA(function(i, a) {
        return typeof i == "function" ? new FA(this) : this.map(function(u) {
          return La(u, i, a);
        });
      }), FA.prototype.reject = function(i) {
        return this.filter(su(aA(i)));
      }, FA.prototype.slice = function(i, a) {
        i = pA(i);
        var u = this;
        return u.__filtered__ && (i > 0 || a < 0) ? new FA(u) : (i < 0 ? u = u.takeRight(-i) : i && (u = u.drop(i)), a !== t && (a = pA(a), u = a < 0 ? u.dropRight(-a) : u.take(a - i)), u);
      }, FA.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, FA.prototype.toArray = function() {
        return this.take(j);
      }, Bn(FA.prototype, function(i, a) {
        var u = /^(?:filter|find|map|reject)|While$/.test(a), d = /^(?:head|last)$/.test(a), h = C[d ? "take" + (a == "last" ? "Right" : "") : a], Q = d || /^find/.test(a);
        h && (C.prototype[a] = function() {
          var E = this.__wrapped__, x = d ? [1] : arguments, T = E instanceof FA, K = x[0], M = T || gA(E), G = function(CA) {
            var EA = h.apply(C, ur([CA], x));
            return d && z ? EA[0] : EA;
          };
          M && u && typeof K == "function" && K.length != 1 && (T = M = !1);
          var z = this.__chain__, nA = !!this.__actions__.length, uA = Q && !z, hA = T && !nA;
          if (!Q && M) {
            E = hA ? E : new FA(this);
            var cA = i.apply(E, x);
            return cA.__actions__.push({ func: ru, args: [G], thisArg: t }), new St(cA, z);
          }
          return uA && hA ? i.apply(this, x) : (cA = this.thru(G), uA ? d ? cA.value()[0] : cA.value() : cA);
        });
      }), xt(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var a = Sl[i], u = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(i);
        C.prototype[i] = function() {
          var h = arguments;
          if (d && !this.__chain__) {
            var Q = this.value();
            return a.apply(gA(Q) ? Q : [], h);
          }
          return this[u](function(E) {
            return a.apply(gA(E) ? E : [], h);
          });
        };
      }), Bn(FA.prototype, function(i, a) {
        var u = C[a];
        if (u) {
          var d = u.name + "";
          DA.call(eo, d) || (eo[d] = []), eo[d].push({ name: a, func: u });
        }
      }), eo[jl(t, m).name] = [{
        name: "wrapper",
        func: t
      }], FA.prototype.clone = aS, FA.prototype.reverse = sS, FA.prototype.value = lS, C.prototype.at = RL, C.prototype.chain = KL, C.prototype.commit = ML, C.prototype.next = NL, C.prototype.plant = GL, C.prototype.reverse = VL, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = $L, C.prototype.first = C.prototype.head, Fa && (C.prototype[Fa] = PL), C;
    }, Zi = MH();
    ii ? ((ii.exports = Zi)._ = Zi, Dd._ = Zi) : Ie._ = Zi;
  }).call(Ra);
})(Bf, Bf.exports);
var WN = Bf.exports;
const XN = "_dialog_1qo56_1", zN = "_overlay_1qo56_6", YN = "_container_1qo56_13", JN = "_dialogPanel_1qo56_24", jN = "_searchIcon_1qo56_36", ZN = "_inputField_1qo56_46", po = {
  dialog: XN,
  overlay: zN,
  container: YN,
  dialogPanel: JN,
  searchIcon: jN,
  inputField: ZN
};
var qN = Object.defineProperty, A3 = (A, e, t) => e in A ? qN(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, TB = (A, e, t) => (A3(A, typeof e != "symbol" ? e + "" : e, t), t);
let e3 = class {
  constructor() {
    TB(this, "current", this.detect()), TB(this, "handoffState", "pending"), TB(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, bi = new e3();
function Vw(A) {
  return bi.isServer ? null : A instanceof Node ? A.ownerDocument : A != null && A.hasOwnProperty("current") && A.current instanceof Node ? A.current.ownerDocument : document;
}
function ed(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function ni() {
  let A = [], e = { addEventListener(t, n, r, o) {
    return t.addEventListener(n, r, o), e.add(() => t.removeEventListener(n, r, o));
  }, requestAnimationFrame(...t) {
    let n = requestAnimationFrame(...t);
    return e.add(() => cancelAnimationFrame(n));
  }, nextFrame(...t) {
    return e.requestAnimationFrame(() => e.requestAnimationFrame(...t));
  }, setTimeout(...t) {
    let n = setTimeout(...t);
    return e.add(() => clearTimeout(n));
  }, microTask(...t) {
    let n = { current: !0 };
    return ed(() => {
      n.current && t[0]();
    }), e.add(() => {
      n.current = !1;
    });
  }, style(t, n, r) {
    let o = t.style.getPropertyValue(n);
    return Object.assign(t.style, { [n]: r }), this.add(() => {
      Object.assign(t.style, { [n]: o });
    });
  }, group(t) {
    let n = ni();
    return t(n), this.add(() => n.dispose());
  }, add(t) {
    return A.includes(t) || A.push(t), () => {
      let n = A.indexOf(t);
      if (n >= 0) for (let r of A.splice(n, 1)) r();
    };
  }, dispose() {
    for (let t of A.splice(0)) t();
  } };
  return e;
}
function $w() {
  let [A] = b.useState(ni);
  return b.useEffect(() => () => A.dispose(), [A]), A;
}
let ze = (A, e) => {
  bi.isServer ? b.useEffect(A, e) : b.useLayoutEffect(A, e);
};
function $i(A) {
  let e = b.useRef(A);
  return ze(() => {
    e.current = A;
  }, [A]), e;
}
let ee = function(A) {
  let e = $i(A);
  return oA.useCallback((...t) => e.current(...t), [e]);
}, t3 = b.createContext(void 0);
function n3() {
  return b.useContext(t3);
}
function lh(...A) {
  return Array.from(new Set(A.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function zr(A, e, ...t) {
  if (A in e) {
    let r = e[A];
    return typeof r == "function" ? r(...t) : r;
  }
  let n = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, zr), n;
}
var pf = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(pf || {}), Tr = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(Tr || {});
function Wt({ ourProps: A, theirProps: e, slot: t, defaultTag: n, features: r, visible: o = !0, name: s, mergeRefs: l }) {
  l = l ?? r3;
  let c = mE(e, A);
  if (o) return Zu(c, t, n, s, l);
  let f = r ?? 0;
  if (f & 2) {
    let { static: g = !1, ...B } = c;
    if (g) return Zu(B, t, n, s, l);
  }
  if (f & 1) {
    let { unmount: g = !0, ...B } = c;
    return zr(g ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Zu({ ...B, hidden: !0, style: { display: "none" } }, t, n, s, l);
    } });
  }
  return Zu(c, t, n, s, l);
}
function Zu(A, e = {}, t, n, r) {
  let { as: o = t, children: s, refName: l = "ref", ...c } = OB(A, ["unmount", "static"]), f = A.ref !== void 0 ? { [l]: A.ref } : {}, g = typeof s == "function" ? s(e) : s;
  "className" in c && c.className && typeof c.className == "function" && (c.className = c.className(e)), c["aria-labelledby"] && c["aria-labelledby"] === c.id && (c["aria-labelledby"] = void 0);
  let B = {};
  if (e) {
    let p = !1, v = [];
    for (let [F, U] of Object.entries(e)) typeof U == "boolean" && (p = !0), U === !0 && v.push(F.replace(/([A-Z])/g, (L) => `-${L.toLowerCase()}`));
    if (p) {
      B["data-headlessui-state"] = v.join(" ");
      for (let F of v) B[`data-${F}`] = "";
    }
  }
  if (o === b.Fragment && (Object.keys(hi(c)).length > 0 || Object.keys(hi(B)).length > 0)) if (!b.isValidElement(g) || Array.isArray(g) && g.length > 1) {
    if (Object.keys(hi(c)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(hi(c)).concat(Object.keys(hi(B))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = g.props, v = p == null ? void 0 : p.className, F = typeof v == "function" ? (...m) => lh(v(...m), c.className) : lh(v, c.className), U = F ? { className: F } : {}, L = mE(g.props, hi(OB(c, ["ref"])));
    for (let m in B) m in L && delete B[m];
    return b.cloneElement(g, Object.assign({}, L, B, f, { ref: r(g.ref, f.ref) }, U));
  }
  return b.createElement(o, Object.assign({}, OB(c, ["ref"]), o !== b.Fragment && f, o !== b.Fragment && B), g);
}
function r3(...A) {
  return A.every((e) => e == null) ? void 0 : (e) => {
    for (let t of A) t != null && (typeof t == "function" ? t(e) : t.current = e);
  };
}
function mE(...A) {
  if (A.length === 0) return {};
  if (A.length === 1) return A[0];
  let e = {}, t = {};
  for (let n of A) for (let r in n) r.startsWith("on") && typeof n[r] == "function" ? (t[r] != null || (t[r] = []), t[r].push(n[r])) : e[r] = n[r];
  if (e.disabled || e["aria-disabled"]) for (let n in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (t[n] = [(r) => {
    var o;
    return (o = r == null ? void 0 : r.preventDefault) == null ? void 0 : o.call(r);
  }]);
  for (let n in t) Object.assign(e, { [n](r, ...o) {
    let s = t[n];
    for (let l of s) {
      if ((r instanceof Event || (r == null ? void 0 : r.nativeEvent) instanceof Event) && r.defaultPrevented) return;
      l(r, ...o);
    }
  } });
  return e;
}
function lt(A) {
  var e;
  return Object.assign(b.forwardRef(A), { displayName: (e = A.displayName) != null ? e : A.name });
}
function hi(A) {
  let e = Object.assign({}, A);
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function OB(A, e = []) {
  let t = Object.assign({}, A);
  for (let n of e) n in t && delete t[n];
  return t;
}
let i3 = "div";
var hf = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(hf || {});
function o3(A, e) {
  var t;
  let { features: n = 1, ...r } = A, o = { ref: e, "aria-hidden": (n & 2) === 2 ? !0 : (t = r["aria-hidden"]) != null ? t : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Wt({ ourProps: o, theirProps: r, slot: {}, defaultTag: i3, name: "Hidden" });
}
let uh = lt(o3), a3 = b.createContext(null);
function s3({ children: A }) {
  let e = b.useContext(a3);
  if (!e) return oA.createElement(oA.Fragment, null, A);
  let { target: t } = e;
  return t ? Vf.createPortal(oA.createElement(oA.Fragment, null, A), t) : null;
}
let CE = Symbol();
function l3(A, e = !0) {
  return Object.assign(A, { [CE]: e });
}
function Sn(...A) {
  let e = b.useRef(A);
  b.useEffect(() => {
    e.current = A;
  }, [A]);
  let t = ee((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  });
  return A.every((n) => n == null || (n == null ? void 0 : n[CE])) ? void 0 : t;
}
let Ww = b.createContext(null);
Ww.displayName = "DescriptionContext";
function QE() {
  let A = b.useContext(Ww);
  if (A === null) {
    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e, QE), e;
  }
  return A;
}
function u3() {
  let [A, e] = b.useState([]);
  return [A.length > 0 ? A.join(" ") : void 0, b.useMemo(() => function(t) {
    let n = ee((o) => (e((s) => [...s, o]), () => e((s) => {
      let l = s.slice(), c = l.indexOf(o);
      return c !== -1 && l.splice(c, 1), l;
    }))), r = b.useMemo(() => ({ register: n, slot: t.slot, name: t.name, props: t.props, value: t.value }), [n, t.slot, t.name, t.props, t.value]);
    return oA.createElement(Ww.Provider, { value: r }, t.children);
  }, [e])];
}
let c3 = "p";
function f3(A, e) {
  let t = b.useId(), n = n3(), { id: r = `headlessui-description-${t}`, ...o } = A, s = QE(), l = Sn(e);
  ze(() => s.register(r), [r, s.register]);
  let c = n || !1, f = b.useMemo(() => ({ ...s.slot, disabled: c }), [s.slot, c]), g = { ref: l, ...s.props, id: r };
  return Wt({ ourProps: g, theirProps: o, slot: f, defaultTag: c3, name: s.name || "Description" });
}
let d3 = lt(f3), g3 = Object.assign(d3, {});
var yE = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(yE || {});
let B3 = b.createContext(() => {
});
function p3({ value: A, children: e }) {
  return oA.createElement(B3.Provider, { value: A }, e);
}
let h3 = class extends Map {
  constructor(e) {
    super(), this.factory = e;
  }
  get(e) {
    let t = super.get(e);
    return t === void 0 && (t = this.factory(e), this.set(e, t)), t;
  }
};
function FE(A, e) {
  let t = A(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(r) {
    return n.add(r), () => n.delete(r);
  }, dispatch(r, ...o) {
    let s = e[r].call(t, ...o);
    s && (t = s, n.forEach((l) => l()));
  } };
}
function UE(A) {
  return b.useSyncExternalStore(A.subscribe, A.getSnapshot, A.getSnapshot);
}
let w3 = new h3(() => FE(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function da(A, e) {
  let t = w3.get(e), n = b.useId(), r = UE(t);
  if (ze(() => {
    if (A) return t.dispatch("ADD", n), () => t.dispatch("REMOVE", n);
  }, [t, A]), !A) return !1;
  let o = r.indexOf(n), s = r.length;
  return o === -1 && (o = s, s += 1), o === s - 1;
}
let ch = /* @__PURE__ */ new Map(), Es = /* @__PURE__ */ new Map();
function i1(A) {
  var e;
  let t = (e = Es.get(A)) != null ? e : 0;
  return Es.set(A, t + 1), t !== 0 ? () => o1(A) : (ch.set(A, { "aria-hidden": A.getAttribute("aria-hidden"), inert: A.inert }), A.setAttribute("aria-hidden", "true"), A.inert = !0, () => o1(A));
}
function o1(A) {
  var e;
  let t = (e = Es.get(A)) != null ? e : 1;
  if (t === 1 ? Es.delete(A) : Es.set(A, t - 1), t !== 1) return;
  let n = ch.get(A);
  n && (n["aria-hidden"] === null ? A.removeAttribute("aria-hidden") : A.setAttribute("aria-hidden", n["aria-hidden"]), A.inert = n.inert, ch.delete(A));
}
function v3(A, { allowed: e, disallowed: t } = {}) {
  let n = da(A, "inert-others");
  ze(() => {
    var r, o;
    if (!n) return;
    let s = ni();
    for (let c of (r = t == null ? void 0 : t()) != null ? r : []) c && s.add(i1(c));
    let l = (o = e == null ? void 0 : e()) != null ? o : [];
    for (let c of l) {
      if (!c) continue;
      let f = Vw(c);
      if (!f) continue;
      let g = c.parentElement;
      for (; g && g !== f.body; ) {
        for (let B of g.children) l.some((p) => B.contains(p)) || s.add(i1(B));
        g = g.parentElement;
      }
    }
    return s.dispose;
  }, [n, e, t]);
}
function EE(A, e, t) {
  let n = $i((r) => {
    let o = r.getBoundingClientRect();
    o.x === 0 && o.y === 0 && o.width === 0 && o.height === 0 && t();
  });
  b.useEffect(() => {
    if (!A) return;
    let r = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!r) return;
    let o = ni();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => n.current(r));
      s.observe(r), o.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => n.current(r));
      s.observe(r), o.add(() => s.disconnect());
    }
    return () => o.dispose();
  }, [e, n, A]);
}
let fh = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(","), m3 = ["[data-autofocus]"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var Xn = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A[A.AutoFocus = 64] = "AutoFocus", A))(Xn || {}), dh = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(dh || {}), C3 = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(C3 || {});
function Q3(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(fh)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function y3(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(m3)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var IE = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(IE || {});
function F3(A, e = 0) {
  var t;
  return A === ((t = Vw(A)) == null ? void 0 : t.body) ? !1 : zr(e, { 0() {
    return A.matches(fh);
  }, 1() {
    let n = A;
    for (; n !== null; ) {
      if (n.matches(fh)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var U3 = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(U3 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Zn(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let E3 = ["textarea", "input"].join(",");
function I3(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, E3)) != null ? t : !1;
}
function x3(A, e = (t) => t) {
  return A.slice().sort((t, n) => {
    let r = e(t), o = e(n);
    if (r === null || o === null) return 0;
    let s = r.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Is(A, e, { sorted: t = !0, relativeTo: n = null, skipElements: r = [] } = {}) {
  let o = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, s = Array.isArray(A) ? t ? x3(A) : A : e & 64 ? y3(A) : Q3(A);
  r.length > 0 && s.length > 1 && (s = s.filter((v) => !r.some((F) => F != null && "current" in F ? (F == null ? void 0 : F.current) === v : F === v))), n = n ?? o.activeElement;
  let l = (() => {
    if (e & 5) return 1;
    if (e & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (e & 1) return 0;
    if (e & 2) return Math.max(0, s.indexOf(n)) - 1;
    if (e & 4) return Math.max(0, s.indexOf(n)) + 1;
    if (e & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = e & 32 ? { preventScroll: !0 } : {}, g = 0, B = s.length, p;
  do {
    if (g >= B || g + B <= 0) return 0;
    let v = c + g;
    if (e & 16) v = (v + B) % B;
    else {
      if (v < 0) return 3;
      if (v >= B) return 1;
    }
    p = s[v], p == null || p.focus(f), g += l;
  } while (p !== o.activeElement);
  return e & 6 && I3(p) && p.select(), 2;
}
function xE() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function H3() {
  return /Android/gi.test(window.navigator.userAgent);
}
function S3() {
  return xE() || H3();
}
function ja(A, e, t, n) {
  let r = $i(t);
  b.useEffect(() => {
    if (!A) return;
    function o(s) {
      r.current(s);
    }
    return document.addEventListener(e, o, n), () => document.removeEventListener(e, o, n);
  }, [A, e, n]);
}
function HE(A, e, t, n) {
  let r = $i(t);
  b.useEffect(() => {
    if (!A) return;
    function o(s) {
      r.current(s);
    }
    return window.addEventListener(e, o, n), () => window.removeEventListener(e, o, n);
  }, [A, e, n]);
}
const a1 = 30;
function L3(A, e, t) {
  let n = da(A, "outside-click"), r = $i(t), o = b.useCallback(function(c, f) {
    if (c.defaultPrevented) return;
    let g = f(c);
    if (g === null || !g.getRootNode().contains(g) || !g.isConnected) return;
    let B = function p(v) {
      return typeof v == "function" ? p(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let p of B) {
      if (p === null) continue;
      let v = p instanceof HTMLElement ? p : p.current;
      if (v != null && v.contains(g) || c.composed && c.composedPath().includes(v)) return;
    }
    return !F3(g, IE.Loose) && g.tabIndex !== -1 && c.preventDefault(), r.current(c, g);
  }, [r]), s = b.useRef(null);
  ja(n, "pointerdown", (c) => {
    var f, g;
    s.current = ((g = (f = c.composedPath) == null ? void 0 : f.call(c)) == null ? void 0 : g[0]) || c.target;
  }, !0), ja(n, "mousedown", (c) => {
    var f, g;
    s.current = ((g = (f = c.composedPath) == null ? void 0 : f.call(c)) == null ? void 0 : g[0]) || c.target;
  }, !0), ja(n, "click", (c) => {
    S3() || s.current && (o(c, () => s.current), s.current = null);
  }, !0);
  let l = b.useRef({ x: 0, y: 0 });
  ja(n, "touchstart", (c) => {
    l.current.x = c.touches[0].clientX, l.current.y = c.touches[0].clientY;
  }, !0), ja(n, "touchend", (c) => {
    let f = { x: c.changedTouches[0].clientX, y: c.changedTouches[0].clientY };
    if (!(Math.abs(f.x - l.current.x) >= a1 || Math.abs(f.y - l.current.y) >= a1)) return o(c, () => c.target instanceof HTMLElement ? c.target : null);
  }, !0), HE(n, "blur", (c) => o(c, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function gl(...A) {
  return b.useMemo(() => Vw(...A), [...A]);
}
function SE(A, e, t, n) {
  let r = $i(t);
  b.useEffect(() => {
    A = A ?? window;
    function o(s) {
      r.current(s);
    }
    return A.addEventListener(e, o, n), () => A.removeEventListener(e, o, n);
  }, [A, e, n]);
}
function b3() {
  let A;
  return { before({ doc: e }) {
    var t;
    let n = e.documentElement, r = (t = e.defaultView) != null ? t : window;
    A = Math.max(0, r.innerWidth - n.clientWidth);
  }, after({ doc: e, d: t }) {
    let n = e.documentElement, r = Math.max(0, n.clientWidth - n.offsetWidth), o = Math.max(0, A - r);
    t.style(n, "paddingRight", `${o}px`);
  } };
}
function _3() {
  return xE() ? { before({ doc: A, d: e, meta: t }) {
    function n(r) {
      return t.containers.flatMap((o) => o()).some((o) => o.contains(r));
    }
    e.microTask(() => {
      var r;
      if (window.getComputedStyle(A.documentElement).scrollBehavior !== "auto") {
        let l = ni();
        l.style(A.documentElement, "scrollBehavior", "auto"), e.add(() => e.microTask(() => l.dispose()));
      }
      let o = (r = window.scrollY) != null ? r : window.pageYOffset, s = null;
      e.addEventListener(A, "click", (l) => {
        if (l.target instanceof HTMLElement) try {
          let c = l.target.closest("a");
          if (!c) return;
          let { hash: f } = new URL(c.href), g = A.querySelector(f);
          g && !n(g) && (s = g);
        } catch {
        }
      }, !0), e.addEventListener(A, "touchstart", (l) => {
        if (l.target instanceof HTMLElement) if (n(l.target)) {
          let c = l.target;
          for (; c.parentElement && n(c.parentElement); ) c = c.parentElement;
          e.style(c, "overscrollBehavior", "contain");
        } else e.style(l.target, "touchAction", "none");
      }), e.addEventListener(A, "touchmove", (l) => {
        if (l.target instanceof HTMLElement) {
          if (l.target.tagName === "INPUT") return;
          if (n(l.target)) {
            let c = l.target;
            for (; c.parentElement && c.dataset.headlessuiPortal !== "" && !(c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth); ) c = c.parentElement;
            c.dataset.headlessuiPortal === "" && l.preventDefault();
          } else l.preventDefault();
        }
      }, { passive: !1 }), e.add(() => {
        var l;
        let c = (l = window.scrollY) != null ? l : window.pageYOffset;
        o !== c && window.scrollTo(0, o), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function T3() {
  return { before({ doc: A, d: e }) {
    e.style(A.documentElement, "overflow", "hidden");
  } };
}
function O3(A) {
  let e = {};
  for (let t of A) Object.assign(e, t(e));
  return e;
}
let Fi = FE(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let n = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: ni(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(e), this.set(A, n), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let n = { doc: A, d: e, meta: O3(t) }, r = [_3(), b3(), T3()];
  r.forEach(({ before: o }) => o == null ? void 0 : o(n)), r.forEach(({ after: o }) => o == null ? void 0 : o(n));
}, SCROLL_ALLOW({ d: A }) {
  A.dispose();
}, TEARDOWN({ doc: A }) {
  this.delete(A);
} });
Fi.subscribe(() => {
  let A = Fi.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [t] of A) e.set(t, t.documentElement.style.overflow);
  for (let t of A.values()) {
    let n = e.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !n || !r && n) && Fi.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Fi.dispatch("TEARDOWN", t);
  }
});
function D3(A, e, t = () => ({ containers: [] })) {
  let n = UE(Fi), r = e ? n.get(e) : void 0, o = r ? r.count > 0 : !1;
  return ze(() => {
    if (!(!e || !A)) return Fi.dispatch("PUSH", e, t), () => Fi.dispatch("POP", e, t);
  }, [A, e]), o;
}
function k3(A, e, t = () => [document.body]) {
  let n = da(A, "scroll-lock");
  D3(n, e, (r) => {
    var o;
    return { containers: [...(o = r.containers) != null ? o : [], t] };
  });
}
function R3(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function K3(A = 0) {
  let [e, t] = b.useState(A), n = b.useCallback((c) => t(c), [e]), r = b.useCallback((c) => t((f) => f | c), [e]), o = b.useCallback((c) => (e & c) === c, [e]), s = b.useCallback((c) => t((f) => f & ~c), [t]), l = b.useCallback((c) => t((f) => f ^ c), [t]);
  return { flags: e, setFlag: n, addFlag: r, hasFlag: o, removeFlag: s, toggleFlag: l };
}
var M3 = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(M3 || {});
function N3(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function P3(A, e, t, n) {
  let [r, o] = b.useState(t), { hasFlag: s, addFlag: l, removeFlag: c } = K3(A && r ? 3 : 0), f = b.useRef(!1), g = b.useRef(!1), B = $w();
  return ze(function p() {
    var v;
    if (!A) return;
    t && o(!0);
    let F = e.current;
    return F ? ((v = n == null ? void 0 : n.start) == null || v.call(n, t), G3(F, { inFlight: f, prepare() {
      g.current ? g.current = !1 : g.current = f.current, f.current = !0, !g.current && (t ? (l(3), c(4)) : (l(4), c(2)));
    }, run() {
      g.current ? t ? (c(3), l(4)) : (c(4), l(3)) : t ? c(1) : l(1);
    }, done() {
      var U;
      g.current && typeof F.getAnimations == "function" && F.getAnimations().length > 0 || (f.current = !1, c(7), t || o(!1), (U = n == null ? void 0 : n.end) == null || U.call(n, t));
    } })) : t ? (l(3), B.nextFrame(() => p())) : void 0;
  }, [A, t, e, B]), A ? [r, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function G3(A, { prepare: e, run: t, done: n, inFlight: r }) {
  let o = ni();
  return $3(A, { prepare: e, inFlight: r }), o.nextFrame(() => {
    o.add(V3(A, n)), t();
  }), o.dispose;
}
function V3(A, e) {
  let t = R3(e), n = ni();
  if (!A) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(A), [s, l] = [r, o].map((f) => {
    let [g = 0] = f.split(",").filter(Boolean).map((B) => B.includes("ms") ? parseFloat(B) : parseFloat(B) * 1e3).sort((B, p) => p - B);
    return g;
  }), c = s + l;
  if (c !== 0) {
    let f = n.group((g) => {
      let B = g.setTimeout(() => {
        t(), g.dispose();
      }, c);
      g.addEventListener(A, "transitionrun", (p) => {
        p.target === p.currentTarget && (B(), g.addEventListener(A, "transitioncancel", (v) => {
          v.target === v.currentTarget && (t(), f());
        }));
      });
    });
    n.addEventListener(A, "transitionend", (g) => {
      g.target === g.currentTarget && (t(), n.dispose());
    });
  } else t();
  return n.dispose;
}
function $3(A, { inFlight: e, prepare: t }) {
  if (e != null && e.current) {
    t();
    return;
  }
  let n = A.style.transition;
  A.style.transition = "none", t(), A.offsetHeight, A.style.transition = n;
}
function Xw(A, e) {
  let t = b.useRef([]), n = ee(A);
  b.useEffect(() => {
    let r = [...t.current];
    for (let [o, s] of e.entries()) if (t.current[o] !== s) {
      let l = n(e, r);
      return t.current = e, l;
    }
  }, [n, ...e]);
}
function ga(A) {
  return LE(A) ? (A.nodeName || "").toLowerCase() : "#document";
}
function Qt(A) {
  var e;
  return (A == null || (e = A.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ri(A) {
  var e;
  return (e = (LE(A) ? A.ownerDocument : A.document) || window.document) == null ? void 0 : e.documentElement;
}
function LE(A) {
  return A instanceof Node || A instanceof Qt(A).Node;
}
function rt(A) {
  return A instanceof Element || A instanceof Qt(A).Element;
}
function In(A) {
  return A instanceof HTMLElement || A instanceof Qt(A).HTMLElement;
}
function s1(A) {
  return typeof ShadowRoot > "u" ? !1 : A instanceof ShadowRoot || A instanceof Qt(A).ShadowRoot;
}
function Bl(A) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: r
  } = dn(A);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(r);
}
function W3(A) {
  return ["table", "td", "th"].includes(ga(A));
}
function td(A) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return A.matches(e);
    } catch {
      return !1;
    }
  });
}
function zw(A) {
  const e = Yw(), t = dn(A);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function X3(A) {
  let e = Yr(A);
  for (; In(e) && !ea(e); ) {
    if (td(e))
      return null;
    if (zw(e))
      return e;
    e = Yr(e);
  }
  return null;
}
function Yw() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ea(A) {
  return ["html", "body", "#document"].includes(ga(A));
}
function dn(A) {
  return Qt(A).getComputedStyle(A);
}
function nd(A) {
  return rt(A) ? {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  } : {
    scrollLeft: A.pageXOffset,
    scrollTop: A.pageYOffset
  };
}
function Yr(A) {
  if (ga(A) === "html")
    return A;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    A.assignedSlot || // DOM Element detected.
    A.parentNode || // ShadowRoot detected.
    s1(A) && A.host || // Fallback.
    ri(A)
  );
  return s1(e) ? e.host : e;
}
function bE(A) {
  const e = Yr(A);
  return ea(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : In(e) && Bl(e) ? e : bE(e);
}
function gh(A, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const r = bE(A), o = r === ((n = A.ownerDocument) == null ? void 0 : n.body), s = Qt(r);
  return o ? e.concat(s, s.visualViewport || [], Bl(r) ? r : [], s.frameElement && t ? gh(s.frameElement) : []) : e.concat(r, gh(r, [], t));
}
const js = Math.min, Vo = Math.max, wf = Math.round, Jr = (A) => ({
  x: A,
  y: A
}), z3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Y3 = {
  start: "end",
  end: "start"
};
function Bh(A, e, t) {
  return Vo(A, js(e, t));
}
function pl(A, e) {
  return typeof A == "function" ? A(e) : A;
}
function Mi(A) {
  return A.split("-")[0];
}
function hl(A) {
  return A.split("-")[1];
}
function _E(A) {
  return A === "x" ? "y" : "x";
}
function Jw(A) {
  return A === "y" ? "height" : "width";
}
function ta(A) {
  return ["top", "bottom"].includes(Mi(A)) ? "y" : "x";
}
function jw(A) {
  return _E(ta(A));
}
function J3(A, e, t) {
  t === void 0 && (t = !1);
  const n = hl(A), r = jw(A), o = Jw(r);
  let s = r === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = vf(s)), [s, vf(s)];
}
function j3(A) {
  const e = vf(A);
  return [ph(A), e, ph(e)];
}
function ph(A) {
  return A.replace(/start|end/g, (e) => Y3[e]);
}
function Z3(A, e, t) {
  const n = ["left", "right"], r = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (A) {
    case "top":
    case "bottom":
      return t ? e ? r : n : e ? n : r;
    case "left":
    case "right":
      return e ? o : s;
    default:
      return [];
  }
}
function q3(A, e, t, n) {
  const r = hl(A);
  let o = Z3(Mi(A), t === "start", n);
  return r && (o = o.map((s) => s + "-" + r), e && (o = o.concat(o.map(ph)))), o;
}
function vf(A) {
  return A.replace(/left|right|bottom|top/g, (e) => z3[e]);
}
function AP(A) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...A
  };
}
function TE(A) {
  return typeof A != "number" ? AP(A) : {
    top: A,
    right: A,
    bottom: A,
    left: A
  };
}
function mf(A) {
  const {
    x: e,
    y: t,
    width: n,
    height: r
  } = A;
  return {
    width: n,
    height: r,
    top: t,
    left: e,
    right: e + n,
    bottom: t + r,
    x: e,
    y: t
  };
}
function l1(A, e, t) {
  let {
    reference: n,
    floating: r
  } = A;
  const o = ta(e), s = jw(e), l = Jw(s), c = Mi(e), f = o === "y", g = n.x + n.width / 2 - r.width / 2, B = n.y + n.height / 2 - r.height / 2, p = n[l] / 2 - r[l] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: g,
        y: n.y - r.height
      };
      break;
    case "bottom":
      v = {
        x: g,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: B
      };
      break;
    case "left":
      v = {
        x: n.x - r.width,
        y: B
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (hl(e)) {
    case "start":
      v[s] -= p * (t && f ? -1 : 1);
      break;
    case "end":
      v[s] += p * (t && f ? -1 : 1);
      break;
  }
  return v;
}
const eP = async (A, e, t) => {
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = t, l = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let f = await s.getElementRects({
    reference: A,
    floating: e,
    strategy: r
  }), {
    x: g,
    y: B
  } = l1(f, n, c), p = n, v = {}, F = 0;
  for (let U = 0; U < l.length; U++) {
    const {
      name: L,
      fn: m
    } = l[U], {
      x: w,
      y,
      data: I,
      reset: H
    } = await m({
      x: g,
      y: B,
      initialPlacement: n,
      placement: p,
      strategy: r,
      middlewareData: v,
      rects: f,
      platform: s,
      elements: {
        reference: A,
        floating: e
      }
    });
    g = w ?? g, B = y ?? B, v = {
      ...v,
      [L]: {
        ...v[L],
        ...I
      }
    }, H && F <= 50 && (F++, typeof H == "object" && (H.placement && (p = H.placement), H.rects && (f = H.rects === !0 ? await s.getElementRects({
      reference: A,
      floating: e,
      strategy: r
    }) : H.rects), {
      x: g,
      y: B
    } = l1(f, p, c)), U = -1);
  }
  return {
    x: g,
    y: B,
    placement: p,
    strategy: r,
    middlewareData: v
  };
};
async function OE(A, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: n,
    y: r,
    platform: o,
    rects: s,
    elements: l,
    strategy: c
  } = A, {
    boundary: f = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: B = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = pl(e, A), F = TE(v), L = l[p ? B === "floating" ? "reference" : "floating" : B], m = mf(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(L))) == null || t ? L : L.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: g,
    strategy: c
  })), w = B === "floating" ? {
    x: n,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), I = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = mf(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: y,
    strategy: c
  }) : w);
  return {
    top: (m.top - H.top + F.top) / I.y,
    bottom: (H.bottom - m.bottom + F.bottom) / I.y,
    left: (m.left - H.left + F.left) / I.x,
    right: (H.right - m.right + F.right) / I.x
  };
}
const tP = (A) => ({
  name: "arrow",
  options: A,
  async fn(e) {
    const {
      x: t,
      y: n,
      placement: r,
      rects: o,
      platform: s,
      elements: l,
      middlewareData: c
    } = e, {
      element: f,
      padding: g = 0
    } = pl(A, e) || {};
    if (f == null)
      return {};
    const B = TE(g), p = {
      x: t,
      y: n
    }, v = jw(r), F = Jw(v), U = await s.getDimensions(f), L = v === "y", m = L ? "top" : "left", w = L ? "bottom" : "right", y = L ? "clientHeight" : "clientWidth", I = o.reference[F] + o.reference[v] - p[v] - o.floating[F], H = p[v] - o.reference[v], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let O = S ? S[y] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(S))) && (O = l.floating[y] || o.floating[F]);
    const k = I / 2 - H / 2, N = O / 2 - U[F] / 2 - 1, W = js(B[m], N), sA = js(B[w], N), iA = W, tA = O - U[F] - sA, lA = O / 2 - U[F] / 2 + k, mA = Bh(iA, lA, tA), fA = !c.arrow && hl(r) != null && lA !== mA && o.reference[F] / 2 - (lA < iA ? W : sA) - U[F] / 2 < 0, J = fA ? lA < iA ? lA - iA : lA - tA : 0;
    return {
      [v]: p[v] + J,
      data: {
        [v]: mA,
        centerOffset: lA - mA - J,
        ...fA && {
          alignmentOffset: J
        }
      },
      reset: fA
    };
  }
}), nP = function(A) {
  return A === void 0 && (A = {}), {
    name: "flip",
    options: A,
    async fn(e) {
      var t, n;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: f
      } = e, {
        mainAxis: g = !0,
        crossAxis: B = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: F = "none",
        flipAlignment: U = !0,
        ...L
      } = pl(A, e);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const m = Mi(r), w = ta(l), y = Mi(l) === l, I = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), H = p || (y || !U ? [vf(l)] : j3(l)), S = F !== "none";
      !p && S && H.push(...q3(l, U, F, I));
      const O = [l, ...H], k = await OE(e, L), N = [];
      let W = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (g && N.push(k[m]), B) {
        const lA = J3(r, s, I);
        N.push(k[lA[0]], k[lA[1]]);
      }
      if (W = [...W, {
        placement: r,
        overflows: N
      }], !N.every((lA) => lA <= 0)) {
        var sA, iA;
        const lA = (((sA = o.flip) == null ? void 0 : sA.index) || 0) + 1, mA = O[lA];
        if (mA)
          return {
            data: {
              index: lA,
              overflows: W
            },
            reset: {
              placement: mA
            }
          };
        let fA = (iA = W.filter((J) => J.overflows[0] <= 0).sort((J, P) => J.overflows[1] - P.overflows[1])[0]) == null ? void 0 : iA.placement;
        if (!fA)
          switch (v) {
            case "bestFit": {
              var tA;
              const J = (tA = W.filter((P) => {
                if (S) {
                  const V = ta(P.placement);
                  return V === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((V) => V > 0).reduce((V, X) => V + X, 0)]).sort((P, V) => P[1] - V[1])[0]) == null ? void 0 : tA[0];
              J && (fA = J);
              break;
            }
            case "initialPlacement":
              fA = l;
              break;
          }
        if (r !== fA)
          return {
            reset: {
              placement: fA
            }
          };
      }
      return {};
    }
  };
};
async function rP(A, e) {
  const {
    placement: t,
    platform: n,
    elements: r
  } = A, o = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), s = Mi(t), l = hl(t), c = ta(t) === "y", f = ["left", "top"].includes(s) ? -1 : 1, g = o && c ? -1 : 1, B = pl(e, A);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: F
  } = typeof B == "number" ? {
    mainAxis: B,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...B
  };
  return l && typeof F == "number" && (v = l === "end" ? F * -1 : F), c ? {
    x: v * g,
    y: p * f
  } : {
    x: p * f,
    y: v * g
  };
}
const iP = function(A) {
  return A === void 0 && (A = 0), {
    name: "offset",
    options: A,
    async fn(e) {
      var t, n;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: l
      } = e, c = await rP(e, A);
      return s === ((t = l.offset) == null ? void 0 : t.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: r + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, oP = function(A) {
  return A === void 0 && (A = {}), {
    name: "shift",
    options: A,
    async fn(e) {
      const {
        x: t,
        y: n,
        placement: r
      } = e, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (L) => {
            let {
              x: m,
              y: w
            } = L;
            return {
              x: m,
              y: w
            };
          }
        },
        ...c
      } = pl(A, e), f = {
        x: t,
        y: n
      }, g = await OE(e, c), B = ta(Mi(r)), p = _E(B);
      let v = f[p], F = f[B];
      if (o) {
        const L = p === "y" ? "top" : "left", m = p === "y" ? "bottom" : "right", w = v + g[L], y = v - g[m];
        v = Bh(w, v, y);
      }
      if (s) {
        const L = B === "y" ? "top" : "left", m = B === "y" ? "bottom" : "right", w = F + g[L], y = F - g[m];
        F = Bh(w, F, y);
      }
      const U = l.fn({
        ...e,
        [p]: v,
        [B]: F
      });
      return {
        ...U,
        data: {
          x: U.x - t,
          y: U.y - n
        }
      };
    }
  };
};
function DE(A) {
  const e = dn(A);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const r = In(A), o = r ? A.offsetWidth : t, s = r ? A.offsetHeight : n, l = wf(t) !== o || wf(n) !== s;
  return l && (t = o, n = s), {
    width: t,
    height: n,
    $: l
  };
}
function kE(A) {
  return rt(A) ? A : A.contextElement;
}
function $o(A) {
  const e = kE(A);
  if (!In(e))
    return Jr(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: r,
    $: o
  } = DE(e);
  let s = (o ? wf(t.width) : t.width) / n, l = (o ? wf(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const aP = /* @__PURE__ */ Jr(0);
function RE(A) {
  const e = Qt(A);
  return !Yw() || !e.visualViewport ? aP : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function sP(A, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== Qt(A) ? !1 : e;
}
function Zs(A, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const r = A.getBoundingClientRect(), o = kE(A);
  let s = Jr(1);
  e && (n ? rt(n) && (s = $o(n)) : s = $o(A));
  const l = sP(o, t, n) ? RE(o) : Jr(0);
  let c = (r.left + l.x) / s.x, f = (r.top + l.y) / s.y, g = r.width / s.x, B = r.height / s.y;
  if (o) {
    const p = Qt(o), v = n && rt(n) ? Qt(n) : n;
    let F = p, U = F.frameElement;
    for (; U && n && v !== F; ) {
      const L = $o(U), m = U.getBoundingClientRect(), w = dn(U), y = m.left + (U.clientLeft + parseFloat(w.paddingLeft)) * L.x, I = m.top + (U.clientTop + parseFloat(w.paddingTop)) * L.y;
      c *= L.x, f *= L.y, g *= L.x, B *= L.y, c += y, f += I, F = Qt(U), U = F.frameElement;
    }
  }
  return mf({
    width: g,
    height: B,
    x: c,
    y: f
  });
}
function lP(A) {
  let {
    elements: e,
    rect: t,
    offsetParent: n,
    strategy: r
  } = A;
  const o = r === "fixed", s = ri(n), l = e ? td(e.floating) : !1;
  if (n === s || l && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Jr(1);
  const g = Jr(0), B = In(n);
  if ((B || !B && !o) && ((ga(n) !== "body" || Bl(s)) && (c = nd(n)), In(n))) {
    const p = Zs(n);
    f = $o(n), g.x = p.x + n.clientLeft, g.y = p.y + n.clientTop;
  }
  return {
    width: t.width * f.x,
    height: t.height * f.y,
    x: t.x * f.x - c.scrollLeft * f.x + g.x,
    y: t.y * f.y - c.scrollTop * f.y + g.y
  };
}
function uP(A) {
  return Array.from(A.getClientRects());
}
function KE(A) {
  return Zs(ri(A)).left + nd(A).scrollLeft;
}
function cP(A) {
  const e = ri(A), t = nd(A), n = A.ownerDocument.body, r = Vo(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = Vo(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + KE(A);
  const l = -t.scrollTop;
  return dn(n).direction === "rtl" && (s += Vo(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: l
  };
}
function fP(A, e) {
  const t = Qt(A), n = ri(A), r = t.visualViewport;
  let o = n.clientWidth, s = n.clientHeight, l = 0, c = 0;
  if (r) {
    o = r.width, s = r.height;
    const f = Yw();
    (!f || f && e === "fixed") && (l = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l,
    y: c
  };
}
function dP(A, e) {
  const t = Zs(A, !0, e === "fixed"), n = t.top + A.clientTop, r = t.left + A.clientLeft, o = In(A) ? $o(A) : Jr(1), s = A.clientWidth * o.x, l = A.clientHeight * o.y, c = r * o.x, f = n * o.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function u1(A, e, t) {
  let n;
  if (e === "viewport")
    n = fP(A, t);
  else if (e === "document")
    n = cP(ri(A));
  else if (rt(e))
    n = dP(e, t);
  else {
    const r = RE(A);
    n = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return mf(n);
}
function ME(A, e) {
  const t = Yr(A);
  return t === e || !rt(t) || ea(t) ? !1 : dn(t).position === "fixed" || ME(t, e);
}
function gP(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let n = gh(A, [], !1).filter((l) => rt(l) && ga(l) !== "body"), r = null;
  const o = dn(A).position === "fixed";
  let s = o ? Yr(A) : A;
  for (; rt(s) && !ea(s); ) {
    const l = dn(s), c = zw(s);
    !c && l.position === "fixed" && (r = null), (o ? !c && !r : !c && l.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Bl(s) && !c && ME(A, s)) ? n = n.filter((g) => g !== s) : r = l, s = Yr(s);
  }
  return e.set(A, n), n;
}
function BP(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: r
  } = A;
  const s = [...t === "clippingAncestors" ? td(e) ? [] : gP(e, this._c) : [].concat(t), n], l = s[0], c = s.reduce((f, g) => {
    const B = u1(e, g, r);
    return f.top = Vo(B.top, f.top), f.right = js(B.right, f.right), f.bottom = js(B.bottom, f.bottom), f.left = Vo(B.left, f.left), f;
  }, u1(e, l, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function pP(A) {
  const {
    width: e,
    height: t
  } = DE(A);
  return {
    width: e,
    height: t
  };
}
function hP(A, e, t) {
  const n = In(e), r = ri(e), o = t === "fixed", s = Zs(A, !0, o, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Jr(0);
  if (n || !n && !o)
    if ((ga(e) !== "body" || Bl(r)) && (l = nd(e)), n) {
      const B = Zs(e, !0, o, e);
      c.x = B.x + e.clientLeft, c.y = B.y + e.clientTop;
    } else r && (c.x = KE(r));
  const f = s.left + l.scrollLeft - c.x, g = s.top + l.scrollTop - c.y;
  return {
    x: f,
    y: g,
    width: s.width,
    height: s.height
  };
}
function DB(A) {
  return dn(A).position === "static";
}
function c1(A, e) {
  return !In(A) || dn(A).position === "fixed" ? null : e ? e(A) : A.offsetParent;
}
function NE(A, e) {
  const t = Qt(A);
  if (td(A))
    return t;
  if (!In(A)) {
    let r = Yr(A);
    for (; r && !ea(r); ) {
      if (rt(r) && !DB(r))
        return r;
      r = Yr(r);
    }
    return t;
  }
  let n = c1(A, e);
  for (; n && W3(n) && DB(n); )
    n = c1(n, e);
  return n && ea(n) && DB(n) && !zw(n) ? t : n || X3(A) || t;
}
const wP = async function(A) {
  const e = this.getOffsetParent || NE, t = this.getDimensions, n = await t(A.floating);
  return {
    reference: hP(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function vP(A) {
  return dn(A).direction === "rtl";
}
const mP = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lP,
  getDocumentElement: ri,
  getClippingRect: BP,
  getOffsetParent: NE,
  getElementRects: wP,
  getClientRects: uP,
  getDimensions: pP,
  getScale: $o,
  isElement: rt,
  isRTL: vP
}, CP = iP, QP = oP, yP = nP, f1 = tP, FP = (A, e, t) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: mP,
    ...t
  }, o = {
    ...r.platform,
    _c: n
  };
  return eP(A, e, {
    ...r,
    platform: o
  });
};
var Ec = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
function Cf(A, e) {
  if (A === e)
    return !0;
  if (typeof A != typeof e)
    return !1;
  if (typeof A == "function" && A.toString() === e.toString())
    return !0;
  let t, n, r;
  if (A && e && typeof A == "object") {
    if (Array.isArray(A)) {
      if (t = A.length, t !== e.length) return !1;
      for (n = t; n-- !== 0; )
        if (!Cf(A[n], e[n]))
          return !1;
      return !0;
    }
    if (r = Object.keys(A), t = r.length, t !== Object.keys(e).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      const o = r[n];
      if (!(o === "_owner" && A.$$typeof) && !Cf(A[o], e[o]))
        return !1;
    }
    return !0;
  }
  return A !== A && e !== e;
}
function PE(A) {
  return typeof window > "u" ? 1 : (A.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function d1(A, e) {
  const t = PE(A);
  return Math.round(e * t) / t;
}
function g1(A) {
  const e = b.useRef(A);
  return Ec(() => {
    e.current = A;
  }), e;
}
function UP(A) {
  A === void 0 && (A = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: n = [],
    platform: r,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: f
  } = A, [g, B] = b.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = b.useState(n);
  Cf(p, n) || v(n);
  const [F, U] = b.useState(null), [L, m] = b.useState(null), w = b.useCallback((J) => {
    J !== S.current && (S.current = J, U(J));
  }, []), y = b.useCallback((J) => {
    J !== O.current && (O.current = J, m(J));
  }, []), I = o || F, H = s || L, S = b.useRef(null), O = b.useRef(null), k = b.useRef(g), N = c != null, W = g1(c), sA = g1(r), iA = b.useCallback(() => {
    if (!S.current || !O.current)
      return;
    const J = {
      placement: e,
      strategy: t,
      middleware: p
    };
    sA.current && (J.platform = sA.current), FP(S.current, O.current, J).then((P) => {
      const V = {
        ...P,
        isPositioned: !0
      };
      tA.current && !Cf(k.current, V) && (k.current = V, Vf.flushSync(() => {
        B(V);
      }));
    });
  }, [p, e, t, sA]);
  Ec(() => {
    f === !1 && k.current.isPositioned && (k.current.isPositioned = !1, B((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [f]);
  const tA = b.useRef(!1);
  Ec(() => (tA.current = !0, () => {
    tA.current = !1;
  }), []), Ec(() => {
    if (I && (S.current = I), H && (O.current = H), I && H) {
      if (W.current)
        return W.current(I, H, iA);
      iA();
    }
  }, [I, H, iA, W, N]);
  const lA = b.useMemo(() => ({
    reference: S,
    floating: O,
    setReference: w,
    setFloating: y
  }), [w, y]), mA = b.useMemo(() => ({
    reference: I,
    floating: H
  }), [I, H]), fA = b.useMemo(() => {
    const J = {
      position: t,
      left: 0,
      top: 0
    };
    if (!mA.floating)
      return J;
    const P = d1(mA.floating, g.x), V = d1(mA.floating, g.y);
    return l ? {
      ...J,
      transform: "translate(" + P + "px, " + V + "px)",
      ...PE(mA.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: P,
      top: V
    };
  }, [t, l, mA.floating, g.x, g.y]);
  return b.useMemo(() => ({
    ...g,
    update: iA,
    refs: lA,
    elements: mA,
    floatingStyles: fA
  }), [g, iA, lA, mA, fA]);
}
const EP = (A) => {
  function e(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: A,
    fn(t) {
      const {
        element: n,
        padding: r
      } = typeof A == "function" ? A(t) : A;
      return n && e(n) ? n.current != null ? f1({
        element: n.current,
        padding: r
      }).fn(t) : {} : n ? f1({
        element: n,
        padding: r
      }).fn(t) : {};
    }
  };
}, IP = (A, e) => ({
  ...CP(A),
  options: [A, e]
}), xP = (A, e) => ({
  ...QP(A),
  options: [A, e]
}), HP = (A, e) => ({
  ...yP(A),
  options: [A, e]
}), SP = (A, e) => ({
  ...EP(A),
  options: [A, e]
}), GE = {
  ...XB
}, LP = GE.useInsertionEffect, bP = LP || ((A) => A());
function _P(A) {
  const e = b.useRef(() => {
  });
  return bP(() => {
    e.current = A;
  }), b.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var hh = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
let B1 = !1, TP = 0;
const p1 = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + TP++
);
function OP() {
  const [A, e] = b.useState(() => B1 ? p1() : void 0);
  return hh(() => {
    A == null && e(p1());
  }, []), b.useEffect(() => {
    B1 = !0;
  }, []), A;
}
const DP = GE.useId, kP = DP || OP;
function RP() {
  const A = /* @__PURE__ */ new Map();
  return {
    emit(e, t) {
      var n;
      (n = A.get(e)) == null || n.forEach((r) => r(t));
    },
    on(e, t) {
      A.set(e, [...A.get(e) || [], t]);
    },
    off(e, t) {
      var n;
      A.set(e, ((n = A.get(e)) == null ? void 0 : n.filter((r) => r !== t)) || []);
    }
  };
}
const KP = /* @__PURE__ */ b.createContext(null), MP = /* @__PURE__ */ b.createContext(null), NP = () => {
  var A;
  return ((A = b.useContext(KP)) == null ? void 0 : A.id) || null;
}, PP = () => b.useContext(MP);
function GP(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = A, r = kP(), o = b.useRef({}), [s] = b.useState(() => RP()), l = NP() != null, [c, f] = b.useState(n.reference), g = _P((v, F, U) => {
    o.current.openEvent = v ? F : void 0, s.emit("openchange", {
      open: v,
      event: F,
      reason: U,
      nested: l
    }), t == null || t(v, F, U);
  }), B = b.useMemo(() => ({
    setPositionReference: f
  }), []), p = b.useMemo(() => ({
    reference: c || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [c, n.reference, n.floating]);
  return b.useMemo(() => ({
    dataRef: o,
    open: e,
    onOpenChange: g,
    elements: p,
    events: s,
    floatingId: r,
    refs: B
  }), [e, g, p, s, r, B]);
}
function VP(A) {
  A === void 0 && (A = {});
  const {
    nodeId: e
  } = A, t = GP({
    ...A,
    elements: {
      reference: null,
      floating: null,
      ...A.elements
    }
  }), n = A.rootContext || t, r = n.elements, [o, s] = b.useState(null), [l, c] = b.useState(null), g = (r == null ? void 0 : r.reference) || o, B = b.useRef(null), p = PP();
  hh(() => {
    g && (B.current = g);
  }, [g]);
  const v = UP({
    ...A,
    elements: {
      ...r,
      ...l && {
        reference: l
      }
    }
  }), F = b.useCallback((y) => {
    const I = rt(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    c(I), v.refs.setReference(I);
  }, [v.refs]), U = b.useCallback((y) => {
    (rt(y) || y === null) && (B.current = y, s(y)), (rt(v.refs.reference.current) || v.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !rt(y)) && v.refs.setReference(y);
  }, [v.refs]), L = b.useMemo(() => ({
    ...v.refs,
    setReference: U,
    setPositionReference: F,
    domReference: B
  }), [v.refs, U, F]), m = b.useMemo(() => ({
    ...v.elements,
    domReference: g
  }), [v.elements, g]), w = b.useMemo(() => ({
    ...v,
    ...n,
    refs: L,
    elements: m,
    nodeId: e
  }), [v, L, m, e, n]);
  return hh(() => {
    n.dataRef.current.floatingContext = w;
    const y = p == null ? void 0 : p.nodesRef.current.find((I) => I.id === e);
    y && (y.context = w);
  }), b.useMemo(() => ({
    ...v,
    context: w,
    refs: L,
    elements: m
  }), [v, L, m, w]);
}
let rd = b.createContext(null);
rd.displayName = "OpenClosedContext";
var an = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(an || {});
function id() {
  return b.useContext(rd);
}
function $P({ value: A, children: e }) {
  return oA.createElement(rd.Provider, { value: A }, e);
}
function WP({ children: A }) {
  return oA.createElement(rd.Provider, { value: null }, A);
}
function XP(A) {
  function e() {
    document.readyState !== "loading" && (A(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
let xr = [];
XP(() => {
  function A(e) {
    e.target instanceof HTMLElement && e.target !== document.body && xr[0] !== e.target && (xr.unshift(e.target), xr = xr.filter((t) => t != null && t.isConnected), xr.splice(10));
  }
  window.addEventListener("click", A, { capture: !0 }), window.addEventListener("mousedown", A, { capture: !0 }), window.addEventListener("focus", A, { capture: !0 }), document.body.addEventListener("click", A, { capture: !0 }), document.body.addEventListener("mousedown", A, { capture: !0 }), document.body.addEventListener("focus", A, { capture: !0 });
});
function VE(A) {
  let e = ee(A), t = b.useRef(!1);
  b.useEffect(() => (t.current = !1, () => {
    t.current = !0, ed(() => {
      t.current && e();
    });
  }), [e]);
}
function zP() {
  let A = typeof document > "u";
  return "useSyncExternalStore" in XB ? ((e) => e.useSyncExternalStore)(XB)(() => () => {
  }, () => !1, () => !A) : !1;
}
function wl() {
  let A = zP(), [e, t] = b.useState(bi.isHandoffComplete);
  return e && bi.isHandoffComplete === !1 && t(!1), b.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), b.useEffect(() => bi.handoff(), []), A ? !1 : e;
}
let $E = b.createContext(!1);
function YP() {
  return b.useContext($E);
}
function h1(A) {
  return oA.createElement($E.Provider, { value: A.force }, A.children);
}
function JP(A) {
  let e = YP(), t = b.useContext(XE), n = gl(A), [r, o] = b.useState(() => {
    var s;
    if (!e && t !== null) return (s = t.current) != null ? s : null;
    if (bi.isServer) return null;
    let l = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (l) return l;
    if (n === null) return null;
    let c = n.createElement("div");
    return c.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(c);
  });
  return b.useEffect(() => {
    r !== null && (n != null && n.body.contains(r) || n == null || n.body.appendChild(r));
  }, [r, n]), b.useEffect(() => {
    e || t !== null && o(t.current);
  }, [t, o, e]), r;
}
let WE = b.Fragment, jP = lt(function(A, e) {
  let t = A, n = b.useRef(null), r = Sn(l3((g) => {
    n.current = g;
  }), e), o = gl(n), s = JP(n), [l] = b.useState(() => {
    var g;
    return bi.isServer ? null : (g = o == null ? void 0 : o.createElement("div")) != null ? g : null;
  }), c = b.useContext(wh), f = wl();
  return ze(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), ze(() => {
    if (l && c) return c.register(l);
  }, [c, l]), VE(() => {
    var g;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((g = s.parentElement) == null || g.removeChild(s)));
  }), f ? !s || !l ? null : Vf.createPortal(Wt({ ourProps: { ref: r }, theirProps: t, slot: {}, defaultTag: WE, name: "Portal" }), l) : null;
});
function ZP(A, e) {
  let t = Sn(e), { enabled: n = !0, ...r } = A;
  return n ? oA.createElement(jP, { ...r, ref: t }) : Wt({ ourProps: { ref: t }, theirProps: r, slot: {}, defaultTag: WE, name: "Portal" });
}
let qP = b.Fragment, XE = b.createContext(null);
function A5(A, e) {
  let { target: t, ...n } = A, r = { ref: Sn(e) };
  return oA.createElement(XE.Provider, { value: t }, Wt({ ourProps: r, theirProps: n, defaultTag: qP, name: "Popover.Group" }));
}
let wh = b.createContext(null);
function e5() {
  let A = b.useContext(wh), e = b.useRef([]), t = ee((o) => (e.current.push(o), A && A.register(o), () => n(o))), n = ee((o) => {
    let s = e.current.indexOf(o);
    s !== -1 && e.current.splice(s, 1), A && A.unregister(o);
  }), r = b.useMemo(() => ({ register: t, unregister: n, portals: e }), [t, n, e]);
  return [e, b.useMemo(() => function({ children: o }) {
    return oA.createElement(wh.Provider, { value: r }, o);
  }, [r])];
}
let t5 = lt(ZP), zE = lt(A5), n5 = Object.assign(t5, { Group: zE });
function r5(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let n = da(A, "escape");
  SE(e, "keydown", (r) => {
    n && (r.defaultPrevented || r.key === yE.Escape && t(r));
  });
}
function i5() {
  var A;
  let [e] = b.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [t, n] = b.useState((A = e == null ? void 0 : e.matches) != null ? A : !1);
  return ze(() => {
    if (!e) return;
    function r(o) {
      n(o.matches);
    }
    return e.addEventListener("change", r), () => e.removeEventListener("change", r);
  }, [e]), t;
}
function o5({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
  var n;
  let r = b.useRef((n = t == null ? void 0 : t.current) != null ? n : null), o = gl(r), s = ee(() => {
    var l, c, f;
    let g = [];
    for (let B of A) B !== null && (B instanceof HTMLElement ? g.push(B) : "current" in B && B.current instanceof HTMLElement && g.push(B.current));
    if (e != null && e.current) for (let B of e.current) g.push(B);
    for (let B of (l = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? l : []) B !== document.body && B !== document.head && B instanceof HTMLElement && B.id !== "headlessui-portal-root" && (B.contains(r.current) || B.contains((f = (c = r.current) == null ? void 0 : c.getRootNode()) == null ? void 0 : f.host) || g.some((p) => B.contains(p)) || g.push(B));
    return g;
  });
  return { resolveContainers: s, contains: ee((l) => s().some((c) => c.contains(l))), mainTreeNodeRef: r, MainTreeNode: b.useMemo(() => function() {
    return t != null ? null : oA.createElement(uh, { features: hf.Hidden, ref: r });
  }, [r, t]) };
}
function Zw() {
  let A = b.useRef(!1);
  return ze(() => (A.current = !0, () => {
    A.current = !1;
  }), []), A;
}
var ls = ((A) => (A[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A))(ls || {});
function a5() {
  let A = b.useRef(0);
  return HE(!0, "keydown", (e) => {
    e.key === "Tab" && (A.current = e.shiftKey ? 1 : 0);
  }, !0), A;
}
function YE(A) {
  if (!A) return /* @__PURE__ */ new Set();
  if (typeof A == "function") return new Set(A());
  let e = /* @__PURE__ */ new Set();
  for (let t of A.current) t.current instanceof HTMLElement && e.add(t.current);
  return e;
}
let s5 = "div";
var vi = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(vi || {});
function l5(A, e) {
  let t = b.useRef(null), n = Sn(t, e), { initialFocus: r, initialFocusFallback: o, containers: s, features: l = 15, ...c } = A;
  wl() || (l = 0);
  let f = gl(t);
  d5(l, { ownerDocument: f });
  let g = g5(l, { ownerDocument: f, container: t, initialFocus: r, initialFocusFallback: o });
  B5(l, { ownerDocument: f, container: t, containers: s, previousActiveElement: g });
  let B = a5(), p = ee((m) => {
    let w = t.current;
    w && ((y) => y())(() => {
      zr(B.current, { [ls.Forwards]: () => {
        Is(w, Xn.First, { skipElements: [m.relatedTarget, o] });
      }, [ls.Backwards]: () => {
        Is(w, Xn.Last, { skipElements: [m.relatedTarget, o] });
      } });
    });
  }), v = da(!!(l & 2), "focus-trap#tab-lock"), F = $w(), U = b.useRef(!1), L = { ref: n, onKeyDown(m) {
    m.key == "Tab" && (U.current = !0, F.requestAnimationFrame(() => {
      U.current = !1;
    }));
  }, onBlur(m) {
    if (!(l & 4)) return;
    let w = YE(s);
    t.current instanceof HTMLElement && w.add(t.current);
    let y = m.relatedTarget;
    y instanceof HTMLElement && y.dataset.headlessuiFocusGuard !== "true" && (JE(w, y) || (U.current ? Is(t.current, zr(B.current, { [ls.Forwards]: () => Xn.Next, [ls.Backwards]: () => Xn.Previous }) | Xn.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Zn(m.target)));
  } };
  return oA.createElement(oA.Fragment, null, v && oA.createElement(uh, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: hf.Focusable }), Wt({ ourProps: L, theirProps: c, defaultTag: s5, name: "FocusTrap" }), v && oA.createElement(uh, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: hf.Focusable }));
}
let u5 = lt(l5), c5 = Object.assign(u5, { features: vi });
function f5(A = !0) {
  let e = b.useRef(xr.slice());
  return Xw(([t], [n]) => {
    n === !0 && t === !1 && ed(() => {
      e.current.splice(0);
    }), n === !1 && t === !0 && (e.current = xr.slice());
  }, [A, xr, e]), ee(() => {
    var t;
    return (t = e.current.find((n) => n != null && n.isConnected)) != null ? t : null;
  });
}
function d5(A, { ownerDocument: e }) {
  let t = !!(A & 8), n = f5(t);
  Xw(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Zn(n());
  }, [t]), VE(() => {
    t && Zn(n());
  });
}
function g5(A, { ownerDocument: e, container: t, initialFocus: n, initialFocusFallback: r }) {
  let o = b.useRef(null), s = da(!!(A & 1), "focus-trap#initial-focus"), l = Zw();
  return Xw(() => {
    if (A === 0) return;
    if (!s) {
      r != null && r.current && Zn(r.current);
      return;
    }
    let c = t.current;
    c && ed(() => {
      if (!l.current) return;
      let f = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === f) {
          o.current = f;
          return;
        }
      } else if (c.contains(f)) {
        o.current = f;
        return;
      }
      if (n != null && n.current) Zn(n.current);
      else {
        if (A & 16) {
          if (Is(c, Xn.First | Xn.AutoFocus) !== dh.Error) return;
        } else if (Is(c, Xn.First) !== dh.Error) return;
        if (r != null && r.current && (Zn(r.current), (e == null ? void 0 : e.activeElement) === r.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      o.current = e == null ? void 0 : e.activeElement;
    });
  }, [r, s, A]), o;
}
function B5(A, { ownerDocument: e, container: t, containers: n, previousActiveElement: r }) {
  let o = Zw(), s = !!(A & 4);
  SE(e == null ? void 0 : e.defaultView, "focus", (l) => {
    if (!s || !o.current) return;
    let c = YE(n);
    t.current instanceof HTMLElement && c.add(t.current);
    let f = r.current;
    if (!f) return;
    let g = l.target;
    g && g instanceof HTMLElement ? JE(c, g) ? (r.current = g, Zn(g)) : (l.preventDefault(), l.stopPropagation(), Zn(f)) : Zn(r.current);
  }, !0);
}
function JE(A, e) {
  for (let t of A) if (t.contains(e)) return !0;
  return !1;
}
function jE(A) {
  var e;
  return !!(A.enter || A.enterFrom || A.enterTo || A.leave || A.leaveFrom || A.leaveTo) || ((e = A.as) != null ? e : qE) !== b.Fragment || oA.Children.count(A.children) === 1;
}
let od = b.createContext(null);
od.displayName = "TransitionContext";
var p5 = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(p5 || {});
function h5() {
  let A = b.useContext(od);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
function w5() {
  let A = b.useContext(ad);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
let ad = b.createContext(null);
ad.displayName = "NestingContext";
function sd(A) {
  return "children" in A ? sd(A.children) : A.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function ZE(A, e) {
  let t = $i(A), n = b.useRef([]), r = Zw(), o = $w(), s = ee((v, F = Tr.Hidden) => {
    let U = n.current.findIndex(({ el: L }) => L === v);
    U !== -1 && (zr(F, { [Tr.Unmount]() {
      n.current.splice(U, 1);
    }, [Tr.Hidden]() {
      n.current[U].state = "hidden";
    } }), o.microTask(() => {
      var L;
      !sd(n) && r.current && ((L = t.current) == null || L.call(t));
    }));
  }), l = ee((v) => {
    let F = n.current.find(({ el: U }) => U === v);
    return F ? F.state !== "visible" && (F.state = "visible") : n.current.push({ el: v, state: "visible" }), () => s(v, Tr.Unmount);
  }), c = b.useRef([]), f = b.useRef(Promise.resolve()), g = b.useRef({ enter: [], leave: [] }), B = ee((v, F, U) => {
    c.current.splice(0), e && (e.chains.current[F] = e.chains.current[F].filter(([L]) => L !== v)), e == null || e.chains.current[F].push([v, new Promise((L) => {
      c.current.push(L);
    })]), e == null || e.chains.current[F].push([v, new Promise((L) => {
      Promise.all(g.current[F].map(([m, w]) => w)).then(() => L());
    })]), F === "enter" ? f.current = f.current.then(() => e == null ? void 0 : e.wait.current).then(() => U(F)) : U(F);
  }), p = ee((v, F, U) => {
    Promise.all(g.current[F].splice(0).map(([L, m]) => m)).then(() => {
      var L;
      (L = c.current.shift()) == null || L();
    }).then(() => U(F));
  });
  return b.useMemo(() => ({ children: n, register: l, unregister: s, onStart: B, onStop: p, wait: f, chains: g }), [l, s, n, B, p, g, f]);
}
let qE = b.Fragment, AI = pf.RenderStrategy;
function v5(A, e) {
  var t, n;
  let { transition: r = !0, beforeEnter: o, afterEnter: s, beforeLeave: l, afterLeave: c, enter: f, enterFrom: g, enterTo: B, entered: p, leave: v, leaveFrom: F, leaveTo: U, ...L } = A, m = b.useRef(null), w = jE(A), y = Sn(...w ? [m, e] : e === null ? [] : [e]), I = (t = L.unmount) == null || t ? Tr.Unmount : Tr.Hidden, { show: H, appear: S, initial: O } = h5(), [k, N] = b.useState(H ? "visible" : "hidden"), W = w5(), { register: sA, unregister: iA } = W;
  ze(() => sA(m), [sA, m]), ze(() => {
    if (I === Tr.Hidden && m.current) {
      if (H && k !== "visible") {
        N("visible");
        return;
      }
      return zr(k, { hidden: () => iA(m), visible: () => sA(m) });
    }
  }, [k, m, sA, iA, H, I]);
  let tA = wl();
  ze(() => {
    if (w && tA && k === "visible" && m.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [m, k, tA, w]);
  let lA = O && !S, mA = S && H && O, fA = b.useRef(!1), J = ZE(() => {
    fA.current || (N("hidden"), iA(m));
  }, W), P = ee((GA) => {
    fA.current = !0;
    let LA = GA ? "enter" : "leave";
    J.onStart(m, LA, (HA) => {
      HA === "enter" ? o == null || o() : HA === "leave" && (l == null || l());
    });
  }), V = ee((GA) => {
    let LA = GA ? "enter" : "leave";
    fA.current = !1, J.onStop(m, LA, (HA) => {
      HA === "enter" ? s == null || s() : HA === "leave" && (c == null || c());
    }), LA === "leave" && !sd(J) && (N("hidden"), iA(m));
  });
  b.useEffect(() => {
    w && r || (P(H), V(H));
  }, [H, w, r]);
  let X = !(!r || !w || !tA || lA), [, j] = P3(X, m, H, { start: P, end: V }), BA = hi({ ref: y, className: ((n = lh(L.className, mA && f, mA && g, j.enter && f, j.enter && j.closed && g, j.enter && !j.closed && B, j.leave && v, j.leave && !j.closed && F, j.leave && j.closed && U, !j.transition && H && p)) == null ? void 0 : n.trim()) || void 0, ...N3(j) }), OA = 0;
  return k === "visible" && (OA |= an.Open), k === "hidden" && (OA |= an.Closed), j.enter && (OA |= an.Opening), j.leave && (OA |= an.Closing), oA.createElement(ad.Provider, { value: J }, oA.createElement($P, { value: OA }, Wt({ ourProps: BA, theirProps: L, defaultTag: qE, features: AI, visible: k === "visible", name: "Transition.Child" })));
}
function m5(A, e) {
  let { show: t, appear: n = !1, unmount: r = !0, ...o } = A, s = b.useRef(null), l = jE(A), c = Sn(...l ? [s, e] : e === null ? [] : [e]);
  wl();
  let f = id();
  if (t === void 0 && f !== null && (t = (f & an.Open) === an.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [g, B] = b.useState(t ? "visible" : "hidden"), p = ZE(() => {
    t || B("hidden");
  }), [v, F] = b.useState(!0), U = b.useRef([t]);
  ze(() => {
    v !== !1 && U.current[U.current.length - 1] !== t && (U.current.push(t), F(!1));
  }, [U, t]);
  let L = b.useMemo(() => ({ show: t, appear: n, initial: v }), [t, n, v]);
  EE(t, s, () => B("hidden")), ze(() => {
    t ? B("visible") : !sd(p) && s.current !== null && B("hidden");
  }, [t, p]);
  let m = { unmount: r }, w = ee(() => {
    var I;
    v && F(!1), (I = A.beforeEnter) == null || I.call(A);
  }), y = ee(() => {
    var I;
    v && F(!1), (I = A.beforeLeave) == null || I.call(A);
  });
  return oA.createElement(ad.Provider, { value: p }, oA.createElement(od.Provider, { value: L }, Wt({ ourProps: { ...m, as: b.Fragment, children: oA.createElement(eI, { ref: c, ...m, ...o, beforeEnter: w, beforeLeave: y }) }, theirProps: {}, defaultTag: b.Fragment, features: AI, visible: g === "visible", name: "Transition" })));
}
function C5(A, e) {
  let t = b.useContext(od) !== null, n = id() !== null;
  return oA.createElement(oA.Fragment, null, !t && n ? oA.createElement(vh, { ref: e, ...A }) : oA.createElement(eI, { ref: e, ...A }));
}
let vh = lt(m5), eI = lt(v5), qs = lt(C5), tI = Object.assign(vh, { Child: qs, Root: vh });
var Q5 = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(Q5 || {}), y5 = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(y5 || {});
let F5 = { 0(A, e) {
  return A.titleId === e.id ? A : { ...A, titleId: e.id };
} }, qw = b.createContext(null);
qw.displayName = "DialogContext";
function ld(A) {
  let e = b.useContext(qw);
  if (e === null) {
    let t = new Error(`<${A} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ld), t;
  }
  return e;
}
function U5(A, e) {
  return zr(e.type, F5, A, e);
}
let w1 = lt(function(A, e) {
  let t = b.useId(), { id: n = `headlessui-dialog-${t}`, open: r, onClose: o, initialFocus: s, role: l = "dialog", autoFocus: c = !0, __demoMode: f = !1, ...g } = A, B = b.useRef(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (B.current || (B.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let p = id();
  r === void 0 && p !== null && (r = (p & an.Open) === an.Open);
  let v = b.useRef(null), F = Sn(v, e), U = gl(v), L = r ? 0 : 1, [m, w] = b.useReducer(U5, { titleId: null, descriptionId: null, panelRef: b.createRef() }), y = ee(() => o(!1)), I = ee((X) => w({ type: 0, id: X })), H = wl() ? L === 0 : !1, [S, O] = e5(), k = { get current() {
    var X;
    return (X = m.panelRef.current) != null ? X : v.current;
  } }, { resolveContainers: N, mainTreeNodeRef: W, MainTreeNode: sA } = o5({ portals: S, defaultContainers: [k] }), iA = p !== null ? (p & an.Closing) === an.Closing : !1;
  v3(f || iA ? !1 : H, { allowed: ee(() => {
    var X, j;
    return [(j = (X = v.current) == null ? void 0 : X.closest("[data-headlessui-portal]")) != null ? j : null];
  }), disallowed: ee(() => {
    var X, j;
    return [(j = (X = W.current) == null ? void 0 : X.closest("body > *:not(#headlessui-portal-root)")) != null ? j : null];
  }) }), L3(H, N, (X) => {
    X.preventDefault(), y();
  }), r5(H, U == null ? void 0 : U.defaultView, (X) => {
    X.preventDefault(), X.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), y();
  }), k3(f || iA ? !1 : H, U, N), EE(H, v, y);
  let [tA, lA] = u3(), mA = b.useMemo(() => [{ dialogState: L, close: y, setTitleId: I }, m], [L, m, y, I]), fA = b.useMemo(() => ({ open: L === 0 }), [L]), J = { ref: F, id: n, role: l, tabIndex: -1, "aria-modal": f ? void 0 : L === 0 ? !0 : void 0, "aria-labelledby": m.titleId, "aria-describedby": tA }, P = !i5(), V = vi.None;
  return H && !f && (V |= vi.RestoreFocus, V |= vi.TabLock, c && (V |= vi.AutoFocus), P && (V |= vi.InitialFocus)), oA.createElement(WP, null, oA.createElement(h1, { force: !0 }, oA.createElement(n5, null, oA.createElement(qw.Provider, { value: mA }, oA.createElement(zE, { target: v }, oA.createElement(h1, { force: !1 }, oA.createElement(lA, { slot: fA }, oA.createElement(O, null, oA.createElement(c5, { initialFocus: s, initialFocusFallback: v, containers: N, features: V }, oA.createElement(p3, { value: y }, Wt({ ourProps: J, theirProps: g, slot: fA, defaultTag: E5, features: I5, visible: L === 0, name: "Dialog" })))))))))), oA.createElement(s3, null, oA.createElement(sA, null)));
}), E5 = "div", I5 = pf.RenderStrategy | pf.Static;
function x5(A, e) {
  let { transition: t = !1, open: n, ...r } = A, o = id(), s = A.hasOwnProperty("open") || o !== null, l = A.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!o && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return o === null && n !== void 0 && !r.static ? oA.createElement(tI, { show: n, transition: t, unmount: r.unmount }, oA.createElement(w1, { ref: e, ...r })) : oA.createElement(w1, { ref: e, open: n, ...r });
}
let H5 = "div";
function S5(A, e) {
  let t = b.useId(), { id: n = `headlessui-dialog-panel-${t}`, transition: r = !1, ...o } = A, [{ dialogState: s }, l] = ld("Dialog.Panel"), c = Sn(e, l.panelRef), f = b.useMemo(() => ({ open: s === 0 }), [s]), g = ee((B) => {
    B.stopPropagation();
  });
  return oA.createElement(r ? qs : b.Fragment, null, Wt({ ourProps: { ref: c, id: n, onClick: g }, theirProps: o, slot: f, defaultTag: H5, name: "Dialog.Panel" }));
}
let L5 = "div";
function b5(A, e) {
  let { transition: t = !1, ...n } = A, [{ dialogState: r }] = ld("Dialog.Backdrop"), o = b.useMemo(() => ({ open: r === 0 }), [r]);
  return oA.createElement(t ? qs : b.Fragment, null, Wt({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: n, slot: o, defaultTag: L5, name: "Dialog.Backdrop" }));
}
let _5 = "h2";
function T5(A, e) {
  let t = b.useId(), { id: n = `headlessui-dialog-title-${t}`, ...r } = A, [{ dialogState: o, setTitleId: s }] = ld("Dialog.Title"), l = Sn(e);
  b.useEffect(() => (s(n), () => s(null)), [n, s]);
  let c = b.useMemo(() => ({ open: o === 0 }), [o]);
  return Wt({ ourProps: { ref: l, id: n }, theirProps: r, slot: c, defaultTag: _5, name: "Dialog.Title" });
}
let O5 = lt(x5), nI = lt(S5);
lt(b5);
let D5 = lt(T5), k5 = Object.assign(O5, { Panel: nI, Title: D5, Description: g3 });
function v1(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(A);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(A, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function AA(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? v1(Object(t), !0).forEach(function(n) {
      me(A, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : v1(Object(t)).forEach(function(n) {
      Object.defineProperty(A, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return A;
}
function Qf(A) {
  "@babel/helpers - typeof";
  return Qf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qf(A);
}
function R5(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function K5(A, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
  }
}
function M5(A, e, t) {
  return e && K5(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function me(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function A0(A, e) {
  return P5(A) || V5(A, e) || rI(A, e) || W5();
}
function vl(A) {
  return N5(A) || G5(A) || rI(A) || $5();
}
function N5(A) {
  if (Array.isArray(A)) return mh(A);
}
function P5(A) {
  if (Array.isArray(A)) return A;
}
function G5(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function V5(A, e) {
  var t = A == null ? null : typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
  if (t != null) {
    var n = [], r = !0, o = !1, s, l;
    try {
      for (t = t.call(A); !(r = (s = t.next()).done) && (n.push(s.value), !(e && n.length === e)); r = !0)
        ;
    } catch (c) {
      o = !0, l = c;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function rI(A, e) {
  if (A) {
    if (typeof A == "string") return mh(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return mh(A, e);
  }
}
function mh(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = A[t];
  return n;
}
function $5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var m1 = function() {
}, e0 = {}, iI = {}, oI = null, aI = {
  mark: m1,
  measure: m1
};
try {
  typeof window < "u" && (e0 = window), typeof document < "u" && (iI = document), typeof MutationObserver < "u" && (oI = MutationObserver), typeof performance < "u" && (aI = performance);
} catch {
}
var X5 = e0.navigator || {}, C1 = X5.userAgent, Q1 = C1 === void 0 ? "" : C1, jr = e0, YA = iI, y1 = oI, qu = aI;
jr.document;
var sr = !!YA.documentElement && !!YA.head && typeof YA.addEventListener == "function" && typeof YA.createElement == "function", sI = ~Q1.indexOf("MSIE") || ~Q1.indexOf("Trident/"), Ac, ec, tc, nc, rc, rr = "___FONT_AWESOME___", Ch = 16, lI = "fa", uI = "svg-inline--fa", Ni = "data-fa-i2svg", Qh = "data-fa-pseudo-element", z5 = "data-fa-pseudo-element-pending", t0 = "data-prefix", n0 = "data-icon", F1 = "fontawesome-i2svg", Y5 = "async", J5 = ["HTML", "HEAD", "STYLE", "SCRIPT"], cI = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), XA = "classic", oe = "sharp", r0 = [XA, oe];
function ml(A) {
  return new Proxy(A, {
    get: function(t, n) {
      return n in t ? t[n] : t[XA];
    }
  });
}
var Al = ml((Ac = {}, me(Ac, XA, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), me(Ac, oe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ac)), el = ml((ec = {}, me(ec, XA, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), me(ec, oe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), ec)), tl = ml((tc = {}, me(tc, XA, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), me(tc, oe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), tc)), j5 = ml((nc = {}, me(nc, XA, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), me(nc, oe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), nc)), Z5 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, fI = "fa-layers-text", q5 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, A6 = ml((rc = {}, me(rc, XA, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), me(rc, oe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), rc)), dI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e6 = dI.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), t6 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ui = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, nl = /* @__PURE__ */ new Set();
Object.keys(el[XA]).map(nl.add.bind(nl));
Object.keys(el[oe]).map(nl.add.bind(nl));
var n6 = [].concat(r0, vl(nl), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ui.GROUP, Ui.SWAP_OPACITY, Ui.PRIMARY, Ui.SECONDARY]).concat(dI.map(function(A) {
  return "".concat(A, "x");
})).concat(e6.map(function(A) {
  return "w-".concat(A);
})), xs = jr.FontAwesomeConfig || {};
function r6(A) {
  var e = YA.querySelector("script[" + A + "]");
  if (e)
    return e.getAttribute(A);
}
function i6(A) {
  return A === "" ? !0 : A === "false" ? !1 : A === "true" ? !0 : A;
}
if (YA && typeof YA.querySelector == "function") {
  var o6 = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  o6.forEach(function(A) {
    var e = A0(A, 2), t = e[0], n = e[1], r = i6(r6(t));
    r != null && (xs[n] = r);
  });
}
var gI = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: lI,
  replacementClass: uI,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
xs.familyPrefix && (xs.cssPrefix = xs.familyPrefix);
var na = AA(AA({}, gI), xs);
na.autoReplaceSvg || (na.observeMutations = !1);
var rA = {};
Object.keys(gI).forEach(function(A) {
  Object.defineProperty(rA, A, {
    enumerable: !0,
    set: function(t) {
      na[A] = t, Hs.forEach(function(n) {
        return n(rA);
      });
    },
    get: function() {
      return na[A];
    }
  });
});
Object.defineProperty(rA, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    na.cssPrefix = e, Hs.forEach(function(t) {
      return t(rA);
    });
  },
  get: function() {
    return na.cssPrefix;
  }
});
jr.FontAwesomeConfig = rA;
var Hs = [];
function a6(A) {
  return Hs.push(A), function() {
    Hs.splice(Hs.indexOf(A), 1);
  };
}
var vr = Ch, Fn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function s6(A) {
  if (!(!A || !sr)) {
    var e = YA.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = A;
    for (var t = YA.head.childNodes, n = null, r = t.length - 1; r > -1; r--) {
      var o = t[r], s = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = o);
    }
    return YA.head.insertBefore(e, n), A;
  }
}
var l6 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rl() {
  for (var A = 12, e = ""; A-- > 0; )
    e += l6[Math.random() * 62 | 0];
  return e;
}
function Ba(A) {
  for (var e = [], t = (A || []).length >>> 0; t--; )
    e[t] = A[t];
  return e;
}
function i0(A) {
  return A.classList ? Ba(A.classList) : (A.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function BI(A) {
  return "".concat(A).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function u6(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat(BI(A[t]), '" ');
  }, "").trim();
}
function ud(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, ": ").concat(A[t].trim(), ";");
  }, "");
}
function o0(A) {
  return A.size !== Fn.size || A.x !== Fn.x || A.y !== Fn.y || A.rotate !== Fn.rotate || A.flipX || A.flipY;
}
function c6(A) {
  var e = A.transform, t = A.containerWidth, n = A.iconWidth, r = {
    transform: "translate(".concat(t / 2, " 256)")
  }, o = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), l = "rotate(".concat(e.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, f = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: c,
    path: f
  };
}
function f6(A) {
  var e = A.transform, t = A.width, n = t === void 0 ? Ch : t, r = A.height, o = r === void 0 ? Ch : r, s = A.startCentered, l = s === void 0 ? !1 : s, c = "";
  return l && sI ? c += "translate(".concat(e.x / vr - n / 2, "em, ").concat(e.y / vr - o / 2, "em) ") : l ? c += "translate(calc(-50% + ".concat(e.x / vr, "em), calc(-50% + ").concat(e.y / vr, "em)) ") : c += "translate(".concat(e.x / vr, "em, ").concat(e.y / vr, "em) "), c += "scale(".concat(e.size / vr * (e.flipX ? -1 : 1), ", ").concat(e.size / vr * (e.flipY ? -1 : 1), ") "), c += "rotate(".concat(e.rotate, "deg) "), c;
}
var d6 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function pI() {
  var A = lI, e = uI, t = rA.cssPrefix, n = rA.replacementClass, r = d6;
  if (t !== A || n !== e) {
    var o = new RegExp("\\.".concat(A, "\\-"), "g"), s = new RegExp("\\--".concat(A, "\\-"), "g"), l = new RegExp("\\.".concat(e), "g");
    r = r.replace(o, ".".concat(t, "-")).replace(s, "--".concat(t, "-")).replace(l, ".".concat(n));
  }
  return r;
}
var U1 = !1;
function kB() {
  rA.autoAddCss && !U1 && (s6(pI()), U1 = !0);
}
var g6 = {
  mixout: function() {
    return {
      dom: {
        css: pI,
        insertCss: kB
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        kB();
      },
      beforeI2svg: function() {
        kB();
      }
    };
  }
}, ir = jr || {};
ir[rr] || (ir[rr] = {});
ir[rr].styles || (ir[rr].styles = {});
ir[rr].hooks || (ir[rr].hooks = {});
ir[rr].shims || (ir[rr].shims = []);
var sn = ir[rr], hI = [], B6 = function A() {
  YA.removeEventListener("DOMContentLoaded", A), yf = 1, hI.map(function(e) {
    return e();
  });
}, yf = !1;
sr && (yf = (YA.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(YA.readyState), yf || YA.addEventListener("DOMContentLoaded", B6));
function p6(A) {
  sr && (yf ? setTimeout(A, 0) : hI.push(A));
}
function Cl(A) {
  var e = A.tag, t = A.attributes, n = t === void 0 ? {} : t, r = A.children, o = r === void 0 ? [] : r;
  return typeof A == "string" ? BI(A) : "<".concat(e, " ").concat(u6(n), ">").concat(o.map(Cl).join(""), "</").concat(e, ">");
}
function E1(A, e, t) {
  if (A && A[e] && A[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: A[e][t]
    };
}
var RB = function(e, t, n, r) {
  var o = Object.keys(e), s = o.length, l = t, c, f, g;
  for (n === void 0 ? (c = 1, g = e[o[0]]) : (c = 0, g = n); c < s; c++)
    f = o[c], g = l(g, e[f], f, e);
  return g;
};
function h6(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var o = A.charCodeAt(t++);
      (o & 64512) == 56320 ? e.push(((r & 1023) << 10) + (o & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}
function yh(A) {
  var e = h6(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function w6(A, e) {
  var t = A.length, n = A.charCodeAt(e), r;
  return n >= 55296 && n <= 56319 && t > e + 1 && (r = A.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function I1(A) {
  return Object.keys(A).reduce(function(e, t) {
    var n = A[t], r = !!n.icon;
    return r ? e[n.iconName] = n.icon : e[t] = n, e;
  }, {});
}
function Fh(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.skipHooks, r = n === void 0 ? !1 : n, o = I1(e);
  typeof sn.hooks.addPack == "function" && !r ? sn.hooks.addPack(A, I1(e)) : sn.styles[A] = AA(AA({}, sn.styles[A] || {}), o), A === "fas" && Fh("fa", e);
}
var ic, oc, ac, _o = sn.styles, v6 = sn.shims, m6 = (ic = {}, me(ic, XA, Object.values(tl[XA])), me(ic, oe, Object.values(tl[oe])), ic), a0 = null, wI = {}, vI = {}, mI = {}, CI = {}, QI = {}, C6 = (oc = {}, me(oc, XA, Object.keys(Al[XA])), me(oc, oe, Object.keys(Al[oe])), oc);
function Q6(A) {
  return ~n6.indexOf(A);
}
function y6(A, e) {
  var t = e.split("-"), n = t[0], r = t.slice(1).join("-");
  return n === A && r !== "" && !Q6(r) ? r : null;
}
var yI = function() {
  var e = function(o) {
    return RB(_o, function(s, l, c) {
      return s[c] = RB(l, o, {}), s;
    }, {});
  };
  wI = e(function(r, o, s) {
    if (o[3] && (r[o[3]] = s), o[2]) {
      var l = o[2].filter(function(c) {
        return typeof c == "number";
      });
      l.forEach(function(c) {
        r[c.toString(16)] = s;
      });
    }
    return r;
  }), vI = e(function(r, o, s) {
    if (r[s] = s, o[2]) {
      var l = o[2].filter(function(c) {
        return typeof c == "string";
      });
      l.forEach(function(c) {
        r[c] = s;
      });
    }
    return r;
  }), QI = e(function(r, o, s) {
    var l = o[2];
    return r[s] = s, l.forEach(function(c) {
      r[c] = s;
    }), r;
  });
  var t = "far" in _o || rA.autoFetchSvg, n = RB(v6, function(r, o) {
    var s = o[0], l = o[1], c = o[2];
    return l === "far" && !t && (l = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: l,
      iconName: c
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: l,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  mI = n.names, CI = n.unicodes, a0 = cd(rA.styleDefault, {
    family: rA.familyDefault
  });
};
a6(function(A) {
  a0 = cd(A.styleDefault, {
    family: rA.familyDefault
  });
});
yI();
function s0(A, e) {
  return (wI[A] || {})[e];
}
function F6(A, e) {
  return (vI[A] || {})[e];
}
function Ei(A, e) {
  return (QI[A] || {})[e];
}
function FI(A) {
  return mI[A] || {
    prefix: null,
    iconName: null
  };
}
function U6(A) {
  var e = CI[A], t = s0("fas", A);
  return e || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Zr() {
  return a0;
}
var l0 = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function cd(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, n = t === void 0 ? XA : t, r = Al[n][A], o = el[n][A] || el[n][r], s = A in sn.styles ? A : null;
  return o || s || null;
}
var x1 = (ac = {}, me(ac, XA, Object.keys(tl[XA])), me(ac, oe, Object.keys(tl[oe])), ac);
function fd(A) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.skipLookups, r = n === void 0 ? !1 : n, o = (e = {}, me(e, XA, "".concat(rA.cssPrefix, "-").concat(XA)), me(e, oe, "".concat(rA.cssPrefix, "-").concat(oe)), e), s = null, l = XA;
  (A.includes(o[XA]) || A.some(function(f) {
    return x1[XA].includes(f);
  })) && (l = XA), (A.includes(o[oe]) || A.some(function(f) {
    return x1[oe].includes(f);
  })) && (l = oe);
  var c = A.reduce(function(f, g) {
    var B = y6(rA.cssPrefix, g);
    if (_o[g] ? (g = m6[l].includes(g) ? j5[l][g] : g, s = g, f.prefix = g) : C6[l].indexOf(g) > -1 ? (s = g, f.prefix = cd(g, {
      family: l
    })) : B ? f.iconName = B : g !== rA.replacementClass && g !== o[XA] && g !== o[oe] && f.rest.push(g), !r && f.prefix && f.iconName) {
      var p = s === "fa" ? FI(f.iconName) : {}, v = Ei(f.prefix, f.iconName);
      p.prefix && (s = null), f.iconName = p.iconName || v || f.iconName, f.prefix = p.prefix || f.prefix, f.prefix === "far" && !_o.far && _o.fas && !rA.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, l0());
  return (A.includes("fa-brands") || A.includes("fab")) && (c.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (c.prefix = "fad"), !c.prefix && l === oe && (_o.fass || rA.autoFetchSvg) && (c.prefix = "fass", c.iconName = Ei(c.prefix, c.iconName) || c.iconName), (c.prefix === "fa" || s === "fa") && (c.prefix = Zr() || "fas"), c;
}
var E6 = /* @__PURE__ */ function() {
  function A() {
    R5(this, A), this.definitions = {};
  }
  return M5(A, [{
    key: "add",
    value: function() {
      for (var t = this, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var s = r.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(l) {
        t.definitions[l] = AA(AA({}, t.definitions[l] || {}), s[l]), Fh(l, s[l]);
        var c = tl[XA][l];
        c && Fh(c, s[l]), yI();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(o) {
        var s = r[o], l = s.prefix, c = s.iconName, f = s.icon, g = f[2];
        t[l] || (t[l] = {}), g.length > 0 && g.forEach(function(B) {
          typeof B == "string" && (t[l][B] = f);
        }), t[l][c] = f;
      }), t;
    }
  }]), A;
}(), H1 = [], To = {}, Wo = {}, I6 = Object.keys(Wo);
function x6(A, e) {
  var t = e.mixoutsTo;
  return H1 = A, To = {}, Object.keys(Wo).forEach(function(n) {
    I6.indexOf(n) === -1 && delete Wo[n];
  }), H1.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(s) {
      typeof r[s] == "function" && (t[s] = r[s]), Qf(r[s]) === "object" && Object.keys(r[s]).forEach(function(l) {
        t[s] || (t[s] = {}), t[s][l] = r[s][l];
      });
    }), n.hooks) {
      var o = n.hooks();
      Object.keys(o).forEach(function(s) {
        To[s] || (To[s] = []), To[s].push(o[s]);
      });
    }
    n.provides && n.provides(Wo);
  }), t;
}
function Uh(A, e) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++)
    n[r - 2] = arguments[r];
  var o = To[A] || [];
  return o.forEach(function(s) {
    e = s.apply(null, [e].concat(n));
  }), e;
}
function Pi(A) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  var r = To[A] || [];
  r.forEach(function(o) {
    o.apply(null, t);
  });
}
function or() {
  var A = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Wo[A] ? Wo[A].apply(null, e) : void 0;
}
function Eh(A) {
  A.prefix === "fa" && (A.prefix = "fas");
  var e = A.iconName, t = A.prefix || Zr();
  if (e)
    return e = Ei(t, e) || e, E1(UI.definitions, t, e) || E1(sn.styles, t, e);
}
var UI = new E6(), H6 = function() {
  rA.autoReplaceSvg = !1, rA.observeMutations = !1, Pi("noAuto");
}, S6 = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return sr ? (Pi("beforeI2svg", e), or("pseudoElements2svg", e), or("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    rA.autoReplaceSvg === !1 && (rA.autoReplaceSvg = !0), rA.observeMutations = !0, p6(function() {
      b6({
        autoReplaceSvgRoot: t
      }), Pi("watch", e);
    });
  }
}, L6 = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Qf(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ei(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = cd(e[0]);
      return {
        prefix: n,
        iconName: Ei(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(rA.cssPrefix, "-")) > -1 || e.match(Z5))) {
      var r = fd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Zr(),
        iconName: Ei(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var o = Zr();
      return {
        prefix: o,
        iconName: Ei(o, e) || e
      };
    }
  }
}, Et = {
  noAuto: H6,
  config: rA,
  dom: S6,
  parse: L6,
  library: UI,
  findIconDefinition: Eh,
  toHtml: Cl
}, b6 = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, n = t === void 0 ? YA : t;
  (Object.keys(sn.styles).length > 0 || rA.autoFetchSvg) && sr && rA.autoReplaceSvg && Et.dom.i2svg({
    node: n
  });
};
function dd(A, e) {
  return Object.defineProperty(A, "abstract", {
    get: e
  }), Object.defineProperty(A, "html", {
    get: function() {
      return A.abstract.map(function(n) {
        return Cl(n);
      });
    }
  }), Object.defineProperty(A, "node", {
    get: function() {
      if (sr) {
        var n = YA.createElement("div");
        return n.innerHTML = A.html, n.children;
      }
    }
  }), A;
}
function _6(A) {
  var e = A.children, t = A.main, n = A.mask, r = A.attributes, o = A.styles, s = A.transform;
  if (o0(s) && t.found && !n.found) {
    var l = t.width, c = t.height, f = {
      x: l / c / 2,
      y: 0.5
    };
    r.style = ud(AA(AA({}, o), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function T6(A) {
  var e = A.prefix, t = A.iconName, n = A.children, r = A.attributes, o = A.symbol, s = o === !0 ? "".concat(e, "-").concat(rA.cssPrefix, "-").concat(t) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: AA(AA({}, r), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function u0(A) {
  var e = A.icons, t = e.main, n = e.mask, r = A.prefix, o = A.iconName, s = A.transform, l = A.symbol, c = A.title, f = A.maskId, g = A.titleId, B = A.extra, p = A.watchable, v = p === void 0 ? !1 : p, F = n.found ? n : t, U = F.width, L = F.height, m = r === "fak", w = [rA.replacementClass, o ? "".concat(rA.cssPrefix, "-").concat(o) : ""].filter(function(N) {
    return B.classes.indexOf(N) === -1;
  }).filter(function(N) {
    return N !== "" || !!N;
  }).concat(B.classes).join(" "), y = {
    children: [],
    attributes: AA(AA({}, B.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: w,
      role: B.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(U, " ").concat(L)
    })
  }, I = m && !~B.classes.indexOf("fa-fw") ? {
    width: "".concat(U / L * 16 * 0.0625, "em")
  } : {};
  v && (y.attributes[Ni] = ""), c && (y.children.push({
    tag: "title",
    attributes: {
      id: y.attributes["aria-labelledby"] || "title-".concat(g || rl())
    },
    children: [c]
  }), delete y.attributes.title);
  var H = AA(AA({}, y), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: f,
    transform: s,
    symbol: l,
    styles: AA(AA({}, I), B.styles)
  }), S = n.found && t.found ? or("generateAbstractMask", H) || {
    children: [],
    attributes: {}
  } : or("generateAbstractIcon", H) || {
    children: [],
    attributes: {}
  }, O = S.children, k = S.attributes;
  return H.children = O, H.attributes = k, l ? T6(H) : _6(H);
}
function S1(A) {
  var e = A.content, t = A.width, n = A.height, r = A.transform, o = A.title, s = A.extra, l = A.watchable, c = l === void 0 ? !1 : l, f = AA(AA(AA({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  c && (f[Ni] = "");
  var g = AA({}, s.styles);
  o0(r) && (g.transform = f6({
    transform: r,
    startCentered: !0,
    width: t,
    height: n
  }), g["-webkit-transform"] = g.transform);
  var B = ud(g);
  B.length > 0 && (f.style = B);
  var p = [];
  return p.push({
    tag: "span",
    attributes: f,
    children: [e]
  }), o && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), p;
}
function O6(A) {
  var e = A.content, t = A.title, n = A.extra, r = AA(AA(AA({}, n.attributes), t ? {
    title: t
  } : {}), {}, {
    class: n.classes.join(" ")
  }), o = ud(n.styles);
  o.length > 0 && (r.style = o);
  var s = [];
  return s.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), t && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), s;
}
var KB = sn.styles;
function Ih(A) {
  var e = A[0], t = A[1], n = A.slice(4), r = A0(n, 1), o = r[0], s = null;
  return Array.isArray(o) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(rA.cssPrefix, "-").concat(Ui.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(rA.cssPrefix, "-").concat(Ui.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(rA.cssPrefix, "-").concat(Ui.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: e,
    height: t,
    icon: s
  };
}
var D6 = {
  found: !1,
  width: 512,
  height: 512
};
function k6(A, e) {
  !cI && !rA.showMissingIcons && A && console.error('Icon with name "'.concat(A, '" and prefix "').concat(e, '" is missing.'));
}
function xh(A, e) {
  var t = e;
  return e === "fa" && rA.styleDefault !== null && (e = Zr()), new Promise(function(n, r) {
    if (or("missingIconAbstract"), t === "fa") {
      var o = FI(A) || {};
      A = o.iconName || A, e = o.prefix || e;
    }
    if (A && e && KB[e] && KB[e][A]) {
      var s = KB[e][A];
      return n(Ih(s));
    }
    k6(A, e), n(AA(AA({}, D6), {}, {
      icon: rA.showMissingIcons && A ? or("missingIconAbstract") || {} : {}
    }));
  });
}
var L1 = function() {
}, Hh = rA.measurePerformance && qu && qu.mark && qu.measure ? qu : {
  mark: L1,
  measure: L1
}, us = 'FA "6.5.2"', R6 = function(e) {
  return Hh.mark("".concat(us, " ").concat(e, " begins")), function() {
    return EI(e);
  };
}, EI = function(e) {
  Hh.mark("".concat(us, " ").concat(e, " ends")), Hh.measure("".concat(us, " ").concat(e), "".concat(us, " ").concat(e, " begins"), "".concat(us, " ").concat(e, " ends"));
}, c0 = {
  begin: R6,
  end: EI
}, Ic = function() {
};
function b1(A) {
  var e = A.getAttribute ? A.getAttribute(Ni) : null;
  return typeof e == "string";
}
function K6(A) {
  var e = A.getAttribute ? A.getAttribute(t0) : null, t = A.getAttribute ? A.getAttribute(n0) : null;
  return e && t;
}
function M6(A) {
  return A && A.classList && A.classList.contains && A.classList.contains(rA.replacementClass);
}
function N6() {
  if (rA.autoReplaceSvg === !0)
    return xc.replace;
  var A = xc[rA.autoReplaceSvg];
  return A || xc.replace;
}
function P6(A) {
  return YA.createElementNS("http://www.w3.org/2000/svg", A);
}
function G6(A) {
  return YA.createElement(A);
}
function II(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, n = t === void 0 ? A.tag === "svg" ? P6 : G6 : t;
  if (typeof A == "string")
    return YA.createTextNode(A);
  var r = n(A.tag);
  Object.keys(A.attributes || []).forEach(function(s) {
    r.setAttribute(s, A.attributes[s]);
  });
  var o = A.children || [];
  return o.forEach(function(s) {
    r.appendChild(II(s, {
      ceFn: n
    }));
  }), r;
}
function V6(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var xc = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(r) {
        t.parentNode.insertBefore(II(r), t);
      }), t.getAttribute(Ni) === null && rA.keepOriginalSource) {
        var n = YA.createComment(V6(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], n = e[1];
    if (~i0(t).indexOf(rA.replacementClass))
      return xc.replace(e);
    var r = new RegExp("".concat(rA.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var o = n[0].attributes.class.split(" ").reduce(function(l, c) {
        return c === rA.replacementClass || c.match(r) ? l.toSvg.push(c) : l.toNode.push(c), l;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    var s = n.map(function(l) {
      return Cl(l);
    }).join(`
`);
    t.setAttribute(Ni, ""), t.innerHTML = s;
  }
};
function _1(A) {
  A();
}
function xI(A, e) {
  var t = typeof e == "function" ? e : Ic;
  if (A.length === 0)
    t();
  else {
    var n = _1;
    rA.mutateApproach === Y5 && (n = jr.requestAnimationFrame || _1), n(function() {
      var r = N6(), o = c0.begin("mutate");
      A.map(r), o(), t();
    });
  }
}
var f0 = !1;
function HI() {
  f0 = !0;
}
function Sh() {
  f0 = !1;
}
var Ff = null;
function T1(A) {
  if (y1 && rA.observeMutations) {
    var e = A.treeCallback, t = e === void 0 ? Ic : e, n = A.nodeCallback, r = n === void 0 ? Ic : n, o = A.pseudoElementsCallback, s = o === void 0 ? Ic : o, l = A.observeMutationsRoot, c = l === void 0 ? YA : l;
    Ff = new y1(function(f) {
      if (!f0) {
        var g = Zr();
        Ba(f).forEach(function(B) {
          if (B.type === "childList" && B.addedNodes.length > 0 && !b1(B.addedNodes[0]) && (rA.searchPseudoElements && s(B.target), t(B.target)), B.type === "attributes" && B.target.parentNode && rA.searchPseudoElements && s(B.target.parentNode), B.type === "attributes" && b1(B.target) && ~t6.indexOf(B.attributeName))
            if (B.attributeName === "class" && K6(B.target)) {
              var p = fd(i0(B.target)), v = p.prefix, F = p.iconName;
              B.target.setAttribute(t0, v || g), F && B.target.setAttribute(n0, F);
            } else M6(B.target) && r(B.target);
        });
      }
    }), sr && Ff.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function $6() {
  Ff && Ff.disconnect();
}
function W6(A) {
  var e = A.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(n, r) {
    var o = r.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (n[s] = l.join(":").trim()), n;
  }, {})), t;
}
function X6(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), n = A.innerText !== void 0 ? A.innerText.trim() : "", r = fd(i0(A));
  return r.prefix || (r.prefix = Zr()), e && t && (r.prefix = e, r.iconName = t), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = F6(r.prefix, A.innerText) || s0(r.prefix, yh(A.innerText))), !r.iconName && rA.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = A.firstChild.data)), r;
}
function z6(A) {
  var e = Ba(A.attributes).reduce(function(r, o) {
    return r.name !== "class" && r.name !== "style" && (r[o.name] = o.value), r;
  }, {}), t = A.getAttribute("title"), n = A.getAttribute("data-fa-title-id");
  return rA.autoA11y && (t ? e["aria-labelledby"] = "".concat(rA.replacementClass, "-title-").concat(n || rl()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function Y6() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Fn,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function O1(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = X6(A), n = t.iconName, r = t.prefix, o = t.rest, s = z6(A), l = Uh("parseNodeAttributes", {}, A), c = e.styleParser ? W6(A) : [];
  return AA({
    iconName: n,
    title: A.getAttribute("title"),
    titleId: A.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Fn,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: c,
      attributes: s
    }
  }, l);
}
var J6 = sn.styles;
function SI(A) {
  var e = rA.autoReplaceSvg === "nest" ? O1(A, {
    styleParser: !1
  }) : O1(A);
  return ~e.extra.classes.indexOf(fI) ? or("generateLayersText", A, e) : or("generateSvgReplacementMutation", A, e);
}
var qr = /* @__PURE__ */ new Set();
r0.map(function(A) {
  qr.add("fa-".concat(A));
});
Object.keys(Al[XA]).map(qr.add.bind(qr));
Object.keys(Al[oe]).map(qr.add.bind(qr));
qr = vl(qr);
function D1(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!sr) return Promise.resolve();
  var t = YA.documentElement.classList, n = function(B) {
    return t.add("".concat(F1, "-").concat(B));
  }, r = function(B) {
    return t.remove("".concat(F1, "-").concat(B));
  }, o = rA.autoFetchSvg ? qr : r0.map(function(g) {
    return "fa-".concat(g);
  }).concat(Object.keys(J6));
  o.includes("fa") || o.push("fa");
  var s = [".".concat(fI, ":not([").concat(Ni, "])")].concat(o.map(function(g) {
    return ".".concat(g, ":not([").concat(Ni, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = Ba(A.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var c = c0.begin("onTree"), f = l.reduce(function(g, B) {
    try {
      var p = SI(B);
      p && g.push(p);
    } catch (v) {
      cI || v.name === "MissingIcon" && console.error(v);
    }
    return g;
  }, []);
  return new Promise(function(g, B) {
    Promise.all(f).then(function(p) {
      xI(p, function() {
        n("active"), n("complete"), r("pending"), typeof e == "function" && e(), c(), g();
      });
    }).catch(function(p) {
      c(), B(p);
    });
  });
}
function j6(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  SI(A).then(function(t) {
    t && xI([t], e);
  });
}
function Z6(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Eh(e || {}), r = t.mask;
    return r && (r = (r || {}).icon ? r : Eh(r || {})), A(n, AA(AA({}, t), {}, {
      mask: r
    }));
  };
}
var q6 = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? Fn : n, o = t.symbol, s = o === void 0 ? !1 : o, l = t.mask, c = l === void 0 ? null : l, f = t.maskId, g = f === void 0 ? null : f, B = t.title, p = B === void 0 ? null : B, v = t.titleId, F = v === void 0 ? null : v, U = t.classes, L = U === void 0 ? [] : U, m = t.attributes, w = m === void 0 ? {} : m, y = t.styles, I = y === void 0 ? {} : y;
  if (e) {
    var H = e.prefix, S = e.iconName, O = e.icon;
    return dd(AA({
      type: "icon"
    }, e), function() {
      return Pi("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), rA.autoA11y && (p ? w["aria-labelledby"] = "".concat(rA.replacementClass, "-title-").concat(F || rl()) : (w["aria-hidden"] = "true", w.focusable = "false")), u0({
        icons: {
          main: Ih(O),
          mask: c ? Ih(c.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: H,
        iconName: S,
        transform: AA(AA({}, Fn), r),
        symbol: s,
        title: p,
        maskId: g,
        titleId: F,
        extra: {
          attributes: w,
          styles: I,
          classes: L
        }
      });
    });
  }
}, A8 = {
  mixout: function() {
    return {
      icon: Z6(q6)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = D1, t.nodeCallback = j6, t;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(t) {
      var n = t.node, r = n === void 0 ? YA : n, o = t.callback, s = o === void 0 ? function() {
      } : o;
      return D1(r, s);
    }, e.generateSvgReplacementMutation = function(t, n) {
      var r = n.iconName, o = n.title, s = n.titleId, l = n.prefix, c = n.transform, f = n.symbol, g = n.mask, B = n.maskId, p = n.extra;
      return new Promise(function(v, F) {
        Promise.all([xh(r, l), g.iconName ? xh(g.iconName, g.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(U) {
          var L = A0(U, 2), m = L[0], w = L[1];
          v([t, u0({
            icons: {
              main: m,
              mask: w
            },
            prefix: l,
            iconName: r,
            transform: c,
            symbol: f,
            maskId: B,
            title: o,
            titleId: s,
            extra: p,
            watchable: !0
          })]);
        }).catch(F);
      });
    }, e.generateAbstractIcon = function(t) {
      var n = t.children, r = t.attributes, o = t.main, s = t.transform, l = t.styles, c = ud(l);
      c.length > 0 && (r.style = c);
      var f;
      return o0(s) && (f = or("generateAbstractTransformGrouping", {
        main: o,
        transform: s,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(f || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, e8 = {
  mixout: function() {
    return {
      layer: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, o = r === void 0 ? [] : r;
        return dd({
          type: "layer"
        }, function() {
          Pi("beforeDOMElementCreation", {
            assembler: t,
            params: n
          });
          var s = [];
          return t(function(l) {
            Array.isArray(l) ? l.map(function(c) {
              s = s.concat(c.abstract);
            }) : s = s.concat(l.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(rA.cssPrefix, "-layers")].concat(vl(o)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, t8 = {
  mixout: function() {
    return {
      counter: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.title, o = r === void 0 ? null : r, s = n.classes, l = s === void 0 ? [] : s, c = n.attributes, f = c === void 0 ? {} : c, g = n.styles, B = g === void 0 ? {} : g;
        return dd({
          type: "counter",
          content: t
        }, function() {
          return Pi("beforeDOMElementCreation", {
            content: t,
            params: n
          }), O6({
            content: t.toString(),
            title: o,
            extra: {
              attributes: f,
              styles: B,
              classes: ["".concat(rA.cssPrefix, "-layers-counter")].concat(vl(l))
            }
          });
        });
      }
    };
  }
}, n8 = {
  mixout: function() {
    return {
      text: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? Fn : r, s = n.title, l = s === void 0 ? null : s, c = n.classes, f = c === void 0 ? [] : c, g = n.attributes, B = g === void 0 ? {} : g, p = n.styles, v = p === void 0 ? {} : p;
        return dd({
          type: "text",
          content: t
        }, function() {
          return Pi("beforeDOMElementCreation", {
            content: t,
            params: n
          }), S1({
            content: t,
            transform: AA(AA({}, Fn), o),
            title: l,
            extra: {
              attributes: B,
              styles: v,
              classes: ["".concat(rA.cssPrefix, "-layers-text")].concat(vl(f))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(t, n) {
      var r = n.title, o = n.transform, s = n.extra, l = null, c = null;
      if (sI) {
        var f = parseInt(getComputedStyle(t).fontSize, 10), g = t.getBoundingClientRect();
        l = g.width / f, c = g.height / f;
      }
      return rA.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, S1({
        content: t.innerHTML,
        width: l,
        height: c,
        transform: o,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, r8 = new RegExp('"', "ug"), k1 = [1105920, 1112319];
function i8(A) {
  var e = A.replace(r8, ""), t = w6(e, 0), n = t >= k1[0] && t <= k1[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: yh(r ? e[0] : e),
    isSecondary: n || r
  };
}
function R1(A, e) {
  var t = "".concat(z5).concat(e.replace(":", "-"));
  return new Promise(function(n, r) {
    if (A.getAttribute(t) !== null)
      return n();
    var o = Ba(A.children), s = o.filter(function(O) {
      return O.getAttribute(Qh) === e;
    })[0], l = jr.getComputedStyle(A, e), c = l.getPropertyValue("font-family").match(q5), f = l.getPropertyValue("font-weight"), g = l.getPropertyValue("content");
    if (s && !c)
      return A.removeChild(s), n();
    if (c && g !== "none" && g !== "") {
      var B = l.getPropertyValue("content"), p = ~["Sharp"].indexOf(c[2]) ? oe : XA, v = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? el[p][c[2].toLowerCase()] : A6[p][f], F = i8(B), U = F.value, L = F.isSecondary, m = c[0].startsWith("FontAwesome"), w = s0(v, U), y = w;
      if (m) {
        var I = U6(U);
        I.iconName && I.prefix && (w = I.iconName, v = I.prefix);
      }
      if (w && !L && (!s || s.getAttribute(t0) !== v || s.getAttribute(n0) !== y)) {
        A.setAttribute(t, y), s && A.removeChild(s);
        var H = Y6(), S = H.extra;
        S.attributes[Qh] = e, xh(w, v).then(function(O) {
          var k = u0(AA(AA({}, H), {}, {
            icons: {
              main: O,
              mask: l0()
            },
            prefix: v,
            iconName: y,
            extra: S,
            watchable: !0
          })), N = YA.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? A.insertBefore(N, A.firstChild) : A.appendChild(N), N.outerHTML = k.map(function(W) {
            return Cl(W);
          }).join(`
`), A.removeAttribute(t), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function o8(A) {
  return Promise.all([R1(A, "::before"), R1(A, "::after")]);
}
function a8(A) {
  return A.parentNode !== document.head && !~J5.indexOf(A.tagName.toUpperCase()) && !A.getAttribute(Qh) && (!A.parentNode || A.parentNode.tagName !== "svg");
}
function K1(A) {
  if (sr)
    return new Promise(function(e, t) {
      var n = Ba(A.querySelectorAll("*")).filter(a8).map(o8), r = c0.begin("searchPseudoElements");
      HI(), Promise.all(n).then(function() {
        r(), Sh(), e();
      }).catch(function() {
        r(), Sh(), t();
      });
    });
}
var s8 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = K1, t;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(t) {
      var n = t.node, r = n === void 0 ? YA : n;
      rA.searchPseudoElements && K1(r);
    };
  }
}, M1 = !1, l8 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          HI(), M1 = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        T1(Uh("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        $6();
      },
      watch: function(t) {
        var n = t.observeMutationsRoot;
        M1 ? Sh() : T1(Uh("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, N1 = function(e) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(n, r) {
    var o = r.toLowerCase().split("-"), s = o[0], l = o.slice(1).join("-");
    if (s && l === "h")
      return n.flipX = !0, n;
    if (s && l === "v")
      return n.flipY = !0, n;
    if (l = parseFloat(l), isNaN(l))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + l;
        break;
      case "shrink":
        n.size = n.size - l;
        break;
      case "left":
        n.x = n.x - l;
        break;
      case "right":
        n.x = n.x + l;
        break;
      case "up":
        n.y = n.y - l;
        break;
      case "down":
        n.y = n.y + l;
        break;
      case "rotate":
        n.rotate = n.rotate + l;
        break;
    }
    return n;
  }, t);
}, u8 = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return N1(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (t.transform = N1(r)), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(t) {
      var n = t.main, r = t.transform, o = t.containerWidth, s = t.iconWidth, l = {
        transform: "translate(".concat(o / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), f = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), g = "rotate(".concat(r.rotate, " 0 0)"), B = {
        transform: "".concat(c, " ").concat(f, " ").concat(g)
      }, p = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, v = {
        outer: l,
        inner: B,
        path: p
      };
      return {
        tag: "g",
        attributes: AA({}, v.outer),
        children: [{
          tag: "g",
          attributes: AA({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: AA(AA({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, MB = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function P1(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return A.attributes && (A.attributes.fill || e) && (A.attributes.fill = "black"), A;
}
function c8(A) {
  return A.tag === "g" ? A.children : [A];
}
var f8 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-mask"), o = r ? fd(r.split(" ").map(function(s) {
          return s.trim();
        })) : l0();
        return o.prefix || (o.prefix = Zr()), t.mask = o, t.maskId = n.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var n = t.children, r = t.attributes, o = t.main, s = t.mask, l = t.maskId, c = t.transform, f = o.width, g = o.icon, B = s.width, p = s.icon, v = c6({
        transform: c,
        containerWidth: B,
        iconWidth: f
      }), F = {
        tag: "rect",
        attributes: AA(AA({}, MB), {}, {
          fill: "white"
        })
      }, U = g.children ? {
        children: g.children.map(P1)
      } : {}, L = {
        tag: "g",
        attributes: AA({}, v.inner),
        children: [P1(AA({
          tag: g.tag,
          attributes: AA(AA({}, g.attributes), v.path)
        }, U))]
      }, m = {
        tag: "g",
        attributes: AA({}, v.outer),
        children: [L]
      }, w = "mask-".concat(l || rl()), y = "clip-".concat(l || rl()), I = {
        tag: "mask",
        attributes: AA(AA({}, MB), {}, {
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [F, m]
      }, H = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: y
          },
          children: c8(p)
        }, I]
      };
      return n.push(H, {
        tag: "rect",
        attributes: AA({
          fill: "currentColor",
          "clip-path": "url(#".concat(y, ")"),
          mask: "url(#".concat(w, ")")
        }, MB)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, d8 = {
  provides: function(e) {
    var t = !1;
    jr.matchMedia && (t = jr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: AA(AA({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = AA(AA({}, o), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: AA(AA({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || l.children.push({
        tag: "animate",
        attributes: AA(AA({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: AA(AA({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(l), n.push({
        tag: "path",
        attributes: AA(AA({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: AA(AA({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: AA(AA({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: AA(AA({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, g8 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-symbol"), o = r === null ? !1 : r === "" ? !0 : r;
        return t.symbol = o, t;
      }
    };
  }
}, B8 = [g6, A8, e8, t8, n8, s8, l8, u8, f8, d8, g8];
x6(B8, {
  mixoutsTo: Et
});
Et.noAuto;
Et.config;
Et.library;
Et.dom;
var Lh = Et.parse;
Et.findIconDefinition;
Et.toHtml;
var p8 = Et.icon;
Et.layer;
Et.text;
Et.counter;
var LI = { exports: {} }, h8 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", w8 = h8, v8 = w8;
function bI() {
}
function _I() {
}
_I.resetWarningCache = bI;
var m8 = function() {
  function A(n, r, o, s, l, c) {
    if (c !== v8) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw f.name = "Invariant Violation", f;
    }
  }
  A.isRequired = A;
  function e() {
    return A;
  }
  var t = {
    array: A,
    bigint: A,
    bool: A,
    func: A,
    number: A,
    object: A,
    string: A,
    symbol: A,
    any: A,
    arrayOf: e,
    element: A,
    elementType: A,
    instanceOf: e,
    node: A,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: _I,
    resetWarningCache: bI
  };
  return t.PropTypes = t, t;
};
LI.exports = m8();
var C8 = LI.exports;
const QA = /* @__PURE__ */ Ph(C8);
function G1(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(A);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(A, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Cn(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? G1(Object(t), !0).forEach(function(n) {
      Oo(A, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : G1(Object(t)).forEach(function(n) {
      Object.defineProperty(A, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return A;
}
function Uf(A) {
  "@babel/helpers - typeof";
  return Uf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Uf(A);
}
function Oo(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function Q8(A, e) {
  if (A == null) return {};
  var t = {}, n = Object.keys(A), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(e.indexOf(r) >= 0) && (t[r] = A[r]);
  return t;
}
function y8(A, e) {
  if (A == null) return {};
  var t = Q8(A, e), n, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(A);
    for (r = 0; r < o.length; r++)
      n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(A, n) && (t[n] = A[n]);
  }
  return t;
}
function bh(A) {
  return F8(A) || U8(A) || E8(A) || I8();
}
function F8(A) {
  if (Array.isArray(A)) return _h(A);
}
function U8(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function E8(A, e) {
  if (A) {
    if (typeof A == "string") return _h(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _h(A, e);
  }
}
function _h(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = A[t];
  return n;
}
function I8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x8(A) {
  var e, t = A.beat, n = A.fade, r = A.beatFade, o = A.bounce, s = A.shake, l = A.flash, c = A.spin, f = A.spinPulse, g = A.spinReverse, B = A.pulse, p = A.fixedWidth, v = A.inverse, F = A.border, U = A.listItem, L = A.flip, m = A.size, w = A.rotation, y = A.pull, I = (e = {
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": r,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": c,
    "fa-spin-reverse": g,
    "fa-spin-pulse": f,
    "fa-pulse": B,
    "fa-fw": p,
    "fa-inverse": v,
    "fa-border": F,
    "fa-li": U,
    "fa-flip": L === !0,
    "fa-flip-horizontal": L === "horizontal" || L === "both",
    "fa-flip-vertical": L === "vertical" || L === "both"
  }, Oo(e, "fa-".concat(m), typeof m < "u" && m !== null), Oo(e, "fa-rotate-".concat(w), typeof w < "u" && w !== null && w !== 0), Oo(e, "fa-pull-".concat(y), typeof y < "u" && y !== null), Oo(e, "fa-swap-opacity", A.swapOpacity), e);
  return Object.keys(I).map(function(H) {
    return I[H] ? H : null;
  }).filter(function(H) {
    return H;
  });
}
function H8(A) {
  return A = A - 0, A === A;
}
function TI(A) {
  return H8(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  }), A.substr(0, 1).toLowerCase() + A.substr(1));
}
var S8 = ["style"];
function L8(A) {
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function b8(A) {
  return A.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, t) {
    var n = t.indexOf(":"), r = TI(t.slice(0, n)), o = t.slice(n + 1).trim();
    return r.startsWith("webkit") ? e[L8(r)] = o : e[r] = o, e;
  }, {});
}
function OI(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(c) {
    return OI(A, c);
  }), r = Object.keys(e.attributes || {}).reduce(function(c, f) {
    var g = e.attributes[f];
    switch (f) {
      case "class":
        c.attrs.className = g, delete e.attributes.class;
        break;
      case "style":
        c.attrs.style = b8(g);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? c.attrs[f.toLowerCase()] = g : c.attrs[TI(f)] = g;
    }
    return c;
  }, {
    attrs: {}
  }), o = t.style, s = o === void 0 ? {} : o, l = y8(t, S8);
  return r.attrs.style = Cn(Cn({}, r.attrs.style), s), A.apply(void 0, [e.tag, Cn(Cn({}, r.attrs), l)].concat(bh(n)));
}
var DI = !1;
try {
  DI = !0;
} catch {
}
function _8() {
  if (!DI && console && typeof console.error == "function") {
    var A;
    (A = console).error.apply(A, arguments);
  }
}
function V1(A) {
  if (A && Uf(A) === "object" && A.prefix && A.iconName && A.icon)
    return A;
  if (Lh.icon)
    return Lh.icon(A);
  if (A === null)
    return null;
  if (A && Uf(A) === "object" && A.prefix && A.iconName)
    return A;
  if (Array.isArray(A) && A.length === 2)
    return {
      prefix: A[0],
      iconName: A[1]
    };
  if (typeof A == "string")
    return {
      prefix: "fas",
      iconName: A
    };
}
function NB(A, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Oo({}, A, e) : {};
}
var $1 = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, d0 = /* @__PURE__ */ oA.forwardRef(function(A, e) {
  var t = Cn(Cn({}, $1), A), n = t.icon, r = t.mask, o = t.symbol, s = t.className, l = t.title, c = t.titleId, f = t.maskId, g = V1(n), B = NB("classes", [].concat(bh(x8(t)), bh((s || "").split(" ")))), p = NB("transform", typeof t.transform == "string" ? Lh.transform(t.transform) : t.transform), v = NB("mask", V1(r)), F = p8(g, Cn(Cn(Cn(Cn({}, B), p), v), {}, {
    symbol: o,
    title: l,
    titleId: c,
    maskId: f
  }));
  if (!F)
    return _8("Could not find icon", g), null;
  var U = F.abstract, L = {
    ref: e
  };
  return Object.keys(t).forEach(function(m) {
    $1.hasOwnProperty(m) || (L[m] = t[m]);
  }), T8(U[0], L);
});
d0.displayName = "FontAwesomeIcon";
d0.propTypes = {
  beat: QA.bool,
  border: QA.bool,
  beatFade: QA.bool,
  bounce: QA.bool,
  className: QA.string,
  fade: QA.bool,
  flash: QA.bool,
  mask: QA.oneOfType([QA.object, QA.array, QA.string]),
  maskId: QA.string,
  fixedWidth: QA.bool,
  inverse: QA.bool,
  flip: QA.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: QA.oneOfType([QA.object, QA.array, QA.string]),
  listItem: QA.bool,
  pull: QA.oneOf(["right", "left"]),
  pulse: QA.bool,
  rotation: QA.oneOf([0, 90, 180, 270]),
  shake: QA.bool,
  size: QA.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: QA.bool,
  spinPulse: QA.bool,
  spinReverse: QA.bool,
  symbol: QA.oneOfType([QA.bool, QA.string]),
  title: QA.string,
  titleId: QA.string,
  transform: QA.oneOfType([QA.string, QA.object]),
  swapOpacity: QA.bool
};
var T8 = OI.bind(null, oA.createElement), O8 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, D8 = O8, it = function() {
  return it = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, it.apply(this, arguments);
};
function il(A, e, t) {
  if (t || arguments.length === 2) for (var n = 0, r = e.length, o; n < r; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return A.concat(o || Array.prototype.slice.call(e));
}
var WA = "-ms-", Ss = "-moz-", _A = "-webkit-", kI = "comm", gd = "rule", g0 = "decl", k8 = "@import", RI = "@keyframes", R8 = "@layer", KI = Math.abs, B0 = String.fromCharCode, Th = Object.assign;
function K8(A, e) {
  return Fe(A, 0) ^ 45 ? (((e << 2 ^ Fe(A, 0)) << 2 ^ Fe(A, 1)) << 2 ^ Fe(A, 2)) << 2 ^ Fe(A, 3) : 0;
}
function MI(A) {
  return A.trim();
}
function $n(A, e) {
  return (A = e.exec(A)) ? A[0] : A;
}
function wA(A, e, t) {
  return A.replace(e, t);
}
function Hc(A, e, t) {
  return A.indexOf(e, t);
}
function Fe(A, e) {
  return A.charCodeAt(e) | 0;
}
function ra(A, e, t) {
  return A.slice(e, t);
}
function Qn(A) {
  return A.length;
}
function NI(A) {
  return A.length;
}
function cs(A, e) {
  return e.push(A), A;
}
function M8(A, e) {
  return A.map(e).join("");
}
function W1(A, e) {
  return A.filter(function(t) {
    return !$n(t, e);
  });
}
var Bd = 1, ia = 1, PI = 0, $t = 0, de = 0, pa = "";
function pd(A, e, t, n, r, o, s, l) {
  return { value: A, root: e, parent: t, type: n, props: r, children: o, line: Bd, column: ia, length: s, return: "", siblings: l };
}
function Qr(A, e) {
  return Th(pd("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function ho(A) {
  for (; A.root; )
    A = Qr(A.root, { children: [A] });
  cs(A, A.siblings);
}
function N8() {
  return de;
}
function P8() {
  return de = $t > 0 ? Fe(pa, --$t) : 0, ia--, de === 10 && (ia = 1, Bd--), de;
}
function cn() {
  return de = $t < PI ? Fe(pa, $t++) : 0, ia++, de === 10 && (ia = 1, Bd++), de;
}
function _i() {
  return Fe(pa, $t);
}
function Sc() {
  return $t;
}
function hd(A, e) {
  return ra(pa, A, e);
}
function Oh(A) {
  switch (A) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function G8(A) {
  return Bd = ia = 1, PI = Qn(pa = A), $t = 0, [];
}
function V8(A) {
  return pa = "", A;
}
function PB(A) {
  return MI(hd($t - 1, Dh(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function $8(A) {
  for (; (de = _i()) && de < 33; )
    cn();
  return Oh(A) > 2 || Oh(de) > 3 ? "" : " ";
}
function W8(A, e) {
  for (; --e && cn() && !(de < 48 || de > 102 || de > 57 && de < 65 || de > 70 && de < 97); )
    ;
  return hd(A, Sc() + (e < 6 && _i() == 32 && cn() == 32));
}
function Dh(A) {
  for (; cn(); )
    switch (de) {
      case A:
        return $t;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Dh(de);
        break;
      case 40:
        A === 41 && Dh(A);
        break;
      case 92:
        cn();
        break;
    }
  return $t;
}
function X8(A, e) {
  for (; cn() && A + de !== 57; )
    if (A + de === 84 && _i() === 47)
      break;
  return "/*" + hd(e, $t - 1) + "*" + B0(A === 47 ? A : cn());
}
function z8(A) {
  for (; !Oh(_i()); )
    cn();
  return hd(A, $t);
}
function Y8(A) {
  return V8(Lc("", null, null, null, [""], A = G8(A), 0, [0], A));
}
function Lc(A, e, t, n, r, o, s, l, c) {
  for (var f = 0, g = 0, B = s, p = 0, v = 0, F = 0, U = 1, L = 1, m = 1, w = 0, y = "", I = r, H = o, S = n, O = y; L; )
    switch (F = w, w = cn()) {
      case 40:
        if (F != 108 && Fe(O, B - 1) == 58) {
          Hc(O += wA(PB(w), "&", "&\f"), "&\f", KI(f ? l[f - 1] : 0)) != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += PB(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += $8(F);
        break;
      case 92:
        O += W8(Sc() - 1, 7);
        continue;
      case 47:
        switch (_i()) {
          case 42:
          case 47:
            cs(J8(X8(cn(), Sc()), e, t, c), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * U:
        l[f++] = Qn(O) * m;
      case 125 * U:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            L = 0;
          case 59 + g:
            m == -1 && (O = wA(O, /\f/g, "")), v > 0 && Qn(O) - B && cs(v > 32 ? z1(O + ";", n, t, B - 1, c) : z1(wA(O, " ", "") + ";", n, t, B - 2, c), c);
            break;
          case 59:
            O += ";";
          default:
            if (cs(S = X1(O, e, t, f, g, r, l, y, I = [], H = [], B, o), o), w === 123)
              if (g === 0)
                Lc(O, e, S, S, I, o, B, l, H);
              else
                switch (p === 99 && Fe(O, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lc(A, S, S, n && cs(X1(A, S, S, 0, 0, r, l, y, r, I = [], B, H), H), r, H, B, l, n ? I : H);
                    break;
                  default:
                    Lc(O, S, S, S, [""], H, 0, l, H);
                }
        }
        f = g = v = 0, U = m = 1, y = O = "", B = s;
        break;
      case 58:
        B = 1 + Qn(O), v = F;
      default:
        if (U < 1) {
          if (w == 123)
            --U;
          else if (w == 125 && U++ == 0 && P8() == 125)
            continue;
        }
        switch (O += B0(w), w * U) {
          case 38:
            m = g > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[f++] = (Qn(O) - 1) * m, m = 1;
            break;
          case 64:
            _i() === 45 && (O += PB(cn())), p = _i(), g = B = Qn(y = O += z8(Sc())), w++;
            break;
          case 45:
            F === 45 && Qn(O) == 2 && (U = 0);
        }
    }
  return o;
}
function X1(A, e, t, n, r, o, s, l, c, f, g, B) {
  for (var p = r - 1, v = r === 0 ? o : [""], F = NI(v), U = 0, L = 0, m = 0; U < n; ++U)
    for (var w = 0, y = ra(A, p + 1, p = KI(L = s[U])), I = A; w < F; ++w)
      (I = MI(L > 0 ? v[w] + " " + y : wA(y, /&\f/g, v[w]))) && (c[m++] = I);
  return pd(A, e, t, r === 0 ? gd : l, c, f, g, B);
}
function J8(A, e, t, n) {
  return pd(A, e, t, kI, B0(N8()), ra(A, 2, -2), 0, n);
}
function z1(A, e, t, n, r) {
  return pd(A, e, t, g0, ra(A, 0, n), ra(A, n + 1, -1), n, r);
}
function GI(A, e, t) {
  switch (K8(A, e)) {
    case 5103:
      return _A + "print-" + A + A;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _A + A + A;
    case 4789:
      return Ss + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _A + A + Ss + A + WA + A + A;
    case 5936:
      switch (Fe(A, e + 11)) {
        case 114:
          return _A + A + WA + wA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
        case 108:
          return _A + A + WA + wA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
        case 45:
          return _A + A + WA + wA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
      }
    case 6828:
    case 4268:
    case 2903:
      return _A + A + WA + A + A;
    case 6165:
      return _A + A + WA + "flex-" + A + A;
    case 5187:
      return _A + A + wA(A, /(\w+).+(:[^]+)/, _A + "box-$1$2" + WA + "flex-$1$2") + A;
    case 5443:
      return _A + A + WA + "flex-item-" + wA(A, /flex-|-self/g, "") + ($n(A, /flex-|baseline/) ? "" : WA + "grid-row-" + wA(A, /flex-|-self/g, "")) + A;
    case 4675:
      return _A + A + WA + "flex-line-pack" + wA(A, /align-content|flex-|-self/g, "") + A;
    case 5548:
      return _A + A + WA + wA(A, "shrink", "negative") + A;
    case 5292:
      return _A + A + WA + wA(A, "basis", "preferred-size") + A;
    case 6060:
      return _A + "box-" + wA(A, "-grow", "") + _A + A + WA + wA(A, "grow", "positive") + A;
    case 4554:
      return _A + wA(A, /([^-])(transform)/g, "$1" + _A + "$2") + A;
    case 6187:
      return wA(wA(wA(A, /(zoom-|grab)/, _A + "$1"), /(image-set)/, _A + "$1"), A, "") + A;
    case 5495:
    case 3959:
      return wA(A, /(image-set\([^]*)/, _A + "$1$`$1");
    case 4968:
      return wA(wA(A, /(.+:)(flex-)?(.*)/, _A + "box-pack:$3" + WA + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _A + A + A;
    case 4200:
      if (!$n(A, /flex-|baseline/)) return WA + "grid-column-align" + ra(A, e) + A;
      break;
    case 2592:
    case 3360:
      return WA + wA(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(n, r) {
        return e = r, $n(n.props, /grid-\w+-end/);
      }) ? ~Hc(A + (t = t[e].value), "span", 0) ? A : WA + wA(A, "-start", "") + A + WA + "grid-row-span:" + (~Hc(t, "span", 0) ? $n(t, /\d+/) : +$n(t, /\d+/) - +$n(A, /\d+/)) + ";" : WA + wA(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return $n(n.props, /grid-\w+-start/);
      }) ? A : WA + wA(wA(A, "-end", "-span"), "span ", "") + A;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return wA(A, /(.+)-inline(.+)/, _A + "$1$2") + A;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qn(A) - 1 - e > 6)
        switch (Fe(A, e + 1)) {
          case 109:
            if (Fe(A, e + 4) !== 45)
              break;
          case 102:
            return wA(A, /(.+:)(.+)-([^]+)/, "$1" + _A + "$2-$3$1" + Ss + (Fe(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~Hc(A, "stretch", 0) ? GI(wA(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return wA(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, r, o, s, l, c, f) {
        return WA + r + ":" + o + f + (s ? WA + r + "-span:" + (l ? c : +c - +o) + f : "") + A;
      });
    case 4949:
      if (Fe(A, e + 6) === 121)
        return wA(A, ":", ":" + _A) + A;
      break;
    case 6444:
      switch (Fe(A, Fe(A, 14) === 45 ? 18 : 11)) {
        case 120:
          return wA(A, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + _A + (Fe(A, 14) === 45 ? "inline-" : "") + "box$3$1" + _A + "$2$3$1" + WA + "$2box$3") + A;
        case 100:
          return wA(A, ":", ":" + WA) + A;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return wA(A, "scroll-", "scroll-snap-") + A;
  }
  return A;
}
function Ef(A, e) {
  for (var t = "", n = 0; n < A.length; n++)
    t += e(A[n], n, A, e) || "";
  return t;
}
function j8(A, e, t, n) {
  switch (A.type) {
    case R8:
      if (A.children.length) break;
    case k8:
    case g0:
      return A.return = A.return || A.value;
    case kI:
      return "";
    case RI:
      return A.return = A.value + "{" + Ef(A.children, n) + "}";
    case gd:
      if (!Qn(A.value = A.props.join(","))) return "";
  }
  return Qn(t = Ef(A.children, n)) ? A.return = A.value + "{" + t + "}" : "";
}
function Z8(A) {
  var e = NI(A);
  return function(t, n, r, o) {
    for (var s = "", l = 0; l < e; l++)
      s += A[l](t, n, r, o) || "";
    return s;
  };
}
function q8(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function AG(A, e, t, n) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case g0:
        A.return = GI(A.value, A.length, t);
        return;
      case RI:
        return Ef([Qr(A, { value: wA(A.value, "@", "@" + _A) })], n);
      case gd:
        if (A.length)
          return M8(t = A.props, function(r) {
            switch ($n(r, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ho(Qr(A, { props: [wA(r, /:(read-\w+)/, ":" + Ss + "$1")] })), ho(Qr(A, { props: [r] })), Th(A, { props: W1(t, n) });
                break;
              case "::placeholder":
                ho(Qr(A, { props: [wA(r, /:(plac\w+)/, ":" + _A + "input-$1")] })), ho(Qr(A, { props: [wA(r, /:(plac\w+)/, ":" + Ss + "$1")] })), ho(Qr(A, { props: [wA(r, /:(plac\w+)/, WA + "input-$1")] })), ho(Qr(A, { props: [r] })), Th(A, { props: W1(t, n) });
                break;
            }
            return "";
          });
    }
}
var eG = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, oa = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", VI = "active", $I = "data-styled-version", wd = "6.1.11", p0 = `/*!sc*/
`, h0 = typeof window < "u" && "HTMLElement" in window, tG = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), vd = Object.freeze([]), aa = Object.freeze({});
function nG(A, e, t) {
  return t === void 0 && (t = aa), A.theme !== t.theme && A.theme || e || t.theme;
}
var WI = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rG = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, iG = /(^-|-$)/g;
function Y1(A) {
  return A.replace(rG, "-").replace(iG, "");
}
var oG = /(a)(d)/gi, sc = 52, J1 = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function kh(A) {
  var e, t = "";
  for (e = Math.abs(A); e > sc; e = e / sc | 0) t = J1(e % sc) + t;
  return (J1(e % sc) + t).replace(oG, "$1-$2");
}
var GB, XI = 5381, Do = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, zI = function(A) {
  return Do(XI, A);
};
function YI(A) {
  return kh(zI(A) >>> 0);
}
function aG(A) {
  return A.displayName || A.name || "Component";
}
function VB(A) {
  return typeof A == "string" && !0;
}
var JI = typeof Symbol == "function" && Symbol.for, jI = JI ? Symbol.for("react.memo") : 60115, sG = JI ? Symbol.for("react.forward_ref") : 60112, lG = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, uG = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ZI = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, cG = ((GB = {})[sG] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, GB[jI] = ZI, GB);
function j1(A) {
  return ("type" in (e = A) && e.type.$$typeof) === jI ? ZI : "$$typeof" in A ? cG[A.$$typeof] : lG;
  var e;
}
var fG = Object.defineProperty, dG = Object.getOwnPropertyNames, Z1 = Object.getOwnPropertySymbols, gG = Object.getOwnPropertyDescriptor, BG = Object.getPrototypeOf, q1 = Object.prototype;
function qI(A, e, t) {
  if (typeof e != "string") {
    if (q1) {
      var n = BG(e);
      n && n !== q1 && qI(A, n, t);
    }
    var r = dG(e);
    Z1 && (r = r.concat(Z1(e)));
    for (var o = j1(A), s = j1(e), l = 0; l < r.length; ++l) {
      var c = r[l];
      if (!(c in uG || t && t[c] || s && c in s || o && c in o)) {
        var f = gG(e, c);
        try {
          fG(A, c, f);
        } catch {
        }
      }
    }
  }
  return A;
}
function sa(A) {
  return typeof A == "function";
}
function w0(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function Ii(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function Rh(A, e) {
  if (A.length === 0) return "";
  for (var t = A[0], n = 1; n < A.length; n++) t += A[n];
  return t;
}
function ol(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function Kh(A, e, t) {
  if (t === void 0 && (t = !1), !t && !ol(A) && !Array.isArray(A)) return e;
  if (Array.isArray(e)) for (var n = 0; n < e.length; n++) A[n] = Kh(A[n], e[n]);
  else if (ol(e)) for (var n in e) A[n] = Kh(A[n], e[n]);
  return A;
}
function v0(A, e) {
  Object.defineProperty(A, "toString", { value: e });
}
function Ql(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var pG = function() {
  function A(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return A.prototype.indexOfGroup = function(e) {
    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e >= o; ) if ((o <<= 1) < 0) throw Ql(16, "".concat(e));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var s = r; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(e + 1), c = (s = 0, t.length); s < c; s++) this.tag.insertRule(l, t[s]) && (this.groupSizes[e]++, l++);
  }, A.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
      this.groupSizes[e] = 0;
      for (var o = n; o < r; o++) this.tag.deleteRule(n);
    }
  }, A.prototype.getGroup = function(e) {
    var t = "";
    if (e >= this.length || this.groupSizes[e] === 0) return t;
    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += "".concat(this.tag.getRule(s)).concat(p0);
    return t;
  }, A;
}(), bc = /* @__PURE__ */ new Map(), If = /* @__PURE__ */ new Map(), _c = 1, lc = function(A) {
  if (bc.has(A)) return bc.get(A);
  for (; If.has(_c); ) _c++;
  var e = _c++;
  return bc.set(A, e), If.set(e, A), e;
}, hG = function(A, e) {
  _c = e + 1, bc.set(A, e), If.set(e, A);
}, wG = "style[".concat(oa, "][").concat($I, '="').concat(wd, '"]'), vG = new RegExp("^".concat(oa, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), mG = function(A, e, t) {
  for (var n, r = t.split(","), o = 0, s = r.length; o < s; o++) (n = r[o]) && A.registerName(e, n);
}, CG = function(A, e) {
  for (var t, n = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(p0), r = [], o = 0, s = n.length; o < s; o++) {
    var l = n[o].trim();
    if (l) {
      var c = l.match(vG);
      if (c) {
        var f = 0 | parseInt(c[1], 10), g = c[2];
        f !== 0 && (hG(g, f), mG(A, g, c[3]), A.getTag().insertRules(f, r)), r.length = 0;
      } else r.push(l);
    }
  }
};
function QG() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ax = function(A) {
  var e = document.head, t = A || e, n = document.createElement("style"), r = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(oa, "]")));
    return c[c.length - 1];
  }(t), o = r !== void 0 ? r.nextSibling : null;
  n.setAttribute(oa, VI), n.setAttribute($I, wd);
  var s = QG();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, o), n;
}, yG = function() {
  function A(e) {
    this.element = Ax(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var n = document.styleSheets, r = 0, o = n.length; r < o; r++) {
        var s = n[r];
        if (s.ownerNode === t) return s;
      }
      throw Ql(17);
    }(this.element), this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    try {
      return this.sheet.insertRule(t, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, A.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, A.prototype.getRule = function(e) {
    var t = this.sheet.cssRules[e];
    return t && t.cssText ? t.cssText : "";
  }, A;
}(), FG = function() {
  function A(e) {
    this.element = Ax(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, A.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, A.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, A;
}(), UG = function() {
  function A(e) {
    this.rules = [], this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
  }, A.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, A.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, A;
}(), Ay = h0, EG = { isServer: !h0, useCSSOMInjection: !tG }, ex = function() {
  function A(e, t, n) {
    e === void 0 && (e = aa), t === void 0 && (t = {});
    var r = this;
    this.options = it(it({}, EG), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && h0 && Ay && (Ay = !1, function(o) {
      for (var s = document.querySelectorAll(wG), l = 0, c = s.length; l < c; l++) {
        var f = s[l];
        f && f.getAttribute(oa) !== VI && (CG(o, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this)), v0(this, function() {
      return function(o) {
        for (var s = o.getTag(), l = s.length, c = "", f = function(B) {
          var p = function(m) {
            return If.get(m);
          }(B);
          if (p === void 0) return "continue";
          var v = o.names.get(p), F = s.getGroup(B);
          if (v === void 0 || F.length === 0) return "continue";
          var U = "".concat(oa, ".g").concat(B, '[id="').concat(p, '"]'), L = "";
          v !== void 0 && v.forEach(function(m) {
            m.length > 0 && (L += "".concat(m, ","));
          }), c += "".concat(F).concat(U, '{content:"').concat(L, '"}').concat(p0);
        }, g = 0; g < l; g++) f(g);
        return c;
      }(r);
    });
  }
  return A.registerId = function(e) {
    return lc(e);
  }, A.prototype.reconstructWithOptions = function(e, t) {
    return t === void 0 && (t = !0), new A(it(it({}, this.options), e), this.gs, t && this.names || void 0);
  }, A.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, A.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(t) {
      var n = t.useCSSOMInjection, r = t.target;
      return t.isServer ? new UG(r) : n ? new yG(r) : new FG(r);
    }(this.options), new pG(e)));
    var e;
  }, A.prototype.hasNameForId = function(e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, A.prototype.registerName = function(e, t) {
    if (lc(e), this.names.has(e)) this.names.get(e).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(e, n);
    }
  }, A.prototype.insertRules = function(e, t, n) {
    this.registerName(e, t), this.getTag().insertRules(lc(e), n);
  }, A.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, A.prototype.clearRules = function(e) {
    this.getTag().clearGroup(lc(e)), this.clearNames(e);
  }, A.prototype.clearTag = function() {
    this.tag = void 0;
  }, A;
}(), IG = /&/g, xG = /^\s*\/\/.*$/gm;
function tx(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(n) {
      return "".concat(e, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = tx(t.children, e)), t;
  });
}
function HG(A) {
  var e, t, n, r = aa, o = r.options, s = o === void 0 ? aa : o, l = r.plugins, c = l === void 0 ? vd : l, f = function(p, v, F) {
    return F.startsWith(t) && F.endsWith(t) && F.replaceAll(t, "").length > 0 ? ".".concat(e) : p;
  }, g = c.slice();
  g.push(function(p) {
    p.type === gd && p.value.includes("&") && (p.props[0] = p.props[0].replace(IG, t).replace(n, f));
  }), s.prefix && g.push(AG), g.push(j8);
  var B = function(p, v, F, U) {
    v === void 0 && (v = ""), F === void 0 && (F = ""), U === void 0 && (U = "&"), e = U, t = v, n = new RegExp("\\".concat(t, "\\b"), "g");
    var L = p.replace(xG, ""), m = Y8(F || v ? "".concat(F, " ").concat(v, " { ").concat(L, " }") : L);
    s.namespace && (m = tx(m, s.namespace));
    var w = [];
    return Ef(m, Z8(g.concat(q8(function(y) {
      return w.push(y);
    })))), w;
  };
  return B.hash = c.length ? c.reduce(function(p, v) {
    return v.name || Ql(15), Do(p, v.name);
  }, XI).toString() : "", B;
}
var SG = new ex(), Mh = HG(), nx = oA.createContext({ shouldForwardProp: void 0, styleSheet: SG, stylis: Mh });
nx.Consumer;
oA.createContext(void 0);
function ey() {
  return b.useContext(nx);
}
var rx = function() {
  function A(e, t) {
    var n = this;
    this.inject = function(r, o) {
      o === void 0 && (o = Mh);
      var s = n.name + o.hash;
      r.hasNameForId(n.id, s) || r.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, v0(this, function() {
      throw Ql(12, String(n.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = Mh), this.name + e.hash;
  }, A;
}(), LG = function(A) {
  return A >= "A" && A <= "Z";
};
function ty(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var n = A[t];
    if (t === 1 && n === "-" && A[0] === "-") return A;
    LG(n) ? e += "-" + n.toLowerCase() : e += n;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var ix = function(A) {
  return A == null || A === !1 || A === "";
}, ox = function(A) {
  var e, t, n = [];
  for (var r in A) {
    var o = A[r];
    A.hasOwnProperty(r) && !ix(o) && (Array.isArray(o) && o.isCss || sa(o) ? n.push("".concat(ty(r), ":"), o, ";") : ol(o) ? n.push.apply(n, il(il(["".concat(r, " {")], ox(o), !1), ["}"], !1)) : n.push("".concat(ty(r), ": ").concat((e = r, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in eG || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Ti(A, e, t, n) {
  if (ix(A)) return [];
  if (w0(A)) return [".".concat(A.styledComponentId)];
  if (sa(A)) {
    if (!sa(o = A) || o.prototype && o.prototype.isReactComponent || !e) return [A];
    var r = A(e);
    return Ti(r, e, t, n);
  }
  var o;
  return A instanceof rx ? t ? (A.inject(t, n), [A.getName(n)]) : [A] : ol(A) ? ox(A) : Array.isArray(A) ? Array.prototype.concat.apply(vd, A.map(function(s) {
    return Ti(s, e, t, n);
  })) : [A.toString()];
}
function bG(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (sa(t) && !w0(t)) return !1;
  }
  return !0;
}
var _G = zI(wd), TG = function() {
  function A(e, t, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && bG(e), this.componentId = t, this.baseHash = Do(_G, t), this.baseStyle = n, ex.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, n) {
    var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = Ii(r, this.staticRulesId);
    else {
      var o = Rh(Ti(this.rules, e, t, n)), s = kh(Do(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var l = n(o, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, l);
      }
      r = Ii(r, s), this.staticRulesId = s;
    }
    else {
      for (var c = Do(this.baseHash, n.hash), f = "", g = 0; g < this.rules.length; g++) {
        var B = this.rules[g];
        if (typeof B == "string") f += B;
        else if (B) {
          var p = Rh(Ti(B, e, t, n));
          c = Do(c, p + g), f += p;
        }
      }
      if (f) {
        var v = kh(c >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, n(f, ".".concat(v), void 0, this.componentId)), r = Ii(r, v);
      }
    }
    return r;
  }, A;
}(), ax = oA.createContext(void 0);
ax.Consumer;
var $B = {};
function OG(A, e, t) {
  var n = w0(A), r = A, o = !VB(A), s = e.attrs, l = s === void 0 ? vd : s, c = e.componentId, f = c === void 0 ? function(I, H) {
    var S = typeof I != "string" ? "sc" : Y1(I);
    $B[S] = ($B[S] || 0) + 1;
    var O = "".concat(S, "-").concat(YI(wd + S + $B[S]));
    return H ? "".concat(H, "-").concat(O) : O;
  }(e.displayName, e.parentComponentId) : c, g = e.displayName, B = g === void 0 ? function(I) {
    return VB(I) ? "styled.".concat(I) : "Styled(".concat(aG(I), ")");
  }(A) : g, p = e.displayName && e.componentId ? "".concat(Y1(e.displayName), "-").concat(e.componentId) : e.componentId || f, v = n && r.attrs ? r.attrs.concat(l).filter(Boolean) : l, F = e.shouldForwardProp;
  if (n && r.shouldForwardProp) {
    var U = r.shouldForwardProp;
    if (e.shouldForwardProp) {
      var L = e.shouldForwardProp;
      F = function(I, H) {
        return U(I, H) && L(I, H);
      };
    } else F = U;
  }
  var m = new TG(t, p, n ? r.componentStyle : void 0);
  function w(I, H) {
    return function(S, O, k) {
      var N = S.attrs, W = S.componentStyle, sA = S.defaultProps, iA = S.foldedComponentIds, tA = S.styledComponentId, lA = S.target, mA = oA.useContext(ax), fA = ey(), J = S.shouldForwardProp || fA.shouldForwardProp, P = nG(O, mA, sA) || aa, V = function(LA, HA, Ee) {
        for (var Xt, ut = it(it({}, HA), { className: void 0, theme: Ee }), ha = 0; ha < LA.length; ha += 1) {
          var Ln = sa(Xt = LA[ha]) ? Xt(ut) : Xt;
          for (var ct in Ln) ut[ct] = ct === "className" ? Ii(ut[ct], Ln[ct]) : ct === "style" ? it(it({}, ut[ct]), Ln[ct]) : Ln[ct];
        }
        return HA.className && (ut.className = Ii(ut.className, HA.className)), ut;
      }(N, O, P), X = V.as || lA, j = {};
      for (var BA in V) V[BA] === void 0 || BA[0] === "$" || BA === "as" || BA === "theme" && V.theme === P || (BA === "forwardedAs" ? j.as = V.forwardedAs : J && !J(BA, X) || (j[BA] = V[BA]));
      var OA = function(LA, HA) {
        var Ee = ey(), Xt = LA.generateAndInjectStyles(HA, Ee.styleSheet, Ee.stylis);
        return Xt;
      }(W, V), GA = Ii(iA, tA);
      return OA && (GA += " " + OA), V.className && (GA += " " + V.className), j[VB(X) && !WI.has(X) ? "class" : "className"] = GA, j.ref = k, b.createElement(X, j);
    }(y, I, H);
  }
  w.displayName = B;
  var y = oA.forwardRef(w);
  return y.attrs = v, y.componentStyle = m, y.displayName = B, y.shouldForwardProp = F, y.foldedComponentIds = n ? Ii(r.foldedComponentIds, r.styledComponentId) : "", y.styledComponentId = p, y.target = n ? r.target : A, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(I) {
    this._foldedDefaultProps = n ? function(H) {
      for (var S = [], O = 1; O < arguments.length; O++) S[O - 1] = arguments[O];
      for (var k = 0, N = S; k < N.length; k++) Kh(H, N[k], !0);
      return H;
    }({}, r.defaultProps, I) : I;
  } }), v0(y, function() {
    return ".".concat(y.styledComponentId);
  }), o && qI(y, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function ny(A, e) {
  for (var t = [A[0]], n = 0, r = e.length; n < r; n += 1) t.push(e[n], A[n + 1]);
  return t;
}
var ry = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function sx(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  if (sa(A) || ol(A)) return ry(Ti(ny(vd, il([A], e, !0))));
  var n = A;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? Ti(n) : ry(Ti(ny(n, e)));
}
function Nh(A, e, t) {
  if (t === void 0 && (t = aa), !e) throw Ql(1, e);
  var n = function(r) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return A(e, t, sx.apply(void 0, il([r], o, !1)));
  };
  return n.attrs = function(r) {
    return Nh(A, e, it(it({}, t), { attrs: Array.prototype.concat(t.attrs, r).filter(Boolean) }));
  }, n.withConfig = function(r) {
    return Nh(A, e, it(it({}, t), r));
  }, n;
}
var lx = function(A) {
  return Nh(OG, A);
}, Wi = lx;
WI.forEach(function(A) {
  Wi[A] = lx(A);
});
function m0(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var n = Rh(sx.apply(void 0, il([A], e, !1))), r = YI(n);
  return new rx(r, n);
}
const DG = "#4fa94d", kG = {
  "aria-busy": !0,
  role: "progressbar"
}, RG = Wi.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, KG = "http://www.w3.org/2000/svg", tn = 242.776657104492, MG = 1.6, NG = m0`
12.5% {
  stroke-dasharray: ${tn * 0.14}px, ${tn}px;
  stroke-dashoffset: -${tn * 0.11}px;
}
43.75% {
  stroke-dasharray: ${tn * 0.35}px, ${tn}px;
  stroke-dashoffset: -${tn * 0.35}px;
}
100% {
  stroke-dasharray: ${tn * 0.01}px, ${tn}px;
  stroke-dashoffset: -${tn * 0.99}px;
}
`;
Wi.path`
  stroke-dasharray: ${tn * 0.01}px, ${tn};
  stroke-dashoffset: 0;
  animation: ${NG} ${MG}s linear infinite;
`;
const PG = m0`
to {
   transform: rotate(360deg);
 }
`;
Wi.svg`
  animation: ${PG} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
Wi.polyline`
  stroke-width: ${(A) => A.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const GG = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: n = 1, color: r = DG, ariaLabel: o = "tail-spin-loading", wrapperStyle: s, wrapperClass: l, visible: c = !0 }) => {
  const f = parseInt(String(t)), g = f + 36, B = f / 2, p = B + parseInt(String(n)) - 1;
  return /* @__PURE__ */ IA.jsx(RG, {
    style: s,
    $visible: c,
    className: l,
    "data-testid": "tail-spin-loading",
    "aria-label": o,
    ...kG,
    children: /* @__PURE__ */ IA.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${g} ${g}`,
      xmlns: KG,
      "data-testid": "tail-spin-svg",
      children: [
        /* @__PURE__ */ IA.jsx("defs", {
          children: /* @__PURE__ */ IA.jsxs("linearGradient", {
            x1: "8.042%",
            y1: "0%",
            x2: "65.682%",
            y2: "23.865%",
            id: "a",
            children: [
              /* @__PURE__ */ IA.jsx("stop", {
                stopColor: r,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ IA.jsx("stop", {
                stopColor: r,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ IA.jsx("stop", {
                stopColor: r,
                offset: "100%"
              })
            ]
          })
        }),
        /* @__PURE__ */ IA.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ IA.jsxs("g", {
            transform: `translate(${B} ${B})`,
            children: [
              /* @__PURE__ */ IA.jsx("path", {
                d: "M36 18c0-9.94-8.06-18-18-18",
                id: "Oval-2",
                stroke: r,
                strokeWidth: t,
                children: /* @__PURE__ */ IA.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              }),
              /* @__PURE__ */ IA.jsx("circle", {
                fill: "#fff",
                cx: "36",
                cy: "18",
                r: p,
                children: /* @__PURE__ */ IA.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              })
            ]
          })
        })
      ]
    })
  });
}, VG = m0`
to {
   stroke-dashoffset: 136;
 }
`;
Wi.polygon`
  stroke-dasharray: 17;
  animation: ${VG} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Wi.svg`
  transform-origin: 50% 65%;
`;
function $G({
  open: A,
  query: e,
  isApiCallInProgress: t,
  setQuery: n,
  setOpen: r,
  handleSubmit: o
}) {
  const s = (f) => {
    n(f.target.value);
  }, l = (f) => {
    f.preventDefault(), o(e);
  }, c = () => {
    r(!1), n("");
  };
  return /* @__PURE__ */ IA.jsx(tI, { show: A, appear: !0, children: /* @__PURE__ */ IA.jsx(k5, { className: po.dialog, onClose: c, children: /* @__PURE__ */ IA.jsxs("form", { onSubmit: l, children: [
    /* @__PURE__ */ IA.jsx(
      qs,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ IA.jsx("div", { className: po.overlay })
      }
    ),
    /* @__PURE__ */ IA.jsx("div", { className: po.container, children: /* @__PURE__ */ IA.jsx(
      qs,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ IA.jsx(nI, { className: po.dialogPanel, children: /* @__PURE__ */ IA.jsxs("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ IA.jsx(
            d0,
            {
              icon: D8,
              className: po.searchIcon,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ IA.jsx(
            "input",
            {
              "data-autofocus": !0,
              type: "text",
              autoFocus: !0,
              className: po.inputField,
              placeholder: "Enter how I can help you",
              onChange: s,
              value: e
            }
          ),
          t && /* @__PURE__ */ IA.jsx(
            GG,
            {
              visible: !0,
              height: "20",
              width: "20",
              color: "black",
              ariaLabel: "tail-spin-loading",
              radius: "1",
              wrapperStyle: {
                position: "absolute",
                right: "10px",
                top: "14px"
              },
              wrapperClass: ""
            }
          )
        ] }) })
      }
    ) })
  ] }) }) });
}
const WG = () => {
  const e = new DOMParser().parseFromString(
    document.documentElement.outerHTML,
    "text/html"
  );
  e.querySelectorAll("script").forEach((o) => o.remove()), e.querySelectorAll("meta").forEach((o) => o.remove()), e.querySelectorAll("style").forEach((o) => o.remove()), e.querySelectorAll("*").forEach((o) => {
    o.childNodes.forEach((s) => {
      s.nodeType === Node.COMMENT_NODE && s.remove();
    });
  });
  const t = ["font", "center", "marquee"];
  return e.querySelectorAll("*").forEach((o) => {
    o.removeAttribute("style"), t.includes(o.tagName.toLowerCase()) && o.replaceWith(...Array.from(o.childNodes)), !o.innerHTML.trim() && o.nodeType === Node.ELEMENT_NODE && o.remove();
  }), new XMLSerializer().serializeToString(e);
}, XG = "_container_1462z_1", zG = "_widgetButton_1462z_10", YG = "_arrow_1462z_27", WB = {
  container: XG,
  widgetButton: zG,
  arrow: YG
};
function JG(A) {
  const e = b.useRef(A);
  return e.current = A, b.useCallback(() => e.current(), []);
}
function jG(A, e) {
  const t = JG(A);
  return b.useMemo(() => WN.debounce(t, e), [t]);
}
const ZG = ({
  productName: A,
  isWidgetVisible: e,
  widgetColor: t
}) => {
  var W, sA;
  b.useState(A);
  const [n, r] = b.useState(""), [o, s] = b.useState(null), [l, c] = b.useState(""), f = b.useRef(!1), [g, B] = b.useState(!1), [p, v] = b.useState(!1), [F, U] = b.useState(""), L = b.useRef(null), { refs: m, floatingStyles: w, middlewareData: y, placement: I } = VP({
    middleware: [IP(10), HP(), xP(), SP({ element: L })]
  }), H = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[I.split("-")[0]] || "top", S = {
    ...w,
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    color: "#000000",
    border: "none",
    borderRadius: "13px",
    padding: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    zIndex: 1e3,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "14px",
    lineHeight: "1.4",
    overflow: "visible"
  }, O = jG(() => {
    f.current && !g && k();
  }, 1e3);
  b.useEffect(() => {
    const iA = (tA) => {
      tA.key === "p" && (tA.metaKey || tA.ctrlKey) && (tA.preventDefault(), v(!0));
    };
    return document.addEventListener("keydown", iA), () => {
      document.removeEventListener("keydown", iA);
    };
  }, []), b.useEffect(() => {
    const iA = (tA) => {
      (tA.type === "keyup" || tA.type === "click") && O();
    };
    return document.addEventListener("click", iA), document.addEventListener("keyup", iA), () => {
      document.removeEventListener("click", iA), document.removeEventListener("keyup", iA);
    };
  }, [O]);
  const k = () => {
    console.log("Checking for more instructions..."), N(F);
  }, N = async (iA) => {
    if (console.log("Submitting query from index:", iA), g)
      return;
    B(!0);
    const tA = WG();
    r(tA), GN(document.body).then((lA) => {
      lA.toBlob((mA) => {
        s(mA);
        const fA = new FormData();
        fA.append("user_input", iA), fA.append("product", "supabase"), fA.append("dom_tree", tA), mA && fA.append("screenshot", mA, "screenshot.png"), fetch("http://localhost:8000/gandalf", {
          method: "POST",
          body: fA
        }).then((J) => J.json()).then((J) => {
          console.log("Success:", J);
          const P = J.result.replace(/```json\n/, "").replace(/\n```/, "");
          try {
            const V = JSON.parse(P);
            console.log("Result Object:", V);
            const { Instructions: X, selector: j, hasMoreInstructions: BA } = V;
            console.log(
              "Instructions:",
              X,
              "selector:",
              j,
              "hasMoreInstructions:",
              BA
            ), X && c(X), BA && (f.current = !0);
            let OA = document.querySelector(j);
            m.setReference(OA), console.log("Target Element:", OA), OA || console.warn("No valid target element found for the popover."), B(!1), v(!1);
          } catch (V) {
            console.error("Error parsing JSON:", V), B(!1), v(!1);
          }
        }).catch((J) => {
          console.error("Error:", J), B(!1), v(!1);
        });
      });
    });
  };
  return /* @__PURE__ */ IA.jsxs(IA.Fragment, { children: [
    /* @__PURE__ */ IA.jsx("div", { className: WB.container, children: /* @__PURE__ */ IA.jsx(
      $G,
      {
        open: p,
        query: F,
        isApiCallInProgress: g,
        setQuery: U,
        setOpen: v,
        handleSubmit: N
      }
    ) }),
    /* @__PURE__ */ IA.jsxs("div", { ref: m.setFloating, style: S, children: [
      l,
      /* @__PURE__ */ IA.jsx(
        "div",
        {
          ref: L,
          className: WB.arrow,
          style: {
            [H]: "-6px",
            ...((W = y.arrow) == null ? void 0 : W.x) != null && {
              left: `${y.arrow.x}px`
            },
            ...((sA = y.arrow) == null ? void 0 : sA.y) != null && {
              top: `${y.arrow.y}px`
            }
          }
        }
      )
    ] }),
    e && /* @__PURE__ */ IA.jsx(
      "button",
      {
        className: WB.widgetButton,
        style: { backgroundColor: t || "#007bff" },
        disabled: !e,
        onClick: () => v(!p),
        "aria-label": "Toggle chat",
        children: "💬"
      }
    )
  ] });
}, ux = document.createElement("div");
document.body.appendChild(ux);
mD.render(
  /* @__PURE__ */ IA.jsx(ZG, { productName: "Todo App", isWidgetVisible: !0, widgetColor: "pink" }),
  ux
);
