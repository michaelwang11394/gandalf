function XC(A, e) {
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
function rl(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Nh = { exports: {} }, nl = {}, Mh = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo = Symbol.for("react.element"), jC = Symbol.for("react.portal"), YC = Symbol.for("react.fragment"), zC = Symbol.for("react.strict_mode"), JC = Symbol.for("react.profiler"), ZC = Symbol.for("react.provider"), qC = Symbol.for("react.context"), AQ = Symbol.for("react.forward_ref"), eQ = Symbol.for("react.suspense"), tQ = Symbol.for("react.memo"), rQ = Symbol.for("react.lazy"), LB = Symbol.iterator;
function nQ(A) {
  return A === null || typeof A != "object" ? null : (A = LB && A[LB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Ph = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _h = Object.assign, Vh = {};
function jn(A, e, t) {
  this.props = A, this.context = e, this.refs = Vh, this.updater = t || Ph;
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
jn.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function Gh() {
}
Gh.prototype = jn.prototype;
function Zf(A, e, t) {
  this.props = A, this.context = e, this.refs = Vh, this.updater = t || Ph;
}
var qf = Zf.prototype = new Gh();
qf.constructor = Zf;
_h(qf, jn.prototype);
qf.isPureReactComponent = !0;
var bB = Array.isArray, $h = Object.prototype.hasOwnProperty, Ad = { current: null }, Wh = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return { $$typeof: Eo, type: A, key: i, ref: o, props: n, _owner: Ad.current };
}
function iQ(A, e) {
  return { $$typeof: Eo, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function ed(A) {
  return typeof A == "object" && A !== null && A.$$typeof === Eo;
}
function oQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var TB = /\/+/g;
function Jl(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? oQ("" + A.key) : e.toString(36);
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
        case Eo:
        case jC:
          o = !0;
      }
  }
  if (o) return o = A, n = n(o), A = r === "" ? "." + Jl(o, 0) : r, bB(n) ? (t = "", A != null && (t = A.replace(TB, "$&/") + "/"), Pa(n, e, t, "", function(l) {
    return l;
  })) : n != null && (ed(n) && (n = iQ(n, t + (!n.key || o && o.key === n.key ? "" : ("" + n.key).replace(TB, "$&/") + "/") + A)), e.push(n)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", bB(A)) for (var a = 0; a < A.length; a++) {
    i = A[a];
    var s = r + Jl(i, a);
    o += Pa(i, e, t, s, n);
  }
  else if (s = nQ(A), typeof s == "function") for (A = s.call(A), a = 0; !(i = A.next()).done; ) i = i.value, s = r + Jl(i, a++), o += Pa(i, e, t, s, n);
  else if (i === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Vo(A, e, t) {
  if (A == null) return A;
  var r = [], n = 0;
  return Pa(A, r, "", "", function(i) {
    return e.call(t, i, n++);
  }), r;
}
function aQ(A) {
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
var ZA = { current: null }, _a = { transition: null }, sQ = { ReactCurrentDispatcher: ZA, ReactCurrentBatchConfig: _a, ReactCurrentOwner: Ad };
function jh() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: Vo, forEach: function(A, e, t) {
  Vo(A, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(A) {
  var e = 0;
  return Vo(A, function() {
    e++;
  }), e;
}, toArray: function(A) {
  return Vo(A, function(e) {
    return e;
  }) || [];
}, only: function(A) {
  if (!ed(A)) throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
Y.Component = jn;
Y.Fragment = YC;
Y.Profiler = JC;
Y.PureComponent = Zf;
Y.StrictMode = zC;
Y.Suspense = eQ;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sQ;
Y.act = jh;
Y.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = _h({}, A.props), n = A.key, i = A.ref, o = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, o = Ad.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps) var a = A.type.defaultProps;
    for (s in e) $h.call(e, s) && !Wh.hasOwnProperty(s) && (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    a = Array(s);
    for (var l = 0; l < s; l++) a[l] = arguments[l + 2];
    r.children = a;
  }
  return { $$typeof: Eo, type: A.type, key: n, ref: i, props: r, _owner: o };
};
Y.createContext = function(A) {
  return A = { $$typeof: qC, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: ZC, _context: A }, A.Consumer = A;
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
  return { $$typeof: AQ, render: A };
};
Y.isValidElement = ed;
Y.lazy = function(A) {
  return { $$typeof: rQ, _payload: { _status: -1, _result: A }, _init: aQ };
};
Y.memo = function(A, e) {
  return { $$typeof: tQ, type: A, compare: e === void 0 ? null : e };
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
Y.unstable_act = jh;
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
const N = /* @__PURE__ */ rl(Q), tc = /* @__PURE__ */ XC({
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
var lQ = Q, uQ = Symbol.for("react.element"), cQ = Symbol.for("react.fragment"), fQ = Object.prototype.hasOwnProperty, dQ = lQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, BQ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yh(A, e, t) {
  var r, n = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (r in e) fQ.call(e, r) && !BQ.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: uQ, type: A, key: i, ref: o, props: n, _owner: dQ.current };
}
nl.Fragment = cQ;
nl.jsx = Yh;
nl.jsxs = Yh;
Nh.exports = nl;
var W = Nh.exports, zh = { exports: {} }, pe = {}, Jh = { exports: {} }, Zh = {};
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
      var R = L - 1 >>> 1, X = I[R];
      if (0 < n(X, x)) I[R] = x, I[L] = X, L = R;
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
      A: for (var R = 0, X = I.length, dA = X >>> 1; R < dA; ) {
        var BA = 2 * (R + 1) - 1, gA = I[BA], rA = BA + 1, XA = I[rA];
        if (0 > n(gA, L)) rA < X && 0 > n(XA, gA) ? (I[R] = XA, I[rA] = L, R = rA) : (I[R] = gA, I[BA] = L, R = BA);
        else if (rA < X && 0 > n(XA, L)) I[R] = XA, I[rA] = L, R = rA;
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
  var s = [], l = [], u = 1, c = null, f = 3, B = !1, h = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(I) {
    for (var x = t(l); x !== null; ) {
      if (x.callback === null) r(l);
      else if (x.startTime <= I) r(l), x.sortIndex = x.expirationTime, e(s, x);
      else break;
      x = t(l);
    }
  }
  function m(I) {
    if (w = !1, p(I), !h) if (t(s) !== null) h = !0, G(v);
    else {
      var x = t(l);
      x !== null && K(m, x.startTime - I);
    }
  }
  function v(I, x) {
    h = !1, w && (w = !1, g(U), U = -1), B = !0;
    var L = f;
    try {
      for (p(x), c = t(s); c !== null && (!(c.expirationTime > x) || I && !P()); ) {
        var R = c.callback;
        if (typeof R == "function") {
          c.callback = null, f = c.priorityLevel;
          var X = R(c.expirationTime <= x);
          x = A.unstable_now(), typeof X == "function" ? c.callback = X : c === t(s) && r(s), p(x);
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
  function V() {
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
    d(V);
  };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(), Z = _.port2;
    _.port1.onmessage = V, M = function() {
      Z.postMessage(null);
    };
  } else M = function() {
    y(V, 0);
  };
  function G(I) {
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
    h || B || (h = !0, G(v));
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
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = L + X, I = { id: u++, callback: x, priorityLevel: I, startTime: L, expirationTime: X, sortIndex: -1 }, L > R ? (I.sortIndex = L, e(l, I), t(s) === null && I === t(l) && (w ? (g(U), U = -1) : w = !0, K(m, L - R))) : (I.sortIndex = X, e(s, I), h || B || (h = !0, G(v))), I;
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
var gQ = Jh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pQ = Q, ge = gQ;
function H(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qh = /* @__PURE__ */ new Set(), Yi = {};
function Gr(A, e) {
  bn(A, e), bn(A + "Capture", e);
}
function bn(A, e) {
  for (Yi[A] = e, A = 0; A < e.length; A++) qh.add(e[A]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rc = Object.prototype.hasOwnProperty, hQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kB = {}, OB = {};
function wQ(A) {
  return rc.call(OB, A) ? !0 : rc.call(kB, A) ? !1 : hQ.test(A) ? OB[A] = !0 : (kB[A] = !0, !1);
}
function mQ(A, e, t, r) {
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
function vQ(A, e, t, r) {
  if (e === null || typeof e > "u" || mQ(A, e, t, r)) return !0;
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
var td = /[\-:]([a-z])/g;
function rd(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    td,
    rd
  );
  MA[e] = new qA(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(td, rd);
  MA[e] = new qA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(td, rd);
  MA[e] = new qA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  MA[A] = new qA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
MA.xlinkHref = new qA("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  MA[A] = new qA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function nd(A, e, t, r) {
  var n = MA.hasOwnProperty(e) ? MA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (vQ(e, t, n, r) && (t = null), r || n === null ? wQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var yt = pQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Go = Symbol.for("react.element"), nn = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), id = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), Aw = Symbol.for("react.provider"), ew = Symbol.for("react.context"), od = Symbol.for("react.forward_ref"), ic = Symbol.for("react.suspense"), oc = Symbol.for("react.suspense_list"), ad = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), tw = Symbol.for("react.offscreen"), DB = Symbol.iterator;
function ri(A) {
  return A === null || typeof A != "object" ? null : (A = DB && A[DB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var mA = Object.assign, Zl;
function pi(A) {
  if (Zl === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    Zl = e && e[1] || "";
  }
  return `
` + Zl + A;
}
var ql = !1;
function Au(A, e) {
  if (!A || ql) return "";
  ql = !0;
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
    ql = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? pi(A) : "";
}
function CQ(A) {
  switch (A.tag) {
    case 5:
      return pi(A.type);
    case 16:
      return pi("Lazy");
    case 13:
      return pi("Suspense");
    case 19:
      return pi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = Au(A.type, !1), A;
    case 11:
      return A = Au(A.type.render, !1), A;
    case 1:
      return A = Au(A.type, !0), A;
    default:
      return "";
  }
}
function ac(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case on:
      return "Fragment";
    case nn:
      return "Portal";
    case nc:
      return "Profiler";
    case id:
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
    case od:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case ad:
      return e = A.displayName || null, e !== null ? e : ac(A.type) || "Memo";
    case bt:
      e = A._payload, A = A._init;
      try {
        return ac(A(e));
      } catch {
      }
  }
  return null;
}
function QQ(A) {
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
      return e === id ? "StrictMode" : "Mode";
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
function Ar(A) {
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
function yQ(A) {
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
  A._valueTracker || (A._valueTracker = yQ(A));
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
  t = Ar(e.value != null ? e.value : t), A._wrapperState = { initialChecked: r, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function iw(A, e) {
  e = e.checked, e != null && nd(A, "checked", e, !1);
}
function lc(A, e) {
  iw(A, e);
  var t = Ar(e.value), r = e.type;
  if (t != null) r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? uc(A, e.type, t) : e.hasOwnProperty("defaultValue") && uc(A, e.type, Ar(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
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
var hi = Array.isArray;
function Qn(A, e, t, r) {
  if (A = A.options, e) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++) n = e.hasOwnProperty("$" + A[t].value), A[t].selected !== n && (A[t].selected = n), n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + Ar(t), e = null, n = 0; n < A.length; n++) {
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
      if (hi(t)) {
        if (1 < t.length) throw Error(H(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: Ar(t) };
}
function ow(A, e) {
  var t = Ar(e.value), r = Ar(e.defaultValue);
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
var Si = {
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
}, FQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Si).forEach(function(A) {
  FQ.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), Si[e] = Si[A];
  });
});
function lw(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Si.hasOwnProperty(A) && Si[A] ? ("" + e).trim() : e + "px";
}
function uw(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, n = lw(t, e[t], r);
    t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
  }
}
var UQ = mA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(A, e) {
  if (e) {
    if (UQ[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(H(137, A));
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
function sd(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var pc = null, yn = null, Fn = null;
function PB(A) {
  if (A = xo(A)) {
    if (typeof pc != "function") throw Error(H(280));
    var e = A.stateNode;
    e && (e = ll(e), pc(A.stateNode, A.type, e));
  }
}
function cw(A) {
  yn ? Fn ? Fn.push(A) : Fn = [A] : yn = A;
}
function fw() {
  if (yn) {
    var A = yn, e = Fn;
    if (Fn = yn = null, PB(A), e) for (A = 0; A < e.length; A++) PB(e[A]);
  }
}
function dw(A, e) {
  return A(e);
}
function Bw() {
}
var eu = !1;
function gw(A, e, t) {
  if (eu) return A(e, t);
  eu = !0;
  try {
    return dw(A, e, t);
  } finally {
    eu = !1, (yn !== null || Fn !== null) && (Bw(), fw());
  }
}
function Ji(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = ll(t);
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
if (gt) try {
  var ni = {};
  Object.defineProperty(ni, "passive", { get: function() {
    hc = !0;
  } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
} catch {
  hc = !1;
}
function EQ(A, e, t, r, n, i, o, a, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var Li = !1, fs = null, ds = !1, wc = null, IQ = { onError: function(A) {
  Li = !0, fs = A;
} };
function HQ(A, e, t, r, n, i, o, a, s) {
  Li = !1, fs = null, EQ.apply(IQ, arguments);
}
function xQ(A, e, t, r, n, i, o, a, s) {
  if (HQ.apply(this, arguments), Li) {
    if (Li) {
      var l = fs;
      Li = !1, fs = null;
    } else throw Error(H(198));
    ds || (ds = !0, wc = l);
  }
}
function $r(A) {
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
  if ($r(A) !== A) throw Error(H(188));
}
function SQ(A) {
  var e = A.alternate;
  if (!e) {
    if (e = $r(A), e === null) throw Error(H(188));
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
  return A = SQ(A), A !== null ? ww(A) : null;
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
var mw = ge.unstable_scheduleCallback, VB = ge.unstable_cancelCallback, LQ = ge.unstable_shouldYield, bQ = ge.unstable_requestPaint, FA = ge.unstable_now, TQ = ge.unstable_getCurrentPriorityLevel, ld = ge.unstable_ImmediatePriority, vw = ge.unstable_UserBlockingPriority, Bs = ge.unstable_NormalPriority, kQ = ge.unstable_LowPriority, Cw = ge.unstable_IdlePriority, il = null, Ze = null;
function OQ(A) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function") try {
    Ze.onCommitFiberRoot(il, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var Ne = Math.clz32 ? Math.clz32 : RQ, DQ = Math.log, KQ = Math.LN2;
function RQ(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (DQ(A) / KQ | 0) | 0;
}
var Xo = 64, jo = 4194304;
function wi(A) {
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
    a !== 0 ? r = wi(a) : (i &= o, i !== 0 && (r = wi(i)));
  } else o = t & ~n, o !== 0 ? r = wi(o) : i !== 0 && (r = wi(i));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & n) && (n = r & -r, i = e & -e, n >= i || n === 16 && (i & 4194240) !== 0)) return e;
  if (r & 4 && (r |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= r; 0 < e; ) t = 31 - Ne(e), n = 1 << t, r |= A[t], e &= ~n;
  return r;
}
function NQ(A, e) {
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
function MQ(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
    var o = 31 - Ne(i), a = 1 << o, s = n[o];
    s === -1 ? (!(a & t) || a & r) && (n[o] = NQ(a, e)) : s <= e && (A.expiredLanes |= a), i &= ~a;
  }
}
function mc(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Qw() {
  var A = Xo;
  return Xo <<= 1, !(Xo & 4194240) && (Xo = 64), A;
}
function tu(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function Io(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Ne(e), A[e] = t;
}
function PQ(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - Ne(t), i = 1 << n;
    e[n] = 0, r[n] = -1, A[n] = -1, t &= ~i;
  }
}
function ud(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var r = 31 - Ne(t), n = 1 << r;
    n & e | A[r] & e && (A[r] |= e), t &= ~n;
  }
}
var eA = 0;
function yw(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fw, cd, Uw, Ew, Iw, vc = !1, Yo = [], Gt = null, $t = null, Wt = null, Zi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), Ot = [], _Q = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function GB(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qi.delete(e.pointerId);
  }
}
function ii(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [n] }, e !== null && (e = xo(e), e !== null && cd(e)), A) : (A.eventSystemFlags |= r, e = A.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), A);
}
function VQ(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return Gt = ii(Gt, A, e, t, r, n), !0;
    case "dragenter":
      return $t = ii($t, A, e, t, r, n), !0;
    case "mouseover":
      return Wt = ii(Wt, A, e, t, r, n), !0;
    case "pointerover":
      var i = n.pointerId;
      return Zi.set(i, ii(Zi.get(i) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return i = n.pointerId, qi.set(i, ii(qi.get(i) || null, A, e, t, r, n)), !0;
  }
  return !1;
}
function Hw(A) {
  var e = Cr(A.target);
  if (e !== null) {
    var t = $r(e);
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
function Va(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = Cc(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      gc = r, t.target.dispatchEvent(r), gc = null;
    } else return e = xo(t), e !== null && cd(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function $B(A, e, t) {
  Va(A) && t.delete(e);
}
function GQ() {
  vc = !1, Gt !== null && Va(Gt) && (Gt = null), $t !== null && Va($t) && ($t = null), Wt !== null && Va(Wt) && (Wt = null), Zi.forEach($B), qi.forEach($B);
}
function oi(A, e) {
  A.blockedOn === e && (A.blockedOn = null, vc || (vc = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, GQ)));
}
function Ao(A) {
  function e(n) {
    return oi(n, A);
  }
  if (0 < Yo.length) {
    oi(Yo[0], A);
    for (var t = 1; t < Yo.length; t++) {
      var r = Yo[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (Gt !== null && oi(Gt, A), $t !== null && oi($t, A), Wt !== null && oi(Wt, A), Zi.forEach(e), qi.forEach(e), t = 0; t < Ot.length; t++) r = Ot[t], r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Ot.length && (t = Ot[0], t.blockedOn === null); ) Hw(t), t.blockedOn === null && Ot.shift();
}
var Un = yt.ReactCurrentBatchConfig, ps = !0;
function $Q(A, e, t, r) {
  var n = eA, i = Un.transition;
  Un.transition = null;
  try {
    eA = 1, fd(A, e, t, r);
  } finally {
    eA = n, Un.transition = i;
  }
}
function WQ(A, e, t, r) {
  var n = eA, i = Un.transition;
  Un.transition = null;
  try {
    eA = 4, fd(A, e, t, r);
  } finally {
    eA = n, Un.transition = i;
  }
}
function fd(A, e, t, r) {
  if (ps) {
    var n = Cc(A, e, t, r);
    if (n === null) fu(A, e, r, hs, t), GB(A, r);
    else if (VQ(n, A, e, t, r)) r.stopPropagation();
    else if (GB(A, r), e & 4 && -1 < _Q.indexOf(A)) {
      for (; n !== null; ) {
        var i = xo(n);
        if (i !== null && Fw(i), i = Cc(A, e, t, r), i === null && fu(A, e, r, hs, t), i === n) break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else fu(A, e, r, null, t);
  }
}
var hs = null;
function Cc(A, e, t, r) {
  if (hs = null, A = sd(r), A = Cr(A), A !== null) if (e = $r(A), e === null) A = null;
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
      switch (TQ()) {
        case ld:
          return 1;
        case vw:
          return 4;
        case Bs:
        case kQ:
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
var Rt = null, dd = null, Ga = null;
function Sw() {
  if (Ga) return Ga;
  var A, e = dd, t = e.length, r, n = "value" in Rt ? Rt.value : Rt.textContent, i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++) ;
  var o = t - A;
  for (r = 1; r <= o && e[t - r] === n[i - r]; r++) ;
  return Ga = n.slice(A, 1 < r ? 1 - r : void 0);
}
function $a(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function zo() {
  return !0;
}
function WB() {
  return !1;
}
function he(A) {
  function e(t, r, n, i, o) {
    this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var a in A) A.hasOwnProperty(a) && (t = A[a], this[a] = t ? t(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? zo : WB, this.isPropagationStopped = WB, this;
  }
  return mA(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = zo);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = zo);
  }, persist: function() {
  }, isPersistent: zo }), e;
}
var Yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bd = he(Yn), Ho = mA({}, Yn, { view: 0, detail: 0 }), XQ = he(Ho), ru, nu, ai, ol = mA({}, Ho, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== ai && (ai && A.type === "mousemove" ? (ru = A.screenX - ai.screenX, nu = A.screenY - ai.screenY) : nu = ru = 0, ai = A), ru);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : nu;
} }), XB = he(ol), jQ = mA({}, ol, { dataTransfer: 0 }), YQ = he(jQ), zQ = mA({}, Ho, { relatedTarget: 0 }), iu = he(zQ), JQ = mA({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ZQ = he(JQ), qQ = mA({}, Yn, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), Ay = he(qQ), ey = mA({}, Yn, { data: 0 }), jB = he(ey), ty = {
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
}, ry = {
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
}, ny = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function iy(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = ny[A]) ? !!e[A] : !1;
}
function gd() {
  return iy;
}
var oy = mA({}, Ho, { key: function(A) {
  if (A.key) {
    var e = ty[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = $a(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? ry[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(A) {
  return A.type === "keypress" ? $a(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? $a(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), ay = he(oy), sy = mA({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), YB = he(sy), ly = mA({}, Ho, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), uy = he(ly), cy = mA({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), fy = he(cy), dy = mA({}, ol, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), By = he(dy), gy = [9, 13, 27, 32], pd = gt && "CompositionEvent" in window, bi = null;
gt && "documentMode" in document && (bi = document.documentMode);
var py = gt && "TextEvent" in window && !bi, Lw = gt && (!pd || bi && 8 < bi && 11 >= bi), zB = " ", JB = !1;
function bw(A, e) {
  switch (A) {
    case "keyup":
      return gy.indexOf(e.keyCode) !== -1;
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
var an = !1;
function hy(A, e) {
  switch (A) {
    case "compositionend":
      return Tw(e);
    case "keypress":
      return e.which !== 32 ? null : (JB = !0, zB);
    case "textInput":
      return A = e.data, A === zB && JB ? null : A;
    default:
      return null;
  }
}
function wy(A, e) {
  if (an) return A === "compositionend" || !pd && bw(A, e) ? (A = Sw(), Ga = dd = Rt = null, an = !1, A) : null;
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
var my = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ZB(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!my[A.type] : e === "textarea";
}
function kw(A, e, t, r) {
  cw(r), e = ws(e, "onChange"), 0 < e.length && (t = new Bd("onChange", "change", null, t, r), A.push({ event: t, listeners: e }));
}
var Ti = null, eo = null;
function vy(A) {
  $w(A, 0);
}
function al(A) {
  var e = un(A);
  if (nw(e)) return A;
}
function Cy(A, e) {
  if (A === "change") return e;
}
var Ow = !1;
if (gt) {
  var ou;
  if (gt) {
    var au = "oninput" in document;
    if (!au) {
      var qB = document.createElement("div");
      qB.setAttribute("oninput", "return;"), au = typeof qB.oninput == "function";
    }
    ou = au;
  } else ou = !1;
  Ow = ou && (!document.documentMode || 9 < document.documentMode);
}
function Ag() {
  Ti && (Ti.detachEvent("onpropertychange", Dw), eo = Ti = null);
}
function Dw(A) {
  if (A.propertyName === "value" && al(eo)) {
    var e = [];
    kw(e, eo, A, sd(A)), gw(vy, e);
  }
}
function Qy(A, e, t) {
  A === "focusin" ? (Ag(), Ti = e, eo = t, Ti.attachEvent("onpropertychange", Dw)) : A === "focusout" && Ag();
}
function yy(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return al(eo);
}
function Fy(A, e) {
  if (A === "click") return al(e);
}
function Uy(A, e) {
  if (A === "input" || A === "change") return al(e);
}
function Ey(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var _e = typeof Object.is == "function" ? Object.is : Ey;
function to(A, e) {
  if (_e(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!rc.call(e, n) || !_e(A[n], e[n])) return !1;
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
function hd(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function Iy(A) {
  var e = Rw(), t = A.focusedElem, r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Kw(t.ownerDocument.documentElement, t)) {
    if (r !== null && hd(t)) {
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
var Hy = gt && "documentMode" in document && 11 >= document.documentMode, sn = null, Qc = null, ki = null, yc = !1;
function rg(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  yc || sn == null || sn !== cs(r) || (r = sn, "selectionStart" in r && hd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ki && to(ki, r) || (ki = r, r = ws(Qc, "onSelect"), 0 < r.length && (e = new Bd("onSelect", "select", null, e, t), A.push({ event: e, listeners: r }), e.target = sn)));
}
function Jo(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var ln = { animationend: Jo("Animation", "AnimationEnd"), animationiteration: Jo("Animation", "AnimationIteration"), animationstart: Jo("Animation", "AnimationStart"), transitionend: Jo("Transition", "TransitionEnd") }, su = {}, Nw = {};
gt && (Nw = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
function sl(A) {
  if (su[A]) return su[A];
  if (!ln[A]) return A;
  var e = ln[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in Nw) return su[A] = e[t];
  return A;
}
var Mw = sl("animationend"), Pw = sl("animationiteration"), _w = sl("animationstart"), Vw = sl("transitionend"), Gw = /* @__PURE__ */ new Map(), ng = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function lr(A, e) {
  Gw.set(A, e), Gr(e, [A]);
}
for (var lu = 0; lu < ng.length; lu++) {
  var uu = ng[lu], xy = uu.toLowerCase(), Sy = uu[0].toUpperCase() + uu.slice(1);
  lr(xy, "on" + Sy);
}
lr(Mw, "onAnimationEnd");
lr(Pw, "onAnimationIteration");
lr(_w, "onAnimationStart");
lr("dblclick", "onDoubleClick");
lr("focusin", "onFocus");
lr("focusout", "onBlur");
lr(Vw, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Gr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Gr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Gr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Gr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
function ig(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, xQ(r, e, void 0, A), A.currentTarget = null;
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
function cu(A, e, t) {
  var r = 0;
  e && (r |= 4), Ww(t, A, r, e);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function ro(A) {
  if (!A[Zo]) {
    A[Zo] = !0, qh.forEach(function(t) {
      t !== "selectionchange" && (Ly.has(t) || cu(t, !1, A), cu(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Zo] || (e[Zo] = !0, cu("selectionchange", !1, e));
  }
}
function Ww(A, e, t, r) {
  switch (xw(e)) {
    case 1:
      var n = $Q;
      break;
    case 4:
      n = WQ;
      break;
    default:
      n = fd;
  }
  t = n.bind(null, e, t, A), n = void 0, !hc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), r ? n !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: n }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, { passive: n }) : A.addEventListener(e, t, !1);
}
function fu(A, e, t, r, n) {
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
        if (o = Cr(a), o === null) return;
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
    var l = i, u = sd(t), c = [];
    A: {
      var f = Gw.get(A);
      if (f !== void 0) {
        var B = Bd, h = A;
        switch (A) {
          case "keypress":
            if ($a(t) === 0) break A;
          case "keydown":
          case "keyup":
            B = ay;
            break;
          case "focusin":
            h = "focus", B = iu;
            break;
          case "focusout":
            h = "blur", B = iu;
            break;
          case "beforeblur":
          case "afterblur":
            B = iu;
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
            B = YQ;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            B = uy;
            break;
          case Mw:
          case Pw:
          case _w:
            B = ZQ;
            break;
          case Vw:
            B = fy;
            break;
          case "scroll":
            B = XQ;
            break;
          case "wheel":
            B = By;
            break;
          case "copy":
          case "cut":
          case "paste":
            B = Ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            B = YB;
        }
        var w = (e & 4) !== 0, y = !w && A === "scroll", g = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var d = l, p; d !== null; ) {
          p = d;
          var m = p.stateNode;
          if (p.tag === 5 && m !== null && (p = m, g !== null && (m = Ji(d, g), m != null && w.push(no(d, m, p)))), y) break;
          d = d.return;
        }
        0 < w.length && (f = new B(f, h, null, t, u), c.push({ event: f, listeners: w }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (f = A === "mouseover" || A === "pointerover", B = A === "mouseout" || A === "pointerout", f && t !== gc && (h = t.relatedTarget || t.fromElement) && (Cr(h) || h[pt])) break A;
        if ((B || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, B ? (h = t.relatedTarget || t.toElement, B = l, h = h ? Cr(h) : null, h !== null && (y = $r(h), h !== y || h.tag !== 5 && h.tag !== 6) && (h = null)) : (B = null, h = l), B !== h)) {
          if (w = XB, m = "onMouseLeave", g = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (w = YB, m = "onPointerLeave", g = "onPointerEnter", d = "pointer"), y = B == null ? f : un(B), p = h == null ? f : un(h), f = new w(m, d + "leave", B, t, u), f.target = y, f.relatedTarget = p, m = null, Cr(u) === l && (w = new w(g, d + "enter", h, t, u), w.target = p, w.relatedTarget = y, m = w), y = m, B && h) e: {
            for (w = B, g = h, d = 0, p = w; p; p = jr(p)) d++;
            for (p = 0, m = g; m; m = jr(m)) p++;
            for (; 0 < d - p; ) w = jr(w), d--;
            for (; 0 < p - d; ) g = jr(g), p--;
            for (; d--; ) {
              if (w === g || g !== null && w === g.alternate) break e;
              w = jr(w), g = jr(g);
            }
            w = null;
          }
          else w = null;
          B !== null && og(c, f, B, w, !1), h !== null && y !== null && og(c, y, h, w, !0);
        }
      }
      A: {
        if (f = l ? un(l) : window, B = f.nodeName && f.nodeName.toLowerCase(), B === "select" || B === "input" && f.type === "file") var v = Cy;
        else if (ZB(f)) if (Ow) v = Uy;
        else {
          v = yy;
          var C = Qy;
        }
        else (B = f.nodeName) && B.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (v = Fy);
        if (v && (v = v(A, l))) {
          kw(c, v, t, u);
          break A;
        }
        C && C(A, f, l), A === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && uc(f, "number", f.value);
      }
      switch (C = l ? un(l) : window, A) {
        case "focusin":
          (ZB(C) || C.contentEditable === "true") && (sn = C, Qc = l, ki = null);
          break;
        case "focusout":
          ki = Qc = sn = null;
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
          if (Hy) break;
        case "keydown":
        case "keyup":
          rg(c, t, u);
      }
      var F;
      if (pd) A: {
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
      else an ? bw(A, t) && (U = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
      U && (Lw && t.locale !== "ko" && (an || U !== "onCompositionStart" ? U === "onCompositionEnd" && an && (F = Sw()) : (Rt = u, dd = "value" in Rt ? Rt.value : Rt.textContent, an = !0)), C = ws(l, U), 0 < C.length && (U = new jB(U, A, null, t, u), c.push({ event: U, listeners: C }), F ? U.data = F : (F = Tw(t), F !== null && (U.data = F)))), (F = py ? hy(A, t) : wy(A, t)) && (l = ws(l, "onBeforeInput"), 0 < l.length && (u = new jB("onBeforeInput", "beforeinput", null, t, u), c.push({ event: u, listeners: l }), u.data = F));
    }
    $w(c, e);
  });
}
function no(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function ws(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A, i = n.stateNode;
    n.tag === 5 && i !== null && (n = i, i = Ji(A, t), i != null && r.unshift(no(A, i, n)), i = Ji(A, e), i != null && r.push(no(A, i, n))), A = A.return;
  }
  return r;
}
function jr(A) {
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
    a.tag === 5 && l !== null && (a = l, n ? (s = Ji(t, i), s != null && o.unshift(no(t, s, a))) : n || (s = Ji(t, i), s != null && o.push(no(t, s, a)))), t = t.return;
  }
  o.length !== 0 && A.push({ event: e, listeners: o });
}
var by = /\r\n?/g, Ty = /\u0000|\uFFFD/g;
function ag(A) {
  return (typeof A == "string" ? A : "" + A).replace(by, `
`).replace(Ty, "");
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
var Ic = typeof setTimeout == "function" ? setTimeout : void 0, ky = typeof clearTimeout == "function" ? clearTimeout : void 0, sg = typeof Promise == "function" ? Promise : void 0, Oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof sg < "u" ? function(A) {
  return sg.resolve(null).then(A).catch(Dy);
} : Ic;
function Dy(A) {
  setTimeout(function() {
    throw A;
  });
}
function du(A, e) {
  var t = e, r = 0;
  do {
    var n = t.nextSibling;
    if (A.removeChild(t), n && n.nodeType === 8) if (t = n.data, t === "/$") {
      if (r === 0) {
        A.removeChild(n), Ao(e);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = n;
  } while (t);
  Ao(e);
}
function Xt(A) {
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
var zn = Math.random().toString(36).slice(2), ze = "__reactFiber$" + zn, io = "__reactProps$" + zn, pt = "__reactContainer$" + zn, Hc = "__reactEvents$" + zn, Ky = "__reactListeners$" + zn, Ry = "__reactHandles$" + zn;
function Cr(A) {
  var e = A[ze];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[pt] || t[ze]) {
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
function xo(A) {
  return A = A[ze] || A[pt], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function un(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(H(33));
}
function ll(A) {
  return A[io] || null;
}
var xc = [], cn = -1;
function ur(A) {
  return { current: A };
}
function lA(A) {
  0 > cn || (A.current = xc[cn], xc[cn] = null, cn--);
}
function iA(A, e) {
  cn++, xc[cn] = A.current, A.current = e;
}
var er = {}, WA = ur(er), ie = ur(!1), Dr = er;
function Tn(A, e) {
  var t = A.type.contextTypes;
  if (!t) return er;
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
  if (WA.current !== er) throw Error(H(168));
  iA(WA, e), iA(ie, t);
}
function Xw(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(H(108, QQ(A) || "Unknown", n));
  return mA({}, t, r);
}
function Cs(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || er, Dr = WA.current, iA(WA, A), iA(ie, ie.current), !0;
}
function cg(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(H(169));
  t ? (A = Xw(A, e, Dr), r.__reactInternalMemoizedMergedChildContext = A, lA(ie), lA(WA), iA(WA, A)) : lA(ie), iA(ie, t);
}
var st = null, ul = !1, Bu = !1;
function jw(A) {
  st === null ? st = [A] : st.push(A);
}
function Ny(A) {
  ul = !0, jw(A);
}
function cr() {
  if (!Bu && st !== null) {
    Bu = !0;
    var A = 0, e = eA;
    try {
      var t = st;
      for (eA = 1; A < t.length; A++) {
        var r = t[A];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, ul = !1;
    } catch (n) {
      throw st !== null && (st = st.slice(A + 1)), mw(ld, cr), n;
    } finally {
      eA = e, Bu = !1;
    }
  }
  return null;
}
var fn = [], dn = 0, Qs = null, ys = 0, ve = [], Ce = 0, Kr = null, ut = 1, ct = "";
function pr(A, e) {
  fn[dn++] = ys, fn[dn++] = Qs, Qs = A, ys = e;
}
function Yw(A, e, t) {
  ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Kr, Kr = A;
  var r = ut;
  A = ct;
  var n = 32 - Ne(r) - 1;
  r &= ~(1 << n), t += 1;
  var i = 32 - Ne(e) + n;
  if (30 < i) {
    var o = n - n % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, n -= o, ut = 1 << 32 - Ne(e) + n | t << n | r, ct = i + A;
  } else ut = 1 << i | t << n | r, ct = A;
}
function wd(A) {
  A.return !== null && (pr(A, 1), Yw(A, 1, 0));
}
function md(A) {
  for (; A === Qs; ) Qs = fn[--dn], fn[dn] = null, ys = fn[--dn], fn[dn] = null;
  for (; A === Kr; ) Kr = ve[--Ce], ve[Ce] = null, ct = ve[--Ce], ve[Ce] = null, ut = ve[--Ce], ve[Ce] = null;
}
var de = null, fe = null, fA = !1, De = null;
function zw(A, e) {
  var t = ye(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function fg(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, de = A, fe = Xt(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, de = A, fe = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Kr !== null ? { id: ut, overflow: ct } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = ye(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, de = A, fe = null, !0) : !1;
    default:
      return !1;
  }
}
function Sc(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Lc(A) {
  if (fA) {
    var e = fe;
    if (e) {
      var t = e;
      if (!fg(A, e)) {
        if (Sc(A)) throw Error(H(418));
        e = Xt(t.nextSibling);
        var r = de;
        e && fg(A, e) ? zw(r, t) : (A.flags = A.flags & -4097 | 2, fA = !1, de = A);
      }
    } else {
      if (Sc(A)) throw Error(H(418));
      A.flags = A.flags & -4097 | 2, fA = !1, de = A;
    }
  }
}
function dg(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
  de = A;
}
function Aa(A) {
  if (A !== de) return !1;
  if (!fA) return dg(A), fA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Ec(A.type, A.memoizedProps)), e && (e = fe)) {
    if (Sc(A)) throw Jw(), Error(H(418));
    for (; e; ) zw(A, e), e = Xt(e.nextSibling);
  }
  if (dg(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(H(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              fe = Xt(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      fe = null;
    }
  } else fe = de ? Xt(A.stateNode.nextSibling) : null;
  return !0;
}
function Jw() {
  for (var A = fe; A; ) A = Xt(A.nextSibling);
}
function kn() {
  fe = de = null, fA = !1;
}
function vd(A) {
  De === null ? De = [A] : De.push(A);
}
var My = yt.ReactCurrentBatchConfig;
function si(A, e, t) {
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
      var p = g.deletions;
      p === null ? (g.deletions = [d], g.flags |= 16) : p.push(d);
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
    return g = Jt(g, d), g.index = 0, g.sibling = null, g;
  }
  function i(g, d, p) {
    return g.index = p, A ? (p = g.alternate, p !== null ? (p = p.index, p < d ? (g.flags |= 2, d) : p) : (g.flags |= 2, d)) : (g.flags |= 1048576, d);
  }
  function o(g) {
    return A && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, d, p, m) {
    return d === null || d.tag !== 6 ? (d = Cu(p, g.mode, m), d.return = g, d) : (d = n(d, p), d.return = g, d);
  }
  function s(g, d, p, m) {
    var v = p.type;
    return v === on ? u(g, d, p.props.children, m, p.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === bt && Bg(v) === d.type) ? (m = n(d, p.props), m.ref = si(g, d, p), m.return = g, m) : (m = Za(p.type, p.key, p.props, null, g.mode, m), m.ref = si(g, d, p), m.return = g, m);
  }
  function l(g, d, p, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Qu(p, g.mode, m), d.return = g, d) : (d = n(d, p.children || []), d.return = g, d);
  }
  function u(g, d, p, m, v) {
    return d === null || d.tag !== 7 ? (d = Sr(p, g.mode, m, v), d.return = g, d) : (d = n(d, p), d.return = g, d);
  }
  function c(g, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Cu("" + d, g.mode, p), d.return = g, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Go:
          return p = Za(d.type, d.key, d.props, null, g.mode, p), p.ref = si(g, null, d), p.return = g, p;
        case nn:
          return d = Qu(d, g.mode, p), d.return = g, d;
        case bt:
          var m = d._init;
          return c(g, m(d._payload), p);
      }
      if (hi(d) || ri(d)) return d = Sr(d, g.mode, p, null), d.return = g, d;
      ea(g, d);
    }
    return null;
  }
  function f(g, d, p, m) {
    var v = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return v !== null ? null : a(g, d, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Go:
          return p.key === v ? s(g, d, p, m) : null;
        case nn:
          return p.key === v ? l(g, d, p, m) : null;
        case bt:
          return v = p._init, f(
            g,
            d,
            v(p._payload),
            m
          );
      }
      if (hi(p) || ri(p)) return v !== null ? null : u(g, d, p, m, null);
      ea(g, p);
    }
    return null;
  }
  function B(g, d, p, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return g = g.get(p) || null, a(d, g, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Go:
          return g = g.get(m.key === null ? p : m.key) || null, s(d, g, m, v);
        case nn:
          return g = g.get(m.key === null ? p : m.key) || null, l(d, g, m, v);
        case bt:
          var C = m._init;
          return B(g, d, p, C(m._payload), v);
      }
      if (hi(m) || ri(m)) return g = g.get(p) || null, u(d, g, m, v, null);
      ea(d, m);
    }
    return null;
  }
  function h(g, d, p, m) {
    for (var v = null, C = null, F = d, U = d = 0, E = null; F !== null && U < p.length; U++) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var S = f(g, F, p[U], m);
      if (S === null) {
        F === null && (F = E);
        break;
      }
      A && F && S.alternate === null && e(g, F), d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S, F = E;
    }
    if (U === p.length) return t(g, F), fA && pr(g, U), v;
    if (F === null) {
      for (; U < p.length; U++) F = c(g, p[U], m), F !== null && (d = i(F, d, U), C === null ? v = F : C.sibling = F, C = F);
      return fA && pr(g, U), v;
    }
    for (F = r(g, F); U < p.length; U++) E = B(F, g, U, p[U], m), E !== null && (A && E.alternate !== null && F.delete(E.key === null ? U : E.key), d = i(E, d, U), C === null ? v = E : C.sibling = E, C = E);
    return A && F.forEach(function(P) {
      return e(g, P);
    }), fA && pr(g, U), v;
  }
  function w(g, d, p, m) {
    var v = ri(p);
    if (typeof v != "function") throw Error(H(150));
    if (p = v.call(p), p == null) throw Error(H(151));
    for (var C = v = null, F = d, U = d = 0, E = null, S = p.next(); F !== null && !S.done; U++, S = p.next()) {
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
    ), fA && pr(g, U), v;
    if (F === null) {
      for (; !S.done; U++, S = p.next()) S = c(g, S.value, m), S !== null && (d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S);
      return fA && pr(g, U), v;
    }
    for (F = r(g, F); !S.done; U++, S = p.next()) S = B(F, g, U, S.value, m), S !== null && (A && S.alternate !== null && F.delete(S.key === null ? U : S.key), d = i(S, d, U), C === null ? v = S : C.sibling = S, C = S);
    return A && F.forEach(function(V) {
      return e(g, V);
    }), fA && pr(g, U), v;
  }
  function y(g, d, p, m) {
    if (typeof p == "object" && p !== null && p.type === on && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Go:
          A: {
            for (var v = p.key, C = d; C !== null; ) {
              if (C.key === v) {
                if (v = p.type, v === on) {
                  if (C.tag === 7) {
                    t(g, C.sibling), d = n(C, p.props.children), d.return = g, g = d;
                    break A;
                  }
                } else if (C.elementType === v || typeof v == "object" && v !== null && v.$$typeof === bt && Bg(v) === C.type) {
                  t(g, C.sibling), d = n(C, p.props), d.ref = si(g, C, p), d.return = g, g = d;
                  break A;
                }
                t(g, C);
                break;
              } else e(g, C);
              C = C.sibling;
            }
            p.type === on ? (d = Sr(p.props.children, g.mode, m, p.key), d.return = g, g = d) : (m = Za(p.type, p.key, p.props, null, g.mode, m), m.ref = si(g, d, p), m.return = g, g = m);
          }
          return o(g);
        case nn:
          A: {
            for (C = p.key; d !== null; ) {
              if (d.key === C) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                t(g, d.sibling), d = n(d, p.children || []), d.return = g, g = d;
                break A;
              } else {
                t(g, d);
                break;
              }
              else e(g, d);
              d = d.sibling;
            }
            d = Qu(p, g.mode, m), d.return = g, g = d;
          }
          return o(g);
        case bt:
          return C = p._init, y(g, d, C(p._payload), m);
      }
      if (hi(p)) return h(g, d, p, m);
      if (ri(p)) return w(g, d, p, m);
      ea(g, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (t(g, d.sibling), d = n(d, p), d.return = g, g = d) : (t(g, d), d = Cu(p, g.mode, m), d.return = g, g = d), o(g)) : t(g, d);
  }
  return y;
}
var On = Zw(!0), qw = Zw(!1), Fs = ur(null), Us = null, Bn = null, Cd = null;
function Qd() {
  Cd = Bn = Us = null;
}
function yd(A) {
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
function En(A, e) {
  Us = A, Cd = Bn = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (te = !0), A.firstContext = null);
}
function Ie(A) {
  var e = A._currentValue;
  if (Cd !== A) if (A = { context: A, memoizedValue: e, next: null }, Bn === null) {
    if (Us === null) throw Error(H(308));
    Bn = A, Us.dependencies = { lanes: 0, firstContext: A };
  } else Bn = Bn.next = A;
  return e;
}
var Qr = null;
function Fd(A) {
  Qr === null ? Qr = [A] : Qr.push(A);
}
function Am(A, e, t, r) {
  var n = e.interleaved;
  return n === null ? (t.next = t, Fd(e)) : (t.next = n.next, n.next = t), e.interleaved = t, ht(A, r);
}
function ht(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; ) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Tt = !1;
function Ud(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function em(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function ft(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function jt(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var n = r.pending;
    return n === null ? e.next = e : (e.next = n.next, n.next = e), r.pending = e, ht(A, t);
  }
  return n = r.interleaved, n === null ? (e.next = e, Fd(r)) : (e.next = n.next, n.next = e), r.interleaved = e, ht(A, t);
}
function Wa(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, ud(A, t);
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
  Tt = !1;
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
          var h = A, w = a;
          switch (f = e, B = t, w.tag) {
            case 1:
              if (h = w.payload, typeof h == "function") {
                c = h.call(B, c, f);
                break A;
              }
              c = h;
              break A;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = w.payload, f = typeof h == "function" ? h.call(B, c, f) : h, f == null) break A;
              c = mA({}, c, f);
              break A;
            case 2:
              Tt = !0;
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
    Nr |= o, A.lanes = o, A.memoizedState = c;
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
var So = {}, qe = ur(So), oo = ur(So), ao = ur(So);
function yr(A) {
  if (A === So) throw Error(H(174));
  return A;
}
function Ed(A, e) {
  switch (iA(ao, e), iA(oo, A), iA(qe, So), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : fc(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = fc(e, A);
  }
  lA(qe), iA(qe, e);
}
function Dn() {
  lA(qe), lA(oo), lA(ao);
}
function tm(A) {
  yr(ao.current);
  var e = yr(qe.current), t = fc(e, A.type);
  e !== t && (iA(oo, A), iA(qe, t));
}
function Id(A) {
  oo.current === A && (lA(qe), lA(oo));
}
var pA = ur(0);
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
var gu = [];
function Hd() {
  for (var A = 0; A < gu.length; A++) gu[A]._workInProgressVersionPrimary = null;
  gu.length = 0;
}
var Xa = yt.ReactCurrentDispatcher, pu = yt.ReactCurrentBatchConfig, Rr = 0, wA = null, HA = null, TA = null, Hs = !1, Oi = !1, so = 0, Py = 0;
function PA() {
  throw Error(H(321));
}
function xd(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!_e(A[t], e[t])) return !1;
  return !0;
}
function Sd(A, e, t, r, n, i) {
  if (Rr = i, wA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Xa.current = A === null || A.memoizedState === null ? $y : Wy, A = t(r, n), Oi) {
    i = 0;
    do {
      if (Oi = !1, so = 0, 25 <= i) throw Error(H(301));
      i += 1, TA = HA = null, e.updateQueue = null, Xa.current = Xy, A = t(r, n);
    } while (Oi);
  }
  if (Xa.current = xs, e = HA !== null && HA.next !== null, Rr = 0, TA = HA = wA = null, Hs = !1, e) throw Error(H(300));
  return A;
}
function Ld() {
  var A = so !== 0;
  return so = 0, A;
}
function Xe() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return TA === null ? wA.memoizedState = TA = A : TA = TA.next = A, TA;
}
function He() {
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
function lo(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function hu(A) {
  var e = He(), t = e.queue;
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
      if ((Rr & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), r = l.hasEagerState ? l.eagerState : A(r, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (a = s = c, o = r) : s = s.next = c, wA.lanes |= u, Nr |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? o = r : s.next = a, _e(r, e.memoizedState) || (te = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = s, t.lastRenderedState = r;
  }
  if (A = t.interleaved, A !== null) {
    n = A;
    do
      i = n.lane, wA.lanes |= i, Nr |= i, n = n.next;
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function wu(A) {
  var e = He(), t = e.queue;
  if (t === null) throw Error(H(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch, n = t.pending, i = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var o = n = n.next;
    do
      i = A(i, o.action), o = o.next;
    while (o !== n);
    _e(i, e.memoizedState) || (te = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function rm() {
}
function nm(A, e) {
  var t = wA, r = He(), n = e(), i = !_e(r.memoizedState, n);
  if (i && (r.memoizedState = n, te = !0), r = r.queue, bd(am.bind(null, t, r, A), [A]), r.getSnapshot !== e || i || TA !== null && TA.memoizedState.tag & 1) {
    if (t.flags |= 2048, uo(9, om.bind(null, t, r, n, e), void 0, null), OA === null) throw Error(H(349));
    Rr & 30 || im(t, e, n);
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
    return !_e(A, t);
  } catch {
    return !0;
  }
}
function lm(A) {
  var e = ht(A, 1);
  e !== null && Me(e, A, 1, -1);
}
function hg(A) {
  var e = Xe();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lo, lastRenderedState: A }, e.queue = A, A = A.dispatch = Gy.bind(null, wA, A), [e.memoizedState, A];
}
function uo(A, e, t, r) {
  return A = { tag: A, create: e, destroy: t, deps: r, next: null }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function um() {
  return He().memoizedState;
}
function ja(A, e, t, r) {
  var n = Xe();
  wA.flags |= A, n.memoizedState = uo(1 | e, t, void 0, r === void 0 ? null : r);
}
function cl(A, e, t, r) {
  var n = He();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (HA !== null) {
    var o = HA.memoizedState;
    if (i = o.destroy, r !== null && xd(r, o.deps)) {
      n.memoizedState = uo(e, t, i, r);
      return;
    }
  }
  wA.flags |= A, n.memoizedState = uo(1 | e, t, i, r);
}
function wg(A, e) {
  return ja(8390656, 8, A, e);
}
function bd(A, e) {
  return cl(2048, 8, A, e);
}
function cm(A, e) {
  return cl(4, 2, A, e);
}
function fm(A, e) {
  return cl(4, 4, A, e);
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
  return t = t != null ? t.concat([A]) : null, cl(4, 4, dm.bind(null, e, A), t);
}
function Td() {
}
function gm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && xd(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function pm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && xd(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function hm(A, e, t) {
  return Rr & 21 ? (_e(t, e) || (t = Qw(), wA.lanes |= t, Nr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, te = !0), A.memoizedState = t);
}
function _y(A, e) {
  var t = eA;
  eA = t !== 0 && 4 > t ? t : 4, A(!0);
  var r = pu.transition;
  pu.transition = {};
  try {
    A(!1), e();
  } finally {
    eA = t, pu.transition = r;
  }
}
function wm() {
  return He().memoizedState;
}
function Vy(A, e, t) {
  var r = zt(A);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, mm(A)) vm(e, t);
  else if (t = Am(A, e, t, r), t !== null) {
    var n = zA();
    Me(t, A, r, n), Cm(t, e, r);
  }
}
function Gy(A, e, t) {
  var r = zt(A), n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (mm(A)) vm(e, n);
  else {
    var i = A.alternate;
    if (A.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
      var o = e.lastRenderedState, a = i(o, t);
      if (n.hasEagerState = !0, n.eagerState = a, _e(a, o)) {
        var s = e.interleaved;
        s === null ? (n.next = n, Fd(e)) : (n.next = s.next, s.next = n), e.interleaved = n;
        return;
      }
    } catch {
    } finally {
    }
    t = Am(A, e, n, r), t !== null && (n = zA(), Me(t, A, r, n), Cm(t, e, r));
  }
}
function mm(A) {
  var e = A.alternate;
  return A === wA || e !== null && e === wA;
}
function vm(A, e) {
  Oi = Hs = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Cm(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, ud(A, t);
  }
}
var xs = { readContext: Ie, useCallback: PA, useContext: PA, useEffect: PA, useImperativeHandle: PA, useInsertionEffect: PA, useLayoutEffect: PA, useMemo: PA, useReducer: PA, useRef: PA, useState: PA, useDebugValue: PA, useDeferredValue: PA, useTransition: PA, useMutableSource: PA, useSyncExternalStore: PA, useId: PA, unstable_isNewReconciler: !1 }, $y = { readContext: Ie, useCallback: function(A, e) {
  return Xe().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: Ie, useEffect: wg, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, ja(
    4194308,
    4,
    dm.bind(null, e, A),
    t
  );
}, useLayoutEffect: function(A, e) {
  return ja(4194308, 4, A, e);
}, useInsertionEffect: function(A, e) {
  return ja(4, 2, A, e);
}, useMemo: function(A, e) {
  var t = Xe();
  return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
}, useReducer: function(A, e, t) {
  var r = Xe();
  return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, r.queue = A, A = A.dispatch = Vy.bind(null, wA, A), [r.memoizedState, A];
}, useRef: function(A) {
  var e = Xe();
  return A = { current: A }, e.memoizedState = A;
}, useState: hg, useDebugValue: Td, useDeferredValue: function(A) {
  return Xe().memoizedState = A;
}, useTransition: function() {
  var A = hg(!1), e = A[0];
  return A = _y.bind(null, A[1]), Xe().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var r = wA, n = Xe();
  if (fA) {
    if (t === void 0) throw Error(H(407));
    t = t();
  } else {
    if (t = e(), OA === null) throw Error(H(349));
    Rr & 30 || im(r, e, t);
  }
  n.memoizedState = t;
  var i = { value: t, getSnapshot: e };
  return n.queue = i, wg(am.bind(
    null,
    r,
    i,
    A
  ), [A]), r.flags |= 2048, uo(9, om.bind(null, r, i, t, e), void 0, null), t;
}, useId: function() {
  var A = Xe(), e = OA.identifierPrefix;
  if (fA) {
    var t = ct, r = ut;
    t = (r & ~(1 << 32 - Ne(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = so++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = Py++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Wy = {
  readContext: Ie,
  useCallback: gm,
  useContext: Ie,
  useEffect: bd,
  useImperativeHandle: Bm,
  useInsertionEffect: cm,
  useLayoutEffect: fm,
  useMemo: pm,
  useReducer: hu,
  useRef: um,
  useState: function() {
    return hu(lo);
  },
  useDebugValue: Td,
  useDeferredValue: function(A) {
    var e = He();
    return hm(e, HA.memoizedState, A);
  },
  useTransition: function() {
    var A = hu(lo)[0], e = He().memoizedState;
    return [A, e];
  },
  useMutableSource: rm,
  useSyncExternalStore: nm,
  useId: wm,
  unstable_isNewReconciler: !1
}, Xy = { readContext: Ie, useCallback: gm, useContext: Ie, useEffect: bd, useImperativeHandle: Bm, useInsertionEffect: cm, useLayoutEffect: fm, useMemo: pm, useReducer: wu, useRef: um, useState: function() {
  return wu(lo);
}, useDebugValue: Td, useDeferredValue: function(A) {
  var e = He();
  return HA === null ? e.memoizedState = A : hm(e, HA.memoizedState, A);
}, useTransition: function() {
  var A = wu(lo)[0], e = He().memoizedState;
  return [A, e];
}, useMutableSource: rm, useSyncExternalStore: nm, useId: wm, unstable_isNewReconciler: !1 };
function ke(A, e) {
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
var fl = { isMounted: function(A) {
  return (A = A._reactInternals) ? $r(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var r = zA(), n = zt(A), i = ft(r, n);
  i.payload = e, t != null && (i.callback = t), e = jt(A, i, n), e !== null && (Me(e, A, n, r), Wa(e, A, n));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var r = zA(), n = zt(A), i = ft(r, n);
  i.tag = 1, i.payload = e, t != null && (i.callback = t), e = jt(A, i, n), e !== null && (Me(e, A, n, r), Wa(e, A, n));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = zA(), r = zt(A), n = ft(t, r);
  n.tag = 2, e != null && (n.callback = e), e = jt(A, n, r), e !== null && (Me(e, A, r, t), Wa(e, A, r));
} };
function mg(A, e, t, r, n, i, o) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !to(t, r) || !to(n, i) : !0;
}
function Qm(A, e, t) {
  var r = !1, n = er, i = e.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (n = oe(e) ? Dr : WA.current, r = e.contextTypes, i = (r = r != null) ? Tn(A, n) : er), e = new e(t, i), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = fl, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = i), e;
}
function vg(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && fl.enqueueReplaceState(e, e.state, null);
}
function kc(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = {}, Ud(A);
  var i = e.contextType;
  typeof i == "object" && i !== null ? n.context = Ie(i) : (i = oe(e) ? Dr : WA.current, n.context = Tn(A, i)), n.state = A.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Tc(A, e, i, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && fl.enqueueReplaceState(n, n.state, null), Es(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function Kn(A, e) {
  try {
    var t = "", r = e;
    do
      t += CQ(r), r = r.return;
    while (r);
    var n = t;
  } catch (i) {
    n = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function mu(A, e, t) {
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
var jy = typeof WeakMap == "function" ? WeakMap : Map;
function ym(A, e, t) {
  t = ft(-1, t), t.tag = 3, t.payload = { element: null };
  var r = e.value;
  return t.callback = function() {
    Ls || (Ls = !0, $c = r), Oc(A, e);
  }, t;
}
function Fm(A, e, t) {
  t = ft(-1, t), t.tag = 3;
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
    Oc(A, e), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Cg(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new jy();
    var n = /* @__PURE__ */ new Set();
    r.set(e, n);
  } else n = r.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = sF.bind(null, A, e, t), e.then(A, A));
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
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = n, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = ft(-1, 1), e.tag = 2, jt(t, e, 1))), t.lanes |= 1), A);
}
var Yy = yt.ReactCurrentOwner, te = !1;
function YA(A, e, t, r) {
  e.child = A === null ? qw(e, null, t, r) : On(e, A.child, t, r);
}
function Fg(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return En(e, n), r = Sd(A, e, t, r, i, n), t = Ld(), A !== null && !te ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && t && wd(e), e.flags |= 1, YA(A, e, r, n), e.child);
}
function Ug(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" && !Pd(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = i, Um(A, e, i, r, n)) : (A = Za(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (i = A.child, !(A.lanes & n)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : to, t(o, r) && A.ref === e.ref) return wt(A, e, n);
  }
  return e.flags |= 1, A = Jt(i, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Um(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (to(i, r) && A.ref === e.ref) if (te = !1, e.pendingProps = r = i, (A.lanes & n) !== 0) A.flags & 131072 && (te = !0);
    else return e.lanes = A.lanes, wt(A, e, n);
  }
  return Dc(A, e, t, r, n);
}
function Em(A, e, t) {
  var r = e.pendingProps, n = r.children, i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, iA(pn, ue), ue |= t;
  else {
    if (!(t & 1073741824)) return A = i !== null ? i.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, iA(pn, ue), ue |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, iA(pn, ue), ue |= r;
  }
  else i !== null ? (r = i.baseLanes | t, e.memoizedState = null) : r = t, iA(pn, ue), ue |= r;
  return YA(A, e, n, t), e.child;
}
function Im(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Dc(A, e, t, r, n) {
  var i = oe(t) ? Dr : WA.current;
  return i = Tn(e, i), En(e, n), t = Sd(A, e, t, r, i, n), r = Ld(), A !== null && !te ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && r && wd(e), e.flags |= 1, YA(A, e, t, n), e.child);
}
function Eg(A, e, t, r, n) {
  if (oe(t)) {
    var i = !0;
    Cs(e);
  } else i = !1;
  if (En(e, n), e.stateNode === null) Ya(A, e), Qm(e, t, r), kc(e, t, r, n), r = !0;
  else if (A === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var s = o.context, l = t.contextType;
    typeof l == "object" && l !== null ? l = Ie(l) : (l = oe(t) ? Dr : WA.current, l = Tn(e, l));
    var u = t.getDerivedStateFromProps, c = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== l) && vg(e, o, r, l), Tt = !1;
    var f = e.memoizedState;
    o.state = f, Es(e, r, o, n), s = e.memoizedState, a !== r || f !== s || ie.current || Tt ? (typeof u == "function" && (Tc(e, t, u, r), s = e.memoizedState), (a = Tt || mg(e, t, a, r, f, s, l)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = s), o.props = r, o.state = s, o.context = l, r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    o = e.stateNode, em(A, e), a = e.memoizedProps, l = e.type === e.elementType ? a : ke(e.type, a), o.props = l, c = e.pendingProps, f = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = oe(t) ? Dr : WA.current, s = Tn(e, s));
    var B = t.getDerivedStateFromProps;
    (u = typeof B == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || f !== s) && vg(e, o, r, s), Tt = !1, f = e.memoizedState, o.state = f, Es(e, r, o, n);
    var h = e.memoizedState;
    a !== c || f !== h || ie.current || Tt ? (typeof B == "function" && (Tc(e, t, B, r), h = e.memoizedState), (l = Tt || mg(e, t, l, r, f, h, s) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, h, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, h, s)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = h), o.props = r, o.state = h, o.context = s, r = l) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Kc(A, e, t, r, i, n);
}
function Kc(A, e, t, r, n, i) {
  Im(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && cg(e, t, !1), wt(A, e, i);
  r = e.stateNode, Yy.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && o ? (e.child = On(e, A.child, null, i), e.child = On(e, null, a, i)) : YA(A, e, a, i), e.memoizedState = r.state, n && cg(e, t, !0), e.child;
}
function Hm(A) {
  var e = A.stateNode;
  e.pendingContext ? ug(A, e.pendingContext, e.pendingContext !== e.context) : e.context && ug(A, e.context, !1), Ed(A, e.containerInfo);
}
function Ig(A, e, t, r, n) {
  return kn(), vd(n), e.flags |= 256, YA(A, e, t, r), e.child;
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nc(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function xm(A, e, t) {
  var r = e.pendingProps, n = pA.current, i = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), a ? (i = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), iA(pA, n & 1), A === null)
    return Lc(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = r.children, A = r.fallback, i ? (r = e.mode, i = e.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = gl(o, r, 0, null), A = Sr(A, r, t, null), i.return = e, A.return = e, i.sibling = A, e.child = i, e.child.memoizedState = Nc(t), e.memoizedState = Rc, A) : kd(e, o));
  if (n = A.memoizedState, n !== null && (a = n.dehydrated, a !== null)) return zy(A, e, o, r, a, n, t);
  if (i) {
    i = r.fallback, o = e.mode, n = A.child, a = n.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && e.child !== n ? (r = e.child, r.childLanes = 0, r.pendingProps = s, e.deletions = null) : (r = Jt(n, s), r.subtreeFlags = n.subtreeFlags & 14680064), a !== null ? i = Jt(a, i) : (i = Sr(i, o, t, null), i.flags |= 2), i.return = e, r.return = e, r.sibling = i, e.child = r, r = i, i = e.child, o = A.child.memoizedState, o = o === null ? Nc(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = A.childLanes & ~t, e.memoizedState = Rc, r;
  }
  return i = A.child, A = i.sibling, r = Jt(i, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = t), r.return = e, r.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = r, e.memoizedState = null, r;
}
function kd(A, e) {
  return e = gl({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function ta(A, e, t, r) {
  return r !== null && vd(r), On(e, A.child, null, t), A = kd(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function zy(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, r = mu(Error(H(422))), ta(A, e, o, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (i = r.fallback, n = e.mode, r = gl({ mode: "visible", children: r.children }, n, 0, null), i = Sr(i, n, o, null), i.flags |= 2, r.return = e, i.return = e, r.sibling = i, e.child = r, e.mode & 1 && On(e, A.child, null, o), e.child.memoizedState = Nc(o), e.memoizedState = Rc, i);
  if (!(e.mode & 1)) return ta(A, e, o, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(H(419)), r = mu(i, r, void 0), ta(A, e, o, r);
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
      n = n & (r.suspendedLanes | o) ? 0 : n, n !== 0 && n !== i.retryLane && (i.retryLane = n, ht(A, n), Me(r, A, n, -1));
    }
    return Md(), r = mu(Error(H(421))), ta(A, e, o, r);
  }
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = lF.bind(null, A), n._reactRetry = e, null) : (A = i.treeContext, fe = Xt(n.nextSibling), de = e, fA = !0, De = null, A !== null && (ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Kr, ut = A.id, ct = A.overflow, Kr = e), e = kd(e, r.children), e.flags |= 4096, e);
}
function Hg(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), bc(A.return, e, t);
}
function vu(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: n } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = n);
}
function Sm(A, e, t) {
  var r = e.pendingProps, n = r.revealOrder, i = r.tail;
  if (YA(A, e, r.children, t), r = pA.current, r & 2) r = r & 1 | 2, e.flags |= 128;
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
      t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), vu(e, !1, n, t, i);
      break;
    case "backwards":
      for (t = null, n = e.child, e.child = null; n !== null; ) {
        if (A = n.alternate, A !== null && Is(A) === null) {
          e.child = n;
          break;
        }
        A = n.sibling, n.sibling = t, t = n, n = A;
      }
      vu(e, !0, t, null, i);
      break;
    case "together":
      vu(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Ya(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function wt(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Nr |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error(H(153));
  if (e.child !== null) {
    for (A = e.child, t = Jt(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; ) A = A.sibling, t = t.sibling = Jt(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function Jy(A, e, t) {
  switch (e.tag) {
    case 3:
      Hm(e), kn();
      break;
    case 5:
      tm(e);
      break;
    case 1:
      oe(e.type) && Cs(e);
      break;
    case 4:
      Ed(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, n = e.memoizedProps.value;
      iA(Fs, r._currentValue), r._currentValue = n;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (iA(pA, pA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? xm(A, e, t) : (iA(pA, pA.current & 1), A = wt(A, e, t), A !== null ? A.sibling : null);
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
  return wt(A, e, t);
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
    A = e.stateNode, yr(qe.current);
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
function li(A, e) {
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
function Zy(A, e, t) {
  var r = e.pendingProps;
  switch (md(e), e.tag) {
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
      return r = e.stateNode, Dn(), lA(ie), lA(WA), Hd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (Aa(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, De !== null && (jc(De), De = null))), Mc(A, e), _A(e), null;
    case 5:
      Id(e);
      var n = yr(ao.current);
      if (t = e.type, A !== null && e.stateNode != null) bm(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(H(166));
          return _A(e), null;
        }
        if (A = yr(qe.current), Aa(e)) {
          r = e.stateNode, t = e.type;
          var i = e.memoizedProps;
          switch (r[ze] = e, r[io] = i, A = (e.mode & 1) !== 0, t) {
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
              for (n = 0; n < mi.length; n++) oA(mi[n], r);
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
          o = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = aw(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = o.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = o.createElement(t, { is: r.is }) : (A = o.createElement(t), t === "select" && (o = A, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : A = o.createElementNS(A, t), A[ze] = e, A[io] = r, Lm(A, e, !1, !1), e.stateNode = A;
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
                for (n = 0; n < mi.length; n++) oA(mi[n], A);
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
              i === "style" ? uw(A, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && sw(A, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && zi(A, s) : typeof s == "number" && zi(A, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Yi.hasOwnProperty(i) ? s != null && i === "onScroll" && oA("scroll", A) : s != null && nd(A, i, s, o));
            }
            switch (t) {
              case "input":
                $o(A), RB(A, r, !1);
                break;
              case "textarea":
                $o(A), MB(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + Ar(r.value));
                break;
              case "select":
                A.multiple = !!r.multiple, i = r.value, i != null ? Qn(A, !!r.multiple, i, !1) : r.defaultValue != null && Qn(
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
        if (t = yr(ao.current), yr(qe.current), Aa(e)) {
          if (r = e.stateNode, t = e.memoizedProps, r[ze] = e, (i = r.nodeValue !== t) && (A = de, A !== null)) switch (A.tag) {
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
        if (fA && fe !== null && e.mode & 1 && !(e.flags & 128)) Jw(), kn(), e.flags |= 98560, i = !1;
        else if (i = Aa(e), r !== null && r.dehydrated !== null) {
          if (A === null) {
            if (!i) throw Error(H(318));
            if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[ze] = e;
          } else kn(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          _A(e), i = !1;
        } else De !== null && (jc(De), De = null), i = !0;
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (r = r !== null, r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (A === null || pA.current & 1 ? SA === 0 && (SA = 3) : Md())), e.updateQueue !== null && (e.flags |= 4), _A(e), null);
    case 4:
      return Dn(), Mc(A, e), A === null && ro(e.stateNode.containerInfo), _A(e), null;
    case 10:
      return yd(e.type._context), _A(e), null;
    case 17:
      return oe(e.type) && vs(), _A(e), null;
    case 19:
      if (lA(pA), i = e.memoizedState, i === null) return _A(e), null;
      if (r = (e.flags & 128) !== 0, o = i.rendering, o === null) if (r) li(i, !1);
      else {
        if (SA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (o = Is(A), o !== null) {
            for (e.flags |= 128, li(i, !1), r = o.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = t, t = e.child; t !== null; ) i = t, A = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = A, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, A = o.dependencies, i.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return iA(pA, pA.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        i.tail !== null && FA() > Rn && (e.flags |= 128, r = !0, li(i, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (A = Is(o), A !== null) {
          if (e.flags |= 128, r = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), li(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !fA) return _A(e), null;
        } else 2 * FA() - i.renderingStartTime > Rn && t !== 1073741824 && (e.flags |= 128, r = !0, li(i, !1), e.lanes = 4194304);
        i.isBackwards ? (o.sibling = e.child, e.child = o) : (t = i.last, t !== null ? t.sibling = o : e.child = o, i.last = o);
      }
      return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = FA(), e.sibling = null, t = pA.current, iA(pA, r ? t & 1 | 2 : t & 1), e) : (_A(e), null);
    case 22:
    case 23:
      return Nd(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? ue & 1073741824 && (_A(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _A(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, e.tag));
}
function qy(A, e) {
  switch (md(e), e.tag) {
    case 1:
      return oe(e.type) && vs(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Dn(), lA(ie), lA(WA), Hd(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Id(e), null;
    case 13:
      if (lA(pA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(H(340));
        kn();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return lA(pA), null;
    case 4:
      return Dn(), null;
    case 10:
      return yd(e.type._context), null;
    case 22:
    case 23:
      return Nd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ra = !1, $A = !1, AF = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function gn(A, e) {
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
function eF(A, e) {
  if (Fc = ps, A = Rw(), hd(A)) {
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
      var h = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var w = h.memoizedProps, y = h.memoizedState, g = e.stateNode, d = g.getSnapshotBeforeUpdate(e.elementType === e.type ? w : ke(e.type, w), y);
            g.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var p = e.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
  return h = xg, xg = !1, h;
}
function Di(A, e, t) {
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
function dl(A, e) {
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
  e !== null && (A.alternate = null, km(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[ze], delete e[io], delete e[Hc], delete e[Ky], delete e[Ry])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
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
function Vc(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = ms));
  else if (r !== 4 && (A = A.child, A !== null)) for (Vc(A, e, t), A = A.sibling; A !== null; ) Vc(A, e, t), A = A.sibling;
}
function Gc(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && (A = A.child, A !== null)) for (Gc(A, e, t), A = A.sibling; A !== null; ) Gc(A, e, t), A = A.sibling;
}
var DA = null, Oe = !1;
function Et(A, e, t) {
  for (t = t.child; t !== null; ) Dm(A, e, t), t = t.sibling;
}
function Dm(A, e, t) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
    Ze.onCommitFiberUnmount(il, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      $A || gn(t, e);
    case 6:
      var r = DA, n = Oe;
      DA = null, Et(A, e, t), DA = r, Oe = n, DA !== null && (Oe ? (A = DA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : DA.removeChild(t.stateNode));
      break;
    case 18:
      DA !== null && (Oe ? (A = DA, t = t.stateNode, A.nodeType === 8 ? du(A.parentNode, t) : A.nodeType === 1 && du(A, t), Ao(A)) : du(DA, t.stateNode));
      break;
    case 4:
      r = DA, n = Oe, DA = t.stateNode.containerInfo, Oe = !0, Et(A, e, t), DA = r, Oe = n;
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
      Et(A, e, t);
      break;
    case 1:
      if (!$A && (gn(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (a) {
        vA(t, e, a);
      }
      Et(A, e, t);
      break;
    case 21:
      Et(A, e, t);
      break;
    case 22:
      t.mode & 1 ? ($A = (r = $A) || t.memoizedState !== null, Et(A, e, t), $A = r) : Et(A, e, t);
      break;
    default:
      Et(A, e, t);
  }
}
function Lg(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new AF()), e.forEach(function(r) {
      var n = uF.bind(null, A, r);
      t.has(r) || (t.add(r), r.then(n, n));
    });
  }
}
function Le(A, e) {
  var t = e.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var n = t[r];
    try {
      var i = A, o = e, a = o;
      A: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            DA = a.stateNode, Oe = !1;
            break A;
          case 3:
            DA = a.stateNode.containerInfo, Oe = !0;
            break A;
          case 4:
            DA = a.stateNode.containerInfo, Oe = !0;
            break A;
        }
        a = a.return;
      }
      if (DA === null) throw Error(H(160));
      Dm(i, o, n), DA = null, Oe = !1;
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
      if (Le(e, A), $e(A), r & 4) {
        try {
          Di(3, A, A.return), dl(3, A);
        } catch (w) {
          vA(A, A.return, w);
        }
        try {
          Di(5, A, A.return);
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 1:
      Le(e, A), $e(A), r & 512 && t !== null && gn(t, t.return);
      break;
    case 5:
      if (Le(e, A), $e(A), r & 512 && t !== null && gn(t, t.return), A.flags & 32) {
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
            u === "style" ? uw(n, c) : u === "dangerouslySetInnerHTML" ? sw(n, c) : u === "children" ? zi(n, c) : nd(n, u, c, l);
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
              B != null ? Qn(n, !!i.multiple, B, !1) : f !== !!i.multiple && (i.defaultValue != null ? Qn(
                n,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Qn(n, !!i.multiple, i.multiple ? [] : "", !1));
          }
          n[io] = i;
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 6:
      if (Le(e, A), $e(A), r & 4) {
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
      if (Le(e, A), $e(A), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ao(e.containerInfo);
      } catch (w) {
        vA(A, A.return, w);
      }
      break;
    case 4:
      Le(e, A), $e(A);
      break;
    case 13:
      Le(e, A), $e(A), n = A.child, n.flags & 8192 && (i = n.memoizedState !== null, n.stateNode.isHidden = i, !i || n.alternate !== null && n.alternate.memoizedState !== null || (Kd = FA())), r & 4 && Lg(A);
      break;
    case 22:
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? ($A = (l = $A) || u, Le(e, A), $A = l) : Le(e, A), $e(A), r & 8192) {
        if (l = A.memoizedState !== null, (A.stateNode.isHidden = l) && !u && A.mode & 1) for (O = A, u = A.child; u !== null; ) {
          for (c = O = u; O !== null; ) {
            switch (f = O, B = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Di(4, f, f.return);
                break;
              case 1:
                gn(f, f.return);
                var h = f.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = f, t = f.return;
                  try {
                    e = r, h.props = e.memoizedProps, h.state = e.memoizedState, h.componentWillUnmount();
                  } catch (w) {
                    vA(r, t, w);
                  }
                }
                break;
              case 5:
                gn(f, f.return);
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
      Le(e, A), $e(A), r & 4 && Lg(A);
      break;
    case 21:
      break;
    default:
      Le(
        e,
        A
      ), $e(A);
  }
}
function $e(A) {
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
          Gc(A, i, n);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, a = Sg(A);
          Vc(A, a, o);
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
function tF(A, e, t) {
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
            $A || dl(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !$A) if (t === null) r.componentDidMount();
            else {
              var n = e.elementType === e.type ? t.memoizedProps : ke(e.type, t.memoizedProps);
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
                  c !== null && Ao(c);
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
            dl(4, e);
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
var rF = Math.ceil, Ss = yt.ReactCurrentDispatcher, Od = yt.ReactCurrentOwner, Ee = yt.ReactCurrentBatchConfig, J = 0, OA = null, IA = null, NA = 0, ue = 0, pn = ur(0), SA = 0, co = null, Nr = 0, Bl = 0, Dd = 0, Ki = null, ee = null, Kd = 0, Rn = 1 / 0, ot = null, Ls = !1, $c = null, Yt = null, na = !1, Nt = null, bs = 0, Ri = 0, Wc = null, za = -1, Ja = 0;
function zA() {
  return J & 6 ? FA() : za !== -1 ? za : za = FA();
}
function zt(A) {
  return A.mode & 1 ? J & 2 && NA !== 0 ? NA & -NA : My.transition !== null ? (Ja === 0 && (Ja = Qw()), Ja) : (A = eA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : xw(A.type)), A) : 1;
}
function Me(A, e, t, r) {
  if (50 < Ri) throw Ri = 0, Wc = null, Error(H(185));
  Io(A, t, r), (!(J & 2) || A !== OA) && (A === OA && (!(J & 2) && (Bl |= t), SA === 4 && Dt(A, NA)), ae(A, r), t === 1 && J === 0 && !(e.mode & 1) && (Rn = FA() + 500, ul && cr()));
}
function ae(A, e) {
  var t = A.callbackNode;
  MQ(A, e);
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) t !== null && VB(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && VB(t), e === 1) A.tag === 0 ? Ny(Og.bind(null, A)) : jw(Og.bind(null, A)), Oy(function() {
      !(J & 6) && cr();
    }), t = null;
    else {
      switch (yw(r)) {
        case 1:
          t = ld;
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
  if (za = -1, Ja = 0, J & 6) throw Error(H(327));
  var t = A.callbackNode;
  if (In() && A.callbackNode !== t) return null;
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = Ts(A, r);
  else {
    e = r;
    var n = J;
    J |= 2;
    var i = Pm();
    (OA !== A || NA !== e) && (ot = null, Rn = FA() + 500, xr(A, e));
    do
      try {
        oF();
        break;
      } catch (a) {
        Mm(A, a);
      }
    while (!0);
    Qd(), Ss.current = i, J = n, IA !== null ? e = 0 : (OA = null, NA = 0, e = SA);
  }
  if (e !== 0) {
    if (e === 2 && (n = mc(A), n !== 0 && (r = n, e = Xc(A, n))), e === 1) throw t = co, xr(A, 0), Dt(A, r), ae(A, FA()), t;
    if (e === 6) Dt(A, r);
    else {
      if (n = A.current.alternate, !(r & 30) && !nF(n) && (e = Ts(A, r), e === 2 && (i = mc(A), i !== 0 && (r = i, e = Xc(A, i))), e === 1)) throw t = co, xr(A, 0), Dt(A, r), ae(A, FA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          hr(A, ee, ot);
          break;
        case 3:
          if (Dt(A, r), (r & 130023424) === r && (e = Kd + 500 - FA(), 10 < e)) {
            if (gs(A, 0) !== 0) break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              zA(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = Ic(hr.bind(null, A, ee, ot), e);
            break;
          }
          hr(A, ee, ot);
          break;
        case 4:
          if (Dt(A, r), (r & 4194240) === r) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - Ne(r);
            i = 1 << o, o = e[o], o > n && (n = o), r &= ~i;
          }
          if (r = n, r = FA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rF(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = Ic(hr.bind(null, A, ee, ot), r);
            break;
          }
          hr(A, ee, ot);
          break;
        case 5:
          hr(A, ee, ot);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return ae(A, FA()), A.callbackNode === t ? Nm.bind(null, A) : null;
}
function Xc(A, e) {
  var t = Ki;
  return A.current.memoizedState.isDehydrated && (xr(A, e).flags |= 256), A = Ts(A, e), A !== 2 && (e = ee, ee = t, e !== null && jc(e)), A;
}
function jc(A) {
  ee === null ? ee = A : ee.push.apply(ee, A);
}
function nF(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var n = t[r], i = n.getSnapshot;
        n = n.value;
        try {
          if (!_e(i(), n)) return !1;
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
function Dt(A, e) {
  for (e &= ~Dd, e &= ~Bl, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - Ne(e), r = 1 << t;
    A[t] = -1, e &= ~r;
  }
}
function Og(A) {
  if (J & 6) throw Error(H(327));
  In();
  var e = gs(A, 0);
  if (!(e & 1)) return ae(A, FA()), null;
  var t = Ts(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = mc(A);
    r !== 0 && (e = r, t = Xc(A, r));
  }
  if (t === 1) throw t = co, xr(A, 0), Dt(A, e), ae(A, FA()), t;
  if (t === 6) throw Error(H(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, hr(A, ee, ot), ae(A, FA()), null;
}
function Rd(A, e) {
  var t = J;
  J |= 1;
  try {
    return A(e);
  } finally {
    J = t, J === 0 && (Rn = FA() + 500, ul && cr());
  }
}
function Mr(A) {
  Nt !== null && Nt.tag === 0 && !(J & 6) && In();
  var e = J;
  J |= 1;
  var t = Ee.transition, r = eA;
  try {
    if (Ee.transition = null, eA = 1, A) return A();
  } finally {
    eA = r, Ee.transition = t, J = e, !(J & 6) && cr();
  }
}
function Nd() {
  ue = pn.current, lA(pn);
}
function xr(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, ky(t)), IA !== null) for (t = IA.return; t !== null; ) {
    var r = t;
    switch (md(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vs();
        break;
      case 3:
        Dn(), lA(ie), lA(WA), Hd();
        break;
      case 5:
        Id(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        lA(pA);
        break;
      case 19:
        lA(pA);
        break;
      case 10:
        yd(r.type._context);
        break;
      case 22:
      case 23:
        Nd();
    }
    t = t.return;
  }
  if (OA = A, IA = A = Jt(A.current, null), NA = ue = e, SA = 0, co = null, Dd = Bl = Nr = 0, ee = Ki = null, Qr !== null) {
    for (e = 0; e < Qr.length; e++) if (t = Qr[e], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var n = r.next, i = t.pending;
      if (i !== null) {
        var o = i.next;
        i.next = n, r.next = o;
      }
      t.pending = r;
    }
    Qr = null;
  }
  return A;
}
function Mm(A, e) {
  do {
    var t = IA;
    try {
      if (Qd(), Xa.current = xs, Hs) {
        for (var r = wA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        Hs = !1;
      }
      if (Rr = 0, TA = HA = wA = null, Oi = !1, so = 0, Od.current = null, t === null || t.return === null) {
        SA = 1, co = e, IA = null;
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
            var h = e.updateQueue;
            if (h === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), e.updateQueue = w;
            } else h.add(s);
            break A;
          } else {
            if (!(e & 1)) {
              Cg(i, l, e), Md();
              break A;
            }
            s = Error(H(426));
          }
        } else if (fA && a.mode & 1) {
          var y = Qg(o);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), yg(y, o, a, i, e), vd(Kn(s, a));
            break A;
          }
        }
        i = s = Kn(s, a), SA !== 4 && (SA = 2), Ki === null ? Ki = [i] : Ki.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, e &= -e, i.lanes |= e;
              var g = ym(i, s, e);
              gg(i, g);
              break A;
            case 1:
              a = s;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Yt === null || !Yt.has(p)))) {
                i.flags |= 65536, e &= -e, i.lanes |= e;
                var m = Fm(i, a, e);
                gg(i, m);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vm(t);
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
function Md() {
  (SA === 0 || SA === 3 || SA === 2) && (SA = 4), OA === null || !(Nr & 268435455) && !(Bl & 268435455) || Dt(OA, NA);
}
function Ts(A, e) {
  var t = J;
  J |= 2;
  var r = Pm();
  (OA !== A || NA !== e) && (ot = null, xr(A, e));
  do
    try {
      iF();
      break;
    } catch (n) {
      Mm(A, n);
    }
  while (!0);
  if (Qd(), J = t, Ss.current = r, IA !== null) throw Error(H(261));
  return OA = null, NA = 0, SA;
}
function iF() {
  for (; IA !== null; ) _m(IA);
}
function oF() {
  for (; IA !== null && !LQ(); ) _m(IA);
}
function _m(A) {
  var e = $m(A.alternate, A, ue);
  A.memoizedProps = A.pendingProps, e === null ? Vm(A) : IA = e, Od.current = null;
}
function Vm(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = qy(t, e), t !== null) {
        t.flags &= 32767, IA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        SA = 6, IA = null;
        return;
      }
    } else if (t = Zy(t, e, ue), t !== null) {
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
function hr(A, e, t) {
  var r = eA, n = Ee.transition;
  try {
    Ee.transition = null, eA = 1, aF(A, e, t, r);
  } finally {
    Ee.transition = n, eA = r;
  }
  return null;
}
function aF(A, e, t, r) {
  do
    In();
  while (Nt !== null);
  if (J & 6) throw Error(H(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(H(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (PQ(A, i), A === OA && (IA = OA = null, NA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || na || (na = !0, Wm(Bs, function() {
    return In(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var o = eA;
    eA = 1;
    var a = J;
    J |= 4, Od.current = null, eF(A, t), Km(t, A), Iy(Uc), ps = !!Fc, Uc = Fc = null, A.current = t, tF(t), bQ(), J = a, eA = o, Ee.transition = i;
  } else A.current = t;
  if (na && (na = !1, Nt = A, bs = n), i = A.pendingLanes, i === 0 && (Yt = null), OQ(t.stateNode), ae(A, FA()), e !== null) for (r = A.onRecoverableError, t = 0; t < e.length; t++) n = e[t], r(n.value, { componentStack: n.stack, digest: n.digest });
  if (Ls) throw Ls = !1, A = $c, $c = null, A;
  return bs & 1 && A.tag !== 0 && In(), i = A.pendingLanes, i & 1 ? A === Wc ? Ri++ : (Ri = 0, Wc = A) : Ri = 0, cr(), null;
}
function In() {
  if (Nt !== null) {
    var A = yw(bs), e = Ee.transition, t = eA;
    try {
      if (Ee.transition = null, eA = 16 > A ? 16 : A, Nt === null) var r = !1;
      else {
        if (A = Nt, Nt = null, bs = 0, J & 6) throw Error(H(331));
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
                      Di(8, u, i);
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
              var h = i.alternate;
              if (h !== null) {
                var w = h.child;
                if (w !== null) {
                  h.child = null;
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
                Di(9, i, i.return);
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
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, O = p;
          else A: for (o = d; O !== null; ) {
            if (a = O, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  dl(9, a);
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
        if (J = n, cr(), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
          Ze.onPostCommitFiberRoot(il, A);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      eA = t, Ee.transition = e;
    }
  }
  return !1;
}
function Dg(A, e, t) {
  e = Kn(t, e), e = ym(A, e, 1), A = jt(A, e, 1), e = zA(), A !== null && (Io(A, 1, e), ae(A, e));
}
function vA(A, e, t) {
  if (A.tag === 3) Dg(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Dg(e, A, t);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
        A = Kn(t, A), A = Fm(e, A, 1), e = jt(e, A, 1), A = zA(), e !== null && (Io(e, 1, A), ae(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function sF(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = zA(), A.pingedLanes |= A.suspendedLanes & t, OA === A && (NA & t) === t && (SA === 4 || SA === 3 && (NA & 130023424) === NA && 500 > FA() - Kd ? xr(A, 0) : Dd |= t), ae(A, e);
}
function Gm(A, e) {
  e === 0 && (A.mode & 1 ? (e = jo, jo <<= 1, !(jo & 130023424) && (jo = 4194304)) : e = 1);
  var t = zA();
  A = ht(A, e), A !== null && (Io(A, e, t), ae(A, t));
}
function lF(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), Gm(A, t);
}
function uF(A, e) {
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
  r !== null && r.delete(e), Gm(A, t);
}
var $m;
$m = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || ie.current) te = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return te = !1, Jy(A, e, t);
    te = !!(A.flags & 131072);
  }
  else te = !1, fA && e.flags & 1048576 && Yw(e, ys, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Ya(A, e), A = e.pendingProps;
      var n = Tn(e, WA.current);
      En(e, t), n = Sd(null, e, r, A, n, t);
      var i = Ld();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, oe(r) ? (i = !0, Cs(e)) : i = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, Ud(e), n.updater = fl, e.stateNode = n, n._reactInternals = e, kc(e, r, A, t), e = Kc(null, e, r, !0, i, t)) : (e.tag = 0, fA && i && wd(e), YA(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (Ya(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = fF(r), A = ke(r, A), n) {
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
            e = Ug(null, e, r, ke(r.type, A), t);
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
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Dc(A, e, r, n, t);
    case 1:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Eg(A, e, r, n, t);
    case 3:
      A: {
        if (Hm(e), A === null) throw Error(H(387));
        r = e.pendingProps, i = e.memoizedState, n = i.element, em(A, e), Es(e, r, null, t);
        var o = e.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
          n = Kn(Error(H(423)), e), e = Ig(A, e, r, t, n);
          break A;
        } else if (r !== n) {
          n = Kn(Error(H(424)), e), e = Ig(A, e, r, t, n);
          break A;
        } else for (fe = Xt(e.stateNode.containerInfo.firstChild), de = e, fA = !0, De = null, t = qw(e, null, r, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (kn(), r === n) {
            e = wt(A, e, t);
            break A;
          }
          YA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return tm(e), A === null && Lc(e), r = e.type, n = e.pendingProps, i = A !== null ? A.memoizedProps : null, o = n.children, Ec(r, n) ? o = null : i !== null && Ec(r, i) && (e.flags |= 32), Im(A, e), YA(A, e, o, t), e.child;
    case 6:
      return A === null && Lc(e), null;
    case 13:
      return xm(A, e, t);
    case 4:
      return Ed(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = On(e, null, r, t) : YA(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Fg(A, e, r, n, t);
    case 7:
      return YA(A, e, e.pendingProps, t), e.child;
    case 8:
      return YA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return YA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, i = e.memoizedProps, o = n.value, iA(Fs, r._currentValue), r._currentValue = o, i !== null) if (_e(i.value, o)) {
          if (i.children === n.children && !ie.current) {
            e = wt(A, e, t);
            break A;
          }
        } else for (i = e.child, i !== null && (i.return = e); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            o = i.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = ft(-1, t & -t), s.tag = 2;
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
        YA(A, e, n.children, t), e = e.child;
      }
      return e;
    case 9:
      return n = e.type, r = e.pendingProps.children, En(e, t), n = Ie(n), r = r(n), e.flags |= 1, YA(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = ke(r, e.pendingProps), n = ke(r.type, n), Ug(A, e, r, n, t);
    case 15:
      return Um(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Ya(A, e), e.tag = 1, oe(r) ? (A = !0, Cs(e)) : A = !1, En(e, t), Qm(e, r, n), kc(e, r, n, t), Kc(null, e, r, !0, A, t);
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
function cF(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ye(A, e, t, r) {
  return new cF(A, e, t, r);
}
function Pd(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function fF(A) {
  if (typeof A == "function") return Pd(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === od) return 11;
    if (A === ad) return 14;
  }
  return 2;
}
function Jt(A, e) {
  var t = A.alternate;
  return t === null ? (t = ye(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function Za(A, e, t, r, n, i) {
  var o = 2;
  if (r = A, typeof A == "function") Pd(A) && (o = 1);
  else if (typeof A == "string") o = 5;
  else A: switch (A) {
    case on:
      return Sr(t.children, n, i, e);
    case id:
      o = 8, n |= 8;
      break;
    case nc:
      return A = ye(12, t, e, n | 2), A.elementType = nc, A.lanes = i, A;
    case ic:
      return A = ye(13, t, e, n), A.elementType = ic, A.lanes = i, A;
    case oc:
      return A = ye(19, t, e, n), A.elementType = oc, A.lanes = i, A;
    case tw:
      return gl(t, n, i, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case Aw:
          o = 10;
          break A;
        case ew:
          o = 9;
          break A;
        case od:
          o = 11;
          break A;
        case ad:
          o = 14;
          break A;
        case bt:
          o = 16, r = null;
          break A;
      }
      throw Error(H(130, A == null ? A : typeof A, ""));
  }
  return e = ye(o, t, e, n), e.elementType = A, e.type = r, e.lanes = i, e;
}
function Sr(A, e, t, r) {
  return A = ye(7, A, r, e), A.lanes = t, A;
}
function gl(A, e, t, r) {
  return A = ye(22, A, r, e), A.elementType = tw, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function Cu(A, e, t) {
  return A = ye(6, A, null, e), A.lanes = t, A;
}
function Qu(A, e, t) {
  return e = ye(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function dF(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tu(0), this.expirationTimes = tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tu(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function _d(A, e, t, r, n, i, o, a, s) {
  return A = new dF(A, e, t, a, s), e === 1 ? (e = 1, i === !0 && (e |= 8)) : e = 0, i = ye(3, null, null, e), A.current = i, i.stateNode = A, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ud(i), A;
}
function BF(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: nn, key: r == null ? null : "" + r, children: A, containerInfo: e, implementation: t };
}
function Xm(A) {
  if (!A) return er;
  A = A._reactInternals;
  A: {
    if ($r(A) !== A || A.tag !== 1) throw Error(H(170));
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
function jm(A, e, t, r, n, i, o, a, s) {
  return A = _d(t, r, !0, A, n, i, o, a, s), A.context = Xm(null), t = A.current, r = zA(), n = zt(t), i = ft(r, n), i.callback = e ?? null, jt(t, i, n), A.current.lanes = n, Io(A, n, r), ae(A, r), A;
}
function pl(A, e, t, r) {
  var n = e.current, i = zA(), o = zt(n);
  return t = Xm(t), e.context === null ? e.context = t : e.pendingContext = t, e = ft(i, o), e.payload = { element: A }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = jt(n, e, o), A !== null && (Me(A, n, o, i), Wa(A, n, o)), o;
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
function gF() {
  return null;
}
var Ym = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function Gd(A) {
  this._internalRoot = A;
}
hl.prototype.render = Gd.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null) throw Error(H(409));
  pl(A, e, null, null);
};
hl.prototype.unmount = Gd.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    Mr(function() {
      pl(null, A, null, null);
    }), e[pt] = null;
  }
};
function hl(A) {
  this._internalRoot = A;
}
hl.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = Ew();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Ot.length && e !== 0 && e < Ot[t].priority; t++) ;
    Ot.splice(t, 0, A), t === 0 && Hw(A);
  }
};
function $d(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function wl(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function Rg() {
}
function pF(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var l = ks(o);
        i.call(l);
      };
    }
    var o = jm(e, r, A, 0, null, !1, !1, "", Rg);
    return A._reactRootContainer = o, A[pt] = o.current, ro(A.nodeType === 8 ? A.parentNode : A), Mr(), o;
  }
  for (; n = A.lastChild; ) A.removeChild(n);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var l = ks(s);
      a.call(l);
    };
  }
  var s = _d(A, 0, !1, null, null, !1, !1, "", Rg);
  return A._reactRootContainer = s, A[pt] = s.current, ro(A.nodeType === 8 ? A.parentNode : A), Mr(function() {
    pl(e, s, t, r);
  }), s;
}
function ml(A, e, t, r, n) {
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
    pl(e, o, A, n);
  } else o = pF(t, e, A, n, r);
  return ks(o);
}
Fw = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = wi(e.pendingLanes);
        t !== 0 && (ud(e, t | 1), ae(e, FA()), !(J & 6) && (Rn = FA() + 500, cr()));
      }
      break;
    case 13:
      Mr(function() {
        var r = ht(A, 1);
        if (r !== null) {
          var n = zA();
          Me(r, A, 1, n);
        }
      }), Vd(A, 1);
  }
};
cd = function(A) {
  if (A.tag === 13) {
    var e = ht(A, 134217728);
    if (e !== null) {
      var t = zA();
      Me(e, A, 134217728, t);
    }
    Vd(A, 134217728);
  }
};
Uw = function(A) {
  if (A.tag === 13) {
    var e = zt(A), t = ht(A, e);
    if (t !== null) {
      var r = zA();
      Me(t, A, e, r);
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
            var n = ll(r);
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
      e = t.value, e != null && Qn(A, !!t.multiple, e, !1);
  }
};
dw = Rd;
Bw = Mr;
var hF = { usingClientEntryPoint: !1, Events: [xo, un, ll, cw, fw, Rd] }, ui = { findFiberByHostInstance: Cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wF = { bundleType: ui.bundleType, version: ui.version, rendererPackageName: ui.rendererPackageName, rendererConfig: ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = hw(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: ui.findFiberByHostInstance || gF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ia.isDisabled && ia.supportsFiber) try {
    il = ia.inject(wF), Ze = ia;
  } catch {
  }
}
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hF;
pe.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$d(e)) throw Error(H(200));
  return BF(A, e, null, t);
};
pe.createRoot = function(A, e) {
  if (!$d(A)) throw Error(H(299));
  var t = !1, r = "", n = Ym;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = _d(A, 1, !1, null, null, t, !1, r, n), A[pt] = e.current, ro(A.nodeType === 8 ? A.parentNode : A), new Gd(e);
};
pe.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(H(188)) : (A = Object.keys(A).join(","), Error(H(268, A)));
  return A = hw(e), A = A === null ? null : A.stateNode, A;
};
pe.flushSync = function(A) {
  return Mr(A);
};
pe.hydrate = function(A, e, t) {
  if (!wl(e)) throw Error(H(200));
  return ml(null, A, e, !0, t);
};
pe.hydrateRoot = function(A, e, t) {
  if (!$d(A)) throw Error(H(405));
  var r = t != null && t.hydratedSources || null, n = !1, i = "", o = Ym;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = jm(e, null, A, 1, t ?? null, n, !1, i, o), A[pt] = e.current, ro(A), r) for (A = 0; A < r.length; A++) t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(
    t,
    n
  );
  return new hl(e);
};
pe.render = function(A, e, t) {
  if (!wl(e)) throw Error(H(200));
  return ml(null, A, e, !1, t);
};
pe.unmountComponentAtNode = function(A) {
  if (!wl(A)) throw Error(H(40));
  return A._reactRootContainer ? (Mr(function() {
    ml(null, null, A, !1, function() {
      A._reactRootContainer = null, A[pt] = null;
    });
  }), !0) : !1;
};
pe.unstable_batchedUpdates = Rd;
pe.unstable_renderSubtreeIntoContainer = function(A, e, t, r) {
  if (!wl(t)) throw Error(H(200));
  if (A == null || A._reactInternals === void 0) throw Error(H(38));
  return ml(A, e, t, !1, r);
};
pe.version = "18.3.1-next-f1338f8080-20240426";
function zm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm);
    } catch (A) {
      console.error(A);
    }
}
zm(), zh.exports = pe;
var vl = zh.exports;
const mF = /* @__PURE__ */ rl(vl), vF = "_dialog_uavra_1", CF = "_overlay_uavra_6", QF = "_container_uavra_13", yF = "_dialogPanel_uavra_24", FF = "_searchIcon_uavra_34", UF = "_inputField_uavra_45", EF = "_inputWrapper_uavra_58", IF = "_loading_uavra_64", HF = "_gradientShift_uavra_1", It = {
  dialog: vF,
  overlay: CF,
  container: QF,
  dialogPanel: yF,
  searchIcon: FF,
  inputField: UF,
  inputWrapper: EF,
  loading: IF,
  gradientShift: HF
};
var xF = Object.defineProperty, SF = (A, e, t) => e in A ? xF(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, yu = (A, e, t) => (SF(A, typeof e != "symbol" ? e + "" : e, t), t);
let LF = class {
  constructor() {
    yu(this, "current", this.detect()), yu(this, "handoffState", "pending"), yu(this, "currentId", 0);
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
}, Lr = new LF();
function Wd(A) {
  return Lr.isServer ? null : A instanceof Node ? A.ownerDocument : A != null && A.hasOwnProperty("current") && A.current instanceof Node ? A.current.ownerDocument : document;
}
function Cl(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function fr() {
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
    return Cl(() => {
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
    let r = fr();
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
function Xd() {
  let [A] = Q.useState(fr);
  return Q.useEffect(() => () => A.dispose(), [A]), A;
}
let JA = (A, e) => {
  Lr.isServer ? Q.useEffect(A, e) : Q.useLayoutEffect(A, e);
};
function Wr(A) {
  let e = Q.useRef(A);
  return JA(() => {
    e.current = A;
  }, [A]), e;
}
let hA = function(A) {
  let e = Wr(A);
  return N.useCallback((...t) => e.current(...t), [e]);
}, bF = Q.createContext(void 0);
function TF() {
  return Q.useContext(bF);
}
function Yc(...A) {
  return Array.from(new Set(A.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function tr(A, e, ...t) {
  if (A in e) {
    let n = e[A];
    return typeof n == "function" ? n(...t) : n;
  }
  let r = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, tr), r;
}
var Os = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(Os || {}), Mt = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(Mt || {});
function Se({ ourProps: A, theirProps: e, slot: t, defaultTag: r, features: n, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? kF;
  let s = Jm(e, A);
  if (i) return oa(s, t, r, o, a);
  let l = n ?? 0;
  if (l & 2) {
    let { static: u = !1, ...c } = s;
    if (u) return oa(c, t, r, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...c } = s;
    return tr(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return oa({ ...c, hidden: !0, style: { display: "none" } }, t, r, o, a);
    } });
  }
  return oa(s, t, r, o, a);
}
function oa(A, e = {}, t, r, n) {
  let { as: i = t, children: o, refName: a = "ref", ...s } = Fu(A, ["unmount", "static"]), l = A.ref !== void 0 ? { [a]: A.ref } : {}, u = typeof o == "function" ? o(e) : o;
  "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(e)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
  let c = {};
  if (e) {
    let f = !1, B = [];
    for (let [h, w] of Object.entries(e)) typeof w == "boolean" && (f = !0), w === !0 && B.push(h.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (f) {
      c["data-headlessui-state"] = B.join(" ");
      for (let h of B) c[`data-${h}`] = "";
    }
  }
  if (i === Q.Fragment && (Object.keys(wr(s)).length > 0 || Object.keys(wr(c)).length > 0)) if (!Q.isValidElement(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(wr(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(wr(s)).concat(Object.keys(wr(c))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = u.props, B = f == null ? void 0 : f.className, h = typeof B == "function" ? (...g) => Yc(B(...g), s.className) : Yc(B, s.className), w = h ? { className: h } : {}, y = Jm(u.props, wr(Fu(s, ["ref"])));
    for (let g in c) g in y && delete c[g];
    return Q.cloneElement(u, Object.assign({}, y, c, l, { ref: n(u.ref, l.ref) }, w));
  }
  return Q.createElement(i, Object.assign({}, Fu(s, ["ref"]), i !== Q.Fragment && l, i !== Q.Fragment && c), u);
}
function kF(...A) {
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
function wr(A) {
  let e = Object.assign({}, A);
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function Fu(A, e = []) {
  let t = Object.assign({}, A);
  for (let r of e) r in t && delete t[r];
  return t;
}
let OF = "div";
var Ds = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(Ds || {});
function DF(A, e) {
  var t;
  let { features: r = 1, ...n } = A, i = { ref: e, "aria-hidden": (r & 2) === 2 ? !0 : (t = n["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se({ ourProps: i, theirProps: n, slot: {}, defaultTag: OF, name: "Hidden" });
}
let zc = se(DF), KF = Q.createContext(null);
function RF({ children: A }) {
  let e = Q.useContext(KF);
  if (!e) return N.createElement(N.Fragment, null, A);
  let { target: t } = e;
  return t ? vl.createPortal(N.createElement(N.Fragment, null, A), t) : null;
}
let Zm = Symbol();
function NF(A, e = !0) {
  return Object.assign(A, { [Zm]: e });
}
function et(...A) {
  let e = Q.useRef(A);
  Q.useEffect(() => {
    e.current = A;
  }, [A]);
  let t = hA((r) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(r) : n.current = r);
  });
  return A.every((r) => r == null || (r == null ? void 0 : r[Zm])) ? void 0 : t;
}
let jd = Q.createContext(null);
jd.displayName = "DescriptionContext";
function qm() {
  let A = Q.useContext(jd);
  if (A === null) {
    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e, qm), e;
  }
  return A;
}
function MF() {
  let [A, e] = Q.useState([]);
  return [A.length > 0 ? A.join(" ") : void 0, Q.useMemo(() => function(t) {
    let r = hA((i) => (e((o) => [...o, i]), () => e((o) => {
      let a = o.slice(), s = a.indexOf(i);
      return s !== -1 && a.splice(s, 1), a;
    }))), n = Q.useMemo(() => ({ register: r, slot: t.slot, name: t.name, props: t.props, value: t.value }), [r, t.slot, t.name, t.props, t.value]);
    return N.createElement(jd.Provider, { value: n }, t.children);
  }, [e])];
}
let PF = "p";
function _F(A, e) {
  let t = Q.useId(), r = TF(), { id: n = `headlessui-description-${t}`, ...i } = A, o = qm(), a = et(e);
  JA(() => o.register(n), [n, o.register]);
  let s = r || !1, l = Q.useMemo(() => ({ ...o.slot, disabled: s }), [o.slot, s]), u = { ref: a, ...o.props, id: n };
  return Se({ ourProps: u, theirProps: i, slot: l, defaultTag: PF, name: o.name || "Description" });
}
let VF = se(_F), GF = Object.assign(VF, {});
var A0 = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(A0 || {});
let $F = Q.createContext(() => {
});
function WF({ value: A, children: e }) {
  return N.createElement($F.Provider, { value: A }, e);
}
let XF = class extends Map {
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
let jF = new XF(() => e0(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function Jn(A, e) {
  let t = jF.get(e), r = Q.useId(), n = t0(t);
  if (JA(() => {
    if (A) return t.dispatch("ADD", r), () => t.dispatch("REMOVE", r);
  }, [t, A]), !A) return !1;
  let i = n.indexOf(r), o = n.length;
  return i === -1 && (i = o, o += 1), i === o - 1;
}
let Jc = /* @__PURE__ */ new Map(), Ni = /* @__PURE__ */ new Map();
function Ng(A) {
  var e;
  let t = (e = Ni.get(A)) != null ? e : 0;
  return Ni.set(A, t + 1), t !== 0 ? () => Mg(A) : (Jc.set(A, { "aria-hidden": A.getAttribute("aria-hidden"), inert: A.inert }), A.setAttribute("aria-hidden", "true"), A.inert = !0, () => Mg(A));
}
function Mg(A) {
  var e;
  let t = (e = Ni.get(A)) != null ? e : 1;
  if (t === 1 ? Ni.delete(A) : Ni.set(A, t - 1), t !== 1) return;
  let r = Jc.get(A);
  r && (r["aria-hidden"] === null ? A.removeAttribute("aria-hidden") : A.setAttribute("aria-hidden", r["aria-hidden"]), A.inert = r.inert, Jc.delete(A));
}
function YF(A, { allowed: e, disallowed: t } = {}) {
  let r = Jn(A, "inert-others");
  JA(() => {
    var n, i;
    if (!r) return;
    let o = fr();
    for (let s of (n = t == null ? void 0 : t()) != null ? n : []) s && o.add(Ng(s));
    let a = (i = e == null ? void 0 : e()) != null ? i : [];
    for (let s of a) {
      if (!s) continue;
      let l = Wd(s);
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
  let r = Wr((n) => {
    let i = n.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && t();
  });
  Q.useEffect(() => {
    if (!A) return;
    let n = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!n) return;
    let i = fr();
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
let Zc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(","), zF = ["[data-autofocus]"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var lt = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A[A.AutoFocus = 64] = "AutoFocus", A))(lt || {}), qc = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(qc || {}), JF = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(JF || {});
function ZF(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(Zc)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function qF(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(zF)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var n0 = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(n0 || {});
function AU(A, e = 0) {
  var t;
  return A === ((t = Wd(A)) == null ? void 0 : t.body) ? !1 : tr(e, { 0() {
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
var eU = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(eU || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dt(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let tU = ["textarea", "input"].join(",");
function rU(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, tU)) != null ? t : !1;
}
function nU(A, e = (t) => t) {
  return A.slice().sort((t, r) => {
    let n = e(t), i = e(r);
    if (n === null || i === null) return 0;
    let o = n.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Mi(A, e, { sorted: t = !0, relativeTo: r = null, skipElements: n = [] } = {}) {
  let i = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, o = Array.isArray(A) ? t ? nU(A) : A : e & 64 ? qF(A) : ZF(A);
  n.length > 0 && o.length > 1 && (o = o.filter((B) => !n.some((h) => h != null && "current" in h ? (h == null ? void 0 : h.current) === B : h === B))), r = r ?? i.activeElement;
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
  return e & 6 && rU(f) && f.select(), 2;
}
function i0() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function iU() {
  return /Android/gi.test(window.navigator.userAgent);
}
function oU() {
  return i0() || iU();
}
function ci(A, e, t, r) {
  let n = Wr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function o0(A, e, t, r) {
  let n = Wr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [A, e, r]);
}
const Pg = 30;
function aU(A, e, t) {
  let r = Jn(A, "outside-click"), n = Wr(t), i = Q.useCallback(function(s, l) {
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
    return !AU(u, n0.Loose) && u.tabIndex !== -1 && s.preventDefault(), n.current(s, u);
  }, [n]), o = Q.useRef(null);
  ci(r, "pointerdown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ci(r, "mousedown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ci(r, "click", (s) => {
    oU() || o.current && (i(s, () => o.current), o.current = null);
  }, !0);
  let a = Q.useRef({ x: 0, y: 0 });
  ci(r, "touchstart", (s) => {
    a.current.x = s.touches[0].clientX, a.current.y = s.touches[0].clientY;
  }, !0), ci(r, "touchend", (s) => {
    let l = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(l.x - a.current.x) >= Pg || Math.abs(l.y - a.current.y) >= Pg)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), o0(r, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Lo(...A) {
  return Q.useMemo(() => Wd(...A), [...A]);
}
function a0(A, e, t, r) {
  let n = Wr(t);
  Q.useEffect(() => {
    A = A ?? window;
    function i(o) {
      n.current(o);
    }
    return A.addEventListener(e, i, r), () => A.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function sU() {
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
function lU() {
  return i0() ? { before({ doc: A, d: e, meta: t }) {
    function r(n) {
      return t.containers.flatMap((i) => i()).some((i) => i.contains(n));
    }
    e.microTask(() => {
      var n;
      if (window.getComputedStyle(A.documentElement).scrollBehavior !== "auto") {
        let a = fr();
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
function uU() {
  return { before({ doc: A, d: e }) {
    e.style(A.documentElement, "overflow", "hidden");
  } };
}
function cU(A) {
  let e = {};
  for (let t of A) Object.assign(e, t(e));
  return e;
}
let Fr = e0(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let r = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: fr(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(e), this.set(A, r), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let r = { doc: A, d: e, meta: cU(t) }, n = [lU(), sU(), uU()];
  n.forEach(({ before: i }) => i == null ? void 0 : i(r)), n.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: A }) {
  A.dispose();
}, TEARDOWN({ doc: A }) {
  this.delete(A);
} });
Fr.subscribe(() => {
  let A = Fr.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [t] of A) e.set(t, t.documentElement.style.overflow);
  for (let t of A.values()) {
    let r = e.get(t.doc) === "hidden", n = t.count !== 0;
    (n && !r || !n && r) && Fr.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Fr.dispatch("TEARDOWN", t);
  }
});
function fU(A, e, t = () => ({ containers: [] })) {
  let r = t0(Fr), n = e ? r.get(e) : void 0, i = n ? n.count > 0 : !1;
  return JA(() => {
    if (!(!e || !A)) return Fr.dispatch("PUSH", e, t), () => Fr.dispatch("POP", e, t);
  }, [A, e]), i;
}
function dU(A, e, t = () => [document.body]) {
  let r = Jn(A, "scroll-lock");
  fU(r, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], t] };
  });
}
function BU(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function gU(A = 0) {
  let [e, t] = Q.useState(A), r = Q.useCallback((s) => t(s), [e]), n = Q.useCallback((s) => t((l) => l | s), [e]), i = Q.useCallback((s) => (e & s) === s, [e]), o = Q.useCallback((s) => t((l) => l & ~s), [t]), a = Q.useCallback((s) => t((l) => l ^ s), [t]);
  return { flags: e, setFlag: r, addFlag: n, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var pU = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(pU || {});
function hU(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function wU(A, e, t, r) {
  let [n, i] = Q.useState(t), { hasFlag: o, addFlag: a, removeFlag: s } = gU(A && n ? 3 : 0), l = Q.useRef(!1), u = Q.useRef(!1), c = Xd();
  return JA(function f() {
    var B;
    if (!A) return;
    t && i(!0);
    let h = e.current;
    return h ? ((B = r == null ? void 0 : r.start) == null || B.call(r, t), mU(h, { inFlight: l, prepare() {
      u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (t ? (a(3), s(4)) : (a(4), s(2)));
    }, run() {
      u.current ? t ? (s(3), a(4)) : (s(4), a(3)) : t ? s(1) : a(1);
    }, done() {
      var w;
      u.current && typeof h.getAnimations == "function" && h.getAnimations().length > 0 || (l.current = !1, s(7), t || i(!1), (w = r == null ? void 0 : r.end) == null || w.call(r, t));
    } })) : t ? (a(3), c.nextFrame(() => f())) : void 0;
  }, [A, t, e, c]), A ? [n, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function mU(A, { prepare: e, run: t, done: r, inFlight: n }) {
  let i = fr();
  return CU(A, { prepare: e, inFlight: n }), i.nextFrame(() => {
    i.add(vU(A, r)), t();
  }), i.dispose;
}
function vU(A, e) {
  let t = BU(e), r = fr();
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
function CU(A, { inFlight: e, prepare: t }) {
  if (e != null && e.current) {
    t();
    return;
  }
  let r = A.style.transition;
  A.style.transition = "none", t(), A.offsetHeight, A.style.transition = r;
}
function Yd(A, e) {
  let t = Q.useRef([]), r = hA(A);
  Q.useEffect(() => {
    let n = [...t.current];
    for (let [i, o] of e.entries()) if (t.current[i] !== o) {
      let a = r(e, n);
      return t.current = e, a;
    }
  }, [r, ...e]);
}
function Zn(A) {
  return s0(A) ? (A.nodeName || "").toLowerCase() : "#document";
}
function Be(A) {
  var e;
  return (A == null || (e = A.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dr(A) {
  var e;
  return (e = (s0(A) ? A.ownerDocument : A.document) || window.document) == null ? void 0 : e.documentElement;
}
function s0(A) {
  return A instanceof Node || A instanceof Be(A).Node;
}
function re(A) {
  return A instanceof Element || A instanceof Be(A).Element;
}
function At(A) {
  return A instanceof HTMLElement || A instanceof Be(A).HTMLElement;
}
function _g(A) {
  return typeof ShadowRoot > "u" ? !1 : A instanceof ShadowRoot || A instanceof Be(A).ShadowRoot;
}
function bo(A) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: r,
    display: n
  } = Ve(A);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + t) && !["inline", "contents"].includes(n);
}
function QU(A) {
  return ["table", "td", "th"].includes(Zn(A));
}
function Ql(A) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return A.matches(e);
    } catch {
      return !1;
    }
  });
}
function zd(A) {
  const e = Jd(), t = Ve(A);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function yU(A) {
  let e = rr(A);
  for (; At(e) && !Nn(e); ) {
    if (Ql(e))
      return null;
    if (zd(e))
      return e;
    e = rr(e);
  }
  return null;
}
function Jd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nn(A) {
  return ["html", "body", "#document"].includes(Zn(A));
}
function Ve(A) {
  return Be(A).getComputedStyle(A);
}
function yl(A) {
  return re(A) ? {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  } : {
    scrollLeft: A.pageXOffset,
    scrollTop: A.pageYOffset
  };
}
function rr(A) {
  if (Zn(A) === "html")
    return A;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    A.assignedSlot || // DOM Element detected.
    A.parentNode || // ShadowRoot detected.
    _g(A) && A.host || // Fallback.
    dr(A)
  );
  return _g(e) ? e.host : e;
}
function l0(A) {
  const e = rr(A);
  return Nn(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : At(e) && bo(e) ? e : l0(e);
}
function Af(A, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const n = l0(A), i = n === ((r = A.ownerDocument) == null ? void 0 : r.body), o = Be(n);
  return i ? e.concat(o, o.visualViewport || [], bo(n) ? n : [], o.frameElement && t ? Af(o.frameElement) : []) : e.concat(n, Af(n, [], t));
}
const fo = Math.min, Hn = Math.max, Ks = Math.round, nr = (A) => ({
  x: A,
  y: A
}), FU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, UU = {
  start: "end",
  end: "start"
};
function ef(A, e, t) {
  return Hn(A, fo(e, t));
}
function To(A, e) {
  return typeof A == "function" ? A(e) : A;
}
function Pr(A) {
  return A.split("-")[0];
}
function ko(A) {
  return A.split("-")[1];
}
function u0(A) {
  return A === "x" ? "y" : "x";
}
function Zd(A) {
  return A === "y" ? "height" : "width";
}
function Mn(A) {
  return ["top", "bottom"].includes(Pr(A)) ? "y" : "x";
}
function qd(A) {
  return u0(Mn(A));
}
function EU(A, e, t) {
  t === void 0 && (t = !1);
  const r = ko(A), n = qd(A), i = Zd(n);
  let o = n === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Rs(o)), [o, Rs(o)];
}
function IU(A) {
  const e = Rs(A);
  return [tf(A), e, tf(e)];
}
function tf(A) {
  return A.replace(/start|end/g, (e) => UU[e]);
}
function HU(A, e, t) {
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
function xU(A, e, t, r) {
  const n = ko(A);
  let i = HU(Pr(A), t === "start", r);
  return n && (i = i.map((o) => o + "-" + n), e && (i = i.concat(i.map(tf)))), i;
}
function Rs(A) {
  return A.replace(/left|right|bottom|top/g, (e) => FU[e]);
}
function SU(A) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...A
  };
}
function c0(A) {
  return typeof A != "number" ? SU(A) : {
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
function Vg(A, e, t) {
  let {
    reference: r,
    floating: n
  } = A;
  const i = Mn(e), o = qd(e), a = Zd(o), s = Pr(e), l = i === "y", u = r.x + r.width / 2 - n.width / 2, c = r.y + r.height / 2 - n.height / 2, f = r[a] / 2 - n[a] / 2;
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
  switch (ko(e)) {
    case "start":
      B[o] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      B[o] += f * (t && l ? -1 : 1);
      break;
  }
  return B;
}
const LU = async (A, e, t) => {
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
  } = Vg(l, r, s), f = r, B = {}, h = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: g
    } = a[w], {
      x: d,
      y: p,
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
    u = d ?? u, c = p ?? c, B = {
      ...B,
      [y]: {
        ...B[y],
        ...m
      }
    }, v && h <= 50 && (h++, typeof v == "object" && (v.placement && (f = v.placement), v.rects && (l = v.rects === !0 ? await o.getElementRects({
      reference: A,
      floating: e,
      strategy: n
    }) : v.rects), {
      x: u,
      y: c
    } = Vg(l, f, s)), w = -1);
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
  } = To(e, A), h = c0(B), y = a[f ? c === "floating" ? "reference" : "floating" : c], g = Ns(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(y))) == null || t ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: s
  })), d = c === "floating" ? {
    x: r,
    y: n,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), m = await (i.isElement == null ? void 0 : i.isElement(p)) ? await (i.getScale == null ? void 0 : i.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = Ns(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: d,
    offsetParent: p,
    strategy: s
  }) : d);
  return {
    top: (g.top - v.top + h.top) / m.y,
    bottom: (v.bottom - g.bottom + h.bottom) / m.y,
    left: (g.left - v.left + h.left) / m.x,
    right: (v.right - g.right + h.right) / m.x
  };
}
const bU = (A) => ({
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
    } = To(A, e) || {};
    if (l == null)
      return {};
    const c = c0(u), f = {
      x: t,
      y: r
    }, B = qd(n), h = Zd(B), w = await o.getDimensions(l), y = B === "y", g = y ? "top" : "left", d = y ? "bottom" : "right", p = y ? "clientHeight" : "clientWidth", m = i.reference[h] + i.reference[B] - f[B] - i.floating[h], v = f[B] - i.reference[B], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let F = C ? C[p] : 0;
    (!F || !await (o.isElement == null ? void 0 : o.isElement(C))) && (F = a.floating[p] || i.floating[h]);
    const U = m / 2 - v / 2, E = F / 2 - w[h] / 2 - 1, S = fo(c[g], E), P = fo(c[d], E), V = S, M = F - w[h] - P, _ = F / 2 - w[h] / 2 + U, Z = ef(V, _, M), G = !s.arrow && ko(n) != null && _ !== Z && i.reference[h] / 2 - (_ < V ? S : P) - w[h] / 2 < 0, K = G ? _ < V ? _ - V : _ - M : 0;
    return {
      [B]: f[B] + K,
      data: {
        [B]: Z,
        centerOffset: _ - Z - K,
        ...G && {
          alignmentOffset: K
        }
      },
      reset: G
    };
  }
}), TU = function(A) {
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
        fallbackAxisSideDirection: h = "none",
        flipAlignment: w = !0,
        ...y
      } = To(A, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const g = Pr(n), d = Mn(a), p = Pr(a) === a, m = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), v = f || (p || !w ? [Rs(a)] : IU(a)), C = h !== "none";
      !f && C && v.push(...xU(a, w, h, m));
      const F = [a, ...v], U = await f0(e, y), E = [];
      let S = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(U[g]), c) {
        const _ = EU(n, o, m);
        E.push(U[_[0]], U[_[1]]);
      }
      if (S = [...S, {
        placement: n,
        overflows: E
      }], !E.every((_) => _ <= 0)) {
        var P, V;
        const _ = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, Z = F[_];
        if (Z)
          return {
            data: {
              index: _,
              overflows: S
            },
            reset: {
              placement: Z
            }
          };
        let G = (V = S.filter((K) => K.overflows[0] <= 0).sort((K, I) => K.overflows[1] - I.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!G)
          switch (B) {
            case "bestFit": {
              var M;
              const K = (M = S.filter((I) => {
                if (C) {
                  const x = Mn(I.placement);
                  return x === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((x) => x > 0).reduce((x, L) => x + L, 0)]).sort((I, x) => I[1] - x[1])[0]) == null ? void 0 : M[0];
              K && (G = K);
              break;
            }
            case "initialPlacement":
              G = a;
              break;
          }
        if (n !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
async function kU(A, e) {
  const {
    placement: t,
    platform: r,
    elements: n
  } = A, i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), o = Pr(t), a = ko(t), s = Mn(t) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, c = To(e, A);
  let {
    mainAxis: f,
    crossAxis: B,
    alignmentAxis: h
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
  return a && typeof h == "number" && (B = a === "end" ? h * -1 : h), s ? {
    x: B * u,
    y: f * l
  } : {
    x: f * l,
    y: B * u
  };
}
const OU = function(A) {
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
      } = e, s = await kU(e, A);
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
}, DU = function(A) {
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
      } = To(A, e), l = {
        x: t,
        y: r
      }, u = await f0(e, s), c = Mn(Pr(n)), f = u0(c);
      let B = l[f], h = l[c];
      if (i) {
        const y = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", d = B + u[y], p = B - u[g];
        B = ef(d, B, p);
      }
      if (o) {
        const y = c === "y" ? "top" : "left", g = c === "y" ? "bottom" : "right", d = h + u[y], p = h - u[g];
        h = ef(d, h, p);
      }
      const w = a.fn({
        ...e,
        [f]: B,
        [c]: h
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
  const e = Ve(A);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const n = At(A), i = n ? A.offsetWidth : t, o = n ? A.offsetHeight : r, a = Ks(t) !== i || Ks(r) !== o;
  return a && (t = i, r = o), {
    width: t,
    height: r,
    $: a
  };
}
function B0(A) {
  return re(A) ? A : A.contextElement;
}
function xn(A) {
  const e = B0(A);
  if (!At(e))
    return nr(1);
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
const KU = /* @__PURE__ */ nr(0);
function g0(A) {
  const e = Be(A);
  return !Jd() || !e.visualViewport ? KU : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function RU(A, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== Be(A) ? !1 : e;
}
function Bo(A, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const n = A.getBoundingClientRect(), i = B0(A);
  let o = nr(1);
  e && (r ? re(r) && (o = xn(r)) : o = xn(A));
  const a = RU(i, t, r) ? g0(i) : nr(0);
  let s = (n.left + a.x) / o.x, l = (n.top + a.y) / o.y, u = n.width / o.x, c = n.height / o.y;
  if (i) {
    const f = Be(i), B = r && re(r) ? Be(r) : r;
    let h = f, w = h.frameElement;
    for (; w && r && B !== h; ) {
      const y = xn(w), g = w.getBoundingClientRect(), d = Ve(w), p = g.left + (w.clientLeft + parseFloat(d.paddingLeft)) * y.x, m = g.top + (w.clientTop + parseFloat(d.paddingTop)) * y.y;
      s *= y.x, l *= y.y, u *= y.x, c *= y.y, s += p, l += m, h = Be(w), w = h.frameElement;
    }
  }
  return Ns({
    width: u,
    height: c,
    x: s,
    y: l
  });
}
function NU(A) {
  let {
    elements: e,
    rect: t,
    offsetParent: r,
    strategy: n
  } = A;
  const i = n === "fixed", o = dr(r), a = e ? Ql(e.floating) : !1;
  if (r === o || a && i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = nr(1);
  const u = nr(0), c = At(r);
  if ((c || !c && !i) && ((Zn(r) !== "body" || bo(o)) && (s = yl(r)), At(r))) {
    const f = Bo(r);
    l = xn(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - s.scrollLeft * l.x + u.x,
    y: t.y * l.y - s.scrollTop * l.y + u.y
  };
}
function MU(A) {
  return Array.from(A.getClientRects());
}
function p0(A) {
  return Bo(dr(A)).left + yl(A).scrollLeft;
}
function PU(A) {
  const e = dr(A), t = yl(A), r = A.ownerDocument.body, n = Hn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Hn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -t.scrollLeft + p0(A);
  const a = -t.scrollTop;
  return Ve(r).direction === "rtl" && (o += Hn(e.clientWidth, r.clientWidth) - n), {
    width: n,
    height: i,
    x: o,
    y: a
  };
}
function _U(A, e) {
  const t = Be(A), r = dr(A), n = t.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, s = 0;
  if (n) {
    i = n.width, o = n.height;
    const l = Jd();
    (!l || l && e === "fixed") && (a = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function VU(A, e) {
  const t = Bo(A, !0, e === "fixed"), r = t.top + A.clientTop, n = t.left + A.clientLeft, i = At(A) ? xn(A) : nr(1), o = A.clientWidth * i.x, a = A.clientHeight * i.y, s = n * i.x, l = r * i.y;
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Gg(A, e, t) {
  let r;
  if (e === "viewport")
    r = _U(A, t);
  else if (e === "document")
    r = PU(dr(A));
  else if (re(e))
    r = VU(e, t);
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
  const t = rr(A);
  return t === e || !re(t) || Nn(t) ? !1 : Ve(t).position === "fixed" || h0(t, e);
}
function GU(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let r = Af(A, [], !1).filter((a) => re(a) && Zn(a) !== "body"), n = null;
  const i = Ve(A).position === "fixed";
  let o = i ? rr(A) : A;
  for (; re(o) && !Nn(o); ) {
    const a = Ve(o), s = zd(o);
    !s && a.position === "fixed" && (n = null), (i ? !s && !n : !s && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || bo(o) && !s && h0(A, o)) ? r = r.filter((u) => u !== o) : n = a, o = rr(o);
  }
  return e.set(A, r), r;
}
function $U(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: n
  } = A;
  const o = [...t === "clippingAncestors" ? Ql(e) ? [] : GU(e, this._c) : [].concat(t), r], a = o[0], s = o.reduce((l, u) => {
    const c = Gg(e, u, n);
    return l.top = Hn(c.top, l.top), l.right = fo(c.right, l.right), l.bottom = fo(c.bottom, l.bottom), l.left = Hn(c.left, l.left), l;
  }, Gg(e, a, n));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function WU(A) {
  const {
    width: e,
    height: t
  } = d0(A);
  return {
    width: e,
    height: t
  };
}
function XU(A, e, t) {
  const r = At(e), n = dr(e), i = t === "fixed", o = Bo(A, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = nr(0);
  if (r || !r && !i)
    if ((Zn(e) !== "body" || bo(n)) && (a = yl(e)), r) {
      const c = Bo(e, !0, i, e);
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
function Uu(A) {
  return Ve(A).position === "static";
}
function $g(A, e) {
  return !At(A) || Ve(A).position === "fixed" ? null : e ? e(A) : A.offsetParent;
}
function w0(A, e) {
  const t = Be(A);
  if (Ql(A))
    return t;
  if (!At(A)) {
    let n = rr(A);
    for (; n && !Nn(n); ) {
      if (re(n) && !Uu(n))
        return n;
      n = rr(n);
    }
    return t;
  }
  let r = $g(A, e);
  for (; r && QU(r) && Uu(r); )
    r = $g(r, e);
  return r && Nn(r) && Uu(r) && !zd(r) ? t : r || yU(A) || t;
}
const jU = async function(A) {
  const e = this.getOffsetParent || w0, t = this.getDimensions, r = await t(A.floating);
  return {
    reference: XU(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function YU(A) {
  return Ve(A).direction === "rtl";
}
const zU = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NU,
  getDocumentElement: dr,
  getClippingRect: $U,
  getOffsetParent: w0,
  getElementRects: jU,
  getClientRects: MU,
  getDimensions: WU,
  getScale: xn,
  isElement: re,
  isRTL: YU
}, JU = OU, ZU = DU, qU = TU, Wg = bU, A1 = (A, e, t) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: zU,
    ...t
  }, i = {
    ...n.platform,
    _c: r
  };
  return LU(A, e, {
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
function jg(A) {
  const e = Q.useRef(A);
  return qa(() => {
    e.current = A;
  }), e;
}
function e1(A) {
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
  const [h, w] = Q.useState(null), [y, g] = Q.useState(null), d = Q.useCallback((K) => {
    K !== C.current && (C.current = K, w(K));
  }, []), p = Q.useCallback((K) => {
    K !== F.current && (F.current = K, g(K));
  }, []), m = i || h, v = o || y, C = Q.useRef(null), F = Q.useRef(null), U = Q.useRef(u), E = s != null, S = jg(s), P = jg(n), V = Q.useCallback(() => {
    if (!C.current || !F.current)
      return;
    const K = {
      placement: e,
      strategy: t,
      middleware: f
    };
    P.current && (K.platform = P.current), A1(C.current, F.current, K).then((I) => {
      const x = {
        ...I,
        isPositioned: !0
      };
      M.current && !Ms(U.current, x) && (U.current = x, vl.flushSync(() => {
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
        return S.current(m, v, V);
      V();
    }
  }, [m, v, V, S, E]);
  const _ = Q.useMemo(() => ({
    reference: C,
    floating: F,
    setReference: d,
    setFloating: p
  }), [d, p]), Z = Q.useMemo(() => ({
    reference: m,
    floating: v
  }), [m, v]), G = Q.useMemo(() => {
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
    update: V,
    refs: _,
    elements: Z,
    floatingStyles: G
  }), [u, V, _, Z, G]);
}
const t1 = (A) => {
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
}, r1 = (A, e) => ({
  ...JU(A),
  options: [A, e]
}), n1 = (A, e) => ({
  ...ZU(A),
  options: [A, e]
}), i1 = (A, e) => ({
  ...qU(A),
  options: [A, e]
}), o1 = (A, e) => ({
  ...t1(A),
  options: [A, e]
}), v0 = {
  ...tc
}, a1 = v0.useInsertionEffect, s1 = a1 || ((A) => A());
function l1(A) {
  const e = Q.useRef(() => {
  });
  return s1(() => {
    e.current = A;
  }), Q.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var rf = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
let Yg = !1, u1 = 0;
const zg = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + u1++
);
function c1() {
  const [A, e] = Q.useState(() => Yg ? zg() : void 0);
  return rf(() => {
    A == null && e(zg());
  }, []), Q.useEffect(() => {
    Yg = !0;
  }, []), A;
}
const f1 = v0.useId, d1 = f1 || c1;
function B1() {
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
const g1 = /* @__PURE__ */ Q.createContext(null), p1 = /* @__PURE__ */ Q.createContext(null), h1 = () => {
  var A;
  return ((A = Q.useContext(g1)) == null ? void 0 : A.id) || null;
}, w1 = () => Q.useContext(p1);
function m1(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = A, n = d1(), i = Q.useRef({}), [o] = Q.useState(() => B1()), a = h1() != null, [s, l] = Q.useState(r.reference), u = l1((B, h, w) => {
    i.current.openEvent = B ? h : void 0, o.emit("openchange", {
      open: B,
      event: h,
      reason: w,
      nested: a
    }), t == null || t(B, h, w);
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
function v1(A) {
  A === void 0 && (A = {});
  const {
    nodeId: e
  } = A, t = m1({
    ...A,
    elements: {
      reference: null,
      floating: null,
      ...A.elements
    }
  }), r = A.rootContext || t, n = r.elements, [i, o] = Q.useState(null), [a, s] = Q.useState(null), u = (n == null ? void 0 : n.reference) || i, c = Q.useRef(null), f = w1();
  rf(() => {
    u && (c.current = u);
  }, [u]);
  const B = e1({
    ...A,
    elements: {
      ...n,
      ...a && {
        reference: a
      }
    }
  }), h = Q.useCallback((p) => {
    const m = re(p) ? {
      getBoundingClientRect: () => p.getBoundingClientRect(),
      contextElement: p
    } : p;
    s(m), B.refs.setReference(m);
  }, [B.refs]), w = Q.useCallback((p) => {
    (re(p) || p === null) && (c.current = p, o(p)), (re(B.refs.reference.current) || B.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    p !== null && !re(p)) && B.refs.setReference(p);
  }, [B.refs]), y = Q.useMemo(() => ({
    ...B.refs,
    setReference: w,
    setPositionReference: h,
    domReference: c
  }), [B.refs, w, h]), g = Q.useMemo(() => ({
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
    const p = f == null ? void 0 : f.nodesRef.current.find((m) => m.id === e);
    p && (p.context = d);
  }), Q.useMemo(() => ({
    ...B,
    context: d,
    refs: y,
    elements: g
  }), [B, y, g, d]);
}
let Fl = Q.createContext(null);
Fl.displayName = "OpenClosedContext";
var Ke = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(Ke || {});
function Ul() {
  return Q.useContext(Fl);
}
function C1({ value: A, children: e }) {
  return N.createElement(Fl.Provider, { value: A }, e);
}
function Q1({ children: A }) {
  return N.createElement(Fl.Provider, { value: null }, A);
}
function y1(A) {
  function e() {
    document.readyState !== "loading" && (A(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
let Kt = [];
y1(() => {
  function A(e) {
    e.target instanceof HTMLElement && e.target !== document.body && Kt[0] !== e.target && (Kt.unshift(e.target), Kt = Kt.filter((t) => t != null && t.isConnected), Kt.splice(10));
  }
  window.addEventListener("click", A, { capture: !0 }), window.addEventListener("mousedown", A, { capture: !0 }), window.addEventListener("focus", A, { capture: !0 }), document.body.addEventListener("click", A, { capture: !0 }), document.body.addEventListener("mousedown", A, { capture: !0 }), document.body.addEventListener("focus", A, { capture: !0 });
});
function C0(A) {
  let e = hA(A), t = Q.useRef(!1);
  Q.useEffect(() => (t.current = !1, () => {
    t.current = !0, Cl(() => {
      t.current && e();
    });
  }), [e]);
}
function F1() {
  let A = typeof document > "u";
  return "useSyncExternalStore" in tc ? ((e) => e.useSyncExternalStore)(tc)(() => () => {
  }, () => !1, () => !A) : !1;
}
function Oo() {
  let A = F1(), [e, t] = Q.useState(Lr.isHandoffComplete);
  return e && Lr.isHandoffComplete === !1 && t(!1), Q.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), Q.useEffect(() => Lr.handoff(), []), A ? !1 : e;
}
let Q0 = Q.createContext(!1);
function U1() {
  return Q.useContext(Q0);
}
function Jg(A) {
  return N.createElement(Q0.Provider, { value: A.force }, A.children);
}
function E1(A) {
  let e = U1(), t = Q.useContext(F0), r = Lo(A), [n, i] = Q.useState(() => {
    var o;
    if (!e && t !== null) return (o = t.current) != null ? o : null;
    if (Lr.isServer) return null;
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
let y0 = Q.Fragment, I1 = se(function(A, e) {
  let t = A, r = Q.useRef(null), n = et(NF((u) => {
    r.current = u;
  }), e), i = Lo(r), o = E1(r), [a] = Q.useState(() => {
    var u;
    return Lr.isServer ? null : (u = i == null ? void 0 : i.createElement("div")) != null ? u : null;
  }), s = Q.useContext(nf), l = Oo();
  return JA(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), JA(() => {
    if (a && s) return s.register(a);
  }, [s, a]), C0(() => {
    var u;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((u = o.parentElement) == null || u.removeChild(o)));
  }), l ? !o || !a ? null : vl.createPortal(Se({ ourProps: { ref: n }, theirProps: t, slot: {}, defaultTag: y0, name: "Portal" }), a) : null;
});
function H1(A, e) {
  let t = et(e), { enabled: r = !0, ...n } = A;
  return r ? N.createElement(I1, { ...n, ref: t }) : Se({ ourProps: { ref: t }, theirProps: n, slot: {}, defaultTag: y0, name: "Portal" });
}
let x1 = Q.Fragment, F0 = Q.createContext(null);
function S1(A, e) {
  let { target: t, ...r } = A, n = { ref: et(e) };
  return N.createElement(F0.Provider, { value: t }, Se({ ourProps: n, theirProps: r, defaultTag: x1, name: "Popover.Group" }));
}
let nf = Q.createContext(null);
function L1() {
  let A = Q.useContext(nf), e = Q.useRef([]), t = hA((i) => (e.current.push(i), A && A.register(i), () => r(i))), r = hA((i) => {
    let o = e.current.indexOf(i);
    o !== -1 && e.current.splice(o, 1), A && A.unregister(i);
  }), n = Q.useMemo(() => ({ register: t, unregister: r, portals: e }), [t, r, e]);
  return [e, Q.useMemo(() => function({ children: i }) {
    return N.createElement(nf.Provider, { value: n }, i);
  }, [n])];
}
let b1 = se(H1), U0 = se(S1), T1 = Object.assign(b1, { Group: U0 });
function k1(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let r = Jn(A, "escape");
  a0(e, "keydown", (n) => {
    r && (n.defaultPrevented || n.key === A0.Escape && t(n));
  });
}
function O1() {
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
function D1({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
  var r;
  let n = Q.useRef((r = t == null ? void 0 : t.current) != null ? r : null), i = Lo(n), o = hA(() => {
    var a, s, l;
    let u = [];
    for (let c of A) c !== null && (c instanceof HTMLElement ? u.push(c) : "current" in c && c.current instanceof HTMLElement && u.push(c.current));
    if (e != null && e.current) for (let c of e.current) u.push(c);
    for (let c of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(n.current) || c.contains((l = (s = n.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || u.some((f) => c.contains(f)) || u.push(c));
    return u;
  });
  return { resolveContainers: o, contains: hA((a) => o().some((s) => s.contains(a))), mainTreeNodeRef: n, MainTreeNode: Q.useMemo(() => function() {
    return t != null ? null : N.createElement(zc, { features: Ds.Hidden, ref: n });
  }, [n, t]) };
}
function AB() {
  let A = Q.useRef(!1);
  return JA(() => (A.current = !0, () => {
    A.current = !1;
  }), []), A;
}
var vi = ((A) => (A[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A))(vi || {});
function K1() {
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
let R1 = "div";
var mr = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(mr || {});
function N1(A, e) {
  let t = Q.useRef(null), r = et(t, e), { initialFocus: n, initialFocusFallback: i, containers: o, features: a = 15, ...s } = A;
  Oo() || (a = 0);
  let l = Lo(t);
  V1(a, { ownerDocument: l });
  let u = G1(a, { ownerDocument: l, container: t, initialFocus: n, initialFocusFallback: i });
  $1(a, { ownerDocument: l, container: t, containers: o, previousActiveElement: u });
  let c = K1(), f = hA((g) => {
    let d = t.current;
    d && ((p) => p())(() => {
      tr(c.current, { [vi.Forwards]: () => {
        Mi(d, lt.First, { skipElements: [g.relatedTarget, i] });
      }, [vi.Backwards]: () => {
        Mi(d, lt.Last, { skipElements: [g.relatedTarget, i] });
      } });
    });
  }), B = Jn(!!(a & 2), "focus-trap#tab-lock"), h = Xd(), w = Q.useRef(!1), y = { ref: r, onKeyDown(g) {
    g.key == "Tab" && (w.current = !0, h.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(g) {
    if (!(a & 4)) return;
    let d = E0(o);
    t.current instanceof HTMLElement && d.add(t.current);
    let p = g.relatedTarget;
    p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (I0(d, p) || (w.current ? Mi(t.current, tr(c.current, { [vi.Forwards]: () => lt.Next, [vi.Backwards]: () => lt.Previous }) | lt.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && dt(g.target)));
  } };
  return N.createElement(N.Fragment, null, B && N.createElement(zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }), Se({ ourProps: y, theirProps: s, defaultTag: R1, name: "FocusTrap" }), B && N.createElement(zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }));
}
let M1 = se(N1), P1 = Object.assign(M1, { features: mr });
function _1(A = !0) {
  let e = Q.useRef(Kt.slice());
  return Yd(([t], [r]) => {
    r === !0 && t === !1 && Cl(() => {
      e.current.splice(0);
    }), r === !1 && t === !0 && (e.current = Kt.slice());
  }, [A, Kt, e]), hA(() => {
    var t;
    return (t = e.current.find((r) => r != null && r.isConnected)) != null ? t : null;
  });
}
function V1(A, { ownerDocument: e }) {
  let t = !!(A & 8), r = _1(t);
  Yd(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && dt(r());
  }, [t]), C0(() => {
    t && dt(r());
  });
}
function G1(A, { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: n }) {
  let i = Q.useRef(null), o = Jn(!!(A & 1), "focus-trap#initial-focus"), a = AB();
  return Yd(() => {
    if (A === 0) return;
    if (!o) {
      n != null && n.current && dt(n.current);
      return;
    }
    let s = t.current;
    s && Cl(() => {
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
      if (r != null && r.current) dt(r.current);
      else {
        if (A & 16) {
          if (Mi(s, lt.First | lt.AutoFocus) !== qc.Error) return;
        } else if (Mi(s, lt.First) !== qc.Error) return;
        if (n != null && n.current && (dt(n.current), (e == null ? void 0 : e.activeElement) === n.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n, o, A]), i;
}
function $1(A, { ownerDocument: e, container: t, containers: r, previousActiveElement: n }) {
  let i = AB(), o = !!(A & 4);
  a0(e == null ? void 0 : e.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let s = E0(r);
    t.current instanceof HTMLElement && s.add(t.current);
    let l = n.current;
    if (!l) return;
    let u = a.target;
    u && u instanceof HTMLElement ? I0(s, u) ? (n.current = u, dt(u)) : (a.preventDefault(), a.stopPropagation(), dt(l)) : dt(n.current);
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
let El = Q.createContext(null);
El.displayName = "TransitionContext";
var W1 = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(W1 || {});
function X1() {
  let A = Q.useContext(El);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
function j1() {
  let A = Q.useContext(Il);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
let Il = Q.createContext(null);
Il.displayName = "NestingContext";
function Hl(A) {
  return "children" in A ? Hl(A.children) : A.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function x0(A, e) {
  let t = Wr(A), r = Q.useRef([]), n = AB(), i = Xd(), o = hA((B, h = Mt.Hidden) => {
    let w = r.current.findIndex(({ el: y }) => y === B);
    w !== -1 && (tr(h, { [Mt.Unmount]() {
      r.current.splice(w, 1);
    }, [Mt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var y;
      !Hl(r) && n.current && ((y = t.current) == null || y.call(t));
    }));
  }), a = hA((B) => {
    let h = r.current.find(({ el: w }) => w === B);
    return h ? h.state !== "visible" && (h.state = "visible") : r.current.push({ el: B, state: "visible" }), () => o(B, Mt.Unmount);
  }), s = Q.useRef([]), l = Q.useRef(Promise.resolve()), u = Q.useRef({ enter: [], leave: [] }), c = hA((B, h, w) => {
    s.current.splice(0), e && (e.chains.current[h] = e.chains.current[h].filter(([y]) => y !== B)), e == null || e.chains.current[h].push([B, new Promise((y) => {
      s.current.push(y);
    })]), e == null || e.chains.current[h].push([B, new Promise((y) => {
      Promise.all(u.current[h].map(([g, d]) => d)).then(() => y());
    })]), h === "enter" ? l.current = l.current.then(() => e == null ? void 0 : e.wait.current).then(() => w(h)) : w(h);
  }), f = hA((B, h, w) => {
    Promise.all(u.current[h].splice(0).map(([y, g]) => g)).then(() => {
      var y;
      (y = s.current.shift()) == null || y();
    }).then(() => w(h));
  });
  return Q.useMemo(() => ({ children: r, register: a, unregister: o, onStart: c, onStop: f, wait: l, chains: u }), [a, o, r, c, f, u, l]);
}
let S0 = Q.Fragment, L0 = Os.RenderStrategy;
function Y1(A, e) {
  var t, r;
  let { transition: n = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: s, enter: l, enterFrom: u, enterTo: c, entered: f, leave: B, leaveFrom: h, leaveTo: w, ...y } = A, g = Q.useRef(null), d = H0(A), p = et(...d ? [g, e] : e === null ? [] : [e]), m = (t = y.unmount) == null || t ? Mt.Unmount : Mt.Hidden, { show: v, appear: C, initial: F } = X1(), [U, E] = Q.useState(v ? "visible" : "hidden"), S = j1(), { register: P, unregister: V } = S;
  JA(() => P(g), [P, g]), JA(() => {
    if (m === Mt.Hidden && g.current) {
      if (v && U !== "visible") {
        E("visible");
        return;
      }
      return tr(U, { hidden: () => V(g), visible: () => P(g) });
    }
  }, [U, g, P, V, v, m]);
  let M = Oo();
  JA(() => {
    if (d && M && U === "visible" && g.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, U, M, d]);
  let _ = F && !C, Z = C && v && F, G = Q.useRef(!1), K = x0(() => {
    G.current || (E("hidden"), V(g));
  }, S), I = hA((BA) => {
    G.current = !0;
    let gA = BA ? "enter" : "leave";
    K.onStart(g, gA, (rA) => {
      rA === "enter" ? i == null || i() : rA === "leave" && (a == null || a());
    });
  }), x = hA((BA) => {
    let gA = BA ? "enter" : "leave";
    G.current = !1, K.onStop(g, gA, (rA) => {
      rA === "enter" ? o == null || o() : rA === "leave" && (s == null || s());
    }), gA === "leave" && !Hl(K) && (E("hidden"), V(g));
  });
  Q.useEffect(() => {
    d && n || (I(v), x(v));
  }, [v, d, n]);
  let L = !(!n || !d || !M || _), [, R] = wU(L, g, v, { start: I, end: x }), X = wr({ ref: p, className: ((r = Yc(y.className, Z && l, Z && u, R.enter && l, R.enter && R.closed && u, R.enter && !R.closed && c, R.leave && B, R.leave && !R.closed && h, R.leave && R.closed && w, !R.transition && v && f)) == null ? void 0 : r.trim()) || void 0, ...hU(R) }), dA = 0;
  return U === "visible" && (dA |= Ke.Open), U === "hidden" && (dA |= Ke.Closed), R.enter && (dA |= Ke.Opening), R.leave && (dA |= Ke.Closing), N.createElement(Il.Provider, { value: K }, N.createElement(C1, { value: dA }, Se({ ourProps: X, theirProps: y, defaultTag: S0, features: L0, visible: U === "visible", name: "Transition.Child" })));
}
function z1(A, e) {
  let { show: t, appear: r = !1, unmount: n = !0, ...i } = A, o = Q.useRef(null), a = H0(A), s = et(...a ? [o, e] : e === null ? [] : [e]);
  Oo();
  let l = Ul();
  if (t === void 0 && l !== null && (t = (l & Ke.Open) === Ke.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, c] = Q.useState(t ? "visible" : "hidden"), f = x0(() => {
    t || c("hidden");
  }), [B, h] = Q.useState(!0), w = Q.useRef([t]);
  JA(() => {
    B !== !1 && w.current[w.current.length - 1] !== t && (w.current.push(t), h(!1));
  }, [w, t]);
  let y = Q.useMemo(() => ({ show: t, appear: r, initial: B }), [t, r, B]);
  r0(t, o, () => c("hidden")), JA(() => {
    t ? c("visible") : !Hl(f) && o.current !== null && c("hidden");
  }, [t, f]);
  let g = { unmount: n }, d = hA(() => {
    var m;
    B && h(!1), (m = A.beforeEnter) == null || m.call(A);
  }), p = hA(() => {
    var m;
    B && h(!1), (m = A.beforeLeave) == null || m.call(A);
  });
  return N.createElement(Il.Provider, { value: f }, N.createElement(El.Provider, { value: y }, Se({ ourProps: { ...g, as: Q.Fragment, children: N.createElement(b0, { ref: s, ...g, ...i, beforeEnter: d, beforeLeave: p }) }, theirProps: {}, defaultTag: Q.Fragment, features: L0, visible: u === "visible", name: "Transition" })));
}
function J1(A, e) {
  let t = Q.useContext(El) !== null, r = Ul() !== null;
  return N.createElement(N.Fragment, null, !t && r ? N.createElement(of, { ref: e, ...A }) : N.createElement(b0, { ref: e, ...A }));
}
let of = se(z1), b0 = se(Y1), go = se(J1), T0 = Object.assign(of, { Child: go, Root: of });
var Z1 = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(Z1 || {}), q1 = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(q1 || {});
let AE = { 0(A, e) {
  return A.titleId === e.id ? A : { ...A, titleId: e.id };
} }, eB = Q.createContext(null);
eB.displayName = "DialogContext";
function xl(A) {
  let e = Q.useContext(eB);
  if (e === null) {
    let t = new Error(`<${A} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, xl), t;
  }
  return e;
}
function eE(A, e) {
  return tr(e.type, AE, A, e);
}
let Zg = se(function(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-${t}`, open: n, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: s = !0, __demoMode: l = !1, ...u } = A, c = Q.useRef(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (c.current || (c.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Ul();
  n === void 0 && f !== null && (n = (f & Ke.Open) === Ke.Open);
  let B = Q.useRef(null), h = et(B, e), w = Lo(B), y = n ? 0 : 1, [g, d] = Q.useReducer(eE, { titleId: null, descriptionId: null, panelRef: Q.createRef() }), p = hA(() => i(!1)), m = hA((L) => d({ type: 0, id: L })), v = Oo() ? y === 0 : !1, [C, F] = L1(), U = { get current() {
    var L;
    return (L = g.panelRef.current) != null ? L : B.current;
  } }, { resolveContainers: E, mainTreeNodeRef: S, MainTreeNode: P } = D1({ portals: C, defaultContainers: [U] }), V = f !== null ? (f & Ke.Closing) === Ke.Closing : !1;
  YF(l || V ? !1 : v, { allowed: hA(() => {
    var L, R;
    return [(R = (L = B.current) == null ? void 0 : L.closest("[data-headlessui-portal]")) != null ? R : null];
  }), disallowed: hA(() => {
    var L, R;
    return [(R = (L = S.current) == null ? void 0 : L.closest("body > *:not(#headlessui-portal-root)")) != null ? R : null];
  }) }), aU(v, E, (L) => {
    L.preventDefault(), p();
  }), k1(v, w == null ? void 0 : w.defaultView, (L) => {
    L.preventDefault(), L.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), p();
  }), dU(l || V ? !1 : v, w, E), r0(v, B, p);
  let [M, _] = MF(), Z = Q.useMemo(() => [{ dialogState: y, close: p, setTitleId: m }, g], [y, g, p, m]), G = Q.useMemo(() => ({ open: y === 0 }), [y]), K = { ref: h, id: r, role: a, tabIndex: -1, "aria-modal": l ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": g.titleId, "aria-describedby": M }, I = !O1(), x = mr.None;
  return v && !l && (x |= mr.RestoreFocus, x |= mr.TabLock, s && (x |= mr.AutoFocus), I && (x |= mr.InitialFocus)), N.createElement(Q1, null, N.createElement(Jg, { force: !0 }, N.createElement(T1, null, N.createElement(eB.Provider, { value: Z }, N.createElement(U0, { target: B }, N.createElement(Jg, { force: !1 }, N.createElement(_, { slot: G }, N.createElement(F, null, N.createElement(P1, { initialFocus: o, initialFocusFallback: B, containers: E, features: x }, N.createElement(WF, { value: p }, Se({ ourProps: K, theirProps: u, slot: G, defaultTag: tE, features: rE, visible: y === 0, name: "Dialog" })))))))))), N.createElement(RF, null, N.createElement(P, null)));
}), tE = "div", rE = Os.RenderStrategy | Os.Static;
function nE(A, e) {
  let { transition: t = !1, open: r, ...n } = A, i = Ul(), o = A.hasOwnProperty("open") || i !== null, a = A.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return i === null && r !== void 0 && !n.static ? N.createElement(T0, { show: r, transition: t, unmount: n.unmount }, N.createElement(Zg, { ref: e, ...n })) : N.createElement(Zg, { ref: e, open: r, ...n });
}
let iE = "div";
function oE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-panel-${t}`, transition: n = !1, ...i } = A, [{ dialogState: o }, a] = xl("Dialog.Panel"), s = et(e, a.panelRef), l = Q.useMemo(() => ({ open: o === 0 }), [o]), u = hA((c) => {
    c.stopPropagation();
  });
  return N.createElement(n ? go : Q.Fragment, null, Se({ ourProps: { ref: s, id: r, onClick: u }, theirProps: i, slot: l, defaultTag: iE, name: "Dialog.Panel" }));
}
let aE = "div";
function sE(A, e) {
  let { transition: t = !1, ...r } = A, [{ dialogState: n }] = xl("Dialog.Backdrop"), i = Q.useMemo(() => ({ open: n === 0 }), [n]);
  return N.createElement(t ? go : Q.Fragment, null, Se({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: r, slot: i, defaultTag: aE, name: "Dialog.Backdrop" }));
}
let lE = "h2";
function uE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-title-${t}`, ...n } = A, [{ dialogState: i, setTitleId: o }] = xl("Dialog.Title"), a = et(e);
  Q.useEffect(() => (o(r), () => o(null)), [r, o]);
  let s = Q.useMemo(() => ({ open: i === 0 }), [i]);
  return Se({ ourProps: { ref: a, id: r }, theirProps: n, slot: s, defaultTag: lE, name: "Dialog.Title" });
}
let cE = se(nE), k0 = se(oE);
se(sE);
let fE = se(uE), dE = Object.assign(cE, { Panel: k0, Title: fE, Description: GF });
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
function BE(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function gE(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function pE(A, e, t) {
  return e && gE(A.prototype, e), Object.defineProperty(A, "prototype", {
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
function tB(A, e) {
  return wE(A) || vE(A, e) || O0(A, e) || QE();
}
function Do(A) {
  return hE(A) || mE(A) || O0(A) || CE();
}
function hE(A) {
  if (Array.isArray(A)) return af(A);
}
function wE(A) {
  if (Array.isArray(A)) return A;
}
function mE(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function vE(A, e) {
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
function CE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ap = function() {
}, rB = {}, D0 = {}, K0 = null, R0 = {
  mark: Ap,
  measure: Ap
};
try {
  typeof window < "u" && (rB = window), typeof document < "u" && (D0 = document), typeof MutationObserver < "u" && (K0 = MutationObserver), typeof performance < "u" && (R0 = performance);
} catch {
}
var yE = rB.navigator || {}, ep = yE.userAgent, tp = ep === void 0 ? "" : ep, ir = rB, uA = D0, rp = K0, aa = R0;
ir.document;
var Ft = !!uA.documentElement && !!uA.head && typeof uA.addEventListener == "function" && typeof uA.createElement == "function", N0 = ~tp.indexOf("MSIE") || ~tp.indexOf("Trident/"), sa, la, ua, ca, fa, mt = "___FONT_AWESOME___", sf = 16, M0 = "fa", P0 = "svg-inline--fa", _r = "data-fa-i2svg", lf = "data-fa-pseudo-element", FE = "data-fa-pseudo-element-pending", nB = "data-prefix", iB = "data-icon", np = "fontawesome-i2svg", UE = "async", EE = ["HTML", "HEAD", "STYLE", "SCRIPT"], _0 = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), sA = "classic", CA = "sharp", oB = [sA, CA];
function Ko(A) {
  return new Proxy(A, {
    get: function(t, r) {
      return r in t ? t[r] : t[sA];
    }
  });
}
var po = Ko((sa = {}, LA(sa, sA, {
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
}), sa)), ho = Ko((la = {}, LA(la, sA, {
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
}), la)), wo = Ko((ua = {}, LA(ua, sA, {
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
}), ua)), IE = Ko((ca = {}, LA(ca, sA, {
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
}), ca)), HE = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, V0 = "fa-layers-text", xE = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, SE = Ko((fa = {}, LA(fa, sA, {
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
}), fa)), G0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], LE = G0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), bE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ur = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, mo = /* @__PURE__ */ new Set();
Object.keys(ho[sA]).map(mo.add.bind(mo));
Object.keys(ho[CA]).map(mo.add.bind(mo));
var TE = [].concat(oB, Do(mo), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ur.GROUP, Ur.SWAP_OPACITY, Ur.PRIMARY, Ur.SECONDARY]).concat(G0.map(function(A) {
  return "".concat(A, "x");
})).concat(LE.map(function(A) {
  return "w-".concat(A);
})), Pi = ir.FontAwesomeConfig || {};
function kE(A) {
  var e = uA.querySelector("script[" + A + "]");
  if (e)
    return e.getAttribute(A);
}
function OE(A) {
  return A === "" ? !0 : A === "false" ? !1 : A === "true" ? !0 : A;
}
if (uA && typeof uA.querySelector == "function") {
  var DE = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  DE.forEach(function(A) {
    var e = tB(A, 2), t = e[0], r = e[1], n = OE(kE(t));
    n != null && (Pi[r] = n);
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
Pi.familyPrefix && (Pi.cssPrefix = Pi.familyPrefix);
var Pn = k(k({}, $0), Pi);
Pn.autoReplaceSvg || (Pn.observeMutations = !1);
var D = {};
Object.keys($0).forEach(function(A) {
  Object.defineProperty(D, A, {
    enumerable: !0,
    set: function(t) {
      Pn[A] = t, _i.forEach(function(r) {
        return r(D);
      });
    },
    get: function() {
      return Pn[A];
    }
  });
});
Object.defineProperty(D, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Pn.cssPrefix = e, _i.forEach(function(t) {
      return t(D);
    });
  },
  get: function() {
    return Pn.cssPrefix;
  }
});
ir.FontAwesomeConfig = D;
var _i = [];
function KE(A) {
  return _i.push(A), function() {
    _i.splice(_i.indexOf(A), 1);
  };
}
var Ht = sf, Je = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function RE(A) {
  if (!(!A || !Ft)) {
    var e = uA.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = A;
    for (var t = uA.head.childNodes, r = null, n = t.length - 1; n > -1; n--) {
      var i = t[n], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return uA.head.insertBefore(e, r), A;
  }
}
var NE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function vo() {
  for (var A = 12, e = ""; A-- > 0; )
    e += NE[Math.random() * 62 | 0];
  return e;
}
function qn(A) {
  for (var e = [], t = (A || []).length >>> 0; t--; )
    e[t] = A[t];
  return e;
}
function aB(A) {
  return A.classList ? qn(A.classList) : (A.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function W0(A) {
  return "".concat(A).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ME(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat(W0(A[t]), '" ');
  }, "").trim();
}
function Sl(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, ": ").concat(A[t].trim(), ";");
  }, "");
}
function sB(A) {
  return A.size !== Je.size || A.x !== Je.x || A.y !== Je.y || A.rotate !== Je.rotate || A.flipX || A.flipY;
}
function PE(A) {
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
function _E(A) {
  var e = A.transform, t = A.width, r = t === void 0 ? sf : t, n = A.height, i = n === void 0 ? sf : n, o = A.startCentered, a = o === void 0 ? !1 : o, s = "";
  return a && N0 ? s += "translate(".concat(e.x / Ht - r / 2, "em, ").concat(e.y / Ht - i / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(e.x / Ht, "em), calc(-50% + ").concat(e.y / Ht, "em)) ") : s += "translate(".concat(e.x / Ht, "em, ").concat(e.y / Ht, "em) "), s += "scale(".concat(e.size / Ht * (e.flipX ? -1 : 1), ", ").concat(e.size / Ht * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
}
var VE = `:root, :host {
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
  var A = M0, e = P0, t = D.cssPrefix, r = D.replacementClass, n = VE;
  if (t !== A || r !== e) {
    var i = new RegExp("\\.".concat(A, "\\-"), "g"), o = new RegExp("\\--".concat(A, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    n = n.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(a, ".".concat(r));
  }
  return n;
}
var ip = !1;
function Eu() {
  D.autoAddCss && !ip && (RE(X0()), ip = !0);
}
var GE = {
  mixout: function() {
    return {
      dom: {
        css: X0,
        insertCss: Eu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Eu();
      },
      beforeI2svg: function() {
        Eu();
      }
    };
  }
}, vt = ir || {};
vt[mt] || (vt[mt] = {});
vt[mt].styles || (vt[mt].styles = {});
vt[mt].hooks || (vt[mt].hooks = {});
vt[mt].shims || (vt[mt].shims = []);
var Re = vt[mt], j0 = [], $E = function A() {
  uA.removeEventListener("DOMContentLoaded", A), _s = 1, j0.map(function(e) {
    return e();
  });
}, _s = !1;
Ft && (_s = (uA.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(uA.readyState), _s || uA.addEventListener("DOMContentLoaded", $E));
function WE(A) {
  Ft && (_s ? setTimeout(A, 0) : j0.push(A));
}
function Ro(A) {
  var e = A.tag, t = A.attributes, r = t === void 0 ? {} : t, n = A.children, i = n === void 0 ? [] : n;
  return typeof A == "string" ? W0(A) : "<".concat(e, " ").concat(ME(r), ">").concat(i.map(Ro).join(""), "</").concat(e, ">");
}
function op(A, e, t) {
  if (A && A[e] && A[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: A[e][t]
    };
}
var Iu = function(e, t, r, n) {
  var i = Object.keys(e), o = i.length, a = t, s, l, u;
  for (r === void 0 ? (s = 1, u = e[i[0]]) : (s = 0, u = r); s < o; s++)
    l = i[s], u = a(u, e[l], l, e);
  return u;
};
function XE(A) {
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
  var e = XE(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function jE(A, e) {
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
  typeof Re.hooks.addPack == "function" && !n ? Re.hooks.addPack(A, ap(e)) : Re.styles[A] = k(k({}, Re.styles[A] || {}), i), A === "fas" && cf("fa", e);
}
var da, Ba, ga, hn = Re.styles, YE = Re.shims, zE = (da = {}, LA(da, sA, Object.values(wo[sA])), LA(da, CA, Object.values(wo[CA])), da), lB = null, Y0 = {}, z0 = {}, J0 = {}, Z0 = {}, q0 = {}, JE = (Ba = {}, LA(Ba, sA, Object.keys(po[sA])), LA(Ba, CA, Object.keys(po[CA])), Ba);
function ZE(A) {
  return ~TE.indexOf(A);
}
function qE(A, e) {
  var t = e.split("-"), r = t[0], n = t.slice(1).join("-");
  return r === A && n !== "" && !ZE(n) ? n : null;
}
var Av = function() {
  var e = function(i) {
    return Iu(hn, function(o, a, s) {
      return o[s] = Iu(a, i, {}), o;
    }, {});
  };
  Y0 = e(function(n, i, o) {
    if (i[3] && (n[i[3]] = o), i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "number";
      });
      a.forEach(function(s) {
        n[s.toString(16)] = o;
      });
    }
    return n;
  }), z0 = e(function(n, i, o) {
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
  var t = "far" in hn || D.autoFetchSvg, r = Iu(YE, function(n, i) {
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
  J0 = r.names, Z0 = r.unicodes, lB = Ll(D.styleDefault, {
    family: D.familyDefault
  });
};
KE(function(A) {
  lB = Ll(A.styleDefault, {
    family: D.familyDefault
  });
});
Av();
function uB(A, e) {
  return (Y0[A] || {})[e];
}
function AI(A, e) {
  return (z0[A] || {})[e];
}
function Er(A, e) {
  return (q0[A] || {})[e];
}
function ev(A) {
  return J0[A] || {
    prefix: null,
    iconName: null
  };
}
function eI(A) {
  var e = Z0[A], t = uB("fas", A);
  return e || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function or() {
  return lB;
}
var cB = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ll(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, r = t === void 0 ? sA : t, n = po[r][A], i = ho[r][A] || ho[r][n], o = A in Re.styles ? A : null;
  return i || o || null;
}
var sp = (ga = {}, LA(ga, sA, Object.keys(wo[sA])), LA(ga, CA, Object.keys(wo[CA])), ga);
function bl(A) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, n = r === void 0 ? !1 : r, i = (e = {}, LA(e, sA, "".concat(D.cssPrefix, "-").concat(sA)), LA(e, CA, "".concat(D.cssPrefix, "-").concat(CA)), e), o = null, a = sA;
  (A.includes(i[sA]) || A.some(function(l) {
    return sp[sA].includes(l);
  })) && (a = sA), (A.includes(i[CA]) || A.some(function(l) {
    return sp[CA].includes(l);
  })) && (a = CA);
  var s = A.reduce(function(l, u) {
    var c = qE(D.cssPrefix, u);
    if (hn[u] ? (u = zE[a].includes(u) ? IE[a][u] : u, o = u, l.prefix = u) : JE[a].indexOf(u) > -1 ? (o = u, l.prefix = Ll(u, {
      family: a
    })) : c ? l.iconName = c : u !== D.replacementClass && u !== i[sA] && u !== i[CA] && l.rest.push(u), !n && l.prefix && l.iconName) {
      var f = o === "fa" ? ev(l.iconName) : {}, B = Er(l.prefix, l.iconName);
      f.prefix && (o = null), l.iconName = f.iconName || B || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !hn.far && hn.fas && !D.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, cB());
  return (A.includes("fa-brands") || A.includes("fab")) && (s.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (s.prefix = "fad"), !s.prefix && a === CA && (hn.fass || D.autoFetchSvg) && (s.prefix = "fass", s.iconName = Er(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = or() || "fas"), s;
}
var tI = /* @__PURE__ */ function() {
  function A() {
    BE(this, A), this.definitions = {};
  }
  return pE(A, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        t.definitions[a] = k(k({}, t.definitions[a] || {}), o[a]), cf(a, o[a]);
        var s = wo[sA][a];
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
}(), lp = [], wn = {}, Sn = {}, rI = Object.keys(Sn);
function nI(A, e) {
  var t = e.mixoutsTo;
  return lp = A, wn = {}, Object.keys(Sn).forEach(function(r) {
    rI.indexOf(r) === -1 && delete Sn[r];
  }), lp.forEach(function(r) {
    var n = r.mixout ? r.mixout() : {};
    if (Object.keys(n).forEach(function(o) {
      typeof n[o] == "function" && (t[o] = n[o]), Ps(n[o]) === "object" && Object.keys(n[o]).forEach(function(a) {
        t[o] || (t[o] = {}), t[o][a] = n[o][a];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        wn[o] || (wn[o] = []), wn[o].push(i[o]);
      });
    }
    r.provides && r.provides(Sn);
  }), t;
}
function ff(A, e) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++)
    r[n - 2] = arguments[n];
  var i = wn[A] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(r));
  }), e;
}
function Vr(A) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var n = wn[A] || [];
  n.forEach(function(i) {
    i.apply(null, t);
  });
}
function Ct() {
  var A = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Sn[A] ? Sn[A].apply(null, e) : void 0;
}
function df(A) {
  A.prefix === "fa" && (A.prefix = "fas");
  var e = A.iconName, t = A.prefix || or();
  if (e)
    return e = Er(t, e) || e, op(tv.definitions, t, e) || op(Re.styles, t, e);
}
var tv = new tI(), iI = function() {
  D.autoReplaceSvg = !1, D.observeMutations = !1, Vr("noAuto");
}, oI = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ft ? (Vr("beforeI2svg", e), Ct("pseudoElements2svg", e), Ct("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    D.autoReplaceSvg === !1 && (D.autoReplaceSvg = !0), D.observeMutations = !0, WE(function() {
      sI({
        autoReplaceSvgRoot: t
      }), Vr("watch", e);
    });
  }
}, aI = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Ps(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Er(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Ll(e[0]);
      return {
        prefix: r,
        iconName: Er(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(D.cssPrefix, "-")) > -1 || e.match(HE))) {
      var n = bl(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || or(),
        iconName: Er(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof e == "string") {
      var i = or();
      return {
        prefix: i,
        iconName: Er(i, e) || e
      };
    }
  }
}, we = {
  noAuto: iI,
  config: D,
  dom: oI,
  parse: aI,
  library: tv,
  findIconDefinition: df,
  toHtml: Ro
}, sI = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, r = t === void 0 ? uA : t;
  (Object.keys(Re.styles).length > 0 || D.autoFetchSvg) && Ft && D.autoReplaceSvg && we.dom.i2svg({
    node: r
  });
};
function Tl(A, e) {
  return Object.defineProperty(A, "abstract", {
    get: e
  }), Object.defineProperty(A, "html", {
    get: function() {
      return A.abstract.map(function(r) {
        return Ro(r);
      });
    }
  }), Object.defineProperty(A, "node", {
    get: function() {
      if (Ft) {
        var r = uA.createElement("div");
        return r.innerHTML = A.html, r.children;
      }
    }
  }), A;
}
function lI(A) {
  var e = A.children, t = A.main, r = A.mask, n = A.attributes, i = A.styles, o = A.transform;
  if (sB(o) && t.found && !r.found) {
    var a = t.width, s = t.height, l = {
      x: a / s / 2,
      y: 0.5
    };
    n.style = Sl(k(k({}, i), {}, {
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: e
  }];
}
function uI(A) {
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
function fB(A) {
  var e = A.icons, t = e.main, r = e.mask, n = A.prefix, i = A.iconName, o = A.transform, a = A.symbol, s = A.title, l = A.maskId, u = A.titleId, c = A.extra, f = A.watchable, B = f === void 0 ? !1 : f, h = r.found ? r : t, w = h.width, y = h.height, g = n === "fak", d = [D.replacementClass, i ? "".concat(D.cssPrefix, "-").concat(i) : ""].filter(function(E) {
    return c.classes.indexOf(E) === -1;
  }).filter(function(E) {
    return E !== "" || !!E;
  }).concat(c.classes).join(" "), p = {
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
  B && (p.attributes[_r] = ""), s && (p.children.push({
    tag: "title",
    attributes: {
      id: p.attributes["aria-labelledby"] || "title-".concat(u || vo())
    },
    children: [s]
  }), delete p.attributes.title);
  var v = k(k({}, p), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: l,
    transform: o,
    symbol: a,
    styles: k(k({}, m), c.styles)
  }), C = r.found && t.found ? Ct("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Ct("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, F = C.children, U = C.attributes;
  return v.children = F, v.attributes = U, a ? uI(v) : lI(v);
}
function up(A) {
  var e = A.content, t = A.width, r = A.height, n = A.transform, i = A.title, o = A.extra, a = A.watchable, s = a === void 0 ? !1 : a, l = k(k(k({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[_r] = "");
  var u = k({}, o.styles);
  sB(n) && (u.transform = _E({
    transform: n,
    startCentered: !0,
    width: t,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var c = Sl(u);
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
function cI(A) {
  var e = A.content, t = A.title, r = A.extra, n = k(k(k({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = Sl(r.styles);
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
var Hu = Re.styles;
function Bf(A) {
  var e = A[0], t = A[1], r = A.slice(4), n = tB(r, 1), i = n[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(D.cssPrefix, "-").concat(Ur.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(D.cssPrefix, "-").concat(Ur.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(D.cssPrefix, "-").concat(Ur.PRIMARY),
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
var fI = {
  found: !1,
  width: 512,
  height: 512
};
function dI(A, e) {
  !_0 && !D.showMissingIcons && A && console.error('Icon with name "'.concat(A, '" and prefix "').concat(e, '" is missing.'));
}
function gf(A, e) {
  var t = e;
  return e === "fa" && D.styleDefault !== null && (e = or()), new Promise(function(r, n) {
    if (Ct("missingIconAbstract"), t === "fa") {
      var i = ev(A) || {};
      A = i.iconName || A, e = i.prefix || e;
    }
    if (A && e && Hu[e] && Hu[e][A]) {
      var o = Hu[e][A];
      return r(Bf(o));
    }
    dI(A, e), r(k(k({}, fI), {}, {
      icon: D.showMissingIcons && A ? Ct("missingIconAbstract") || {} : {}
    }));
  });
}
var cp = function() {
}, pf = D.measurePerformance && aa && aa.mark && aa.measure ? aa : {
  mark: cp,
  measure: cp
}, Ci = 'FA "6.5.2"', BI = function(e) {
  return pf.mark("".concat(Ci, " ").concat(e, " begins")), function() {
    return rv(e);
  };
}, rv = function(e) {
  pf.mark("".concat(Ci, " ").concat(e, " ends")), pf.measure("".concat(Ci, " ").concat(e), "".concat(Ci, " ").concat(e, " begins"), "".concat(Ci, " ").concat(e, " ends"));
}, dB = {
  begin: BI,
  end: rv
}, As = function() {
};
function fp(A) {
  var e = A.getAttribute ? A.getAttribute(_r) : null;
  return typeof e == "string";
}
function gI(A) {
  var e = A.getAttribute ? A.getAttribute(nB) : null, t = A.getAttribute ? A.getAttribute(iB) : null;
  return e && t;
}
function pI(A) {
  return A && A.classList && A.classList.contains && A.classList.contains(D.replacementClass);
}
function hI() {
  if (D.autoReplaceSvg === !0)
    return es.replace;
  var A = es[D.autoReplaceSvg];
  return A || es.replace;
}
function wI(A) {
  return uA.createElementNS("http://www.w3.org/2000/svg", A);
}
function mI(A) {
  return uA.createElement(A);
}
function nv(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, r = t === void 0 ? A.tag === "svg" ? wI : mI : t;
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
function vI(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var es = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(n) {
        t.parentNode.insertBefore(nv(n), t);
      }), t.getAttribute(_r) === null && D.keepOriginalSource) {
        var r = uA.createComment(vI(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], r = e[1];
    if (~aB(t).indexOf(D.replacementClass))
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
      return Ro(a);
    }).join(`
`);
    t.setAttribute(_r, ""), t.innerHTML = o;
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
    D.mutateApproach === UE && (r = ir.requestAnimationFrame || dp), r(function() {
      var n = hI(), i = dB.begin("mutate");
      A.map(n), i(), t();
    });
  }
}
var BB = !1;
function ov() {
  BB = !0;
}
function hf() {
  BB = !1;
}
var Vs = null;
function Bp(A) {
  if (rp && D.observeMutations) {
    var e = A.treeCallback, t = e === void 0 ? As : e, r = A.nodeCallback, n = r === void 0 ? As : r, i = A.pseudoElementsCallback, o = i === void 0 ? As : i, a = A.observeMutationsRoot, s = a === void 0 ? uA : a;
    Vs = new rp(function(l) {
      if (!BB) {
        var u = or();
        qn(l).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !fp(c.addedNodes[0]) && (D.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && D.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && fp(c.target) && ~bE.indexOf(c.attributeName))
            if (c.attributeName === "class" && gI(c.target)) {
              var f = bl(aB(c.target)), B = f.prefix, h = f.iconName;
              c.target.setAttribute(nB, B || u), h && c.target.setAttribute(iB, h);
            } else pI(c.target) && n(c.target);
        });
      }
    }), Ft && Vs.observe(s, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function CI() {
  Vs && Vs.disconnect();
}
function QI(A) {
  var e = A.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(r, n) {
    var i = n.split(":"), o = i[0], a = i.slice(1);
    return o && a.length > 0 && (r[o] = a.join(":").trim()), r;
  }, {})), t;
}
function yI(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), r = A.innerText !== void 0 ? A.innerText.trim() : "", n = bl(aB(A));
  return n.prefix || (n.prefix = or()), e && t && (n.prefix = e, n.iconName = t), n.iconName && n.prefix || (n.prefix && r.length > 0 && (n.iconName = AI(n.prefix, A.innerText) || uB(n.prefix, uf(A.innerText))), !n.iconName && D.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = A.firstChild.data)), n;
}
function FI(A) {
  var e = qn(A.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), t = A.getAttribute("title"), r = A.getAttribute("data-fa-title-id");
  return D.autoA11y && (t ? e["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(r || vo()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function UI() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Je,
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
  }, t = yI(A), r = t.iconName, n = t.prefix, i = t.rest, o = FI(A), a = ff("parseNodeAttributes", {}, A), s = e.styleParser ? QI(A) : [];
  return k({
    iconName: r,
    title: A.getAttribute("title"),
    titleId: A.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: Je,
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
var EI = Re.styles;
function av(A) {
  var e = D.autoReplaceSvg === "nest" ? gp(A, {
    styleParser: !1
  }) : gp(A);
  return ~e.extra.classes.indexOf(V0) ? Ct("generateLayersText", A, e) : Ct("generateSvgReplacementMutation", A, e);
}
var ar = /* @__PURE__ */ new Set();
oB.map(function(A) {
  ar.add("fa-".concat(A));
});
Object.keys(po[sA]).map(ar.add.bind(ar));
Object.keys(po[CA]).map(ar.add.bind(ar));
ar = Do(ar);
function pp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ft) return Promise.resolve();
  var t = uA.documentElement.classList, r = function(c) {
    return t.add("".concat(np, "-").concat(c));
  }, n = function(c) {
    return t.remove("".concat(np, "-").concat(c));
  }, i = D.autoFetchSvg ? ar : oB.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(EI));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(V0, ":not([").concat(_r, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(_r, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = qn(A.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    r("pending"), n("complete");
  else
    return Promise.resolve();
  var s = dB.begin("onTree"), l = a.reduce(function(u, c) {
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
function II(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  av(A).then(function(t) {
    t && iv([t], e);
  });
}
function HI(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : df(e || {}), n = t.mask;
    return n && (n = (n || {}).icon ? n : df(n || {})), A(r, k(k({}, t), {}, {
      mask: n
    }));
  };
}
var xI = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, n = r === void 0 ? Je : r, i = t.symbol, o = i === void 0 ? !1 : i, a = t.mask, s = a === void 0 ? null : a, l = t.maskId, u = l === void 0 ? null : l, c = t.title, f = c === void 0 ? null : c, B = t.titleId, h = B === void 0 ? null : B, w = t.classes, y = w === void 0 ? [] : w, g = t.attributes, d = g === void 0 ? {} : g, p = t.styles, m = p === void 0 ? {} : p;
  if (e) {
    var v = e.prefix, C = e.iconName, F = e.icon;
    return Tl(k({
      type: "icon"
    }, e), function() {
      return Vr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), D.autoA11y && (f ? d["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(h || vo()) : (d["aria-hidden"] = "true", d.focusable = "false")), fB({
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
        transform: k(k({}, Je), n),
        symbol: o,
        title: f,
        maskId: u,
        titleId: h,
        extra: {
          attributes: d,
          styles: m,
          classes: y
        }
      });
    });
  }
}, SI = {
  mixout: function() {
    return {
      icon: HI(xI)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = pp, t.nodeCallback = II, t;
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
      return new Promise(function(B, h) {
        Promise.all([gf(n, a), u.iconName ? gf(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var y = tB(w, 2), g = y[0], d = y[1];
          B([t, fB({
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
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.transform, a = t.styles, s = Sl(a);
      s.length > 0 && (n.style = s);
      var l;
      return sB(o) && (l = Ct("generateAbstractTransformGrouping", {
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
}, LI = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.classes, i = n === void 0 ? [] : n;
        return Tl({
          type: "layer"
        }, function() {
          Vr("beforeDOMElementCreation", {
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
              class: ["".concat(D.cssPrefix, "-layers")].concat(Do(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, bI = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.title, i = n === void 0 ? null : n, o = r.classes, a = o === void 0 ? [] : o, s = r.attributes, l = s === void 0 ? {} : s, u = r.styles, c = u === void 0 ? {} : u;
        return Tl({
          type: "counter",
          content: t
        }, function() {
          return Vr("beforeDOMElementCreation", {
            content: t,
            params: r
          }), cI({
            content: t.toString(),
            title: i,
            extra: {
              attributes: l,
              styles: c,
              classes: ["".concat(D.cssPrefix, "-layers-counter")].concat(Do(a))
            }
          });
        });
      }
    };
  }
}, TI = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? Je : n, o = r.title, a = o === void 0 ? null : o, s = r.classes, l = s === void 0 ? [] : s, u = r.attributes, c = u === void 0 ? {} : u, f = r.styles, B = f === void 0 ? {} : f;
        return Tl({
          type: "text",
          content: t
        }, function() {
          return Vr("beforeDOMElementCreation", {
            content: t,
            params: r
          }), up({
            content: t,
            transform: k(k({}, Je), i),
            title: a,
            extra: {
              attributes: c,
              styles: B,
              classes: ["".concat(D.cssPrefix, "-layers-text")].concat(Do(l))
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
}, kI = new RegExp('"', "ug"), hp = [1105920, 1112319];
function OI(A) {
  var e = A.replace(kI, ""), t = jE(e, 0), r = t >= hp[0] && t <= hp[1], n = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: uf(n ? e[0] : e),
    isSecondary: r || n
  };
}
function wp(A, e) {
  var t = "".concat(FE).concat(e.replace(":", "-"));
  return new Promise(function(r, n) {
    if (A.getAttribute(t) !== null)
      return r();
    var i = qn(A.children), o = i.filter(function(F) {
      return F.getAttribute(lf) === e;
    })[0], a = ir.getComputedStyle(A, e), s = a.getPropertyValue("font-family").match(xE), l = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !s)
      return A.removeChild(o), r();
    if (s && u !== "none" && u !== "") {
      var c = a.getPropertyValue("content"), f = ~["Sharp"].indexOf(s[2]) ? CA : sA, B = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? ho[f][s[2].toLowerCase()] : SE[f][l], h = OI(c), w = h.value, y = h.isSecondary, g = s[0].startsWith("FontAwesome"), d = uB(B, w), p = d;
      if (g) {
        var m = eI(w);
        m.iconName && m.prefix && (d = m.iconName, B = m.prefix);
      }
      if (d && !y && (!o || o.getAttribute(nB) !== B || o.getAttribute(iB) !== p)) {
        A.setAttribute(t, p), o && A.removeChild(o);
        var v = UI(), C = v.extra;
        C.attributes[lf] = e, gf(d, B).then(function(F) {
          var U = fB(k(k({}, v), {}, {
            icons: {
              main: F,
              mask: cB()
            },
            prefix: B,
            iconName: p,
            extra: C,
            watchable: !0
          })), E = uA.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? A.insertBefore(E, A.firstChild) : A.appendChild(E), E.outerHTML = U.map(function(S) {
            return Ro(S);
          }).join(`
`), A.removeAttribute(t), r();
        }).catch(n);
      } else
        r();
    } else
      r();
  });
}
function DI(A) {
  return Promise.all([wp(A, "::before"), wp(A, "::after")]);
}
function KI(A) {
  return A.parentNode !== document.head && !~EE.indexOf(A.tagName.toUpperCase()) && !A.getAttribute(lf) && (!A.parentNode || A.parentNode.tagName !== "svg");
}
function mp(A) {
  if (Ft)
    return new Promise(function(e, t) {
      var r = qn(A.querySelectorAll("*")).filter(KI).map(DI), n = dB.begin("searchPseudoElements");
      ov(), Promise.all(r).then(function() {
        n(), hf(), e();
      }).catch(function() {
        n(), hf(), t();
      });
    });
}
var RI = {
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
}, vp = !1, NI = {
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
        CI();
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
}, MI = {
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
}, xu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Qp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return A.attributes && (A.attributes.fill || e) && (A.attributes.fill = "black"), A;
}
function PI(A) {
  return A.tag === "g" ? A.children : [A];
}
var _I = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-mask"), i = n ? bl(n.split(" ").map(function(o) {
          return o.trim();
        })) : cB();
        return i.prefix || (i.prefix = or()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.mask, a = t.maskId, s = t.transform, l = i.width, u = i.icon, c = o.width, f = o.icon, B = PE({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), h = {
        tag: "rect",
        attributes: k(k({}, xu), {}, {
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
      }, d = "mask-".concat(a || vo()), p = "clip-".concat(a || vo()), m = {
        tag: "mask",
        attributes: k(k({}, xu), {}, {
          id: d,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, g]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: p
          },
          children: PI(f)
        }, m]
      };
      return r.push(v, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(p, ")"),
          mask: "url(#".concat(d, ")")
        }, xu)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, VI = {
  provides: function(e) {
    var t = !1;
    ir.matchMedia && (t = ir.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, GI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, $I = [GE, SI, LI, bI, TI, RI, NI, MI, _I, VI, GI];
nI($I, {
  mixoutsTo: we
});
we.noAuto;
we.config;
we.library;
we.dom;
var wf = we.parse;
we.findIconDefinition;
we.toHtml;
var WI = we.icon;
we.layer;
we.text;
we.counter;
var sv = { exports: {} }, XI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", jI = XI, YI = jI;
function lv() {
}
function uv() {
}
uv.resetWarningCache = lv;
var zI = function() {
  function A(r, n, i, o, a, s) {
    if (s !== YI) {
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
sv.exports = zI();
var JI = sv.exports;
const j = /* @__PURE__ */ rl(JI);
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
function je(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yp(Object(t), !0).forEach(function(r) {
      mn(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : yp(Object(t)).forEach(function(r) {
      Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return A;
}
function Gs(A) {
  "@babel/helpers - typeof";
  return Gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gs(A);
}
function mn(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function ZI(A, e) {
  if (A == null) return {};
  var t = {}, r = Object.keys(A), n, i;
  for (i = 0; i < r.length; i++)
    n = r[i], !(e.indexOf(n) >= 0) && (t[n] = A[n]);
  return t;
}
function qI(A, e) {
  if (A == null) return {};
  var t = ZI(A, e), r, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (n = 0; n < i.length; n++)
      r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(A, r) && (t[r] = A[r]);
  }
  return t;
}
function mf(A) {
  return AH(A) || eH(A) || tH(A) || rH();
}
function AH(A) {
  if (Array.isArray(A)) return vf(A);
}
function eH(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function tH(A, e) {
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
function rH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nH(A) {
  var e, t = A.beat, r = A.fade, n = A.beatFade, i = A.bounce, o = A.shake, a = A.flash, s = A.spin, l = A.spinPulse, u = A.spinReverse, c = A.pulse, f = A.fixedWidth, B = A.inverse, h = A.border, w = A.listItem, y = A.flip, g = A.size, d = A.rotation, p = A.pull, m = (e = {
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
    "fa-border": h,
    "fa-li": w,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, mn(e, "fa-".concat(g), typeof g < "u" && g !== null), mn(e, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0), mn(e, "fa-pull-".concat(p), typeof p < "u" && p !== null), mn(e, "fa-swap-opacity", A.swapOpacity), e);
  return Object.keys(m).map(function(v) {
    return m[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function iH(A) {
  return A = A - 0, A === A;
}
function cv(A) {
  return iH(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  }), A.substr(0, 1).toLowerCase() + A.substr(1));
}
var oH = ["style"];
function aH(A) {
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function sH(A) {
  return A.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, t) {
    var r = t.indexOf(":"), n = cv(t.slice(0, r)), i = t.slice(r + 1).trim();
    return n.startsWith("webkit") ? e[aH(n)] = i : e[n] = i, e;
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
        s.attrs.style = sH(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? s.attrs[l.toLowerCase()] = u : s.attrs[cv(l)] = u;
    }
    return s;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, a = qI(t, oH);
  return n.attrs.style = je(je({}, n.attrs.style), o), A.apply(void 0, [e.tag, je(je({}, n.attrs), a)].concat(mf(r)));
}
var dv = !1;
try {
  dv = !0;
} catch {
}
function lH() {
  if (!dv && console && typeof console.error == "function") {
    var A;
    (A = console).error.apply(A, arguments);
  }
}
function Fp(A) {
  if (A && Gs(A) === "object" && A.prefix && A.iconName && A.icon)
    return A;
  if (wf.icon)
    return wf.icon(A);
  if (A === null)
    return null;
  if (A && Gs(A) === "object" && A.prefix && A.iconName)
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
function Su(A, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? mn({}, A, e) : {};
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
}, gB = /* @__PURE__ */ N.forwardRef(function(A, e) {
  var t = je(je({}, Up), A), r = t.icon, n = t.mask, i = t.symbol, o = t.className, a = t.title, s = t.titleId, l = t.maskId, u = Fp(r), c = Su("classes", [].concat(mf(nH(t)), mf((o || "").split(" ")))), f = Su("transform", typeof t.transform == "string" ? wf.transform(t.transform) : t.transform), B = Su("mask", Fp(n)), h = WI(u, je(je(je(je({}, c), f), B), {}, {
    symbol: i,
    title: a,
    titleId: s,
    maskId: l
  }));
  if (!h)
    return lH("Could not find icon", u), null;
  var w = h.abstract, y = {
    ref: e
  };
  return Object.keys(t).forEach(function(g) {
    Up.hasOwnProperty(g) || (y[g] = t[g]);
  }), uH(w[0], y);
});
gB.displayName = "FontAwesomeIcon";
gB.propTypes = {
  beat: j.bool,
  border: j.bool,
  beatFade: j.bool,
  bounce: j.bool,
  className: j.string,
  fade: j.bool,
  flash: j.bool,
  mask: j.oneOfType([j.object, j.array, j.string]),
  maskId: j.string,
  fixedWidth: j.bool,
  inverse: j.bool,
  flip: j.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: j.oneOfType([j.object, j.array, j.string]),
  listItem: j.bool,
  pull: j.oneOf(["right", "left"]),
  pulse: j.bool,
  rotation: j.oneOf([0, 90, 180, 270]),
  shake: j.bool,
  size: j.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: j.bool,
  spinPulse: j.bool,
  spinReverse: j.bool,
  symbol: j.oneOfType([j.bool, j.string]),
  title: j.string,
  titleId: j.string,
  transform: j.oneOfType([j.string, j.object]),
  swapOpacity: j.bool
};
var uH = fv.bind(null, N.createElement), cH = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, fH = cH, ne = function() {
  return ne = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ne.apply(this, arguments);
};
function Co(A, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || Array.prototype.slice.call(e));
}
var aA = "-ms-", Vi = "-moz-", q = "-webkit-", Bv = "comm", kl = "rule", pB = "decl", dH = "@import", gv = "@keyframes", BH = "@layer", pv = Math.abs, hB = String.fromCharCode, Cf = Object.assign;
function gH(A, e) {
  return kA(A, 0) ^ 45 ? (((e << 2 ^ kA(A, 0)) << 2 ^ kA(A, 1)) << 2 ^ kA(A, 2)) << 2 ^ kA(A, 3) : 0;
}
function hv(A) {
  return A.trim();
}
function at(A, e) {
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
function _n(A, e, t) {
  return A.slice(e, t);
}
function Ye(A) {
  return A.length;
}
function wv(A) {
  return A.length;
}
function Qi(A, e) {
  return e.push(A), A;
}
function pH(A, e) {
  return A.map(e).join("");
}
function Ep(A, e) {
  return A.filter(function(t) {
    return !at(t, e);
  });
}
var Ol = 1, Vn = 1, mv = 0, xe = 0, UA = 0, Ai = "";
function Dl(A, e, t, r, n, i, o, a) {
  return { value: A, root: e, parent: t, type: r, props: n, children: i, line: Ol, column: Vn, length: o, return: "", siblings: a };
}
function xt(A, e) {
  return Cf(Dl("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function Yr(A) {
  for (; A.root; )
    A = xt(A.root, { children: [A] });
  Qi(A, A.siblings);
}
function hH() {
  return UA;
}
function wH() {
  return UA = xe > 0 ? kA(Ai, --xe) : 0, Vn--, UA === 10 && (Vn = 1, Ol--), UA;
}
function Pe() {
  return UA = xe < mv ? kA(Ai, xe++) : 0, Vn++, UA === 10 && (Vn = 1, Ol++), UA;
}
function br() {
  return kA(Ai, xe);
}
function rs() {
  return xe;
}
function Kl(A, e) {
  return _n(Ai, A, e);
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
function mH(A) {
  return Ol = Vn = 1, mv = Ye(Ai = A), xe = 0, [];
}
function vH(A) {
  return Ai = "", A;
}
function Lu(A) {
  return hv(Kl(xe - 1, yf(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function CH(A) {
  for (; (UA = br()) && UA < 33; )
    Pe();
  return Qf(A) > 2 || Qf(UA) > 3 ? "" : " ";
}
function QH(A, e) {
  for (; --e && Pe() && !(UA < 48 || UA > 102 || UA > 57 && UA < 65 || UA > 70 && UA < 97); )
    ;
  return Kl(A, rs() + (e < 6 && br() == 32 && Pe() == 32));
}
function yf(A) {
  for (; Pe(); )
    switch (UA) {
      case A:
        return xe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && yf(UA);
        break;
      case 40:
        A === 41 && yf(A);
        break;
      case 92:
        Pe();
        break;
    }
  return xe;
}
function yH(A, e) {
  for (; Pe() && A + UA !== 57; )
    if (A + UA === 84 && br() === 47)
      break;
  return "/*" + Kl(e, xe - 1) + "*" + hB(A === 47 ? A : Pe());
}
function FH(A) {
  for (; !Qf(br()); )
    Pe();
  return Kl(A, xe);
}
function UH(A) {
  return vH(ns("", null, null, null, [""], A = mH(A), 0, [0], A));
}
function ns(A, e, t, r, n, i, o, a, s) {
  for (var l = 0, u = 0, c = o, f = 0, B = 0, h = 0, w = 1, y = 1, g = 1, d = 0, p = "", m = n, v = i, C = r, F = p; y; )
    switch (h = d, d = Pe()) {
      case 40:
        if (h != 108 && kA(F, c - 1) == 58) {
          ts(F += $(Lu(d), "&", "&\f"), "&\f", pv(l ? a[l - 1] : 0)) != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        F += Lu(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += CH(h);
        break;
      case 92:
        F += QH(rs() - 1, 7);
        continue;
      case 47:
        switch (br()) {
          case 42:
          case 47:
            Qi(EH(yH(Pe(), rs()), e, t, s), s);
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
            g == -1 && (F = $(F, /\f/g, "")), B > 0 && Ye(F) - c && Qi(B > 32 ? Hp(F + ";", r, t, c - 1, s) : Hp($(F, " ", "") + ";", r, t, c - 2, s), s);
            break;
          case 59:
            F += ";";
          default:
            if (Qi(C = Ip(F, e, t, l, u, n, a, p, m = [], v = [], c, i), i), d === 123)
              if (u === 0)
                ns(F, e, C, C, m, i, c, a, v);
              else
                switch (f === 99 && kA(F, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ns(A, C, C, r && Qi(Ip(A, C, C, 0, 0, n, a, p, n, m = [], c, v), v), n, v, c, a, r ? m : v);
                    break;
                  default:
                    ns(F, C, C, C, [""], v, 0, a, v);
                }
        }
        l = u = B = 0, w = g = 1, p = F = "", c = o;
        break;
      case 58:
        c = 1 + Ye(F), B = h;
      default:
        if (w < 1) {
          if (d == 123)
            --w;
          else if (d == 125 && w++ == 0 && wH() == 125)
            continue;
        }
        switch (F += hB(d), d * w) {
          case 38:
            g = u > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            a[l++] = (Ye(F) - 1) * g, g = 1;
            break;
          case 64:
            br() === 45 && (F += Lu(Pe())), f = br(), u = c = Ye(p = F += FH(rs())), d++;
            break;
          case 45:
            h === 45 && Ye(F) == 2 && (w = 0);
        }
    }
  return i;
}
function Ip(A, e, t, r, n, i, o, a, s, l, u, c) {
  for (var f = n - 1, B = n === 0 ? i : [""], h = wv(B), w = 0, y = 0, g = 0; w < r; ++w)
    for (var d = 0, p = _n(A, f + 1, f = pv(y = o[w])), m = A; d < h; ++d)
      (m = hv(y > 0 ? B[d] + " " + p : $(p, /&\f/g, B[d]))) && (s[g++] = m);
  return Dl(A, e, t, n === 0 ? kl : a, s, l, u, c);
}
function EH(A, e, t, r) {
  return Dl(A, e, t, Bv, hB(hH()), _n(A, 2, -2), 0, r);
}
function Hp(A, e, t, r, n) {
  return Dl(A, e, t, pB, _n(A, 0, r), _n(A, r + 1, -1), r, n);
}
function vv(A, e, t) {
  switch (gH(A, e)) {
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
      return Vi + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + A + Vi + A + aA + A + A;
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
      return q + A + aA + "flex-item-" + $(A, /flex-|-self/g, "") + (at(A, /flex-|baseline/) ? "" : aA + "grid-row-" + $(A, /flex-|-self/g, "")) + A;
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
      if (!at(A, /flex-|baseline/)) return aA + "grid-column-align" + _n(A, e) + A;
      break;
    case 2592:
    case 3360:
      return aA + $(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(r, n) {
        return e = n, at(r.props, /grid-\w+-end/);
      }) ? ~ts(A + (t = t[e].value), "span", 0) ? A : aA + $(A, "-start", "") + A + aA + "grid-row-span:" + (~ts(t, "span", 0) ? at(t, /\d+/) : +at(t, /\d+/) - +at(A, /\d+/)) + ";" : aA + $(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return at(r.props, /grid-\w+-start/);
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
            return $(A, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + Vi + (kA(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
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
function IH(A, e, t, r) {
  switch (A.type) {
    case BH:
      if (A.children.length) break;
    case dH:
    case pB:
      return A.return = A.return || A.value;
    case Bv:
      return "";
    case gv:
      return A.return = A.value + "{" + $s(A.children, r) + "}";
    case kl:
      if (!Ye(A.value = A.props.join(","))) return "";
  }
  return Ye(t = $s(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
}
function HH(A) {
  var e = wv(A);
  return function(t, r, n, i) {
    for (var o = "", a = 0; a < e; a++)
      o += A[a](t, r, n, i) || "";
    return o;
  };
}
function xH(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function SH(A, e, t, r) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case pB:
        A.return = vv(A.value, A.length, t);
        return;
      case gv:
        return $s([xt(A, { value: $(A.value, "@", "@" + q) })], r);
      case kl:
        if (A.length)
          return pH(t = A.props, function(n) {
            switch (at(n, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Yr(xt(A, { props: [$(n, /:(read-\w+)/, ":" + Vi + "$1")] })), Yr(xt(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
              case "::placeholder":
                Yr(xt(A, { props: [$(n, /:(plac\w+)/, ":" + q + "input-$1")] })), Yr(xt(A, { props: [$(n, /:(plac\w+)/, ":" + Vi + "$1")] })), Yr(xt(A, { props: [$(n, /:(plac\w+)/, aA + "input-$1")] })), Yr(xt(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
            }
            return "";
          });
    }
}
var LH = {
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
}, Gn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Cv = "active", Qv = "data-styled-version", Rl = "6.1.11", wB = `/*!sc*/
`, mB = typeof window < "u" && "HTMLElement" in window, bH = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Nl = Object.freeze([]), $n = Object.freeze({});
function TH(A, e, t) {
  return t === void 0 && (t = $n), A.theme !== t.theme && A.theme || e || t.theme;
}
var yv = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), kH = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, OH = /(^-|-$)/g;
function xp(A) {
  return A.replace(kH, "-").replace(OH, "");
}
var DH = /(a)(d)/gi, pa = 52, Sp = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function Ff(A) {
  var e, t = "";
  for (e = Math.abs(A); e > pa; e = e / pa | 0) t = Sp(e % pa) + t;
  return (Sp(e % pa) + t).replace(DH, "$1-$2");
}
var bu, Fv = 5381, vn = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, Uv = function(A) {
  return vn(Fv, A);
};
function Ev(A) {
  return Ff(Uv(A) >>> 0);
}
function KH(A) {
  return A.displayName || A.name || "Component";
}
function Tu(A) {
  return typeof A == "string" && !0;
}
var Iv = typeof Symbol == "function" && Symbol.for, Hv = Iv ? Symbol.for("react.memo") : 60115, RH = Iv ? Symbol.for("react.forward_ref") : 60112, NH = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, MH = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, xv = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, PH = ((bu = {})[RH] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, bu[Hv] = xv, bu);
function Lp(A) {
  return ("type" in (e = A) && e.type.$$typeof) === Hv ? xv : "$$typeof" in A ? PH[A.$$typeof] : NH;
  var e;
}
var _H = Object.defineProperty, VH = Object.getOwnPropertyNames, bp = Object.getOwnPropertySymbols, GH = Object.getOwnPropertyDescriptor, $H = Object.getPrototypeOf, Tp = Object.prototype;
function Sv(A, e, t) {
  if (typeof e != "string") {
    if (Tp) {
      var r = $H(e);
      r && r !== Tp && Sv(A, r, t);
    }
    var n = VH(e);
    bp && (n = n.concat(bp(e)));
    for (var i = Lp(A), o = Lp(e), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in MH || t && t[s] || o && s in o || i && s in i)) {
        var l = GH(e, s);
        try {
          _H(A, s, l);
        } catch {
        }
      }
    }
  }
  return A;
}
function Wn(A) {
  return typeof A == "function";
}
function vB(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function Ir(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function Uf(A, e) {
  if (A.length === 0) return "";
  for (var t = A[0], r = 1; r < A.length; r++) t += A[r];
  return t;
}
function Qo(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function Ef(A, e, t) {
  if (t === void 0 && (t = !1), !t && !Qo(A) && !Array.isArray(A)) return e;
  if (Array.isArray(e)) for (var r = 0; r < e.length; r++) A[r] = Ef(A[r], e[r]);
  else if (Qo(e)) for (var r in e) A[r] = Ef(A[r], e[r]);
  return A;
}
function CB(A, e) {
  Object.defineProperty(A, "toString", { value: e });
}
function No(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var WH = function() {
  function A(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return A.prototype.indexOfGroup = function(e) {
    for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, n = r.length, i = n; e >= i; ) if ((i <<= 1) < 0) throw No(16, "".concat(e));
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
    for (var r = this.groupSizes[e], n = this.indexOfGroup(e), i = n + r, o = n; o < i; o++) t += "".concat(this.tag.getRule(o)).concat(wB);
    return t;
  }, A;
}(), is = /* @__PURE__ */ new Map(), Ws = /* @__PURE__ */ new Map(), os = 1, ha = function(A) {
  if (is.has(A)) return is.get(A);
  for (; Ws.has(os); ) os++;
  var e = os++;
  return is.set(A, e), Ws.set(e, A), e;
}, XH = function(A, e) {
  os = e + 1, is.set(A, e), Ws.set(e, A);
}, jH = "style[".concat(Gn, "][").concat(Qv, '="').concat(Rl, '"]'), YH = new RegExp("^".concat(Gn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), zH = function(A, e, t) {
  for (var r, n = t.split(","), i = 0, o = n.length; i < o; i++) (r = n[i]) && A.registerName(e, r);
}, JH = function(A, e) {
  for (var t, r = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(wB), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(YH);
      if (s) {
        var l = 0 | parseInt(s[1], 10), u = s[2];
        l !== 0 && (XH(u, l), zH(A, u, s[3]), A.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function ZH() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Lv = function(A) {
  var e = document.head, t = A || e, r = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(Gn, "]")));
    return s[s.length - 1];
  }(t), i = n !== void 0 ? n.nextSibling : null;
  r.setAttribute(Gn, Cv), r.setAttribute(Qv, Rl);
  var o = ZH();
  return o && r.setAttribute("nonce", o), t.insertBefore(r, i), r;
}, qH = function() {
  function A(e) {
    this.element = Lv(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, n = 0, i = r.length; n < i; n++) {
        var o = r[n];
        if (o.ownerNode === t) return o;
      }
      throw No(17);
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
}(), A4 = function() {
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
}(), e4 = function() {
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
}(), kp = mB, t4 = { isServer: !mB, useCSSOMInjection: !bH }, bv = function() {
  function A(e, t, r) {
    e === void 0 && (e = $n), t === void 0 && (t = {});
    var n = this;
    this.options = ne(ne({}, t4), e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && mB && kp && (kp = !1, function(i) {
      for (var o = document.querySelectorAll(jH), a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        l && l.getAttribute(Gn) !== Cv && (JH(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), CB(this, function() {
      return function(i) {
        for (var o = i.getTag(), a = o.length, s = "", l = function(c) {
          var f = function(g) {
            return Ws.get(g);
          }(c);
          if (f === void 0) return "continue";
          var B = i.names.get(f), h = o.getGroup(c);
          if (B === void 0 || h.length === 0) return "continue";
          var w = "".concat(Gn, ".g").concat(c, '[id="').concat(f, '"]'), y = "";
          B !== void 0 && B.forEach(function(g) {
            g.length > 0 && (y += "".concat(g, ","));
          }), s += "".concat(h).concat(w, '{content:"').concat(y, '"}').concat(wB);
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
      return t.isServer ? new e4(n) : r ? new qH(n) : new A4(n);
    }(this.options), new WH(e)));
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
}(), r4 = /&/g, n4 = /^\s*\/\/.*$/gm;
function Tv(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Tv(t.children, e)), t;
  });
}
function i4(A) {
  var e, t, r, n = $n, i = n.options, o = i === void 0 ? $n : i, a = n.plugins, s = a === void 0 ? Nl : a, l = function(f, B, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, u = s.slice();
  u.push(function(f) {
    f.type === kl && f.value.includes("&") && (f.props[0] = f.props[0].replace(r4, t).replace(r, l));
  }), o.prefix && u.push(SH), u.push(IH);
  var c = function(f, B, h, w) {
    B === void 0 && (B = ""), h === void 0 && (h = ""), w === void 0 && (w = "&"), e = w, t = B, r = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(n4, ""), g = UH(h || B ? "".concat(h, " ").concat(B, " { ").concat(y, " }") : y);
    o.namespace && (g = Tv(g, o.namespace));
    var d = [];
    return $s(g, HH(u.concat(xH(function(p) {
      return d.push(p);
    })))), d;
  };
  return c.hash = s.length ? s.reduce(function(f, B) {
    return B.name || No(15), vn(f, B.name);
  }, Fv).toString() : "", c;
}
var o4 = new bv(), If = i4(), kv = N.createContext({ shouldForwardProp: void 0, styleSheet: o4, stylis: If });
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
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, CB(this, function() {
      throw No(12, String(r.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = If), this.name + e.hash;
  }, A;
}(), a4 = function(A) {
  return A >= "A" && A <= "Z";
};
function Dp(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var r = A[t];
    if (t === 1 && r === "-" && A[0] === "-") return A;
    a4(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Dv = function(A) {
  return A == null || A === !1 || A === "";
}, Kv = function(A) {
  var e, t, r = [];
  for (var n in A) {
    var i = A[n];
    A.hasOwnProperty(n) && !Dv(i) && (Array.isArray(i) && i.isCss || Wn(i) ? r.push("".concat(Dp(n), ":"), i, ";") : Qo(i) ? r.push.apply(r, Co(Co(["".concat(n, " {")], Kv(i), !1), ["}"], !1)) : r.push("".concat(Dp(n), ": ").concat((e = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in LH || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function Tr(A, e, t, r) {
  if (Dv(A)) return [];
  if (vB(A)) return [".".concat(A.styledComponentId)];
  if (Wn(A)) {
    if (!Wn(i = A) || i.prototype && i.prototype.isReactComponent || !e) return [A];
    var n = A(e);
    return Tr(n, e, t, r);
  }
  var i;
  return A instanceof Ov ? t ? (A.inject(t, r), [A.getName(r)]) : [A] : Qo(A) ? Kv(A) : Array.isArray(A) ? Array.prototype.concat.apply(Nl, A.map(function(o) {
    return Tr(o, e, t, r);
  })) : [A.toString()];
}
function s4(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (Wn(t) && !vB(t)) return !1;
  }
  return !0;
}
var l4 = Uv(Rl), u4 = function() {
  function A(e, t, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && s4(e), this.componentId = t, this.baseHash = vn(l4, t), this.baseStyle = r, bv.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, r) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Ir(n, this.staticRulesId);
    else {
      var i = Uf(Tr(this.rules, e, t, r)), o = Ff(vn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, o)) {
        var a = r(i, ".".concat(o), void 0, this.componentId);
        t.insertRules(this.componentId, o, a);
      }
      n = Ir(n, o), this.staticRulesId = o;
    }
    else {
      for (var s = vn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var c = this.rules[u];
        if (typeof c == "string") l += c;
        else if (c) {
          var f = Uf(Tr(c, e, t, r));
          s = vn(s, f + u), l += f;
        }
      }
      if (l) {
        var B = Ff(s >>> 0);
        t.hasNameForId(this.componentId, B) || t.insertRules(this.componentId, B, r(l, ".".concat(B), void 0, this.componentId)), n = Ir(n, B);
      }
    }
    return n;
  }, A;
}(), Rv = N.createContext(void 0);
Rv.Consumer;
var ku = {};
function c4(A, e, t) {
  var r = vB(A), n = A, i = !Tu(A), o = e.attrs, a = o === void 0 ? Nl : o, s = e.componentId, l = s === void 0 ? function(m, v) {
    var C = typeof m != "string" ? "sc" : xp(m);
    ku[C] = (ku[C] || 0) + 1;
    var F = "".concat(C, "-").concat(Ev(Rl + C + ku[C]));
    return v ? "".concat(v, "-").concat(F) : F;
  }(e.displayName, e.parentComponentId) : s, u = e.displayName, c = u === void 0 ? function(m) {
    return Tu(m) ? "styled.".concat(m) : "Styled(".concat(KH(m), ")");
  }(A) : u, f = e.displayName && e.componentId ? "".concat(xp(e.displayName), "-").concat(e.componentId) : e.componentId || l, B = r && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, h = e.shouldForwardProp;
  if (r && n.shouldForwardProp) {
    var w = n.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      h = function(m, v) {
        return w(m, v) && y(m, v);
      };
    } else h = w;
  }
  var g = new u4(t, f, r ? n.componentStyle : void 0);
  function d(m, v) {
    return function(C, F, U) {
      var E = C.attrs, S = C.componentStyle, P = C.defaultProps, V = C.foldedComponentIds, M = C.styledComponentId, _ = C.target, Z = N.useContext(Rv), G = Op(), K = C.shouldForwardProp || G.shouldForwardProp, I = TH(F, Z, P) || $n, x = function(gA, rA, XA) {
        for (var ti, Br = ne(ne({}, rA), { className: void 0, theme: XA }), zl = 0; zl < gA.length; zl += 1) {
          var _o = Wn(ti = gA[zl]) ? ti(Br) : ti;
          for (var Ut in _o) Br[Ut] = Ut === "className" ? Ir(Br[Ut], _o[Ut]) : Ut === "style" ? ne(ne({}, Br[Ut]), _o[Ut]) : _o[Ut];
        }
        return rA.className && (Br.className = Ir(Br.className, rA.className)), Br;
      }(E, F, I), L = x.as || _, R = {};
      for (var X in x) x[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && x.theme === I || (X === "forwardedAs" ? R.as = x.forwardedAs : K && !K(X, L) || (R[X] = x[X]));
      var dA = function(gA, rA) {
        var XA = Op(), ti = gA.generateAndInjectStyles(rA, XA.styleSheet, XA.stylis);
        return ti;
      }(S, x), BA = Ir(V, M);
      return dA && (BA += " " + dA), x.className && (BA += " " + x.className), R[Tu(L) && !yv.has(L) ? "class" : "className"] = BA, R.ref = U, Q.createElement(L, R);
    }(p, m, v);
  }
  d.displayName = c;
  var p = N.forwardRef(d);
  return p.attrs = B, p.componentStyle = g, p.displayName = c, p.shouldForwardProp = h, p.foldedComponentIds = r ? Ir(n.foldedComponentIds, n.styledComponentId) : "", p.styledComponentId = f, p.target = r ? n.target : A, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = r ? function(v) {
      for (var C = [], F = 1; F < arguments.length; F++) C[F - 1] = arguments[F];
      for (var U = 0, E = C; U < E.length; U++) Ef(v, E[U], !0);
      return v;
    }({}, n.defaultProps, m) : m;
  } }), CB(p, function() {
    return ".".concat(p.styledComponentId);
  }), i && Sv(p, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
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
  if (Wn(A) || Qo(A)) return Rp(Tr(Kp(Nl, Co([A], e, !0))));
  var r = A;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? Tr(r) : Rp(Tr(Kp(r, e)));
}
function Hf(A, e, t) {
  if (t === void 0 && (t = $n), !e) throw No(1, e);
  var r = function(n) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return A(e, t, Nv.apply(void 0, Co([n], i, !1)));
  };
  return r.attrs = function(n) {
    return Hf(A, e, ne(ne({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, r.withConfig = function(n) {
    return Hf(A, e, ne(ne({}, t), n));
  }, r;
}
var Mv = function(A) {
  return Hf(c4, A);
}, Xr = Mv;
yv.forEach(function(A) {
  Xr[A] = Mv(A);
});
function QB(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var r = Uf(Nv.apply(void 0, Co([A], e, !1))), n = Ev(r);
  return new Ov(n, r);
}
const f4 = "#4fa94d", d4 = {
  "aria-busy": !0,
  role: "progressbar"
}, B4 = Xr.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, g4 = "http://www.w3.org/2000/svg", Te = 242.776657104492, p4 = 1.6, h4 = QB`
12.5% {
  stroke-dasharray: ${Te * 0.14}px, ${Te}px;
  stroke-dashoffset: -${Te * 0.11}px;
}
43.75% {
  stroke-dasharray: ${Te * 0.35}px, ${Te}px;
  stroke-dashoffset: -${Te * 0.35}px;
}
100% {
  stroke-dasharray: ${Te * 0.01}px, ${Te}px;
  stroke-dashoffset: -${Te * 0.99}px;
}
`;
Xr.path`
  stroke-dasharray: ${Te * 0.01}px, ${Te};
  stroke-dashoffset: 0;
  animation: ${h4} ${p4}s linear infinite;
`;
const w4 = QB`
to {
   transform: rotate(360deg);
 }
`;
Xr.svg`
  animation: ${w4} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
Xr.polyline`
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
const m4 = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: r = 1, color: n = f4, ariaLabel: i = "tail-spin-loading", wrapperStyle: o, wrapperClass: a, visible: s = !0 }) => {
  const l = parseInt(String(t)), u = l + 36, c = l / 2, f = c + parseInt(String(r)) - 1;
  return /* @__PURE__ */ W.jsx(B4, {
    style: o,
    $visible: s,
    className: a,
    "data-testid": "tail-spin-loading",
    "aria-label": i,
    ...d4,
    children: /* @__PURE__ */ W.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${u} ${u}`,
      xmlns: g4,
      "data-testid": "tail-spin-svg",
      children: [
        /* @__PURE__ */ W.jsx("defs", {
          children: /* @__PURE__ */ W.jsxs("linearGradient", {
            x1: "8.042%",
            y1: "0%",
            x2: "65.682%",
            y2: "23.865%",
            id: "a",
            children: [
              /* @__PURE__ */ W.jsx("stop", {
                stopColor: n,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ W.jsx("stop", {
                stopColor: n,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ W.jsx("stop", {
                stopColor: n,
                offset: "100%"
              })
            ]
          })
        }),
        /* @__PURE__ */ W.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ W.jsxs("g", {
            transform: `translate(${c} ${c})`,
            children: [
              /* @__PURE__ */ W.jsx("path", {
                d: "M36 18c0-9.94-8.06-18-18-18",
                id: "Oval-2",
                stroke: n,
                strokeWidth: t,
                children: /* @__PURE__ */ W.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              }),
              /* @__PURE__ */ W.jsx("circle", {
                fill: "#fff",
                cx: "36",
                cy: "18",
                r: f,
                children: /* @__PURE__ */ W.jsx("animateTransform", {
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
}, v4 = QB`
to {
   stroke-dashoffset: 136;
 }
`;
Xr.polygon`
  stroke-dasharray: 17;
  animation: ${v4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Xr.svg`
  transform-origin: 50% 65%;
`;
var Pv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(A) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (i = n(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var a in i)
        e.call(i, a) && i[a] && (o = n(o, a));
      return o;
    }
    function n(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    A.exports ? (t.default = t, A.exports = t) : window.classNames = t;
  })();
})(Pv);
var C4 = Pv.exports;
const _v = /* @__PURE__ */ rl(C4);
function Q4({
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
  return /* @__PURE__ */ W.jsx(T0, { show: A, appear: !0, children: /* @__PURE__ */ W.jsx(dE, { className: It.dialog, onClose: s, children: /* @__PURE__ */ W.jsxs("form", { onSubmit: a, "data-isgandalf": !0, children: [
    /* @__PURE__ */ W.jsx(
      go,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ W.jsx("div", { className: It.overlay })
      }
    ),
    /* @__PURE__ */ W.jsx("div", { className: It.container, children: /* @__PURE__ */ W.jsx(
      go,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ W.jsx(k0, { className: It.dialogPanel, children: /* @__PURE__ */ W.jsxs(
          "div",
          {
            className: _v(It.inputWrapper, {
              [It.loading]: t
            }),
            children: [
              /* @__PURE__ */ W.jsx(
                gB,
                {
                  icon: fH,
                  className: It.searchIcon,
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ W.jsx(
                "input",
                {
                  "data-autofocus": !0,
                  type: "text",
                  autoFocus: !0,
                  className: It.inputField,
                  placeholder: "What do you want to do in the app?",
                  onChange: o,
                  value: e
                }
              ),
              t && /* @__PURE__ */ W.jsx(
                m4,
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
            ]
          }
        ) })
      }
    ) })
  ] }) }) });
}
const y4 = "_container_vj9gk_1", F4 = "_widgetButton_vj9gk_10", U4 = "_buttonContentWrapper_vj9gk_25", E4 = "_buttonContent_vj9gk_25", I4 = "_withComplete_vj9gk_45", H4 = "_loading_vj9gk_68", x4 = "_gradientShift_vj9gk_1", S4 = "_containerRotate_vj9gk_1", L4 = "_waitingForUser_vj9gk_81", b4 = "_pulse_vj9gk_1", T4 = "_arrow_vj9gk_112", k4 = "_outerContainer_vj9gk_121", O4 = "_floatingPopover_vj9gk_135", D4 = "_elasticPopIn_vj9gk_1", K4 = "_popoverLoadingOuter_vj9gk_153", R4 = "_popoverLoading_vj9gk_153", ce = {
  container: y4,
  widgetButton: F4,
  buttonContentWrapper: U4,
  buttonContent: E4,
  withComplete: I4,
  loading: H4,
  gradientShift: x4,
  containerRotate: S4,
  waitingForUser: L4,
  pulse: b4,
  arrow: T4,
  outerContainer: k4,
  floatingPopover: O4,
  elasticPopIn: D4,
  popoverLoadingOuter: K4,
  popoverLoading: R4
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
function jA(A, e, t, r) {
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
function VA(A, e) {
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
var Qt = (
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
), Ml = function(A, e) {
  return Qt.fromClientRect(A, e.getBoundingClientRect());
}, N4 = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Qt(0, 0, r, n);
}, Pl = function(A) {
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
}, Np = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", M4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ma = 0; ma < Np.length; ma++)
  M4[Np.charCodeAt(ma)] = ma;
var Mp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var va = 0; va < Mp.length; va++)
  yi[Mp.charCodeAt(va)] = va;
var P4 = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = yi[A.charCodeAt(r)], o = yi[A.charCodeAt(r + 1)], a = yi[A.charCodeAt(r + 2)], s = yi[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, _4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, V4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, kr = 5, yB = 11, Ou = 2, G4 = yB - kr, Vv = 65536 >> kr, $4 = 1 << kr, Du = $4 - 1, W4 = 1024 >> kr, X4 = Vv + W4, j4 = X4, Y4 = 32, z4 = j4 + Y4, J4 = 65536 >> yB, Z4 = 1 << G4, q4 = Z4 - 1, Pp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Ax = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, ex = function(A, e) {
  var t = P4(A), r = Array.isArray(t) ? V4(t) : new Uint32Array(t), n = Array.isArray(t) ? _4(t) : new Uint16Array(t), i = 24, o = Pp(n, i / 2, r[4] / 2), a = r[5] === 2 ? Pp(n, (i + r[4]) / 2) : Ax(r, Math.ceil((i + r[4]) / 4));
  return new tx(r[0], r[1], r[2], r[3], o, a);
}, tx = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> kr], t = (t << Ou) + (e & Du), this.data[t];
        if (e <= 65535)
          return t = this.index[Vv + (e - 55296 >> kr)], t = (t << Ou) + (e & Du), this.data[t];
        if (e < this.highStart)
          return t = z4 - J4 + (e >> yB), t = this.index[t], t += e >> kr & q4, t = this.index[t], t = (t << Ou) + (e & Du), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), _p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rx = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ca = 0; Ca < _p.length; Ca++)
  rx[_p.charCodeAt(Ca)] = Ca;
var nx = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Vp = 50, ix = 1, Gv = 2, $v = 3, ox = 4, ax = 5, Gp = 7, Wv = 8, $p = 9, Pt = 10, Lf = 11, Wp = 12, bf = 13, sx = 14, Fi = 15, Tf = 16, Qa = 17, fi = 18, lx = 19, Xp = 20, kf = 21, di = 22, Ku = 23, zr = 24, le = 25, Ui = 26, Ei = 27, Jr = 28, ux = 29, vr = 30, cx = 31, ya = 32, Fa = 33, Of = 34, Df = 35, Kf = 36, yo = 37, Rf = 38, as = 39, ss = 40, Ru = 41, Xv = 42, fx = 43, dx = [9001, 65288], jv = "!", z = "×", Ua = "÷", Nf = ex(nx), nt = [vr, Kf], Mf = [ix, Gv, $v, ax], Yv = [Pt, Wv], jp = [Ei, Ui], Bx = Mf.concat(Yv), Yp = [Rf, as, ss, Of, Df], gx = [Fi, bf], px = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(i, o) {
    var a = Nf.get(i);
    if (a > Vp ? (n.push(!0), a -= Vp) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(o), t.push(Tf);
    if (a === ox || a === Lf) {
      if (o === 0)
        return r.push(o), t.push(vr);
      var s = t[o - 1];
      return Bx.indexOf(s) === -1 ? (r.push(r[o - 1]), t.push(s)) : (r.push(o), t.push(vr));
    }
    if (r.push(o), a === cx)
      return t.push(e === "strict" ? kf : yo);
    if (a === Xv || a === ux)
      return t.push(vr);
    if (a === fx)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(yo) : t.push(vr);
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
      if (o !== Pt)
        break;
    }
  if (n === Pt)
    for (var i = t; i > 0; ) {
      i--;
      var a = r[i];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
        for (var s = t; s <= r.length; ) {
          s++;
          var o = r[s];
          if (o === e)
            return !0;
          if (o !== Pt)
            break;
        }
      if (a !== Pt)
        break;
    }
  return !1;
}, zp = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === Pt)
      t--;
    else
      return r;
  }
  return 0;
}, hx = function(A, e, t, r, n) {
  if (t[r] === 0)
    return z;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return z;
  var o = i - 1, a = i + 1, s = e[i], l = o >= 0 ? e[o] : 0, u = e[a];
  if (s === Gv && u === $v)
    return z;
  if (Mf.indexOf(s) !== -1)
    return jv;
  if (Mf.indexOf(u) !== -1 || Yv.indexOf(u) !== -1)
    return z;
  if (zp(i, e) === Wv)
    return Ua;
  if (Nf.get(A[i]) === Lf || (s === ya || s === Fa) && Nf.get(A[a]) === Lf || s === Gp || u === Gp || s === $p || [Pt, bf, Fi].indexOf(s) === -1 && u === $p || [Qa, fi, lx, zr, Jr].indexOf(u) !== -1 || zp(i, e) === di || Nu(Ku, di, i, e) || Nu([Qa, fi], kf, i, e) || Nu(Wp, Wp, i, e))
    return z;
  if (s === Pt)
    return Ua;
  if (s === Ku || u === Ku)
    return z;
  if (u === Tf || s === Tf)
    return Ua;
  if ([bf, Fi, kf].indexOf(u) !== -1 || s === sx || l === Kf && gx.indexOf(s) !== -1 || s === Jr && u === Kf || u === Xp || nt.indexOf(u) !== -1 && s === le || nt.indexOf(s) !== -1 && u === le || s === Ei && [yo, ya, Fa].indexOf(u) !== -1 || [yo, ya, Fa].indexOf(s) !== -1 && u === Ui || nt.indexOf(s) !== -1 && jp.indexOf(u) !== -1 || jp.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ei, Ui].indexOf(s) !== -1 && (u === le || [di, Fi].indexOf(u) !== -1 && e[a + 1] === le) || // ( OP | HY ) × NU
  [di, Fi].indexOf(s) !== -1 && u === le || // NU ×	(NU | SY | IS)
  s === le && [le, Jr, zr].indexOf(u) !== -1)
    return z;
  if ([le, Jr, zr, Qa, fi].indexOf(u) !== -1)
    for (var c = i; c >= 0; ) {
      var f = e[c];
      if (f === le)
        return z;
      if ([Jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([Ei, Ui].indexOf(u) !== -1)
    for (var c = [Qa, fi].indexOf(s) !== -1 ? o : i; c >= 0; ) {
      var f = e[c];
      if (f === le)
        return z;
      if ([Jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (Rf === s && [Rf, as, Of, Df].indexOf(u) !== -1 || [as, Of].indexOf(s) !== -1 && [as, ss].indexOf(u) !== -1 || [ss, Df].indexOf(s) !== -1 && u === ss || Yp.indexOf(s) !== -1 && [Xp, Ui].indexOf(u) !== -1 || Yp.indexOf(u) !== -1 && s === Ei || nt.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || s === zr && nt.indexOf(u) !== -1 || nt.concat(le).indexOf(s) !== -1 && u === di && dx.indexOf(A[a]) === -1 || nt.concat(le).indexOf(u) !== -1 && s === fi)
    return z;
  if (s === Ru && u === Ru) {
    for (var B = t[i], h = 1; B > 0 && (B--, e[B] === Ru); )
      h++;
    if (h % 2 !== 0)
      return z;
  }
  return s === ya && u === Fa ? z : Ua;
}, wx = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = px(A, e.lineBreak), r = t[0], n = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
    return [le, vr, Xv].indexOf(a) !== -1 ? yo : a;
  }));
  var o = e.wordBreak === "keep-all" ? i.map(function(a, s) {
    return a && A[s] >= 19968 && A[s] <= 40959;
  }) : void 0;
  return [r, n, o];
}, mx = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === jv, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return yA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), vx = function(A, e) {
  var t = Pl(A), r = wx(t, e), n = r[0], i = r[1], o = r[2], a = t.length, s = 0, l = 0;
  return {
    next: function() {
      if (l >= a)
        return { done: !0, value: null };
      for (var u = z; l < a && (u = hx(t, i, n, ++l, o)) === z; )
        ;
      if (u !== z || l === a) {
        var c = new mx(t, u, s, l);
        return s = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Cx = 1, Qx = 2, Mo = 4, Jp = 8, Xs = 10, Zp = 47, Gi = 92, yx = 9, Fx = 32, Ea = 34, Bi = 61, Ux = 35, Ex = 36, Ix = 37, Ia = 39, Ha = 40, gi = 41, Hx = 95, Ae = 45, xx = 33, Sx = 60, Lx = 62, bx = 64, Tx = 91, kx = 93, Ox = 61, Dx = 123, xa = 63, Kx = 125, qp = 124, Rx = 126, Nx = 128, Ah = 65533, Mu = 42, Hr = 43, Mx = 44, Px = 58, _x = 59, Fo = 46, Vx = 0, Gx = 8, $x = 11, Wx = 14, Xx = 31, jx = 127, We = -1, zv = 48, Jv = 97, Zv = 101, Yx = 102, zx = 117, Jx = 122, qv = 65, AC = 69, eC = 70, Zx = 85, qx = 90, GA = function(A) {
  return A >= zv && A <= 57;
}, AS = function(A) {
  return A >= 55296 && A <= 57343;
}, Zr = function(A) {
  return GA(A) || A >= qv && A <= eC || A >= Jv && A <= Yx;
}, eS = function(A) {
  return A >= Jv && A <= Jx;
}, tS = function(A) {
  return A >= qv && A <= qx;
}, rS = function(A) {
  return eS(A) || tS(A);
}, nS = function(A) {
  return A >= Nx;
}, Sa = function(A) {
  return A === Xs || A === yx || A === Fx;
}, js = function(A) {
  return rS(A) || nS(A) || A === Hx;
}, eh = function(A) {
  return js(A) || GA(A) || A === Ae;
}, iS = function(A) {
  return A >= Vx && A <= Gx || A === $x || A >= Wx && A <= Xx || A === jx;
}, kt = function(A, e) {
  return A !== Gi ? !1 : e !== Xs;
}, La = function(A, e, t) {
  return A === Ae ? js(e) || kt(e, t) : js(A) ? !0 : !!(A === Gi && kt(A, e));
}, Pu = function(A, e, t) {
  return A === Hr || A === Ae ? GA(e) ? !0 : e === Fo && GA(t) : GA(A === Fo ? e : A);
}, oS = function(A) {
  var e = 0, t = 1;
  (A[e] === Hr || A[e] === Ae) && (A[e] === Ae && (t = -1), e++);
  for (var r = []; GA(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt(yA.apply(void 0, r), 10) : 0;
  A[e] === Fo && e++;
  for (var i = []; GA(A[e]); )
    i.push(A[e++]);
  var o = i.length, a = o ? parseInt(yA.apply(void 0, i), 10) : 0;
  (A[e] === AC || A[e] === Zv) && e++;
  var s = 1;
  (A[e] === Hr || A[e] === Ae) && (A[e] === Ae && (s = -1), e++);
  for (var l = []; GA(A[e]); )
    l.push(A[e++]);
  var u = l.length ? parseInt(yA.apply(void 0, l), 10) : 0;
  return t * (n + a * Math.pow(10, -o)) * Math.pow(10, s * u);
}, aS = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, sS = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, lS = {
  type: 4
  /* COMMA_TOKEN */
}, uS = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, cS = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, fS = {
  type: 21
  /* COLUMN_TOKEN */
}, dS = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, BS = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, gS = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, pS = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, hS = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ba = {
  type: 23
  /* BAD_URL_TOKEN */
}, wS = {
  type: 1
  /* BAD_STRING_TOKEN */
}, mS = {
  type: 25
  /* CDO_TOKEN */
}, vS = {
  type: 24
  /* CDC_TOKEN */
}, CS = {
  type: 26
  /* COLON_TOKEN */
}, QS = {
  type: 27
  /* SEMICOLON_TOKEN */
}, yS = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, FS = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, US = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Pf = {
  type: 32
  /* EOF_TOKEN */
}, tC = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Pl(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Pf; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Ea:
          return this.consumeStringToken(Ea);
        case Ux:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (eh(t) || kt(r, n)) {
            var i = La(t, r, n) ? Qx : Cx, o = this.consumeName();
            return { type: 5, value: o, flags: i };
          }
          break;
        case Ex:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), uS;
          break;
        case Ia:
          return this.consumeStringToken(Ia);
        case Ha:
          return aS;
        case gi:
          return sS;
        case Mu:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), hS;
          break;
        case Hr:
          if (Pu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Mx:
          return lS;
        case Ae:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Pu(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (La(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === Ae && l === Lx)
            return this.consumeCodePoint(), this.consumeCodePoint(), vS;
          break;
        case Fo:
          if (Pu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Zp:
          if (this.peekCodePoint(0) === Mu)
            for (this.consumeCodePoint(); ; ) {
              var u = this.consumeCodePoint();
              if (u === Mu && (u = this.consumeCodePoint(), u === Zp))
                return this.consumeToken();
              if (u === We)
                return this.consumeToken();
            }
          break;
        case Px:
          return CS;
        case _x:
          return QS;
        case Sx:
          if (this.peekCodePoint(0) === xx && this.peekCodePoint(1) === Ae && this.peekCodePoint(2) === Ae)
            return this.consumeCodePoint(), this.consumeCodePoint(), mS;
          break;
        case bx:
          var c = this.peekCodePoint(0), f = this.peekCodePoint(1), B = this.peekCodePoint(2);
          if (La(c, f, B)) {
            var o = this.consumeName();
            return { type: 7, value: o };
          }
          break;
        case Tx:
          return yS;
        case Gi:
          if (kt(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case kx:
          return FS;
        case Ox:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), cS;
          break;
        case Dx:
          return gS;
        case Kx:
          return pS;
        case zx:
        case Zx:
          var h = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return h === Hr && (Zr(w) || w === xa) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case qp:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), dS;
          if (this.peekCodePoint(0) === qp)
            return this.consumeCodePoint(), fS;
          break;
        case Rx:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), BS;
          break;
        case We:
          return Pf;
      }
      return Sa(e) ? (this.consumeWhiteSpace(), US) : GA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : js(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: yA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); Zr(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === xa && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === xa ? zv : s;
        })), 16), i = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === xa ? eC : s;
        })), 16);
        return { type: 30, start: n, end: i };
      }
      var o = parseInt(yA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === Ae && Zr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Zr(t) && a.length < 6; )
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
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === We)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Ia || t === Ea) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === gi) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), ba);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === We || n === gi)
          return { type: 22, value: yA.apply(void 0, e) };
        if (Sa(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === gi ? (this.consumeCodePoint(), { type: 22, value: yA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), ba);
        if (n === Ea || n === Ia || n === Ha || iS(n))
          return this.consumeBadUrlRemnants(), ba;
        if (n === Gi)
          if (kt(n, this.peekCodePoint(0)))
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
        if (e === gi || e === We)
          return;
        kt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === We || n === void 0 || n === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (n === Xs)
          return this._value.splice(0, r), wS;
        if (n === Gi) {
          var i = this._value[r + 1];
          i !== We && i !== void 0 && (i === Xs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : kt(n, i) && (t += this.consumeStringSlice(r), t += yA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Mo, r = this.peekCodePoint(0);
      for ((r === Hr || r === Ae) && e.push(this.consumeCodePoint()); GA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Fo && GA(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; GA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === AC || r === Zv) && ((n === Hr || n === Ae) && GA(i) || GA(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; GA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [oS(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (La(n, i, o)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return n === Ix ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Zr(e)) {
        for (var t = yA(e); Zr(this.peekCodePoint(0)) && t.length < 6; )
          t += yA(this.consumeCodePoint());
        Sa(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || AS(r) || r > 1114111 ? Ah : r;
      }
      return e === We ? Ah : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (eh(t))
          e += yA(t);
        else if (kt(t, this.peekCodePoint(0)))
          e += yA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), rC = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new tC();
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
        if (r.type === 32 || IS(r, e))
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
), Po = function(A) {
  return A.type === 15;
}, ei = function(A) {
  return A.type === 17;
}, tA = function(A) {
  return A.type === 20;
}, ES = function(A) {
  return A.type === 0;
}, _f = function(A, e) {
  return tA(A) && A.value === e;
}, nC = function(A) {
  return A.type !== 31;
}, Xn = function(A) {
  return A.type !== 31 && A.type !== 4;
}, tt = function(A) {
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
}, IS = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, sr = function(A) {
  return A.type === 17 || A.type === 15;
}, EA = function(A) {
  return A.type === 16 || sr(A);
}, iC = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, RA = {
  type: 17,
  number: 0,
  flags: Mo
}, FB = {
  type: 16,
  number: 50,
  flags: Mo
}, _t = {
  type: 16,
  number: 100,
  flags: Mo
}, Ii = function(A, e, t) {
  var r = A[0], n = A[1];
  return [nA(r, e), nA(typeof n < "u" ? n : r, t)];
}, nA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (Po(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, oC = "deg", aC = "grad", sC = "rad", lC = "turn", _l = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case oC:
          return Math.PI * e.number / 180;
        case aC:
          return Math.PI / 200 * e.number;
        case sC:
          return e.number;
        case lC:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, uC = function(A) {
  return A.type === 15 && (A.unit === oC || A.unit === aC || A.unit === sC || A.unit === lC);
}, cC = function(A) {
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
      return Fe(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [RA, _t];
    case "to right":
    case "left":
      return Fe(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [_t, _t];
    case "to bottom":
    case "top":
      return Fe(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [_t, RA];
    case "to left":
    case "right":
      return Fe(270);
  }
  return 0;
}, Fe = function(A) {
  return Math.PI * A / 180;
}, Zt = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = HS[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), i = e.value.substring(2, 3);
        return Vt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), i = e.value.substring(2, 3), o = e.value.substring(3, 4);
        return Vt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), i = e.value.substring(4, 6);
        return Vt(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), n = e.value.substring(2, 4), i = e.value.substring(4, 6), o = e.value.substring(6, 8);
        return Vt(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(o, 16) / 255);
      }
    }
    if (e.type === 20) {
      var a = Bt[e.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return Bt.TRANSPARENT;
  }
}, qt = function(A) {
  return (255 & A) === 0;
}, bA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, Vt = function(A, e, t, r) {
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
  var t = e.filter(Xn);
  if (t.length === 3) {
    var r = t.map(th), n = r[0], i = r[1], o = r[2];
    return Vt(n, i, o, 1);
  }
  if (t.length === 4) {
    var a = t.map(th), n = a[0], i = a[1], o = a[2], s = a[3];
    return Vt(n, i, o, s);
  }
  return 0;
};
function _u(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var nh = function(A, e) {
  var t = e.filter(Xn), r = t[0], n = t[1], i = t[2], o = t[3], a = (r.type === 17 ? Fe(r.number) : _l.parse(A, r)) / (Math.PI * 2), s = EA(n) ? n.number / 100 : 0, l = EA(i) ? i.number / 100 : 0, u = typeof o < "u" && EA(o) ? nA(o, 1) : 1;
  if (s === 0)
    return Vt(l * 255, l * 255, l * 255, 1);
  var c = l <= 0.5 ? l * (s + 1) : l + s - l * s, f = l * 2 - c, B = _u(f, c, a + 1 / 3), h = _u(f, c, a), w = _u(f, c, a - 1 / 3);
  return Vt(B * 255, h * 255, w * 255, u);
}, HS = {
  hsl: nh,
  hsla: nh,
  rgb: rh,
  rgba: rh
}, $i = function(A, e) {
  return Zt.parse(A, rC.create(e).parseComponentValue());
}, Bt = {
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
}, xS = {
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
}, SS = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Vl = function(A, e) {
  var t = Zt.parse(A, e[0]), r = e[1];
  return r && EA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, ih = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = RA), r.stop === null && (r.stop = _t);
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
      for (var c = o - l, f = n[l - 1], B = (u - f) / (c + 1), h = 1; h <= c; h++)
        n[l + h - 1] = B * h;
      l = null;
    }
  }
  return A.map(function(w, y) {
    var g = w.color;
    return { color: g, stop: Math.max(Math.min(1, n[y] / e), 0) };
  });
}, LS = function(A, e, t) {
  var r = e / 2, n = t / 2, i = nA(A[0], e) - r, o = n - nA(A[1], t);
  return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
}, bS = function(A, e, t) {
  var r = typeof A == "number" ? A : LS(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = e / 2, o = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
  return [n, i - l, i + l, o - s, o + s];
}, be = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, oh = function(A, e, t, r, n) {
  var i = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return i.reduce(function(o, a) {
    var s = a[0], l = a[1], u = be(t - s, r - l);
    return (n ? u < o.optimumDistance : u > o.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: u
    } : o;
  }, {
    optimumDistance: n ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, TS = function(A, e, t, r, n) {
  var i = 0, o = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? i = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        i = o = Math.min(be(e, t), be(e, t - n), be(e - r, t), be(e - r, t - n));
      else if (A.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = oh(r, n, e, t, !0), l = s[0], u = s[1];
        i = be(l - e, (u - t) / a), o = a * i;
      }
      break;
    case 1:
      A.shape === 0 ? i = o = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.max(Math.abs(e), Math.abs(e - r)), o = Math.max(Math.abs(t), Math.abs(t - n)));
      break;
    case 3:
      if (A.shape === 0)
        i = o = Math.max(be(e, t), be(e, t - n), be(e - r, t), be(e - r, t - n));
      else if (A.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), c = oh(r, n, e, t, !1), l = c[0], u = c[1];
        i = be(l - e, (u - t) / a), o = a * i;
      }
      break;
  }
  return Array.isArray(A.size) && (i = nA(A.size[0], r), o = A.size.length === 2 ? nA(A.size[1], n) : i), [i, o];
}, kS = function(A, e) {
  var t = Fe(180), r = [];
  return tt(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to") {
        t = cC(n);
        return;
      } else if (uC(o)) {
        t = _l.parse(A, o);
        return;
      }
    }
    var a = Vl(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Ta = function(A, e) {
  var t = Fe(180), r = [];
  return tt(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        t = cC(n);
        return;
      } else if (uC(o)) {
        t = (_l.parse(A, o) + Fe(270)) % Fe(360);
        return;
      }
    }
    var a = Vl(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, OS = function(A, e) {
  var t = Fe(180), r = [], n = 1, i = 0, o = 3, a = [];
  return tt(e).forEach(function(s, l) {
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
        var c = Zt.parse(A, u.values[0]);
        r.push({ stop: RA, color: c });
      } else if (u.name === "to") {
        var c = Zt.parse(A, u.values[0]);
        r.push({ stop: _t, color: c });
      } else if (u.name === "color-stop") {
        var f = u.values.filter(Xn);
        if (f.length === 2) {
          var c = Zt.parse(A, f[1]), B = f[0];
          ei(B) && r.push({
            stop: { type: 16, number: B.number * 100, flags: B.flags },
            color: c
          });
        }
      }
    }
  }), n === 1 ? {
    angle: (t + Fe(180)) % Fe(360),
    stops: r,
    type: n
  } : { size: o, shape: i, stops: r, position: a, type: n };
}, fC = "closest-side", dC = "farthest-side", BC = "closest-corner", gC = "farthest-corner", pC = "circle", hC = "ellipse", wC = "cover", mC = "contain", DS = function(A, e) {
  var t = 0, r = 3, n = [], i = [];
  return tt(e).forEach(function(o, a) {
    var s = !0;
    if (a === 0) {
      var l = !1;
      s = o.reduce(function(c, f) {
        if (l)
          if (tA(f))
            switch (f.value) {
              case "center":
                return i.push(FB), c;
              case "top":
              case "left":
                return i.push(RA), c;
              case "right":
              case "bottom":
                return i.push(_t), c;
            }
          else (EA(f) || sr(f)) && i.push(f);
        else if (tA(f))
          switch (f.value) {
            case pC:
              return t = 0, !1;
            case hC:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case fC:
              return r = 0, !1;
            case wC:
            case dC:
              return r = 1, !1;
            case mC:
            case BC:
              return r = 2, !1;
            case gC:
              return r = 3, !1;
          }
        else if (sr(f) || EA(f))
          return Array.isArray(r) || (r = []), r.push(f), !1;
        return c;
      }, s);
    }
    if (s) {
      var u = Vl(A, o);
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
  return tt(e).forEach(function(o, a) {
    var s = !0;
    if (a === 0 ? s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case "center":
            return i.push(FB), !1;
          case "top":
          case "left":
            return i.push(RA), !1;
          case "right":
          case "bottom":
            return i.push(_t), !1;
        }
      else if (EA(c) || sr(c))
        return i.push(c), !1;
      return u;
    }, s) : a === 1 && (s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case pC:
            return t = 0, !1;
          case hC:
            return t = 1, !1;
          case mC:
          case fC:
            return r = 0, !1;
          case dC:
            return r = 1, !1;
          case BC:
            return r = 2, !1;
          case wC:
          case gC:
            return r = 3, !1;
        }
      else if (sr(c) || EA(c))
        return Array.isArray(r) || (r = []), r.push(c), !1;
      return u;
    }, s)), s) {
      var l = Vl(A, o);
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
}, KS = function(A) {
  return A.type === 1;
}, RS = function(A) {
  return A.type === 2;
}, UB = {
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
      var r = vC[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function NS(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!vC[A.name]);
}
var vC = {
  "linear-gradient": kS,
  "-moz-linear-gradient": Ta,
  "-ms-linear-gradient": Ta,
  "-o-linear-gradient": Ta,
  "-webkit-linear-gradient": Ta,
  "radial-gradient": DS,
  "-moz-radial-gradient": ka,
  "-ms-radial-gradient": ka,
  "-o-radial-gradient": ka,
  "-webkit-radial-gradient": ka,
  "-webkit-gradient": OS
}, MS = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Xn(r) && NS(r);
    }).map(function(r) {
      return UB.parse(A, r);
    });
  }
}, PS = {
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
}, _S = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(EA);
    }).map(iC);
  }
}, VS = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(tA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(GS);
  }
}, GS = function(A) {
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
}, Ln;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Ln || (Ln = {}));
var $S = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(WS);
    });
  }
}, WS = function(A) {
  return tA(A) || EA(A);
}, Gl = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, XS = Gl("top"), jS = Gl("right"), YS = Gl("bottom"), zS = Gl("left"), $l = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return iC(t.filter(EA));
    }
  };
}, JS = $l("top-left"), ZS = $l("top-right"), qS = $l("bottom-right"), AL = $l("bottom-left"), Wl = function(A) {
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
}, eL = Wl("top"), tL = Wl("right"), rL = Wl("bottom"), nL = Wl("left"), Xl = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return Po(t) ? t.number : 0;
    }
  };
}, iL = Xl("top"), oL = Xl("right"), aL = Xl("bottom"), sL = Xl("left"), lL = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, uL = {
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
}, cL = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).reduce(
      function(t, r) {
        return t | fL(r.value);
      },
      0
      /* NONE */
    );
  }
}, fL = function(A) {
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
}, dL = {
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
}, BL = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, Ys;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(Ys || (Ys = {}));
var gL = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return Ys.STRICT;
      case "normal":
      default:
        return Ys.NORMAL;
    }
  }
}, pL = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, ah = function(A, e) {
  return tA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : EA(A) ? nA(A, e) : e;
}, hL = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : UB.parse(A, e);
  }
}, wL = {
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
}, Vf = {
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
}, jl = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, mL = jl("top"), vL = jl("right"), CL = jl("bottom"), QL = jl("left"), yL = {
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
}, FL = {
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
}, UL = Yl("top"), EL = Yl("right"), IL = Yl("bottom"), HL = Yl("left"), xL = {
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
}, SL = {
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
}, LL = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && _f(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var r = {
        color: Bt.TRANSPARENT,
        offsetX: RA,
        offsetY: RA,
        blur: RA
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        sr(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = Zt.parse(A, o);
      }
      return r;
    });
  }
}, bL = {
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
}, TL = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = DL[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, kL = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, OL = function(A) {
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
}, DL = {
  matrix: kL,
  matrix3d: OL
}, sh = {
  type: 16,
  number: 50,
  flags: Mo
}, KL = [sh, sh], RL = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(EA);
    return t.length !== 2 ? KL : [t[0], t[1]];
  }
}, NL = {
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
}, Wi;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(Wi || (Wi = {}));
var ML = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return Wi.BREAK_ALL;
      case "keep-all":
        return Wi.KEEP_ALL;
      case "normal":
      default:
        return Wi.NORMAL;
    }
  }
}, PL = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (ei(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, CC = {
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
}, _L = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return ei(e) ? e.number : 1;
  }
}, VL = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, GL = {
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
}, $L = {
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
}, WL = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, XL = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (ei(e))
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
}, jL = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
      return t.value;
    });
  }
}, YL = {
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
}, zL = {
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
}, JL = {
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
    for (var r = [], n = e.filter(nC), i = 0; i < n.length; i++) {
      var o = n[i], a = n[i + 1];
      if (o.type === 20) {
        var s = a && ei(a) ? a.number : 1;
        r.push({ counter: o.value, increment: s });
      }
    }
    return r;
  }
}, ZL = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(nC), n = 0; n < r.length; n++) {
      var i = r[n], o = r[n + 1];
      if (tA(i) && i.value !== "none") {
        var a = o && ei(o) ? o.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, qL = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(Po).map(function(t) {
      return CC.parse(A, t);
    });
  }
}, Ab = {
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
    var r = [], n = e.filter(ES);
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
}, eb = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && _f(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: RA,
        offsetY: RA,
        blur: RA,
        spread: RA,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        _f(o, "inset") ? r.inset = !0 : sr(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = Zt.parse(A, o);
      }
      return r;
    });
  }
}, tb = {
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
}, rb = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, nb = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Po(e) ? e.number : 0;
  }
}, ib = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = T(e, qL, t.animationDuration), this.backgroundClip = T(e, xS, t.backgroundClip), this.backgroundColor = T(e, SS, t.backgroundColor), this.backgroundImage = T(e, MS, t.backgroundImage), this.backgroundOrigin = T(e, PS, t.backgroundOrigin), this.backgroundPosition = T(e, _S, t.backgroundPosition), this.backgroundRepeat = T(e, VS, t.backgroundRepeat), this.backgroundSize = T(e, $S, t.backgroundSize), this.borderTopColor = T(e, XS, t.borderTopColor), this.borderRightColor = T(e, jS, t.borderRightColor), this.borderBottomColor = T(e, YS, t.borderBottomColor), this.borderLeftColor = T(e, zS, t.borderLeftColor), this.borderTopLeftRadius = T(e, JS, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, ZS, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, qS, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, AL, t.borderBottomLeftRadius), this.borderTopStyle = T(e, eL, t.borderTopStyle), this.borderRightStyle = T(e, tL, t.borderRightStyle), this.borderBottomStyle = T(e, rL, t.borderBottomStyle), this.borderLeftStyle = T(e, nL, t.borderLeftStyle), this.borderTopWidth = T(e, iL, t.borderTopWidth), this.borderRightWidth = T(e, oL, t.borderRightWidth), this.borderBottomWidth = T(e, aL, t.borderBottomWidth), this.borderLeftWidth = T(e, sL, t.borderLeftWidth), this.boxShadow = T(e, eb, t.boxShadow), this.color = T(e, lL, t.color), this.direction = T(e, uL, t.direction), this.display = T(e, cL, t.display), this.float = T(e, dL, t.cssFloat), this.fontFamily = T(e, $L, t.fontFamily), this.fontSize = T(e, WL, t.fontSize), this.fontStyle = T(e, YL, t.fontStyle), this.fontVariant = T(e, jL, t.fontVariant), this.fontWeight = T(e, XL, t.fontWeight), this.letterSpacing = T(e, BL, t.letterSpacing), this.lineBreak = T(e, gL, t.lineBreak), this.lineHeight = T(e, pL, t.lineHeight), this.listStyleImage = T(e, hL, t.listStyleImage), this.listStylePosition = T(e, wL, t.listStylePosition), this.listStyleType = T(e, Vf, t.listStyleType), this.marginTop = T(e, mL, t.marginTop), this.marginRight = T(e, vL, t.marginRight), this.marginBottom = T(e, CL, t.marginBottom), this.marginLeft = T(e, QL, t.marginLeft), this.opacity = T(e, _L, t.opacity);
      var i = T(e, yL, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = T(e, FL, t.overflowWrap), this.paddingTop = T(e, UL, t.paddingTop), this.paddingRight = T(e, EL, t.paddingRight), this.paddingBottom = T(e, IL, t.paddingBottom), this.paddingLeft = T(e, HL, t.paddingLeft), this.paintOrder = T(e, tb, t.paintOrder), this.position = T(e, SL, t.position), this.textAlign = T(e, xL, t.textAlign), this.textDecorationColor = T(e, VL, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = T(e, GL, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = T(e, LL, t.textShadow), this.textTransform = T(e, bL, t.textTransform), this.transform = T(e, TL, t.transform), this.transformOrigin = T(e, RL, t.transformOrigin), this.visibility = T(e, NL, t.visibility), this.webkitTextStrokeColor = T(e, rb, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, nb, t.webkitTextStrokeWidth), this.wordBreak = T(e, ML, t.wordBreak), this.zIndex = T(e, PL, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return qt(this.backgroundColor);
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
), ob = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, zL, t.content), this.quotes = T(e, Ab, t.quotes);
    }
    return A;
  }()
), uh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, JL, t.counterIncrement), this.counterReset = T(e, ZL, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var r = new tC(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var i = new rC(r.read());
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
          return _l.parse(A, i.parseComponentValue());
        case "color":
          return Zt.parse(A, i.parseComponentValue());
        case "image":
          return UB.parse(A, i.parseComponentValue());
        case "length":
          var a = i.parseComponentValue();
          return sr(a) ? a : RA;
        case "length-percentage":
          var s = i.parseComponentValue();
          return EA(s) ? s : RA;
        case "time":
          return CC.parse(A, i.parseComponentValue());
      }
      break;
  }
}, ab = "data-html2canvas-debug", sb = function(A) {
  var e = A.getAttribute(ab);
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
}, Gf = function(A, e) {
  var t = sb(A);
  return t === 1 || e === t;
}, rt = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Gf(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new ib(e, window.getComputedStyle(t, null)), Xf(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ml(this.context, t), Gf(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), lb = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Oa = 0; Oa < ch.length; Oa++)
  Hi[ch.charCodeAt(Oa)] = Oa;
var ub = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Hi[A.charCodeAt(r)], o = Hi[A.charCodeAt(r + 1)], a = Hi[A.charCodeAt(r + 2)], s = Hi[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, cb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, fb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Or = 5, EB = 11, Vu = 2, db = EB - Or, QC = 65536 >> Or, Bb = 1 << Or, Gu = Bb - 1, gb = 1024 >> Or, pb = QC + gb, hb = pb, wb = 32, mb = hb + wb, vb = 65536 >> EB, Cb = 1 << db, Qb = Cb - 1, fh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, yb = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Fb = function(A, e) {
  var t = ub(A), r = Array.isArray(t) ? fb(t) : new Uint32Array(t), n = Array.isArray(t) ? cb(t) : new Uint16Array(t), i = 24, o = fh(n, i / 2, r[4] / 2), a = r[5] === 2 ? fh(n, (i + r[4]) / 2) : yb(r, Math.ceil((i + r[4]) / 4));
  return new Ub(r[0], r[1], r[2], r[3], o, a);
}, Ub = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Or], t = (t << Vu) + (e & Gu), this.data[t];
        if (e <= 65535)
          return t = this.index[QC + (e - 55296 >> Or)], t = (t << Vu) + (e & Gu), this.data[t];
        if (e < this.highStart)
          return t = mb - vb + (e >> EB), t = this.index[t], t += e >> Or & Qb, t = this.index[t], t = (t << Vu) + (e & Gu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), dh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Eb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Da = 0; Da < dh.length; Da++)
  Eb[dh.charCodeAt(Da)] = Da;
var Ib = 1, $u = 2, Wu = 3, Bh = 4, gh = 5, Hb = 7, ph = 8, Xu = 9, ju = 10, hh = 11, wh = 12, mh = 13, vh = 14, Yu = 15, xb = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, Sb = function() {
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
}, Lb = Fb(lb), me = "×", zu = "÷", bb = function(A) {
  return Lb.get(A);
}, Tb = function(A, e, t) {
  var r = t - 2, n = e[r], i = e[t - 1], o = e[t];
  if (i === $u && o === Wu)
    return me;
  if (i === $u || i === Wu || i === Bh || o === $u || o === Wu || o === Bh)
    return zu;
  if (i === ph && [ph, Xu, hh, wh].indexOf(o) !== -1 || (i === hh || i === Xu) && (o === Xu || o === ju) || (i === wh || i === ju) && o === ju || o === mh || o === gh || o === Hb || i === Ib)
    return me;
  if (i === mh && o === vh) {
    for (; n === gh; )
      n = e[--r];
    if (n === vh)
      return me;
  }
  if (i === Yu && o === Yu) {
    for (var a = 0; n === Yu; )
      a++, n = e[--r];
    if (a % 2 === 0)
      return me;
  }
  return zu;
}, kb = function(A) {
  var e = xb(A), t = e.length, r = 0, n = 0, i = e.map(bb);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var o = me; r < t && (o = Tb(e, i, ++r)) === me; )
        ;
      if (o !== me || r === t) {
        var a = Sb.apply(null, e.slice(n, r));
        return n = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Ob = function(A) {
  for (var e = kb(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Db = function(A) {
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
}, Kb = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, n = Pl(r.data).map(function(s) {
    return yA(s);
  }), i = 0, o = {}, a = n.every(function(s, l) {
    t.setStart(r, i), t.setEnd(r, i + s.length);
    var u = t.getBoundingClientRect();
    i += s.length;
    var c = u.x > o.x || u.y > o.y;
    return o = u, l === 0 ? !0 : c;
  });
  return A.body.removeChild(e), a;
}, Rb = function() {
  return typeof new Image().crossOrigin < "u";
}, Nb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Mb = function(A) {
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
}, Pb = function(A) {
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
    var A = Db(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && Kb(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = Mb(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Pb(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = Rb();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = Nb();
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
}, Xi = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), _b = function(A, e, t, r) {
  var n = $b(e, t), i = [], o = 0;
  return n.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (KA.SUPPORT_RANGE_BOUNDS) {
        var s = yh(r, o, a.length).getClientRects();
        if (s.length > 1) {
          var l = IB(a), u = 0;
          l.forEach(function(f) {
            i.push(new Xi(f, Qt.fromDOMRectList(A, yh(r, u + o, f.length).getClientRects()))), u += f.length;
          });
        } else
          i.push(new Xi(a, Qt.fromDOMRectList(A, s)));
      } else {
        var c = r.splitText(a.length);
        i.push(new Xi(a, Vb(A, r))), r = c;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    o += a.length;
  }), i;
}, Vb = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r, e);
      var i = Ml(A, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), i;
    }
  }
  return Qt.EMPTY;
}, yh = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, IB = function(A) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return Ob(A);
}, Gb = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return Xb(A, e);
}, $b = function(A, e) {
  return e.letterSpacing !== 0 ? IB(A) : Gb(A, e);
}, Wb = [32, 160, 4961, 65792, 65793, 4153, 4241], Xb = function(A, e) {
  for (var t = vx(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var o = n.value.slice(), a = Pl(o), s = "";
      a.forEach(function(l) {
        Wb.indexOf(l) === -1 ? s += yA(l) : (s.length && r.push(s), r.push(yA(l)), s = "");
      }), s.length && r.push(s);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, jb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = Yb(t.data, r.textTransform), this.textBounds = _b(e, this.text, r, t);
    }
    return A;
  }()
), Yb = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(zb, Jb);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, zb = /(^|\s|:|-|\(|\))([a-z])/g, Jb = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, yC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(rt)
), FC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(rt)
), UC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = new XMLSerializer(), o = Ml(t, r);
      return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(rt)
), EC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(rt)
), Wf = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(rt)
), Zb = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], qb = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], A2 = function(A) {
  return A.width > A.height ? new Qt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Qt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, e2 = function(A) {
  var e = A.type === t2 ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, zs = "checkbox", Js = "radio", t2 = "password", Fh = 707406591, HB = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = e2(r), (n.type === zs || n.type === Js) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = A2(n.bounds)), n.type) {
        case zs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Zb;
          break;
        case Js:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = qb;
          break;
      }
      return n;
    }
    return e;
  }(rt)
), IC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return e;
  }(rt)
), HC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(rt)
), xC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = LC(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? $i(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Bt.TRANSPARENT, o = r.contentWindow.document.body ? $i(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Bt.TRANSPARENT;
          n.backgroundColor = qt(i) ? qt(o) ? n.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(rt)
), r2 = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var n = e.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, bC(n) && n.data.trim().length > 0)
      t.textNodes.push(new jb(A, n, t.styles));
    else if (Cn(n))
      if (DC(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(a) {
          return ls(A, a, t, r);
        });
      else {
        var o = SC(A, n);
        o.styles.isVisible() && (n2(n, o, r) ? o.flags |= 4 : i2(o.styles) && (o.flags |= 2), r2.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? ls(A, n.shadowRoot, o, r) : !Zs(n) && !TC(n) && !qs(n) && ls(A, n, o, r));
      }
}, SC = function(A, e) {
  return jf(e) ? new yC(A, e) : kC(e) ? new FC(A, e) : TC(e) ? new UC(A, e) : o2(e) ? new EC(A, e) : a2(e) ? new Wf(A, e) : s2(e) ? new HB(A, e) : qs(e) ? new IC(A, e) : Zs(e) ? new HC(A, e) : OC(e) ? new xC(A, e) : new rt(A, e);
}, LC = function(A, e) {
  var t = SC(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, n2 = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || xB(A) && t.styles.isTransparent();
}, i2 = function(A) {
  return A.isPositioned() || A.isFloating();
}, bC = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Cn = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, Xf = function(A) {
  return Cn(A) && typeof A.style < "u" && !us(A);
}, us = function(A) {
  return typeof A.className == "object";
}, o2 = function(A) {
  return A.tagName === "LI";
}, a2 = function(A) {
  return A.tagName === "OL";
}, s2 = function(A) {
  return A.tagName === "INPUT";
}, l2 = function(A) {
  return A.tagName === "HTML";
}, TC = function(A) {
  return A.tagName === "svg";
}, xB = function(A) {
  return A.tagName === "BODY";
}, kC = function(A) {
  return A.tagName === "CANVAS";
}, Uh = function(A) {
  return A.tagName === "VIDEO";
}, jf = function(A) {
  return A.tagName === "IMG";
}, OC = function(A) {
  return A.tagName === "IFRAME";
}, Eh = function(A) {
  return A.tagName === "STYLE";
}, u2 = function(A) {
  return A.tagName === "SCRIPT";
}, Zs = function(A) {
  return A.tagName === "TEXTAREA";
}, qs = function(A) {
  return A.tagName === "SELECT";
}, DC = function(A) {
  return A.tagName === "SLOT";
}, Ih = function(A) {
  return A.tagName.indexOf("-") > 0;
}, c2 = (
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
}, f2 = {
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
}, d2 = {
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
}, qr = function(A, e, t, r, n, i) {
  return A < e || A > t ? Uo(A, n, i.length > 0) : r.integers.reduce(function(o, a, s) {
    for (; A >= a; )
      A -= a, o += r.values[s];
    return o;
  }, "") + i;
}, KC = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, QA = function(A, e, t, r, n) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (KC(Math.abs(A), i, r, function(o) {
    return yA(Math.floor(o % i) + e);
  }) + n);
}, gr = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return KC(Math.abs(A), r, !1, function(n) {
    return e[Math.floor(n % r)];
  }) + t;
}, tn = 1, St = 2, Lt = 4, xi = 8, it = function(A, e, t, r, n, i) {
  if (A < -9999 || A > 9999)
    return Uo(A, 4, n.length > 0);
  var o = Math.abs(A), a = n;
  if (o === 0)
    return e[0] + a;
  for (var s = 0; o > 0 && s <= 4; s++) {
    var l = o % 10;
    l === 0 && xA(i, tn) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && xA(i, St) || l === 1 && s === 1 && xA(i, Lt) && A > 100 || l === 1 && s > 1 && xA(i, xi) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), o = Math.floor(o / 10);
  }
  return (A < 0 ? r : "") + a;
}, Sh = "十百千萬", Lh = "拾佰仟萬", bh = "マイナス", Ju = "마이너스", Uo = function(A, e, t) {
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
      return gr(A, "〇一二三四五六七八九", n);
    case 6:
      return qr(A, 1, 3999, Hh, 3, r).toLowerCase();
    case 7:
      return qr(A, 1, 3999, Hh, 3, r);
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
      return qr(A, 1, 9999, xh, 3, r);
    case 35:
      return qr(A, 1, 9999, xh, 3, r).toLowerCase();
    case 13:
      return QA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return QA(A, 6112, 6121, !0, r);
    case 15:
      return gr(A, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return gr(A, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return it(A, "零一二三四五六七八九", Sh, "負", n, St | Lt | xi);
    case 47:
      return it(A, "零壹貳參肆伍陸柒捌玖", Lh, "負", n, tn | St | Lt | xi);
    case 42:
      return it(A, "零一二三四五六七八九", Sh, "负", n, St | Lt | xi);
    case 41:
      return it(A, "零壹贰叁肆伍陆柒捌玖", Lh, "负", n, tn | St | Lt | xi);
    case 26:
      return it(A, "〇一二三四五六七八九", "十百千万", bh, n, 0);
    case 25:
      return it(A, "零壱弐参四伍六七八九", "拾百千万", bh, n, tn | St | Lt);
    case 31:
      return it(A, "영일이삼사오육칠팔구", "십백천만", Ju, i, tn | St | Lt);
    case 33:
      return it(A, "零一二三四五六七八九", "十百千萬", Ju, i, 0);
    case 32:
      return it(A, "零壹貳參四五六七八九", "拾百千", Ju, i, tn | St | Lt);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return qr(A, 1, 19999, d2, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return qr(A, 1, 10999, f2, 3, r);
    case 23:
      return gr(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return gr(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return QA(A, 3302, 3311, !0, r);
    case 28:
      return gr(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return gr(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
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
}, RC = "data-html2canvas-ignore", Th = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new c2(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = B2(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, o = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = h2(n).then(function() {
        return jA(r, void 0, void 0, function() {
          var u, c;
          return VA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(C2), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, p2(s)] : [3, 4];
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
      return s.open(), s.write(m2(document.doctype) + "<html></html>"), v2(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Gf(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (kC(e))
        return this.createCanvasClone(e);
      if (Uh(e))
        return this.createVideoClone(e);
      if (Eh(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return jf(t) && (jf(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Ih(t) ? this.createCustomElementClone(t) : t;
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
      (!Cn(t) || !u2(t) && !t.hasAttribute(RC) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Cn(t) || !Eh(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (Cn(i) && DC(i) && typeof i.assignedNodes == "function") {
          var o = i.assignedNodes();
          o.length && o.forEach(function(a) {
            return n.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (bC(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && Cn(e) && (Xf(e) || us(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(e), o = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Xf(n) && (this.clonedReferenceElement = n), xB(n) && F2(n);
        var s = this.counters.parse(new uh(this.context, i)), l = this.resolvePseudoContent(e, n, o, ji.BEFORE);
        Ih(e) && (t = !0), Uh(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var u = this.resolvePseudoContent(e, n, a, ji.AFTER);
        return u && n.appendChild(u), this.counters.pop(s), (i && (this.options.copyStyles || us(e)) && !OC(e) || t) && Zu(i, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (Zs(e) || qs(e)) && (Zs(n) || qs(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var i = this;
      if (r) {
        var o = r.content, a = t.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new uh(this.context, r));
          var s = new ob(this.context, r), l = a.createElement("html2canvaspseudoelement");
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
                var h = c.values.filter(Xn), w = h[0], y = h[1];
                if (w && tA(w)) {
                  var g = i.counters.getCounterValue(w.value), d = y && tA(y) ? Vf.parse(i.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Uo(g, d, !1)));
                }
              } else if (c.name === "counters") {
                var p = c.values.filter(Xn), w = p[0], m = p[1], y = p[2];
                if (w && tA(w)) {
                  var v = i.counters.getCounterValues(w.value), C = y && tA(y) ? Vf.parse(i.context, y.value) : 3, F = m && m.type === 0 ? m.value : "", U = v.map(function(P) {
                    return Uo(P, C, !1);
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
          }), l.className = Yf + " " + zf;
          var u = n === ji.BEFORE ? " " + Yf : " " + zf;
          return us(t) ? t.className.baseValue += u : t.className += u, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), ji;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(ji || (ji = {}));
var B2 = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(RC, "true"), A.body.appendChild(t), t;
}, g2 = function(A) {
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
}, p2 = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(g2));
}, h2 = function(A) {
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
}, w2 = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Zu = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    w2.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, m2 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, v2 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, C2 = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, Q2 = ":before", y2 = ":after", Yf = "___html2canvas___pseudoelement_before", zf = "___html2canvas___pseudoelement_after", kh = `{
    content: "" !important;
    display: none !important;
}`, F2 = function(A) {
  U2(A, "." + Yf + Q2 + kh + `
         .` + zf + y2 + kh);
}, U2 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, NC = (
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
), E2 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ac(e) || S2(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return jA(this, void 0, void 0, function() {
        var t, r, n, i, o = this;
        return VA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = NC.isSameOrigin(e), r = !qu(e) && this._options.useCORS === !0 && KA.SUPPORT_CORS_IMAGES && !t, n = !qu(e) && !t && !Ac(e) && typeof this._options.proxy == "string" && KA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !qu(e) && !Ac(e) && !n && !r ? [
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
                }, u.onerror = l, (L2(i) || r) && (u.crossOrigin = "anonymous"), u.src = i, u.complete === !0 && setTimeout(function() {
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
), I2 = /^data:image\/svg\+xml/i, H2 = /^data:image\/.*;base64,/i, x2 = /^data:image\/.*/i, S2 = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !b2(A);
}, qu = function(A) {
  return x2.test(A);
}, L2 = function(A) {
  return H2.test(A);
}, Ac = function(A) {
  return A.substr(0, 4) === "blob";
}, b2 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || I2.test(A);
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
), An = function(A, e, t) {
  return new b(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Ka = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = An(this.start, this.startControl, e), n = An(this.startControl, this.endControl, e), i = An(this.endControl, this.end, e), o = An(r, n, e), a = An(n, i, e), s = An(o, a, e);
      return t ? new A(this.start, r, o, s) : new A(s, a, i, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Qe = function(A) {
  return A.type === 1;
}, T2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Ii(t.borderTopLeftRadius, r.width, r.height), i = n[0], o = n[1], a = Ii(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], u = Ii(t.borderBottomRightRadius, r.width, r.height), c = u[0], f = u[1], B = Ii(t.borderBottomLeftRadius, r.width, r.height), h = B[0], w = B[1], y = [];
      y.push((i + s) / r.width), y.push((h + c) / r.width), y.push((o + w) / r.height), y.push((l + f) / r.height);
      var g = Math.max.apply(Math, y);
      g > 1 && (i /= g, o /= g, s /= g, l /= g, c /= g, f /= g, h /= g, w /= g);
      var d = r.width - s, p = r.height - f, m = r.width - c, v = r.height - w, C = t.borderTopWidth, F = t.borderRightWidth, U = t.borderBottomWidth, E = t.borderLeftWidth, S = nA(t.paddingTop, e.bounds.width), P = nA(t.paddingRight, e.bounds.width), V = nA(t.paddingBottom, e.bounds.width), M = nA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + E / 3, r.top + C / 3, i - E / 3, o - C / 3, AA.TOP_LEFT) : new b(r.left + E / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 3, s - F / 3, l - C / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? cA(r.left + m, r.top + p, c - F / 3, f - U / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 3, r.top + r.height - U / 3), this.bottomLeftBorderDoubleOuterBox = h > 0 || w > 0 ? cA(r.left + E / 3, r.top + v, h - E / 3, w - U / 3, AA.BOTTOM_LEFT) : new b(r.left + E / 3, r.top + r.height - U / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + E * 2 / 3, r.top + C * 2 / 3, i - E * 2 / 3, o - C * 2 / 3, AA.TOP_LEFT) : new b(r.left + E * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C * 2 / 3, s - F * 2 / 3, l - C * 2 / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? cA(r.left + m, r.top + p, c - F * 2 / 3, f - U * 2 / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + r.height - U * 2 / 3), this.bottomLeftBorderDoubleInnerBox = h > 0 || w > 0 ? cA(r.left + E * 2 / 3, r.top + v, h - E * 2 / 3, w - U * 2 / 3, AA.BOTTOM_LEFT) : new b(r.left + E * 2 / 3, r.top + r.height - U * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? cA(r.left + E / 2, r.top + C / 2, i - E / 2, o - C / 2, AA.TOP_LEFT) : new b(r.left + E / 2, r.top + C / 2), this.topRightBorderStroke = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 2, s - F / 2, l - C / 2, AA.TOP_RIGHT) : new b(r.left + r.width - F / 2, r.top + C / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? cA(r.left + m, r.top + p, c - F / 2, f - U / 2, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 2, r.top + r.height - U / 2), this.bottomLeftBorderStroke = h > 0 || w > 0 ? cA(r.left + E / 2, r.top + v, h - E / 2, w - U / 2, AA.BOTTOM_LEFT) : new b(r.left + E / 2, r.top + r.height - U / 2), this.topLeftBorderBox = i > 0 || o > 0 ? cA(r.left, r.top, i, o, AA.TOP_LEFT) : new b(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? cA(r.left + d, r.top, s, l, AA.TOP_RIGHT) : new b(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || f > 0 ? cA(r.left + m, r.top + p, c, f, AA.BOTTOM_RIGHT) : new b(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = h > 0 || w > 0 ? cA(r.left, r.top + v, h, w, AA.BOTTOM_LEFT) : new b(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || o > 0 ? cA(r.left + E, r.top + C, Math.max(0, i - E), Math.max(0, o - C), AA.TOP_LEFT) : new b(r.left + E, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width - F), r.top + C, d > r.width + F ? 0 : Math.max(0, s - F), Math.max(0, l - C), AA.TOP_RIGHT) : new b(r.left + r.width - F, r.top + C), this.bottomRightPaddingBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - E), r.top + Math.min(p, r.height - U), Math.max(0, c - F), Math.max(0, f - U), AA.BOTTOM_RIGHT) : new b(r.left + r.width - F, r.top + r.height - U), this.bottomLeftPaddingBox = h > 0 || w > 0 ? cA(r.left + E, r.top + Math.min(v, r.height - U), Math.max(0, h - E), Math.max(0, w - U), AA.BOTTOM_LEFT) : new b(r.left + E, r.top + r.height - U), this.topLeftContentBox = i > 0 || o > 0 ? cA(r.left + E + M, r.top + C + S, Math.max(0, i - (E + M)), Math.max(0, o - (C + S)), AA.TOP_LEFT) : new b(r.left + E + M, r.top + C + S), this.topRightContentBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width + E + M), r.top + C + S, d > r.width + E + M ? 0 : s - E + M, l - (C + S), AA.TOP_RIGHT) : new b(r.left + r.width - (F + P), r.top + C + S), this.bottomRightContentBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - (E + M)), r.top + Math.min(p, r.height + C + S), Math.max(0, c - (F + P)), f - (U + V), AA.BOTTOM_RIGHT) : new b(r.left + r.width - (F + P), r.top + r.height - (U + V)), this.bottomLeftContentBox = h > 0 || w > 0 ? cA(r.left + E + M, r.top + v, Math.max(0, h - (E + M)), w - (U + V), AA.BOTTOM_LEFT) : new b(r.left + E + M, r.top + r.height - (U + V));
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
}, k2 = function(A) {
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
}, O2 = (
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
), D2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), K2 = function(A) {
  return A.type === 0;
}, MC = function(A) {
  return A.type === 1;
}, R2 = function(A) {
  return A.type === 2;
}, Oh = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, N2 = function(A, e, t, r, n) {
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
}, PC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), _C = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new T2(this.container), this.container.styles.opacity < 1 && this.effects.push(new D2(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new O2(r, n, i));
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
          return !MC(s);
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
    ), a = new _C(n, A);
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
      var l = i || n.styles.isPositioned() ? t : e, u = new PC(a);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var c = n.styles.zIndex.order;
        if (c < 0) {
          var f = 0;
          l.negativeZIndex.some(function(h, w) {
            return c > h.element.container.styles.zIndex.order ? (f = w, !1) : f > 0;
          }), l.negativeZIndex.splice(f, 0, u);
        } else if (c > 0) {
          var B = 0;
          l.positiveZIndex.some(function(h, w) {
            return c >= h.element.container.styles.zIndex.order ? (B = w + 1, !1) : B > 0;
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
    ) && VC(n, s);
  });
}, VC = function(A, e) {
  for (var t = A instanceof Wf ? A.start : 1, r = A instanceof Wf ? A.reversed : !1, n = 0; n < e.length; n++) {
    var i = e[n];
    i.container instanceof EC && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Uo(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, M2 = function(A) {
  var e = new _C(A, null), t = new PC(e), r = [];
  return Jf(e, t, t, r), VC(e.container, r), t;
}, Dh = function(A, e) {
  switch (e) {
    case 0:
      return Ue(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return Ue(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return Ue(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Ue(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, P2 = function(A, e) {
  switch (e) {
    case 0:
      return Ue(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return Ue(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return Ue(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return Ue(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, _2 = function(A, e) {
  switch (e) {
    case 0:
      return Ue(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return Ue(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return Ue(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return Ue(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, V2 = function(A, e) {
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
  return Qe(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), Qe(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, Ue = function(A, e, t, r) {
  var n = [];
  return Qe(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A), Qe(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), Qe(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), Qe(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e), n;
}, GC = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, tl = function(A) {
  var e = A.styles, t = A.bounds, r = nA(e.paddingLeft, t.width), n = nA(e.paddingRight, t.width), i = nA(e.paddingTop, t.width), o = nA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + o));
}, G2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : GC(e);
}, $2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : GC(e);
}, ec = function(A, e, t) {
  var r = G2(rn(A.styles.backgroundOrigin, e), A), n = $2(rn(A.styles.backgroundClip, e), A), i = W2(rn(A.styles.backgroundSize, e), t, r), o = i[0], a = i[1], s = Ii(rn(A.styles.backgroundPosition, e), r.width - o, r.height - a), l = X2(rn(A.styles.backgroundRepeat, e), s, i, r, n), u = Math.round(r.left + s[0]), c = Math.round(r.top + s[1]);
  return [l, u, c, o, a];
}, en = function(A) {
  return tA(A) && A.value === Ln.AUTO;
}, Ma = function(A) {
  return typeof A == "number";
}, W2 = function(A, e, t) {
  var r = e[0], n = e[1], i = e[2], o = A[0], a = A[1];
  if (!o)
    return [0, 0];
  if (EA(o) && a && EA(a))
    return [nA(o, t.width), nA(a, t.height)];
  var s = Ma(i);
  if (tA(o) && (o.value === Ln.CONTAIN || o.value === Ln.COVER)) {
    if (Ma(i)) {
      var l = t.width / t.height;
      return l < i != (o.value === Ln.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var u = Ma(r), c = Ma(n), f = u || c;
  if (en(o) && (!a || en(a))) {
    if (u && c)
      return [r, n];
    if (!s && !f)
      return [t.width, t.height];
    if (f && s) {
      var B = u ? r : n * i, h = c ? n : r / i;
      return [B, h];
    }
    var w = u ? r : t.width, y = c ? n : t.height;
    return [w, y];
  }
  if (s) {
    var g = 0, d = 0;
    return EA(o) ? g = nA(o, t.width) : EA(a) && (d = nA(a, t.height)), en(o) ? g = d * i : (!a || en(a)) && (d = g / i), [g, d];
  }
  var p = null, m = null;
  if (EA(o) ? p = nA(o, t.width) : a && EA(a) && (m = nA(a, t.height)), p !== null && (!a || en(a)) && (m = u && c ? p / r * n : t.height), m !== null && en(o) && (p = u && c ? m / n * r : t.width), p !== null && m !== null)
    return [p, m];
  throw new Error("Unable to calculate background-size for element");
}, rn = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, X2 = function(A, e, t, r, n) {
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
}, j2 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Kh = "Hidden Text", Y2 = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = j2, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Kh)), r.appendChild(i), r.appendChild(n);
      var a = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Kh)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return o.removeChild(r), { baseline: a, middle: s };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), $C = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), z2 = 1e4, J2 = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Y2(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), R2(t) && (this.ctx.globalAlpha = t.opacity), K2(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), MC(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return jA(this, void 0, void 0, function() {
        var r;
        return VA(this, function(n) {
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
      return jA(this, void 0, void 0, function() {
        return VA(this, function(r) {
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
        var o = IB(t.text);
        o.reduce(function(a, s) {
          return i.ctx.fillText(s, a, t.bounds.top + n), a + i.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(o) {
        return o === "normal" || o === "small-caps";
      }).join(""), n = tT(t.fontFamily).join(", "), i = Po(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return jA(this, void 0, void 0, function() {
        var n, i, o, a, s, l, u, c, f = this;
        return VA(this, function(B) {
          return n = this.createFontStyle(r), i = n[0], o = n[1], a = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, a), l = s.baseline, u = s.middle, c = r.paintOrder, t.textBounds.forEach(function(h) {
            c.forEach(function(w) {
              switch (w) {
                case 0:
                  f.ctx.fillStyle = bA(r.color), f.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && h.text.trim().length && (y.slice(0).reverse().forEach(function(g) {
                    f.ctx.shadowColor = bA(g.color), f.ctx.shadowOffsetX = g.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = g.offsetY.number * f.options.scale, f.ctx.shadowBlur = g.blur.number, f.renderTextWithLetterSpacing(h, r.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = bA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(g) {
                    switch (g) {
                      case 1:
                        f.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top + l), h.bounds.width, 1);
                        break;
                      case 2:
                        f.ctx.fillRect(h.bounds.left, Math.round(h.bounds.top), h.bounds.width, 1);
                        break;
                      case 3:
                        f.ctx.fillRect(h.bounds.left, Math.ceil(h.bounds.top + u), h.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && h.text.trim().length && (f.ctx.strokeStyle = bA(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(h.text, h.bounds.left, h.bounds.top + l)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
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
      return jA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, d, d, l, u, c, f, m, B, h, v, w, y, g, d, p, m, v;
        return VA(this, function(C) {
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
              if (!(r instanceof yC)) return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof FC && this.renderReplacedElement(r, n, r.canvas), !(r instanceof UC)) return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof xC && r.tree ? (l = new e(this.context, {
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
              if (r instanceof HB && (c = Math.min(r.bounds.width, r.bounds.height), r.type === zs ? r.checked && (this.ctx.save(), this.path([
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79),
                new b(r.bounds.left + c * 0.16, r.bounds.top + c * 0.5549),
                new b(r.bounds.left + c * 0.27347, r.bounds.top + c * 0.44071),
                new b(r.bounds.left + c * 0.39694, r.bounds.top + c * 0.5649),
                new b(r.bounds.left + c * 0.72983, r.bounds.top + c * 0.23),
                new b(r.bounds.left + c * 0.84, r.bounds.top + c * 0.34085),
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore()) : r.type === Js && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore())), Z2(r) && r.value.length) {
                switch (f = this.createFontStyle(i), m = f[0], B = f[1], h = this.fontMetrics.getMetrics(m, B).baseline, this.ctx.font = m, this.ctx.fillStyle = bA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = AT(r.styles.textAlign), v = tl(r), w = 0, r.styles.textAlign) {
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
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Xi(r.value, y), i.letterSpacing, h), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!xA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (g = r.styles.listStyleImage, g.type !== 0) return [3, 18];
              d = void 0, p = g.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(p)];
            case 16:
              return d = C.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + p), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(i)[0], this.ctx.font = m, this.ctx.fillStyle = bA(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Qt(r.bounds.left, r.bounds.top + nA(r.styles.paddingTop, r.bounds.width), r.bounds.width, ah(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Xi(t.listValue, v), i.letterSpacing, ah(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return jA(this, void 0, void 0, function() {
        var r, n, g, i, o, g, a, s, g, l, u, g, c, f, g, B, h, g, w, y, g;
        return VA(this, function(d) {
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
              B = 0, h = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return B < h.length ? (g = h[B], [4, this.renderStack(g)]) : [3, 26];
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
        var o = Qe(n) ? n.start : n;
        i === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y), Qe(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return jA(this, void 0, void 0, function() {
        var r, n, i, o, a, s;
        return VA(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(u) {
                var c, f, B, S, G, K, M, _, U, h, S, G, K, M, _, w, y, g, d, p, m, v, C, F, U, E, S, P, V, M, _, Z, G, K, I, x, L, R, X, dA, BA, gA;
                return VA(this, function(rA) {
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
                      ]), S = B[0], G = B[1], K = B[2], M = B[3], _ = B[4], U = i.ctx.createPattern(i.resizeImage(c, M, _), "repeat"), i.renderRepeat(S, U, G, K)), [3, 6];
                    case 5:
                      KS(u) ? (h = ec(t, r, [null, null, null]), S = h[0], G = h[1], K = h[2], M = h[3], _ = h[4], w = bS(u.angle, M, _), y = w[0], g = w[1], d = w[2], p = w[3], m = w[4], v = document.createElement("canvas"), v.width = M, v.height = _, C = v.getContext("2d"), F = C.createLinearGradient(g, p, d, m), ih(u.stops, y).forEach(function(XA) {
                        return F.addColorStop(XA.stop, bA(XA.color));
                      }), C.fillStyle = F, C.fillRect(0, 0, M, _), M > 0 && _ > 0 && (U = i.ctx.createPattern(v, "repeat"), i.renderRepeat(S, U, G, K))) : RS(u) && (E = ec(t, r, [
                        null,
                        null,
                        null
                      ]), S = E[0], P = E[1], V = E[2], M = E[3], _ = E[4], Z = u.position.length === 0 ? [FB] : u.position, G = nA(Z[0], M), K = nA(Z[Z.length - 1], _), I = TS(u, G, K, M, _), x = I[0], L = I[1], x > 0 && L > 0 && (R = i.ctx.createRadialGradient(P + G, V + K, 0, P + G, V + K, x), ih(u.stops, x * 2).forEach(function(XA) {
                        return R.addColorStop(XA.stop, bA(XA.color));
                      }), i.path(S), i.ctx.fillStyle = R, x !== L ? (X = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, BA = L / x, gA = 1 / BA, i.ctx.save(), i.ctx.translate(X, dA), i.ctx.transform(1, 0, 0, BA, 0, 0), i.ctx.translate(-X, -dA), i.ctx.fillRect(P, gA * (V - dA) + dA, M, _ * gA), i.ctx.restore()) : i.ctx.fill())), rA.label = 6;
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
      return jA(this, void 0, void 0, function() {
        return VA(this, function(i) {
          return this.path(Dh(n, r)), this.ctx.fillStyle = bA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, i) {
      return jA(this, void 0, void 0, function() {
        var o, a;
        return VA(this, function(s) {
          switch (s.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
            case 1:
              return s.sent(), [
                2
                /*return*/
              ];
            case 2:
              return o = P2(i, n), this.path(o), this.ctx.fillStyle = bA(t), this.ctx.fill(), a = _2(i, n), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return jA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, l, u, c = this;
        return VA(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !qt(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], o = q2(rn(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), qt(r.backgroundColor) || (this.ctx.fillStyle = bA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(B) {
                c.ctx.save();
                var h = Al(t.curves), w = B.inset ? 0 : z2, y = N2(h, -w + (B.inset ? 1 : -1) * B.spread.number, (B.inset ? 1 : -1) * B.spread.number, B.spread.number * (B.inset ? -2 : 2), B.spread.number * (B.inset ? -2 : 2));
                B.inset ? (c.path(h), c.ctx.clip(), c.mask(y)) : (c.mask(h), c.ctx.clip(), c.path(y)), c.ctx.shadowOffsetX = B.offsetX.number + w, c.ctx.shadowOffsetY = B.offsetY.number, c.ctx.shadowColor = bA(B.color), c.ctx.shadowBlur = B.blur.number, c.ctx.fillStyle = B.inset ? bA(B.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), f.label = 2;
            case 2:
              a = 0, s = 0, l = i, f.label = 3;
            case 3:
              return s < l.length ? (u = l[s], u.style !== 0 && !qt(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
      return jA(this, void 0, void 0, function() {
        var a, s, l, u, c, f, B, h, w, y, g, d, p, m, v, C, v, C;
        return VA(this, function(F) {
          return this.ctx.save(), a = V2(i, n), s = Dh(i, n), o === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, u = s[0].start.y) : (l = s[0].x, u = s[0].y), Qe(s[1]) ? (c = s[1].end.x, f = s[1].end.y) : (c = s[1].x, f = s[1].y), n === 0 || n === 2 ? B = Math.abs(l - c) : B = Math.abs(u - f), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), h = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, o === 3 && (h = r, w = r), y = !0, B <= h * 2 ? y = !1 : B <= h * 2 + w ? (g = B / (2 * h + w), h *= g, w *= g) : (d = Math.floor((B + w) / (h + w)), p = (B - d * h) / (d - 1), m = (B - (d + 1) * h) / d, w = m <= 0 || Math.abs(w - p) < Math.abs(w - m) ? p : m), y && (o === 3 ? this.ctx.setLineDash([0, h + w]) : this.ctx.setLineDash([h, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = bA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Qe(s[0]) && (v = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke()), Qe(s[1]) && (v = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return jA(this, void 0, void 0, function() {
        var r;
        return VA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = M2(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }($C)
), Z2 = function(A) {
  return A instanceof HC || A instanceof IC ? !0 : A instanceof HB && A.type !== Js && A.type !== zs;
}, q2 = function(A, e) {
  switch (A) {
    case 0:
      return Al(e);
    case 2:
      return k2(e);
    case 1:
    default:
      return el(e);
  }
}, AT = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, eT = ["-apple-system", "system-ui"], tT = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return eT.indexOf(e) === -1;
  }) : A;
}, rT = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return jA(this, void 0, void 0, function() {
        var r, n;
        return VA(this, function(i) {
          switch (i.label) {
            case 0:
              return r = $f(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, nT(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }($C)
), nT = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, iT = (
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
), oT = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new iT({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new E2(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), aT = function(A, e) {
  return e === void 0 && (e = {}), sT(A, e);
};
typeof window < "u" && NC.setContext(window);
var sT = function(A, e) {
  return jA(void 0, void 0, void 0, function() {
    var t, r, n, i, o, a, s, l, u, c, f, B, h, w, y, g, d, p, m, v, F, C, F, U, E, S, P, V, M, _, Z, G, K, I, x, L, R, X, dA, BA;
    return VA(this, function(gA) {
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
            windowWidth: (V = e.windowWidth) !== null && V !== void 0 ? V : r.innerWidth,
            windowHeight: (M = e.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
            scrollX: (_ = e.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
            scrollY: (Z = e.scrollY) !== null && Z !== void 0 ? Z : r.pageYOffset
          }, a = new Qt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new oT(i, a), l = (G = e.foreignObjectRendering) !== null && G !== void 0 ? G : !1, u = {
            allowTaint: (K = e.allowTaint) !== null && K !== void 0 ? K : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), c = new Th(s, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return B = gA.sent(), h = xB(f) || l2(f) ? N4(f.ownerDocument) : Ml(s, f), w = h.width, y = h.height, g = h.left, d = h.top, p = lT(s, f, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: p,
            scale: (x = (I = e.scale) !== null && I !== void 0 ? I : r.devicePixelRatio) !== null && x !== void 0 ? x : 1,
            x: ((L = e.x) !== null && L !== void 0 ? L : 0) + g,
            y: ((R = e.y) !== null && R !== void 0 ? R : 0) + d,
            width: (X = e.width) !== null && X !== void 0 ? X : Math.ceil(w),
            height: (dA = e.height) !== null && dA !== void 0 ? dA : Math.ceil(y)
          }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), F = new rT(s, m), [4, F.render(f)]) : [3, 3];
        case 2:
          return v = gA.sent(), [3, 5];
        case 3:
          return s.logger.debug("Document cloned, element located at " + g + "," + d + " with size " + w + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = LC(s, f), p === C.styles.backgroundColor && (C.styles.backgroundColor = Bt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new J2(s, m), [4, F.render(C)];
        case 4:
          v = gA.sent(), gA.label = 5;
        case 5:
          return (!((BA = e.removeContainer) !== null && BA !== void 0) || BA) && (Th.destroy(B) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, lT = function(A, e, t) {
  var r = e.ownerDocument, n = r.documentElement ? $i(A, getComputedStyle(r.documentElement).backgroundColor) : Bt.TRANSPARENT, i = r.body ? $i(A, getComputedStyle(r.body).backgroundColor) : Bt.TRANSPARENT, o = typeof t == "string" ? $i(A, t) : t === null ? Bt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? qt(n) ? qt(i) ? o : i : n : o;
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
function uT(A) {
  return new XMLSerializer().serializeToString(A);
}
const cT = /* @__PURE__ */ new Set([
  "BUTTON",
  "A",
  "INPUT",
  "SELECT",
  "TEXTAREA"
]);
function WC(A, e) {
  A.childNodes.forEach((t) => {
    t instanceof HTMLElement && e(t) && WC(t, e);
  });
}
function fT(A, e, t, r) {
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
function dT() {
  const A = [];
  let e = 0;
  return WC(document.body, (t) => {
    if (t.attributes.getNamedItem("data-isgandalf"))
      return !1;
    const r = window.getComputedStyle(t), n = r.cursor;
    if (t.checkVisibility() && (cT.has(t.tagName) || t.onclick != null || n == "pointer" || n == "grab")) {
      const i = t.getBoundingClientRect();
      return i.width > 0 && i.height > 0 && A.push(fT(t, i, r, e++)), !1;
    }
    return !0;
  }), A;
}
async function BT({
  product: A,
  query: e,
  previousSteps: t
}) {
  var g;
  const r = uT(
    Rh(document.documentElement.outerHTML)
  ), n = dT(), i = await aT(document.body, {
    ignoreElements: (d) => d.hasAttribute("data-isgandalf")
  }), o = await new Promise(
    (d) => i.toBlob((p) => d(p))
  );
  if (location.hash) {
    const d = document.createElement("a");
    document.body.appendChild(d);
    const p = window.URL.createObjectURL(o);
    d.href = p, d.download = "screenshot.png", d.click(), setTimeout(() => {
      window.URL.revokeObjectURL(p), document.body.removeChild(d);
    }, 0), console.log(r);
  }
  const a = JSON.stringify(
    n.map((d) => {
      const { element: p, ...m } = d;
      return {
        ...m,
        html: Rh(p.outerHTML).body.innerHTML
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
  const { Instructions: B, itemId: h, hasMoreInstructions: w } = f;
  console.log(
    "Instructions:",
    B,
    "itemId:",
    h,
    "hasMoreInstructions:",
    w
  );
  const y = ((g = n.find((d) => d.itemId === h)) == null ? void 0 : g.element) ?? null;
  return y || console.warn("No valid target element found for the popover."), {
    Instructions: B,
    targetElement: y,
    hasMoreInstructions: w
  };
}
const gT = Q.forwardRef(
  ({ state: A, onClick: e }, t) => {
    const [r, n] = Q.useState(!1), i = Q.useRef();
    return Q.useImperativeHandle(t, () => ({
      showComplete: () => {
        n(!0), i.current && clearTimeout(i.current), i.current = setTimeout(() => {
          n(!1);
        }, 1e3);
      }
    })), /* @__PURE__ */ W.jsx(
      "button",
      {
        className: _v(ce.widgetButton, {
          [ce.loading]: A === "loading",
          [ce.waitingForUser]: A === "waitingForUser",
          [ce.withComplete]: r
        }),
        onMouseDown: (o) => {
          o.stopPropagation();
        },
        onPointerDown: (o) => {
          o.stopPropagation();
        },
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), e();
        },
        "aria-label": "Toggle chat",
        "data-isgandalf": !0,
        children: /* @__PURE__ */ W.jsxs("div", { className: ce.buttonContentWrapper, children: [
          /* @__PURE__ */ W.jsx("div", { className: ce.buttonContent, children: "💬" }),
          /* @__PURE__ */ W.jsx("div", { className: ce.buttonContent, children: "✅" })
        ] })
      }
    );
  }
);
function pT(A, e) {
  return e === A || e.contains(A);
}
function hT(A) {
  const e = Q.useRef(A);
  return e.current = A, Q.useCallback(() => e.current(), []);
}
const wT = ({ productName: A, isWidgetVisible: e }) => {
  var m, v;
  const [t, r] = Q.useState(""), n = Q.useRef(null), [i, o] = Q.useState("idle"), [a, s] = Q.useState(!1), [l, u] = Q.useState(""), c = Q.useRef(null), f = Q.useRef(null), { refs: B, floatingStyles: h, middlewareData: w, placement: y } = v1({
    middleware: [r1(10), i1(), n1(), o1({ element: c })]
  }), g = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[y.split("-")[0]] || "top", d = hT(() => {
    var U;
    const C = n.current;
    if (!C)
      return;
    if (!C.hasMoreInstructions) {
      r(""), o("idle"), (U = f.current) == null || U.showComplete(), u("");
      return;
    }
    const F = C.query;
    F && (B.setReference(null), setTimeout(() => {
      p(F);
    }, 100));
  });
  Q.useEffect(() => {
    const C = (U) => {
      U.key === "p" && (U.metaKey || U.ctrlKey) && (U.preventDefault(), s(!0));
    };
    document.addEventListener("keydown", C);
    const F = (U) => {
      U.target instanceof Element && B.domReference.current && B.domReference.current instanceof Element && pT(U.target, B.domReference.current) && d();
    };
    return document.addEventListener("click", F), () => {
      document.removeEventListener("keydown", C), document.removeEventListener("click", F);
    };
  }, []);
  const p = async (C) => {
    var F, U;
    if (console.log("Submitting query from index:", C), i !== "loading") {
      o("loading");
      try {
        const { Instructions: E, targetElement: S, hasMoreInstructions: P } = await BT({
          query: C,
          previousSteps: ((F = n.current) == null ? void 0 : F.completedSteps) ?? [],
          product: A
        });
        E && r(E), n.current = {
          query: C,
          completedSteps: [
            ...((U = n.current) == null ? void 0 : U.completedSteps) ?? [],
            E
          ],
          hasMoreInstructions: P
        }, B.setReference(S), o(P ? "waitingForUser" : "idle"), s(!1);
      } catch (E) {
        console.error(E), o("idle");
      }
    }
  };
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx("div", { className: ce.container, "data-isGandalf": !0, children: /* @__PURE__ */ W.jsx(
      Q4,
      {
        open: a,
        query: l,
        isApiCallInProgress: i === "loading",
        setQuery: u,
        setOpen: s,
        handleSubmit: p
      }
    ) }),
    t !== "" && /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: B.setFloating,
        style: h,
        "data-isgandalf": !0,
        children: /* @__PURE__ */ W.jsxs("div", { className: ce.floatingPopover, children: [
          t,
          i === "loading" && /* @__PURE__ */ W.jsx("div", { className: ce.popoverLoadingOuter, children: /* @__PURE__ */ W.jsx("div", { className: ce.popoverLoading }) }),
          /* @__PURE__ */ W.jsx(
            "div",
            {
              ref: c,
              className: ce.arrow,
              style: {
                [g]: "-6px",
                ...((m = w.arrow) == null ? void 0 : m.x) != null && {
                  left: `${w.arrow.x}px`
                },
                ...((v = w.arrow) == null ? void 0 : v.y) != null && {
                  top: `${w.arrow.y}px`
                }
              }
            }
          )
        ] })
      }
    ),
    e && /* @__PURE__ */ W.jsx(
      gT,
      {
        ref: f,
        state: i,
        onClick: () => {
          s(!0);
        }
      }
    )
  ] });
}, SB = document.createElement("div");
SB.className = ce.outerContainer;
document.body.appendChild(SB);
const mT = window.__gandalf_product ?? "demo";
mF.render(
  /* @__PURE__ */ W.jsx(wT, { productName: mT, isWidgetVisible: !0 }),
  SB
);
