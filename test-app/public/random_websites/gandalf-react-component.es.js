function $C(A, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in A)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i && Object.defineProperty(A, n, i.get ? i : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }));
}
function Zf(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Nh = { exports: {} }, rl = {}, Mh = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo = Symbol.for("react.element"), WC = Symbol.for("react.portal"), XC = Symbol.for("react.fragment"), YC = Symbol.for("react.strict_mode"), zC = Symbol.for("react.profiler"), jC = Symbol.for("react.provider"), JC = Symbol.for("react.context"), ZC = Symbol.for("react.forward_ref"), qC = Symbol.for("react.suspense"), AQ = Symbol.for("react.memo"), eQ = Symbol.for("react.lazy"), LB = Symbol.iterator;
function tQ(A) {
  return A === null || typeof A != "object" ? null : (A = LB && A[LB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Ph = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _h = Object.assign, Gh = {};
function Xn(A, e, t) {
  this.props = A, this.context = e, this.refs = Gh, this.updater = t || Ph;
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
Xn.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function Vh() {
}
Vh.prototype = Xn.prototype;
function qf(A, e, t) {
  this.props = A, this.context = e, this.refs = Gh, this.updater = t || Ph;
}
var Ad = qf.prototype = new Vh();
Ad.constructor = qf;
_h(Ad, Xn.prototype);
Ad.isPureReactComponent = !0;
var bB = Array.isArray, $h = Object.prototype.hasOwnProperty, ed = { current: null }, Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(A, e, t) {
  var r, n = {}, i = null, o = null;
  if (e != null) for (r in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (i = "" + e.key), e) $h.call(e, r) && !Wh.hasOwnProperty(r) && (n[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) n.children = t;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    n.children = s;
  }
  if (A && A.defaultProps) for (r in a = A.defaultProps, a) n[r] === void 0 && (n[r] = a[r]);
  return { $$typeof: Uo, type: A, key: i, ref: o, props: n, _owner: ed.current };
}
function rQ(A, e) {
  return { $$typeof: Uo, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function td(A) {
  return typeof A == "object" && A !== null && A.$$typeof === Uo;
}
function nQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var TB = /\/+/g;
function jl(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? nQ("" + A.key) : e.toString(36);
}
function Pa(A, e, t, r, n) {
  var i = typeof A;
  (i === "undefined" || i === "boolean") && (A = null);
  var o = !1;
  if (A === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (A.$$typeof) {
        case Uo:
        case WC:
          o = !0;
      }
  }
  if (o) return o = A, n = n(o), A = r === "" ? "." + jl(o, 0) : r, bB(n) ? (t = "", A != null && (t = A.replace(TB, "$&/") + "/"), Pa(n, e, t, "", function(l) {
    return l;
  })) : n != null && (td(n) && (n = rQ(n, t + (!n.key || o && o.key === n.key ? "" : ("" + n.key).replace(TB, "$&/") + "/") + A)), e.push(n)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", bB(A)) for (var a = 0; a < A.length; a++) {
    i = A[a];
    var s = r + jl(i, a);
    o += Pa(i, e, t, s, n);
  }
  else if (s = tQ(A), typeof s == "function") for (A = s.call(A), a = 0; !(i = A.next()).done; ) i = i.value, s = r + jl(i, a++), o += Pa(i, e, t, s, n);
  else if (i === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Go(A, e, t) {
  if (A == null) return A;
  var r = [], n = 0;
  return Pa(A, r, "", "", function(i) {
    return e.call(t, i, n++);
  }), r;
}
function iQ(A) {
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
var ZA = { current: null }, _a = { transition: null }, oQ = { ReactCurrentDispatcher: ZA, ReactCurrentBatchConfig: _a, ReactCurrentOwner: ed };
function Yh() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: Go, forEach: function(A, e, t) {
  Go(A, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(A) {
  var e = 0;
  return Go(A, function() {
    e++;
  }), e;
}, toArray: function(A) {
  return Go(A, function(e) {
    return e;
  }) || [];
}, only: function(A) {
  if (!td(A)) throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
Y.Component = Xn;
Y.Fragment = XC;
Y.Profiler = zC;
Y.PureComponent = qf;
Y.StrictMode = YC;
Y.Suspense = qC;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oQ;
Y.act = Yh;
Y.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = _h({}, A.props), n = A.key, i = A.ref, o = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, o = ed.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps) var a = A.type.defaultProps;
    for (s in e) $h.call(e, s) && !Wh.hasOwnProperty(s) && (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    a = Array(s);
    for (var l = 0; l < s; l++) a[l] = arguments[l + 2];
    r.children = a;
  }
  return { $$typeof: Uo, type: A.type, key: n, ref: i, props: r, _owner: o };
};
Y.createContext = function(A) {
  return A = { $$typeof: JC, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: jC, _context: A }, A.Consumer = A;
};
Y.createElement = Xh;
Y.createFactory = function(A) {
  var e = Xh.bind(null, A);
  return e.type = A, e;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(A) {
  return { $$typeof: ZC, render: A };
};
Y.isValidElement = td;
Y.lazy = function(A) {
  return { $$typeof: eQ, _payload: { _status: -1, _result: A }, _init: iQ };
};
Y.memo = function(A, e) {
  return { $$typeof: AQ, type: A, compare: e === void 0 ? null : e };
};
Y.startTransition = function(A) {
  var e = _a.transition;
  _a.transition = {};
  try {
    A();
  } finally {
    _a.transition = e;
  }
};
Y.unstable_act = Yh;
Y.useCallback = function(A, e) {
  return ZA.current.useCallback(A, e);
};
Y.useContext = function(A) {
  return ZA.current.useContext(A);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(A) {
  return ZA.current.useDeferredValue(A);
};
Y.useEffect = function(A, e) {
  return ZA.current.useEffect(A, e);
};
Y.useId = function() {
  return ZA.current.useId();
};
Y.useImperativeHandle = function(A, e, t) {
  return ZA.current.useImperativeHandle(A, e, t);
};
Y.useInsertionEffect = function(A, e) {
  return ZA.current.useInsertionEffect(A, e);
};
Y.useLayoutEffect = function(A, e) {
  return ZA.current.useLayoutEffect(A, e);
};
Y.useMemo = function(A, e) {
  return ZA.current.useMemo(A, e);
};
Y.useReducer = function(A, e, t) {
  return ZA.current.useReducer(A, e, t);
};
Y.useRef = function(A) {
  return ZA.current.useRef(A);
};
Y.useState = function(A) {
  return ZA.current.useState(A);
};
Y.useSyncExternalStore = function(A, e, t) {
  return ZA.current.useSyncExternalStore(A, e, t);
};
Y.useTransition = function() {
  return ZA.current.useTransition();
};
Y.version = "18.3.1";
Mh.exports = Y;
var Q = Mh.exports;
const N = /* @__PURE__ */ Zf(Q), tc = /* @__PURE__ */ $C({
  __proto__: null,
  default: N
}, [Q]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aQ = Q, sQ = Symbol.for("react.element"), lQ = Symbol.for("react.fragment"), uQ = Object.prototype.hasOwnProperty, cQ = aQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fQ = { key: !0, ref: !0, __self: !0, __source: !0 };
function zh(A, e, t) {
  var r, n = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (r in e) uQ.call(e, r) && !fQ.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: sQ, type: A, key: i, ref: o, props: n, _owner: cQ.current };
}
rl.Fragment = lQ;
rl.jsx = zh;
rl.jsxs = zh;
Nh.exports = rl;
var j = Nh.exports, jh = { exports: {} }, ge = {}, Jh = { exports: {} }, Zh = {};
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
  function e(I, x) {
    var L = I.length;
    I.push(x);
    A: for (; 0 < L; ) {
      var R = L - 1 >>> 1, W = I[R];
      if (0 < n(W, x)) I[R] = x, I[L] = W, L = R;
      else break A;
    }
  }
  function t(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var x = I[0], L = I.pop();
    if (L !== x) {
      I[0] = L;
      A: for (var R = 0, W = I.length, dA = W >>> 1; R < dA; ) {
        var BA = 2 * (R + 1) - 1, gA = I[BA], rA = BA + 1, XA = I[rA];
        if (0 > n(gA, L)) rA < W && 0 > n(XA, gA) ? (I[R] = XA, I[rA] = L, R = rA) : (I[R] = gA, I[BA] = L, R = BA);
        else if (rA < W && 0 > n(XA, L)) I[R] = XA, I[rA] = L, R = rA;
        else break A;
      }
    }
    return x;
  }
  function n(I, x) {
    var L = I.sortIndex - x.sortIndex;
    return L !== 0 ? L : I.id - x.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    A.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, a = o.now();
    A.unstable_now = function() {
      return o.now() - a;
    };
  }
  var s = [], l = [], u = 1, c = null, f = 3, B = !1, p = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(I) {
    for (var x = t(l); x !== null; ) {
      if (x.callback === null) r(l);
      else if (x.startTime <= I) r(l), x.sortIndex = x.expirationTime, e(s, x);
      else break;
      x = t(l);
    }
  }
  function m(I) {
    if (w = !1, h(I), !p) if (t(s) !== null) p = !0, V(v);
    else {
      var x = t(l);
      x !== null && K(m, x.startTime - I);
    }
  }
  function v(I, x) {
    p = !1, w && (w = !1, g(U), U = -1), B = !0;
    var L = f;
    try {
      for (h(x), c = t(s); c !== null && (!(c.expirationTime > x) || I && !P()); ) {
        var R = c.callback;
        if (typeof R == "function") {
          c.callback = null, f = c.priorityLevel;
          var W = R(c.expirationTime <= x);
          x = A.unstable_now(), typeof W == "function" ? c.callback = W : c === t(s) && r(s), h(x);
        } else r(s);
        c = t(s);
      }
      if (c !== null) var dA = !0;
      else {
        var BA = t(l);
        BA !== null && K(m, BA.startTime - x), dA = !1;
      }
      return dA;
    } finally {
      c = null, f = L, B = !1;
    }
  }
  var C = !1, F = null, U = -1, E = 5, S = -1;
  function P() {
    return !(A.unstable_now() - S < E);
  }
  function _() {
    if (F !== null) {
      var I = A.unstable_now();
      S = I;
      var x = !0;
      try {
        x = F(!0, I);
      } finally {
        x ? M() : (C = !1, F = null);
      }
    } else C = !1;
  }
  var M;
  if (typeof d == "function") M = function() {
    d(_);
  };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(), Z = G.port2;
    G.port1.onmessage = _, M = function() {
      Z.postMessage(null);
    };
  } else M = function() {
    y(_, 0);
  };
  function V(I) {
    F = I, C || (C = !0, M());
  }
  function K(I, x) {
    U = y(function() {
      I(A.unstable_now());
    }, x);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, A.unstable_continueExecution = function() {
    p || B || (p = !0, V(v));
  }, A.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < I ? Math.floor(1e3 / I) : 5;
  }, A.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, A.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, A.unstable_next = function(I) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var x = 3;
        break;
      default:
        x = f;
    }
    var L = f;
    f = x;
    try {
      return I();
    } finally {
      f = L;
    }
  }, A.unstable_pauseExecution = function() {
  }, A.unstable_requestPaint = function() {
  }, A.unstable_runWithPriority = function(I, x) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var L = f;
    f = I;
    try {
      return x();
    } finally {
      f = L;
    }
  }, A.unstable_scheduleCallback = function(I, x, L) {
    var R = A.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? R + L : R) : L = R, I) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = L + W, I = { id: u++, callback: x, priorityLevel: I, startTime: L, expirationTime: W, sortIndex: -1 }, L > R ? (I.sortIndex = L, e(l, I), t(s) === null && I === t(l) && (w ? (g(U), U = -1) : w = !0, K(m, L - R))) : (I.sortIndex = W, e(s, I), p || B || (p = !0, V(v))), I;
  }, A.unstable_shouldYield = P, A.unstable_wrapCallback = function(I) {
    var x = f;
    return function() {
      var L = f;
      f = x;
      try {
        return I.apply(this, arguments);
      } finally {
        f = L;
      }
    };
  };
})(Zh);
Jh.exports = Zh;
var dQ = Jh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BQ = Q, Be = dQ;
function H(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qh = /* @__PURE__ */ new Set(), Yi = {};
function _r(A, e) {
  Ln(A, e), Ln(A + "Capture", e);
}
function Ln(A, e) {
  for (Yi[A] = e, A = 0; A < e.length; A++) qh.add(e[A]);
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rc = Object.prototype.hasOwnProperty, gQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kB = {}, OB = {};
function pQ(A) {
  return rc.call(OB, A) ? !0 : rc.call(kB, A) ? !1 : gQ.test(A) ? OB[A] = !0 : (kB[A] = !0, !1);
}
function hQ(A, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function wQ(A, e, t, r) {
  if (e === null || typeof e > "u" || hQ(A, e, t, r)) return !0;
  if (r) return !1;
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
function qA(A, e, t, r, n, i, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = i, this.removeEmptyString = o;
}
var MA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  MA[A] = new qA(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  MA[e] = new qA(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  MA[A] = new qA(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  MA[A] = new qA(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  MA[A] = new qA(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  MA[A] = new qA(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  MA[A] = new qA(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  MA[A] = new qA(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  MA[A] = new qA(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var rd = /[\-:]([a-z])/g;
function nd(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    rd,
    nd
  );
  MA[e] = new qA(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(rd, nd);
  MA[e] = new qA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(rd, nd);
  MA[e] = new qA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  MA[A] = new qA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
MA.xlinkHref = new qA("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  MA[A] = new qA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function id(A, e, t, r) {
  var n = MA.hasOwnProperty(e) ? MA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (wQ(e, t, n, r) && (t = null), r || n === null ? pQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var Qt = BQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vo = Symbol.for("react.element"), rn = Symbol.for("react.portal"), nn = Symbol.for("react.fragment"), od = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), Aw = Symbol.for("react.provider"), ew = Symbol.for("react.context"), ad = Symbol.for("react.forward_ref"), ic = Symbol.for("react.suspense"), oc = Symbol.for("react.suspense_list"), sd = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), tw = Symbol.for("react.offscreen"), DB = Symbol.iterator;
function ti(A) {
  return A === null || typeof A != "object" ? null : (A = DB && A[DB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var mA = Object.assign, Jl;
function gi(A) {
  if (Jl === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    Jl = e && e[1] || "";
  }
  return `
` + Jl + A;
}
var Zl = !1;
function ql(A, e) {
  if (!A || Zl) return "";
  Zl = !0;
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
      } catch (l) {
        var r = l;
      }
      Reflect.construct(A, [], e);
    } else {
      try {
        e.call();
      } catch (l) {
        r = l;
      }
      A.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      A();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (var n = l.stack.split(`
`), i = r.stack.split(`
`), o = n.length - 1, a = i.length - 1; 1 <= o && 0 <= a && n[o] !== i[a]; ) a--;
      for (; 1 <= o && 0 <= a; o--, a--) if (n[o] !== i[a]) {
        if (o !== 1 || a !== 1)
          do
            if (o--, a--, 0 > a || n[o] !== i[a]) {
              var s = `
` + n[o].replace(" at new ", " at ");
              return A.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", A.displayName)), s;
            }
          while (1 <= o && 0 <= a);
        break;
      }
    }
  } finally {
    Zl = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? gi(A) : "";
}
function mQ(A) {
  switch (A.tag) {
    case 5:
      return gi(A.type);
    case 16:
      return gi("Lazy");
    case 13:
      return gi("Suspense");
    case 19:
      return gi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = ql(A.type, !1), A;
    case 11:
      return A = ql(A.type.render, !1), A;
    case 1:
      return A = ql(A.type, !0), A;
    default:
      return "";
  }
}
function ac(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case nn:
      return "Fragment";
    case rn:
      return "Portal";
    case nc:
      return "Profiler";
    case od:
      return "StrictMode";
    case ic:
      return "Suspense";
    case oc:
      return "SuspenseList";
  }
  if (typeof A == "object") switch (A.$$typeof) {
    case ew:
      return (A.displayName || "Context") + ".Consumer";
    case Aw:
      return (A._context.displayName || "Context") + ".Provider";
    case ad:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case sd:
      return e = A.displayName || null, e !== null ? e : ac(A.type) || "Memo";
    case St:
      e = A._payload, A = A._init;
      try {
        return ac(A(e));
      } catch {
      }
  }
  return null;
}
function vQ(A) {
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
      return ac(e);
    case 8:
      return e === od ? "StrictMode" : "Mode";
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
function Zt(A) {
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
function rw(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function CQ(A) {
  var e = rw(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), r = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var n = t.get, i = t.set;
    return Object.defineProperty(A, e, { configurable: !0, get: function() {
      return n.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(A, e, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      A._valueTracker = null, delete A[e];
    } };
  }
}
function $o(A) {
  A._valueTracker || (A._valueTracker = CQ(A));
}
function nw(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(), r = "";
  return A && (r = rw(A) ? A.checked ? "true" : "false" : A.value), A = r, A !== t ? (e.setValue(A), !0) : !1;
}
function cs(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function sc(A, e) {
  var t = e.checked;
  return mA({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? A._wrapperState.initialChecked });
}
function KB(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  t = Zt(e.value != null ? e.value : t), A._wrapperState = { initialChecked: r, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function iw(A, e) {
  e = e.checked, e != null && id(A, "checked", e, !1);
}
function lc(A, e) {
  iw(A, e);
  var t = Zt(e.value), r = e.type;
  if (t != null) r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? uc(A, e.type, t) : e.hasOwnProperty("defaultValue") && uc(A, e.type, Zt(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function RB(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function uc(A, e, t) {
  (e !== "number" || cs(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var pi = Array.isArray;
function Cn(A, e, t, r) {
  if (A = A.options, e) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++) n = e.hasOwnProperty("$" + A[t].value), A[t].selected !== n && (A[t].selected = n), n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + Zt(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        A[n].selected = !0, r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function cc(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(H(91));
  return mA({}, e, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
}
function NB(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error(H(92));
      if (pi(t)) {
        if (1 < t.length) throw Error(H(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: Zt(t) };
}
function ow(A, e) {
  var t = Zt(e.value), r = Zt(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), r != null && (A.defaultValue = "" + r);
}
function MB(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function aw(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fc(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? aw(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var Wo, sw = function(A) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, r, n) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, r, n);
    });
  } : A;
}(function(A, e) {
  if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = e;
  else {
    for (Wo = Wo || document.createElement("div"), Wo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Wo.firstChild; A.firstChild; ) A.removeChild(A.firstChild);
    for (; e.firstChild; ) A.appendChild(e.firstChild);
  }
});
function zi(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var xi = {
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
}, QQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(xi).forEach(function(A) {
  QQ.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), xi[e] = xi[A];
  });
});
function lw(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || xi.hasOwnProperty(A) && xi[A] ? ("" + e).trim() : e + "px";
}
function uw(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, n = lw(t, e[t], r);
    t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
  }
}
var yQ = mA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(A, e) {
  if (e) {
    if (yQ[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(H(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(H(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(H(62));
  }
}
function Bc(A, e) {
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
var gc = null;
function ld(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var pc = null, Qn = null, yn = null;
function PB(A) {
  if (A = Ho(A)) {
    if (typeof pc != "function") throw Error(H(280));
    var e = A.stateNode;
    e && (e = sl(e), pc(A.stateNode, A.type, e));
  }
}
function cw(A) {
  Qn ? yn ? yn.push(A) : yn = [A] : Qn = A;
}
function fw() {
  if (Qn) {
    var A = Qn, e = yn;
    if (yn = Qn = null, PB(A), e) for (A = 0; A < e.length; A++) PB(e[A]);
  }
}
function dw(A, e) {
  return A(e);
}
function Bw() {
}
var Au = !1;
function gw(A, e, t) {
  if (Au) return A(e, t);
  Au = !0;
  try {
    return dw(A, e, t);
  } finally {
    Au = !1, (Qn !== null || yn !== null) && (Bw(), fw());
  }
}
function ji(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[e];
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
      (r = !r.disabled) || (A = A.type, r = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !r;
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error(H(231, e, typeof t));
  return t;
}
var hc = !1;
if (Bt) try {
  var ri = {};
  Object.defineProperty(ri, "passive", { get: function() {
    hc = !0;
  } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
} catch {
  hc = !1;
}
function FQ(A, e, t, r, n, i, o, a, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var Si = !1, fs = null, ds = !1, wc = null, UQ = { onError: function(A) {
  Si = !0, fs = A;
} };
function EQ(A, e, t, r, n, i, o, a, s) {
  Si = !1, fs = null, FQ.apply(UQ, arguments);
}
function IQ(A, e, t, r, n, i, o, a, s) {
  if (EQ.apply(this, arguments), Si) {
    if (Si) {
      var l = fs;
      Si = !1, fs = null;
    } else throw Error(H(198));
    ds || (ds = !0, wc = l);
  }
}
function Gr(A) {
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
function pw(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function _B(A) {
  if (Gr(A) !== A) throw Error(H(188));
}
function HQ(A) {
  var e = A.alternate;
  if (!e) {
    if (e = Gr(A), e === null) throw Error(H(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e; ; ) {
    var n = t.return;
    if (n === null) break;
    var i = n.alternate;
    if (i === null) {
      if (r = n.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === i.child) {
      for (i = n.child; i; ) {
        if (i === t) return _B(n), A;
        if (i === r) return _B(n), e;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (t.return !== r.return) t = n, r = i;
    else {
      for (var o = !1, a = n.child; a; ) {
        if (a === t) {
          o = !0, t = n, r = i;
          break;
        }
        if (a === r) {
          o = !0, r = n, t = i;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === t) {
            o = !0, t = i, r = n;
            break;
          }
          if (a === r) {
            o = !0, r = i, t = n;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(H(189));
      }
    }
    if (t.alternate !== r) throw Error(H(190));
  }
  if (t.tag !== 3) throw Error(H(188));
  return t.stateNode.current === t ? A : e;
}
function hw(A) {
  return A = HQ(A), A !== null ? ww(A) : null;
}
function ww(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = ww(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var mw = Be.unstable_scheduleCallback, GB = Be.unstable_cancelCallback, xQ = Be.unstable_shouldYield, SQ = Be.unstable_requestPaint, FA = Be.unstable_now, LQ = Be.unstable_getCurrentPriorityLevel, ud = Be.unstable_ImmediatePriority, vw = Be.unstable_UserBlockingPriority, Bs = Be.unstable_NormalPriority, bQ = Be.unstable_LowPriority, Cw = Be.unstable_IdlePriority, nl = null, Je = null;
function TQ(A) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(nl, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : DQ, kQ = Math.log, OQ = Math.LN2;
function DQ(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (kQ(A) / OQ | 0) | 0;
}
var Xo = 64, Yo = 4194304;
function hi(A) {
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
function gs(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0, n = A.suspendedLanes, i = A.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var a = o & ~n;
    a !== 0 ? r = hi(a) : (i &= o, i !== 0 && (r = hi(i)));
  } else o = t & ~n, o !== 0 ? r = hi(o) : i !== 0 && (r = hi(i));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & n) && (n = r & -r, i = e & -e, n >= i || n === 16 && (i & 4194240) !== 0)) return e;
  if (r & 4 && (r |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= r; 0 < e; ) t = 31 - Re(e), n = 1 << t, r |= A[t], e &= ~n;
  return r;
}
function KQ(A, e) {
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
function RQ(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
    var o = 31 - Re(i), a = 1 << o, s = n[o];
    s === -1 ? (!(a & t) || a & r) && (n[o] = KQ(a, e)) : s <= e && (A.expiredLanes |= a), i &= ~a;
  }
}
function mc(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Qw() {
  var A = Xo;
  return Xo <<= 1, !(Xo & 4194240) && (Xo = 64), A;
}
function eu(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function Eo(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Re(e), A[e] = t;
}
function NQ(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - Re(t), i = 1 << n;
    e[n] = 0, r[n] = -1, A[n] = -1, t &= ~i;
  }
}
function cd(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var r = 31 - Re(t), n = 1 << r;
    n & e | A[r] & e && (A[r] |= e), t &= ~n;
  }
}
var eA = 0;
function yw(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fw, fd, Uw, Ew, Iw, vc = !1, zo = [], _t = null, Gt = null, Vt = null, Ji = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), Tt = [], MQ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function VB(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zi.delete(e.pointerId);
  }
}
function ni(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [n] }, e !== null && (e = Ho(e), e !== null && fd(e)), A) : (A.eventSystemFlags |= r, e = A.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), A);
}
function PQ(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return _t = ni(_t, A, e, t, r, n), !0;
    case "dragenter":
      return Gt = ni(Gt, A, e, t, r, n), !0;
    case "mouseover":
      return Vt = ni(Vt, A, e, t, r, n), !0;
    case "pointerover":
      var i = n.pointerId;
      return Ji.set(i, ni(Ji.get(i) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return i = n.pointerId, Zi.set(i, ni(Zi.get(i) || null, A, e, t, r, n)), !0;
  }
  return !1;
}
function Hw(A) {
  var e = mr(A.target);
  if (e !== null) {
    var t = Gr(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = pw(t), e !== null) {
          A.blockedOn = e, Iw(A.priority, function() {
            Uw(t);
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
function Ga(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = Cc(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      gc = r, t.target.dispatchEvent(r), gc = null;
    } else return e = Ho(t), e !== null && fd(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function $B(A, e, t) {
  Ga(A) && t.delete(e);
}
function _Q() {
  vc = !1, _t !== null && Ga(_t) && (_t = null), Gt !== null && Ga(Gt) && (Gt = null), Vt !== null && Ga(Vt) && (Vt = null), Ji.forEach($B), Zi.forEach($B);
}
function ii(A, e) {
  A.blockedOn === e && (A.blockedOn = null, vc || (vc = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, _Q)));
}
function qi(A) {
  function e(n) {
    return ii(n, A);
  }
  if (0 < zo.length) {
    ii(zo[0], A);
    for (var t = 1; t < zo.length; t++) {
      var r = zo[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (_t !== null && ii(_t, A), Gt !== null && ii(Gt, A), Vt !== null && ii(Vt, A), Ji.forEach(e), Zi.forEach(e), t = 0; t < Tt.length; t++) r = Tt[t], r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Tt.length && (t = Tt[0], t.blockedOn === null); ) Hw(t), t.blockedOn === null && Tt.shift();
}
var Fn = Qt.ReactCurrentBatchConfig, ps = !0;
function GQ(A, e, t, r) {
  var n = eA, i = Fn.transition;
  Fn.transition = null;
  try {
    eA = 1, dd(A, e, t, r);
  } finally {
    eA = n, Fn.transition = i;
  }
}
function VQ(A, e, t, r) {
  var n = eA, i = Fn.transition;
  Fn.transition = null;
  try {
    eA = 4, dd(A, e, t, r);
  } finally {
    eA = n, Fn.transition = i;
  }
}
function dd(A, e, t, r) {
  if (ps) {
    var n = Cc(A, e, t, r);
    if (n === null) cu(A, e, r, hs, t), VB(A, r);
    else if (PQ(n, A, e, t, r)) r.stopPropagation();
    else if (VB(A, r), e & 4 && -1 < MQ.indexOf(A)) {
      for (; n !== null; ) {
        var i = Ho(n);
        if (i !== null && Fw(i), i = Cc(A, e, t, r), i === null && cu(A, e, r, hs, t), i === n) break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else cu(A, e, r, null, t);
  }
}
var hs = null;
function Cc(A, e, t, r) {
  if (hs = null, A = ld(r), A = mr(A), A !== null) if (e = Gr(A), e === null) A = null;
  else if (t = e.tag, t === 13) {
    if (A = pw(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return hs = A, null;
}
function xw(A) {
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
      switch (LQ()) {
        case ud:
          return 1;
        case vw:
          return 4;
        case Bs:
        case bQ:
          return 16;
        case Cw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null, Bd = null, Va = null;
function Sw() {
  if (Va) return Va;
  var A, e = Bd, t = e.length, r, n = "value" in Dt ? Dt.value : Dt.textContent, i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++) ;
  var o = t - A;
  for (r = 1; r <= o && e[t - r] === n[i - r]; r++) ;
  return Va = n.slice(A, 1 < r ? 1 - r : void 0);
}
function $a(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function jo() {
  return !0;
}
function WB() {
  return !1;
}
function pe(A) {
  function e(t, r, n, i, o) {
    this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var a in A) A.hasOwnProperty(a) && (t = A[a], this[a] = t ? t(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? jo : WB, this.isPropagationStopped = WB, this;
  }
  return mA(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = jo);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = jo);
  }, persist: function() {
  }, isPersistent: jo }), e;
}
var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gd = pe(Yn), Io = mA({}, Yn, { view: 0, detail: 0 }), $Q = pe(Io), tu, ru, oi, il = mA({}, Io, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pd, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== oi && (oi && A.type === "mousemove" ? (tu = A.screenX - oi.screenX, ru = A.screenY - oi.screenY) : ru = tu = 0, oi = A), tu);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : ru;
} }), XB = pe(il), WQ = mA({}, il, { dataTransfer: 0 }), XQ = pe(WQ), YQ = mA({}, Io, { relatedTarget: 0 }), nu = pe(YQ), zQ = mA({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jQ = pe(zQ), JQ = mA({}, Yn, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), ZQ = pe(JQ), qQ = mA({}, Yn, { data: 0 }), YB = pe(qQ), Ay = {
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
}, ey = {
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
}, ty = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ry(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = ty[A]) ? !!e[A] : !1;
}
function pd() {
  return ry;
}
var ny = mA({}, Io, { key: function(A) {
  if (A.key) {
    var e = Ay[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = $a(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? ey[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pd, charCode: function(A) {
  return A.type === "keypress" ? $a(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? $a(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), iy = pe(ny), oy = mA({}, il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zB = pe(oy), ay = mA({}, Io, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pd }), sy = pe(ay), ly = mA({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uy = pe(ly), cy = mA({}, il, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fy = pe(cy), dy = [9, 13, 27, 32], hd = Bt && "CompositionEvent" in window, Li = null;
Bt && "documentMode" in document && (Li = document.documentMode);
var By = Bt && "TextEvent" in window && !Li, Lw = Bt && (!hd || Li && 8 < Li && 11 >= Li), jB = " ", JB = !1;
function bw(A, e) {
  switch (A) {
    case "keyup":
      return dy.indexOf(e.keyCode) !== -1;
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
function Tw(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var on = !1;
function gy(A, e) {
  switch (A) {
    case "compositionend":
      return Tw(e);
    case "keypress":
      return e.which !== 32 ? null : (JB = !0, jB);
    case "textInput":
      return A = e.data, A === jB && JB ? null : A;
    default:
      return null;
  }
}
function py(A, e) {
  if (on) return A === "compositionend" || !hd && bw(A, e) ? (A = Sw(), Va = Bd = Dt = null, on = !1, A) : null;
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
      return Lw && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var hy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ZB(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!hy[A.type] : e === "textarea";
}
function kw(A, e, t, r) {
  cw(r), e = ws(e, "onChange"), 0 < e.length && (t = new gd("onChange", "change", null, t, r), A.push({ event: t, listeners: e }));
}
var bi = null, Ao = null;
function wy(A) {
  $w(A, 0);
}
function ol(A) {
  var e = ln(A);
  if (nw(e)) return A;
}
function my(A, e) {
  if (A === "change") return e;
}
var Ow = !1;
if (Bt) {
  var iu;
  if (Bt) {
    var ou = "oninput" in document;
    if (!ou) {
      var qB = document.createElement("div");
      qB.setAttribute("oninput", "return;"), ou = typeof qB.oninput == "function";
    }
    iu = ou;
  } else iu = !1;
  Ow = iu && (!document.documentMode || 9 < document.documentMode);
}
function Ag() {
  bi && (bi.detachEvent("onpropertychange", Dw), Ao = bi = null);
}
function Dw(A) {
  if (A.propertyName === "value" && ol(Ao)) {
    var e = [];
    kw(e, Ao, A, ld(A)), gw(wy, e);
  }
}
function vy(A, e, t) {
  A === "focusin" ? (Ag(), bi = e, Ao = t, bi.attachEvent("onpropertychange", Dw)) : A === "focusout" && Ag();
}
function Cy(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return ol(Ao);
}
function Qy(A, e) {
  if (A === "click") return ol(e);
}
function yy(A, e) {
  if (A === "input" || A === "change") return ol(e);
}
function Fy(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var Pe = typeof Object.is == "function" ? Object.is : Fy;
function eo(A, e) {
  if (Pe(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!rc.call(e, n) || !Pe(A[n], e[n])) return !1;
  }
  return !0;
}
function eg(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function tg(A, e) {
  var t = eg(A);
  A = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = A + t.textContent.length, A <= e && r >= e) return { node: t, offset: e - A };
      A = r;
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
    t = eg(t);
  }
}
function Kw(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Kw(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Rw() {
  for (var A = window, e = cs(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = cs(A.document);
  }
  return e;
}
function wd(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function Uy(A) {
  var e = Rw(), t = A.focusedElem, r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Kw(t.ownerDocument.documentElement, t)) {
    if (r !== null && wd(t)) {
      if (e = r.start, A = r.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var n = t.textContent.length, i = Math.min(r.start, n);
        r = r.end === void 0 ? i : Math.min(r.end, n), !A.extend && i > r && (n = r, r = i, i = n), n = tg(t, i);
        var o = tg(
          t,
          r
        );
        n && o && (A.rangeCount !== 1 || A.anchorNode !== n.node || A.anchorOffset !== n.offset || A.focusNode !== o.node || A.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(n.node, n.offset), A.removeAllRanges(), i > r ? (A.addRange(e), A.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode; ) A.nodeType === 1 && e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var Ey = Bt && "documentMode" in document && 11 >= document.documentMode, an = null, Qc = null, Ti = null, yc = !1;
function rg(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  yc || an == null || an !== cs(r) || (r = an, "selectionStart" in r && wd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ti && eo(Ti, r) || (Ti = r, r = ws(Qc, "onSelect"), 0 < r.length && (e = new gd("onSelect", "select", null, e, t), A.push({ event: e, listeners: r }), e.target = an)));
}
function Jo(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var sn = { animationend: Jo("Animation", "AnimationEnd"), animationiteration: Jo("Animation", "AnimationIteration"), animationstart: Jo("Animation", "AnimationStart"), transitionend: Jo("Transition", "TransitionEnd") }, au = {}, Nw = {};
Bt && (Nw = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function al(A) {
  if (au[A]) return au[A];
  if (!sn[A]) return A;
  var e = sn[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in Nw) return au[A] = e[t];
  return A;
}
var Mw = al("animationend"), Pw = al("animationiteration"), _w = al("animationstart"), Gw = al("transitionend"), Vw = /* @__PURE__ */ new Map(), ng = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ar(A, e) {
  Vw.set(A, e), _r(e, [A]);
}
for (var su = 0; su < ng.length; su++) {
  var lu = ng[su], Iy = lu.toLowerCase(), Hy = lu[0].toUpperCase() + lu.slice(1);
  ar(Iy, "on" + Hy);
}
ar(Mw, "onAnimationEnd");
ar(Pw, "onAnimationIteration");
ar(_w, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(Gw, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
_r("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_r("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_r("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_r("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_r("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
function ig(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, IQ(r, e, void 0, A), A.currentTarget = null;
}
function $w(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t], n = r.event;
    r = r.listeners;
    A: {
      var i = void 0;
      if (e) for (var o = r.length - 1; 0 <= o; o--) {
        var a = r[o], s = a.instance, l = a.currentTarget;
        if (a = a.listener, s !== i && n.isPropagationStopped()) break A;
        ig(n, a, l), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (a = r[o], s = a.instance, l = a.currentTarget, a = a.listener, s !== i && n.isPropagationStopped()) break A;
        ig(n, a, l), i = s;
      }
    }
  }
  if (ds) throw A = wc, ds = !1, wc = null, A;
}
function oA(A, e) {
  var t = e[Hc];
  t === void 0 && (t = e[Hc] = /* @__PURE__ */ new Set());
  var r = A + "__bubble";
  t.has(r) || (Ww(e, A, 2, !1), t.add(r));
}
function uu(A, e, t) {
  var r = 0;
  e && (r |= 4), Ww(t, A, r, e);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function to(A) {
  if (!A[Zo]) {
    A[Zo] = !0, qh.forEach(function(t) {
      t !== "selectionchange" && (xy.has(t) || uu(t, !1, A), uu(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Zo] || (e[Zo] = !0, uu("selectionchange", !1, e));
  }
}
function Ww(A, e, t, r) {
  switch (xw(e)) {
    case 1:
      var n = GQ;
      break;
    case 4:
      n = VQ;
      break;
    default:
      n = dd;
  }
  t = n.bind(null, e, t, A), n = void 0, !hc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), r ? n !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: n }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, { passive: n }) : A.addEventListener(e, t, !1);
}
function cu(A, e, t, r, n) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null) A: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var a = r.stateNode.containerInfo;
      if (a === n || a.nodeType === 8 && a.parentNode === n) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === n || s.nodeType === 8 && s.parentNode === n)) return;
        o = o.return;
      }
      for (; a !== null; ) {
        if (o = mr(a), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue A;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  gw(function() {
    var l = i, u = ld(t), c = [];
    A: {
      var f = Vw.get(A);
      if (f !== void 0) {
        var B = gd, p = A;
        switch (A) {
          case "keypress":
            if ($a(t) === 0) break A;
          case "keydown":
          case "keyup":
            B = iy;
            break;
          case "focusin":
            p = "focus", B = nu;
            break;
          case "focusout":
            p = "blur", B = nu;
            break;
          case "beforeblur":
          case "afterblur":
            B = nu;
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
            B = XB;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            B = XQ;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            B = sy;
            break;
          case Mw:
          case Pw:
          case _w:
            B = jQ;
            break;
          case Gw:
            B = uy;
            break;
          case "scroll":
            B = $Q;
            break;
          case "wheel":
            B = fy;
            break;
          case "copy":
          case "cut":
          case "paste":
            B = ZQ;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            B = zB;
        }
        var w = (e & 4) !== 0, y = !w && A === "scroll", g = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var d = l, h; d !== null; ) {
          h = d;
          var m = h.stateNode;
          if (h.tag === 5 && m !== null && (h = m, g !== null && (m = ji(d, g), m != null && w.push(ro(d, m, h)))), y) break;
          d = d.return;
        }
        0 < w.length && (f = new B(f, p, null, t, u), c.push({ event: f, listeners: w }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (f = A === "mouseover" || A === "pointerover", B = A === "mouseout" || A === "pointerout", f && t !== gc && (p = t.relatedTarget || t.fromElement) && (mr(p) || p[gt])) break A;
        if ((B || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, B ? (p = t.relatedTarget || t.toElement, B = l, p = p ? mr(p) : null, p !== null && (y = Gr(p), p !== y || p.tag !== 5 && p.tag !== 6) && (p = null)) : (B = null, p = l), B !== p)) {
          if (w = XB, m = "onMouseLeave", g = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (w = zB, m = "onPointerLeave", g = "onPointerEnter", d = "pointer"), y = B == null ? f : ln(B), h = p == null ? f : ln(p), f = new w(m, d + "leave", B, t, u), f.target = y, f.relatedTarget = h, m = null, mr(u) === l && (w = new w(g, d + "enter", p, t, u), w.target = h, w.relatedTarget = y, m = w), y = m, B && p) e: {
            for (w = B, g = p, d = 0, h = w; h; h = Wr(h)) d++;
            for (h = 0, m = g; m; m = Wr(m)) h++;
            for (; 0 < d - h; ) w = Wr(w), d--;
            for (; 0 < h - d; ) g = Wr(g), h--;
            for (; d--; ) {
              if (w === g || g !== null && w === g.alternate) break e;
              w = Wr(w), g = Wr(g);
            }
            w = null;
          }
          else w = null;
          B !== null && og(c, f, B, w, !1), p !== null && y !== null && og(c, y, p, w, !0);
        }
      }
      A: {
        if (f = l ? ln(l) : window, B = f.nodeName && f.nodeName.toLowerCase(), B === "select" || B === "input" && f.type === "file") var v = my;
        else if (ZB(f)) if (Ow) v = yy;
        else {
          v = Cy;
          var C = vy;
        }
        else (B = f.nodeName) && B.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (v = Qy);
        if (v && (v = v(A, l))) {
          kw(c, v, t, u);
          break A;
        }
        C && C(A, f, l), A === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && uc(f, "number", f.value);
      }
      switch (C = l ? ln(l) : window, A) {
        case "focusin":
          (ZB(C) || C.contentEditable === "true") && (an = C, Qc = l, Ti = null);
          break;
        case "focusout":
          Ti = Qc = an = null;
          break;
        case "mousedown":
          yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          yc = !1, rg(c, t, u);
          break;
        case "selectionchange":
          if (Ey) break;
        case "keydown":
        case "keyup":
          rg(c, t, u);
      }
      var F;
      if (hd) A: {
        switch (A) {
          case "compositionstart":
            var U = "onCompositionStart";
            break A;
          case "compositionend":
            U = "onCompositionEnd";
            break A;
          case "compositionupdate":
            U = "onCompositionUpdate";
            break A;
        }
        U = void 0;
      }
      else on ? bw(A, t) && (U = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
      U && (Lw && t.locale !== "ko" && (on || U !== "onCompositionStart" ? U === "onCompositionEnd" && on && (F = Sw()) : (Dt = u, Bd = "value" in Dt ? Dt.value : Dt.textContent, on = !0)), C = ws(l, U), 0 < C.length && (U = new YB(U, A, null, t, u), c.push({ event: U, listeners: C }), F ? U.data = F : (F = Tw(t), F !== null && (U.data = F)))), (F = By ? gy(A, t) : py(A, t)) && (l = ws(l, "onBeforeInput"), 0 < l.length && (u = new YB("onBeforeInput", "beforeinput", null, t, u), c.push({ event: u, listeners: l }), u.data = F));
    }
    $w(c, e);
  });
}
function ro(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function ws(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A, i = n.stateNode;
    n.tag === 5 && i !== null && (n = i, i = ji(A, t), i != null && r.unshift(ro(A, i, n)), i = ji(A, e), i != null && r.push(ro(A, i, n))), A = A.return;
  }
  return r;
}
function Wr(A) {
  if (A === null) return null;
  do
    A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function og(A, e, t, r, n) {
  for (var i = e._reactName, o = []; t !== null && t !== r; ) {
    var a = t, s = a.alternate, l = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 && l !== null && (a = l, n ? (s = ji(t, i), s != null && o.unshift(ro(t, s, a))) : n || (s = ji(t, i), s != null && o.push(ro(t, s, a)))), t = t.return;
  }
  o.length !== 0 && A.push({ event: e, listeners: o });
}
var Sy = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
function ag(A) {
  return (typeof A == "string" ? A : "" + A).replace(Sy, `
`).replace(Ly, "");
}
function qo(A, e, t) {
  if (e = ag(e), ag(A) !== e && t) throw Error(H(425));
}
function ms() {
}
var Fc = null, Uc = null;
function Ec(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ic = typeof setTimeout == "function" ? setTimeout : void 0, by = typeof clearTimeout == "function" ? clearTimeout : void 0, sg = typeof Promise == "function" ? Promise : void 0, Ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof sg < "u" ? function(A) {
  return sg.resolve(null).then(A).catch(ky);
} : Ic;
function ky(A) {
  setTimeout(function() {
    throw A;
  });
}
function fu(A, e) {
  var t = e, r = 0;
  do {
    var n = t.nextSibling;
    if (A.removeChild(t), n && n.nodeType === 8) if (t = n.data, t === "/$") {
      if (r === 0) {
        A.removeChild(n), qi(e);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = n;
  } while (t);
  qi(e);
}
function $t(A) {
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
function lg(A) {
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
var zn = Math.random().toString(36).slice(2), ze = "__reactFiber$" + zn, no = "__reactProps$" + zn, gt = "__reactContainer$" + zn, Hc = "__reactEvents$" + zn, Oy = "__reactListeners$" + zn, Dy = "__reactHandles$" + zn;
function mr(A) {
  var e = A[ze];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[gt] || t[ze]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (A = lg(A); A !== null; ) {
        if (t = A[ze]) return t;
        A = lg(A);
      }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function Ho(A) {
  return A = A[ze] || A[gt], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function ln(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(H(33));
}
function sl(A) {
  return A[no] || null;
}
var xc = [], un = -1;
function sr(A) {
  return { current: A };
}
function lA(A) {
  0 > un || (A.current = xc[un], xc[un] = null, un--);
}
function iA(A, e) {
  un++, xc[un] = A.current, A.current = e;
}
var qt = {}, WA = sr(qt), ie = sr(!1), kr = qt;
function bn(A, e) {
  var t = A.type.contextTypes;
  if (!t) return qt;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var n = {}, i;
  for (i in t) n[i] = e[i];
  return r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = n), n;
}
function oe(A) {
  return A = A.childContextTypes, A != null;
}
function vs() {
  lA(ie), lA(WA);
}
function ug(A, e, t) {
  if (WA.current !== qt) throw Error(H(168));
  iA(WA, e), iA(ie, t);
}
function Xw(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(H(108, vQ(A) || "Unknown", n));
  return mA({}, t, r);
}
function Cs(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || qt, kr = WA.current, iA(WA, A), iA(ie, ie.current), !0;
}
function cg(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(H(169));
  t ? (A = Xw(A, e, kr), r.__reactInternalMemoizedMergedChildContext = A, lA(ie), lA(WA), iA(WA, A)) : lA(ie), iA(ie, t);
}
var at = null, ll = !1, du = !1;
function Yw(A) {
  at === null ? at = [A] : at.push(A);
}
function Ky(A) {
  ll = !0, Yw(A);
}
function lr() {
  if (!du && at !== null) {
    du = !0;
    var A = 0, e = eA;
    try {
      var t = at;
      for (eA = 1; A < t.length; A++) {
        var r = t[A];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, ll = !1;
    } catch (n) {
      throw at !== null && (at = at.slice(A + 1)), mw(ud, lr), n;
    } finally {
      eA = e, du = !1;
    }
  }
  return null;
}
var cn = [], fn = 0, Qs = null, ys = 0, me = [], ve = 0, Or = null, lt = 1, ut = "";
function Br(A, e) {
  cn[fn++] = ys, cn[fn++] = Qs, Qs = A, ys = e;
}
function zw(A, e, t) {
  me[ve++] = lt, me[ve++] = ut, me[ve++] = Or, Or = A;
  var r = lt;
  A = ut;
  var n = 32 - Re(r) - 1;
  r &= ~(1 << n), t += 1;
  var i = 32 - Re(e) + n;
  if (30 < i) {
    var o = n - n % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, n -= o, lt = 1 << 32 - Re(e) + n | t << n | r, ut = i + A;
  } else lt = 1 << i | t << n | r, ut = A;
}
function md(A) {
  A.return !== null && (Br(A, 1), zw(A, 1, 0));
}
function vd(A) {
  for (; A === Qs; ) Qs = cn[--fn], cn[fn] = null, ys = cn[--fn], cn[fn] = null;
  for (; A === Or; ) Or = me[--ve], me[ve] = null, ut = me[--ve], me[ve] = null, lt = me[--ve], me[ve] = null;
}
var fe = null, ce = null, fA = !1, Oe = null;
function jw(A, e) {
  var t = Qe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function fg(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, fe = A, ce = $t(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, fe = A, ce = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Or !== null ? { id: lt, overflow: ut } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = Qe(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, fe = A, ce = null, !0) : !1;
    default:
      return !1;
  }
}
function Sc(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Lc(A) {
  if (fA) {
    var e = ce;
    if (e) {
      var t = e;
      if (!fg(A, e)) {
        if (Sc(A)) throw Error(H(418));
        e = $t(t.nextSibling);
        var r = fe;
        e && fg(A, e) ? jw(r, t) : (A.flags = A.flags & -4097 | 2, fA = !1, fe = A);
      }
    } else {
      if (Sc(A)) throw Error(H(418));
      A.flags = A.flags & -4097 | 2, fA = !1, fe = A;
    }
  }
}
function dg(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
  fe = A;
}
function Aa(A) {
  if (A !== fe) return !1;
  if (!fA) return dg(A), fA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Ec(A.type, A.memoizedProps)), e && (e = ce)) {
    if (Sc(A)) throw Jw(), Error(H(418));
    for (; e; ) jw(A, e), e = $t(e.nextSibling);
  }
  if (dg(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(H(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              ce = $t(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      ce = null;
    }
  } else ce = fe ? $t(A.stateNode.nextSibling) : null;
  return !0;
}
function Jw() {
  for (var A = ce; A; ) A = $t(A.nextSibling);
}
function Tn() {
  ce = fe = null, fA = !1;
}
function Cd(A) {
  Oe === null ? Oe = [A] : Oe.push(A);
}
var Ry = Qt.ReactCurrentBatchConfig;
function ai(A, e, t) {
  if (A = t.ref, A !== null && typeof A != "function" && typeof A != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(H(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(H(147, A));
      var n = r, i = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
        var a = n.refs;
        o === null ? delete a[i] : a[i] = o;
      }, e._stringRef = i, e);
    }
    if (typeof A != "string") throw Error(H(284));
    if (!t._owner) throw Error(H(290, A));
  }
  return A;
}
function ea(A, e) {
  throw A = Object.prototype.toString.call(e), Error(H(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function Bg(A) {
  var e = A._init;
  return e(A._payload);
}
function Zw(A) {
  function e(g, d) {
    if (A) {
      var h = g.deletions;
      h === null ? (g.deletions = [d], g.flags |= 16) : h.push(d);
    }
  }
  function t(g, d) {
    if (!A) return null;
    for (; d !== null; ) e(g, d), d = d.sibling;
    return null;
  }
  function r(g, d) {
    for (g = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? g.set(d.key, d) : g.set(d.index, d), d = d.sibling;
    return g;
  }
  function n(g, d) {
    return g = zt(g, d), g.index = 0, g.sibling = null, g;
  }
  function i(g, d, h) {
    return g.index = h, A ? (h = g.alternate, h !== null ? (h = h.index, h < d ? (g.flags |= 2, d) : h) : (g.flags |= 2, d)) : (g.flags |= 1048576, d);
  }
  function o(g) {
    return A && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, d, h, m) {
    return d === null || d.tag !== 6 ? (d = vu(h, g.mode, m), d.return = g, d) : (d = n(d, h), d.return = g, d);
  }
  function s(g, d, h, m) {
    var v = h.type;
    return v === nn ? u(g, d, h.props.children, m, h.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === St && Bg(v) === d.type) ? (m = n(d, h.props), m.ref = ai(g, d, h), m.return = g, m) : (m = Za(h.type, h.key, h.props, null, g.mode, m), m.ref = ai(g, d, h), m.return = g, m);
  }
  function l(g, d, h, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Cu(h, g.mode, m), d.return = g, d) : (d = n(d, h.children || []), d.return = g, d);
  }
  function u(g, d, h, m, v) {
    return d === null || d.tag !== 7 ? (d = Hr(h, g.mode, m, v), d.return = g, d) : (d = n(d, h), d.return = g, d);
  }
  function c(g, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = vu("" + d, g.mode, h), d.return = g, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Vo:
          return h = Za(d.type, d.key, d.props, null, g.mode, h), h.ref = ai(g, null, d), h.return = g, h;
        case rn:
          return d = Cu(d, g.mode, h), d.return = g, d;
        case St:
          var m = d._init;
          return c(g, m(d._payload), h);
      }
      if (pi(d) || ti(d)) return d = Hr(d, g.mode, h, null), d.return = g, d;
      ea(g, d);
    }
    return null;
  }
  function f(g, d, h, m) {
    var v = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return v !== null ? null : a(g, d, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Vo:
          return h.key === v ? s(g, d, h, m) : null;
        case rn:
          return h.key === v ? l(g, d, h, m) : null;
        case St:
          return v = h._init, f(
            g,
            d,
            v(h._payload),
            m
          );
      }
      if (pi(h) || ti(h)) return v !== null ? null : u(g, d, h, m, null);
      ea(g, h);
    }
    return null;
  }
  function B(g, d, h, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return g = g.get(h) || null, a(d, g, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Vo:
          return g = g.get(m.key === null ? h : m.key) || null, s(d, g, m, v);
        case rn:
          return g = g.get(m.key === null ? h : m.key) || null, l(d, g, m, v);
        case St:
          var C = m._init;
          return B(g, d, h, C(m._payload), v);
      }
      if (pi(m) || ti(m)) return g = g.get(h) || null, u(d, g, m, v, null);
      ea(d, m);
    }
    return null;
  }
  function p(g, d, h, m) {
    for (var v = null, C = null, F = d, U = d = 0, E = null; F !== null && U < h.length; U++) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var S = f(g, F, h[U], m);
      if (S === null) {
        F === null && (F = E);
        break;
      }
      A && F && S.alternate === null && e(g, F), d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S, F = E;
    }
    if (U === h.length) return t(g, F), fA && Br(g, U), v;
    if (F === null) {
      for (; U < h.length; U++) F = c(g, h[U], m), F !== null && (d = i(F, d, U), C === null ? v = F : C.sibling = F, C = F);
      return fA && Br(g, U), v;
    }
    for (F = r(g, F); U < h.length; U++) E = B(F, g, U, h[U], m), E !== null && (A && E.alternate !== null && F.delete(E.key === null ? U : E.key), d = i(E, d, U), C === null ? v = E : C.sibling = E, C = E);
    return A && F.forEach(function(P) {
      return e(g, P);
    }), fA && Br(g, U), v;
  }
  function w(g, d, h, m) {
    var v = ti(h);
    if (typeof v != "function") throw Error(H(150));
    if (h = v.call(h), h == null) throw Error(H(151));
    for (var C = v = null, F = d, U = d = 0, E = null, S = h.next(); F !== null && !S.done; U++, S = h.next()) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var P = f(g, F, S.value, m);
      if (P === null) {
        F === null && (F = E);
        break;
      }
      A && F && P.alternate === null && e(g, F), d = i(P, d, U), C === null ? v = P : C.sibling = P, C = P, F = E;
    }
    if (S.done) return t(
      g,
      F
    ), fA && Br(g, U), v;
    if (F === null) {
      for (; !S.done; U++, S = h.next()) S = c(g, S.value, m), S !== null && (d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S);
      return fA && Br(g, U), v;
    }
    for (F = r(g, F); !S.done; U++, S = h.next()) S = B(F, g, U, S.value, m), S !== null && (A && S.alternate !== null && F.delete(S.key === null ? U : S.key), d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S);
    return A && F.forEach(function(_) {
      return e(g, _);
    }), fA && Br(g, U), v;
  }
  function y(g, d, h, m) {
    if (typeof h == "object" && h !== null && h.type === nn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Vo:
          A: {
            for (var v = h.key, C = d; C !== null; ) {
              if (C.key === v) {
                if (v = h.type, v === nn) {
                  if (C.tag === 7) {
                    t(g, C.sibling), d = n(C, h.props.children), d.return = g, g = d;
                    break A;
                  }
                } else if (C.elementType === v || typeof v == "object" && v !== null && v.$$typeof === St && Bg(v) === C.type) {
                  t(g, C.sibling), d = n(C, h.props), d.ref = ai(g, C, h), d.return = g, g = d;
                  break A;
                }
                t(g, C);
                break;
              } else e(g, C);
              C = C.sibling;
            }
            h.type === nn ? (d = Hr(h.props.children, g.mode, m, h.key), d.return = g, g = d) : (m = Za(h.type, h.key, h.props, null, g.mode, m), m.ref = ai(g, d, h), m.return = g, g = m);
          }
          return o(g);
        case rn:
          A: {
            for (C = h.key; d !== null; ) {
              if (d.key === C) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                t(g, d.sibling), d = n(d, h.children || []), d.return = g, g = d;
                break A;
              } else {
                t(g, d);
                break;
              }
              else e(g, d);
              d = d.sibling;
            }
            d = Cu(h, g.mode, m), d.return = g, g = d;
          }
          return o(g);
        case St:
          return C = h._init, y(g, d, C(h._payload), m);
      }
      if (pi(h)) return p(g, d, h, m);
      if (ti(h)) return w(g, d, h, m);
      ea(g, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (t(g, d.sibling), d = n(d, h), d.return = g, g = d) : (t(g, d), d = vu(h, g.mode, m), d.return = g, g = d), o(g)) : t(g, d);
  }
  return y;
}
var kn = Zw(!0), qw = Zw(!1), Fs = sr(null), Us = null, dn = null, Qd = null;
function yd() {
  Qd = dn = Us = null;
}
function Fd(A) {
  var e = Fs.current;
  lA(Fs), A._currentValue = e;
}
function bc(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function Un(A, e) {
  Us = A, Qd = dn = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (te = !0), A.firstContext = null);
}
function Ee(A) {
  var e = A._currentValue;
  if (Qd !== A) if (A = { context: A, memoizedValue: e, next: null }, dn === null) {
    if (Us === null) throw Error(H(308));
    dn = A, Us.dependencies = { lanes: 0, firstContext: A };
  } else dn = dn.next = A;
  return e;
}
var vr = null;
function Ud(A) {
  vr === null ? vr = [A] : vr.push(A);
}
function Am(A, e, t, r) {
  var n = e.interleaved;
  return n === null ? (t.next = t, Ud(e)) : (t.next = n.next, n.next = t), e.interleaved = t, pt(A, r);
}
function pt(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; ) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Lt = !1;
function Ed(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function em(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function ct(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Wt(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var n = r.pending;
    return n === null ? e.next = e : (e.next = n.next, n.next = e), r.pending = e, pt(A, t);
  }
  return n = r.interleaved, n === null ? (e.next = e, Ud(r)) : (e.next = n.next, n.next = e), r.interleaved = e, pt(A, t);
}
function Wa(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, cd(A, t);
  }
}
function gg(A, e) {
  var t = A.updateQueue, r = A.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var n = null, i = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        i === null ? n = i = o : i = i.next = o, t = t.next;
      } while (t !== null);
      i === null ? n = i = e : i = i.next = e;
    } else n = i = e;
    t = { baseState: r.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function Es(A, e, t, r) {
  var n = A.updateQueue;
  Lt = !1;
  var i = n.firstBaseUpdate, o = n.lastBaseUpdate, a = n.shared.pending;
  if (a !== null) {
    n.shared.pending = null;
    var s = a, l = s.next;
    s.next = null, o === null ? i = l : o.next = l, o = s;
    var u = A.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== o && (a === null ? u.firstBaseUpdate = l : a.next = l, u.lastBaseUpdate = s));
  }
  if (i !== null) {
    var c = n.baseState;
    o = 0, u = l = s = null, a = i;
    do {
      var f = a.lane, B = a.eventTime;
      if ((r & f) === f) {
        u !== null && (u = u.next = {
          eventTime: B,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        A: {
          var p = A, w = a;
          switch (f = e, B = t, w.tag) {
            case 1:
              if (p = w.payload, typeof p == "function") {
                c = p.call(B, c, f);
                break A;
              }
              c = p;
              break A;
            case 3:
              p.flags = p.flags & -65537 | 128;
            case 0:
              if (p = w.payload, f = typeof p == "function" ? p.call(B, c, f) : p, f == null) break A;
              c = mA({}, c, f);
              break A;
            case 2:
              Lt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (A.flags |= 64, f = n.effects, f === null ? n.effects = [a] : f.push(a));
      } else B = { eventTime: B, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (l = u = B, s = c) : u = u.next = B, o |= f;
      if (a = a.next, a === null) {
        if (a = n.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, n.lastBaseUpdate = f, n.shared.pending = null;
      }
    } while (!0);
    if (u === null && (s = c), n.baseState = s, n.firstBaseUpdate = l, n.lastBaseUpdate = u, e = n.shared.interleaved, e !== null) {
      n = e;
      do
        o |= n.lane, n = n.next;
      while (n !== e);
    } else i === null && (n.shared.lanes = 0);
    Kr |= o, A.lanes = o, A.memoizedState = c;
  }
}
function pg(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var r = A[e], n = r.callback;
    if (n !== null) {
      if (r.callback = null, r = t, typeof n != "function") throw Error(H(191, n));
      n.call(r);
    }
  }
}
var xo = {}, Ze = sr(xo), io = sr(xo), oo = sr(xo);
function Cr(A) {
  if (A === xo) throw Error(H(174));
  return A;
}
function Id(A, e) {
  switch (iA(oo, e), iA(io, A), iA(Ze, xo), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : fc(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = fc(e, A);
  }
  lA(Ze), iA(Ze, e);
}
function On() {
  lA(Ze), lA(io), lA(oo);
}
function tm(A) {
  Cr(oo.current);
  var e = Cr(Ze.current), t = fc(e, A.type);
  e !== t && (iA(io, A), iA(Ze, t));
}
function Hd(A) {
  io.current === A && (lA(Ze), lA(io));
}
var pA = sr(0);
function Is(A) {
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
var Bu = [];
function xd() {
  for (var A = 0; A < Bu.length; A++) Bu[A]._workInProgressVersionPrimary = null;
  Bu.length = 0;
}
var Xa = Qt.ReactCurrentDispatcher, gu = Qt.ReactCurrentBatchConfig, Dr = 0, wA = null, HA = null, TA = null, Hs = !1, ki = !1, ao = 0, Ny = 0;
function PA() {
  throw Error(H(321));
}
function Sd(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!Pe(A[t], e[t])) return !1;
  return !0;
}
function Ld(A, e, t, r, n, i) {
  if (Dr = i, wA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Xa.current = A === null || A.memoizedState === null ? Gy : Vy, A = t(r, n), ki) {
    i = 0;
    do {
      if (ki = !1, ao = 0, 25 <= i) throw Error(H(301));
      i += 1, TA = HA = null, e.updateQueue = null, Xa.current = $y, A = t(r, n);
    } while (ki);
  }
  if (Xa.current = xs, e = HA !== null && HA.next !== null, Dr = 0, TA = HA = wA = null, Hs = !1, e) throw Error(H(300));
  return A;
}
function bd() {
  var A = ao !== 0;
  return ao = 0, A;
}
function We() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return TA === null ? wA.memoizedState = TA = A : TA = TA.next = A, TA;
}
function Ie() {
  if (HA === null) {
    var A = wA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = HA.next;
  var e = TA === null ? wA.memoizedState : TA.next;
  if (e !== null) TA = e, HA = A;
  else {
    if (A === null) throw Error(H(310));
    HA = A, A = { memoizedState: HA.memoizedState, baseState: HA.baseState, baseQueue: HA.baseQueue, queue: HA.queue, next: null }, TA === null ? wA.memoizedState = TA = A : TA = TA.next = A;
  }
  return TA;
}
function so(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function pu(A) {
  var e = Ie(), t = e.queue;
  if (t === null) throw Error(H(311));
  t.lastRenderedReducer = A;
  var r = HA, n = r.baseQueue, i = t.pending;
  if (i !== null) {
    if (n !== null) {
      var o = n.next;
      n.next = i.next, i.next = o;
    }
    r.baseQueue = n = i, t.pending = null;
  }
  if (n !== null) {
    i = n.next, r = r.baseState;
    var a = o = null, s = null, l = i;
    do {
      var u = l.lane;
      if ((Dr & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), r = l.hasEagerState ? l.eagerState : A(r, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (a = s = c, o = r) : s = s.next = c, wA.lanes |= u, Kr |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? o = r : s.next = a, Pe(r, e.memoizedState) || (te = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = s, t.lastRenderedState = r;
  }
  if (A = t.interleaved, A !== null) {
    n = A;
    do
      i = n.lane, wA.lanes |= i, Kr |= i, n = n.next;
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function hu(A) {
  var e = Ie(), t = e.queue;
  if (t === null) throw Error(H(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch, n = t.pending, i = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var o = n = n.next;
    do
      i = A(i, o.action), o = o.next;
    while (o !== n);
    Pe(i, e.memoizedState) || (te = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function rm() {
}
function nm(A, e) {
  var t = wA, r = Ie(), n = e(), i = !Pe(r.memoizedState, n);
  if (i && (r.memoizedState = n, te = !0), r = r.queue, Td(am.bind(null, t, r, A), [A]), r.getSnapshot !== e || i || TA !== null && TA.memoizedState.tag & 1) {
    if (t.flags |= 2048, lo(9, om.bind(null, t, r, n, e), void 0, null), OA === null) throw Error(H(349));
    Dr & 30 || im(t, e, n);
  }
  return n;
}
function im(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function om(A, e, t, r) {
  e.value = t, e.getSnapshot = r, sm(e) && lm(A);
}
function am(A, e, t) {
  return t(function() {
    sm(e) && lm(A);
  });
}
function sm(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !Pe(A, t);
  } catch {
    return !0;
  }
}
function lm(A) {
  var e = pt(A, 1);
  e !== null && Ne(e, A, 1, -1);
}
function hg(A) {
  var e = We();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: so, lastRenderedState: A }, e.queue = A, A = A.dispatch = _y.bind(null, wA, A), [e.memoizedState, A];
}
function lo(A, e, t, r) {
  return A = { tag: A, create: e, destroy: t, deps: r, next: null }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function um() {
  return Ie().memoizedState;
}
function Ya(A, e, t, r) {
  var n = We();
  wA.flags |= A, n.memoizedState = lo(1 | e, t, void 0, r === void 0 ? null : r);
}
function ul(A, e, t, r) {
  var n = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (HA !== null) {
    var o = HA.memoizedState;
    if (i = o.destroy, r !== null && Sd(r, o.deps)) {
      n.memoizedState = lo(e, t, i, r);
      return;
    }
  }
  wA.flags |= A, n.memoizedState = lo(1 | e, t, i, r);
}
function wg(A, e) {
  return Ya(8390656, 8, A, e);
}
function Td(A, e) {
  return ul(2048, 8, A, e);
}
function cm(A, e) {
  return ul(4, 2, A, e);
}
function fm(A, e) {
  return ul(4, 4, A, e);
}
function dm(A, e) {
  if (typeof e == "function") return A = A(), e(A), function() {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function() {
    e.current = null;
  };
}
function Bm(A, e, t) {
  return t = t != null ? t.concat([A]) : null, ul(4, 4, dm.bind(null, e, A), t);
}
function kd() {
}
function gm(A, e) {
  var t = Ie();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Sd(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function pm(A, e) {
  var t = Ie();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Sd(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function hm(A, e, t) {
  return Dr & 21 ? (Pe(t, e) || (t = Qw(), wA.lanes |= t, Kr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, te = !0), A.memoizedState = t);
}
function My(A, e) {
  var t = eA;
  eA = t !== 0 && 4 > t ? t : 4, A(!0);
  var r = gu.transition;
  gu.transition = {};
  try {
    A(!1), e();
  } finally {
    eA = t, gu.transition = r;
  }
}
function wm() {
  return Ie().memoizedState;
}
function Py(A, e, t) {
  var r = Yt(A);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, mm(A)) vm(e, t);
  else if (t = Am(A, e, t, r), t !== null) {
    var n = jA();
    Ne(t, A, r, n), Cm(t, e, r);
  }
}
function _y(A, e, t) {
  var r = Yt(A), n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (mm(A)) vm(e, n);
  else {
    var i = A.alternate;
    if (A.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
      var o = e.lastRenderedState, a = i(o, t);
      if (n.hasEagerState = !0, n.eagerState = a, Pe(a, o)) {
        var s = e.interleaved;
        s === null ? (n.next = n, Ud(e)) : (n.next = s.next, s.next = n), e.interleaved = n;
        return;
      }
    } catch {
    } finally {
    }
    t = Am(A, e, n, r), t !== null && (n = jA(), Ne(t, A, r, n), Cm(t, e, r));
  }
}
function mm(A) {
  var e = A.alternate;
  return A === wA || e !== null && e === wA;
}
function vm(A, e) {
  ki = Hs = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Cm(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, cd(A, t);
  }
}
var xs = { readContext: Ee, useCallback: PA, useContext: PA, useEffect: PA, useImperativeHandle: PA, useInsertionEffect: PA, useLayoutEffect: PA, useMemo: PA, useReducer: PA, useRef: PA, useState: PA, useDebugValue: PA, useDeferredValue: PA, useTransition: PA, useMutableSource: PA, useSyncExternalStore: PA, useId: PA, unstable_isNewReconciler: !1 }, Gy = { readContext: Ee, useCallback: function(A, e) {
  return We().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: Ee, useEffect: wg, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, Ya(
    4194308,
    4,
    dm.bind(null, e, A),
    t
  );
}, useLayoutEffect: function(A, e) {
  return Ya(4194308, 4, A, e);
}, useInsertionEffect: function(A, e) {
  return Ya(4, 2, A, e);
}, useMemo: function(A, e) {
  var t = We();
  return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
}, useReducer: function(A, e, t) {
  var r = We();
  return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, r.queue = A, A = A.dispatch = Py.bind(null, wA, A), [r.memoizedState, A];
}, useRef: function(A) {
  var e = We();
  return A = { current: A }, e.memoizedState = A;
}, useState: hg, useDebugValue: kd, useDeferredValue: function(A) {
  return We().memoizedState = A;
}, useTransition: function() {
  var A = hg(!1), e = A[0];
  return A = My.bind(null, A[1]), We().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var r = wA, n = We();
  if (fA) {
    if (t === void 0) throw Error(H(407));
    t = t();
  } else {
    if (t = e(), OA === null) throw Error(H(349));
    Dr & 30 || im(r, e, t);
  }
  n.memoizedState = t;
  var i = { value: t, getSnapshot: e };
  return n.queue = i, wg(am.bind(
    null,
    r,
    i,
    A
  ), [A]), r.flags |= 2048, lo(9, om.bind(null, r, i, t, e), void 0, null), t;
}, useId: function() {
  var A = We(), e = OA.identifierPrefix;
  if (fA) {
    var t = ut, r = lt;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = ao++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = Ny++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Vy = {
  readContext: Ee,
  useCallback: gm,
  useContext: Ee,
  useEffect: Td,
  useImperativeHandle: Bm,
  useInsertionEffect: cm,
  useLayoutEffect: fm,
  useMemo: pm,
  useReducer: pu,
  useRef: um,
  useState: function() {
    return pu(so);
  },
  useDebugValue: kd,
  useDeferredValue: function(A) {
    var e = Ie();
    return hm(e, HA.memoizedState, A);
  },
  useTransition: function() {
    var A = pu(so)[0], e = Ie().memoizedState;
    return [A, e];
  },
  useMutableSource: rm,
  useSyncExternalStore: nm,
  useId: wm,
  unstable_isNewReconciler: !1
}, $y = { readContext: Ee, useCallback: gm, useContext: Ee, useEffect: Td, useImperativeHandle: Bm, useInsertionEffect: cm, useLayoutEffect: fm, useMemo: pm, useReducer: hu, useRef: um, useState: function() {
  return hu(so);
}, useDebugValue: kd, useDeferredValue: function(A) {
  var e = Ie();
  return HA === null ? e.memoizedState = A : hm(e, HA.memoizedState, A);
}, useTransition: function() {
  var A = hu(so)[0], e = Ie().memoizedState;
  return [A, e];
}, useMutableSource: rm, useSyncExternalStore: nm, useId: wm, unstable_isNewReconciler: !1 };
function Te(A, e) {
  if (A && A.defaultProps) {
    e = mA({}, e), A = A.defaultProps;
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function Tc(A, e, t, r) {
  e = A.memoizedState, t = t(r, e), t = t == null ? e : mA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var cl = { isMounted: function(A) {
  return (A = A._reactInternals) ? Gr(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var r = jA(), n = Yt(A), i = ct(r, n);
  i.payload = e, t != null && (i.callback = t), e = Wt(A, i, n), e !== null && (Ne(e, A, n, r), Wa(e, A, n));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var r = jA(), n = Yt(A), i = ct(r, n);
  i.tag = 1, i.payload = e, t != null && (i.callback = t), e = Wt(A, i, n), e !== null && (Ne(e, A, n, r), Wa(e, A, n));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = jA(), r = Yt(A), n = ct(t, r);
  n.tag = 2, e != null && (n.callback = e), e = Wt(A, n, r), e !== null && (Ne(e, A, r, t), Wa(e, A, r));
} };
function mg(A, e, t, r, n, i, o) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !eo(t, r) || !eo(n, i) : !0;
}
function Qm(A, e, t) {
  var r = !1, n = qt, i = e.contextType;
  return typeof i == "object" && i !== null ? i = Ee(i) : (n = oe(e) ? kr : WA.current, r = e.contextTypes, i = (r = r != null) ? bn(A, n) : qt), e = new e(t, i), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = cl, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = i), e;
}
function vg(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && cl.enqueueReplaceState(e, e.state, null);
}
function kc(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = {}, Ed(A);
  var i = e.contextType;
  typeof i == "object" && i !== null ? n.context = Ee(i) : (i = oe(e) ? kr : WA.current, n.context = bn(A, i)), n.state = A.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Tc(A, e, i, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && cl.enqueueReplaceState(n, n.state, null), Es(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function Dn(A, e) {
  try {
    var t = "", r = e;
    do
      t += mQ(r), r = r.return;
    while (r);
    var n = t;
  } catch (i) {
    n = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function wu(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function Oc(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Wy = typeof WeakMap == "function" ? WeakMap : Map;
function ym(A, e, t) {
  t = ct(-1, t), t.tag = 3, t.payload = { element: null };
  var r = e.value;
  return t.callback = function() {
    Ls || (Ls = !0, $c = r), Oc(A, e);
  }, t;
}
function Fm(A, e, t) {
  t = ct(-1, t), t.tag = 3;
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    t.payload = function() {
      return r(n);
    }, t.callback = function() {
      Oc(A, e);
    };
  }
  var i = A.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
    Oc(A, e), typeof r != "function" && (Xt === null ? Xt = /* @__PURE__ */ new Set([this]) : Xt.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Cg(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new Wy();
    var n = /* @__PURE__ */ new Set();
    r.set(e, n);
  } else n = r.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = oF.bind(null, A, e, t), e.then(A, A));
}
function Qg(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function yg(A, e, t, r, n) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = n, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = ct(-1, 1), e.tag = 2, Wt(t, e, 1))), t.lanes |= 1), A);
}
var Xy = Qt.ReactCurrentOwner, te = !1;
function zA(A, e, t, r) {
  e.child = A === null ? qw(e, null, t, r) : kn(e, A.child, t, r);
}
function Fg(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return Un(e, n), r = Ld(A, e, t, r, i, n), t = bd(), A !== null && !te ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, ht(A, e, n)) : (fA && t && md(e), e.flags |= 1, zA(A, e, r, n), e.child);
}
function Ug(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" && !_d(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = i, Um(A, e, i, r, n)) : (A = Za(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (i = A.child, !(A.lanes & n)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : eo, t(o, r) && A.ref === e.ref) return ht(A, e, n);
  }
  return e.flags |= 1, A = zt(i, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Um(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (eo(i, r) && A.ref === e.ref) if (te = !1, e.pendingProps = r = i, (A.lanes & n) !== 0) A.flags & 131072 && (te = !0);
    else return e.lanes = A.lanes, ht(A, e, n);
  }
  return Dc(A, e, t, r, n);
}
function Em(A, e, t) {
  var r = e.pendingProps, n = r.children, i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, iA(gn, ue), ue |= t;
  else {
    if (!(t & 1073741824)) return A = i !== null ? i.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, iA(gn, ue), ue |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, iA(gn, ue), ue |= r;
  }
  else i !== null ? (r = i.baseLanes | t, e.memoizedState = null) : r = t, iA(gn, ue), ue |= r;
  return zA(A, e, n, t), e.child;
}
function Im(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Dc(A, e, t, r, n) {
  var i = oe(t) ? kr : WA.current;
  return i = bn(e, i), Un(e, n), t = Ld(A, e, t, r, i, n), r = bd(), A !== null && !te ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, ht(A, e, n)) : (fA && r && md(e), e.flags |= 1, zA(A, e, t, n), e.child);
}
function Eg(A, e, t, r, n) {
  if (oe(t)) {
    var i = !0;
    Cs(e);
  } else i = !1;
  if (Un(e, n), e.stateNode === null) za(A, e), Qm(e, t, r), kc(e, t, r, n), r = !0;
  else if (A === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var s = o.context, l = t.contextType;
    typeof l == "object" && l !== null ? l = Ee(l) : (l = oe(t) ? kr : WA.current, l = bn(e, l));
    var u = t.getDerivedStateFromProps, c = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== l) && vg(e, o, r, l), Lt = !1;
    var f = e.memoizedState;
    o.state = f, Es(e, r, o, n), s = e.memoizedState, a !== r || f !== s || ie.current || Lt ? (typeof u == "function" && (Tc(e, t, u, r), s = e.memoizedState), (a = Lt || mg(e, t, a, r, f, s, l)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = s), o.props = r, o.state = s, o.context = l, r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    o = e.stateNode, em(A, e), a = e.memoizedProps, l = e.type === e.elementType ? a : Te(e.type, a), o.props = l, c = e.pendingProps, f = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ee(s) : (s = oe(t) ? kr : WA.current, s = bn(e, s));
    var B = t.getDerivedStateFromProps;
    (u = typeof B == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || f !== s) && vg(e, o, r, s), Lt = !1, f = e.memoizedState, o.state = f, Es(e, r, o, n);
    var p = e.memoizedState;
    a !== c || f !== p || ie.current || Lt ? (typeof B == "function" && (Tc(e, t, B, r), p = e.memoizedState), (l = Lt || mg(e, t, l, r, f, p, s) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, p, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, p, s)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = p), o.props = r, o.state = p, o.context = s, r = l) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Kc(A, e, t, r, i, n);
}
function Kc(A, e, t, r, n, i) {
  Im(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && cg(e, t, !1), ht(A, e, i);
  r = e.stateNode, Xy.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && o ? (e.child = kn(e, A.child, null, i), e.child = kn(e, null, a, i)) : zA(A, e, a, i), e.memoizedState = r.state, n && cg(e, t, !0), e.child;
}
function Hm(A) {
  var e = A.stateNode;
  e.pendingContext ? ug(A, e.pendingContext, e.pendingContext !== e.context) : e.context && ug(A, e.context, !1), Id(A, e.containerInfo);
}
function Ig(A, e, t, r, n) {
  return Tn(), Cd(n), e.flags |= 256, zA(A, e, t, r), e.child;
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nc(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function xm(A, e, t) {
  var r = e.pendingProps, n = pA.current, i = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), a ? (i = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), iA(pA, n & 1), A === null)
    return Lc(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = r.children, A = r.fallback, i ? (r = e.mode, i = e.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Bl(o, r, 0, null), A = Hr(A, r, t, null), i.return = e, A.return = e, i.sibling = A, e.child = i, e.child.memoizedState = Nc(t), e.memoizedState = Rc, A) : Od(e, o));
  if (n = A.memoizedState, n !== null && (a = n.dehydrated, a !== null)) return Yy(A, e, o, r, a, n, t);
  if (i) {
    i = r.fallback, o = e.mode, n = A.child, a = n.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && e.child !== n ? (r = e.child, r.childLanes = 0, r.pendingProps = s, e.deletions = null) : (r = zt(n, s), r.subtreeFlags = n.subtreeFlags & 14680064), a !== null ? i = zt(a, i) : (i = Hr(i, o, t, null), i.flags |= 2), i.return = e, r.return = e, r.sibling = i, e.child = r, r = i, i = e.child, o = A.child.memoizedState, o = o === null ? Nc(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = A.childLanes & ~t, e.memoizedState = Rc, r;
  }
  return i = A.child, A = i.sibling, r = zt(i, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = t), r.return = e, r.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = r, e.memoizedState = null, r;
}
function Od(A, e) {
  return e = Bl({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function ta(A, e, t, r) {
  return r !== null && Cd(r), kn(e, A.child, null, t), A = Od(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function Yy(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, r = wu(Error(H(422))), ta(A, e, o, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (i = r.fallback, n = e.mode, r = Bl({ mode: "visible", children: r.children }, n, 0, null), i = Hr(i, n, o, null), i.flags |= 2, r.return = e, i.return = e, r.sibling = i, e.child = r, e.mode & 1 && kn(e, A.child, null, o), e.child.memoizedState = Nc(o), e.memoizedState = Rc, i);
  if (!(e.mode & 1)) return ta(A, e, o, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(H(419)), r = wu(i, r, void 0), ta(A, e, o, r);
  }
  if (a = (o & A.childLanes) !== 0, te || a) {
    if (r = OA, r !== null) {
      switch (o & -o) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
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
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      n = n & (r.suspendedLanes | o) ? 0 : n, n !== 0 && n !== i.retryLane && (i.retryLane = n, pt(A, n), Ne(r, A, n, -1));
    }
    return Pd(), r = wu(Error(H(421))), ta(A, e, o, r);
  }
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = aF.bind(null, A), n._reactRetry = e, null) : (A = i.treeContext, ce = $t(n.nextSibling), fe = e, fA = !0, Oe = null, A !== null && (me[ve++] = lt, me[ve++] = ut, me[ve++] = Or, lt = A.id, ut = A.overflow, Or = e), e = Od(e, r.children), e.flags |= 4096, e);
}
function Hg(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), bc(A.return, e, t);
}
function mu(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: n } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = n);
}
function Sm(A, e, t) {
  var r = e.pendingProps, n = r.revealOrder, i = r.tail;
  if (zA(A, e, r.children, t), r = pA.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (A !== null && A.flags & 128) A: for (A = e.child; A !== null; ) {
      if (A.tag === 13) A.memoizedState !== null && Hg(A, t, e);
      else if (A.tag === 19) Hg(A, t, e);
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
    r &= 1;
  }
  if (iA(pA, r), !(e.mode & 1)) e.memoizedState = null;
  else switch (n) {
    case "forwards":
      for (t = e.child, n = null; t !== null; ) A = t.alternate, A !== null && Is(A) === null && (n = t), t = t.sibling;
      t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), mu(e, !1, n, t, i);
      break;
    case "backwards":
      for (t = null, n = e.child, e.child = null; n !== null; ) {
        if (A = n.alternate, A !== null && Is(A) === null) {
          e.child = n;
          break;
        }
        A = n.sibling, n.sibling = t, t = n, n = A;
      }
      mu(e, !0, t, null, i);
      break;
    case "together":
      mu(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function za(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function ht(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Kr |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error(H(153));
  if (e.child !== null) {
    for (A = e.child, t = zt(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; ) A = A.sibling, t = t.sibling = zt(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function zy(A, e, t) {
  switch (e.tag) {
    case 3:
      Hm(e), Tn();
      break;
    case 5:
      tm(e);
      break;
    case 1:
      oe(e.type) && Cs(e);
      break;
    case 4:
      Id(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, n = e.memoizedProps.value;
      iA(Fs, r._currentValue), r._currentValue = n;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (iA(pA, pA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? xm(A, e, t) : (iA(pA, pA.current & 1), A = ht(A, e, t), A !== null ? A.sibling : null);
      iA(pA, pA.current & 1);
      break;
    case 19:
      if (r = (t & e.childLanes) !== 0, A.flags & 128) {
        if (r) return Sm(A, e, t);
        e.flags |= 128;
      }
      if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), iA(pA, pA.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Em(A, e, t);
  }
  return ht(A, e, t);
}
var Lm, Mc, bm, Tm;
Lm = function(A, e) {
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
Mc = function() {
};
bm = function(A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    A = e.stateNode, Cr(Ze.current);
    var i = null;
    switch (t) {
      case "input":
        n = sc(A, n), r = sc(A, r), i = [];
        break;
      case "select":
        n = mA({}, n, { value: void 0 }), r = mA({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        n = cc(A, n), r = cc(A, r), i = [];
        break;
      default:
        typeof n.onClick != "function" && typeof r.onClick == "function" && (A.onclick = ms);
    }
    dc(t, r);
    var o;
    t = null;
    for (l in n) if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null) if (l === "style") {
      var a = n[l];
      for (o in a) a.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
    } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Yi.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in r) {
      var s = r[l];
      if (a = n != null ? n[l] : void 0, r.hasOwnProperty(l) && s !== a && (s != null || a != null)) if (l === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
        for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
      } else t || (i || (i = []), i.push(
        l,
        t
      )), t = s;
      else l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(l, s)) : l === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(l, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Yi.hasOwnProperty(l) ? (s != null && l === "onScroll" && oA("scroll", A), i || a === s || (i = [])) : (i = i || []).push(l, s));
    }
    t && (i = i || []).push("style", t);
    var l = i;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
Tm = function(A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function si(A, e) {
  if (!fA) switch (A.tailMode) {
    case "hidden":
      e = A.tail;
      for (var t = null; e !== null; ) e.alternate !== null && (t = e), e = e.sibling;
      t === null ? A.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = A.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : r.sibling = null;
  }
}
function _A(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, r = 0;
  if (e) for (var n = A.child; n !== null; ) t |= n.lanes | n.childLanes, r |= n.subtreeFlags & 14680064, r |= n.flags & 14680064, n.return = A, n = n.sibling;
  else for (n = A.child; n !== null; ) t |= n.lanes | n.childLanes, r |= n.subtreeFlags, r |= n.flags, n.return = A, n = n.sibling;
  return A.subtreeFlags |= r, A.childLanes = t, e;
}
function jy(A, e, t) {
  var r = e.pendingProps;
  switch (vd(e), e.tag) {
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
      return _A(e), null;
    case 1:
      return oe(e.type) && vs(), _A(e), null;
    case 3:
      return r = e.stateNode, On(), lA(ie), lA(WA), xd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (Aa(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Oe !== null && (Yc(Oe), Oe = null))), Mc(A, e), _A(e), null;
    case 5:
      Hd(e);
      var n = Cr(oo.current);
      if (t = e.type, A !== null && e.stateNode != null) bm(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(H(166));
          return _A(e), null;
        }
        if (A = Cr(Ze.current), Aa(e)) {
          r = e.stateNode, t = e.type;
          var i = e.memoizedProps;
          switch (r[ze] = e, r[no] = i, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              oA("cancel", r), oA("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oA("load", r);
              break;
            case "video":
            case "audio":
              for (n = 0; n < wi.length; n++) oA(wi[n], r);
              break;
            case "source":
              oA("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oA(
                "error",
                r
              ), oA("load", r);
              break;
            case "details":
              oA("toggle", r);
              break;
            case "input":
              KB(r, i), oA("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oA("invalid", r);
              break;
            case "textarea":
              NB(r, i), oA("invalid", r);
          }
          dc(t, i), n = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var a = i[o];
            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && qo(r.textContent, a, A), n = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && qo(
              r.textContent,
              a,
              A
            ), n = ["children", "" + a]) : Yi.hasOwnProperty(o) && a != null && o === "onScroll" && oA("scroll", r);
          }
          switch (t) {
            case "input":
              $o(r), RB(r, i, !0);
              break;
            case "textarea":
              $o(r), MB(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ms);
          }
          r = n, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          o = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = aw(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = o.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = o.createElement(t, { is: r.is }) : (A = o.createElement(t), t === "select" && (o = A, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : A = o.createElementNS(A, t), A[ze] = e, A[no] = r, Lm(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (o = Bc(t, r), t) {
              case "dialog":
                oA("cancel", A), oA("close", A), n = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oA("load", A), n = r;
                break;
              case "video":
              case "audio":
                for (n = 0; n < wi.length; n++) oA(wi[n], A);
                n = r;
                break;
              case "source":
                oA("error", A), n = r;
                break;
              case "img":
              case "image":
              case "link":
                oA(
                  "error",
                  A
                ), oA("load", A), n = r;
                break;
              case "details":
                oA("toggle", A), n = r;
                break;
              case "input":
                KB(A, r), n = sc(A, r), oA("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!r.multiple }, n = mA({}, r, { value: void 0 }), oA("invalid", A);
                break;
              case "textarea":
                NB(A, r), n = cc(A, r), oA("invalid", A);
                break;
              default:
                n = r;
            }
            dc(t, n), a = n;
            for (i in a) if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "style" ? uw(A, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && sw(A, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && zi(A, s) : typeof s == "number" && zi(A, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Yi.hasOwnProperty(i) ? s != null && i === "onScroll" && oA("scroll", A) : s != null && id(A, i, s, o));
            }
            switch (t) {
              case "input":
                $o(A), RB(A, r, !1);
                break;
              case "textarea":
                $o(A), MB(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                A.multiple = !!r.multiple, i = r.value, i != null ? Cn(A, !!r.multiple, i, !1) : r.defaultValue != null && Cn(
                  A,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = ms);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break A;
              case "img":
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return _A(e), null;
    case 6:
      if (A && e.stateNode != null) Tm(A, e, A.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(H(166));
        if (t = Cr(oo.current), Cr(Ze.current), Aa(e)) {
          if (r = e.stateNode, t = e.memoizedProps, r[ze] = e, (i = r.nodeValue !== t) && (A = fe, A !== null)) switch (A.tag) {
            case 3:
              qo(r.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && qo(r.nodeValue, t, (A.mode & 1) !== 0);
          }
          i && (e.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[ze] = e, e.stateNode = r;
      }
      return _A(e), null;
    case 13:
      if (lA(pA), r = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (fA && ce !== null && e.mode & 1 && !(e.flags & 128)) Jw(), Tn(), e.flags |= 98560, i = !1;
        else if (i = Aa(e), r !== null && r.dehydrated !== null) {
          if (A === null) {
            if (!i) throw Error(H(318));
            if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[ze] = e;
          } else Tn(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          _A(e), i = !1;
        } else Oe !== null && (Yc(Oe), Oe = null), i = !0;
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (r = r !== null, r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (A === null || pA.current & 1 ? SA === 0 && (SA = 3) : Pd())), e.updateQueue !== null && (e.flags |= 4), _A(e), null);
    case 4:
      return On(), Mc(A, e), A === null && to(e.stateNode.containerInfo), _A(e), null;
    case 10:
      return Fd(e.type._context), _A(e), null;
    case 17:
      return oe(e.type) && vs(), _A(e), null;
    case 19:
      if (lA(pA), i = e.memoizedState, i === null) return _A(e), null;
      if (r = (e.flags & 128) !== 0, o = i.rendering, o === null) if (r) si(i, !1);
      else {
        if (SA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (o = Is(A), o !== null) {
            for (e.flags |= 128, si(i, !1), r = o.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = t, t = e.child; t !== null; ) i = t, A = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = A, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, A = o.dependencies, i.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return iA(pA, pA.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        i.tail !== null && FA() > Kn && (e.flags |= 128, r = !0, si(i, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (A = Is(o), A !== null) {
          if (e.flags |= 128, r = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), si(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !fA) return _A(e), null;
        } else 2 * FA() - i.renderingStartTime > Kn && t !== 1073741824 && (e.flags |= 128, r = !0, si(i, !1), e.lanes = 4194304);
        i.isBackwards ? (o.sibling = e.child, e.child = o) : (t = i.last, t !== null ? t.sibling = o : e.child = o, i.last = o);
      }
      return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = FA(), e.sibling = null, t = pA.current, iA(pA, r ? t & 1 | 2 : t & 1), e) : (_A(e), null);
    case 22:
    case 23:
      return Md(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? ue & 1073741824 && (_A(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _A(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, e.tag));
}
function Jy(A, e) {
  switch (vd(e), e.tag) {
    case 1:
      return oe(e.type) && vs(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return On(), lA(ie), lA(WA), xd(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Hd(e), null;
    case 13:
      if (lA(pA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(H(340));
        Tn();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return lA(pA), null;
    case 4:
      return On(), null;
    case 10:
      return Fd(e.type._context), null;
    case 22:
    case 23:
      return Md(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ra = !1, $A = !1, Zy = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function Bn(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    vA(A, e, r);
  }
  else t.current = null;
}
function Pc(A, e, t) {
  try {
    t();
  } catch (r) {
    vA(A, e, r);
  }
}
var xg = !1;
function qy(A, e) {
  if (Fc = ps, A = Rw(), wd(A)) {
    if ("selectionStart" in A) var t = { start: A.selectionStart, end: A.selectionEnd };
    else A: {
      t = (t = A.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var n = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, i.nodeType;
        } catch {
          t = null;
          break A;
        }
        var o = 0, a = -1, s = -1, l = 0, u = 0, c = A, f = null;
        e: for (; ; ) {
          for (var B; c !== t || n !== 0 && c.nodeType !== 3 || (a = o + n), c !== i || r !== 0 && c.nodeType !== 3 || (s = o + r), c.nodeType === 3 && (o += c.nodeValue.length), (B = c.firstChild) !== null; )
            f = c, c = B;
          for (; ; ) {
            if (c === A) break e;
            if (f === t && ++l === n && (a = o), f === i && ++u === r && (s = o), (B = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = B;
        }
        t = a === -1 || s === -1 ? null : { start: a, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Uc = { focusedElem: A, selectionRange: t }, ps = !1, O = e; O !== null; ) if (e = O, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null) A.return = e, O = A;
  else for (; O !== null; ) {
    e = O;
    try {
      var p = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (p !== null) {
            var w = p.memoizedProps, y = p.memoizedState, g = e.stateNode, d = g.getSnapshotBeforeUpdate(e.elementType === e.type ? w : Te(e.type, w), y);
            g.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var h = e.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(H(163));
      }
    } catch (m) {
      vA(e, e.return, m);
    }
    if (A = e.sibling, A !== null) {
      A.return = e.return, O = A;
      break;
    }
    O = e.return;
  }
  return p = xg, xg = !1, p;
}
function Oi(A, e, t) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var n = r = r.next;
    do {
      if ((n.tag & A) === A) {
        var i = n.destroy;
        n.destroy = void 0, i !== void 0 && Pc(e, t, i);
      }
      n = n.next;
    } while (n !== r);
  }
}
function fl(A, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function _c(A) {
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
function km(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, km(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[ze], delete e[no], delete e[Hc], delete e[Oy], delete e[Dy])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function Om(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function Sg(A) {
  A: for (; ; ) {
    for (; A.sibling === null; ) {
      if (A.return === null || Om(A.return)) return null;
      A = A.return;
    }
    for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      A.child.return = A, A = A.child;
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Gc(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = ms));
  else if (r !== 4 && (A = A.child, A !== null)) for (Gc(A, e, t), A = A.sibling; A !== null; ) Gc(A, e, t), A = A.sibling;
}
function Vc(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && (A = A.child, A !== null)) for (Vc(A, e, t), A = A.sibling; A !== null; ) Vc(A, e, t), A = A.sibling;
}
var DA = null, ke = !1;
function Ut(A, e, t) {
  for (t = t.child; t !== null; ) Dm(A, e, t), t = t.sibling;
}
function Dm(A, e, t) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(nl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      $A || Bn(t, e);
    case 6:
      var r = DA, n = ke;
      DA = null, Ut(A, e, t), DA = r, ke = n, DA !== null && (ke ? (A = DA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : DA.removeChild(t.stateNode));
      break;
    case 18:
      DA !== null && (ke ? (A = DA, t = t.stateNode, A.nodeType === 8 ? fu(A.parentNode, t) : A.nodeType === 1 && fu(A, t), qi(A)) : fu(DA, t.stateNode));
      break;
    case 4:
      r = DA, n = ke, DA = t.stateNode.containerInfo, ke = !0, Ut(A, e, t), DA = r, ke = n;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$A && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        n = r = r.next;
        do {
          var i = n, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Pc(t, e, o), n = n.next;
        } while (n !== r);
      }
      Ut(A, e, t);
      break;
    case 1:
      if (!$A && (Bn(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (a) {
        vA(t, e, a);
      }
      Ut(A, e, t);
      break;
    case 21:
      Ut(A, e, t);
      break;
    case 22:
      t.mode & 1 ? ($A = (r = $A) || t.memoizedState !== null, Ut(A, e, t), $A = r) : Ut(A, e, t);
      break;
    default:
      Ut(A, e, t);
  }
}
function Lg(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new Zy()), e.forEach(function(r) {
      var n = sF.bind(null, A, r);
      t.has(r) || (t.add(r), r.then(n, n));
    });
  }
}
function Se(A, e) {
  var t = e.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var n = t[r];
    try {
      var i = A, o = e, a = o;
      A: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            DA = a.stateNode, ke = !1;
            break A;
          case 3:
            DA = a.stateNode.containerInfo, ke = !0;
            break A;
          case 4:
            DA = a.stateNode.containerInfo, ke = !0;
            break A;
        }
        a = a.return;
      }
      if (DA === null) throw Error(H(160));
      Dm(i, o, n), DA = null, ke = !1;
      var s = n.alternate;
      s !== null && (s.return = null), n.return = null;
    } catch (l) {
      vA(n, e, l);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Km(e, A), e = e.sibling;
}
function Km(A, e) {
  var t = A.alternate, r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Se(e, A), Ve(A), r & 4) {
        try {
          Oi(3, A, A.return), fl(3, A);
        } catch (w) {
          vA(A, A.return, w);
        }
        try {
          Oi(5, A, A.return);
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 1:
      Se(e, A), Ve(A), r & 512 && t !== null && Bn(t, t.return);
      break;
    case 5:
      if (Se(e, A), Ve(A), r & 512 && t !== null && Bn(t, t.return), A.flags & 32) {
        var n = A.stateNode;
        try {
          zi(n, "");
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      if (r & 4 && (n = A.stateNode, n != null)) {
        var i = A.memoizedProps, o = t !== null ? t.memoizedProps : i, a = A.type, s = A.updateQueue;
        if (A.updateQueue = null, s !== null) try {
          a === "input" && i.type === "radio" && i.name != null && iw(n, i), Bc(a, o);
          var l = Bc(a, i);
          for (o = 0; o < s.length; o += 2) {
            var u = s[o], c = s[o + 1];
            u === "style" ? uw(n, c) : u === "dangerouslySetInnerHTML" ? sw(n, c) : u === "children" ? zi(n, c) : id(n, u, c, l);
          }
          switch (a) {
            case "input":
              lc(n, i);
              break;
            case "textarea":
              ow(n, i);
              break;
            case "select":
              var f = n._wrapperState.wasMultiple;
              n._wrapperState.wasMultiple = !!i.multiple;
              var B = i.value;
              B != null ? Cn(n, !!i.multiple, B, !1) : f !== !!i.multiple && (i.defaultValue != null ? Cn(
                n,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Cn(n, !!i.multiple, i.multiple ? [] : "", !1));
          }
          n[no] = i;
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 6:
      if (Se(e, A), Ve(A), r & 4) {
        if (A.stateNode === null) throw Error(H(162));
        n = A.stateNode, i = A.memoizedProps;
        try {
          n.nodeValue = i;
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 3:
      if (Se(e, A), Ve(A), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        qi(e.containerInfo);
      } catch (w) {
        vA(A, A.return, w);
      }
      break;
    case 4:
      Se(e, A), Ve(A);
      break;
    case 13:
      Se(e, A), Ve(A), n = A.child, n.flags & 8192 && (i = n.memoizedState !== null, n.stateNode.isHidden = i, !i || n.alternate !== null && n.alternate.memoizedState !== null || (Rd = FA())), r & 4 && Lg(A);
      break;
    case 22:
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? ($A = (l = $A) || u, Se(e, A), $A = l) : Se(e, A), Ve(A), r & 8192) {
        if (l = A.memoizedState !== null, (A.stateNode.isHidden = l) && !u && A.mode & 1) for (O = A, u = A.child; u !== null; ) {
          for (c = O = u; O !== null; ) {
            switch (f = O, B = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Oi(4, f, f.return);
                break;
              case 1:
                Bn(f, f.return);
                var p = f.stateNode;
                if (typeof p.componentWillUnmount == "function") {
                  r = f, t = f.return;
                  try {
                    e = r, p.props = e.memoizedProps, p.state = e.memoizedState, p.componentWillUnmount();
                  } catch (w) {
                    vA(r, t, w);
                  }
                }
                break;
              case 5:
                Bn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Tg(c);
                  continue;
                }
            }
            B !== null ? (B.return = f, O = B) : Tg(c);
          }
          u = u.sibling;
        }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                n = c.stateNode, l ? (i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, s = c.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = lw("display", o));
              } catch (w) {
                vA(A, A.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (u === null) try {
              c.stateNode.nodeValue = l ? "" : c.memoizedProps;
            } catch (w) {
              vA(A, A.return, w);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === A) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === A) break A;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === A) break A;
            u === c && (u = null), c = c.return;
          }
          u === c && (u = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      Se(e, A), Ve(A), r & 4 && Lg(A);
      break;
    case 21:
      break;
    default:
      Se(
        e,
        A
      ), Ve(A);
  }
}
function Ve(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (Om(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (zi(n, ""), r.flags &= -33);
          var i = Sg(A);
          Vc(A, i, n);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, a = Sg(A);
          Gc(A, a, o);
          break;
        default:
          throw Error(H(161));
      }
    } catch (s) {
      vA(A, A.return, s);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function AF(A, e, t) {
  O = A, Rm(A);
}
function Rm(A, e, t) {
  for (var r = (A.mode & 1) !== 0; O !== null; ) {
    var n = O, i = n.child;
    if (n.tag === 22 && r) {
      var o = n.memoizedState !== null || ra;
      if (!o) {
        var a = n.alternate, s = a !== null && a.memoizedState !== null || $A;
        a = ra;
        var l = $A;
        if (ra = o, ($A = s) && !l) for (O = n; O !== null; ) o = O, s = o.child, o.tag === 22 && o.memoizedState !== null ? kg(n) : s !== null ? (s.return = o, O = s) : kg(n);
        for (; i !== null; ) O = i, Rm(i), i = i.sibling;
        O = n, ra = a, $A = l;
      }
      bg(A);
    } else n.subtreeFlags & 8772 && i !== null ? (i.return = n, O = i) : bg(A);
  }
}
function bg(A) {
  for (; O !== null; ) {
    var e = O;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            $A || fl(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !$A) if (t === null) r.componentDidMount();
            else {
              var n = e.elementType === e.type ? t.memoizedProps : Te(e.type, t.memoizedProps);
              r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = e.updateQueue;
            i !== null && pg(e, i, r);
            break;
          case 3:
            var o = e.updateQueue;
            if (o !== null) {
              if (t = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
              pg(e, o, t);
            }
            break;
          case 5:
            var a = e.stateNode;
            if (t === null && e.flags & 4) {
              t = a;
              var s = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && t.focus();
                  break;
                case "img":
                  s.src && (t.src = s.src);
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
              var l = e.alternate;
              if (l !== null) {
                var u = l.memoizedState;
                if (u !== null) {
                  var c = u.dehydrated;
                  c !== null && qi(c);
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
            throw Error(H(163));
        }
        $A || e.flags & 512 && _c(e);
      } catch (f) {
        vA(e, e.return, f);
      }
    }
    if (e === A) {
      O = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, O = t;
      break;
    }
    O = e.return;
  }
}
function Tg(A) {
  for (; O !== null; ) {
    var e = O;
    if (e === A) {
      O = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, O = t;
      break;
    }
    O = e.return;
  }
}
function kg(A) {
  for (; O !== null; ) {
    var e = O;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            fl(4, e);
          } catch (s) {
            vA(e, t, s);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (s) {
              vA(e, n, s);
            }
          }
          var i = e.return;
          try {
            _c(e);
          } catch (s) {
            vA(e, i, s);
          }
          break;
        case 5:
          var o = e.return;
          try {
            _c(e);
          } catch (s) {
            vA(e, o, s);
          }
      }
    } catch (s) {
      vA(e, e.return, s);
    }
    if (e === A) {
      O = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      a.return = e.return, O = a;
      break;
    }
    O = e.return;
  }
}
var eF = Math.ceil, Ss = Qt.ReactCurrentDispatcher, Dd = Qt.ReactCurrentOwner, Ue = Qt.ReactCurrentBatchConfig, J = 0, OA = null, IA = null, NA = 0, ue = 0, gn = sr(0), SA = 0, uo = null, Kr = 0, dl = 0, Kd = 0, Di = null, ee = null, Rd = 0, Kn = 1 / 0, it = null, Ls = !1, $c = null, Xt = null, na = !1, Kt = null, bs = 0, Ki = 0, Wc = null, ja = -1, Ja = 0;
function jA() {
  return J & 6 ? FA() : ja !== -1 ? ja : ja = FA();
}
function Yt(A) {
  return A.mode & 1 ? J & 2 && NA !== 0 ? NA & -NA : Ry.transition !== null ? (Ja === 0 && (Ja = Qw()), Ja) : (A = eA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : xw(A.type)), A) : 1;
}
function Ne(A, e, t, r) {
  if (50 < Ki) throw Ki = 0, Wc = null, Error(H(185));
  Eo(A, t, r), (!(J & 2) || A !== OA) && (A === OA && (!(J & 2) && (dl |= t), SA === 4 && kt(A, NA)), ae(A, r), t === 1 && J === 0 && !(e.mode & 1) && (Kn = FA() + 500, ll && lr()));
}
function ae(A, e) {
  var t = A.callbackNode;
  RQ(A, e);
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) t !== null && GB(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && GB(t), e === 1) A.tag === 0 ? Ky(Og.bind(null, A)) : Yw(Og.bind(null, A)), Ty(function() {
      !(J & 6) && lr();
    }), t = null;
    else {
      switch (yw(r)) {
        case 1:
          t = ud;
          break;
        case 4:
          t = vw;
          break;
        case 16:
          t = Bs;
          break;
        case 536870912:
          t = Cw;
          break;
        default:
          t = Bs;
      }
      t = Wm(t, Nm.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function Nm(A, e) {
  if (ja = -1, Ja = 0, J & 6) throw Error(H(327));
  var t = A.callbackNode;
  if (En() && A.callbackNode !== t) return null;
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = Ts(A, r);
  else {
    e = r;
    var n = J;
    J |= 2;
    var i = Pm();
    (OA !== A || NA !== e) && (it = null, Kn = FA() + 500, Ir(A, e));
    do
      try {
        nF();
        break;
      } catch (a) {
        Mm(A, a);
      }
    while (!0);
    yd(), Ss.current = i, J = n, IA !== null ? e = 0 : (OA = null, NA = 0, e = SA);
  }
  if (e !== 0) {
    if (e === 2 && (n = mc(A), n !== 0 && (r = n, e = Xc(A, n))), e === 1) throw t = uo, Ir(A, 0), kt(A, r), ae(A, FA()), t;
    if (e === 6) kt(A, r);
    else {
      if (n = A.current.alternate, !(r & 30) && !tF(n) && (e = Ts(A, r), e === 2 && (i = mc(A), i !== 0 && (r = i, e = Xc(A, i))), e === 1)) throw t = uo, Ir(A, 0), kt(A, r), ae(A, FA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          gr(A, ee, it);
          break;
        case 3:
          if (kt(A, r), (r & 130023424) === r && (e = Rd + 500 - FA(), 10 < e)) {
            if (gs(A, 0) !== 0) break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              jA(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = Ic(gr.bind(null, A, ee, it), e);
            break;
          }
          gr(A, ee, it);
          break;
        case 4:
          if (kt(A, r), (r & 4194240) === r) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - Re(r);
            i = 1 << o, o = e[o], o > n && (n = o), r &= ~i;
          }
          if (r = n, r = FA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * eF(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = Ic(gr.bind(null, A, ee, it), r);
            break;
          }
          gr(A, ee, it);
          break;
        case 5:
          gr(A, ee, it);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return ae(A, FA()), A.callbackNode === t ? Nm.bind(null, A) : null;
}
function Xc(A, e) {
  var t = Di;
  return A.current.memoizedState.isDehydrated && (Ir(A, e).flags |= 256), A = Ts(A, e), A !== 2 && (e = ee, ee = t, e !== null && Yc(e)), A;
}
function Yc(A) {
  ee === null ? ee = A : ee.push.apply(ee, A);
}
function tF(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var n = t[r], i = n.getSnapshot;
        n = n.value;
        try {
          if (!Pe(i(), n)) return !1;
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
function kt(A, e) {
  for (e &= ~Kd, e &= ~dl, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - Re(e), r = 1 << t;
    A[t] = -1, e &= ~r;
  }
}
function Og(A) {
  if (J & 6) throw Error(H(327));
  En();
  var e = gs(A, 0);
  if (!(e & 1)) return ae(A, FA()), null;
  var t = Ts(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = mc(A);
    r !== 0 && (e = r, t = Xc(A, r));
  }
  if (t === 1) throw t = uo, Ir(A, 0), kt(A, e), ae(A, FA()), t;
  if (t === 6) throw Error(H(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, gr(A, ee, it), ae(A, FA()), null;
}
function Nd(A, e) {
  var t = J;
  J |= 1;
  try {
    return A(e);
  } finally {
    J = t, J === 0 && (Kn = FA() + 500, ll && lr());
  }
}
function Rr(A) {
  Kt !== null && Kt.tag === 0 && !(J & 6) && En();
  var e = J;
  J |= 1;
  var t = Ue.transition, r = eA;
  try {
    if (Ue.transition = null, eA = 1, A) return A();
  } finally {
    eA = r, Ue.transition = t, J = e, !(J & 6) && lr();
  }
}
function Md() {
  ue = gn.current, lA(gn);
}
function Ir(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, by(t)), IA !== null) for (t = IA.return; t !== null; ) {
    var r = t;
    switch (vd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vs();
        break;
      case 3:
        On(), lA(ie), lA(WA), xd();
        break;
      case 5:
        Hd(r);
        break;
      case 4:
        On();
        break;
      case 13:
        lA(pA);
        break;
      case 19:
        lA(pA);
        break;
      case 10:
        Fd(r.type._context);
        break;
      case 22:
      case 23:
        Md();
    }
    t = t.return;
  }
  if (OA = A, IA = A = zt(A.current, null), NA = ue = e, SA = 0, uo = null, Kd = dl = Kr = 0, ee = Di = null, vr !== null) {
    for (e = 0; e < vr.length; e++) if (t = vr[e], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var n = r.next, i = t.pending;
      if (i !== null) {
        var o = i.next;
        i.next = n, r.next = o;
      }
      t.pending = r;
    }
    vr = null;
  }
  return A;
}
function Mm(A, e) {
  do {
    var t = IA;
    try {
      if (yd(), Xa.current = xs, Hs) {
        for (var r = wA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        Hs = !1;
      }
      if (Dr = 0, TA = HA = wA = null, ki = !1, ao = 0, Dd.current = null, t === null || t.return === null) {
        SA = 1, uo = e, IA = null;
        break;
      }
      A: {
        var i = A, o = t.return, a = t, s = e;
        if (e = NA, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var l = s, u = a, c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var B = Qg(o);
          if (B !== null) {
            B.flags &= -257, yg(B, o, a, i, e), B.mode & 1 && Cg(i, l, e), e = B, s = l;
            var p = e.updateQueue;
            if (p === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), e.updateQueue = w;
            } else p.add(s);
            break A;
          } else {
            if (!(e & 1)) {
              Cg(i, l, e), Pd();
              break A;
            }
            s = Error(H(426));
          }
        } else if (fA && a.mode & 1) {
          var y = Qg(o);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), yg(y, o, a, i, e), Cd(Dn(s, a));
            break A;
          }
        }
        i = s = Dn(s, a), SA !== 4 && (SA = 2), Di === null ? Di = [i] : Di.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, e &= -e, i.lanes |= e;
              var g = ym(i, s, e);
              gg(i, g);
              break A;
            case 1:
              a = s;
              var d = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Xt === null || !Xt.has(h)))) {
                i.flags |= 65536, e &= -e, i.lanes |= e;
                var m = Fm(i, a, e);
                gg(i, m);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gm(t);
    } catch (v) {
      e = v, IA === t && t !== null && (IA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Pm() {
  var A = Ss.current;
  return Ss.current = xs, A === null ? xs : A;
}
function Pd() {
  (SA === 0 || SA === 3 || SA === 2) && (SA = 4), OA === null || !(Kr & 268435455) && !(dl & 268435455) || kt(OA, NA);
}
function Ts(A, e) {
  var t = J;
  J |= 2;
  var r = Pm();
  (OA !== A || NA !== e) && (it = null, Ir(A, e));
  do
    try {
      rF();
      break;
    } catch (n) {
      Mm(A, n);
    }
  while (!0);
  if (yd(), J = t, Ss.current = r, IA !== null) throw Error(H(261));
  return OA = null, NA = 0, SA;
}
function rF() {
  for (; IA !== null; ) _m(IA);
}
function nF() {
  for (; IA !== null && !xQ(); ) _m(IA);
}
function _m(A) {
  var e = $m(A.alternate, A, ue);
  A.memoizedProps = A.pendingProps, e === null ? Gm(A) : IA = e, Dd.current = null;
}
function Gm(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = Jy(t, e), t !== null) {
        t.flags &= 32767, IA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        SA = 6, IA = null;
        return;
      }
    } else if (t = jy(t, e, ue), t !== null) {
      IA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      IA = e;
      return;
    }
    IA = e = A;
  } while (e !== null);
  SA === 0 && (SA = 5);
}
function gr(A, e, t) {
  var r = eA, n = Ue.transition;
  try {
    Ue.transition = null, eA = 1, iF(A, e, t, r);
  } finally {
    Ue.transition = n, eA = r;
  }
  return null;
}
function iF(A, e, t, r) {
  do
    En();
  while (Kt !== null);
  if (J & 6) throw Error(H(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(H(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (NQ(A, i), A === OA && (IA = OA = null, NA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || na || (na = !0, Wm(Bs, function() {
    return En(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ue.transition, Ue.transition = null;
    var o = eA;
    eA = 1;
    var a = J;
    J |= 4, Dd.current = null, qy(A, t), Km(t, A), Uy(Uc), ps = !!Fc, Uc = Fc = null, A.current = t, AF(t), SQ(), J = a, eA = o, Ue.transition = i;
  } else A.current = t;
  if (na && (na = !1, Kt = A, bs = n), i = A.pendingLanes, i === 0 && (Xt = null), TQ(t.stateNode), ae(A, FA()), e !== null) for (r = A.onRecoverableError, t = 0; t < e.length; t++) n = e[t], r(n.value, { componentStack: n.stack, digest: n.digest });
  if (Ls) throw Ls = !1, A = $c, $c = null, A;
  return bs & 1 && A.tag !== 0 && En(), i = A.pendingLanes, i & 1 ? A === Wc ? Ki++ : (Ki = 0, Wc = A) : Ki = 0, lr(), null;
}
function En() {
  if (Kt !== null) {
    var A = yw(bs), e = Ue.transition, t = eA;
    try {
      if (Ue.transition = null, eA = 16 > A ? 16 : A, Kt === null) var r = !1;
      else {
        if (A = Kt, Kt = null, bs = 0, J & 6) throw Error(H(331));
        var n = J;
        for (J |= 4, O = A.current; O !== null; ) {
          var i = O, o = i.child;
          if (O.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var l = a[s];
                for (O = l; O !== null; ) {
                  var u = O;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oi(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) c.return = u, O = c;
                  else for (; O !== null; ) {
                    u = O;
                    var f = u.sibling, B = u.return;
                    if (km(u), u === l) {
                      O = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = B, O = f;
                      break;
                    }
                    O = B;
                  }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var w = p.child;
                if (w !== null) {
                  p.child = null;
                  do {
                    var y = w.sibling;
                    w.sibling = null, w = y;
                  } while (w !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, O = o;
          else A: for (; O !== null; ) {
            if (i = O, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Oi(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, O = g;
              break A;
            }
            O = i.return;
          }
        }
        var d = A.current;
        for (O = d; O !== null; ) {
          o = O;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, O = h;
          else A: for (o = d; O !== null; ) {
            if (a = O, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  fl(9, a);
              }
            } catch (v) {
              vA(a, a.return, v);
            }
            if (a === o) {
              O = null;
              break A;
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, O = m;
              break A;
            }
            O = a.return;
          }
        }
        if (J = n, lr(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(nl, A);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      eA = t, Ue.transition = e;
    }
  }
  return !1;
}
function Dg(A, e, t) {
  e = Dn(t, e), e = ym(A, e, 1), A = Wt(A, e, 1), e = jA(), A !== null && (Eo(A, 1, e), ae(A, e));
}
function vA(A, e, t) {
  if (A.tag === 3) Dg(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Dg(e, A, t);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
        A = Dn(t, A), A = Fm(e, A, 1), e = Wt(e, A, 1), A = jA(), e !== null && (Eo(e, 1, A), ae(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function oF(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = jA(), A.pingedLanes |= A.suspendedLanes & t, OA === A && (NA & t) === t && (SA === 4 || SA === 3 && (NA & 130023424) === NA && 500 > FA() - Rd ? Ir(A, 0) : Kd |= t), ae(A, e);
}
function Vm(A, e) {
  e === 0 && (A.mode & 1 ? (e = Yo, Yo <<= 1, !(Yo & 130023424) && (Yo = 4194304)) : e = 1);
  var t = jA();
  A = pt(A, e), A !== null && (Eo(A, e, t), ae(A, t));
}
function aF(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), Vm(A, t);
}
function sF(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode, n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(e), Vm(A, t);
}
var $m;
$m = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || ie.current) te = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return te = !1, zy(A, e, t);
    te = !!(A.flags & 131072);
  }
  else te = !1, fA && e.flags & 1048576 && zw(e, ys, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      za(A, e), A = e.pendingProps;
      var n = bn(e, WA.current);
      Un(e, t), n = Ld(null, e, r, A, n, t);
      var i = bd();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, oe(r) ? (i = !0, Cs(e)) : i = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, Ed(e), n.updater = cl, e.stateNode = n, n._reactInternals = e, kc(e, r, A, t), e = Kc(null, e, r, !0, i, t)) : (e.tag = 0, fA && i && md(e), zA(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (za(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = uF(r), A = Te(r, A), n) {
          case 0:
            e = Dc(null, e, r, A, t);
            break A;
          case 1:
            e = Eg(null, e, r, A, t);
            break A;
          case 11:
            e = Fg(null, e, r, A, t);
            break A;
          case 14:
            e = Ug(null, e, r, Te(r.type, A), t);
            break A;
        }
        throw Error(H(
          306,
          r,
          ""
        ));
      }
      return e;
    case 0:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Te(r, n), Dc(A, e, r, n, t);
    case 1:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Te(r, n), Eg(A, e, r, n, t);
    case 3:
      A: {
        if (Hm(e), A === null) throw Error(H(387));
        r = e.pendingProps, i = e.memoizedState, n = i.element, em(A, e), Es(e, r, null, t);
        var o = e.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
          n = Dn(Error(H(423)), e), e = Ig(A, e, r, t, n);
          break A;
        } else if (r !== n) {
          n = Dn(Error(H(424)), e), e = Ig(A, e, r, t, n);
          break A;
        } else for (ce = $t(e.stateNode.containerInfo.firstChild), fe = e, fA = !0, Oe = null, t = qw(e, null, r, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (Tn(), r === n) {
            e = ht(A, e, t);
            break A;
          }
          zA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return tm(e), A === null && Lc(e), r = e.type, n = e.pendingProps, i = A !== null ? A.memoizedProps : null, o = n.children, Ec(r, n) ? o = null : i !== null && Ec(r, i) && (e.flags |= 32), Im(A, e), zA(A, e, o, t), e.child;
    case 6:
      return A === null && Lc(e), null;
    case 13:
      return xm(A, e, t);
    case 4:
      return Id(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = kn(e, null, r, t) : zA(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Te(r, n), Fg(A, e, r, n, t);
    case 7:
      return zA(A, e, e.pendingProps, t), e.child;
    case 8:
      return zA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return zA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, i = e.memoizedProps, o = n.value, iA(Fs, r._currentValue), r._currentValue = o, i !== null) if (Pe(i.value, o)) {
          if (i.children === n.children && !ie.current) {
            e = ht(A, e, t);
            break A;
          }
        } else for (i = e.child, i !== null && (i.return = e); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            o = i.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = ct(-1, t & -t), s.tag = 2;
                  var l = i.updateQueue;
                  if (l !== null) {
                    l = l.shared;
                    var u = l.pending;
                    u === null ? s.next = s : (s.next = u.next, u.next = s), l.pending = s;
                  }
                }
                i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), bc(
                  i.return,
                  t,
                  e
                ), a.lanes |= t;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(H(341));
            o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), bc(o, t, e), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        zA(A, e, n.children, t), e = e.child;
      }
      return e;
    case 9:
      return n = e.type, r = e.pendingProps.children, Un(e, t), n = Ee(n), r = r(n), e.flags |= 1, zA(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = Te(r, e.pendingProps), n = Te(r.type, n), Ug(A, e, r, n, t);
    case 15:
      return Um(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : Te(r, n), za(A, e), e.tag = 1, oe(r) ? (A = !0, Cs(e)) : A = !1, Un(e, t), Qm(e, r, n), kc(e, r, n, t), Kc(null, e, r, !0, A, t);
    case 19:
      return Sm(A, e, t);
    case 22:
      return Em(A, e, t);
  }
  throw Error(H(156, e.tag));
};
function Wm(A, e) {
  return mw(A, e);
}
function lF(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Qe(A, e, t, r) {
  return new lF(A, e, t, r);
}
function _d(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function uF(A) {
  if (typeof A == "function") return _d(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === ad) return 11;
    if (A === sd) return 14;
  }
  return 2;
}
function zt(A, e) {
  var t = A.alternate;
  return t === null ? (t = Qe(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function Za(A, e, t, r, n, i) {
  var o = 2;
  if (r = A, typeof A == "function") _d(A) && (o = 1);
  else if (typeof A == "string") o = 5;
  else A: switch (A) {
    case nn:
      return Hr(t.children, n, i, e);
    case od:
      o = 8, n |= 8;
      break;
    case nc:
      return A = Qe(12, t, e, n | 2), A.elementType = nc, A.lanes = i, A;
    case ic:
      return A = Qe(13, t, e, n), A.elementType = ic, A.lanes = i, A;
    case oc:
      return A = Qe(19, t, e, n), A.elementType = oc, A.lanes = i, A;
    case tw:
      return Bl(t, n, i, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case Aw:
          o = 10;
          break A;
        case ew:
          o = 9;
          break A;
        case ad:
          o = 11;
          break A;
        case sd:
          o = 14;
          break A;
        case St:
          o = 16, r = null;
          break A;
      }
      throw Error(H(130, A == null ? A : typeof A, ""));
  }
  return e = Qe(o, t, e, n), e.elementType = A, e.type = r, e.lanes = i, e;
}
function Hr(A, e, t, r) {
  return A = Qe(7, A, r, e), A.lanes = t, A;
}
function Bl(A, e, t, r) {
  return A = Qe(22, A, r, e), A.elementType = tw, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function vu(A, e, t) {
  return A = Qe(6, A, null, e), A.lanes = t, A;
}
function Cu(A, e, t) {
  return e = Qe(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function cF(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eu(0), this.expirationTimes = eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eu(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function Gd(A, e, t, r, n, i, o, a, s) {
  return A = new cF(A, e, t, a, s), e === 1 ? (e = 1, i === !0 && (e |= 8)) : e = 0, i = Qe(3, null, null, e), A.current = i, i.stateNode = A, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(i), A;
}
function fF(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: A, containerInfo: e, implementation: t };
}
function Xm(A) {
  if (!A) return qt;
  A = A._reactInternals;
  A: {
    if (Gr(A) !== A || A.tag !== 1) throw Error(H(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (oe(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(H(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (oe(t)) return Xw(A, t, e);
  }
  return e;
}
function Ym(A, e, t, r, n, i, o, a, s) {
  return A = Gd(t, r, !0, A, n, i, o, a, s), A.context = Xm(null), t = A.current, r = jA(), n = Yt(t), i = ct(r, n), i.callback = e ?? null, Wt(t, i, n), A.current.lanes = n, Eo(A, n, r), ae(A, r), A;
}
function gl(A, e, t, r) {
  var n = e.current, i = jA(), o = Yt(n);
  return t = Xm(t), e.context === null ? e.context = t : e.pendingContext = t, e = ct(i, o), e.payload = { element: A }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = Wt(n, e, o), A !== null && (Ne(A, n, o, i), Wa(A, n, o)), o;
}
function ks(A) {
  if (A = A.current, !A.child) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function Kg(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Vd(A, e) {
  Kg(A, e), (A = A.alternate) && Kg(A, e);
}
function dF() {
  return null;
}
var zm = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function $d(A) {
  this._internalRoot = A;
}
pl.prototype.render = $d.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null) throw Error(H(409));
  gl(A, e, null, null);
};
pl.prototype.unmount = $d.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    Rr(function() {
      gl(null, A, null, null);
    }), e[gt] = null;
  }
};
function pl(A) {
  this._internalRoot = A;
}
pl.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = Ew();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Tt.length && e !== 0 && e < Tt[t].priority; t++) ;
    Tt.splice(t, 0, A), t === 0 && Hw(A);
  }
};
function Wd(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function hl(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function Rg() {
}
function BF(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var l = ks(o);
        i.call(l);
      };
    }
    var o = Ym(e, r, A, 0, null, !1, !1, "", Rg);
    return A._reactRootContainer = o, A[gt] = o.current, to(A.nodeType === 8 ? A.parentNode : A), Rr(), o;
  }
  for (; n = A.lastChild; ) A.removeChild(n);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var l = ks(s);
      a.call(l);
    };
  }
  var s = Gd(A, 0, !1, null, null, !1, !1, "", Rg);
  return A._reactRootContainer = s, A[gt] = s.current, to(A.nodeType === 8 ? A.parentNode : A), Rr(function() {
    gl(e, s, t, r);
  }), s;
}
function wl(A, e, t, r, n) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var s = ks(o);
        a.call(s);
      };
    }
    gl(e, o, A, n);
  } else o = BF(t, e, A, n, r);
  return ks(o);
}
Fw = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = hi(e.pendingLanes);
        t !== 0 && (cd(e, t | 1), ae(e, FA()), !(J & 6) && (Kn = FA() + 500, lr()));
      }
      break;
    case 13:
      Rr(function() {
        var r = pt(A, 1);
        if (r !== null) {
          var n = jA();
          Ne(r, A, 1, n);
        }
      }), Vd(A, 1);
  }
};
fd = function(A) {
  if (A.tag === 13) {
    var e = pt(A, 134217728);
    if (e !== null) {
      var t = jA();
      Ne(e, A, 134217728, t);
    }
    Vd(A, 134217728);
  }
};
Uw = function(A) {
  if (A.tag === 13) {
    var e = Yt(A), t = pt(A, e);
    if (t !== null) {
      var r = jA();
      Ne(t, A, e, r);
    }
    Vd(A, e);
  }
};
Ew = function() {
  return eA;
};
Iw = function(A, e) {
  var t = eA;
  try {
    return eA = A, e();
  } finally {
    eA = t;
  }
};
pc = function(A, e, t) {
  switch (e) {
    case "input":
      if (lc(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = sl(r);
            if (!n) throw Error(H(90));
            nw(r), lc(r, n);
          }
        }
      }
      break;
    case "textarea":
      ow(A, t);
      break;
    case "select":
      e = t.value, e != null && Cn(A, !!t.multiple, e, !1);
  }
};
dw = Nd;
Bw = Rr;
var gF = { usingClientEntryPoint: !1, Events: [Ho, ln, sl, cw, fw, Nd] }, li = { findFiberByHostInstance: mr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pF = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = hw(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: li.findFiberByHostInstance || dF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ia.isDisabled && ia.supportsFiber) try {
    nl = ia.inject(pF), Je = ia;
  } catch {
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gF;
ge.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wd(e)) throw Error(H(200));
  return fF(A, e, null, t);
};
ge.createRoot = function(A, e) {
  if (!Wd(A)) throw Error(H(299));
  var t = !1, r = "", n = zm;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = Gd(A, 1, !1, null, null, t, !1, r, n), A[gt] = e.current, to(A.nodeType === 8 ? A.parentNode : A), new $d(e);
};
ge.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(H(188)) : (A = Object.keys(A).join(","), Error(H(268, A)));
  return A = hw(e), A = A === null ? null : A.stateNode, A;
};
ge.flushSync = function(A) {
  return Rr(A);
};
ge.hydrate = function(A, e, t) {
  if (!hl(e)) throw Error(H(200));
  return wl(null, A, e, !0, t);
};
ge.hydrateRoot = function(A, e, t) {
  if (!Wd(A)) throw Error(H(405));
  var r = t != null && t.hydratedSources || null, n = !1, i = "", o = zm;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = Ym(e, null, A, 1, t ?? null, n, !1, i, o), A[gt] = e.current, to(A), r) for (A = 0; A < r.length; A++) t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(
    t,
    n
  );
  return new pl(e);
};
ge.render = function(A, e, t) {
  if (!hl(e)) throw Error(H(200));
  return wl(null, A, e, !1, t);
};
ge.unmountComponentAtNode = function(A) {
  if (!hl(A)) throw Error(H(40));
  return A._reactRootContainer ? (Rr(function() {
    wl(null, null, A, !1, function() {
      A._reactRootContainer = null, A[gt] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = Nd;
ge.unstable_renderSubtreeIntoContainer = function(A, e, t, r) {
  if (!hl(t)) throw Error(H(200));
  if (A == null || A._reactInternals === void 0) throw Error(H(38));
  return wl(A, e, t, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function jm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jm);
    } catch (A) {
      console.error(A);
    }
}
jm(), jh.exports = ge;
var ml = jh.exports;
const hF = /* @__PURE__ */ Zf(ml), wF = "_dialog_1qo56_1", mF = "_overlay_1qo56_6", vF = "_container_1qo56_13", CF = "_dialogPanel_1qo56_24", QF = "_searchIcon_1qo56_36", yF = "_inputField_1qo56_46", Xr = {
  dialog: wF,
  overlay: mF,
  container: vF,
  dialogPanel: CF,
  searchIcon: QF,
  inputField: yF
};
var FF = Object.defineProperty, UF = (A, e, t) => e in A ? FF(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, Qu = (A, e, t) => (UF(A, typeof e != "symbol" ? e + "" : e, t), t);
let EF = class {
  constructor() {
    Qu(this, "current", this.detect()), Qu(this, "handoffState", "pending"), Qu(this, "currentId", 0);
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
}, xr = new EF();
function Xd(A) {
  return xr.isServer ? null : A instanceof Node ? A.ownerDocument : A != null && A.hasOwnProperty("current") && A.current instanceof Node ? A.current.ownerDocument : document;
}
function vl(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function ur() {
  let A = [], e = { addEventListener(t, r, n, i) {
    return t.addEventListener(r, n, i), e.add(() => t.removeEventListener(r, n, i));
  }, requestAnimationFrame(...t) {
    let r = requestAnimationFrame(...t);
    return e.add(() => cancelAnimationFrame(r));
  }, nextFrame(...t) {
    return e.requestAnimationFrame(() => e.requestAnimationFrame(...t));
  }, setTimeout(...t) {
    let r = setTimeout(...t);
    return e.add(() => clearTimeout(r));
  }, microTask(...t) {
    let r = { current: !0 };
    return vl(() => {
      r.current && t[0]();
    }), e.add(() => {
      r.current = !1;
    });
  }, style(t, r, n) {
    let i = t.style.getPropertyValue(r);
    return Object.assign(t.style, { [r]: n }), this.add(() => {
      Object.assign(t.style, { [r]: i });
    });
  }, group(t) {
    let r = ur();
    return t(r), this.add(() => r.dispose());
  }, add(t) {
    return A.includes(t) || A.push(t), () => {
      let r = A.indexOf(t);
      if (r >= 0) for (let n of A.splice(r, 1)) n();
    };
  }, dispose() {
    for (let t of A.splice(0)) t();
  } };
  return e;
}
function Yd() {
  let [A] = Q.useState(ur);
  return Q.useEffect(() => () => A.dispose(), [A]), A;
}
let JA = (A, e) => {
  xr.isServer ? Q.useEffect(A, e) : Q.useLayoutEffect(A, e);
};
function Vr(A) {
  let e = Q.useRef(A);
  return JA(() => {
    e.current = A;
  }, [A]), e;
}
let hA = function(A) {
  let e = Vr(A);
  return N.useCallback((...t) => e.current(...t), [e]);
}, IF = Q.createContext(void 0);
function HF() {
  return Q.useContext(IF);
}
function zc(...A) {
  return Array.from(new Set(A.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function Ar(A, e, ...t) {
  if (A in e) {
    let n = e[A];
    return typeof n == "function" ? n(...t) : n;
  }
  let r = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ar), r;
}
var Os = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(Os || {}), Rt = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(Rt || {});
function xe({ ourProps: A, theirProps: e, slot: t, defaultTag: r, features: n, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? xF;
  let s = Jm(e, A);
  if (i) return oa(s, t, r, o, a);
  let l = n ?? 0;
  if (l & 2) {
    let { static: u = !1, ...c } = s;
    if (u) return oa(c, t, r, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...c } = s;
    return Ar(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return oa({ ...c, hidden: !0, style: { display: "none" } }, t, r, o, a);
    } });
  }
  return oa(s, t, r, o, a);
}
function oa(A, e = {}, t, r, n) {
  let { as: i = t, children: o, refName: a = "ref", ...s } = yu(A, ["unmount", "static"]), l = A.ref !== void 0 ? { [a]: A.ref } : {}, u = typeof o == "function" ? o(e) : o;
  "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(e)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
  let c = {};
  if (e) {
    let f = !1, B = [];
    for (let [p, w] of Object.entries(e)) typeof w == "boolean" && (f = !0), w === !0 && B.push(p.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (f) {
      c["data-headlessui-state"] = B.join(" ");
      for (let p of B) c[`data-${p}`] = "";
    }
  }
  if (i === Q.Fragment && (Object.keys(pr(s)).length > 0 || Object.keys(pr(c)).length > 0)) if (!Q.isValidElement(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(pr(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(pr(s)).concat(Object.keys(pr(c))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = u.props, B = f == null ? void 0 : f.className, p = typeof B == "function" ? (...g) => zc(B(...g), s.className) : zc(B, s.className), w = p ? { className: p } : {}, y = Jm(u.props, pr(yu(s, ["ref"])));
    for (let g in c) g in y && delete c[g];
    return Q.cloneElement(u, Object.assign({}, y, c, l, { ref: n(u.ref, l.ref) }, w));
  }
  return Q.createElement(i, Object.assign({}, yu(s, ["ref"]), i !== Q.Fragment && l, i !== Q.Fragment && c), u);
}
function xF(...A) {
  return A.every((e) => e == null) ? void 0 : (e) => {
    for (let t of A) t != null && (typeof t == "function" ? t(e) : t.current = e);
  };
}
function Jm(...A) {
  if (A.length === 0) return {};
  if (A.length === 1) return A[0];
  let e = {}, t = {};
  for (let r of A) for (let n in r) n.startsWith("on") && typeof r[n] == "function" ? (t[n] != null || (t[n] = []), t[n].push(r[n])) : e[n] = r[n];
  if (e.disabled || e["aria-disabled"]) for (let r in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (t[r] = [(n) => {
    var i;
    return (i = n == null ? void 0 : n.preventDefault) == null ? void 0 : i.call(n);
  }]);
  for (let r in t) Object.assign(e, { [r](n, ...i) {
    let o = t[r];
    for (let a of o) {
      if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented) return;
      a(n, ...i);
    }
  } });
  return e;
}
function se(A) {
  var e;
  return Object.assign(Q.forwardRef(A), { displayName: (e = A.displayName) != null ? e : A.name });
}
function pr(A) {
  let e = Object.assign({}, A);
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function yu(A, e = []) {
  let t = Object.assign({}, A);
  for (let r of e) r in t && delete t[r];
  return t;
}
let SF = "div";
var Ds = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(Ds || {});
function LF(A, e) {
  var t;
  let { features: r = 1, ...n } = A, i = { ref: e, "aria-hidden": (r & 2) === 2 ? !0 : (t = n["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe({ ourProps: i, theirProps: n, slot: {}, defaultTag: SF, name: "Hidden" });
}
let jc = se(LF), bF = Q.createContext(null);
function TF({ children: A }) {
  let e = Q.useContext(bF);
  if (!e) return N.createElement(N.Fragment, null, A);
  let { target: t } = e;
  return t ? ml.createPortal(N.createElement(N.Fragment, null, A), t) : null;
}
let Zm = Symbol();
function kF(A, e = !0) {
  return Object.assign(A, { [Zm]: e });
}
function At(...A) {
  let e = Q.useRef(A);
  Q.useEffect(() => {
    e.current = A;
  }, [A]);
  let t = hA((r) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(r) : n.current = r);
  });
  return A.every((r) => r == null || (r == null ? void 0 : r[Zm])) ? void 0 : t;
}
let zd = Q.createContext(null);
zd.displayName = "DescriptionContext";
function qm() {
  let A = Q.useContext(zd);
  if (A === null) {
    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e, qm), e;
  }
  return A;
}
function OF() {
  let [A, e] = Q.useState([]);
  return [A.length > 0 ? A.join(" ") : void 0, Q.useMemo(() => function(t) {
    let r = hA((i) => (e((o) => [...o, i]), () => e((o) => {
      let a = o.slice(), s = a.indexOf(i);
      return s !== -1 && a.splice(s, 1), a;
    }))), n = Q.useMemo(() => ({ register: r, slot: t.slot, name: t.name, props: t.props, value: t.value }), [r, t.slot, t.name, t.props, t.value]);
    return N.createElement(zd.Provider, { value: n }, t.children);
  }, [e])];
}
let DF = "p";
function KF(A, e) {
  let t = Q.useId(), r = HF(), { id: n = `headlessui-description-${t}`, ...i } = A, o = qm(), a = At(e);
  JA(() => o.register(n), [n, o.register]);
  let s = r || !1, l = Q.useMemo(() => ({ ...o.slot, disabled: s }), [o.slot, s]), u = { ref: a, ...o.props, id: n };
  return xe({ ourProps: u, theirProps: i, slot: l, defaultTag: DF, name: o.name || "Description" });
}
let RF = se(KF), NF = Object.assign(RF, {});
var A0 = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(A0 || {});
let MF = Q.createContext(() => {
});
function PF({ value: A, children: e }) {
  return N.createElement(MF.Provider, { value: A }, e);
}
let _F = class extends Map {
  constructor(e) {
    super(), this.factory = e;
  }
  get(e) {
    let t = super.get(e);
    return t === void 0 && (t = this.factory(e), this.set(e, t)), t;
  }
};
function e0(A, e) {
  let t = A(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(n) {
    return r.add(n), () => r.delete(n);
  }, dispatch(n, ...i) {
    let o = e[n].call(t, ...i);
    o && (t = o, r.forEach((a) => a()));
  } };
}
function t0(A) {
  return Q.useSyncExternalStore(A.subscribe, A.getSnapshot, A.getSnapshot);
}
let GF = new _F(() => e0(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function jn(A, e) {
  let t = GF.get(e), r = Q.useId(), n = t0(t);
  if (JA(() => {
    if (A) return t.dispatch("ADD", r), () => t.dispatch("REMOVE", r);
  }, [t, A]), !A) return !1;
  let i = n.indexOf(r), o = n.length;
  return i === -1 && (i = o, o += 1), i === o - 1;
}
let Jc = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map();
function Ng(A) {
  var e;
  let t = (e = Ri.get(A)) != null ? e : 0;
  return Ri.set(A, t + 1), t !== 0 ? () => Mg(A) : (Jc.set(A, { "aria-hidden": A.getAttribute("aria-hidden"), inert: A.inert }), A.setAttribute("aria-hidden", "true"), A.inert = !0, () => Mg(A));
}
function Mg(A) {
  var e;
  let t = (e = Ri.get(A)) != null ? e : 1;
  if (t === 1 ? Ri.delete(A) : Ri.set(A, t - 1), t !== 1) return;
  let r = Jc.get(A);
  r && (r["aria-hidden"] === null ? A.removeAttribute("aria-hidden") : A.setAttribute("aria-hidden", r["aria-hidden"]), A.inert = r.inert, Jc.delete(A));
}
function VF(A, { allowed: e, disallowed: t } = {}) {
  let r = jn(A, "inert-others");
  JA(() => {
    var n, i;
    if (!r) return;
    let o = ur();
    for (let s of (n = t == null ? void 0 : t()) != null ? n : []) s && o.add(Ng(s));
    let a = (i = e == null ? void 0 : e()) != null ? i : [];
    for (let s of a) {
      if (!s) continue;
      let l = Xd(s);
      if (!l) continue;
      let u = s.parentElement;
      for (; u && u !== l.body; ) {
        for (let c of u.children) a.some((f) => c.contains(f)) || o.add(Ng(c));
        u = u.parentElement;
      }
    }
    return o.dispose;
  }, [r, e, t]);
}
function r0(A, e, t) {
  let r = Vr((n) => {
    let i = n.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && t();
  });
  Q.useEffect(() => {
    if (!A) return;
    let n = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!n) return;
    let i = ur();
    if (typeof ResizeObserver < "u") {
      let o = new ResizeObserver(() => r.current(n));
      o.observe(n), i.add(() => o.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let o = new IntersectionObserver(() => r.current(n));
      o.observe(n), i.add(() => o.disconnect());
    }
    return () => i.dispose();
  }, [e, r, A]);
}
let Zc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(","), $F = ["[data-autofocus]"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var st = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A[A.AutoFocus = 64] = "AutoFocus", A))(st || {}), qc = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(qc || {}), WF = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(WF || {});
function XF(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(Zc)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function YF(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll($F)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var n0 = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(n0 || {});
function zF(A, e = 0) {
  var t;
  return A === ((t = Xd(A)) == null ? void 0 : t.body) ? !1 : Ar(e, { 0() {
    return A.matches(Zc);
  }, 1() {
    let r = A;
    for (; r !== null; ) {
      if (r.matches(Zc)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var jF = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(jF || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ft(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let JF = ["textarea", "input"].join(",");
function ZF(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, JF)) != null ? t : !1;
}
function qF(A, e = (t) => t) {
  return A.slice().sort((t, r) => {
    let n = e(t), i = e(r);
    if (n === null || i === null) return 0;
    let o = n.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ni(A, e, { sorted: t = !0, relativeTo: r = null, skipElements: n = [] } = {}) {
  let i = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, o = Array.isArray(A) ? t ? qF(A) : A : e & 64 ? YF(A) : XF(A);
  n.length > 0 && o.length > 1 && (o = o.filter((B) => !n.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === B : p === B))), r = r ?? i.activeElement;
  let a = (() => {
    if (e & 5) return 1;
    if (e & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (e & 1) return 0;
    if (e & 2) return Math.max(0, o.indexOf(r)) - 1;
    if (e & 4) return Math.max(0, o.indexOf(r)) + 1;
    if (e & 8) return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = e & 32 ? { preventScroll: !0 } : {}, u = 0, c = o.length, f;
  do {
    if (u >= c || u + c <= 0) return 0;
    let B = s + u;
    if (e & 16) B = (B + c) % c;
    else {
      if (B < 0) return 3;
      if (B >= c) return 1;
    }
    f = o[B], f == null || f.focus(l), u += a;
  } while (f !== i.activeElement);
  return e & 6 && ZF(f) && f.select(), 2;
}
function i0() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function AU() {
  return /Android/gi.test(window.navigator.userAgent);
}
function eU() {
  return i0() || AU();
}
function ui(A, e, t, r) {
  let n = Vr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function o0(A, e, t, r) {
  let n = Vr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [A, e, r]);
}
const Pg = 30;
function tU(A, e, t) {
  let r = jn(A, "outside-click"), n = Vr(t), i = Q.useCallback(function(s, l) {
    if (s.defaultPrevented) return;
    let u = l(s);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = function f(B) {
      return typeof B == "function" ? f(B()) : Array.isArray(B) || B instanceof Set ? B : [B];
    }(e);
    for (let f of c) {
      if (f === null) continue;
      let B = f instanceof HTMLElement ? f : f.current;
      if (B != null && B.contains(u) || s.composed && s.composedPath().includes(B)) return;
    }
    return !zF(u, n0.Loose) && u.tabIndex !== -1 && s.preventDefault(), n.current(s, u);
  }, [n]), o = Q.useRef(null);
  ui(r, "pointerdown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ui(r, "mousedown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ui(r, "click", (s) => {
    eU() || o.current && (i(s, () => o.current), o.current = null);
  }, !0);
  let a = Q.useRef({ x: 0, y: 0 });
  ui(r, "touchstart", (s) => {
    a.current.x = s.touches[0].clientX, a.current.y = s.touches[0].clientY;
  }, !0), ui(r, "touchend", (s) => {
    let l = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(l.x - a.current.x) >= Pg || Math.abs(l.y - a.current.y) >= Pg)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), o0(r, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function So(...A) {
  return Q.useMemo(() => Xd(...A), [...A]);
}
function a0(A, e, t, r) {
  let n = Vr(t);
  Q.useEffect(() => {
    A = A ?? window;
    function i(o) {
      n.current(o);
    }
    return A.addEventListener(e, i, r), () => A.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function rU() {
  let A;
  return { before({ doc: e }) {
    var t;
    let r = e.documentElement, n = (t = e.defaultView) != null ? t : window;
    A = Math.max(0, n.innerWidth - r.clientWidth);
  }, after({ doc: e, d: t }) {
    let r = e.documentElement, n = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, A - n);
    t.style(r, "paddingRight", `${i}px`);
  } };
}
function nU() {
  return i0() ? { before({ doc: A, d: e, meta: t }) {
    function r(n) {
      return t.containers.flatMap((i) => i()).some((i) => i.contains(n));
    }
    e.microTask(() => {
      var n;
      if (window.getComputedStyle(A.documentElement).scrollBehavior !== "auto") {
        let a = ur();
        a.style(A.documentElement, "scrollBehavior", "auto"), e.add(() => e.microTask(() => a.dispose()));
      }
      let i = (n = window.scrollY) != null ? n : window.pageYOffset, o = null;
      e.addEventListener(A, "click", (a) => {
        if (a.target instanceof HTMLElement) try {
          let s = a.target.closest("a");
          if (!s) return;
          let { hash: l } = new URL(s.href), u = A.querySelector(l);
          u && !r(u) && (o = u);
        } catch {
        }
      }, !0), e.addEventListener(A, "touchstart", (a) => {
        if (a.target instanceof HTMLElement) if (r(a.target)) {
          let s = a.target;
          for (; s.parentElement && r(s.parentElement); ) s = s.parentElement;
          e.style(s, "overscrollBehavior", "contain");
        } else e.style(a.target, "touchAction", "none");
      }), e.addEventListener(A, "touchmove", (a) => {
        if (a.target instanceof HTMLElement) {
          if (a.target.tagName === "INPUT") return;
          if (r(a.target)) {
            let s = a.target;
            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); ) s = s.parentElement;
            s.dataset.headlessuiPortal === "" && a.preventDefault();
          } else a.preventDefault();
        }
      }, { passive: !1 }), e.add(() => {
        var a;
        let s = (a = window.scrollY) != null ? a : window.pageYOffset;
        i !== s && window.scrollTo(0, i), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function iU() {
  return { before({ doc: A, d: e }) {
    e.style(A.documentElement, "overflow", "hidden");
  } };
}
function oU(A) {
  let e = {};
  for (let t of A) Object.assign(e, t(e));
  return e;
}
let Qr = e0(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let r = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: ur(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(e), this.set(A, r), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let r = { doc: A, d: e, meta: oU(t) }, n = [nU(), rU(), iU()];
  n.forEach(({ before: i }) => i == null ? void 0 : i(r)), n.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: A }) {
  A.dispose();
}, TEARDOWN({ doc: A }) {
  this.delete(A);
} });
Qr.subscribe(() => {
  let A = Qr.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [t] of A) e.set(t, t.documentElement.style.overflow);
  for (let t of A.values()) {
    let r = e.get(t.doc) === "hidden", n = t.count !== 0;
    (n && !r || !n && r) && Qr.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Qr.dispatch("TEARDOWN", t);
  }
});
function aU(A, e, t = () => ({ containers: [] })) {
  let r = t0(Qr), n = e ? r.get(e) : void 0, i = n ? n.count > 0 : !1;
  return JA(() => {
    if (!(!e || !A)) return Qr.dispatch("PUSH", e, t), () => Qr.dispatch("POP", e, t);
  }, [A, e]), i;
}
function sU(A, e, t = () => [document.body]) {
  let r = jn(A, "scroll-lock");
  aU(r, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], t] };
  });
}
function lU(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function uU(A = 0) {
  let [e, t] = Q.useState(A), r = Q.useCallback((s) => t(s), [e]), n = Q.useCallback((s) => t((l) => l | s), [e]), i = Q.useCallback((s) => (e & s) === s, [e]), o = Q.useCallback((s) => t((l) => l & ~s), [t]), a = Q.useCallback((s) => t((l) => l ^ s), [t]);
  return { flags: e, setFlag: r, addFlag: n, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var cU = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(cU || {});
function fU(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function dU(A, e, t, r) {
  let [n, i] = Q.useState(t), { hasFlag: o, addFlag: a, removeFlag: s } = uU(A && n ? 3 : 0), l = Q.useRef(!1), u = Q.useRef(!1), c = Yd();
  return JA(function f() {
    var B;
    if (!A) return;
    t && i(!0);
    let p = e.current;
    return p ? ((B = r == null ? void 0 : r.start) == null || B.call(r, t), BU(p, { inFlight: l, prepare() {
      u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (t ? (a(3), s(4)) : (a(4), s(2)));
    }, run() {
      u.current ? t ? (s(3), a(4)) : (s(4), a(3)) : t ? s(1) : a(1);
    }, done() {
      var w;
      u.current && typeof p.getAnimations == "function" && p.getAnimations().length > 0 || (l.current = !1, s(7), t || i(!1), (w = r == null ? void 0 : r.end) == null || w.call(r, t));
    } })) : t ? (a(3), c.nextFrame(() => f())) : void 0;
  }, [A, t, e, c]), A ? [n, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function BU(A, { prepare: e, run: t, done: r, inFlight: n }) {
  let i = ur();
  return pU(A, { prepare: e, inFlight: n }), i.nextFrame(() => {
    i.add(gU(A, r)), t();
  }), i.dispose;
}
function gU(A, e) {
  let t = lU(e), r = ur();
  if (!A) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(A), [o, a] = [n, i].map((l) => {
    let [u = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, f) => f - c);
    return u;
  }), s = o + a;
  if (s !== 0) {
    let l = r.group((u) => {
      let c = u.setTimeout(() => {
        t(), u.dispose();
      }, s);
      u.addEventListener(A, "transitionrun", (f) => {
        f.target === f.currentTarget && (c(), u.addEventListener(A, "transitioncancel", (B) => {
          B.target === B.currentTarget && (t(), l());
        }));
      });
    });
    r.addEventListener(A, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), r.dispose());
    });
  } else t();
  return r.dispose;
}
function pU(A, { inFlight: e, prepare: t }) {
  if (e != null && e.current) {
    t();
    return;
  }
  let r = A.style.transition;
  A.style.transition = "none", t(), A.offsetHeight, A.style.transition = r;
}
function jd(A, e) {
  let t = Q.useRef([]), r = hA(A);
  Q.useEffect(() => {
    let n = [...t.current];
    for (let [i, o] of e.entries()) if (t.current[i] !== o) {
      let a = r(e, n);
      return t.current = e, a;
    }
  }, [r, ...e]);
}
function Jn(A) {
  return s0(A) ? (A.nodeName || "").toLowerCase() : "#document";
}
function de(A) {
  var e;
  return (A == null || (e = A.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function cr(A) {
  var e;
  return (e = (s0(A) ? A.ownerDocument : A.document) || window.document) == null ? void 0 : e.documentElement;
}
function s0(A) {
  return A instanceof Node || A instanceof de(A).Node;
}
function re(A) {
  return A instanceof Element || A instanceof de(A).Element;
}
function qe(A) {
  return A instanceof HTMLElement || A instanceof de(A).HTMLElement;
}
function _g(A) {
  return typeof ShadowRoot > "u" ? !1 : A instanceof ShadowRoot || A instanceof de(A).ShadowRoot;
}
function Lo(A) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: r,
    display: n
  } = _e(A);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + t) && !["inline", "contents"].includes(n);
}
function hU(A) {
  return ["table", "td", "th"].includes(Jn(A));
}
function Cl(A) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return A.matches(e);
    } catch {
      return !1;
    }
  });
}
function Jd(A) {
  const e = Zd(), t = _e(A);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function wU(A) {
  let e = er(A);
  for (; qe(e) && !Rn(e); ) {
    if (Cl(e))
      return null;
    if (Jd(e))
      return e;
    e = er(e);
  }
  return null;
}
function Zd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rn(A) {
  return ["html", "body", "#document"].includes(Jn(A));
}
function _e(A) {
  return de(A).getComputedStyle(A);
}
function Ql(A) {
  return re(A) ? {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  } : {
    scrollLeft: A.pageXOffset,
    scrollTop: A.pageYOffset
  };
}
function er(A) {
  if (Jn(A) === "html")
    return A;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    A.assignedSlot || // DOM Element detected.
    A.parentNode || // ShadowRoot detected.
    _g(A) && A.host || // Fallback.
    cr(A)
  );
  return _g(e) ? e.host : e;
}
function l0(A) {
  const e = er(A);
  return Rn(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : qe(e) && Lo(e) ? e : l0(e);
}
function Af(A, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const n = l0(A), i = n === ((r = A.ownerDocument) == null ? void 0 : r.body), o = de(n);
  return i ? e.concat(o, o.visualViewport || [], Lo(n) ? n : [], o.frameElement && t ? Af(o.frameElement) : []) : e.concat(n, Af(n, [], t));
}
const co = Math.min, In = Math.max, Ks = Math.round, tr = (A) => ({
  x: A,
  y: A
}), mU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vU = {
  start: "end",
  end: "start"
};
function ef(A, e, t) {
  return In(A, co(e, t));
}
function bo(A, e) {
  return typeof A == "function" ? A(e) : A;
}
function Nr(A) {
  return A.split("-")[0];
}
function To(A) {
  return A.split("-")[1];
}
function u0(A) {
  return A === "x" ? "y" : "x";
}
function qd(A) {
  return A === "y" ? "height" : "width";
}
function Nn(A) {
  return ["top", "bottom"].includes(Nr(A)) ? "y" : "x";
}
function AB(A) {
  return u0(Nn(A));
}
function CU(A, e, t) {
  t === void 0 && (t = !1);
  const r = To(A), n = AB(A), i = qd(n);
  let o = n === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Rs(o)), [o, Rs(o)];
}
function QU(A) {
  const e = Rs(A);
  return [tf(A), e, tf(e)];
}
function tf(A) {
  return A.replace(/start|end/g, (e) => vU[e]);
}
function yU(A, e, t) {
  const r = ["left", "right"], n = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (A) {
    case "top":
    case "bottom":
      return t ? e ? n : r : e ? r : n;
    case "left":
    case "right":
      return e ? i : o;
    default:
      return [];
  }
}
function FU(A, e, t, r) {
  const n = To(A);
  let i = yU(Nr(A), t === "start", r);
  return n && (i = i.map((o) => o + "-" + n), e && (i = i.concat(i.map(tf)))), i;
}
function Rs(A) {
  return A.replace(/left|right|bottom|top/g, (e) => mU[e]);
}
function UU(A) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...A
  };
}
function c0(A) {
  return typeof A != "number" ? UU(A) : {
    top: A,
    right: A,
    bottom: A,
    left: A
  };
}
function Ns(A) {
  const {
    x: e,
    y: t,
    width: r,
    height: n
  } = A;
  return {
    width: r,
    height: n,
    top: t,
    left: e,
    right: e + r,
    bottom: t + n,
    x: e,
    y: t
  };
}
function Gg(A, e, t) {
  let {
    reference: r,
    floating: n
  } = A;
  const i = Nn(e), o = AB(e), a = qd(o), s = Nr(e), l = i === "y", u = r.x + r.width / 2 - n.width / 2, c = r.y + r.height / 2 - n.height / 2, f = r[a] / 2 - n[a] / 2;
  let B;
  switch (s) {
    case "top":
      B = {
        x: u,
        y: r.y - n.height
      };
      break;
    case "bottom":
      B = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      B = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      B = {
        x: r.x - n.width,
        y: c
      };
      break;
    default:
      B = {
        x: r.x,
        y: r.y
      };
  }
  switch (To(e)) {
    case "start":
      B[o] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      B[o] += f * (t && l ? -1 : 1);
      break;
  }
  return B;
}
const EU = async (A, e, t) => {
  const {
    placement: r = "bottom",
    strategy: n = "absolute",
    middleware: i = [],
    platform: o
  } = t, a = i.filter(Boolean), s = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let l = await o.getElementRects({
    reference: A,
    floating: e,
    strategy: n
  }), {
    x: u,
    y: c
  } = Gg(l, r, s), f = r, B = {}, p = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: g
    } = a[w], {
      x: d,
      y: h,
      data: m,
      reset: v
    } = await g({
      x: u,
      y: c,
      initialPlacement: r,
      placement: f,
      strategy: n,
      middlewareData: B,
      rects: l,
      platform: o,
      elements: {
        reference: A,
        floating: e
      }
    });
    u = d ?? u, c = h ?? c, B = {
      ...B,
      [y]: {
        ...B[y],
        ...m
      }
    }, v && p <= 50 && (p++, typeof v == "object" && (v.placement && (f = v.placement), v.rects && (l = v.rects === !0 ? await o.getElementRects({
      reference: A,
      floating: e,
      strategy: n
    }) : v.rects), {
      x: u,
      y: c
    } = Gg(l, f, s)), w = -1);
  }
  return {
    x: u,
    y: c,
    placement: f,
    strategy: n,
    middlewareData: B
  };
};
async function f0(A, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: r,
    y: n,
    platform: i,
    rects: o,
    elements: a,
    strategy: s
  } = A, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: B = 0
  } = bo(e, A), p = c0(B), y = a[f ? c === "floating" ? "reference" : "floating" : c], g = Ns(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(y))) == null || t ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: s
  })), d = c === "floating" ? {
    x: r,
    y: n,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = Ns(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: d,
    offsetParent: h,
    strategy: s
  }) : d);
  return {
    top: (g.top - v.top + p.top) / m.y,
    bottom: (v.bottom - g.bottom + p.bottom) / m.y,
    left: (g.left - v.left + p.left) / m.x,
    right: (v.right - g.right + p.right) / m.x
  };
}
const IU = (A) => ({
  name: "arrow",
  options: A,
  async fn(e) {
    const {
      x: t,
      y: r,
      placement: n,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: s
    } = e, {
      element: l,
      padding: u = 0
    } = bo(A, e) || {};
    if (l == null)
      return {};
    const c = c0(u), f = {
      x: t,
      y: r
    }, B = AB(n), p = qd(B), w = await o.getDimensions(l), y = B === "y", g = y ? "top" : "left", d = y ? "bottom" : "right", h = y ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[B] - f[B] - i.floating[p], v = f[B] - i.reference[B], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let F = C ? C[h] : 0;
    (!F || !await (o.isElement == null ? void 0 : o.isElement(C))) && (F = a.floating[h] || i.floating[p]);
    const U = m / 2 - v / 2, E = F / 2 - w[p] / 2 - 1, S = co(c[g], E), P = co(c[d], E), _ = S, M = F - w[p] - P, G = F / 2 - w[p] / 2 + U, Z = ef(_, G, M), V = !s.arrow && To(n) != null && G !== Z && i.reference[p] / 2 - (G < _ ? S : P) - w[p] / 2 < 0, K = V ? G < _ ? G - _ : G - M : 0;
    return {
      [B]: f[B] + K,
      data: {
        [B]: Z,
        centerOffset: G - Z - K,
        ...V && {
          alignmentOffset: K
        }
      },
      reset: V
    };
  }
}), HU = function(A) {
  return A === void 0 && (A = {}), {
    name: "flip",
    options: A,
    async fn(e) {
      var t, r;
      const {
        placement: n,
        middlewareData: i,
        rects: o,
        initialPlacement: a,
        platform: s,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: B = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: w = !0,
        ...y
      } = bo(A, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const g = Nr(n), d = Nn(a), h = Nr(a) === a, m = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), v = f || (h || !w ? [Rs(a)] : QU(a)), C = p !== "none";
      !f && C && v.push(...FU(a, w, p, m));
      const F = [a, ...v], U = await f0(e, y), E = [];
      let S = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(U[g]), c) {
        const G = CU(n, o, m);
        E.push(U[G[0]], U[G[1]]);
      }
      if (S = [...S, {
        placement: n,
        overflows: E
      }], !E.every((G) => G <= 0)) {
        var P, _;
        const G = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, Z = F[G];
        if (Z)
          return {
            data: {
              index: G,
              overflows: S
            },
            reset: {
              placement: Z
            }
          };
        let V = (_ = S.filter((K) => K.overflows[0] <= 0).sort((K, I) => K.overflows[1] - I.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!V)
          switch (B) {
            case "bestFit": {
              var M;
              const K = (M = S.filter((I) => {
                if (C) {
                  const x = Nn(I.placement);
                  return x === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((x) => x > 0).reduce((x, L) => x + L, 0)]).sort((I, x) => I[1] - x[1])[0]) == null ? void 0 : M[0];
              K && (V = K);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (n !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function xU(A, e) {
  const {
    placement: t,
    platform: r,
    elements: n
  } = A, i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), o = Nr(t), a = To(t), s = Nn(t) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, c = bo(e, A);
  let {
    mainAxis: f,
    crossAxis: B,
    alignmentAxis: p
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return a && typeof p == "number" && (B = a === "end" ? p * -1 : p), s ? {
    x: B * u,
    y: f * l
  } : {
    x: f * l,
    y: B * u
  };
}
const SU = function(A) {
  return A === void 0 && (A = 0), {
    name: "offset",
    options: A,
    async fn(e) {
      var t, r;
      const {
        x: n,
        y: i,
        placement: o,
        middlewareData: a
      } = e, s = await xU(e, A);
      return o === ((t = a.offset) == null ? void 0 : t.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: n + s.x,
        y: i + s.y,
        data: {
          ...s,
          placement: o
        }
      };
    }
  };
}, LU = function(A) {
  return A === void 0 && (A = {}), {
    name: "shift",
    options: A,
    async fn(e) {
      const {
        x: t,
        y: r,
        placement: n
      } = e, {
        mainAxis: i = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: g,
              y: d
            } = y;
            return {
              x: g,
              y: d
            };
          }
        },
        ...s
      } = bo(A, e), l = {
        x: t,
        y: r
      }, u = await f0(e, s), c = Nn(Nr(n)), f = u0(c);
      let B = l[f], p = l[c];
      if (i) {
        const y = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", d = B + u[y], h = B - u[g];
        B = ef(d, B, h);
      }
      if (o) {
        const y = c === "y" ? "top" : "left", g = c === "y" ? "bottom" : "right", d = p + u[y], h = p - u[g];
        p = ef(d, p, h);
      }
      const w = a.fn({
        ...e,
        [f]: B,
        [c]: p
      });
      return {
        ...w,
        data: {
          x: w.x - t,
          y: w.y - r
        }
      };
    }
  };
};
function d0(A) {
  const e = _e(A);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const n = qe(A), i = n ? A.offsetWidth : t, o = n ? A.offsetHeight : r, a = Ks(t) !== i || Ks(r) !== o;
  return a && (t = i, r = o), {
    width: t,
    height: r,
    $: a
  };
}
function B0(A) {
  return re(A) ? A : A.contextElement;
}
function Hn(A) {
  const e = B0(A);
  if (!qe(e))
    return tr(1);
  const t = e.getBoundingClientRect(), {
    width: r,
    height: n,
    $: i
  } = d0(e);
  let o = (i ? Ks(t.width) : t.width) / r, a = (i ? Ks(t.height) : t.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const bU = /* @__PURE__ */ tr(0);
function g0(A) {
  const e = de(A);
  return !Zd() || !e.visualViewport ? bU : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function TU(A, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== de(A) ? !1 : e;
}
function fo(A, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const n = A.getBoundingClientRect(), i = B0(A);
  let o = tr(1);
  e && (r ? re(r) && (o = Hn(r)) : o = Hn(A));
  const a = TU(i, t, r) ? g0(i) : tr(0);
  let s = (n.left + a.x) / o.x, l = (n.top + a.y) / o.y, u = n.width / o.x, c = n.height / o.y;
  if (i) {
    const f = de(i), B = r && re(r) ? de(r) : r;
    let p = f, w = p.frameElement;
    for (; w && r && B !== p; ) {
      const y = Hn(w), g = w.getBoundingClientRect(), d = _e(w), h = g.left + (w.clientLeft + parseFloat(d.paddingLeft)) * y.x, m = g.top + (w.clientTop + parseFloat(d.paddingTop)) * y.y;
      s *= y.x, l *= y.y, u *= y.x, c *= y.y, s += h, l += m, p = de(w), w = p.frameElement;
    }
  }
  return Ns({
    width: u,
    height: c,
    x: s,
    y: l
  });
}
function kU(A) {
  let {
    elements: e,
    rect: t,
    offsetParent: r,
    strategy: n
  } = A;
  const i = n === "fixed", o = cr(r), a = e ? Cl(e.floating) : !1;
  if (r === o || a && i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = tr(1);
  const u = tr(0), c = qe(r);
  if ((c || !c && !i) && ((Jn(r) !== "body" || Lo(o)) && (s = Ql(r)), qe(r))) {
    const f = fo(r);
    l = Hn(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - s.scrollLeft * l.x + u.x,
    y: t.y * l.y - s.scrollTop * l.y + u.y
  };
}
function OU(A) {
  return Array.from(A.getClientRects());
}
function p0(A) {
  return fo(cr(A)).left + Ql(A).scrollLeft;
}
function DU(A) {
  const e = cr(A), t = Ql(A), r = A.ownerDocument.body, n = In(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = In(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -t.scrollLeft + p0(A);
  const a = -t.scrollTop;
  return _e(r).direction === "rtl" && (o += In(e.clientWidth, r.clientWidth) - n), {
    width: n,
    height: i,
    x: o,
    y: a
  };
}
function KU(A, e) {
  const t = de(A), r = cr(A), n = t.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, s = 0;
  if (n) {
    i = n.width, o = n.height;
    const l = Zd();
    (!l || l && e === "fixed") && (a = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function RU(A, e) {
  const t = fo(A, !0, e === "fixed"), r = t.top + A.clientTop, n = t.left + A.clientLeft, i = qe(A) ? Hn(A) : tr(1), o = A.clientWidth * i.x, a = A.clientHeight * i.y, s = n * i.x, l = r * i.y;
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Vg(A, e, t) {
  let r;
  if (e === "viewport")
    r = KU(A, t);
  else if (e === "document")
    r = DU(cr(A));
  else if (re(e))
    r = RU(e, t);
  else {
    const n = g0(A);
    r = {
      ...e,
      x: e.x - n.x,
      y: e.y - n.y
    };
  }
  return Ns(r);
}
function h0(A, e) {
  const t = er(A);
  return t === e || !re(t) || Rn(t) ? !1 : _e(t).position === "fixed" || h0(t, e);
}
function NU(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let r = Af(A, [], !1).filter((a) => re(a) && Jn(a) !== "body"), n = null;
  const i = _e(A).position === "fixed";
  let o = i ? er(A) : A;
  for (; re(o) && !Rn(o); ) {
    const a = _e(o), s = Jd(o);
    !s && a.position === "fixed" && (n = null), (i ? !s && !n : !s && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || Lo(o) && !s && h0(A, o)) ? r = r.filter((u) => u !== o) : n = a, o = er(o);
  }
  return e.set(A, r), r;
}
function MU(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: n
  } = A;
  const o = [...t === "clippingAncestors" ? Cl(e) ? [] : NU(e, this._c) : [].concat(t), r], a = o[0], s = o.reduce((l, u) => {
    const c = Vg(e, u, n);
    return l.top = In(c.top, l.top), l.right = co(c.right, l.right), l.bottom = co(c.bottom, l.bottom), l.left = In(c.left, l.left), l;
  }, Vg(e, a, n));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function PU(A) {
  const {
    width: e,
    height: t
  } = d0(A);
  return {
    width: e,
    height: t
  };
}
function _U(A, e, t) {
  const r = qe(e), n = cr(e), i = t === "fixed", o = fo(A, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = tr(0);
  if (r || !r && !i)
    if ((Jn(e) !== "body" || Lo(n)) && (a = Ql(e)), r) {
      const c = fo(e, !0, i, e);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else n && (s.x = p0(n));
  const l = o.left + a.scrollLeft - s.x, u = o.top + a.scrollTop - s.y;
  return {
    x: l,
    y: u,
    width: o.width,
    height: o.height
  };
}
function Fu(A) {
  return _e(A).position === "static";
}
function $g(A, e) {
  return !qe(A) || _e(A).position === "fixed" ? null : e ? e(A) : A.offsetParent;
}
function w0(A, e) {
  const t = de(A);
  if (Cl(A))
    return t;
  if (!qe(A)) {
    let n = er(A);
    for (; n && !Rn(n); ) {
      if (re(n) && !Fu(n))
        return n;
      n = er(n);
    }
    return t;
  }
  let r = $g(A, e);
  for (; r && hU(r) && Fu(r); )
    r = $g(r, e);
  return r && Rn(r) && Fu(r) && !Jd(r) ? t : r || wU(A) || t;
}
const GU = async function(A) {
  const e = this.getOffsetParent || w0, t = this.getDimensions, r = await t(A.floating);
  return {
    reference: _U(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function VU(A) {
  return _e(A).direction === "rtl";
}
const $U = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kU,
  getDocumentElement: cr,
  getClippingRect: MU,
  getOffsetParent: w0,
  getElementRects: GU,
  getClientRects: OU,
  getDimensions: PU,
  getScale: Hn,
  isElement: re,
  isRTL: VU
}, WU = SU, XU = LU, YU = HU, Wg = IU, zU = (A, e, t) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: $U,
    ...t
  }, i = {
    ...n.platform,
    _c: r
  };
  return EU(A, e, {
    ...n,
    platform: i
  });
};
var qa = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
function Ms(A, e) {
  if (A === e)
    return !0;
  if (typeof A != typeof e)
    return !1;
  if (typeof A == "function" && A.toString() === e.toString())
    return !0;
  let t, r, n;
  if (A && e && typeof A == "object") {
    if (Array.isArray(A)) {
      if (t = A.length, t !== e.length) return !1;
      for (r = t; r-- !== 0; )
        if (!Ms(A[r], e[r]))
          return !1;
      return !0;
    }
    if (n = Object.keys(A), t = n.length, t !== Object.keys(e).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(e, n[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const i = n[r];
      if (!(i === "_owner" && A.$$typeof) && !Ms(A[i], e[i]))
        return !1;
    }
    return !0;
  }
  return A !== A && e !== e;
}
function m0(A) {
  return typeof window > "u" ? 1 : (A.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xg(A, e) {
  const t = m0(A);
  return Math.round(e * t) / t;
}
function Yg(A) {
  const e = Q.useRef(A);
  return qa(() => {
    e.current = A;
  }), e;
}
function jU(A) {
  A === void 0 && (A = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: n,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: s,
    open: l
  } = A, [u, c] = Q.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [f, B] = Q.useState(r);
  Ms(f, r) || B(r);
  const [p, w] = Q.useState(null), [y, g] = Q.useState(null), d = Q.useCallback((K) => {
    K !== C.current && (C.current = K, w(K));
  }, []), h = Q.useCallback((K) => {
    K !== F.current && (F.current = K, g(K));
  }, []), m = i || p, v = o || y, C = Q.useRef(null), F = Q.useRef(null), U = Q.useRef(u), E = s != null, S = Yg(s), P = Yg(n), _ = Q.useCallback(() => {
    if (!C.current || !F.current)
      return;
    const K = {
      placement: e,
      strategy: t,
      middleware: f
    };
    P.current && (K.platform = P.current), zU(C.current, F.current, K).then((I) => {
      const x = {
        ...I,
        isPositioned: !0
      };
      M.current && !Ms(U.current, x) && (U.current = x, ml.flushSync(() => {
        c(x);
      }));
    });
  }, [f, e, t, P]);
  qa(() => {
    l === !1 && U.current.isPositioned && (U.current.isPositioned = !1, c((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [l]);
  const M = Q.useRef(!1);
  qa(() => (M.current = !0, () => {
    M.current = !1;
  }), []), qa(() => {
    if (m && (C.current = m), v && (F.current = v), m && v) {
      if (S.current)
        return S.current(m, v, _);
      _();
    }
  }, [m, v, _, S, E]);
  const G = Q.useMemo(() => ({
    reference: C,
    floating: F,
    setReference: d,
    setFloating: h
  }), [d, h]), Z = Q.useMemo(() => ({
    reference: m,
    floating: v
  }), [m, v]), V = Q.useMemo(() => {
    const K = {
      position: t,
      left: 0,
      top: 0
    };
    if (!Z.floating)
      return K;
    const I = Xg(Z.floating, u.x), x = Xg(Z.floating, u.y);
    return a ? {
      ...K,
      transform: "translate(" + I + "px, " + x + "px)",
      ...m0(Z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: I,
      top: x
    };
  }, [t, a, Z.floating, u.x, u.y]);
  return Q.useMemo(() => ({
    ...u,
    update: _,
    refs: G,
    elements: Z,
    floatingStyles: V
  }), [u, _, G, Z, V]);
}
const JU = (A) => {
  function e(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: A,
    fn(t) {
      const {
        element: r,
        padding: n
      } = typeof A == "function" ? A(t) : A;
      return r && e(r) ? r.current != null ? Wg({
        element: r.current,
        padding: n
      }).fn(t) : {} : r ? Wg({
        element: r,
        padding: n
      }).fn(t) : {};
    }
  };
}, ZU = (A, e) => ({
  ...WU(A),
  options: [A, e]
}), qU = (A, e) => ({
  ...XU(A),
  options: [A, e]
}), A1 = (A, e) => ({
  ...YU(A),
  options: [A, e]
}), e1 = (A, e) => ({
  ...JU(A),
  options: [A, e]
}), v0 = {
  ...tc
}, t1 = v0.useInsertionEffect, r1 = t1 || ((A) => A());
function n1(A) {
  const e = Q.useRef(() => {
  });
  return r1(() => {
    e.current = A;
  }), Q.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var rf = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
let zg = !1, i1 = 0;
const jg = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + i1++
);
function o1() {
  const [A, e] = Q.useState(() => zg ? jg() : void 0);
  return rf(() => {
    A == null && e(jg());
  }, []), Q.useEffect(() => {
    zg = !0;
  }, []), A;
}
const a1 = v0.useId, s1 = a1 || o1;
function l1() {
  const A = /* @__PURE__ */ new Map();
  return {
    emit(e, t) {
      var r;
      (r = A.get(e)) == null || r.forEach((n) => n(t));
    },
    on(e, t) {
      A.set(e, [...A.get(e) || [], t]);
    },
    off(e, t) {
      var r;
      A.set(e, ((r = A.get(e)) == null ? void 0 : r.filter((n) => n !== t)) || []);
    }
  };
}
const u1 = /* @__PURE__ */ Q.createContext(null), c1 = /* @__PURE__ */ Q.createContext(null), f1 = () => {
  var A;
  return ((A = Q.useContext(u1)) == null ? void 0 : A.id) || null;
}, d1 = () => Q.useContext(c1);
function B1(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = A, n = s1(), i = Q.useRef({}), [o] = Q.useState(() => l1()), a = f1() != null, [s, l] = Q.useState(r.reference), u = n1((B, p, w) => {
    i.current.openEvent = B ? p : void 0, o.emit("openchange", {
      open: B,
      event: p,
      reason: w,
      nested: a
    }), t == null || t(B, p, w);
  }), c = Q.useMemo(() => ({
    setPositionReference: l
  }), []), f = Q.useMemo(() => ({
    reference: s || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [s, r.reference, r.floating]);
  return Q.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: f,
    events: o,
    floatingId: n,
    refs: c
  }), [e, u, f, o, n, c]);
}
function g1(A) {
  A === void 0 && (A = {});
  const {
    nodeId: e
  } = A, t = B1({
    ...A,
    elements: {
      reference: null,
      floating: null,
      ...A.elements
    }
  }), r = A.rootContext || t, n = r.elements, [i, o] = Q.useState(null), [a, s] = Q.useState(null), u = (n == null ? void 0 : n.reference) || i, c = Q.useRef(null), f = d1();
  rf(() => {
    u && (c.current = u);
  }, [u]);
  const B = jU({
    ...A,
    elements: {
      ...n,
      ...a && {
        reference: a
      }
    }
  }), p = Q.useCallback((h) => {
    const m = re(h) ? {
      getBoundingClientRect: () => h.getBoundingClientRect(),
      contextElement: h
    } : h;
    s(m), B.refs.setReference(m);
  }, [B.refs]), w = Q.useCallback((h) => {
    (re(h) || h === null) && (c.current = h, o(h)), (re(B.refs.reference.current) || B.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    h !== null && !re(h)) && B.refs.setReference(h);
  }, [B.refs]), y = Q.useMemo(() => ({
    ...B.refs,
    setReference: w,
    setPositionReference: p,
    domReference: c
  }), [B.refs, w, p]), g = Q.useMemo(() => ({
    ...B.elements,
    domReference: u
  }), [B.elements, u]), d = Q.useMemo(() => ({
    ...B,
    ...r,
    refs: y,
    elements: g,
    nodeId: e
  }), [B, y, g, e, r]);
  return rf(() => {
    r.dataRef.current.floatingContext = d;
    const h = f == null ? void 0 : f.nodesRef.current.find((m) => m.id === e);
    h && (h.context = d);
  }), Q.useMemo(() => ({
    ...B,
    context: d,
    refs: y,
    elements: g
  }), [B, y, g, d]);
}
let yl = Q.createContext(null);
yl.displayName = "OpenClosedContext";
var De = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(De || {});
function Fl() {
  return Q.useContext(yl);
}
function p1({ value: A, children: e }) {
  return N.createElement(yl.Provider, { value: A }, e);
}
function h1({ children: A }) {
  return N.createElement(yl.Provider, { value: null }, A);
}
function w1(A) {
  function e() {
    document.readyState !== "loading" && (A(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
let Ot = [];
w1(() => {
  function A(e) {
    e.target instanceof HTMLElement && e.target !== document.body && Ot[0] !== e.target && (Ot.unshift(e.target), Ot = Ot.filter((t) => t != null && t.isConnected), Ot.splice(10));
  }
  window.addEventListener("click", A, { capture: !0 }), window.addEventListener("mousedown", A, { capture: !0 }), window.addEventListener("focus", A, { capture: !0 }), document.body.addEventListener("click", A, { capture: !0 }), document.body.addEventListener("mousedown", A, { capture: !0 }), document.body.addEventListener("focus", A, { capture: !0 });
});
function C0(A) {
  let e = hA(A), t = Q.useRef(!1);
  Q.useEffect(() => (t.current = !1, () => {
    t.current = !0, vl(() => {
      t.current && e();
    });
  }), [e]);
}
function m1() {
  let A = typeof document > "u";
  return "useSyncExternalStore" in tc ? ((e) => e.useSyncExternalStore)(tc)(() => () => {
  }, () => !1, () => !A) : !1;
}
function ko() {
  let A = m1(), [e, t] = Q.useState(xr.isHandoffComplete);
  return e && xr.isHandoffComplete === !1 && t(!1), Q.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), Q.useEffect(() => xr.handoff(), []), A ? !1 : e;
}
let Q0 = Q.createContext(!1);
function v1() {
  return Q.useContext(Q0);
}
function Jg(A) {
  return N.createElement(Q0.Provider, { value: A.force }, A.children);
}
function C1(A) {
  let e = v1(), t = Q.useContext(F0), r = So(A), [n, i] = Q.useState(() => {
    var o;
    if (!e && t !== null) return (o = t.current) != null ? o : null;
    if (xr.isServer) return null;
    let a = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (a) return a;
    if (r === null) return null;
    let s = r.createElement("div");
    return s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s);
  });
  return Q.useEffect(() => {
    n !== null && (r != null && r.body.contains(n) || r == null || r.body.appendChild(n));
  }, [n, r]), Q.useEffect(() => {
    e || t !== null && i(t.current);
  }, [t, i, e]), n;
}
let y0 = Q.Fragment, Q1 = se(function(A, e) {
  let t = A, r = Q.useRef(null), n = At(kF((u) => {
    r.current = u;
  }), e), i = So(r), o = C1(r), [a] = Q.useState(() => {
    var u;
    return xr.isServer ? null : (u = i == null ? void 0 : i.createElement("div")) != null ? u : null;
  }), s = Q.useContext(nf), l = ko();
  return JA(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), JA(() => {
    if (a && s) return s.register(a);
  }, [s, a]), C0(() => {
    var u;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((u = o.parentElement) == null || u.removeChild(o)));
  }), l ? !o || !a ? null : ml.createPortal(xe({ ourProps: { ref: n }, theirProps: t, slot: {}, defaultTag: y0, name: "Portal" }), a) : null;
});
function y1(A, e) {
  let t = At(e), { enabled: r = !0, ...n } = A;
  return r ? N.createElement(Q1, { ...n, ref: t }) : xe({ ourProps: { ref: t }, theirProps: n, slot: {}, defaultTag: y0, name: "Portal" });
}
let F1 = Q.Fragment, F0 = Q.createContext(null);
function U1(A, e) {
  let { target: t, ...r } = A, n = { ref: At(e) };
  return N.createElement(F0.Provider, { value: t }, xe({ ourProps: n, theirProps: r, defaultTag: F1, name: "Popover.Group" }));
}
let nf = Q.createContext(null);
function E1() {
  let A = Q.useContext(nf), e = Q.useRef([]), t = hA((i) => (e.current.push(i), A && A.register(i), () => r(i))), r = hA((i) => {
    let o = e.current.indexOf(i);
    o !== -1 && e.current.splice(o, 1), A && A.unregister(i);
  }), n = Q.useMemo(() => ({ register: t, unregister: r, portals: e }), [t, r, e]);
  return [e, Q.useMemo(() => function({ children: i }) {
    return N.createElement(nf.Provider, { value: n }, i);
  }, [n])];
}
let I1 = se(y1), U0 = se(U1), H1 = Object.assign(I1, { Group: U0 });
function x1(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let r = jn(A, "escape");
  a0(e, "keydown", (n) => {
    r && (n.defaultPrevented || n.key === A0.Escape && t(n));
  });
}
function S1() {
  var A;
  let [e] = Q.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [t, r] = Q.useState((A = e == null ? void 0 : e.matches) != null ? A : !1);
  return JA(() => {
    if (!e) return;
    function n(i) {
      r(i.matches);
    }
    return e.addEventListener("change", n), () => e.removeEventListener("change", n);
  }, [e]), t;
}
function L1({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
  var r;
  let n = Q.useRef((r = t == null ? void 0 : t.current) != null ? r : null), i = So(n), o = hA(() => {
    var a, s, l;
    let u = [];
    for (let c of A) c !== null && (c instanceof HTMLElement ? u.push(c) : "current" in c && c.current instanceof HTMLElement && u.push(c.current));
    if (e != null && e.current) for (let c of e.current) u.push(c);
    for (let c of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(n.current) || c.contains((l = (s = n.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || u.some((f) => c.contains(f)) || u.push(c));
    return u;
  });
  return { resolveContainers: o, contains: hA((a) => o().some((s) => s.contains(a))), mainTreeNodeRef: n, MainTreeNode: Q.useMemo(() => function() {
    return t != null ? null : N.createElement(jc, { features: Ds.Hidden, ref: n });
  }, [n, t]) };
}
function eB() {
  let A = Q.useRef(!1);
  return JA(() => (A.current = !0, () => {
    A.current = !1;
  }), []), A;
}
var mi = ((A) => (A[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A))(mi || {});
function b1() {
  let A = Q.useRef(0);
  return o0(!0, "keydown", (e) => {
    e.key === "Tab" && (A.current = e.shiftKey ? 1 : 0);
  }, !0), A;
}
function E0(A) {
  if (!A) return /* @__PURE__ */ new Set();
  if (typeof A == "function") return new Set(A());
  let e = /* @__PURE__ */ new Set();
  for (let t of A.current) t.current instanceof HTMLElement && e.add(t.current);
  return e;
}
let T1 = "div";
var hr = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(hr || {});
function k1(A, e) {
  let t = Q.useRef(null), r = At(t, e), { initialFocus: n, initialFocusFallback: i, containers: o, features: a = 15, ...s } = A;
  ko() || (a = 0);
  let l = So(t);
  R1(a, { ownerDocument: l });
  let u = N1(a, { ownerDocument: l, container: t, initialFocus: n, initialFocusFallback: i });
  M1(a, { ownerDocument: l, container: t, containers: o, previousActiveElement: u });
  let c = b1(), f = hA((g) => {
    let d = t.current;
    d && ((h) => h())(() => {
      Ar(c.current, { [mi.Forwards]: () => {
        Ni(d, st.First, { skipElements: [g.relatedTarget, i] });
      }, [mi.Backwards]: () => {
        Ni(d, st.Last, { skipElements: [g.relatedTarget, i] });
      } });
    });
  }), B = jn(!!(a & 2), "focus-trap#tab-lock"), p = Yd(), w = Q.useRef(!1), y = { ref: r, onKeyDown(g) {
    g.key == "Tab" && (w.current = !0, p.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(g) {
    if (!(a & 4)) return;
    let d = E0(o);
    t.current instanceof HTMLElement && d.add(t.current);
    let h = g.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (I0(d, h) || (w.current ? Ni(t.current, Ar(c.current, { [mi.Forwards]: () => st.Next, [mi.Backwards]: () => st.Previous }) | st.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && ft(g.target)));
  } };
  return N.createElement(N.Fragment, null, B && N.createElement(jc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }), xe({ ourProps: y, theirProps: s, defaultTag: T1, name: "FocusTrap" }), B && N.createElement(jc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }));
}
let O1 = se(k1), D1 = Object.assign(O1, { features: hr });
function K1(A = !0) {
  let e = Q.useRef(Ot.slice());
  return jd(([t], [r]) => {
    r === !0 && t === !1 && vl(() => {
      e.current.splice(0);
    }), r === !1 && t === !0 && (e.current = Ot.slice());
  }, [A, Ot, e]), hA(() => {
    var t;
    return (t = e.current.find((r) => r != null && r.isConnected)) != null ? t : null;
  });
}
function R1(A, { ownerDocument: e }) {
  let t = !!(A & 8), r = K1(t);
  jd(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && ft(r());
  }, [t]), C0(() => {
    t && ft(r());
  });
}
function N1(A, { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: n }) {
  let i = Q.useRef(null), o = jn(!!(A & 1), "focus-trap#initial-focus"), a = eB();
  return jd(() => {
    if (A === 0) return;
    if (!o) {
      n != null && n.current && ft(n.current);
      return;
    }
    let s = t.current;
    s && vl(() => {
      if (!a.current) return;
      let l = e == null ? void 0 : e.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === l) {
          i.current = l;
          return;
        }
      } else if (s.contains(l)) {
        i.current = l;
        return;
      }
      if (r != null && r.current) ft(r.current);
      else {
        if (A & 16) {
          if (Ni(s, st.First | st.AutoFocus) !== qc.Error) return;
        } else if (Ni(s, st.First) !== qc.Error) return;
        if (n != null && n.current && (ft(n.current), (e == null ? void 0 : e.activeElement) === n.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n, o, A]), i;
}
function M1(A, { ownerDocument: e, container: t, containers: r, previousActiveElement: n }) {
  let i = eB(), o = !!(A & 4);
  a0(e == null ? void 0 : e.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let s = E0(r);
    t.current instanceof HTMLElement && s.add(t.current);
    let l = n.current;
    if (!l) return;
    let u = a.target;
    u && u instanceof HTMLElement ? I0(s, u) ? (n.current = u, ft(u)) : (a.preventDefault(), a.stopPropagation(), ft(l)) : ft(n.current);
  }, !0);
}
function I0(A, e) {
  for (let t of A) if (t.contains(e)) return !0;
  return !1;
}
function H0(A) {
  var e;
  return !!(A.enter || A.enterFrom || A.enterTo || A.leave || A.leaveFrom || A.leaveTo) || ((e = A.as) != null ? e : S0) !== Q.Fragment || N.Children.count(A.children) === 1;
}
let Ul = Q.createContext(null);
Ul.displayName = "TransitionContext";
var P1 = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(P1 || {});
function _1() {
  let A = Q.useContext(Ul);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
function G1() {
  let A = Q.useContext(El);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
let El = Q.createContext(null);
El.displayName = "NestingContext";
function Il(A) {
  return "children" in A ? Il(A.children) : A.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function x0(A, e) {
  let t = Vr(A), r = Q.useRef([]), n = eB(), i = Yd(), o = hA((B, p = Rt.Hidden) => {
    let w = r.current.findIndex(({ el: y }) => y === B);
    w !== -1 && (Ar(p, { [Rt.Unmount]() {
      r.current.splice(w, 1);
    }, [Rt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var y;
      !Il(r) && n.current && ((y = t.current) == null || y.call(t));
    }));
  }), a = hA((B) => {
    let p = r.current.find(({ el: w }) => w === B);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: B, state: "visible" }), () => o(B, Rt.Unmount);
  }), s = Q.useRef([]), l = Q.useRef(Promise.resolve()), u = Q.useRef({ enter: [], leave: [] }), c = hA((B, p, w) => {
    s.current.splice(0), e && (e.chains.current[p] = e.chains.current[p].filter(([y]) => y !== B)), e == null || e.chains.current[p].push([B, new Promise((y) => {
      s.current.push(y);
    })]), e == null || e.chains.current[p].push([B, new Promise((y) => {
      Promise.all(u.current[p].map(([g, d]) => d)).then(() => y());
    })]), p === "enter" ? l.current = l.current.then(() => e == null ? void 0 : e.wait.current).then(() => w(p)) : w(p);
  }), f = hA((B, p, w) => {
    Promise.all(u.current[p].splice(0).map(([y, g]) => g)).then(() => {
      var y;
      (y = s.current.shift()) == null || y();
    }).then(() => w(p));
  });
  return Q.useMemo(() => ({ children: r, register: a, unregister: o, onStart: c, onStop: f, wait: l, chains: u }), [a, o, r, c, f, u, l]);
}
let S0 = Q.Fragment, L0 = Os.RenderStrategy;
function V1(A, e) {
  var t, r;
  let { transition: n = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: s, enter: l, enterFrom: u, enterTo: c, entered: f, leave: B, leaveFrom: p, leaveTo: w, ...y } = A, g = Q.useRef(null), d = H0(A), h = At(...d ? [g, e] : e === null ? [] : [e]), m = (t = y.unmount) == null || t ? Rt.Unmount : Rt.Hidden, { show: v, appear: C, initial: F } = _1(), [U, E] = Q.useState(v ? "visible" : "hidden"), S = G1(), { register: P, unregister: _ } = S;
  JA(() => P(g), [P, g]), JA(() => {
    if (m === Rt.Hidden && g.current) {
      if (v && U !== "visible") {
        E("visible");
        return;
      }
      return Ar(U, { hidden: () => _(g), visible: () => P(g) });
    }
  }, [U, g, P, _, v, m]);
  let M = ko();
  JA(() => {
    if (d && M && U === "visible" && g.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, U, M, d]);
  let G = F && !C, Z = C && v && F, V = Q.useRef(!1), K = x0(() => {
    V.current || (E("hidden"), _(g));
  }, S), I = hA((BA) => {
    V.current = !0;
    let gA = BA ? "enter" : "leave";
    K.onStart(g, gA, (rA) => {
      rA === "enter" ? i == null || i() : rA === "leave" && (a == null || a());
    });
  }), x = hA((BA) => {
    let gA = BA ? "enter" : "leave";
    V.current = !1, K.onStop(g, gA, (rA) => {
      rA === "enter" ? o == null || o() : rA === "leave" && (s == null || s());
    }), gA === "leave" && !Il(K) && (E("hidden"), _(g));
  });
  Q.useEffect(() => {
    d && n || (I(v), x(v));
  }, [v, d, n]);
  let L = !(!n || !d || !M || G), [, R] = dU(L, g, v, { start: I, end: x }), W = pr({ ref: h, className: ((r = zc(y.className, Z && l, Z && u, R.enter && l, R.enter && R.closed && u, R.enter && !R.closed && c, R.leave && B, R.leave && !R.closed && p, R.leave && R.closed && w, !R.transition && v && f)) == null ? void 0 : r.trim()) || void 0, ...fU(R) }), dA = 0;
  return U === "visible" && (dA |= De.Open), U === "hidden" && (dA |= De.Closed), R.enter && (dA |= De.Opening), R.leave && (dA |= De.Closing), N.createElement(El.Provider, { value: K }, N.createElement(p1, { value: dA }, xe({ ourProps: W, theirProps: y, defaultTag: S0, features: L0, visible: U === "visible", name: "Transition.Child" })));
}
function $1(A, e) {
  let { show: t, appear: r = !1, unmount: n = !0, ...i } = A, o = Q.useRef(null), a = H0(A), s = At(...a ? [o, e] : e === null ? [] : [e]);
  ko();
  let l = Fl();
  if (t === void 0 && l !== null && (t = (l & De.Open) === De.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, c] = Q.useState(t ? "visible" : "hidden"), f = x0(() => {
    t || c("hidden");
  }), [B, p] = Q.useState(!0), w = Q.useRef([t]);
  JA(() => {
    B !== !1 && w.current[w.current.length - 1] !== t && (w.current.push(t), p(!1));
  }, [w, t]);
  let y = Q.useMemo(() => ({ show: t, appear: r, initial: B }), [t, r, B]);
  r0(t, o, () => c("hidden")), JA(() => {
    t ? c("visible") : !Il(f) && o.current !== null && c("hidden");
  }, [t, f]);
  let g = { unmount: n }, d = hA(() => {
    var m;
    B && p(!1), (m = A.beforeEnter) == null || m.call(A);
  }), h = hA(() => {
    var m;
    B && p(!1), (m = A.beforeLeave) == null || m.call(A);
  });
  return N.createElement(El.Provider, { value: f }, N.createElement(Ul.Provider, { value: y }, xe({ ourProps: { ...g, as: Q.Fragment, children: N.createElement(b0, { ref: s, ...g, ...i, beforeEnter: d, beforeLeave: h }) }, theirProps: {}, defaultTag: Q.Fragment, features: L0, visible: u === "visible", name: "Transition" })));
}
function W1(A, e) {
  let t = Q.useContext(Ul) !== null, r = Fl() !== null;
  return N.createElement(N.Fragment, null, !t && r ? N.createElement(of, { ref: e, ...A }) : N.createElement(b0, { ref: e, ...A }));
}
let of = se($1), b0 = se(V1), Bo = se(W1), T0 = Object.assign(of, { Child: Bo, Root: of });
var X1 = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(X1 || {}), Y1 = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(Y1 || {});
let z1 = { 0(A, e) {
  return A.titleId === e.id ? A : { ...A, titleId: e.id };
} }, tB = Q.createContext(null);
tB.displayName = "DialogContext";
function Hl(A) {
  let e = Q.useContext(tB);
  if (e === null) {
    let t = new Error(`<${A} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Hl), t;
  }
  return e;
}
function j1(A, e) {
  return Ar(e.type, z1, A, e);
}
let Zg = se(function(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-${t}`, open: n, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: s = !0, __demoMode: l = !1, ...u } = A, c = Q.useRef(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (c.current || (c.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Fl();
  n === void 0 && f !== null && (n = (f & De.Open) === De.Open);
  let B = Q.useRef(null), p = At(B, e), w = So(B), y = n ? 0 : 1, [g, d] = Q.useReducer(j1, { titleId: null, descriptionId: null, panelRef: Q.createRef() }), h = hA(() => i(!1)), m = hA((L) => d({ type: 0, id: L })), v = ko() ? y === 0 : !1, [C, F] = E1(), U = { get current() {
    var L;
    return (L = g.panelRef.current) != null ? L : B.current;
  } }, { resolveContainers: E, mainTreeNodeRef: S, MainTreeNode: P } = L1({ portals: C, defaultContainers: [U] }), _ = f !== null ? (f & De.Closing) === De.Closing : !1;
  VF(l || _ ? !1 : v, { allowed: hA(() => {
    var L, R;
    return [(R = (L = B.current) == null ? void 0 : L.closest("[data-headlessui-portal]")) != null ? R : null];
  }), disallowed: hA(() => {
    var L, R;
    return [(R = (L = S.current) == null ? void 0 : L.closest("body > *:not(#headlessui-portal-root)")) != null ? R : null];
  }) }), tU(v, E, (L) => {
    L.preventDefault(), h();
  }), x1(v, w == null ? void 0 : w.defaultView, (L) => {
    L.preventDefault(), L.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), h();
  }), sU(l || _ ? !1 : v, w, E), r0(v, B, h);
  let [M, G] = OF(), Z = Q.useMemo(() => [{ dialogState: y, close: h, setTitleId: m }, g], [y, g, h, m]), V = Q.useMemo(() => ({ open: y === 0 }), [y]), K = { ref: p, id: r, role: a, tabIndex: -1, "aria-modal": l ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": g.titleId, "aria-describedby": M }, I = !S1(), x = hr.None;
  return v && !l && (x |= hr.RestoreFocus, x |= hr.TabLock, s && (x |= hr.AutoFocus), I && (x |= hr.InitialFocus)), N.createElement(h1, null, N.createElement(Jg, { force: !0 }, N.createElement(H1, null, N.createElement(tB.Provider, { value: Z }, N.createElement(U0, { target: B }, N.createElement(Jg, { force: !1 }, N.createElement(G, { slot: V }, N.createElement(F, null, N.createElement(D1, { initialFocus: o, initialFocusFallback: B, containers: E, features: x }, N.createElement(PF, { value: h }, xe({ ourProps: K, theirProps: u, slot: V, defaultTag: J1, features: Z1, visible: y === 0, name: "Dialog" })))))))))), N.createElement(TF, null, N.createElement(P, null)));
}), J1 = "div", Z1 = Os.RenderStrategy | Os.Static;
function q1(A, e) {
  let { transition: t = !1, open: r, ...n } = A, i = Fl(), o = A.hasOwnProperty("open") || i !== null, a = A.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return i === null && r !== void 0 && !n.static ? N.createElement(T0, { show: r, transition: t, unmount: n.unmount }, N.createElement(Zg, { ref: e, ...n })) : N.createElement(Zg, { ref: e, open: r, ...n });
}
let AE = "div";
function eE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-panel-${t}`, transition: n = !1, ...i } = A, [{ dialogState: o }, a] = Hl("Dialog.Panel"), s = At(e, a.panelRef), l = Q.useMemo(() => ({ open: o === 0 }), [o]), u = hA((c) => {
    c.stopPropagation();
  });
  return N.createElement(n ? Bo : Q.Fragment, null, xe({ ourProps: { ref: s, id: r, onClick: u }, theirProps: i, slot: l, defaultTag: AE, name: "Dialog.Panel" }));
}
let tE = "div";
function rE(A, e) {
  let { transition: t = !1, ...r } = A, [{ dialogState: n }] = Hl("Dialog.Backdrop"), i = Q.useMemo(() => ({ open: n === 0 }), [n]);
  return N.createElement(t ? Bo : Q.Fragment, null, xe({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: r, slot: i, defaultTag: tE, name: "Dialog.Backdrop" }));
}
let nE = "h2";
function iE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-title-${t}`, ...n } = A, [{ dialogState: i, setTitleId: o }] = Hl("Dialog.Title"), a = At(e);
  Q.useEffect(() => (o(r), () => o(null)), [r, o]);
  let s = Q.useMemo(() => ({ open: i === 0 }), [i]);
  return xe({ ourProps: { ref: a, id: r }, theirProps: n, slot: s, defaultTag: nE, name: "Dialog.Title" });
}
let oE = se(q1), k0 = se(eE);
se(rE);
let aE = se(iE), sE = Object.assign(oE, { Panel: k0, Title: aE, Description: NF });
function qg(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(A, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function k(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qg(Object(t), !0).forEach(function(r) {
      LA(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : qg(Object(t)).forEach(function(r) {
      Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return A;
}
function Ps(A) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ps(A);
}
function lE(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function uE(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function cE(A, e, t) {
  return e && uE(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function LA(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function rB(A, e) {
  return dE(A) || gE(A, e) || O0(A, e) || hE();
}
function Oo(A) {
  return fE(A) || BE(A) || O0(A) || pE();
}
function fE(A) {
  if (Array.isArray(A)) return af(A);
}
function dE(A) {
  if (Array.isArray(A)) return A;
}
function BE(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function gE(A, e) {
  var t = A == null ? null : typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
  if (t != null) {
    var r = [], n = !0, i = !1, o, a;
    try {
      for (t = t.call(A); !(n = (o = t.next()).done) && (r.push(o.value), !(e && r.length === e)); n = !0)
        ;
    } catch (s) {
      i = !0, a = s;
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function O0(A, e) {
  if (A) {
    if (typeof A == "string") return af(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return af(A, e);
  }
}
function af(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
  return r;
}
function pE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ap = function() {
}, nB = {}, D0 = {}, K0 = null, R0 = {
  mark: Ap,
  measure: Ap
};
try {
  typeof window < "u" && (nB = window), typeof document < "u" && (D0 = document), typeof MutationObserver < "u" && (K0 = MutationObserver), typeof performance < "u" && (R0 = performance);
} catch {
}
var wE = nB.navigator || {}, ep = wE.userAgent, tp = ep === void 0 ? "" : ep, rr = nB, uA = D0, rp = K0, aa = R0;
rr.document;
var yt = !!uA.documentElement && !!uA.head && typeof uA.addEventListener == "function" && typeof uA.createElement == "function", N0 = ~tp.indexOf("MSIE") || ~tp.indexOf("Trident/"), sa, la, ua, ca, fa, wt = "___FONT_AWESOME___", sf = 16, M0 = "fa", P0 = "svg-inline--fa", Mr = "data-fa-i2svg", lf = "data-fa-pseudo-element", mE = "data-fa-pseudo-element-pending", iB = "data-prefix", oB = "data-icon", np = "fontawesome-i2svg", vE = "async", CE = ["HTML", "HEAD", "STYLE", "SCRIPT"], _0 = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), sA = "classic", CA = "sharp", aB = [sA, CA];
function Do(A) {
  return new Proxy(A, {
    get: function(t, r) {
      return r in t ? t[r] : t[sA];
    }
  });
}
var go = Do((sa = {}, LA(sa, sA, {
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
}), LA(sa, CA, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), sa)), po = Do((la = {}, LA(la, sA, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), LA(la, CA, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), la)), ho = Do((ua = {}, LA(ua, sA, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), LA(ua, CA, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), ua)), QE = Do((ca = {}, LA(ca, sA, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), LA(ca, CA, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), ca)), yE = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, G0 = "fa-layers-text", FE = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, UE = Do((fa = {}, LA(fa, sA, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), LA(fa, CA, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), fa)), V0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], EE = V0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), IE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], yr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, wo = /* @__PURE__ */ new Set();
Object.keys(po[sA]).map(wo.add.bind(wo));
Object.keys(po[CA]).map(wo.add.bind(wo));
var HE = [].concat(aB, Oo(wo), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", yr.GROUP, yr.SWAP_OPACITY, yr.PRIMARY, yr.SECONDARY]).concat(V0.map(function(A) {
  return "".concat(A, "x");
})).concat(EE.map(function(A) {
  return "w-".concat(A);
})), Mi = rr.FontAwesomeConfig || {};
function xE(A) {
  var e = uA.querySelector("script[" + A + "]");
  if (e)
    return e.getAttribute(A);
}
function SE(A) {
  return A === "" ? !0 : A === "false" ? !1 : A === "true" ? !0 : A;
}
if (uA && typeof uA.querySelector == "function") {
  var LE = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  LE.forEach(function(A) {
    var e = rB(A, 2), t = e[0], r = e[1], n = SE(xE(t));
    n != null && (Mi[r] = n);
  });
}
var $0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: M0,
  replacementClass: P0,
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
Mi.familyPrefix && (Mi.cssPrefix = Mi.familyPrefix);
var Mn = k(k({}, $0), Mi);
Mn.autoReplaceSvg || (Mn.observeMutations = !1);
var D = {};
Object.keys($0).forEach(function(A) {
  Object.defineProperty(D, A, {
    enumerable: !0,
    set: function(t) {
      Mn[A] = t, Pi.forEach(function(r) {
        return r(D);
      });
    },
    get: function() {
      return Mn[A];
    }
  });
});
Object.defineProperty(D, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Mn.cssPrefix = e, Pi.forEach(function(t) {
      return t(D);
    });
  },
  get: function() {
    return Mn.cssPrefix;
  }
});
rr.FontAwesomeConfig = D;
var Pi = [];
function bE(A) {
  return Pi.push(A), function() {
    Pi.splice(Pi.indexOf(A), 1);
  };
}
var Et = sf, je = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function TE(A) {
  if (!(!A || !yt)) {
    var e = uA.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = A;
    for (var t = uA.head.childNodes, r = null, n = t.length - 1; n > -1; n--) {
      var i = t[n], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return uA.head.insertBefore(e, r), A;
  }
}
var kE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function mo() {
  for (var A = 12, e = ""; A-- > 0; )
    e += kE[Math.random() * 62 | 0];
  return e;
}
function Zn(A) {
  for (var e = [], t = (A || []).length >>> 0; t--; )
    e[t] = A[t];
  return e;
}
function sB(A) {
  return A.classList ? Zn(A.classList) : (A.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function W0(A) {
  return "".concat(A).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function OE(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat(W0(A[t]), '" ');
  }, "").trim();
}
function xl(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, ": ").concat(A[t].trim(), ";");
  }, "");
}
function lB(A) {
  return A.size !== je.size || A.x !== je.x || A.y !== je.y || A.rotate !== je.rotate || A.flipX || A.flipY;
}
function DE(A) {
  var e = A.transform, t = A.containerWidth, r = A.iconWidth, n = {
    transform: "translate(".concat(t / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), a = "rotate(".concat(e.rotate, " 0 0)"), s = {
    transform: "".concat(i, " ").concat(o, " ").concat(a)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: n,
    inner: s,
    path: l
  };
}
function KE(A) {
  var e = A.transform, t = A.width, r = t === void 0 ? sf : t, n = A.height, i = n === void 0 ? sf : n, o = A.startCentered, a = o === void 0 ? !1 : o, s = "";
  return a && N0 ? s += "translate(".concat(e.x / Et - r / 2, "em, ").concat(e.y / Et - i / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(e.x / Et, "em), calc(-50% + ").concat(e.y / Et, "em)) ") : s += "translate(".concat(e.x / Et, "em, ").concat(e.y / Et, "em) "), s += "scale(".concat(e.size / Et * (e.flipX ? -1 : 1), ", ").concat(e.size / Et * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
}
var RE = `:root, :host {
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
function X0() {
  var A = M0, e = P0, t = D.cssPrefix, r = D.replacementClass, n = RE;
  if (t !== A || r !== e) {
    var i = new RegExp("\\.".concat(A, "\\-"), "g"), o = new RegExp("\\--".concat(A, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    n = n.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(a, ".".concat(r));
  }
  return n;
}
var ip = !1;
function Uu() {
  D.autoAddCss && !ip && (TE(X0()), ip = !0);
}
var NE = {
  mixout: function() {
    return {
      dom: {
        css: X0,
        insertCss: Uu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Uu();
      },
      beforeI2svg: function() {
        Uu();
      }
    };
  }
}, mt = rr || {};
mt[wt] || (mt[wt] = {});
mt[wt].styles || (mt[wt].styles = {});
mt[wt].hooks || (mt[wt].hooks = {});
mt[wt].shims || (mt[wt].shims = []);
var Ke = mt[wt], Y0 = [], ME = function A() {
  uA.removeEventListener("DOMContentLoaded", A), _s = 1, Y0.map(function(e) {
    return e();
  });
}, _s = !1;
yt && (_s = (uA.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(uA.readyState), _s || uA.addEventListener("DOMContentLoaded", ME));
function PE(A) {
  yt && (_s ? setTimeout(A, 0) : Y0.push(A));
}
function Ko(A) {
  var e = A.tag, t = A.attributes, r = t === void 0 ? {} : t, n = A.children, i = n === void 0 ? [] : n;
  return typeof A == "string" ? W0(A) : "<".concat(e, " ").concat(OE(r), ">").concat(i.map(Ko).join(""), "</").concat(e, ">");
}
function op(A, e, t) {
  if (A && A[e] && A[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: A[e][t]
    };
}
var Eu = function(e, t, r, n) {
  var i = Object.keys(e), o = i.length, a = t, s, l, u;
  for (r === void 0 ? (s = 1, u = e[i[0]]) : (s = 0, u = r); s < o; s++)
    l = i[s], u = a(u, e[l], l, e);
  return u;
};
function _E(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) == 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}
function uf(A) {
  var e = _E(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function GE(A, e) {
  var t = A.length, r = A.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && t > e + 1 && (n = A.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function ap(A) {
  return Object.keys(A).reduce(function(e, t) {
    var r = A[t], n = !!r.icon;
    return n ? e[r.iconName] = r.icon : e[t] = r, e;
  }, {});
}
function cf(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, n = r === void 0 ? !1 : r, i = ap(e);
  typeof Ke.hooks.addPack == "function" && !n ? Ke.hooks.addPack(A, ap(e)) : Ke.styles[A] = k(k({}, Ke.styles[A] || {}), i), A === "fas" && cf("fa", e);
}
var da, Ba, ga, pn = Ke.styles, VE = Ke.shims, $E = (da = {}, LA(da, sA, Object.values(ho[sA])), LA(da, CA, Object.values(ho[CA])), da), uB = null, z0 = {}, j0 = {}, J0 = {}, Z0 = {}, q0 = {}, WE = (Ba = {}, LA(Ba, sA, Object.keys(go[sA])), LA(Ba, CA, Object.keys(go[CA])), Ba);
function XE(A) {
  return ~HE.indexOf(A);
}
function YE(A, e) {
  var t = e.split("-"), r = t[0], n = t.slice(1).join("-");
  return r === A && n !== "" && !XE(n) ? n : null;
}
var Av = function() {
  var e = function(i) {
    return Eu(pn, function(o, a, s) {
      return o[s] = Eu(a, i, {}), o;
    }, {});
  };
  z0 = e(function(n, i, o) {
    if (i[3] && (n[i[3]] = o), i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "number";
      });
      a.forEach(function(s) {
        n[s.toString(16)] = o;
      });
    }
    return n;
  }), j0 = e(function(n, i, o) {
    if (n[o] = o, i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "string";
      });
      a.forEach(function(s) {
        n[s] = o;
      });
    }
    return n;
  }), q0 = e(function(n, i, o) {
    var a = i[2];
    return n[o] = o, a.forEach(function(s) {
      n[s] = o;
    }), n;
  });
  var t = "far" in pn || D.autoFetchSvg, r = Eu(VE, function(n, i) {
    var o = i[0], a = i[1], s = i[2];
    return a === "far" && !t && (a = "fas"), typeof o == "string" && (n.names[o] = {
      prefix: a,
      iconName: s
    }), typeof o == "number" && (n.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  J0 = r.names, Z0 = r.unicodes, uB = Sl(D.styleDefault, {
    family: D.familyDefault
  });
};
bE(function(A) {
  uB = Sl(A.styleDefault, {
    family: D.familyDefault
  });
});
Av();
function cB(A, e) {
  return (z0[A] || {})[e];
}
function zE(A, e) {
  return (j0[A] || {})[e];
}
function Fr(A, e) {
  return (q0[A] || {})[e];
}
function ev(A) {
  return J0[A] || {
    prefix: null,
    iconName: null
  };
}
function jE(A) {
  var e = Z0[A], t = cB("fas", A);
  return e || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function nr() {
  return uB;
}
var fB = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Sl(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, r = t === void 0 ? sA : t, n = go[r][A], i = po[r][A] || po[r][n], o = A in Ke.styles ? A : null;
  return i || o || null;
}
var sp = (ga = {}, LA(ga, sA, Object.keys(ho[sA])), LA(ga, CA, Object.keys(ho[CA])), ga);
function Ll(A) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, n = r === void 0 ? !1 : r, i = (e = {}, LA(e, sA, "".concat(D.cssPrefix, "-").concat(sA)), LA(e, CA, "".concat(D.cssPrefix, "-").concat(CA)), e), o = null, a = sA;
  (A.includes(i[sA]) || A.some(function(l) {
    return sp[sA].includes(l);
  })) && (a = sA), (A.includes(i[CA]) || A.some(function(l) {
    return sp[CA].includes(l);
  })) && (a = CA);
  var s = A.reduce(function(l, u) {
    var c = YE(D.cssPrefix, u);
    if (pn[u] ? (u = $E[a].includes(u) ? QE[a][u] : u, o = u, l.prefix = u) : WE[a].indexOf(u) > -1 ? (o = u, l.prefix = Sl(u, {
      family: a
    })) : c ? l.iconName = c : u !== D.replacementClass && u !== i[sA] && u !== i[CA] && l.rest.push(u), !n && l.prefix && l.iconName) {
      var f = o === "fa" ? ev(l.iconName) : {}, B = Fr(l.prefix, l.iconName);
      f.prefix && (o = null), l.iconName = f.iconName || B || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !pn.far && pn.fas && !D.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, fB());
  return (A.includes("fa-brands") || A.includes("fab")) && (s.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (s.prefix = "fad"), !s.prefix && a === CA && (pn.fass || D.autoFetchSvg) && (s.prefix = "fass", s.iconName = Fr(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = nr() || "fas"), s;
}
var JE = /* @__PURE__ */ function() {
  function A() {
    lE(this, A), this.definitions = {};
  }
  return cE(A, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        t.definitions[a] = k(k({}, t.definitions[a] || {}), o[a]), cf(a, o[a]);
        var s = ho[sA][a];
        s && cf(s, o[a]), Av();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, r) {
      var n = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(n).map(function(i) {
        var o = n[i], a = o.prefix, s = o.iconName, l = o.icon, u = l[2];
        t[a] || (t[a] = {}), u.length > 0 && u.forEach(function(c) {
          typeof c == "string" && (t[a][c] = l);
        }), t[a][s] = l;
      }), t;
    }
  }]), A;
}(), lp = [], hn = {}, xn = {}, ZE = Object.keys(xn);
function qE(A, e) {
  var t = e.mixoutsTo;
  return lp = A, hn = {}, Object.keys(xn).forEach(function(r) {
    ZE.indexOf(r) === -1 && delete xn[r];
  }), lp.forEach(function(r) {
    var n = r.mixout ? r.mixout() : {};
    if (Object.keys(n).forEach(function(o) {
      typeof n[o] == "function" && (t[o] = n[o]), Ps(n[o]) === "object" && Object.keys(n[o]).forEach(function(a) {
        t[o] || (t[o] = {}), t[o][a] = n[o][a];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        hn[o] || (hn[o] = []), hn[o].push(i[o]);
      });
    }
    r.provides && r.provides(xn);
  }), t;
}
function ff(A, e) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++)
    r[n - 2] = arguments[n];
  var i = hn[A] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(r));
  }), e;
}
function Pr(A) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var n = hn[A] || [];
  n.forEach(function(i) {
    i.apply(null, t);
  });
}
function vt() {
  var A = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return xn[A] ? xn[A].apply(null, e) : void 0;
}
function df(A) {
  A.prefix === "fa" && (A.prefix = "fas");
  var e = A.iconName, t = A.prefix || nr();
  if (e)
    return e = Fr(t, e) || e, op(tv.definitions, t, e) || op(Ke.styles, t, e);
}
var tv = new JE(), AI = function() {
  D.autoReplaceSvg = !1, D.observeMutations = !1, Pr("noAuto");
}, eI = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return yt ? (Pr("beforeI2svg", e), vt("pseudoElements2svg", e), vt("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    D.autoReplaceSvg === !1 && (D.autoReplaceSvg = !0), D.observeMutations = !0, PE(function() {
      rI({
        autoReplaceSvgRoot: t
      }), Pr("watch", e);
    });
  }
}, tI = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Ps(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Fr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Sl(e[0]);
      return {
        prefix: r,
        iconName: Fr(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(D.cssPrefix, "-")) > -1 || e.match(yE))) {
      var n = Ll(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || nr(),
        iconName: Fr(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof e == "string") {
      var i = nr();
      return {
        prefix: i,
        iconName: Fr(i, e) || e
      };
    }
  }
}, he = {
  noAuto: AI,
  config: D,
  dom: eI,
  parse: tI,
  library: tv,
  findIconDefinition: df,
  toHtml: Ko
}, rI = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, r = t === void 0 ? uA : t;
  (Object.keys(Ke.styles).length > 0 || D.autoFetchSvg) && yt && D.autoReplaceSvg && he.dom.i2svg({
    node: r
  });
};
function bl(A, e) {
  return Object.defineProperty(A, "abstract", {
    get: e
  }), Object.defineProperty(A, "html", {
    get: function() {
      return A.abstract.map(function(r) {
        return Ko(r);
      });
    }
  }), Object.defineProperty(A, "node", {
    get: function() {
      if (yt) {
        var r = uA.createElement("div");
        return r.innerHTML = A.html, r.children;
      }
    }
  }), A;
}
function nI(A) {
  var e = A.children, t = A.main, r = A.mask, n = A.attributes, i = A.styles, o = A.transform;
  if (lB(o) && t.found && !r.found) {
    var a = t.width, s = t.height, l = {
      x: a / s / 2,
      y: 0.5
    };
    n.style = xl(k(k({}, i), {}, {
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: e
  }];
}
function iI(A) {
  var e = A.prefix, t = A.iconName, r = A.children, n = A.attributes, i = A.symbol, o = i === !0 ? "".concat(e, "-").concat(D.cssPrefix, "-").concat(t) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: k(k({}, n), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function dB(A) {
  var e = A.icons, t = e.main, r = e.mask, n = A.prefix, i = A.iconName, o = A.transform, a = A.symbol, s = A.title, l = A.maskId, u = A.titleId, c = A.extra, f = A.watchable, B = f === void 0 ? !1 : f, p = r.found ? r : t, w = p.width, y = p.height, g = n === "fak", d = [D.replacementClass, i ? "".concat(D.cssPrefix, "-").concat(i) : ""].filter(function(E) {
    return c.classes.indexOf(E) === -1;
  }).filter(function(E) {
    return E !== "" || !!E;
  }).concat(c.classes).join(" "), h = {
    children: [],
    attributes: k(k({}, c.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: d,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(w, " ").concat(y)
    })
  }, m = g && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(w / y * 16 * 0.0625, "em")
  } : {};
  B && (h.attributes[Mr] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || mo())
    },
    children: [s]
  }), delete h.attributes.title);
  var v = k(k({}, h), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: l,
    transform: o,
    symbol: a,
    styles: k(k({}, m), c.styles)
  }), C = r.found && t.found ? vt("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : vt("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, F = C.children, U = C.attributes;
  return v.children = F, v.attributes = U, a ? iI(v) : nI(v);
}
function up(A) {
  var e = A.content, t = A.width, r = A.height, n = A.transform, i = A.title, o = A.extra, a = A.watchable, s = a === void 0 ? !1 : a, l = k(k(k({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Mr] = "");
  var u = k({}, o.styles);
  lB(n) && (u.transform = KE({
    transform: n,
    startCentered: !0,
    width: t,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var c = xl(u);
  c.length > 0 && (l.style = c);
  var f = [];
  return f.push({
    tag: "span",
    attributes: l,
    children: [e]
  }), i && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), f;
}
function oI(A) {
  var e = A.content, t = A.title, r = A.extra, n = k(k(k({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = xl(r.styles);
  i.length > 0 && (n.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: n,
    children: [e]
  }), t && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), o;
}
var Iu = Ke.styles;
function Bf(A) {
  var e = A[0], t = A[1], r = A.slice(4), n = rB(r, 1), i = n[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(D.cssPrefix, "-").concat(yr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(D.cssPrefix, "-").concat(yr.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(D.cssPrefix, "-").concat(yr.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: e,
    height: t,
    icon: o
  };
}
var aI = {
  found: !1,
  width: 512,
  height: 512
};
function sI(A, e) {
  !_0 && !D.showMissingIcons && A && console.error('Icon with name "'.concat(A, '" and prefix "').concat(e, '" is missing.'));
}
function gf(A, e) {
  var t = e;
  return e === "fa" && D.styleDefault !== null && (e = nr()), new Promise(function(r, n) {
    if (vt("missingIconAbstract"), t === "fa") {
      var i = ev(A) || {};
      A = i.iconName || A, e = i.prefix || e;
    }
    if (A && e && Iu[e] && Iu[e][A]) {
      var o = Iu[e][A];
      return r(Bf(o));
    }
    sI(A, e), r(k(k({}, aI), {}, {
      icon: D.showMissingIcons && A ? vt("missingIconAbstract") || {} : {}
    }));
  });
}
var cp = function() {
}, pf = D.measurePerformance && aa && aa.mark && aa.measure ? aa : {
  mark: cp,
  measure: cp
}, vi = 'FA "6.5.2"', lI = function(e) {
  return pf.mark("".concat(vi, " ").concat(e, " begins")), function() {
    return rv(e);
  };
}, rv = function(e) {
  pf.mark("".concat(vi, " ").concat(e, " ends")), pf.measure("".concat(vi, " ").concat(e), "".concat(vi, " ").concat(e, " begins"), "".concat(vi, " ").concat(e, " ends"));
}, BB = {
  begin: lI,
  end: rv
}, As = function() {
};
function fp(A) {
  var e = A.getAttribute ? A.getAttribute(Mr) : null;
  return typeof e == "string";
}
function uI(A) {
  var e = A.getAttribute ? A.getAttribute(iB) : null, t = A.getAttribute ? A.getAttribute(oB) : null;
  return e && t;
}
function cI(A) {
  return A && A.classList && A.classList.contains && A.classList.contains(D.replacementClass);
}
function fI() {
  if (D.autoReplaceSvg === !0)
    return es.replace;
  var A = es[D.autoReplaceSvg];
  return A || es.replace;
}
function dI(A) {
  return uA.createElementNS("http://www.w3.org/2000/svg", A);
}
function BI(A) {
  return uA.createElement(A);
}
function nv(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, r = t === void 0 ? A.tag === "svg" ? dI : BI : t;
  if (typeof A == "string")
    return uA.createTextNode(A);
  var n = r(A.tag);
  Object.keys(A.attributes || []).forEach(function(o) {
    n.setAttribute(o, A.attributes[o]);
  });
  var i = A.children || [];
  return i.forEach(function(o) {
    n.appendChild(nv(o, {
      ceFn: r
    }));
  }), n;
}
function gI(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var es = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(n) {
        t.parentNode.insertBefore(nv(n), t);
      }), t.getAttribute(Mr) === null && D.keepOriginalSource) {
        var r = uA.createComment(gI(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], r = e[1];
    if (~sB(t).indexOf(D.replacementClass))
      return es.replace(e);
    var n = new RegExp("".concat(D.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(a, s) {
        return s === D.replacementClass || s.match(n) ? a.toSvg.push(s) : a.toNode.push(s), a;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(a) {
      return Ko(a);
    }).join(`
`);
    t.setAttribute(Mr, ""), t.innerHTML = o;
  }
};
function dp(A) {
  A();
}
function iv(A, e) {
  var t = typeof e == "function" ? e : As;
  if (A.length === 0)
    t();
  else {
    var r = dp;
    D.mutateApproach === vE && (r = rr.requestAnimationFrame || dp), r(function() {
      var n = fI(), i = BB.begin("mutate");
      A.map(n), i(), t();
    });
  }
}
var gB = !1;
function ov() {
  gB = !0;
}
function hf() {
  gB = !1;
}
var Gs = null;
function Bp(A) {
  if (rp && D.observeMutations) {
    var e = A.treeCallback, t = e === void 0 ? As : e, r = A.nodeCallback, n = r === void 0 ? As : r, i = A.pseudoElementsCallback, o = i === void 0 ? As : i, a = A.observeMutationsRoot, s = a === void 0 ? uA : a;
    Gs = new rp(function(l) {
      if (!gB) {
        var u = nr();
        Zn(l).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !fp(c.addedNodes[0]) && (D.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && D.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && fp(c.target) && ~IE.indexOf(c.attributeName))
            if (c.attributeName === "class" && uI(c.target)) {
              var f = Ll(sB(c.target)), B = f.prefix, p = f.iconName;
              c.target.setAttribute(iB, B || u), p && c.target.setAttribute(oB, p);
            } else cI(c.target) && n(c.target);
        });
      }
    }), yt && Gs.observe(s, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function pI() {
  Gs && Gs.disconnect();
}
function hI(A) {
  var e = A.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(r, n) {
    var i = n.split(":"), o = i[0], a = i.slice(1);
    return o && a.length > 0 && (r[o] = a.join(":").trim()), r;
  }, {})), t;
}
function wI(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), r = A.innerText !== void 0 ? A.innerText.trim() : "", n = Ll(sB(A));
  return n.prefix || (n.prefix = nr()), e && t && (n.prefix = e, n.iconName = t), n.iconName && n.prefix || (n.prefix && r.length > 0 && (n.iconName = zE(n.prefix, A.innerText) || cB(n.prefix, uf(A.innerText))), !n.iconName && D.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = A.firstChild.data)), n;
}
function mI(A) {
  var e = Zn(A.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), t = A.getAttribute("title"), r = A.getAttribute("data-fa-title-id");
  return D.autoA11y && (t ? e["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(r || mo()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function vI() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: je,
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
function gp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = wI(A), r = t.iconName, n = t.prefix, i = t.rest, o = mI(A), a = ff("parseNodeAttributes", {}, A), s = e.styleParser ? hI(A) : [];
  return k({
    iconName: r,
    title: A.getAttribute("title"),
    titleId: A.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: je,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: o
    }
  }, a);
}
var CI = Ke.styles;
function av(A) {
  var e = D.autoReplaceSvg === "nest" ? gp(A, {
    styleParser: !1
  }) : gp(A);
  return ~e.extra.classes.indexOf(G0) ? vt("generateLayersText", A, e) : vt("generateSvgReplacementMutation", A, e);
}
var ir = /* @__PURE__ */ new Set();
aB.map(function(A) {
  ir.add("fa-".concat(A));
});
Object.keys(go[sA]).map(ir.add.bind(ir));
Object.keys(go[CA]).map(ir.add.bind(ir));
ir = Oo(ir);
function pp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!yt) return Promise.resolve();
  var t = uA.documentElement.classList, r = function(c) {
    return t.add("".concat(np, "-").concat(c));
  }, n = function(c) {
    return t.remove("".concat(np, "-").concat(c));
  }, i = D.autoFetchSvg ? ir : aB.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(CI));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(G0, ":not([").concat(Mr, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(Mr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = Zn(A.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    r("pending"), n("complete");
  else
    return Promise.resolve();
  var s = BB.begin("onTree"), l = a.reduce(function(u, c) {
    try {
      var f = av(c);
      f && u.push(f);
    } catch (B) {
      _0 || B.name === "MissingIcon" && console.error(B);
    }
    return u;
  }, []);
  return new Promise(function(u, c) {
    Promise.all(l).then(function(f) {
      iv(f, function() {
        r("active"), r("complete"), n("pending"), typeof e == "function" && e(), s(), u();
      });
    }).catch(function(f) {
      s(), c(f);
    });
  });
}
function QI(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  av(A).then(function(t) {
    t && iv([t], e);
  });
}
function yI(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : df(e || {}), n = t.mask;
    return n && (n = (n || {}).icon ? n : df(n || {})), A(r, k(k({}, t), {}, {
      mask: n
    }));
  };
}
var FI = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, n = r === void 0 ? je : r, i = t.symbol, o = i === void 0 ? !1 : i, a = t.mask, s = a === void 0 ? null : a, l = t.maskId, u = l === void 0 ? null : l, c = t.title, f = c === void 0 ? null : c, B = t.titleId, p = B === void 0 ? null : B, w = t.classes, y = w === void 0 ? [] : w, g = t.attributes, d = g === void 0 ? {} : g, h = t.styles, m = h === void 0 ? {} : h;
  if (e) {
    var v = e.prefix, C = e.iconName, F = e.icon;
    return bl(k({
      type: "icon"
    }, e), function() {
      return Pr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), D.autoA11y && (f ? d["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(p || mo()) : (d["aria-hidden"] = "true", d.focusable = "false")), dB({
        icons: {
          main: Bf(F),
          mask: s ? Bf(s.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: C,
        transform: k(k({}, je), n),
        symbol: o,
        title: f,
        maskId: u,
        titleId: p,
        extra: {
          attributes: d,
          styles: m,
          classes: y
        }
      });
    });
  }
}, UI = {
  mixout: function() {
    return {
      icon: yI(FI)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = pp, t.nodeCallback = QI, t;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(t) {
      var r = t.node, n = r === void 0 ? uA : r, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return pp(n, o);
    }, e.generateSvgReplacementMutation = function(t, r) {
      var n = r.iconName, i = r.title, o = r.titleId, a = r.prefix, s = r.transform, l = r.symbol, u = r.mask, c = r.maskId, f = r.extra;
      return new Promise(function(B, p) {
        Promise.all([gf(n, a), u.iconName ? gf(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var y = rB(w, 2), g = y[0], d = y[1];
          B([t, dB({
            icons: {
              main: g,
              mask: d
            },
            prefix: a,
            iconName: n,
            transform: s,
            symbol: l,
            maskId: c,
            title: i,
            titleId: o,
            extra: f,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.transform, a = t.styles, s = xl(a);
      s.length > 0 && (n.style = s);
      var l;
      return lB(o) && (l = vt("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(l || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, EI = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.classes, i = n === void 0 ? [] : n;
        return bl({
          type: "layer"
        }, function() {
          Pr("beforeDOMElementCreation", {
            assembler: t,
            params: r
          });
          var o = [];
          return t(function(a) {
            Array.isArray(a) ? a.map(function(s) {
              o = o.concat(s.abstract);
            }) : o = o.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(D.cssPrefix, "-layers")].concat(Oo(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, II = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.title, i = n === void 0 ? null : n, o = r.classes, a = o === void 0 ? [] : o, s = r.attributes, l = s === void 0 ? {} : s, u = r.styles, c = u === void 0 ? {} : u;
        return bl({
          type: "counter",
          content: t
        }, function() {
          return Pr("beforeDOMElementCreation", {
            content: t,
            params: r
          }), oI({
            content: t.toString(),
            title: i,
            extra: {
              attributes: l,
              styles: c,
              classes: ["".concat(D.cssPrefix, "-layers-counter")].concat(Oo(a))
            }
          });
        });
      }
    };
  }
}, HI = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? je : n, o = r.title, a = o === void 0 ? null : o, s = r.classes, l = s === void 0 ? [] : s, u = r.attributes, c = u === void 0 ? {} : u, f = r.styles, B = f === void 0 ? {} : f;
        return bl({
          type: "text",
          content: t
        }, function() {
          return Pr("beforeDOMElementCreation", {
            content: t,
            params: r
          }), up({
            content: t,
            transform: k(k({}, je), i),
            title: a,
            extra: {
              attributes: c,
              styles: B,
              classes: ["".concat(D.cssPrefix, "-layers-text")].concat(Oo(l))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(t, r) {
      var n = r.title, i = r.transform, o = r.extra, a = null, s = null;
      if (N0) {
        var l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        a = u.width / l, s = u.height / l;
      }
      return D.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, up({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: i,
        title: n,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, xI = new RegExp('"', "ug"), hp = [1105920, 1112319];
function SI(A) {
  var e = A.replace(xI, ""), t = GE(e, 0), r = t >= hp[0] && t <= hp[1], n = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: uf(n ? e[0] : e),
    isSecondary: r || n
  };
}
function wp(A, e) {
  var t = "".concat(mE).concat(e.replace(":", "-"));
  return new Promise(function(r, n) {
    if (A.getAttribute(t) !== null)
      return r();
    var i = Zn(A.children), o = i.filter(function(F) {
      return F.getAttribute(lf) === e;
    })[0], a = rr.getComputedStyle(A, e), s = a.getPropertyValue("font-family").match(FE), l = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !s)
      return A.removeChild(o), r();
    if (s && u !== "none" && u !== "") {
      var c = a.getPropertyValue("content"), f = ~["Sharp"].indexOf(s[2]) ? CA : sA, B = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? po[f][s[2].toLowerCase()] : UE[f][l], p = SI(c), w = p.value, y = p.isSecondary, g = s[0].startsWith("FontAwesome"), d = cB(B, w), h = d;
      if (g) {
        var m = jE(w);
        m.iconName && m.prefix && (d = m.iconName, B = m.prefix);
      }
      if (d && !y && (!o || o.getAttribute(iB) !== B || o.getAttribute(oB) !== h)) {
        A.setAttribute(t, h), o && A.removeChild(o);
        var v = vI(), C = v.extra;
        C.attributes[lf] = e, gf(d, B).then(function(F) {
          var U = dB(k(k({}, v), {}, {
            icons: {
              main: F,
              mask: fB()
            },
            prefix: B,
            iconName: h,
            extra: C,
            watchable: !0
          })), E = uA.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? A.insertBefore(E, A.firstChild) : A.appendChild(E), E.outerHTML = U.map(function(S) {
            return Ko(S);
          }).join(`
`), A.removeAttribute(t), r();
        }).catch(n);
      } else
        r();
    } else
      r();
  });
}
function LI(A) {
  return Promise.all([wp(A, "::before"), wp(A, "::after")]);
}
function bI(A) {
  return A.parentNode !== document.head && !~CE.indexOf(A.tagName.toUpperCase()) && !A.getAttribute(lf) && (!A.parentNode || A.parentNode.tagName !== "svg");
}
function mp(A) {
  if (yt)
    return new Promise(function(e, t) {
      var r = Zn(A.querySelectorAll("*")).filter(bI).map(LI), n = BB.begin("searchPseudoElements");
      ov(), Promise.all(r).then(function() {
        n(), hf(), e();
      }).catch(function() {
        n(), hf(), t();
      });
    });
}
var TI = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = mp, t;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(t) {
      var r = t.node, n = r === void 0 ? uA : r;
      D.searchPseudoElements && mp(n);
    };
  }
}, vp = !1, kI = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ov(), vp = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Bp(ff("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        pI();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        vp ? hf() : Bp(ff("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Cp = function(e) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(r, n) {
    var i = n.toLowerCase().split("-"), o = i[0], a = i.slice(1).join("-");
    if (o && a === "h")
      return r.flipX = !0, r;
    if (o && a === "v")
      return r.flipY = !0, r;
    if (a = parseFloat(a), isNaN(a))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + a;
        break;
      case "shrink":
        r.size = r.size - a;
        break;
      case "left":
        r.x = r.x - a;
        break;
      case "right":
        r.x = r.x + a;
        break;
      case "up":
        r.y = r.y - a;
        break;
      case "down":
        r.y = r.y + a;
        break;
      case "rotate":
        r.rotate = r.rotate + a;
        break;
    }
    return r;
  }, t);
}, OI = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return Cp(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-transform");
        return n && (t.transform = Cp(n)), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(t) {
      var r = t.main, n = t.transform, i = t.containerWidth, o = t.iconWidth, a = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), l = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), u = "rotate(".concat(n.rotate, " 0 0)"), c = {
        transform: "".concat(s, " ").concat(l, " ").concat(u)
      }, f = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, B = {
        outer: a,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: k({}, B.outer),
        children: [{
          tag: "g",
          attributes: k({}, B.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: k(k({}, r.icon.attributes), B.path)
          }]
        }]
      };
    };
  }
}, Hu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Qp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return A.attributes && (A.attributes.fill || e) && (A.attributes.fill = "black"), A;
}
function DI(A) {
  return A.tag === "g" ? A.children : [A];
}
var KI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-mask"), i = n ? Ll(n.split(" ").map(function(o) {
          return o.trim();
        })) : fB();
        return i.prefix || (i.prefix = nr()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.mask, a = t.maskId, s = t.transform, l = i.width, u = i.icon, c = o.width, f = o.icon, B = DE({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), p = {
        tag: "rect",
        attributes: k(k({}, Hu), {}, {
          fill: "white"
        })
      }, w = u.children ? {
        children: u.children.map(Qp)
      } : {}, y = {
        tag: "g",
        attributes: k({}, B.inner),
        children: [Qp(k({
          tag: u.tag,
          attributes: k(k({}, u.attributes), B.path)
        }, w))]
      }, g = {
        tag: "g",
        attributes: k({}, B.outer),
        children: [y]
      }, d = "mask-".concat(a || mo()), h = "clip-".concat(a || mo()), m = {
        tag: "mask",
        attributes: k(k({}, Hu), {}, {
          id: d,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, g]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h
          },
          children: DI(f)
        }, m]
      };
      return r.push(v, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(d, ")")
        }, Hu)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, RI = {
  provides: function(e) {
    var t = !1;
    rr.matchMedia && (t = rr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = k(k({}, i), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: k(k({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || a.children.push({
        tag: "animate",
        attributes: k(k({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: k(k({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(a), r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: k(k({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: k(k({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: k(k({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, NI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, MI = [NE, UI, EI, II, HI, TI, kI, OI, KI, RI, NI];
qE(MI, {
  mixoutsTo: he
});
he.noAuto;
he.config;
he.library;
he.dom;
var wf = he.parse;
he.findIconDefinition;
he.toHtml;
var PI = he.icon;
he.layer;
he.text;
he.counter;
var sv = { exports: {} }, _I = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", GI = _I, VI = GI;
function lv() {
}
function uv() {
}
uv.resetWarningCache = lv;
var $I = function() {
  function A(r, n, i, o, a, s) {
    if (s !== VI) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw l.name = "Invariant Violation", l;
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
    checkPropTypes: uv,
    resetWarningCache: lv
  };
  return t.PropTypes = t, t;
};
sv.exports = $I();
var WI = sv.exports;
const X = /* @__PURE__ */ Zf(WI);
function yp(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(A, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Xe(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yp(Object(t), !0).forEach(function(r) {
      wn(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : yp(Object(t)).forEach(function(r) {
      Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return A;
}
function Vs(A) {
  "@babel/helpers - typeof";
  return Vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Vs(A);
}
function wn(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function XI(A, e) {
  if (A == null) return {};
  var t = {}, r = Object.keys(A), n, i;
  for (i = 0; i < r.length; i++)
    n = r[i], !(e.indexOf(n) >= 0) && (t[n] = A[n]);
  return t;
}
function YI(A, e) {
  if (A == null) return {};
  var t = XI(A, e), r, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (n = 0; n < i.length; n++)
      r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(A, r) && (t[r] = A[r]);
  }
  return t;
}
function mf(A) {
  return zI(A) || jI(A) || JI(A) || ZI();
}
function zI(A) {
  if (Array.isArray(A)) return vf(A);
}
function jI(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function JI(A, e) {
  if (A) {
    if (typeof A == "string") return vf(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return vf(A, e);
  }
}
function vf(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
  return r;
}
function ZI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qI(A) {
  var e, t = A.beat, r = A.fade, n = A.beatFade, i = A.bounce, o = A.shake, a = A.flash, s = A.spin, l = A.spinPulse, u = A.spinReverse, c = A.pulse, f = A.fixedWidth, B = A.inverse, p = A.border, w = A.listItem, y = A.flip, g = A.size, d = A.rotation, h = A.pull, m = (e = {
    "fa-beat": t,
    "fa-fade": r,
    "fa-beat-fade": n,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": a,
    "fa-spin": s,
    "fa-spin-reverse": u,
    "fa-spin-pulse": l,
    "fa-pulse": c,
    "fa-fw": f,
    "fa-inverse": B,
    "fa-border": p,
    "fa-li": w,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, wn(e, "fa-".concat(g), typeof g < "u" && g !== null), wn(e, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0), wn(e, "fa-pull-".concat(h), typeof h < "u" && h !== null), wn(e, "fa-swap-opacity", A.swapOpacity), e);
  return Object.keys(m).map(function(v) {
    return m[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function AH(A) {
  return A = A - 0, A === A;
}
function cv(A) {
  return AH(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  }), A.substr(0, 1).toLowerCase() + A.substr(1));
}
var eH = ["style"];
function tH(A) {
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function rH(A) {
  return A.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, t) {
    var r = t.indexOf(":"), n = cv(t.slice(0, r)), i = t.slice(r + 1).trim();
    return n.startsWith("webkit") ? e[tH(n)] = i : e[n] = i, e;
  }, {});
}
function fv(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(s) {
    return fv(A, s);
  }), n = Object.keys(e.attributes || {}).reduce(function(s, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        s.attrs.className = u, delete e.attributes.class;
        break;
      case "style":
        s.attrs.style = rH(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? s.attrs[l.toLowerCase()] = u : s.attrs[cv(l)] = u;
    }
    return s;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, a = YI(t, eH);
  return n.attrs.style = Xe(Xe({}, n.attrs.style), o), A.apply(void 0, [e.tag, Xe(Xe({}, n.attrs), a)].concat(mf(r)));
}
var dv = !1;
try {
  dv = !0;
} catch {
}
function nH() {
  if (!dv && console && typeof console.error == "function") {
    var A;
    (A = console).error.apply(A, arguments);
  }
}
function Fp(A) {
  if (A && Vs(A) === "object" && A.prefix && A.iconName && A.icon)
    return A;
  if (wf.icon)
    return wf.icon(A);
  if (A === null)
    return null;
  if (A && Vs(A) === "object" && A.prefix && A.iconName)
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
function xu(A, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? wn({}, A, e) : {};
}
var Up = {
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
}, pB = /* @__PURE__ */ N.forwardRef(function(A, e) {
  var t = Xe(Xe({}, Up), A), r = t.icon, n = t.mask, i = t.symbol, o = t.className, a = t.title, s = t.titleId, l = t.maskId, u = Fp(r), c = xu("classes", [].concat(mf(qI(t)), mf((o || "").split(" ")))), f = xu("transform", typeof t.transform == "string" ? wf.transform(t.transform) : t.transform), B = xu("mask", Fp(n)), p = PI(u, Xe(Xe(Xe(Xe({}, c), f), B), {}, {
    symbol: i,
    title: a,
    titleId: s,
    maskId: l
  }));
  if (!p)
    return nH("Could not find icon", u), null;
  var w = p.abstract, y = {
    ref: e
  };
  return Object.keys(t).forEach(function(g) {
    Up.hasOwnProperty(g) || (y[g] = t[g]);
  }), iH(w[0], y);
});
pB.displayName = "FontAwesomeIcon";
pB.propTypes = {
  beat: X.bool,
  border: X.bool,
  beatFade: X.bool,
  bounce: X.bool,
  className: X.string,
  fade: X.bool,
  flash: X.bool,
  mask: X.oneOfType([X.object, X.array, X.string]),
  maskId: X.string,
  fixedWidth: X.bool,
  inverse: X.bool,
  flip: X.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: X.oneOfType([X.object, X.array, X.string]),
  listItem: X.bool,
  pull: X.oneOf(["right", "left"]),
  pulse: X.bool,
  rotation: X.oneOf([0, 90, 180, 270]),
  shake: X.bool,
  size: X.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: X.bool,
  spinPulse: X.bool,
  spinReverse: X.bool,
  symbol: X.oneOfType([X.bool, X.string]),
  title: X.string,
  titleId: X.string,
  transform: X.oneOfType([X.string, X.object]),
  swapOpacity: X.bool
};
var iH = fv.bind(null, N.createElement), oH = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, aH = oH, ne = function() {
  return ne = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ne.apply(this, arguments);
};
function vo(A, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || Array.prototype.slice.call(e));
}
var aA = "-ms-", _i = "-moz-", q = "-webkit-", Bv = "comm", Tl = "rule", hB = "decl", sH = "@import", gv = "@keyframes", lH = "@layer", pv = Math.abs, wB = String.fromCharCode, Cf = Object.assign;
function uH(A, e) {
  return kA(A, 0) ^ 45 ? (((e << 2 ^ kA(A, 0)) << 2 ^ kA(A, 1)) << 2 ^ kA(A, 2)) << 2 ^ kA(A, 3) : 0;
}
function hv(A) {
  return A.trim();
}
function ot(A, e) {
  return (A = e.exec(A)) ? A[0] : A;
}
function $(A, e, t) {
  return A.replace(e, t);
}
function ts(A, e, t) {
  return A.indexOf(e, t);
}
function kA(A, e) {
  return A.charCodeAt(e) | 0;
}
function Pn(A, e, t) {
  return A.slice(e, t);
}
function Ye(A) {
  return A.length;
}
function wv(A) {
  return A.length;
}
function Ci(A, e) {
  return e.push(A), A;
}
function cH(A, e) {
  return A.map(e).join("");
}
function Ep(A, e) {
  return A.filter(function(t) {
    return !ot(t, e);
  });
}
var kl = 1, _n = 1, mv = 0, He = 0, UA = 0, qn = "";
function Ol(A, e, t, r, n, i, o, a) {
  return { value: A, root: e, parent: t, type: r, props: n, children: i, line: kl, column: _n, length: o, return: "", siblings: a };
}
function It(A, e) {
  return Cf(Ol("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function Yr(A) {
  for (; A.root; )
    A = It(A.root, { children: [A] });
  Ci(A, A.siblings);
}
function fH() {
  return UA;
}
function dH() {
  return UA = He > 0 ? kA(qn, --He) : 0, _n--, UA === 10 && (_n = 1, kl--), UA;
}
function Me() {
  return UA = He < mv ? kA(qn, He++) : 0, _n++, UA === 10 && (_n = 1, kl++), UA;
}
function Sr() {
  return kA(qn, He);
}
function rs() {
  return He;
}
function Dl(A, e) {
  return Pn(qn, A, e);
}
function Qf(A) {
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
function BH(A) {
  return kl = _n = 1, mv = Ye(qn = A), He = 0, [];
}
function gH(A) {
  return qn = "", A;
}
function Su(A) {
  return hv(Dl(He - 1, yf(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function pH(A) {
  for (; (UA = Sr()) && UA < 33; )
    Me();
  return Qf(A) > 2 || Qf(UA) > 3 ? "" : " ";
}
function hH(A, e) {
  for (; --e && Me() && !(UA < 48 || UA > 102 || UA > 57 && UA < 65 || UA > 70 && UA < 97); )
    ;
  return Dl(A, rs() + (e < 6 && Sr() == 32 && Me() == 32));
}
function yf(A) {
  for (; Me(); )
    switch (UA) {
      case A:
        return He;
      case 34:
      case 39:
        A !== 34 && A !== 39 && yf(UA);
        break;
      case 40:
        A === 41 && yf(A);
        break;
      case 92:
        Me();
        break;
    }
  return He;
}
function wH(A, e) {
  for (; Me() && A + UA !== 57; )
    if (A + UA === 84 && Sr() === 47)
      break;
  return "/*" + Dl(e, He - 1) + "*" + wB(A === 47 ? A : Me());
}
function mH(A) {
  for (; !Qf(Sr()); )
    Me();
  return Dl(A, He);
}
function vH(A) {
  return gH(ns("", null, null, null, [""], A = BH(A), 0, [0], A));
}
function ns(A, e, t, r, n, i, o, a, s) {
  for (var l = 0, u = 0, c = o, f = 0, B = 0, p = 0, w = 1, y = 1, g = 1, d = 0, h = "", m = n, v = i, C = r, F = h; y; )
    switch (p = d, d = Me()) {
      case 40:
        if (p != 108 && kA(F, c - 1) == 58) {
          ts(F += $(Su(d), "&", "&\f"), "&\f", pv(l ? a[l - 1] : 0)) != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        F += Su(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += pH(p);
        break;
      case 92:
        F += hH(rs() - 1, 7);
        continue;
      case 47:
        switch (Sr()) {
          case 42:
          case 47:
            Ci(CH(wH(Me(), rs()), e, t, s), s);
            break;
          default:
            F += "/";
        }
        break;
      case 123 * w:
        a[l++] = Ye(F) * g;
      case 125 * w:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            g == -1 && (F = $(F, /\f/g, "")), B > 0 && Ye(F) - c && Ci(B > 32 ? Hp(F + ";", r, t, c - 1, s) : Hp($(F, " ", "") + ";", r, t, c - 2, s), s);
            break;
          case 59:
            F += ";";
          default:
            if (Ci(C = Ip(F, e, t, l, u, n, a, h, m = [], v = [], c, i), i), d === 123)
              if (u === 0)
                ns(F, e, C, C, m, i, c, a, v);
              else
                switch (f === 99 && kA(F, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ns(A, C, C, r && Ci(Ip(A, C, C, 0, 0, n, a, h, n, m = [], c, v), v), n, v, c, a, r ? m : v);
                    break;
                  default:
                    ns(F, C, C, C, [""], v, 0, a, v);
                }
        }
        l = u = B = 0, w = g = 1, h = F = "", c = o;
        break;
      case 58:
        c = 1 + Ye(F), B = p;
      default:
        if (w < 1) {
          if (d == 123)
            --w;
          else if (d == 125 && w++ == 0 && dH() == 125)
            continue;
        }
        switch (F += wB(d), d * w) {
          case 38:
            g = u > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            a[l++] = (Ye(F) - 1) * g, g = 1;
            break;
          case 64:
            Sr() === 45 && (F += Su(Me())), f = Sr(), u = c = Ye(h = F += mH(rs())), d++;
            break;
          case 45:
            p === 45 && Ye(F) == 2 && (w = 0);
        }
    }
  return i;
}
function Ip(A, e, t, r, n, i, o, a, s, l, u, c) {
  for (var f = n - 1, B = n === 0 ? i : [""], p = wv(B), w = 0, y = 0, g = 0; w < r; ++w)
    for (var d = 0, h = Pn(A, f + 1, f = pv(y = o[w])), m = A; d < p; ++d)
      (m = hv(y > 0 ? B[d] + " " + h : $(h, /&\f/g, B[d]))) && (s[g++] = m);
  return Ol(A, e, t, n === 0 ? Tl : a, s, l, u, c);
}
function CH(A, e, t, r) {
  return Ol(A, e, t, Bv, wB(fH()), Pn(A, 2, -2), 0, r);
}
function Hp(A, e, t, r, n) {
  return Ol(A, e, t, hB, Pn(A, 0, r), Pn(A, r + 1, -1), r, n);
}
function vv(A, e, t) {
  switch (uH(A, e)) {
    case 5103:
      return q + "print-" + A + A;
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
      return q + A + A;
    case 4789:
      return _i + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + A + _i + A + aA + A + A;
    case 5936:
      switch (kA(A, e + 11)) {
        case 114:
          return q + A + aA + $(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
        case 108:
          return q + A + aA + $(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
        case 45:
          return q + A + aA + $(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
      }
    case 6828:
    case 4268:
    case 2903:
      return q + A + aA + A + A;
    case 6165:
      return q + A + aA + "flex-" + A + A;
    case 5187:
      return q + A + $(A, /(\w+).+(:[^]+)/, q + "box-$1$2" + aA + "flex-$1$2") + A;
    case 5443:
      return q + A + aA + "flex-item-" + $(A, /flex-|-self/g, "") + (ot(A, /flex-|baseline/) ? "" : aA + "grid-row-" + $(A, /flex-|-self/g, "")) + A;
    case 4675:
      return q + A + aA + "flex-line-pack" + $(A, /align-content|flex-|-self/g, "") + A;
    case 5548:
      return q + A + aA + $(A, "shrink", "negative") + A;
    case 5292:
      return q + A + aA + $(A, "basis", "preferred-size") + A;
    case 6060:
      return q + "box-" + $(A, "-grow", "") + q + A + aA + $(A, "grow", "positive") + A;
    case 4554:
      return q + $(A, /([^-])(transform)/g, "$1" + q + "$2") + A;
    case 6187:
      return $($($(A, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), A, "") + A;
    case 5495:
    case 3959:
      return $(A, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return $($(A, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + aA + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + A + A;
    case 4200:
      if (!ot(A, /flex-|baseline/)) return aA + "grid-column-align" + Pn(A, e) + A;
      break;
    case 2592:
    case 3360:
      return aA + $(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(r, n) {
        return e = n, ot(r.props, /grid-\w+-end/);
      }) ? ~ts(A + (t = t[e].value), "span", 0) ? A : aA + $(A, "-start", "") + A + aA + "grid-row-span:" + (~ts(t, "span", 0) ? ot(t, /\d+/) : +ot(t, /\d+/) - +ot(A, /\d+/)) + ";" : aA + $(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return ot(r.props, /grid-\w+-start/);
      }) ? A : aA + $($(A, "-end", "-span"), "span ", "") + A;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $(A, /(.+)-inline(.+)/, q + "$1$2") + A;
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
      if (Ye(A) - 1 - e > 6)
        switch (kA(A, e + 1)) {
          case 109:
            if (kA(A, e + 4) !== 45)
              break;
          case 102:
            return $(A, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + _i + (kA(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ts(A, "stretch", 0) ? vv($(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return $(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, n, i, o, a, s, l) {
        return aA + n + ":" + i + l + (o ? aA + n + "-span:" + (a ? s : +s - +i) + l : "") + A;
      });
    case 4949:
      if (kA(A, e + 6) === 121)
        return $(A, ":", ":" + q) + A;
      break;
    case 6444:
      switch (kA(A, kA(A, 14) === 45 ? 18 : 11)) {
        case 120:
          return $(A, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + q + (kA(A, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + aA + "$2box$3") + A;
        case 100:
          return $(A, ":", ":" + aA) + A;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return $(A, "scroll-", "scroll-snap-") + A;
  }
  return A;
}
function $s(A, e) {
  for (var t = "", r = 0; r < A.length; r++)
    t += e(A[r], r, A, e) || "";
  return t;
}
function QH(A, e, t, r) {
  switch (A.type) {
    case lH:
      if (A.children.length) break;
    case sH:
    case hB:
      return A.return = A.return || A.value;
    case Bv:
      return "";
    case gv:
      return A.return = A.value + "{" + $s(A.children, r) + "}";
    case Tl:
      if (!Ye(A.value = A.props.join(","))) return "";
  }
  return Ye(t = $s(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
}
function yH(A) {
  var e = wv(A);
  return function(t, r, n, i) {
    for (var o = "", a = 0; a < e; a++)
      o += A[a](t, r, n, i) || "";
    return o;
  };
}
function FH(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function UH(A, e, t, r) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case hB:
        A.return = vv(A.value, A.length, t);
        return;
      case gv:
        return $s([It(A, { value: $(A.value, "@", "@" + q) })], r);
      case Tl:
        if (A.length)
          return cH(t = A.props, function(n) {
            switch (ot(n, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Yr(It(A, { props: [$(n, /:(read-\w+)/, ":" + _i + "$1")] })), Yr(It(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
              case "::placeholder":
                Yr(It(A, { props: [$(n, /:(plac\w+)/, ":" + q + "input-$1")] })), Yr(It(A, { props: [$(n, /:(plac\w+)/, ":" + _i + "$1")] })), Yr(It(A, { props: [$(n, /:(plac\w+)/, aA + "input-$1")] })), Yr(It(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
            }
            return "";
          });
    }
}
var EH = {
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
}, Gn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Cv = "active", Qv = "data-styled-version", Kl = "6.1.11", mB = `/*!sc*/
`, vB = typeof window < "u" && "HTMLElement" in window, IH = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Rl = Object.freeze([]), Vn = Object.freeze({});
function HH(A, e, t) {
  return t === void 0 && (t = Vn), A.theme !== t.theme && A.theme || e || t.theme;
}
var yv = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), xH = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, SH = /(^-|-$)/g;
function xp(A) {
  return A.replace(xH, "-").replace(SH, "");
}
var LH = /(a)(d)/gi, pa = 52, Sp = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function Ff(A) {
  var e, t = "";
  for (e = Math.abs(A); e > pa; e = e / pa | 0) t = Sp(e % pa) + t;
  return (Sp(e % pa) + t).replace(LH, "$1-$2");
}
var Lu, Fv = 5381, mn = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, Uv = function(A) {
  return mn(Fv, A);
};
function Ev(A) {
  return Ff(Uv(A) >>> 0);
}
function bH(A) {
  return A.displayName || A.name || "Component";
}
function bu(A) {
  return typeof A == "string" && !0;
}
var Iv = typeof Symbol == "function" && Symbol.for, Hv = Iv ? Symbol.for("react.memo") : 60115, TH = Iv ? Symbol.for("react.forward_ref") : 60112, kH = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, OH = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, xv = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, DH = ((Lu = {})[TH] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Lu[Hv] = xv, Lu);
function Lp(A) {
  return ("type" in (e = A) && e.type.$$typeof) === Hv ? xv : "$$typeof" in A ? DH[A.$$typeof] : kH;
  var e;
}
var KH = Object.defineProperty, RH = Object.getOwnPropertyNames, bp = Object.getOwnPropertySymbols, NH = Object.getOwnPropertyDescriptor, MH = Object.getPrototypeOf, Tp = Object.prototype;
function Sv(A, e, t) {
  if (typeof e != "string") {
    if (Tp) {
      var r = MH(e);
      r && r !== Tp && Sv(A, r, t);
    }
    var n = RH(e);
    bp && (n = n.concat(bp(e)));
    for (var i = Lp(A), o = Lp(e), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in OH || t && t[s] || o && s in o || i && s in i)) {
        var l = NH(e, s);
        try {
          KH(A, s, l);
        } catch {
        }
      }
    }
  }
  return A;
}
function $n(A) {
  return typeof A == "function";
}
function CB(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function Ur(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function Uf(A, e) {
  if (A.length === 0) return "";
  for (var t = A[0], r = 1; r < A.length; r++) t += A[r];
  return t;
}
function Co(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function Ef(A, e, t) {
  if (t === void 0 && (t = !1), !t && !Co(A) && !Array.isArray(A)) return e;
  if (Array.isArray(e)) for (var r = 0; r < e.length; r++) A[r] = Ef(A[r], e[r]);
  else if (Co(e)) for (var r in e) A[r] = Ef(A[r], e[r]);
  return A;
}
function QB(A, e) {
  Object.defineProperty(A, "toString", { value: e });
}
function Ro(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var PH = function() {
  function A(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return A.prototype.indexOfGroup = function(e) {
    for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, n = r.length, i = n; e >= i; ) if ((i <<= 1) < 0) throw Ro(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var o = n; o < i; o++) this.groupSizes[o] = 0;
    }
    for (var a = this.indexOfGroup(e + 1), s = (o = 0, t.length); o < s; o++) this.tag.insertRule(a, t[o]) && (this.groupSizes[e]++, a++);
  }, A.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var t = this.groupSizes[e], r = this.indexOfGroup(e), n = r + t;
      this.groupSizes[e] = 0;
      for (var i = r; i < n; i++) this.tag.deleteRule(r);
    }
  }, A.prototype.getGroup = function(e) {
    var t = "";
    if (e >= this.length || this.groupSizes[e] === 0) return t;
    for (var r = this.groupSizes[e], n = this.indexOfGroup(e), i = n + r, o = n; o < i; o++) t += "".concat(this.tag.getRule(o)).concat(mB);
    return t;
  }, A;
}(), is = /* @__PURE__ */ new Map(), Ws = /* @__PURE__ */ new Map(), os = 1, ha = function(A) {
  if (is.has(A)) return is.get(A);
  for (; Ws.has(os); ) os++;
  var e = os++;
  return is.set(A, e), Ws.set(e, A), e;
}, _H = function(A, e) {
  os = e + 1, is.set(A, e), Ws.set(e, A);
}, GH = "style[".concat(Gn, "][").concat(Qv, '="').concat(Kl, '"]'), VH = new RegExp("^".concat(Gn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $H = function(A, e, t) {
  for (var r, n = t.split(","), i = 0, o = n.length; i < o; i++) (r = n[i]) && A.registerName(e, r);
}, WH = function(A, e) {
  for (var t, r = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(mB), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(VH);
      if (s) {
        var l = 0 | parseInt(s[1], 10), u = s[2];
        l !== 0 && (_H(u, l), $H(A, u, s[3]), A.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function XH() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Lv = function(A) {
  var e = document.head, t = A || e, r = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(Gn, "]")));
    return s[s.length - 1];
  }(t), i = n !== void 0 ? n.nextSibling : null;
  r.setAttribute(Gn, Cv), r.setAttribute(Qv, Kl);
  var o = XH();
  return o && r.setAttribute("nonce", o), t.insertBefore(r, i), r;
}, YH = function() {
  function A(e) {
    this.element = Lv(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, n = 0, i = r.length; n < i; n++) {
        var o = r[n];
        if (o.ownerNode === t) return o;
      }
      throw Ro(17);
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
}(), zH = function() {
  function A(e) {
    this.element = Lv(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return A.prototype.insertRule = function(e, t) {
    if (e <= this.length && e >= 0) {
      var r = document.createTextNode(t);
      return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, A.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, A.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, A;
}(), jH = function() {
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
}(), kp = vB, JH = { isServer: !vB, useCSSOMInjection: !IH }, bv = function() {
  function A(e, t, r) {
    e === void 0 && (e = Vn), t === void 0 && (t = {});
    var n = this;
    this.options = ne(ne({}, JH), e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && vB && kp && (kp = !1, function(i) {
      for (var o = document.querySelectorAll(GH), a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        l && l.getAttribute(Gn) !== Cv && (WH(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), QB(this, function() {
      return function(i) {
        for (var o = i.getTag(), a = o.length, s = "", l = function(c) {
          var f = function(g) {
            return Ws.get(g);
          }(c);
          if (f === void 0) return "continue";
          var B = i.names.get(f), p = o.getGroup(c);
          if (B === void 0 || p.length === 0) return "continue";
          var w = "".concat(Gn, ".g").concat(c, '[id="').concat(f, '"]'), y = "";
          B !== void 0 && B.forEach(function(g) {
            g.length > 0 && (y += "".concat(g, ","));
          }), s += "".concat(p).concat(w, '{content:"').concat(y, '"}').concat(mB);
        }, u = 0; u < a; u++) l(u);
        return s;
      }(n);
    });
  }
  return A.registerId = function(e) {
    return ha(e);
  }, A.prototype.reconstructWithOptions = function(e, t) {
    return t === void 0 && (t = !0), new A(ne(ne({}, this.options), e), this.gs, t && this.names || void 0);
  }, A.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, A.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(t) {
      var r = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new jH(n) : r ? new YH(n) : new zH(n);
    }(this.options), new PH(e)));
    var e;
  }, A.prototype.hasNameForId = function(e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, A.prototype.registerName = function(e, t) {
    if (ha(e), this.names.has(e)) this.names.get(e).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(e, r);
    }
  }, A.prototype.insertRules = function(e, t, r) {
    this.registerName(e, t), this.getTag().insertRules(ha(e), r);
  }, A.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, A.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ha(e)), this.clearNames(e);
  }, A.prototype.clearTag = function() {
    this.tag = void 0;
  }, A;
}(), ZH = /&/g, qH = /^\s*\/\/.*$/gm;
function Tv(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Tv(t.children, e)), t;
  });
}
function A4(A) {
  var e, t, r, n = Vn, i = n.options, o = i === void 0 ? Vn : i, a = n.plugins, s = a === void 0 ? Rl : a, l = function(f, B, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, u = s.slice();
  u.push(function(f) {
    f.type === Tl && f.value.includes("&") && (f.props[0] = f.props[0].replace(ZH, t).replace(r, l));
  }), o.prefix && u.push(UH), u.push(QH);
  var c = function(f, B, p, w) {
    B === void 0 && (B = ""), p === void 0 && (p = ""), w === void 0 && (w = "&"), e = w, t = B, r = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(qH, ""), g = vH(p || B ? "".concat(p, " ").concat(B, " { ").concat(y, " }") : y);
    o.namespace && (g = Tv(g, o.namespace));
    var d = [];
    return $s(g, yH(u.concat(FH(function(h) {
      return d.push(h);
    })))), d;
  };
  return c.hash = s.length ? s.reduce(function(f, B) {
    return B.name || Ro(15), mn(f, B.name);
  }, Fv).toString() : "", c;
}
var e4 = new bv(), If = A4(), kv = N.createContext({ shouldForwardProp: void 0, styleSheet: e4, stylis: If });
kv.Consumer;
N.createContext(void 0);
function Op() {
  return Q.useContext(kv);
}
var Ov = function() {
  function A(e, t) {
    var r = this;
    this.inject = function(n, i) {
      i === void 0 && (i = If);
      var o = r.name + i.hash;
      n.hasNameForId(r.id, o) || n.insertRules(r.id, o, i(r.rules, o, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, QB(this, function() {
      throw Ro(12, String(r.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = If), this.name + e.hash;
  }, A;
}(), t4 = function(A) {
  return A >= "A" && A <= "Z";
};
function Dp(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var r = A[t];
    if (t === 1 && r === "-" && A[0] === "-") return A;
    t4(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Dv = function(A) {
  return A == null || A === !1 || A === "";
}, Kv = function(A) {
  var e, t, r = [];
  for (var n in A) {
    var i = A[n];
    A.hasOwnProperty(n) && !Dv(i) && (Array.isArray(i) && i.isCss || $n(i) ? r.push("".concat(Dp(n), ":"), i, ";") : Co(i) ? r.push.apply(r, vo(vo(["".concat(n, " {")], Kv(i), !1), ["}"], !1)) : r.push("".concat(Dp(n), ": ").concat((e = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in EH || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function Lr(A, e, t, r) {
  if (Dv(A)) return [];
  if (CB(A)) return [".".concat(A.styledComponentId)];
  if ($n(A)) {
    if (!$n(i = A) || i.prototype && i.prototype.isReactComponent || !e) return [A];
    var n = A(e);
    return Lr(n, e, t, r);
  }
  var i;
  return A instanceof Ov ? t ? (A.inject(t, r), [A.getName(r)]) : [A] : Co(A) ? Kv(A) : Array.isArray(A) ? Array.prototype.concat.apply(Rl, A.map(function(o) {
    return Lr(o, e, t, r);
  })) : [A.toString()];
}
function r4(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if ($n(t) && !CB(t)) return !1;
  }
  return !0;
}
var n4 = Uv(Kl), i4 = function() {
  function A(e, t, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && r4(e), this.componentId = t, this.baseHash = mn(n4, t), this.baseStyle = r, bv.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, r) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Ur(n, this.staticRulesId);
    else {
      var i = Uf(Lr(this.rules, e, t, r)), o = Ff(mn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, o)) {
        var a = r(i, ".".concat(o), void 0, this.componentId);
        t.insertRules(this.componentId, o, a);
      }
      n = Ur(n, o), this.staticRulesId = o;
    }
    else {
      for (var s = mn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var c = this.rules[u];
        if (typeof c == "string") l += c;
        else if (c) {
          var f = Uf(Lr(c, e, t, r));
          s = mn(s, f + u), l += f;
        }
      }
      if (l) {
        var B = Ff(s >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, r(l, ".".concat(B), void 0, this.componentId)), n = Ur(n, B);
      }
    }
    return n;
  }, A;
}(), Rv = N.createContext(void 0);
Rv.Consumer;
var Tu = {};
function o4(A, e, t) {
  var r = CB(A), n = A, i = !bu(A), o = e.attrs, a = o === void 0 ? Rl : o, s = e.componentId, l = s === void 0 ? function(m, v) {
    var C = typeof m != "string" ? "sc" : xp(m);
    Tu[C] = (Tu[C] || 0) + 1;
    var F = "".concat(C, "-").concat(Ev(Kl + C + Tu[C]));
    return v ? "".concat(v, "-").concat(F) : F;
  }(e.displayName, e.parentComponentId) : s, u = e.displayName, c = u === void 0 ? function(m) {
    return bu(m) ? "styled.".concat(m) : "Styled(".concat(bH(m), ")");
  }(A) : u, f = e.displayName && e.componentId ? "".concat(xp(e.displayName), "-").concat(e.componentId) : e.componentId || l, B = r && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = e.shouldForwardProp;
  if (r && n.shouldForwardProp) {
    var w = n.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      p = function(m, v) {
        return w(m, v) && y(m, v);
      };
    } else p = w;
  }
  var g = new i4(t, f, r ? n.componentStyle : void 0);
  function d(m, v) {
    return function(C, F, U) {
      var E = C.attrs, S = C.componentStyle, P = C.defaultProps, _ = C.foldedComponentIds, M = C.styledComponentId, G = C.target, Z = N.useContext(Rv), V = Op(), K = C.shouldForwardProp || V.shouldForwardProp, I = HH(F, Z, P) || Vn, x = function(gA, rA, XA) {
        for (var ei, fr = ne(ne({}, rA), { className: void 0, theme: XA }), zl = 0; zl < gA.length; zl += 1) {
          var _o = $n(ei = gA[zl]) ? ei(fr) : ei;
          for (var Ft in _o) fr[Ft] = Ft === "className" ? Ur(fr[Ft], _o[Ft]) : Ft === "style" ? ne(ne({}, fr[Ft]), _o[Ft]) : _o[Ft];
        }
        return rA.className && (fr.className = Ur(fr.className, rA.className)), fr;
      }(E, F, I), L = x.as || G, R = {};
      for (var W in x) x[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && x.theme === I || (W === "forwardedAs" ? R.as = x.forwardedAs : K && !K(W, L) || (R[W] = x[W]));
      var dA = function(gA, rA) {
        var XA = Op(), ei = gA.generateAndInjectStyles(rA, XA.styleSheet, XA.stylis);
        return ei;
      }(S, x), BA = Ur(_, M);
      return dA && (BA += " " + dA), x.className && (BA += " " + x.className), R[bu(L) && !yv.has(L) ? "class" : "className"] = BA, R.ref = U, Q.createElement(L, R);
    }(h, m, v);
  }
  d.displayName = c;
  var h = N.forwardRef(d);
  return h.attrs = B, h.componentStyle = g, h.displayName = c, h.shouldForwardProp = p, h.foldedComponentIds = r ? Ur(n.foldedComponentIds, n.styledComponentId) : "", h.styledComponentId = f, h.target = r ? n.target : A, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = r ? function(v) {
      for (var C = [], F = 1; F < arguments.length; F++) C[F - 1] = arguments[F];
      for (var U = 0, E = C; U < E.length; U++) Ef(v, E[U], !0);
      return v;
    }({}, n.defaultProps, m) : m;
  } }), QB(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && Sv(h, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Kp(A, e) {
  for (var t = [A[0]], r = 0, n = e.length; r < n; r += 1) t.push(e[r], A[r + 1]);
  return t;
}
var Rp = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function Nv(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  if ($n(A) || Co(A)) return Rp(Lr(Kp(Rl, vo([A], e, !0))));
  var r = A;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? Lr(r) : Rp(Lr(Kp(r, e)));
}
function Hf(A, e, t) {
  if (t === void 0 && (t = Vn), !e) throw Ro(1, e);
  var r = function(n) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return A(e, t, Nv.apply(void 0, vo([n], i, !1)));
  };
  return r.attrs = function(n) {
    return Hf(A, e, ne(ne({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, r.withConfig = function(n) {
    return Hf(A, e, ne(ne({}, t), n));
  }, r;
}
var Mv = function(A) {
  return Hf(o4, A);
}, $r = Mv;
yv.forEach(function(A) {
  $r[A] = Mv(A);
});
function yB(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var r = Uf(Nv.apply(void 0, vo([A], e, !1))), n = Ev(r);
  return new Ov(n, r);
}
const a4 = "#4fa94d", s4 = {
  "aria-busy": !0,
  role: "progressbar"
}, l4 = $r.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, u4 = "http://www.w3.org/2000/svg", be = 242.776657104492, c4 = 1.6, f4 = yB`
12.5% {
  stroke-dasharray: ${be * 0.14}px, ${be}px;
  stroke-dashoffset: -${be * 0.11}px;
}
43.75% {
  stroke-dasharray: ${be * 0.35}px, ${be}px;
  stroke-dashoffset: -${be * 0.35}px;
}
100% {
  stroke-dasharray: ${be * 0.01}px, ${be}px;
  stroke-dashoffset: -${be * 0.99}px;
}
`;
$r.path`
  stroke-dasharray: ${be * 0.01}px, ${be};
  stroke-dashoffset: 0;
  animation: ${f4} ${c4}s linear infinite;
`;
const d4 = yB`
to {
   transform: rotate(360deg);
 }
`;
$r.svg`
  animation: ${d4} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
$r.polyline`
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
const B4 = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: r = 1, color: n = a4, ariaLabel: i = "tail-spin-loading", wrapperStyle: o, wrapperClass: a, visible: s = !0 }) => {
  const l = parseInt(String(t)), u = l + 36, c = l / 2, f = c + parseInt(String(r)) - 1;
  return /* @__PURE__ */ j.jsx(l4, {
    style: o,
    $visible: s,
    className: a,
    "data-testid": "tail-spin-loading",
    "aria-label": i,
    ...s4,
    children: /* @__PURE__ */ j.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${u} ${u}`,
      xmlns: u4,
      "data-testid": "tail-spin-svg",
      children: [
        /* @__PURE__ */ j.jsx("defs", {
          children: /* @__PURE__ */ j.jsxs("linearGradient", {
            x1: "8.042%",
            y1: "0%",
            x2: "65.682%",
            y2: "23.865%",
            id: "a",
            children: [
              /* @__PURE__ */ j.jsx("stop", {
                stopColor: n,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ j.jsx("stop", {
                stopColor: n,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ j.jsx("stop", {
                stopColor: n,
                offset: "100%"
              })
            ]
          })
        }),
        /* @__PURE__ */ j.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ j.jsxs("g", {
            transform: `translate(${c} ${c})`,
            children: [
              /* @__PURE__ */ j.jsx("path", {
                d: "M36 18c0-9.94-8.06-18-18-18",
                id: "Oval-2",
                stroke: n,
                strokeWidth: t,
                children: /* @__PURE__ */ j.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              }),
              /* @__PURE__ */ j.jsx("circle", {
                fill: "#fff",
                cx: "36",
                cy: "18",
                r: f,
                children: /* @__PURE__ */ j.jsx("animateTransform", {
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
}, g4 = yB`
to {
   stroke-dashoffset: 136;
 }
`;
$r.polygon`
  stroke-dasharray: 17;
  animation: ${g4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
$r.svg`
  transform-origin: 50% 65%;
`;
function p4({
  open: A,
  query: e,
  isApiCallInProgress: t,
  setQuery: r,
  setOpen: n,
  handleSubmit: i
}) {
  const o = (l) => {
    r(l.target.value);
  }, a = (l) => {
    l.preventDefault(), i(e);
  }, s = () => {
    n(!1), r("");
  };
  return /* @__PURE__ */ j.jsx(T0, { show: A, appear: !0, children: /* @__PURE__ */ j.jsx(sE, { className: Xr.dialog, onClose: s, children: /* @__PURE__ */ j.jsxs("form", { onSubmit: a, "data-isgandalf": !0, children: [
    /* @__PURE__ */ j.jsx(
      Bo,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ j.jsx("div", { className: Xr.overlay })
      }
    ),
    /* @__PURE__ */ j.jsx("div", { className: Xr.container, children: /* @__PURE__ */ j.jsx(
      Bo,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ j.jsx(k0, { className: Xr.dialogPanel, children: /* @__PURE__ */ j.jsxs("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ j.jsx(
            pB,
            {
              icon: aH,
              className: Xr.searchIcon,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ j.jsx(
            "input",
            {
              "data-autofocus": !0,
              type: "text",
              autoFocus: !0,
              className: Xr.inputField,
              placeholder: "Enter how I can help you",
              onChange: o,
              value: e
            }
          ),
          t && /* @__PURE__ */ j.jsx(
            B4,
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
const h4 = "_container_ppkah_1", w4 = "_widgetButton_ppkah_10", m4 = "_arrow_ppkah_28", ku = {
  container: h4,
  widgetButton: w4,
  arrow: m4
};
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
var xf = function(A, e) {
  return xf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, xf(A, e);
};
function Ge(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  xf(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Sf = function() {
  return Sf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Sf.apply(this, arguments);
};
function YA(A, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (c) {
        o(c);
      }
    }
    function s(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        o(c);
      }
    }
    function l(u) {
      u.done ? i(u.value) : n(u.value).then(a, s);
    }
    l((r = r.apply(A, [])).next());
  });
}
function GA(A, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, n, i, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(u) {
      return s([l, u]);
    };
  }
  function s(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, n && (i = l[0] & 2 ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
      switch (n = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, n = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = l;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(l);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(A, t);
    } catch (u) {
      l = [6, u], n = 0;
    } finally {
      r = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function wa(A, e, t) {
  if (arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || e);
}
var Ct = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.left = e, this.top = t, this.width = r, this.height = n;
    }
    return A.prototype.add = function(e, t, r, n) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + n);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(n) {
        return n.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), Nl = function(A, e) {
  return Ct.fromClientRect(A, e.getBoundingClientRect());
}, v4 = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Ct(0, 0, r, n);
}, Ml = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, yA = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, i = ""; ++n < t; ) {
    var o = A[n];
    o <= 65535 ? r.push(o) : (o -= 65536, r.push((o >> 10) + 55296, o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, Np = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ma = 0; ma < Np.length; ma++)
  C4[Np.charCodeAt(ma)] = ma;
var Mp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var va = 0; va < Mp.length; va++)
  Qi[Mp.charCodeAt(va)] = va;
var Q4 = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Qi[A.charCodeAt(r)], o = Qi[A.charCodeAt(r + 1)], a = Qi[A.charCodeAt(r + 2)], s = Qi[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, y4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, F4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, br = 5, FB = 11, Ou = 2, U4 = FB - br, Pv = 65536 >> br, E4 = 1 << br, Du = E4 - 1, I4 = 1024 >> br, H4 = Pv + I4, x4 = H4, S4 = 32, L4 = x4 + S4, b4 = 65536 >> FB, T4 = 1 << U4, k4 = T4 - 1, Pp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, O4 = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, D4 = function(A, e) {
  var t = Q4(A), r = Array.isArray(t) ? F4(t) : new Uint32Array(t), n = Array.isArray(t) ? y4(t) : new Uint16Array(t), i = 24, o = Pp(n, i / 2, r[4] / 2), a = r[5] === 2 ? Pp(n, (i + r[4]) / 2) : O4(r, Math.ceil((i + r[4]) / 4));
  return new K4(r[0], r[1], r[2], r[3], o, a);
}, K4 = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> br], t = (t << Ou) + (e & Du), this.data[t];
        if (e <= 65535)
          return t = this.index[Pv + (e - 55296 >> br)], t = (t << Ou) + (e & Du), this.data[t];
        if (e < this.highStart)
          return t = L4 - b4 + (e >> FB), t = this.index[t], t += e >> br & k4, t = this.index[t], t = (t << Ou) + (e & Du), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), _p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ca = 0; Ca < _p.length; Ca++)
  R4[_p.charCodeAt(Ca)] = Ca;
var N4 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Gp = 50, M4 = 1, _v = 2, Gv = 3, P4 = 4, _4 = 5, Vp = 7, Vv = 8, $p = 9, Nt = 10, Lf = 11, Wp = 12, bf = 13, G4 = 14, yi = 15, Tf = 16, Qa = 17, ci = 18, V4 = 19, Xp = 20, kf = 21, fi = 22, Ku = 23, zr = 24, le = 25, Fi = 26, Ui = 27, jr = 28, $4 = 29, wr = 30, W4 = 31, ya = 32, Fa = 33, Of = 34, Df = 35, Kf = 36, Qo = 37, Rf = 38, as = 39, ss = 40, Ru = 41, $v = 42, X4 = 43, Y4 = [9001, 65288], Wv = "!", z = "×", Ua = "÷", Nf = D4(N4), rt = [wr, Kf], Mf = [M4, _v, Gv, _4], Xv = [Nt, Vv], Yp = [Ui, Fi], z4 = Mf.concat(Xv), zp = [Rf, as, ss, Of, Df], j4 = [yi, bf], J4 = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(i, o) {
    var a = Nf.get(i);
    if (a > Gp ? (n.push(!0), a -= Gp) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(o), t.push(Tf);
    if (a === P4 || a === Lf) {
      if (o === 0)
        return r.push(o), t.push(wr);
      var s = t[o - 1];
      return z4.indexOf(s) === -1 ? (r.push(r[o - 1]), t.push(s)) : (r.push(o), t.push(wr));
    }
    if (r.push(o), a === W4)
      return t.push(e === "strict" ? kf : Qo);
    if (a === $v || a === $4)
      return t.push(wr);
    if (a === X4)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Qo) : t.push(wr);
    t.push(a);
  }), [r, t, n];
}, Nu = function(A, e, t, r) {
  var n = r[t];
  if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
    for (var i = t; i <= r.length; ) {
      i++;
      var o = r[i];
      if (o === e)
        return !0;
      if (o !== Nt)
        break;
    }
  if (n === Nt)
    for (var i = t; i > 0; ) {
      i--;
      var a = r[i];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
        for (var s = t; s <= r.length; ) {
          s++;
          var o = r[s];
          if (o === e)
            return !0;
          if (o !== Nt)
            break;
        }
      if (a !== Nt)
        break;
    }
  return !1;
}, jp = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === Nt)
      t--;
    else
      return r;
  }
  return 0;
}, Z4 = function(A, e, t, r, n) {
  if (t[r] === 0)
    return z;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return z;
  var o = i - 1, a = i + 1, s = e[i], l = o >= 0 ? e[o] : 0, u = e[a];
  if (s === _v && u === Gv)
    return z;
  if (Mf.indexOf(s) !== -1)
    return Wv;
  if (Mf.indexOf(u) !== -1 || Xv.indexOf(u) !== -1)
    return z;
  if (jp(i, e) === Vv)
    return Ua;
  if (Nf.get(A[i]) === Lf || (s === ya || s === Fa) && Nf.get(A[a]) === Lf || s === Vp || u === Vp || s === $p || [Nt, bf, yi].indexOf(s) === -1 && u === $p || [Qa, ci, V4, zr, jr].indexOf(u) !== -1 || jp(i, e) === fi || Nu(Ku, fi, i, e) || Nu([Qa, ci], kf, i, e) || Nu(Wp, Wp, i, e))
    return z;
  if (s === Nt)
    return Ua;
  if (s === Ku || u === Ku)
    return z;
  if (u === Tf || s === Tf)
    return Ua;
  if ([bf, yi, kf].indexOf(u) !== -1 || s === G4 || l === Kf && j4.indexOf(s) !== -1 || s === jr && u === Kf || u === Xp || rt.indexOf(u) !== -1 && s === le || rt.indexOf(s) !== -1 && u === le || s === Ui && [Qo, ya, Fa].indexOf(u) !== -1 || [Qo, ya, Fa].indexOf(s) !== -1 && u === Fi || rt.indexOf(s) !== -1 && Yp.indexOf(u) !== -1 || Yp.indexOf(s) !== -1 && rt.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ui, Fi].indexOf(s) !== -1 && (u === le || [fi, yi].indexOf(u) !== -1 && e[a + 1] === le) || // ( OP | HY ) × NU
  [fi, yi].indexOf(s) !== -1 && u === le || // NU ×	(NU | SY | IS)
  s === le && [le, jr, zr].indexOf(u) !== -1)
    return z;
  if ([le, jr, zr, Qa, ci].indexOf(u) !== -1)
    for (var c = i; c >= 0; ) {
      var f = e[c];
      if (f === le)
        return z;
      if ([jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([Ui, Fi].indexOf(u) !== -1)
    for (var c = [Qa, ci].indexOf(s) !== -1 ? o : i; c >= 0; ) {
      var f = e[c];
      if (f === le)
        return z;
      if ([jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (Rf === s && [Rf, as, Of, Df].indexOf(u) !== -1 || [as, Of].indexOf(s) !== -1 && [as, ss].indexOf(u) !== -1 || [ss, Df].indexOf(s) !== -1 && u === ss || zp.indexOf(s) !== -1 && [Xp, Fi].indexOf(u) !== -1 || zp.indexOf(u) !== -1 && s === Ui || rt.indexOf(s) !== -1 && rt.indexOf(u) !== -1 || s === zr && rt.indexOf(u) !== -1 || rt.concat(le).indexOf(s) !== -1 && u === fi && Y4.indexOf(A[a]) === -1 || rt.concat(le).indexOf(u) !== -1 && s === ci)
    return z;
  if (s === Ru && u === Ru) {
    for (var B = t[i], p = 1; B > 0 && (B--, e[B] === Ru); )
      p++;
    if (p % 2 !== 0)
      return z;
  }
  return s === ya && u === Fa ? z : Ua;
}, q4 = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = J4(A, e.lineBreak), r = t[0], n = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
    return [le, wr, $v].indexOf(a) !== -1 ? Qo : a;
  }));
  var o = e.wordBreak === "keep-all" ? i.map(function(a, s) {
    return a && A[s] >= 19968 && A[s] <= 40959;
  }) : void 0;
  return [r, n, o];
}, Ax = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Wv, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return yA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), ex = function(A, e) {
  var t = Ml(A), r = q4(t, e), n = r[0], i = r[1], o = r[2], a = t.length, s = 0, l = 0;
  return {
    next: function() {
      if (l >= a)
        return { done: !0, value: null };
      for (var u = z; l < a && (u = Z4(t, i, n, ++l, o)) === z; )
        ;
      if (u !== z || l === a) {
        var c = new Ax(t, u, s, l);
        return s = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, tx = 1, rx = 2, No = 4, Jp = 8, Xs = 10, Zp = 47, Gi = 92, nx = 9, ix = 32, Ea = 34, di = 61, ox = 35, ax = 36, sx = 37, Ia = 39, Ha = 40, Bi = 41, lx = 95, Ae = 45, ux = 33, cx = 60, fx = 62, dx = 64, Bx = 91, gx = 93, px = 61, hx = 123, xa = 63, wx = 125, qp = 124, mx = 126, vx = 128, Ah = 65533, Mu = 42, Er = 43, Cx = 44, Qx = 58, yx = 59, yo = 46, Fx = 0, Ux = 8, Ex = 11, Ix = 14, Hx = 31, xx = 127, $e = -1, Yv = 48, zv = 97, jv = 101, Sx = 102, Lx = 117, bx = 122, Jv = 65, Zv = 69, qv = 70, Tx = 85, kx = 90, VA = function(A) {
  return A >= Yv && A <= 57;
}, Ox = function(A) {
  return A >= 55296 && A <= 57343;
}, Jr = function(A) {
  return VA(A) || A >= Jv && A <= qv || A >= zv && A <= Sx;
}, Dx = function(A) {
  return A >= zv && A <= bx;
}, Kx = function(A) {
  return A >= Jv && A <= kx;
}, Rx = function(A) {
  return Dx(A) || Kx(A);
}, Nx = function(A) {
  return A >= vx;
}, Sa = function(A) {
  return A === Xs || A === nx || A === ix;
}, Ys = function(A) {
  return Rx(A) || Nx(A) || A === lx;
}, eh = function(A) {
  return Ys(A) || VA(A) || A === Ae;
}, Mx = function(A) {
  return A >= Fx && A <= Ux || A === Ex || A >= Ix && A <= Hx || A === xx;
}, bt = function(A, e) {
  return A !== Gi ? !1 : e !== Xs;
}, La = function(A, e, t) {
  return A === Ae ? Ys(e) || bt(e, t) : Ys(A) ? !0 : !!(A === Gi && bt(A, e));
}, Pu = function(A, e, t) {
  return A === Er || A === Ae ? VA(e) ? !0 : e === yo && VA(t) : VA(A === yo ? e : A);
}, Px = function(A) {
  var e = 0, t = 1;
  (A[e] === Er || A[e] === Ae) && (A[e] === Ae && (t = -1), e++);
  for (var r = []; VA(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt(yA.apply(void 0, r), 10) : 0;
  A[e] === yo && e++;
  for (var i = []; VA(A[e]); )
    i.push(A[e++]);
  var o = i.length, a = o ? parseInt(yA.apply(void 0, i), 10) : 0;
  (A[e] === Zv || A[e] === jv) && e++;
  var s = 1;
  (A[e] === Er || A[e] === Ae) && (A[e] === Ae && (s = -1), e++);
  for (var l = []; VA(A[e]); )
    l.push(A[e++]);
  var u = l.length ? parseInt(yA.apply(void 0, l), 10) : 0;
  return t * (n + a * Math.pow(10, -o)) * Math.pow(10, s * u);
}, _x = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, Gx = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, Vx = {
  type: 4
  /* COMMA_TOKEN */
}, $x = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, Wx = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, Xx = {
  type: 21
  /* COLUMN_TOKEN */
}, Yx = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, zx = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, jx = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, Jx = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, Zx = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ba = {
  type: 23
  /* BAD_URL_TOKEN */
}, qx = {
  type: 1
  /* BAD_STRING_TOKEN */
}, AS = {
  type: 25
  /* CDO_TOKEN */
}, eS = {
  type: 24
  /* CDC_TOKEN */
}, tS = {
  type: 26
  /* COLON_TOKEN */
}, rS = {
  type: 27
  /* SEMICOLON_TOKEN */
}, nS = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, iS = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, oS = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Pf = {
  type: 32
  /* EOF_TOKEN */
}, AC = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Ml(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Pf; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Ea:
          return this.consumeStringToken(Ea);
        case ox:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (eh(t) || bt(r, n)) {
            var i = La(t, r, n) ? rx : tx, o = this.consumeName();
            return { type: 5, value: o, flags: i };
          }
          break;
        case ax:
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), $x;
          break;
        case Ia:
          return this.consumeStringToken(Ia);
        case Ha:
          return _x;
        case Bi:
          return Gx;
        case Mu:
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), Zx;
          break;
        case Er:
          if (Pu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Cx:
          return Vx;
        case Ae:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Pu(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (La(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === Ae && l === fx)
            return this.consumeCodePoint(), this.consumeCodePoint(), eS;
          break;
        case yo:
          if (Pu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Zp:
          if (this.peekCodePoint(0) === Mu)
            for (this.consumeCodePoint(); ; ) {
              var u = this.consumeCodePoint();
              if (u === Mu && (u = this.consumeCodePoint(), u === Zp))
                return this.consumeToken();
              if (u === $e)
                return this.consumeToken();
            }
          break;
        case Qx:
          return tS;
        case yx:
          return rS;
        case cx:
          if (this.peekCodePoint(0) === ux && this.peekCodePoint(1) === Ae && this.peekCodePoint(2) === Ae)
            return this.consumeCodePoint(), this.consumeCodePoint(), AS;
          break;
        case dx:
          var c = this.peekCodePoint(0), f = this.peekCodePoint(1), B = this.peekCodePoint(2);
          if (La(c, f, B)) {
            var o = this.consumeName();
            return { type: 7, value: o };
          }
          break;
        case Bx:
          return nS;
        case Gi:
          if (bt(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case gx:
          return iS;
        case px:
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), Wx;
          break;
        case hx:
          return jx;
        case wx:
          return Jx;
        case Lx:
        case Tx:
          var p = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return p === Er && (Jr(w) || w === xa) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case qp:
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), Yx;
          if (this.peekCodePoint(0) === qp)
            return this.consumeCodePoint(), Xx;
          break;
        case mx:
          if (this.peekCodePoint(0) === di)
            return this.consumeCodePoint(), zx;
          break;
        case $e:
          return Pf;
      }
      return Sa(e) ? (this.consumeWhiteSpace(), oS) : VA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Ys(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: yA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Jr(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === xa && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === xa ? Yv : s;
        })), 16), i = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === xa ? qv : s;
        })), 16);
        return { type: 30, start: n, end: i };
      }
      var o = parseInt(yA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === Ae && Jr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Jr(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var i = parseInt(yA.apply(void 0, a), 16);
        return { type: 30, start: o, end: i };
      } else
        return { type: 30, start: o, end: o };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Ha ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Ha ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === $e)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ia || t === Ea) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === $e || this.peekCodePoint(0) === Bi) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), ba);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === $e || n === Bi)
          return { type: 22, value: yA.apply(void 0, e) };
        if (Sa(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === $e || this.peekCodePoint(0) === Bi ? (this.consumeCodePoint(), { type: 22, value: yA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), ba);
        if (n === Ea || n === Ia || n === Ha || Mx(n))
          return this.consumeBadUrlRemnants(), ba;
        if (n === Gi)
          if (bt(n, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), ba;
        else
          e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Sa(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Bi || e === $e)
          return;
        bt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += yA.apply(void 0, this._value.splice(0, n)), e -= n;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var n = this._value[r];
        if (n === $e || n === void 0 || n === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Xs)
          return this._value.splice(0, r), qx;
        if (n === Gi) {
          var i = this._value[r + 1];
          i !== $e && i !== void 0 && (i === Xs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : bt(n, i) && (t += this.consumeStringSlice(r), t += yA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = No, r = this.peekCodePoint(0);
      for ((r === Er || r === Ae) && e.push(this.consumeCodePoint()); VA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === yo && VA(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; VA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === Zv || r === jv) && ((n === Er || n === Ae) && VA(i) || VA(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; VA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [Px(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (La(n, i, o)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return n === sx ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Jr(e)) {
        for (var t = yA(e); Jr(this.peekCodePoint(0)) && t.length < 6; )
          t += yA(this.consumeCodePoint());
        Sa(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || Ox(r) || r > 1114111 ? Ah : r;
      }
      return e === $e ? Ah : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (eh(t))
          e += yA(t);
        else if (bt(t, this.peekCodePoint(0)))
          e += yA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), eC = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new AC();
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
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || sS(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? Pf : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), Mo = function(A) {
  return A.type === 15;
}, Ai = function(A) {
  return A.type === 17;
}, tA = function(A) {
  return A.type === 20;
}, aS = function(A) {
  return A.type === 0;
}, _f = function(A, e) {
  return tA(A) && A.value === e;
}, tC = function(A) {
  return A.type !== 31;
}, Wn = function(A) {
  return A.type !== 31 && A.type !== 4;
}, et = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, sS = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, or = function(A) {
  return A.type === 17 || A.type === 15;
}, EA = function(A) {
  return A.type === 16 || or(A);
}, rC = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, RA = {
  type: 17,
  number: 0,
  flags: No
}, UB = {
  type: 16,
  number: 50,
  flags: No
}, Mt = {
  type: 16,
  number: 100,
  flags: No
}, Ei = function(A, e, t) {
  var r = A[0], n = A[1];
  return [nA(r, e), nA(typeof n < "u" ? n : r, t)];
}, nA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (Mo(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, nC = "deg", iC = "grad", oC = "rad", aC = "turn", Pl = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case nC:
          return Math.PI * e.number / 180;
        case iC:
          return Math.PI / 200 * e.number;
        case oC:
          return e.number;
        case aC:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, sC = function(A) {
  return A.type === 15 && (A.unit === nC || A.unit === iC || A.unit === oC || A.unit === aC);
}, lC = function(A) {
  var e = A.filter(tA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [RA, RA];
    case "to top":
    case "bottom":
      return ye(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [RA, Mt];
    case "to right":
    case "left":
      return ye(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Mt, Mt];
    case "to bottom":
    case "top":
      return ye(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Mt, RA];
    case "to left":
    case "right":
      return ye(270);
  }
  return 0;
}, ye = function(A) {
  return Math.PI * A / 180;
}, jt = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = lS[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), i = e.value.substring(2, 3);
        return Pt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), i = e.value.substring(2, 3), o = e.value.substring(3, 4);
        return Pt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), i = e.value.substring(4, 6);
        return Pt(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), i = e.value.substring(4, 6), o = e.value.substring(6, 8);
        return Pt(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(o, 16) / 255);
      }
    }
    if (e.type === 20) {
      var a = dt[e.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return dt.TRANSPARENT;
  }
}, Jt = function(A) {
  return (255 & A) === 0;
}, bA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, Pt = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, th = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, rh = function(A, e) {
  var t = e.filter(Wn);
  if (t.length === 3) {
    var r = t.map(th), n = r[0], i = r[1], o = r[2];
    return Pt(n, i, o, 1);
  }
  if (t.length === 4) {
    var a = t.map(th), n = a[0], i = a[1], o = a[2], s = a[3];
    return Pt(n, i, o, s);
  }
  return 0;
};
function _u(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var nh = function(A, e) {
  var t = e.filter(Wn), r = t[0], n = t[1], i = t[2], o = t[3], a = (r.type === 17 ? ye(r.number) : Pl.parse(A, r)) / (Math.PI * 2), s = EA(n) ? n.number / 100 : 0, l = EA(i) ? i.number / 100 : 0, u = typeof o < "u" && EA(o) ? nA(o, 1) : 1;
  if (s === 0)
    return Pt(l * 255, l * 255, l * 255, 1);
  var c = l <= 0.5 ? l * (s + 1) : l + s - l * s, f = l * 2 - c, B = _u(f, c, a + 1 / 3), p = _u(f, c, a), w = _u(f, c, a - 1 / 3);
  return Pt(B * 255, p * 255, w * 255, u);
}, lS = {
  hsl: nh,
  hsla: nh,
  rgb: rh,
  rgba: rh
}, Vi = function(A, e) {
  return jt.parse(A, eC.create(e).parseComponentValue());
}, dt = {
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
}, uS = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (tA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, cS = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, _l = function(A, e) {
  var t = jt.parse(A, e[0]), r = e[1];
  return r && EA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, ih = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = RA), r.stop === null && (r.stop = Mt);
  for (var n = [], i = 0, o = 0; o < A.length; o++) {
    var a = A[o].stop;
    if (a !== null) {
      var s = nA(a, e);
      s > i ? n.push(s) : n.push(i), i = s;
    } else
      n.push(null);
  }
  for (var l = null, o = 0; o < n.length; o++) {
    var u = n[o];
    if (u === null)
      l === null && (l = o);
    else if (l !== null) {
      for (var c = o - l, f = n[l - 1], B = (u - f) / (c + 1), p = 1; p <= c; p++)
        n[l + p - 1] = B * p;
      l = null;
    }
  }
  return A.map(function(w, y) {
    var g = w.color;
    return { color: g, stop: Math.max(Math.min(1, n[y] / e), 0) };
  });
}, fS = function(A, e, t) {
  var r = e / 2, n = t / 2, i = nA(A[0], e) - r, o = n - nA(A[1], t);
  return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
}, dS = function(A, e, t) {
  var r = typeof A == "number" ? A : fS(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = e / 2, o = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
  return [n, i - l, i + l, o - s, o + s];
}, Le = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, oh = function(A, e, t, r, n) {
  var i = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return i.reduce(function(o, a) {
    var s = a[0], l = a[1], u = Le(t - s, r - l);
    return (n ? u < o.optimumDistance : u > o.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: u
    } : o;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, BS = function(A, e, t, r, n) {
  var i = 0, o = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? i = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        i = o = Math.min(Le(e, t), Le(e, t - n), Le(e - r, t), Le(e - r, t - n));
      else if (A.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = oh(r, n, e, t, !0), l = s[0], u = s[1];
        i = Le(l - e, (u - t) / a), o = a * i;
      }
      break;
    case 1:
      A.shape === 0 ? i = o = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.max(Math.abs(e), Math.abs(e - r)), o = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (A.shape === 0)
        i = o = Math.max(Le(e, t), Le(e, t - n), Le(e - r, t), Le(e - r, t - n));
      else if (A.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), c = oh(r, n, e, t, !1), l = c[0], u = c[1];
        i = Le(l - e, (u - t) / a), o = a * i;
      }
      break;
  }
  return Array.isArray(A.size) && (i = nA(A.size[0], r), o = A.size.length === 2 ? nA(A.size[1], n) : i), [i, o];
}, gS = function(A, e) {
  var t = ye(180), r = [];
  return et(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to") {
        t = lC(n);
        return;
      } else if (sC(o)) {
        t = Pl.parse(A, o);
        return;
      }
    }
    var a = _l(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ta = function(A, e) {
  var t = ye(180), r = [];
  return et(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        t = lC(n);
        return;
      } else if (sC(o)) {
        t = (Pl.parse(A, o) + ye(270)) % ye(360);
        return;
      }
    }
    var a = _l(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, pS = function(A, e) {
  var t = ye(180), r = [], n = 1, i = 0, o = 3, a = [];
  return et(e).forEach(function(s, l) {
    var u = s[0];
    if (l === 0) {
      if (tA(u) && u.value === "linear") {
        n = 1;
        return;
      } else if (tA(u) && u.value === "radial") {
        n = 2;
        return;
      }
    }
    if (u.type === 18) {
      if (u.name === "from") {
        var c = jt.parse(A, u.values[0]);
        r.push({ stop: RA, color: c });
      } else if (u.name === "to") {
        var c = jt.parse(A, u.values[0]);
        r.push({ stop: Mt, color: c });
      } else if (u.name === "color-stop") {
        var f = u.values.filter(Wn);
        if (f.length === 2) {
          var c = jt.parse(A, f[1]), B = f[0];
          Ai(B) && r.push({
            stop: { type: 16, number: B.number * 100, flags: B.flags },
            color: c
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + ye(180)) % ye(360),
    stops: r,
    type: n
  } : { size: o, shape: i, stops: r, position: a, type: n };
}, uC = "closest-side", cC = "farthest-side", fC = "closest-corner", dC = "farthest-corner", BC = "circle", gC = "ellipse", pC = "cover", hC = "contain", hS = function(A, e) {
  var t = 0, r = 3, n = [], i = [];
  return et(e).forEach(function(o, a) {
    var s = !0;
    if (a === 0) {
      var l = !1;
      s = o.reduce(function(c, f) {
        if (l)
          if (tA(f))
            switch (f.value) {
              case "center":
                return i.push(UB), c;
              case "top":
              case "left":
                return i.push(RA), c;
              case "right":
              case "bottom":
                return i.push(Mt), c;
            }
          else (EA(f) || or(f)) && i.push(f);
        else if (tA(f))
          switch (f.value) {
            case BC:
              return t = 0, !1;
            case gC:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case uC:
              return r = 0, !1;
            case pC:
            case cC:
              return r = 1, !1;
            case hC:
            case fC:
              return r = 2, !1;
            case dC:
              return r = 3, !1;
          }
        else if (or(f) || EA(f))
          return Array.isArray(r) || (r = []), r.push(f), !1;
        return c;
      }, s);
    }
    if (s) {
      var u = _l(A, o);
      n.push(u);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, ka = function(A, e) {
  var t = 0, r = 3, n = [], i = [];
  return et(e).forEach(function(o, a) {
    var s = !0;
    if (a === 0 ? s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case "center":
            return i.push(UB), !1;
          case "top":
          case "left":
            return i.push(RA), !1;
          case "right":
          case "bottom":
            return i.push(Mt), !1;
        }
      else if (EA(c) || or(c))
        return i.push(c), !1;
      return u;
    }, s) : a === 1 && (s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case BC:
            return t = 0, !1;
          case gC:
            return t = 1, !1;
          case hC:
          case uC:
            return r = 0, !1;
          case cC:
            return r = 1, !1;
          case fC:
            return r = 2, !1;
          case pC:
          case dC:
            return r = 3, !1;
        }
      else if (or(c) || EA(c))
        return Array.isArray(r) || (r = []), r.push(c), !1;
      return u;
    }, s)), s) {
      var l = _l(A, o);
      n.push(l);
    }
  }), {
    size: r,
    shape: t,
    stops: n,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, wS = function(A) {
  return A.type === 1;
}, mS = function(A) {
  return A.type === 2;
}, EB = {
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
      var r = wC[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function vS(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!wC[A.name]);
}
var wC = {
  "linear-gradient": gS,
  "-moz-linear-gradient": Ta,
  "-ms-linear-gradient": Ta,
  "-o-linear-gradient": Ta,
  "-webkit-linear-gradient": Ta,
  "radial-gradient": hS,
  "-moz-radial-gradient": ka,
  "-ms-radial-gradient": ka,
  "-o-radial-gradient": ka,
  "-webkit-radial-gradient": ka,
  "-webkit-gradient": pS
}, CS = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Wn(r) && vS(r);
    }).map(function(r) {
      return EB.parse(A, r);
    });
  }
}, QS = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (tA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, yS = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return et(e).map(function(t) {
      return t.filter(EA);
    }).map(rC);
  }
}, FS = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return et(e).map(function(t) {
      return t.filter(tA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(US);
  }
}, US = function(A) {
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
}, Sn;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Sn || (Sn = {}));
var ES = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return et(e).map(function(t) {
      return t.filter(IS);
    });
  }
}, IS = function(A) {
  return tA(A) || EA(A);
}, Gl = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, HS = Gl("top"), xS = Gl("right"), SS = Gl("bottom"), LS = Gl("left"), Vl = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return rC(t.filter(EA));
    }
  };
}, bS = Vl("top-left"), TS = Vl("top-right"), kS = Vl("bottom-right"), OS = Vl("bottom-left"), $l = function(A) {
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
}, DS = $l("top"), KS = $l("right"), RS = $l("bottom"), NS = $l("left"), Wl = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return Mo(t) ? t.number : 0;
    }
  };
}, MS = Wl("top"), PS = Wl("right"), _S = Wl("bottom"), GS = Wl("left"), VS = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, $S = {
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
}, WS = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).reduce(
      function(t, r) {
        return t | XS(r.value);
      },
      0
      /* NONE */
    );
  }
}, XS = function(A) {
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
}, YS = {
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
}, zS = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, zs;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(zs || (zs = {}));
var jS = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return zs.STRICT;
      case "normal":
      default:
        return zs.NORMAL;
    }
  }
}, JS = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, ah = function(A, e) {
  return tA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : EA(A) ? nA(A, e) : e;
}, ZS = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : EB.parse(A, e);
  }
}, qS = {
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
}, Gf = {
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
}, Xl = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, AL = Xl("top"), eL = Xl("right"), tL = Xl("bottom"), rL = Xl("left"), nL = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
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
}, iL = {
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
}, Yl = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, oL = Yl("top"), aL = Yl("right"), sL = Yl("bottom"), lL = Yl("left"), uL = {
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
}, cL = {
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
}, fL = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && _f(e[0], "none") ? [] : et(e).map(function(t) {
      for (var r = {
        color: dt.TRANSPARENT,
        offsetX: RA,
        offsetY: RA,
        blur: RA
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        or(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = jt.parse(A, o);
      }
      return r;
    });
  }
}, dL = {
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
}, BL = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = hL[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, gL = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, pL = function(A) {
  var e = A.filter(function(s) {
    return s.type === 17;
  }).map(function(s) {
    return s.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var n = e[4], i = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var o = e[12], a = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, n, i, o, a] : null;
}, hL = {
  matrix: gL,
  matrix3d: pL
}, sh = {
  type: 16,
  number: 50,
  flags: No
}, wL = [sh, sh], mL = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(EA);
    return t.length !== 2 ? wL : [t[0], t[1]];
  }
}, vL = {
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
}, $i;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})($i || ($i = {}));
var CL = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return $i.BREAK_ALL;
      case "keep-all":
        return $i.KEEP_ALL;
      case "normal":
      default:
        return $i.NORMAL;
    }
  }
}, QL = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (Ai(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, mC = {
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
}, yL = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Ai(e) ? e.number : 1;
  }
}, FL = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, UL = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
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
}, EL = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(n) {
      switch (n.type) {
        case 20:
        case 0:
          t.push(n.value);
          break;
        case 17:
          t.push(n.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(n) {
      return n.indexOf(" ") === -1 ? n : "'" + n + "'";
    });
  }
}, IL = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, HL = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (Ai(e))
      return e.number;
    if (tA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, xL = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
      return t.value;
    });
  }
}, SL = {
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
}, xA = function(A, e) {
  return (A & e) !== 0;
}, LL = {
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
}, bL = {
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
    for (var r = [], n = e.filter(tC), i = 0; i < n.length; i++) {
      var o = n[i], a = n[i + 1];
      if (o.type === 20) {
        var s = a && Ai(a) ? a.number : 1;
        r.push({ counter: o.value, increment: s });
      }
    }
    return r;
  }
}, TL = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(tC), n = 0; n < r.length; n++) {
      var i = r[n], o = r[n + 1];
      if (tA(i) && i.value !== "none") {
        var a = o && Ai(o) ? o.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, kL = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(Mo).map(function(t) {
      return mC.parse(A, t);
    });
  }
}, OL = {
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
    var r = [], n = e.filter(aS);
    if (n.length % 2 !== 0)
      return null;
    for (var i = 0; i < n.length; i += 2) {
      var o = n[i].value, a = n[i + 1].value;
      r.push({ open: o, close: a });
    }
    return r;
  }
}, lh = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, DL = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && _f(e[0], "none") ? [] : et(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: RA,
        offsetY: RA,
        blur: RA,
        spread: RA,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        _f(o, "inset") ? r.inset = !0 : or(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = jt.parse(A, o);
      }
      return r;
    });
  }
}, KL = {
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
    ], r = [];
    return e.filter(tA).forEach(function(n) {
      switch (n.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(n) {
      r.indexOf(n) === -1 && r.push(n);
    }), r;
  }
}, RL = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, NL = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Mo(e) ? e.number : 0;
  }
}, ML = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = T(e, kL, t.animationDuration), this.backgroundClip = T(e, uS, t.backgroundClip), this.backgroundColor = T(e, cS, t.backgroundColor), this.backgroundImage = T(e, CS, t.backgroundImage), this.backgroundOrigin = T(e, QS, t.backgroundOrigin), this.backgroundPosition = T(e, yS, t.backgroundPosition), this.backgroundRepeat = T(e, FS, t.backgroundRepeat), this.backgroundSize = T(e, ES, t.backgroundSize), this.borderTopColor = T(e, HS, t.borderTopColor), this.borderRightColor = T(e, xS, t.borderRightColor), this.borderBottomColor = T(e, SS, t.borderBottomColor), this.borderLeftColor = T(e, LS, t.borderLeftColor), this.borderTopLeftRadius = T(e, bS, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, TS, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, kS, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, OS, t.borderBottomLeftRadius), this.borderTopStyle = T(e, DS, t.borderTopStyle), this.borderRightStyle = T(e, KS, t.borderRightStyle), this.borderBottomStyle = T(e, RS, t.borderBottomStyle), this.borderLeftStyle = T(e, NS, t.borderLeftStyle), this.borderTopWidth = T(e, MS, t.borderTopWidth), this.borderRightWidth = T(e, PS, t.borderRightWidth), this.borderBottomWidth = T(e, _S, t.borderBottomWidth), this.borderLeftWidth = T(e, GS, t.borderLeftWidth), this.boxShadow = T(e, DL, t.boxShadow), this.color = T(e, VS, t.color), this.direction = T(e, $S, t.direction), this.display = T(e, WS, t.display), this.float = T(e, YS, t.cssFloat), this.fontFamily = T(e, EL, t.fontFamily), this.fontSize = T(e, IL, t.fontSize), this.fontStyle = T(e, SL, t.fontStyle), this.fontVariant = T(e, xL, t.fontVariant), this.fontWeight = T(e, HL, t.fontWeight), this.letterSpacing = T(e, zS, t.letterSpacing), this.lineBreak = T(e, jS, t.lineBreak), this.lineHeight = T(e, JS, t.lineHeight), this.listStyleImage = T(e, ZS, t.listStyleImage), this.listStylePosition = T(e, qS, t.listStylePosition), this.listStyleType = T(e, Gf, t.listStyleType), this.marginTop = T(e, AL, t.marginTop), this.marginRight = T(e, eL, t.marginRight), this.marginBottom = T(e, tL, t.marginBottom), this.marginLeft = T(e, rL, t.marginLeft), this.opacity = T(e, yL, t.opacity);
      var i = T(e, nL, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = T(e, iL, t.overflowWrap), this.paddingTop = T(e, oL, t.paddingTop), this.paddingRight = T(e, aL, t.paddingRight), this.paddingBottom = T(e, sL, t.paddingBottom), this.paddingLeft = T(e, lL, t.paddingLeft), this.paintOrder = T(e, KL, t.paintOrder), this.position = T(e, cL, t.position), this.textAlign = T(e, uL, t.textAlign), this.textDecorationColor = T(e, FL, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = T(e, UL, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = T(e, fL, t.textShadow), this.textTransform = T(e, dL, t.textTransform), this.transform = T(e, BL, t.transform), this.transformOrigin = T(e, mL, t.transformOrigin), this.visibility = T(e, vL, t.visibility), this.webkitTextStrokeColor = T(e, RL, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, NL, t.webkitTextStrokeWidth), this.wordBreak = T(e, CL, t.wordBreak), this.zIndex = T(e, QL, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Jt(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return xA(
        this.display,
        4
        /* INLINE */
      ) || xA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || xA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || xA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || xA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || xA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), PL = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, LL, t.content), this.quotes = T(e, OL, t.quotes);
    }
    return A;
  }()
), uh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, bL, t.counterIncrement), this.counterReset = T(e, TL, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var r = new AC(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var i = new eC(r.read());
  switch (e.type) {
    case 2:
      var o = i.parseComponentValue();
      return e.parse(A, tA(o) ? o.value : e.initialValue);
    case 0:
      return e.parse(A, i.parseComponentValue());
    case 1:
      return e.parse(A, i.parseComponentValues());
    case 4:
      return i.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Pl.parse(A, i.parseComponentValue());
        case "color":
          return jt.parse(A, i.parseComponentValue());
        case "image":
          return EB.parse(A, i.parseComponentValue());
        case "length":
          var a = i.parseComponentValue();
          return or(a) ? a : RA;
        case "length-percentage":
          var s = i.parseComponentValue();
          return EA(s) ? s : RA;
        case "time":
          return mC.parse(A, i.parseComponentValue());
      }
      break;
  }
}, _L = "data-html2canvas-debug", GL = function(A) {
  var e = A.getAttribute(_L);
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
}, Vf = function(A, e) {
  var t = GL(A);
  return t === 1 || e === t;
}, tt = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Vf(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new ML(e, window.getComputedStyle(t, null)), Xf(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Nl(this.context, t), Vf(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), VL = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ii = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Oa = 0; Oa < ch.length; Oa++)
  Ii[ch.charCodeAt(Oa)] = Oa;
var $L = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Ii[A.charCodeAt(r)], o = Ii[A.charCodeAt(r + 1)], a = Ii[A.charCodeAt(r + 2)], s = Ii[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, WL = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, XL = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Tr = 5, IB = 11, Gu = 2, YL = IB - Tr, vC = 65536 >> Tr, zL = 1 << Tr, Vu = zL - 1, jL = 1024 >> Tr, JL = vC + jL, ZL = JL, qL = 32, Ab = ZL + qL, eb = 65536 >> IB, tb = 1 << YL, rb = tb - 1, fh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, nb = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, ib = function(A, e) {
  var t = $L(A), r = Array.isArray(t) ? XL(t) : new Uint32Array(t), n = Array.isArray(t) ? WL(t) : new Uint16Array(t), i = 24, o = fh(n, i / 2, r[4] / 2), a = r[5] === 2 ? fh(n, (i + r[4]) / 2) : nb(r, Math.ceil((i + r[4]) / 4));
  return new ob(r[0], r[1], r[2], r[3], o, a);
}, ob = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Tr], t = (t << Gu) + (e & Vu), this.data[t];
        if (e <= 65535)
          return t = this.index[vC + (e - 55296 >> Tr)], t = (t << Gu) + (e & Vu), this.data[t];
        if (e < this.highStart)
          return t = Ab - eb + (e >> IB), t = this.index[t], t += e >> Tr & rb, t = this.index[t], t = (t << Gu) + (e & Vu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), dh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ab = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Da = 0; Da < dh.length; Da++)
  ab[dh.charCodeAt(Da)] = Da;
var sb = 1, $u = 2, Wu = 3, Bh = 4, gh = 5, lb = 7, ph = 8, Xu = 9, Yu = 10, hh = 11, wh = 12, mh = 13, vh = 14, zu = 15, ub = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, cb = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], n = -1, i = ""; ++n < t; ) {
    var o = A[n];
    o <= 65535 ? r.push(o) : (o -= 65536, r.push((o >> 10) + 55296, o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return i;
}, fb = ib(VL), we = "×", ju = "÷", db = function(A) {
  return fb.get(A);
}, Bb = function(A, e, t) {
  var r = t - 2, n = e[r], i = e[t - 1], o = e[t];
  if (i === $u && o === Wu)
    return we;
  if (i === $u || i === Wu || i === Bh || o === $u || o === Wu || o === Bh)
    return ju;
  if (i === ph && [ph, Xu, hh, wh].indexOf(o) !== -1 || (i === hh || i === Xu) && (o === Xu || o === Yu) || (i === wh || i === Yu) && o === Yu || o === mh || o === gh || o === lb || i === sb)
    return we;
  if (i === mh && o === vh) {
    for (; n === gh; )
      n = e[--r];
    if (n === vh)
      return we;
  }
  if (i === zu && o === zu) {
    for (var a = 0; n === zu; )
      a++, n = e[--r];
    if (a % 2 === 0)
      return we;
  }
  return ju;
}, gb = function(A) {
  var e = ub(A), t = e.length, r = 0, n = 0, i = e.map(db);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var o = we; r < t && (o = Bb(e, i, ++r)) === we; )
        ;
      if (o !== we || r === t) {
        var a = cb.apply(null, e.slice(n, r));
        return n = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, pb = function(A) {
  for (var e = gb(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, hb = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var n = t.getBoundingClientRect(), i = Math.round(n.height);
      if (A.body.removeChild(r), i === e)
        return !0;
    }
  }
  return !1;
}, wb = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, n = Ml(r.data).map(function(s) {
    return yA(s);
  }), i = 0, o = {}, a = n.every(function(s, l) {
    t.setStart(r, i), t.setEnd(r, i + s.length);
    var u = t.getBoundingClientRect();
    i += s.length;
    var c = u.x > o.x || u.y > o.y;
    return o = u, l === 0 ? !0 : c;
  });
  return A.body.removeChild(e), a;
}, mb = function() {
  return typeof new Image().crossOrigin < "u";
}, vb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Cb = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Ch = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, Qb = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), i = e.toDataURL();
  n.src = i;
  var o = $f(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Qh(o).then(function(a) {
    r.drawImage(a, 0, 0);
    var s = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var l = A.createElement("div");
    return l.style.backgroundImage = "url(" + i + ")", l.style.height = t + "px", Ch(s) ? Qh($f(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), Ch(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, $f = function(A, e, t, r, n) {
  var i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return o.setAttributeNS(null, "width", A.toString()), o.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(n), o;
}, Qh = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, KA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = hb(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && wb(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = Cb(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Qb(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = mb();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = vb();
    return Object.defineProperty(KA, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(KA, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(KA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, Wi = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), yb = function(A, e, t, r) {
  var n = Eb(e, t), i = [], o = 0;
  return n.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (KA.SUPPORT_RANGE_BOUNDS) {
        var s = yh(r, o, a.length).getClientRects();
        if (s.length > 1) {
          var l = HB(a), u = 0;
          l.forEach(function(f) {
            i.push(new Wi(f, Ct.fromDOMRectList(A, yh(r, u + o, f.length).getClientRects()))), u += f.length;
          });
        } else
          i.push(new Wi(a, Ct.fromDOMRectList(A, s)));
      } else {
        var c = r.splitText(a.length);
        i.push(new Wi(a, Fb(A, r))), r = c;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    o += a.length;
  }), i;
}, Fb = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r, e);
      var i = Nl(A, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), i;
    }
  }
  return Ct.EMPTY;
}, yh = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, HB = function(A) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return pb(A);
}, Ub = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return Hb(A, e);
}, Eb = function(A, e) {
  return e.letterSpacing !== 0 ? HB(A) : Ub(A, e);
}, Ib = [32, 160, 4961, 65792, 65793, 4153, 4241], Hb = function(A, e) {
  for (var t = ex(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var o = n.value.slice(), a = Ml(o), s = "";
      a.forEach(function(l) {
        Ib.indexOf(l) === -1 ? s += yA(l) : (s.length && r.push(s), r.push(yA(l)), s = "");
      }), s.length && r.push(s);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, xb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = Sb(t.data, r.textTransform), this.textBounds = yb(e, this.text, r, t);
    }
    return A;
  }()
), Sb = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(Lb, bb);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, Lb = /(^|\s|:|-|\(|\))([a-z])/g, bb = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, CC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(tt)
), QC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(tt)
), yC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = new XMLSerializer(), o = Nl(t, r);
      return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(tt)
), FC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(tt)
), Wf = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(tt)
), Tb = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], kb = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Ob = function(A) {
  return A.width > A.height ? new Ct(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ct(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, Db = function(A) {
  var e = A.type === Kb ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, js = "checkbox", Js = "radio", Kb = "password", Fh = 707406591, xB = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = Db(r), (n.type === js || n.type === Js) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = Ob(n.bounds)), n.type) {
        case js:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Tb;
          break;
        case Js:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = kb;
          break;
      }
      return n;
    }
    return e;
  }(tt)
), UC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return e;
  }(tt)
), EC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(tt)
), IC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = xC(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? Vi(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : dt.TRANSPARENT, o = r.contentWindow.document.body ? Vi(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : dt.TRANSPARENT;
          n.backgroundColor = Jt(i) ? Jt(o) ? n.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(tt)
), Rb = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var n = e.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, SC(n) && n.data.trim().length > 0)
      t.textNodes.push(new xb(A, n, t.styles));
    else if (vn(n))
      if (kC(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(a) {
          return ls(A, a, t, r);
        });
      else {
        var o = HC(A, n);
        o.styles.isVisible() && (Nb(n, o, r) ? o.flags |= 4 : Mb(o.styles) && (o.flags |= 2), Rb.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? ls(A, n.shadowRoot, o, r) : !Zs(n) && !LC(n) && !qs(n) && ls(A, n, o, r));
      }
}, HC = function(A, e) {
  return Yf(e) ? new CC(A, e) : bC(e) ? new QC(A, e) : LC(e) ? new yC(A, e) : Pb(e) ? new FC(A, e) : _b(e) ? new Wf(A, e) : Gb(e) ? new xB(A, e) : qs(e) ? new UC(A, e) : Zs(e) ? new EC(A, e) : TC(e) ? new IC(A, e) : new tt(A, e);
}, xC = function(A, e) {
  var t = HC(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, Nb = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || SB(A) && t.styles.isTransparent();
}, Mb = function(A) {
  return A.isPositioned() || A.isFloating();
}, SC = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, vn = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, Xf = function(A) {
  return vn(A) && typeof A.style < "u" && !us(A);
}, us = function(A) {
  return typeof A.className == "object";
}, Pb = function(A) {
  return A.tagName === "LI";
}, _b = function(A) {
  return A.tagName === "OL";
}, Gb = function(A) {
  return A.tagName === "INPUT";
}, Vb = function(A) {
  return A.tagName === "HTML";
}, LC = function(A) {
  return A.tagName === "svg";
}, SB = function(A) {
  return A.tagName === "BODY";
}, bC = function(A) {
  return A.tagName === "CANVAS";
}, Uh = function(A) {
  return A.tagName === "VIDEO";
}, Yf = function(A) {
  return A.tagName === "IMG";
}, TC = function(A) {
  return A.tagName === "IFRAME";
}, Eh = function(A) {
  return A.tagName === "STYLE";
}, $b = function(A) {
  return A.tagName === "SCRIPT";
}, Zs = function(A) {
  return A.tagName === "TEXTAREA";
}, qs = function(A) {
  return A.tagName === "SELECT";
}, kC = function(A) {
  return A.tagName === "SLOT";
}, Ih = function(A) {
  return A.tagName.indexOf("-") > 0;
}, Wb = (
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
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, n = e.counterReset, i = !0;
      r !== null && r.forEach(function(a) {
        var s = t.counters[a.counter];
        s && a.increment !== 0 && (i = !1, s.length || s.push(1), s[Math.max(0, s.length - 1)] += a.increment);
      });
      var o = [];
      return i && n.forEach(function(a) {
        var s = t.counters[a.counter];
        o.push(a.counter), s || (s = t.counters[a.counter] = []), s.push(a.reset);
      }), o;
    }, A;
  }()
), Hh = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, xh = {
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
}, Xb = {
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
}, Yb = {
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
}, Zr = function(A, e, t, r, n, i) {
  return A < e || A > t ? Fo(A, n, i.length > 0) : r.integers.reduce(function(o, a, s) {
    for (; A >= a; )
      A -= a, o += r.values[s];
    return o;
  }, "") + i;
}, OC = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, QA = function(A, e, t, r, n) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (OC(Math.abs(A), i, r, function(o) {
    return yA(Math.floor(o % i) + e);
  }) + n);
}, dr = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return OC(Math.abs(A), r, !1, function(n) {
    return e[Math.floor(n % r)];
  }) + t;
}, en = 1, Ht = 2, xt = 4, Hi = 8, nt = function(A, e, t, r, n, i) {
  if (A < -9999 || A > 9999)
    return Fo(A, 4, n.length > 0);
  var o = Math.abs(A), a = n;
  if (o === 0)
    return e[0] + a;
  for (var s = 0; o > 0 && s <= 4; s++) {
    var l = o % 10;
    l === 0 && xA(i, en) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && xA(i, Ht) || l === 1 && s === 1 && xA(i, xt) && A > 100 || l === 1 && s > 1 && xA(i, Hi) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), o = Math.floor(o / 10);
  }
  return (A < 0 ? r : "") + a;
}, Sh = "十百千萬", Lh = "拾佰仟萬", bh = "マイナス", Ju = "마이너스", Fo = function(A, e, t) {
  var r = t ? ". " : "", n = t ? "、" : "", i = t ? ", " : "", o = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      var a = QA(A, 48, 57, !0, r);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return dr(A, "〇一二三四五六七八九", n);
    case 6:
      return Zr(A, 1, 3999, Hh, 3, r).toLowerCase();
    case 7:
      return Zr(A, 1, 3999, Hh, 3, r);
    case 8:
      return QA(A, 945, 969, !1, r);
    case 9:
      return QA(A, 97, 122, !1, r);
    case 10:
      return QA(A, 65, 90, !1, r);
    case 11:
      return QA(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Zr(A, 1, 9999, xh, 3, r);
    case 35:
      return Zr(A, 1, 9999, xh, 3, r).toLowerCase();
    case 13:
      return QA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return QA(A, 6112, 6121, !0, r);
    case 15:
      return dr(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return dr(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return nt(A, "零一二三四五六七八九", Sh, "負", n, Ht | xt | Hi);
    case 47:
      return nt(A, "零壹貳參肆伍陸柒捌玖", Lh, "負", n, en | Ht | xt | Hi);
    case 42:
      return nt(A, "零一二三四五六七八九", Sh, "负", n, Ht | xt | Hi);
    case 41:
      return nt(A, "零壹贰叁肆伍陆柒捌玖", Lh, "负", n, en | Ht | xt | Hi);
    case 26:
      return nt(A, "〇一二三四五六七八九", "十百千万", bh, n, 0);
    case 25:
      return nt(A, "零壱弐参四伍六七八九", "拾百千万", bh, n, en | Ht | xt);
    case 31:
      return nt(A, "영일이삼사오육칠팔구", "십백천만", Ju, i, en | Ht | xt);
    case 33:
      return nt(A, "零一二三四五六七八九", "十百千萬", Ju, i, 0);
    case 32:
      return nt(A, "零壹貳參四五六七八九", "拾百千", Ju, i, en | Ht | xt);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return Zr(A, 1, 19999, Yb, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return Zr(A, 1, 10999, Xb, 3, r);
    case 23:
      return dr(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return dr(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return QA(A, 3302, 3311, !0, r);
    case 28:
      return dr(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return dr(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return QA(A, 3792, 3801, !0, r);
    case 37:
      return QA(A, 6160, 6169, !0, r);
    case 38:
      return QA(A, 4160, 4169, !0, r);
    case 39:
      return QA(A, 2918, 2927, !0, r);
    case 40:
      return QA(A, 1776, 1785, !0, r);
    case 43:
      return QA(A, 3046, 3055, !0, r);
    case 44:
      return QA(A, 3174, 3183, !0, r);
    case 45:
      return QA(A, 3664, 3673, !0, r);
    case 46:
      return QA(A, 3872, 3881, !0, r);
    case 3:
    default:
      return QA(A, 48, 57, !0, r);
  }
}, DC = "data-html2canvas-ignore", Th = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new Wb(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = zb(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, o = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = Zb(n).then(function() {
        return YA(r, void 0, void 0, function() {
          var u, c;
          return GA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(t2), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Jb(s)] : [3, 4];
              case 3:
                f.sent(), f.label = 4;
              case 4:
                return typeof u == "function" ? [2, Promise.resolve().then(function() {
                  return u(s, c);
                }).then(function() {
                  return n;
                })] : [2, n];
            }
          });
        });
      });
      return s.open(), s.write(A2(document.doctype) + "<html></html>"), e2(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Vf(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (bC(e))
        return this.createCanvasClone(e);
      if (Uh(e))
        return this.createVideoClone(e);
      if (Eh(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return Yf(t) && (Yf(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Ih(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Zu(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(i, o) {
            return o && typeof o.cssText == "string" ? i + o.cssText : i;
          }, ""), n = e.cloneNode(!1);
          return n.textContent = r, n;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError")
          throw i;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var n = e.cloneNode(!1);
      try {
        n.width = e.width, n.height = e.height;
        var i = e.getContext("2d"), o = n.getContext("2d");
        if (o)
          if (!this.options.allowTaint && i)
            o.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var a = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (a) {
              var s = a.getContextAttributes();
              (s == null ? void 0 : s.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            o.drawImage(e, 0, 0);
          }
        return n;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return n;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var n = e.ownerDocument.createElement("canvas");
      return n.width = e.offsetWidth, n.height = e.offsetHeight, n;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!vn(t) || !$b(t) && !t.hasAttribute(DC) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !vn(t) || !Eh(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (vn(i) && kC(i) && typeof i.assignedNodes == "function") {
          var o = i.assignedNodes();
          o.length && o.forEach(function(a) {
            return n.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (SC(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && vn(e) && (Xf(e) || us(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(e), o = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Xf(n) && (this.clonedReferenceElement = n), SB(n) && i2(n);
        var s = this.counters.parse(new uh(this.context, i)), l = this.resolvePseudoContent(e, n, o, Xi.BEFORE);
        Ih(e) && (t = !0), Uh(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var u = this.resolvePseudoContent(e, n, a, Xi.AFTER);
        return u && n.appendChild(u), this.counters.pop(s), (i && (this.options.copyStyles || us(e)) && !TC(e) || t) && Zu(i, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (Zs(e) || qs(e)) && (Zs(n) || qs(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var i = this;
      if (r) {
        var o = r.content, a = t.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new uh(this.context, r));
          var s = new PL(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Zu(r, l), s.content.forEach(function(c) {
            if (c.type === 0)
              l.appendChild(a.createTextNode(c.value));
            else if (c.type === 22) {
              var f = a.createElement("img");
              f.src = c.value, f.style.opacity = "1", l.appendChild(f);
            } else if (c.type === 18) {
              if (c.name === "attr") {
                var B = c.values.filter(tA);
                B.length && l.appendChild(a.createTextNode(e.getAttribute(B[0].value) || ""));
              } else if (c.name === "counter") {
                var p = c.values.filter(Wn), w = p[0], y = p[1];
                if (w && tA(w)) {
                  var g = i.counters.getCounterValue(w.value), d = y && tA(y) ? Gf.parse(i.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Fo(g, d, !1)));
                }
              } else if (c.name === "counters") {
                var h = c.values.filter(Wn), w = h[0], m = h[1], y = h[2];
                if (w && tA(w)) {
                  var v = i.counters.getCounterValues(w.value), C = y && tA(y) ? Gf.parse(i.context, y.value) : 3, F = m && m.type === 0 ? m.value : "", U = v.map(function(P) {
                    return Fo(P, C, !1);
                  }).join(F);
                  l.appendChild(a.createTextNode(U));
                }
              }
            } else if (c.type === 20)
              switch (c.value) {
                case "open-quote":
                  l.appendChild(a.createTextNode(lh(s.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  l.appendChild(a.createTextNode(lh(s.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  l.appendChild(a.createTextNode(c.value));
              }
          }), l.className = zf + " " + jf;
          var u = n === Xi.BEFORE ? " " + zf : " " + jf;
          return us(t) ? t.className.baseValue += u : t.className += u, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Xi;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Xi || (Xi = {}));
var zb = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(DC, "true"), A.body.appendChild(t), t;
}, jb = function(A) {
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
}, Jb = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(jb));
}, Zb = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var i = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(i), e(A));
      }, 50);
    };
  });
}, qb = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Zu = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    qb.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, A2 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, e2 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, t2 = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, r2 = ":before", n2 = ":after", zf = "___html2canvas___pseudoelement_before", jf = "___html2canvas___pseudoelement_after", kh = `{
    content: "" !important;
    display: none !important;
}`, i2 = function(A) {
  o2(A, "." + zf + r2 + kh + `
         .` + jf + n2 + kh);
}, o2 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, KC = (
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
), a2 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ac(e) || c2(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return YA(this, void 0, void 0, function() {
        var t, r, n, i, o = this;
        return GA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = KC.isSameOrigin(e), r = !qu(e) && this._options.useCORS === !0 && KA.SUPPORT_CORS_IMAGES && !t, n = !qu(e) && !t && !Ac(e) && typeof this._options.proxy == "string" && KA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !qu(e) && !Ac(e) && !n && !r ? [
                2
                /*return*/
              ] : (i = e, n ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(s, l) {
                var u = new Image();
                u.onload = function() {
                  return s(u);
                }, u.onerror = l, (f2(i) || r) && (u.crossOrigin = "anonymous"), u.src = i, u.complete === !0 && setTimeout(function() {
                  return s(u);
                }, 500), o._options.imageTimeout > 0 && setTimeout(function() {
                  return l("Timed out (" + o._options.imageTimeout + "ms) loading image");
                }, o._options.imageTimeout);
              })];
            case 3:
              return [2, a.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var n = e.substring(0, 256);
      return new Promise(function(i, o) {
        var a = KA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
        s.onload = function() {
          if (s.status === 200)
            if (a === "text")
              i(s.response);
            else {
              var c = new FileReader();
              c.addEventListener("load", function() {
                return i(c.result);
              }, !1), c.addEventListener("error", function(f) {
                return o(f);
              }, !1), c.readAsDataURL(s.response);
            }
          else
            o("Failed to proxy resource " + n + " with status code " + s.status);
        }, s.onerror = o;
        var l = r.indexOf("?") > -1 ? "&" : "?";
        if (s.open("GET", "" + r + l + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a), t._options.imageTimeout) {
          var u = t._options.imageTimeout;
          s.timeout = u, s.ontimeout = function() {
            return o("Timed out (" + u + "ms) proxying " + n);
          };
        }
        s.send();
      });
    }, A;
  }()
), s2 = /^data:image\/svg\+xml/i, l2 = /^data:image\/.*;base64,/i, u2 = /^data:image\/.*/i, c2 = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !d2(A);
}, qu = function(A) {
  return u2.test(A);
}, f2 = function(A) {
  return l2.test(A);
}, Ac = function(A) {
  return A.substr(0, 4) === "blob";
}, d2 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || s2.test(A);
}, b = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), qr = function(A, e, t) {
  return new b(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Ka = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = qr(this.start, this.startControl, e), n = qr(this.startControl, this.endControl, e), i = qr(this.endControl, this.end, e), o = qr(r, n, e), a = qr(n, i, e), s = qr(o, a, e);
      return t ? new A(this.start, r, o, s) : new A(s, a, i, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Ce = function(A) {
  return A.type === 1;
}, B2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Ei(t.borderTopLeftRadius, r.width, r.height), i = n[0], o = n[1], a = Ei(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], u = Ei(t.borderBottomRightRadius, r.width, r.height), c = u[0], f = u[1], B = Ei(t.borderBottomLeftRadius, r.width, r.height), p = B[0], w = B[1], y = [];
      y.push((i + s) / r.width), y.push((p + c) / r.width), y.push((o + w) / r.height), y.push((l + f) / r.height);
      var g = Math.max.apply(Math, y);
      g > 1 && (i /= g, o /= g, s /= g, l /= g, c /= g, f /= g, p /= g, w /= g);
      var d = r.width - s, h = r.height - f, m = r.width - c, v = r.height - w, C = t.borderTopWidth, F = t.borderRightWidth, U = t.borderBottomWidth, E = t.borderLeftWidth, S = nA(t.paddingTop, e.bounds.width), P = nA(t.paddingRight, e.bounds.width), _ = nA(t.paddingBottom, e.bounds.width), M = nA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + E / 3, r.top + C / 3, i - E / 3, o - C / 3, AA.TOP_LEFT) : new b(r.left + E / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 3, s - F / 3, l - C / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 3, f - U / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 3, r.top + r.height - U / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || w > 0 ? cA(r.left + E / 3, r.top + v, p - E / 3, w - U / 3, AA.BOTTOM_LEFT) : new b(r.left + E / 3, r.top + r.height - U / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + E * 2 / 3, r.top + C * 2 / 3, i - E * 2 / 3, o - C * 2 / 3, AA.TOP_LEFT) : new b(r.left + E * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C * 2 / 3, s - F * 2 / 3, l - C * 2 / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F * 2 / 3, f - U * 2 / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + r.height - U * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || w > 0 ? cA(r.left + E * 2 / 3, r.top + v, p - E * 2 / 3, w - U * 2 / 3, AA.BOTTOM_LEFT) : new b(r.left + E * 2 / 3, r.top + r.height - U * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? cA(r.left + E / 2, r.top + C / 2, i - E / 2, o - C / 2, AA.TOP_LEFT) : new b(r.left + E / 2, r.top + C / 2), this.topRightBorderStroke = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 2, s - F / 2, l - C / 2, AA.TOP_RIGHT) : new b(r.left + r.width - F / 2, r.top + C / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 2, f - U / 2, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 2, r.top + r.height - U / 2), this.bottomLeftBorderStroke = p > 0 || w > 0 ? cA(r.left + E / 2, r.top + v, p - E / 2, w - U / 2, AA.BOTTOM_LEFT) : new b(r.left + E / 2, r.top + r.height - U / 2), this.topLeftBorderBox = i > 0 || o > 0 ? cA(r.left, r.top, i, o, AA.TOP_LEFT) : new b(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? cA(r.left + d, r.top, s, l, AA.TOP_RIGHT) : new b(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c, f, AA.BOTTOM_RIGHT) : new b(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || w > 0 ? cA(r.left, r.top + v, p, w, AA.BOTTOM_LEFT) : new b(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || o > 0 ? cA(r.left + E, r.top + C, Math.max(0, i - E), Math.max(0, o - C), AA.TOP_LEFT) : new b(r.left + E, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width - F), r.top + C, d > r.width + F ? 0 : Math.max(0, s - F), Math.max(0, l - C), AA.TOP_RIGHT) : new b(r.left + r.width - F, r.top + C), this.bottomRightPaddingBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - E), r.top + Math.min(h, r.height - U), Math.max(0, c - F), Math.max(0, f - U), AA.BOTTOM_RIGHT) : new b(r.left + r.width - F, r.top + r.height - U), this.bottomLeftPaddingBox = p > 0 || w > 0 ? cA(r.left + E, r.top + Math.min(v, r.height - U), Math.max(0, p - E), Math.max(0, w - U), AA.BOTTOM_LEFT) : new b(r.left + E, r.top + r.height - U), this.topLeftContentBox = i > 0 || o > 0 ? cA(r.left + E + M, r.top + C + S, Math.max(0, i - (E + M)), Math.max(0, o - (C + S)), AA.TOP_LEFT) : new b(r.left + E + M, r.top + C + S), this.topRightContentBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width + E + M), r.top + C + S, d > r.width + E + M ? 0 : s - E + M, l - (C + S), AA.TOP_RIGHT) : new b(r.left + r.width - (F + P), r.top + C + S), this.bottomRightContentBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - (E + M)), r.top + Math.min(h, r.height + C + S), Math.max(0, c - (F + P)), f - (U + _), AA.BOTTOM_RIGHT) : new b(r.left + r.width - (F + P), r.top + r.height - (U + _)), this.bottomLeftContentBox = p > 0 || w > 0 ? cA(r.left + E + M, r.top + v, Math.max(0, p - (E + M)), w - (U + _), AA.BOTTOM_LEFT) : new b(r.left + E + M, r.top + r.height - (U + _));
    }
    return A;
  }()
), AA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(AA || (AA = {}));
var cA = function(A, e, t, r, n) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), o = t * i, a = r * i, s = A + t, l = e + r;
  switch (n) {
    case AA.TOP_LEFT:
      return new Ka(new b(A, l), new b(A, l - a), new b(s - o, e), new b(s, e));
    case AA.TOP_RIGHT:
      return new Ka(new b(A, e), new b(A + o, e), new b(s, l - a), new b(s, l));
    case AA.BOTTOM_RIGHT:
      return new Ka(new b(s, e), new b(s, e + a), new b(A + o, l), new b(A, l));
    case AA.BOTTOM_LEFT:
    default:
      return new Ka(new b(s, l), new b(s - o, l), new b(A, e + a), new b(A, e));
  }
}, Al = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, g2 = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, el = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, p2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), Ra = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), h2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), w2 = function(A) {
  return A.type === 0;
}, RC = function(A) {
  return A.type === 1;
}, m2 = function(A) {
  return A.type === 2;
}, Oh = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, v2 = function(A, e, t, r, n) {
  return A.map(function(i, o) {
    switch (o) {
      case 0:
        return i.add(e, t);
      case 1:
        return i.add(e + r, t);
      case 2:
        return i.add(e + r, t + n);
      case 3:
        return i.add(e, t + n);
    }
    return i;
  });
}, NC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), MC = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new B2(this.container), this.container.styles.opacity < 1 && this.effects.push(new h2(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new p2(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = Al(this.curves), a = el(this.curves);
        Oh(o, a) ? this.effects.push(new Ra(
          o,
          6
          /* CONTENT */
        )) : (this.effects.push(new Ra(
          o,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Ra(
          a,
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
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var i = r.effects.filter(function(s) {
          return !RC(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var o = Al(r.curves), a = el(r.curves);
            Oh(o, a) || n.unshift(new Ra(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          n.unshift.apply(n, i);
        r = r.parent;
      }
      return n.filter(function(s) {
        return xA(s.target, e);
      });
    }, A;
  }()
), Jf = function(A, e, t, r) {
  A.container.elements.forEach(function(n) {
    var i = xA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), o = xA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new MC(n, A);
    xA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var s = xA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (i || o) {
      var l = i || n.styles.isPositioned() ? t : e, u = new NC(a);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var c = n.styles.zIndex.order;
        if (c < 0) {
          var f = 0;
          l.negativeZIndex.some(function(p, w) {
            return c > p.element.container.styles.zIndex.order ? (f = w, !1) : f > 0;
          }), l.negativeZIndex.splice(f, 0, u);
        } else if (c > 0) {
          var B = 0;
          l.positiveZIndex.some(function(p, w) {
            return c >= p.element.container.styles.zIndex.order ? (B = w + 1, !1) : B > 0;
          }), l.positiveZIndex.splice(B, 0, u);
        } else
          l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
      } else
        n.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
      Jf(a, u, i ? u : t, s);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Jf(a, e, t, s);
    xA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && PC(n, s);
  });
}, PC = function(A, e) {
  for (var t = A instanceof Wf ? A.start : 1, r = A instanceof Wf ? A.reversed : !1, n = 0; n < e.length; n++) {
    var i = e[n];
    i.container instanceof FC && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Fo(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, C2 = function(A) {
  var e = new MC(A, null), t = new NC(e), r = [];
  return Jf(e, t, t, r), PC(e.container, r), t;
}, Dh = function(A, e) {
  switch (e) {
    case 0:
      return Fe(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return Fe(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return Fe(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Fe(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, Q2 = function(A, e) {
  switch (e) {
    case 0:
      return Fe(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return Fe(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return Fe(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Fe(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, y2 = function(A, e) {
  switch (e) {
    case 0:
      return Fe(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return Fe(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return Fe(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Fe(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, F2 = function(A, e) {
  switch (e) {
    case 0:
      return Na(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Na(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Na(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Na(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Na = function(A, e) {
  var t = [];
  return Ce(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), Ce(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, Fe = function(A, e, t, r) {
  var n = [];
  return Ce(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A), Ce(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), Ce(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), Ce(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e), n;
}, _C = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, tl = function(A) {
  var e = A.styles, t = A.bounds, r = nA(e.paddingLeft, t.width), n = nA(e.paddingRight, t.width), i = nA(e.paddingTop, t.width), o = nA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + o));
}, U2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : _C(e);
}, E2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : _C(e);
}, ec = function(A, e, t) {
  var r = U2(tn(A.styles.backgroundOrigin, e), A), n = E2(tn(A.styles.backgroundClip, e), A), i = I2(tn(A.styles.backgroundSize, e), t, r), o = i[0], a = i[1], s = Ei(tn(A.styles.backgroundPosition, e), r.width - o, r.height - a), l = H2(tn(A.styles.backgroundRepeat, e), s, i, r, n), u = Math.round(r.left + s[0]), c = Math.round(r.top + s[1]);
  return [l, u, c, o, a];
}, An = function(A) {
  return tA(A) && A.value === Sn.AUTO;
}, Ma = function(A) {
  return typeof A == "number";
}, I2 = function(A, e, t) {
  var r = e[0], n = e[1], i = e[2], o = A[0], a = A[1];
  if (!o)
    return [0, 0];
  if (EA(o) && a && EA(a))
    return [nA(o, t.width), nA(a, t.height)];
  var s = Ma(i);
  if (tA(o) && (o.value === Sn.CONTAIN || o.value === Sn.COVER)) {
    if (Ma(i)) {
      var l = t.width / t.height;
      return l < i != (o.value === Sn.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var u = Ma(r), c = Ma(n), f = u || c;
  if (An(o) && (!a || An(a))) {
    if (u && c)
      return [r, n];
    if (!s && !f)
      return [t.width, t.height];
    if (f && s) {
      var B = u ? r : n * i, p = c ? n : r / i;
      return [B, p];
    }
    var w = u ? r : t.width, y = c ? n : t.height;
    return [w, y];
  }
  if (s) {
    var g = 0, d = 0;
    return EA(o) ? g = nA(o, t.width) : EA(a) && (d = nA(a, t.height)), An(o) ? g = d * i : (!a || An(a)) && (d = g / i), [g, d];
  }
  var h = null, m = null;
  if (EA(o) ? h = nA(o, t.width) : a && EA(a) && (m = nA(a, t.height)), h !== null && (!a || An(a)) && (m = u && c ? h / r * n : t.height), m !== null && An(o) && (h = u && c ? m / n * r : t.width), h !== null && m !== null)
    return [h, m];
  throw new Error("Unable to calculate background-size for element");
}, tn = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, H2 = function(A, e, t, r, n) {
  var i = e[0], o = e[1], a = t[0], s = t[1];
  switch (A) {
    case 2:
      return [
        new b(Math.round(r.left), Math.round(r.top + o)),
        new b(Math.round(r.left + r.width), Math.round(r.top + o)),
        new b(Math.round(r.left + r.width), Math.round(s + r.top + o)),
        new b(Math.round(r.left), Math.round(s + r.top + o))
      ];
    case 3:
      return [
        new b(Math.round(r.left + i), Math.round(r.top)),
        new b(Math.round(r.left + i + a), Math.round(r.top)),
        new b(Math.round(r.left + i + a), Math.round(r.height + r.top)),
        new b(Math.round(r.left + i), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new b(Math.round(r.left + i), Math.round(r.top + o)),
        new b(Math.round(r.left + i + a), Math.round(r.top + o)),
        new b(Math.round(r.left + i + a), Math.round(r.top + o + s)),
        new b(Math.round(r.left + i), Math.round(r.top + o + s))
      ];
    default:
      return [
        new b(Math.round(n.left), Math.round(n.top)),
        new b(Math.round(n.left + n.width), Math.round(n.top)),
        new b(Math.round(n.left + n.width), Math.round(n.height + n.top)),
        new b(Math.round(n.left), Math.round(n.height + n.top))
      ];
  }
}, x2 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Kh = "Hidden Text", S2 = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = x2, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Kh)), r.appendChild(i), r.appendChild(n);
      var a = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Kh)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return o.removeChild(r), { baseline: a, middle: s };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), GC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), L2 = 1e4, b2 = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new S2(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), m2(t) && (this.ctx.globalAlpha = t.opacity), w2(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), RC(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return YA(this, void 0, void 0, function() {
        var r;
        return GA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              n.sent(), n.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return YA(this, void 0, void 0, function() {
        return GA(this, function(r) {
          switch (r.label) {
            case 0:
              if (xA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, n) {
      var i = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
      else {
        var o = HB(t.text);
        o.reduce(function(a, s) {
          return i.ctx.fillText(s, a, t.bounds.top + n), a + i.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(o) {
        return o === "normal" || o === "small-caps";
      }).join(""), n = K2(t.fontFamily).join(", "), i = Mo(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return YA(this, void 0, void 0, function() {
        var n, i, o, a, s, l, u, c, f = this;
        return GA(this, function(B) {
          return n = this.createFontStyle(r), i = n[0], o = n[1], a = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, a), l = s.baseline, u = s.middle, c = r.paintOrder, t.textBounds.forEach(function(p) {
            c.forEach(function(w) {
              switch (w) {
                case 0:
                  f.ctx.fillStyle = bA(r.color), f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(g) {
                    f.ctx.shadowColor = bA(g.color), f.ctx.shadowOffsetX = g.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = g.offsetY.number * f.options.scale, f.ctx.shadowBlur = g.blur.number, f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = bA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(g) {
                    switch (g) {
                      case 1:
                        f.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top + l), p.bounds.width, 1);
                        break;
                      case 2:
                        f.ctx.fillRect(p.bounds.left, Math.round(p.bounds.top), p.bounds.width, 1);
                        break;
                      case 3:
                        f.ctx.fillRect(p.bounds.left, Math.ceil(p.bounds.top + u), p.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && p.text.trim().length && (f.ctx.strokeStyle = bA(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, n) {
      if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var i = tl(t), o = el(r);
        this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, d, d, l, u, c, f, m, B, p, v, w, y, g, d, h, m, v;
        return GA(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, i = r.styles, o = 0, a = r.textNodes, C.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [4, this.renderTextNode(s, i)]) : [3, 4];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return o++, [3, 1];
            case 4:
              if (!(r instanceof CC)) return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof QC && this.renderReplacedElement(r, n, r.canvas), !(r instanceof yC)) return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof IC && r.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, l.render(r.tree)]) : [3, 14];
            case 13:
              u = C.sent(), r.width && r.height && this.ctx.drawImage(u, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof xB && (c = Math.min(r.bounds.width, r.bounds.height), r.type === js ? r.checked && (this.ctx.save(), this.path([
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79),
                new b(r.bounds.left + c * 0.16, r.bounds.top + c * 0.5549),
                new b(r.bounds.left + c * 0.27347, r.bounds.top + c * 0.44071),
                new b(r.bounds.left + c * 0.39694, r.bounds.top + c * 0.5649),
                new b(r.bounds.left + c * 0.72983, r.bounds.top + c * 0.23),
                new b(r.bounds.left + c * 0.84, r.bounds.top + c * 0.34085),
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore()) : r.type === Js && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore())), T2(r) && r.value.length) {
                switch (f = this.createFontStyle(i), m = f[0], B = f[1], p = this.fontMetrics.getMetrics(m, B).baseline, this.ctx.font = m, this.ctx.fillStyle = bA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = O2(r.styles.textAlign), v = tl(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += v.width / 2;
                    break;
                  case 2:
                    w += v.width;
                    break;
                }
                y = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
                  new b(v.left, v.top),
                  new b(v.left + v.width, v.top),
                  new b(v.left + v.width, v.top + v.height),
                  new b(v.left, v.top + v.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Wi(r.value, y), i.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!xA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (g = r.styles.listStyleImage, g.type !== 0) return [3, 18];
              d = void 0, h = g.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)];
            case 16:
              return d = C.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + h), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(i)[0], this.ctx.font = m, this.ctx.fillStyle = bA(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Ct(r.bounds.left, r.bounds.top + nA(r.styles.paddingTop, r.bounds.width), r.bounds.width, ah(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Wi(t.listValue, v), i.letterSpacing, ah(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, g, i, o, g, a, s, g, l, u, g, c, f, g, B, p, g, w, y, g;
        return GA(this, function(d) {
          switch (d.label) {
            case 0:
              if (xA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              d.sent(), r = 0, n = t.negativeZIndex, d.label = 2;
            case 2:
              return r < n.length ? (g = n[r], [4, this.renderStack(g)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              d.sent(), i = 0, o = t.nonInlineLevel, d.label = 7;
            case 7:
              return i < o.length ? (g = o[i], [4, this.renderNode(g)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              a = 0, s = t.nonPositionedFloats, d.label = 11;
            case 11:
              return a < s.length ? (g = s[a], [4, this.renderStack(g)]) : [3, 14];
            case 12:
              d.sent(), d.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              l = 0, u = t.nonPositionedInlineLevel, d.label = 15;
            case 15:
              return l < u.length ? (g = u[l], [4, this.renderStack(g)]) : [3, 18];
            case 16:
              d.sent(), d.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              c = 0, f = t.inlineLevel, d.label = 19;
            case 19:
              return c < f.length ? (g = f[c], [4, this.renderNode(g)]) : [3, 22];
            case 20:
              d.sent(), d.label = 21;
            case 21:
              return c++, [3, 19];
            case 22:
              B = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return B < p.length ? (g = p[B], [4, this.renderStack(g)]) : [3, 26];
            case 24:
              d.sent(), d.label = 25;
            case 25:
              return B++, [3, 23];
            case 26:
              w = 0, y = t.positiveZIndex, d.label = 27;
            case 27:
              return w < y.length ? (g = y[w], [4, this.renderStack(g)]) : [3, 30];
            case 28:
              d.sent(), d.label = 29;
            case 29:
              return w++, [3, 27];
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
      var r = this;
      t.forEach(function(n, i) {
        var o = Ce(n) ? n.start : n;
        i === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y), Ce(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, n, i) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, i), this.ctx.fill(), this.ctx.translate(-n, -i);
    }, e.prototype.resizeImage = function(t, r, n) {
      var i;
      if (t.width === r && t.height === n)
        return t;
      var o = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, a = o.createElement("canvas");
      a.width = Math.max(1, r), a.height = Math.max(1, n);
      var s = a.getContext("2d");
      return s.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s;
        return GA(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(u) {
                var c, f, B, S, V, K, M, G, U, p, S, V, K, M, G, w, y, g, d, h, m, v, C, F, U, E, S, P, _, M, G, Z, V, K, I, x, L, R, W, dA, BA, gA;
                return GA(this, function(rA) {
                  switch (rA.label) {
                    case 0:
                      if (u.type !== 0) return [3, 5];
                      c = void 0, f = u.url, rA.label = 1;
                    case 1:
                      return rA.trys.push([1, 3, , 4]), [4, i.context.cache.match(f)];
                    case 2:
                      return c = rA.sent(), [3, 4];
                    case 3:
                      return rA.sent(), i.context.logger.error("Error loading background-image " + f), [3, 4];
                    case 4:
                      return c && (B = ec(t, r, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), S = B[0], V = B[1], K = B[2], M = B[3], G = B[4], U = i.ctx.createPattern(i.resizeImage(c, M, G), "repeat"), i.renderRepeat(S, U, V, K)), [3, 6];
                    case 5:
                      wS(u) ? (p = ec(t, r, [null, null, null]), S = p[0], V = p[1], K = p[2], M = p[3], G = p[4], w = dS(u.angle, M, G), y = w[0], g = w[1], d = w[2], h = w[3], m = w[4], v = document.createElement("canvas"), v.width = M, v.height = G, C = v.getContext("2d"), F = C.createLinearGradient(g, h, d, m), ih(u.stops, y).forEach(function(XA) {
                        return F.addColorStop(XA.stop, bA(XA.color));
                      }), C.fillStyle = F, C.fillRect(0, 0, M, G), M > 0 && G > 0 && (U = i.ctx.createPattern(v, "repeat"), i.renderRepeat(S, U, V, K))) : mS(u) && (E = ec(t, r, [
                        null,
                        null,
                        null
                      ]), S = E[0], P = E[1], _ = E[2], M = E[3], G = E[4], Z = u.position.length === 0 ? [UB] : u.position, V = nA(Z[0], M), K = nA(Z[Z.length - 1], G), I = BS(u, V, K, M, G), x = I[0], L = I[1], x > 0 && L > 0 && (R = i.ctx.createRadialGradient(P + V, _ + K, 0, P + V, _ + K, x), ih(u.stops, x * 2).forEach(function(XA) {
                        return R.addColorStop(XA.stop, bA(XA.color));
                      }), i.path(S), i.ctx.fillStyle = R, x !== L ? (W = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, BA = L / x, gA = 1 / BA, i.ctx.save(), i.ctx.translate(W, dA), i.ctx.transform(1, 0, 0, BA, 0, 0), i.ctx.translate(-W, -dA), i.ctx.fillRect(P, gA * (_ - dA) + dA, M, G * gA), i.ctx.restore()) : i.ctx.fill())), rA.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, o = 0, a = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [5, n(s)]) : [3, 4];
            case 2:
              l.sent(), l.label = 3;
            case 3:
              return o++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, n) {
      return YA(this, void 0, void 0, function() {
        return GA(this, function(i) {
          return this.path(Dh(n, r)), this.ctx.fillStyle = bA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, i) {
      return YA(this, void 0, void 0, function() {
        var o, a;
        return GA(this, function(s) {
          switch (s.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
            case 1:
              return s.sent(), [
                2
                /*return*/
              ];
            case 2:
              return o = Q2(i, n), this.path(o), this.ctx.fillStyle = bA(t), this.ctx.fill(), a = y2(i, n), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, l, u, c = this;
        return GA(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !Jt(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], o = k2(tn(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), Jt(r.backgroundColor) || (this.ctx.fillStyle = bA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(B) {
                c.ctx.save();
                var p = Al(t.curves), w = B.inset ? 0 : L2, y = v2(p, -w + (B.inset ? 1 : -1) * B.spread.number, (B.inset ? 1 : -1) * B.spread.number, B.spread.number * (B.inset ? -2 : 2), B.spread.number * (B.inset ? -2 : 2));
                B.inset ? (c.path(p), c.ctx.clip(), c.mask(y)) : (c.mask(p), c.ctx.clip(), c.path(y)), c.ctx.shadowOffsetX = B.offsetX.number + w, c.ctx.shadowOffsetY = B.offsetY.number, c.ctx.shadowColor = bA(B.color), c.ctx.shadowBlur = B.blur.number, c.ctx.fillStyle = B.inset ? bA(B.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), f.label = 2;
            case 2:
              a = 0, s = 0, l = i, f.label = 3;
            case 3:
              return s < l.length ? (u = l[s], u.style !== 0 && !Jt(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                u.color,
                u.width,
                a,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return f.sent(), [3, 11];
            case 5:
              return u.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                u.color,
                u.width,
                a,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return f.sent(), [3, 11];
            case 7:
              return u.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(u.color, u.width, a, t.curves)];
            case 8:
              return f.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(u.color, a, t.curves)];
            case 10:
              f.sent(), f.label = 11;
            case 11:
              a++, f.label = 12;
            case 12:
              return s++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, n, i, o) {
      return YA(this, void 0, void 0, function() {
        var a, s, l, u, c, f, B, p, w, y, g, d, h, m, v, C, v, C;
        return GA(this, function(F) {
          return this.ctx.save(), a = F2(i, n), s = Dh(i, n), o === 2 && (this.path(s), this.ctx.clip()), Ce(s[0]) ? (l = s[0].start.x, u = s[0].start.y) : (l = s[0].x, u = s[0].y), Ce(s[1]) ? (c = s[1].end.x, f = s[1].end.y) : (c = s[1].x, f = s[1].y), n === 0 || n === 2 ? B = Math.abs(l - c) : B = Math.abs(u - f), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, o === 3 && (p = r, w = r), y = !0, B <= p * 2 ? y = !1 : B <= p * 2 + w ? (g = B / (2 * p + w), p *= g, w *= g) : (d = Math.floor((B + w) / (p + w)), h = (B - d * p) / (d - 1), m = (B - (d + 1) * p) / d, w = m <= 0 || Math.abs(w - h) < Math.abs(w - m) ? h : m), y && (o === 3 ? this.ctx.setLineDash([0, p + w]) : this.ctx.setLineDash([p, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = bA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Ce(s[0]) && (v = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke()), Ce(s[1]) && (v = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var r;
        return GA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = C2(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(GC)
), T2 = function(A) {
  return A instanceof EC || A instanceof UC ? !0 : A instanceof xB && A.type !== Js && A.type !== js;
}, k2 = function(A, e) {
  switch (A) {
    case 0:
      return Al(e);
    case 2:
      return g2(e);
    case 1:
    default:
      return el(e);
  }
}, O2 = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, D2 = ["-apple-system", "system-ui"], K2 = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return D2.indexOf(e) === -1;
  }) : A;
}, R2 = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n;
        return GA(this, function(i) {
          switch (i.label) {
            case 0:
              return r = $f(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, N2(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(GC)
), N2 = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, M2 = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, wa([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, wa([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, wa([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, wa([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), P2 = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new M2({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new a2(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), _2 = function(A, e) {
  return e === void 0 && (e = {}), G2(A, e);
};
typeof window < "u" && KC.setContext(window);
var G2 = function(A, e) {
  return YA(void 0, void 0, void 0, function() {
    var t, r, n, i, o, a, s, l, u, c, f, B, p, w, y, g, d, h, m, v, F, C, F, U, E, S, P, _, M, G, Z, V, K, I, x, L, R, W, dA, BA;
    return GA(this, function(gA) {
      switch (gA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: (U = e.allowTaint) !== null && U !== void 0 ? U : !1,
            imageTimeout: (E = e.imageTimeout) !== null && E !== void 0 ? E : 15e3,
            proxy: e.proxy,
            useCORS: (S = e.useCORS) !== null && S !== void 0 ? S : !1
          }, i = Sf({ logging: (P = e.logging) !== null && P !== void 0 ? P : !0, cache: e.cache }, n), o = {
            windowWidth: (_ = e.windowWidth) !== null && _ !== void 0 ? _ : r.innerWidth,
            windowHeight: (M = e.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
            scrollX: (G = e.scrollX) !== null && G !== void 0 ? G : r.pageXOffset,
            scrollY: (Z = e.scrollY) !== null && Z !== void 0 ? Z : r.pageYOffset
          }, a = new Ct(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new P2(i, a), l = (V = e.foreignObjectRendering) !== null && V !== void 0 ? V : !1, u = {
            allowTaint: (K = e.allowTaint) !== null && K !== void 0 ? K : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), c = new Th(s, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return B = gA.sent(), p = SB(f) || Vb(f) ? v4(f.ownerDocument) : Nl(s, f), w = p.width, y = p.height, g = p.left, d = p.top, h = V2(s, f, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: h,
            scale: (x = (I = e.scale) !== null && I !== void 0 ? I : r.devicePixelRatio) !== null && x !== void 0 ? x : 1,
            x: ((L = e.x) !== null && L !== void 0 ? L : 0) + g,
            y: ((R = e.y) !== null && R !== void 0 ? R : 0) + d,
            width: (W = e.width) !== null && W !== void 0 ? W : Math.ceil(w),
            height: (dA = e.height) !== null && dA !== void 0 ? dA : Math.ceil(y)
          }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), F = new R2(s, m), [4, F.render(f)]) : [3, 3];
        case 2:
          return v = gA.sent(), [3, 5];
        case 3:
          return s.logger.debug("Document cloned, element located at " + g + "," + d + " with size " + w + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = xC(s, f), h === C.styles.backgroundColor && (C.styles.backgroundColor = dt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new b2(s, m), [4, F.render(C)];
        case 4:
          v = gA.sent(), gA.label = 5;
        case 5:
          return (!((BA = e.removeContainer) !== null && BA !== void 0) || BA) && (Th.destroy(B) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, V2 = function(A, e, t) {
  var r = e.ownerDocument, n = r.documentElement ? Vi(A, getComputedStyle(r.documentElement).backgroundColor) : dt.TRANSPARENT, i = r.body ? Vi(A, getComputedStyle(r.body).backgroundColor) : dt.TRANSPARENT, o = typeof t == "string" ? Vi(A, t) : t === null ? dt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? Jt(n) ? Jt(i) ? o : i : n : o;
};
const Rh = (A) => {
  const t = new DOMParser().parseFromString(
    A,
    "text/html"
  );
  t.querySelectorAll("script").forEach((n) => n.remove()), t.querySelectorAll("meta").forEach((n) => n.remove()), t.querySelectorAll("style").forEach((n) => n.remove()), t.querySelectorAll("*").forEach((n) => {
    n.childNodes.forEach((i) => {
      i.nodeType === Node.COMMENT_NODE && i.remove();
    });
  });
  const r = ["font", "center", "marquee"];
  return t.querySelectorAll("*").forEach((n) => {
    n.removeAttribute("style"), r.includes(n.tagName.toLowerCase()) && n.replaceWith(...Array.from(n.childNodes)), !n.innerHTML.trim() && n.nodeType === Node.ELEMENT_NODE && (n.tagName === "IMG" ? n.setAttribute("src", "") : n.tagName !== "INPUT" && n.tagName !== "TEXTAREA" && n.remove());
  }), t;
};
function $2(A) {
  return new XMLSerializer().serializeToString(A);
}
const W2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "A",
  "INPUT",
  "SELECT",
  "TEXTAREA"
]);
function VC(A, e) {
  A.childNodes.forEach((t) => {
    t instanceof HTMLElement && e(t) && VC(t, e);
  });
}
function X2(A, e, t, r) {
  var s;
  const n = {
    itemId: r,
    top: Math.round(e.top),
    left: Math.round(e.left),
    width: Math.round(e.width),
    height: Math.round(e.height),
    element: A
  }, i = t.backgroundColor;
  i && i !== "rgba(0, 0, 0, 0)" && (n.backgroundColor = i);
  const o = (s = A.textContent) == null ? void 0 : s.trim();
  o && (n.text = o);
  let a = A.parentElement;
  for (; a && a !== document.body && a.childElementCount === 1; ) {
    const l = a.getBoundingClientRect();
    if (l.left !== e.left || l.right !== e.right || l.top !== e.top || l.bottom !== e.bottom)
      break;
    if (!n.backgroundColor) {
      const u = window.getComputedStyle(a).backgroundColor;
      u && u !== "rgba(0, 0, 0, 0)" && (n.backgroundColor = u);
    }
    n.element = a, a = a.parentElement;
  }
  return n;
}
function Y2() {
  const A = [];
  let e = 0;
  return VC(document.body, (t) => {
    if (t.attributes.getNamedItem("data-isgandalf"))
      return !1;
    const r = window.getComputedStyle(t), n = r.cursor;
    if (t.checkVisibility() && (W2.has(t.tagName) || t.onclick != null || n == "pointer" || n == "grab")) {
      const i = t.getBoundingClientRect();
      return i.width > 0 && i.height > 0 && A.push(X2(t, i, r, e++)), !1;
    }
    return !0;
  }), A;
}
async function z2({
  product: A,
  query: e,
  previousSteps: t
}) {
  var g;
  const r = $2(
    Rh(document.documentElement.outerHTML)
  ), n = Y2(), i = await _2(document.body, {
    ignoreElements: (d) => d.hasAttribute("data-isgandalf")
  }), o = await new Promise(
    (d) => i.toBlob((h) => d(h))
  );
  if (location.hash) {
    const d = document.createElement("a");
    document.body.appendChild(d);
    const h = window.URL.createObjectURL(o);
    d.href = h, d.download = "screenshot.png", d.click(), setTimeout(() => {
      window.URL.revokeObjectURL(h), document.body.removeChild(d);
    }, 0), console.log(r);
  }
  const a = JSON.stringify(
    n.map((d) => {
      const { element: h, ...m } = d;
      return {
        ...m,
        html: Rh(h.outerHTML).body.innerHTML
      };
    }),
    null,
    2
  ), s = new FormData();
  s.append("user_input", e), s.append("product", A), s.append("previous_steps_json", JSON.stringify(t)), s.append("screen_layout", a), console.log(a), o && s.append("screenshot", o, "screenshot.png"), console.log(s);
  const u = await (await fetch("http://localhost:8000/gandalf", {
    method: "POST",
    body: s
  })).json();
  console.log("Success:", u);
  const c = u.result.replace(/```json\n/, "").replace(/\n```/, ""), f = JSON.parse(c);
  console.log("Result Object:", f);
  const { Instructions: B, itemId: p, hasMoreInstructions: w } = f;
  console.log(
    "Instructions:",
    B,
    "itemId:",
    p,
    "hasMoreInstructions:",
    w
  );
  const y = ((g = n.find((d) => d.itemId === p)) == null ? void 0 : g.element) ?? null;
  return y || console.warn("No valid target element found for the popover."), {
    Instructions: B,
    targetElement: y,
    hasMoreInstructions: w
  };
}
function j2(A, e) {
  return e === A || e.contains(A);
}
function J2(A) {
  const e = Q.useRef(A);
  return e.current = A, Q.useCallback(() => e.current(), []);
}
const Z2 = ({
  productName: A,
  isWidgetVisible: e,
  widgetColor: t
}) => {
  var v, C;
  const [r, n] = Q.useState(""), i = Q.useRef(null), [o, a] = Q.useState(!1), [s, l] = Q.useState(!1), [u, c] = Q.useState(""), f = Q.useRef(null), { refs: B, floatingStyles: p, middlewareData: w, placement: y } = g1({
    middleware: [ZU(10), A1(), qU(), e1({ element: f })]
  }), g = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[y.split("-")[0]] || "top", d = {
    ...p,
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
  }, h = J2(() => {
    B.setReference(null), n(""), setTimeout(() => {
      m(u);
    }, 100);
  });
  Q.useEffect(() => {
    const F = (E) => {
      E.key === "p" && (E.metaKey || E.ctrlKey) && (E.preventDefault(), l(!0));
    };
    document.addEventListener("keydown", F);
    const U = (E) => {
      console.log("Click detected:", E.target), E.target instanceof Element && (console.log(
        "Click on element:",
        E.target.tagName,
        E.target.id,
        E.target.className
      ), B.domReference.current && B.domReference.current instanceof Element && j2(E.target, B.domReference.current) && (console.log("Target element clicked, advancing guide"), h()));
    };
    return document.addEventListener("click", U), () => {
      document.removeEventListener("keydown", F), document.removeEventListener("click", U);
    };
  }, []);
  const m = async (F) => {
    var U, E;
    if (console.log("Submitting query from index:", F), !o) {
      a(!0);
      try {
        const { Instructions: S, targetElement: P, hasMoreInstructions: _ } = await z2({
          query: F,
          previousSteps: ((U = i.current) == null ? void 0 : U.completedSteps) ?? [],
          product: A
        });
        S && n(S), _ ? i.current = {
          query: F,
          completedSteps: [
            ...((E = i.current) == null ? void 0 : E.completedSteps) ?? [],
            S
          ]
        } : i.current = null, B.setReference(P);
      } catch (S) {
        console.error(S);
      } finally {
        a(!1), l(!1);
      }
    }
  };
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx("div", { className: ku.container, "data-isGandalf": !0, children: /* @__PURE__ */ j.jsx(
      p4,
      {
        open: s,
        query: u,
        isApiCallInProgress: o,
        setQuery: c,
        setOpen: l,
        handleSubmit: m
      }
    ) }),
    r !== "" && /* @__PURE__ */ j.jsxs(
      "div",
      {
        ref: B.setFloating,
        style: d,
        "data-isgandalf": !0,
        children: [
          r,
          /* @__PURE__ */ j.jsx(
            "div",
            {
              ref: f,
              className: ku.arrow,
              style: {
                [g]: "-6px",
                ...((v = w.arrow) == null ? void 0 : v.x) != null && {
                  left: `${w.arrow.x}px`
                },
                ...((C = w.arrow) == null ? void 0 : C.y) != null && {
                  top: `${w.arrow.y}px`
                }
              }
            }
          )
        ]
      }
    ),
    e && /* @__PURE__ */ j.jsx(
      "button",
      {
        className: ku.widgetButton,
        style: { backgroundColor: t || "#007bff" },
        disabled: !e,
        onMouseDown: (F) => {
          F.stopPropagation();
        },
        onPointerDown: (F) => {
          F.stopPropagation();
        },
        onClick: (F) => {
          F.preventDefault(), F.stopPropagation(), l(!s);
        },
        "aria-label": "Toggle chat",
        "data-isgandalf": !0,
        children: o ? "<Cool animation>" : "💬"
      }
    )
  ] });
}, Po = document.createElement("div");
Po.style.zIndex = "100000";
Po.style.position = "fixed";
Po.style.pointerEvents = "auto";
document.body.appendChild(Po);
const q2 = window.__gandalf_product ?? "demo";
hF.render(
  /* @__PURE__ */ j.jsx(Z2, { productName: q2, isWidgetVisible: !0, widgetColor: "pink" }),
  Po
);
