function YC(A, e) {
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
function il(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var _h = { exports: {} }, ol = {}, Gh = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io = Symbol.for("react.element"), jC = Symbol.for("react.portal"), JC = Symbol.for("react.fragment"), ZC = Symbol.for("react.strict_mode"), qC = Symbol.for("react.profiler"), AQ = Symbol.for("react.provider"), eQ = Symbol.for("react.context"), tQ = Symbol.for("react.forward_ref"), rQ = Symbol.for("react.suspense"), nQ = Symbol.for("react.memo"), iQ = Symbol.for("react.lazy"), TB = Symbol.iterator;
function oQ(A) {
  return A === null || typeof A != "object" ? null : (A = TB && A[TB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Vh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $h = Object.assign, Wh = {};
function jn(A, e, t) {
  this.props = A, this.context = e, this.refs = Wh, this.updater = t || Vh;
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
jn.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function Xh() {
}
Xh.prototype = jn.prototype;
function qf(A, e, t) {
  this.props = A, this.context = e, this.refs = Wh, this.updater = t || Vh;
}
var Ad = qf.prototype = new Xh();
Ad.constructor = qf;
$h(Ad, jn.prototype);
Ad.isPureReactComponent = !0;
var kB = Array.isArray, zh = Object.prototype.hasOwnProperty, ed = { current: null }, Yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(A, e, t) {
  var r, n = {}, i = null, o = null;
  if (e != null) for (r in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (i = "" + e.key), e) zh.call(e, r) && !Yh.hasOwnProperty(r) && (n[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) n.children = t;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    n.children = s;
  }
  if (A && A.defaultProps) for (r in a = A.defaultProps, a) n[r] === void 0 && (n[r] = a[r]);
  return { $$typeof: Io, type: A, key: i, ref: o, props: n, _owner: ed.current };
}
function aQ(A, e) {
  return { $$typeof: Io, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function td(A) {
  return typeof A == "object" && A !== null && A.$$typeof === Io;
}
function sQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var OB = /\/+/g;
function ql(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? sQ("" + A.key) : e.toString(36);
}
function Ga(A, e, t, r, n) {
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
        case Io:
        case jC:
          o = !0;
      }
  }
  if (o) return o = A, n = n(o), A = r === "" ? "." + ql(o, 0) : r, kB(n) ? (t = "", A != null && (t = A.replace(OB, "$&/") + "/"), Ga(n, e, t, "", function(l) {
    return l;
  })) : n != null && (td(n) && (n = aQ(n, t + (!n.key || o && o.key === n.key ? "" : ("" + n.key).replace(OB, "$&/") + "/") + A)), e.push(n)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", kB(A)) for (var a = 0; a < A.length; a++) {
    i = A[a];
    var s = r + ql(i, a);
    o += Ga(i, e, t, s, n);
  }
  else if (s = oQ(A), typeof s == "function") for (A = s.call(A), a = 0; !(i = A.next()).done; ) i = i.value, s = r + ql(i, a++), o += Ga(i, e, t, s, n);
  else if (i === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Vo(A, e, t) {
  if (A == null) return A;
  var r = [], n = 0;
  return Ga(A, r, "", "", function(i) {
    return e.call(t, i, n++);
  }), r;
}
function lQ(A) {
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
var qA = { current: null }, Va = { transition: null }, uQ = { ReactCurrentDispatcher: qA, ReactCurrentBatchConfig: Va, ReactCurrentOwner: ed };
function Jh() {
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
  if (!td(A)) throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
Y.Component = jn;
Y.Fragment = JC;
Y.Profiler = qC;
Y.PureComponent = qf;
Y.StrictMode = ZC;
Y.Suspense = rQ;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uQ;
Y.act = Jh;
Y.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = $h({}, A.props), n = A.key, i = A.ref, o = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, o = ed.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps) var a = A.type.defaultProps;
    for (s in e) zh.call(e, s) && !Yh.hasOwnProperty(s) && (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    a = Array(s);
    for (var l = 0; l < s; l++) a[l] = arguments[l + 2];
    r.children = a;
  }
  return { $$typeof: Io, type: A.type, key: n, ref: i, props: r, _owner: o };
};
Y.createContext = function(A) {
  return A = { $$typeof: eQ, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: AQ, _context: A }, A.Consumer = A;
};
Y.createElement = jh;
Y.createFactory = function(A) {
  var e = jh.bind(null, A);
  return e.type = A, e;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(A) {
  return { $$typeof: tQ, render: A };
};
Y.isValidElement = td;
Y.lazy = function(A) {
  return { $$typeof: iQ, _payload: { _status: -1, _result: A }, _init: lQ };
};
Y.memo = function(A, e) {
  return { $$typeof: nQ, type: A, compare: e === void 0 ? null : e };
};
Y.startTransition = function(A) {
  var e = Va.transition;
  Va.transition = {};
  try {
    A();
  } finally {
    Va.transition = e;
  }
};
Y.unstable_act = Jh;
Y.useCallback = function(A, e) {
  return qA.current.useCallback(A, e);
};
Y.useContext = function(A) {
  return qA.current.useContext(A);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(A) {
  return qA.current.useDeferredValue(A);
};
Y.useEffect = function(A, e) {
  return qA.current.useEffect(A, e);
};
Y.useId = function() {
  return qA.current.useId();
};
Y.useImperativeHandle = function(A, e, t) {
  return qA.current.useImperativeHandle(A, e, t);
};
Y.useInsertionEffect = function(A, e) {
  return qA.current.useInsertionEffect(A, e);
};
Y.useLayoutEffect = function(A, e) {
  return qA.current.useLayoutEffect(A, e);
};
Y.useMemo = function(A, e) {
  return qA.current.useMemo(A, e);
};
Y.useReducer = function(A, e, t) {
  return qA.current.useReducer(A, e, t);
};
Y.useRef = function(A) {
  return qA.current.useRef(A);
};
Y.useState = function(A) {
  return qA.current.useState(A);
};
Y.useSyncExternalStore = function(A, e, t) {
  return qA.current.useSyncExternalStore(A, e, t);
};
Y.useTransition = function() {
  return qA.current.useTransition();
};
Y.version = "18.3.1";
Gh.exports = Y;
var Q = Gh.exports;
const _ = /* @__PURE__ */ il(Q), nc = /* @__PURE__ */ YC({
  __proto__: null,
  default: _
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
var cQ = Q, fQ = Symbol.for("react.element"), dQ = Symbol.for("react.fragment"), BQ = Object.prototype.hasOwnProperty, gQ = cQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pQ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zh(A, e, t) {
  var r, n = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (r in e) BQ.call(e, r) && !pQ.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: fQ, type: A, key: i, ref: o, props: n, _owner: gQ.current };
}
ol.Fragment = dQ;
ol.jsx = Zh;
ol.jsxs = Zh;
_h.exports = ol;
var V = _h.exports, qh = { exports: {} }, pe = {}, Aw = { exports: {} }, ew = {};
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
      var M = L - 1 >>> 1, X = I[M];
      if (0 < n(X, x)) I[M] = x, I[L] = X, L = M;
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
      A: for (var M = 0, X = I.length, dA = X >>> 1; M < dA; ) {
        var BA = 2 * (M + 1) - 1, gA = I[BA], rA = BA + 1, zA = I[rA];
        if (0 > n(gA, L)) rA < X && 0 > n(zA, gA) ? (I[M] = zA, I[rA] = L, M = rA) : (I[M] = gA, I[BA] = L, M = BA);
        else if (rA < X && 0 > n(zA, L)) I[M] = zA, I[rA] = L, M = rA;
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
  var s = [], l = [], u = 1, c = null, f = 3, g = !1, p = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
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
    if (w = !1, h(I), !p) if (t(s) !== null) p = !0, $(C);
    else {
      var x = t(l);
      x !== null && K(m, x.startTime - I);
    }
  }
  function C(I, x) {
    p = !1, w && (w = !1, B(U), U = -1), g = !0;
    var L = f;
    try {
      for (h(x), c = t(s); c !== null && (!(c.expirationTime > x) || I && !P()); ) {
        var M = c.callback;
        if (typeof M == "function") {
          c.callback = null, f = c.priorityLevel;
          var X = M(c.expirationTime <= x);
          x = A.unstable_now(), typeof X == "function" ? c.callback = X : c === t(s) && r(s), h(x);
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
      c = null, f = L, g = !1;
    }
  }
  var v = !1, F = null, U = -1, E = 5, S = -1;
  function P() {
    return !(A.unstable_now() - S < E);
  }
  function N() {
    if (F !== null) {
      var I = A.unstable_now();
      S = I;
      var x = !0;
      try {
        x = F(!0, I);
      } finally {
        x ? D() : (v = !1, F = null);
      }
    } else v = !1;
  }
  var D;
  if (typeof d == "function") D = function() {
    d(N);
  };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(), J = G.port2;
    G.port1.onmessage = N, D = function() {
      J.postMessage(null);
    };
  } else D = function() {
    y(N, 0);
  };
  function $(I) {
    F = I, v || (v = !0, D());
  }
  function K(I, x) {
    U = y(function() {
      I(A.unstable_now());
    }, x);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, A.unstable_continueExecution = function() {
    p || g || (p = !0, $(C));
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
    var M = A.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? M + L : M) : L = M, I) {
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
    return X = L + X, I = { id: u++, callback: x, priorityLevel: I, startTime: L, expirationTime: X, sortIndex: -1 }, L > M ? (I.sortIndex = L, e(l, I), t(s) === null && I === t(l) && (w ? (B(U), U = -1) : w = !0, K(m, L - M))) : (I.sortIndex = X, e(s, I), p || g || (p = !0, $(C))), I;
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
})(ew);
Aw.exports = ew;
var hQ = Aw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wQ = Q, ge = hQ;
function H(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tw = /* @__PURE__ */ new Set(), Ji = {};
function Wr(A, e) {
  Tn(A, e), Tn(A + "Capture", e);
}
function Tn(A, e) {
  for (Ji[A] = e, A = 0; A < e.length; A++) tw.add(e[A]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = Object.prototype.hasOwnProperty, mQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, DB = {}, KB = {};
function vQ(A) {
  return ic.call(KB, A) ? !0 : ic.call(DB, A) ? !1 : mQ.test(A) ? KB[A] = !0 : (DB[A] = !0, !1);
}
function CQ(A, e, t, r) {
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
function QQ(A, e, t, r) {
  if (e === null || typeof e > "u" || CQ(A, e, t, r)) return !0;
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
function Ae(A, e, t, r, n, i, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = i, this.removeEmptyString = o;
}
var PA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  PA[A] = new Ae(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  PA[e] = new Ae(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  PA[A] = new Ae(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  PA[A] = new Ae(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  PA[A] = new Ae(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  PA[A] = new Ae(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  PA[A] = new Ae(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  PA[A] = new Ae(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  PA[A] = new Ae(A, 5, !1, A.toLowerCase(), null, !1, !1);
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
  PA[e] = new Ae(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(rd, nd);
  PA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(rd, nd);
  PA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  PA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
PA.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  PA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function id(A, e, t, r) {
  var n = PA.hasOwnProperty(e) ? PA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (QQ(e, t, n, r) && (t = null), r || n === null ? vQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var yt = wQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $o = Symbol.for("react.element"), an = Symbol.for("react.portal"), sn = Symbol.for("react.fragment"), od = Symbol.for("react.strict_mode"), oc = Symbol.for("react.profiler"), rw = Symbol.for("react.provider"), nw = Symbol.for("react.context"), ad = Symbol.for("react.forward_ref"), ac = Symbol.for("react.suspense"), sc = Symbol.for("react.suspense_list"), sd = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), iw = Symbol.for("react.offscreen"), RB = Symbol.iterator;
function ii(A) {
  return A === null || typeof A != "object" ? null : (A = RB && A[RB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var mA = Object.assign, Au;
function wi(A) {
  if (Au === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    Au = e && e[1] || "";
  }
  return `
` + Au + A;
}
var eu = !1;
function tu(A, e) {
  if (!A || eu) return "";
  eu = !0;
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
    eu = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? wi(A) : "";
}
function yQ(A) {
  switch (A.tag) {
    case 5:
      return wi(A.type);
    case 16:
      return wi("Lazy");
    case 13:
      return wi("Suspense");
    case 19:
      return wi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = tu(A.type, !1), A;
    case 11:
      return A = tu(A.type.render, !1), A;
    case 1:
      return A = tu(A.type, !0), A;
    default:
      return "";
  }
}
function lc(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case sn:
      return "Fragment";
    case an:
      return "Portal";
    case oc:
      return "Profiler";
    case od:
      return "StrictMode";
    case ac:
      return "Suspense";
    case sc:
      return "SuspenseList";
  }
  if (typeof A == "object") switch (A.$$typeof) {
    case nw:
      return (A.displayName || "Context") + ".Consumer";
    case rw:
      return (A._context.displayName || "Context") + ".Provider";
    case ad:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case sd:
      return e = A.displayName || null, e !== null ? e : lc(A.type) || "Memo";
    case Tt:
      e = A._payload, A = A._init;
      try {
        return lc(A(e));
      } catch {
      }
  }
  return null;
}
function FQ(A) {
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
      return lc(e);
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
function er(A) {
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
function ow(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function UQ(A) {
  var e = ow(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), r = "" + A[e];
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
function Wo(A) {
  A._valueTracker || (A._valueTracker = UQ(A));
}
function aw(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(), r = "";
  return A && (r = ow(A) ? A.checked ? "true" : "false" : A.value), A = r, A !== t ? (e.setValue(A), !0) : !1;
}
function ds(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function uc(A, e) {
  var t = e.checked;
  return mA({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? A._wrapperState.initialChecked });
}
function NB(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, r = e.checked != null ? e.checked : e.defaultChecked;
  t = er(e.value != null ? e.value : t), A._wrapperState = { initialChecked: r, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function sw(A, e) {
  e = e.checked, e != null && id(A, "checked", e, !1);
}
function cc(A, e) {
  sw(A, e);
  var t = er(e.value), r = e.type;
  if (t != null) r === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? fc(A, e.type, t) : e.hasOwnProperty("defaultValue") && fc(A, e.type, er(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function MB(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function fc(A, e, t) {
  (e !== "number" || ds(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var mi = Array.isArray;
function Fn(A, e, t, r) {
  if (A = A.options, e) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++) n = e.hasOwnProperty("$" + A[t].value), A[t].selected !== n && (A[t].selected = n), n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + er(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        A[n].selected = !0, r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function dc(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(H(91));
  return mA({}, e, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
}
function PB(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error(H(92));
      if (mi(t)) {
        if (1 < t.length) throw Error(H(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: er(t) };
}
function lw(A, e) {
  var t = er(e.value), r = er(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), r != null && (A.defaultValue = "" + r);
}
function _B(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function uw(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bc(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? uw(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var Xo, cw = function(A) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, r, n) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, r, n);
    });
  } : A;
}(function(A, e) {
  if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = e;
  else {
    for (Xo = Xo || document.createElement("div"), Xo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Xo.firstChild; A.firstChild; ) A.removeChild(A.firstChild);
    for (; e.firstChild; ) A.appendChild(e.firstChild);
  }
});
function Zi(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var bi = {
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
}, EQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(bi).forEach(function(A) {
  EQ.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), bi[e] = bi[A];
  });
});
function fw(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || bi.hasOwnProperty(A) && bi[A] ? ("" + e).trim() : e + "px";
}
function dw(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, n = fw(t, e[t], r);
    t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
  }
}
var IQ = mA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function gc(A, e) {
  if (e) {
    if (IQ[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(H(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(H(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(H(62));
  }
}
function pc(A, e) {
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
var hc = null;
function ld(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var wc = null, Un = null, En = null;
function GB(A) {
  if (A = So(A)) {
    if (typeof wc != "function") throw Error(H(280));
    var e = A.stateNode;
    e && (e = cl(e), wc(A.stateNode, A.type, e));
  }
}
function Bw(A) {
  Un ? En ? En.push(A) : En = [A] : Un = A;
}
function gw() {
  if (Un) {
    var A = Un, e = En;
    if (En = Un = null, GB(A), e) for (A = 0; A < e.length; A++) GB(e[A]);
  }
}
function pw(A, e) {
  return A(e);
}
function hw() {
}
var ru = !1;
function ww(A, e, t) {
  if (ru) return A(e, t);
  ru = !0;
  try {
    return pw(A, e, t);
  } finally {
    ru = !1, (Un !== null || En !== null) && (hw(), gw());
  }
}
function qi(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = cl(t);
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
var mc = !1;
if (gt) try {
  var oi = {};
  Object.defineProperty(oi, "passive", { get: function() {
    mc = !0;
  } }), window.addEventListener("test", oi, oi), window.removeEventListener("test", oi, oi);
} catch {
  mc = !1;
}
function HQ(A, e, t, r, n, i, o, a, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var Ti = !1, Bs = null, gs = !1, vc = null, xQ = { onError: function(A) {
  Ti = !0, Bs = A;
} };
function SQ(A, e, t, r, n, i, o, a, s) {
  Ti = !1, Bs = null, HQ.apply(xQ, arguments);
}
function LQ(A, e, t, r, n, i, o, a, s) {
  if (SQ.apply(this, arguments), Ti) {
    if (Ti) {
      var l = Bs;
      Ti = !1, Bs = null;
    } else throw Error(H(198));
    gs || (gs = !0, vc = l);
  }
}
function Xr(A) {
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
function mw(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function VB(A) {
  if (Xr(A) !== A) throw Error(H(188));
}
function bQ(A) {
  var e = A.alternate;
  if (!e) {
    if (e = Xr(A), e === null) throw Error(H(188));
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
        if (i === t) return VB(n), A;
        if (i === r) return VB(n), e;
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
function vw(A) {
  return A = bQ(A), A !== null ? Cw(A) : null;
}
function Cw(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = Cw(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var Qw = ge.unstable_scheduleCallback, $B = ge.unstable_cancelCallback, TQ = ge.unstable_shouldYield, kQ = ge.unstable_requestPaint, FA = ge.unstable_now, OQ = ge.unstable_getCurrentPriorityLevel, ud = ge.unstable_ImmediatePriority, yw = ge.unstable_UserBlockingPriority, ps = ge.unstable_NormalPriority, DQ = ge.unstable_LowPriority, Fw = ge.unstable_IdlePriority, al = null, Ze = null;
function KQ(A) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function") try {
    Ze.onCommitFiberRoot(al, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var Ne = Math.clz32 ? Math.clz32 : MQ, RQ = Math.log, NQ = Math.LN2;
function MQ(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (RQ(A) / NQ | 0) | 0;
}
var zo = 64, Yo = 4194304;
function vi(A) {
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
function hs(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0, n = A.suspendedLanes, i = A.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var a = o & ~n;
    a !== 0 ? r = vi(a) : (i &= o, i !== 0 && (r = vi(i)));
  } else o = t & ~n, o !== 0 ? r = vi(o) : i !== 0 && (r = vi(i));
  if (r === 0) return 0;
  if (e !== 0 && e !== r && !(e & n) && (n = r & -r, i = e & -e, n >= i || n === 16 && (i & 4194240) !== 0)) return e;
  if (r & 4 && (r |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= r; 0 < e; ) t = 31 - Ne(e), n = 1 << t, r |= A[t], e &= ~n;
  return r;
}
function PQ(A, e) {
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
function _Q(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
    var o = 31 - Ne(i), a = 1 << o, s = n[o];
    s === -1 ? (!(a & t) || a & r) && (n[o] = PQ(a, e)) : s <= e && (A.expiredLanes |= a), i &= ~a;
  }
}
function Cc(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Uw() {
  var A = zo;
  return zo <<= 1, !(zo & 4194240) && (zo = 64), A;
}
function nu(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function Ho(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Ne(e), A[e] = t;
}
function GQ(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - Ne(t), i = 1 << n;
    e[n] = 0, r[n] = -1, A[n] = -1, t &= ~i;
  }
}
function cd(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var r = 31 - Ne(t), n = 1 << r;
    n & e | A[r] & e && (A[r] |= e), t &= ~n;
  }
}
var eA = 0;
function Ew(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Iw, fd, Hw, xw, Sw, Qc = !1, jo = [], $t = null, Wt = null, Xt = null, Ao = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), Dt = [], VQ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function WB(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ao.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      eo.delete(e.pointerId);
  }
}
function ai(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [n] }, e !== null && (e = So(e), e !== null && fd(e)), A) : (A.eventSystemFlags |= r, e = A.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), A);
}
function $Q(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return $t = ai($t, A, e, t, r, n), !0;
    case "dragenter":
      return Wt = ai(Wt, A, e, t, r, n), !0;
    case "mouseover":
      return Xt = ai(Xt, A, e, t, r, n), !0;
    case "pointerover":
      var i = n.pointerId;
      return Ao.set(i, ai(Ao.get(i) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return i = n.pointerId, eo.set(i, ai(eo.get(i) || null, A, e, t, r, n)), !0;
  }
  return !1;
}
function Lw(A) {
  var e = Cr(A.target);
  if (e !== null) {
    var t = Xr(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = mw(t), e !== null) {
          A.blockedOn = e, Sw(A.priority, function() {
            Hw(t);
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
function $a(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = yc(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      hc = r, t.target.dispatchEvent(r), hc = null;
    } else return e = So(t), e !== null && fd(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function XB(A, e, t) {
  $a(A) && t.delete(e);
}
function WQ() {
  Qc = !1, $t !== null && $a($t) && ($t = null), Wt !== null && $a(Wt) && (Wt = null), Xt !== null && $a(Xt) && (Xt = null), Ao.forEach(XB), eo.forEach(XB);
}
function si(A, e) {
  A.blockedOn === e && (A.blockedOn = null, Qc || (Qc = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, WQ)));
}
function to(A) {
  function e(n) {
    return si(n, A);
  }
  if (0 < jo.length) {
    si(jo[0], A);
    for (var t = 1; t < jo.length; t++) {
      var r = jo[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for ($t !== null && si($t, A), Wt !== null && si(Wt, A), Xt !== null && si(Xt, A), Ao.forEach(e), eo.forEach(e), t = 0; t < Dt.length; t++) r = Dt[t], r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Dt.length && (t = Dt[0], t.blockedOn === null); ) Lw(t), t.blockedOn === null && Dt.shift();
}
var In = yt.ReactCurrentBatchConfig, ws = !0;
function XQ(A, e, t, r) {
  var n = eA, i = In.transition;
  In.transition = null;
  try {
    eA = 1, dd(A, e, t, r);
  } finally {
    eA = n, In.transition = i;
  }
}
function zQ(A, e, t, r) {
  var n = eA, i = In.transition;
  In.transition = null;
  try {
    eA = 4, dd(A, e, t, r);
  } finally {
    eA = n, In.transition = i;
  }
}
function dd(A, e, t, r) {
  if (ws) {
    var n = yc(A, e, t, r);
    if (n === null) Bu(A, e, r, ms, t), WB(A, r);
    else if ($Q(n, A, e, t, r)) r.stopPropagation();
    else if (WB(A, r), e & 4 && -1 < VQ.indexOf(A)) {
      for (; n !== null; ) {
        var i = So(n);
        if (i !== null && Iw(i), i = yc(A, e, t, r), i === null && Bu(A, e, r, ms, t), i === n) break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else Bu(A, e, r, null, t);
  }
}
var ms = null;
function yc(A, e, t, r) {
  if (ms = null, A = ld(r), A = Cr(A), A !== null) if (e = Xr(A), e === null) A = null;
  else if (t = e.tag, t === 13) {
    if (A = mw(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return ms = A, null;
}
function bw(A) {
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
      switch (OQ()) {
        case ud:
          return 1;
        case yw:
          return 4;
        case ps:
        case DQ:
          return 16;
        case Fw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null, Bd = null, Wa = null;
function Tw() {
  if (Wa) return Wa;
  var A, e = Bd, t = e.length, r, n = "value" in Nt ? Nt.value : Nt.textContent, i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++) ;
  var o = t - A;
  for (r = 1; r <= o && e[t - r] === n[i - r]; r++) ;
  return Wa = n.slice(A, 1 < r ? 1 - r : void 0);
}
function Xa(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function Jo() {
  return !0;
}
function zB() {
  return !1;
}
function he(A) {
  function e(t, r, n, i, o) {
    this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var a in A) A.hasOwnProperty(a) && (t = A[a], this[a] = t ? t(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Jo : zB, this.isPropagationStopped = zB, this;
  }
  return mA(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Jo);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Jo);
  }, persist: function() {
  }, isPersistent: Jo }), e;
}
var Jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gd = he(Jn), xo = mA({}, Jn, { view: 0, detail: 0 }), YQ = he(xo), iu, ou, li, sl = mA({}, xo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pd, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== li && (li && A.type === "mousemove" ? (iu = A.screenX - li.screenX, ou = A.screenY - li.screenY) : ou = iu = 0, li = A), iu);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : ou;
} }), YB = he(sl), jQ = mA({}, sl, { dataTransfer: 0 }), JQ = he(jQ), ZQ = mA({}, xo, { relatedTarget: 0 }), au = he(ZQ), qQ = mA({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ay = he(qQ), ey = mA({}, Jn, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), ty = he(ey), ry = mA({}, Jn, { data: 0 }), jB = he(ry), ny = {
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
}, iy = {
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
}, oy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ay(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = oy[A]) ? !!e[A] : !1;
}
function pd() {
  return ay;
}
var sy = mA({}, xo, { key: function(A) {
  if (A.key) {
    var e = ny[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = Xa(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? iy[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pd, charCode: function(A) {
  return A.type === "keypress" ? Xa(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? Xa(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), ly = he(sy), uy = mA({}, sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), JB = he(uy), cy = mA({}, xo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pd }), fy = he(cy), dy = mA({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), By = he(dy), gy = mA({}, sl, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), py = he(gy), hy = [9, 13, 27, 32], hd = gt && "CompositionEvent" in window, ki = null;
gt && "documentMode" in document && (ki = document.documentMode);
var wy = gt && "TextEvent" in window && !ki, kw = gt && (!hd || ki && 8 < ki && 11 >= ki), ZB = " ", qB = !1;
function Ow(A, e) {
  switch (A) {
    case "keyup":
      return hy.indexOf(e.keyCode) !== -1;
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
function Dw(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var ln = !1;
function my(A, e) {
  switch (A) {
    case "compositionend":
      return Dw(e);
    case "keypress":
      return e.which !== 32 ? null : (qB = !0, ZB);
    case "textInput":
      return A = e.data, A === ZB && qB ? null : A;
    default:
      return null;
  }
}
function vy(A, e) {
  if (ln) return A === "compositionend" || !hd && Ow(A, e) ? (A = Tw(), Wa = Bd = Nt = null, ln = !1, A) : null;
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
      return kw && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Cy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ag(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!Cy[A.type] : e === "textarea";
}
function Kw(A, e, t, r) {
  Bw(r), e = vs(e, "onChange"), 0 < e.length && (t = new gd("onChange", "change", null, t, r), A.push({ event: t, listeners: e }));
}
var Oi = null, ro = null;
function Qy(A) {
  zw(A, 0);
}
function ll(A) {
  var e = fn(A);
  if (aw(e)) return A;
}
function yy(A, e) {
  if (A === "change") return e;
}
var Rw = !1;
if (gt) {
  var su;
  if (gt) {
    var lu = "oninput" in document;
    if (!lu) {
      var eg = document.createElement("div");
      eg.setAttribute("oninput", "return;"), lu = typeof eg.oninput == "function";
    }
    su = lu;
  } else su = !1;
  Rw = su && (!document.documentMode || 9 < document.documentMode);
}
function tg() {
  Oi && (Oi.detachEvent("onpropertychange", Nw), ro = Oi = null);
}
function Nw(A) {
  if (A.propertyName === "value" && ll(ro)) {
    var e = [];
    Kw(e, ro, A, ld(A)), ww(Qy, e);
  }
}
function Fy(A, e, t) {
  A === "focusin" ? (tg(), Oi = e, ro = t, Oi.attachEvent("onpropertychange", Nw)) : A === "focusout" && tg();
}
function Uy(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return ll(ro);
}
function Ey(A, e) {
  if (A === "click") return ll(e);
}
function Iy(A, e) {
  if (A === "input" || A === "change") return ll(e);
}
function Hy(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var _e = typeof Object.is == "function" ? Object.is : Hy;
function no(A, e) {
  if (_e(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!ic.call(e, n) || !_e(A[n], e[n])) return !1;
  }
  return !0;
}
function rg(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function ng(A, e) {
  var t = rg(A);
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
    t = rg(t);
  }
}
function Mw(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Mw(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Pw() {
  for (var A = window, e = ds(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = ds(A.document);
  }
  return e;
}
function wd(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function xy(A) {
  var e = Pw(), t = A.focusedElem, r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Mw(t.ownerDocument.documentElement, t)) {
    if (r !== null && wd(t)) {
      if (e = r.start, A = r.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var n = t.textContent.length, i = Math.min(r.start, n);
        r = r.end === void 0 ? i : Math.min(r.end, n), !A.extend && i > r && (n = r, r = i, i = n), n = ng(t, i);
        var o = ng(
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
var Sy = gt && "documentMode" in document && 11 >= document.documentMode, un = null, Fc = null, Di = null, Uc = !1;
function ig(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Uc || un == null || un !== ds(r) || (r = un, "selectionStart" in r && wd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Di && no(Di, r) || (Di = r, r = vs(Fc, "onSelect"), 0 < r.length && (e = new gd("onSelect", "select", null, e, t), A.push({ event: e, listeners: r }), e.target = un)));
}
function Zo(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var cn = { animationend: Zo("Animation", "AnimationEnd"), animationiteration: Zo("Animation", "AnimationIteration"), animationstart: Zo("Animation", "AnimationStart"), transitionend: Zo("Transition", "TransitionEnd") }, uu = {}, _w = {};
gt && (_w = document.createElement("div").style, "AnimationEvent" in window || (delete cn.animationend.animation, delete cn.animationiteration.animation, delete cn.animationstart.animation), "TransitionEvent" in window || delete cn.transitionend.transition);
function ul(A) {
  if (uu[A]) return uu[A];
  if (!cn[A]) return A;
  var e = cn[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in _w) return uu[A] = e[t];
  return A;
}
var Gw = ul("animationend"), Vw = ul("animationiteration"), $w = ul("animationstart"), Ww = ul("transitionend"), Xw = /* @__PURE__ */ new Map(), og = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ur(A, e) {
  Xw.set(A, e), Wr(e, [A]);
}
for (var cu = 0; cu < og.length; cu++) {
  var fu = og[cu], Ly = fu.toLowerCase(), by = fu[0].toUpperCase() + fu.slice(1);
  ur(Ly, "on" + by);
}
ur(Gw, "onAnimationEnd");
ur(Vw, "onAnimationIteration");
ur($w, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(Ww, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
Wr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
function ag(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, LQ(r, e, void 0, A), A.currentTarget = null;
}
function zw(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t], n = r.event;
    r = r.listeners;
    A: {
      var i = void 0;
      if (e) for (var o = r.length - 1; 0 <= o; o--) {
        var a = r[o], s = a.instance, l = a.currentTarget;
        if (a = a.listener, s !== i && n.isPropagationStopped()) break A;
        ag(n, a, l), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (a = r[o], s = a.instance, l = a.currentTarget, a = a.listener, s !== i && n.isPropagationStopped()) break A;
        ag(n, a, l), i = s;
      }
    }
  }
  if (gs) throw A = vc, gs = !1, vc = null, A;
}
function oA(A, e) {
  var t = e[Sc];
  t === void 0 && (t = e[Sc] = /* @__PURE__ */ new Set());
  var r = A + "__bubble";
  t.has(r) || (Yw(e, A, 2, !1), t.add(r));
}
function du(A, e, t) {
  var r = 0;
  e && (r |= 4), Yw(t, A, r, e);
}
var qo = "_reactListening" + Math.random().toString(36).slice(2);
function io(A) {
  if (!A[qo]) {
    A[qo] = !0, tw.forEach(function(t) {
      t !== "selectionchange" && (Ty.has(t) || du(t, !1, A), du(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[qo] || (e[qo] = !0, du("selectionchange", !1, e));
  }
}
function Yw(A, e, t, r) {
  switch (bw(e)) {
    case 1:
      var n = XQ;
      break;
    case 4:
      n = zQ;
      break;
    default:
      n = dd;
  }
  t = n.bind(null, e, t, A), n = void 0, !mc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), r ? n !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: n }) : A.addEventListener(e, t, !0) : n !== void 0 ? A.addEventListener(e, t, { passive: n }) : A.addEventListener(e, t, !1);
}
function Bu(A, e, t, r, n) {
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
  ww(function() {
    var l = i, u = ld(t), c = [];
    A: {
      var f = Xw.get(A);
      if (f !== void 0) {
        var g = gd, p = A;
        switch (A) {
          case "keypress":
            if (Xa(t) === 0) break A;
          case "keydown":
          case "keyup":
            g = ly;
            break;
          case "focusin":
            p = "focus", g = au;
            break;
          case "focusout":
            p = "blur", g = au;
            break;
          case "beforeblur":
          case "afterblur":
            g = au;
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
            g = YB;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = JQ;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = fy;
            break;
          case Gw:
          case Vw:
          case $w:
            g = Ay;
            break;
          case Ww:
            g = By;
            break;
          case "scroll":
            g = YQ;
            break;
          case "wheel":
            g = py;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ty;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = JB;
        }
        var w = (e & 4) !== 0, y = !w && A === "scroll", B = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var d = l, h; d !== null; ) {
          h = d;
          var m = h.stateNode;
          if (h.tag === 5 && m !== null && (h = m, B !== null && (m = qi(d, B), m != null && w.push(oo(d, m, h)))), y) break;
          d = d.return;
        }
        0 < w.length && (f = new g(f, p, null, t, u), c.push({ event: f, listeners: w }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (f = A === "mouseover" || A === "pointerover", g = A === "mouseout" || A === "pointerout", f && t !== hc && (p = t.relatedTarget || t.fromElement) && (Cr(p) || p[pt])) break A;
        if ((g || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (p = t.relatedTarget || t.toElement, g = l, p = p ? Cr(p) : null, p !== null && (y = Xr(p), p !== y || p.tag !== 5 && p.tag !== 6) && (p = null)) : (g = null, p = l), g !== p)) {
          if (w = YB, m = "onMouseLeave", B = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (w = JB, m = "onPointerLeave", B = "onPointerEnter", d = "pointer"), y = g == null ? f : fn(g), h = p == null ? f : fn(p), f = new w(m, d + "leave", g, t, u), f.target = y, f.relatedTarget = h, m = null, Cr(u) === l && (w = new w(B, d + "enter", p, t, u), w.target = h, w.relatedTarget = y, m = w), y = m, g && p) e: {
            for (w = g, B = p, d = 0, h = w; h; h = jr(h)) d++;
            for (h = 0, m = B; m; m = jr(m)) h++;
            for (; 0 < d - h; ) w = jr(w), d--;
            for (; 0 < h - d; ) B = jr(B), h--;
            for (; d--; ) {
              if (w === B || B !== null && w === B.alternate) break e;
              w = jr(w), B = jr(B);
            }
            w = null;
          }
          else w = null;
          g !== null && sg(c, f, g, w, !1), p !== null && y !== null && sg(c, y, p, w, !0);
        }
      }
      A: {
        if (f = l ? fn(l) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var C = yy;
        else if (Ag(f)) if (Rw) C = Iy;
        else {
          C = Uy;
          var v = Fy;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = Ey);
        if (C && (C = C(A, l))) {
          Kw(c, C, t, u);
          break A;
        }
        v && v(A, f, l), A === "focusout" && (v = f._wrapperState) && v.controlled && f.type === "number" && fc(f, "number", f.value);
      }
      switch (v = l ? fn(l) : window, A) {
        case "focusin":
          (Ag(v) || v.contentEditable === "true") && (un = v, Fc = l, Di = null);
          break;
        case "focusout":
          Di = Fc = un = null;
          break;
        case "mousedown":
          Uc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Uc = !1, ig(c, t, u);
          break;
        case "selectionchange":
          if (Sy) break;
        case "keydown":
        case "keyup":
          ig(c, t, u);
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
      else ln ? Ow(A, t) && (U = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
      U && (kw && t.locale !== "ko" && (ln || U !== "onCompositionStart" ? U === "onCompositionEnd" && ln && (F = Tw()) : (Nt = u, Bd = "value" in Nt ? Nt.value : Nt.textContent, ln = !0)), v = vs(l, U), 0 < v.length && (U = new jB(U, A, null, t, u), c.push({ event: U, listeners: v }), F ? U.data = F : (F = Dw(t), F !== null && (U.data = F)))), (F = wy ? my(A, t) : vy(A, t)) && (l = vs(l, "onBeforeInput"), 0 < l.length && (u = new jB("onBeforeInput", "beforeinput", null, t, u), c.push({ event: u, listeners: l }), u.data = F));
    }
    zw(c, e);
  });
}
function oo(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function vs(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A, i = n.stateNode;
    n.tag === 5 && i !== null && (n = i, i = qi(A, t), i != null && r.unshift(oo(A, i, n)), i = qi(A, e), i != null && r.push(oo(A, i, n))), A = A.return;
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
function sg(A, e, t, r, n) {
  for (var i = e._reactName, o = []; t !== null && t !== r; ) {
    var a = t, s = a.alternate, l = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 && l !== null && (a = l, n ? (s = qi(t, i), s != null && o.unshift(oo(t, s, a))) : n || (s = qi(t, i), s != null && o.push(oo(t, s, a)))), t = t.return;
  }
  o.length !== 0 && A.push({ event: e, listeners: o });
}
var ky = /\r\n?/g, Oy = /\u0000|\uFFFD/g;
function lg(A) {
  return (typeof A == "string" ? A : "" + A).replace(ky, `
`).replace(Oy, "");
}
function Aa(A, e, t) {
  if (e = lg(e), lg(A) !== e && t) throw Error(H(425));
}
function Cs() {
}
var Ec = null, Ic = null;
function Hc(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var xc = typeof setTimeout == "function" ? setTimeout : void 0, Dy = typeof clearTimeout == "function" ? clearTimeout : void 0, ug = typeof Promise == "function" ? Promise : void 0, Ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof ug < "u" ? function(A) {
  return ug.resolve(null).then(A).catch(Ry);
} : xc;
function Ry(A) {
  setTimeout(function() {
    throw A;
  });
}
function gu(A, e) {
  var t = e, r = 0;
  do {
    var n = t.nextSibling;
    if (A.removeChild(t), n && n.nodeType === 8) if (t = n.data, t === "/$") {
      if (r === 0) {
        A.removeChild(n), to(e);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = n;
  } while (t);
  to(e);
}
function zt(A) {
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
function cg(A) {
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
var Zn = Math.random().toString(36).slice(2), je = "__reactFiber$" + Zn, ao = "__reactProps$" + Zn, pt = "__reactContainer$" + Zn, Sc = "__reactEvents$" + Zn, Ny = "__reactListeners$" + Zn, My = "__reactHandles$" + Zn;
function Cr(A) {
  var e = A[je];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[pt] || t[je]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (A = cg(A); A !== null; ) {
        if (t = A[je]) return t;
        A = cg(A);
      }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function So(A) {
  return A = A[je] || A[pt], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function fn(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(H(33));
}
function cl(A) {
  return A[ao] || null;
}
var Lc = [], dn = -1;
function cr(A) {
  return { current: A };
}
function lA(A) {
  0 > dn || (A.current = Lc[dn], Lc[dn] = null, dn--);
}
function iA(A, e) {
  dn++, Lc[dn] = A.current, A.current = e;
}
var tr = {}, XA = cr(tr), oe = cr(!1), Kr = tr;
function kn(A, e) {
  var t = A.type.contextTypes;
  if (!t) return tr;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var n = {}, i;
  for (i in t) n[i] = e[i];
  return r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = n), n;
}
function ae(A) {
  return A = A.childContextTypes, A != null;
}
function Qs() {
  lA(oe), lA(XA);
}
function fg(A, e, t) {
  if (XA.current !== tr) throw Error(H(168));
  iA(XA, e), iA(oe, t);
}
function jw(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(H(108, FQ(A) || "Unknown", n));
  return mA({}, t, r);
}
function ys(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || tr, Kr = XA.current, iA(XA, A), iA(oe, oe.current), !0;
}
function dg(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(H(169));
  t ? (A = jw(A, e, Kr), r.__reactInternalMemoizedMergedChildContext = A, lA(oe), lA(XA), iA(XA, A)) : lA(oe), iA(oe, t);
}
var st = null, fl = !1, pu = !1;
function Jw(A) {
  st === null ? st = [A] : st.push(A);
}
function Py(A) {
  fl = !0, Jw(A);
}
function fr() {
  if (!pu && st !== null) {
    pu = !0;
    var A = 0, e = eA;
    try {
      var t = st;
      for (eA = 1; A < t.length; A++) {
        var r = t[A];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, fl = !1;
    } catch (n) {
      throw st !== null && (st = st.slice(A + 1)), Qw(ud, fr), n;
    } finally {
      eA = e, pu = !1;
    }
  }
  return null;
}
var Bn = [], gn = 0, Fs = null, Us = 0, ve = [], Ce = 0, Rr = null, ut = 1, ct = "";
function pr(A, e) {
  Bn[gn++] = Us, Bn[gn++] = Fs, Fs = A, Us = e;
}
function Zw(A, e, t) {
  ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Rr, Rr = A;
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
function md(A) {
  A.return !== null && (pr(A, 1), Zw(A, 1, 0));
}
function vd(A) {
  for (; A === Fs; ) Fs = Bn[--gn], Bn[gn] = null, Us = Bn[--gn], Bn[gn] = null;
  for (; A === Rr; ) Rr = ve[--Ce], ve[Ce] = null, ct = ve[--Ce], ve[Ce] = null, ut = ve[--Ce], ve[Ce] = null;
}
var de = null, fe = null, fA = !1, De = null;
function qw(A, e) {
  var t = ye(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function Bg(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, de = A, fe = zt(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, de = A, fe = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Rr !== null ? { id: ut, overflow: ct } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = ye(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, de = A, fe = null, !0) : !1;
    default:
      return !1;
  }
}
function bc(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Tc(A) {
  if (fA) {
    var e = fe;
    if (e) {
      var t = e;
      if (!Bg(A, e)) {
        if (bc(A)) throw Error(H(418));
        e = zt(t.nextSibling);
        var r = de;
        e && Bg(A, e) ? qw(r, t) : (A.flags = A.flags & -4097 | 2, fA = !1, de = A);
      }
    } else {
      if (bc(A)) throw Error(H(418));
      A.flags = A.flags & -4097 | 2, fA = !1, de = A;
    }
  }
}
function gg(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
  de = A;
}
function ea(A) {
  if (A !== de) return !1;
  if (!fA) return gg(A), fA = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Hc(A.type, A.memoizedProps)), e && (e = fe)) {
    if (bc(A)) throw Am(), Error(H(418));
    for (; e; ) qw(A, e), e = zt(e.nextSibling);
  }
  if (gg(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(H(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              fe = zt(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      fe = null;
    }
  } else fe = de ? zt(A.stateNode.nextSibling) : null;
  return !0;
}
function Am() {
  for (var A = fe; A; ) A = zt(A.nextSibling);
}
function On() {
  fe = de = null, fA = !1;
}
function Cd(A) {
  De === null ? De = [A] : De.push(A);
}
var _y = yt.ReactCurrentBatchConfig;
function ui(A, e, t) {
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
function ta(A, e) {
  throw A = Object.prototype.toString.call(e), Error(H(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function pg(A) {
  var e = A._init;
  return e(A._payload);
}
function em(A) {
  function e(B, d) {
    if (A) {
      var h = B.deletions;
      h === null ? (B.deletions = [d], B.flags |= 16) : h.push(d);
    }
  }
  function t(B, d) {
    if (!A) return null;
    for (; d !== null; ) e(B, d), d = d.sibling;
    return null;
  }
  function r(B, d) {
    for (B = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? B.set(d.key, d) : B.set(d.index, d), d = d.sibling;
    return B;
  }
  function n(B, d) {
    return B = Zt(B, d), B.index = 0, B.sibling = null, B;
  }
  function i(B, d, h) {
    return B.index = h, A ? (h = B.alternate, h !== null ? (h = h.index, h < d ? (B.flags |= 2, d) : h) : (B.flags |= 2, d)) : (B.flags |= 1048576, d);
  }
  function o(B) {
    return A && B.alternate === null && (B.flags |= 2), B;
  }
  function a(B, d, h, m) {
    return d === null || d.tag !== 6 ? (d = yu(h, B.mode, m), d.return = B, d) : (d = n(d, h), d.return = B, d);
  }
  function s(B, d, h, m) {
    var C = h.type;
    return C === sn ? u(B, d, h.props.children, m, h.key) : d !== null && (d.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tt && pg(C) === d.type) ? (m = n(d, h.props), m.ref = ui(B, d, h), m.return = B, m) : (m = As(h.type, h.key, h.props, null, B.mode, m), m.ref = ui(B, d, h), m.return = B, m);
  }
  function l(B, d, h, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Fu(h, B.mode, m), d.return = B, d) : (d = n(d, h.children || []), d.return = B, d);
  }
  function u(B, d, h, m, C) {
    return d === null || d.tag !== 7 ? (d = Sr(h, B.mode, m, C), d.return = B, d) : (d = n(d, h), d.return = B, d);
  }
  function c(B, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = yu("" + d, B.mode, h), d.return = B, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case $o:
          return h = As(d.type, d.key, d.props, null, B.mode, h), h.ref = ui(B, null, d), h.return = B, h;
        case an:
          return d = Fu(d, B.mode, h), d.return = B, d;
        case Tt:
          var m = d._init;
          return c(B, m(d._payload), h);
      }
      if (mi(d) || ii(d)) return d = Sr(d, B.mode, h, null), d.return = B, d;
      ta(B, d);
    }
    return null;
  }
  function f(B, d, h, m) {
    var C = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : a(B, d, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $o:
          return h.key === C ? s(B, d, h, m) : null;
        case an:
          return h.key === C ? l(B, d, h, m) : null;
        case Tt:
          return C = h._init, f(
            B,
            d,
            C(h._payload),
            m
          );
      }
      if (mi(h) || ii(h)) return C !== null ? null : u(B, d, h, m, null);
      ta(B, h);
    }
    return null;
  }
  function g(B, d, h, m, C) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return B = B.get(h) || null, a(d, B, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case $o:
          return B = B.get(m.key === null ? h : m.key) || null, s(d, B, m, C);
        case an:
          return B = B.get(m.key === null ? h : m.key) || null, l(d, B, m, C);
        case Tt:
          var v = m._init;
          return g(B, d, h, v(m._payload), C);
      }
      if (mi(m) || ii(m)) return B = B.get(h) || null, u(d, B, m, C, null);
      ta(d, m);
    }
    return null;
  }
  function p(B, d, h, m) {
    for (var C = null, v = null, F = d, U = d = 0, E = null; F !== null && U < h.length; U++) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var S = f(B, F, h[U], m);
      if (S === null) {
        F === null && (F = E);
        break;
      }
      A && F && S.alternate === null && e(B, F), d = i(S, d, U), v === null ? C = S : v.sibling = S, v = S, F = E;
    }
    if (U === h.length) return t(B, F), fA && pr(B, U), C;
    if (F === null) {
      for (; U < h.length; U++) F = c(B, h[U], m), F !== null && (d = i(F, d, U), v === null ? C = F : v.sibling = F, v = F);
      return fA && pr(B, U), C;
    }
    for (F = r(B, F); U < h.length; U++) E = g(F, B, U, h[U], m), E !== null && (A && E.alternate !== null && F.delete(E.key === null ? U : E.key), d = i(E, d, U), v === null ? C = E : v.sibling = E, v = E);
    return A && F.forEach(function(P) {
      return e(B, P);
    }), fA && pr(B, U), C;
  }
  function w(B, d, h, m) {
    var C = ii(h);
    if (typeof C != "function") throw Error(H(150));
    if (h = C.call(h), h == null) throw Error(H(151));
    for (var v = C = null, F = d, U = d = 0, E = null, S = h.next(); F !== null && !S.done; U++, S = h.next()) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var P = f(B, F, S.value, m);
      if (P === null) {
        F === null && (F = E);
        break;
      }
      A && F && P.alternate === null && e(B, F), d = i(P, d, U), v === null ? C = P : v.sibling = P, v = P, F = E;
    }
    if (S.done) return t(
      B,
      F
    ), fA && pr(B, U), C;
    if (F === null) {
      for (; !S.done; U++, S = h.next()) S = c(B, S.value, m), S !== null && (d = i(S, d, U), v === null ? C = S : v.sibling = S, v = S);
      return fA && pr(B, U), C;
    }
    for (F = r(B, F); !S.done; U++, S = h.next()) S = g(F, B, U, S.value, m), S !== null && (A && S.alternate !== null && F.delete(S.key === null ? U : S.key), d = i(S, d, U), v === null ? C = S : v.sibling = S, v = S);
    return A && F.forEach(function(N) {
      return e(B, N);
    }), fA && pr(B, U), C;
  }
  function y(B, d, h, m) {
    if (typeof h == "object" && h !== null && h.type === sn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $o:
          A: {
            for (var C = h.key, v = d; v !== null; ) {
              if (v.key === C) {
                if (C = h.type, C === sn) {
                  if (v.tag === 7) {
                    t(B, v.sibling), d = n(v, h.props.children), d.return = B, B = d;
                    break A;
                  }
                } else if (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tt && pg(C) === v.type) {
                  t(B, v.sibling), d = n(v, h.props), d.ref = ui(B, v, h), d.return = B, B = d;
                  break A;
                }
                t(B, v);
                break;
              } else e(B, v);
              v = v.sibling;
            }
            h.type === sn ? (d = Sr(h.props.children, B.mode, m, h.key), d.return = B, B = d) : (m = As(h.type, h.key, h.props, null, B.mode, m), m.ref = ui(B, d, h), m.return = B, B = m);
          }
          return o(B);
        case an:
          A: {
            for (v = h.key; d !== null; ) {
              if (d.key === v) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                t(B, d.sibling), d = n(d, h.children || []), d.return = B, B = d;
                break A;
              } else {
                t(B, d);
                break;
              }
              else e(B, d);
              d = d.sibling;
            }
            d = Fu(h, B.mode, m), d.return = B, B = d;
          }
          return o(B);
        case Tt:
          return v = h._init, y(B, d, v(h._payload), m);
      }
      if (mi(h)) return p(B, d, h, m);
      if (ii(h)) return w(B, d, h, m);
      ta(B, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (t(B, d.sibling), d = n(d, h), d.return = B, B = d) : (t(B, d), d = yu(h, B.mode, m), d.return = B, B = d), o(B)) : t(B, d);
  }
  return y;
}
var Dn = em(!0), tm = em(!1), Es = cr(null), Is = null, pn = null, Qd = null;
function yd() {
  Qd = pn = Is = null;
}
function Fd(A) {
  var e = Es.current;
  lA(Es), A._currentValue = e;
}
function kc(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function Hn(A, e) {
  Is = A, Qd = pn = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (re = !0), A.firstContext = null);
}
function Ie(A) {
  var e = A._currentValue;
  if (Qd !== A) if (A = { context: A, memoizedValue: e, next: null }, pn === null) {
    if (Is === null) throw Error(H(308));
    pn = A, Is.dependencies = { lanes: 0, firstContext: A };
  } else pn = pn.next = A;
  return e;
}
var Qr = null;
function Ud(A) {
  Qr === null ? Qr = [A] : Qr.push(A);
}
function rm(A, e, t, r) {
  var n = e.interleaved;
  return n === null ? (t.next = t, Ud(e)) : (t.next = n.next, n.next = t), e.interleaved = t, ht(A, r);
}
function ht(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; ) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var kt = !1;
function Ed(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nm(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function ft(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Yt(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var n = r.pending;
    return n === null ? e.next = e : (e.next = n.next, n.next = e), r.pending = e, ht(A, t);
  }
  return n = r.interleaved, n === null ? (e.next = e, Ud(r)) : (e.next = n.next, n.next = e), r.interleaved = e, ht(A, t);
}
function za(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, cd(A, t);
  }
}
function hg(A, e) {
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
function Hs(A, e, t, r) {
  var n = A.updateQueue;
  kt = !1;
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
      var f = a.lane, g = a.eventTime;
      if ((r & f) === f) {
        u !== null && (u = u.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        A: {
          var p = A, w = a;
          switch (f = e, g = t, w.tag) {
            case 1:
              if (p = w.payload, typeof p == "function") {
                c = p.call(g, c, f);
                break A;
              }
              c = p;
              break A;
            case 3:
              p.flags = p.flags & -65537 | 128;
            case 0:
              if (p = w.payload, f = typeof p == "function" ? p.call(g, c, f) : p, f == null) break A;
              c = mA({}, c, f);
              break A;
            case 2:
              kt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (A.flags |= 64, f = n.effects, f === null ? n.effects = [a] : f.push(a));
      } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (l = u = g, s = c) : u = u.next = g, o |= f;
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
    Mr |= o, A.lanes = o, A.memoizedState = c;
  }
}
function wg(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var r = A[e], n = r.callback;
    if (n !== null) {
      if (r.callback = null, r = t, typeof n != "function") throw Error(H(191, n));
      n.call(r);
    }
  }
}
var Lo = {}, qe = cr(Lo), so = cr(Lo), lo = cr(Lo);
function yr(A) {
  if (A === Lo) throw Error(H(174));
  return A;
}
function Id(A, e) {
  switch (iA(lo, e), iA(so, A), iA(qe, Lo), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Bc(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = Bc(e, A);
  }
  lA(qe), iA(qe, e);
}
function Kn() {
  lA(qe), lA(so), lA(lo);
}
function im(A) {
  yr(lo.current);
  var e = yr(qe.current), t = Bc(e, A.type);
  e !== t && (iA(so, A), iA(qe, t));
}
function Hd(A) {
  so.current === A && (lA(qe), lA(so));
}
var pA = cr(0);
function xs(A) {
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
var hu = [];
function xd() {
  for (var A = 0; A < hu.length; A++) hu[A]._workInProgressVersionPrimary = null;
  hu.length = 0;
}
var Ya = yt.ReactCurrentDispatcher, wu = yt.ReactCurrentBatchConfig, Nr = 0, wA = null, xA = null, kA = null, Ss = !1, Ki = !1, uo = 0, Gy = 0;
function _A() {
  throw Error(H(321));
}
function Sd(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!_e(A[t], e[t])) return !1;
  return !0;
}
function Ld(A, e, t, r, n, i) {
  if (Nr = i, wA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Ya.current = A === null || A.memoizedState === null ? Xy : zy, A = t(r, n), Ki) {
    i = 0;
    do {
      if (Ki = !1, uo = 0, 25 <= i) throw Error(H(301));
      i += 1, kA = xA = null, e.updateQueue = null, Ya.current = Yy, A = t(r, n);
    } while (Ki);
  }
  if (Ya.current = Ls, e = xA !== null && xA.next !== null, Nr = 0, kA = xA = wA = null, Ss = !1, e) throw Error(H(300));
  return A;
}
function bd() {
  var A = uo !== 0;
  return uo = 0, A;
}
function Xe() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return kA === null ? wA.memoizedState = kA = A : kA = kA.next = A, kA;
}
function He() {
  if (xA === null) {
    var A = wA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = xA.next;
  var e = kA === null ? wA.memoizedState : kA.next;
  if (e !== null) kA = e, xA = A;
  else {
    if (A === null) throw Error(H(310));
    xA = A, A = { memoizedState: xA.memoizedState, baseState: xA.baseState, baseQueue: xA.baseQueue, queue: xA.queue, next: null }, kA === null ? wA.memoizedState = kA = A : kA = kA.next = A;
  }
  return kA;
}
function co(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function mu(A) {
  var e = He(), t = e.queue;
  if (t === null) throw Error(H(311));
  t.lastRenderedReducer = A;
  var r = xA, n = r.baseQueue, i = t.pending;
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
      if ((Nr & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), r = l.hasEagerState ? l.eagerState : A(r, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (a = s = c, o = r) : s = s.next = c, wA.lanes |= u, Mr |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? o = r : s.next = a, _e(r, e.memoizedState) || (re = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = s, t.lastRenderedState = r;
  }
  if (A = t.interleaved, A !== null) {
    n = A;
    do
      i = n.lane, wA.lanes |= i, Mr |= i, n = n.next;
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function vu(A) {
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
    _e(i, e.memoizedState) || (re = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function om() {
}
function am(A, e) {
  var t = wA, r = He(), n = e(), i = !_e(r.memoizedState, n);
  if (i && (r.memoizedState = n, re = !0), r = r.queue, Td(um.bind(null, t, r, A), [A]), r.getSnapshot !== e || i || kA !== null && kA.memoizedState.tag & 1) {
    if (t.flags |= 2048, fo(9, lm.bind(null, t, r, n, e), void 0, null), DA === null) throw Error(H(349));
    Nr & 30 || sm(t, e, n);
  }
  return n;
}
function sm(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function lm(A, e, t, r) {
  e.value = t, e.getSnapshot = r, cm(e) && fm(A);
}
function um(A, e, t) {
  return t(function() {
    cm(e) && fm(A);
  });
}
function cm(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !_e(A, t);
  } catch {
    return !0;
  }
}
function fm(A) {
  var e = ht(A, 1);
  e !== null && Me(e, A, 1, -1);
}
function mg(A) {
  var e = Xe();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: co, lastRenderedState: A }, e.queue = A, A = A.dispatch = Wy.bind(null, wA, A), [e.memoizedState, A];
}
function fo(A, e, t, r) {
  return A = { tag: A, create: e, destroy: t, deps: r, next: null }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function dm() {
  return He().memoizedState;
}
function ja(A, e, t, r) {
  var n = Xe();
  wA.flags |= A, n.memoizedState = fo(1 | e, t, void 0, r === void 0 ? null : r);
}
function dl(A, e, t, r) {
  var n = He();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xA !== null) {
    var o = xA.memoizedState;
    if (i = o.destroy, r !== null && Sd(r, o.deps)) {
      n.memoizedState = fo(e, t, i, r);
      return;
    }
  }
  wA.flags |= A, n.memoizedState = fo(1 | e, t, i, r);
}
function vg(A, e) {
  return ja(8390656, 8, A, e);
}
function Td(A, e) {
  return dl(2048, 8, A, e);
}
function Bm(A, e) {
  return dl(4, 2, A, e);
}
function gm(A, e) {
  return dl(4, 4, A, e);
}
function pm(A, e) {
  if (typeof e == "function") return A = A(), e(A), function() {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function() {
    e.current = null;
  };
}
function hm(A, e, t) {
  return t = t != null ? t.concat([A]) : null, dl(4, 4, pm.bind(null, e, A), t);
}
function kd() {
}
function wm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Sd(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function mm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Sd(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function vm(A, e, t) {
  return Nr & 21 ? (_e(t, e) || (t = Uw(), wA.lanes |= t, Mr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, re = !0), A.memoizedState = t);
}
function Vy(A, e) {
  var t = eA;
  eA = t !== 0 && 4 > t ? t : 4, A(!0);
  var r = wu.transition;
  wu.transition = {};
  try {
    A(!1), e();
  } finally {
    eA = t, wu.transition = r;
  }
}
function Cm() {
  return He().memoizedState;
}
function $y(A, e, t) {
  var r = Jt(A);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Qm(A)) ym(e, t);
  else if (t = rm(A, e, t, r), t !== null) {
    var n = JA();
    Me(t, A, r, n), Fm(t, e, r);
  }
}
function Wy(A, e, t) {
  var r = Jt(A), n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Qm(A)) ym(e, n);
  else {
    var i = A.alternate;
    if (A.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
      var o = e.lastRenderedState, a = i(o, t);
      if (n.hasEagerState = !0, n.eagerState = a, _e(a, o)) {
        var s = e.interleaved;
        s === null ? (n.next = n, Ud(e)) : (n.next = s.next, s.next = n), e.interleaved = n;
        return;
      }
    } catch {
    } finally {
    }
    t = rm(A, e, n, r), t !== null && (n = JA(), Me(t, A, r, n), Fm(t, e, r));
  }
}
function Qm(A) {
  var e = A.alternate;
  return A === wA || e !== null && e === wA;
}
function ym(A, e) {
  Ki = Ss = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Fm(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, cd(A, t);
  }
}
var Ls = { readContext: Ie, useCallback: _A, useContext: _A, useEffect: _A, useImperativeHandle: _A, useInsertionEffect: _A, useLayoutEffect: _A, useMemo: _A, useReducer: _A, useRef: _A, useState: _A, useDebugValue: _A, useDeferredValue: _A, useTransition: _A, useMutableSource: _A, useSyncExternalStore: _A, useId: _A, unstable_isNewReconciler: !1 }, Xy = { readContext: Ie, useCallback: function(A, e) {
  return Xe().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: Ie, useEffect: vg, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, ja(
    4194308,
    4,
    pm.bind(null, e, A),
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
  return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, r.queue = A, A = A.dispatch = $y.bind(null, wA, A), [r.memoizedState, A];
}, useRef: function(A) {
  var e = Xe();
  return A = { current: A }, e.memoizedState = A;
}, useState: mg, useDebugValue: kd, useDeferredValue: function(A) {
  return Xe().memoizedState = A;
}, useTransition: function() {
  var A = mg(!1), e = A[0];
  return A = Vy.bind(null, A[1]), Xe().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var r = wA, n = Xe();
  if (fA) {
    if (t === void 0) throw Error(H(407));
    t = t();
  } else {
    if (t = e(), DA === null) throw Error(H(349));
    Nr & 30 || sm(r, e, t);
  }
  n.memoizedState = t;
  var i = { value: t, getSnapshot: e };
  return n.queue = i, vg(um.bind(
    null,
    r,
    i,
    A
  ), [A]), r.flags |= 2048, fo(9, lm.bind(null, r, i, t, e), void 0, null), t;
}, useId: function() {
  var A = Xe(), e = DA.identifierPrefix;
  if (fA) {
    var t = ct, r = ut;
    t = (r & ~(1 << 32 - Ne(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = uo++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = Gy++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, zy = {
  readContext: Ie,
  useCallback: wm,
  useContext: Ie,
  useEffect: Td,
  useImperativeHandle: hm,
  useInsertionEffect: Bm,
  useLayoutEffect: gm,
  useMemo: mm,
  useReducer: mu,
  useRef: dm,
  useState: function() {
    return mu(co);
  },
  useDebugValue: kd,
  useDeferredValue: function(A) {
    var e = He();
    return vm(e, xA.memoizedState, A);
  },
  useTransition: function() {
    var A = mu(co)[0], e = He().memoizedState;
    return [A, e];
  },
  useMutableSource: om,
  useSyncExternalStore: am,
  useId: Cm,
  unstable_isNewReconciler: !1
}, Yy = { readContext: Ie, useCallback: wm, useContext: Ie, useEffect: Td, useImperativeHandle: hm, useInsertionEffect: Bm, useLayoutEffect: gm, useMemo: mm, useReducer: vu, useRef: dm, useState: function() {
  return vu(co);
}, useDebugValue: kd, useDeferredValue: function(A) {
  var e = He();
  return xA === null ? e.memoizedState = A : vm(e, xA.memoizedState, A);
}, useTransition: function() {
  var A = vu(co)[0], e = He().memoizedState;
  return [A, e];
}, useMutableSource: om, useSyncExternalStore: am, useId: Cm, unstable_isNewReconciler: !1 };
function ke(A, e) {
  if (A && A.defaultProps) {
    e = mA({}, e), A = A.defaultProps;
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function Oc(A, e, t, r) {
  e = A.memoizedState, t = t(r, e), t = t == null ? e : mA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Bl = { isMounted: function(A) {
  return (A = A._reactInternals) ? Xr(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var r = JA(), n = Jt(A), i = ft(r, n);
  i.payload = e, t != null && (i.callback = t), e = Yt(A, i, n), e !== null && (Me(e, A, n, r), za(e, A, n));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var r = JA(), n = Jt(A), i = ft(r, n);
  i.tag = 1, i.payload = e, t != null && (i.callback = t), e = Yt(A, i, n), e !== null && (Me(e, A, n, r), za(e, A, n));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = JA(), r = Jt(A), n = ft(t, r);
  n.tag = 2, e != null && (n.callback = e), e = Yt(A, n, r), e !== null && (Me(e, A, r, t), za(e, A, r));
} };
function Cg(A, e, t, r, n, i, o) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !no(t, r) || !no(n, i) : !0;
}
function Um(A, e, t) {
  var r = !1, n = tr, i = e.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (n = ae(e) ? Kr : XA.current, r = e.contextTypes, i = (r = r != null) ? kn(A, n) : tr), e = new e(t, i), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Bl, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = i), e;
}
function Qg(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && Bl.enqueueReplaceState(e, e.state, null);
}
function Dc(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = {}, Ed(A);
  var i = e.contextType;
  typeof i == "object" && i !== null ? n.context = Ie(i) : (i = ae(e) ? Kr : XA.current, n.context = kn(A, i)), n.state = A.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Oc(A, e, i, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && Bl.enqueueReplaceState(n, n.state, null), Hs(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function Rn(A, e) {
  try {
    var t = "", r = e;
    do
      t += yQ(r), r = r.return;
    while (r);
    var n = t;
  } catch (i) {
    n = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function Cu(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function Kc(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var jy = typeof WeakMap == "function" ? WeakMap : Map;
function Em(A, e, t) {
  t = ft(-1, t), t.tag = 3, t.payload = { element: null };
  var r = e.value;
  return t.callback = function() {
    Ts || (Ts = !0, Xc = r), Kc(A, e);
  }, t;
}
function Im(A, e, t) {
  t = ft(-1, t), t.tag = 3;
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    t.payload = function() {
      return r(n);
    }, t.callback = function() {
      Kc(A, e);
    };
  }
  var i = A.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
    Kc(A, e), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function yg(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new jy();
    var n = /* @__PURE__ */ new Set();
    r.set(e, n);
  } else n = r.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = uF.bind(null, A, e, t), e.then(A, A));
}
function Fg(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function Ug(A, e, t, r, n) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = n, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = ft(-1, 1), e.tag = 2, Yt(t, e, 1))), t.lanes |= 1), A);
}
var Jy = yt.ReactCurrentOwner, re = !1;
function jA(A, e, t, r) {
  e.child = A === null ? tm(e, null, t, r) : Dn(e, A.child, t, r);
}
function Eg(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return Hn(e, n), r = Ld(A, e, t, r, i, n), t = bd(), A !== null && !re ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && t && md(e), e.flags |= 1, jA(A, e, r, n), e.child);
}
function Ig(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" && !_d(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = i, Hm(A, e, i, r, n)) : (A = As(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (i = A.child, !(A.lanes & n)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : no, t(o, r) && A.ref === e.ref) return wt(A, e, n);
  }
  return e.flags |= 1, A = Zt(i, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Hm(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (no(i, r) && A.ref === e.ref) if (re = !1, e.pendingProps = r = i, (A.lanes & n) !== 0) A.flags & 131072 && (re = !0);
    else return e.lanes = A.lanes, wt(A, e, n);
  }
  return Rc(A, e, t, r, n);
}
function xm(A, e, t) {
  var r = e.pendingProps, n = r.children, i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, iA(wn, ce), ce |= t;
  else {
    if (!(t & 1073741824)) return A = i !== null ? i.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, iA(wn, ce), ce |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, iA(wn, ce), ce |= r;
  }
  else i !== null ? (r = i.baseLanes | t, e.memoizedState = null) : r = t, iA(wn, ce), ce |= r;
  return jA(A, e, n, t), e.child;
}
function Sm(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Rc(A, e, t, r, n) {
  var i = ae(t) ? Kr : XA.current;
  return i = kn(e, i), Hn(e, n), t = Ld(A, e, t, r, i, n), r = bd(), A !== null && !re ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && r && md(e), e.flags |= 1, jA(A, e, t, n), e.child);
}
function Hg(A, e, t, r, n) {
  if (ae(t)) {
    var i = !0;
    ys(e);
  } else i = !1;
  if (Hn(e, n), e.stateNode === null) Ja(A, e), Um(e, t, r), Dc(e, t, r, n), r = !0;
  else if (A === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var s = o.context, l = t.contextType;
    typeof l == "object" && l !== null ? l = Ie(l) : (l = ae(t) ? Kr : XA.current, l = kn(e, l));
    var u = t.getDerivedStateFromProps, c = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== l) && Qg(e, o, r, l), kt = !1;
    var f = e.memoizedState;
    o.state = f, Hs(e, r, o, n), s = e.memoizedState, a !== r || f !== s || oe.current || kt ? (typeof u == "function" && (Oc(e, t, u, r), s = e.memoizedState), (a = kt || Cg(e, t, a, r, f, s, l)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = s), o.props = r, o.state = s, o.context = l, r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    o = e.stateNode, nm(A, e), a = e.memoizedProps, l = e.type === e.elementType ? a : ke(e.type, a), o.props = l, c = e.pendingProps, f = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ae(t) ? Kr : XA.current, s = kn(e, s));
    var g = t.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || f !== s) && Qg(e, o, r, s), kt = !1, f = e.memoizedState, o.state = f, Hs(e, r, o, n);
    var p = e.memoizedState;
    a !== c || f !== p || oe.current || kt ? (typeof g == "function" && (Oc(e, t, g, r), p = e.memoizedState), (l = kt || Cg(e, t, l, r, f, p, s) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, p, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, p, s)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = p), o.props = r, o.state = p, o.context = s, r = l) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Nc(A, e, t, r, i, n);
}
function Nc(A, e, t, r, n, i) {
  Sm(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && dg(e, t, !1), wt(A, e, i);
  r = e.stateNode, Jy.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && o ? (e.child = Dn(e, A.child, null, i), e.child = Dn(e, null, a, i)) : jA(A, e, a, i), e.memoizedState = r.state, n && dg(e, t, !0), e.child;
}
function Lm(A) {
  var e = A.stateNode;
  e.pendingContext ? fg(A, e.pendingContext, e.pendingContext !== e.context) : e.context && fg(A, e.context, !1), Id(A, e.containerInfo);
}
function xg(A, e, t, r, n) {
  return On(), Cd(n), e.flags |= 256, jA(A, e, t, r), e.child;
}
var Mc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pc(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function bm(A, e, t) {
  var r = e.pendingProps, n = pA.current, i = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), a ? (i = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), iA(pA, n & 1), A === null)
    return Tc(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = r.children, A = r.fallback, i ? (r = e.mode, i = e.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = hl(o, r, 0, null), A = Sr(A, r, t, null), i.return = e, A.return = e, i.sibling = A, e.child = i, e.child.memoizedState = Pc(t), e.memoizedState = Mc, A) : Od(e, o));
  if (n = A.memoizedState, n !== null && (a = n.dehydrated, a !== null)) return Zy(A, e, o, r, a, n, t);
  if (i) {
    i = r.fallback, o = e.mode, n = A.child, a = n.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && e.child !== n ? (r = e.child, r.childLanes = 0, r.pendingProps = s, e.deletions = null) : (r = Zt(n, s), r.subtreeFlags = n.subtreeFlags & 14680064), a !== null ? i = Zt(a, i) : (i = Sr(i, o, t, null), i.flags |= 2), i.return = e, r.return = e, r.sibling = i, e.child = r, r = i, i = e.child, o = A.child.memoizedState, o = o === null ? Pc(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = A.childLanes & ~t, e.memoizedState = Mc, r;
  }
  return i = A.child, A = i.sibling, r = Zt(i, { mode: "visible", children: r.children }), !(e.mode & 1) && (r.lanes = t), r.return = e, r.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = r, e.memoizedState = null, r;
}
function Od(A, e) {
  return e = hl({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function ra(A, e, t, r) {
  return r !== null && Cd(r), Dn(e, A.child, null, t), A = Od(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function Zy(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, r = Cu(Error(H(422))), ra(A, e, o, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (i = r.fallback, n = e.mode, r = hl({ mode: "visible", children: r.children }, n, 0, null), i = Sr(i, n, o, null), i.flags |= 2, r.return = e, i.return = e, r.sibling = i, e.child = r, e.mode & 1 && Dn(e, A.child, null, o), e.child.memoizedState = Pc(o), e.memoizedState = Mc, i);
  if (!(e.mode & 1)) return ra(A, e, o, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(H(419)), r = Cu(i, r, void 0), ra(A, e, o, r);
  }
  if (a = (o & A.childLanes) !== 0, re || a) {
    if (r = DA, r !== null) {
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
    return Pd(), r = Cu(Error(H(421))), ra(A, e, o, r);
  }
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = cF.bind(null, A), n._reactRetry = e, null) : (A = i.treeContext, fe = zt(n.nextSibling), de = e, fA = !0, De = null, A !== null && (ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Rr, ut = A.id, ct = A.overflow, Rr = e), e = Od(e, r.children), e.flags |= 4096, e);
}
function Sg(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), kc(A.return, e, t);
}
function Qu(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: n } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = n);
}
function Tm(A, e, t) {
  var r = e.pendingProps, n = r.revealOrder, i = r.tail;
  if (jA(A, e, r.children, t), r = pA.current, r & 2) r = r & 1 | 2, e.flags |= 128;
  else {
    if (A !== null && A.flags & 128) A: for (A = e.child; A !== null; ) {
      if (A.tag === 13) A.memoizedState !== null && Sg(A, t, e);
      else if (A.tag === 19) Sg(A, t, e);
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
      for (t = e.child, n = null; t !== null; ) A = t.alternate, A !== null && xs(A) === null && (n = t), t = t.sibling;
      t = n, t === null ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), Qu(e, !1, n, t, i);
      break;
    case "backwards":
      for (t = null, n = e.child, e.child = null; n !== null; ) {
        if (A = n.alternate, A !== null && xs(A) === null) {
          e.child = n;
          break;
        }
        A = n.sibling, n.sibling = t, t = n, n = A;
      }
      Qu(e, !0, t, null, i);
      break;
    case "together":
      Qu(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Ja(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function wt(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Mr |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error(H(153));
  if (e.child !== null) {
    for (A = e.child, t = Zt(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; ) A = A.sibling, t = t.sibling = Zt(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function qy(A, e, t) {
  switch (e.tag) {
    case 3:
      Lm(e), On();
      break;
    case 5:
      im(e);
      break;
    case 1:
      ae(e.type) && ys(e);
      break;
    case 4:
      Id(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context, n = e.memoizedProps.value;
      iA(Es, r._currentValue), r._currentValue = n;
      break;
    case 13:
      if (r = e.memoizedState, r !== null)
        return r.dehydrated !== null ? (iA(pA, pA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? bm(A, e, t) : (iA(pA, pA.current & 1), A = wt(A, e, t), A !== null ? A.sibling : null);
      iA(pA, pA.current & 1);
      break;
    case 19:
      if (r = (t & e.childLanes) !== 0, A.flags & 128) {
        if (r) return Tm(A, e, t);
        e.flags |= 128;
      }
      if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), iA(pA, pA.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, xm(A, e, t);
  }
  return wt(A, e, t);
}
var km, _c, Om, Dm;
km = function(A, e) {
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
_c = function() {
};
Om = function(A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    A = e.stateNode, yr(qe.current);
    var i = null;
    switch (t) {
      case "input":
        n = uc(A, n), r = uc(A, r), i = [];
        break;
      case "select":
        n = mA({}, n, { value: void 0 }), r = mA({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        n = dc(A, n), r = dc(A, r), i = [];
        break;
      default:
        typeof n.onClick != "function" && typeof r.onClick == "function" && (A.onclick = Cs);
    }
    gc(t, r);
    var o;
    t = null;
    for (l in n) if (!r.hasOwnProperty(l) && n.hasOwnProperty(l) && n[l] != null) if (l === "style") {
      var a = n[l];
      for (o in a) a.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
    } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ji.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in r) {
      var s = r[l];
      if (a = n != null ? n[l] : void 0, r.hasOwnProperty(l) && s !== a && (s != null || a != null)) if (l === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
        for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
      } else t || (i || (i = []), i.push(
        l,
        t
      )), t = s;
      else l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, a = a ? a.__html : void 0, s != null && a !== s && (i = i || []).push(l, s)) : l === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(l, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Ji.hasOwnProperty(l) ? (s != null && l === "onScroll" && oA("scroll", A), i || a === s || (i = [])) : (i = i || []).push(l, s));
    }
    t && (i = i || []).push("style", t);
    var l = i;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
Dm = function(A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function ci(A, e) {
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
function GA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, r = 0;
  if (e) for (var n = A.child; n !== null; ) t |= n.lanes | n.childLanes, r |= n.subtreeFlags & 14680064, r |= n.flags & 14680064, n.return = A, n = n.sibling;
  else for (n = A.child; n !== null; ) t |= n.lanes | n.childLanes, r |= n.subtreeFlags, r |= n.flags, n.return = A, n = n.sibling;
  return A.subtreeFlags |= r, A.childLanes = t, e;
}
function AF(A, e, t) {
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
      return GA(e), null;
    case 1:
      return ae(e.type) && Qs(), GA(e), null;
    case 3:
      return r = e.stateNode, Kn(), lA(oe), lA(XA), xd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (ea(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, De !== null && (jc(De), De = null))), _c(A, e), GA(e), null;
    case 5:
      Hd(e);
      var n = yr(lo.current);
      if (t = e.type, A !== null && e.stateNode != null) Om(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(H(166));
          return GA(e), null;
        }
        if (A = yr(qe.current), ea(e)) {
          r = e.stateNode, t = e.type;
          var i = e.memoizedProps;
          switch (r[je] = e, r[ao] = i, A = (e.mode & 1) !== 0, t) {
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
              for (n = 0; n < Ci.length; n++) oA(Ci[n], r);
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
              NB(r, i), oA("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oA("invalid", r);
              break;
            case "textarea":
              PB(r, i), oA("invalid", r);
          }
          gc(t, i), n = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var a = i[o];
            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Aa(r.textContent, a, A), n = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Aa(
              r.textContent,
              a,
              A
            ), n = ["children", "" + a]) : Ji.hasOwnProperty(o) && a != null && o === "onScroll" && oA("scroll", r);
          }
          switch (t) {
            case "input":
              Wo(r), MB(r, i, !0);
              break;
            case "textarea":
              Wo(r), _B(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Cs);
          }
          r = n, e.updateQueue = r, r !== null && (e.flags |= 4);
        } else {
          o = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = uw(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = o.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = o.createElement(t, { is: r.is }) : (A = o.createElement(t), t === "select" && (o = A, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : A = o.createElementNS(A, t), A[je] = e, A[ao] = r, km(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (o = pc(t, r), t) {
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
                for (n = 0; n < Ci.length; n++) oA(Ci[n], A);
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
                NB(A, r), n = uc(A, r), oA("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!r.multiple }, n = mA({}, r, { value: void 0 }), oA("invalid", A);
                break;
              case "textarea":
                PB(A, r), n = dc(A, r), oA("invalid", A);
                break;
              default:
                n = r;
            }
            gc(t, n), a = n;
            for (i in a) if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "style" ? dw(A, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && cw(A, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Zi(A, s) : typeof s == "number" && Zi(A, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ji.hasOwnProperty(i) ? s != null && i === "onScroll" && oA("scroll", A) : s != null && id(A, i, s, o));
            }
            switch (t) {
              case "input":
                Wo(A), MB(A, r, !1);
                break;
              case "textarea":
                Wo(A), _B(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + er(r.value));
                break;
              case "select":
                A.multiple = !!r.multiple, i = r.value, i != null ? Fn(A, !!r.multiple, i, !1) : r.defaultValue != null && Fn(
                  A,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = Cs);
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
      return GA(e), null;
    case 6:
      if (A && e.stateNode != null) Dm(A, e, A.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(H(166));
        if (t = yr(lo.current), yr(qe.current), ea(e)) {
          if (r = e.stateNode, t = e.memoizedProps, r[je] = e, (i = r.nodeValue !== t) && (A = de, A !== null)) switch (A.tag) {
            case 3:
              Aa(r.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && Aa(r.nodeValue, t, (A.mode & 1) !== 0);
          }
          i && (e.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[je] = e, e.stateNode = r;
      }
      return GA(e), null;
    case 13:
      if (lA(pA), r = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (fA && fe !== null && e.mode & 1 && !(e.flags & 128)) Am(), On(), e.flags |= 98560, i = !1;
        else if (i = ea(e), r !== null && r.dehydrated !== null) {
          if (A === null) {
            if (!i) throw Error(H(318));
            if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[je] = e;
          } else On(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          GA(e), i = !1;
        } else De !== null && (jc(De), De = null), i = !0;
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (r = r !== null, r !== (A !== null && A.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (A === null || pA.current & 1 ? LA === 0 && (LA = 3) : Pd())), e.updateQueue !== null && (e.flags |= 4), GA(e), null);
    case 4:
      return Kn(), _c(A, e), A === null && io(e.stateNode.containerInfo), GA(e), null;
    case 10:
      return Fd(e.type._context), GA(e), null;
    case 17:
      return ae(e.type) && Qs(), GA(e), null;
    case 19:
      if (lA(pA), i = e.memoizedState, i === null) return GA(e), null;
      if (r = (e.flags & 128) !== 0, o = i.rendering, o === null) if (r) ci(i, !1);
      else {
        if (LA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (o = xs(A), o !== null) {
            for (e.flags |= 128, ci(i, !1), r = o.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = t, t = e.child; t !== null; ) i = t, A = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = A, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, A = o.dependencies, i.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return iA(pA, pA.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        i.tail !== null && FA() > Nn && (e.flags |= 128, r = !0, ci(i, !1), e.lanes = 4194304);
      }
      else {
        if (!r) if (A = xs(o), A !== null) {
          if (e.flags |= 128, r = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), ci(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !fA) return GA(e), null;
        } else 2 * FA() - i.renderingStartTime > Nn && t !== 1073741824 && (e.flags |= 128, r = !0, ci(i, !1), e.lanes = 4194304);
        i.isBackwards ? (o.sibling = e.child, e.child = o) : (t = i.last, t !== null ? t.sibling = o : e.child = o, i.last = o);
      }
      return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = FA(), e.sibling = null, t = pA.current, iA(pA, r ? t & 1 | 2 : t & 1), e) : (GA(e), null);
    case 22:
    case 23:
      return Md(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? ce & 1073741824 && (GA(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : GA(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, e.tag));
}
function eF(A, e) {
  switch (vd(e), e.tag) {
    case 1:
      return ae(e.type) && Qs(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Kn(), lA(oe), lA(XA), xd(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Hd(e), null;
    case 13:
      if (lA(pA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(H(340));
        On();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return lA(pA), null;
    case 4:
      return Kn(), null;
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
var na = !1, WA = !1, tF = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function hn(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    vA(A, e, r);
  }
  else t.current = null;
}
function Gc(A, e, t) {
  try {
    t();
  } catch (r) {
    vA(A, e, r);
  }
}
var Lg = !1;
function rF(A, e) {
  if (Ec = ws, A = Pw(), wd(A)) {
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
          for (var g; c !== t || n !== 0 && c.nodeType !== 3 || (a = o + n), c !== i || r !== 0 && c.nodeType !== 3 || (s = o + r), c.nodeType === 3 && (o += c.nodeValue.length), (g = c.firstChild) !== null; )
            f = c, c = g;
          for (; ; ) {
            if (c === A) break e;
            if (f === t && ++l === n && (a = o), f === i && ++u === r && (s = o), (g = c.nextSibling) !== null) break;
            c = f, f = c.parentNode;
          }
          c = g;
        }
        t = a === -1 || s === -1 ? null : { start: a, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Ic = { focusedElem: A, selectionRange: t }, ws = !1, O = e; O !== null; ) if (e = O, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null) A.return = e, O = A;
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
            var w = p.memoizedProps, y = p.memoizedState, B = e.stateNode, d = B.getSnapshotBeforeUpdate(e.elementType === e.type ? w : ke(e.type, w), y);
            B.__reactInternalSnapshotBeforeUpdate = d;
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
  return p = Lg, Lg = !1, p;
}
function Ri(A, e, t) {
  var r = e.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var n = r = r.next;
    do {
      if ((n.tag & A) === A) {
        var i = n.destroy;
        n.destroy = void 0, i !== void 0 && Gc(e, t, i);
      }
      n = n.next;
    } while (n !== r);
  }
}
function gl(A, e) {
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
function Vc(A) {
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
function Km(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, Km(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[je], delete e[ao], delete e[Sc], delete e[Ny], delete e[My])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function Rm(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function bg(A) {
  A: for (; ; ) {
    for (; A.sibling === null; ) {
      if (A.return === null || Rm(A.return)) return null;
      A = A.return;
    }
    for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      A.child.return = A, A = A.child;
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function $c(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Cs));
  else if (r !== 4 && (A = A.child, A !== null)) for ($c(A, e, t), A = A.sibling; A !== null; ) $c(A, e, t), A = A.sibling;
}
function Wc(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && (A = A.child, A !== null)) for (Wc(A, e, t), A = A.sibling; A !== null; ) Wc(A, e, t), A = A.sibling;
}
var KA = null, Oe = !1;
function It(A, e, t) {
  for (t = t.child; t !== null; ) Nm(A, e, t), t = t.sibling;
}
function Nm(A, e, t) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
    Ze.onCommitFiberUnmount(al, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      WA || hn(t, e);
    case 6:
      var r = KA, n = Oe;
      KA = null, It(A, e, t), KA = r, Oe = n, KA !== null && (Oe ? (A = KA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : KA.removeChild(t.stateNode));
      break;
    case 18:
      KA !== null && (Oe ? (A = KA, t = t.stateNode, A.nodeType === 8 ? gu(A.parentNode, t) : A.nodeType === 1 && gu(A, t), to(A)) : gu(KA, t.stateNode));
      break;
    case 4:
      r = KA, n = Oe, KA = t.stateNode.containerInfo, Oe = !0, It(A, e, t), KA = r, Oe = n;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!WA && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        n = r = r.next;
        do {
          var i = n, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Gc(t, e, o), n = n.next;
        } while (n !== r);
      }
      It(A, e, t);
      break;
    case 1:
      if (!WA && (hn(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (a) {
        vA(t, e, a);
      }
      It(A, e, t);
      break;
    case 21:
      It(A, e, t);
      break;
    case 22:
      t.mode & 1 ? (WA = (r = WA) || t.memoizedState !== null, It(A, e, t), WA = r) : It(A, e, t);
      break;
    default:
      It(A, e, t);
  }
}
function Tg(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new tF()), e.forEach(function(r) {
      var n = fF.bind(null, A, r);
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
            KA = a.stateNode, Oe = !1;
            break A;
          case 3:
            KA = a.stateNode.containerInfo, Oe = !0;
            break A;
          case 4:
            KA = a.stateNode.containerInfo, Oe = !0;
            break A;
        }
        a = a.return;
      }
      if (KA === null) throw Error(H(160));
      Nm(i, o, n), KA = null, Oe = !1;
      var s = n.alternate;
      s !== null && (s.return = null), n.return = null;
    } catch (l) {
      vA(n, e, l);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Mm(e, A), e = e.sibling;
}
function Mm(A, e) {
  var t = A.alternate, r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(e, A), $e(A), r & 4) {
        try {
          Ri(3, A, A.return), gl(3, A);
        } catch (w) {
          vA(A, A.return, w);
        }
        try {
          Ri(5, A, A.return);
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 1:
      Le(e, A), $e(A), r & 512 && t !== null && hn(t, t.return);
      break;
    case 5:
      if (Le(e, A), $e(A), r & 512 && t !== null && hn(t, t.return), A.flags & 32) {
        var n = A.stateNode;
        try {
          Zi(n, "");
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      if (r & 4 && (n = A.stateNode, n != null)) {
        var i = A.memoizedProps, o = t !== null ? t.memoizedProps : i, a = A.type, s = A.updateQueue;
        if (A.updateQueue = null, s !== null) try {
          a === "input" && i.type === "radio" && i.name != null && sw(n, i), pc(a, o);
          var l = pc(a, i);
          for (o = 0; o < s.length; o += 2) {
            var u = s[o], c = s[o + 1];
            u === "style" ? dw(n, c) : u === "dangerouslySetInnerHTML" ? cw(n, c) : u === "children" ? Zi(n, c) : id(n, u, c, l);
          }
          switch (a) {
            case "input":
              cc(n, i);
              break;
            case "textarea":
              lw(n, i);
              break;
            case "select":
              var f = n._wrapperState.wasMultiple;
              n._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? Fn(n, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? Fn(
                n,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Fn(n, !!i.multiple, i.multiple ? [] : "", !1));
          }
          n[ao] = i;
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
        to(e.containerInfo);
      } catch (w) {
        vA(A, A.return, w);
      }
      break;
    case 4:
      Le(e, A), $e(A);
      break;
    case 13:
      Le(e, A), $e(A), n = A.child, n.flags & 8192 && (i = n.memoizedState !== null, n.stateNode.isHidden = i, !i || n.alternate !== null && n.alternate.memoizedState !== null || (Rd = FA())), r & 4 && Tg(A);
      break;
    case 22:
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? (WA = (l = WA) || u, Le(e, A), WA = l) : Le(e, A), $e(A), r & 8192) {
        if (l = A.memoizedState !== null, (A.stateNode.isHidden = l) && !u && A.mode & 1) for (O = A, u = A.child; u !== null; ) {
          for (c = O = u; O !== null; ) {
            switch (f = O, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ri(4, f, f.return);
                break;
              case 1:
                hn(f, f.return);
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
                hn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Og(c);
                  continue;
                }
            }
            g !== null ? (g.return = f, O = g) : Og(c);
          }
          u = u.sibling;
        }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                n = c.stateNode, l ? (i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, s = c.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = fw("display", o));
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
      Le(e, A), $e(A), r & 4 && Tg(A);
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
          if (Rm(t)) {
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
          r.flags & 32 && (Zi(n, ""), r.flags &= -33);
          var i = bg(A);
          Wc(A, i, n);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, a = bg(A);
          $c(A, a, o);
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
function nF(A, e, t) {
  O = A, Pm(A);
}
function Pm(A, e, t) {
  for (var r = (A.mode & 1) !== 0; O !== null; ) {
    var n = O, i = n.child;
    if (n.tag === 22 && r) {
      var o = n.memoizedState !== null || na;
      if (!o) {
        var a = n.alternate, s = a !== null && a.memoizedState !== null || WA;
        a = na;
        var l = WA;
        if (na = o, (WA = s) && !l) for (O = n; O !== null; ) o = O, s = o.child, o.tag === 22 && o.memoizedState !== null ? Dg(n) : s !== null ? (s.return = o, O = s) : Dg(n);
        for (; i !== null; ) O = i, Pm(i), i = i.sibling;
        O = n, na = a, WA = l;
      }
      kg(A);
    } else n.subtreeFlags & 8772 && i !== null ? (i.return = n, O = i) : kg(A);
  }
}
function kg(A) {
  for (; O !== null; ) {
    var e = O;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            WA || gl(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !WA) if (t === null) r.componentDidMount();
            else {
              var n = e.elementType === e.type ? t.memoizedProps : ke(e.type, t.memoizedProps);
              r.componentDidUpdate(n, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = e.updateQueue;
            i !== null && wg(e, i, r);
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
              wg(e, o, t);
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
                  c !== null && to(c);
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
        WA || e.flags & 512 && Vc(e);
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
function Og(A) {
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
function Dg(A) {
  for (; O !== null; ) {
    var e = O;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            gl(4, e);
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
            Vc(e);
          } catch (s) {
            vA(e, i, s);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Vc(e);
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
var iF = Math.ceil, bs = yt.ReactCurrentDispatcher, Dd = yt.ReactCurrentOwner, Ee = yt.ReactCurrentBatchConfig, Z = 0, DA = null, IA = null, MA = 0, ce = 0, wn = cr(0), LA = 0, Bo = null, Mr = 0, pl = 0, Kd = 0, Ni = null, te = null, Rd = 0, Nn = 1 / 0, ot = null, Ts = !1, Xc = null, jt = null, ia = !1, Mt = null, ks = 0, Mi = 0, zc = null, Za = -1, qa = 0;
function JA() {
  return Z & 6 ? FA() : Za !== -1 ? Za : Za = FA();
}
function Jt(A) {
  return A.mode & 1 ? Z & 2 && MA !== 0 ? MA & -MA : _y.transition !== null ? (qa === 0 && (qa = Uw()), qa) : (A = eA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : bw(A.type)), A) : 1;
}
function Me(A, e, t, r) {
  if (50 < Mi) throw Mi = 0, zc = null, Error(H(185));
  Ho(A, t, r), (!(Z & 2) || A !== DA) && (A === DA && (!(Z & 2) && (pl |= t), LA === 4 && Kt(A, MA)), se(A, r), t === 1 && Z === 0 && !(e.mode & 1) && (Nn = FA() + 500, fl && fr()));
}
function se(A, e) {
  var t = A.callbackNode;
  _Q(A, e);
  var r = hs(A, A === DA ? MA : 0);
  if (r === 0) t !== null && $B(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && $B(t), e === 1) A.tag === 0 ? Py(Kg.bind(null, A)) : Jw(Kg.bind(null, A)), Ky(function() {
      !(Z & 6) && fr();
    }), t = null;
    else {
      switch (Ew(r)) {
        case 1:
          t = ud;
          break;
        case 4:
          t = yw;
          break;
        case 16:
          t = ps;
          break;
        case 536870912:
          t = Fw;
          break;
        default:
          t = ps;
      }
      t = Ym(t, _m.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function _m(A, e) {
  if (Za = -1, qa = 0, Z & 6) throw Error(H(327));
  var t = A.callbackNode;
  if (xn() && A.callbackNode !== t) return null;
  var r = hs(A, A === DA ? MA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = Os(A, r);
  else {
    e = r;
    var n = Z;
    Z |= 2;
    var i = Vm();
    (DA !== A || MA !== e) && (ot = null, Nn = FA() + 500, xr(A, e));
    do
      try {
        sF();
        break;
      } catch (a) {
        Gm(A, a);
      }
    while (!0);
    yd(), bs.current = i, Z = n, IA !== null ? e = 0 : (DA = null, MA = 0, e = LA);
  }
  if (e !== 0) {
    if (e === 2 && (n = Cc(A), n !== 0 && (r = n, e = Yc(A, n))), e === 1) throw t = Bo, xr(A, 0), Kt(A, r), se(A, FA()), t;
    if (e === 6) Kt(A, r);
    else {
      if (n = A.current.alternate, !(r & 30) && !oF(n) && (e = Os(A, r), e === 2 && (i = Cc(A), i !== 0 && (r = i, e = Yc(A, i))), e === 1)) throw t = Bo, xr(A, 0), Kt(A, r), se(A, FA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          hr(A, te, ot);
          break;
        case 3:
          if (Kt(A, r), (r & 130023424) === r && (e = Rd + 500 - FA(), 10 < e)) {
            if (hs(A, 0) !== 0) break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              JA(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = xc(hr.bind(null, A, te, ot), e);
            break;
          }
          hr(A, te, ot);
          break;
        case 4:
          if (Kt(A, r), (r & 4194240) === r) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - Ne(r);
            i = 1 << o, o = e[o], o > n && (n = o), r &= ~i;
          }
          if (r = n, r = FA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iF(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = xc(hr.bind(null, A, te, ot), r);
            break;
          }
          hr(A, te, ot);
          break;
        case 5:
          hr(A, te, ot);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return se(A, FA()), A.callbackNode === t ? _m.bind(null, A) : null;
}
function Yc(A, e) {
  var t = Ni;
  return A.current.memoizedState.isDehydrated && (xr(A, e).flags |= 256), A = Os(A, e), A !== 2 && (e = te, te = t, e !== null && jc(e)), A;
}
function jc(A) {
  te === null ? te = A : te.push.apply(te, A);
}
function oF(A) {
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
function Kt(A, e) {
  for (e &= ~Kd, e &= ~pl, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - Ne(e), r = 1 << t;
    A[t] = -1, e &= ~r;
  }
}
function Kg(A) {
  if (Z & 6) throw Error(H(327));
  xn();
  var e = hs(A, 0);
  if (!(e & 1)) return se(A, FA()), null;
  var t = Os(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = Cc(A);
    r !== 0 && (e = r, t = Yc(A, r));
  }
  if (t === 1) throw t = Bo, xr(A, 0), Kt(A, e), se(A, FA()), t;
  if (t === 6) throw Error(H(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, hr(A, te, ot), se(A, FA()), null;
}
function Nd(A, e) {
  var t = Z;
  Z |= 1;
  try {
    return A(e);
  } finally {
    Z = t, Z === 0 && (Nn = FA() + 500, fl && fr());
  }
}
function Pr(A) {
  Mt !== null && Mt.tag === 0 && !(Z & 6) && xn();
  var e = Z;
  Z |= 1;
  var t = Ee.transition, r = eA;
  try {
    if (Ee.transition = null, eA = 1, A) return A();
  } finally {
    eA = r, Ee.transition = t, Z = e, !(Z & 6) && fr();
  }
}
function Md() {
  ce = wn.current, lA(wn);
}
function xr(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, Dy(t)), IA !== null) for (t = IA.return; t !== null; ) {
    var r = t;
    switch (vd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qs();
        break;
      case 3:
        Kn(), lA(oe), lA(XA), xd();
        break;
      case 5:
        Hd(r);
        break;
      case 4:
        Kn();
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
  if (DA = A, IA = A = Zt(A.current, null), MA = ce = e, LA = 0, Bo = null, Kd = pl = Mr = 0, te = Ni = null, Qr !== null) {
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
function Gm(A, e) {
  do {
    var t = IA;
    try {
      if (yd(), Ya.current = Ls, Ss) {
        for (var r = wA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        Ss = !1;
      }
      if (Nr = 0, kA = xA = wA = null, Ki = !1, uo = 0, Dd.current = null, t === null || t.return === null) {
        LA = 1, Bo = e, IA = null;
        break;
      }
      A: {
        var i = A, o = t.return, a = t, s = e;
        if (e = MA, a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var l = s, u = a, c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var g = Fg(o);
          if (g !== null) {
            g.flags &= -257, Ug(g, o, a, i, e), g.mode & 1 && yg(i, l, e), e = g, s = l;
            var p = e.updateQueue;
            if (p === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), e.updateQueue = w;
            } else p.add(s);
            break A;
          } else {
            if (!(e & 1)) {
              yg(i, l, e), Pd();
              break A;
            }
            s = Error(H(426));
          }
        } else if (fA && a.mode & 1) {
          var y = Fg(o);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256), Ug(y, o, a, i, e), Cd(Rn(s, a));
            break A;
          }
        }
        i = s = Rn(s, a), LA !== 4 && (LA = 2), Ni === null ? Ni = [i] : Ni.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, e &= -e, i.lanes |= e;
              var B = Em(i, s, e);
              hg(i, B);
              break A;
            case 1:
              a = s;
              var d = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (jt === null || !jt.has(h)))) {
                i.flags |= 65536, e &= -e, i.lanes |= e;
                var m = Im(i, a, e);
                hg(i, m);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Wm(t);
    } catch (C) {
      e = C, IA === t && t !== null && (IA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Vm() {
  var A = bs.current;
  return bs.current = Ls, A === null ? Ls : A;
}
function Pd() {
  (LA === 0 || LA === 3 || LA === 2) && (LA = 4), DA === null || !(Mr & 268435455) && !(pl & 268435455) || Kt(DA, MA);
}
function Os(A, e) {
  var t = Z;
  Z |= 2;
  var r = Vm();
  (DA !== A || MA !== e) && (ot = null, xr(A, e));
  do
    try {
      aF();
      break;
    } catch (n) {
      Gm(A, n);
    }
  while (!0);
  if (yd(), Z = t, bs.current = r, IA !== null) throw Error(H(261));
  return DA = null, MA = 0, LA;
}
function aF() {
  for (; IA !== null; ) $m(IA);
}
function sF() {
  for (; IA !== null && !TQ(); ) $m(IA);
}
function $m(A) {
  var e = zm(A.alternate, A, ce);
  A.memoizedProps = A.pendingProps, e === null ? Wm(A) : IA = e, Dd.current = null;
}
function Wm(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = eF(t, e), t !== null) {
        t.flags &= 32767, IA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        LA = 6, IA = null;
        return;
      }
    } else if (t = AF(t, e, ce), t !== null) {
      IA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      IA = e;
      return;
    }
    IA = e = A;
  } while (e !== null);
  LA === 0 && (LA = 5);
}
function hr(A, e, t) {
  var r = eA, n = Ee.transition;
  try {
    Ee.transition = null, eA = 1, lF(A, e, t, r);
  } finally {
    Ee.transition = n, eA = r;
  }
  return null;
}
function lF(A, e, t, r) {
  do
    xn();
  while (Mt !== null);
  if (Z & 6) throw Error(H(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(H(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (GQ(A, i), A === DA && (IA = DA = null, MA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ia || (ia = !0, Ym(ps, function() {
    return xn(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var o = eA;
    eA = 1;
    var a = Z;
    Z |= 4, Dd.current = null, rF(A, t), Mm(t, A), xy(Ic), ws = !!Ec, Ic = Ec = null, A.current = t, nF(t), kQ(), Z = a, eA = o, Ee.transition = i;
  } else A.current = t;
  if (ia && (ia = !1, Mt = A, ks = n), i = A.pendingLanes, i === 0 && (jt = null), KQ(t.stateNode), se(A, FA()), e !== null) for (r = A.onRecoverableError, t = 0; t < e.length; t++) n = e[t], r(n.value, { componentStack: n.stack, digest: n.digest });
  if (Ts) throw Ts = !1, A = Xc, Xc = null, A;
  return ks & 1 && A.tag !== 0 && xn(), i = A.pendingLanes, i & 1 ? A === zc ? Mi++ : (Mi = 0, zc = A) : Mi = 0, fr(), null;
}
function xn() {
  if (Mt !== null) {
    var A = Ew(ks), e = Ee.transition, t = eA;
    try {
      if (Ee.transition = null, eA = 16 > A ? 16 : A, Mt === null) var r = !1;
      else {
        if (A = Mt, Mt = null, ks = 0, Z & 6) throw Error(H(331));
        var n = Z;
        for (Z |= 4, O = A.current; O !== null; ) {
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
                      Ri(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) c.return = u, O = c;
                  else for (; O !== null; ) {
                    u = O;
                    var f = u.sibling, g = u.return;
                    if (Km(u), u === l) {
                      O = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = g, O = f;
                      break;
                    }
                    O = g;
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
                Ri(9, i, i.return);
            }
            var B = i.sibling;
            if (B !== null) {
              B.return = i.return, O = B;
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
                  gl(9, a);
              }
            } catch (C) {
              vA(a, a.return, C);
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
        if (Z = n, fr(), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
          Ze.onPostCommitFiberRoot(al, A);
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
function Rg(A, e, t) {
  e = Rn(t, e), e = Em(A, e, 1), A = Yt(A, e, 1), e = JA(), A !== null && (Ho(A, 1, e), se(A, e));
}
function vA(A, e, t) {
  if (A.tag === 3) Rg(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Rg(e, A, t);
      break;
    } else if (e.tag === 1) {
      var r = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
        A = Rn(t, A), A = Im(e, A, 1), e = Yt(e, A, 1), A = JA(), e !== null && (Ho(e, 1, A), se(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function uF(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = JA(), A.pingedLanes |= A.suspendedLanes & t, DA === A && (MA & t) === t && (LA === 4 || LA === 3 && (MA & 130023424) === MA && 500 > FA() - Rd ? xr(A, 0) : Kd |= t), se(A, e);
}
function Xm(A, e) {
  e === 0 && (A.mode & 1 ? (e = Yo, Yo <<= 1, !(Yo & 130023424) && (Yo = 4194304)) : e = 1);
  var t = JA();
  A = ht(A, e), A !== null && (Ho(A, e, t), se(A, t));
}
function cF(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), Xm(A, t);
}
function fF(A, e) {
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
  r !== null && r.delete(e), Xm(A, t);
}
var zm;
zm = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || oe.current) re = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return re = !1, qy(A, e, t);
    re = !!(A.flags & 131072);
  }
  else re = !1, fA && e.flags & 1048576 && Zw(e, Us, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Ja(A, e), A = e.pendingProps;
      var n = kn(e, XA.current);
      Hn(e, t), n = Ld(null, e, r, A, n, t);
      var i = bd();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, ae(r) ? (i = !0, ys(e)) : i = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, Ed(e), n.updater = Bl, e.stateNode = n, n._reactInternals = e, Dc(e, r, A, t), e = Nc(null, e, r, !0, i, t)) : (e.tag = 0, fA && i && md(e), jA(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (Ja(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = BF(r), A = ke(r, A), n) {
          case 0:
            e = Rc(null, e, r, A, t);
            break A;
          case 1:
            e = Hg(null, e, r, A, t);
            break A;
          case 11:
            e = Eg(null, e, r, A, t);
            break A;
          case 14:
            e = Ig(null, e, r, ke(r.type, A), t);
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
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Rc(A, e, r, n, t);
    case 1:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Hg(A, e, r, n, t);
    case 3:
      A: {
        if (Lm(e), A === null) throw Error(H(387));
        r = e.pendingProps, i = e.memoizedState, n = i.element, nm(A, e), Hs(e, r, null, t);
        var o = e.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
          n = Rn(Error(H(423)), e), e = xg(A, e, r, t, n);
          break A;
        } else if (r !== n) {
          n = Rn(Error(H(424)), e), e = xg(A, e, r, t, n);
          break A;
        } else for (fe = zt(e.stateNode.containerInfo.firstChild), de = e, fA = !0, De = null, t = tm(e, null, r, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (On(), r === n) {
            e = wt(A, e, t);
            break A;
          }
          jA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return im(e), A === null && Tc(e), r = e.type, n = e.pendingProps, i = A !== null ? A.memoizedProps : null, o = n.children, Hc(r, n) ? o = null : i !== null && Hc(r, i) && (e.flags |= 32), Sm(A, e), jA(A, e, o, t), e.child;
    case 6:
      return A === null && Tc(e), null;
    case 13:
      return bm(A, e, t);
    case 4:
      return Id(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = Dn(e, null, r, t) : jA(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Eg(A, e, r, n, t);
    case 7:
      return jA(A, e, e.pendingProps, t), e.child;
    case 8:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, i = e.memoizedProps, o = n.value, iA(Es, r._currentValue), r._currentValue = o, i !== null) if (_e(i.value, o)) {
          if (i.children === n.children && !oe.current) {
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
                i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), kc(
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
            o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), kc(o, t, e), o = i.sibling;
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
        jA(A, e, n.children, t), e = e.child;
      }
      return e;
    case 9:
      return n = e.type, r = e.pendingProps.children, Hn(e, t), n = Ie(n), r = r(n), e.flags |= 1, jA(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = ke(r, e.pendingProps), n = ke(r.type, n), Ig(A, e, r, n, t);
    case 15:
      return Hm(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Ja(A, e), e.tag = 1, ae(r) ? (A = !0, ys(e)) : A = !1, Hn(e, t), Um(e, r, n), Dc(e, r, n, t), Nc(null, e, r, !0, A, t);
    case 19:
      return Tm(A, e, t);
    case 22:
      return xm(A, e, t);
  }
  throw Error(H(156, e.tag));
};
function Ym(A, e) {
  return Qw(A, e);
}
function dF(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ye(A, e, t, r) {
  return new dF(A, e, t, r);
}
function _d(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function BF(A) {
  if (typeof A == "function") return _d(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === ad) return 11;
    if (A === sd) return 14;
  }
  return 2;
}
function Zt(A, e) {
  var t = A.alternate;
  return t === null ? (t = ye(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function As(A, e, t, r, n, i) {
  var o = 2;
  if (r = A, typeof A == "function") _d(A) && (o = 1);
  else if (typeof A == "string") o = 5;
  else A: switch (A) {
    case sn:
      return Sr(t.children, n, i, e);
    case od:
      o = 8, n |= 8;
      break;
    case oc:
      return A = ye(12, t, e, n | 2), A.elementType = oc, A.lanes = i, A;
    case ac:
      return A = ye(13, t, e, n), A.elementType = ac, A.lanes = i, A;
    case sc:
      return A = ye(19, t, e, n), A.elementType = sc, A.lanes = i, A;
    case iw:
      return hl(t, n, i, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case rw:
          o = 10;
          break A;
        case nw:
          o = 9;
          break A;
        case ad:
          o = 11;
          break A;
        case sd:
          o = 14;
          break A;
        case Tt:
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
function hl(A, e, t, r) {
  return A = ye(22, A, r, e), A.elementType = iw, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function yu(A, e, t) {
  return A = ye(6, A, null, e), A.lanes = t, A;
}
function Fu(A, e, t) {
  return e = ye(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function gF(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nu(0), this.expirationTimes = nu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nu(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function Gd(A, e, t, r, n, i, o, a, s) {
  return A = new gF(A, e, t, a, s), e === 1 ? (e = 1, i === !0 && (e |= 8)) : e = 0, i = ye(3, null, null, e), A.current = i, i.stateNode = A, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(i), A;
}
function pF(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: an, key: r == null ? null : "" + r, children: A, containerInfo: e, implementation: t };
}
function jm(A) {
  if (!A) return tr;
  A = A._reactInternals;
  A: {
    if (Xr(A) !== A || A.tag !== 1) throw Error(H(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (ae(e.type)) {
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
    if (ae(t)) return jw(A, t, e);
  }
  return e;
}
function Jm(A, e, t, r, n, i, o, a, s) {
  return A = Gd(t, r, !0, A, n, i, o, a, s), A.context = jm(null), t = A.current, r = JA(), n = Jt(t), i = ft(r, n), i.callback = e ?? null, Yt(t, i, n), A.current.lanes = n, Ho(A, n, r), se(A, r), A;
}
function wl(A, e, t, r) {
  var n = e.current, i = JA(), o = Jt(n);
  return t = jm(t), e.context === null ? e.context = t : e.pendingContext = t, e = ft(i, o), e.payload = { element: A }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = Yt(n, e, o), A !== null && (Me(A, n, o, i), za(A, n, o)), o;
}
function Ds(A) {
  if (A = A.current, !A.child) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function Ng(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Vd(A, e) {
  Ng(A, e), (A = A.alternate) && Ng(A, e);
}
function hF() {
  return null;
}
var Zm = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function $d(A) {
  this._internalRoot = A;
}
ml.prototype.render = $d.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null) throw Error(H(409));
  wl(A, e, null, null);
};
ml.prototype.unmount = $d.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    Pr(function() {
      wl(null, A, null, null);
    }), e[pt] = null;
  }
};
function ml(A) {
  this._internalRoot = A;
}
ml.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = xw();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Dt.length && e !== 0 && e < Dt[t].priority; t++) ;
    Dt.splice(t, 0, A), t === 0 && Lw(A);
  }
};
function Wd(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function vl(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function Mg() {
}
function wF(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var l = Ds(o);
        i.call(l);
      };
    }
    var o = Jm(e, r, A, 0, null, !1, !1, "", Mg);
    return A._reactRootContainer = o, A[pt] = o.current, io(A.nodeType === 8 ? A.parentNode : A), Pr(), o;
  }
  for (; n = A.lastChild; ) A.removeChild(n);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var l = Ds(s);
      a.call(l);
    };
  }
  var s = Gd(A, 0, !1, null, null, !1, !1, "", Mg);
  return A._reactRootContainer = s, A[pt] = s.current, io(A.nodeType === 8 ? A.parentNode : A), Pr(function() {
    wl(e, s, t, r);
  }), s;
}
function Cl(A, e, t, r, n) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var s = Ds(o);
        a.call(s);
      };
    }
    wl(e, o, A, n);
  } else o = wF(t, e, A, n, r);
  return Ds(o);
}
Iw = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = vi(e.pendingLanes);
        t !== 0 && (cd(e, t | 1), se(e, FA()), !(Z & 6) && (Nn = FA() + 500, fr()));
      }
      break;
    case 13:
      Pr(function() {
        var r = ht(A, 1);
        if (r !== null) {
          var n = JA();
          Me(r, A, 1, n);
        }
      }), Vd(A, 1);
  }
};
fd = function(A) {
  if (A.tag === 13) {
    var e = ht(A, 134217728);
    if (e !== null) {
      var t = JA();
      Me(e, A, 134217728, t);
    }
    Vd(A, 134217728);
  }
};
Hw = function(A) {
  if (A.tag === 13) {
    var e = Jt(A), t = ht(A, e);
    if (t !== null) {
      var r = JA();
      Me(t, A, e, r);
    }
    Vd(A, e);
  }
};
xw = function() {
  return eA;
};
Sw = function(A, e) {
  var t = eA;
  try {
    return eA = A, e();
  } finally {
    eA = t;
  }
};
wc = function(A, e, t) {
  switch (e) {
    case "input":
      if (cc(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = cl(r);
            if (!n) throw Error(H(90));
            aw(r), cc(r, n);
          }
        }
      }
      break;
    case "textarea":
      lw(A, t);
      break;
    case "select":
      e = t.value, e != null && Fn(A, !!t.multiple, e, !1);
  }
};
pw = Nd;
hw = Pr;
var mF = { usingClientEntryPoint: !1, Events: [So, fn, cl, Bw, gw, Nd] }, fi = { findFiberByHostInstance: Cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vF = { bundleType: fi.bundleType, version: fi.version, rendererPackageName: fi.rendererPackageName, rendererConfig: fi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = vw(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: fi.findFiberByHostInstance || hF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oa.isDisabled && oa.supportsFiber) try {
    al = oa.inject(vF), Ze = oa;
  } catch {
  }
}
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mF;
pe.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wd(e)) throw Error(H(200));
  return pF(A, e, null, t);
};
pe.createRoot = function(A, e) {
  if (!Wd(A)) throw Error(H(299));
  var t = !1, r = "", n = Zm;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = Gd(A, 1, !1, null, null, t, !1, r, n), A[pt] = e.current, io(A.nodeType === 8 ? A.parentNode : A), new $d(e);
};
pe.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(H(188)) : (A = Object.keys(A).join(","), Error(H(268, A)));
  return A = vw(e), A = A === null ? null : A.stateNode, A;
};
pe.flushSync = function(A) {
  return Pr(A);
};
pe.hydrate = function(A, e, t) {
  if (!vl(e)) throw Error(H(200));
  return Cl(null, A, e, !0, t);
};
pe.hydrateRoot = function(A, e, t) {
  if (!Wd(A)) throw Error(H(405));
  var r = t != null && t.hydratedSources || null, n = !1, i = "", o = Zm;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = Jm(e, null, A, 1, t ?? null, n, !1, i, o), A[pt] = e.current, io(A), r) for (A = 0; A < r.length; A++) t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(
    t,
    n
  );
  return new ml(e);
};
pe.render = function(A, e, t) {
  if (!vl(e)) throw Error(H(200));
  return Cl(null, A, e, !1, t);
};
pe.unmountComponentAtNode = function(A) {
  if (!vl(A)) throw Error(H(40));
  return A._reactRootContainer ? (Pr(function() {
    Cl(null, null, A, !1, function() {
      A._reactRootContainer = null, A[pt] = null;
    });
  }), !0) : !1;
};
pe.unstable_batchedUpdates = Nd;
pe.unstable_renderSubtreeIntoContainer = function(A, e, t, r) {
  if (!vl(t)) throw Error(H(200));
  if (A == null || A._reactInternals === void 0) throw Error(H(38));
  return Cl(A, e, t, !1, r);
};
pe.version = "18.3.1-next-f1338f8080-20240426";
function qm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qm);
    } catch (A) {
      console.error(A);
    }
}
qm(), qh.exports = pe;
var Ql = qh.exports;
const CF = /* @__PURE__ */ il(Ql), QF = "_dialog_uavra_1", yF = "_overlay_uavra_6", FF = "_container_uavra_13", UF = "_dialogPanel_uavra_24", EF = "_searchIcon_uavra_34", IF = "_inputField_uavra_45", HF = "_inputWrapper_uavra_58", xF = "_loading_uavra_64", SF = "_gradientShift_uavra_1", Ht = {
  dialog: QF,
  overlay: yF,
  container: FF,
  dialogPanel: UF,
  searchIcon: EF,
  inputField: IF,
  inputWrapper: HF,
  loading: xF,
  gradientShift: SF
};
var LF = Object.defineProperty, bF = (A, e, t) => e in A ? LF(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, Uu = (A, e, t) => (bF(A, typeof e != "symbol" ? e + "" : e, t), t);
let TF = class {
  constructor() {
    Uu(this, "current", this.detect()), Uu(this, "handoffState", "pending"), Uu(this, "currentId", 0);
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
}, Lr = new TF();
function Xd(A) {
  return Lr.isServer ? null : A instanceof Node ? A.ownerDocument : A != null && A.hasOwnProperty("current") && A.current instanceof Node ? A.current.ownerDocument : document;
}
function yl(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function dr() {
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
    return yl(() => {
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
    let r = dr();
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
function zd() {
  let [A] = Q.useState(dr);
  return Q.useEffect(() => () => A.dispose(), [A]), A;
}
let ZA = (A, e) => {
  Lr.isServer ? Q.useEffect(A, e) : Q.useLayoutEffect(A, e);
};
function zr(A) {
  let e = Q.useRef(A);
  return ZA(() => {
    e.current = A;
  }, [A]), e;
}
let hA = function(A) {
  let e = zr(A);
  return _.useCallback((...t) => e.current(...t), [e]);
}, kF = Q.createContext(void 0);
function OF() {
  return Q.useContext(kF);
}
function Jc(...A) {
  return Array.from(new Set(A.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function rr(A, e, ...t) {
  if (A in e) {
    let n = e[A];
    return typeof n == "function" ? n(...t) : n;
  }
  let r = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, rr), r;
}
var Ks = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(Ks || {}), Pt = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(Pt || {});
function Se({ ourProps: A, theirProps: e, slot: t, defaultTag: r, features: n, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? DF;
  let s = A0(e, A);
  if (i) return aa(s, t, r, o, a);
  let l = n ?? 0;
  if (l & 2) {
    let { static: u = !1, ...c } = s;
    if (u) return aa(c, t, r, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...c } = s;
    return rr(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return aa({ ...c, hidden: !0, style: { display: "none" } }, t, r, o, a);
    } });
  }
  return aa(s, t, r, o, a);
}
function aa(A, e = {}, t, r, n) {
  let { as: i = t, children: o, refName: a = "ref", ...s } = Eu(A, ["unmount", "static"]), l = A.ref !== void 0 ? { [a]: A.ref } : {}, u = typeof o == "function" ? o(e) : o;
  "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(e)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
  let c = {};
  if (e) {
    let f = !1, g = [];
    for (let [p, w] of Object.entries(e)) typeof w == "boolean" && (f = !0), w === !0 && g.push(p.replace(/([A-Z])/g, (y) => `-${y.toLowerCase()}`));
    if (f) {
      c["data-headlessui-state"] = g.join(" ");
      for (let p of g) c[`data-${p}`] = "";
    }
  }
  if (i === Q.Fragment && (Object.keys(wr(s)).length > 0 || Object.keys(wr(c)).length > 0)) if (!Q.isValidElement(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(wr(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(wr(s)).concat(Object.keys(wr(c))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = u.props, g = f == null ? void 0 : f.className, p = typeof g == "function" ? (...B) => Jc(g(...B), s.className) : Jc(g, s.className), w = p ? { className: p } : {}, y = A0(u.props, wr(Eu(s, ["ref"])));
    for (let B in c) B in y && delete c[B];
    return Q.cloneElement(u, Object.assign({}, y, c, l, { ref: n(u.ref, l.ref) }, w));
  }
  return Q.createElement(i, Object.assign({}, Eu(s, ["ref"]), i !== Q.Fragment && l, i !== Q.Fragment && c), u);
}
function DF(...A) {
  return A.every((e) => e == null) ? void 0 : (e) => {
    for (let t of A) t != null && (typeof t == "function" ? t(e) : t.current = e);
  };
}
function A0(...A) {
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
function le(A) {
  var e;
  return Object.assign(Q.forwardRef(A), { displayName: (e = A.displayName) != null ? e : A.name });
}
function wr(A) {
  let e = Object.assign({}, A);
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function Eu(A, e = []) {
  let t = Object.assign({}, A);
  for (let r of e) r in t && delete t[r];
  return t;
}
let KF = "div";
var Rs = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(Rs || {});
function RF(A, e) {
  var t;
  let { features: r = 1, ...n } = A, i = { ref: e, "aria-hidden": (r & 2) === 2 ? !0 : (t = n["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se({ ourProps: i, theirProps: n, slot: {}, defaultTag: KF, name: "Hidden" });
}
let Zc = le(RF), NF = Q.createContext(null);
function MF({ children: A }) {
  let e = Q.useContext(NF);
  if (!e) return _.createElement(_.Fragment, null, A);
  let { target: t } = e;
  return t ? Ql.createPortal(_.createElement(_.Fragment, null, A), t) : null;
}
let e0 = Symbol();
function PF(A, e = !0) {
  return Object.assign(A, { [e0]: e });
}
function et(...A) {
  let e = Q.useRef(A);
  Q.useEffect(() => {
    e.current = A;
  }, [A]);
  let t = hA((r) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(r) : n.current = r);
  });
  return A.every((r) => r == null || (r == null ? void 0 : r[e0])) ? void 0 : t;
}
let Yd = Q.createContext(null);
Yd.displayName = "DescriptionContext";
function t0() {
  let A = Q.useContext(Yd);
  if (A === null) {
    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e, t0), e;
  }
  return A;
}
function _F() {
  let [A, e] = Q.useState([]);
  return [A.length > 0 ? A.join(" ") : void 0, Q.useMemo(() => function(t) {
    let r = hA((i) => (e((o) => [...o, i]), () => e((o) => {
      let a = o.slice(), s = a.indexOf(i);
      return s !== -1 && a.splice(s, 1), a;
    }))), n = Q.useMemo(() => ({ register: r, slot: t.slot, name: t.name, props: t.props, value: t.value }), [r, t.slot, t.name, t.props, t.value]);
    return _.createElement(Yd.Provider, { value: n }, t.children);
  }, [e])];
}
let GF = "p";
function VF(A, e) {
  let t = Q.useId(), r = OF(), { id: n = `headlessui-description-${t}`, ...i } = A, o = t0(), a = et(e);
  ZA(() => o.register(n), [n, o.register]);
  let s = r || !1, l = Q.useMemo(() => ({ ...o.slot, disabled: s }), [o.slot, s]), u = { ref: a, ...o.props, id: n };
  return Se({ ourProps: u, theirProps: i, slot: l, defaultTag: GF, name: o.name || "Description" });
}
let $F = le(VF), WF = Object.assign($F, {});
var r0 = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(r0 || {});
let XF = Q.createContext(() => {
});
function zF({ value: A, children: e }) {
  return _.createElement(XF.Provider, { value: A }, e);
}
let YF = class extends Map {
  constructor(e) {
    super(), this.factory = e;
  }
  get(e) {
    let t = super.get(e);
    return t === void 0 && (t = this.factory(e), this.set(e, t)), t;
  }
};
function n0(A, e) {
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
function i0(A) {
  return Q.useSyncExternalStore(A.subscribe, A.getSnapshot, A.getSnapshot);
}
let jF = new YF(() => n0(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function qn(A, e) {
  let t = jF.get(e), r = Q.useId(), n = i0(t);
  if (ZA(() => {
    if (A) return t.dispatch("ADD", r), () => t.dispatch("REMOVE", r);
  }, [t, A]), !A) return !1;
  let i = n.indexOf(r), o = n.length;
  return i === -1 && (i = o, o += 1), i === o - 1;
}
let qc = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map();
function Pg(A) {
  var e;
  let t = (e = Pi.get(A)) != null ? e : 0;
  return Pi.set(A, t + 1), t !== 0 ? () => _g(A) : (qc.set(A, { "aria-hidden": A.getAttribute("aria-hidden"), inert: A.inert }), A.setAttribute("aria-hidden", "true"), A.inert = !0, () => _g(A));
}
function _g(A) {
  var e;
  let t = (e = Pi.get(A)) != null ? e : 1;
  if (t === 1 ? Pi.delete(A) : Pi.set(A, t - 1), t !== 1) return;
  let r = qc.get(A);
  r && (r["aria-hidden"] === null ? A.removeAttribute("aria-hidden") : A.setAttribute("aria-hidden", r["aria-hidden"]), A.inert = r.inert, qc.delete(A));
}
function JF(A, { allowed: e, disallowed: t } = {}) {
  let r = qn(A, "inert-others");
  ZA(() => {
    var n, i;
    if (!r) return;
    let o = dr();
    for (let s of (n = t == null ? void 0 : t()) != null ? n : []) s && o.add(Pg(s));
    let a = (i = e == null ? void 0 : e()) != null ? i : [];
    for (let s of a) {
      if (!s) continue;
      let l = Xd(s);
      if (!l) continue;
      let u = s.parentElement;
      for (; u && u !== l.body; ) {
        for (let c of u.children) a.some((f) => c.contains(f)) || o.add(Pg(c));
        u = u.parentElement;
      }
    }
    return o.dispose;
  }, [r, e, t]);
}
function o0(A, e, t) {
  let r = zr((n) => {
    let i = n.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && t();
  });
  Q.useEffect(() => {
    if (!A) return;
    let n = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!n) return;
    let i = dr();
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
let Af = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(","), ZF = ["[data-autofocus]"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var lt = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A[A.AutoFocus = 64] = "AutoFocus", A))(lt || {}), ef = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(ef || {}), qF = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(qF || {});
function AU(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(Af)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function eU(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(ZF)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var a0 = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(a0 || {});
function tU(A, e = 0) {
  var t;
  return A === ((t = Xd(A)) == null ? void 0 : t.body) ? !1 : rr(e, { 0() {
    return A.matches(Af);
  }, 1() {
    let r = A;
    for (; r !== null; ) {
      if (r.matches(Af)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var rU = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(rU || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dt(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let nU = ["textarea", "input"].join(",");
function iU(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, nU)) != null ? t : !1;
}
function oU(A, e = (t) => t) {
  return A.slice().sort((t, r) => {
    let n = e(t), i = e(r);
    if (n === null || i === null) return 0;
    let o = n.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _i(A, e, { sorted: t = !0, relativeTo: r = null, skipElements: n = [] } = {}) {
  let i = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, o = Array.isArray(A) ? t ? oU(A) : A : e & 64 ? eU(A) : AU(A);
  n.length > 0 && o.length > 1 && (o = o.filter((g) => !n.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === g : p === g))), r = r ?? i.activeElement;
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
    let g = s + u;
    if (e & 16) g = (g + c) % c;
    else {
      if (g < 0) return 3;
      if (g >= c) return 1;
    }
    f = o[g], f == null || f.focus(l), u += a;
  } while (f !== i.activeElement);
  return e & 6 && iU(f) && f.select(), 2;
}
function s0() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function aU() {
  return /Android/gi.test(window.navigator.userAgent);
}
function sU() {
  return s0() || aU();
}
function di(A, e, t, r) {
  let n = zr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function l0(A, e, t, r) {
  let n = zr(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      n.current(o);
    }
    return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r);
  }, [A, e, r]);
}
const Gg = 30;
function lU(A, e, t) {
  let r = qn(A, "outside-click"), n = zr(t), i = Q.useCallback(function(s, l) {
    if (s.defaultPrevented) return;
    let u = l(s);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = function f(g) {
      return typeof g == "function" ? f(g()) : Array.isArray(g) || g instanceof Set ? g : [g];
    }(e);
    for (let f of c) {
      if (f === null) continue;
      let g = f instanceof HTMLElement ? f : f.current;
      if (g != null && g.contains(u) || s.composed && s.composedPath().includes(g)) return;
    }
    return !tU(u, a0.Loose) && u.tabIndex !== -1 && s.preventDefault(), n.current(s, u);
  }, [n]), o = Q.useRef(null);
  di(r, "pointerdown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), di(r, "mousedown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), di(r, "click", (s) => {
    sU() || o.current && (i(s, () => o.current), o.current = null);
  }, !0);
  let a = Q.useRef({ x: 0, y: 0 });
  di(r, "touchstart", (s) => {
    a.current.x = s.touches[0].clientX, a.current.y = s.touches[0].clientY;
  }, !0), di(r, "touchend", (s) => {
    let l = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(l.x - a.current.x) >= Gg || Math.abs(l.y - a.current.y) >= Gg)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), l0(r, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function bo(...A) {
  return Q.useMemo(() => Xd(...A), [...A]);
}
function u0(A, e, t, r) {
  let n = zr(t);
  Q.useEffect(() => {
    A = A ?? window;
    function i(o) {
      n.current(o);
    }
    return A.addEventListener(e, i, r), () => A.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function uU() {
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
function cU() {
  return s0() ? { before({ doc: A, d: e, meta: t }) {
    function r(n) {
      return t.containers.flatMap((i) => i()).some((i) => i.contains(n));
    }
    e.microTask(() => {
      var n;
      if (window.getComputedStyle(A.documentElement).scrollBehavior !== "auto") {
        let a = dr();
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
function fU() {
  return { before({ doc: A, d: e }) {
    e.style(A.documentElement, "overflow", "hidden");
  } };
}
function dU(A) {
  let e = {};
  for (let t of A) Object.assign(e, t(e));
  return e;
}
let Fr = n0(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let r = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: dr(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(e), this.set(A, r), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let r = { doc: A, d: e, meta: dU(t) }, n = [cU(), uU(), fU()];
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
function BU(A, e, t = () => ({ containers: [] })) {
  let r = i0(Fr), n = e ? r.get(e) : void 0, i = n ? n.count > 0 : !1;
  return ZA(() => {
    if (!(!e || !A)) return Fr.dispatch("PUSH", e, t), () => Fr.dispatch("POP", e, t);
  }, [A, e]), i;
}
function gU(A, e, t = () => [document.body]) {
  let r = qn(A, "scroll-lock");
  BU(r, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], t] };
  });
}
function pU(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function hU(A = 0) {
  let [e, t] = Q.useState(A), r = Q.useCallback((s) => t(s), [e]), n = Q.useCallback((s) => t((l) => l | s), [e]), i = Q.useCallback((s) => (e & s) === s, [e]), o = Q.useCallback((s) => t((l) => l & ~s), [t]), a = Q.useCallback((s) => t((l) => l ^ s), [t]);
  return { flags: e, setFlag: r, addFlag: n, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var wU = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(wU || {});
function mU(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function vU(A, e, t, r) {
  let [n, i] = Q.useState(t), { hasFlag: o, addFlag: a, removeFlag: s } = hU(A && n ? 3 : 0), l = Q.useRef(!1), u = Q.useRef(!1), c = zd();
  return ZA(function f() {
    var g;
    if (!A) return;
    t && i(!0);
    let p = e.current;
    return p ? ((g = r == null ? void 0 : r.start) == null || g.call(r, t), CU(p, { inFlight: l, prepare() {
      u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (t ? (a(3), s(4)) : (a(4), s(2)));
    }, run() {
      u.current ? t ? (s(3), a(4)) : (s(4), a(3)) : t ? s(1) : a(1);
    }, done() {
      var w;
      u.current && typeof p.getAnimations == "function" && p.getAnimations().length > 0 || (l.current = !1, s(7), t || i(!1), (w = r == null ? void 0 : r.end) == null || w.call(r, t));
    } })) : t ? (a(3), c.nextFrame(() => f())) : void 0;
  }, [A, t, e, c]), A ? [n, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function CU(A, { prepare: e, run: t, done: r, inFlight: n }) {
  let i = dr();
  return yU(A, { prepare: e, inFlight: n }), i.nextFrame(() => {
    i.add(QU(A, r)), t();
  }), i.dispose;
}
function QU(A, e) {
  let t = pU(e), r = dr();
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
        f.target === f.currentTarget && (c(), u.addEventListener(A, "transitioncancel", (g) => {
          g.target === g.currentTarget && (t(), l());
        }));
      });
    });
    r.addEventListener(A, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), r.dispose());
    });
  } else t();
  return r.dispose;
}
function yU(A, { inFlight: e, prepare: t }) {
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
function Ai(A) {
  return c0(A) ? (A.nodeName || "").toLowerCase() : "#document";
}
function Be(A) {
  var e;
  return (A == null || (e = A.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Ft(A) {
  var e;
  return (e = (c0(A) ? A.ownerDocument : A.document) || window.document) == null ? void 0 : e.documentElement;
}
function c0(A) {
  return A instanceof Node || A instanceof Be(A).Node;
}
function ne(A) {
  return A instanceof Element || A instanceof Be(A).Element;
}
function At(A) {
  return A instanceof HTMLElement || A instanceof Be(A).HTMLElement;
}
function Vg(A) {
  return typeof ShadowRoot > "u" ? !1 : A instanceof ShadowRoot || A instanceof Be(A).ShadowRoot;
}
function To(A) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: r,
    display: n
  } = Ge(A);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + t) && !["inline", "contents"].includes(n);
}
function FU(A) {
  return ["table", "td", "th"].includes(Ai(A));
}
function Fl(A) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return A.matches(e);
    } catch {
      return !1;
    }
  });
}
function Jd(A) {
  const e = Zd(), t = Ge(A);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function UU(A) {
  let e = nr(A);
  for (; At(e) && !Mn(e); ) {
    if (Fl(e))
      return null;
    if (Jd(e))
      return e;
    e = nr(e);
  }
  return null;
}
function Zd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mn(A) {
  return ["html", "body", "#document"].includes(Ai(A));
}
function Ge(A) {
  return Be(A).getComputedStyle(A);
}
function Ul(A) {
  return ne(A) ? {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  } : {
    scrollLeft: A.pageXOffset,
    scrollTop: A.pageYOffset
  };
}
function nr(A) {
  if (Ai(A) === "html")
    return A;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    A.assignedSlot || // DOM Element detected.
    A.parentNode || // ShadowRoot detected.
    Vg(A) && A.host || // Fallback.
    Ft(A)
  );
  return Vg(e) ? e.host : e;
}
function f0(A) {
  const e = nr(A);
  return Mn(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : At(e) && To(e) ? e : f0(e);
}
function go(A, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const n = f0(A), i = n === ((r = A.ownerDocument) == null ? void 0 : r.body), o = Be(n);
  return i ? e.concat(o, o.visualViewport || [], To(n) ? n : [], o.frameElement && t ? go(o.frameElement) : []) : e.concat(n, go(n, [], t));
}
const Pn = Math.min, br = Math.max, Ns = Math.round, sa = Math.floor, ir = (A) => ({
  x: A,
  y: A
}), EU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, IU = {
  start: "end",
  end: "start"
};
function tf(A, e, t) {
  return br(A, Pn(e, t));
}
function ko(A, e) {
  return typeof A == "function" ? A(e) : A;
}
function _r(A) {
  return A.split("-")[0];
}
function Oo(A) {
  return A.split("-")[1];
}
function d0(A) {
  return A === "x" ? "y" : "x";
}
function qd(A) {
  return A === "y" ? "height" : "width";
}
function _n(A) {
  return ["top", "bottom"].includes(_r(A)) ? "y" : "x";
}
function AB(A) {
  return d0(_n(A));
}
function HU(A, e, t) {
  t === void 0 && (t = !1);
  const r = Oo(A), n = AB(A), i = qd(n);
  let o = n === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Ms(o)), [o, Ms(o)];
}
function xU(A) {
  const e = Ms(A);
  return [rf(A), e, rf(e)];
}
function rf(A) {
  return A.replace(/start|end/g, (e) => IU[e]);
}
function SU(A, e, t) {
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
function LU(A, e, t, r) {
  const n = Oo(A);
  let i = SU(_r(A), t === "start", r);
  return n && (i = i.map((o) => o + "-" + n), e && (i = i.concat(i.map(rf)))), i;
}
function Ms(A) {
  return A.replace(/left|right|bottom|top/g, (e) => EU[e]);
}
function bU(A) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...A
  };
}
function B0(A) {
  return typeof A != "number" ? bU(A) : {
    top: A,
    right: A,
    bottom: A,
    left: A
  };
}
function Ps(A) {
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
function $g(A, e, t) {
  let {
    reference: r,
    floating: n
  } = A;
  const i = _n(e), o = AB(e), a = qd(o), s = _r(e), l = i === "y", u = r.x + r.width / 2 - n.width / 2, c = r.y + r.height / 2 - n.height / 2, f = r[a] / 2 - n[a] / 2;
  let g;
  switch (s) {
    case "top":
      g = {
        x: u,
        y: r.y - n.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      g = {
        x: r.x - n.width,
        y: c
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Oo(e)) {
    case "start":
      g[o] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      g[o] += f * (t && l ? -1 : 1);
      break;
  }
  return g;
}
const TU = async (A, e, t) => {
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
  } = $g(l, r, s), f = r, g = {}, p = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: B
    } = a[w], {
      x: d,
      y: h,
      data: m,
      reset: C
    } = await B({
      x: u,
      y: c,
      initialPlacement: r,
      placement: f,
      strategy: n,
      middlewareData: g,
      rects: l,
      platform: o,
      elements: {
        reference: A,
        floating: e
      }
    });
    u = d ?? u, c = h ?? c, g = {
      ...g,
      [y]: {
        ...g[y],
        ...m
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (l = C.rects === !0 ? await o.getElementRects({
      reference: A,
      floating: e,
      strategy: n
    }) : C.rects), {
      x: u,
      y: c
    } = $g(l, f, s)), w = -1);
  }
  return {
    x: u,
    y: c,
    placement: f,
    strategy: n,
    middlewareData: g
  };
};
async function g0(A, e) {
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
    padding: g = 0
  } = ko(e, A), p = B0(g), y = a[f ? c === "floating" ? "reference" : "floating" : c], B = Ps(await i.getClippingRect({
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
  }, C = Ps(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: d,
    offsetParent: h,
    strategy: s
  }) : d);
  return {
    top: (B.top - C.top + p.top) / m.y,
    bottom: (C.bottom - B.bottom + p.bottom) / m.y,
    left: (B.left - C.left + p.left) / m.x,
    right: (C.right - B.right + p.right) / m.x
  };
}
const kU = (A) => ({
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
    } = ko(A, e) || {};
    if (l == null)
      return {};
    const c = B0(u), f = {
      x: t,
      y: r
    }, g = AB(n), p = qd(g), w = await o.getDimensions(l), y = g === "y", B = y ? "top" : "left", d = y ? "bottom" : "right", h = y ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[g] - f[g] - i.floating[p], C = f[g] - i.reference[g], v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let F = v ? v[h] : 0;
    (!F || !await (o.isElement == null ? void 0 : o.isElement(v))) && (F = a.floating[h] || i.floating[p]);
    const U = m / 2 - C / 2, E = F / 2 - w[p] / 2 - 1, S = Pn(c[B], E), P = Pn(c[d], E), N = S, D = F - w[p] - P, G = F / 2 - w[p] / 2 + U, J = tf(N, G, D), $ = !s.arrow && Oo(n) != null && G !== J && i.reference[p] / 2 - (G < N ? S : P) - w[p] / 2 < 0, K = $ ? G < N ? G - N : G - D : 0;
    return {
      [g]: f[g] + K,
      data: {
        [g]: J,
        centerOffset: G - J - K,
        ...$ && {
          alignmentOffset: K
        }
      },
      reset: $
    };
  }
}), OU = function(A) {
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
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: w = !0,
        ...y
      } = ko(A, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const B = _r(n), d = _n(a), h = _r(a) === a, m = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), C = f || (h || !w ? [Ms(a)] : xU(a)), v = p !== "none";
      !f && v && C.push(...LU(a, w, p, m));
      const F = [a, ...C], U = await g0(e, y), E = [];
      let S = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(U[B]), c) {
        const G = HU(n, o, m);
        E.push(U[G[0]], U[G[1]]);
      }
      if (S = [...S, {
        placement: n,
        overflows: E
      }], !E.every((G) => G <= 0)) {
        var P, N;
        const G = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, J = F[G];
        if (J)
          return {
            data: {
              index: G,
              overflows: S
            },
            reset: {
              placement: J
            }
          };
        let $ = (N = S.filter((K) => K.overflows[0] <= 0).sort((K, I) => K.overflows[1] - I.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var D;
              const K = (D = S.filter((I) => {
                if (v) {
                  const x = _n(I.placement);
                  return x === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((x) => x > 0).reduce((x, L) => x + L, 0)]).sort((I, x) => I[1] - x[1])[0]) == null ? void 0 : D[0];
              K && ($ = K);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (n !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function DU(A, e) {
  const {
    placement: t,
    platform: r,
    elements: n
  } = A, i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), o = _r(t), a = Oo(t), s = _n(t) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, c = ko(e, A);
  let {
    mainAxis: f,
    crossAxis: g,
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
  return a && typeof p == "number" && (g = a === "end" ? p * -1 : p), s ? {
    x: g * u,
    y: f * l
  } : {
    x: f * l,
    y: g * u
  };
}
const KU = function(A) {
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
      } = e, s = await DU(e, A);
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
}, RU = function(A) {
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
              x: B,
              y: d
            } = y;
            return {
              x: B,
              y: d
            };
          }
        },
        ...s
      } = ko(A, e), l = {
        x: t,
        y: r
      }, u = await g0(e, s), c = _n(_r(n)), f = d0(c);
      let g = l[f], p = l[c];
      if (i) {
        const y = f === "y" ? "top" : "left", B = f === "y" ? "bottom" : "right", d = g + u[y], h = g - u[B];
        g = tf(d, g, h);
      }
      if (o) {
        const y = c === "y" ? "top" : "left", B = c === "y" ? "bottom" : "right", d = p + u[y], h = p - u[B];
        p = tf(d, p, h);
      }
      const w = a.fn({
        ...e,
        [f]: g,
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
function p0(A) {
  const e = Ge(A);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const n = At(A), i = n ? A.offsetWidth : t, o = n ? A.offsetHeight : r, a = Ns(t) !== i || Ns(r) !== o;
  return a && (t = i, r = o), {
    width: t,
    height: r,
    $: a
  };
}
function eB(A) {
  return ne(A) ? A : A.contextElement;
}
function Sn(A) {
  const e = eB(A);
  if (!At(e))
    return ir(1);
  const t = e.getBoundingClientRect(), {
    width: r,
    height: n,
    $: i
  } = p0(e);
  let o = (i ? Ns(t.width) : t.width) / r, a = (i ? Ns(t.height) : t.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const NU = /* @__PURE__ */ ir(0);
function h0(A) {
  const e = Be(A);
  return !Zd() || !e.visualViewport ? NU : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function MU(A, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== Be(A) ? !1 : e;
}
function Gr(A, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const n = A.getBoundingClientRect(), i = eB(A);
  let o = ir(1);
  e && (r ? ne(r) && (o = Sn(r)) : o = Sn(A));
  const a = MU(i, t, r) ? h0(i) : ir(0);
  let s = (n.left + a.x) / o.x, l = (n.top + a.y) / o.y, u = n.width / o.x, c = n.height / o.y;
  if (i) {
    const f = Be(i), g = r && ne(r) ? Be(r) : r;
    let p = f, w = p.frameElement;
    for (; w && r && g !== p; ) {
      const y = Sn(w), B = w.getBoundingClientRect(), d = Ge(w), h = B.left + (w.clientLeft + parseFloat(d.paddingLeft)) * y.x, m = B.top + (w.clientTop + parseFloat(d.paddingTop)) * y.y;
      s *= y.x, l *= y.y, u *= y.x, c *= y.y, s += h, l += m, p = Be(w), w = p.frameElement;
    }
  }
  return Ps({
    width: u,
    height: c,
    x: s,
    y: l
  });
}
function PU(A) {
  let {
    elements: e,
    rect: t,
    offsetParent: r,
    strategy: n
  } = A;
  const i = n === "fixed", o = Ft(r), a = e ? Fl(e.floating) : !1;
  if (r === o || a && i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ir(1);
  const u = ir(0), c = At(r);
  if ((c || !c && !i) && ((Ai(r) !== "body" || To(o)) && (s = Ul(r)), At(r))) {
    const f = Gr(r);
    l = Sn(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - s.scrollLeft * l.x + u.x,
    y: t.y * l.y - s.scrollTop * l.y + u.y
  };
}
function _U(A) {
  return Array.from(A.getClientRects());
}
function w0(A) {
  return Gr(Ft(A)).left + Ul(A).scrollLeft;
}
function GU(A) {
  const e = Ft(A), t = Ul(A), r = A.ownerDocument.body, n = br(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = br(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -t.scrollLeft + w0(A);
  const a = -t.scrollTop;
  return Ge(r).direction === "rtl" && (o += br(e.clientWidth, r.clientWidth) - n), {
    width: n,
    height: i,
    x: o,
    y: a
  };
}
function VU(A, e) {
  const t = Be(A), r = Ft(A), n = t.visualViewport;
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
function $U(A, e) {
  const t = Gr(A, !0, e === "fixed"), r = t.top + A.clientTop, n = t.left + A.clientLeft, i = At(A) ? Sn(A) : ir(1), o = A.clientWidth * i.x, a = A.clientHeight * i.y, s = n * i.x, l = r * i.y;
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Wg(A, e, t) {
  let r;
  if (e === "viewport")
    r = VU(A, t);
  else if (e === "document")
    r = GU(Ft(A));
  else if (ne(e))
    r = $U(e, t);
  else {
    const n = h0(A);
    r = {
      ...e,
      x: e.x - n.x,
      y: e.y - n.y
    };
  }
  return Ps(r);
}
function m0(A, e) {
  const t = nr(A);
  return t === e || !ne(t) || Mn(t) ? !1 : Ge(t).position === "fixed" || m0(t, e);
}
function WU(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let r = go(A, [], !1).filter((a) => ne(a) && Ai(a) !== "body"), n = null;
  const i = Ge(A).position === "fixed";
  let o = i ? nr(A) : A;
  for (; ne(o) && !Mn(o); ) {
    const a = Ge(o), s = Jd(o);
    !s && a.position === "fixed" && (n = null), (i ? !s && !n : !s && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || To(o) && !s && m0(A, o)) ? r = r.filter((u) => u !== o) : n = a, o = nr(o);
  }
  return e.set(A, r), r;
}
function XU(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: n
  } = A;
  const o = [...t === "clippingAncestors" ? Fl(e) ? [] : WU(e, this._c) : [].concat(t), r], a = o[0], s = o.reduce((l, u) => {
    const c = Wg(e, u, n);
    return l.top = br(c.top, l.top), l.right = Pn(c.right, l.right), l.bottom = Pn(c.bottom, l.bottom), l.left = br(c.left, l.left), l;
  }, Wg(e, a, n));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function zU(A) {
  const {
    width: e,
    height: t
  } = p0(A);
  return {
    width: e,
    height: t
  };
}
function YU(A, e, t) {
  const r = At(e), n = Ft(e), i = t === "fixed", o = Gr(A, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = ir(0);
  if (r || !r && !i)
    if ((Ai(e) !== "body" || To(n)) && (a = Ul(e)), r) {
      const c = Gr(e, !0, i, e);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else n && (s.x = w0(n));
  const l = o.left + a.scrollLeft - s.x, u = o.top + a.scrollTop - s.y;
  return {
    x: l,
    y: u,
    width: o.width,
    height: o.height
  };
}
function Iu(A) {
  return Ge(A).position === "static";
}
function Xg(A, e) {
  return !At(A) || Ge(A).position === "fixed" ? null : e ? e(A) : A.offsetParent;
}
function v0(A, e) {
  const t = Be(A);
  if (Fl(A))
    return t;
  if (!At(A)) {
    let n = nr(A);
    for (; n && !Mn(n); ) {
      if (ne(n) && !Iu(n))
        return n;
      n = nr(n);
    }
    return t;
  }
  let r = Xg(A, e);
  for (; r && FU(r) && Iu(r); )
    r = Xg(r, e);
  return r && Mn(r) && Iu(r) && !Jd(r) ? t : r || UU(A) || t;
}
const jU = async function(A) {
  const e = this.getOffsetParent || v0, t = this.getDimensions, r = await t(A.floating);
  return {
    reference: YU(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function JU(A) {
  return Ge(A).direction === "rtl";
}
const ZU = {
  convertOffsetParentRelativeRectToViewportRelativeRect: PU,
  getDocumentElement: Ft,
  getClippingRect: XU,
  getOffsetParent: v0,
  getElementRects: jU,
  getClientRects: _U,
  getDimensions: zU,
  getScale: Sn,
  isElement: ne,
  isRTL: JU
};
function qU(A, e) {
  let t = null, r;
  const n = Ft(A);
  function i() {
    var a;
    clearTimeout(r), (a = t) == null || a.disconnect(), t = null;
  }
  function o(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const {
      left: l,
      top: u,
      width: c,
      height: f
    } = A.getBoundingClientRect();
    if (a || e(), !c || !f)
      return;
    const g = sa(u), p = sa(n.clientWidth - (l + c)), w = sa(n.clientHeight - (u + f)), y = sa(l), d = {
      rootMargin: -g + "px " + -p + "px " + -w + "px " + -y + "px",
      threshold: br(0, Pn(1, s)) || 1
    };
    let h = !0;
    function m(C) {
      const v = C[0].intersectionRatio;
      if (v !== s) {
        if (!h)
          return o();
        v ? o(!1, v) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      h = !1;
    }
    try {
      t = new IntersectionObserver(m, {
        ...d,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(m, d);
    }
    t.observe(A);
  }
  return o(!0), i;
}
function A1(A, e, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, l = eB(A), u = n || i ? [...l ? go(l) : [], ...go(e)] : [];
  u.forEach((B) => {
    n && B.addEventListener("scroll", t, {
      passive: !0
    }), i && B.addEventListener("resize", t);
  });
  const c = l && a ? qU(l, t) : null;
  let f = -1, g = null;
  o && (g = new ResizeObserver((B) => {
    let [d] = B;
    d && d.target === l && g && (g.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var h;
      (h = g) == null || h.observe(e);
    })), t();
  }), l && !s && g.observe(l), g.observe(e));
  let p, w = s ? Gr(A) : null;
  s && y();
  function y() {
    const B = Gr(A);
    w && (B.x !== w.x || B.y !== w.y || B.width !== w.width || B.height !== w.height) && t(), w = B, p = requestAnimationFrame(y);
  }
  return t(), () => {
    var B;
    u.forEach((d) => {
      n && d.removeEventListener("scroll", t), i && d.removeEventListener("resize", t);
    }), c == null || c(), (B = g) == null || B.disconnect(), g = null, s && cancelAnimationFrame(p);
  };
}
const e1 = KU, t1 = RU, r1 = OU, zg = kU, n1 = (A, e, t) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: ZU,
    ...t
  }, i = {
    ...n.platform,
    _c: r
  };
  return TU(A, e, {
    ...n,
    platform: i
  });
};
var es = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
function _s(A, e) {
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
        if (!_s(A[r], e[r]))
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
      if (!(i === "_owner" && A.$$typeof) && !_s(A[i], e[i]))
        return !1;
    }
    return !0;
  }
  return A !== A && e !== e;
}
function C0(A) {
  return typeof window > "u" ? 1 : (A.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yg(A, e) {
  const t = C0(A);
  return Math.round(e * t) / t;
}
function jg(A) {
  const e = Q.useRef(A);
  return es(() => {
    e.current = A;
  }), e;
}
function i1(A) {
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
  }), [f, g] = Q.useState(r);
  _s(f, r) || g(r);
  const [p, w] = Q.useState(null), [y, B] = Q.useState(null), d = Q.useCallback((K) => {
    K !== v.current && (v.current = K, w(K));
  }, []), h = Q.useCallback((K) => {
    K !== F.current && (F.current = K, B(K));
  }, []), m = i || p, C = o || y, v = Q.useRef(null), F = Q.useRef(null), U = Q.useRef(u), E = s != null, S = jg(s), P = jg(n), N = Q.useCallback(() => {
    if (!v.current || !F.current)
      return;
    const K = {
      placement: e,
      strategy: t,
      middleware: f
    };
    P.current && (K.platform = P.current), n1(v.current, F.current, K).then((I) => {
      const x = {
        ...I,
        isPositioned: !0
      };
      D.current && !_s(U.current, x) && (U.current = x, Ql.flushSync(() => {
        c(x);
      }));
    });
  }, [f, e, t, P]);
  es(() => {
    l === !1 && U.current.isPositioned && (U.current.isPositioned = !1, c((K) => ({
      ...K,
      isPositioned: !1
    })));
  }, [l]);
  const D = Q.useRef(!1);
  es(() => (D.current = !0, () => {
    D.current = !1;
  }), []), es(() => {
    if (m && (v.current = m), C && (F.current = C), m && C) {
      if (S.current)
        return S.current(m, C, N);
      N();
    }
  }, [m, C, N, S, E]);
  const G = Q.useMemo(() => ({
    reference: v,
    floating: F,
    setReference: d,
    setFloating: h
  }), [d, h]), J = Q.useMemo(() => ({
    reference: m,
    floating: C
  }), [m, C]), $ = Q.useMemo(() => {
    const K = {
      position: t,
      left: 0,
      top: 0
    };
    if (!J.floating)
      return K;
    const I = Yg(J.floating, u.x), x = Yg(J.floating, u.y);
    return a ? {
      ...K,
      transform: "translate(" + I + "px, " + x + "px)",
      ...C0(J.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: I,
      top: x
    };
  }, [t, a, J.floating, u.x, u.y]);
  return Q.useMemo(() => ({
    ...u,
    update: N,
    refs: G,
    elements: J,
    floatingStyles: $
  }), [u, N, G, J, $]);
}
const o1 = (A) => {
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
      return r && e(r) ? r.current != null ? zg({
        element: r.current,
        padding: n
      }).fn(t) : {} : r ? zg({
        element: r,
        padding: n
      }).fn(t) : {};
    }
  };
}, a1 = (A, e) => ({
  ...e1(A),
  options: [A, e]
}), s1 = (A, e) => ({
  ...t1(A),
  options: [A, e]
}), l1 = (A, e) => ({
  ...r1(A),
  options: [A, e]
}), u1 = (A, e) => ({
  ...o1(A),
  options: [A, e]
}), Q0 = {
  ...nc
}, c1 = Q0.useInsertionEffect, f1 = c1 || ((A) => A());
function d1(A) {
  const e = Q.useRef(() => {
  });
  return f1(() => {
    e.current = A;
  }), Q.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var nf = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
let Jg = !1, B1 = 0;
const Zg = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + B1++
);
function g1() {
  const [A, e] = Q.useState(() => Jg ? Zg() : void 0);
  return nf(() => {
    A == null && e(Zg());
  }, []), Q.useEffect(() => {
    Jg = !0;
  }, []), A;
}
const p1 = Q0.useId, h1 = p1 || g1;
function w1() {
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
const m1 = /* @__PURE__ */ Q.createContext(null), v1 = /* @__PURE__ */ Q.createContext(null), C1 = () => {
  var A;
  return ((A = Q.useContext(m1)) == null ? void 0 : A.id) || null;
}, Q1 = () => Q.useContext(v1);
function y1(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = A, n = h1(), i = Q.useRef({}), [o] = Q.useState(() => w1()), a = C1() != null, [s, l] = Q.useState(r.reference), u = d1((g, p, w) => {
    i.current.openEvent = g ? p : void 0, o.emit("openchange", {
      open: g,
      event: p,
      reason: w,
      nested: a
    }), t == null || t(g, p, w);
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
function F1(A) {
  A === void 0 && (A = {});
  const {
    nodeId: e
  } = A, t = y1({
    ...A,
    elements: {
      reference: null,
      floating: null,
      ...A.elements
    }
  }), r = A.rootContext || t, n = r.elements, [i, o] = Q.useState(null), [a, s] = Q.useState(null), u = (n == null ? void 0 : n.reference) || i, c = Q.useRef(null), f = Q1();
  nf(() => {
    u && (c.current = u);
  }, [u]);
  const g = i1({
    ...A,
    elements: {
      ...n,
      ...a && {
        reference: a
      }
    }
  }), p = Q.useCallback((h) => {
    const m = ne(h) ? {
      getBoundingClientRect: () => h.getBoundingClientRect(),
      contextElement: h
    } : h;
    s(m), g.refs.setReference(m);
  }, [g.refs]), w = Q.useCallback((h) => {
    (ne(h) || h === null) && (c.current = h, o(h)), (ne(g.refs.reference.current) || g.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    h !== null && !ne(h)) && g.refs.setReference(h);
  }, [g.refs]), y = Q.useMemo(() => ({
    ...g.refs,
    setReference: w,
    setPositionReference: p,
    domReference: c
  }), [g.refs, w, p]), B = Q.useMemo(() => ({
    ...g.elements,
    domReference: u
  }), [g.elements, u]), d = Q.useMemo(() => ({
    ...g,
    ...r,
    refs: y,
    elements: B,
    nodeId: e
  }), [g, y, B, e, r]);
  return nf(() => {
    r.dataRef.current.floatingContext = d;
    const h = f == null ? void 0 : f.nodesRef.current.find((m) => m.id === e);
    h && (h.context = d);
  }), Q.useMemo(() => ({
    ...g,
    context: d,
    refs: y,
    elements: B
  }), [g, y, B, d]);
}
let El = Q.createContext(null);
El.displayName = "OpenClosedContext";
var Ke = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(Ke || {});
function Il() {
  return Q.useContext(El);
}
function U1({ value: A, children: e }) {
  return _.createElement(El.Provider, { value: A }, e);
}
function E1({ children: A }) {
  return _.createElement(El.Provider, { value: null }, A);
}
function I1(A) {
  function e() {
    document.readyState !== "loading" && (A(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
let Rt = [];
I1(() => {
  function A(e) {
    e.target instanceof HTMLElement && e.target !== document.body && Rt[0] !== e.target && (Rt.unshift(e.target), Rt = Rt.filter((t) => t != null && t.isConnected), Rt.splice(10));
  }
  window.addEventListener("click", A, { capture: !0 }), window.addEventListener("mousedown", A, { capture: !0 }), window.addEventListener("focus", A, { capture: !0 }), document.body.addEventListener("click", A, { capture: !0 }), document.body.addEventListener("mousedown", A, { capture: !0 }), document.body.addEventListener("focus", A, { capture: !0 });
});
function y0(A) {
  let e = hA(A), t = Q.useRef(!1);
  Q.useEffect(() => (t.current = !1, () => {
    t.current = !0, yl(() => {
      t.current && e();
    });
  }), [e]);
}
function H1() {
  let A = typeof document > "u";
  return "useSyncExternalStore" in nc ? ((e) => e.useSyncExternalStore)(nc)(() => () => {
  }, () => !1, () => !A) : !1;
}
function Do() {
  let A = H1(), [e, t] = Q.useState(Lr.isHandoffComplete);
  return e && Lr.isHandoffComplete === !1 && t(!1), Q.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), Q.useEffect(() => Lr.handoff(), []), A ? !1 : e;
}
let F0 = Q.createContext(!1);
function x1() {
  return Q.useContext(F0);
}
function qg(A) {
  return _.createElement(F0.Provider, { value: A.force }, A.children);
}
function S1(A) {
  let e = x1(), t = Q.useContext(E0), r = bo(A), [n, i] = Q.useState(() => {
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
let U0 = Q.Fragment, L1 = le(function(A, e) {
  let t = A, r = Q.useRef(null), n = et(PF((u) => {
    r.current = u;
  }), e), i = bo(r), o = S1(r), [a] = Q.useState(() => {
    var u;
    return Lr.isServer ? null : (u = i == null ? void 0 : i.createElement("div")) != null ? u : null;
  }), s = Q.useContext(of), l = Do();
  return ZA(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), ZA(() => {
    if (a && s) return s.register(a);
  }, [s, a]), y0(() => {
    var u;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((u = o.parentElement) == null || u.removeChild(o)));
  }), l ? !o || !a ? null : Ql.createPortal(Se({ ourProps: { ref: n }, theirProps: t, slot: {}, defaultTag: U0, name: "Portal" }), a) : null;
});
function b1(A, e) {
  let t = et(e), { enabled: r = !0, ...n } = A;
  return r ? _.createElement(L1, { ...n, ref: t }) : Se({ ourProps: { ref: t }, theirProps: n, slot: {}, defaultTag: U0, name: "Portal" });
}
let T1 = Q.Fragment, E0 = Q.createContext(null);
function k1(A, e) {
  let { target: t, ...r } = A, n = { ref: et(e) };
  return _.createElement(E0.Provider, { value: t }, Se({ ourProps: n, theirProps: r, defaultTag: T1, name: "Popover.Group" }));
}
let of = Q.createContext(null);
function O1() {
  let A = Q.useContext(of), e = Q.useRef([]), t = hA((i) => (e.current.push(i), A && A.register(i), () => r(i))), r = hA((i) => {
    let o = e.current.indexOf(i);
    o !== -1 && e.current.splice(o, 1), A && A.unregister(i);
  }), n = Q.useMemo(() => ({ register: t, unregister: r, portals: e }), [t, r, e]);
  return [e, Q.useMemo(() => function({ children: i }) {
    return _.createElement(of.Provider, { value: n }, i);
  }, [n])];
}
let D1 = le(b1), I0 = le(k1), K1 = Object.assign(D1, { Group: I0 });
function R1(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let r = qn(A, "escape");
  u0(e, "keydown", (n) => {
    r && (n.defaultPrevented || n.key === r0.Escape && t(n));
  });
}
function N1() {
  var A;
  let [e] = Q.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [t, r] = Q.useState((A = e == null ? void 0 : e.matches) != null ? A : !1);
  return ZA(() => {
    if (!e) return;
    function n(i) {
      r(i.matches);
    }
    return e.addEventListener("change", n), () => e.removeEventListener("change", n);
  }, [e]), t;
}
function M1({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
  var r;
  let n = Q.useRef((r = t == null ? void 0 : t.current) != null ? r : null), i = bo(n), o = hA(() => {
    var a, s, l;
    let u = [];
    for (let c of A) c !== null && (c instanceof HTMLElement ? u.push(c) : "current" in c && c.current instanceof HTMLElement && u.push(c.current));
    if (e != null && e.current) for (let c of e.current) u.push(c);
    for (let c of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(n.current) || c.contains((l = (s = n.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || u.some((f) => c.contains(f)) || u.push(c));
    return u;
  });
  return { resolveContainers: o, contains: hA((a) => o().some((s) => s.contains(a))), mainTreeNodeRef: n, MainTreeNode: Q.useMemo(() => function() {
    return t != null ? null : _.createElement(Zc, { features: Rs.Hidden, ref: n });
  }, [n, t]) };
}
function tB() {
  let A = Q.useRef(!1);
  return ZA(() => (A.current = !0, () => {
    A.current = !1;
  }), []), A;
}
var Qi = ((A) => (A[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A))(Qi || {});
function P1() {
  let A = Q.useRef(0);
  return l0(!0, "keydown", (e) => {
    e.key === "Tab" && (A.current = e.shiftKey ? 1 : 0);
  }, !0), A;
}
function H0(A) {
  if (!A) return /* @__PURE__ */ new Set();
  if (typeof A == "function") return new Set(A());
  let e = /* @__PURE__ */ new Set();
  for (let t of A.current) t.current instanceof HTMLElement && e.add(t.current);
  return e;
}
let _1 = "div";
var mr = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(mr || {});
function G1(A, e) {
  let t = Q.useRef(null), r = et(t, e), { initialFocus: n, initialFocusFallback: i, containers: o, features: a = 15, ...s } = A;
  Do() || (a = 0);
  let l = bo(t);
  X1(a, { ownerDocument: l });
  let u = z1(a, { ownerDocument: l, container: t, initialFocus: n, initialFocusFallback: i });
  Y1(a, { ownerDocument: l, container: t, containers: o, previousActiveElement: u });
  let c = P1(), f = hA((B) => {
    let d = t.current;
    d && ((h) => h())(() => {
      rr(c.current, { [Qi.Forwards]: () => {
        _i(d, lt.First, { skipElements: [B.relatedTarget, i] });
      }, [Qi.Backwards]: () => {
        _i(d, lt.Last, { skipElements: [B.relatedTarget, i] });
      } });
    });
  }), g = qn(!!(a & 2), "focus-trap#tab-lock"), p = zd(), w = Q.useRef(!1), y = { ref: r, onKeyDown(B) {
    B.key == "Tab" && (w.current = !0, p.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(B) {
    if (!(a & 4)) return;
    let d = H0(o);
    t.current instanceof HTMLElement && d.add(t.current);
    let h = B.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (x0(d, h) || (w.current ? _i(t.current, rr(c.current, { [Qi.Forwards]: () => lt.Next, [Qi.Backwards]: () => lt.Previous }) | lt.WrapAround, { relativeTo: B.target }) : B.target instanceof HTMLElement && dt(B.target)));
  } };
  return _.createElement(_.Fragment, null, g && _.createElement(Zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Rs.Focusable }), Se({ ourProps: y, theirProps: s, defaultTag: _1, name: "FocusTrap" }), g && _.createElement(Zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Rs.Focusable }));
}
let V1 = le(G1), $1 = Object.assign(V1, { features: mr });
function W1(A = !0) {
  let e = Q.useRef(Rt.slice());
  return jd(([t], [r]) => {
    r === !0 && t === !1 && yl(() => {
      e.current.splice(0);
    }), r === !1 && t === !0 && (e.current = Rt.slice());
  }, [A, Rt, e]), hA(() => {
    var t;
    return (t = e.current.find((r) => r != null && r.isConnected)) != null ? t : null;
  });
}
function X1(A, { ownerDocument: e }) {
  let t = !!(A & 8), r = W1(t);
  jd(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && dt(r());
  }, [t]), y0(() => {
    t && dt(r());
  });
}
function z1(A, { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: n }) {
  let i = Q.useRef(null), o = qn(!!(A & 1), "focus-trap#initial-focus"), a = tB();
  return jd(() => {
    if (A === 0) return;
    if (!o) {
      n != null && n.current && dt(n.current);
      return;
    }
    let s = t.current;
    s && yl(() => {
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
          if (_i(s, lt.First | lt.AutoFocus) !== ef.Error) return;
        } else if (_i(s, lt.First) !== ef.Error) return;
        if (n != null && n.current && (dt(n.current), (e == null ? void 0 : e.activeElement) === n.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = e == null ? void 0 : e.activeElement;
    });
  }, [n, o, A]), i;
}
function Y1(A, { ownerDocument: e, container: t, containers: r, previousActiveElement: n }) {
  let i = tB(), o = !!(A & 4);
  u0(e == null ? void 0 : e.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let s = H0(r);
    t.current instanceof HTMLElement && s.add(t.current);
    let l = n.current;
    if (!l) return;
    let u = a.target;
    u && u instanceof HTMLElement ? x0(s, u) ? (n.current = u, dt(u)) : (a.preventDefault(), a.stopPropagation(), dt(l)) : dt(n.current);
  }, !0);
}
function x0(A, e) {
  for (let t of A) if (t.contains(e)) return !0;
  return !1;
}
function S0(A) {
  var e;
  return !!(A.enter || A.enterFrom || A.enterTo || A.leave || A.leaveFrom || A.leaveTo) || ((e = A.as) != null ? e : b0) !== Q.Fragment || _.Children.count(A.children) === 1;
}
let Hl = Q.createContext(null);
Hl.displayName = "TransitionContext";
var j1 = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(j1 || {});
function J1() {
  let A = Q.useContext(Hl);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
function Z1() {
  let A = Q.useContext(xl);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
let xl = Q.createContext(null);
xl.displayName = "NestingContext";
function Sl(A) {
  return "children" in A ? Sl(A.children) : A.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function L0(A, e) {
  let t = zr(A), r = Q.useRef([]), n = tB(), i = zd(), o = hA((g, p = Pt.Hidden) => {
    let w = r.current.findIndex(({ el: y }) => y === g);
    w !== -1 && (rr(p, { [Pt.Unmount]() {
      r.current.splice(w, 1);
    }, [Pt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var y;
      !Sl(r) && n.current && ((y = t.current) == null || y.call(t));
    }));
  }), a = hA((g) => {
    let p = r.current.find(({ el: w }) => w === g);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: g, state: "visible" }), () => o(g, Pt.Unmount);
  }), s = Q.useRef([]), l = Q.useRef(Promise.resolve()), u = Q.useRef({ enter: [], leave: [] }), c = hA((g, p, w) => {
    s.current.splice(0), e && (e.chains.current[p] = e.chains.current[p].filter(([y]) => y !== g)), e == null || e.chains.current[p].push([g, new Promise((y) => {
      s.current.push(y);
    })]), e == null || e.chains.current[p].push([g, new Promise((y) => {
      Promise.all(u.current[p].map(([B, d]) => d)).then(() => y());
    })]), p === "enter" ? l.current = l.current.then(() => e == null ? void 0 : e.wait.current).then(() => w(p)) : w(p);
  }), f = hA((g, p, w) => {
    Promise.all(u.current[p].splice(0).map(([y, B]) => B)).then(() => {
      var y;
      (y = s.current.shift()) == null || y();
    }).then(() => w(p));
  });
  return Q.useMemo(() => ({ children: r, register: a, unregister: o, onStart: c, onStop: f, wait: l, chains: u }), [a, o, r, c, f, u, l]);
}
let b0 = Q.Fragment, T0 = Ks.RenderStrategy;
function q1(A, e) {
  var t, r;
  let { transition: n = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: s, enter: l, enterFrom: u, enterTo: c, entered: f, leave: g, leaveFrom: p, leaveTo: w, ...y } = A, B = Q.useRef(null), d = S0(A), h = et(...d ? [B, e] : e === null ? [] : [e]), m = (t = y.unmount) == null || t ? Pt.Unmount : Pt.Hidden, { show: C, appear: v, initial: F } = J1(), [U, E] = Q.useState(C ? "visible" : "hidden"), S = Z1(), { register: P, unregister: N } = S;
  ZA(() => P(B), [P, B]), ZA(() => {
    if (m === Pt.Hidden && B.current) {
      if (C && U !== "visible") {
        E("visible");
        return;
      }
      return rr(U, { hidden: () => N(B), visible: () => P(B) });
    }
  }, [U, B, P, N, C, m]);
  let D = Do();
  ZA(() => {
    if (d && D && U === "visible" && B.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [B, U, D, d]);
  let G = F && !v, J = v && C && F, $ = Q.useRef(!1), K = L0(() => {
    $.current || (E("hidden"), N(B));
  }, S), I = hA((BA) => {
    $.current = !0;
    let gA = BA ? "enter" : "leave";
    K.onStart(B, gA, (rA) => {
      rA === "enter" ? i == null || i() : rA === "leave" && (a == null || a());
    });
  }), x = hA((BA) => {
    let gA = BA ? "enter" : "leave";
    $.current = !1, K.onStop(B, gA, (rA) => {
      rA === "enter" ? o == null || o() : rA === "leave" && (s == null || s());
    }), gA === "leave" && !Sl(K) && (E("hidden"), N(B));
  });
  Q.useEffect(() => {
    d && n || (I(C), x(C));
  }, [C, d, n]);
  let L = !(!n || !d || !D || G), [, M] = vU(L, B, C, { start: I, end: x }), X = wr({ ref: h, className: ((r = Jc(y.className, J && l, J && u, M.enter && l, M.enter && M.closed && u, M.enter && !M.closed && c, M.leave && g, M.leave && !M.closed && p, M.leave && M.closed && w, !M.transition && C && f)) == null ? void 0 : r.trim()) || void 0, ...mU(M) }), dA = 0;
  return U === "visible" && (dA |= Ke.Open), U === "hidden" && (dA |= Ke.Closed), M.enter && (dA |= Ke.Opening), M.leave && (dA |= Ke.Closing), _.createElement(xl.Provider, { value: K }, _.createElement(U1, { value: dA }, Se({ ourProps: X, theirProps: y, defaultTag: b0, features: T0, visible: U === "visible", name: "Transition.Child" })));
}
function AE(A, e) {
  let { show: t, appear: r = !1, unmount: n = !0, ...i } = A, o = Q.useRef(null), a = S0(A), s = et(...a ? [o, e] : e === null ? [] : [e]);
  Do();
  let l = Il();
  if (t === void 0 && l !== null && (t = (l & Ke.Open) === Ke.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, c] = Q.useState(t ? "visible" : "hidden"), f = L0(() => {
    t || c("hidden");
  }), [g, p] = Q.useState(!0), w = Q.useRef([t]);
  ZA(() => {
    g !== !1 && w.current[w.current.length - 1] !== t && (w.current.push(t), p(!1));
  }, [w, t]);
  let y = Q.useMemo(() => ({ show: t, appear: r, initial: g }), [t, r, g]);
  o0(t, o, () => c("hidden")), ZA(() => {
    t ? c("visible") : !Sl(f) && o.current !== null && c("hidden");
  }, [t, f]);
  let B = { unmount: n }, d = hA(() => {
    var m;
    g && p(!1), (m = A.beforeEnter) == null || m.call(A);
  }), h = hA(() => {
    var m;
    g && p(!1), (m = A.beforeLeave) == null || m.call(A);
  });
  return _.createElement(xl.Provider, { value: f }, _.createElement(Hl.Provider, { value: y }, Se({ ourProps: { ...B, as: Q.Fragment, children: _.createElement(k0, { ref: s, ...B, ...i, beforeEnter: d, beforeLeave: h }) }, theirProps: {}, defaultTag: Q.Fragment, features: T0, visible: u === "visible", name: "Transition" })));
}
function eE(A, e) {
  let t = Q.useContext(Hl) !== null, r = Il() !== null;
  return _.createElement(_.Fragment, null, !t && r ? _.createElement(af, { ref: e, ...A }) : _.createElement(k0, { ref: e, ...A }));
}
let af = le(AE), k0 = le(q1), po = le(eE), O0 = Object.assign(af, { Child: po, Root: af });
var tE = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(tE || {}), rE = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(rE || {});
let nE = { 0(A, e) {
  return A.titleId === e.id ? A : { ...A, titleId: e.id };
} }, rB = Q.createContext(null);
rB.displayName = "DialogContext";
function Ll(A) {
  let e = Q.useContext(rB);
  if (e === null) {
    let t = new Error(`<${A} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ll), t;
  }
  return e;
}
function iE(A, e) {
  return rr(e.type, nE, A, e);
}
let Ap = le(function(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-${t}`, open: n, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: s = !0, __demoMode: l = !1, ...u } = A, c = Q.useRef(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (c.current || (c.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Il();
  n === void 0 && f !== null && (n = (f & Ke.Open) === Ke.Open);
  let g = Q.useRef(null), p = et(g, e), w = bo(g), y = n ? 0 : 1, [B, d] = Q.useReducer(iE, { titleId: null, descriptionId: null, panelRef: Q.createRef() }), h = hA(() => i(!1)), m = hA((L) => d({ type: 0, id: L })), C = Do() ? y === 0 : !1, [v, F] = O1(), U = { get current() {
    var L;
    return (L = B.panelRef.current) != null ? L : g.current;
  } }, { resolveContainers: E, mainTreeNodeRef: S, MainTreeNode: P } = M1({ portals: v, defaultContainers: [U] }), N = f !== null ? (f & Ke.Closing) === Ke.Closing : !1;
  JF(l || N ? !1 : C, { allowed: hA(() => {
    var L, M;
    return [(M = (L = g.current) == null ? void 0 : L.closest("[data-headlessui-portal]")) != null ? M : null];
  }), disallowed: hA(() => {
    var L, M;
    return [(M = (L = S.current) == null ? void 0 : L.closest("body > *:not(#headlessui-portal-root)")) != null ? M : null];
  }) }), lU(C, E, (L) => {
    L.preventDefault(), h();
  }), R1(C, w == null ? void 0 : w.defaultView, (L) => {
    L.preventDefault(), L.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), h();
  }), gU(l || N ? !1 : C, w, E), o0(C, g, h);
  let [D, G] = _F(), J = Q.useMemo(() => [{ dialogState: y, close: h, setTitleId: m }, B], [y, B, h, m]), $ = Q.useMemo(() => ({ open: y === 0 }), [y]), K = { ref: p, id: r, role: a, tabIndex: -1, "aria-modal": l ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": B.titleId, "aria-describedby": D }, I = !N1(), x = mr.None;
  return C && !l && (x |= mr.RestoreFocus, x |= mr.TabLock, s && (x |= mr.AutoFocus), I && (x |= mr.InitialFocus)), _.createElement(E1, null, _.createElement(qg, { force: !0 }, _.createElement(K1, null, _.createElement(rB.Provider, { value: J }, _.createElement(I0, { target: g }, _.createElement(qg, { force: !1 }, _.createElement(G, { slot: $ }, _.createElement(F, null, _.createElement($1, { initialFocus: o, initialFocusFallback: g, containers: E, features: x }, _.createElement(zF, { value: h }, Se({ ourProps: K, theirProps: u, slot: $, defaultTag: oE, features: aE, visible: y === 0, name: "Dialog" })))))))))), _.createElement(MF, null, _.createElement(P, null)));
}), oE = "div", aE = Ks.RenderStrategy | Ks.Static;
function sE(A, e) {
  let { transition: t = !1, open: r, ...n } = A, i = Il(), o = A.hasOwnProperty("open") || i !== null, a = A.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return i === null && r !== void 0 && !n.static ? _.createElement(O0, { show: r, transition: t, unmount: n.unmount }, _.createElement(Ap, { ref: e, ...n })) : _.createElement(Ap, { ref: e, open: r, ...n });
}
let lE = "div";
function uE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-panel-${t}`, transition: n = !1, ...i } = A, [{ dialogState: o }, a] = Ll("Dialog.Panel"), s = et(e, a.panelRef), l = Q.useMemo(() => ({ open: o === 0 }), [o]), u = hA((c) => {
    c.stopPropagation();
  });
  return _.createElement(n ? po : Q.Fragment, null, Se({ ourProps: { ref: s, id: r, onClick: u }, theirProps: i, slot: l, defaultTag: lE, name: "Dialog.Panel" }));
}
let cE = "div";
function fE(A, e) {
  let { transition: t = !1, ...r } = A, [{ dialogState: n }] = Ll("Dialog.Backdrop"), i = Q.useMemo(() => ({ open: n === 0 }), [n]);
  return _.createElement(t ? po : Q.Fragment, null, Se({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: r, slot: i, defaultTag: cE, name: "Dialog.Backdrop" }));
}
let dE = "h2";
function BE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-title-${t}`, ...n } = A, [{ dialogState: i, setTitleId: o }] = Ll("Dialog.Title"), a = et(e);
  Q.useEffect(() => (o(r), () => o(null)), [r, o]);
  let s = Q.useMemo(() => ({ open: i === 0 }), [i]);
  return Se({ ourProps: { ref: a, id: r }, theirProps: n, slot: s, defaultTag: dE, name: "Dialog.Title" });
}
let gE = le(sE), D0 = le(uE);
le(fE);
let pE = le(BE), hE = Object.assign(gE, { Panel: D0, Title: pE, Description: WF });
function ep(A, e) {
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
    e % 2 ? ep(Object(t), !0).forEach(function(r) {
      bA(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(r) {
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
function wE(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mE(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function vE(A, e, t) {
  return e && mE(A.prototype, e), Object.defineProperty(A, "prototype", {
    writable: !1
  }), A;
}
function bA(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function nB(A, e) {
  return QE(A) || FE(A, e) || K0(A, e) || EE();
}
function Ko(A) {
  return CE(A) || yE(A) || K0(A) || UE();
}
function CE(A) {
  if (Array.isArray(A)) return sf(A);
}
function QE(A) {
  if (Array.isArray(A)) return A;
}
function yE(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function FE(A, e) {
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
function K0(A, e) {
  if (A) {
    if (typeof A == "string") return sf(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return sf(A, e);
  }
}
function sf(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
  return r;
}
function UE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tp = function() {
}, iB = {}, R0 = {}, N0 = null, M0 = {
  mark: tp,
  measure: tp
};
try {
  typeof window < "u" && (iB = window), typeof document < "u" && (R0 = document), typeof MutationObserver < "u" && (N0 = MutationObserver), typeof performance < "u" && (M0 = performance);
} catch {
}
var IE = iB.navigator || {}, rp = IE.userAgent, np = rp === void 0 ? "" : rp, or = iB, uA = R0, ip = N0, la = M0;
or.document;
var Ut = !!uA.documentElement && !!uA.head && typeof uA.addEventListener == "function" && typeof uA.createElement == "function", P0 = ~np.indexOf("MSIE") || ~np.indexOf("Trident/"), ua, ca, fa, da, Ba, mt = "___FONT_AWESOME___", lf = 16, _0 = "fa", G0 = "svg-inline--fa", Vr = "data-fa-i2svg", uf = "data-fa-pseudo-element", HE = "data-fa-pseudo-element-pending", oB = "data-prefix", aB = "data-icon", op = "fontawesome-i2svg", xE = "async", SE = ["HTML", "HEAD", "STYLE", "SCRIPT"], V0 = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), sA = "classic", CA = "sharp", sB = [sA, CA];
function Ro(A) {
  return new Proxy(A, {
    get: function(t, r) {
      return r in t ? t[r] : t[sA];
    }
  });
}
var ho = Ro((ua = {}, bA(ua, sA, {
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
}), bA(ua, CA, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ua)), wo = Ro((ca = {}, bA(ca, sA, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), bA(ca, CA, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), ca)), mo = Ro((fa = {}, bA(fa, sA, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), bA(fa, CA, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), fa)), LE = Ro((da = {}, bA(da, sA, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), bA(da, CA, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), da)), bE = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, $0 = "fa-layers-text", TE = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, kE = Ro((Ba = {}, bA(Ba, sA, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), bA(Ba, CA, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ba)), W0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], OE = W0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), DE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ur = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, vo = /* @__PURE__ */ new Set();
Object.keys(wo[sA]).map(vo.add.bind(vo));
Object.keys(wo[CA]).map(vo.add.bind(vo));
var KE = [].concat(sB, Ko(vo), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ur.GROUP, Ur.SWAP_OPACITY, Ur.PRIMARY, Ur.SECONDARY]).concat(W0.map(function(A) {
  return "".concat(A, "x");
})).concat(OE.map(function(A) {
  return "w-".concat(A);
})), Gi = or.FontAwesomeConfig || {};
function RE(A) {
  var e = uA.querySelector("script[" + A + "]");
  if (e)
    return e.getAttribute(A);
}
function NE(A) {
  return A === "" ? !0 : A === "false" ? !1 : A === "true" ? !0 : A;
}
if (uA && typeof uA.querySelector == "function") {
  var ME = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ME.forEach(function(A) {
    var e = nB(A, 2), t = e[0], r = e[1], n = NE(RE(t));
    n != null && (Gi[r] = n);
  });
}
var X0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: _0,
  replacementClass: G0,
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
Gi.familyPrefix && (Gi.cssPrefix = Gi.familyPrefix);
var Gn = k(k({}, X0), Gi);
Gn.autoReplaceSvg || (Gn.observeMutations = !1);
var R = {};
Object.keys(X0).forEach(function(A) {
  Object.defineProperty(R, A, {
    enumerable: !0,
    set: function(t) {
      Gn[A] = t, Vi.forEach(function(r) {
        return r(R);
      });
    },
    get: function() {
      return Gn[A];
    }
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Gn.cssPrefix = e, Vi.forEach(function(t) {
      return t(R);
    });
  },
  get: function() {
    return Gn.cssPrefix;
  }
});
or.FontAwesomeConfig = R;
var Vi = [];
function PE(A) {
  return Vi.push(A), function() {
    Vi.splice(Vi.indexOf(A), 1);
  };
}
var xt = lf, Je = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function _E(A) {
  if (!(!A || !Ut)) {
    var e = uA.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = A;
    for (var t = uA.head.childNodes, r = null, n = t.length - 1; n > -1; n--) {
      var i = t[n], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return uA.head.insertBefore(e, r), A;
  }
}
var GE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Co() {
  for (var A = 12, e = ""; A-- > 0; )
    e += GE[Math.random() * 62 | 0];
  return e;
}
function ei(A) {
  for (var e = [], t = (A || []).length >>> 0; t--; )
    e[t] = A[t];
  return e;
}
function lB(A) {
  return A.classList ? ei(A.classList) : (A.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function z0(A) {
  return "".concat(A).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function VE(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat(z0(A[t]), '" ');
  }, "").trim();
}
function bl(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, ": ").concat(A[t].trim(), ";");
  }, "");
}
function uB(A) {
  return A.size !== Je.size || A.x !== Je.x || A.y !== Je.y || A.rotate !== Je.rotate || A.flipX || A.flipY;
}
function $E(A) {
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
function WE(A) {
  var e = A.transform, t = A.width, r = t === void 0 ? lf : t, n = A.height, i = n === void 0 ? lf : n, o = A.startCentered, a = o === void 0 ? !1 : o, s = "";
  return a && P0 ? s += "translate(".concat(e.x / xt - r / 2, "em, ").concat(e.y / xt - i / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(e.x / xt, "em), calc(-50% + ").concat(e.y / xt, "em)) ") : s += "translate(".concat(e.x / xt, "em, ").concat(e.y / xt, "em) "), s += "scale(".concat(e.size / xt * (e.flipX ? -1 : 1), ", ").concat(e.size / xt * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
}
var XE = `:root, :host {
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
function Y0() {
  var A = _0, e = G0, t = R.cssPrefix, r = R.replacementClass, n = XE;
  if (t !== A || r !== e) {
    var i = new RegExp("\\.".concat(A, "\\-"), "g"), o = new RegExp("\\--".concat(A, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    n = n.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(a, ".".concat(r));
  }
  return n;
}
var ap = !1;
function Hu() {
  R.autoAddCss && !ap && (_E(Y0()), ap = !0);
}
var zE = {
  mixout: function() {
    return {
      dom: {
        css: Y0,
        insertCss: Hu
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Hu();
      },
      beforeI2svg: function() {
        Hu();
      }
    };
  }
}, vt = or || {};
vt[mt] || (vt[mt] = {});
vt[mt].styles || (vt[mt].styles = {});
vt[mt].hooks || (vt[mt].hooks = {});
vt[mt].shims || (vt[mt].shims = []);
var Re = vt[mt], j0 = [], YE = function A() {
  uA.removeEventListener("DOMContentLoaded", A), Vs = 1, j0.map(function(e) {
    return e();
  });
}, Vs = !1;
Ut && (Vs = (uA.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(uA.readyState), Vs || uA.addEventListener("DOMContentLoaded", YE));
function jE(A) {
  Ut && (Vs ? setTimeout(A, 0) : j0.push(A));
}
function No(A) {
  var e = A.tag, t = A.attributes, r = t === void 0 ? {} : t, n = A.children, i = n === void 0 ? [] : n;
  return typeof A == "string" ? z0(A) : "<".concat(e, " ").concat(VE(r), ">").concat(i.map(No).join(""), "</").concat(e, ">");
}
function sp(A, e, t) {
  if (A && A[e] && A[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: A[e][t]
    };
}
var xu = function(e, t, r, n) {
  var i = Object.keys(e), o = i.length, a = t, s, l, u;
  for (r === void 0 ? (s = 1, u = e[i[0]]) : (s = 0, u = r); s < o; s++)
    l = i[s], u = a(u, e[l], l, e);
  return u;
};
function JE(A) {
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
function cf(A) {
  var e = JE(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function ZE(A, e) {
  var t = A.length, r = A.charCodeAt(e), n;
  return r >= 55296 && r <= 56319 && t > e + 1 && (n = A.charCodeAt(e + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function lp(A) {
  return Object.keys(A).reduce(function(e, t) {
    var r = A[t], n = !!r.icon;
    return n ? e[r.iconName] = r.icon : e[t] = r, e;
  }, {});
}
function ff(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, n = r === void 0 ? !1 : r, i = lp(e);
  typeof Re.hooks.addPack == "function" && !n ? Re.hooks.addPack(A, lp(e)) : Re.styles[A] = k(k({}, Re.styles[A] || {}), i), A === "fas" && ff("fa", e);
}
var ga, pa, ha, mn = Re.styles, qE = Re.shims, AI = (ga = {}, bA(ga, sA, Object.values(mo[sA])), bA(ga, CA, Object.values(mo[CA])), ga), cB = null, J0 = {}, Z0 = {}, q0 = {}, Av = {}, ev = {}, eI = (pa = {}, bA(pa, sA, Object.keys(ho[sA])), bA(pa, CA, Object.keys(ho[CA])), pa);
function tI(A) {
  return ~KE.indexOf(A);
}
function rI(A, e) {
  var t = e.split("-"), r = t[0], n = t.slice(1).join("-");
  return r === A && n !== "" && !tI(n) ? n : null;
}
var tv = function() {
  var e = function(i) {
    return xu(mn, function(o, a, s) {
      return o[s] = xu(a, i, {}), o;
    }, {});
  };
  J0 = e(function(n, i, o) {
    if (i[3] && (n[i[3]] = o), i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "number";
      });
      a.forEach(function(s) {
        n[s.toString(16)] = o;
      });
    }
    return n;
  }), Z0 = e(function(n, i, o) {
    if (n[o] = o, i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "string";
      });
      a.forEach(function(s) {
        n[s] = o;
      });
    }
    return n;
  }), ev = e(function(n, i, o) {
    var a = i[2];
    return n[o] = o, a.forEach(function(s) {
      n[s] = o;
    }), n;
  });
  var t = "far" in mn || R.autoFetchSvg, r = xu(qE, function(n, i) {
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
  q0 = r.names, Av = r.unicodes, cB = Tl(R.styleDefault, {
    family: R.familyDefault
  });
};
PE(function(A) {
  cB = Tl(A.styleDefault, {
    family: R.familyDefault
  });
});
tv();
function fB(A, e) {
  return (J0[A] || {})[e];
}
function nI(A, e) {
  return (Z0[A] || {})[e];
}
function Er(A, e) {
  return (ev[A] || {})[e];
}
function rv(A) {
  return q0[A] || {
    prefix: null,
    iconName: null
  };
}
function iI(A) {
  var e = Av[A], t = fB("fas", A);
  return e || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ar() {
  return cB;
}
var dB = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Tl(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, r = t === void 0 ? sA : t, n = ho[r][A], i = wo[r][A] || wo[r][n], o = A in Re.styles ? A : null;
  return i || o || null;
}
var up = (ha = {}, bA(ha, sA, Object.keys(mo[sA])), bA(ha, CA, Object.keys(mo[CA])), ha);
function kl(A) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, n = r === void 0 ? !1 : r, i = (e = {}, bA(e, sA, "".concat(R.cssPrefix, "-").concat(sA)), bA(e, CA, "".concat(R.cssPrefix, "-").concat(CA)), e), o = null, a = sA;
  (A.includes(i[sA]) || A.some(function(l) {
    return up[sA].includes(l);
  })) && (a = sA), (A.includes(i[CA]) || A.some(function(l) {
    return up[CA].includes(l);
  })) && (a = CA);
  var s = A.reduce(function(l, u) {
    var c = rI(R.cssPrefix, u);
    if (mn[u] ? (u = AI[a].includes(u) ? LE[a][u] : u, o = u, l.prefix = u) : eI[a].indexOf(u) > -1 ? (o = u, l.prefix = Tl(u, {
      family: a
    })) : c ? l.iconName = c : u !== R.replacementClass && u !== i[sA] && u !== i[CA] && l.rest.push(u), !n && l.prefix && l.iconName) {
      var f = o === "fa" ? rv(l.iconName) : {}, g = Er(l.prefix, l.iconName);
      f.prefix && (o = null), l.iconName = f.iconName || g || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !mn.far && mn.fas && !R.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, dB());
  return (A.includes("fa-brands") || A.includes("fab")) && (s.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (s.prefix = "fad"), !s.prefix && a === CA && (mn.fass || R.autoFetchSvg) && (s.prefix = "fass", s.iconName = Er(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = ar() || "fas"), s;
}
var oI = /* @__PURE__ */ function() {
  function A() {
    wE(this, A), this.definitions = {};
  }
  return vE(A, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        t.definitions[a] = k(k({}, t.definitions[a] || {}), o[a]), ff(a, o[a]);
        var s = mo[sA][a];
        s && ff(s, o[a]), tv();
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
}(), cp = [], vn = {}, Ln = {}, aI = Object.keys(Ln);
function sI(A, e) {
  var t = e.mixoutsTo;
  return cp = A, vn = {}, Object.keys(Ln).forEach(function(r) {
    aI.indexOf(r) === -1 && delete Ln[r];
  }), cp.forEach(function(r) {
    var n = r.mixout ? r.mixout() : {};
    if (Object.keys(n).forEach(function(o) {
      typeof n[o] == "function" && (t[o] = n[o]), Gs(n[o]) === "object" && Object.keys(n[o]).forEach(function(a) {
        t[o] || (t[o] = {}), t[o][a] = n[o][a];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        vn[o] || (vn[o] = []), vn[o].push(i[o]);
      });
    }
    r.provides && r.provides(Ln);
  }), t;
}
function df(A, e) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++)
    r[n - 2] = arguments[n];
  var i = vn[A] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(r));
  }), e;
}
function $r(A) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var n = vn[A] || [];
  n.forEach(function(i) {
    i.apply(null, t);
  });
}
function Ct() {
  var A = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Ln[A] ? Ln[A].apply(null, e) : void 0;
}
function Bf(A) {
  A.prefix === "fa" && (A.prefix = "fas");
  var e = A.iconName, t = A.prefix || ar();
  if (e)
    return e = Er(t, e) || e, sp(nv.definitions, t, e) || sp(Re.styles, t, e);
}
var nv = new oI(), lI = function() {
  R.autoReplaceSvg = !1, R.observeMutations = !1, $r("noAuto");
}, uI = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ut ? ($r("beforeI2svg", e), Ct("pseudoElements2svg", e), Ct("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0), R.observeMutations = !0, jE(function() {
      fI({
        autoReplaceSvgRoot: t
      }), $r("watch", e);
    });
  }
}, cI = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Gs(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Er(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Tl(e[0]);
      return {
        prefix: r,
        iconName: Er(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(R.cssPrefix, "-")) > -1 || e.match(bE))) {
      var n = kl(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || ar(),
        iconName: Er(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof e == "string") {
      var i = ar();
      return {
        prefix: i,
        iconName: Er(i, e) || e
      };
    }
  }
}, we = {
  noAuto: lI,
  config: R,
  dom: uI,
  parse: cI,
  library: nv,
  findIconDefinition: Bf,
  toHtml: No
}, fI = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, r = t === void 0 ? uA : t;
  (Object.keys(Re.styles).length > 0 || R.autoFetchSvg) && Ut && R.autoReplaceSvg && we.dom.i2svg({
    node: r
  });
};
function Ol(A, e) {
  return Object.defineProperty(A, "abstract", {
    get: e
  }), Object.defineProperty(A, "html", {
    get: function() {
      return A.abstract.map(function(r) {
        return No(r);
      });
    }
  }), Object.defineProperty(A, "node", {
    get: function() {
      if (Ut) {
        var r = uA.createElement("div");
        return r.innerHTML = A.html, r.children;
      }
    }
  }), A;
}
function dI(A) {
  var e = A.children, t = A.main, r = A.mask, n = A.attributes, i = A.styles, o = A.transform;
  if (uB(o) && t.found && !r.found) {
    var a = t.width, s = t.height, l = {
      x: a / s / 2,
      y: 0.5
    };
    n.style = bl(k(k({}, i), {}, {
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: e
  }];
}
function BI(A) {
  var e = A.prefix, t = A.iconName, r = A.children, n = A.attributes, i = A.symbol, o = i === !0 ? "".concat(e, "-").concat(R.cssPrefix, "-").concat(t) : i;
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
function BB(A) {
  var e = A.icons, t = e.main, r = e.mask, n = A.prefix, i = A.iconName, o = A.transform, a = A.symbol, s = A.title, l = A.maskId, u = A.titleId, c = A.extra, f = A.watchable, g = f === void 0 ? !1 : f, p = r.found ? r : t, w = p.width, y = p.height, B = n === "fak", d = [R.replacementClass, i ? "".concat(R.cssPrefix, "-").concat(i) : ""].filter(function(E) {
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
  }, m = B && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(w / y * 16 * 0.0625, "em")
  } : {};
  g && (h.attributes[Vr] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || Co())
    },
    children: [s]
  }), delete h.attributes.title);
  var C = k(k({}, h), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: l,
    transform: o,
    symbol: a,
    styles: k(k({}, m), c.styles)
  }), v = r.found && t.found ? Ct("generateAbstractMask", C) || {
    children: [],
    attributes: {}
  } : Ct("generateAbstractIcon", C) || {
    children: [],
    attributes: {}
  }, F = v.children, U = v.attributes;
  return C.children = F, C.attributes = U, a ? BI(C) : dI(C);
}
function fp(A) {
  var e = A.content, t = A.width, r = A.height, n = A.transform, i = A.title, o = A.extra, a = A.watchable, s = a === void 0 ? !1 : a, l = k(k(k({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Vr] = "");
  var u = k({}, o.styles);
  uB(n) && (u.transform = WE({
    transform: n,
    startCentered: !0,
    width: t,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var c = bl(u);
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
function gI(A) {
  var e = A.content, t = A.title, r = A.extra, n = k(k(k({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = bl(r.styles);
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
var Su = Re.styles;
function gf(A) {
  var e = A[0], t = A[1], r = A.slice(4), n = nB(r, 1), i = n[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(R.cssPrefix, "-").concat(Ur.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(Ur.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(Ur.PRIMARY),
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
var pI = {
  found: !1,
  width: 512,
  height: 512
};
function hI(A, e) {
  !V0 && !R.showMissingIcons && A && console.error('Icon with name "'.concat(A, '" and prefix "').concat(e, '" is missing.'));
}
function pf(A, e) {
  var t = e;
  return e === "fa" && R.styleDefault !== null && (e = ar()), new Promise(function(r, n) {
    if (Ct("missingIconAbstract"), t === "fa") {
      var i = rv(A) || {};
      A = i.iconName || A, e = i.prefix || e;
    }
    if (A && e && Su[e] && Su[e][A]) {
      var o = Su[e][A];
      return r(gf(o));
    }
    hI(A, e), r(k(k({}, pI), {}, {
      icon: R.showMissingIcons && A ? Ct("missingIconAbstract") || {} : {}
    }));
  });
}
var dp = function() {
}, hf = R.measurePerformance && la && la.mark && la.measure ? la : {
  mark: dp,
  measure: dp
}, yi = 'FA "6.5.2"', wI = function(e) {
  return hf.mark("".concat(yi, " ").concat(e, " begins")), function() {
    return iv(e);
  };
}, iv = function(e) {
  hf.mark("".concat(yi, " ").concat(e, " ends")), hf.measure("".concat(yi, " ").concat(e), "".concat(yi, " ").concat(e, " begins"), "".concat(yi, " ").concat(e, " ends"));
}, gB = {
  begin: wI,
  end: iv
}, ts = function() {
};
function Bp(A) {
  var e = A.getAttribute ? A.getAttribute(Vr) : null;
  return typeof e == "string";
}
function mI(A) {
  var e = A.getAttribute ? A.getAttribute(oB) : null, t = A.getAttribute ? A.getAttribute(aB) : null;
  return e && t;
}
function vI(A) {
  return A && A.classList && A.classList.contains && A.classList.contains(R.replacementClass);
}
function CI() {
  if (R.autoReplaceSvg === !0)
    return rs.replace;
  var A = rs[R.autoReplaceSvg];
  return A || rs.replace;
}
function QI(A) {
  return uA.createElementNS("http://www.w3.org/2000/svg", A);
}
function yI(A) {
  return uA.createElement(A);
}
function ov(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, r = t === void 0 ? A.tag === "svg" ? QI : yI : t;
  if (typeof A == "string")
    return uA.createTextNode(A);
  var n = r(A.tag);
  Object.keys(A.attributes || []).forEach(function(o) {
    n.setAttribute(o, A.attributes[o]);
  });
  var i = A.children || [];
  return i.forEach(function(o) {
    n.appendChild(ov(o, {
      ceFn: r
    }));
  }), n;
}
function FI(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var rs = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(n) {
        t.parentNode.insertBefore(ov(n), t);
      }), t.getAttribute(Vr) === null && R.keepOriginalSource) {
        var r = uA.createComment(FI(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], r = e[1];
    if (~lB(t).indexOf(R.replacementClass))
      return rs.replace(e);
    var n = new RegExp("".concat(R.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(a, s) {
        return s === R.replacementClass || s.match(n) ? a.toSvg.push(s) : a.toNode.push(s), a;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(a) {
      return No(a);
    }).join(`
`);
    t.setAttribute(Vr, ""), t.innerHTML = o;
  }
};
function gp(A) {
  A();
}
function av(A, e) {
  var t = typeof e == "function" ? e : ts;
  if (A.length === 0)
    t();
  else {
    var r = gp;
    R.mutateApproach === xE && (r = or.requestAnimationFrame || gp), r(function() {
      var n = CI(), i = gB.begin("mutate");
      A.map(n), i(), t();
    });
  }
}
var pB = !1;
function sv() {
  pB = !0;
}
function wf() {
  pB = !1;
}
var $s = null;
function pp(A) {
  if (ip && R.observeMutations) {
    var e = A.treeCallback, t = e === void 0 ? ts : e, r = A.nodeCallback, n = r === void 0 ? ts : r, i = A.pseudoElementsCallback, o = i === void 0 ? ts : i, a = A.observeMutationsRoot, s = a === void 0 ? uA : a;
    $s = new ip(function(l) {
      if (!pB) {
        var u = ar();
        ei(l).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !Bp(c.addedNodes[0]) && (R.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && R.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && Bp(c.target) && ~DE.indexOf(c.attributeName))
            if (c.attributeName === "class" && mI(c.target)) {
              var f = kl(lB(c.target)), g = f.prefix, p = f.iconName;
              c.target.setAttribute(oB, g || u), p && c.target.setAttribute(aB, p);
            } else vI(c.target) && n(c.target);
        });
      }
    }), Ut && $s.observe(s, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function UI() {
  $s && $s.disconnect();
}
function EI(A) {
  var e = A.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(r, n) {
    var i = n.split(":"), o = i[0], a = i.slice(1);
    return o && a.length > 0 && (r[o] = a.join(":").trim()), r;
  }, {})), t;
}
function II(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), r = A.innerText !== void 0 ? A.innerText.trim() : "", n = kl(lB(A));
  return n.prefix || (n.prefix = ar()), e && t && (n.prefix = e, n.iconName = t), n.iconName && n.prefix || (n.prefix && r.length > 0 && (n.iconName = nI(n.prefix, A.innerText) || fB(n.prefix, cf(A.innerText))), !n.iconName && R.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = A.firstChild.data)), n;
}
function HI(A) {
  var e = ei(A.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), t = A.getAttribute("title"), r = A.getAttribute("data-fa-title-id");
  return R.autoA11y && (t ? e["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(r || Co()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function xI() {
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
function hp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = II(A), r = t.iconName, n = t.prefix, i = t.rest, o = HI(A), a = df("parseNodeAttributes", {}, A), s = e.styleParser ? EI(A) : [];
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
var SI = Re.styles;
function lv(A) {
  var e = R.autoReplaceSvg === "nest" ? hp(A, {
    styleParser: !1
  }) : hp(A);
  return ~e.extra.classes.indexOf($0) ? Ct("generateLayersText", A, e) : Ct("generateSvgReplacementMutation", A, e);
}
var sr = /* @__PURE__ */ new Set();
sB.map(function(A) {
  sr.add("fa-".concat(A));
});
Object.keys(ho[sA]).map(sr.add.bind(sr));
Object.keys(ho[CA]).map(sr.add.bind(sr));
sr = Ko(sr);
function wp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ut) return Promise.resolve();
  var t = uA.documentElement.classList, r = function(c) {
    return t.add("".concat(op, "-").concat(c));
  }, n = function(c) {
    return t.remove("".concat(op, "-").concat(c));
  }, i = R.autoFetchSvg ? sr : sB.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(SI));
  i.includes("fa") || i.push("fa");
  var o = [".".concat($0, ":not([").concat(Vr, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(Vr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = ei(A.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    r("pending"), n("complete");
  else
    return Promise.resolve();
  var s = gB.begin("onTree"), l = a.reduce(function(u, c) {
    try {
      var f = lv(c);
      f && u.push(f);
    } catch (g) {
      V0 || g.name === "MissingIcon" && console.error(g);
    }
    return u;
  }, []);
  return new Promise(function(u, c) {
    Promise.all(l).then(function(f) {
      av(f, function() {
        r("active"), r("complete"), n("pending"), typeof e == "function" && e(), s(), u();
      });
    }).catch(function(f) {
      s(), c(f);
    });
  });
}
function LI(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  lv(A).then(function(t) {
    t && av([t], e);
  });
}
function bI(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : Bf(e || {}), n = t.mask;
    return n && (n = (n || {}).icon ? n : Bf(n || {})), A(r, k(k({}, t), {}, {
      mask: n
    }));
  };
}
var TI = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, n = r === void 0 ? Je : r, i = t.symbol, o = i === void 0 ? !1 : i, a = t.mask, s = a === void 0 ? null : a, l = t.maskId, u = l === void 0 ? null : l, c = t.title, f = c === void 0 ? null : c, g = t.titleId, p = g === void 0 ? null : g, w = t.classes, y = w === void 0 ? [] : w, B = t.attributes, d = B === void 0 ? {} : B, h = t.styles, m = h === void 0 ? {} : h;
  if (e) {
    var C = e.prefix, v = e.iconName, F = e.icon;
    return Ol(k({
      type: "icon"
    }, e), function() {
      return $r("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), R.autoA11y && (f ? d["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(p || Co()) : (d["aria-hidden"] = "true", d.focusable = "false")), BB({
        icons: {
          main: gf(F),
          mask: s ? gf(s.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: C,
        iconName: v,
        transform: k(k({}, Je), n),
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
}, kI = {
  mixout: function() {
    return {
      icon: bI(TI)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = wp, t.nodeCallback = LI, t;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(t) {
      var r = t.node, n = r === void 0 ? uA : r, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return wp(n, o);
    }, e.generateSvgReplacementMutation = function(t, r) {
      var n = r.iconName, i = r.title, o = r.titleId, a = r.prefix, s = r.transform, l = r.symbol, u = r.mask, c = r.maskId, f = r.extra;
      return new Promise(function(g, p) {
        Promise.all([pf(n, a), u.iconName ? pf(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var y = nB(w, 2), B = y[0], d = y[1];
          g([t, BB({
            icons: {
              main: B,
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
      var r = t.children, n = t.attributes, i = t.main, o = t.transform, a = t.styles, s = bl(a);
      s.length > 0 && (n.style = s);
      var l;
      return uB(o) && (l = Ct("generateAbstractTransformGrouping", {
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
}, OI = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.classes, i = n === void 0 ? [] : n;
        return Ol({
          type: "layer"
        }, function() {
          $r("beforeDOMElementCreation", {
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
              class: ["".concat(R.cssPrefix, "-layers")].concat(Ko(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, DI = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.title, i = n === void 0 ? null : n, o = r.classes, a = o === void 0 ? [] : o, s = r.attributes, l = s === void 0 ? {} : s, u = r.styles, c = u === void 0 ? {} : u;
        return Ol({
          type: "counter",
          content: t
        }, function() {
          return $r("beforeDOMElementCreation", {
            content: t,
            params: r
          }), gI({
            content: t.toString(),
            title: i,
            extra: {
              attributes: l,
              styles: c,
              classes: ["".concat(R.cssPrefix, "-layers-counter")].concat(Ko(a))
            }
          });
        });
      }
    };
  }
}, KI = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? Je : n, o = r.title, a = o === void 0 ? null : o, s = r.classes, l = s === void 0 ? [] : s, u = r.attributes, c = u === void 0 ? {} : u, f = r.styles, g = f === void 0 ? {} : f;
        return Ol({
          type: "text",
          content: t
        }, function() {
          return $r("beforeDOMElementCreation", {
            content: t,
            params: r
          }), fp({
            content: t,
            transform: k(k({}, Je), i),
            title: a,
            extra: {
              attributes: c,
              styles: g,
              classes: ["".concat(R.cssPrefix, "-layers-text")].concat(Ko(l))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(t, r) {
      var n = r.title, i = r.transform, o = r.extra, a = null, s = null;
      if (P0) {
        var l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        a = u.width / l, s = u.height / l;
      }
      return R.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, fp({
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
}, RI = new RegExp('"', "ug"), mp = [1105920, 1112319];
function NI(A) {
  var e = A.replace(RI, ""), t = ZE(e, 0), r = t >= mp[0] && t <= mp[1], n = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: cf(n ? e[0] : e),
    isSecondary: r || n
  };
}
function vp(A, e) {
  var t = "".concat(HE).concat(e.replace(":", "-"));
  return new Promise(function(r, n) {
    if (A.getAttribute(t) !== null)
      return r();
    var i = ei(A.children), o = i.filter(function(F) {
      return F.getAttribute(uf) === e;
    })[0], a = or.getComputedStyle(A, e), s = a.getPropertyValue("font-family").match(TE), l = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !s)
      return A.removeChild(o), r();
    if (s && u !== "none" && u !== "") {
      var c = a.getPropertyValue("content"), f = ~["Sharp"].indexOf(s[2]) ? CA : sA, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? wo[f][s[2].toLowerCase()] : kE[f][l], p = NI(c), w = p.value, y = p.isSecondary, B = s[0].startsWith("FontAwesome"), d = fB(g, w), h = d;
      if (B) {
        var m = iI(w);
        m.iconName && m.prefix && (d = m.iconName, g = m.prefix);
      }
      if (d && !y && (!o || o.getAttribute(oB) !== g || o.getAttribute(aB) !== h)) {
        A.setAttribute(t, h), o && A.removeChild(o);
        var C = xI(), v = C.extra;
        v.attributes[uf] = e, pf(d, g).then(function(F) {
          var U = BB(k(k({}, C), {}, {
            icons: {
              main: F,
              mask: dB()
            },
            prefix: g,
            iconName: h,
            extra: v,
            watchable: !0
          })), E = uA.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? A.insertBefore(E, A.firstChild) : A.appendChild(E), E.outerHTML = U.map(function(S) {
            return No(S);
          }).join(`
`), A.removeAttribute(t), r();
        }).catch(n);
      } else
        r();
    } else
      r();
  });
}
function MI(A) {
  return Promise.all([vp(A, "::before"), vp(A, "::after")]);
}
function PI(A) {
  return A.parentNode !== document.head && !~SE.indexOf(A.tagName.toUpperCase()) && !A.getAttribute(uf) && (!A.parentNode || A.parentNode.tagName !== "svg");
}
function Cp(A) {
  if (Ut)
    return new Promise(function(e, t) {
      var r = ei(A.querySelectorAll("*")).filter(PI).map(MI), n = gB.begin("searchPseudoElements");
      sv(), Promise.all(r).then(function() {
        n(), wf(), e();
      }).catch(function() {
        n(), wf(), t();
      });
    });
}
var _I = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = Cp, t;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(t) {
      var r = t.node, n = r === void 0 ? uA : r;
      R.searchPseudoElements && Cp(n);
    };
  }
}, Qp = !1, GI = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          sv(), Qp = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        pp(df("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        UI();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        Qp ? wf() : pp(df("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, yp = function(e) {
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
}, VI = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return yp(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-transform");
        return n && (t.transform = yp(n)), t;
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
      }, g = {
        outer: a,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: k({}, g.outer),
        children: [{
          tag: "g",
          attributes: k({}, g.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: k(k({}, r.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
}, Lu = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Fp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return A.attributes && (A.attributes.fill || e) && (A.attributes.fill = "black"), A;
}
function $I(A) {
  return A.tag === "g" ? A.children : [A];
}
var WI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-mask"), i = n ? kl(n.split(" ").map(function(o) {
          return o.trim();
        })) : dB();
        return i.prefix || (i.prefix = ar()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.mask, a = t.maskId, s = t.transform, l = i.width, u = i.icon, c = o.width, f = o.icon, g = $E({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), p = {
        tag: "rect",
        attributes: k(k({}, Lu), {}, {
          fill: "white"
        })
      }, w = u.children ? {
        children: u.children.map(Fp)
      } : {}, y = {
        tag: "g",
        attributes: k({}, g.inner),
        children: [Fp(k({
          tag: u.tag,
          attributes: k(k({}, u.attributes), g.path)
        }, w))]
      }, B = {
        tag: "g",
        attributes: k({}, g.outer),
        children: [y]
      }, d = "mask-".concat(a || Co()), h = "clip-".concat(a || Co()), m = {
        tag: "mask",
        attributes: k(k({}, Lu), {}, {
          id: d,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, B]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h
          },
          children: $I(f)
        }, m]
      };
      return r.push(C, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(d, ")")
        }, Lu)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, XI = {
  provides: function(e) {
    var t = !1;
    or.matchMedia && (t = or.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, zI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, YI = [zE, kI, OI, DI, KI, _I, GI, VI, WI, XI, zI];
sI(YI, {
  mixoutsTo: we
});
we.noAuto;
we.config;
we.library;
we.dom;
var mf = we.parse;
we.findIconDefinition;
we.toHtml;
var jI = we.icon;
we.layer;
we.text;
we.counter;
var uv = { exports: {} }, JI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ZI = JI, qI = ZI;
function cv() {
}
function fv() {
}
fv.resetWarningCache = cv;
var AH = function() {
  function A(r, n, i, o, a, s) {
    if (s !== qI) {
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
    checkPropTypes: fv,
    resetWarningCache: cv
  };
  return t.PropTypes = t, t;
};
uv.exports = AH();
var eH = uv.exports;
const z = /* @__PURE__ */ il(eH);
function Up(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(A, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ze(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Up(Object(t), !0).forEach(function(r) {
      Cn(A, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : Up(Object(t)).forEach(function(r) {
      Object.defineProperty(A, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return A;
}
function Ws(A) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ws(A);
}
function Cn(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function tH(A, e) {
  if (A == null) return {};
  var t = {}, r = Object.keys(A), n, i;
  for (i = 0; i < r.length; i++)
    n = r[i], !(e.indexOf(n) >= 0) && (t[n] = A[n]);
  return t;
}
function rH(A, e) {
  if (A == null) return {};
  var t = tH(A, e), r, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (n = 0; n < i.length; n++)
      r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(A, r) && (t[r] = A[r]);
  }
  return t;
}
function vf(A) {
  return nH(A) || iH(A) || oH(A) || aH();
}
function nH(A) {
  if (Array.isArray(A)) return Cf(A);
}
function iH(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function oH(A, e) {
  if (A) {
    if (typeof A == "string") return Cf(A, e);
    var t = Object.prototype.toString.call(A).slice(8, -1);
    if (t === "Object" && A.constructor && (t = A.constructor.name), t === "Map" || t === "Set") return Array.from(A);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Cf(A, e);
  }
}
function Cf(A, e) {
  (e == null || e > A.length) && (e = A.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
  return r;
}
function aH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sH(A) {
  var e, t = A.beat, r = A.fade, n = A.beatFade, i = A.bounce, o = A.shake, a = A.flash, s = A.spin, l = A.spinPulse, u = A.spinReverse, c = A.pulse, f = A.fixedWidth, g = A.inverse, p = A.border, w = A.listItem, y = A.flip, B = A.size, d = A.rotation, h = A.pull, m = (e = {
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
    "fa-inverse": g,
    "fa-border": p,
    "fa-li": w,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, Cn(e, "fa-".concat(B), typeof B < "u" && B !== null), Cn(e, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0), Cn(e, "fa-pull-".concat(h), typeof h < "u" && h !== null), Cn(e, "fa-swap-opacity", A.swapOpacity), e);
  return Object.keys(m).map(function(C) {
    return m[C] ? C : null;
  }).filter(function(C) {
    return C;
  });
}
function lH(A) {
  return A = A - 0, A === A;
}
function dv(A) {
  return lH(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  }), A.substr(0, 1).toLowerCase() + A.substr(1));
}
var uH = ["style"];
function cH(A) {
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function fH(A) {
  return A.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, t) {
    var r = t.indexOf(":"), n = dv(t.slice(0, r)), i = t.slice(r + 1).trim();
    return n.startsWith("webkit") ? e[cH(n)] = i : e[n] = i, e;
  }, {});
}
function Bv(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(s) {
    return Bv(A, s);
  }), n = Object.keys(e.attributes || {}).reduce(function(s, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        s.attrs.className = u, delete e.attributes.class;
        break;
      case "style":
        s.attrs.style = fH(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? s.attrs[l.toLowerCase()] = u : s.attrs[dv(l)] = u;
    }
    return s;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, a = rH(t, uH);
  return n.attrs.style = ze(ze({}, n.attrs.style), o), A.apply(void 0, [e.tag, ze(ze({}, n.attrs), a)].concat(vf(r)));
}
var gv = !1;
try {
  gv = !0;
} catch {
}
function dH() {
  if (!gv && console && typeof console.error == "function") {
    var A;
    (A = console).error.apply(A, arguments);
  }
}
function Ep(A) {
  if (A && Ws(A) === "object" && A.prefix && A.iconName && A.icon)
    return A;
  if (mf.icon)
    return mf.icon(A);
  if (A === null)
    return null;
  if (A && Ws(A) === "object" && A.prefix && A.iconName)
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
function bu(A, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Cn({}, A, e) : {};
}
var Ip = {
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
}, hB = /* @__PURE__ */ _.forwardRef(function(A, e) {
  var t = ze(ze({}, Ip), A), r = t.icon, n = t.mask, i = t.symbol, o = t.className, a = t.title, s = t.titleId, l = t.maskId, u = Ep(r), c = bu("classes", [].concat(vf(sH(t)), vf((o || "").split(" ")))), f = bu("transform", typeof t.transform == "string" ? mf.transform(t.transform) : t.transform), g = bu("mask", Ep(n)), p = jI(u, ze(ze(ze(ze({}, c), f), g), {}, {
    symbol: i,
    title: a,
    titleId: s,
    maskId: l
  }));
  if (!p)
    return dH("Could not find icon", u), null;
  var w = p.abstract, y = {
    ref: e
  };
  return Object.keys(t).forEach(function(B) {
    Ip.hasOwnProperty(B) || (y[B] = t[B]);
  }), BH(w[0], y);
});
hB.displayName = "FontAwesomeIcon";
hB.propTypes = {
  beat: z.bool,
  border: z.bool,
  beatFade: z.bool,
  bounce: z.bool,
  className: z.string,
  fade: z.bool,
  flash: z.bool,
  mask: z.oneOfType([z.object, z.array, z.string]),
  maskId: z.string,
  fixedWidth: z.bool,
  inverse: z.bool,
  flip: z.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: z.oneOfType([z.object, z.array, z.string]),
  listItem: z.bool,
  pull: z.oneOf(["right", "left"]),
  pulse: z.bool,
  rotation: z.oneOf([0, 90, 180, 270]),
  shake: z.bool,
  size: z.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: z.bool,
  spinPulse: z.bool,
  spinReverse: z.bool,
  symbol: z.oneOfType([z.bool, z.string]),
  title: z.string,
  titleId: z.string,
  transform: z.oneOfType([z.string, z.object]),
  swapOpacity: z.bool
};
var BH = Bv.bind(null, _.createElement), gH = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, pH = gH, ie = function() {
  return ie = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ie.apply(this, arguments);
};
function Qo(A, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || Array.prototype.slice.call(e));
}
var aA = "-ms-", $i = "-moz-", q = "-webkit-", pv = "comm", Dl = "rule", wB = "decl", hH = "@import", hv = "@keyframes", wH = "@layer", wv = Math.abs, mB = String.fromCharCode, Qf = Object.assign;
function mH(A, e) {
  return OA(A, 0) ^ 45 ? (((e << 2 ^ OA(A, 0)) << 2 ^ OA(A, 1)) << 2 ^ OA(A, 2)) << 2 ^ OA(A, 3) : 0;
}
function mv(A) {
  return A.trim();
}
function at(A, e) {
  return (A = e.exec(A)) ? A[0] : A;
}
function W(A, e, t) {
  return A.replace(e, t);
}
function ns(A, e, t) {
  return A.indexOf(e, t);
}
function OA(A, e) {
  return A.charCodeAt(e) | 0;
}
function Vn(A, e, t) {
  return A.slice(e, t);
}
function Ye(A) {
  return A.length;
}
function vv(A) {
  return A.length;
}
function Fi(A, e) {
  return e.push(A), A;
}
function vH(A, e) {
  return A.map(e).join("");
}
function Hp(A, e) {
  return A.filter(function(t) {
    return !at(t, e);
  });
}
var Kl = 1, $n = 1, Cv = 0, xe = 0, UA = 0, ti = "";
function Rl(A, e, t, r, n, i, o, a) {
  return { value: A, root: e, parent: t, type: r, props: n, children: i, line: Kl, column: $n, length: o, return: "", siblings: a };
}
function St(A, e) {
  return Qf(Rl("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function Jr(A) {
  for (; A.root; )
    A = St(A.root, { children: [A] });
  Fi(A, A.siblings);
}
function CH() {
  return UA;
}
function QH() {
  return UA = xe > 0 ? OA(ti, --xe) : 0, $n--, UA === 10 && ($n = 1, Kl--), UA;
}
function Pe() {
  return UA = xe < Cv ? OA(ti, xe++) : 0, $n++, UA === 10 && ($n = 1, Kl++), UA;
}
function Tr() {
  return OA(ti, xe);
}
function is() {
  return xe;
}
function Nl(A, e) {
  return Vn(ti, A, e);
}
function yf(A) {
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
function yH(A) {
  return Kl = $n = 1, Cv = Ye(ti = A), xe = 0, [];
}
function FH(A) {
  return ti = "", A;
}
function Tu(A) {
  return mv(Nl(xe - 1, Ff(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function UH(A) {
  for (; (UA = Tr()) && UA < 33; )
    Pe();
  return yf(A) > 2 || yf(UA) > 3 ? "" : " ";
}
function EH(A, e) {
  for (; --e && Pe() && !(UA < 48 || UA > 102 || UA > 57 && UA < 65 || UA > 70 && UA < 97); )
    ;
  return Nl(A, is() + (e < 6 && Tr() == 32 && Pe() == 32));
}
function Ff(A) {
  for (; Pe(); )
    switch (UA) {
      case A:
        return xe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Ff(UA);
        break;
      case 40:
        A === 41 && Ff(A);
        break;
      case 92:
        Pe();
        break;
    }
  return xe;
}
function IH(A, e) {
  for (; Pe() && A + UA !== 57; )
    if (A + UA === 84 && Tr() === 47)
      break;
  return "/*" + Nl(e, xe - 1) + "*" + mB(A === 47 ? A : Pe());
}
function HH(A) {
  for (; !yf(Tr()); )
    Pe();
  return Nl(A, xe);
}
function xH(A) {
  return FH(os("", null, null, null, [""], A = yH(A), 0, [0], A));
}
function os(A, e, t, r, n, i, o, a, s) {
  for (var l = 0, u = 0, c = o, f = 0, g = 0, p = 0, w = 1, y = 1, B = 1, d = 0, h = "", m = n, C = i, v = r, F = h; y; )
    switch (p = d, d = Pe()) {
      case 40:
        if (p != 108 && OA(F, c - 1) == 58) {
          ns(F += W(Tu(d), "&", "&\f"), "&\f", wv(l ? a[l - 1] : 0)) != -1 && (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        F += Tu(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += UH(p);
        break;
      case 92:
        F += EH(is() - 1, 7);
        continue;
      case 47:
        switch (Tr()) {
          case 42:
          case 47:
            Fi(SH(IH(Pe(), is()), e, t, s), s);
            break;
          default:
            F += "/";
        }
        break;
      case 123 * w:
        a[l++] = Ye(F) * B;
      case 125 * w:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            B == -1 && (F = W(F, /\f/g, "")), g > 0 && Ye(F) - c && Fi(g > 32 ? Sp(F + ";", r, t, c - 1, s) : Sp(W(F, " ", "") + ";", r, t, c - 2, s), s);
            break;
          case 59:
            F += ";";
          default:
            if (Fi(v = xp(F, e, t, l, u, n, a, h, m = [], C = [], c, i), i), d === 123)
              if (u === 0)
                os(F, e, v, v, m, i, c, a, C);
              else
                switch (f === 99 && OA(F, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    os(A, v, v, r && Fi(xp(A, v, v, 0, 0, n, a, h, n, m = [], c, C), C), n, C, c, a, r ? m : C);
                    break;
                  default:
                    os(F, v, v, v, [""], C, 0, a, C);
                }
        }
        l = u = g = 0, w = B = 1, h = F = "", c = o;
        break;
      case 58:
        c = 1 + Ye(F), g = p;
      default:
        if (w < 1) {
          if (d == 123)
            --w;
          else if (d == 125 && w++ == 0 && QH() == 125)
            continue;
        }
        switch (F += mB(d), d * w) {
          case 38:
            B = u > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            a[l++] = (Ye(F) - 1) * B, B = 1;
            break;
          case 64:
            Tr() === 45 && (F += Tu(Pe())), f = Tr(), u = c = Ye(h = F += HH(is())), d++;
            break;
          case 45:
            p === 45 && Ye(F) == 2 && (w = 0);
        }
    }
  return i;
}
function xp(A, e, t, r, n, i, o, a, s, l, u, c) {
  for (var f = n - 1, g = n === 0 ? i : [""], p = vv(g), w = 0, y = 0, B = 0; w < r; ++w)
    for (var d = 0, h = Vn(A, f + 1, f = wv(y = o[w])), m = A; d < p; ++d)
      (m = mv(y > 0 ? g[d] + " " + h : W(h, /&\f/g, g[d]))) && (s[B++] = m);
  return Rl(A, e, t, n === 0 ? Dl : a, s, l, u, c);
}
function SH(A, e, t, r) {
  return Rl(A, e, t, pv, mB(CH()), Vn(A, 2, -2), 0, r);
}
function Sp(A, e, t, r, n) {
  return Rl(A, e, t, wB, Vn(A, 0, r), Vn(A, r + 1, -1), r, n);
}
function Qv(A, e, t) {
  switch (mH(A, e)) {
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
      return $i + A + A;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + A + $i + A + aA + A + A;
    case 5936:
      switch (OA(A, e + 11)) {
        case 114:
          return q + A + aA + W(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
        case 108:
          return q + A + aA + W(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
        case 45:
          return q + A + aA + W(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
      }
    case 6828:
    case 4268:
    case 2903:
      return q + A + aA + A + A;
    case 6165:
      return q + A + aA + "flex-" + A + A;
    case 5187:
      return q + A + W(A, /(\w+).+(:[^]+)/, q + "box-$1$2" + aA + "flex-$1$2") + A;
    case 5443:
      return q + A + aA + "flex-item-" + W(A, /flex-|-self/g, "") + (at(A, /flex-|baseline/) ? "" : aA + "grid-row-" + W(A, /flex-|-self/g, "")) + A;
    case 4675:
      return q + A + aA + "flex-line-pack" + W(A, /align-content|flex-|-self/g, "") + A;
    case 5548:
      return q + A + aA + W(A, "shrink", "negative") + A;
    case 5292:
      return q + A + aA + W(A, "basis", "preferred-size") + A;
    case 6060:
      return q + "box-" + W(A, "-grow", "") + q + A + aA + W(A, "grow", "positive") + A;
    case 4554:
      return q + W(A, /([^-])(transform)/g, "$1" + q + "$2") + A;
    case 6187:
      return W(W(W(A, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), A, "") + A;
    case 5495:
    case 3959:
      return W(A, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return W(W(A, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + aA + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + A + A;
    case 4200:
      if (!at(A, /flex-|baseline/)) return aA + "grid-column-align" + Vn(A, e) + A;
      break;
    case 2592:
    case 3360:
      return aA + W(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(r, n) {
        return e = n, at(r.props, /grid-\w+-end/);
      }) ? ~ns(A + (t = t[e].value), "span", 0) ? A : aA + W(A, "-start", "") + A + aA + "grid-row-span:" + (~ns(t, "span", 0) ? at(t, /\d+/) : +at(t, /\d+/) - +at(A, /\d+/)) + ";" : aA + W(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return at(r.props, /grid-\w+-start/);
      }) ? A : aA + W(W(A, "-end", "-span"), "span ", "") + A;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(A, /(.+)-inline(.+)/, q + "$1$2") + A;
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
        switch (OA(A, e + 1)) {
          case 109:
            if (OA(A, e + 4) !== 45)
              break;
          case 102:
            return W(A, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + $i + (OA(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ns(A, "stretch", 0) ? Qv(W(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return W(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, n, i, o, a, s, l) {
        return aA + n + ":" + i + l + (o ? aA + n + "-span:" + (a ? s : +s - +i) + l : "") + A;
      });
    case 4949:
      if (OA(A, e + 6) === 121)
        return W(A, ":", ":" + q) + A;
      break;
    case 6444:
      switch (OA(A, OA(A, 14) === 45 ? 18 : 11)) {
        case 120:
          return W(A, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + q + (OA(A, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + aA + "$2box$3") + A;
        case 100:
          return W(A, ":", ":" + aA) + A;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return W(A, "scroll-", "scroll-snap-") + A;
  }
  return A;
}
function Xs(A, e) {
  for (var t = "", r = 0; r < A.length; r++)
    t += e(A[r], r, A, e) || "";
  return t;
}
function LH(A, e, t, r) {
  switch (A.type) {
    case wH:
      if (A.children.length) break;
    case hH:
    case wB:
      return A.return = A.return || A.value;
    case pv:
      return "";
    case hv:
      return A.return = A.value + "{" + Xs(A.children, r) + "}";
    case Dl:
      if (!Ye(A.value = A.props.join(","))) return "";
  }
  return Ye(t = Xs(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
}
function bH(A) {
  var e = vv(A);
  return function(t, r, n, i) {
    for (var o = "", a = 0; a < e; a++)
      o += A[a](t, r, n, i) || "";
    return o;
  };
}
function TH(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function kH(A, e, t, r) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case wB:
        A.return = Qv(A.value, A.length, t);
        return;
      case hv:
        return Xs([St(A, { value: W(A.value, "@", "@" + q) })], r);
      case Dl:
        if (A.length)
          return vH(t = A.props, function(n) {
            switch (at(n, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Jr(St(A, { props: [W(n, /:(read-\w+)/, ":" + $i + "$1")] })), Jr(St(A, { props: [n] })), Qf(A, { props: Hp(t, r) });
                break;
              case "::placeholder":
                Jr(St(A, { props: [W(n, /:(plac\w+)/, ":" + q + "input-$1")] })), Jr(St(A, { props: [W(n, /:(plac\w+)/, ":" + $i + "$1")] })), Jr(St(A, { props: [W(n, /:(plac\w+)/, aA + "input-$1")] })), Jr(St(A, { props: [n] })), Qf(A, { props: Hp(t, r) });
                break;
            }
            return "";
          });
    }
}
var OH = {
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
}, Wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", yv = "active", Fv = "data-styled-version", Ml = "6.1.11", vB = `/*!sc*/
`, CB = typeof window < "u" && "HTMLElement" in window, DH = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Pl = Object.freeze([]), Xn = Object.freeze({});
function KH(A, e, t) {
  return t === void 0 && (t = Xn), A.theme !== t.theme && A.theme || e || t.theme;
}
var Uv = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), RH = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, NH = /(^-|-$)/g;
function Lp(A) {
  return A.replace(RH, "-").replace(NH, "");
}
var MH = /(a)(d)/gi, wa = 52, bp = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function Uf(A) {
  var e, t = "";
  for (e = Math.abs(A); e > wa; e = e / wa | 0) t = bp(e % wa) + t;
  return (bp(e % wa) + t).replace(MH, "$1-$2");
}
var ku, Ev = 5381, Qn = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, Iv = function(A) {
  return Qn(Ev, A);
};
function Hv(A) {
  return Uf(Iv(A) >>> 0);
}
function PH(A) {
  return A.displayName || A.name || "Component";
}
function Ou(A) {
  return typeof A == "string" && !0;
}
var xv = typeof Symbol == "function" && Symbol.for, Sv = xv ? Symbol.for("react.memo") : 60115, _H = xv ? Symbol.for("react.forward_ref") : 60112, GH = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, VH = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Lv = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, $H = ((ku = {})[_H] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ku[Sv] = Lv, ku);
function Tp(A) {
  return ("type" in (e = A) && e.type.$$typeof) === Sv ? Lv : "$$typeof" in A ? $H[A.$$typeof] : GH;
  var e;
}
var WH = Object.defineProperty, XH = Object.getOwnPropertyNames, kp = Object.getOwnPropertySymbols, zH = Object.getOwnPropertyDescriptor, YH = Object.getPrototypeOf, Op = Object.prototype;
function bv(A, e, t) {
  if (typeof e != "string") {
    if (Op) {
      var r = YH(e);
      r && r !== Op && bv(A, r, t);
    }
    var n = XH(e);
    kp && (n = n.concat(kp(e)));
    for (var i = Tp(A), o = Tp(e), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in VH || t && t[s] || o && s in o || i && s in i)) {
        var l = zH(e, s);
        try {
          WH(A, s, l);
        } catch {
        }
      }
    }
  }
  return A;
}
function zn(A) {
  return typeof A == "function";
}
function QB(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function Ir(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function Ef(A, e) {
  if (A.length === 0) return "";
  for (var t = A[0], r = 1; r < A.length; r++) t += A[r];
  return t;
}
function yo(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function If(A, e, t) {
  if (t === void 0 && (t = !1), !t && !yo(A) && !Array.isArray(A)) return e;
  if (Array.isArray(e)) for (var r = 0; r < e.length; r++) A[r] = If(A[r], e[r]);
  else if (yo(e)) for (var r in e) A[r] = If(A[r], e[r]);
  return A;
}
function yB(A, e) {
  Object.defineProperty(A, "toString", { value: e });
}
function Mo(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var jH = function() {
  function A(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return A.prototype.indexOfGroup = function(e) {
    for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var r = this.groupSizes, n = r.length, i = n; e >= i; ) if ((i <<= 1) < 0) throw Mo(16, "".concat(e));
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
    for (var r = this.groupSizes[e], n = this.indexOfGroup(e), i = n + r, o = n; o < i; o++) t += "".concat(this.tag.getRule(o)).concat(vB);
    return t;
  }, A;
}(), as = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), ss = 1, ma = function(A) {
  if (as.has(A)) return as.get(A);
  for (; zs.has(ss); ) ss++;
  var e = ss++;
  return as.set(A, e), zs.set(e, A), e;
}, JH = function(A, e) {
  ss = e + 1, as.set(A, e), zs.set(e, A);
}, ZH = "style[".concat(Wn, "][").concat(Fv, '="').concat(Ml, '"]'), qH = new RegExp("^".concat(Wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ax = function(A, e, t) {
  for (var r, n = t.split(","), i = 0, o = n.length; i < o; i++) (r = n[i]) && A.registerName(e, r);
}, ex = function(A, e) {
  for (var t, r = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(vB), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(qH);
      if (s) {
        var l = 0 | parseInt(s[1], 10), u = s[2];
        l !== 0 && (JH(u, l), Ax(A, u, s[3]), A.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function tx() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Tv = function(A) {
  var e = document.head, t = A || e, r = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(Wn, "]")));
    return s[s.length - 1];
  }(t), i = n !== void 0 ? n.nextSibling : null;
  r.setAttribute(Wn, yv), r.setAttribute(Fv, Ml);
  var o = tx();
  return o && r.setAttribute("nonce", o), t.insertBefore(r, i), r;
}, rx = function() {
  function A(e) {
    this.element = Tv(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, n = 0, i = r.length; n < i; n++) {
        var o = r[n];
        if (o.ownerNode === t) return o;
      }
      throw Mo(17);
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
}(), nx = function() {
  function A(e) {
    this.element = Tv(e), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ix = function() {
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
}(), Dp = CB, ox = { isServer: !CB, useCSSOMInjection: !DH }, kv = function() {
  function A(e, t, r) {
    e === void 0 && (e = Xn), t === void 0 && (t = {});
    var n = this;
    this.options = ie(ie({}, ox), e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && CB && Dp && (Dp = !1, function(i) {
      for (var o = document.querySelectorAll(ZH), a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        l && l.getAttribute(Wn) !== yv && (ex(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), yB(this, function() {
      return function(i) {
        for (var o = i.getTag(), a = o.length, s = "", l = function(c) {
          var f = function(B) {
            return zs.get(B);
          }(c);
          if (f === void 0) return "continue";
          var g = i.names.get(f), p = o.getGroup(c);
          if (g === void 0 || p.length === 0) return "continue";
          var w = "".concat(Wn, ".g").concat(c, '[id="').concat(f, '"]'), y = "";
          g !== void 0 && g.forEach(function(B) {
            B.length > 0 && (y += "".concat(B, ","));
          }), s += "".concat(p).concat(w, '{content:"').concat(y, '"}').concat(vB);
        }, u = 0; u < a; u++) l(u);
        return s;
      }(n);
    });
  }
  return A.registerId = function(e) {
    return ma(e);
  }, A.prototype.reconstructWithOptions = function(e, t) {
    return t === void 0 && (t = !0), new A(ie(ie({}, this.options), e), this.gs, t && this.names || void 0);
  }, A.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, A.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(t) {
      var r = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new ix(n) : r ? new rx(n) : new nx(n);
    }(this.options), new jH(e)));
    var e;
  }, A.prototype.hasNameForId = function(e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, A.prototype.registerName = function(e, t) {
    if (ma(e), this.names.has(e)) this.names.get(e).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(e, r);
    }
  }, A.prototype.insertRules = function(e, t, r) {
    this.registerName(e, t), this.getTag().insertRules(ma(e), r);
  }, A.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, A.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ma(e)), this.clearNames(e);
  }, A.prototype.clearTag = function() {
    this.tag = void 0;
  }, A;
}(), ax = /&/g, sx = /^\s*\/\/.*$/gm;
function Ov(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ov(t.children, e)), t;
  });
}
function lx(A) {
  var e, t, r, n = Xn, i = n.options, o = i === void 0 ? Xn : i, a = n.plugins, s = a === void 0 ? Pl : a, l = function(f, g, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, u = s.slice();
  u.push(function(f) {
    f.type === Dl && f.value.includes("&") && (f.props[0] = f.props[0].replace(ax, t).replace(r, l));
  }), o.prefix && u.push(kH), u.push(LH);
  var c = function(f, g, p, w) {
    g === void 0 && (g = ""), p === void 0 && (p = ""), w === void 0 && (w = "&"), e = w, t = g, r = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(sx, ""), B = xH(p || g ? "".concat(p, " ").concat(g, " { ").concat(y, " }") : y);
    o.namespace && (B = Ov(B, o.namespace));
    var d = [];
    return Xs(B, bH(u.concat(TH(function(h) {
      return d.push(h);
    })))), d;
  };
  return c.hash = s.length ? s.reduce(function(f, g) {
    return g.name || Mo(15), Qn(f, g.name);
  }, Ev).toString() : "", c;
}
var ux = new kv(), Hf = lx(), Dv = _.createContext({ shouldForwardProp: void 0, styleSheet: ux, stylis: Hf });
Dv.Consumer;
_.createContext(void 0);
function Kp() {
  return Q.useContext(Dv);
}
var Kv = function() {
  function A(e, t) {
    var r = this;
    this.inject = function(n, i) {
      i === void 0 && (i = Hf);
      var o = r.name + i.hash;
      n.hasNameForId(r.id, o) || n.insertRules(r.id, o, i(r.rules, o, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, yB(this, function() {
      throw Mo(12, String(r.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = Hf), this.name + e.hash;
  }, A;
}(), cx = function(A) {
  return A >= "A" && A <= "Z";
};
function Rp(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var r = A[t];
    if (t === 1 && r === "-" && A[0] === "-") return A;
    cx(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Rv = function(A) {
  return A == null || A === !1 || A === "";
}, Nv = function(A) {
  var e, t, r = [];
  for (var n in A) {
    var i = A[n];
    A.hasOwnProperty(n) && !Rv(i) && (Array.isArray(i) && i.isCss || zn(i) ? r.push("".concat(Rp(n), ":"), i, ";") : yo(i) ? r.push.apply(r, Qo(Qo(["".concat(n, " {")], Nv(i), !1), ["}"], !1)) : r.push("".concat(Rp(n), ": ").concat((e = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in OH || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function kr(A, e, t, r) {
  if (Rv(A)) return [];
  if (QB(A)) return [".".concat(A.styledComponentId)];
  if (zn(A)) {
    if (!zn(i = A) || i.prototype && i.prototype.isReactComponent || !e) return [A];
    var n = A(e);
    return kr(n, e, t, r);
  }
  var i;
  return A instanceof Kv ? t ? (A.inject(t, r), [A.getName(r)]) : [A] : yo(A) ? Nv(A) : Array.isArray(A) ? Array.prototype.concat.apply(Pl, A.map(function(o) {
    return kr(o, e, t, r);
  })) : [A.toString()];
}
function fx(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (zn(t) && !QB(t)) return !1;
  }
  return !0;
}
var dx = Iv(Ml), Bx = function() {
  function A(e, t, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && fx(e), this.componentId = t, this.baseHash = Qn(dx, t), this.baseStyle = r, kv.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, r) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = Ir(n, this.staticRulesId);
    else {
      var i = Ef(kr(this.rules, e, t, r)), o = Uf(Qn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, o)) {
        var a = r(i, ".".concat(o), void 0, this.componentId);
        t.insertRules(this.componentId, o, a);
      }
      n = Ir(n, o), this.staticRulesId = o;
    }
    else {
      for (var s = Qn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var c = this.rules[u];
        if (typeof c == "string") l += c;
        else if (c) {
          var f = Ef(kr(c, e, t, r));
          s = Qn(s, f + u), l += f;
        }
      }
      if (l) {
        var g = Uf(s >>> 0);
        t.hasNameForId(this.componentId, g) || t.insertRules(this.componentId, g, r(l, ".".concat(g), void 0, this.componentId)), n = Ir(n, g);
      }
    }
    return n;
  }, A;
}(), Mv = _.createContext(void 0);
Mv.Consumer;
var Du = {};
function gx(A, e, t) {
  var r = QB(A), n = A, i = !Ou(A), o = e.attrs, a = o === void 0 ? Pl : o, s = e.componentId, l = s === void 0 ? function(m, C) {
    var v = typeof m != "string" ? "sc" : Lp(m);
    Du[v] = (Du[v] || 0) + 1;
    var F = "".concat(v, "-").concat(Hv(Ml + v + Du[v]));
    return C ? "".concat(C, "-").concat(F) : F;
  }(e.displayName, e.parentComponentId) : s, u = e.displayName, c = u === void 0 ? function(m) {
    return Ou(m) ? "styled.".concat(m) : "Styled(".concat(PH(m), ")");
  }(A) : u, f = e.displayName && e.componentId ? "".concat(Lp(e.displayName), "-").concat(e.componentId) : e.componentId || l, g = r && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = e.shouldForwardProp;
  if (r && n.shouldForwardProp) {
    var w = n.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      p = function(m, C) {
        return w(m, C) && y(m, C);
      };
    } else p = w;
  }
  var B = new Bx(t, f, r ? n.componentStyle : void 0);
  function d(m, C) {
    return function(v, F, U) {
      var E = v.attrs, S = v.componentStyle, P = v.defaultProps, N = v.foldedComponentIds, D = v.styledComponentId, G = v.target, J = _.useContext(Mv), $ = Kp(), K = v.shouldForwardProp || $.shouldForwardProp, I = KH(F, J, P) || Xn, x = function(gA, rA, zA) {
        for (var ni, Br = ie(ie({}, rA), { className: void 0, theme: zA }), Zl = 0; Zl < gA.length; Zl += 1) {
          var Go = zn(ni = gA[Zl]) ? ni(Br) : ni;
          for (var Et in Go) Br[Et] = Et === "className" ? Ir(Br[Et], Go[Et]) : Et === "style" ? ie(ie({}, Br[Et]), Go[Et]) : Go[Et];
        }
        return rA.className && (Br.className = Ir(Br.className, rA.className)), Br;
      }(E, F, I), L = x.as || G, M = {};
      for (var X in x) x[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && x.theme === I || (X === "forwardedAs" ? M.as = x.forwardedAs : K && !K(X, L) || (M[X] = x[X]));
      var dA = function(gA, rA) {
        var zA = Kp(), ni = gA.generateAndInjectStyles(rA, zA.styleSheet, zA.stylis);
        return ni;
      }(S, x), BA = Ir(N, D);
      return dA && (BA += " " + dA), x.className && (BA += " " + x.className), M[Ou(L) && !Uv.has(L) ? "class" : "className"] = BA, M.ref = U, Q.createElement(L, M);
    }(h, m, C);
  }
  d.displayName = c;
  var h = _.forwardRef(d);
  return h.attrs = g, h.componentStyle = B, h.displayName = c, h.shouldForwardProp = p, h.foldedComponentIds = r ? Ir(n.foldedComponentIds, n.styledComponentId) : "", h.styledComponentId = f, h.target = r ? n.target : A, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = r ? function(C) {
      for (var v = [], F = 1; F < arguments.length; F++) v[F - 1] = arguments[F];
      for (var U = 0, E = v; U < E.length; U++) If(C, E[U], !0);
      return C;
    }({}, n.defaultProps, m) : m;
  } }), yB(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && bv(h, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Np(A, e) {
  for (var t = [A[0]], r = 0, n = e.length; r < n; r += 1) t.push(e[r], A[r + 1]);
  return t;
}
var Mp = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function Pv(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  if (zn(A) || yo(A)) return Mp(kr(Np(Pl, Qo([A], e, !0))));
  var r = A;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? kr(r) : Mp(kr(Np(r, e)));
}
function xf(A, e, t) {
  if (t === void 0 && (t = Xn), !e) throw Mo(1, e);
  var r = function(n) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return A(e, t, Pv.apply(void 0, Qo([n], i, !1)));
  };
  return r.attrs = function(n) {
    return xf(A, e, ie(ie({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, r.withConfig = function(n) {
    return xf(A, e, ie(ie({}, t), n));
  }, r;
}
var _v = function(A) {
  return xf(gx, A);
}, Yr = _v;
Uv.forEach(function(A) {
  Yr[A] = _v(A);
});
function FB(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var r = Ef(Pv.apply(void 0, Qo([A], e, !1))), n = Hv(r);
  return new Kv(n, r);
}
const px = "#4fa94d", hx = {
  "aria-busy": !0,
  role: "progressbar"
}, wx = Yr.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, mx = "http://www.w3.org/2000/svg", Te = 242.776657104492, vx = 1.6, Cx = FB`
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
Yr.path`
  stroke-dasharray: ${Te * 0.01}px, ${Te};
  stroke-dashoffset: 0;
  animation: ${Cx} ${vx}s linear infinite;
`;
const Qx = FB`
to {
   transform: rotate(360deg);
 }
`;
Yr.svg`
  animation: ${Qx} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
Yr.polyline`
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
const yx = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: r = 1, color: n = px, ariaLabel: i = "tail-spin-loading", wrapperStyle: o, wrapperClass: a, visible: s = !0 }) => {
  const l = parseInt(String(t)), u = l + 36, c = l / 2, f = c + parseInt(String(r)) - 1;
  return /* @__PURE__ */ V.jsx(wx, {
    style: o,
    $visible: s,
    className: a,
    "data-testid": "tail-spin-loading",
    "aria-label": i,
    ...hx,
    children: /* @__PURE__ */ V.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${u} ${u}`,
      xmlns: mx,
      "data-testid": "tail-spin-svg",
      children: [
        /* @__PURE__ */ V.jsx("defs", {
          children: /* @__PURE__ */ V.jsxs("linearGradient", {
            x1: "8.042%",
            y1: "0%",
            x2: "65.682%",
            y2: "23.865%",
            id: "a",
            children: [
              /* @__PURE__ */ V.jsx("stop", {
                stopColor: n,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ V.jsx("stop", {
                stopColor: n,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ V.jsx("stop", {
                stopColor: n,
                offset: "100%"
              })
            ]
          })
        }),
        /* @__PURE__ */ V.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ V.jsxs("g", {
            transform: `translate(${c} ${c})`,
            children: [
              /* @__PURE__ */ V.jsx("path", {
                d: "M36 18c0-9.94-8.06-18-18-18",
                id: "Oval-2",
                stroke: n,
                strokeWidth: t,
                children: /* @__PURE__ */ V.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              }),
              /* @__PURE__ */ V.jsx("circle", {
                fill: "#fff",
                cx: "36",
                cy: "18",
                r: f,
                children: /* @__PURE__ */ V.jsx("animateTransform", {
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
}, Fx = FB`
to {
   stroke-dashoffset: 136;
 }
`;
Yr.polygon`
  stroke-dasharray: 17;
  animation: ${Fx} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Yr.svg`
  transform-origin: 50% 65%;
`;
var Gv = { exports: {} };
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
})(Gv);
var Ux = Gv.exports;
const Vv = /* @__PURE__ */ il(Ux);
function Ex({
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
  return /* @__PURE__ */ V.jsx(O0, { show: A, appear: !0, children: /* @__PURE__ */ V.jsx(hE, { className: Ht.dialog, onClose: s, children: /* @__PURE__ */ V.jsxs("form", { onSubmit: a, "data-isgandalf": !0, children: [
    /* @__PURE__ */ V.jsx(
      po,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ V.jsx("div", { className: Ht.overlay })
      }
    ),
    /* @__PURE__ */ V.jsx("div", { className: Ht.container, children: /* @__PURE__ */ V.jsx(
      po,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ V.jsx(D0, { className: Ht.dialogPanel, children: /* @__PURE__ */ V.jsxs(
          "div",
          {
            className: Vv(Ht.inputWrapper, {
              [Ht.loading]: t
            }),
            children: [
              /* @__PURE__ */ V.jsx(
                hB,
                {
                  icon: pH,
                  className: Ht.searchIcon,
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ V.jsx(
                "input",
                {
                  "data-autofocus": !0,
                  type: "text",
                  autoFocus: !0,
                  className: Ht.inputField,
                  placeholder: "What do you want to do in the app?",
                  onChange: o,
                  value: e
                }
              ),
              t && /* @__PURE__ */ V.jsx(
                yx,
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
const Ix = "_container_1976i_1", Hx = "_widgetButton_1976i_10", xx = "_buttonContentWrapper_1976i_25", Sx = "_buttonContent_1976i_25", Lx = "_withComplete_1976i_45", bx = "_loading_1976i_68", Tx = "_gradientShift_1976i_1", kx = "_containerRotate_1976i_1", Ox = "_waitingForUser_1976i_81", Dx = "_pulse_1976i_1", Kx = "_arrow_1976i_112", Rx = "_outerContainer_1976i_121", Nx = "_floatingPopover_1976i_135", Mx = "_elasticPopIn_1976i_1", Px = "_popoverLoadingOuter_1976i_153", _x = "_popoverLoading_1976i_153", Gx = "_options_1976i_180", Vx = "_optionPane_1976i_191", $x = "_optionAppear_1976i_1", Wx = "_stateText_1976i_213", Xx = "_optionsButton_1976i_217", HA = {
  container: Ix,
  widgetButton: Hx,
  buttonContentWrapper: xx,
  buttonContent: Sx,
  withComplete: Lx,
  loading: bx,
  gradientShift: Tx,
  containerRotate: kx,
  waitingForUser: Ox,
  pulse: Dx,
  arrow: Kx,
  outerContainer: Rx,
  floatingPopover: Nx,
  elasticPopIn: Mx,
  popoverLoadingOuter: Px,
  popoverLoading: _x,
  options: Gx,
  optionPane: Vx,
  optionAppear: $x,
  stateText: Wx,
  optionsButton: Xx
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
var Sf = function(A, e) {
  return Sf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Sf(A, e);
};
function Ve(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Sf(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Lf = function() {
  return Lf = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Lf.apply(this, arguments);
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
function va(A, e, t) {
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
), _l = function(A, e) {
  return Qt.fromClientRect(A, e.getBoundingClientRect());
}, zx = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Qt(0, 0, r, n);
}, Gl = function(A) {
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
}, Pp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yx = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ca = 0; Ca < Pp.length; Ca++)
  Yx[Pp.charCodeAt(Ca)] = Ca;
var _p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ui = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Qa = 0; Qa < _p.length; Qa++)
  Ui[_p.charCodeAt(Qa)] = Qa;
var jx = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Ui[A.charCodeAt(r)], o = Ui[A.charCodeAt(r + 1)], a = Ui[A.charCodeAt(r + 2)], s = Ui[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, Jx = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Zx = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Or = 5, UB = 11, Ku = 2, qx = UB - Or, $v = 65536 >> Or, A4 = 1 << Or, Ru = A4 - 1, e4 = 1024 >> Or, t4 = $v + e4, r4 = t4, n4 = 32, i4 = r4 + n4, o4 = 65536 >> UB, a4 = 1 << qx, s4 = a4 - 1, Gp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, l4 = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, u4 = function(A, e) {
  var t = jx(A), r = Array.isArray(t) ? Zx(t) : new Uint32Array(t), n = Array.isArray(t) ? Jx(t) : new Uint16Array(t), i = 24, o = Gp(n, i / 2, r[4] / 2), a = r[5] === 2 ? Gp(n, (i + r[4]) / 2) : l4(r, Math.ceil((i + r[4]) / 4));
  return new c4(r[0], r[1], r[2], r[3], o, a);
}, c4 = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Or], t = (t << Ku) + (e & Ru), this.data[t];
        if (e <= 65535)
          return t = this.index[$v + (e - 55296 >> Or)], t = (t << Ku) + (e & Ru), this.data[t];
        if (e < this.highStart)
          return t = i4 - o4 + (e >> UB), t = this.index[t], t += e >> Or & s4, t = this.index[t], t = (t << Ku) + (e & Ru), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), Vp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ya = 0; ya < Vp.length; ya++)
  f4[Vp.charCodeAt(ya)] = ya;
var d4 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", $p = 50, B4 = 1, Wv = 2, Xv = 3, g4 = 4, p4 = 5, Wp = 7, zv = 8, Xp = 9, _t = 10, bf = 11, zp = 12, Tf = 13, h4 = 14, Ei = 15, kf = 16, Fa = 17, Bi = 18, w4 = 19, Yp = 20, Of = 21, gi = 22, Nu = 23, Zr = 24, ue = 25, Ii = 26, Hi = 27, qr = 28, m4 = 29, vr = 30, v4 = 31, Ua = 32, Ea = 33, Df = 34, Kf = 35, Rf = 36, Fo = 37, Nf = 38, ls = 39, us = 40, Mu = 41, Yv = 42, C4 = 43, Q4 = [9001, 65288], jv = "!", j = "×", Ia = "÷", Mf = u4(d4), nt = [vr, Rf], Pf = [B4, Wv, Xv, p4], Jv = [_t, zv], jp = [Hi, Ii], y4 = Pf.concat(Jv), Jp = [Nf, ls, us, Df, Kf], F4 = [Ei, Tf], U4 = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(i, o) {
    var a = Mf.get(i);
    if (a > $p ? (n.push(!0), a -= $p) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(o), t.push(kf);
    if (a === g4 || a === bf) {
      if (o === 0)
        return r.push(o), t.push(vr);
      var s = t[o - 1];
      return y4.indexOf(s) === -1 ? (r.push(r[o - 1]), t.push(s)) : (r.push(o), t.push(vr));
    }
    if (r.push(o), a === v4)
      return t.push(e === "strict" ? Of : Fo);
    if (a === Yv || a === m4)
      return t.push(vr);
    if (a === C4)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Fo) : t.push(vr);
    t.push(a);
  }), [r, t, n];
}, Pu = function(A, e, t, r) {
  var n = r[t];
  if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
    for (var i = t; i <= r.length; ) {
      i++;
      var o = r[i];
      if (o === e)
        return !0;
      if (o !== _t)
        break;
    }
  if (n === _t)
    for (var i = t; i > 0; ) {
      i--;
      var a = r[i];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
        for (var s = t; s <= r.length; ) {
          s++;
          var o = r[s];
          if (o === e)
            return !0;
          if (o !== _t)
            break;
        }
      if (a !== _t)
        break;
    }
  return !1;
}, Zp = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === _t)
      t--;
    else
      return r;
  }
  return 0;
}, E4 = function(A, e, t, r, n) {
  if (t[r] === 0)
    return j;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return j;
  var o = i - 1, a = i + 1, s = e[i], l = o >= 0 ? e[o] : 0, u = e[a];
  if (s === Wv && u === Xv)
    return j;
  if (Pf.indexOf(s) !== -1)
    return jv;
  if (Pf.indexOf(u) !== -1 || Jv.indexOf(u) !== -1)
    return j;
  if (Zp(i, e) === zv)
    return Ia;
  if (Mf.get(A[i]) === bf || (s === Ua || s === Ea) && Mf.get(A[a]) === bf || s === Wp || u === Wp || s === Xp || [_t, Tf, Ei].indexOf(s) === -1 && u === Xp || [Fa, Bi, w4, Zr, qr].indexOf(u) !== -1 || Zp(i, e) === gi || Pu(Nu, gi, i, e) || Pu([Fa, Bi], Of, i, e) || Pu(zp, zp, i, e))
    return j;
  if (s === _t)
    return Ia;
  if (s === Nu || u === Nu)
    return j;
  if (u === kf || s === kf)
    return Ia;
  if ([Tf, Ei, Of].indexOf(u) !== -1 || s === h4 || l === Rf && F4.indexOf(s) !== -1 || s === qr && u === Rf || u === Yp || nt.indexOf(u) !== -1 && s === ue || nt.indexOf(s) !== -1 && u === ue || s === Hi && [Fo, Ua, Ea].indexOf(u) !== -1 || [Fo, Ua, Ea].indexOf(s) !== -1 && u === Ii || nt.indexOf(s) !== -1 && jp.indexOf(u) !== -1 || jp.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Hi, Ii].indexOf(s) !== -1 && (u === ue || [gi, Ei].indexOf(u) !== -1 && e[a + 1] === ue) || // ( OP | HY ) × NU
  [gi, Ei].indexOf(s) !== -1 && u === ue || // NU ×	(NU | SY | IS)
  s === ue && [ue, qr, Zr].indexOf(u) !== -1)
    return j;
  if ([ue, qr, Zr, Fa, Bi].indexOf(u) !== -1)
    for (var c = i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return j;
      if ([qr, Zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([Hi, Ii].indexOf(u) !== -1)
    for (var c = [Fa, Bi].indexOf(s) !== -1 ? o : i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return j;
      if ([qr, Zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (Nf === s && [Nf, ls, Df, Kf].indexOf(u) !== -1 || [ls, Df].indexOf(s) !== -1 && [ls, us].indexOf(u) !== -1 || [us, Kf].indexOf(s) !== -1 && u === us || Jp.indexOf(s) !== -1 && [Yp, Ii].indexOf(u) !== -1 || Jp.indexOf(u) !== -1 && s === Hi || nt.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || s === Zr && nt.indexOf(u) !== -1 || nt.concat(ue).indexOf(s) !== -1 && u === gi && Q4.indexOf(A[a]) === -1 || nt.concat(ue).indexOf(u) !== -1 && s === Bi)
    return j;
  if (s === Mu && u === Mu) {
    for (var g = t[i], p = 1; g > 0 && (g--, e[g] === Mu); )
      p++;
    if (p % 2 !== 0)
      return j;
  }
  return s === Ua && u === Ea ? j : Ia;
}, I4 = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = U4(A, e.lineBreak), r = t[0], n = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
    return [ue, vr, Yv].indexOf(a) !== -1 ? Fo : a;
  }));
  var o = e.wordBreak === "keep-all" ? i.map(function(a, s) {
    return a && A[s] >= 19968 && A[s] <= 40959;
  }) : void 0;
  return [r, n, o];
}, H4 = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === jv, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return yA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), x4 = function(A, e) {
  var t = Gl(A), r = I4(t, e), n = r[0], i = r[1], o = r[2], a = t.length, s = 0, l = 0;
  return {
    next: function() {
      if (l >= a)
        return { done: !0, value: null };
      for (var u = j; l < a && (u = E4(t, i, n, ++l, o)) === j; )
        ;
      if (u !== j || l === a) {
        var c = new H4(t, u, s, l);
        return s = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, S4 = 1, L4 = 2, Po = 4, qp = 8, Ys = 10, Ah = 47, Wi = 92, b4 = 9, T4 = 32, Ha = 34, pi = 61, k4 = 35, O4 = 36, D4 = 37, xa = 39, Sa = 40, hi = 41, K4 = 95, ee = 45, R4 = 33, N4 = 60, M4 = 62, P4 = 64, _4 = 91, G4 = 93, V4 = 61, $4 = 123, La = 63, W4 = 125, eh = 124, X4 = 126, z4 = 128, th = 65533, _u = 42, Hr = 43, Y4 = 44, j4 = 58, J4 = 59, Uo = 46, Z4 = 0, q4 = 8, AS = 11, eS = 14, tS = 31, rS = 127, We = -1, Zv = 48, qv = 97, AC = 101, nS = 102, iS = 117, oS = 122, eC = 65, tC = 69, rC = 70, aS = 85, sS = 90, $A = function(A) {
  return A >= Zv && A <= 57;
}, lS = function(A) {
  return A >= 55296 && A <= 57343;
}, An = function(A) {
  return $A(A) || A >= eC && A <= rC || A >= qv && A <= nS;
}, uS = function(A) {
  return A >= qv && A <= oS;
}, cS = function(A) {
  return A >= eC && A <= sS;
}, fS = function(A) {
  return uS(A) || cS(A);
}, dS = function(A) {
  return A >= z4;
}, ba = function(A) {
  return A === Ys || A === b4 || A === T4;
}, js = function(A) {
  return fS(A) || dS(A) || A === K4;
}, rh = function(A) {
  return js(A) || $A(A) || A === ee;
}, BS = function(A) {
  return A >= Z4 && A <= q4 || A === AS || A >= eS && A <= tS || A === rS;
}, Ot = function(A, e) {
  return A !== Wi ? !1 : e !== Ys;
}, Ta = function(A, e, t) {
  return A === ee ? js(e) || Ot(e, t) : js(A) ? !0 : !!(A === Wi && Ot(A, e));
}, Gu = function(A, e, t) {
  return A === Hr || A === ee ? $A(e) ? !0 : e === Uo && $A(t) : $A(A === Uo ? e : A);
}, gS = function(A) {
  var e = 0, t = 1;
  (A[e] === Hr || A[e] === ee) && (A[e] === ee && (t = -1), e++);
  for (var r = []; $A(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt(yA.apply(void 0, r), 10) : 0;
  A[e] === Uo && e++;
  for (var i = []; $A(A[e]); )
    i.push(A[e++]);
  var o = i.length, a = o ? parseInt(yA.apply(void 0, i), 10) : 0;
  (A[e] === tC || A[e] === AC) && e++;
  var s = 1;
  (A[e] === Hr || A[e] === ee) && (A[e] === ee && (s = -1), e++);
  for (var l = []; $A(A[e]); )
    l.push(A[e++]);
  var u = l.length ? parseInt(yA.apply(void 0, l), 10) : 0;
  return t * (n + a * Math.pow(10, -o)) * Math.pow(10, s * u);
}, pS = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, hS = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, wS = {
  type: 4
  /* COMMA_TOKEN */
}, mS = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, vS = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, CS = {
  type: 21
  /* COLUMN_TOKEN */
}, QS = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, yS = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, FS = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, US = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, ES = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ka = {
  type: 23
  /* BAD_URL_TOKEN */
}, IS = {
  type: 1
  /* BAD_STRING_TOKEN */
}, HS = {
  type: 25
  /* CDO_TOKEN */
}, xS = {
  type: 24
  /* CDC_TOKEN */
}, SS = {
  type: 26
  /* COLON_TOKEN */
}, LS = {
  type: 27
  /* SEMICOLON_TOKEN */
}, bS = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, TS = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, kS = {
  type: 31
  /* WHITESPACE_TOKEN */
}, _f = {
  type: 32
  /* EOF_TOKEN */
}, nC = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Gl(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== _f; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Ha:
          return this.consumeStringToken(Ha);
        case k4:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (rh(t) || Ot(r, n)) {
            var i = Ta(t, r, n) ? L4 : S4, o = this.consumeName();
            return { type: 5, value: o, flags: i };
          }
          break;
        case O4:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), mS;
          break;
        case xa:
          return this.consumeStringToken(xa);
        case Sa:
          return pS;
        case hi:
          return hS;
        case _u:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), ES;
          break;
        case Hr:
          if (Gu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Y4:
          return wS;
        case ee:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Gu(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Ta(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === ee && l === M4)
            return this.consumeCodePoint(), this.consumeCodePoint(), xS;
          break;
        case Uo:
          if (Gu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Ah:
          if (this.peekCodePoint(0) === _u)
            for (this.consumeCodePoint(); ; ) {
              var u = this.consumeCodePoint();
              if (u === _u && (u = this.consumeCodePoint(), u === Ah))
                return this.consumeToken();
              if (u === We)
                return this.consumeToken();
            }
          break;
        case j4:
          return SS;
        case J4:
          return LS;
        case N4:
          if (this.peekCodePoint(0) === R4 && this.peekCodePoint(1) === ee && this.peekCodePoint(2) === ee)
            return this.consumeCodePoint(), this.consumeCodePoint(), HS;
          break;
        case P4:
          var c = this.peekCodePoint(0), f = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (Ta(c, f, g)) {
            var o = this.consumeName();
            return { type: 7, value: o };
          }
          break;
        case _4:
          return bS;
        case Wi:
          if (Ot(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case G4:
          return TS;
        case V4:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), vS;
          break;
        case $4:
          return FS;
        case W4:
          return US;
        case iS:
        case aS:
          var p = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return p === Hr && (An(w) || w === La) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case eh:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), QS;
          if (this.peekCodePoint(0) === eh)
            return this.consumeCodePoint(), CS;
          break;
        case X4:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), yS;
          break;
        case We:
          return _f;
      }
      return ba(e) ? (this.consumeWhiteSpace(), kS) : $A(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : js(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: yA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); An(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === La && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var n = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === La ? Zv : s;
        })), 16), i = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === La ? rC : s;
        })), 16);
        return { type: 30, start: n, end: i };
      }
      var o = parseInt(yA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === ee && An(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; An(t) && a.length < 6; )
          a.push(t), t = this.consumeCodePoint();
        var i = parseInt(yA.apply(void 0, a), 16);
        return { type: 30, start: o, end: i };
      } else
        return { type: 30, start: o, end: o };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Sa ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Sa ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === We)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === xa || t === Ha) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === hi) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), ka);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === We || n === hi)
          return { type: 22, value: yA.apply(void 0, e) };
        if (ba(n))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === hi ? (this.consumeCodePoint(), { type: 22, value: yA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), ka);
        if (n === Ha || n === xa || n === Sa || BS(n))
          return this.consumeBadUrlRemnants(), ka;
        if (n === Wi)
          if (Ot(n, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), ka;
        else
          e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; ba(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === hi || e === We)
          return;
        Ot(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === Ys)
          return this._value.splice(0, r), IS;
        if (n === Wi) {
          var i = this._value[r + 1];
          i !== We && i !== void 0 && (i === Ys ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : Ot(n, i) && (t += this.consumeStringSlice(r), t += yA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Po, r = this.peekCodePoint(0);
      for ((r === Hr || r === ee) && e.push(this.consumeCodePoint()); $A(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Uo && $A(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = qp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === tC || r === AC) && ((n === Hr || n === ee) && $A(i) || $A(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = qp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [gS(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (Ta(n, i, o)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return n === D4 ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (An(e)) {
        for (var t = yA(e); An(this.peekCodePoint(0)) && t.length < 6; )
          t += yA(this.consumeCodePoint());
        ba(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || lS(r) || r > 1114111 ? th : r;
      }
      return e === We ? th : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (rh(t))
          e += yA(t);
        else if (Ot(t, this.peekCodePoint(0)))
          e += yA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), iC = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new nC();
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
        if (r.type === 32 || DS(r, e))
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
      return typeof e > "u" ? _f : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), _o = function(A) {
  return A.type === 15;
}, ri = function(A) {
  return A.type === 17;
}, tA = function(A) {
  return A.type === 20;
}, OS = function(A) {
  return A.type === 0;
}, Gf = function(A, e) {
  return tA(A) && A.value === e;
}, oC = function(A) {
  return A.type !== 31;
}, Yn = function(A) {
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
}, DS = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, lr = function(A) {
  return A.type === 17 || A.type === 15;
}, EA = function(A) {
  return A.type === 16 || lr(A);
}, aC = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, NA = {
  type: 17,
  number: 0,
  flags: Po
}, EB = {
  type: 16,
  number: 50,
  flags: Po
}, Gt = {
  type: 16,
  number: 100,
  flags: Po
}, xi = function(A, e, t) {
  var r = A[0], n = A[1];
  return [nA(r, e), nA(typeof n < "u" ? n : r, t)];
}, nA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (_o(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, sC = "deg", lC = "grad", uC = "rad", cC = "turn", Vl = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case sC:
          return Math.PI * e.number / 180;
        case lC:
          return Math.PI / 200 * e.number;
        case uC:
          return e.number;
        case cC:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, fC = function(A) {
  return A.type === 15 && (A.unit === sC || A.unit === lC || A.unit === uC || A.unit === cC);
}, dC = function(A) {
  var e = A.filter(tA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [NA, NA];
    case "to top":
    case "bottom":
      return Fe(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [NA, Gt];
    case "to right":
    case "left":
      return Fe(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Gt, Gt];
    case "to bottom":
    case "top":
      return Fe(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Gt, NA];
    case "to left":
    case "right":
      return Fe(270);
  }
  return 0;
}, Fe = function(A) {
  return Math.PI * A / 180;
}, qt = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = KS[e.name];
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
}, Ar = function(A) {
  return (255 & A) === 0;
}, TA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
  return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, Vt = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, nh = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, ih = function(A, e) {
  var t = e.filter(Yn);
  if (t.length === 3) {
    var r = t.map(nh), n = r[0], i = r[1], o = r[2];
    return Vt(n, i, o, 1);
  }
  if (t.length === 4) {
    var a = t.map(nh), n = a[0], i = a[1], o = a[2], s = a[3];
    return Vt(n, i, o, s);
  }
  return 0;
};
function Vu(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var oh = function(A, e) {
  var t = e.filter(Yn), r = t[0], n = t[1], i = t[2], o = t[3], a = (r.type === 17 ? Fe(r.number) : Vl.parse(A, r)) / (Math.PI * 2), s = EA(n) ? n.number / 100 : 0, l = EA(i) ? i.number / 100 : 0, u = typeof o < "u" && EA(o) ? nA(o, 1) : 1;
  if (s === 0)
    return Vt(l * 255, l * 255, l * 255, 1);
  var c = l <= 0.5 ? l * (s + 1) : l + s - l * s, f = l * 2 - c, g = Vu(f, c, a + 1 / 3), p = Vu(f, c, a), w = Vu(f, c, a - 1 / 3);
  return Vt(g * 255, p * 255, w * 255, u);
}, KS = {
  hsl: oh,
  hsla: oh,
  rgb: ih,
  rgba: ih
}, Xi = function(A, e) {
  return qt.parse(A, iC.create(e).parseComponentValue());
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
}, RS = {
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
}, NS = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, $l = function(A, e) {
  var t = qt.parse(A, e[0]), r = e[1];
  return r && EA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, ah = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = NA), r.stop === null && (r.stop = Gt);
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
      for (var c = o - l, f = n[l - 1], g = (u - f) / (c + 1), p = 1; p <= c; p++)
        n[l + p - 1] = g * p;
      l = null;
    }
  }
  return A.map(function(w, y) {
    var B = w.color;
    return { color: B, stop: Math.max(Math.min(1, n[y] / e), 0) };
  });
}, MS = function(A, e, t) {
  var r = e / 2, n = t / 2, i = nA(A[0], e) - r, o = n - nA(A[1], t);
  return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
}, PS = function(A, e, t) {
  var r = typeof A == "number" ? A : MS(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = e / 2, o = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
  return [n, i - l, i + l, o - s, o + s];
}, be = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, sh = function(A, e, t, r, n) {
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
}, _S = function(A, e, t, r, n) {
  var i = 0, o = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? i = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(t), Math.abs(t - n)));
      break;
    case 2:
      if (A.shape === 0)
        i = o = Math.min(be(e, t), be(e, t - n), be(e - r, t), be(e - r, t - n));
      else if (A.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = sh(r, n, e, t, !0), l = s[0], u = s[1];
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
        var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), c = sh(r, n, e, t, !1), l = c[0], u = c[1];
        i = be(l - e, (u - t) / a), o = a * i;
      }
      break;
  }
  return Array.isArray(A.size) && (i = nA(A.size[0], r), o = A.size.length === 2 ? nA(A.size[1], n) : i), [i, o];
}, GS = function(A, e) {
  var t = Fe(180), r = [];
  return tt(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to") {
        t = dC(n);
        return;
      } else if (fC(o)) {
        t = Vl.parse(A, o);
        return;
      }
    }
    var a = $l(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Oa = function(A, e) {
  var t = Fe(180), r = [];
  return tt(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        t = dC(n);
        return;
      } else if (fC(o)) {
        t = (Vl.parse(A, o) + Fe(270)) % Fe(360);
        return;
      }
    }
    var a = $l(A, n);
    r.push(a);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, VS = function(A, e) {
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
        var c = qt.parse(A, u.values[0]);
        r.push({ stop: NA, color: c });
      } else if (u.name === "to") {
        var c = qt.parse(A, u.values[0]);
        r.push({ stop: Gt, color: c });
      } else if (u.name === "color-stop") {
        var f = u.values.filter(Yn);
        if (f.length === 2) {
          var c = qt.parse(A, f[1]), g = f[0];
          ri(g) && r.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
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
}, BC = "closest-side", gC = "farthest-side", pC = "closest-corner", hC = "farthest-corner", wC = "circle", mC = "ellipse", vC = "cover", CC = "contain", $S = function(A, e) {
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
                return i.push(EB), c;
              case "top":
              case "left":
                return i.push(NA), c;
              case "right":
              case "bottom":
                return i.push(Gt), c;
            }
          else (EA(f) || lr(f)) && i.push(f);
        else if (tA(f))
          switch (f.value) {
            case wC:
              return t = 0, !1;
            case mC:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case BC:
              return r = 0, !1;
            case vC:
            case gC:
              return r = 1, !1;
            case CC:
            case pC:
              return r = 2, !1;
            case hC:
              return r = 3, !1;
          }
        else if (lr(f) || EA(f))
          return Array.isArray(r) || (r = []), r.push(f), !1;
        return c;
      }, s);
    }
    if (s) {
      var u = $l(A, o);
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
}, Da = function(A, e) {
  var t = 0, r = 3, n = [], i = [];
  return tt(e).forEach(function(o, a) {
    var s = !0;
    if (a === 0 ? s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case "center":
            return i.push(EB), !1;
          case "top":
          case "left":
            return i.push(NA), !1;
          case "right":
          case "bottom":
            return i.push(Gt), !1;
        }
      else if (EA(c) || lr(c))
        return i.push(c), !1;
      return u;
    }, s) : a === 1 && (s = o.reduce(function(u, c) {
      if (tA(c))
        switch (c.value) {
          case wC:
            return t = 0, !1;
          case mC:
            return t = 1, !1;
          case CC:
          case BC:
            return r = 0, !1;
          case gC:
            return r = 1, !1;
          case pC:
            return r = 2, !1;
          case vC:
          case hC:
            return r = 3, !1;
        }
      else if (lr(c) || EA(c))
        return Array.isArray(r) || (r = []), r.push(c), !1;
      return u;
    }, s)), s) {
      var l = $l(A, o);
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
}, WS = function(A) {
  return A.type === 1;
}, XS = function(A) {
  return A.type === 2;
}, IB = {
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
      var r = QC[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function zS(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!QC[A.name]);
}
var QC = {
  "linear-gradient": GS,
  "-moz-linear-gradient": Oa,
  "-ms-linear-gradient": Oa,
  "-o-linear-gradient": Oa,
  "-webkit-linear-gradient": Oa,
  "radial-gradient": $S,
  "-moz-radial-gradient": Da,
  "-ms-radial-gradient": Da,
  "-o-radial-gradient": Da,
  "-webkit-radial-gradient": Da,
  "-webkit-gradient": VS
}, YS = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Yn(r) && zS(r);
    }).map(function(r) {
      return IB.parse(A, r);
    });
  }
}, jS = {
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
}, JS = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(EA);
    }).map(aC);
  }
}, ZS = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(tA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(qS);
  }
}, qS = function(A) {
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
}, bn;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(bn || (bn = {}));
var AL = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(eL);
    });
  }
}, eL = function(A) {
  return tA(A) || EA(A);
}, Wl = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, tL = Wl("top"), rL = Wl("right"), nL = Wl("bottom"), iL = Wl("left"), Xl = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return aC(t.filter(EA));
    }
  };
}, oL = Xl("top-left"), aL = Xl("top-right"), sL = Xl("bottom-right"), lL = Xl("bottom-left"), zl = function(A) {
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
}, uL = zl("top"), cL = zl("right"), fL = zl("bottom"), dL = zl("left"), Yl = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return _o(t) ? t.number : 0;
    }
  };
}, BL = Yl("top"), gL = Yl("right"), pL = Yl("bottom"), hL = Yl("left"), wL = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, mL = {
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
}, vL = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).reduce(
      function(t, r) {
        return t | CL(r.value);
      },
      0
      /* NONE */
    );
  }
}, CL = function(A) {
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
}, QL = {
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
}, yL = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, Js;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(Js || (Js = {}));
var FL = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return Js.STRICT;
      case "normal":
      default:
        return Js.NORMAL;
    }
  }
}, UL = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, lh = function(A, e) {
  return tA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : EA(A) ? nA(A, e) : e;
}, EL = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : IB.parse(A, e);
  }
}, IL = {
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
}, HL = jl("top"), xL = jl("right"), SL = jl("bottom"), LL = jl("left"), bL = {
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
}, TL = {
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
}, Jl = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, kL = Jl("top"), OL = Jl("right"), DL = Jl("bottom"), KL = Jl("left"), RL = {
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
}, NL = {
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
}, ML = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Gf(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var r = {
        color: Bt.TRANSPARENT,
        offsetX: NA,
        offsetY: NA,
        blur: NA
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        lr(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = qt.parse(A, o);
      }
      return r;
    });
  }
}, PL = {
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
}, _L = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = $L[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, GL = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, VL = function(A) {
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
}, $L = {
  matrix: GL,
  matrix3d: VL
}, uh = {
  type: 16,
  number: 50,
  flags: Po
}, WL = [uh, uh], XL = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(EA);
    return t.length !== 2 ? WL : [t[0], t[1]];
  }
}, zL = {
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
}, zi;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(zi || (zi = {}));
var YL = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return zi.BREAK_ALL;
      case "keep-all":
        return zi.KEEP_ALL;
      case "normal":
      default:
        return zi.NORMAL;
    }
  }
}, jL = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (ri(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, yC = {
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
}, JL = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return ri(e) ? e.number : 1;
  }
}, ZL = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, qL = {
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
}, Ab = {
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
}, eb = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, tb = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (ri(e))
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
}, rb = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
      return t.value;
    });
  }
}, nb = {
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
}, SA = function(A, e) {
  return (A & e) !== 0;
}, ib = {
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
}, ob = {
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
    for (var r = [], n = e.filter(oC), i = 0; i < n.length; i++) {
      var o = n[i], a = n[i + 1];
      if (o.type === 20) {
        var s = a && ri(a) ? a.number : 1;
        r.push({ counter: o.value, increment: s });
      }
    }
    return r;
  }
}, ab = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(oC), n = 0; n < r.length; n++) {
      var i = r[n], o = r[n + 1];
      if (tA(i) && i.value !== "none") {
        var a = o && ri(o) ? o.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, sb = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(_o).map(function(t) {
      return yC.parse(A, t);
    });
  }
}, lb = {
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
    var r = [], n = e.filter(OS);
    if (n.length % 2 !== 0)
      return null;
    for (var i = 0; i < n.length; i += 2) {
      var o = n[i].value, a = n[i + 1].value;
      r.push({ open: o, close: a });
    }
    return r;
  }
}, ch = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, ub = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Gf(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: NA,
        offsetY: NA,
        blur: NA,
        spread: NA,
        inset: !1
      }, n = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        Gf(o, "inset") ? r.inset = !0 : lr(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = qt.parse(A, o);
      }
      return r;
    });
  }
}, cb = {
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
}, fb = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, db = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return _o(e) ? e.number : 0;
  }
}, Bb = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = T(e, sb, t.animationDuration), this.backgroundClip = T(e, RS, t.backgroundClip), this.backgroundColor = T(e, NS, t.backgroundColor), this.backgroundImage = T(e, YS, t.backgroundImage), this.backgroundOrigin = T(e, jS, t.backgroundOrigin), this.backgroundPosition = T(e, JS, t.backgroundPosition), this.backgroundRepeat = T(e, ZS, t.backgroundRepeat), this.backgroundSize = T(e, AL, t.backgroundSize), this.borderTopColor = T(e, tL, t.borderTopColor), this.borderRightColor = T(e, rL, t.borderRightColor), this.borderBottomColor = T(e, nL, t.borderBottomColor), this.borderLeftColor = T(e, iL, t.borderLeftColor), this.borderTopLeftRadius = T(e, oL, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, aL, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, sL, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, lL, t.borderBottomLeftRadius), this.borderTopStyle = T(e, uL, t.borderTopStyle), this.borderRightStyle = T(e, cL, t.borderRightStyle), this.borderBottomStyle = T(e, fL, t.borderBottomStyle), this.borderLeftStyle = T(e, dL, t.borderLeftStyle), this.borderTopWidth = T(e, BL, t.borderTopWidth), this.borderRightWidth = T(e, gL, t.borderRightWidth), this.borderBottomWidth = T(e, pL, t.borderBottomWidth), this.borderLeftWidth = T(e, hL, t.borderLeftWidth), this.boxShadow = T(e, ub, t.boxShadow), this.color = T(e, wL, t.color), this.direction = T(e, mL, t.direction), this.display = T(e, vL, t.display), this.float = T(e, QL, t.cssFloat), this.fontFamily = T(e, Ab, t.fontFamily), this.fontSize = T(e, eb, t.fontSize), this.fontStyle = T(e, nb, t.fontStyle), this.fontVariant = T(e, rb, t.fontVariant), this.fontWeight = T(e, tb, t.fontWeight), this.letterSpacing = T(e, yL, t.letterSpacing), this.lineBreak = T(e, FL, t.lineBreak), this.lineHeight = T(e, UL, t.lineHeight), this.listStyleImage = T(e, EL, t.listStyleImage), this.listStylePosition = T(e, IL, t.listStylePosition), this.listStyleType = T(e, Vf, t.listStyleType), this.marginTop = T(e, HL, t.marginTop), this.marginRight = T(e, xL, t.marginRight), this.marginBottom = T(e, SL, t.marginBottom), this.marginLeft = T(e, LL, t.marginLeft), this.opacity = T(e, JL, t.opacity);
      var i = T(e, bL, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = T(e, TL, t.overflowWrap), this.paddingTop = T(e, kL, t.paddingTop), this.paddingRight = T(e, OL, t.paddingRight), this.paddingBottom = T(e, DL, t.paddingBottom), this.paddingLeft = T(e, KL, t.paddingLeft), this.paintOrder = T(e, cb, t.paintOrder), this.position = T(e, NL, t.position), this.textAlign = T(e, RL, t.textAlign), this.textDecorationColor = T(e, ZL, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = T(e, qL, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = T(e, ML, t.textShadow), this.textTransform = T(e, PL, t.textTransform), this.transform = T(e, _L, t.transform), this.transformOrigin = T(e, XL, t.transformOrigin), this.visibility = T(e, zL, t.visibility), this.webkitTextStrokeColor = T(e, fb, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, db, t.webkitTextStrokeWidth), this.wordBreak = T(e, YL, t.wordBreak), this.zIndex = T(e, jL, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Ar(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return SA(
        this.display,
        4
        /* INLINE */
      ) || SA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || SA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || SA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || SA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || SA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), gb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, ib, t.content), this.quotes = T(e, lb, t.quotes);
    }
    return A;
  }()
), fh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, ob, t.counterIncrement), this.counterReset = T(e, ab, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var r = new nC(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var i = new iC(r.read());
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
          return Vl.parse(A, i.parseComponentValue());
        case "color":
          return qt.parse(A, i.parseComponentValue());
        case "image":
          return IB.parse(A, i.parseComponentValue());
        case "length":
          var a = i.parseComponentValue();
          return lr(a) ? a : NA;
        case "length-percentage":
          var s = i.parseComponentValue();
          return EA(s) ? s : NA;
        case "time":
          return yC.parse(A, i.parseComponentValue());
      }
      break;
  }
}, pb = "data-html2canvas-debug", hb = function(A) {
  var e = A.getAttribute(pb);
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
}, $f = function(A, e) {
  var t = hb(A);
  return t === 1 || e === t;
}, rt = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, $f(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new Bb(e, window.getComputedStyle(t, null)), zf(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = _l(this.context, t), $f(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), wb = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", dh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Si = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ka = 0; Ka < dh.length; Ka++)
  Si[dh.charCodeAt(Ka)] = Ka;
var mb = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Si[A.charCodeAt(r)], o = Si[A.charCodeAt(r + 1)], a = Si[A.charCodeAt(r + 2)], s = Si[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, vb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Cb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Dr = 5, HB = 11, $u = 2, Qb = HB - Dr, FC = 65536 >> Dr, yb = 1 << Dr, Wu = yb - 1, Fb = 1024 >> Dr, Ub = FC + Fb, Eb = Ub, Ib = 32, Hb = Eb + Ib, xb = 65536 >> HB, Sb = 1 << Qb, Lb = Sb - 1, Bh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, bb = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Tb = function(A, e) {
  var t = mb(A), r = Array.isArray(t) ? Cb(t) : new Uint32Array(t), n = Array.isArray(t) ? vb(t) : new Uint16Array(t), i = 24, o = Bh(n, i / 2, r[4] / 2), a = r[5] === 2 ? Bh(n, (i + r[4]) / 2) : bb(r, Math.ceil((i + r[4]) / 4));
  return new kb(r[0], r[1], r[2], r[3], o, a);
}, kb = (
  /** @class */
  function() {
    function A(e, t, r, n, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Dr], t = (t << $u) + (e & Wu), this.data[t];
        if (e <= 65535)
          return t = this.index[FC + (e - 55296 >> Dr)], t = (t << $u) + (e & Wu), this.data[t];
        if (e < this.highStart)
          return t = Hb - xb + (e >> HB), t = this.index[t], t += e >> Dr & Lb, t = this.index[t], t = (t << $u) + (e & Wu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), gh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ob = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ra = 0; Ra < gh.length; Ra++)
  Ob[gh.charCodeAt(Ra)] = Ra;
var Db = 1, Xu = 2, zu = 3, ph = 4, hh = 5, Kb = 7, wh = 8, Yu = 9, ju = 10, mh = 11, vh = 12, Ch = 13, Qh = 14, Ju = 15, Rb = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, Nb = function() {
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
}, Mb = Tb(wb), me = "×", Zu = "÷", Pb = function(A) {
  return Mb.get(A);
}, _b = function(A, e, t) {
  var r = t - 2, n = e[r], i = e[t - 1], o = e[t];
  if (i === Xu && o === zu)
    return me;
  if (i === Xu || i === zu || i === ph || o === Xu || o === zu || o === ph)
    return Zu;
  if (i === wh && [wh, Yu, mh, vh].indexOf(o) !== -1 || (i === mh || i === Yu) && (o === Yu || o === ju) || (i === vh || i === ju) && o === ju || o === Ch || o === hh || o === Kb || i === Db)
    return me;
  if (i === Ch && o === Qh) {
    for (; n === hh; )
      n = e[--r];
    if (n === Qh)
      return me;
  }
  if (i === Ju && o === Ju) {
    for (var a = 0; n === Ju; )
      a++, n = e[--r];
    if (a % 2 === 0)
      return me;
  }
  return Zu;
}, Gb = function(A) {
  var e = Rb(A), t = e.length, r = 0, n = 0, i = e.map(Pb);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var o = me; r < t && (o = _b(e, i, ++r)) === me; )
        ;
      if (o !== me || r === t) {
        var a = Nb.apply(null, e.slice(n, r));
        return n = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Vb = function(A) {
  for (var e = Gb(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, $b = function(A) {
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
}, Wb = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, n = Gl(r.data).map(function(s) {
    return yA(s);
  }), i = 0, o = {}, a = n.every(function(s, l) {
    t.setStart(r, i), t.setEnd(r, i + s.length);
    var u = t.getBoundingClientRect();
    i += s.length;
    var c = u.x > o.x || u.y > o.y;
    return o = u, l === 0 ? !0 : c;
  });
  return A.body.removeChild(e), a;
}, Xb = function() {
  return typeof new Image().crossOrigin < "u";
}, zb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Yb = function(A) {
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
}, yh = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, jb = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var n = new Image(), i = e.toDataURL();
  n.src = i;
  var o = Wf(t, t, 0, 0, n);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), Fh(o).then(function(a) {
    r.drawImage(a, 0, 0);
    var s = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var l = A.createElement("div");
    return l.style.backgroundImage = "url(" + i + ")", l.style.height = t + "px", yh(s) ? Fh(Wf(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(a) {
    return r.drawImage(a, 0, 0), yh(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Wf = function(A, e, t, r, n) {
  var i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return o.setAttributeNS(null, "width", A.toString()), o.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(n), o;
}, Fh = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, RA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = $b(document);
    return Object.defineProperty(RA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = RA.SUPPORT_RANGE_BOUNDS && Wb(document);
    return Object.defineProperty(RA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = Yb(document);
    return Object.defineProperty(RA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? jb(document) : Promise.resolve(!1);
    return Object.defineProperty(RA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = Xb();
    return Object.defineProperty(RA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = zb();
    return Object.defineProperty(RA, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(RA, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(RA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, Yi = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Jb = function(A, e, t, r) {
  var n = A2(e, t), i = [], o = 0;
  return n.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (RA.SUPPORT_RANGE_BOUNDS) {
        var s = Uh(r, o, a.length).getClientRects();
        if (s.length > 1) {
          var l = xB(a), u = 0;
          l.forEach(function(f) {
            i.push(new Yi(f, Qt.fromDOMRectList(A, Uh(r, u + o, f.length).getClientRects()))), u += f.length;
          });
        } else
          i.push(new Yi(a, Qt.fromDOMRectList(A, s)));
      } else {
        var c = r.splitText(a.length);
        i.push(new Yi(a, Zb(A, r))), r = c;
      }
    else RA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    o += a.length;
  }), i;
}, Zb = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var n = e.parentNode;
    if (n) {
      n.replaceChild(r, e);
      var i = _l(A, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), i;
    }
  }
  return Qt.EMPTY;
}, Uh = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(A, e), n.setEnd(A, e + t), n;
}, xB = function(A) {
  if (RA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return Vb(A);
}, qb = function(A, e) {
  if (RA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return t2(A, e);
}, A2 = function(A, e) {
  return e.letterSpacing !== 0 ? xB(A) : qb(A, e);
}, e2 = [32, 160, 4961, 65792, 65793, 4153, 4241], t2 = function(A, e) {
  for (var t = x4(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var o = n.value.slice(), a = Gl(o), s = "";
      a.forEach(function(l) {
        e2.indexOf(l) === -1 ? s += yA(l) : (s.length && r.push(s), r.push(yA(l)), s = "");
      }), s.length && r.push(s);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, r2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = n2(t.data, r.textTransform), this.textBounds = Jb(e, this.text, r, t);
    }
    return A;
  }()
), n2 = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(i2, o2);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, i2 = /(^|\s|:|-|\(|\))([a-z])/g, o2 = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, UC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(rt)
), EC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(rt)
), IC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = new XMLSerializer(), o = _l(t, r);
      return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(rt)
), HC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(rt)
), Xf = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
    }
    return e;
  }(rt)
), a2 = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], s2 = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], l2 = function(A) {
  return A.width > A.height ? new Qt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Qt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, u2 = function(A) {
  var e = A.type === c2 ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Zs = "checkbox", qs = "radio", c2 = "password", Eh = 707406591, SB = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = u2(r), (n.type === Zs || n.type === qs) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = l2(n.bounds)), n.type) {
        case Zs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = a2;
          break;
        case qs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = s2;
          break;
      }
      return n;
    }
    return e;
  }(rt)
), xC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return e;
  }(rt)
), SC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(rt)
), LC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = TC(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? Xi(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Bt.TRANSPARENT, o = r.contentWindow.document.body ? Xi(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Bt.TRANSPARENT;
          n.backgroundColor = Ar(i) ? Ar(o) ? n.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(rt)
), f2 = ["OL", "UL", "MENU"], cs = function(A, e, t, r) {
  for (var n = e.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, kC(n) && n.data.trim().length > 0)
      t.textNodes.push(new r2(A, n, t.styles));
    else if (yn(n))
      if (RC(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(a) {
          return cs(A, a, t, r);
        });
      else {
        var o = bC(A, n);
        o.styles.isVisible() && (d2(n, o, r) ? o.flags |= 4 : B2(o.styles) && (o.flags |= 2), f2.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? cs(A, n.shadowRoot, o, r) : !Al(n) && !OC(n) && !el(n) && cs(A, n, o, r));
      }
}, bC = function(A, e) {
  return Yf(e) ? new UC(A, e) : DC(e) ? new EC(A, e) : OC(e) ? new IC(A, e) : g2(e) ? new HC(A, e) : p2(e) ? new Xf(A, e) : h2(e) ? new SB(A, e) : el(e) ? new xC(A, e) : Al(e) ? new SC(A, e) : KC(e) ? new LC(A, e) : new rt(A, e);
}, TC = function(A, e) {
  var t = bC(A, e);
  return t.flags |= 4, cs(A, e, t, t), t;
}, d2 = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || LB(A) && t.styles.isTransparent();
}, B2 = function(A) {
  return A.isPositioned() || A.isFloating();
}, kC = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, yn = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, zf = function(A) {
  return yn(A) && typeof A.style < "u" && !fs(A);
}, fs = function(A) {
  return typeof A.className == "object";
}, g2 = function(A) {
  return A.tagName === "LI";
}, p2 = function(A) {
  return A.tagName === "OL";
}, h2 = function(A) {
  return A.tagName === "INPUT";
}, w2 = function(A) {
  return A.tagName === "HTML";
}, OC = function(A) {
  return A.tagName === "svg";
}, LB = function(A) {
  return A.tagName === "BODY";
}, DC = function(A) {
  return A.tagName === "CANVAS";
}, Ih = function(A) {
  return A.tagName === "VIDEO";
}, Yf = function(A) {
  return A.tagName === "IMG";
}, KC = function(A) {
  return A.tagName === "IFRAME";
}, Hh = function(A) {
  return A.tagName === "STYLE";
}, m2 = function(A) {
  return A.tagName === "SCRIPT";
}, Al = function(A) {
  return A.tagName === "TEXTAREA";
}, el = function(A) {
  return A.tagName === "SELECT";
}, RC = function(A) {
  return A.tagName === "SLOT";
}, xh = function(A) {
  return A.tagName.indexOf("-") > 0;
}, v2 = (
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
), Sh = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Lh = {
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
}, C2 = {
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
}, Q2 = {
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
}, en = function(A, e, t, r, n, i) {
  return A < e || A > t ? Eo(A, n, i.length > 0) : r.integers.reduce(function(o, a, s) {
    for (; A >= a; )
      A -= a, o += r.values[s];
    return o;
  }, "") + i;
}, NC = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, QA = function(A, e, t, r, n) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (NC(Math.abs(A), i, r, function(o) {
    return yA(Math.floor(o % i) + e);
  }) + n);
}, gr = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return NC(Math.abs(A), r, !1, function(n) {
    return e[Math.floor(n % r)];
  }) + t;
}, nn = 1, Lt = 2, bt = 4, Li = 8, it = function(A, e, t, r, n, i) {
  if (A < -9999 || A > 9999)
    return Eo(A, 4, n.length > 0);
  var o = Math.abs(A), a = n;
  if (o === 0)
    return e[0] + a;
  for (var s = 0; o > 0 && s <= 4; s++) {
    var l = o % 10;
    l === 0 && SA(i, nn) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && SA(i, Lt) || l === 1 && s === 1 && SA(i, bt) && A > 100 || l === 1 && s > 1 && SA(i, Li) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), o = Math.floor(o / 10);
  }
  return (A < 0 ? r : "") + a;
}, bh = "十百千萬", Th = "拾佰仟萬", kh = "マイナス", qu = "마이너스", Eo = function(A, e, t) {
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
      return en(A, 1, 3999, Sh, 3, r).toLowerCase();
    case 7:
      return en(A, 1, 3999, Sh, 3, r);
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
      return en(A, 1, 9999, Lh, 3, r);
    case 35:
      return en(A, 1, 9999, Lh, 3, r).toLowerCase();
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
      return it(A, "零一二三四五六七八九", bh, "負", n, Lt | bt | Li);
    case 47:
      return it(A, "零壹貳參肆伍陸柒捌玖", Th, "負", n, nn | Lt | bt | Li);
    case 42:
      return it(A, "零一二三四五六七八九", bh, "负", n, Lt | bt | Li);
    case 41:
      return it(A, "零壹贰叁肆伍陆柒捌玖", Th, "负", n, nn | Lt | bt | Li);
    case 26:
      return it(A, "〇一二三四五六七八九", "十百千万", kh, n, 0);
    case 25:
      return it(A, "零壱弐参四伍六七八九", "拾百千万", kh, n, nn | Lt | bt);
    case 31:
      return it(A, "영일이삼사오육칠팔구", "십백천만", qu, i, nn | Lt | bt);
    case 33:
      return it(A, "零一二三四五六七八九", "十百千萬", qu, i, 0);
    case 32:
      return it(A, "零壹貳參四五六七八九", "拾百千", qu, i, nn | Lt | bt);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return en(A, 1, 19999, Q2, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return en(A, 1, 10999, C2, 3, r);
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
}, MC = "data-html2canvas-ignore", Oh = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new v2(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = y2(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, o = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = E2(n).then(function() {
        return YA(r, void 0, void 0, function() {
          var u, c;
          return VA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(S2), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, U2(s)] : [3, 4];
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
      return s.open(), s.write(H2(document.doctype) + "<html></html>"), x2(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if ($f(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (DC(e))
        return this.createCanvasClone(e);
      if (Ih(e))
        return this.createVideoClone(e);
      if (Hh(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return Yf(t) && (Yf(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), xh(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ac(e.style, t), t;
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
      (!yn(t) || !m2(t) && !t.hasAttribute(MC) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !yn(t) || !Hh(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (yn(i) && RC(i) && typeof i.assignedNodes == "function") {
          var o = i.assignedNodes();
          o.length && o.forEach(function(a) {
            return n.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (kC(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && yn(e) && (zf(e) || fs(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(e), o = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && zf(n) && (this.clonedReferenceElement = n), LB(n) && T2(n);
        var s = this.counters.parse(new fh(this.context, i)), l = this.resolvePseudoContent(e, n, o, ji.BEFORE);
        xh(e) && (t = !0), Ih(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var u = this.resolvePseudoContent(e, n, a, ji.AFTER);
        return u && n.appendChild(u), this.counters.pop(s), (i && (this.options.copyStyles || fs(e)) && !KC(e) || t) && Ac(i, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (Al(e) || el(e)) && (Al(n) || el(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var i = this;
      if (r) {
        var o = r.content, a = t.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new fh(this.context, r));
          var s = new gb(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Ac(r, l), s.content.forEach(function(c) {
            if (c.type === 0)
              l.appendChild(a.createTextNode(c.value));
            else if (c.type === 22) {
              var f = a.createElement("img");
              f.src = c.value, f.style.opacity = "1", l.appendChild(f);
            } else if (c.type === 18) {
              if (c.name === "attr") {
                var g = c.values.filter(tA);
                g.length && l.appendChild(a.createTextNode(e.getAttribute(g[0].value) || ""));
              } else if (c.name === "counter") {
                var p = c.values.filter(Yn), w = p[0], y = p[1];
                if (w && tA(w)) {
                  var B = i.counters.getCounterValue(w.value), d = y && tA(y) ? Vf.parse(i.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Eo(B, d, !1)));
                }
              } else if (c.name === "counters") {
                var h = c.values.filter(Yn), w = h[0], m = h[1], y = h[2];
                if (w && tA(w)) {
                  var C = i.counters.getCounterValues(w.value), v = y && tA(y) ? Vf.parse(i.context, y.value) : 3, F = m && m.type === 0 ? m.value : "", U = C.map(function(P) {
                    return Eo(P, v, !1);
                  }).join(F);
                  l.appendChild(a.createTextNode(U));
                }
              }
            } else if (c.type === 20)
              switch (c.value) {
                case "open-quote":
                  l.appendChild(a.createTextNode(ch(s.quotes, i.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  l.appendChild(a.createTextNode(ch(s.quotes, --i.quoteDepth, !1)));
                  break;
                default:
                  l.appendChild(a.createTextNode(c.value));
              }
          }), l.className = jf + " " + Jf;
          var u = n === ji.BEFORE ? " " + jf : " " + Jf;
          return fs(t) ? t.className.baseValue += u : t.className += u, l;
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
var y2 = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(MC, "true"), A.body.appendChild(t), t;
}, F2 = function(A) {
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
}, U2 = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(F2));
}, E2 = function(A) {
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
}, I2 = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ac = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    I2.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, H2 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, x2 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, S2 = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, L2 = ":before", b2 = ":after", jf = "___html2canvas___pseudoelement_before", Jf = "___html2canvas___pseudoelement_after", Dh = `{
    content: "" !important;
    display: none !important;
}`, T2 = function(A) {
  k2(A, "." + jf + L2 + Dh + `
         .` + Jf + b2 + Dh);
}, k2 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, PC = (
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
), O2 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (tc(e) || N2(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return YA(this, void 0, void 0, function() {
        var t, r, n, i, o = this;
        return VA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = PC.isSameOrigin(e), r = !ec(e) && this._options.useCORS === !0 && RA.SUPPORT_CORS_IMAGES && !t, n = !ec(e) && !t && !tc(e) && typeof this._options.proxy == "string" && RA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !ec(e) && !tc(e) && !n && !r ? [
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
                }, u.onerror = l, (M2(i) || r) && (u.crossOrigin = "anonymous"), u.src = i, u.complete === !0 && setTimeout(function() {
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
        var a = RA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
), D2 = /^data:image\/svg\+xml/i, K2 = /^data:image\/.*;base64,/i, R2 = /^data:image\/.*/i, N2 = function(A) {
  return RA.SUPPORT_SVG_DRAWING || !P2(A);
}, ec = function(A) {
  return R2.test(A);
}, M2 = function(A) {
  return K2.test(A);
}, tc = function(A) {
  return A.substr(0, 4) === "blob";
}, P2 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || D2.test(A);
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
), tn = function(A, e, t) {
  return new b(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Na = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = tn(this.start, this.startControl, e), n = tn(this.startControl, this.endControl, e), i = tn(this.endControl, this.end, e), o = tn(r, n, e), a = tn(n, i, e), s = tn(o, a, e);
      return t ? new A(this.start, r, o, s) : new A(s, a, i, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Qe = function(A) {
  return A.type === 1;
}, _2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = xi(t.borderTopLeftRadius, r.width, r.height), i = n[0], o = n[1], a = xi(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], u = xi(t.borderBottomRightRadius, r.width, r.height), c = u[0], f = u[1], g = xi(t.borderBottomLeftRadius, r.width, r.height), p = g[0], w = g[1], y = [];
      y.push((i + s) / r.width), y.push((p + c) / r.width), y.push((o + w) / r.height), y.push((l + f) / r.height);
      var B = Math.max.apply(Math, y);
      B > 1 && (i /= B, o /= B, s /= B, l /= B, c /= B, f /= B, p /= B, w /= B);
      var d = r.width - s, h = r.height - f, m = r.width - c, C = r.height - w, v = t.borderTopWidth, F = t.borderRightWidth, U = t.borderBottomWidth, E = t.borderLeftWidth, S = nA(t.paddingTop, e.bounds.width), P = nA(t.paddingRight, e.bounds.width), N = nA(t.paddingBottom, e.bounds.width), D = nA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + E / 3, r.top + v / 3, i - E / 3, o - v / 3, AA.TOP_LEFT) : new b(r.left + E / 3, r.top + v / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + d, r.top + v / 3, s - F / 3, l - v / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F / 3, r.top + v / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 3, f - U / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 3, r.top + r.height - U / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || w > 0 ? cA(r.left + E / 3, r.top + C, p - E / 3, w - U / 3, AA.BOTTOM_LEFT) : new b(r.left + E / 3, r.top + r.height - U / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + E * 2 / 3, r.top + v * 2 / 3, i - E * 2 / 3, o - v * 2 / 3, AA.TOP_LEFT) : new b(r.left + E * 2 / 3, r.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + d, r.top + v * 2 / 3, s - F * 2 / 3, l - v * 2 / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F * 2 / 3, f - U * 2 / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + r.height - U * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || w > 0 ? cA(r.left + E * 2 / 3, r.top + C, p - E * 2 / 3, w - U * 2 / 3, AA.BOTTOM_LEFT) : new b(r.left + E * 2 / 3, r.top + r.height - U * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? cA(r.left + E / 2, r.top + v / 2, i - E / 2, o - v / 2, AA.TOP_LEFT) : new b(r.left + E / 2, r.top + v / 2), this.topRightBorderStroke = i > 0 || o > 0 ? cA(r.left + d, r.top + v / 2, s - F / 2, l - v / 2, AA.TOP_RIGHT) : new b(r.left + r.width - F / 2, r.top + v / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 2, f - U / 2, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 2, r.top + r.height - U / 2), this.bottomLeftBorderStroke = p > 0 || w > 0 ? cA(r.left + E / 2, r.top + C, p - E / 2, w - U / 2, AA.BOTTOM_LEFT) : new b(r.left + E / 2, r.top + r.height - U / 2), this.topLeftBorderBox = i > 0 || o > 0 ? cA(r.left, r.top, i, o, AA.TOP_LEFT) : new b(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? cA(r.left + d, r.top, s, l, AA.TOP_RIGHT) : new b(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c, f, AA.BOTTOM_RIGHT) : new b(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || w > 0 ? cA(r.left, r.top + C, p, w, AA.BOTTOM_LEFT) : new b(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || o > 0 ? cA(r.left + E, r.top + v, Math.max(0, i - E), Math.max(0, o - v), AA.TOP_LEFT) : new b(r.left + E, r.top + v), this.topRightPaddingBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width - F), r.top + v, d > r.width + F ? 0 : Math.max(0, s - F), Math.max(0, l - v), AA.TOP_RIGHT) : new b(r.left + r.width - F, r.top + v), this.bottomRightPaddingBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - E), r.top + Math.min(h, r.height - U), Math.max(0, c - F), Math.max(0, f - U), AA.BOTTOM_RIGHT) : new b(r.left + r.width - F, r.top + r.height - U), this.bottomLeftPaddingBox = p > 0 || w > 0 ? cA(r.left + E, r.top + Math.min(C, r.height - U), Math.max(0, p - E), Math.max(0, w - U), AA.BOTTOM_LEFT) : new b(r.left + E, r.top + r.height - U), this.topLeftContentBox = i > 0 || o > 0 ? cA(r.left + E + D, r.top + v + S, Math.max(0, i - (E + D)), Math.max(0, o - (v + S)), AA.TOP_LEFT) : new b(r.left + E + D, r.top + v + S), this.topRightContentBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width + E + D), r.top + v + S, d > r.width + E + D ? 0 : s - E + D, l - (v + S), AA.TOP_RIGHT) : new b(r.left + r.width - (F + P), r.top + v + S), this.bottomRightContentBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - (E + D)), r.top + Math.min(h, r.height + v + S), Math.max(0, c - (F + P)), f - (U + N), AA.BOTTOM_RIGHT) : new b(r.left + r.width - (F + P), r.top + r.height - (U + N)), this.bottomLeftContentBox = p > 0 || w > 0 ? cA(r.left + E + D, r.top + C, Math.max(0, p - (E + D)), w - (U + N), AA.BOTTOM_LEFT) : new b(r.left + E + D, r.top + r.height - (U + N));
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
      return new Na(new b(A, l), new b(A, l - a), new b(s - o, e), new b(s, e));
    case AA.TOP_RIGHT:
      return new Na(new b(A, e), new b(A + o, e), new b(s, l - a), new b(s, l));
    case AA.BOTTOM_RIGHT:
      return new Na(new b(s, e), new b(s, e + a), new b(A + o, l), new b(A, l));
    case AA.BOTTOM_LEFT:
    default:
      return new Na(new b(s, l), new b(s - o, l), new b(A, e + a), new b(A, e));
  }
}, tl = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, G2 = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, rl = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, V2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), Ma = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), $2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), W2 = function(A) {
  return A.type === 0;
}, _C = function(A) {
  return A.type === 1;
}, X2 = function(A) {
  return A.type === 2;
}, Kh = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, z2 = function(A, e, t, r, n) {
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
}, GC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), VC = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new _2(this.container), this.container.styles.opacity < 1 && this.effects.push(new $2(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new V2(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = tl(this.curves), a = rl(this.curves);
        Kh(o, a) ? this.effects.push(new Ma(
          o,
          6
          /* CONTENT */
        )) : (this.effects.push(new Ma(
          o,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new Ma(
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
          return !_C(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var o = tl(r.curves), a = rl(r.curves);
            Kh(o, a) || n.unshift(new Ma(
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
        return SA(s.target, e);
      });
    }, A;
  }()
), Zf = function(A, e, t, r) {
  A.container.elements.forEach(function(n) {
    var i = SA(
      n.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), o = SA(
      n.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new VC(n, A);
    SA(
      n.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(a);
    var s = SA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (i || o) {
      var l = i || n.styles.isPositioned() ? t : e, u = new GC(a);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var c = n.styles.zIndex.order;
        if (c < 0) {
          var f = 0;
          l.negativeZIndex.some(function(p, w) {
            return c > p.element.container.styles.zIndex.order ? (f = w, !1) : f > 0;
          }), l.negativeZIndex.splice(f, 0, u);
        } else if (c > 0) {
          var g = 0;
          l.positiveZIndex.some(function(p, w) {
            return c >= p.element.container.styles.zIndex.order ? (g = w + 1, !1) : g > 0;
          }), l.positiveZIndex.splice(g, 0, u);
        } else
          l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
      } else
        n.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
      Zf(a, u, i ? u : t, s);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Zf(a, e, t, s);
    SA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && $C(n, s);
  });
}, $C = function(A, e) {
  for (var t = A instanceof Xf ? A.start : 1, r = A instanceof Xf ? A.reversed : !1, n = 0; n < e.length; n++) {
    var i = e[n];
    i.container instanceof HC && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Eo(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Y2 = function(A) {
  var e = new VC(A, null), t = new GC(e), r = [];
  return Zf(e, t, t, r), $C(e.container, r), t;
}, Rh = function(A, e) {
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
}, j2 = function(A, e) {
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
}, J2 = function(A, e) {
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
}, Z2 = function(A, e) {
  switch (e) {
    case 0:
      return Pa(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return Pa(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return Pa(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return Pa(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, Pa = function(A, e) {
  var t = [];
  return Qe(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), Qe(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, Ue = function(A, e, t, r) {
  var n = [];
  return Qe(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A), Qe(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), Qe(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), Qe(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e), n;
}, WC = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, nl = function(A) {
  var e = A.styles, t = A.bounds, r = nA(e.paddingLeft, t.width), n = nA(e.paddingRight, t.width), i = nA(e.paddingTop, t.width), o = nA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + o));
}, q2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? nl(e) : WC(e);
}, AT = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? nl(e) : WC(e);
}, rc = function(A, e, t) {
  var r = q2(on(A.styles.backgroundOrigin, e), A), n = AT(on(A.styles.backgroundClip, e), A), i = eT(on(A.styles.backgroundSize, e), t, r), o = i[0], a = i[1], s = xi(on(A.styles.backgroundPosition, e), r.width - o, r.height - a), l = tT(on(A.styles.backgroundRepeat, e), s, i, r, n), u = Math.round(r.left + s[0]), c = Math.round(r.top + s[1]);
  return [l, u, c, o, a];
}, rn = function(A) {
  return tA(A) && A.value === bn.AUTO;
}, _a = function(A) {
  return typeof A == "number";
}, eT = function(A, e, t) {
  var r = e[0], n = e[1], i = e[2], o = A[0], a = A[1];
  if (!o)
    return [0, 0];
  if (EA(o) && a && EA(a))
    return [nA(o, t.width), nA(a, t.height)];
  var s = _a(i);
  if (tA(o) && (o.value === bn.CONTAIN || o.value === bn.COVER)) {
    if (_a(i)) {
      var l = t.width / t.height;
      return l < i != (o.value === bn.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var u = _a(r), c = _a(n), f = u || c;
  if (rn(o) && (!a || rn(a))) {
    if (u && c)
      return [r, n];
    if (!s && !f)
      return [t.width, t.height];
    if (f && s) {
      var g = u ? r : n * i, p = c ? n : r / i;
      return [g, p];
    }
    var w = u ? r : t.width, y = c ? n : t.height;
    return [w, y];
  }
  if (s) {
    var B = 0, d = 0;
    return EA(o) ? B = nA(o, t.width) : EA(a) && (d = nA(a, t.height)), rn(o) ? B = d * i : (!a || rn(a)) && (d = B / i), [B, d];
  }
  var h = null, m = null;
  if (EA(o) ? h = nA(o, t.width) : a && EA(a) && (m = nA(a, t.height)), h !== null && (!a || rn(a)) && (m = u && c ? h / r * n : t.height), m !== null && rn(o) && (h = u && c ? m / n * r : t.width), h !== null && m !== null)
    return [h, m];
  throw new Error("Unable to calculate background-size for element");
}, on = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, tT = function(A, e, t, r, n) {
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
}, rT = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Nh = "Hidden Text", nT = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = rT, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Nh)), r.appendChild(i), r.appendChild(n);
      var a = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Nh)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return o.removeChild(r), { baseline: a, middle: s };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), XC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), iT = 1e4, oT = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new nT(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), X2(t) && (this.ctx.globalAlpha = t.opacity), W2(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), _C(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return YA(this, void 0, void 0, function() {
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
      return YA(this, void 0, void 0, function() {
        return VA(this, function(r) {
          switch (r.label) {
            case 0:
              if (SA(
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
        var o = xB(t.text);
        o.reduce(function(a, s) {
          return i.ctx.fillText(s, a, t.bounds.top + n), a + i.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(o) {
        return o === "normal" || o === "small-caps";
      }).join(""), n = cT(t.fontFamily).join(", "), i = _o(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, i, n].join(" "),
        n,
        i
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return YA(this, void 0, void 0, function() {
        var n, i, o, a, s, l, u, c, f = this;
        return VA(this, function(g) {
          return n = this.createFontStyle(r), i = n[0], o = n[1], a = n[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, a), l = s.baseline, u = s.middle, c = r.paintOrder, t.textBounds.forEach(function(p) {
            c.forEach(function(w) {
              switch (w) {
                case 0:
                  f.ctx.fillStyle = TA(r.color), f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(B) {
                    f.ctx.shadowColor = TA(B.color), f.ctx.shadowOffsetX = B.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = B.offsetY.number * f.options.scale, f.ctx.shadowBlur = B.blur.number, f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = TA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(B) {
                    switch (B) {
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
                  r.webkitTextStrokeWidth && p.text.trim().length && (f.ctx.strokeStyle = TA(r.webkitTextStrokeColor), f.ctx.lineWidth = r.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
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
        var i = nl(t), o = rl(r);
        this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, d, d, l, u, c, f, m, g, p, C, w, y, B, d, h, m, C;
        return VA(this, function(v) {
          switch (v.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, n = t.curves, i = r.styles, o = 0, a = r.textNodes, v.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [4, this.renderTextNode(s, i)]) : [3, 4];
            case 2:
              v.sent(), v.label = 3;
            case 3:
              return o++, [3, 1];
            case 4:
              if (!(r instanceof UC)) return [3, 8];
              v.label = 5;
            case 5:
              return v.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = v.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof EC && this.renderReplacedElement(r, n, r.canvas), !(r instanceof IC)) return [3, 12];
              v.label = 9;
            case 9:
              return v.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = v.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof LC && r.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, l.render(r.tree)]) : [3, 14];
            case 13:
              u = v.sent(), r.width && r.height && this.ctx.drawImage(u, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), v.label = 14;
            case 14:
              if (r instanceof SB && (c = Math.min(r.bounds.width, r.bounds.height), r.type === Zs ? r.checked && (this.ctx.save(), this.path([
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79),
                new b(r.bounds.left + c * 0.16, r.bounds.top + c * 0.5549),
                new b(r.bounds.left + c * 0.27347, r.bounds.top + c * 0.44071),
                new b(r.bounds.left + c * 0.39694, r.bounds.top + c * 0.5649),
                new b(r.bounds.left + c * 0.72983, r.bounds.top + c * 0.23),
                new b(r.bounds.left + c * 0.84, r.bounds.top + c * 0.34085),
                new b(r.bounds.left + c * 0.39363, r.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = TA(Eh), this.ctx.fill(), this.ctx.restore()) : r.type === qs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = TA(Eh), this.ctx.fill(), this.ctx.restore())), aT(r) && r.value.length) {
                switch (f = this.createFontStyle(i), m = f[0], g = f[1], p = this.fontMetrics.getMetrics(m, g).baseline, this.ctx.font = m, this.ctx.fillStyle = TA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = lT(r.styles.textAlign), C = nl(r), w = 0, r.styles.textAlign) {
                  case 1:
                    w += C.width / 2;
                    break;
                  case 2:
                    w += C.width;
                    break;
                }
                y = C.add(w, 0, 0, -C.height / 2 + 1), this.ctx.save(), this.path([
                  new b(C.left, C.top),
                  new b(C.left + C.width, C.top),
                  new b(C.left + C.width, C.top + C.height),
                  new b(C.left, C.top + C.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Yi(r.value, y), i.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!SA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (B = r.styles.listStyleImage, B.type !== 0) return [3, 18];
              d = void 0, h = B.url, v.label = 15;
            case 15:
              return v.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)];
            case 16:
              return d = v.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + h), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(i)[0], this.ctx.font = m, this.ctx.fillStyle = TA(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", C = new Qt(r.bounds.left, r.bounds.top + nA(r.styles.paddingTop, r.bounds.width), r.bounds.width, lh(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Yi(t.listValue, C), i.letterSpacing, lh(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
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
        var r, n, B, i, o, B, a, s, B, l, u, B, c, f, B, g, p, B, w, y, B;
        return VA(this, function(d) {
          switch (d.label) {
            case 0:
              if (SA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              d.sent(), r = 0, n = t.negativeZIndex, d.label = 2;
            case 2:
              return r < n.length ? (B = n[r], [4, this.renderStack(B)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              d.sent(), i = 0, o = t.nonInlineLevel, d.label = 7;
            case 7:
              return i < o.length ? (B = o[i], [4, this.renderNode(B)]) : [3, 10];
            case 8:
              d.sent(), d.label = 9;
            case 9:
              return i++, [3, 7];
            case 10:
              a = 0, s = t.nonPositionedFloats, d.label = 11;
            case 11:
              return a < s.length ? (B = s[a], [4, this.renderStack(B)]) : [3, 14];
            case 12:
              d.sent(), d.label = 13;
            case 13:
              return a++, [3, 11];
            case 14:
              l = 0, u = t.nonPositionedInlineLevel, d.label = 15;
            case 15:
              return l < u.length ? (B = u[l], [4, this.renderStack(B)]) : [3, 18];
            case 16:
              d.sent(), d.label = 17;
            case 17:
              return l++, [3, 15];
            case 18:
              c = 0, f = t.inlineLevel, d.label = 19;
            case 19:
              return c < f.length ? (B = f[c], [4, this.renderNode(B)]) : [3, 22];
            case 20:
              d.sent(), d.label = 21;
            case 21:
              return c++, [3, 19];
            case 22:
              g = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
            case 23:
              return g < p.length ? (B = p[g], [4, this.renderStack(B)]) : [3, 26];
            case 24:
              d.sent(), d.label = 25;
            case 25:
              return g++, [3, 23];
            case 26:
              w = 0, y = t.positiveZIndex, d.label = 27;
            case 27:
              return w < y.length ? (B = y[w], [4, this.renderStack(B)]) : [3, 30];
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
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s;
        return VA(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(u) {
                var c, f, g, S, $, K, D, G, U, p, S, $, K, D, G, w, y, B, d, h, m, C, v, F, U, E, S, P, N, D, G, J, $, K, I, x, L, M, X, dA, BA, gA;
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
                      return c && (g = rc(t, r, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), S = g[0], $ = g[1], K = g[2], D = g[3], G = g[4], U = i.ctx.createPattern(i.resizeImage(c, D, G), "repeat"), i.renderRepeat(S, U, $, K)), [3, 6];
                    case 5:
                      WS(u) ? (p = rc(t, r, [null, null, null]), S = p[0], $ = p[1], K = p[2], D = p[3], G = p[4], w = PS(u.angle, D, G), y = w[0], B = w[1], d = w[2], h = w[3], m = w[4], C = document.createElement("canvas"), C.width = D, C.height = G, v = C.getContext("2d"), F = v.createLinearGradient(B, h, d, m), ah(u.stops, y).forEach(function(zA) {
                        return F.addColorStop(zA.stop, TA(zA.color));
                      }), v.fillStyle = F, v.fillRect(0, 0, D, G), D > 0 && G > 0 && (U = i.ctx.createPattern(C, "repeat"), i.renderRepeat(S, U, $, K))) : XS(u) && (E = rc(t, r, [
                        null,
                        null,
                        null
                      ]), S = E[0], P = E[1], N = E[2], D = E[3], G = E[4], J = u.position.length === 0 ? [EB] : u.position, $ = nA(J[0], D), K = nA(J[J.length - 1], G), I = _S(u, $, K, D, G), x = I[0], L = I[1], x > 0 && L > 0 && (M = i.ctx.createRadialGradient(P + $, N + K, 0, P + $, N + K, x), ah(u.stops, x * 2).forEach(function(zA) {
                        return M.addColorStop(zA.stop, TA(zA.color));
                      }), i.path(S), i.ctx.fillStyle = M, x !== L ? (X = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, BA = L / x, gA = 1 / BA, i.ctx.save(), i.ctx.translate(X, dA), i.ctx.transform(1, 0, 0, BA, 0, 0), i.ctx.translate(-X, -dA), i.ctx.fillRect(P, gA * (N - dA) + dA, D, G * gA), i.ctx.restore()) : i.ctx.fill())), rA.label = 6;
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
        return VA(this, function(i) {
          return this.path(Rh(n, r)), this.ctx.fillStyle = TA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, i) {
      return YA(this, void 0, void 0, function() {
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
              return o = j2(i, n), this.path(o), this.ctx.fillStyle = TA(t), this.ctx.fill(), a = J2(i, n), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n, i, o, a, s, l, u, c = this;
        return VA(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, n = !Ar(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], o = sT(on(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), Ar(r.backgroundColor) || (this.ctx.fillStyle = TA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                c.ctx.save();
                var p = tl(t.curves), w = g.inset ? 0 : iT, y = z2(p, -w + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (c.path(p), c.ctx.clip(), c.mask(y)) : (c.mask(p), c.ctx.clip(), c.path(y)), c.ctx.shadowOffsetX = g.offsetX.number + w, c.ctx.shadowOffsetY = g.offsetY.number, c.ctx.shadowColor = TA(g.color), c.ctx.shadowBlur = g.blur.number, c.ctx.fillStyle = g.inset ? TA(g.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), f.label = 2;
            case 2:
              a = 0, s = 0, l = i, f.label = 3;
            case 3:
              return s < l.length ? (u = l[s], u.style !== 0 && !Ar(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
        var a, s, l, u, c, f, g, p, w, y, B, d, h, m, C, v, C, v;
        return VA(this, function(F) {
          return this.ctx.save(), a = Z2(i, n), s = Rh(i, n), o === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, u = s[0].start.y) : (l = s[0].x, u = s[0].y), Qe(s[1]) ? (c = s[1].end.x, f = s[1].end.y) : (c = s[1].x, f = s[1].y), n === 0 || n === 2 ? g = Math.abs(l - c) : g = Math.abs(u - f), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, o === 3 && (p = r, w = r), y = !0, g <= p * 2 ? y = !1 : g <= p * 2 + w ? (B = g / (2 * p + w), p *= B, w *= B) : (d = Math.floor((g + w) / (p + w)), h = (g - d * p) / (d - 1), m = (g - (d + 1) * p) / d, w = m <= 0 || Math.abs(w - h) < Math.abs(w - m) ? h : m), y && (o === 3 ? this.ctx.setLineDash([0, p + w]) : this.ctx.setLineDash([p, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = TA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Qe(s[0]) && (C = s[3], v = s[0], this.ctx.beginPath(), this.formatPath([new b(C.end.x, C.end.y), new b(v.start.x, v.start.y)]), this.ctx.stroke()), Qe(s[1]) && (C = s[1], v = s[2], this.ctx.beginPath(), this.formatPath([new b(C.end.x, C.end.y), new b(v.start.x, v.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var r;
        return VA(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Y2(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(XC)
), aT = function(A) {
  return A instanceof SC || A instanceof xC ? !0 : A instanceof SB && A.type !== qs && A.type !== Zs;
}, sT = function(A, e) {
  switch (A) {
    case 0:
      return tl(e);
    case 2:
      return G2(e);
    case 1:
    default:
      return rl(e);
  }
}, lT = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, uT = ["-apple-system", "system-ui"], cT = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return uT.indexOf(e) === -1;
  }) : A;
}, fT = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var r, n;
        return VA(this, function(i) {
          switch (i.label) {
            case 0:
              return r = Wf(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, dT(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(XC)
), dT = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, BT = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, va([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, va([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, va([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, va([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), gT = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new BT({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new O2(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), pT = function(A, e) {
  return e === void 0 && (e = {}), hT(A, e);
};
typeof window < "u" && PC.setContext(window);
var hT = function(A, e) {
  return YA(void 0, void 0, void 0, function() {
    var t, r, n, i, o, a, s, l, u, c, f, g, p, w, y, B, d, h, m, C, F, v, F, U, E, S, P, N, D, G, J, $, K, I, x, L, M, X, dA, BA;
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
          }, i = Lf({ logging: (P = e.logging) !== null && P !== void 0 ? P : !0, cache: e.cache }, n), o = {
            windowWidth: (N = e.windowWidth) !== null && N !== void 0 ? N : r.innerWidth,
            windowHeight: (D = e.windowHeight) !== null && D !== void 0 ? D : r.innerHeight,
            scrollX: (G = e.scrollX) !== null && G !== void 0 ? G : r.pageXOffset,
            scrollY: (J = e.scrollY) !== null && J !== void 0 ? J : r.pageYOffset
          }, a = new Qt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new gT(i, a), l = ($ = e.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, u = {
            allowTaint: (K = e.allowTaint) !== null && K !== void 0 ? K : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), c = new Oh(s, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = gA.sent(), p = LB(f) || w2(f) ? zx(f.ownerDocument) : _l(s, f), w = p.width, y = p.height, B = p.left, d = p.top, h = wT(s, f, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: h,
            scale: (x = (I = e.scale) !== null && I !== void 0 ? I : r.devicePixelRatio) !== null && x !== void 0 ? x : 1,
            x: ((L = e.x) !== null && L !== void 0 ? L : 0) + B,
            y: ((M = e.y) !== null && M !== void 0 ? M : 0) + d,
            width: (X = e.width) !== null && X !== void 0 ? X : Math.ceil(w),
            height: (dA = e.height) !== null && dA !== void 0 ? dA : Math.ceil(y)
          }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), F = new fT(s, m), [4, F.render(f)]) : [3, 3];
        case 2:
          return C = gA.sent(), [3, 5];
        case 3:
          return s.logger.debug("Document cloned, element located at " + B + "," + d + " with size " + w + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), v = TC(s, f), h === v.styles.backgroundColor && (v.styles.backgroundColor = Bt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new oT(s, m), [4, F.render(v)];
        case 4:
          C = gA.sent(), gA.label = 5;
        case 5:
          return (!((BA = e.removeContainer) !== null && BA !== void 0) || BA) && (Oh.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [2, C];
      }
    });
  });
}, wT = function(A, e, t) {
  var r = e.ownerDocument, n = r.documentElement ? Xi(A, getComputedStyle(r.documentElement).backgroundColor) : Bt.TRANSPARENT, i = r.body ? Xi(A, getComputedStyle(r.body).backgroundColor) : Bt.TRANSPARENT, o = typeof t == "string" ? Xi(A, t) : t === null ? Bt.TRANSPARENT : 4294967295;
  return e === r.documentElement ? Ar(n) ? Ar(i) ? o : i : n : o;
};
const Mh = (A) => {
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
function mT(A) {
  return new XMLSerializer().serializeToString(A);
}
const vT = /* @__PURE__ */ new Set(["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA"]);
function zC(A, e) {
  A.childNodes.forEach((t) => {
    t instanceof HTMLElement && e(t) && zC(t, e);
  });
}
function CT(A, e, t, r) {
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
function QT() {
  const A = [];
  let e = 0;
  return zC(document.body, (t) => {
    if (t.attributes.getNamedItem("data-isgandalf"))
      return !1;
    const r = window.getComputedStyle(t), n = r.cursor;
    if (t.checkVisibility() && (vT.has(t.tagName) || t.onclick && !t.onclick.toString().endsWith("(){}") || n == "pointer" || n == "grab")) {
      const i = t.getBoundingClientRect();
      return i.width > 0 && i.height > 0 && A.push(CT(t, i, r, e++)), !1;
    }
    return !0;
  }), A;
}
async function yT({
  product: A,
  query: e,
  previousSteps: t,
  apiUrl: r,
  currentPlan: n
}) {
  var C;
  const i = mT(
    Mh(document.documentElement.outerHTML)
  ), o = QT(), a = await pT(document.body, {
    ignoreElements: (v) => v.hasAttribute("data-isgandalf")
  }), s = await new Promise(
    (v) => a.toBlob((F) => v(F))
  );
  if (location.hash) {
    const v = document.createElement("a");
    document.body.appendChild(v);
    const F = window.URL.createObjectURL(s);
    v.href = F, v.download = "screenshot.png", v.click(), setTimeout(() => {
      window.URL.revokeObjectURL(F), document.body.removeChild(v);
    }, 0), console.log(i);
  }
  const l = JSON.stringify(
    o.map((v) => {
      const { element: F, ...U } = v;
      return {
        ...U,
        html: Mh(F.outerHTML).body.innerHTML
      };
    }),
    null,
    2
  ), u = new FormData();
  u.append("user_input", e), u.append("product", A), u.append("previous_steps_json", JSON.stringify(t)), u.append("screen_layout", l), n && u.append("current_plan", n), console.log(l), s && u.append("screenshot", s, "screenshot.png"), console.log(u);
  const f = await (await fetch(`${r}/gandalf`, {
    method: "POST",
    body: u
  })).json();
  console.log("Success:", f);
  const g = f.result.replace(/```json\n/, "").replace(/\n```/, ""), p = JSON.parse(g);
  console.log("Result Object:", p);
  const { Instructions: w, itemId: y, hasMoreInstructions: B, actionType: d, updatedPlan: h } = p;
  console.log(p);
  const m = ((C = o.find((v) => v.itemId === y)) == null ? void 0 : C.element) ?? null;
  return m || console.warn("No valid target element found for the popover."), {
    Instructions: w,
    targetElement: m,
    hasMoreInstructions: B,
    actionType: d,
    updatedPlan: h
  };
}
const FT = Q.forwardRef(
  ({ state: A, currentQuery: e, onActivate: t, onCacnel: r }, n) => {
    const [i, o] = Q.useState(!1), a = Q.useRef(), [s, l] = Q.useState(!1);
    return Q.useImperativeHandle(n, () => ({
      showComplete: () => {
        o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => {
          o(!1);
        }, 1e3);
      },
      showOption: () => {
        l(!0);
      }
    })), /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      /* @__PURE__ */ V.jsx(
        "button",
        {
          className: Vv(HA.widgetButton, {
            [HA.loading]: A === "loading",
            [HA.waitingForUser]: A === "waitingForUser",
            [HA.withComplete]: i
          }),
          onMouseDown: (u) => {
            u.stopPropagation();
          },
          onPointerDown: (u) => {
            u.stopPropagation();
          },
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), A === "idle" ? t() : l((c) => !c);
          },
          "aria-label": "Toggle chat",
          "data-isgandalf": !0,
          children: /* @__PURE__ */ V.jsxs("div", { className: HA.buttonContentWrapper, children: [
            /* @__PURE__ */ V.jsx("div", { className: HA.buttonContent, children: "💬" }),
            /* @__PURE__ */ V.jsx("div", { className: HA.buttonContent, children: "✅" })
          ] })
        }
      ),
      s && A !== "idle" && /* @__PURE__ */ V.jsxs(
        "div",
        {
          className: HA.options,
          "data-isGandalf": !0,
          onMouseDown: (u) => {
            u.stopPropagation();
          },
          onPointerDown: (u) => {
            u.stopPropagation();
          },
          children: [
            /* @__PURE__ */ V.jsx("div", { className: HA.optionPane, children: e }),
            /* @__PURE__ */ V.jsxs("div", { className: HA.optionPane, children: [
              /* @__PURE__ */ V.jsx("div", { className: HA.stateText, children: A === "loading" ? "Loading..." : "Waiting for user action..." }),
              /* @__PURE__ */ V.jsx(
                "button",
                {
                  className: HA.optionsButton,
                  onClick: (u) => {
                    u.preventDefault(), u.stopPropagation(), r(), l(!1);
                  },
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ V.jsx(
                "button",
                {
                  className: HA.optionsButton,
                  onClick: (u) => {
                    u.preventDefault(), u.stopPropagation(), l(!1);
                  },
                  children: "Hide"
                }
              )
            ] })
          ]
        }
      )
    ] });
  }
);
let UT = 0;
function ET() {
  return UT++;
}
function IT() {
  return document.querySelector(".shimmering-loader") !== null;
}
function HT(A, e) {
  const t = new MutationObserver((r) => {
    r.some((n) => n.removedNodes.length > 0) && (document.contains(A) || (t.disconnect(), e()));
  });
  return t.observe(document.body, {
    childList: !0,
    subtree: !0
  }), t;
}
function Ph(A, e) {
  return e === A || e.contains(A);
}
function xT(A) {
  const e = Q.useRef(A);
  return e.current = A, Q.useCallback(() => e.current(), []);
}
function ST() {
  const A = Q.useRef(null);
  return {
    observe(e, t) {
      this.disconnect(), A.current = HT(e, t);
    },
    disconnect() {
      const e = A.current;
      e && e.disconnect();
    }
  };
}
const LT = ({
  productName: A,
  isWidgetVisible: e,
  apiUrl: t
}) => {
  var F, U;
  const [r, n] = Q.useState(""), i = Q.useRef(null), [o, a] = Q.useState("idle"), [s, l] = Q.useState(!1), [u, c] = Q.useState(""), f = Q.useRef(0), g = ST(), p = Q.useRef(null), w = Q.useRef(null), { refs: y, floatingStyles: B, middlewareData: d, placement: h } = F1({
    middleware: [a1(10), l1(), s1(), u1({ element: p })],
    whileElementsMounted: A1
  }), m = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[h.split("-")[0]] || "top", C = xT(() => {
    var P;
    const E = i.current;
    if (!E)
      return;
    if (!E.hasMoreInstructions) {
      a("idle"), c(""), n(""), i.current = null, f.current = null, (P = w.current) == null || P.showComplete();
      return;
    }
    const S = E.query;
    S && (a("loading"), (async () => {
      do
        await new Promise((N) => setTimeout(N, 500));
      while (IT());
      v(S, !1);
    })());
  });
  Q.useEffect(() => {
    const E = (N) => {
      N.key === "p" && (N.metaKey || N.ctrlKey) && (N.preventDefault(), l(!0));
    };
    document.addEventListener("keydown", E);
    const S = (N) => {
      var D;
      N.target instanceof Element && ((D = i.current) == null ? void 0 : D.actionType) === "click" && y.domReference.current && y.domReference.current instanceof Element && Ph(N.target, y.domReference.current) && C();
    }, P = (N) => {
      var D;
      N.target instanceof Element && ((D = i.current) == null ? void 0 : D.actionType) === "fill" && y.domReference.current && y.domReference.current instanceof Element && Ph(N.target, y.domReference.current) && C();
    };
    return document.addEventListener("click", S, !0), document.addEventListener("input", P), () => {
      document.removeEventListener("keydown", E), document.removeEventListener("click", S), document.removeEventListener("input", P);
    };
  }, []);
  const v = async (E, S) => {
    var N, D, G, J;
    if (console.log("Submitting query from index:", E), o === "loading")
      return;
    a("loading"), S && ((N = w.current) == null || N.showOption());
    const P = ET();
    f.current = P;
    try {
      const {
        Instructions: $,
        targetElement: K,
        hasMoreInstructions: I,
        actionType: x,
        updatedPlan: L
      } = await yT({
        query: E,
        previousSteps: ((D = i.current) == null ? void 0 : D.completedSteps) ?? [],
        product: A,
        apiUrl: t,
        currentPlan: (G = i.current) == null ? void 0 : G.currentPlan
      });
      if (f.current !== P)
        return;
      $ && n($), i.current = {
        query: E,
        completedSteps: [
          ...((J = i.current) == null ? void 0 : J.completedSteps) ?? [],
          $
        ],
        hasMoreInstructions: I,
        actionType: x,
        currentPlan: L
      }, console.log(K), y.setReference(K), K ? g.observe(K, () => {
        n("");
      }) : g.disconnect(), a(I ? "waitingForUser" : "idle"), l(!1);
    } catch ($) {
      console.error($), a("idle");
    }
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("div", { className: HA.container, "data-isGandalf": !0, children: /* @__PURE__ */ V.jsx(
      Ex,
      {
        open: s,
        query: u,
        isApiCallInProgress: o === "loading",
        setQuery: c,
        setOpen: l,
        handleSubmit: (E) => v(E, !0)
      }
    ) }),
    r !== "" && /* @__PURE__ */ V.jsx(
      "div",
      {
        ref: y.setFloating,
        style: B,
        "data-isgandalf": !0,
        children: /* @__PURE__ */ V.jsxs("div", { className: HA.floatingPopover, children: [
          r,
          o === "loading" && /* @__PURE__ */ V.jsx("div", { className: HA.popoverLoadingOuter, children: /* @__PURE__ */ V.jsx("div", { className: HA.popoverLoading }) }),
          /* @__PURE__ */ V.jsx(
            "div",
            {
              ref: p,
              className: HA.arrow,
              style: {
                [m]: "-6px",
                ...((F = d.arrow) == null ? void 0 : F.x) != null && {
                  left: `${d.arrow.x}px`
                },
                ...((U = d.arrow) == null ? void 0 : U.y) != null && {
                  top: `${d.arrow.y}px`
                }
              }
            }
          )
        ] })
      }
    ),
    e && /* @__PURE__ */ V.jsx(
      FT,
      {
        ref: w,
        state: o,
        onActivate: () => {
          l(!0);
        },
        onCacnel: () => {
          a("idle"), c(""), n(""), i.current = null, f.current = null;
        },
        currentQuery: u
      }
    )
  ] });
}, bB = document.createElement("div");
bB.className = HA.outerContainer;
document.body.appendChild(bB);
const bT = window.__gandalf_product ?? "demo", TT = window.__gandalf_api_url ?? "http://localhost:8000";
CF.render(
  /* @__PURE__ */ V.jsx(LT, { productName: bT, isWidgetVisible: !0, apiUrl: TT }),
  bB
);
