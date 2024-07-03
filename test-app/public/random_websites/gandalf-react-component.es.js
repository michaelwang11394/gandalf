function YC(A, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n)
        if (r !== "default" && !(r in A)) {
          const i = Object.getOwnPropertyDescriptor(n, r);
          i && Object.defineProperty(A, r, i.get ? i : {
            enumerable: !0,
            get: () => n[r]
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
var Io = Symbol.for("react.element"), jC = Symbol.for("react.portal"), JC = Symbol.for("react.fragment"), ZC = Symbol.for("react.strict_mode"), qC = Symbol.for("react.profiler"), AQ = Symbol.for("react.provider"), eQ = Symbol.for("react.context"), tQ = Symbol.for("react.forward_ref"), nQ = Symbol.for("react.suspense"), rQ = Symbol.for("react.memo"), iQ = Symbol.for("react.lazy"), TB = Symbol.iterator;
function oQ(A) {
  return A === null || typeof A != "object" ? null : (A = TB && A[TB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var Vh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $h = Object.assign, Wh = {};
function jr(A, e, t) {
  this.props = A, this.context = e, this.refs = Wh, this.updater = t || Vh;
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
jr.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function Xh() {
}
Xh.prototype = jr.prototype;
function qf(A, e, t) {
  this.props = A, this.context = e, this.refs = Wh, this.updater = t || Vh;
}
var Ad = qf.prototype = new Xh();
Ad.constructor = qf;
$h(Ad, jr.prototype);
Ad.isPureReactComponent = !0;
var kB = Array.isArray, zh = Object.prototype.hasOwnProperty, ed = { current: null }, Yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(A, e, t) {
  var n, r = {}, i = null, o = null;
  if (e != null) for (n in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (i = "" + e.key), e) zh.call(e, n) && !Yh.hasOwnProperty(n) && (r[n] = e[n]);
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    r.children = s;
  }
  if (A && A.defaultProps) for (n in a = A.defaultProps, a) r[n] === void 0 && (r[n] = a[n]);
  return { $$typeof: Io, type: A, key: i, ref: o, props: r, _owner: ed.current };
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
function Ga(A, e, t, n, r) {
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
  if (o) return o = A, r = r(o), A = n === "" ? "." + ql(o, 0) : n, kB(r) ? (t = "", A != null && (t = A.replace(OB, "$&/") + "/"), Ga(r, e, t, "", function(l) {
    return l;
  })) : r != null && (td(r) && (r = aQ(r, t + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace(OB, "$&/") + "/") + A)), e.push(r)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", kB(A)) for (var a = 0; a < A.length; a++) {
    i = A[a];
    var s = n + ql(i, a);
    o += Ga(i, e, t, s, r);
  }
  else if (s = oQ(A), typeof s == "function") for (A = s.call(A), a = 0; !(i = A.next()).done; ) i = i.value, s = n + ql(i, a++), o += Ga(i, e, t, s, r);
  else if (i === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Vo(A, e, t) {
  if (A == null) return A;
  var n = [], r = 0;
  return Ga(A, n, "", "", function(i) {
    return e.call(t, i, r++);
  }), n;
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
Y.Component = jr;
Y.Fragment = JC;
Y.Profiler = qC;
Y.PureComponent = qf;
Y.StrictMode = ZC;
Y.Suspense = nQ;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uQ;
Y.act = Jh;
Y.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var n = $h({}, A.props), r = A.key, i = A.ref, o = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, o = ed.current), e.key !== void 0 && (r = "" + e.key), A.type && A.type.defaultProps) var a = A.type.defaultProps;
    for (s in e) zh.call(e, s) && !Yh.hasOwnProperty(s) && (n[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = t;
  else if (1 < s) {
    a = Array(s);
    for (var l = 0; l < s; l++) a[l] = arguments[l + 2];
    n.children = a;
  }
  return { $$typeof: Io, type: A.type, key: r, ref: i, props: n, _owner: o };
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
  return { $$typeof: rQ, type: A, compare: e === void 0 ? null : e };
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
const _ = /* @__PURE__ */ il(Q), rc = /* @__PURE__ */ YC({
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
  var n, r = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (n in e) BQ.call(e, n) && !pQ.hasOwnProperty(n) && (r[n] = e[n]);
  if (A && A.defaultProps) for (n in e = A.defaultProps, e) r[n] === void 0 && (r[n] = e[n]);
  return { $$typeof: fQ, type: A, key: i, ref: o, props: r, _owner: gQ.current };
}
ol.Fragment = dQ;
ol.jsx = Zh;
ol.jsxs = Zh;
_h.exports = ol;
var G = _h.exports, qh = { exports: {} }, pe = {}, Aw = { exports: {} }, ew = {};
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
      if (0 < r(X, x)) I[M] = x, I[L] = X, L = M;
      else break A;
    }
  }
  function t(I) {
    return I.length === 0 ? null : I[0];
  }
  function n(I) {
    if (I.length === 0) return null;
    var x = I[0], L = I.pop();
    if (L !== x) {
      I[0] = L;
      A: for (var M = 0, X = I.length, dA = X >>> 1; M < dA; ) {
        var BA = 2 * (M + 1) - 1, gA = I[BA], nA = BA + 1, zA = I[nA];
        if (0 > r(gA, L)) nA < X && 0 > r(zA, gA) ? (I[M] = zA, I[nA] = L, M = nA) : (I[M] = gA, I[BA] = L, M = BA);
        else if (nA < X && 0 > r(zA, L)) I[M] = zA, I[nA] = L, M = nA;
        else break A;
      }
    }
    return x;
  }
  function r(I, x) {
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
      if (x.callback === null) n(l);
      else if (x.startTime <= I) n(l), x.sortIndex = x.expirationTime, e(s, x);
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
          x = A.unstable_now(), typeof X == "function" ? c.callback = X : c === t(s) && n(s), h(x);
        } else n(s);
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
    var V = new MessageChannel(), J = V.port2;
    V.port1.onmessage = N, D = function() {
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
function Xn(A, e) {
  Tr(A, e), Tr(A + "Capture", e);
}
function Tr(A, e) {
  for (Ji[A] = e, A = 0; A < e.length; A++) tw.add(e[A]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = Object.prototype.hasOwnProperty, mQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, DB = {}, KB = {};
function vQ(A) {
  return ic.call(KB, A) ? !0 : ic.call(DB, A) ? !1 : mQ.test(A) ? KB[A] = !0 : (DB[A] = !0, !1);
}
function CQ(A, e, t, n) {
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
function QQ(A, e, t, n) {
  if (e === null || typeof e > "u" || CQ(A, e, t, n)) return !0;
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
function Ae(A, e, t, n, r, i, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = r, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = i, this.removeEmptyString = o;
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
var nd = /[\-:]([a-z])/g;
function rd(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    nd,
    rd
  );
  PA[e] = new Ae(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(nd, rd);
  PA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(nd, rd);
  PA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  PA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
PA.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  PA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function id(A, e, t, n) {
  var r = PA.hasOwnProperty(e) ? PA[e] : null;
  (r !== null ? r.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (QQ(e, t, r, n) && (t = null), n || r === null ? vQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : r.mustUseProperty ? A[r.propertyName] = t === null ? r.type === 3 ? !1 : "" : t : (e = r.attributeName, n = r.attributeNamespace, t === null ? A.removeAttribute(e) : (r = r.type, t = r === 3 || r === 4 && t === !0 ? "" : "" + t, n ? A.setAttributeNS(n, e, t) : A.setAttribute(e, t))));
}
var yt = wQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $o = Symbol.for("react.element"), ar = Symbol.for("react.portal"), sr = Symbol.for("react.fragment"), od = Symbol.for("react.strict_mode"), oc = Symbol.for("react.profiler"), nw = Symbol.for("react.provider"), rw = Symbol.for("react.context"), ad = Symbol.for("react.forward_ref"), ac = Symbol.for("react.suspense"), sc = Symbol.for("react.suspense_list"), sd = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), iw = Symbol.for("react.offscreen"), RB = Symbol.iterator;
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
        var n = l;
      }
      Reflect.construct(A, [], e);
    } else {
      try {
        e.call();
      } catch (l) {
        n = l;
      }
      A.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l) {
        n = l;
      }
      A();
    }
  } catch (l) {
    if (l && n && typeof l.stack == "string") {
      for (var r = l.stack.split(`
`), i = n.stack.split(`
`), o = r.length - 1, a = i.length - 1; 1 <= o && 0 <= a && r[o] !== i[a]; ) a--;
      for (; 1 <= o && 0 <= a; o--, a--) if (r[o] !== i[a]) {
        if (o !== 1 || a !== 1)
          do
            if (o--, a--, 0 > a || r[o] !== i[a]) {
              var s = `
` + r[o].replace(" at new ", " at ");
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
    case sr:
      return "Fragment";
    case ar:
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
    case rw:
      return (A.displayName || "Context") + ".Consumer";
    case nw:
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
function en(A) {
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
  var e = ow(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), n = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var r = t.get, i = t.set;
    return Object.defineProperty(A, e, { configurable: !0, get: function() {
      return r.call(this);
    }, set: function(o) {
      n = "" + o, i.call(this, o);
    } }), Object.defineProperty(A, e, { enumerable: t.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
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
  var t = e.getValue(), n = "";
  return A && (n = ow(A) ? A.checked ? "true" : "false" : A.value), A = n, A !== t ? (e.setValue(A), !0) : !1;
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
  var t = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  t = en(e.value != null ? e.value : t), A._wrapperState = { initialChecked: n, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function sw(A, e) {
  e = e.checked, e != null && id(A, "checked", e, !1);
}
function cc(A, e) {
  sw(A, e);
  var t = en(e.value), n = e.type;
  if (t != null) n === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (n === "submit" || n === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? fc(A, e.type, t) : e.hasOwnProperty("defaultValue") && fc(A, e.type, en(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function MB(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function fc(A, e, t) {
  (e !== "number" || ds(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var mi = Array.isArray;
function Fr(A, e, t, n) {
  if (A = A.options, e) {
    e = {};
    for (var r = 0; r < t.length; r++) e["$" + t[r]] = !0;
    for (t = 0; t < A.length; t++) r = e.hasOwnProperty("$" + A[t].value), A[t].selected !== r && (A[t].selected = r), r && n && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + en(t), e = null, r = 0; r < A.length; r++) {
      if (A[r].value === t) {
        A[r].selected = !0, n && (A[r].defaultSelected = !0);
        return;
      }
      e !== null || A[r].disabled || (e = A[r]);
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
  A._wrapperState = { initialValue: en(t) };
}
function lw(A, e) {
  var t = en(e.value), n = en(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), n != null && (A.defaultValue = "" + n);
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
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, n, r);
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
    var n = t.indexOf("--") === 0, r = fw(t, e[t], n);
    t === "float" && (t = "cssFloat"), n ? A.setProperty(t, r) : A[t] = r;
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
var wc = null, Ur = null, Er = null;
function GB(A) {
  if (A = So(A)) {
    if (typeof wc != "function") throw Error(H(280));
    var e = A.stateNode;
    e && (e = cl(e), wc(A.stateNode, A.type, e));
  }
}
function Bw(A) {
  Ur ? Er ? Er.push(A) : Er = [A] : Ur = A;
}
function gw() {
  if (Ur) {
    var A = Ur, e = Er;
    if (Er = Ur = null, GB(A), e) for (A = 0; A < e.length; A++) GB(e[A]);
  }
}
function pw(A, e) {
  return A(e);
}
function hw() {
}
var nu = !1;
function ww(A, e, t) {
  if (nu) return A(e, t);
  nu = !0;
  try {
    return pw(A, e, t);
  } finally {
    nu = !1, (Ur !== null || Er !== null) && (hw(), gw());
  }
}
function qi(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var n = cl(t);
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
function HQ(A, e, t, n, r, i, o, a, s) {
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
function SQ(A, e, t, n, r, i, o, a, s) {
  Ti = !1, Bs = null, HQ.apply(xQ, arguments);
}
function LQ(A, e, t, n, r, i, o, a, s) {
  if (SQ.apply(this, arguments), Ti) {
    if (Ti) {
      var l = Bs;
      Ti = !1, Bs = null;
    } else throw Error(H(198));
    gs || (gs = !0, vc = l);
  }
}
function zn(A) {
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
  if (zn(A) !== A) throw Error(H(188));
}
function bQ(A) {
  var e = A.alternate;
  if (!e) {
    if (e = zn(A), e === null) throw Error(H(188));
    return e !== A ? null : A;
  }
  for (var t = A, n = e; ; ) {
    var r = t.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (n = r.return, n !== null) {
        t = n;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === t) return VB(r), A;
        if (i === n) return VB(r), e;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (t.return !== n.return) t = r, n = i;
    else {
      for (var o = !1, a = r.child; a; ) {
        if (a === t) {
          o = !0, t = r, n = i;
          break;
        }
        if (a === n) {
          o = !0, n = r, t = i;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === t) {
            o = !0, t = i, n = r;
            break;
          }
          if (a === n) {
            o = !0, n = i, t = r;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(H(189));
      }
    }
    if (t.alternate !== n) throw Error(H(190));
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
  var n = 0, r = A.suspendedLanes, i = A.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? n = vi(a) : (i &= o, i !== 0 && (n = vi(i)));
  } else o = t & ~r, o !== 0 ? n = vi(o) : i !== 0 && (n = vi(i));
  if (n === 0) return 0;
  if (e !== 0 && e !== n && !(e & r) && (r = n & -n, i = e & -e, r >= i || r === 16 && (i & 4194240) !== 0)) return e;
  if (n & 4 && (n |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= n; 0 < e; ) t = 31 - Ne(e), r = 1 << t, n |= A[t], e &= ~r;
  return n;
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
  for (var t = A.suspendedLanes, n = A.pingedLanes, r = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
    var o = 31 - Ne(i), a = 1 << o, s = r[o];
    s === -1 ? (!(a & t) || a & n) && (r[o] = PQ(a, e)) : s <= e && (A.expiredLanes |= a), i &= ~a;
  }
}
function Cc(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function Uw() {
  var A = zo;
  return zo <<= 1, !(zo & 4194240) && (zo = 64), A;
}
function ru(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function Ho(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - Ne(e), A[e] = t;
}
function GQ(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var n = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var r = 31 - Ne(t), i = 1 << r;
    e[r] = 0, n[r] = -1, A[r] = -1, t &= ~i;
  }
}
function cd(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var n = 31 - Ne(t), r = 1 << n;
    r & e | A[n] & e && (A[n] |= e), t &= ~r;
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
function ai(A, e, t, n, r, i) {
  return A === null || A.nativeEvent !== i ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: n, nativeEvent: i, targetContainers: [r] }, e !== null && (e = So(e), e !== null && fd(e)), A) : (A.eventSystemFlags |= n, e = A.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), A);
}
function $Q(A, e, t, n, r) {
  switch (e) {
    case "focusin":
      return $t = ai($t, A, e, t, n, r), !0;
    case "dragenter":
      return Wt = ai(Wt, A, e, t, n, r), !0;
    case "mouseover":
      return Xt = ai(Xt, A, e, t, n, r), !0;
    case "pointerover":
      var i = r.pointerId;
      return Ao.set(i, ai(Ao.get(i) || null, A, e, t, n, r)), !0;
    case "gotpointercapture":
      return i = r.pointerId, eo.set(i, ai(eo.get(i) || null, A, e, t, n, r)), !0;
  }
  return !1;
}
function Lw(A) {
  var e = Qn(A.target);
  if (e !== null) {
    var t = zn(e);
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
      var n = new t.constructor(t.type, t);
      hc = n, t.target.dispatchEvent(n), hc = null;
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
  function e(r) {
    return si(r, A);
  }
  if (0 < jo.length) {
    si(jo[0], A);
    for (var t = 1; t < jo.length; t++) {
      var n = jo[t];
      n.blockedOn === A && (n.blockedOn = null);
    }
  }
  for ($t !== null && si($t, A), Wt !== null && si(Wt, A), Xt !== null && si(Xt, A), Ao.forEach(e), eo.forEach(e), t = 0; t < Dt.length; t++) n = Dt[t], n.blockedOn === A && (n.blockedOn = null);
  for (; 0 < Dt.length && (t = Dt[0], t.blockedOn === null); ) Lw(t), t.blockedOn === null && Dt.shift();
}
var Ir = yt.ReactCurrentBatchConfig, ws = !0;
function XQ(A, e, t, n) {
  var r = eA, i = Ir.transition;
  Ir.transition = null;
  try {
    eA = 1, dd(A, e, t, n);
  } finally {
    eA = r, Ir.transition = i;
  }
}
function zQ(A, e, t, n) {
  var r = eA, i = Ir.transition;
  Ir.transition = null;
  try {
    eA = 4, dd(A, e, t, n);
  } finally {
    eA = r, Ir.transition = i;
  }
}
function dd(A, e, t, n) {
  if (ws) {
    var r = yc(A, e, t, n);
    if (r === null) Bu(A, e, n, ms, t), WB(A, n);
    else if ($Q(r, A, e, t, n)) n.stopPropagation();
    else if (WB(A, n), e & 4 && -1 < VQ.indexOf(A)) {
      for (; r !== null; ) {
        var i = So(r);
        if (i !== null && Iw(i), i = yc(A, e, t, n), i === null && Bu(A, e, n, ms, t), i === r) break;
        r = i;
      }
      r !== null && n.stopPropagation();
    } else Bu(A, e, n, null, t);
  }
}
var ms = null;
function yc(A, e, t, n) {
  if (ms = null, A = ld(n), A = Qn(A), A !== null) if (e = zn(A), e === null) A = null;
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
  var A, e = Bd, t = e.length, n, r = "value" in Nt ? Nt.value : Nt.textContent, i = r.length;
  for (A = 0; A < t && e[A] === r[A]; A++) ;
  var o = t - A;
  for (n = 1; n <= o && e[t - n] === r[i - n]; n++) ;
  return Wa = r.slice(A, 1 < n ? 1 - n : void 0);
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
  function e(t, n, r, i, o) {
    this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
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
var Jr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gd = he(Jr), xo = mA({}, Jr, { view: 0, detail: 0 }), YQ = he(xo), iu, ou, li, sl = mA({}, xo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pd, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== li && (li && A.type === "mousemove" ? (iu = A.screenX - li.screenX, ou = A.screenY - li.screenY) : ou = iu = 0, li = A), iu);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : ou;
} }), YB = he(sl), jQ = mA({}, sl, { dataTransfer: 0 }), JQ = he(jQ), ZQ = mA({}, xo, { relatedTarget: 0 }), au = he(ZQ), qQ = mA({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ay = he(qQ), ey = mA({}, Jr, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), ty = he(ey), ny = mA({}, Jr, { data: 0 }), jB = he(ny), ry = {
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
    var e = ry[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = Xa(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? iy[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pd, charCode: function(A) {
  return A.type === "keypress" ? Xa(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? Xa(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), ly = he(sy), uy = mA({}, sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), JB = he(uy), cy = mA({}, xo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pd }), fy = he(cy), dy = mA({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), By = he(dy), gy = mA({}, sl, {
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
var lr = !1;
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
  if (lr) return A === "compositionend" || !hd && Ow(A, e) ? (A = Tw(), Wa = Bd = Nt = null, lr = !1, A) : null;
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
function Kw(A, e, t, n) {
  Bw(n), e = vs(e, "onChange"), 0 < e.length && (t = new gd("onChange", "change", null, t, n), A.push({ event: t, listeners: e }));
}
var Oi = null, no = null;
function Qy(A) {
  zw(A, 0);
}
function ll(A) {
  var e = fr(A);
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
  Oi && (Oi.detachEvent("onpropertychange", Nw), no = Oi = null);
}
function Nw(A) {
  if (A.propertyName === "value" && ll(no)) {
    var e = [];
    Kw(e, no, A, ld(A)), ww(Qy, e);
  }
}
function Fy(A, e, t) {
  A === "focusin" ? (tg(), Oi = e, no = t, Oi.attachEvent("onpropertychange", Nw)) : A === "focusout" && tg();
}
function Uy(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return ll(no);
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
function ro(A, e) {
  if (_e(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), n = Object.keys(e);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var r = t[n];
    if (!ic.call(e, r) || !_e(A[r], e[r])) return !1;
  }
  return !0;
}
function ng(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function rg(A, e) {
  var t = ng(A);
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
    t = ng(t);
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
  var e = Pw(), t = A.focusedElem, n = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Mw(t.ownerDocument.documentElement, t)) {
    if (n !== null && wd(t)) {
      if (e = n.start, A = n.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var r = t.textContent.length, i = Math.min(n.start, r);
        n = n.end === void 0 ? i : Math.min(n.end, r), !A.extend && i > n && (r = n, n = i, i = r), r = rg(t, i);
        var o = rg(
          t,
          n
        );
        r && o && (A.rangeCount !== 1 || A.anchorNode !== r.node || A.anchorOffset !== r.offset || A.focusNode !== o.node || A.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), A.removeAllRanges(), i > n ? (A.addRange(e), A.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode; ) A.nodeType === 1 && e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var Sy = gt && "documentMode" in document && 11 >= document.documentMode, ur = null, Fc = null, Di = null, Uc = !1;
function ig(A, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Uc || ur == null || ur !== ds(n) || (n = ur, "selectionStart" in n && wd(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Di && ro(Di, n) || (Di = n, n = vs(Fc, "onSelect"), 0 < n.length && (e = new gd("onSelect", "select", null, e, t), A.push({ event: e, listeners: n }), e.target = ur)));
}
function Zo(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var cr = { animationend: Zo("Animation", "AnimationEnd"), animationiteration: Zo("Animation", "AnimationIteration"), animationstart: Zo("Animation", "AnimationStart"), transitionend: Zo("Transition", "TransitionEnd") }, uu = {}, _w = {};
gt && (_w = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
function ul(A) {
  if (uu[A]) return uu[A];
  if (!cr[A]) return A;
  var e = cr[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in _w) return uu[A] = e[t];
  return A;
}
var Gw = ul("animationend"), Vw = ul("animationiteration"), $w = ul("animationstart"), Ww = ul("transitionend"), Xw = /* @__PURE__ */ new Map(), og = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(A, e) {
  Xw.set(A, e), Xn(e, [A]);
}
for (var cu = 0; cu < og.length; cu++) {
  var fu = og[cu], Ly = fu.toLowerCase(), by = fu[0].toUpperCase() + fu.slice(1);
  cn(Ly, "on" + by);
}
cn(Gw, "onAnimationEnd");
cn(Vw, "onAnimationIteration");
cn($w, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Ww, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
Xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
function ag(A, e, t) {
  var n = A.type || "unknown-event";
  A.currentTarget = t, LQ(n, e, void 0, A), A.currentTarget = null;
}
function zw(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var n = A[t], r = n.event;
    n = n.listeners;
    A: {
      var i = void 0;
      if (e) for (var o = n.length - 1; 0 <= o; o--) {
        var a = n[o], s = a.instance, l = a.currentTarget;
        if (a = a.listener, s !== i && r.isPropagationStopped()) break A;
        ag(r, a, l), i = s;
      }
      else for (o = 0; o < n.length; o++) {
        if (a = n[o], s = a.instance, l = a.currentTarget, a = a.listener, s !== i && r.isPropagationStopped()) break A;
        ag(r, a, l), i = s;
      }
    }
  }
  if (gs) throw A = vc, gs = !1, vc = null, A;
}
function oA(A, e) {
  var t = e[Sc];
  t === void 0 && (t = e[Sc] = /* @__PURE__ */ new Set());
  var n = A + "__bubble";
  t.has(n) || (Yw(e, A, 2, !1), t.add(n));
}
function du(A, e, t) {
  var n = 0;
  e && (n |= 4), Yw(t, A, n, e);
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
function Yw(A, e, t, n) {
  switch (bw(e)) {
    case 1:
      var r = XQ;
      break;
    case 4:
      r = zQ;
      break;
    default:
      r = dd;
  }
  t = r.bind(null, e, t, A), r = void 0, !mc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), n ? r !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: r }) : A.addEventListener(e, t, !0) : r !== void 0 ? A.addEventListener(e, t, { passive: r }) : A.addEventListener(e, t, !1);
}
function Bu(A, e, t, n, r) {
  var i = n;
  if (!(e & 1) && !(e & 2) && n !== null) A: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var a = n.stateNode.containerInfo;
      if (a === r || a.nodeType === 8 && a.parentNode === r) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === r || s.nodeType === 8 && s.parentNode === r)) return;
        o = o.return;
      }
      for (; a !== null; ) {
        if (o = Qn(a), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          n = i = o;
          continue A;
        }
        a = a.parentNode;
      }
    }
    n = n.return;
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
        if (f = A === "mouseover" || A === "pointerover", g = A === "mouseout" || A === "pointerout", f && t !== hc && (p = t.relatedTarget || t.fromElement) && (Qn(p) || p[pt])) break A;
        if ((g || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (p = t.relatedTarget || t.toElement, g = l, p = p ? Qn(p) : null, p !== null && (y = zn(p), p !== y || p.tag !== 5 && p.tag !== 6) && (p = null)) : (g = null, p = l), g !== p)) {
          if (w = YB, m = "onMouseLeave", B = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (w = JB, m = "onPointerLeave", B = "onPointerEnter", d = "pointer"), y = g == null ? f : fr(g), h = p == null ? f : fr(p), f = new w(m, d + "leave", g, t, u), f.target = y, f.relatedTarget = h, m = null, Qn(u) === l && (w = new w(B, d + "enter", p, t, u), w.target = h, w.relatedTarget = y, m = w), y = m, g && p) e: {
            for (w = g, B = p, d = 0, h = w; h; h = Jn(h)) d++;
            for (h = 0, m = B; m; m = Jn(m)) h++;
            for (; 0 < d - h; ) w = Jn(w), d--;
            for (; 0 < h - d; ) B = Jn(B), h--;
            for (; d--; ) {
              if (w === B || B !== null && w === B.alternate) break e;
              w = Jn(w), B = Jn(B);
            }
            w = null;
          }
          else w = null;
          g !== null && sg(c, f, g, w, !1), p !== null && y !== null && sg(c, y, p, w, !0);
        }
      }
      A: {
        if (f = l ? fr(l) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var C = yy;
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
      switch (v = l ? fr(l) : window, A) {
        case "focusin":
          (Ag(v) || v.contentEditable === "true") && (ur = v, Fc = l, Di = null);
          break;
        case "focusout":
          Di = Fc = ur = null;
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
      else lr ? Ow(A, t) && (U = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
      U && (kw && t.locale !== "ko" && (lr || U !== "onCompositionStart" ? U === "onCompositionEnd" && lr && (F = Tw()) : (Nt = u, Bd = "value" in Nt ? Nt.value : Nt.textContent, lr = !0)), v = vs(l, U), 0 < v.length && (U = new jB(U, A, null, t, u), c.push({ event: U, listeners: v }), F ? U.data = F : (F = Dw(t), F !== null && (U.data = F)))), (F = wy ? my(A, t) : vy(A, t)) && (l = vs(l, "onBeforeInput"), 0 < l.length && (u = new jB("onBeforeInput", "beforeinput", null, t, u), c.push({ event: u, listeners: l }), u.data = F));
    }
    zw(c, e);
  });
}
function oo(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function vs(A, e) {
  for (var t = e + "Capture", n = []; A !== null; ) {
    var r = A, i = r.stateNode;
    r.tag === 5 && i !== null && (r = i, i = qi(A, t), i != null && n.unshift(oo(A, i, r)), i = qi(A, e), i != null && n.push(oo(A, i, r))), A = A.return;
  }
  return n;
}
function Jn(A) {
  if (A === null) return null;
  do
    A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function sg(A, e, t, n, r) {
  for (var i = e._reactName, o = []; t !== null && t !== n; ) {
    var a = t, s = a.alternate, l = a.stateNode;
    if (s !== null && s === n) break;
    a.tag === 5 && l !== null && (a = l, r ? (s = qi(t, i), s != null && o.unshift(oo(t, s, a))) : r || (s = qi(t, i), s != null && o.push(oo(t, s, a)))), t = t.return;
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
  var t = e, n = 0;
  do {
    var r = t.nextSibling;
    if (A.removeChild(t), r && r.nodeType === 8) if (t = r.data, t === "/$") {
      if (n === 0) {
        A.removeChild(r), to(e);
        return;
      }
      n--;
    } else t !== "$" && t !== "$?" && t !== "$!" || n++;
    t = r;
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
var Zr = Math.random().toString(36).slice(2), je = "__reactFiber$" + Zr, ao = "__reactProps$" + Zr, pt = "__reactContainer$" + Zr, Sc = "__reactEvents$" + Zr, Ny = "__reactListeners$" + Zr, My = "__reactHandles$" + Zr;
function Qn(A) {
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
function fr(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(H(33));
}
function cl(A) {
  return A[ao] || null;
}
var Lc = [], dr = -1;
function fn(A) {
  return { current: A };
}
function lA(A) {
  0 > dr || (A.current = Lc[dr], Lc[dr] = null, dr--);
}
function iA(A, e) {
  dr++, Lc[dr] = A.current, A.current = e;
}
var tn = {}, XA = fn(tn), oe = fn(!1), Rn = tn;
function kr(A, e) {
  var t = A.type.contextTypes;
  if (!t) return tn;
  var n = A.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
  var r = {}, i;
  for (i in t) r[i] = e[i];
  return n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = r), r;
}
function ae(A) {
  return A = A.childContextTypes, A != null;
}
function Qs() {
  lA(oe), lA(XA);
}
function fg(A, e, t) {
  if (XA.current !== tn) throw Error(H(168));
  iA(XA, e), iA(oe, t);
}
function jw(A, e, t) {
  var n = A.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function") return t;
  n = n.getChildContext();
  for (var r in n) if (!(r in e)) throw Error(H(108, FQ(A) || "Unknown", r));
  return mA({}, t, n);
}
function ys(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || tn, Rn = XA.current, iA(XA, A), iA(oe, oe.current), !0;
}
function dg(A, e, t) {
  var n = A.stateNode;
  if (!n) throw Error(H(169));
  t ? (A = jw(A, e, Rn), n.__reactInternalMemoizedMergedChildContext = A, lA(oe), lA(XA), iA(XA, A)) : lA(oe), iA(oe, t);
}
var st = null, fl = !1, pu = !1;
function Jw(A) {
  st === null ? st = [A] : st.push(A);
}
function Py(A) {
  fl = !0, Jw(A);
}
function dn() {
  if (!pu && st !== null) {
    pu = !0;
    var A = 0, e = eA;
    try {
      var t = st;
      for (eA = 1; A < t.length; A++) {
        var n = t[A];
        do
          n = n(!0);
        while (n !== null);
      }
      st = null, fl = !1;
    } catch (r) {
      throw st !== null && (st = st.slice(A + 1)), Qw(ud, dn), r;
    } finally {
      eA = e, pu = !1;
    }
  }
  return null;
}
var Br = [], gr = 0, Fs = null, Us = 0, ve = [], Ce = 0, Nn = null, ut = 1, ct = "";
function hn(A, e) {
  Br[gr++] = Us, Br[gr++] = Fs, Fs = A, Us = e;
}
function Zw(A, e, t) {
  ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Nn, Nn = A;
  var n = ut;
  A = ct;
  var r = 32 - Ne(n) - 1;
  n &= ~(1 << r), t += 1;
  var i = 32 - Ne(e) + r;
  if (30 < i) {
    var o = r - r % 5;
    i = (n & (1 << o) - 1).toString(32), n >>= o, r -= o, ut = 1 << 32 - Ne(e) + r | t << r | n, ct = i + A;
  } else ut = 1 << i | t << r | n, ct = A;
}
function md(A) {
  A.return !== null && (hn(A, 1), Zw(A, 1, 0));
}
function vd(A) {
  for (; A === Fs; ) Fs = Br[--gr], Br[gr] = null, Us = Br[--gr], Br[gr] = null;
  for (; A === Nn; ) Nn = ve[--Ce], ve[Ce] = null, ct = ve[--Ce], ve[Ce] = null, ut = ve[--Ce], ve[Ce] = null;
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
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Nn !== null ? { id: ut, overflow: ct } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = ye(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, de = A, fe = null, !0) : !1;
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
        var n = de;
        e && Bg(A, e) ? qw(n, t) : (A.flags = A.flags & -4097 | 2, fA = !1, de = A);
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
function Or() {
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
        var n = t.stateNode;
      }
      if (!n) throw Error(H(147, A));
      var r = n, i = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i ? e.ref : (e = function(o) {
        var a = r.refs;
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
  function n(B, d) {
    for (B = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? B.set(d.key, d) : B.set(d.index, d), d = d.sibling;
    return B;
  }
  function r(B, d) {
    return B = Zt(B, d), B.index = 0, B.sibling = null, B;
  }
  function i(B, d, h) {
    return B.index = h, A ? (h = B.alternate, h !== null ? (h = h.index, h < d ? (B.flags |= 2, d) : h) : (B.flags |= 2, d)) : (B.flags |= 1048576, d);
  }
  function o(B) {
    return A && B.alternate === null && (B.flags |= 2), B;
  }
  function a(B, d, h, m) {
    return d === null || d.tag !== 6 ? (d = yu(h, B.mode, m), d.return = B, d) : (d = r(d, h), d.return = B, d);
  }
  function s(B, d, h, m) {
    var C = h.type;
    return C === sr ? u(B, d, h.props.children, m, h.key) : d !== null && (d.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tt && pg(C) === d.type) ? (m = r(d, h.props), m.ref = ui(B, d, h), m.return = B, m) : (m = As(h.type, h.key, h.props, null, B.mode, m), m.ref = ui(B, d, h), m.return = B, m);
  }
  function l(B, d, h, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Fu(h, B.mode, m), d.return = B, d) : (d = r(d, h.children || []), d.return = B, d);
  }
  function u(B, d, h, m, C) {
    return d === null || d.tag !== 7 ? (d = Ln(h, B.mode, m, C), d.return = B, d) : (d = r(d, h), d.return = B, d);
  }
  function c(B, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = yu("" + d, B.mode, h), d.return = B, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case $o:
          return h = As(d.type, d.key, d.props, null, B.mode, h), h.ref = ui(B, null, d), h.return = B, h;
        case ar:
          return d = Fu(d, B.mode, h), d.return = B, d;
        case Tt:
          var m = d._init;
          return c(B, m(d._payload), h);
      }
      if (mi(d) || ii(d)) return d = Ln(d, B.mode, h, null), d.return = B, d;
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
        case ar:
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
        case ar:
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
    if (U === h.length) return t(B, F), fA && hn(B, U), C;
    if (F === null) {
      for (; U < h.length; U++) F = c(B, h[U], m), F !== null && (d = i(F, d, U), v === null ? C = F : v.sibling = F, v = F);
      return fA && hn(B, U), C;
    }
    for (F = n(B, F); U < h.length; U++) E = g(F, B, U, h[U], m), E !== null && (A && E.alternate !== null && F.delete(E.key === null ? U : E.key), d = i(E, d, U), v === null ? C = E : v.sibling = E, v = E);
    return A && F.forEach(function(P) {
      return e(B, P);
    }), fA && hn(B, U), C;
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
    ), fA && hn(B, U), C;
    if (F === null) {
      for (; !S.done; U++, S = h.next()) S = c(B, S.value, m), S !== null && (d = i(S, d, U), v === null ? C = S : v.sibling = S, v = S);
      return fA && hn(B, U), C;
    }
    for (F = n(B, F); !S.done; U++, S = h.next()) S = g(F, B, U, S.value, m), S !== null && (A && S.alternate !== null && F.delete(S.key === null ? U : S.key), d = i(S, d, U), v === null ? C = S : v.sibling = S, v = S);
    return A && F.forEach(function(N) {
      return e(B, N);
    }), fA && hn(B, U), C;
  }
  function y(B, d, h, m) {
    if (typeof h == "object" && h !== null && h.type === sr && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $o:
          A: {
            for (var C = h.key, v = d; v !== null; ) {
              if (v.key === C) {
                if (C = h.type, C === sr) {
                  if (v.tag === 7) {
                    t(B, v.sibling), d = r(v, h.props.children), d.return = B, B = d;
                    break A;
                  }
                } else if (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tt && pg(C) === v.type) {
                  t(B, v.sibling), d = r(v, h.props), d.ref = ui(B, v, h), d.return = B, B = d;
                  break A;
                }
                t(B, v);
                break;
              } else e(B, v);
              v = v.sibling;
            }
            h.type === sr ? (d = Ln(h.props.children, B.mode, m, h.key), d.return = B, B = d) : (m = As(h.type, h.key, h.props, null, B.mode, m), m.ref = ui(B, d, h), m.return = B, B = m);
          }
          return o(B);
        case ar:
          A: {
            for (v = h.key; d !== null; ) {
              if (d.key === v) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                t(B, d.sibling), d = r(d, h.children || []), d.return = B, B = d;
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
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (t(B, d.sibling), d = r(d, h), d.return = B, B = d) : (t(B, d), d = yu(h, B.mode, m), d.return = B, B = d), o(B)) : t(B, d);
  }
  return y;
}
var Dr = em(!0), tm = em(!1), Es = fn(null), Is = null, pr = null, Qd = null;
function yd() {
  Qd = pr = Is = null;
}
function Fd(A) {
  var e = Es.current;
  lA(Es), A._currentValue = e;
}
function kc(A, e, t) {
  for (; A !== null; ) {
    var n = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function Hr(A, e) {
  Is = A, Qd = pr = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (ne = !0), A.firstContext = null);
}
function Ie(A) {
  var e = A._currentValue;
  if (Qd !== A) if (A = { context: A, memoizedValue: e, next: null }, pr === null) {
    if (Is === null) throw Error(H(308));
    pr = A, Is.dependencies = { lanes: 0, firstContext: A };
  } else pr = pr.next = A;
  return e;
}
var yn = null;
function Ud(A) {
  yn === null ? yn = [A] : yn.push(A);
}
function nm(A, e, t, n) {
  var r = e.interleaved;
  return r === null ? (t.next = t, Ud(e)) : (t.next = r.next, r.next = t), e.interleaved = t, ht(A, n);
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
function rm(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function ft(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Yt(A, e, t) {
  var n = A.updateQueue;
  if (n === null) return null;
  if (n = n.shared, Z & 2) {
    var r = n.pending;
    return r === null ? e.next = e : (e.next = r.next, r.next = e), n.pending = e, ht(A, t);
  }
  return r = n.interleaved, r === null ? (e.next = e, Ud(n)) : (e.next = r.next, r.next = e), n.interleaved = e, ht(A, t);
}
function za(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, cd(A, t);
  }
}
function hg(A, e) {
  var t = A.updateQueue, n = A.alternate;
  if (n !== null && (n = n.updateQueue, t === n)) {
    var r = null, i = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        i === null ? r = i = o : i = i.next = o, t = t.next;
      } while (t !== null);
      i === null ? r = i = e : i = i.next = e;
    } else r = i = e;
    t = { baseState: n.baseState, firstBaseUpdate: r, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function Hs(A, e, t, n) {
  var r = A.updateQueue;
  kt = !1;
  var i = r.firstBaseUpdate, o = r.lastBaseUpdate, a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var s = a, l = s.next;
    s.next = null, o === null ? i = l : o.next = l, o = s;
    var u = A.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== o && (a === null ? u.firstBaseUpdate = l : a.next = l, u.lastBaseUpdate = s));
  }
  if (i !== null) {
    var c = r.baseState;
    o = 0, u = l = s = null, a = i;
    do {
      var f = a.lane, g = a.eventTime;
      if ((n & f) === f) {
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
        a.callback !== null && a.lane !== 0 && (A.flags |= 64, f = r.effects, f === null ? r.effects = [a] : f.push(a));
      } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, u === null ? (l = u = g, s = c) : u = u.next = g, o |= f;
      if (a = a.next, a === null) {
        if (a = r.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, r.lastBaseUpdate = f, r.shared.pending = null;
      }
    } while (!0);
    if (u === null && (s = c), r.baseState = s, r.firstBaseUpdate = l, r.lastBaseUpdate = u, e = r.shared.interleaved, e !== null) {
      r = e;
      do
        o |= r.lane, r = r.next;
      while (r !== e);
    } else i === null && (r.shared.lanes = 0);
    Pn |= o, A.lanes = o, A.memoizedState = c;
  }
}
function wg(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var n = A[e], r = n.callback;
    if (r !== null) {
      if (n.callback = null, n = t, typeof r != "function") throw Error(H(191, r));
      r.call(n);
    }
  }
}
var Lo = {}, qe = fn(Lo), so = fn(Lo), lo = fn(Lo);
function Fn(A) {
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
function Kr() {
  lA(qe), lA(so), lA(lo);
}
function im(A) {
  Fn(lo.current);
  var e = Fn(qe.current), t = Bc(e, A.type);
  e !== t && (iA(so, A), iA(qe, t));
}
function Hd(A) {
  so.current === A && (lA(qe), lA(so));
}
var pA = fn(0);
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
var Ya = yt.ReactCurrentDispatcher, wu = yt.ReactCurrentBatchConfig, Mn = 0, wA = null, xA = null, kA = null, Ss = !1, Ki = !1, uo = 0, Gy = 0;
function _A() {
  throw Error(H(321));
}
function Sd(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!_e(A[t], e[t])) return !1;
  return !0;
}
function Ld(A, e, t, n, r, i) {
  if (Mn = i, wA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Ya.current = A === null || A.memoizedState === null ? Xy : zy, A = t(n, r), Ki) {
    i = 0;
    do {
      if (Ki = !1, uo = 0, 25 <= i) throw Error(H(301));
      i += 1, kA = xA = null, e.updateQueue = null, Ya.current = Yy, A = t(n, r);
    } while (Ki);
  }
  if (Ya.current = Ls, e = xA !== null && xA.next !== null, Mn = 0, kA = xA = wA = null, Ss = !1, e) throw Error(H(300));
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
  var n = xA, r = n.baseQueue, i = t.pending;
  if (i !== null) {
    if (r !== null) {
      var o = r.next;
      r.next = i.next, i.next = o;
    }
    n.baseQueue = r = i, t.pending = null;
  }
  if (r !== null) {
    i = r.next, n = n.baseState;
    var a = o = null, s = null, l = i;
    do {
      var u = l.lane;
      if ((Mn & u) === u) s !== null && (s = s.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), n = l.hasEagerState ? l.eagerState : A(n, l.action);
      else {
        var c = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        s === null ? (a = s = c, o = n) : s = s.next = c, wA.lanes |= u, Pn |= u;
      }
      l = l.next;
    } while (l !== null && l !== i);
    s === null ? o = n : s.next = a, _e(n, e.memoizedState) || (ne = !0), e.memoizedState = n, e.baseState = o, e.baseQueue = s, t.lastRenderedState = n;
  }
  if (A = t.interleaved, A !== null) {
    r = A;
    do
      i = r.lane, wA.lanes |= i, Pn |= i, r = r.next;
    while (r !== A);
  } else r === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function vu(A) {
  var e = He(), t = e.queue;
  if (t === null) throw Error(H(311));
  t.lastRenderedReducer = A;
  var n = t.dispatch, r = t.pending, i = e.memoizedState;
  if (r !== null) {
    t.pending = null;
    var o = r = r.next;
    do
      i = A(i, o.action), o = o.next;
    while (o !== r);
    _e(i, e.memoizedState) || (ne = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
  }
  return [i, n];
}
function om() {
}
function am(A, e) {
  var t = wA, n = He(), r = e(), i = !_e(n.memoizedState, r);
  if (i && (n.memoizedState = r, ne = !0), n = n.queue, Td(um.bind(null, t, n, A), [A]), n.getSnapshot !== e || i || kA !== null && kA.memoizedState.tag & 1) {
    if (t.flags |= 2048, fo(9, lm.bind(null, t, n, r, e), void 0, null), DA === null) throw Error(H(349));
    Mn & 30 || sm(t, e, r);
  }
  return r;
}
function sm(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function lm(A, e, t, n) {
  e.value = t, e.getSnapshot = n, cm(e) && fm(A);
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
function fo(A, e, t, n) {
  return A = { tag: A, create: e, destroy: t, deps: n, next: null }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (n = t.next, t.next = A, A.next = n, e.lastEffect = A)), A;
}
function dm() {
  return He().memoizedState;
}
function ja(A, e, t, n) {
  var r = Xe();
  wA.flags |= A, r.memoizedState = fo(1 | e, t, void 0, n === void 0 ? null : n);
}
function dl(A, e, t, n) {
  var r = He();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (xA !== null) {
    var o = xA.memoizedState;
    if (i = o.destroy, n !== null && Sd(n, o.deps)) {
      r.memoizedState = fo(e, t, i, n);
      return;
    }
  }
  wA.flags |= A, r.memoizedState = fo(1 | e, t, i, n);
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
  var n = t.memoizedState;
  return n !== null && e !== null && Sd(e, n[1]) ? n[0] : (t.memoizedState = [A, e], A);
}
function mm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Sd(e, n[1]) ? n[0] : (A = A(), t.memoizedState = [A, e], A);
}
function vm(A, e, t) {
  return Mn & 21 ? (_e(t, e) || (t = Uw(), wA.lanes |= t, Pn |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, ne = !0), A.memoizedState = t);
}
function Vy(A, e) {
  var t = eA;
  eA = t !== 0 && 4 > t ? t : 4, A(!0);
  var n = wu.transition;
  wu.transition = {};
  try {
    A(!1), e();
  } finally {
    eA = t, wu.transition = n;
  }
}
function Cm() {
  return He().memoizedState;
}
function $y(A, e, t) {
  var n = Jt(A);
  if (t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }, Qm(A)) ym(e, t);
  else if (t = nm(A, e, t, n), t !== null) {
    var r = JA();
    Me(t, A, n, r), Fm(t, e, n);
  }
}
function Wy(A, e, t) {
  var n = Jt(A), r = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Qm(A)) ym(e, r);
  else {
    var i = A.alternate;
    if (A.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
      var o = e.lastRenderedState, a = i(o, t);
      if (r.hasEagerState = !0, r.eagerState = a, _e(a, o)) {
        var s = e.interleaved;
        s === null ? (r.next = r, Ud(e)) : (r.next = s.next, s.next = r), e.interleaved = r;
        return;
      }
    } catch {
    } finally {
    }
    t = nm(A, e, r, n), t !== null && (r = JA(), Me(t, A, n, r), Fm(t, e, n));
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
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, cd(A, t);
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
  var n = Xe();
  return e = t !== void 0 ? t(e) : e, n.memoizedState = n.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, n.queue = A, A = A.dispatch = $y.bind(null, wA, A), [n.memoizedState, A];
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
  var n = wA, r = Xe();
  if (fA) {
    if (t === void 0) throw Error(H(407));
    t = t();
  } else {
    if (t = e(), DA === null) throw Error(H(349));
    Mn & 30 || sm(n, e, t);
  }
  r.memoizedState = t;
  var i = { value: t, getSnapshot: e };
  return r.queue = i, vg(um.bind(
    null,
    n,
    i,
    A
  ), [A]), n.flags |= 2048, fo(9, lm.bind(null, n, i, t, e), void 0, null), t;
}, useId: function() {
  var A = Xe(), e = DA.identifierPrefix;
  if (fA) {
    var t = ct, n = ut;
    t = (n & ~(1 << 32 - Ne(n) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = uo++, 0 < t && (e += "H" + t.toString(32)), e += ":";
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
function Oc(A, e, t, n) {
  e = A.memoizedState, t = t(n, e), t = t == null ? e : mA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Bl = { isMounted: function(A) {
  return (A = A._reactInternals) ? zn(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var n = JA(), r = Jt(A), i = ft(n, r);
  i.payload = e, t != null && (i.callback = t), e = Yt(A, i, r), e !== null && (Me(e, A, r, n), za(e, A, r));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var n = JA(), r = Jt(A), i = ft(n, r);
  i.tag = 1, i.payload = e, t != null && (i.callback = t), e = Yt(A, i, r), e !== null && (Me(e, A, r, n), za(e, A, r));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = JA(), n = Jt(A), r = ft(t, n);
  r.tag = 2, e != null && (r.callback = e), e = Yt(A, r, n), e !== null && (Me(e, A, n, t), za(e, A, n));
} };
function Cg(A, e, t, n, r, i, o) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(n, i, o) : e.prototype && e.prototype.isPureReactComponent ? !ro(t, n) || !ro(r, i) : !0;
}
function Um(A, e, t) {
  var n = !1, r = tn, i = e.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (r = ae(e) ? Rn : XA.current, n = e.contextTypes, i = (n = n != null) ? kr(A, r) : tn), e = new e(t, i), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Bl, A.stateNode = e, e._reactInternals = A, n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = r, A.__reactInternalMemoizedMaskedChildContext = i), e;
}
function Qg(A, e, t, n) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== A && Bl.enqueueReplaceState(e, e.state, null);
}
function Dc(A, e, t, n) {
  var r = A.stateNode;
  r.props = t, r.state = A.memoizedState, r.refs = {}, Ed(A);
  var i = e.contextType;
  typeof i == "object" && i !== null ? r.context = Ie(i) : (i = ae(e) ? Rn : XA.current, r.context = kr(A, i)), r.state = A.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Oc(A, e, i, t), r.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && Bl.enqueueReplaceState(r, r.state, null), Hs(A, t, r, n), r.state = A.memoizedState), typeof r.componentDidMount == "function" && (A.flags |= 4194308);
}
function Rr(A, e) {
  try {
    var t = "", n = e;
    do
      t += yQ(n), n = n.return;
    while (n);
    var r = t;
  } catch (i) {
    r = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: A, source: e, stack: r, digest: null };
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
  var n = e.value;
  return t.callback = function() {
    Ts || (Ts = !0, Xc = n), Kc(A, e);
  }, t;
}
function Im(A, e, t) {
  t = ft(-1, t), t.tag = 3;
  var n = A.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = e.value;
    t.payload = function() {
      return n(r);
    }, t.callback = function() {
      Kc(A, e);
    };
  }
  var i = A.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
    Kc(A, e), typeof n != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function yg(A, e, t) {
  var n = A.pingCache;
  if (n === null) {
    n = A.pingCache = new jy();
    var r = /* @__PURE__ */ new Set();
    n.set(e, r);
  } else r = n.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), n.set(e, r));
  r.has(t) || (r.add(t), A = uF.bind(null, A, e, t), e.then(A, A));
}
function Fg(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function Ug(A, e, t, n, r) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = r, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = ft(-1, 1), e.tag = 2, Yt(t, e, 1))), t.lanes |= 1), A);
}
var Jy = yt.ReactCurrentOwner, ne = !1;
function jA(A, e, t, n) {
  e.child = A === null ? tm(e, null, t, n) : Dr(e, A.child, t, n);
}
function Eg(A, e, t, n, r) {
  t = t.render;
  var i = e.ref;
  return Hr(e, r), n = Ld(A, e, t, n, i, r), t = bd(), A !== null && !ne ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, wt(A, e, r)) : (fA && t && md(e), e.flags |= 1, jA(A, e, n, r), e.child);
}
function Ig(A, e, t, n, r) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" && !_d(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = i, Hm(A, e, i, n, r)) : (A = As(t.type, null, n, e, e.mode, r), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (i = A.child, !(A.lanes & r)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : ro, t(o, n) && A.ref === e.ref) return wt(A, e, r);
  }
  return e.flags |= 1, A = Zt(i, n), A.ref = e.ref, A.return = e, e.child = A;
}
function Hm(A, e, t, n, r) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (ro(i, n) && A.ref === e.ref) if (ne = !1, e.pendingProps = n = i, (A.lanes & r) !== 0) A.flags & 131072 && (ne = !0);
    else return e.lanes = A.lanes, wt(A, e, r);
  }
  return Rc(A, e, t, n, r);
}
function xm(A, e, t) {
  var n = e.pendingProps, r = n.children, i = A !== null ? A.memoizedState : null;
  if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, iA(wr, ce), ce |= t;
  else {
    if (!(t & 1073741824)) return A = i !== null ? i.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, iA(wr, ce), ce |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : t, iA(wr, ce), ce |= n;
  }
  else i !== null ? (n = i.baseLanes | t, e.memoizedState = null) : n = t, iA(wr, ce), ce |= n;
  return jA(A, e, r, t), e.child;
}
function Sm(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Rc(A, e, t, n, r) {
  var i = ae(t) ? Rn : XA.current;
  return i = kr(e, i), Hr(e, r), t = Ld(A, e, t, n, i, r), n = bd(), A !== null && !ne ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, wt(A, e, r)) : (fA && n && md(e), e.flags |= 1, jA(A, e, t, r), e.child);
}
function Hg(A, e, t, n, r) {
  if (ae(t)) {
    var i = !0;
    ys(e);
  } else i = !1;
  if (Hr(e, r), e.stateNode === null) Ja(A, e), Um(e, t, n), Dc(e, t, n, r), n = !0;
  else if (A === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var s = o.context, l = t.contextType;
    typeof l == "object" && l !== null ? l = Ie(l) : (l = ae(t) ? Rn : XA.current, l = kr(e, l));
    var u = t.getDerivedStateFromProps, c = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || s !== l) && Qg(e, o, n, l), kt = !1;
    var f = e.memoizedState;
    o.state = f, Hs(e, n, o, r), s = e.memoizedState, a !== n || f !== s || oe.current || kt ? (typeof u == "function" && (Oc(e, t, u, n), s = e.memoizedState), (a = kt || Cg(e, t, a, n, f, s, l)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = s), o.props = n, o.state = s, o.context = l, n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
  } else {
    o = e.stateNode, rm(A, e), a = e.memoizedProps, l = e.type === e.elementType ? a : ke(e.type, a), o.props = l, c = e.pendingProps, f = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ae(t) ? Rn : XA.current, s = kr(e, s));
    var g = t.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || f !== s) && Qg(e, o, n, s), kt = !1, f = e.memoizedState, o.state = f, Hs(e, n, o, r);
    var p = e.memoizedState;
    a !== c || f !== p || oe.current || kt ? (typeof g == "function" && (Oc(e, t, g, n), p = e.memoizedState), (l = kt || Cg(e, t, l, n, f, p, s) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, p, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, p, s)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = p), o.props = n, o.state = p, o.context = s, n = l) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), n = !1);
  }
  return Nc(A, e, t, n, i, r);
}
function Nc(A, e, t, n, r, i) {
  Sm(A, e);
  var o = (e.flags & 128) !== 0;
  if (!n && !o) return r && dg(e, t, !1), wt(A, e, i);
  n = e.stateNode, Jy.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, A !== null && o ? (e.child = Dr(e, A.child, null, i), e.child = Dr(e, null, a, i)) : jA(A, e, a, i), e.memoizedState = n.state, r && dg(e, t, !0), e.child;
}
function Lm(A) {
  var e = A.stateNode;
  e.pendingContext ? fg(A, e.pendingContext, e.pendingContext !== e.context) : e.context && fg(A, e.context, !1), Id(A, e.containerInfo);
}
function xg(A, e, t, n, r) {
  return Or(), Cd(r), e.flags |= 256, jA(A, e, t, n), e.child;
}
var Mc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pc(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function bm(A, e, t) {
  var n = e.pendingProps, r = pA.current, i = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = A !== null && A.memoizedState === null ? !1 : (r & 2) !== 0), a ? (i = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (r |= 1), iA(pA, r & 1), A === null)
    return Tc(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = n.children, A = n.fallback, i ? (n = e.mode, i = e.child, o = { mode: "hidden", children: o }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = hl(o, n, 0, null), A = Ln(A, n, t, null), i.return = e, A.return = e, i.sibling = A, e.child = i, e.child.memoizedState = Pc(t), e.memoizedState = Mc, A) : Od(e, o));
  if (r = A.memoizedState, r !== null && (a = r.dehydrated, a !== null)) return Zy(A, e, o, n, a, r, t);
  if (i) {
    i = n.fallback, o = e.mode, r = A.child, a = r.sibling;
    var s = { mode: "hidden", children: n.children };
    return !(o & 1) && e.child !== r ? (n = e.child, n.childLanes = 0, n.pendingProps = s, e.deletions = null) : (n = Zt(r, s), n.subtreeFlags = r.subtreeFlags & 14680064), a !== null ? i = Zt(a, i) : (i = Ln(i, o, t, null), i.flags |= 2), i.return = e, n.return = e, n.sibling = i, e.child = n, n = i, i = e.child, o = A.child.memoizedState, o = o === null ? Pc(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = A.childLanes & ~t, e.memoizedState = Mc, n;
  }
  return i = A.child, A = i.sibling, n = Zt(i, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = t), n.return = e, n.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = n, e.memoizedState = null, n;
}
function Od(A, e) {
  return e = hl({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function na(A, e, t, n) {
  return n !== null && Cd(n), Dr(e, A.child, null, t), A = Od(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function Zy(A, e, t, n, r, i, o) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, n = Cu(Error(H(422))), na(A, e, o, n)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (i = n.fallback, r = e.mode, n = hl({ mode: "visible", children: n.children }, r, 0, null), i = Ln(i, r, o, null), i.flags |= 2, n.return = e, i.return = e, n.sibling = i, e.child = n, e.mode & 1 && Dr(e, A.child, null, o), e.child.memoizedState = Pc(o), e.memoizedState = Mc, i);
  if (!(e.mode & 1)) return na(A, e, o, null);
  if (r.data === "$!") {
    if (n = r.nextSibling && r.nextSibling.dataset, n) var a = n.dgst;
    return n = a, i = Error(H(419)), n = Cu(i, n, void 0), na(A, e, o, n);
  }
  if (a = (o & A.childLanes) !== 0, ne || a) {
    if (n = DA, n !== null) {
      switch (o & -o) {
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
      r = r & (n.suspendedLanes | o) ? 0 : r, r !== 0 && r !== i.retryLane && (i.retryLane = r, ht(A, r), Me(n, A, r, -1));
    }
    return Pd(), n = Cu(Error(H(421))), na(A, e, o, n);
  }
  return r.data === "$?" ? (e.flags |= 128, e.child = A.child, e = cF.bind(null, A), r._reactRetry = e, null) : (A = i.treeContext, fe = zt(r.nextSibling), de = e, fA = !0, De = null, A !== null && (ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Nn, ut = A.id, ct = A.overflow, Nn = e), e = Od(e, n.children), e.flags |= 4096, e);
}
function Sg(A, e, t) {
  A.lanes |= e;
  var n = A.alternate;
  n !== null && (n.lanes |= e), kc(A.return, e, t);
}
function Qu(A, e, t, n, r) {
  var i = A.memoizedState;
  i === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: t, tailMode: r } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = t, i.tailMode = r);
}
function Tm(A, e, t) {
  var n = e.pendingProps, r = n.revealOrder, i = n.tail;
  if (jA(A, e, n.children, t), n = pA.current, n & 2) n = n & 1 | 2, e.flags |= 128;
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
    n &= 1;
  }
  if (iA(pA, n), !(e.mode & 1)) e.memoizedState = null;
  else switch (r) {
    case "forwards":
      for (t = e.child, r = null; t !== null; ) A = t.alternate, A !== null && xs(A) === null && (r = t), t = t.sibling;
      t = r, t === null ? (r = e.child, e.child = null) : (r = t.sibling, t.sibling = null), Qu(e, !1, r, t, i);
      break;
    case "backwards":
      for (t = null, r = e.child, e.child = null; r !== null; ) {
        if (A = r.alternate, A !== null && xs(A) === null) {
          e.child = r;
          break;
        }
        A = r.sibling, r.sibling = t, t = r, r = A;
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
  if (A !== null && (e.dependencies = A.dependencies), Pn |= e.lanes, !(t & e.childLanes)) return null;
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
      Lm(e), Or();
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
      var n = e.type._context, r = e.memoizedProps.value;
      iA(Es, n._currentValue), n._currentValue = r;
      break;
    case 13:
      if (n = e.memoizedState, n !== null)
        return n.dehydrated !== null ? (iA(pA, pA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? bm(A, e, t) : (iA(pA, pA.current & 1), A = wt(A, e, t), A !== null ? A.sibling : null);
      iA(pA, pA.current & 1);
      break;
    case 19:
      if (n = (t & e.childLanes) !== 0, A.flags & 128) {
        if (n) return Tm(A, e, t);
        e.flags |= 128;
      }
      if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), iA(pA, pA.current), n) break;
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
Om = function(A, e, t, n) {
  var r = A.memoizedProps;
  if (r !== n) {
    A = e.stateNode, Fn(qe.current);
    var i = null;
    switch (t) {
      case "input":
        r = uc(A, r), n = uc(A, n), i = [];
        break;
      case "select":
        r = mA({}, r, { value: void 0 }), n = mA({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        r = dc(A, r), n = dc(A, n), i = [];
        break;
      default:
        typeof r.onClick != "function" && typeof n.onClick == "function" && (A.onclick = Cs);
    }
    gc(t, n);
    var o;
    t = null;
    for (l in r) if (!n.hasOwnProperty(l) && r.hasOwnProperty(l) && r[l] != null) if (l === "style") {
      var a = r[l];
      for (o in a) a.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
    } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ji.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
    for (l in n) {
      var s = n[l];
      if (a = r != null ? r[l] : void 0, n.hasOwnProperty(l) && s !== a && (s != null || a != null)) if (l === "style") if (a) {
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
Dm = function(A, e, t, n) {
  t !== n && (e.flags |= 4);
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
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : n.sibling = null;
  }
}
function GA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, n = 0;
  if (e) for (var r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags & 14680064, n |= r.flags & 14680064, r.return = A, r = r.sibling;
  else for (r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags, n |= r.flags, r.return = A, r = r.sibling;
  return A.subtreeFlags |= n, A.childLanes = t, e;
}
function AF(A, e, t) {
  var n = e.pendingProps;
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
      return n = e.stateNode, Kr(), lA(oe), lA(XA), xd(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (A === null || A.child === null) && (ea(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, De !== null && (jc(De), De = null))), _c(A, e), GA(e), null;
    case 5:
      Hd(e);
      var r = Fn(lo.current);
      if (t = e.type, A !== null && e.stateNode != null) Om(A, e, t, n, r), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(H(166));
          return GA(e), null;
        }
        if (A = Fn(qe.current), ea(e)) {
          n = e.stateNode, t = e.type;
          var i = e.memoizedProps;
          switch (n[je] = e, n[ao] = i, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              oA("cancel", n), oA("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              oA("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < Ci.length; r++) oA(Ci[r], n);
              break;
            case "source":
              oA("error", n);
              break;
            case "img":
            case "image":
            case "link":
              oA(
                "error",
                n
              ), oA("load", n);
              break;
            case "details":
              oA("toggle", n);
              break;
            case "input":
              NB(n, i), oA("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, oA("invalid", n);
              break;
            case "textarea":
              PB(n, i), oA("invalid", n);
          }
          gc(t, i), r = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var a = i[o];
            o === "children" ? typeof a == "string" ? n.textContent !== a && (i.suppressHydrationWarning !== !0 && Aa(n.textContent, a, A), r = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Aa(
              n.textContent,
              a,
              A
            ), r = ["children", "" + a]) : Ji.hasOwnProperty(o) && a != null && o === "onScroll" && oA("scroll", n);
          }
          switch (t) {
            case "input":
              Wo(n), MB(n, i, !0);
              break;
            case "textarea":
              Wo(n), _B(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Cs);
          }
          n = r, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          o = r.nodeType === 9 ? r : r.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = uw(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = o.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof n.is == "string" ? A = o.createElement(t, { is: n.is }) : (A = o.createElement(t), t === "select" && (o = A, n.multiple ? o.multiple = !0 : n.size && (o.size = n.size))) : A = o.createElementNS(A, t), A[je] = e, A[ao] = n, km(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (o = pc(t, n), t) {
              case "dialog":
                oA("cancel", A), oA("close", A), r = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                oA("load", A), r = n;
                break;
              case "video":
              case "audio":
                for (r = 0; r < Ci.length; r++) oA(Ci[r], A);
                r = n;
                break;
              case "source":
                oA("error", A), r = n;
                break;
              case "img":
              case "image":
              case "link":
                oA(
                  "error",
                  A
                ), oA("load", A), r = n;
                break;
              case "details":
                oA("toggle", A), r = n;
                break;
              case "input":
                NB(A, n), r = uc(A, n), oA("invalid", A);
                break;
              case "option":
                r = n;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!n.multiple }, r = mA({}, n, { value: void 0 }), oA("invalid", A);
                break;
              case "textarea":
                PB(A, n), r = dc(A, n), oA("invalid", A);
                break;
              default:
                r = n;
            }
            gc(t, r), a = r;
            for (i in a) if (a.hasOwnProperty(i)) {
              var s = a[i];
              i === "style" ? dw(A, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && cw(A, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Zi(A, s) : typeof s == "number" && Zi(A, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ji.hasOwnProperty(i) ? s != null && i === "onScroll" && oA("scroll", A) : s != null && id(A, i, s, o));
            }
            switch (t) {
              case "input":
                Wo(A), MB(A, n, !1);
                break;
              case "textarea":
                Wo(A), _B(A);
                break;
              case "option":
                n.value != null && A.setAttribute("value", "" + en(n.value));
                break;
              case "select":
                A.multiple = !!n.multiple, i = n.value, i != null ? Fr(A, !!n.multiple, i, !1) : n.defaultValue != null && Fr(
                  A,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof r.onClick == "function" && (A.onclick = Cs);
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
      return GA(e), null;
    case 6:
      if (A && e.stateNode != null) Dm(A, e, A.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(H(166));
        if (t = Fn(lo.current), Fn(qe.current), ea(e)) {
          if (n = e.stateNode, t = e.memoizedProps, n[je] = e, (i = n.nodeValue !== t) && (A = de, A !== null)) switch (A.tag) {
            case 3:
              Aa(n.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && Aa(n.nodeValue, t, (A.mode & 1) !== 0);
          }
          i && (e.flags |= 4);
        } else n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n), n[je] = e, e.stateNode = n;
      }
      return GA(e), null;
    case 13:
      if (lA(pA), n = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if (fA && fe !== null && e.mode & 1 && !(e.flags & 128)) Am(), Or(), e.flags |= 98560, i = !1;
        else if (i = ea(e), n !== null && n.dehydrated !== null) {
          if (A === null) {
            if (!i) throw Error(H(318));
            if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[je] = e;
          } else Or(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          GA(e), i = !1;
        } else De !== null && (jc(De), De = null), i = !0;
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (n = n !== null, n !== (A !== null && A.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (A === null || pA.current & 1 ? LA === 0 && (LA = 3) : Pd())), e.updateQueue !== null && (e.flags |= 4), GA(e), null);
    case 4:
      return Kr(), _c(A, e), A === null && io(e.stateNode.containerInfo), GA(e), null;
    case 10:
      return Fd(e.type._context), GA(e), null;
    case 17:
      return ae(e.type) && Qs(), GA(e), null;
    case 19:
      if (lA(pA), i = e.memoizedState, i === null) return GA(e), null;
      if (n = (e.flags & 128) !== 0, o = i.rendering, o === null) if (n) ci(i, !1);
      else {
        if (LA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (o = xs(A), o !== null) {
            for (e.flags |= 128, ci(i, !1), n = o.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = t, t = e.child; t !== null; ) i = t, A = n, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = A, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, A = o.dependencies, i.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return iA(pA, pA.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        i.tail !== null && FA() > Nr && (e.flags |= 128, n = !0, ci(i, !1), e.lanes = 4194304);
      }
      else {
        if (!n) if (A = xs(o), A !== null) {
          if (e.flags |= 128, n = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), ci(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !fA) return GA(e), null;
        } else 2 * FA() - i.renderingStartTime > Nr && t !== 1073741824 && (e.flags |= 128, n = !0, ci(i, !1), e.lanes = 4194304);
        i.isBackwards ? (o.sibling = e.child, e.child = o) : (t = i.last, t !== null ? t.sibling = o : e.child = o, i.last = o);
      }
      return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = FA(), e.sibling = null, t = pA.current, iA(pA, n ? t & 1 | 2 : t & 1), e) : (GA(e), null);
    case 22:
    case 23:
      return Md(), n = e.memoizedState !== null, A !== null && A.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? ce & 1073741824 && (GA(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : GA(e), null;
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
      return Kr(), lA(oe), lA(XA), xd(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Hd(e), null;
    case 13:
      if (lA(pA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(H(340));
        Or();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return lA(pA), null;
    case 4:
      return Kr(), null;
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
var ra = !1, WA = !1, tF = typeof WeakSet == "function" ? WeakSet : Set, O = null;
function hr(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    vA(A, e, n);
  }
  else t.current = null;
}
function Gc(A, e, t) {
  try {
    t();
  } catch (n) {
    vA(A, e, n);
  }
}
var Lg = !1;
function nF(A, e) {
  if (Ec = ws, A = Pw(), wd(A)) {
    if ("selectionStart" in A) var t = { start: A.selectionStart, end: A.selectionEnd };
    else A: {
      t = (t = A.ownerDocument) && t.defaultView || window;
      var n = t.getSelection && t.getSelection();
      if (n && n.rangeCount !== 0) {
        t = n.anchorNode;
        var r = n.anchorOffset, i = n.focusNode;
        n = n.focusOffset;
        try {
          t.nodeType, i.nodeType;
        } catch {
          t = null;
          break A;
        }
        var o = 0, a = -1, s = -1, l = 0, u = 0, c = A, f = null;
        e: for (; ; ) {
          for (var g; c !== t || r !== 0 && c.nodeType !== 3 || (a = o + r), c !== i || n !== 0 && c.nodeType !== 3 || (s = o + n), c.nodeType === 3 && (o += c.nodeValue.length), (g = c.firstChild) !== null; )
            f = c, c = g;
          for (; ; ) {
            if (c === A) break e;
            if (f === t && ++l === r && (a = o), f === i && ++u === n && (s = o), (g = c.nextSibling) !== null) break;
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
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var r = n = n.next;
    do {
      if ((r.tag & A) === A) {
        var i = r.destroy;
        r.destroy = void 0, i !== void 0 && Gc(e, t, i);
      }
      r = r.next;
    } while (r !== n);
  }
}
function gl(A, e) {
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
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Cs));
  else if (n !== 4 && (A = A.child, A !== null)) for ($c(A, e, t), A = A.sibling; A !== null; ) $c(A, e, t), A = A.sibling;
}
function Wc(A, e, t) {
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (n !== 4 && (A = A.child, A !== null)) for (Wc(A, e, t), A = A.sibling; A !== null; ) Wc(A, e, t), A = A.sibling;
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
      WA || hr(t, e);
    case 6:
      var n = KA, r = Oe;
      KA = null, It(A, e, t), KA = n, Oe = r, KA !== null && (Oe ? (A = KA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : KA.removeChild(t.stateNode));
      break;
    case 18:
      KA !== null && (Oe ? (A = KA, t = t.stateNode, A.nodeType === 8 ? gu(A.parentNode, t) : A.nodeType === 1 && gu(A, t), to(A)) : gu(KA, t.stateNode));
      break;
    case 4:
      n = KA, r = Oe, KA = t.stateNode.containerInfo, Oe = !0, It(A, e, t), KA = n, Oe = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!WA && (n = t.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        r = n = n.next;
        do {
          var i = r, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Gc(t, e, o), r = r.next;
        } while (r !== n);
      }
      It(A, e, t);
      break;
    case 1:
      if (!WA && (hr(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = t.memoizedProps, n.state = t.memoizedState, n.componentWillUnmount();
      } catch (a) {
        vA(t, e, a);
      }
      It(A, e, t);
      break;
    case 21:
      It(A, e, t);
      break;
    case 22:
      t.mode & 1 ? (WA = (n = WA) || t.memoizedState !== null, It(A, e, t), WA = n) : It(A, e, t);
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
    t === null && (t = A.stateNode = new tF()), e.forEach(function(n) {
      var r = fF.bind(null, A, n);
      t.has(n) || (t.add(n), n.then(r, r));
    });
  }
}
function Le(A, e) {
  var t = e.deletions;
  if (t !== null) for (var n = 0; n < t.length; n++) {
    var r = t[n];
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
      Nm(i, o, r), KA = null, Oe = !1;
      var s = r.alternate;
      s !== null && (s.return = null), r.return = null;
    } catch (l) {
      vA(r, e, l);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Mm(e, A), e = e.sibling;
}
function Mm(A, e) {
  var t = A.alternate, n = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(e, A), $e(A), n & 4) {
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
      Le(e, A), $e(A), n & 512 && t !== null && hr(t, t.return);
      break;
    case 5:
      if (Le(e, A), $e(A), n & 512 && t !== null && hr(t, t.return), A.flags & 32) {
        var r = A.stateNode;
        try {
          Zi(r, "");
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      if (n & 4 && (r = A.stateNode, r != null)) {
        var i = A.memoizedProps, o = t !== null ? t.memoizedProps : i, a = A.type, s = A.updateQueue;
        if (A.updateQueue = null, s !== null) try {
          a === "input" && i.type === "radio" && i.name != null && sw(r, i), pc(a, o);
          var l = pc(a, i);
          for (o = 0; o < s.length; o += 2) {
            var u = s[o], c = s[o + 1];
            u === "style" ? dw(r, c) : u === "dangerouslySetInnerHTML" ? cw(r, c) : u === "children" ? Zi(r, c) : id(r, u, c, l);
          }
          switch (a) {
            case "input":
              cc(r, i);
              break;
            case "textarea":
              lw(r, i);
              break;
            case "select":
              var f = r._wrapperState.wasMultiple;
              r._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? Fr(r, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? Fr(
                r,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Fr(r, !!i.multiple, i.multiple ? [] : "", !1));
          }
          r[ao] = i;
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 6:
      if (Le(e, A), $e(A), n & 4) {
        if (A.stateNode === null) throw Error(H(162));
        r = A.stateNode, i = A.memoizedProps;
        try {
          r.nodeValue = i;
        } catch (w) {
          vA(A, A.return, w);
        }
      }
      break;
    case 3:
      if (Le(e, A), $e(A), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
        to(e.containerInfo);
      } catch (w) {
        vA(A, A.return, w);
      }
      break;
    case 4:
      Le(e, A), $e(A);
      break;
    case 13:
      Le(e, A), $e(A), r = A.child, r.flags & 8192 && (i = r.memoizedState !== null, r.stateNode.isHidden = i, !i || r.alternate !== null && r.alternate.memoizedState !== null || (Rd = FA())), n & 4 && Tg(A);
      break;
    case 22:
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? (WA = (l = WA) || u, Le(e, A), WA = l) : Le(e, A), $e(A), n & 8192) {
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
                hr(f, f.return);
                var p = f.stateNode;
                if (typeof p.componentWillUnmount == "function") {
                  n = f, t = f.return;
                  try {
                    e = n, p.props = e.memoizedProps, p.state = e.memoizedState, p.componentWillUnmount();
                  } catch (w) {
                    vA(n, t, w);
                  }
                }
                break;
              case 5:
                hr(f, f.return);
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
                r = c.stateNode, l ? (i = r.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, s = c.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = fw("display", o));
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
      Le(e, A), $e(A), n & 4 && Tg(A);
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
            var n = t;
            break A;
          }
          t = t.return;
        }
        throw Error(H(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (Zi(r, ""), n.flags &= -33);
          var i = bg(A);
          Wc(A, i, r);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, a = bg(A);
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
function rF(A, e, t) {
  O = A, Pm(A);
}
function Pm(A, e, t) {
  for (var n = (A.mode & 1) !== 0; O !== null; ) {
    var r = O, i = r.child;
    if (r.tag === 22 && n) {
      var o = r.memoizedState !== null || ra;
      if (!o) {
        var a = r.alternate, s = a !== null && a.memoizedState !== null || WA;
        a = ra;
        var l = WA;
        if (ra = o, (WA = s) && !l) for (O = r; O !== null; ) o = O, s = o.child, o.tag === 22 && o.memoizedState !== null ? Dg(r) : s !== null ? (s.return = o, O = s) : Dg(r);
        for (; i !== null; ) O = i, Pm(i), i = i.sibling;
        O = r, ra = a, WA = l;
      }
      kg(A);
    } else r.subtreeFlags & 8772 && i !== null ? (i.return = r, O = i) : kg(A);
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
            var n = e.stateNode;
            if (e.flags & 4 && !WA) if (t === null) n.componentDidMount();
            else {
              var r = e.elementType === e.type ? t.memoizedProps : ke(e.type, t.memoizedProps);
              n.componentDidUpdate(r, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var i = e.updateQueue;
            i !== null && wg(e, i, n);
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
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = e.return;
            try {
              n.componentDidMount();
            } catch (s) {
              vA(e, r, s);
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
var iF = Math.ceil, bs = yt.ReactCurrentDispatcher, Dd = yt.ReactCurrentOwner, Ee = yt.ReactCurrentBatchConfig, Z = 0, DA = null, HA = null, MA = 0, ce = 0, wr = fn(0), LA = 0, Bo = null, Pn = 0, pl = 0, Kd = 0, Ni = null, te = null, Rd = 0, Nr = 1 / 0, ot = null, Ts = !1, Xc = null, jt = null, ia = !1, Mt = null, ks = 0, Mi = 0, zc = null, Za = -1, qa = 0;
function JA() {
  return Z & 6 ? FA() : Za !== -1 ? Za : Za = FA();
}
function Jt(A) {
  return A.mode & 1 ? Z & 2 && MA !== 0 ? MA & -MA : _y.transition !== null ? (qa === 0 && (qa = Uw()), qa) : (A = eA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : bw(A.type)), A) : 1;
}
function Me(A, e, t, n) {
  if (50 < Mi) throw Mi = 0, zc = null, Error(H(185));
  Ho(A, t, n), (!(Z & 2) || A !== DA) && (A === DA && (!(Z & 2) && (pl |= t), LA === 4 && Kt(A, MA)), se(A, n), t === 1 && Z === 0 && !(e.mode & 1) && (Nr = FA() + 500, fl && dn()));
}
function se(A, e) {
  var t = A.callbackNode;
  _Q(A, e);
  var n = hs(A, A === DA ? MA : 0);
  if (n === 0) t !== null && $B(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = n & -n, A.callbackPriority !== e) {
    if (t != null && $B(t), e === 1) A.tag === 0 ? Py(Kg.bind(null, A)) : Jw(Kg.bind(null, A)), Ky(function() {
      !(Z & 6) && dn();
    }), t = null;
    else {
      switch (Ew(n)) {
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
  if (xr() && A.callbackNode !== t) return null;
  var n = hs(A, A === DA ? MA : 0);
  if (n === 0) return null;
  if (n & 30 || n & A.expiredLanes || e) e = Os(A, n);
  else {
    e = n;
    var r = Z;
    Z |= 2;
    var i = Vm();
    (DA !== A || MA !== e) && (ot = null, Nr = FA() + 500, Sn(A, e));
    do
      try {
        sF();
        break;
      } catch (a) {
        Gm(A, a);
      }
    while (!0);
    yd(), bs.current = i, Z = r, HA !== null ? e = 0 : (DA = null, MA = 0, e = LA);
  }
  if (e !== 0) {
    if (e === 2 && (r = Cc(A), r !== 0 && (n = r, e = Yc(A, r))), e === 1) throw t = Bo, Sn(A, 0), Kt(A, n), se(A, FA()), t;
    if (e === 6) Kt(A, n);
    else {
      if (r = A.current.alternate, !(n & 30) && !oF(r) && (e = Os(A, n), e === 2 && (i = Cc(A), i !== 0 && (n = i, e = Yc(A, i))), e === 1)) throw t = Bo, Sn(A, 0), Kt(A, n), se(A, FA()), t;
      switch (A.finishedWork = r, A.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          wn(A, te, ot);
          break;
        case 3:
          if (Kt(A, n), (n & 130023424) === n && (e = Rd + 500 - FA(), 10 < e)) {
            if (hs(A, 0) !== 0) break;
            if (r = A.suspendedLanes, (r & n) !== n) {
              JA(), A.pingedLanes |= A.suspendedLanes & r;
              break;
            }
            A.timeoutHandle = xc(wn.bind(null, A, te, ot), e);
            break;
          }
          wn(A, te, ot);
          break;
        case 4:
          if (Kt(A, n), (n & 4194240) === n) break;
          for (e = A.eventTimes, r = -1; 0 < n; ) {
            var o = 31 - Ne(n);
            i = 1 << o, o = e[o], o > r && (r = o), n &= ~i;
          }
          if (n = r, n = FA() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * iF(n / 1960)) - n, 10 < n) {
            A.timeoutHandle = xc(wn.bind(null, A, te, ot), n);
            break;
          }
          wn(A, te, ot);
          break;
        case 5:
          wn(A, te, ot);
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
  return A.current.memoizedState.isDehydrated && (Sn(A, e).flags |= 256), A = Os(A, e), A !== 2 && (e = te, te = t, e !== null && jc(e)), A;
}
function jc(A) {
  te === null ? te = A : te.push.apply(te, A);
}
function oF(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var n = 0; n < t.length; n++) {
        var r = t[n], i = r.getSnapshot;
        r = r.value;
        try {
          if (!_e(i(), r)) return !1;
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
    var t = 31 - Ne(e), n = 1 << t;
    A[t] = -1, e &= ~n;
  }
}
function Kg(A) {
  if (Z & 6) throw Error(H(327));
  xr();
  var e = hs(A, 0);
  if (!(e & 1)) return se(A, FA()), null;
  var t = Os(A, e);
  if (A.tag !== 0 && t === 2) {
    var n = Cc(A);
    n !== 0 && (e = n, t = Yc(A, n));
  }
  if (t === 1) throw t = Bo, Sn(A, 0), Kt(A, e), se(A, FA()), t;
  if (t === 6) throw Error(H(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, wn(A, te, ot), se(A, FA()), null;
}
function Nd(A, e) {
  var t = Z;
  Z |= 1;
  try {
    return A(e);
  } finally {
    Z = t, Z === 0 && (Nr = FA() + 500, fl && dn());
  }
}
function _n(A) {
  Mt !== null && Mt.tag === 0 && !(Z & 6) && xr();
  var e = Z;
  Z |= 1;
  var t = Ee.transition, n = eA;
  try {
    if (Ee.transition = null, eA = 1, A) return A();
  } finally {
    eA = n, Ee.transition = t, Z = e, !(Z & 6) && dn();
  }
}
function Md() {
  ce = wr.current, lA(wr);
}
function Sn(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, Dy(t)), HA !== null) for (t = HA.return; t !== null; ) {
    var n = t;
    switch (vd(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Qs();
        break;
      case 3:
        Kr(), lA(oe), lA(XA), xd();
        break;
      case 5:
        Hd(n);
        break;
      case 4:
        Kr();
        break;
      case 13:
        lA(pA);
        break;
      case 19:
        lA(pA);
        break;
      case 10:
        Fd(n.type._context);
        break;
      case 22:
      case 23:
        Md();
    }
    t = t.return;
  }
  if (DA = A, HA = A = Zt(A.current, null), MA = ce = e, LA = 0, Bo = null, Kd = pl = Pn = 0, te = Ni = null, yn !== null) {
    for (e = 0; e < yn.length; e++) if (t = yn[e], n = t.interleaved, n !== null) {
      t.interleaved = null;
      var r = n.next, i = t.pending;
      if (i !== null) {
        var o = i.next;
        i.next = r, n.next = o;
      }
      t.pending = n;
    }
    yn = null;
  }
  return A;
}
function Gm(A, e) {
  do {
    var t = HA;
    try {
      if (yd(), Ya.current = Ls, Ss) {
        for (var n = wA.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), n = n.next;
        }
        Ss = !1;
      }
      if (Mn = 0, kA = xA = wA = null, Ki = !1, uo = 0, Dd.current = null, t === null || t.return === null) {
        LA = 1, Bo = e, HA = null;
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
            !(y.flags & 65536) && (y.flags |= 256), Ug(y, o, a, i, e), Cd(Rr(s, a));
            break A;
          }
        }
        i = s = Rr(s, a), LA !== 4 && (LA = 2), Ni === null ? Ni = [i] : Ni.push(i), i = o;
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
      e = C, HA === t && t !== null && (HA = t = t.return);
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
  (LA === 0 || LA === 3 || LA === 2) && (LA = 4), DA === null || !(Pn & 268435455) && !(pl & 268435455) || Kt(DA, MA);
}
function Os(A, e) {
  var t = Z;
  Z |= 2;
  var n = Vm();
  (DA !== A || MA !== e) && (ot = null, Sn(A, e));
  do
    try {
      aF();
      break;
    } catch (r) {
      Gm(A, r);
    }
  while (!0);
  if (yd(), Z = t, bs.current = n, HA !== null) throw Error(H(261));
  return DA = null, MA = 0, LA;
}
function aF() {
  for (; HA !== null; ) $m(HA);
}
function sF() {
  for (; HA !== null && !TQ(); ) $m(HA);
}
function $m(A) {
  var e = zm(A.alternate, A, ce);
  A.memoizedProps = A.pendingProps, e === null ? Wm(A) : HA = e, Dd.current = null;
}
function Wm(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = eF(t, e), t !== null) {
        t.flags &= 32767, HA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        LA = 6, HA = null;
        return;
      }
    } else if (t = AF(t, e, ce), t !== null) {
      HA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      HA = e;
      return;
    }
    HA = e = A;
  } while (e !== null);
  LA === 0 && (LA = 5);
}
function wn(A, e, t) {
  var n = eA, r = Ee.transition;
  try {
    Ee.transition = null, eA = 1, lF(A, e, t, n);
  } finally {
    Ee.transition = r, eA = n;
  }
  return null;
}
function lF(A, e, t, n) {
  do
    xr();
  while (Mt !== null);
  if (Z & 6) throw Error(H(327));
  t = A.finishedWork;
  var r = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(H(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (GQ(A, i), A === DA && (HA = DA = null, MA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ia || (ia = !0, Ym(ps, function() {
    return xr(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var o = eA;
    eA = 1;
    var a = Z;
    Z |= 4, Dd.current = null, nF(A, t), Mm(t, A), xy(Ic), ws = !!Ec, Ic = Ec = null, A.current = t, rF(t), kQ(), Z = a, eA = o, Ee.transition = i;
  } else A.current = t;
  if (ia && (ia = !1, Mt = A, ks = r), i = A.pendingLanes, i === 0 && (jt = null), KQ(t.stateNode), se(A, FA()), e !== null) for (n = A.onRecoverableError, t = 0; t < e.length; t++) r = e[t], n(r.value, { componentStack: r.stack, digest: r.digest });
  if (Ts) throw Ts = !1, A = Xc, Xc = null, A;
  return ks & 1 && A.tag !== 0 && xr(), i = A.pendingLanes, i & 1 ? A === zc ? Mi++ : (Mi = 0, zc = A) : Mi = 0, dn(), null;
}
function xr() {
  if (Mt !== null) {
    var A = Ew(ks), e = Ee.transition, t = eA;
    try {
      if (Ee.transition = null, eA = 16 > A ? 16 : A, Mt === null) var n = !1;
      else {
        if (A = Mt, Mt = null, ks = 0, Z & 6) throw Error(H(331));
        var r = Z;
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
        if (Z = r, dn(), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
          Ze.onPostCommitFiberRoot(al, A);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      eA = t, Ee.transition = e;
    }
  }
  return !1;
}
function Rg(A, e, t) {
  e = Rr(t, e), e = Em(A, e, 1), A = Yt(A, e, 1), e = JA(), A !== null && (Ho(A, 1, e), se(A, e));
}
function vA(A, e, t) {
  if (A.tag === 3) Rg(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Rg(e, A, t);
      break;
    } else if (e.tag === 1) {
      var n = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (jt === null || !jt.has(n))) {
        A = Rr(t, A), A = Im(e, A, 1), e = Yt(e, A, 1), A = JA(), e !== null && (Ho(e, 1, A), se(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function uF(A, e, t) {
  var n = A.pingCache;
  n !== null && n.delete(e), e = JA(), A.pingedLanes |= A.suspendedLanes & t, DA === A && (MA & t) === t && (LA === 4 || LA === 3 && (MA & 130023424) === MA && 500 > FA() - Rd ? Sn(A, 0) : Kd |= t), se(A, e);
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
      var n = A.stateNode, r = A.memoizedState;
      r !== null && (t = r.retryLane);
      break;
    case 19:
      n = A.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  n !== null && n.delete(e), Xm(A, t);
}
var zm;
zm = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || oe.current) ne = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return ne = !1, qy(A, e, t);
    ne = !!(A.flags & 131072);
  }
  else ne = !1, fA && e.flags & 1048576 && Zw(e, Us, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      Ja(A, e), A = e.pendingProps;
      var r = kr(e, XA.current);
      Hr(e, t), r = Ld(null, e, n, A, r, t);
      var i = bd();
      return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, ae(n) ? (i = !0, ys(e)) : i = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, Ed(e), r.updater = Bl, e.stateNode = r, r._reactInternals = e, Dc(e, n, A, t), e = Nc(null, e, n, !0, i, t)) : (e.tag = 0, fA && i && md(e), jA(null, e, r, t), e = e.child), e;
    case 16:
      n = e.elementType;
      A: {
        switch (Ja(A, e), A = e.pendingProps, r = n._init, n = r(n._payload), e.type = n, r = e.tag = BF(n), A = ke(n, A), r) {
          case 0:
            e = Rc(null, e, n, A, t);
            break A;
          case 1:
            e = Hg(null, e, n, A, t);
            break A;
          case 11:
            e = Eg(null, e, n, A, t);
            break A;
          case 14:
            e = Ig(null, e, n, ke(n.type, A), t);
            break A;
        }
        throw Error(H(
          306,
          n,
          ""
        ));
      }
      return e;
    case 0:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : ke(n, r), Rc(A, e, n, r, t);
    case 1:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : ke(n, r), Hg(A, e, n, r, t);
    case 3:
      A: {
        if (Lm(e), A === null) throw Error(H(387));
        n = e.pendingProps, i = e.memoizedState, r = i.element, rm(A, e), Hs(e, n, null, t);
        var o = e.memoizedState;
        if (n = o.element, i.isDehydrated) if (i = { element: n, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
          r = Rr(Error(H(423)), e), e = xg(A, e, n, t, r);
          break A;
        } else if (n !== r) {
          r = Rr(Error(H(424)), e), e = xg(A, e, n, t, r);
          break A;
        } else for (fe = zt(e.stateNode.containerInfo.firstChild), de = e, fA = !0, De = null, t = tm(e, null, n, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (Or(), n === r) {
            e = wt(A, e, t);
            break A;
          }
          jA(A, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return im(e), A === null && Tc(e), n = e.type, r = e.pendingProps, i = A !== null ? A.memoizedProps : null, o = r.children, Hc(n, r) ? o = null : i !== null && Hc(n, i) && (e.flags |= 32), Sm(A, e), jA(A, e, o, t), e.child;
    case 6:
      return A === null && Tc(e), null;
    case 13:
      return bm(A, e, t);
    case 4:
      return Id(e, e.stateNode.containerInfo), n = e.pendingProps, A === null ? e.child = Dr(e, null, n, t) : jA(A, e, n, t), e.child;
    case 11:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : ke(n, r), Eg(A, e, n, r, t);
    case 7:
      return jA(A, e, e.pendingProps, t), e.child;
    case 8:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return jA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (n = e.type._context, r = e.pendingProps, i = e.memoizedProps, o = r.value, iA(Es, n._currentValue), n._currentValue = o, i !== null) if (_e(i.value, o)) {
          if (i.children === r.children && !oe.current) {
            e = wt(A, e, t);
            break A;
          }
        } else for (i = e.child, i !== null && (i.return = e); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            o = i.child;
            for (var s = a.firstContext; s !== null; ) {
              if (s.context === n) {
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
        jA(A, e, r.children, t), e = e.child;
      }
      return e;
    case 9:
      return r = e.type, n = e.pendingProps.children, Hr(e, t), r = Ie(r), n = n(r), e.flags |= 1, jA(A, e, n, t), e.child;
    case 14:
      return n = e.type, r = ke(n, e.pendingProps), r = ke(n.type, r), Ig(A, e, n, r, t);
    case 15:
      return Hm(A, e, e.type, e.pendingProps, t);
    case 17:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : ke(n, r), Ja(A, e), e.tag = 1, ae(n) ? (A = !0, ys(e)) : A = !1, Hr(e, t), Um(e, n, r), Dc(e, n, r, t), Nc(null, e, n, !0, A, t);
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
function dF(A, e, t, n) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ye(A, e, t, n) {
  return new dF(A, e, t, n);
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
function As(A, e, t, n, r, i) {
  var o = 2;
  if (n = A, typeof A == "function") _d(A) && (o = 1);
  else if (typeof A == "string") o = 5;
  else A: switch (A) {
    case sr:
      return Ln(t.children, r, i, e);
    case od:
      o = 8, r |= 8;
      break;
    case oc:
      return A = ye(12, t, e, r | 2), A.elementType = oc, A.lanes = i, A;
    case ac:
      return A = ye(13, t, e, r), A.elementType = ac, A.lanes = i, A;
    case sc:
      return A = ye(19, t, e, r), A.elementType = sc, A.lanes = i, A;
    case iw:
      return hl(t, r, i, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case nw:
          o = 10;
          break A;
        case rw:
          o = 9;
          break A;
        case ad:
          o = 11;
          break A;
        case sd:
          o = 14;
          break A;
        case Tt:
          o = 16, n = null;
          break A;
      }
      throw Error(H(130, A == null ? A : typeof A, ""));
  }
  return e = ye(o, t, e, r), e.elementType = A, e.type = n, e.lanes = i, e;
}
function Ln(A, e, t, n) {
  return A = ye(7, A, n, e), A.lanes = t, A;
}
function hl(A, e, t, n) {
  return A = ye(22, A, n, e), A.elementType = iw, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function yu(A, e, t) {
  return A = ye(6, A, null, e), A.lanes = t, A;
}
function Fu(A, e, t) {
  return e = ye(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function gF(A, e, t, n, r) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ru(0), this.expirationTimes = ru(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ru(0), this.identifierPrefix = n, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null;
}
function Gd(A, e, t, n, r, i, o, a, s) {
  return A = new gF(A, e, t, a, s), e === 1 ? (e = 1, i === !0 && (e |= 8)) : e = 0, i = ye(3, null, null, e), A.current = i, i.stateNode = A, i.memoizedState = { element: n, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(i), A;
}
function pF(A, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ar, key: n == null ? null : "" + n, children: A, containerInfo: e, implementation: t };
}
function jm(A) {
  if (!A) return tn;
  A = A._reactInternals;
  A: {
    if (zn(A) !== A || A.tag !== 1) throw Error(H(170));
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
function Jm(A, e, t, n, r, i, o, a, s) {
  return A = Gd(t, n, !0, A, r, i, o, a, s), A.context = jm(null), t = A.current, n = JA(), r = Jt(t), i = ft(n, r), i.callback = e ?? null, Yt(t, i, r), A.current.lanes = r, Ho(A, r, n), se(A, n), A;
}
function wl(A, e, t, n) {
  var r = e.current, i = JA(), o = Jt(r);
  return t = jm(t), e.context === null ? e.context = t : e.pendingContext = t, e = ft(i, o), e.payload = { element: A }, n = n === void 0 ? null : n, n !== null && (e.callback = n), A = Yt(r, e, o), A !== null && (Me(A, r, o, i), za(A, r, o)), o;
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
    _n(function() {
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
function wF(A, e, t, n, r) {
  if (r) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var l = Ds(o);
        i.call(l);
      };
    }
    var o = Jm(e, n, A, 0, null, !1, !1, "", Mg);
    return A._reactRootContainer = o, A[pt] = o.current, io(A.nodeType === 8 ? A.parentNode : A), _n(), o;
  }
  for (; r = A.lastChild; ) A.removeChild(r);
  if (typeof n == "function") {
    var a = n;
    n = function() {
      var l = Ds(s);
      a.call(l);
    };
  }
  var s = Gd(A, 0, !1, null, null, !1, !1, "", Mg);
  return A._reactRootContainer = s, A[pt] = s.current, io(A.nodeType === 8 ? A.parentNode : A), _n(function() {
    wl(e, s, t, n);
  }), s;
}
function Cl(A, e, t, n, r) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var s = Ds(o);
        a.call(s);
      };
    }
    wl(e, o, A, r);
  } else o = wF(t, e, A, r, n);
  return Ds(o);
}
Iw = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = vi(e.pendingLanes);
        t !== 0 && (cd(e, t | 1), se(e, FA()), !(Z & 6) && (Nr = FA() + 500, dn()));
      }
      break;
    case 13:
      _n(function() {
        var n = ht(A, 1);
        if (n !== null) {
          var r = JA();
          Me(n, A, 1, r);
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
      var n = JA();
      Me(t, A, e, n);
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
          var n = t[e];
          if (n !== A && n.form === A.form) {
            var r = cl(n);
            if (!r) throw Error(H(90));
            aw(n), cc(n, r);
          }
        }
      }
      break;
    case "textarea":
      lw(A, t);
      break;
    case "select":
      e = t.value, e != null && Fr(A, !!t.multiple, e, !1);
  }
};
pw = Nd;
hw = _n;
var mF = { usingClientEntryPoint: !1, Events: [So, fr, cl, Bw, gw, Nd] }, fi = { findFiberByHostInstance: Qn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vF = { bundleType: fi.bundleType, version: fi.version, rendererPackageName: fi.rendererPackageName, rendererConfig: fi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
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
  var t = !1, n = "", r = Zm;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = Gd(A, 1, !1, null, null, t, !1, n, r), A[pt] = e.current, io(A.nodeType === 8 ? A.parentNode : A), new $d(e);
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
  return _n(A);
};
pe.hydrate = function(A, e, t) {
  if (!vl(e)) throw Error(H(200));
  return Cl(null, A, e, !0, t);
};
pe.hydrateRoot = function(A, e, t) {
  if (!Wd(A)) throw Error(H(405));
  var n = t != null && t.hydratedSources || null, r = !1, i = "", o = Zm;
  if (t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = Jm(e, null, A, 1, t ?? null, r, !1, i, o), A[pt] = e.current, io(A), n) for (A = 0; A < n.length; A++) t = n[A], r = t._getVersion, r = r(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(
    t,
    r
  );
  return new ml(e);
};
pe.render = function(A, e, t) {
  if (!vl(e)) throw Error(H(200));
  return Cl(null, A, e, !1, t);
};
pe.unmountComponentAtNode = function(A) {
  if (!vl(A)) throw Error(H(40));
  return A._reactRootContainer ? (_n(function() {
    Cl(null, null, A, !1, function() {
      A._reactRootContainer = null, A[pt] = null;
    });
  }), !0) : !1;
};
pe.unstable_batchedUpdates = Nd;
pe.unstable_renderSubtreeIntoContainer = function(A, e, t, n) {
  if (!vl(t)) throw Error(H(200));
  if (A == null || A._reactInternals === void 0) throw Error(H(38));
  return Cl(A, e, t, !1, n);
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
}, bn = new TF();
function Xd(A) {
  return bn.isServer ? null : A instanceof Node ? A.ownerDocument : A != null && A.hasOwnProperty("current") && A.current instanceof Node ? A.current.ownerDocument : document;
}
function yl(A) {
  typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A).catch((e) => setTimeout(() => {
    throw e;
  }));
}
function Bn() {
  let A = [], e = { addEventListener(t, n, r, i) {
    return t.addEventListener(n, r, i), e.add(() => t.removeEventListener(n, r, i));
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
    return yl(() => {
      n.current && t[0]();
    }), e.add(() => {
      n.current = !1;
    });
  }, style(t, n, r) {
    let i = t.style.getPropertyValue(n);
    return Object.assign(t.style, { [n]: r }), this.add(() => {
      Object.assign(t.style, { [n]: i });
    });
  }, group(t) {
    let n = Bn();
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
function zd() {
  let [A] = Q.useState(Bn);
  return Q.useEffect(() => () => A.dispose(), [A]), A;
}
let ZA = (A, e) => {
  bn.isServer ? Q.useEffect(A, e) : Q.useLayoutEffect(A, e);
};
function Yn(A) {
  let e = Q.useRef(A);
  return ZA(() => {
    e.current = A;
  }, [A]), e;
}
let hA = function(A) {
  let e = Yn(A);
  return _.useCallback((...t) => e.current(...t), [e]);
}, kF = Q.createContext(void 0);
function OF() {
  return Q.useContext(kF);
}
function Jc(...A) {
  return Array.from(new Set(A.flatMap((e) => typeof e == "string" ? e.split(" ") : []))).filter(Boolean).join(" ");
}
function nn(A, e, ...t) {
  if (A in e) {
    let r = e[A];
    return typeof r == "function" ? r(...t) : r;
  }
  let n = new Error(`Tried to handle "${A}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, nn), n;
}
var Ks = ((A) => (A[A.None = 0] = "None", A[A.RenderStrategy = 1] = "RenderStrategy", A[A.Static = 2] = "Static", A))(Ks || {}), Pt = ((A) => (A[A.Unmount = 0] = "Unmount", A[A.Hidden = 1] = "Hidden", A))(Pt || {});
function Se({ ourProps: A, theirProps: e, slot: t, defaultTag: n, features: r, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? DF;
  let s = A0(e, A);
  if (i) return aa(s, t, n, o, a);
  let l = r ?? 0;
  if (l & 2) {
    let { static: u = !1, ...c } = s;
    if (u) return aa(c, t, n, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...c } = s;
    return nn(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return aa({ ...c, hidden: !0, style: { display: "none" } }, t, n, o, a);
    } });
  }
  return aa(s, t, n, o, a);
}
function aa(A, e = {}, t, n, r) {
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
  if (i === Q.Fragment && (Object.keys(mn(s)).length > 0 || Object.keys(mn(c)).length > 0)) if (!Q.isValidElement(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(mn(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(mn(s)).concat(Object.keys(mn(c))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = u.props, g = f == null ? void 0 : f.className, p = typeof g == "function" ? (...B) => Jc(g(...B), s.className) : Jc(g, s.className), w = p ? { className: p } : {}, y = A0(u.props, mn(Eu(s, ["ref"])));
    for (let B in c) B in y && delete c[B];
    return Q.cloneElement(u, Object.assign({}, y, c, l, { ref: r(u.ref, l.ref) }, w));
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
  for (let n of A) for (let r in n) r.startsWith("on") && typeof n[r] == "function" ? (t[r] != null || (t[r] = []), t[r].push(n[r])) : e[r] = n[r];
  if (e.disabled || e["aria-disabled"]) for (let n in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (t[n] = [(r) => {
    var i;
    return (i = r == null ? void 0 : r.preventDefault) == null ? void 0 : i.call(r);
  }]);
  for (let n in t) Object.assign(e, { [n](r, ...i) {
    let o = t[n];
    for (let a of o) {
      if ((r instanceof Event || (r == null ? void 0 : r.nativeEvent) instanceof Event) && r.defaultPrevented) return;
      a(r, ...i);
    }
  } });
  return e;
}
function le(A) {
  var e;
  return Object.assign(Q.forwardRef(A), { displayName: (e = A.displayName) != null ? e : A.name });
}
function mn(A) {
  let e = Object.assign({}, A);
  for (let t in e) e[t] === void 0 && delete e[t];
  return e;
}
function Eu(A, e = []) {
  let t = Object.assign({}, A);
  for (let n of e) n in t && delete t[n];
  return t;
}
let KF = "div";
var Rs = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(Rs || {});
function RF(A, e) {
  var t;
  let { features: n = 1, ...r } = A, i = { ref: e, "aria-hidden": (n & 2) === 2 ? !0 : (t = r["aria-hidden"]) != null ? t : void 0, hidden: (n & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Se({ ourProps: i, theirProps: r, slot: {}, defaultTag: KF, name: "Hidden" });
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
  let t = hA((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  });
  return A.every((n) => n == null || (n == null ? void 0 : n[e0])) ? void 0 : t;
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
    let n = hA((i) => (e((o) => [...o, i]), () => e((o) => {
      let a = o.slice(), s = a.indexOf(i);
      return s !== -1 && a.splice(s, 1), a;
    }))), r = Q.useMemo(() => ({ register: n, slot: t.slot, name: t.name, props: t.props, value: t.value }), [n, t.slot, t.name, t.props, t.value]);
    return _.createElement(Yd.Provider, { value: r }, t.children);
  }, [e])];
}
let GF = "p";
function VF(A, e) {
  let t = Q.useId(), n = OF(), { id: r = `headlessui-description-${t}`, ...i } = A, o = t0(), a = et(e);
  ZA(() => o.register(r), [r, o.register]);
  let s = n || !1, l = Q.useMemo(() => ({ ...o.slot, disabled: s }), [o.slot, s]), u = { ref: a, ...o.props, id: r };
  return Se({ ourProps: u, theirProps: i, slot: l, defaultTag: GF, name: o.name || "Description" });
}
let $F = le(VF), WF = Object.assign($F, {});
var n0 = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(n0 || {});
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
function r0(A, e) {
  let t = A(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(r) {
    return n.add(r), () => n.delete(r);
  }, dispatch(r, ...i) {
    let o = e[r].call(t, ...i);
    o && (t = o, n.forEach((a) => a()));
  } };
}
function i0(A) {
  return Q.useSyncExternalStore(A.subscribe, A.getSnapshot, A.getSnapshot);
}
let jF = new YF(() => r0(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function qr(A, e) {
  let t = jF.get(e), n = Q.useId(), r = i0(t);
  if (ZA(() => {
    if (A) return t.dispatch("ADD", n), () => t.dispatch("REMOVE", n);
  }, [t, A]), !A) return !1;
  let i = r.indexOf(n), o = r.length;
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
  let n = qc.get(A);
  n && (n["aria-hidden"] === null ? A.removeAttribute("aria-hidden") : A.setAttribute("aria-hidden", n["aria-hidden"]), A.inert = n.inert, qc.delete(A));
}
function JF(A, { allowed: e, disallowed: t } = {}) {
  let n = qr(A, "inert-others");
  ZA(() => {
    var r, i;
    if (!n) return;
    let o = Bn();
    for (let s of (r = t == null ? void 0 : t()) != null ? r : []) s && o.add(Pg(s));
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
  }, [n, e, t]);
}
function o0(A, e, t) {
  let n = Yn((r) => {
    let i = r.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && t();
  });
  Q.useEffect(() => {
    if (!A) return;
    let r = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!r) return;
    let i = Bn();
    if (typeof ResizeObserver < "u") {
      let o = new ResizeObserver(() => n.current(r));
      o.observe(r), i.add(() => o.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let o = new IntersectionObserver(() => n.current(r));
      o.observe(r), i.add(() => o.disconnect());
    }
    return () => i.dispose();
  }, [e, n, A]);
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
  return A === ((t = Xd(A)) == null ? void 0 : t.body) ? !1 : nn(e, { 0() {
    return A.matches(Af);
  }, 1() {
    let n = A;
    for (; n !== null; ) {
      if (n.matches(Af)) return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
var nU = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(nU || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dt(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let rU = ["textarea", "input"].join(",");
function iU(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, rU)) != null ? t : !1;
}
function oU(A, e = (t) => t) {
  return A.slice().sort((t, n) => {
    let r = e(t), i = e(n);
    if (r === null || i === null) return 0;
    let o = r.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _i(A, e, { sorted: t = !0, relativeTo: n = null, skipElements: r = [] } = {}) {
  let i = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, o = Array.isArray(A) ? t ? oU(A) : A : e & 64 ? eU(A) : AU(A);
  r.length > 0 && o.length > 1 && (o = o.filter((g) => !r.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === g : p === g))), n = n ?? i.activeElement;
  let a = (() => {
    if (e & 5) return 1;
    if (e & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (e & 1) return 0;
    if (e & 2) return Math.max(0, o.indexOf(n)) - 1;
    if (e & 4) return Math.max(0, o.indexOf(n)) + 1;
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
function di(A, e, t, n) {
  let r = Yn(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      r.current(o);
    }
    return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n);
  }, [A, e, n]);
}
function l0(A, e, t, n) {
  let r = Yn(t);
  Q.useEffect(() => {
    if (!A) return;
    function i(o) {
      r.current(o);
    }
    return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n);
  }, [A, e, n]);
}
const Gg = 30;
function lU(A, e, t) {
  let n = qr(A, "outside-click"), r = Yn(t), i = Q.useCallback(function(s, l) {
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
    return !tU(u, a0.Loose) && u.tabIndex !== -1 && s.preventDefault(), r.current(s, u);
  }, [r]), o = Q.useRef(null);
  di(n, "pointerdown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), di(n, "mousedown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), di(n, "click", (s) => {
    sU() || o.current && (i(s, () => o.current), o.current = null);
  }, !0);
  let a = Q.useRef({ x: 0, y: 0 });
  di(n, "touchstart", (s) => {
    a.current.x = s.touches[0].clientX, a.current.y = s.touches[0].clientY;
  }, !0), di(n, "touchend", (s) => {
    let l = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(l.x - a.current.x) >= Gg || Math.abs(l.y - a.current.y) >= Gg)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), l0(n, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function bo(...A) {
  return Q.useMemo(() => Xd(...A), [...A]);
}
function u0(A, e, t, n) {
  let r = Yn(t);
  Q.useEffect(() => {
    A = A ?? window;
    function i(o) {
      r.current(o);
    }
    return A.addEventListener(e, i, n), () => A.removeEventListener(e, i, n);
  }, [A, e, n]);
}
function uU() {
  let A;
  return { before({ doc: e }) {
    var t;
    let n = e.documentElement, r = (t = e.defaultView) != null ? t : window;
    A = Math.max(0, r.innerWidth - n.clientWidth);
  }, after({ doc: e, d: t }) {
    let n = e.documentElement, r = Math.max(0, n.clientWidth - n.offsetWidth), i = Math.max(0, A - r);
    t.style(n, "paddingRight", `${i}px`);
  } };
}
function cU() {
  return s0() ? { before({ doc: A, d: e, meta: t }) {
    function n(r) {
      return t.containers.flatMap((i) => i()).some((i) => i.contains(r));
    }
    e.microTask(() => {
      var r;
      if (window.getComputedStyle(A.documentElement).scrollBehavior !== "auto") {
        let a = Bn();
        a.style(A.documentElement, "scrollBehavior", "auto"), e.add(() => e.microTask(() => a.dispose()));
      }
      let i = (r = window.scrollY) != null ? r : window.pageYOffset, o = null;
      e.addEventListener(A, "click", (a) => {
        if (a.target instanceof HTMLElement) try {
          let s = a.target.closest("a");
          if (!s) return;
          let { hash: l } = new URL(s.href), u = A.querySelector(l);
          u && !n(u) && (o = u);
        } catch {
        }
      }, !0), e.addEventListener(A, "touchstart", (a) => {
        if (a.target instanceof HTMLElement) if (n(a.target)) {
          let s = a.target;
          for (; s.parentElement && n(s.parentElement); ) s = s.parentElement;
          e.style(s, "overscrollBehavior", "contain");
        } else e.style(a.target, "touchAction", "none");
      }), e.addEventListener(A, "touchmove", (a) => {
        if (a.target instanceof HTMLElement) {
          if (a.target.tagName === "INPUT") return;
          if (n(a.target)) {
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
let Un = r0(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let n = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: Bn(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(e), this.set(A, n), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let n = { doc: A, d: e, meta: dU(t) }, r = [cU(), uU(), fU()];
  r.forEach(({ before: i }) => i == null ? void 0 : i(n)), r.forEach(({ after: i }) => i == null ? void 0 : i(n));
}, SCROLL_ALLOW({ d: A }) {
  A.dispose();
}, TEARDOWN({ doc: A }) {
  this.delete(A);
} });
Un.subscribe(() => {
  let A = Un.getSnapshot(), e = /* @__PURE__ */ new Map();
  for (let [t] of A) e.set(t, t.documentElement.style.overflow);
  for (let t of A.values()) {
    let n = e.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !n || !r && n) && Un.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Un.dispatch("TEARDOWN", t);
  }
});
function BU(A, e, t = () => ({ containers: [] })) {
  let n = i0(Un), r = e ? n.get(e) : void 0, i = r ? r.count > 0 : !1;
  return ZA(() => {
    if (!(!e || !A)) return Un.dispatch("PUSH", e, t), () => Un.dispatch("POP", e, t);
  }, [A, e]), i;
}
function gU(A, e, t = () => [document.body]) {
  let n = qr(A, "scroll-lock");
  BU(n, e, (r) => {
    var i;
    return { containers: [...(i = r.containers) != null ? i : [], t] };
  });
}
function pU(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function hU(A = 0) {
  let [e, t] = Q.useState(A), n = Q.useCallback((s) => t(s), [e]), r = Q.useCallback((s) => t((l) => l | s), [e]), i = Q.useCallback((s) => (e & s) === s, [e]), o = Q.useCallback((s) => t((l) => l & ~s), [t]), a = Q.useCallback((s) => t((l) => l ^ s), [t]);
  return { flags: e, setFlag: n, addFlag: r, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var wU = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(wU || {});
function mU(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function vU(A, e, t, n) {
  let [r, i] = Q.useState(t), { hasFlag: o, addFlag: a, removeFlag: s } = hU(A && r ? 3 : 0), l = Q.useRef(!1), u = Q.useRef(!1), c = zd();
  return ZA(function f() {
    var g;
    if (!A) return;
    t && i(!0);
    let p = e.current;
    return p ? ((g = n == null ? void 0 : n.start) == null || g.call(n, t), CU(p, { inFlight: l, prepare() {
      u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (t ? (a(3), s(4)) : (a(4), s(2)));
    }, run() {
      u.current ? t ? (s(3), a(4)) : (s(4), a(3)) : t ? s(1) : a(1);
    }, done() {
      var w;
      u.current && typeof p.getAnimations == "function" && p.getAnimations().length > 0 || (l.current = !1, s(7), t || i(!1), (w = n == null ? void 0 : n.end) == null || w.call(n, t));
    } })) : t ? (a(3), c.nextFrame(() => f())) : void 0;
  }, [A, t, e, c]), A ? [r, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function CU(A, { prepare: e, run: t, done: n, inFlight: r }) {
  let i = Bn();
  return yU(A, { prepare: e, inFlight: r }), i.nextFrame(() => {
    i.add(QU(A, n)), t();
  }), i.dispose;
}
function QU(A, e) {
  let t = pU(e), n = Bn();
  if (!A) return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(A), [o, a] = [r, i].map((l) => {
    let [u = 0] = l.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, f) => f - c);
    return u;
  }), s = o + a;
  if (s !== 0) {
    let l = n.group((u) => {
      let c = u.setTimeout(() => {
        t(), u.dispose();
      }, s);
      u.addEventListener(A, "transitionrun", (f) => {
        f.target === f.currentTarget && (c(), u.addEventListener(A, "transitioncancel", (g) => {
          g.target === g.currentTarget && (t(), l());
        }));
      });
    });
    n.addEventListener(A, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), n.dispose());
    });
  } else t();
  return n.dispose;
}
function yU(A, { inFlight: e, prepare: t }) {
  if (e != null && e.current) {
    t();
    return;
  }
  let n = A.style.transition;
  A.style.transition = "none", t(), A.offsetHeight, A.style.transition = n;
}
function jd(A, e) {
  let t = Q.useRef([]), n = hA(A);
  Q.useEffect(() => {
    let r = [...t.current];
    for (let [i, o] of e.entries()) if (t.current[i] !== o) {
      let a = n(e, r);
      return t.current = e, a;
    }
  }, [n, ...e]);
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
function re(A) {
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
    overflowY: n,
    display: r
  } = Ge(A);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(r);
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
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function UU(A) {
  let e = rn(A);
  for (; At(e) && !Mr(e); ) {
    if (Fl(e))
      return null;
    if (Jd(e))
      return e;
    e = rn(e);
  }
  return null;
}
function Zd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mr(A) {
  return ["html", "body", "#document"].includes(Ai(A));
}
function Ge(A) {
  return Be(A).getComputedStyle(A);
}
function Ul(A) {
  return re(A) ? {
    scrollLeft: A.scrollLeft,
    scrollTop: A.scrollTop
  } : {
    scrollLeft: A.pageXOffset,
    scrollTop: A.pageYOffset
  };
}
function rn(A) {
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
  const e = rn(A);
  return Mr(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : At(e) && To(e) ? e : f0(e);
}
function go(A, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const r = f0(A), i = r === ((n = A.ownerDocument) == null ? void 0 : n.body), o = Be(r);
  return i ? e.concat(o, o.visualViewport || [], To(r) ? r : [], o.frameElement && t ? go(o.frameElement) : []) : e.concat(r, go(r, [], t));
}
const Pr = Math.min, Tn = Math.max, Ns = Math.round, sa = Math.floor, on = (A) => ({
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
  return Tn(A, Pr(e, t));
}
function ko(A, e) {
  return typeof A == "function" ? A(e) : A;
}
function Gn(A) {
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
function _r(A) {
  return ["top", "bottom"].includes(Gn(A)) ? "y" : "x";
}
function AB(A) {
  return d0(_r(A));
}
function HU(A, e, t) {
  t === void 0 && (t = !1);
  const n = Oo(A), r = AB(A), i = qd(r);
  let o = r === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Ms(o)), [o, Ms(o)];
}
function xU(A) {
  const e = Ms(A);
  return [nf(A), e, nf(e)];
}
function nf(A) {
  return A.replace(/start|end/g, (e) => IU[e]);
}
function SU(A, e, t) {
  const n = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (A) {
    case "top":
    case "bottom":
      return t ? e ? r : n : e ? n : r;
    case "left":
    case "right":
      return e ? i : o;
    default:
      return [];
  }
}
function LU(A, e, t, n) {
  const r = Oo(A);
  let i = SU(Gn(A), t === "start", n);
  return r && (i = i.map((o) => o + "-" + r), e && (i = i.concat(i.map(nf)))), i;
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
function $g(A, e, t) {
  let {
    reference: n,
    floating: r
  } = A;
  const i = _r(e), o = AB(e), a = qd(o), s = Gn(e), l = i === "y", u = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2, f = n[a] / 2 - r[a] / 2;
  let g;
  switch (s) {
    case "top":
      g = {
        x: u,
        y: n.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      g = {
        x: n.x - r.width,
        y: c
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
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
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: o
  } = t, a = i.filter(Boolean), s = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let l = await o.getElementRects({
    reference: A,
    floating: e,
    strategy: r
  }), {
    x: u,
    y: c
  } = $g(l, n, s), f = n, g = {}, p = 0;
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
      initialPlacement: n,
      placement: f,
      strategy: r,
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
      strategy: r
    }) : C.rects), {
      x: u,
      y: c
    } = $g(l, f, s)), w = -1);
  }
  return {
    x: u,
    y: c,
    placement: f,
    strategy: r,
    middlewareData: g
  };
};
async function g0(A, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: n,
    y: r,
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
    x: n,
    y: r,
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
      y: n,
      placement: r,
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
      y: n
    }, g = AB(r), p = qd(g), w = await o.getDimensions(l), y = g === "y", B = y ? "top" : "left", d = y ? "bottom" : "right", h = y ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[g] - f[g] - i.floating[p], C = f[g] - i.reference[g], v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let F = v ? v[h] : 0;
    (!F || !await (o.isElement == null ? void 0 : o.isElement(v))) && (F = a.floating[h] || i.floating[p]);
    const U = m / 2 - C / 2, E = F / 2 - w[p] / 2 - 1, S = Pr(c[B], E), P = Pr(c[d], E), N = S, D = F - w[p] - P, V = F / 2 - w[p] / 2 + U, J = tf(N, V, D), $ = !s.arrow && Oo(r) != null && V !== J && i.reference[p] / 2 - (V < N ? S : P) - w[p] / 2 < 0, K = $ ? V < N ? V - N : V - D : 0;
    return {
      [g]: f[g] + K,
      data: {
        [g]: J,
        centerOffset: V - J - K,
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
      var t, n;
      const {
        placement: r,
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
      const B = Gn(r), d = _r(a), h = Gn(a) === a, m = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), C = f || (h || !w ? [Ms(a)] : xU(a)), v = p !== "none";
      !f && v && C.push(...LU(a, w, p, m));
      const F = [a, ...C], U = await g0(e, y), E = [];
      let S = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && E.push(U[B]), c) {
        const V = HU(r, o, m);
        E.push(U[V[0]], U[V[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: E
      }], !E.every((V) => V <= 0)) {
        var P, N;
        const V = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, J = F[V];
        if (J)
          return {
            data: {
              index: V,
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
                  const x = _r(I.placement);
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
        if (r !== $)
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
    platform: n,
    elements: r
  } = A, i = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), o = Gn(t), a = Oo(t), s = _r(t) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, c = ko(e, A);
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
      var t, n;
      const {
        x: r,
        y: i,
        placement: o,
        middlewareData: a
      } = e, s = await DU(e, A);
      return o === ((t = a.offset) == null ? void 0 : t.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: r + s.x,
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
        y: n,
        placement: r
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
        y: n
      }, u = await g0(e, s), c = _r(Gn(r)), f = d0(c);
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
          y: w.y - n
        }
      };
    }
  };
};
function p0(A) {
  const e = Ge(A);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const r = At(A), i = r ? A.offsetWidth : t, o = r ? A.offsetHeight : n, a = Ns(t) !== i || Ns(n) !== o;
  return a && (t = i, n = o), {
    width: t,
    height: n,
    $: a
  };
}
function eB(A) {
  return re(A) ? A : A.contextElement;
}
function Sr(A) {
  const e = eB(A);
  if (!At(e))
    return on(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: r,
    $: i
  } = p0(e);
  let o = (i ? Ns(t.width) : t.width) / n, a = (i ? Ns(t.height) : t.height) / r;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const NU = /* @__PURE__ */ on(0);
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
function Vn(A, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const r = A.getBoundingClientRect(), i = eB(A);
  let o = on(1);
  e && (n ? re(n) && (o = Sr(n)) : o = Sr(A));
  const a = MU(i, t, n) ? h0(i) : on(0);
  let s = (r.left + a.x) / o.x, l = (r.top + a.y) / o.y, u = r.width / o.x, c = r.height / o.y;
  if (i) {
    const f = Be(i), g = n && re(n) ? Be(n) : n;
    let p = f, w = p.frameElement;
    for (; w && n && g !== p; ) {
      const y = Sr(w), B = w.getBoundingClientRect(), d = Ge(w), h = B.left + (w.clientLeft + parseFloat(d.paddingLeft)) * y.x, m = B.top + (w.clientTop + parseFloat(d.paddingTop)) * y.y;
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
    offsetParent: n,
    strategy: r
  } = A;
  const i = r === "fixed", o = Ft(n), a = e ? Fl(e.floating) : !1;
  if (n === o || a && i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = on(1);
  const u = on(0), c = At(n);
  if ((c || !c && !i) && ((Ai(n) !== "body" || To(o)) && (s = Ul(n)), At(n))) {
    const f = Vn(n);
    l = Sr(n), u.x = f.x + n.clientLeft, u.y = f.y + n.clientTop;
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
  return Vn(Ft(A)).left + Ul(A).scrollLeft;
}
function GU(A) {
  const e = Ft(A), t = Ul(A), n = A.ownerDocument.body, r = Tn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Tn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -t.scrollLeft + w0(A);
  const a = -t.scrollTop;
  return Ge(n).direction === "rtl" && (o += Tn(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: i,
    x: o,
    y: a
  };
}
function VU(A, e) {
  const t = Be(A), n = Ft(A), r = t.visualViewport;
  let i = n.clientWidth, o = n.clientHeight, a = 0, s = 0;
  if (r) {
    i = r.width, o = r.height;
    const l = Zd();
    (!l || l && e === "fixed") && (a = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function $U(A, e) {
  const t = Vn(A, !0, e === "fixed"), n = t.top + A.clientTop, r = t.left + A.clientLeft, i = At(A) ? Sr(A) : on(1), o = A.clientWidth * i.x, a = A.clientHeight * i.y, s = r * i.x, l = n * i.y;
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Wg(A, e, t) {
  let n;
  if (e === "viewport")
    n = VU(A, t);
  else if (e === "document")
    n = GU(Ft(A));
  else if (re(e))
    n = $U(e, t);
  else {
    const r = h0(A);
    n = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return Ps(n);
}
function m0(A, e) {
  const t = rn(A);
  return t === e || !re(t) || Mr(t) ? !1 : Ge(t).position === "fixed" || m0(t, e);
}
function WU(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let n = go(A, [], !1).filter((a) => re(a) && Ai(a) !== "body"), r = null;
  const i = Ge(A).position === "fixed";
  let o = i ? rn(A) : A;
  for (; re(o) && !Mr(o); ) {
    const a = Ge(o), s = Jd(o);
    !s && a.position === "fixed" && (r = null), (i ? !s && !r : !s && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || To(o) && !s && m0(A, o)) ? n = n.filter((u) => u !== o) : r = a, o = rn(o);
  }
  return e.set(A, n), n;
}
function XU(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: r
  } = A;
  const o = [...t === "clippingAncestors" ? Fl(e) ? [] : WU(e, this._c) : [].concat(t), n], a = o[0], s = o.reduce((l, u) => {
    const c = Wg(e, u, r);
    return l.top = Tn(c.top, l.top), l.right = Pr(c.right, l.right), l.bottom = Pr(c.bottom, l.bottom), l.left = Tn(c.left, l.left), l;
  }, Wg(e, a, r));
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
  const n = At(e), r = Ft(e), i = t === "fixed", o = Vn(A, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = on(0);
  if (n || !n && !i)
    if ((Ai(e) !== "body" || To(r)) && (a = Ul(e)), n) {
      const c = Vn(e, !0, i, e);
      s.x = c.x + e.clientLeft, s.y = c.y + e.clientTop;
    } else r && (s.x = w0(r));
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
    let r = rn(A);
    for (; r && !Mr(r); ) {
      if (re(r) && !Iu(r))
        return r;
      r = rn(r);
    }
    return t;
  }
  let n = Xg(A, e);
  for (; n && FU(n) && Iu(n); )
    n = Xg(n, e);
  return n && Mr(n) && Iu(n) && !Jd(n) ? t : n || UU(A) || t;
}
const jU = async function(A) {
  const e = this.getOffsetParent || v0, t = this.getDimensions, n = await t(A.floating);
  return {
    reference: YU(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
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
  getScale: Sr,
  isElement: re,
  isRTL: JU
};
function qU(A, e) {
  let t = null, n;
  const r = Ft(A);
  function i() {
    var a;
    clearTimeout(n), (a = t) == null || a.disconnect(), t = null;
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
    const g = sa(u), p = sa(r.clientWidth - (l + c)), w = sa(r.clientHeight - (u + f)), y = sa(l), d = {
      rootMargin: -g + "px " + -p + "px " + -w + "px " + -y + "px",
      threshold: Tn(0, Pr(1, s)) || 1
    };
    let h = !0;
    function m(C) {
      const v = C[0].intersectionRatio;
      if (v !== s) {
        if (!h)
          return o();
        v ? o(!1, v) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      h = !1;
    }
    try {
      t = new IntersectionObserver(m, {
        ...d,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(m, d);
    }
    t.observe(A);
  }
  return o(!0), i;
}
function A1(A, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = n, l = eB(A), u = r || i ? [...l ? go(l) : [], ...go(e)] : [];
  u.forEach((B) => {
    r && B.addEventListener("scroll", t, {
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
  let p, w = s ? Vn(A) : null;
  s && y();
  function y() {
    const B = Vn(A);
    w && (B.x !== w.x || B.y !== w.y || B.width !== w.width || B.height !== w.height) && t(), w = B, p = requestAnimationFrame(y);
  }
  return t(), () => {
    var B;
    u.forEach((d) => {
      r && d.removeEventListener("scroll", t), i && d.removeEventListener("resize", t);
    }), c == null || c(), (B = g) == null || B.disconnect(), g = null, s && cancelAnimationFrame(p);
  };
}
const e1 = KU, t1 = RU, n1 = OU, zg = kU, r1 = (A, e, t) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: ZU,
    ...t
  }, i = {
    ...r.platform,
    _c: n
  };
  return TU(A, e, {
    ...r,
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
  let t, n, r;
  if (A && e && typeof A == "object") {
    if (Array.isArray(A)) {
      if (t = A.length, t !== e.length) return !1;
      for (n = t; n-- !== 0; )
        if (!_s(A[n], e[n]))
          return !1;
      return !0;
    }
    if (r = Object.keys(A), t = r.length, t !== Object.keys(e).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, r[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      const i = r[n];
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
    middleware: n = [],
    platform: r,
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
  }), [f, g] = Q.useState(n);
  _s(f, n) || g(n);
  const [p, w] = Q.useState(null), [y, B] = Q.useState(null), d = Q.useCallback((K) => {
    K !== v.current && (v.current = K, w(K));
  }, []), h = Q.useCallback((K) => {
    K !== F.current && (F.current = K, B(K));
  }, []), m = i || p, C = o || y, v = Q.useRef(null), F = Q.useRef(null), U = Q.useRef(u), E = s != null, S = jg(s), P = jg(r), N = Q.useCallback(() => {
    if (!v.current || !F.current)
      return;
    const K = {
      placement: e,
      strategy: t,
      middleware: f
    };
    P.current && (K.platform = P.current), r1(v.current, F.current, K).then((I) => {
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
  const V = Q.useMemo(() => ({
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
    refs: V,
    elements: J,
    floatingStyles: $
  }), [u, N, V, J, $]);
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
        element: n,
        padding: r
      } = typeof A == "function" ? A(t) : A;
      return n && e(n) ? n.current != null ? zg({
        element: n.current,
        padding: r
      }).fn(t) : {} : n ? zg({
        element: n,
        padding: r
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
  ...n1(A),
  options: [A, e]
}), u1 = (A, e) => ({
  ...o1(A),
  options: [A, e]
}), Q0 = {
  ...rc
}, c1 = Q0.useInsertionEffect, f1 = c1 || ((A) => A());
function d1(A) {
  const e = Q.useRef(() => {
  });
  return f1(() => {
    e.current = A;
  }), Q.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var rf = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
let Jg = !1, B1 = 0;
const Zg = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + B1++
);
function g1() {
  const [A, e] = Q.useState(() => Jg ? Zg() : void 0);
  return rf(() => {
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
const m1 = /* @__PURE__ */ Q.createContext(null), v1 = /* @__PURE__ */ Q.createContext(null), C1 = () => {
  var A;
  return ((A = Q.useContext(m1)) == null ? void 0 : A.id) || null;
}, Q1 = () => Q.useContext(v1);
function y1(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = A, r = h1(), i = Q.useRef({}), [o] = Q.useState(() => w1()), a = C1() != null, [s, l] = Q.useState(n.reference), u = d1((g, p, w) => {
    i.current.openEvent = g ? p : void 0, o.emit("openchange", {
      open: g,
      event: p,
      reason: w,
      nested: a
    }), t == null || t(g, p, w);
  }), c = Q.useMemo(() => ({
    setPositionReference: l
  }), []), f = Q.useMemo(() => ({
    reference: s || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [s, n.reference, n.floating]);
  return Q.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: f,
    events: o,
    floatingId: r,
    refs: c
  }), [e, u, f, o, r, c]);
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
  }), n = A.rootContext || t, r = n.elements, [i, o] = Q.useState(null), [a, s] = Q.useState(null), u = (r == null ? void 0 : r.reference) || i, c = Q.useRef(null), f = Q1();
  rf(() => {
    u && (c.current = u);
  }, [u]);
  const g = i1({
    ...A,
    elements: {
      ...r,
      ...a && {
        reference: a
      }
    }
  }), p = Q.useCallback((h) => {
    const m = re(h) ? {
      getBoundingClientRect: () => h.getBoundingClientRect(),
      contextElement: h
    } : h;
    s(m), g.refs.setReference(m);
  }, [g.refs]), w = Q.useCallback((h) => {
    (re(h) || h === null) && (c.current = h, o(h)), (re(g.refs.reference.current) || g.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    h !== null && !re(h)) && g.refs.setReference(h);
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
    ...n,
    refs: y,
    elements: B,
    nodeId: e
  }), [g, y, B, e, n]);
  return rf(() => {
    n.dataRef.current.floatingContext = d;
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
  return "useSyncExternalStore" in rc ? ((e) => e.useSyncExternalStore)(rc)(() => () => {
  }, () => !1, () => !A) : !1;
}
function Do() {
  let A = H1(), [e, t] = Q.useState(bn.isHandoffComplete);
  return e && bn.isHandoffComplete === !1 && t(!1), Q.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), Q.useEffect(() => bn.handoff(), []), A ? !1 : e;
}
let F0 = Q.createContext(!1);
function x1() {
  return Q.useContext(F0);
}
function qg(A) {
  return _.createElement(F0.Provider, { value: A.force }, A.children);
}
function S1(A) {
  let e = x1(), t = Q.useContext(E0), n = bo(A), [r, i] = Q.useState(() => {
    var o;
    if (!e && t !== null) return (o = t.current) != null ? o : null;
    if (bn.isServer) return null;
    let a = n == null ? void 0 : n.getElementById("headlessui-portal-root");
    if (a) return a;
    if (n === null) return null;
    let s = n.createElement("div");
    return s.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(s);
  });
  return Q.useEffect(() => {
    r !== null && (n != null && n.body.contains(r) || n == null || n.body.appendChild(r));
  }, [r, n]), Q.useEffect(() => {
    e || t !== null && i(t.current);
  }, [t, i, e]), r;
}
let U0 = Q.Fragment, L1 = le(function(A, e) {
  let t = A, n = Q.useRef(null), r = et(PF((u) => {
    n.current = u;
  }), e), i = bo(n), o = S1(n), [a] = Q.useState(() => {
    var u;
    return bn.isServer ? null : (u = i == null ? void 0 : i.createElement("div")) != null ? u : null;
  }), s = Q.useContext(of), l = Do();
  return ZA(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), ZA(() => {
    if (a && s) return s.register(a);
  }, [s, a]), y0(() => {
    var u;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((u = o.parentElement) == null || u.removeChild(o)));
  }), l ? !o || !a ? null : Ql.createPortal(Se({ ourProps: { ref: r }, theirProps: t, slot: {}, defaultTag: U0, name: "Portal" }), a) : null;
});
function b1(A, e) {
  let t = et(e), { enabled: n = !0, ...r } = A;
  return n ? _.createElement(L1, { ...r, ref: t }) : Se({ ourProps: { ref: t }, theirProps: r, slot: {}, defaultTag: U0, name: "Portal" });
}
let T1 = Q.Fragment, E0 = Q.createContext(null);
function k1(A, e) {
  let { target: t, ...n } = A, r = { ref: et(e) };
  return _.createElement(E0.Provider, { value: t }, Se({ ourProps: r, theirProps: n, defaultTag: T1, name: "Popover.Group" }));
}
let of = Q.createContext(null);
function O1() {
  let A = Q.useContext(of), e = Q.useRef([]), t = hA((i) => (e.current.push(i), A && A.register(i), () => n(i))), n = hA((i) => {
    let o = e.current.indexOf(i);
    o !== -1 && e.current.splice(o, 1), A && A.unregister(i);
  }), r = Q.useMemo(() => ({ register: t, unregister: n, portals: e }), [t, n, e]);
  return [e, Q.useMemo(() => function({ children: i }) {
    return _.createElement(of.Provider, { value: r }, i);
  }, [r])];
}
let D1 = le(b1), I0 = le(k1), K1 = Object.assign(D1, { Group: I0 });
function R1(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let n = qr(A, "escape");
  u0(e, "keydown", (r) => {
    n && (r.defaultPrevented || r.key === n0.Escape && t(r));
  });
}
function N1() {
  var A;
  let [e] = Q.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [t, n] = Q.useState((A = e == null ? void 0 : e.matches) != null ? A : !1);
  return ZA(() => {
    if (!e) return;
    function r(i) {
      n(i.matches);
    }
    return e.addEventListener("change", r), () => e.removeEventListener("change", r);
  }, [e]), t;
}
function M1({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
  var n;
  let r = Q.useRef((n = t == null ? void 0 : t.current) != null ? n : null), i = bo(r), o = hA(() => {
    var a, s, l;
    let u = [];
    for (let c of A) c !== null && (c instanceof HTMLElement ? u.push(c) : "current" in c && c.current instanceof HTMLElement && u.push(c.current));
    if (e != null && e.current) for (let c of e.current) u.push(c);
    for (let c of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(r.current) || c.contains((l = (s = r.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || u.some((f) => c.contains(f)) || u.push(c));
    return u;
  });
  return { resolveContainers: o, contains: hA((a) => o().some((s) => s.contains(a))), mainTreeNodeRef: r, MainTreeNode: Q.useMemo(() => function() {
    return t != null ? null : _.createElement(Zc, { features: Rs.Hidden, ref: r });
  }, [r, t]) };
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
var vn = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(vn || {});
function G1(A, e) {
  let t = Q.useRef(null), n = et(t, e), { initialFocus: r, initialFocusFallback: i, containers: o, features: a = 15, ...s } = A;
  Do() || (a = 0);
  let l = bo(t);
  X1(a, { ownerDocument: l });
  let u = z1(a, { ownerDocument: l, container: t, initialFocus: r, initialFocusFallback: i });
  Y1(a, { ownerDocument: l, container: t, containers: o, previousActiveElement: u });
  let c = P1(), f = hA((B) => {
    let d = t.current;
    d && ((h) => h())(() => {
      nn(c.current, { [Qi.Forwards]: () => {
        _i(d, lt.First, { skipElements: [B.relatedTarget, i] });
      }, [Qi.Backwards]: () => {
        _i(d, lt.Last, { skipElements: [B.relatedTarget, i] });
      } });
    });
  }), g = qr(!!(a & 2), "focus-trap#tab-lock"), p = zd(), w = Q.useRef(!1), y = { ref: n, onKeyDown(B) {
    B.key == "Tab" && (w.current = !0, p.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(B) {
    if (!(a & 4)) return;
    let d = H0(o);
    t.current instanceof HTMLElement && d.add(t.current);
    let h = B.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (x0(d, h) || (w.current ? _i(t.current, nn(c.current, { [Qi.Forwards]: () => lt.Next, [Qi.Backwards]: () => lt.Previous }) | lt.WrapAround, { relativeTo: B.target }) : B.target instanceof HTMLElement && dt(B.target)));
  } };
  return _.createElement(_.Fragment, null, g && _.createElement(Zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Rs.Focusable }), Se({ ourProps: y, theirProps: s, defaultTag: _1, name: "FocusTrap" }), g && _.createElement(Zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Rs.Focusable }));
}
let V1 = le(G1), $1 = Object.assign(V1, { features: vn });
function W1(A = !0) {
  let e = Q.useRef(Rt.slice());
  return jd(([t], [n]) => {
    n === !0 && t === !1 && yl(() => {
      e.current.splice(0);
    }), n === !1 && t === !0 && (e.current = Rt.slice());
  }, [A, Rt, e]), hA(() => {
    var t;
    return (t = e.current.find((n) => n != null && n.isConnected)) != null ? t : null;
  });
}
function X1(A, { ownerDocument: e }) {
  let t = !!(A & 8), n = W1(t);
  jd(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && dt(n());
  }, [t]), y0(() => {
    t && dt(n());
  });
}
function z1(A, { ownerDocument: e, container: t, initialFocus: n, initialFocusFallback: r }) {
  let i = Q.useRef(null), o = qr(!!(A & 1), "focus-trap#initial-focus"), a = tB();
  return jd(() => {
    if (A === 0) return;
    if (!o) {
      r != null && r.current && dt(r.current);
      return;
    }
    let s = t.current;
    s && yl(() => {
      if (!a.current) return;
      let l = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === l) {
          i.current = l;
          return;
        }
      } else if (s.contains(l)) {
        i.current = l;
        return;
      }
      if (n != null && n.current) dt(n.current);
      else {
        if (A & 16) {
          if (_i(s, lt.First | lt.AutoFocus) !== ef.Error) return;
        } else if (_i(s, lt.First) !== ef.Error) return;
        if (r != null && r.current && (dt(r.current), (e == null ? void 0 : e.activeElement) === r.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = e == null ? void 0 : e.activeElement;
    });
  }, [r, o, A]), i;
}
function Y1(A, { ownerDocument: e, container: t, containers: n, previousActiveElement: r }) {
  let i = tB(), o = !!(A & 4);
  u0(e == null ? void 0 : e.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let s = H0(n);
    t.current instanceof HTMLElement && s.add(t.current);
    let l = r.current;
    if (!l) return;
    let u = a.target;
    u && u instanceof HTMLElement ? x0(s, u) ? (r.current = u, dt(u)) : (a.preventDefault(), a.stopPropagation(), dt(l)) : dt(r.current);
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
  let t = Yn(A), n = Q.useRef([]), r = tB(), i = zd(), o = hA((g, p = Pt.Hidden) => {
    let w = n.current.findIndex(({ el: y }) => y === g);
    w !== -1 && (nn(p, { [Pt.Unmount]() {
      n.current.splice(w, 1);
    }, [Pt.Hidden]() {
      n.current[w].state = "hidden";
    } }), i.microTask(() => {
      var y;
      !Sl(n) && r.current && ((y = t.current) == null || y.call(t));
    }));
  }), a = hA((g) => {
    let p = n.current.find(({ el: w }) => w === g);
    return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({ el: g, state: "visible" }), () => o(g, Pt.Unmount);
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
  return Q.useMemo(() => ({ children: n, register: a, unregister: o, onStart: c, onStop: f, wait: l, chains: u }), [a, o, n, c, f, u, l]);
}
let b0 = Q.Fragment, T0 = Ks.RenderStrategy;
function q1(A, e) {
  var t, n;
  let { transition: r = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: s, enter: l, enterFrom: u, enterTo: c, entered: f, leave: g, leaveFrom: p, leaveTo: w, ...y } = A, B = Q.useRef(null), d = S0(A), h = et(...d ? [B, e] : e === null ? [] : [e]), m = (t = y.unmount) == null || t ? Pt.Unmount : Pt.Hidden, { show: C, appear: v, initial: F } = J1(), [U, E] = Q.useState(C ? "visible" : "hidden"), S = Z1(), { register: P, unregister: N } = S;
  ZA(() => P(B), [P, B]), ZA(() => {
    if (m === Pt.Hidden && B.current) {
      if (C && U !== "visible") {
        E("visible");
        return;
      }
      return nn(U, { hidden: () => N(B), visible: () => P(B) });
    }
  }, [U, B, P, N, C, m]);
  let D = Do();
  ZA(() => {
    if (d && D && U === "visible" && B.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [B, U, D, d]);
  let V = F && !v, J = v && C && F, $ = Q.useRef(!1), K = L0(() => {
    $.current || (E("hidden"), N(B));
  }, S), I = hA((BA) => {
    $.current = !0;
    let gA = BA ? "enter" : "leave";
    K.onStart(B, gA, (nA) => {
      nA === "enter" ? i == null || i() : nA === "leave" && (a == null || a());
    });
  }), x = hA((BA) => {
    let gA = BA ? "enter" : "leave";
    $.current = !1, K.onStop(B, gA, (nA) => {
      nA === "enter" ? o == null || o() : nA === "leave" && (s == null || s());
    }), gA === "leave" && !Sl(K) && (E("hidden"), N(B));
  });
  Q.useEffect(() => {
    d && r || (I(C), x(C));
  }, [C, d, r]);
  let L = !(!r || !d || !D || V), [, M] = vU(L, B, C, { start: I, end: x }), X = mn({ ref: h, className: ((n = Jc(y.className, J && l, J && u, M.enter && l, M.enter && M.closed && u, M.enter && !M.closed && c, M.leave && g, M.leave && !M.closed && p, M.leave && M.closed && w, !M.transition && C && f)) == null ? void 0 : n.trim()) || void 0, ...mU(M) }), dA = 0;
  return U === "visible" && (dA |= Ke.Open), U === "hidden" && (dA |= Ke.Closed), M.enter && (dA |= Ke.Opening), M.leave && (dA |= Ke.Closing), _.createElement(xl.Provider, { value: K }, _.createElement(U1, { value: dA }, Se({ ourProps: X, theirProps: y, defaultTag: b0, features: T0, visible: U === "visible", name: "Transition.Child" })));
}
function AE(A, e) {
  let { show: t, appear: n = !1, unmount: r = !0, ...i } = A, o = Q.useRef(null), a = S0(A), s = et(...a ? [o, e] : e === null ? [] : [e]);
  Do();
  let l = Il();
  if (t === void 0 && l !== null && (t = (l & Ke.Open) === Ke.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, c] = Q.useState(t ? "visible" : "hidden"), f = L0(() => {
    t || c("hidden");
  }), [g, p] = Q.useState(!0), w = Q.useRef([t]);
  ZA(() => {
    g !== !1 && w.current[w.current.length - 1] !== t && (w.current.push(t), p(!1));
  }, [w, t]);
  let y = Q.useMemo(() => ({ show: t, appear: n, initial: g }), [t, n, g]);
  o0(t, o, () => c("hidden")), ZA(() => {
    t ? c("visible") : !Sl(f) && o.current !== null && c("hidden");
  }, [t, f]);
  let B = { unmount: r }, d = hA(() => {
    var m;
    g && p(!1), (m = A.beforeEnter) == null || m.call(A);
  }), h = hA(() => {
    var m;
    g && p(!1), (m = A.beforeLeave) == null || m.call(A);
  });
  return _.createElement(xl.Provider, { value: f }, _.createElement(Hl.Provider, { value: y }, Se({ ourProps: { ...B, as: Q.Fragment, children: _.createElement(k0, { ref: s, ...B, ...i, beforeEnter: d, beforeLeave: h }) }, theirProps: {}, defaultTag: Q.Fragment, features: T0, visible: u === "visible", name: "Transition" })));
}
function eE(A, e) {
  let t = Q.useContext(Hl) !== null, n = Il() !== null;
  return _.createElement(_.Fragment, null, !t && n ? _.createElement(af, { ref: e, ...A }) : _.createElement(k0, { ref: e, ...A }));
}
let af = le(AE), k0 = le(q1), po = le(eE), O0 = Object.assign(af, { Child: po, Root: af });
var tE = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(tE || {}), nE = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(nE || {});
let rE = { 0(A, e) {
  return A.titleId === e.id ? A : { ...A, titleId: e.id };
} }, nB = Q.createContext(null);
nB.displayName = "DialogContext";
function Ll(A) {
  let e = Q.useContext(nB);
  if (e === null) {
    let t = new Error(`<${A} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ll), t;
  }
  return e;
}
function iE(A, e) {
  return nn(e.type, rE, A, e);
}
let Ap = le(function(A, e) {
  let t = Q.useId(), { id: n = `headlessui-dialog-${t}`, open: r, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: s = !0, __demoMode: l = !1, ...u } = A, c = Q.useRef(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (c.current || (c.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Il();
  r === void 0 && f !== null && (r = (f & Ke.Open) === Ke.Open);
  let g = Q.useRef(null), p = et(g, e), w = bo(g), y = r ? 0 : 1, [B, d] = Q.useReducer(iE, { titleId: null, descriptionId: null, panelRef: Q.createRef() }), h = hA(() => i(!1)), m = hA((L) => d({ type: 0, id: L })), C = Do() ? y === 0 : !1, [v, F] = O1(), U = { get current() {
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
  let [D, V] = _F(), J = Q.useMemo(() => [{ dialogState: y, close: h, setTitleId: m }, B], [y, B, h, m]), $ = Q.useMemo(() => ({ open: y === 0 }), [y]), K = { ref: p, id: n, role: a, tabIndex: -1, "aria-modal": l ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": B.titleId, "aria-describedby": D }, I = !N1(), x = vn.None;
  return C && !l && (x |= vn.RestoreFocus, x |= vn.TabLock, s && (x |= vn.AutoFocus), I && (x |= vn.InitialFocus)), _.createElement(E1, null, _.createElement(qg, { force: !0 }, _.createElement(K1, null, _.createElement(nB.Provider, { value: J }, _.createElement(I0, { target: g }, _.createElement(qg, { force: !1 }, _.createElement(V, { slot: $ }, _.createElement(F, null, _.createElement($1, { initialFocus: o, initialFocusFallback: g, containers: E, features: x }, _.createElement(zF, { value: h }, Se({ ourProps: K, theirProps: u, slot: $, defaultTag: oE, features: aE, visible: y === 0, name: "Dialog" })))))))))), _.createElement(MF, null, _.createElement(P, null)));
}), oE = "div", aE = Ks.RenderStrategy | Ks.Static;
function sE(A, e) {
  let { transition: t = !1, open: n, ...r } = A, i = Il(), o = A.hasOwnProperty("open") || i !== null, a = A.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return i === null && n !== void 0 && !r.static ? _.createElement(O0, { show: n, transition: t, unmount: r.unmount }, _.createElement(Ap, { ref: e, ...r })) : _.createElement(Ap, { ref: e, open: n, ...r });
}
let lE = "div";
function uE(A, e) {
  let t = Q.useId(), { id: n = `headlessui-dialog-panel-${t}`, transition: r = !1, ...i } = A, [{ dialogState: o }, a] = Ll("Dialog.Panel"), s = et(e, a.panelRef), l = Q.useMemo(() => ({ open: o === 0 }), [o]), u = hA((c) => {
    c.stopPropagation();
  });
  return _.createElement(r ? po : Q.Fragment, null, Se({ ourProps: { ref: s, id: n, onClick: u }, theirProps: i, slot: l, defaultTag: lE, name: "Dialog.Panel" }));
}
let cE = "div";
function fE(A, e) {
  let { transition: t = !1, ...n } = A, [{ dialogState: r }] = Ll("Dialog.Backdrop"), i = Q.useMemo(() => ({ open: r === 0 }), [r]);
  return _.createElement(t ? po : Q.Fragment, null, Se({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: n, slot: i, defaultTag: cE, name: "Dialog.Backdrop" }));
}
let dE = "h2";
function BE(A, e) {
  let t = Q.useId(), { id: n = `headlessui-dialog-title-${t}`, ...r } = A, [{ dialogState: i, setTitleId: o }] = Ll("Dialog.Title"), a = et(e);
  Q.useEffect(() => (o(n), () => o(null)), [n, o]);
  let s = Q.useMemo(() => ({ open: i === 0 }), [i]);
  return Se({ ourProps: { ref: a, id: n }, theirProps: r, slot: s, defaultTag: dE, name: "Dialog.Title" });
}
let gE = le(sE), D0 = le(uE);
le(fE);
let pE = le(BE), hE = Object.assign(gE, { Panel: D0, Title: pE, Description: WF });
function ep(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(A);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(A, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function k(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ep(Object(t), !0).forEach(function(n) {
      bA(A, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : ep(Object(t)).forEach(function(n) {
      Object.defineProperty(A, n, Object.getOwnPropertyDescriptor(t, n));
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
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n);
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
function rB(A, e) {
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
    var n = [], r = !0, i = !1, o, a;
    try {
      for (t = t.call(A); !(r = (o = t.next()).done) && (n.push(o.value), !(e && n.length === e)); r = !0)
        ;
    } catch (s) {
      i = !0, a = s;
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (i) throw a;
      }
    }
    return n;
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
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = A[t];
  return n;
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
var IE = iB.navigator || {}, np = IE.userAgent, rp = np === void 0 ? "" : np, an = iB, uA = R0, ip = N0, la = M0;
an.document;
var Ut = !!uA.documentElement && !!uA.head && typeof uA.addEventListener == "function" && typeof uA.createElement == "function", P0 = ~rp.indexOf("MSIE") || ~rp.indexOf("Trident/"), ua, ca, fa, da, Ba, mt = "___FONT_AWESOME___", lf = 16, _0 = "fa", G0 = "svg-inline--fa", $n = "data-fa-i2svg", uf = "data-fa-pseudo-element", HE = "data-fa-pseudo-element-pending", oB = "data-prefix", aB = "data-icon", op = "fontawesome-i2svg", xE = "async", SE = ["HTML", "HEAD", "STYLE", "SCRIPT"], V0 = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), sA = "classic", CA = "sharp", sB = [sA, CA];
function Ro(A) {
  return new Proxy(A, {
    get: function(t, n) {
      return n in t ? t[n] : t[sA];
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
}), Ba)), W0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], OE = W0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), DE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], En = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, vo = /* @__PURE__ */ new Set();
Object.keys(wo[sA]).map(vo.add.bind(vo));
Object.keys(wo[CA]).map(vo.add.bind(vo));
var KE = [].concat(sB, Ko(vo), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", En.GROUP, En.SWAP_OPACITY, En.PRIMARY, En.SECONDARY]).concat(W0.map(function(A) {
  return "".concat(A, "x");
})).concat(OE.map(function(A) {
  return "w-".concat(A);
})), Gi = an.FontAwesomeConfig || {};
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
    var e = rB(A, 2), t = e[0], n = e[1], r = NE(RE(t));
    r != null && (Gi[n] = r);
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
var Gr = k(k({}, X0), Gi);
Gr.autoReplaceSvg || (Gr.observeMutations = !1);
var R = {};
Object.keys(X0).forEach(function(A) {
  Object.defineProperty(R, A, {
    enumerable: !0,
    set: function(t) {
      Gr[A] = t, Vi.forEach(function(n) {
        return n(R);
      });
    },
    get: function() {
      return Gr[A];
    }
  });
});
Object.defineProperty(R, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Gr.cssPrefix = e, Vi.forEach(function(t) {
      return t(R);
    });
  },
  get: function() {
    return Gr.cssPrefix;
  }
});
an.FontAwesomeConfig = R;
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
    for (var t = uA.head.childNodes, n = null, r = t.length - 1; r > -1; r--) {
      var i = t[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return uA.head.insertBefore(e, n), A;
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
  var e = A.transform, t = A.containerWidth, n = A.iconWidth, r = {
    transform: "translate(".concat(t / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), a = "rotate(".concat(e.rotate, " 0 0)"), s = {
    transform: "".concat(i, " ").concat(o, " ").concat(a)
  }, l = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: s,
    path: l
  };
}
function WE(A) {
  var e = A.transform, t = A.width, n = t === void 0 ? lf : t, r = A.height, i = r === void 0 ? lf : r, o = A.startCentered, a = o === void 0 ? !1 : o, s = "";
  return a && P0 ? s += "translate(".concat(e.x / xt - n / 2, "em, ").concat(e.y / xt - i / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(e.x / xt, "em), calc(-50% + ").concat(e.y / xt, "em)) ") : s += "translate(".concat(e.x / xt, "em, ").concat(e.y / xt, "em) "), s += "scale(".concat(e.size / xt * (e.flipX ? -1 : 1), ", ").concat(e.size / xt * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
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
  var A = _0, e = G0, t = R.cssPrefix, n = R.replacementClass, r = XE;
  if (t !== A || n !== e) {
    var i = new RegExp("\\.".concat(A, "\\-"), "g"), o = new RegExp("\\--".concat(A, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(a, ".".concat(n));
  }
  return r;
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
}, vt = an || {};
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
  var e = A.tag, t = A.attributes, n = t === void 0 ? {} : t, r = A.children, i = r === void 0 ? [] : r;
  return typeof A == "string" ? z0(A) : "<".concat(e, " ").concat(VE(n), ">").concat(i.map(No).join(""), "</").concat(e, ">");
}
function sp(A, e, t) {
  if (A && A[e] && A[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: A[e][t]
    };
}
var xu = function(e, t, n, r) {
  var i = Object.keys(e), o = i.length, a = t, s, l, u;
  for (n === void 0 ? (s = 1, u = e[i[0]]) : (s = 0, u = n); s < o; s++)
    l = i[s], u = a(u, e[l], l, e);
  return u;
};
function JE(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var i = A.charCodeAt(t++);
      (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}
function cf(A) {
  var e = JE(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function ZE(A, e) {
  var t = A.length, n = A.charCodeAt(e), r;
  return n >= 55296 && n <= 56319 && t > e + 1 && (r = A.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function lp(A) {
  return Object.keys(A).reduce(function(e, t) {
    var n = A[t], r = !!n.icon;
    return r ? e[n.iconName] = n.icon : e[t] = n, e;
  }, {});
}
function ff(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.skipHooks, r = n === void 0 ? !1 : n, i = lp(e);
  typeof Re.hooks.addPack == "function" && !r ? Re.hooks.addPack(A, lp(e)) : Re.styles[A] = k(k({}, Re.styles[A] || {}), i), A === "fas" && ff("fa", e);
}
var ga, pa, ha, mr = Re.styles, qE = Re.shims, AI = (ga = {}, bA(ga, sA, Object.values(mo[sA])), bA(ga, CA, Object.values(mo[CA])), ga), cB = null, J0 = {}, Z0 = {}, q0 = {}, Av = {}, ev = {}, eI = (pa = {}, bA(pa, sA, Object.keys(ho[sA])), bA(pa, CA, Object.keys(ho[CA])), pa);
function tI(A) {
  return ~KE.indexOf(A);
}
function nI(A, e) {
  var t = e.split("-"), n = t[0], r = t.slice(1).join("-");
  return n === A && r !== "" && !tI(r) ? r : null;
}
var tv = function() {
  var e = function(i) {
    return xu(mr, function(o, a, s) {
      return o[s] = xu(a, i, {}), o;
    }, {});
  };
  J0 = e(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "number";
      });
      a.forEach(function(s) {
        r[s.toString(16)] = o;
      });
    }
    return r;
  }), Z0 = e(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "string";
      });
      a.forEach(function(s) {
        r[s] = o;
      });
    }
    return r;
  }), ev = e(function(r, i, o) {
    var a = i[2];
    return r[o] = o, a.forEach(function(s) {
      r[s] = o;
    }), r;
  });
  var t = "far" in mr || R.autoFetchSvg, n = xu(qE, function(r, i) {
    var o = i[0], a = i[1], s = i[2];
    return a === "far" && !t && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: s
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  q0 = n.names, Av = n.unicodes, cB = Tl(R.styleDefault, {
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
function rI(A, e) {
  return (Z0[A] || {})[e];
}
function In(A, e) {
  return (ev[A] || {})[e];
}
function nv(A) {
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
function sn() {
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
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, n = t === void 0 ? sA : t, r = ho[n][A], i = wo[n][A] || wo[n][r], o = A in Re.styles ? A : null;
  return i || o || null;
}
var up = (ha = {}, bA(ha, sA, Object.keys(mo[sA])), bA(ha, CA, Object.keys(mo[CA])), ha);
function kl(A) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.skipLookups, r = n === void 0 ? !1 : n, i = (e = {}, bA(e, sA, "".concat(R.cssPrefix, "-").concat(sA)), bA(e, CA, "".concat(R.cssPrefix, "-").concat(CA)), e), o = null, a = sA;
  (A.includes(i[sA]) || A.some(function(l) {
    return up[sA].includes(l);
  })) && (a = sA), (A.includes(i[CA]) || A.some(function(l) {
    return up[CA].includes(l);
  })) && (a = CA);
  var s = A.reduce(function(l, u) {
    var c = nI(R.cssPrefix, u);
    if (mr[u] ? (u = AI[a].includes(u) ? LE[a][u] : u, o = u, l.prefix = u) : eI[a].indexOf(u) > -1 ? (o = u, l.prefix = Tl(u, {
      family: a
    })) : c ? l.iconName = c : u !== R.replacementClass && u !== i[sA] && u !== i[CA] && l.rest.push(u), !r && l.prefix && l.iconName) {
      var f = o === "fa" ? nv(l.iconName) : {}, g = In(l.prefix, l.iconName);
      f.prefix && (o = null), l.iconName = f.iconName || g || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !mr.far && mr.fas && !R.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, dB());
  return (A.includes("fa-brands") || A.includes("fab")) && (s.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (s.prefix = "fad"), !s.prefix && a === CA && (mr.fass || R.autoFetchSvg) && (s.prefix = "fass", s.iconName = In(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = sn() || "fas"), s;
}
var oI = /* @__PURE__ */ function() {
  function A() {
    wE(this, A), this.definitions = {};
  }
  return vE(A, [{
    key: "add",
    value: function() {
      for (var t = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
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
    value: function(t, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(i) {
        var o = r[i], a = o.prefix, s = o.iconName, l = o.icon, u = l[2];
        t[a] || (t[a] = {}), u.length > 0 && u.forEach(function(c) {
          typeof c == "string" && (t[a][c] = l);
        }), t[a][s] = l;
      }), t;
    }
  }]), A;
}(), cp = [], vr = {}, Lr = {}, aI = Object.keys(Lr);
function sI(A, e) {
  var t = e.mixoutsTo;
  return cp = A, vr = {}, Object.keys(Lr).forEach(function(n) {
    aI.indexOf(n) === -1 && delete Lr[n];
  }), cp.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (t[o] = r[o]), Gs(r[o]) === "object" && Object.keys(r[o]).forEach(function(a) {
        t[o] || (t[o] = {}), t[o][a] = r[o][a];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        vr[o] || (vr[o] = []), vr[o].push(i[o]);
      });
    }
    n.provides && n.provides(Lr);
  }), t;
}
function df(A, e) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++)
    n[r - 2] = arguments[r];
  var i = vr[A] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function Wn(A) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  var r = vr[A] || [];
  r.forEach(function(i) {
    i.apply(null, t);
  });
}
function Ct() {
  var A = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Lr[A] ? Lr[A].apply(null, e) : void 0;
}
function Bf(A) {
  A.prefix === "fa" && (A.prefix = "fas");
  var e = A.iconName, t = A.prefix || sn();
  if (e)
    return e = In(t, e) || e, sp(rv.definitions, t, e) || sp(Re.styles, t, e);
}
var rv = new oI(), lI = function() {
  R.autoReplaceSvg = !1, R.observeMutations = !1, Wn("noAuto");
}, uI = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ut ? (Wn("beforeI2svg", e), Ct("pseudoElements2svg", e), Ct("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0), R.observeMutations = !0, jE(function() {
      fI({
        autoReplaceSvgRoot: t
      }), Wn("watch", e);
    });
  }
}, cI = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Gs(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: In(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Tl(e[0]);
      return {
        prefix: n,
        iconName: In(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(R.cssPrefix, "-")) > -1 || e.match(bE))) {
      var r = kl(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || sn(),
        iconName: In(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var i = sn();
      return {
        prefix: i,
        iconName: In(i, e) || e
      };
    }
  }
}, we = {
  noAuto: lI,
  config: R,
  dom: uI,
  parse: cI,
  library: rv,
  findIconDefinition: Bf,
  toHtml: No
}, fI = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, n = t === void 0 ? uA : t;
  (Object.keys(Re.styles).length > 0 || R.autoFetchSvg) && Ut && R.autoReplaceSvg && we.dom.i2svg({
    node: n
  });
};
function Ol(A, e) {
  return Object.defineProperty(A, "abstract", {
    get: e
  }), Object.defineProperty(A, "html", {
    get: function() {
      return A.abstract.map(function(n) {
        return No(n);
      });
    }
  }), Object.defineProperty(A, "node", {
    get: function() {
      if (Ut) {
        var n = uA.createElement("div");
        return n.innerHTML = A.html, n.children;
      }
    }
  }), A;
}
function dI(A) {
  var e = A.children, t = A.main, n = A.mask, r = A.attributes, i = A.styles, o = A.transform;
  if (uB(o) && t.found && !n.found) {
    var a = t.width, s = t.height, l = {
      x: a / s / 2,
      y: 0.5
    };
    r.style = bl(k(k({}, i), {}, {
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function BI(A) {
  var e = A.prefix, t = A.iconName, n = A.children, r = A.attributes, i = A.symbol, o = i === !0 ? "".concat(e, "-").concat(R.cssPrefix, "-").concat(t) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: k(k({}, r), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function BB(A) {
  var e = A.icons, t = e.main, n = e.mask, r = A.prefix, i = A.iconName, o = A.transform, a = A.symbol, s = A.title, l = A.maskId, u = A.titleId, c = A.extra, f = A.watchable, g = f === void 0 ? !1 : f, p = n.found ? n : t, w = p.width, y = p.height, B = r === "fak", d = [R.replacementClass, i ? "".concat(R.cssPrefix, "-").concat(i) : ""].filter(function(E) {
    return c.classes.indexOf(E) === -1;
  }).filter(function(E) {
    return E !== "" || !!E;
  }).concat(c.classes).join(" "), h = {
    children: [],
    attributes: k(k({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: d,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(w, " ").concat(y)
    })
  }, m = B && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(w / y * 16 * 0.0625, "em")
  } : {};
  g && (h.attributes[$n] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || Co())
    },
    children: [s]
  }), delete h.attributes.title);
  var C = k(k({}, h), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: o,
    symbol: a,
    styles: k(k({}, m), c.styles)
  }), v = n.found && t.found ? Ct("generateAbstractMask", C) || {
    children: [],
    attributes: {}
  } : Ct("generateAbstractIcon", C) || {
    children: [],
    attributes: {}
  }, F = v.children, U = v.attributes;
  return C.children = F, C.attributes = U, a ? BI(C) : dI(C);
}
function fp(A) {
  var e = A.content, t = A.width, n = A.height, r = A.transform, i = A.title, o = A.extra, a = A.watchable, s = a === void 0 ? !1 : a, l = k(k(k({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[$n] = "");
  var u = k({}, o.styles);
  uB(r) && (u.transform = WE({
    transform: r,
    startCentered: !0,
    width: t,
    height: n
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
  var e = A.content, t = A.title, n = A.extra, r = k(k(k({}, n.attributes), t ? {
    title: t
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = bl(n.styles);
  i.length > 0 && (r.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
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
  var e = A[0], t = A[1], n = A.slice(4), r = rB(n, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(R.cssPrefix, "-").concat(En.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(En.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(R.cssPrefix, "-").concat(En.PRIMARY),
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
  return e === "fa" && R.styleDefault !== null && (e = sn()), new Promise(function(n, r) {
    if (Ct("missingIconAbstract"), t === "fa") {
      var i = nv(A) || {};
      A = i.iconName || A, e = i.prefix || e;
    }
    if (A && e && Su[e] && Su[e][A]) {
      var o = Su[e][A];
      return n(gf(o));
    }
    hI(A, e), n(k(k({}, pI), {}, {
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
  var e = A.getAttribute ? A.getAttribute($n) : null;
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
    return ns.replace;
  var A = ns[R.autoReplaceSvg];
  return A || ns.replace;
}
function QI(A) {
  return uA.createElementNS("http://www.w3.org/2000/svg", A);
}
function yI(A) {
  return uA.createElement(A);
}
function ov(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, n = t === void 0 ? A.tag === "svg" ? QI : yI : t;
  if (typeof A == "string")
    return uA.createTextNode(A);
  var r = n(A.tag);
  Object.keys(A.attributes || []).forEach(function(o) {
    r.setAttribute(o, A.attributes[o]);
  });
  var i = A.children || [];
  return i.forEach(function(o) {
    r.appendChild(ov(o, {
      ceFn: n
    }));
  }), r;
}
function FI(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var ns = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(r) {
        t.parentNode.insertBefore(ov(r), t);
      }), t.getAttribute($n) === null && R.keepOriginalSource) {
        var n = uA.createComment(FI(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], n = e[1];
    if (~lB(t).indexOf(R.replacementClass))
      return ns.replace(e);
    var r = new RegExp("".concat(R.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(a, s) {
        return s === R.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(a) {
      return No(a);
    }).join(`
`);
    t.setAttribute($n, ""), t.innerHTML = o;
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
    var n = gp;
    R.mutateApproach === xE && (n = an.requestAnimationFrame || gp), n(function() {
      var r = CI(), i = gB.begin("mutate");
      A.map(r), i(), t();
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
    var e = A.treeCallback, t = e === void 0 ? ts : e, n = A.nodeCallback, r = n === void 0 ? ts : n, i = A.pseudoElementsCallback, o = i === void 0 ? ts : i, a = A.observeMutationsRoot, s = a === void 0 ? uA : a;
    $s = new ip(function(l) {
      if (!pB) {
        var u = sn();
        ei(l).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !Bp(c.addedNodes[0]) && (R.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && R.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && Bp(c.target) && ~DE.indexOf(c.attributeName))
            if (c.attributeName === "class" && mI(c.target)) {
              var f = kl(lB(c.target)), g = f.prefix, p = f.iconName;
              c.target.setAttribute(oB, g || u), p && c.target.setAttribute(aB, p);
            } else vI(c.target) && r(c.target);
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
  return e && (t = e.split(";").reduce(function(n, r) {
    var i = r.split(":"), o = i[0], a = i.slice(1);
    return o && a.length > 0 && (n[o] = a.join(":").trim()), n;
  }, {})), t;
}
function II(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), n = A.innerText !== void 0 ? A.innerText.trim() : "", r = kl(lB(A));
  return r.prefix || (r.prefix = sn()), e && t && (r.prefix = e, r.iconName = t), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = rI(r.prefix, A.innerText) || fB(r.prefix, cf(A.innerText))), !r.iconName && R.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = A.firstChild.data)), r;
}
function HI(A) {
  var e = ei(A.attributes).reduce(function(r, i) {
    return r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r;
  }, {}), t = A.getAttribute("title"), n = A.getAttribute("data-fa-title-id");
  return R.autoA11y && (t ? e["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(n || Co()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
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
  }, t = II(A), n = t.iconName, r = t.prefix, i = t.rest, o = HI(A), a = df("parseNodeAttributes", {}, A), s = e.styleParser ? EI(A) : [];
  return k({
    iconName: n,
    title: A.getAttribute("title"),
    titleId: A.getAttribute("data-fa-title-id"),
    prefix: r,
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
var ln = /* @__PURE__ */ new Set();
sB.map(function(A) {
  ln.add("fa-".concat(A));
});
Object.keys(ho[sA]).map(ln.add.bind(ln));
Object.keys(ho[CA]).map(ln.add.bind(ln));
ln = Ko(ln);
function wp(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ut) return Promise.resolve();
  var t = uA.documentElement.classList, n = function(c) {
    return t.add("".concat(op, "-").concat(c));
  }, r = function(c) {
    return t.remove("".concat(op, "-").concat(c));
  }, i = R.autoFetchSvg ? ln : sB.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(SI));
  i.includes("fa") || i.push("fa");
  var o = [".".concat($0, ":not([").concat($n, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat($n, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = ei(A.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    n("pending"), r("complete");
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
        n("active"), n("complete"), r("pending"), typeof e == "function" && e(), s(), u();
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
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Bf(e || {}), r = t.mask;
    return r && (r = (r || {}).icon ? r : Bf(r || {})), A(n, k(k({}, t), {}, {
      mask: r
    }));
  };
}
var TI = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? Je : n, i = t.symbol, o = i === void 0 ? !1 : i, a = t.mask, s = a === void 0 ? null : a, l = t.maskId, u = l === void 0 ? null : l, c = t.title, f = c === void 0 ? null : c, g = t.titleId, p = g === void 0 ? null : g, w = t.classes, y = w === void 0 ? [] : w, B = t.attributes, d = B === void 0 ? {} : B, h = t.styles, m = h === void 0 ? {} : h;
  if (e) {
    var C = e.prefix, v = e.iconName, F = e.icon;
    return Ol(k({
      type: "icon"
    }, e), function() {
      return Wn("beforeDOMElementCreation", {
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
        transform: k(k({}, Je), r),
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
      var n = t.node, r = n === void 0 ? uA : n, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return wp(r, o);
    }, e.generateSvgReplacementMutation = function(t, n) {
      var r = n.iconName, i = n.title, o = n.titleId, a = n.prefix, s = n.transform, l = n.symbol, u = n.mask, c = n.maskId, f = n.extra;
      return new Promise(function(g, p) {
        Promise.all([pf(r, a), u.iconName ? pf(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var y = rB(w, 2), B = y[0], d = y[1];
          g([t, BB({
            icons: {
              main: B,
              mask: d
            },
            prefix: a,
            iconName: r,
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
      var n = t.children, r = t.attributes, i = t.main, o = t.transform, a = t.styles, s = bl(a);
      s.length > 0 && (r.style = s);
      var l;
      return uB(o) && (l = Ct("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(l || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, OI = {
  mixout: function() {
    return {
      layer: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, i = r === void 0 ? [] : r;
        return Ol({
          type: "layer"
        }, function() {
          Wn("beforeDOMElementCreation", {
            assembler: t,
            params: n
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
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.title, i = r === void 0 ? null : r, o = n.classes, a = o === void 0 ? [] : o, s = n.attributes, l = s === void 0 ? {} : s, u = n.styles, c = u === void 0 ? {} : u;
        return Ol({
          type: "counter",
          content: t
        }, function() {
          return Wn("beforeDOMElementCreation", {
            content: t,
            params: n
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
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? Je : r, o = n.title, a = o === void 0 ? null : o, s = n.classes, l = s === void 0 ? [] : s, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, g = f === void 0 ? {} : f;
        return Ol({
          type: "text",
          content: t
        }, function() {
          return Wn("beforeDOMElementCreation", {
            content: t,
            params: n
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
    e.generateLayersText = function(t, n) {
      var r = n.title, i = n.transform, o = n.extra, a = null, s = null;
      if (P0) {
        var l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        a = u.width / l, s = u.height / l;
      }
      return R.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, fp({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, RI = new RegExp('"', "ug"), mp = [1105920, 1112319];
function NI(A) {
  var e = A.replace(RI, ""), t = ZE(e, 0), n = t >= mp[0] && t <= mp[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: cf(r ? e[0] : e),
    isSecondary: n || r
  };
}
function vp(A, e) {
  var t = "".concat(HE).concat(e.replace(":", "-"));
  return new Promise(function(n, r) {
    if (A.getAttribute(t) !== null)
      return n();
    var i = ei(A.children), o = i.filter(function(F) {
      return F.getAttribute(uf) === e;
    })[0], a = an.getComputedStyle(A, e), s = a.getPropertyValue("font-family").match(TE), l = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !s)
      return A.removeChild(o), n();
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
`), A.removeAttribute(t), n();
        }).catch(r);
      } else
        n();
    } else
      n();
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
      var n = ei(A.querySelectorAll("*")).filter(PI).map(MI), r = gB.begin("searchPseudoElements");
      sv(), Promise.all(n).then(function() {
        r(), wf(), e();
      }).catch(function() {
        r(), wf(), t();
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
      var n = t.node, r = n === void 0 ? uA : n;
      R.searchPseudoElements && Cp(r);
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
        var n = t.observeMutationsRoot;
        Qp ? wf() : pp(df("mutationObserverCallbacks", {
          observeMutationsRoot: n
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
  return e.toLowerCase().split(" ").reduce(function(n, r) {
    var i = r.toLowerCase().split("-"), o = i[0], a = i.slice(1).join("-");
    if (o && a === "h")
      return n.flipX = !0, n;
    if (o && a === "v")
      return n.flipY = !0, n;
    if (a = parseFloat(a), isNaN(a))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + a;
        break;
      case "shrink":
        n.size = n.size - a;
        break;
      case "left":
        n.x = n.x - a;
        break;
      case "right":
        n.x = n.x + a;
        break;
      case "up":
        n.y = n.y - a;
        break;
      case "down":
        n.y = n.y + a;
        break;
      case "rotate":
        n.rotate = n.rotate + a;
        break;
    }
    return n;
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
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (t.transform = yp(r)), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(t) {
      var n = t.main, r = t.transform, i = t.containerWidth, o = t.iconWidth, a = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), c = {
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
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: k(k({}, n.icon.attributes), g.path)
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
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-mask"), i = r ? kl(r.split(" ").map(function(o) {
          return o.trim();
        })) : dB();
        return i.prefix || (i.prefix = sn()), t.mask = i, t.maskId = n.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var n = t.children, r = t.attributes, i = t.main, o = t.mask, a = t.maskId, s = t.transform, l = i.width, u = i.icon, c = o.width, f = o.icon, g = $E({
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
      return n.push(C, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(d, ")")
        }, Lu)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, XI = {
  provides: function(e) {
    var t = !1;
    an.matchMedia && (t = an.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = k(k({}, i), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: k(k({}, r), {}, {
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
      }), n.push(a), n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: k(k({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: k(k({}, r), {}, {
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
        children: n
      };
    };
  }
}, zI = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var r = n.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
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
  function A(n, r, i, o, a, s) {
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
    var n = Object.getOwnPropertySymbols(A);
    e && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(A, r).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ze(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Up(Object(t), !0).forEach(function(n) {
      Cr(A, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : Up(Object(t)).forEach(function(n) {
      Object.defineProperty(A, n, Object.getOwnPropertyDescriptor(t, n));
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
function Cr(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : A[e] = t, A;
}
function tH(A, e) {
  if (A == null) return {};
  var t = {}, n = Object.keys(A), r, i;
  for (i = 0; i < n.length; i++)
    r = n[i], !(e.indexOf(r) >= 0) && (t[r] = A[r]);
  return t;
}
function nH(A, e) {
  if (A == null) return {};
  var t = tH(A, e), n, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (r = 0; r < i.length; r++)
      n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(A, n) && (t[n] = A[n]);
  }
  return t;
}
function vf(A) {
  return rH(A) || iH(A) || oH(A) || aH();
}
function rH(A) {
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
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = A[t];
  return n;
}
function aH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sH(A) {
  var e, t = A.beat, n = A.fade, r = A.beatFade, i = A.bounce, o = A.shake, a = A.flash, s = A.spin, l = A.spinPulse, u = A.spinReverse, c = A.pulse, f = A.fixedWidth, g = A.inverse, p = A.border, w = A.listItem, y = A.flip, B = A.size, d = A.rotation, h = A.pull, m = (e = {
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": r,
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
  }, Cr(e, "fa-".concat(B), typeof B < "u" && B !== null), Cr(e, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0), Cr(e, "fa-pull-".concat(h), typeof h < "u" && h !== null), Cr(e, "fa-swap-opacity", A.swapOpacity), e);
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
    var n = t.indexOf(":"), r = dv(t.slice(0, n)), i = t.slice(n + 1).trim();
    return r.startsWith("webkit") ? e[cH(r)] = i : e[r] = i, e;
  }, {});
}
function Bv(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(s) {
    return Bv(A, s);
  }), r = Object.keys(e.attributes || {}).reduce(function(s, l) {
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
  }), i = t.style, o = i === void 0 ? {} : i, a = nH(t, uH);
  return r.attrs.style = ze(ze({}, r.attrs.style), o), A.apply(void 0, [e.tag, ze(ze({}, r.attrs), a)].concat(vf(n)));
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
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Cr({}, A, e) : {};
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
  var t = ze(ze({}, Ip), A), n = t.icon, r = t.mask, i = t.symbol, o = t.className, a = t.title, s = t.titleId, l = t.maskId, u = Ep(n), c = bu("classes", [].concat(vf(sH(t)), vf((o || "").split(" ")))), f = bu("transform", typeof t.transform == "string" ? mf.transform(t.transform) : t.transform), g = bu("mask", Ep(r)), p = jI(u, ze(ze(ze(ze({}, c), f), g), {}, {
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
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ie.apply(this, arguments);
};
function Qo(A, e, t) {
  if (t || arguments.length === 2) for (var n = 0, r = e.length, i; n < r; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
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
function rs(A, e, t) {
  return A.indexOf(e, t);
}
function OA(A, e) {
  return A.charCodeAt(e) | 0;
}
function Vr(A, e, t) {
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
var Kl = 1, $r = 1, Cv = 0, xe = 0, EA = 0, ti = "";
function Rl(A, e, t, n, r, i, o, a) {
  return { value: A, root: e, parent: t, type: n, props: r, children: i, line: Kl, column: $r, length: o, return: "", siblings: a };
}
function St(A, e) {
  return Qf(Rl("", null, null, "", null, null, 0, A.siblings), A, { length: -A.length }, e);
}
function Zn(A) {
  for (; A.root; )
    A = St(A.root, { children: [A] });
  Fi(A, A.siblings);
}
function CH() {
  return EA;
}
function QH() {
  return EA = xe > 0 ? OA(ti, --xe) : 0, $r--, EA === 10 && ($r = 1, Kl--), EA;
}
function Pe() {
  return EA = xe < Cv ? OA(ti, xe++) : 0, $r++, EA === 10 && ($r = 1, Kl++), EA;
}
function kn() {
  return OA(ti, xe);
}
function is() {
  return xe;
}
function Nl(A, e) {
  return Vr(ti, A, e);
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
  return Kl = $r = 1, Cv = Ye(ti = A), xe = 0, [];
}
function FH(A) {
  return ti = "", A;
}
function Tu(A) {
  return mv(Nl(xe - 1, Ff(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function UH(A) {
  for (; (EA = kn()) && EA < 33; )
    Pe();
  return yf(A) > 2 || yf(EA) > 3 ? "" : " ";
}
function EH(A, e) {
  for (; --e && Pe() && !(EA < 48 || EA > 102 || EA > 57 && EA < 65 || EA > 70 && EA < 97); )
    ;
  return Nl(A, is() + (e < 6 && kn() == 32 && Pe() == 32));
}
function Ff(A) {
  for (; Pe(); )
    switch (EA) {
      case A:
        return xe;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Ff(EA);
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
  for (; Pe() && A + EA !== 57; )
    if (A + EA === 84 && kn() === 47)
      break;
  return "/*" + Nl(e, xe - 1) + "*" + mB(A === 47 ? A : Pe());
}
function HH(A) {
  for (; !yf(kn()); )
    Pe();
  return Nl(A, xe);
}
function xH(A) {
  return FH(os("", null, null, null, [""], A = yH(A), 0, [0], A));
}
function os(A, e, t, n, r, i, o, a, s) {
  for (var l = 0, u = 0, c = o, f = 0, g = 0, p = 0, w = 1, y = 1, B = 1, d = 0, h = "", m = r, C = i, v = n, F = h; y; )
    switch (p = d, d = Pe()) {
      case 40:
        if (p != 108 && OA(F, c - 1) == 58) {
          rs(F += W(Tu(d), "&", "&\f"), "&\f", wv(l ? a[l - 1] : 0)) != -1 && (B = -1);
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
        switch (kn()) {
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
            B == -1 && (F = W(F, /\f/g, "")), g > 0 && Ye(F) - c && Fi(g > 32 ? Sp(F + ";", n, t, c - 1, s) : Sp(W(F, " ", "") + ";", n, t, c - 2, s), s);
            break;
          case 59:
            F += ";";
          default:
            if (Fi(v = xp(F, e, t, l, u, r, a, h, m = [], C = [], c, i), i), d === 123)
              if (u === 0)
                os(F, e, v, v, m, i, c, a, C);
              else
                switch (f === 99 && OA(F, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    os(A, v, v, n && Fi(xp(A, v, v, 0, 0, r, a, h, r, m = [], c, C), C), r, C, c, a, n ? m : C);
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
            kn() === 45 && (F += Tu(Pe())), f = kn(), u = c = Ye(h = F += HH(is())), d++;
            break;
          case 45:
            p === 45 && Ye(F) == 2 && (w = 0);
        }
    }
  return i;
}
function xp(A, e, t, n, r, i, o, a, s, l, u, c) {
  for (var f = r - 1, g = r === 0 ? i : [""], p = vv(g), w = 0, y = 0, B = 0; w < n; ++w)
    for (var d = 0, h = Vr(A, f + 1, f = wv(y = o[w])), m = A; d < p; ++d)
      (m = mv(y > 0 ? g[d] + " " + h : W(h, /&\f/g, g[d]))) && (s[B++] = m);
  return Rl(A, e, t, r === 0 ? Dl : a, s, l, u, c);
}
function SH(A, e, t, n) {
  return Rl(A, e, t, pv, mB(CH()), Vr(A, 2, -2), 0, n);
}
function Sp(A, e, t, n, r) {
  return Rl(A, e, t, wB, Vr(A, 0, n), Vr(A, n + 1, -1), n, r);
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
      if (!at(A, /flex-|baseline/)) return aA + "grid-column-align" + Vr(A, e) + A;
      break;
    case 2592:
    case 3360:
      return aA + W(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(n, r) {
        return e = r, at(n.props, /grid-\w+-end/);
      }) ? ~rs(A + (t = t[e].value), "span", 0) ? A : aA + W(A, "-start", "") + A + aA + "grid-row-span:" + (~rs(t, "span", 0) ? at(t, /\d+/) : +at(t, /\d+/) - +at(A, /\d+/)) + ";" : aA + W(A, "-start", "") + A;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return at(n.props, /grid-\w+-start/);
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
            return ~rs(A, "stretch", 0) ? Qv(W(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return W(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, r, i, o, a, s, l) {
        return aA + r + ":" + i + l + (o ? aA + r + "-span:" + (a ? s : +s - +i) + l : "") + A;
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
  for (var t = "", n = 0; n < A.length; n++)
    t += e(A[n], n, A, e) || "";
  return t;
}
function LH(A, e, t, n) {
  switch (A.type) {
    case wH:
      if (A.children.length) break;
    case hH:
    case wB:
      return A.return = A.return || A.value;
    case pv:
      return "";
    case hv:
      return A.return = A.value + "{" + Xs(A.children, n) + "}";
    case Dl:
      if (!Ye(A.value = A.props.join(","))) return "";
  }
  return Ye(t = Xs(A.children, n)) ? A.return = A.value + "{" + t + "}" : "";
}
function bH(A) {
  var e = vv(A);
  return function(t, n, r, i) {
    for (var o = "", a = 0; a < e; a++)
      o += A[a](t, n, r, i) || "";
    return o;
  };
}
function TH(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function kH(A, e, t, n) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case wB:
        A.return = Qv(A.value, A.length, t);
        return;
      case hv:
        return Xs([St(A, { value: W(A.value, "@", "@" + q) })], n);
      case Dl:
        if (A.length)
          return vH(t = A.props, function(r) {
            switch (at(r, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Zn(St(A, { props: [W(r, /:(read-\w+)/, ":" + $i + "$1")] })), Zn(St(A, { props: [r] })), Qf(A, { props: Hp(t, n) });
                break;
              case "::placeholder":
                Zn(St(A, { props: [W(r, /:(plac\w+)/, ":" + q + "input-$1")] })), Zn(St(A, { props: [W(r, /:(plac\w+)/, ":" + $i + "$1")] })), Zn(St(A, { props: [W(r, /:(plac\w+)/, aA + "input-$1")] })), Zn(St(A, { props: [r] })), Qf(A, { props: Hp(t, n) });
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
}, Wr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", yv = "active", Fv = "data-styled-version", Ml = "6.1.11", vB = `/*!sc*/
`, CB = typeof window < "u" && "HTMLElement" in window, DH = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Pl = Object.freeze([]), Xr = Object.freeze({});
function KH(A, e, t) {
  return t === void 0 && (t = Xr), A.theme !== t.theme && A.theme || e || t.theme;
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
var ku, Ev = 5381, Qr = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, Iv = function(A) {
  return Qr(Ev, A);
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
      var n = YH(e);
      n && n !== Op && bv(A, n, t);
    }
    var r = XH(e);
    kp && (r = r.concat(kp(e)));
    for (var i = Tp(A), o = Tp(e), a = 0; a < r.length; ++a) {
      var s = r[a];
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
function zr(A) {
  return typeof A == "function";
}
function QB(A) {
  return typeof A == "object" && "styledComponentId" in A;
}
function Hn(A, e) {
  return A && e ? "".concat(A, " ").concat(e) : A || e || "";
}
function Ef(A, e) {
  if (A.length === 0) return "";
  for (var t = A[0], n = 1; n < A.length; n++) t += A[n];
  return t;
}
function yo(A) {
  return A !== null && typeof A == "object" && A.constructor.name === Object.name && !("props" in A && A.$$typeof);
}
function If(A, e, t) {
  if (t === void 0 && (t = !1), !t && !yo(A) && !Array.isArray(A)) return e;
  if (Array.isArray(e)) for (var n = 0; n < e.length; n++) A[n] = If(A[n], e[n]);
  else if (yo(e)) for (var n in e) A[n] = If(A[n], e[n]);
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
    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
    return t;
  }, A.prototype.insertRules = function(e, t) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, i = r; e >= i; ) if ((i <<= 1) < 0) throw Mo(16, "".concat(e));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var o = r; o < i; o++) this.groupSizes[o] = 0;
    }
    for (var a = this.indexOfGroup(e + 1), s = (o = 0, t.length); o < s; o++) this.tag.insertRule(a, t[o]) && (this.groupSizes[e]++, a++);
  }, A.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
      this.groupSizes[e] = 0;
      for (var i = n; i < r; i++) this.tag.deleteRule(n);
    }
  }, A.prototype.getGroup = function(e) {
    var t = "";
    if (e >= this.length || this.groupSizes[e] === 0) return t;
    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, o = r; o < i; o++) t += "".concat(this.tag.getRule(o)).concat(vB);
    return t;
  }, A;
}(), as = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), ss = 1, ma = function(A) {
  if (as.has(A)) return as.get(A);
  for (; zs.has(ss); ) ss++;
  var e = ss++;
  return as.set(A, e), zs.set(e, A), e;
}, JH = function(A, e) {
  ss = e + 1, as.set(A, e), zs.set(e, A);
}, ZH = "style[".concat(Wr, "][").concat(Fv, '="').concat(Ml, '"]'), qH = new RegExp("^".concat(Wr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), A4 = function(A, e, t) {
  for (var n, r = t.split(","), i = 0, o = r.length; i < o; i++) (n = r[i]) && A.registerName(e, n);
}, e4 = function(A, e) {
  for (var t, n = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(vB), r = [], i = 0, o = n.length; i < o; i++) {
    var a = n[i].trim();
    if (a) {
      var s = a.match(qH);
      if (s) {
        var l = 0 | parseInt(s[1], 10), u = s[2];
        l !== 0 && (JH(u, l), A4(A, u, s[3]), A.getTag().insertRules(l, r)), r.length = 0;
      } else r.push(a);
    }
  }
};
function t4() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Tv = function(A) {
  var e = document.head, t = A || e, n = document.createElement("style"), r = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(Wr, "]")));
    return s[s.length - 1];
  }(t), i = r !== void 0 ? r.nextSibling : null;
  n.setAttribute(Wr, yv), n.setAttribute(Fv, Ml);
  var o = t4();
  return o && n.setAttribute("nonce", o), t.insertBefore(n, i), n;
}, n4 = function() {
  function A(e) {
    this.element = Tv(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var n = document.styleSheets, r = 0, i = n.length; r < i; r++) {
        var o = n[r];
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
}(), r4 = function() {
  function A(e) {
    this.element = Tv(e), this.nodes = this.element.childNodes, this.length = 0;
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
}(), i4 = function() {
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
}(), Dp = CB, o4 = { isServer: !CB, useCSSOMInjection: !DH }, kv = function() {
  function A(e, t, n) {
    e === void 0 && (e = Xr), t === void 0 && (t = {});
    var r = this;
    this.options = ie(ie({}, o4), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && CB && Dp && (Dp = !1, function(i) {
      for (var o = document.querySelectorAll(ZH), a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        l && l.getAttribute(Wr) !== yv && (e4(i, l), l.parentNode && l.parentNode.removeChild(l));
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
          var w = "".concat(Wr, ".g").concat(c, '[id="').concat(f, '"]'), y = "";
          g !== void 0 && g.forEach(function(B) {
            B.length > 0 && (y += "".concat(B, ","));
          }), s += "".concat(p).concat(w, '{content:"').concat(y, '"}').concat(vB);
        }, u = 0; u < a; u++) l(u);
        return s;
      }(r);
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
      var n = t.useCSSOMInjection, r = t.target;
      return t.isServer ? new i4(r) : n ? new n4(r) : new r4(r);
    }(this.options), new jH(e)));
    var e;
  }, A.prototype.hasNameForId = function(e, t) {
    return this.names.has(e) && this.names.get(e).has(t);
  }, A.prototype.registerName = function(e, t) {
    if (ma(e), this.names.has(e)) this.names.get(e).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(e, n);
    }
  }, A.prototype.insertRules = function(e, t, n) {
    this.registerName(e, t), this.getTag().insertRules(ma(e), n);
  }, A.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, A.prototype.clearRules = function(e) {
    this.getTag().clearGroup(ma(e)), this.clearNames(e);
  }, A.prototype.clearTag = function() {
    this.tag = void 0;
  }, A;
}(), a4 = /&/g, s4 = /^\s*\/\/.*$/gm;
function Ov(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(n) {
      return "".concat(e, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ov(t.children, e)), t;
  });
}
function l4(A) {
  var e, t, n, r = Xr, i = r.options, o = i === void 0 ? Xr : i, a = r.plugins, s = a === void 0 ? Pl : a, l = function(f, g, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, u = s.slice();
  u.push(function(f) {
    f.type === Dl && f.value.includes("&") && (f.props[0] = f.props[0].replace(a4, t).replace(n, l));
  }), o.prefix && u.push(kH), u.push(LH);
  var c = function(f, g, p, w) {
    g === void 0 && (g = ""), p === void 0 && (p = ""), w === void 0 && (w = "&"), e = w, t = g, n = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(s4, ""), B = xH(p || g ? "".concat(p, " ").concat(g, " { ").concat(y, " }") : y);
    o.namespace && (B = Ov(B, o.namespace));
    var d = [];
    return Xs(B, bH(u.concat(TH(function(h) {
      return d.push(h);
    })))), d;
  };
  return c.hash = s.length ? s.reduce(function(f, g) {
    return g.name || Mo(15), Qr(f, g.name);
  }, Ev).toString() : "", c;
}
var u4 = new kv(), Hf = l4(), Dv = _.createContext({ shouldForwardProp: void 0, styleSheet: u4, stylis: Hf });
Dv.Consumer;
_.createContext(void 0);
function Kp() {
  return Q.useContext(Dv);
}
var Kv = function() {
  function A(e, t) {
    var n = this;
    this.inject = function(r, i) {
      i === void 0 && (i = Hf);
      var o = n.name + i.hash;
      r.hasNameForId(n.id, o) || r.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, yB(this, function() {
      throw Mo(12, String(n.name));
    });
  }
  return A.prototype.getName = function(e) {
    return e === void 0 && (e = Hf), this.name + e.hash;
  }, A;
}(), c4 = function(A) {
  return A >= "A" && A <= "Z";
};
function Rp(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var n = A[t];
    if (t === 1 && n === "-" && A[0] === "-") return A;
    c4(n) ? e += "-" + n.toLowerCase() : e += n;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Rv = function(A) {
  return A == null || A === !1 || A === "";
}, Nv = function(A) {
  var e, t, n = [];
  for (var r in A) {
    var i = A[r];
    A.hasOwnProperty(r) && !Rv(i) && (Array.isArray(i) && i.isCss || zr(i) ? n.push("".concat(Rp(r), ":"), i, ";") : yo(i) ? n.push.apply(n, Qo(Qo(["".concat(r, " {")], Nv(i), !1), ["}"], !1)) : n.push("".concat(Rp(r), ": ").concat((e = r, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in OH || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function On(A, e, t, n) {
  if (Rv(A)) return [];
  if (QB(A)) return [".".concat(A.styledComponentId)];
  if (zr(A)) {
    if (!zr(i = A) || i.prototype && i.prototype.isReactComponent || !e) return [A];
    var r = A(e);
    return On(r, e, t, n);
  }
  var i;
  return A instanceof Kv ? t ? (A.inject(t, n), [A.getName(n)]) : [A] : yo(A) ? Nv(A) : Array.isArray(A) ? Array.prototype.concat.apply(Pl, A.map(function(o) {
    return On(o, e, t, n);
  })) : [A.toString()];
}
function f4(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (zr(t) && !QB(t)) return !1;
  }
  return !0;
}
var d4 = Iv(Ml), B4 = function() {
  function A(e, t, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && f4(e), this.componentId = t, this.baseHash = Qr(d4, t), this.baseStyle = n, kv.registerId(t);
  }
  return A.prototype.generateAndInjectStyles = function(e, t, n) {
    var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = Hn(r, this.staticRulesId);
    else {
      var i = Ef(On(this.rules, e, t, n)), o = Uf(Qr(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, o)) {
        var a = n(i, ".".concat(o), void 0, this.componentId);
        t.insertRules(this.componentId, o, a);
      }
      r = Hn(r, o), this.staticRulesId = o;
    }
    else {
      for (var s = Qr(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
        var c = this.rules[u];
        if (typeof c == "string") l += c;
        else if (c) {
          var f = Ef(On(c, e, t, n));
          s = Qr(s, f + u), l += f;
        }
      }
      if (l) {
        var g = Uf(s >>> 0);
        t.hasNameForId(this.componentId, g) || t.insertRules(this.componentId, g, n(l, ".".concat(g), void 0, this.componentId)), r = Hn(r, g);
      }
    }
    return r;
  }, A;
}(), Mv = _.createContext(void 0);
Mv.Consumer;
var Du = {};
function g4(A, e, t) {
  var n = QB(A), r = A, i = !Ou(A), o = e.attrs, a = o === void 0 ? Pl : o, s = e.componentId, l = s === void 0 ? function(m, C) {
    var v = typeof m != "string" ? "sc" : Lp(m);
    Du[v] = (Du[v] || 0) + 1;
    var F = "".concat(v, "-").concat(Hv(Ml + v + Du[v]));
    return C ? "".concat(C, "-").concat(F) : F;
  }(e.displayName, e.parentComponentId) : s, u = e.displayName, c = u === void 0 ? function(m) {
    return Ou(m) ? "styled.".concat(m) : "Styled(".concat(PH(m), ")");
  }(A) : u, f = e.displayName && e.componentId ? "".concat(Lp(e.displayName), "-").concat(e.componentId) : e.componentId || l, g = n && r.attrs ? r.attrs.concat(a).filter(Boolean) : a, p = e.shouldForwardProp;
  if (n && r.shouldForwardProp) {
    var w = r.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      p = function(m, C) {
        return w(m, C) && y(m, C);
      };
    } else p = w;
  }
  var B = new B4(t, f, n ? r.componentStyle : void 0);
  function d(m, C) {
    return function(v, F, U) {
      var E = v.attrs, S = v.componentStyle, P = v.defaultProps, N = v.foldedComponentIds, D = v.styledComponentId, V = v.target, J = _.useContext(Mv), $ = Kp(), K = v.shouldForwardProp || $.shouldForwardProp, I = KH(F, J, P) || Xr, x = function(gA, nA, zA) {
        for (var ri, gn = ie(ie({}, nA), { className: void 0, theme: zA }), Zl = 0; Zl < gA.length; Zl += 1) {
          var Go = zr(ri = gA[Zl]) ? ri(gn) : ri;
          for (var Et in Go) gn[Et] = Et === "className" ? Hn(gn[Et], Go[Et]) : Et === "style" ? ie(ie({}, gn[Et]), Go[Et]) : Go[Et];
        }
        return nA.className && (gn.className = Hn(gn.className, nA.className)), gn;
      }(E, F, I), L = x.as || V, M = {};
      for (var X in x) x[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && x.theme === I || (X === "forwardedAs" ? M.as = x.forwardedAs : K && !K(X, L) || (M[X] = x[X]));
      var dA = function(gA, nA) {
        var zA = Kp(), ri = gA.generateAndInjectStyles(nA, zA.styleSheet, zA.stylis);
        return ri;
      }(S, x), BA = Hn(N, D);
      return dA && (BA += " " + dA), x.className && (BA += " " + x.className), M[Ou(L) && !Uv.has(L) ? "class" : "className"] = BA, M.ref = U, Q.createElement(L, M);
    }(h, m, C);
  }
  d.displayName = c;
  var h = _.forwardRef(d);
  return h.attrs = g, h.componentStyle = B, h.displayName = c, h.shouldForwardProp = p, h.foldedComponentIds = n ? Hn(r.foldedComponentIds, r.styledComponentId) : "", h.styledComponentId = f, h.target = n ? r.target : A, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = n ? function(C) {
      for (var v = [], F = 1; F < arguments.length; F++) v[F - 1] = arguments[F];
      for (var U = 0, E = v; U < E.length; U++) If(C, E[U], !0);
      return C;
    }({}, r.defaultProps, m) : m;
  } }), yB(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && bv(h, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Np(A, e) {
  for (var t = [A[0]], n = 0, r = e.length; n < r; n += 1) t.push(e[n], A[n + 1]);
  return t;
}
var Mp = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function Pv(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  if (zr(A) || yo(A)) return Mp(On(Np(Pl, Qo([A], e, !0))));
  var n = A;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? On(n) : Mp(On(Np(n, e)));
}
function xf(A, e, t) {
  if (t === void 0 && (t = Xr), !e) throw Mo(1, e);
  var n = function(r) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return A(e, t, Pv.apply(void 0, Qo([r], i, !1)));
  };
  return n.attrs = function(r) {
    return xf(A, e, ie(ie({}, t), { attrs: Array.prototype.concat(t.attrs, r).filter(Boolean) }));
  }, n.withConfig = function(r) {
    return xf(A, e, ie(ie({}, t), r));
  }, n;
}
var _v = function(A) {
  return xf(g4, A);
}, jn = _v;
Uv.forEach(function(A) {
  jn[A] = _v(A);
});
function FB(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var n = Ef(Pv.apply(void 0, Qo([A], e, !1))), r = Hv(n);
  return new Kv(r, n);
}
const p4 = "#4fa94d", h4 = {
  "aria-busy": !0,
  role: "progressbar"
}, w4 = jn.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, m4 = "http://www.w3.org/2000/svg", Te = 242.776657104492, v4 = 1.6, C4 = FB`
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
jn.path`
  stroke-dasharray: ${Te * 0.01}px, ${Te};
  stroke-dashoffset: 0;
  animation: ${C4} ${v4}s linear infinite;
`;
const Q4 = FB`
to {
   transform: rotate(360deg);
 }
`;
jn.svg`
  animation: ${Q4} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
jn.polyline`
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
const y4 = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: n = 1, color: r = p4, ariaLabel: i = "tail-spin-loading", wrapperStyle: o, wrapperClass: a, visible: s = !0 }) => {
  const l = parseInt(String(t)), u = l + 36, c = l / 2, f = c + parseInt(String(n)) - 1;
  return /* @__PURE__ */ G.jsx(w4, {
    style: o,
    $visible: s,
    className: a,
    "data-testid": "tail-spin-loading",
    "aria-label": i,
    ...h4,
    children: /* @__PURE__ */ G.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${u} ${u}`,
      xmlns: m4,
      "data-testid": "tail-spin-svg",
      children: [
        /* @__PURE__ */ G.jsx("defs", {
          children: /* @__PURE__ */ G.jsxs("linearGradient", {
            x1: "8.042%",
            y1: "0%",
            x2: "65.682%",
            y2: "23.865%",
            id: "a",
            children: [
              /* @__PURE__ */ G.jsx("stop", {
                stopColor: r,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ G.jsx("stop", {
                stopColor: r,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ G.jsx("stop", {
                stopColor: r,
                offset: "100%"
              })
            ]
          })
        }),
        /* @__PURE__ */ G.jsx("g", {
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ G.jsxs("g", {
            transform: `translate(${c} ${c})`,
            children: [
              /* @__PURE__ */ G.jsx("path", {
                d: "M36 18c0-9.94-8.06-18-18-18",
                id: "Oval-2",
                stroke: r,
                strokeWidth: t,
                children: /* @__PURE__ */ G.jsx("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "0.9s",
                  repeatCount: "indefinite"
                })
              }),
              /* @__PURE__ */ G.jsx("circle", {
                fill: "#fff",
                cx: "36",
                cy: "18",
                r: f,
                children: /* @__PURE__ */ G.jsx("animateTransform", {
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
}, F4 = FB`
to {
   stroke-dashoffset: 136;
 }
`;
jn.polygon`
  stroke-dasharray: 17;
  animation: ${F4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
jn.svg`
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
        a && (i = r(i, n(a)));
      }
      return i;
    }
    function n(i) {
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
        e.call(i, a) && i[a] && (o = r(o, a));
      return o;
    }
    function r(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    A.exports ? (t.default = t, A.exports = t) : window.classNames = t;
  })();
})(Gv);
var U4 = Gv.exports;
const Vv = /* @__PURE__ */ il(U4);
function E4({
  open: A,
  query: e,
  isApiCallInProgress: t,
  setQuery: n,
  setOpen: r,
  handleSubmit: i
}) {
  const o = (l) => {
    n(l.target.value);
  }, a = (l) => {
    l.preventDefault(), i(e);
  }, s = () => {
    r(!1), n("");
  };
  return /* @__PURE__ */ G.jsx(O0, { show: A, appear: !0, children: /* @__PURE__ */ G.jsx(hE, { className: Ht.dialog, onClose: s, children: /* @__PURE__ */ G.jsxs("form", { onSubmit: a, "data-isgandalf": !0, children: [
    /* @__PURE__ */ G.jsx(
      po,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ G.jsx("div", { className: Ht.overlay })
      }
    ),
    /* @__PURE__ */ G.jsx("div", { className: Ht.container, children: /* @__PURE__ */ G.jsx(
      po,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ G.jsx(D0, { className: Ht.dialogPanel, children: /* @__PURE__ */ G.jsxs(
          "div",
          {
            className: Vv(Ht.inputWrapper, {
              [Ht.loading]: t
            }),
            children: [
              /* @__PURE__ */ G.jsx(
                hB,
                {
                  icon: pH,
                  className: Ht.searchIcon,
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ G.jsx(
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
              t && /* @__PURE__ */ G.jsx(
                y4,
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
const I4 = "_container_1k403_1", H4 = "_widgetButton_1k403_10", x4 = "_buttonContentWrapper_1k403_25", S4 = "_buttonContent_1k403_25", L4 = "_withComplete_1k403_45", b4 = "_loading_1k403_68", T4 = "_gradientShift_1k403_1", k4 = "_containerRotate_1k403_1", O4 = "_waitingForUser_1k403_81", D4 = "_pulse_1k403_1", K4 = "_arrow_1k403_112", R4 = "_outerContainer_1k403_121", N4 = "_floatingPopover_1k403_135", M4 = "_elasticPopIn_1k403_1", P4 = "_popoverLoadingOuter_1k403_153", _4 = "_popoverLoading_1k403_153", G4 = "_options_1k403_180", V4 = "_optionPane_1k403_191", $4 = "_optionAppear_1k403_1", W4 = "_stateText_1k403_213", X4 = "_optionsButton_1k403_219", z4 = "_nextButton_1k403_233", UA = {
  container: I4,
  widgetButton: H4,
  buttonContentWrapper: x4,
  buttonContent: S4,
  withComplete: L4,
  loading: b4,
  gradientShift: T4,
  containerRotate: k4,
  waitingForUser: O4,
  pulse: D4,
  arrow: K4,
  outerContainer: R4,
  floatingPopover: N4,
  elasticPopIn: M4,
  popoverLoadingOuter: P4,
  popoverLoading: _4,
  options: G4,
  optionPane: V4,
  optionAppear: $4,
  stateText: W4,
  optionsButton: X4,
  nextButton: z4
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
  return Sf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
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
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Lf.apply(this, arguments);
};
function YA(A, e, t, n) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(u) {
      try {
        l(n.next(u));
      } catch (c) {
        o(c);
      }
    }
    function s(u) {
      try {
        l(n.throw(u));
      } catch (c) {
        o(c);
      }
    }
    function l(u) {
      u.done ? i(u.value) : r(u.value).then(a, s);
    }
    l((n = n.apply(A, [])).next());
  });
}
function VA(A, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, r, i, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(u) {
      return s([l, u]);
    };
  }
  function s(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, r && (i = l[0] & 2 ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
      switch (r = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, r = l[1], l = [0];
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
      l = [6, u], r = 0;
    } finally {
      n = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function va(A, e, t) {
  if (arguments.length === 2) for (var n = 0, r = e.length, i; n < r; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return A.concat(i || e);
}
var Qt = (
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
), _l = function(A, e) {
  return Qt.fromClientRect(A, e.getBoundingClientRect());
}, Y4 = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Qt(0, 0, n, r);
}, Gl = function(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
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
  for (var n = [], r = -1, i = ""; ++r < t; ) {
    var o = A[r];
    o <= 65535 ? n.push(o) : (o -= 65536, n.push((o >> 10) + 55296, o % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return i;
}, Pp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", j4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ca = 0; Ca < Pp.length; Ca++)
  j4[Pp.charCodeAt(Ca)] = Ca;
var _p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ui = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Qa = 0; Qa < _p.length; Qa++)
  Ui[_p.charCodeAt(Qa)] = Qa;
var J4 = function(A) {
  var e = A.length * 0.75, t = A.length, n, r = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (n = 0; n < t; n += 4)
    i = Ui[A.charCodeAt(n)], o = Ui[A.charCodeAt(n + 1)], a = Ui[A.charCodeAt(n + 2)], s = Ui[A.charCodeAt(n + 3)], u[r++] = i << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | s & 63;
  return l;
}, Z4 = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 2)
    t.push(A[n + 1] << 8 | A[n]);
  return t;
}, q4 = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 4)
    t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
  return t;
}, Dn = 5, UB = 11, Ku = 2, Ax = UB - Dn, $v = 65536 >> Dn, ex = 1 << Dn, Ru = ex - 1, tx = 1024 >> Dn, nx = $v + tx, rx = nx, ix = 32, ox = rx + ix, ax = 65536 >> UB, sx = 1 << Ax, lx = sx - 1, Gp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, ux = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, cx = function(A, e) {
  var t = J4(A), n = Array.isArray(t) ? q4(t) : new Uint32Array(t), r = Array.isArray(t) ? Z4(t) : new Uint16Array(t), i = 24, o = Gp(r, i / 2, n[4] / 2), a = n[5] === 2 ? Gp(r, (i + n[4]) / 2) : ux(n, Math.ceil((i + n[4]) / 4));
  return new fx(n[0], n[1], n[2], n[3], o, a);
}, fx = (
  /** @class */
  function() {
    function A(e, t, n, r, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Dn], t = (t << Ku) + (e & Ru), this.data[t];
        if (e <= 65535)
          return t = this.index[$v + (e - 55296 >> Dn)], t = (t << Ku) + (e & Ru), this.data[t];
        if (e < this.highStart)
          return t = ox - ax + (e >> UB), t = this.index[t], t += e >> Dn & lx, t = this.index[t], t = (t << Ku) + (e & Ru), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), Vp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dx = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ya = 0; ya < Vp.length; ya++)
  dx[Vp.charCodeAt(ya)] = ya;
var Bx = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", $p = 50, gx = 1, Wv = 2, Xv = 3, px = 4, hx = 5, Wp = 7, zv = 8, Xp = 9, _t = 10, bf = 11, zp = 12, Tf = 13, wx = 14, Ei = 15, kf = 16, Fa = 17, Bi = 18, mx = 19, Yp = 20, Of = 21, gi = 22, Nu = 23, qn = 24, ue = 25, Ii = 26, Hi = 27, Ar = 28, vx = 29, Cn = 30, Cx = 31, Ua = 32, Ea = 33, Df = 34, Kf = 35, Rf = 36, Fo = 37, Nf = 38, ls = 39, us = 40, Mu = 41, Yv = 42, Qx = 43, yx = [9001, 65288], jv = "!", j = "×", Ia = "÷", Mf = cx(Bx), rt = [Cn, Rf], Pf = [gx, Wv, Xv, hx], Jv = [_t, zv], jp = [Hi, Ii], Fx = Pf.concat(Jv), Jp = [Nf, ls, us, Df, Kf], Ux = [Ei, Tf], Ex = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], n = [], r = [];
  return A.forEach(function(i, o) {
    var a = Mf.get(i);
    if (a > $p ? (r.push(!0), a -= $p) : r.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return n.push(o), t.push(kf);
    if (a === px || a === bf) {
      if (o === 0)
        return n.push(o), t.push(Cn);
      var s = t[o - 1];
      return Fx.indexOf(s) === -1 ? (n.push(n[o - 1]), t.push(s)) : (n.push(o), t.push(Cn));
    }
    if (n.push(o), a === Cx)
      return t.push(e === "strict" ? Of : Fo);
    if (a === Yv || a === vx)
      return t.push(Cn);
    if (a === Qx)
      return i >= 131072 && i <= 196605 || i >= 196608 && i <= 262141 ? t.push(Fo) : t.push(Cn);
    t.push(a);
  }), [n, t, r];
}, Pu = function(A, e, t, n) {
  var r = n[t];
  if (Array.isArray(A) ? A.indexOf(r) !== -1 : A === r)
    for (var i = t; i <= n.length; ) {
      i++;
      var o = n[i];
      if (o === e)
        return !0;
      if (o !== _t)
        break;
    }
  if (r === _t)
    for (var i = t; i > 0; ) {
      i--;
      var a = n[i];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a)
        for (var s = t; s <= n.length; ) {
          s++;
          var o = n[s];
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
    var n = e[t];
    if (n === _t)
      t--;
    else
      return n;
  }
  return 0;
}, Ix = function(A, e, t, n, r) {
  if (t[n] === 0)
    return j;
  var i = n - 1;
  if (Array.isArray(r) && r[i] === !0)
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
  if (Mf.get(A[i]) === bf || (s === Ua || s === Ea) && Mf.get(A[a]) === bf || s === Wp || u === Wp || s === Xp || [_t, Tf, Ei].indexOf(s) === -1 && u === Xp || [Fa, Bi, mx, qn, Ar].indexOf(u) !== -1 || Zp(i, e) === gi || Pu(Nu, gi, i, e) || Pu([Fa, Bi], Of, i, e) || Pu(zp, zp, i, e))
    return j;
  if (s === _t)
    return Ia;
  if (s === Nu || u === Nu)
    return j;
  if (u === kf || s === kf)
    return Ia;
  if ([Tf, Ei, Of].indexOf(u) !== -1 || s === wx || l === Rf && Ux.indexOf(s) !== -1 || s === Ar && u === Rf || u === Yp || rt.indexOf(u) !== -1 && s === ue || rt.indexOf(s) !== -1 && u === ue || s === Hi && [Fo, Ua, Ea].indexOf(u) !== -1 || [Fo, Ua, Ea].indexOf(s) !== -1 && u === Ii || rt.indexOf(s) !== -1 && jp.indexOf(u) !== -1 || jp.indexOf(s) !== -1 && rt.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Hi, Ii].indexOf(s) !== -1 && (u === ue || [gi, Ei].indexOf(u) !== -1 && e[a + 1] === ue) || // ( OP | HY ) × NU
  [gi, Ei].indexOf(s) !== -1 && u === ue || // NU ×	(NU | SY | IS)
  s === ue && [ue, Ar, qn].indexOf(u) !== -1)
    return j;
  if ([ue, Ar, qn, Fa, Bi].indexOf(u) !== -1)
    for (var c = i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return j;
      if ([Ar, qn].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([Hi, Ii].indexOf(u) !== -1)
    for (var c = [Fa, Bi].indexOf(s) !== -1 ? o : i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return j;
      if ([Ar, qn].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (Nf === s && [Nf, ls, Df, Kf].indexOf(u) !== -1 || [ls, Df].indexOf(s) !== -1 && [ls, us].indexOf(u) !== -1 || [us, Kf].indexOf(s) !== -1 && u === us || Jp.indexOf(s) !== -1 && [Yp, Ii].indexOf(u) !== -1 || Jp.indexOf(u) !== -1 && s === Hi || rt.indexOf(s) !== -1 && rt.indexOf(u) !== -1 || s === qn && rt.indexOf(u) !== -1 || rt.concat(ue).indexOf(s) !== -1 && u === gi && yx.indexOf(A[a]) === -1 || rt.concat(ue).indexOf(u) !== -1 && s === Bi)
    return j;
  if (s === Mu && u === Mu) {
    for (var g = t[i], p = 1; g > 0 && (g--, e[g] === Mu); )
      p++;
    if (p % 2 !== 0)
      return j;
  }
  return s === Ua && u === Ea ? j : Ia;
}, Hx = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = Ex(A, e.lineBreak), n = t[0], r = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (r = r.map(function(a) {
    return [ue, Cn, Yv].indexOf(a) !== -1 ? Fo : a;
  }));
  var o = e.wordBreak === "keep-all" ? i.map(function(a, s) {
    return a && A[s] >= 19968 && A[s] <= 40959;
  }) : void 0;
  return [n, r, o];
}, xx = (
  /** @class */
  function() {
    function A(e, t, n, r) {
      this.codePoints = e, this.required = t === jv, this.start = n, this.end = r;
    }
    return A.prototype.slice = function() {
      return yA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), Sx = function(A, e) {
  var t = Gl(A), n = Hx(t, e), r = n[0], i = n[1], o = n[2], a = t.length, s = 0, l = 0;
  return {
    next: function() {
      if (l >= a)
        return { done: !0, value: null };
      for (var u = j; l < a && (u = Ix(t, i, r, ++l, o)) === j; )
        ;
      if (u !== j || l === a) {
        var c = new xx(t, u, s, l);
        return s = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Lx = 1, bx = 2, Po = 4, qp = 8, Ys = 10, Ah = 47, Wi = 92, Tx = 9, kx = 32, Ha = 34, pi = 61, Ox = 35, Dx = 36, Kx = 37, xa = 39, Sa = 40, hi = 41, Rx = 95, ee = 45, Nx = 33, Mx = 60, Px = 62, _x = 64, Gx = 91, Vx = 93, $x = 61, Wx = 123, La = 63, Xx = 125, eh = 124, zx = 126, Yx = 128, th = 65533, _u = 42, xn = 43, jx = 44, Jx = 58, Zx = 59, Uo = 46, qx = 0, AS = 8, eS = 11, tS = 14, nS = 31, rS = 127, We = -1, Zv = 48, qv = 97, AC = 101, iS = 102, oS = 117, aS = 122, eC = 65, tC = 69, nC = 70, sS = 85, lS = 90, $A = function(A) {
  return A >= Zv && A <= 57;
}, uS = function(A) {
  return A >= 55296 && A <= 57343;
}, er = function(A) {
  return $A(A) || A >= eC && A <= nC || A >= qv && A <= iS;
}, cS = function(A) {
  return A >= qv && A <= aS;
}, fS = function(A) {
  return A >= eC && A <= lS;
}, dS = function(A) {
  return cS(A) || fS(A);
}, BS = function(A) {
  return A >= Yx;
}, ba = function(A) {
  return A === Ys || A === Tx || A === kx;
}, js = function(A) {
  return dS(A) || BS(A) || A === Rx;
}, nh = function(A) {
  return js(A) || $A(A) || A === ee;
}, gS = function(A) {
  return A >= qx && A <= AS || A === eS || A >= tS && A <= nS || A === rS;
}, Ot = function(A, e) {
  return A !== Wi ? !1 : e !== Ys;
}, Ta = function(A, e, t) {
  return A === ee ? js(e) || Ot(e, t) : js(A) ? !0 : !!(A === Wi && Ot(A, e));
}, Gu = function(A, e, t) {
  return A === xn || A === ee ? $A(e) ? !0 : e === Uo && $A(t) : $A(A === Uo ? e : A);
}, pS = function(A) {
  var e = 0, t = 1;
  (A[e] === xn || A[e] === ee) && (A[e] === ee && (t = -1), e++);
  for (var n = []; $A(A[e]); )
    n.push(A[e++]);
  var r = n.length ? parseInt(yA.apply(void 0, n), 10) : 0;
  A[e] === Uo && e++;
  for (var i = []; $A(A[e]); )
    i.push(A[e++]);
  var o = i.length, a = o ? parseInt(yA.apply(void 0, i), 10) : 0;
  (A[e] === tC || A[e] === AC) && e++;
  var s = 1;
  (A[e] === xn || A[e] === ee) && (A[e] === ee && (s = -1), e++);
  for (var l = []; $A(A[e]); )
    l.push(A[e++]);
  var u = l.length ? parseInt(yA.apply(void 0, l), 10) : 0;
  return t * (r + a * Math.pow(10, -o)) * Math.pow(10, s * u);
}, hS = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, wS = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, mS = {
  type: 4
  /* COMMA_TOKEN */
}, vS = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, CS = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, QS = {
  type: 21
  /* COLUMN_TOKEN */
}, yS = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, FS = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, US = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, ES = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, IS = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ka = {
  type: 23
  /* BAD_URL_TOKEN */
}, HS = {
  type: 1
  /* BAD_STRING_TOKEN */
}, xS = {
  type: 25
  /* CDO_TOKEN */
}, SS = {
  type: 24
  /* CDC_TOKEN */
}, LS = {
  type: 26
  /* COLON_TOKEN */
}, bS = {
  type: 27
  /* SEMICOLON_TOKEN */
}, TS = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, kS = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, OS = {
  type: 31
  /* WHITESPACE_TOKEN */
}, _f = {
  type: 32
  /* EOF_TOKEN */
}, rC = (
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
        case Ox:
          var t = this.peekCodePoint(0), n = this.peekCodePoint(1), r = this.peekCodePoint(2);
          if (nh(t) || Ot(n, r)) {
            var i = Ta(t, n, r) ? bx : Lx, o = this.consumeName();
            return { type: 5, value: o, flags: i };
          }
          break;
        case Dx:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), vS;
          break;
        case xa:
          return this.consumeStringToken(xa);
        case Sa:
          return hS;
        case hi:
          return wS;
        case _u:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), IS;
          break;
        case xn:
          if (Gu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case jx:
          return mS;
        case ee:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Gu(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Ta(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === ee && l === Px)
            return this.consumeCodePoint(), this.consumeCodePoint(), SS;
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
        case Jx:
          return LS;
        case Zx:
          return bS;
        case Mx:
          if (this.peekCodePoint(0) === Nx && this.peekCodePoint(1) === ee && this.peekCodePoint(2) === ee)
            return this.consumeCodePoint(), this.consumeCodePoint(), xS;
          break;
        case _x:
          var c = this.peekCodePoint(0), f = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (Ta(c, f, g)) {
            var o = this.consumeName();
            return { type: 7, value: o };
          }
          break;
        case Gx:
          return TS;
        case Wi:
          if (Ot(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Vx:
          return kS;
        case $x:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), CS;
          break;
        case Wx:
          return US;
        case Xx:
          return ES;
        case oS:
        case sS:
          var p = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return p === xn && (er(w) || w === La) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case eh:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), yS;
          if (this.peekCodePoint(0) === eh)
            return this.consumeCodePoint(), QS;
          break;
        case zx:
          if (this.peekCodePoint(0) === pi)
            return this.consumeCodePoint(), FS;
          break;
        case We:
          return _f;
      }
      return ba(e) ? (this.consumeWhiteSpace(), OS) : $A(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : js(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: yA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); er(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var n = !1; t === La && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), n = !0;
      if (n) {
        var r = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === La ? Zv : s;
        })), 16), i = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === La ? nC : s;
        })), 16);
        return { type: 30, start: r, end: i };
      }
      var o = parseInt(yA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === ee && er(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; er(t) && a.length < 6; )
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
        var n = this.consumeStringToken(this.consumeCodePoint());
        return n.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === hi) ? (this.consumeCodePoint(), { type: 22, value: n.value }) : (this.consumeBadUrlRemnants(), ka);
      }
      for (; ; ) {
        var r = this.consumeCodePoint();
        if (r === We || r === hi)
          return { type: 22, value: yA.apply(void 0, e) };
        if (ba(r))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === hi ? (this.consumeCodePoint(), { type: 22, value: yA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), ka);
        if (r === Ha || r === xa || r === Sa || gS(r))
          return this.consumeBadUrlRemnants(), ka;
        if (r === Wi)
          if (Ot(r, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), ka;
        else
          e.push(r);
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
      for (var t = 5e4, n = ""; e > 0; ) {
        var r = Math.min(t, e);
        n += yA.apply(void 0, this._value.splice(0, r)), e -= r;
      }
      return this._value.shift(), n;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", n = 0;
      do {
        var r = this._value[n];
        if (r === We || r === void 0 || r === e)
          return t += this.consumeStringSlice(n), { type: 0, value: t };
        if (r === Ys)
          return this._value.splice(0, n), HS;
        if (r === Wi) {
          var i = this._value[n + 1];
          i !== We && i !== void 0 && (i === Ys ? (t += this.consumeStringSlice(n), n = -1, this._value.shift()) : Ot(r, i) && (t += this.consumeStringSlice(n), t += yA(this.consumeEscapedCodePoint()), n = -1));
        }
        n++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Po, n = this.peekCodePoint(0);
      for ((n === xn || n === ee) && e.push(this.consumeCodePoint()); $A(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      n = this.peekCodePoint(0);
      var r = this.peekCodePoint(1);
      if (n === Uo && $A(r))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = qp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      n = this.peekCodePoint(0), r = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((n === tC || n === AC) && ((r === xn || r === ee) && $A(i) || $A(r)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = qp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [pS(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], n = e[1], r = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (Ta(r, i, o)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: n, unit: a };
      }
      return r === Kx ? (this.consumeCodePoint(), { type: 16, number: t, flags: n }) : { type: 17, number: t, flags: n };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (er(e)) {
        for (var t = yA(e); er(this.peekCodePoint(0)) && t.length < 6; )
          t += yA(this.consumeCodePoint());
        ba(this.peekCodePoint(0)) && this.consumeCodePoint();
        var n = parseInt(t, 16);
        return n === 0 || uS(n) || n > 1114111 ? th : n;
      }
      return e === We ? th : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (nh(t))
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
      var t = new rC();
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
        if (n.type === 32 || KS(n, e))
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
      return typeof e > "u" ? _f : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), _o = function(A) {
  return A.type === 15;
}, ni = function(A) {
  return A.type === 17;
}, tA = function(A) {
  return A.type === 20;
}, DS = function(A) {
  return A.type === 0;
}, Gf = function(A, e) {
  return tA(A) && A.value === e;
}, oC = function(A) {
  return A.type !== 31;
}, Yr = function(A) {
  return A.type !== 31 && A.type !== 4;
}, tt = function(A) {
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
}, KS = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, un = function(A) {
  return A.type === 17 || A.type === 15;
}, IA = function(A) {
  return A.type === 16 || un(A);
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
  var n = A[0], r = A[1];
  return [rA(n, e), rA(typeof r < "u" ? r : n, t)];
}, rA = function(A, e) {
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
      var t = RS[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var n = e.value.substring(0, 1), r = e.value.substring(1, 2), i = e.value.substring(2, 3);
        return Vt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), 1);
      }
      if (e.value.length === 4) {
        var n = e.value.substring(0, 1), r = e.value.substring(1, 2), i = e.value.substring(2, 3), o = e.value.substring(3, 4);
        return Vt(parseInt(n + n, 16), parseInt(r + r, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255);
      }
      if (e.value.length === 6) {
        var n = e.value.substring(0, 2), r = e.value.substring(2, 4), i = e.value.substring(4, 6);
        return Vt(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), 1);
      }
      if (e.value.length === 8) {
        var n = e.value.substring(0, 2), r = e.value.substring(2, 4), i = e.value.substring(4, 6), o = e.value.substring(6, 8);
        return Vt(parseInt(n, 16), parseInt(r, 16), parseInt(i, 16), parseInt(o, 16) / 255);
      }
    }
    if (e.type === 20) {
      var a = Bt[e.value.toUpperCase()];
      if (typeof a < "u")
        return a;
    }
    return Bt.TRANSPARENT;
  }
}, An = function(A) {
  return (255 & A) === 0;
}, TA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, n = 255 & A >> 16, r = 255 & A >> 24;
  return e < 255 ? "rgba(" + r + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + n + "," + t + ")";
}, Vt = function(A, e, t, n) {
  return (A << 24 | e << 16 | t << 8 | Math.round(n * 255) << 0) >>> 0;
}, rh = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, ih = function(A, e) {
  var t = e.filter(Yr);
  if (t.length === 3) {
    var n = t.map(rh), r = n[0], i = n[1], o = n[2];
    return Vt(r, i, o, 1);
  }
  if (t.length === 4) {
    var a = t.map(rh), r = a[0], i = a[1], o = a[2], s = a[3];
    return Vt(r, i, o, s);
  }
  return 0;
};
function Vu(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var oh = function(A, e) {
  var t = e.filter(Yr), n = t[0], r = t[1], i = t[2], o = t[3], a = (n.type === 17 ? Fe(n.number) : Vl.parse(A, n)) / (Math.PI * 2), s = IA(r) ? r.number / 100 : 0, l = IA(i) ? i.number / 100 : 0, u = typeof o < "u" && IA(o) ? rA(o, 1) : 1;
  if (s === 0)
    return Vt(l * 255, l * 255, l * 255, 1);
  var c = l <= 0.5 ? l * (s + 1) : l + s - l * s, f = l * 2 - c, g = Vu(f, c, a + 1 / 3), p = Vu(f, c, a), w = Vu(f, c, a - 1 / 3);
  return Vt(g * 255, p * 255, w * 255, u);
}, RS = {
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
}, NS = {
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
}, MS = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, $l = function(A, e) {
  var t = qt.parse(A, e[0]), n = e[1];
  return n && IA(n) ? { color: t, stop: n } : { color: t, stop: null };
}, ah = function(A, e) {
  var t = A[0], n = A[A.length - 1];
  t.stop === null && (t.stop = NA), n.stop === null && (n.stop = Gt);
  for (var r = [], i = 0, o = 0; o < A.length; o++) {
    var a = A[o].stop;
    if (a !== null) {
      var s = rA(a, e);
      s > i ? r.push(s) : r.push(i), i = s;
    } else
      r.push(null);
  }
  for (var l = null, o = 0; o < r.length; o++) {
    var u = r[o];
    if (u === null)
      l === null && (l = o);
    else if (l !== null) {
      for (var c = o - l, f = r[l - 1], g = (u - f) / (c + 1), p = 1; p <= c; p++)
        r[l + p - 1] = g * p;
      l = null;
    }
  }
  return A.map(function(w, y) {
    var B = w.color;
    return { color: B, stop: Math.max(Math.min(1, r[y] / e), 0) };
  });
}, PS = function(A, e, t) {
  var n = e / 2, r = t / 2, i = rA(A[0], e) - n, o = r - rA(A[1], t);
  return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
}, _S = function(A, e, t) {
  var n = typeof A == "number" ? A : PS(A, e, t), r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n)), i = e / 2, o = t / 2, a = r / 2, s = Math.sin(n - Math.PI / 2) * a, l = Math.cos(n - Math.PI / 2) * a;
  return [r, i - l, i + l, o - s, o + s];
}, be = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, sh = function(A, e, t, n, r) {
  var i = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return i.reduce(function(o, a) {
    var s = a[0], l = a[1], u = be(t - s, n - l);
    return (r ? u < o.optimumDistance : u > o.optimumDistance) ? {
      optimumCorner: a,
      optimumDistance: u
    } : o;
  }, {
    optimumDistance: r ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, GS = function(A, e, t, n, r) {
  var i = 0, o = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? i = o = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === 1 && (i = Math.min(Math.abs(e), Math.abs(e - n)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (A.shape === 0)
        i = o = Math.min(be(e, t), be(e, t - r), be(e - n, t), be(e - n, t - r));
      else if (A.shape === 1) {
        var a = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n)), s = sh(n, r, e, t, !0), l = s[0], u = s[1];
        i = be(l - e, (u - t) / a), o = a * i;
      }
      break;
    case 1:
      A.shape === 0 ? i = o = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r)) : A.shape === 1 && (i = Math.max(Math.abs(e), Math.abs(e - n)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (A.shape === 0)
        i = o = Math.max(be(e, t), be(e, t - r), be(e - n, t), be(e - n, t - r));
      else if (A.shape === 1) {
        var a = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n)), c = sh(n, r, e, t, !1), l = c[0], u = c[1];
        i = be(l - e, (u - t) / a), o = a * i;
      }
      break;
  }
  return Array.isArray(A.size) && (i = rA(A.size[0], n), o = A.size.length === 2 ? rA(A.size[1], r) : i), [i, o];
}, VS = function(A, e) {
  var t = Fe(180), n = [];
  return tt(e).forEach(function(r, i) {
    if (i === 0) {
      var o = r[0];
      if (o.type === 20 && o.value === "to") {
        t = dC(r);
        return;
      } else if (fC(o)) {
        t = Vl.parse(A, o);
        return;
      }
    }
    var a = $l(A, r);
    n.push(a);
  }), {
    angle: t,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, Oa = function(A, e) {
  var t = Fe(180), n = [];
  return tt(e).forEach(function(r, i) {
    if (i === 0) {
      var o = r[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1) {
        t = dC(r);
        return;
      } else if (fC(o)) {
        t = (Vl.parse(A, o) + Fe(270)) % Fe(360);
        return;
      }
    }
    var a = $l(A, r);
    n.push(a);
  }), {
    angle: t,
    stops: n,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, $S = function(A, e) {
  var t = Fe(180), n = [], r = 1, i = 0, o = 3, a = [];
  return tt(e).forEach(function(s, l) {
    var u = s[0];
    if (l === 0) {
      if (tA(u) && u.value === "linear") {
        r = 1;
        return;
      } else if (tA(u) && u.value === "radial") {
        r = 2;
        return;
      }
    }
    if (u.type === 18) {
      if (u.name === "from") {
        var c = qt.parse(A, u.values[0]);
        n.push({ stop: NA, color: c });
      } else if (u.name === "to") {
        var c = qt.parse(A, u.values[0]);
        n.push({ stop: Gt, color: c });
      } else if (u.name === "color-stop") {
        var f = u.values.filter(Yr);
        if (f.length === 2) {
          var c = qt.parse(A, f[1]), g = f[0];
          ni(g) && n.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
            color: c
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + Fe(180)) % Fe(360),
    stops: n,
    type: r
  } : { size: o, shape: i, stops: n, position: a, type: r };
}, BC = "closest-side", gC = "farthest-side", pC = "closest-corner", hC = "farthest-corner", wC = "circle", mC = "ellipse", vC = "cover", CC = "contain", WS = function(A, e) {
  var t = 0, n = 3, r = [], i = [];
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
          else (IA(f) || un(f)) && i.push(f);
        else if (tA(f))
          switch (f.value) {
            case wC:
              return t = 0, !1;
            case mC:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case BC:
              return n = 0, !1;
            case vC:
            case gC:
              return n = 1, !1;
            case CC:
            case pC:
              return n = 2, !1;
            case hC:
              return n = 3, !1;
          }
        else if (un(f) || IA(f))
          return Array.isArray(n) || (n = []), n.push(f), !1;
        return c;
      }, s);
    }
    if (s) {
      var u = $l(A, o);
      r.push(u);
    }
  }), {
    size: n,
    shape: t,
    stops: r,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Da = function(A, e) {
  var t = 0, n = 3, r = [], i = [];
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
      else if (IA(c) || un(c))
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
            return n = 0, !1;
          case gC:
            return n = 1, !1;
          case pC:
            return n = 2, !1;
          case vC:
          case hC:
            return n = 3, !1;
        }
      else if (un(c) || IA(c))
        return Array.isArray(n) || (n = []), n.push(c), !1;
      return u;
    }, s)), s) {
      var l = $l(A, o);
      r.push(l);
    }
  }), {
    size: n,
    shape: t,
    stops: r,
    position: i,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, XS = function(A) {
  return A.type === 1;
}, zS = function(A) {
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
      var n = QC[e.name];
      if (typeof n > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return n(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function YS(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!QC[A.name]);
}
var QC = {
  "linear-gradient": VS,
  "-moz-linear-gradient": Oa,
  "-ms-linear-gradient": Oa,
  "-o-linear-gradient": Oa,
  "-webkit-linear-gradient": Oa,
  "radial-gradient": WS,
  "-moz-radial-gradient": Da,
  "-ms-radial-gradient": Da,
  "-o-radial-gradient": Da,
  "-webkit-radial-gradient": Da,
  "-webkit-gradient": $S
}, jS = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(n) {
      return Yr(n) && YS(n);
    }).map(function(n) {
      return IB.parse(A, n);
    });
  }
}, JS = {
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
}, ZS = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(IA);
    }).map(aC);
  }
}, qS = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(tA).map(function(n) {
        return n.value;
      }).join(" ");
    }).map(AL);
  }
}, AL = function(A) {
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
}, br;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(br || (br = {}));
var eL = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(tL);
    });
  }
}, tL = function(A) {
  return tA(A) || IA(A);
}, Wl = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, nL = Wl("top"), rL = Wl("right"), iL = Wl("bottom"), oL = Wl("left"), Xl = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return aC(t.filter(IA));
    }
  };
}, aL = Xl("top-left"), sL = Xl("top-right"), lL = Xl("bottom-right"), uL = Xl("bottom-left"), zl = function(A) {
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
}, cL = zl("top"), fL = zl("right"), dL = zl("bottom"), BL = zl("left"), Yl = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return _o(t) ? t.number : 0;
    }
  };
}, gL = Yl("top"), pL = Yl("right"), hL = Yl("bottom"), wL = Yl("left"), mL = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, vL = {
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
}, CL = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).reduce(
      function(t, n) {
        return t | QL(n.value);
      },
      0
      /* NONE */
    );
  }
}, QL = function(A) {
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
}, yL = {
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
}, FL = {
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
var UL = {
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
}, EL = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, lh = function(A, e) {
  return tA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : IA(A) ? rA(A, e) : e;
}, IL = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : IB.parse(A, e);
  }
}, HL = {
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
}, xL = jl("top"), SL = jl("right"), LL = jl("bottom"), bL = jl("left"), TL = {
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
}, kL = {
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
}, OL = Jl("top"), DL = Jl("right"), KL = Jl("bottom"), RL = Jl("left"), NL = {
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
}, ML = {
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
}, PL = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Gf(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var n = {
        color: Bt.TRANSPARENT,
        offsetX: NA,
        offsetY: NA,
        blur: NA
      }, r = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        un(o) ? (r === 0 ? n.offsetX = o : r === 1 ? n.offsetY = o : n.blur = o, r++) : n.color = qt.parse(A, o);
      }
      return n;
    });
  }
}, _L = {
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
}, GL = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = WL[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, VL = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, $L = function(A) {
  var e = A.filter(function(s) {
    return s.type === 17;
  }).map(function(s) {
    return s.number;
  }), t = e[0], n = e[1];
  e[2], e[3];
  var r = e[4], i = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var o = e[12], a = e[13];
  return e[14], e[15], e.length === 16 ? [t, n, r, i, o, a] : null;
}, WL = {
  matrix: VL,
  matrix3d: $L
}, uh = {
  type: 16,
  number: 50,
  flags: Po
}, XL = [uh, uh], zL = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(IA);
    return t.length !== 2 ? XL : [t[0], t[1]];
  }
}, YL = {
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
var jL = {
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
}, JL = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (ni(e))
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
}, ZL = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return ni(e) ? e.number : 1;
  }
}, qL = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ab = {
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
}, eb = {
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
}, tb = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, nb = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (ni(e))
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
}, ib = {
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
}, ob = {
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
}, ab = {
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
    for (var n = [], r = e.filter(oC), i = 0; i < r.length; i++) {
      var o = r[i], a = r[i + 1];
      if (o.type === 20) {
        var s = a && ni(a) ? a.number : 1;
        n.push({ counter: o.value, increment: s });
      }
    }
    return n;
  }
}, sb = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], n = e.filter(oC), r = 0; r < n.length; r++) {
      var i = n[r], o = n[r + 1];
      if (tA(i) && i.value !== "none") {
        var a = o && ni(o) ? o.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, lb = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(_o).map(function(t) {
      return yC.parse(A, t);
    });
  }
}, ub = {
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
    var n = [], r = e.filter(DS);
    if (r.length % 2 !== 0)
      return null;
    for (var i = 0; i < r.length; i += 2) {
      var o = r[i].value, a = r[i + 1].value;
      n.push({ open: o, close: a });
    }
    return n;
  }
}, ch = function(A, e, t) {
  if (!A)
    return "";
  var n = A[Math.min(e, A.length - 1)];
  return n ? t ? n.open : n.close : "";
}, cb = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && Gf(e[0], "none") ? [] : tt(e).map(function(t) {
      for (var n = {
        color: 255,
        offsetX: NA,
        offsetY: NA,
        blur: NA,
        spread: NA,
        inset: !1
      }, r = 0, i = 0; i < t.length; i++) {
        var o = t[i];
        Gf(o, "inset") ? n.inset = !0 : un(o) ? (r === 0 ? n.offsetX = o : r === 1 ? n.offsetY = o : r === 2 ? n.blur = o : n.spread = o, r++) : n.color = qt.parse(A, o);
      }
      return n;
    });
  }
}, fb = {
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
    return e.filter(tA).forEach(function(r) {
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
}, db = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Bb = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return _o(e) ? e.number : 0;
  }
}, gb = (
  /** @class */
  function() {
    function A(e, t) {
      var n, r;
      this.animationDuration = T(e, lb, t.animationDuration), this.backgroundClip = T(e, NS, t.backgroundClip), this.backgroundColor = T(e, MS, t.backgroundColor), this.backgroundImage = T(e, jS, t.backgroundImage), this.backgroundOrigin = T(e, JS, t.backgroundOrigin), this.backgroundPosition = T(e, ZS, t.backgroundPosition), this.backgroundRepeat = T(e, qS, t.backgroundRepeat), this.backgroundSize = T(e, eL, t.backgroundSize), this.borderTopColor = T(e, nL, t.borderTopColor), this.borderRightColor = T(e, rL, t.borderRightColor), this.borderBottomColor = T(e, iL, t.borderBottomColor), this.borderLeftColor = T(e, oL, t.borderLeftColor), this.borderTopLeftRadius = T(e, aL, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, sL, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, lL, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, uL, t.borderBottomLeftRadius), this.borderTopStyle = T(e, cL, t.borderTopStyle), this.borderRightStyle = T(e, fL, t.borderRightStyle), this.borderBottomStyle = T(e, dL, t.borderBottomStyle), this.borderLeftStyle = T(e, BL, t.borderLeftStyle), this.borderTopWidth = T(e, gL, t.borderTopWidth), this.borderRightWidth = T(e, pL, t.borderRightWidth), this.borderBottomWidth = T(e, hL, t.borderBottomWidth), this.borderLeftWidth = T(e, wL, t.borderLeftWidth), this.boxShadow = T(e, cb, t.boxShadow), this.color = T(e, mL, t.color), this.direction = T(e, vL, t.direction), this.display = T(e, CL, t.display), this.float = T(e, yL, t.cssFloat), this.fontFamily = T(e, eb, t.fontFamily), this.fontSize = T(e, tb, t.fontSize), this.fontStyle = T(e, ib, t.fontStyle), this.fontVariant = T(e, rb, t.fontVariant), this.fontWeight = T(e, nb, t.fontWeight), this.letterSpacing = T(e, FL, t.letterSpacing), this.lineBreak = T(e, UL, t.lineBreak), this.lineHeight = T(e, EL, t.lineHeight), this.listStyleImage = T(e, IL, t.listStyleImage), this.listStylePosition = T(e, HL, t.listStylePosition), this.listStyleType = T(e, Vf, t.listStyleType), this.marginTop = T(e, xL, t.marginTop), this.marginRight = T(e, SL, t.marginRight), this.marginBottom = T(e, LL, t.marginBottom), this.marginLeft = T(e, bL, t.marginLeft), this.opacity = T(e, ZL, t.opacity);
      var i = T(e, TL, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = T(e, kL, t.overflowWrap), this.paddingTop = T(e, OL, t.paddingTop), this.paddingRight = T(e, DL, t.paddingRight), this.paddingBottom = T(e, KL, t.paddingBottom), this.paddingLeft = T(e, RL, t.paddingLeft), this.paintOrder = T(e, fb, t.paintOrder), this.position = T(e, ML, t.position), this.textAlign = T(e, NL, t.textAlign), this.textDecorationColor = T(e, qL, (n = t.textDecorationColor) !== null && n !== void 0 ? n : t.color), this.textDecorationLine = T(e, Ab, (r = t.textDecorationLine) !== null && r !== void 0 ? r : t.textDecoration), this.textShadow = T(e, PL, t.textShadow), this.textTransform = T(e, _L, t.textTransform), this.transform = T(e, GL, t.transform), this.transformOrigin = T(e, zL, t.transformOrigin), this.visibility = T(e, YL, t.visibility), this.webkitTextStrokeColor = T(e, db, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, Bb, t.webkitTextStrokeWidth), this.wordBreak = T(e, jL, t.wordBreak), this.zIndex = T(e, JL, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return An(this.backgroundColor);
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
), pb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, ob, t.content), this.quotes = T(e, ub, t.quotes);
    }
    return A;
  }()
), fh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, ab, t.counterIncrement), this.counterReset = T(e, sb, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var n = new rC(), r = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  n.write(r);
  var i = new iC(n.read());
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
          return un(a) ? a : NA;
        case "length-percentage":
          var s = i.parseComponentValue();
          return IA(s) ? s : NA;
        case "time":
          return yC.parse(A, i.parseComponentValue());
      }
      break;
  }
}, hb = "data-html2canvas-debug", wb = function(A) {
  var e = A.getAttribute(hb);
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
  var t = wb(A);
  return t === 1 || e === t;
}, nt = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, $f(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new gb(e, window.getComputedStyle(t, null)), zf(t) && (this.styles.animationDuration.some(function(n) {
        return n > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = _l(this.context, t), $f(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), mb = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", dh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Si = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ka = 0; Ka < dh.length; Ka++)
  Si[dh.charCodeAt(Ka)] = Ka;
var vb = function(A) {
  var e = A.length * 0.75, t = A.length, n, r = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (n = 0; n < t; n += 4)
    i = Si[A.charCodeAt(n)], o = Si[A.charCodeAt(n + 1)], a = Si[A.charCodeAt(n + 2)], s = Si[A.charCodeAt(n + 3)], u[r++] = i << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | s & 63;
  return l;
}, Cb = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 2)
    t.push(A[n + 1] << 8 | A[n]);
  return t;
}, Qb = function(A) {
  for (var e = A.length, t = [], n = 0; n < e; n += 4)
    t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
  return t;
}, Kn = 5, HB = 11, $u = 2, yb = HB - Kn, FC = 65536 >> Kn, Fb = 1 << Kn, Wu = Fb - 1, Ub = 1024 >> Kn, Eb = FC + Ub, Ib = Eb, Hb = 32, xb = Ib + Hb, Sb = 65536 >> HB, Lb = 1 << yb, bb = Lb - 1, Bh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Tb = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, kb = function(A, e) {
  var t = vb(A), n = Array.isArray(t) ? Qb(t) : new Uint32Array(t), r = Array.isArray(t) ? Cb(t) : new Uint16Array(t), i = 24, o = Bh(r, i / 2, n[4] / 2), a = n[5] === 2 ? Bh(r, (i + n[4]) / 2) : Tb(n, Math.ceil((i + n[4]) / 4));
  return new Ob(n[0], n[1], n[2], n[3], o, a);
}, Ob = (
  /** @class */
  function() {
    function A(e, t, n, r, i, o) {
      this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = i, this.data = o;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> Kn], t = (t << $u) + (e & Wu), this.data[t];
        if (e <= 65535)
          return t = this.index[FC + (e - 55296 >> Kn)], t = (t << $u) + (e & Wu), this.data[t];
        if (e < this.highStart)
          return t = xb - Sb + (e >> HB), t = this.index[t], t += e >> Kn & bb, t = this.index[t], t = (t << $u) + (e & Wu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), gh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Db = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ra = 0; Ra < gh.length; Ra++)
  Db[gh.charCodeAt(Ra)] = Ra;
var Kb = 1, Xu = 2, zu = 3, ph = 4, hh = 5, Rb = 7, wh = 8, Yu = 9, ju = 10, mh = 11, vh = 12, Ch = 13, Qh = 14, Ju = 15, Nb = function(A) {
  for (var e = [], t = 0, n = A.length; t < n; ) {
    var r = A.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), t--);
    } else
      e.push(r);
  }
  return e;
}, Mb = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var n = [], r = -1, i = ""; ++r < t; ) {
    var o = A[r];
    o <= 65535 ? n.push(o) : (o -= 65536, n.push((o >> 10) + 55296, o % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return i;
}, Pb = kb(mb), me = "×", Zu = "÷", _b = function(A) {
  return Pb.get(A);
}, Gb = function(A, e, t) {
  var n = t - 2, r = e[n], i = e[t - 1], o = e[t];
  if (i === Xu && o === zu)
    return me;
  if (i === Xu || i === zu || i === ph || o === Xu || o === zu || o === ph)
    return Zu;
  if (i === wh && [wh, Yu, mh, vh].indexOf(o) !== -1 || (i === mh || i === Yu) && (o === Yu || o === ju) || (i === vh || i === ju) && o === ju || o === Ch || o === hh || o === Rb || i === Kb)
    return me;
  if (i === Ch && o === Qh) {
    for (; r === hh; )
      r = e[--n];
    if (r === Qh)
      return me;
  }
  if (i === Ju && o === Ju) {
    for (var a = 0; r === Ju; )
      a++, r = e[--n];
    if (a % 2 === 0)
      return me;
  }
  return Zu;
}, Vb = function(A) {
  var e = Nb(A), t = e.length, n = 0, r = 0, i = e.map(_b);
  return {
    next: function() {
      if (n >= t)
        return { done: !0, value: null };
      for (var o = me; n < t && (o = Gb(e, i, ++n)) === me; )
        ;
      if (o !== me || n === t) {
        var a = Mb.apply(null, e.slice(r, n));
        return r = n, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, $b = function(A) {
  for (var e = Vb(A), t = [], n; !(n = e.next()).done; )
    n.value && t.push(n.value.slice());
  return t;
}, Wb = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var n = A.createElement("boundtest");
      n.style.height = e + "px", n.style.display = "block", A.body.appendChild(n), t.selectNode(n);
      var r = t.getBoundingClientRect(), i = Math.round(r.height);
      if (A.body.removeChild(n), i === e)
        return !0;
    }
  }
  return !1;
}, Xb = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var n = e.firstChild, r = Gl(n.data).map(function(s) {
    return yA(s);
  }), i = 0, o = {}, a = r.every(function(s, l) {
    t.setStart(n, i), t.setEnd(n, i + s.length);
    var u = t.getBoundingClientRect();
    i += s.length;
    var c = u.x > o.x || u.y > o.y;
    return o = u, l === 0 ? !0 : c;
  });
  return A.body.removeChild(e), a;
}, zb = function() {
  return typeof new Image().crossOrigin < "u";
}, Yb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, jb = function(A) {
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
}, yh = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, Jb = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var n = e.getContext("2d");
  if (!n)
    return Promise.reject(!1);
  n.fillStyle = "rgb(0, 255, 0)", n.fillRect(0, 0, t, t);
  var r = new Image(), i = e.toDataURL();
  r.src = i;
  var o = Wf(t, t, 0, 0, r);
  return n.fillStyle = "red", n.fillRect(0, 0, t, t), Fh(o).then(function(a) {
    n.drawImage(a, 0, 0);
    var s = n.getImageData(0, 0, t, t).data;
    n.fillStyle = "red", n.fillRect(0, 0, t, t);
    var l = A.createElement("div");
    return l.style.backgroundImage = "url(" + i + ")", l.style.height = t + "px", yh(s) ? Fh(Wf(t, t, 0, 0, l)) : Promise.reject(!1);
  }).then(function(a) {
    return n.drawImage(a, 0, 0), yh(n.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, Wf = function(A, e, t, n, r) {
  var i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), a = document.createElementNS(i, "foreignObject");
  return o.setAttributeNS(null, "width", A.toString()), o.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", n.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(r), o;
}, Fh = function(A) {
  return new Promise(function(e, t) {
    var n = new Image();
    n.onload = function() {
      return e(n);
    }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, RA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = Wb(document);
    return Object.defineProperty(RA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = RA.SUPPORT_RANGE_BOUNDS && Xb(document);
    return Object.defineProperty(RA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = jb(document);
    return Object.defineProperty(RA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? Jb(document) : Promise.resolve(!1);
    return Object.defineProperty(RA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = zb();
    return Object.defineProperty(RA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = Yb();
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
), Zb = function(A, e, t, n) {
  var r = e2(e, t), i = [], o = 0;
  return r.forEach(function(a) {
    if (t.textDecorationLine.length || a.trim().length > 0)
      if (RA.SUPPORT_RANGE_BOUNDS) {
        var s = Uh(n, o, a.length).getClientRects();
        if (s.length > 1) {
          var l = xB(a), u = 0;
          l.forEach(function(f) {
            i.push(new Yi(f, Qt.fromDOMRectList(A, Uh(n, u + o, f.length).getClientRects()))), u += f.length;
          });
        } else
          i.push(new Yi(a, Qt.fromDOMRectList(A, s)));
      } else {
        var c = n.splitText(a.length);
        i.push(new Yi(a, qb(A, n))), n = c;
      }
    else RA.SUPPORT_RANGE_BOUNDS || (n = n.splitText(a.length));
    o += a.length;
  }), i;
}, qb = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var n = t.createElement("html2canvaswrapper");
    n.appendChild(e.cloneNode(!0));
    var r = e.parentNode;
    if (r) {
      r.replaceChild(n, e);
      var i = _l(A, n);
      return n.firstChild && r.replaceChild(n.firstChild, n), i;
    }
  }
  return Qt.EMPTY;
}, Uh = function(A, e, t) {
  var n = A.ownerDocument;
  if (!n)
    throw new Error("Node has no owner document");
  var r = n.createRange();
  return r.setStart(A, e), r.setEnd(A, e + t), r;
}, xB = function(A) {
  if (RA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return $b(A);
}, A2 = function(A, e) {
  if (RA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(n) {
      return n.segment;
    });
  }
  return n2(A, e);
}, e2 = function(A, e) {
  return e.letterSpacing !== 0 ? xB(A) : A2(A, e);
}, t2 = [32, 160, 4961, 65792, 65793, 4153, 4241], n2 = function(A, e) {
  for (var t = Sx(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), n = [], r, i = function() {
    if (r.value) {
      var o = r.value.slice(), a = Gl(o), s = "";
      a.forEach(function(l) {
        t2.indexOf(l) === -1 ? s += yA(l) : (s.length && n.push(s), n.push(yA(l)), s = "");
      }), s.length && n.push(s);
    }
  }; !(r = t.next()).done; )
    i();
  return n;
}, r2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, n) {
      this.text = i2(t.data, n.textTransform), this.textBounds = Zb(e, this.text, n, t);
    }
    return A;
  }()
), i2 = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(o2, a2);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, o2 = /(^|\s|:|-|\(|\))([a-z])/g, a2 = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, UC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.src = n.currentSrc || n.src, r.intrinsicWidth = n.naturalWidth, r.intrinsicHeight = n.naturalHeight, r.context.cache.addImage(r.src), r;
    }
    return e;
  }(nt)
), EC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.canvas = n, r.intrinsicWidth = n.width, r.intrinsicHeight = n.height, r;
    }
    return e;
  }(nt)
), IC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this, i = new XMLSerializer(), o = _l(t, n);
      return n.setAttribute("width", o.width + "px"), n.setAttribute("height", o.height + "px"), r.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(n)), r.intrinsicWidth = n.width.baseVal.value, r.intrinsicHeight = n.height.baseVal.value, r.context.cache.addImage(r.svg), r;
    }
    return e;
  }(nt)
), HC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.value = n.value, r;
    }
    return e;
  }(nt)
), Xf = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.start = n.start, r.reversed = typeof n.reversed == "boolean" && n.reversed === !0, r;
    }
    return e;
  }(nt)
), s2 = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], l2 = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], u2 = function(A) {
  return A.width > A.height ? new Qt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Qt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, c2 = function(A) {
  var e = A.type === f2 ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Zs = "checkbox", qs = "radio", f2 = "password", Eh = 707406591, SB = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      switch (r.type = n.type.toLowerCase(), r.checked = n.checked, r.value = c2(n), (r.type === Zs || r.type === qs) && (r.styles.backgroundColor = 3739148031, r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575, r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1, r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1, r.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], r.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], r.bounds = u2(r.bounds)), r.type) {
        case Zs:
          r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = s2;
          break;
        case qs:
          r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = l2;
          break;
      }
      return r;
    }
    return e;
  }(nt)
), xC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this, i = n.options[n.selectedIndex || 0];
      return r.value = i && i.text || "", r;
    }
    return e;
  }(nt)
), SC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.value = n.value, r;
    }
    return e;
  }(nt)
), LC = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      r.src = n.src, r.width = parseInt(n.width, 10) || 0, r.height = parseInt(n.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
      try {
        if (n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement) {
          r.tree = TC(t, n.contentWindow.document.documentElement);
          var i = n.contentWindow.document.documentElement ? Xi(t, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Bt.TRANSPARENT, o = n.contentWindow.document.body ? Xi(t, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Bt.TRANSPARENT;
          r.backgroundColor = An(i) ? An(o) ? r.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return r;
    }
    return e;
  }(nt)
), d2 = ["OL", "UL", "MENU"], cs = function(A, e, t, n) {
  for (var r = e.firstChild, i = void 0; r; r = i)
    if (i = r.nextSibling, kC(r) && r.data.trim().length > 0)
      t.textNodes.push(new r2(A, r, t.styles));
    else if (yr(r))
      if (RC(r) && r.assignedNodes)
        r.assignedNodes().forEach(function(a) {
          return cs(A, a, t, n);
        });
      else {
        var o = bC(A, r);
        o.styles.isVisible() && (B2(r, o, n) ? o.flags |= 4 : g2(o.styles) && (o.flags |= 2), d2.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? cs(A, r.shadowRoot, o, n) : !Al(r) && !OC(r) && !el(r) && cs(A, r, o, n));
      }
}, bC = function(A, e) {
  return Yf(e) ? new UC(A, e) : DC(e) ? new EC(A, e) : OC(e) ? new IC(A, e) : p2(e) ? new HC(A, e) : h2(e) ? new Xf(A, e) : w2(e) ? new SB(A, e) : el(e) ? new xC(A, e) : Al(e) ? new SC(A, e) : KC(e) ? new LC(A, e) : new nt(A, e);
}, TC = function(A, e) {
  var t = bC(A, e);
  return t.flags |= 4, cs(A, e, t, t), t;
}, B2 = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || LB(A) && t.styles.isTransparent();
}, g2 = function(A) {
  return A.isPositioned() || A.isFloating();
}, kC = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, yr = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, zf = function(A) {
  return yr(A) && typeof A.style < "u" && !fs(A);
}, fs = function(A) {
  return typeof A.className == "object";
}, p2 = function(A) {
  return A.tagName === "LI";
}, h2 = function(A) {
  return A.tagName === "OL";
}, w2 = function(A) {
  return A.tagName === "INPUT";
}, m2 = function(A) {
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
}, v2 = function(A) {
  return A.tagName === "SCRIPT";
}, Al = function(A) {
  return A.tagName === "TEXTAREA";
}, el = function(A) {
  return A.tagName === "SELECT";
}, RC = function(A) {
  return A.tagName === "SLOT";
}, xh = function(A) {
  return A.tagName.indexOf("-") > 0;
}, C2 = (
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
      var t = this, n = e.counterIncrement, r = e.counterReset, i = !0;
      n !== null && n.forEach(function(a) {
        var s = t.counters[a.counter];
        s && a.increment !== 0 && (i = !1, s.length || s.push(1), s[Math.max(0, s.length - 1)] += a.increment);
      });
      var o = [];
      return i && r.forEach(function(a) {
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
}, y2 = {
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
}, tr = function(A, e, t, n, r, i) {
  return A < e || A > t ? Eo(A, r, i.length > 0) : n.integers.reduce(function(o, a, s) {
    for (; A >= a; )
      A -= a, o += n.values[s];
    return o;
  }, "") + i;
}, NC = function(A, e, t, n) {
  var r = "";
  do
    t || A--, r = n(A) + r, A /= e;
  while (A * e >= e);
  return r;
}, QA = function(A, e, t, n, r) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (NC(Math.abs(A), i, n, function(o) {
    return yA(Math.floor(o % i) + e);
  }) + r);
}, pn = function(A, e, t) {
  t === void 0 && (t = ". ");
  var n = e.length;
  return NC(Math.abs(A), n, !1, function(r) {
    return e[Math.floor(r % n)];
  }) + t;
}, ir = 1, Lt = 2, bt = 4, Li = 8, it = function(A, e, t, n, r, i) {
  if (A < -9999 || A > 9999)
    return Eo(A, 4, r.length > 0);
  var o = Math.abs(A), a = r;
  if (o === 0)
    return e[0] + a;
  for (var s = 0; o > 0 && s <= 4; s++) {
    var l = o % 10;
    l === 0 && SA(i, ir) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && SA(i, Lt) || l === 1 && s === 1 && SA(i, bt) && A > 100 || l === 1 && s > 1 && SA(i, Li) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), o = Math.floor(o / 10);
  }
  return (A < 0 ? n : "") + a;
}, bh = "十百千萬", Th = "拾佰仟萬", kh = "マイナス", qu = "마이너스", Eo = function(A, e, t) {
  var n = t ? ". " : "", r = t ? "、" : "", i = t ? ", " : "", o = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      var a = QA(A, 48, 57, !0, n);
      return a.length < 4 ? "0" + a : a;
    case 4:
      return pn(A, "〇一二三四五六七八九", r);
    case 6:
      return tr(A, 1, 3999, Sh, 3, n).toLowerCase();
    case 7:
      return tr(A, 1, 3999, Sh, 3, n);
    case 8:
      return QA(A, 945, 969, !1, n);
    case 9:
      return QA(A, 97, 122, !1, n);
    case 10:
      return QA(A, 65, 90, !1, n);
    case 11:
      return QA(A, 1632, 1641, !0, n);
    case 12:
    case 49:
      return tr(A, 1, 9999, Lh, 3, n);
    case 35:
      return tr(A, 1, 9999, Lh, 3, n).toLowerCase();
    case 13:
      return QA(A, 2534, 2543, !0, n);
    case 14:
    case 30:
      return QA(A, 6112, 6121, !0, n);
    case 15:
      return pn(A, "子丑寅卯辰巳午未申酉戌亥", r);
    case 16:
      return pn(A, "甲乙丙丁戊己庚辛壬癸", r);
    case 17:
    case 48:
      return it(A, "零一二三四五六七八九", bh, "負", r, Lt | bt | Li);
    case 47:
      return it(A, "零壹貳參肆伍陸柒捌玖", Th, "負", r, ir | Lt | bt | Li);
    case 42:
      return it(A, "零一二三四五六七八九", bh, "负", r, Lt | bt | Li);
    case 41:
      return it(A, "零壹贰叁肆伍陆柒捌玖", Th, "负", r, ir | Lt | bt | Li);
    case 26:
      return it(A, "〇一二三四五六七八九", "十百千万", kh, r, 0);
    case 25:
      return it(A, "零壱弐参四伍六七八九", "拾百千万", kh, r, ir | Lt | bt);
    case 31:
      return it(A, "영일이삼사오육칠팔구", "십백천만", qu, i, ir | Lt | bt);
    case 33:
      return it(A, "零一二三四五六七八九", "十百千萬", qu, i, 0);
    case 32:
      return it(A, "零壹貳參四五六七八九", "拾百千", qu, i, ir | Lt | bt);
    case 18:
      return QA(A, 2406, 2415, !0, n);
    case 20:
      return tr(A, 1, 19999, y2, 3, n);
    case 21:
      return QA(A, 2790, 2799, !0, n);
    case 22:
      return QA(A, 2662, 2671, !0, n);
    case 22:
      return tr(A, 1, 10999, Q2, 3, n);
    case 23:
      return pn(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return pn(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return QA(A, 3302, 3311, !0, n);
    case 28:
      return pn(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
    case 29:
      return pn(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
    case 34:
      return QA(A, 3792, 3801, !0, n);
    case 37:
      return QA(A, 6160, 6169, !0, n);
    case 38:
      return QA(A, 4160, 4169, !0, n);
    case 39:
      return QA(A, 2918, 2927, !0, n);
    case 40:
      return QA(A, 1776, 1785, !0, n);
    case 43:
      return QA(A, 3046, 3055, !0, n);
    case 44:
      return QA(A, 3174, 3183, !0, n);
    case 45:
      return QA(A, 3664, 3673, !0, n);
    case 46:
      return QA(A, 3872, 3881, !0, n);
    case 3:
    default:
      return QA(A, 48, 57, !0, n);
  }
}, MC = "data-html2canvas-ignore", Oh = (
  /** @class */
  function() {
    function A(e, t, n) {
      if (this.context = e, this.options = n, this.scrolledElements = [], this.referenceElement = t, this.counters = new C2(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var n = this, r = F2(e, t);
      if (!r.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, o = e.defaultView.pageYOffset, a = r.contentWindow, s = a.document, l = I2(r).then(function() {
        return YA(n, void 0, void 0, function() {
          var u, c;
          return VA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(L2), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, E2(s)] : [3, 4];
              case 3:
                f.sent(), f.label = 4;
              case 4:
                return typeof u == "function" ? [2, Promise.resolve().then(function() {
                  return u(s, c);
                }).then(function() {
                  return r;
                })] : [2, r];
            }
          });
        });
      });
      return s.open(), s.write(x2(document.doctype) + "<html></html>"), S2(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
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
          var n = [].slice.call(t.cssRules, 0).reduce(function(i, o) {
            return o && typeof o.cssText == "string" ? i + o.cssText : i;
          }, ""), r = e.cloneNode(!1);
          return r.textContent = n, r;
        }
      } catch (i) {
        if (this.context.logger.error("Unable to access cssRules property", i), i.name !== "SecurityError")
          throw i;
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
        var i = e.getContext("2d"), o = r.getContext("2d");
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
      (!yr(t) || !v2(t) && !t.hasAttribute(MC) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !yr(t) || !Hh(t)) && e.appendChild(this.cloneNode(t, n));
    }, A.prototype.cloneChildNodes = function(e, t, n) {
      for (var r = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (yr(i) && RC(i) && typeof i.assignedNodes == "function") {
          var o = i.assignedNodes();
          o.length && o.forEach(function(a) {
            return r.appendChildNode(t, a, n);
          });
        } else
          this.appendChildNode(t, i, n);
    }, A.prototype.cloneNode = function(e, t) {
      if (kC(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var n = e.ownerDocument.defaultView;
      if (n && yr(e) && (zf(e) || fs(e))) {
        var r = this.createElementClone(e);
        r.style.transitionProperty = "none";
        var i = n.getComputedStyle(e), o = n.getComputedStyle(e, ":before"), a = n.getComputedStyle(e, ":after");
        this.referenceElement === e && zf(r) && (this.clonedReferenceElement = r), LB(r) && k2(r);
        var s = this.counters.parse(new fh(this.context, i)), l = this.resolvePseudoContent(e, r, o, ji.BEFORE);
        xh(e) && (t = !0), Ih(e) || this.cloneChildNodes(e, r, t), l && r.insertBefore(l, r.firstChild);
        var u = this.resolvePseudoContent(e, r, a, ji.AFTER);
        return u && r.appendChild(u), this.counters.pop(s), (i && (this.options.copyStyles || fs(e)) && !KC(e) || t) && Ac(i, r), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([r, e.scrollLeft, e.scrollTop]), (Al(e) || el(e)) && (Al(r) || el(r)) && (r.value = e.value), r;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, n, r) {
      var i = this;
      if (n) {
        var o = n.content, a = t.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || n.display === "none")) {
          this.counters.parse(new fh(this.context, n));
          var s = new pb(this.context, n), l = a.createElement("html2canvaspseudoelement");
          Ac(n, l), s.content.forEach(function(c) {
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
                var p = c.values.filter(Yr), w = p[0], y = p[1];
                if (w && tA(w)) {
                  var B = i.counters.getCounterValue(w.value), d = y && tA(y) ? Vf.parse(i.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Eo(B, d, !1)));
                }
              } else if (c.name === "counters") {
                var h = c.values.filter(Yr), w = h[0], m = h[1], y = h[2];
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
          var u = r === ji.BEFORE ? " " + jf : " " + Jf;
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
var F2 = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(MC, "true"), A.body.appendChild(t), t;
}, U2 = function(A) {
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
}, E2 = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(U2));
}, I2 = function(A) {
  return new Promise(function(e, t) {
    var n = A.contentWindow;
    if (!n)
      return t("No window assigned for iframe");
    var r = n.document;
    n.onload = A.onload = function() {
      n.onload = A.onload = null;
      var i = setInterval(function() {
        r.body.childNodes.length > 0 && r.readyState === "complete" && (clearInterval(i), e(A));
      }, 50);
    };
  });
}, H2 = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ac = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var n = A.item(t);
    H2.indexOf(n) === -1 && e.style.setProperty(n, A.getPropertyValue(n));
  }
  return e;
}, x2 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, S2 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, L2 = function(A) {
  var e = A[0], t = A[1], n = A[2];
  e.scrollLeft = t, e.scrollTop = n;
}, b2 = ":before", T2 = ":after", jf = "___html2canvas___pseudoelement_before", Jf = "___html2canvas___pseudoelement_after", Dh = `{
    content: "" !important;
    display: none !important;
}`, k2 = function(A) {
  O2(A, "." + jf + b2 + Dh + `
         .` + Jf + T2 + Dh);
}, O2 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var n = t.createElement("style");
    n.textContent = e, A.appendChild(n);
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
), D2 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (tc(e) || M2(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return YA(this, void 0, void 0, function() {
        var t, n, r, i, o = this;
        return VA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = PC.isSameOrigin(e), n = !ec(e) && this._options.useCORS === !0 && RA.SUPPORT_CORS_IMAGES && !t, r = !ec(e) && !t && !tc(e) && typeof this._options.proxy == "string" && RA.SUPPORT_CORS_XHR && !n, !t && this._options.allowTaint === !1 && !ec(e) && !tc(e) && !r && !n ? [
                2
                /*return*/
              ] : (i = e, r ? [4, this.proxy(i)] : [3, 2]);
            case 1:
              i = a.sent(), a.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(s, l) {
                var u = new Image();
                u.onload = function() {
                  return s(u);
                }, u.onerror = l, (P2(i) || n) && (u.crossOrigin = "anonymous"), u.src = i, u.complete === !0 && setTimeout(function() {
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
      var t = this, n = this._options.proxy;
      if (!n)
        throw new Error("No proxy defined");
      var r = e.substring(0, 256);
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
            o("Failed to proxy resource " + r + " with status code " + s.status);
        }, s.onerror = o;
        var l = n.indexOf("?") > -1 ? "&" : "?";
        if (s.open("GET", "" + n + l + "url=" + encodeURIComponent(e) + "&responseType=" + a), a !== "text" && s instanceof XMLHttpRequest && (s.responseType = a), t._options.imageTimeout) {
          var u = t._options.imageTimeout;
          s.timeout = u, s.ontimeout = function() {
            return o("Timed out (" + u + "ms) proxying " + r);
          };
        }
        s.send();
      });
    }, A;
  }()
), K2 = /^data:image\/svg\+xml/i, R2 = /^data:image\/.*;base64,/i, N2 = /^data:image\/.*/i, M2 = function(A) {
  return RA.SUPPORT_SVG_DRAWING || !_2(A);
}, ec = function(A) {
  return N2.test(A);
}, P2 = function(A) {
  return R2.test(A);
}, tc = function(A) {
  return A.substr(0, 4) === "blob";
}, _2 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || K2.test(A);
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
), nr = function(A, e, t) {
  return new b(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, Na = (
  /** @class */
  function() {
    function A(e, t, n, r) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = n, this.end = r;
    }
    return A.prototype.subdivide = function(e, t) {
      var n = nr(this.start, this.startControl, e), r = nr(this.startControl, this.endControl, e), i = nr(this.endControl, this.end, e), o = nr(n, r, e), a = nr(r, i, e), s = nr(o, a, e);
      return t ? new A(this.start, n, o, s) : new A(s, a, i, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), Qe = function(A) {
  return A.type === 1;
}, G2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, n = e.bounds, r = xi(t.borderTopLeftRadius, n.width, n.height), i = r[0], o = r[1], a = xi(t.borderTopRightRadius, n.width, n.height), s = a[0], l = a[1], u = xi(t.borderBottomRightRadius, n.width, n.height), c = u[0], f = u[1], g = xi(t.borderBottomLeftRadius, n.width, n.height), p = g[0], w = g[1], y = [];
      y.push((i + s) / n.width), y.push((p + c) / n.width), y.push((o + w) / n.height), y.push((l + f) / n.height);
      var B = Math.max.apply(Math, y);
      B > 1 && (i /= B, o /= B, s /= B, l /= B, c /= B, f /= B, p /= B, w /= B);
      var d = n.width - s, h = n.height - f, m = n.width - c, C = n.height - w, v = t.borderTopWidth, F = t.borderRightWidth, U = t.borderBottomWidth, E = t.borderLeftWidth, S = rA(t.paddingTop, e.bounds.width), P = rA(t.paddingRight, e.bounds.width), N = rA(t.paddingBottom, e.bounds.width), D = rA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? cA(n.left + E / 3, n.top + v / 3, i - E / 3, o - v / 3, AA.TOP_LEFT) : new b(n.left + E / 3, n.top + v / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? cA(n.left + d, n.top + v / 3, s - F / 3, l - v / 3, AA.TOP_RIGHT) : new b(n.left + n.width - F / 3, n.top + v / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? cA(n.left + m, n.top + h, c - F / 3, f - U / 3, AA.BOTTOM_RIGHT) : new b(n.left + n.width - F / 3, n.top + n.height - U / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || w > 0 ? cA(n.left + E / 3, n.top + C, p - E / 3, w - U / 3, AA.BOTTOM_LEFT) : new b(n.left + E / 3, n.top + n.height - U / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? cA(n.left + E * 2 / 3, n.top + v * 2 / 3, i - E * 2 / 3, o - v * 2 / 3, AA.TOP_LEFT) : new b(n.left + E * 2 / 3, n.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? cA(n.left + d, n.top + v * 2 / 3, s - F * 2 / 3, l - v * 2 / 3, AA.TOP_RIGHT) : new b(n.left + n.width - F * 2 / 3, n.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? cA(n.left + m, n.top + h, c - F * 2 / 3, f - U * 2 / 3, AA.BOTTOM_RIGHT) : new b(n.left + n.width - F * 2 / 3, n.top + n.height - U * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || w > 0 ? cA(n.left + E * 2 / 3, n.top + C, p - E * 2 / 3, w - U * 2 / 3, AA.BOTTOM_LEFT) : new b(n.left + E * 2 / 3, n.top + n.height - U * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? cA(n.left + E / 2, n.top + v / 2, i - E / 2, o - v / 2, AA.TOP_LEFT) : new b(n.left + E / 2, n.top + v / 2), this.topRightBorderStroke = i > 0 || o > 0 ? cA(n.left + d, n.top + v / 2, s - F / 2, l - v / 2, AA.TOP_RIGHT) : new b(n.left + n.width - F / 2, n.top + v / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? cA(n.left + m, n.top + h, c - F / 2, f - U / 2, AA.BOTTOM_RIGHT) : new b(n.left + n.width - F / 2, n.top + n.height - U / 2), this.bottomLeftBorderStroke = p > 0 || w > 0 ? cA(n.left + E / 2, n.top + C, p - E / 2, w - U / 2, AA.BOTTOM_LEFT) : new b(n.left + E / 2, n.top + n.height - U / 2), this.topLeftBorderBox = i > 0 || o > 0 ? cA(n.left, n.top, i, o, AA.TOP_LEFT) : new b(n.left, n.top), this.topRightBorderBox = s > 0 || l > 0 ? cA(n.left + d, n.top, s, l, AA.TOP_RIGHT) : new b(n.left + n.width, n.top), this.bottomRightBorderBox = c > 0 || f > 0 ? cA(n.left + m, n.top + h, c, f, AA.BOTTOM_RIGHT) : new b(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = p > 0 || w > 0 ? cA(n.left, n.top + C, p, w, AA.BOTTOM_LEFT) : new b(n.left, n.top + n.height), this.topLeftPaddingBox = i > 0 || o > 0 ? cA(n.left + E, n.top + v, Math.max(0, i - E), Math.max(0, o - v), AA.TOP_LEFT) : new b(n.left + E, n.top + v), this.topRightPaddingBox = s > 0 || l > 0 ? cA(n.left + Math.min(d, n.width - F), n.top + v, d > n.width + F ? 0 : Math.max(0, s - F), Math.max(0, l - v), AA.TOP_RIGHT) : new b(n.left + n.width - F, n.top + v), this.bottomRightPaddingBox = c > 0 || f > 0 ? cA(n.left + Math.min(m, n.width - E), n.top + Math.min(h, n.height - U), Math.max(0, c - F), Math.max(0, f - U), AA.BOTTOM_RIGHT) : new b(n.left + n.width - F, n.top + n.height - U), this.bottomLeftPaddingBox = p > 0 || w > 0 ? cA(n.left + E, n.top + Math.min(C, n.height - U), Math.max(0, p - E), Math.max(0, w - U), AA.BOTTOM_LEFT) : new b(n.left + E, n.top + n.height - U), this.topLeftContentBox = i > 0 || o > 0 ? cA(n.left + E + D, n.top + v + S, Math.max(0, i - (E + D)), Math.max(0, o - (v + S)), AA.TOP_LEFT) : new b(n.left + E + D, n.top + v + S), this.topRightContentBox = s > 0 || l > 0 ? cA(n.left + Math.min(d, n.width + E + D), n.top + v + S, d > n.width + E + D ? 0 : s - E + D, l - (v + S), AA.TOP_RIGHT) : new b(n.left + n.width - (F + P), n.top + v + S), this.bottomRightContentBox = c > 0 || f > 0 ? cA(n.left + Math.min(m, n.width - (E + D)), n.top + Math.min(h, n.height + v + S), Math.max(0, c - (F + P)), f - (U + N), AA.BOTTOM_RIGHT) : new b(n.left + n.width - (F + P), n.top + n.height - (U + N)), this.bottomLeftContentBox = p > 0 || w > 0 ? cA(n.left + E + D, n.top + C, Math.max(0, p - (E + D)), w - (U + N), AA.BOTTOM_LEFT) : new b(n.left + E + D, n.top + n.height - (U + N));
    }
    return A;
  }()
), AA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(AA || (AA = {}));
var cA = function(A, e, t, n, r) {
  var i = 4 * ((Math.sqrt(2) - 1) / 3), o = t * i, a = n * i, s = A + t, l = e + n;
  switch (r) {
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
}, V2 = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, nl = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, $2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, n) {
      this.offsetX = e, this.offsetY = t, this.matrix = n, this.type = 0, this.target = 6;
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
), W2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), X2 = function(A) {
  return A.type === 0;
}, _C = function(A) {
  return A.type === 1;
}, z2 = function(A) {
  return A.type === 2;
}, Kh = function(A, e) {
  return A.length === e.length ? A.some(function(t, n) {
    return t === e[n];
  }) : !1;
}, Y2 = function(A, e, t, n, r) {
  return A.map(function(i, o) {
    switch (o) {
      case 0:
        return i.add(e, t);
      case 1:
        return i.add(e + n, t);
      case 2:
        return i.add(e + n, t + r);
      case 3:
        return i.add(e, t + r);
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
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new G2(this.container), this.container.styles.opacity < 1 && this.effects.push(new W2(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var n = this.container.bounds.left + this.container.styles.transformOrigin[0].number, r = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new $2(n, r, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var o = tl(this.curves), a = nl(this.curves);
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
      ].indexOf(this.container.styles.position) === -1, n = this.parent, r = this.effects.slice(0); n; ) {
        var i = n.effects.filter(function(s) {
          return !_C(s);
        });
        if (t || n.container.styles.position !== 0 || !n.parent) {
          if (r.unshift.apply(r, i), t = [
            2,
            3
            /* FIXED */
          ].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0) {
            var o = tl(n.curves), a = nl(n.curves);
            Kh(o, a) || r.unshift(new Ma(
              a,
              6
              /* CONTENT */
            ));
          }
        } else
          r.unshift.apply(r, i);
        n = n.parent;
      }
      return r.filter(function(s) {
        return SA(s.target, e);
      });
    }, A;
  }()
), Zf = function(A, e, t, n) {
  A.container.elements.forEach(function(r) {
    var i = SA(
      r.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), o = SA(
      r.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), a = new VC(r, A);
    SA(
      r.styles.display,
      2048
      /* LIST_ITEM */
    ) && n.push(a);
    var s = SA(
      r.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : n;
    if (i || o) {
      var l = i || r.styles.isPositioned() ? t : e, u = new GC(a);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        var c = r.styles.zIndex.order;
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
        r.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
      Zf(a, u, i ? u : t, s);
    } else
      r.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Zf(a, e, t, s);
    SA(
      r.flags,
      8
      /* IS_LIST_OWNER */
    ) && $C(r, s);
  });
}, $C = function(A, e) {
  for (var t = A instanceof Xf ? A.start : 1, n = A instanceof Xf ? A.reversed : !1, r = 0; r < e.length; r++) {
    var i = e[r];
    i.container instanceof HC && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Eo(t, i.container.styles.listStyleType, !0), t += n ? -1 : 1;
  }
}, j2 = function(A) {
  var e = new VC(A, null), t = new GC(e), n = [];
  return Zf(e, t, t, n), $C(e.container, n), t;
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
}, J2 = function(A, e) {
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
}, Z2 = function(A, e) {
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
}, q2 = function(A, e) {
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
}, Ue = function(A, e, t, n) {
  var r = [];
  return Qe(A) ? r.push(A.subdivide(0.5, !1)) : r.push(A), Qe(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), Qe(n) ? r.push(n.subdivide(0.5, !0).reverse()) : r.push(n), Qe(e) ? r.push(e.subdivide(0.5, !1).reverse()) : r.push(e), r;
}, WC = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, rl = function(A) {
  var e = A.styles, t = A.bounds, n = rA(e.paddingLeft, t.width), r = rA(e.paddingRight, t.width), i = rA(e.paddingTop, t.width), o = rA(e.paddingBottom, t.width);
  return t.add(n + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + i + o));
}, AT = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? rl(e) : WC(e);
}, eT = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? rl(e) : WC(e);
}, nc = function(A, e, t) {
  var n = AT(or(A.styles.backgroundOrigin, e), A), r = eT(or(A.styles.backgroundClip, e), A), i = tT(or(A.styles.backgroundSize, e), t, n), o = i[0], a = i[1], s = xi(or(A.styles.backgroundPosition, e), n.width - o, n.height - a), l = nT(or(A.styles.backgroundRepeat, e), s, i, n, r), u = Math.round(n.left + s[0]), c = Math.round(n.top + s[1]);
  return [l, u, c, o, a];
}, rr = function(A) {
  return tA(A) && A.value === br.AUTO;
}, _a = function(A) {
  return typeof A == "number";
}, tT = function(A, e, t) {
  var n = e[0], r = e[1], i = e[2], o = A[0], a = A[1];
  if (!o)
    return [0, 0];
  if (IA(o) && a && IA(a))
    return [rA(o, t.width), rA(a, t.height)];
  var s = _a(i);
  if (tA(o) && (o.value === br.CONTAIN || o.value === br.COVER)) {
    if (_a(i)) {
      var l = t.width / t.height;
      return l < i != (o.value === br.COVER) ? [t.width, t.width / i] : [t.height * i, t.height];
    }
    return [t.width, t.height];
  }
  var u = _a(n), c = _a(r), f = u || c;
  if (rr(o) && (!a || rr(a))) {
    if (u && c)
      return [n, r];
    if (!s && !f)
      return [t.width, t.height];
    if (f && s) {
      var g = u ? n : r * i, p = c ? r : n / i;
      return [g, p];
    }
    var w = u ? n : t.width, y = c ? r : t.height;
    return [w, y];
  }
  if (s) {
    var B = 0, d = 0;
    return IA(o) ? B = rA(o, t.width) : IA(a) && (d = rA(a, t.height)), rr(o) ? B = d * i : (!a || rr(a)) && (d = B / i), [B, d];
  }
  var h = null, m = null;
  if (IA(o) ? h = rA(o, t.width) : a && IA(a) && (m = rA(a, t.height)), h !== null && (!a || rr(a)) && (m = u && c ? h / n * r : t.height), m !== null && rr(o) && (h = u && c ? m / r * n : t.width), h !== null && m !== null)
    return [h, m];
  throw new Error("Unable to calculate background-size for element");
}, or = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, nT = function(A, e, t, n, r) {
  var i = e[0], o = e[1], a = t[0], s = t[1];
  switch (A) {
    case 2:
      return [
        new b(Math.round(n.left), Math.round(n.top + o)),
        new b(Math.round(n.left + n.width), Math.round(n.top + o)),
        new b(Math.round(n.left + n.width), Math.round(s + n.top + o)),
        new b(Math.round(n.left), Math.round(s + n.top + o))
      ];
    case 3:
      return [
        new b(Math.round(n.left + i), Math.round(n.top)),
        new b(Math.round(n.left + i + a), Math.round(n.top)),
        new b(Math.round(n.left + i + a), Math.round(n.height + n.top)),
        new b(Math.round(n.left + i), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new b(Math.round(n.left + i), Math.round(n.top + o)),
        new b(Math.round(n.left + i + a), Math.round(n.top + o)),
        new b(Math.round(n.left + i + a), Math.round(n.top + o + s)),
        new b(Math.round(n.left + i), Math.round(n.top + o + s))
      ];
    default:
      return [
        new b(Math.round(r.left), Math.round(r.top)),
        new b(Math.round(r.left + r.width), Math.round(r.top)),
        new b(Math.round(r.left + r.width), Math.round(r.height + r.top)),
        new b(Math.round(r.left), Math.round(r.height + r.top))
      ];
  }
}, rT = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Nh = "Hidden Text", iT = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var n = this._document.createElement("div"), r = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      n.style.visibility = "hidden", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", o.appendChild(n), r.src = rT, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Nh)), n.appendChild(i), n.appendChild(r);
      var a = r.offsetTop - i.offsetTop + 2;
      n.removeChild(i), n.appendChild(this._document.createTextNode(Nh)), n.style.lineHeight = "normal", r.style.verticalAlign = "super";
      var s = r.offsetTop - n.offsetTop + 2;
      return o.removeChild(n), { baseline: a, middle: s };
    }, A.prototype.getMetrics = function(e, t) {
      var n = e + " " + t;
      return typeof this._data[n] > "u" && (this._data[n] = this.parseMetrics(e, t)), this._data[n];
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
), oT = 1e4, aT = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r._activeEffects = [], r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), n.canvas || (r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px"), r.fontMetrics = new iT(document), r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.ctx.textBaseline = "bottom", r._activeEffects = [], r.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), r;
    }
    return e.prototype.applyEffects = function(t) {
      for (var n = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(r) {
        return n.applyEffect(r);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), z2(t) && (this.ctx.globalAlpha = t.opacity), X2(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), _C(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return YA(this, void 0, void 0, function() {
        var n;
        return VA(this, function(r) {
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
      return YA(this, void 0, void 0, function() {
        return VA(this, function(n) {
          switch (n.label) {
            case 0:
              if (SA(
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
      var i = this;
      if (n === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + r);
      else {
        var o = xB(t.text);
        o.reduce(function(a, s) {
          return i.ctx.fillText(s, a, t.bounds.top + r), a + i.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var n = t.fontVariant.filter(function(o) {
        return o === "normal" || o === "small-caps";
      }).join(""), r = fT(t.fontFamily).join(", "), i = _o(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, n, t.fontWeight, i, r].join(" "),
        r,
        i
      ];
    }, e.prototype.renderTextNode = function(t, n) {
      return YA(this, void 0, void 0, function() {
        var r, i, o, a, s, l, u, c, f = this;
        return VA(this, function(g) {
          return r = this.createFontStyle(n), i = r[0], o = r[1], a = r[2], this.ctx.font = i, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(o, a), l = s.baseline, u = s.middle, c = n.paintOrder, t.textBounds.forEach(function(p) {
            c.forEach(function(w) {
              switch (w) {
                case 0:
                  f.ctx.fillStyle = TA(n.color), f.renderTextWithLetterSpacing(p, n.letterSpacing, l);
                  var y = n.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(B) {
                    f.ctx.shadowColor = TA(B.color), f.ctx.shadowOffsetX = B.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = B.offsetY.number * f.options.scale, f.ctx.shadowBlur = B.blur.number, f.renderTextWithLetterSpacing(p, n.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), n.textDecorationLine.length && (f.ctx.fillStyle = TA(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(B) {
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
                  n.webkitTextStrokeWidth && p.text.trim().length && (f.ctx.strokeStyle = TA(n.webkitTextStrokeColor), f.ctx.lineWidth = n.webkitTextStrokeWidth, f.ctx.lineJoin = window.chrome ? "miter" : "round", f.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), f.ctx.strokeStyle = "", f.ctx.lineWidth = 0, f.ctx.lineJoin = "miter";
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
        var i = rl(t), o = nl(n);
        this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(r, 0, 0, t.intrinsicWidth, t.intrinsicHeight, i.left, i.top, i.width, i.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return YA(this, void 0, void 0, function() {
        var n, r, i, o, a, s, d, d, l, u, c, f, m, g, p, C, w, y, B, d, h, m, C;
        return VA(this, function(v) {
          switch (v.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), n = t.container, r = t.curves, i = n.styles, o = 0, a = n.textNodes, v.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [4, this.renderTextNode(s, i)]) : [3, 4];
            case 2:
              v.sent(), v.label = 3;
            case 3:
              return o++, [3, 1];
            case 4:
              if (!(n instanceof UC)) return [3, 8];
              v.label = 5;
            case 5:
              return v.trys.push([5, 7, , 8]), [4, this.context.cache.match(n.src)];
            case 6:
              return d = v.sent(), this.renderReplacedElement(n, r, d), [3, 8];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + n.src), [3, 8];
            case 8:
              if (n instanceof EC && this.renderReplacedElement(n, r, n.canvas), !(n instanceof IC)) return [3, 12];
              v.label = 9;
            case 9:
              return v.trys.push([9, 11, , 12]), [4, this.context.cache.match(n.svg)];
            case 10:
              return d = v.sent(), this.renderReplacedElement(n, r, d), [3, 12];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
            case 12:
              return n instanceof LC && n.tree ? (l = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: n.backgroundColor,
                x: 0,
                y: 0,
                width: n.width,
                height: n.height
              }), [4, l.render(n.tree)]) : [3, 14];
            case 13:
              u = v.sent(), n.width && n.height && this.ctx.drawImage(u, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), v.label = 14;
            case 14:
              if (n instanceof SB && (c = Math.min(n.bounds.width, n.bounds.height), n.type === Zs ? n.checked && (this.ctx.save(), this.path([
                new b(n.bounds.left + c * 0.39363, n.bounds.top + c * 0.79),
                new b(n.bounds.left + c * 0.16, n.bounds.top + c * 0.5549),
                new b(n.bounds.left + c * 0.27347, n.bounds.top + c * 0.44071),
                new b(n.bounds.left + c * 0.39694, n.bounds.top + c * 0.5649),
                new b(n.bounds.left + c * 0.72983, n.bounds.top + c * 0.23),
                new b(n.bounds.left + c * 0.84, n.bounds.top + c * 0.34085),
                new b(n.bounds.left + c * 0.39363, n.bounds.top + c * 0.79)
              ]), this.ctx.fillStyle = TA(Eh), this.ctx.fill(), this.ctx.restore()) : n.type === qs && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + c / 2, n.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = TA(Eh), this.ctx.fill(), this.ctx.restore())), sT(n) && n.value.length) {
                switch (f = this.createFontStyle(i), m = f[0], g = f[1], p = this.fontMetrics.getMetrics(m, g).baseline, this.ctx.font = m, this.ctx.fillStyle = TA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = uT(n.styles.textAlign), C = rl(n), w = 0, n.styles.textAlign) {
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
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Yi(n.value, y), i.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!SA(
                n.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (n.styles.listStyleImage === null) return [3, 19];
              if (B = n.styles.listStyleImage, B.type !== 0) return [3, 18];
              d = void 0, h = B.url, v.label = 15;
            case 15:
              return v.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)];
            case 16:
              return d = v.sent(), this.ctx.drawImage(d, n.bounds.left - (d.width + 10), n.bounds.top), [3, 18];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + h), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && n.styles.listStyleType !== -1 && (m = this.createFontStyle(i)[0], this.ctx.font = m, this.ctx.fillStyle = TA(i.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", C = new Qt(n.bounds.left, n.bounds.top + rA(n.styles.paddingTop, n.bounds.width), n.bounds.width, lh(i.lineHeight, i.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Yi(t.listValue, C), i.letterSpacing, lh(i.lineHeight, i.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
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
        var n, r, B, i, o, B, a, s, B, l, u, B, c, f, B, g, p, B, w, y, B;
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
              d.sent(), n = 0, r = t.negativeZIndex, d.label = 2;
            case 2:
              return n < r.length ? (B = r[n], [4, this.renderStack(B)]) : [3, 5];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return n++, [3, 2];
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
      var n = this;
      t.forEach(function(r, i) {
        var o = Qe(r) ? r.start : r;
        i === 0 ? n.ctx.moveTo(o.x, o.y) : n.ctx.lineTo(o.x, o.y), Qe(r) && n.ctx.bezierCurveTo(r.startControl.x, r.startControl.y, r.endControl.x, r.endControl.y, r.end.x, r.end.y);
      });
    }, e.prototype.renderRepeat = function(t, n, r, i) {
      this.path(t), this.ctx.fillStyle = n, this.ctx.translate(r, i), this.ctx.fill(), this.ctx.translate(-r, -i);
    }, e.prototype.resizeImage = function(t, n, r) {
      var i;
      if (t.width === n && t.height === r)
        return t;
      var o = (i = this.canvas.ownerDocument) !== null && i !== void 0 ? i : document, a = o.createElement("canvas");
      a.width = Math.max(1, n), a.height = Math.max(1, r);
      var s = a.getContext("2d");
      return s.drawImage(t, 0, 0, t.width, t.height, 0, 0, n, r), a;
    }, e.prototype.renderBackgroundImage = function(t) {
      return YA(this, void 0, void 0, function() {
        var n, r, i, o, a, s;
        return VA(this, function(l) {
          switch (l.label) {
            case 0:
              n = t.styles.backgroundImage.length - 1, r = function(u) {
                var c, f, g, S, $, K, D, V, U, p, S, $, K, D, V, w, y, B, d, h, m, C, v, F, U, E, S, P, N, D, V, J, $, K, I, x, L, M, X, dA, BA, gA;
                return VA(this, function(nA) {
                  switch (nA.label) {
                    case 0:
                      if (u.type !== 0) return [3, 5];
                      c = void 0, f = u.url, nA.label = 1;
                    case 1:
                      return nA.trys.push([1, 3, , 4]), [4, i.context.cache.match(f)];
                    case 2:
                      return c = nA.sent(), [3, 4];
                    case 3:
                      return nA.sent(), i.context.logger.error("Error loading background-image " + f), [3, 4];
                    case 4:
                      return c && (g = nc(t, n, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), S = g[0], $ = g[1], K = g[2], D = g[3], V = g[4], U = i.ctx.createPattern(i.resizeImage(c, D, V), "repeat"), i.renderRepeat(S, U, $, K)), [3, 6];
                    case 5:
                      XS(u) ? (p = nc(t, n, [null, null, null]), S = p[0], $ = p[1], K = p[2], D = p[3], V = p[4], w = _S(u.angle, D, V), y = w[0], B = w[1], d = w[2], h = w[3], m = w[4], C = document.createElement("canvas"), C.width = D, C.height = V, v = C.getContext("2d"), F = v.createLinearGradient(B, h, d, m), ah(u.stops, y).forEach(function(zA) {
                        return F.addColorStop(zA.stop, TA(zA.color));
                      }), v.fillStyle = F, v.fillRect(0, 0, D, V), D > 0 && V > 0 && (U = i.ctx.createPattern(C, "repeat"), i.renderRepeat(S, U, $, K))) : zS(u) && (E = nc(t, n, [
                        null,
                        null,
                        null
                      ]), S = E[0], P = E[1], N = E[2], D = E[3], V = E[4], J = u.position.length === 0 ? [EB] : u.position, $ = rA(J[0], D), K = rA(J[J.length - 1], V), I = GS(u, $, K, D, V), x = I[0], L = I[1], x > 0 && L > 0 && (M = i.ctx.createRadialGradient(P + $, N + K, 0, P + $, N + K, x), ah(u.stops, x * 2).forEach(function(zA) {
                        return M.addColorStop(zA.stop, TA(zA.color));
                      }), i.path(S), i.ctx.fillStyle = M, x !== L ? (X = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, BA = L / x, gA = 1 / BA, i.ctx.save(), i.ctx.translate(X, dA), i.ctx.transform(1, 0, 0, BA, 0, 0), i.ctx.translate(-X, -dA), i.ctx.fillRect(P, gA * (N - dA) + dA, D, V * gA), i.ctx.restore()) : i.ctx.fill())), nA.label = 6;
                    case 6:
                      return n--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, i = this, o = 0, a = t.styles.backgroundImage.slice(0).reverse(), l.label = 1;
            case 1:
              return o < a.length ? (s = a[o], [5, r(s)]) : [3, 4];
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
    }, e.prototype.renderSolidBorder = function(t, n, r) {
      return YA(this, void 0, void 0, function() {
        return VA(this, function(i) {
          return this.path(Rh(r, n)), this.ctx.fillStyle = TA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, n, r, i) {
      return YA(this, void 0, void 0, function() {
        var o, a;
        return VA(this, function(s) {
          switch (s.label) {
            case 0:
              return n < 3 ? [4, this.renderSolidBorder(t, r, i)] : [3, 2];
            case 1:
              return s.sent(), [
                2
                /*return*/
              ];
            case 2:
              return o = J2(i, r), this.path(o), this.ctx.fillStyle = TA(t), this.ctx.fill(), a = Z2(i, r), this.path(a), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return YA(this, void 0, void 0, function() {
        var n, r, i, o, a, s, l, u, c = this;
        return VA(this, function(f) {
          switch (f.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), n = t.container.styles, r = !An(n.backgroundColor) || n.backgroundImage.length, i = [
                { style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth },
                { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth },
                { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth },
                { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }
              ], o = lT(or(n.backgroundClip, 0), t.curves), r || n.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), An(n.backgroundColor) || (this.ctx.fillStyle = TA(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(g) {
                c.ctx.save();
                var p = tl(t.curves), w = g.inset ? 0 : oT, y = Y2(p, -w + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (c.path(p), c.ctx.clip(), c.mask(y)) : (c.mask(p), c.ctx.clip(), c.path(y)), c.ctx.shadowOffsetX = g.offsetX.number + w, c.ctx.shadowOffsetY = g.offsetY.number, c.ctx.shadowColor = TA(g.color), c.ctx.shadowBlur = g.blur.number, c.ctx.fillStyle = g.inset ? TA(g.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
              }), f.label = 2;
            case 2:
              a = 0, s = 0, l = i, f.label = 3;
            case 3:
              return s < l.length ? (u = l[s], u.style !== 0 && !An(u.color) && u.width > 0 ? u.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
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
    }, e.prototype.renderDashedDottedBorder = function(t, n, r, i, o) {
      return YA(this, void 0, void 0, function() {
        var a, s, l, u, c, f, g, p, w, y, B, d, h, m, C, v, C, v;
        return VA(this, function(F) {
          return this.ctx.save(), a = q2(i, r), s = Rh(i, r), o === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, u = s[0].start.y) : (l = s[0].x, u = s[0].y), Qe(s[1]) ? (c = s[1].end.x, f = s[1].end.y) : (c = s[1].x, f = s[1].y), r === 0 || r === 2 ? g = Math.abs(l - c) : g = Math.abs(u - f), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = n < 3 ? n * 3 : n * 2, w = n < 3 ? n * 2 : n, o === 3 && (p = n, w = n), y = !0, g <= p * 2 ? y = !1 : g <= p * 2 + w ? (B = g / (2 * p + w), p *= B, w *= B) : (d = Math.floor((g + w) / (p + w)), h = (g - d * p) / (d - 1), m = (g - (d + 1) * p) / d, w = m <= 0 || Math.abs(w - h) < Math.abs(w - m) ? h : m), y && (o === 3 ? this.ctx.setLineDash([0, p + w]) : this.ctx.setLineDash([p, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = n * 2 + 1.1, this.ctx.strokeStyle = TA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Qe(s[0]) && (C = s[3], v = s[0], this.ctx.beginPath(), this.formatPath([new b(C.end.x, C.end.y), new b(v.start.x, v.start.y)]), this.ctx.stroke()), Qe(s[1]) && (C = s[1], v = s[2], this.ctx.beginPath(), this.formatPath([new b(C.end.x, C.end.y), new b(v.start.x, v.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var n;
        return VA(this, function(r) {
          switch (r.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = j2(t), [4, this.renderStack(n)];
            case 1:
              return r.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(XC)
), sT = function(A) {
  return A instanceof SC || A instanceof xC ? !0 : A instanceof SB && A.type !== qs && A.type !== Zs;
}, lT = function(A, e) {
  switch (A) {
    case 0:
      return tl(e);
    case 2:
      return V2(e);
    case 1:
    default:
      return nl(e);
  }
}, uT = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, cT = ["-apple-system", "system-ui"], fT = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return cT.indexOf(e) === -1;
  }) : A;
}, dT = (
  /** @class */
  function(A) {
    Ve(e, A);
    function e(t, n) {
      var r = A.call(this, t, n) || this;
      return r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), r.options = n, r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px", r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), r;
    }
    return e.prototype.render = function(t) {
      return YA(this, void 0, void 0, function() {
        var n, r;
        return VA(this, function(i) {
          switch (i.label) {
            case 0:
              return n = Wf(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, BT(n)];
            case 1:
              return r = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(XC)
), BT = function(A) {
  return new Promise(function(e, t) {
    var n = new Image();
    n.onload = function() {
      e(n);
    }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, gT = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, n = e.enabled;
      this.id = t, this.enabled = n, this.start = Date.now();
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
), pT = (
  /** @class */
  function() {
    function A(e, t) {
      var n;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new gT({ id: this.instanceName, enabled: e.logging }), this.cache = (n = e.cache) !== null && n !== void 0 ? n : new D2(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), hT = function(A, e) {
  return e === void 0 && (e = {}), wT(A, e);
};
typeof window < "u" && PC.setContext(window);
var wT = function(A, e) {
  return YA(void 0, void 0, void 0, function() {
    var t, n, r, i, o, a, s, l, u, c, f, g, p, w, y, B, d, h, m, C, F, v, F, U, E, S, P, N, D, V, J, $, K, I, x, L, M, X, dA, BA;
    return VA(this, function(gA) {
      switch (gA.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (n = t.defaultView, !n)
            throw new Error("Document is not attached to a Window");
          return r = {
            allowTaint: (U = e.allowTaint) !== null && U !== void 0 ? U : !1,
            imageTimeout: (E = e.imageTimeout) !== null && E !== void 0 ? E : 15e3,
            proxy: e.proxy,
            useCORS: (S = e.useCORS) !== null && S !== void 0 ? S : !1
          }, i = Lf({ logging: (P = e.logging) !== null && P !== void 0 ? P : !0, cache: e.cache }, r), o = {
            windowWidth: (N = e.windowWidth) !== null && N !== void 0 ? N : n.innerWidth,
            windowHeight: (D = e.windowHeight) !== null && D !== void 0 ? D : n.innerHeight,
            scrollX: (V = e.scrollX) !== null && V !== void 0 ? V : n.pageXOffset,
            scrollY: (J = e.scrollY) !== null && J !== void 0 ? J : n.pageYOffset
          }, a = new Qt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new pT(i, a), l = ($ = e.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, u = {
            allowTaint: (K = e.allowTaint) !== null && K !== void 0 ? K : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), c = new Oh(s, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = gA.sent(), p = LB(f) || m2(f) ? Y4(f.ownerDocument) : _l(s, f), w = p.width, y = p.height, B = p.left, d = p.top, h = mT(s, f, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: h,
            scale: (x = (I = e.scale) !== null && I !== void 0 ? I : n.devicePixelRatio) !== null && x !== void 0 ? x : 1,
            x: ((L = e.x) !== null && L !== void 0 ? L : 0) + B,
            y: ((M = e.y) !== null && M !== void 0 ? M : 0) + d,
            width: (X = e.width) !== null && X !== void 0 ? X : Math.ceil(w),
            height: (dA = e.height) !== null && dA !== void 0 ? dA : Math.ceil(y)
          }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), F = new dT(s, m), [4, F.render(f)]) : [3, 3];
        case 2:
          return C = gA.sent(), [3, 5];
        case 3:
          return s.logger.debug("Document cloned, element located at " + B + "," + d + " with size " + w + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), v = TC(s, f), h === v.styles.backgroundColor && (v.styles.backgroundColor = Bt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new aT(s, m), [4, F.render(v)];
        case 4:
          C = gA.sent(), gA.label = 5;
        case 5:
          return (!((BA = e.removeContainer) !== null && BA !== void 0) || BA) && (Oh.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [2, C];
      }
    });
  });
}, mT = function(A, e, t) {
  var n = e.ownerDocument, r = n.documentElement ? Xi(A, getComputedStyle(n.documentElement).backgroundColor) : Bt.TRANSPARENT, i = n.body ? Xi(A, getComputedStyle(n.body).backgroundColor) : Bt.TRANSPARENT, o = typeof t == "string" ? Xi(A, t) : t === null ? Bt.TRANSPARENT : 4294967295;
  return e === n.documentElement ? An(r) ? An(i) ? o : i : r : o;
};
const Mh = (A) => {
  const t = new DOMParser().parseFromString(
    A,
    "text/html"
  );
  t.querySelectorAll("script").forEach((r) => r.remove()), t.querySelectorAll("meta").forEach((r) => r.remove()), t.querySelectorAll("style").forEach((r) => r.remove()), t.querySelectorAll("*").forEach((r) => {
    r.childNodes.forEach((i) => {
      i.nodeType === Node.COMMENT_NODE && i.remove();
    });
  });
  const n = ["font", "center", "marquee"];
  return t.querySelectorAll("*").forEach((r) => {
    r.removeAttribute("style"), n.includes(r.tagName.toLowerCase()) && r.replaceWith(...Array.from(r.childNodes)), !r.innerHTML.trim() && r.nodeType === Node.ELEMENT_NODE && (r.tagName === "IMG" ? r.setAttribute("src", "") : r.tagName !== "INPUT" && r.tagName !== "TEXTAREA" && r.remove());
  }), t;
};
function vT(A) {
  return new XMLSerializer().serializeToString(A);
}
const CT = /* @__PURE__ */ new Set(["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA"]);
function zC(A, e) {
  A.childNodes.forEach((t) => {
    t instanceof HTMLElement && e(t) && zC(t, e);
  });
}
function QT(A, e, t, n) {
  var l;
  const r = {
    itemId: n,
    top: Math.round(e.top),
    left: Math.round(e.left),
    width: Math.round(e.width),
    height: Math.round(e.height),
    element: A
  }, i = t.backgroundColor;
  i && i !== "rgba(0, 0, 0, 0)" && (r.backgroundColor = i);
  const o = (l = A.textContent) == null ? void 0 : l.trim();
  o && (r.text = o);
  const a = (() => {
    if (A instanceof HTMLInputElement)
      return A.checked;
    const u = A.querySelector('input[type="checkbox"]');
    return u ? u.checked : null;
  })();
  a !== null && (r.checked = a);
  let s = A.parentElement;
  for (; s && s !== document.body && s.childElementCount === 1; ) {
    const u = s.getBoundingClientRect();
    if (u.left !== e.left || u.right !== e.right || u.top !== e.top || u.bottom !== e.bottom)
      break;
    if (!r.backgroundColor) {
      const c = window.getComputedStyle(s).backgroundColor;
      c && c !== "rgba(0, 0, 0, 0)" && (r.backgroundColor = c);
    }
    r.element = s, s = s.parentElement;
  }
  return r;
}
function yT() {
  const A = [];
  let e = 0;
  return zC(document.body, (t) => {
    if (t.attributes.getNamedItem("data-isgandalf"))
      return !1;
    const n = window.getComputedStyle(t), r = n.cursor;
    if (t.checkVisibility() && (CT.has(t.tagName) || t.onclick && !t.onclick.toString().endsWith("(){}") || r == "pointer" || r == "grab")) {
      const i = t.getBoundingClientRect();
      return i.width > 0 && i.height > 0 && A.push(QT(t, i, n, e++)), !1;
    }
    return !0;
  }), A;
}
async function FT({
  product: A,
  query: e,
  previousSteps: t,
  apiUrl: n,
  currentPlan: r
}) {
  var C;
  const i = vT(
    Mh(document.documentElement.outerHTML)
  ), o = yT(), a = await hT(document.body, {
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
  u.append("user_input", e), u.append("product", A), u.append("previous_steps_json", JSON.stringify(t)), u.append("screen_layout", l), r && u.append("current_plan", r), console.log(l), s && u.append("screenshot", s, "screenshot.png"), console.log(u);
  const f = await (await fetch(`${n}/gandalf`, {
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
const UT = Q.forwardRef(
  ({ state: A, currentQuery: e, onActivate: t, onCacnel: n, onAdvance: r }, i) => {
    const [o, a] = Q.useState(!1), s = Q.useRef(), [l, u] = Q.useState(!1);
    return Q.useImperativeHandle(i, () => ({
      showComplete: () => {
        a(!0), s.current && clearTimeout(s.current), s.current = setTimeout(() => {
          a(!1);
        }, 1e3);
      },
      showOption: () => {
        u(!0);
      }
    })), /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ G.jsx(
        "button",
        {
          className: Vv(UA.widgetButton, {
            [UA.loading]: A === "loading",
            [UA.waitingForUser]: A === "waitingForUser",
            [UA.withComplete]: o
          }),
          onMouseDown: (c) => {
            c.stopPropagation();
          },
          onPointerDown: (c) => {
            c.stopPropagation();
          },
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), A === "idle" ? t() : u((f) => !f);
          },
          "aria-label": "Toggle chat",
          "data-isgandalf": !0,
          children: /* @__PURE__ */ G.jsxs("div", { className: UA.buttonContentWrapper, children: [
            /* @__PURE__ */ G.jsx("div", { className: UA.buttonContent, children: "💬" }),
            /* @__PURE__ */ G.jsx("div", { className: UA.buttonContent, children: "✅" })
          ] })
        }
      ),
      l && A !== "idle" && /* @__PURE__ */ G.jsxs(
        "div",
        {
          className: UA.options,
          "data-isGandalf": !0,
          onMouseDown: (c) => {
            c.stopPropagation();
          },
          onPointerDown: (c) => {
            c.stopPropagation();
          },
          children: [
            /* @__PURE__ */ G.jsx("div", { className: UA.optionPane, children: e }),
            /* @__PURE__ */ G.jsxs("div", { className: UA.optionPane, children: [
              /* @__PURE__ */ G.jsxs("div", { className: UA.stateText, children: [
                A === "loading" ? "Loading..." : "Waiting for user action...",
                A === "waitingForUser" && /* @__PURE__ */ G.jsx(
                  "button",
                  {
                    className: UA.nextButton,
                    onClick: (c) => {
                      c.stopPropagation(), c.preventDefault(), r();
                    },
                    children: "▶"
                  }
                )
              ] }),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  className: UA.optionsButton,
                  onClick: (c) => {
                    c.preventDefault(), c.stopPropagation(), n(), u(!1);
                  },
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ G.jsx(
                "button",
                {
                  className: UA.optionsButton,
                  onClick: (c) => {
                    c.preventDefault(), c.stopPropagation(), u(!1);
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
let ET = 0;
function IT() {
  return ET++;
}
function HT() {
  return document.querySelector(".shimmering-loader") !== null;
}
function xT(A, e) {
  const t = new MutationObserver((n) => {
    n.some((r) => r.removedNodes.length > 0) && (document.contains(A) || (t.disconnect(), e()));
  });
  return t.observe(document.body, {
    childList: !0,
    subtree: !0
  }), t;
}
function Ph(A, e) {
  return e === A || e.contains(A);
}
function ST(A) {
  const e = Q.useRef(A);
  return e.current = A, Q.useCallback(() => e.current(), []);
}
function LT() {
  const A = Q.useRef(null);
  return {
    observe(e, t) {
      this.disconnect(), A.current = xT(e, t);
    },
    disconnect() {
      const e = A.current;
      e && e.disconnect();
    }
  };
}
const bT = ({
  productName: A,
  isWidgetVisible: e,
  apiUrl: t
}) => {
  var F, U;
  const [n, r] = Q.useState(""), i = Q.useRef(null), [o, a] = Q.useState("idle"), [s, l] = Q.useState(!1), [u, c] = Q.useState(""), f = Q.useRef(0), g = LT(), p = Q.useRef(null), w = Q.useRef(null), { refs: y, floatingStyles: B, middlewareData: d, placement: h } = F1({
    middleware: [a1(10), l1(), s1(), u1({ element: p })],
    whileElementsMounted: A1
  }), m = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[h.split("-")[0]] || "top", C = ST(() => {
    var P;
    const E = i.current;
    if (!E)
      return;
    if (!E.hasMoreInstructions) {
      a("idle"), c(""), r(""), i.current = null, f.current = null, (P = w.current) == null || P.showComplete();
      return;
    }
    const S = E.query;
    S && (a("loading"), (async () => {
      do
        await new Promise((N) => setTimeout(N, 500));
      while (HT());
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
    var N, D, V, J;
    if (console.log("Submitting query from index:", E), o === "loading")
      return;
    a("loading"), S && ((N = w.current) == null || N.showOption());
    const P = IT();
    f.current = P;
    try {
      const {
        Instructions: $,
        targetElement: K,
        hasMoreInstructions: I,
        actionType: x,
        updatedPlan: L
      } = await FT({
        query: E,
        previousSteps: ((D = i.current) == null ? void 0 : D.completedSteps) ?? [],
        product: A,
        apiUrl: t,
        currentPlan: (V = i.current) == null ? void 0 : V.currentPlan
      });
      if (f.current !== P)
        return;
      $ && r($), i.current = {
        query: E,
        completedSteps: [
          ...((J = i.current) == null ? void 0 : J.completedSteps) ?? [],
          $
        ],
        hasMoreInstructions: I,
        actionType: x,
        currentPlan: L
      }, console.log(K), y.setReference(K), K ? g.observe(K, () => {
        r("");
      }) : g.disconnect(), a(I ? "waitingForUser" : "idle"), l(!1);
    } catch ($) {
      console.error($), a("idle");
    }
  };
  return /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
    /* @__PURE__ */ G.jsx("div", { className: UA.container, "data-isGandalf": !0, children: /* @__PURE__ */ G.jsx(
      E4,
      {
        open: s,
        query: u,
        isApiCallInProgress: o === "loading",
        setQuery: c,
        setOpen: l,
        handleSubmit: (E) => v(E, !0)
      }
    ) }),
    n !== "" && /* @__PURE__ */ G.jsx(
      "div",
      {
        ref: y.setFloating,
        style: B,
        "data-isgandalf": !0,
        children: /* @__PURE__ */ G.jsxs("div", { className: UA.floatingPopover, children: [
          n,
          o === "loading" && /* @__PURE__ */ G.jsx("div", { className: UA.popoverLoadingOuter, children: /* @__PURE__ */ G.jsx("div", { className: UA.popoverLoading }) }),
          /* @__PURE__ */ G.jsx(
            "div",
            {
              ref: p,
              className: UA.arrow,
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
    e && /* @__PURE__ */ G.jsx(
      UT,
      {
        ref: w,
        state: o,
        onActivate: () => {
          l(!0);
        },
        onAdvance: C,
        onCacnel: () => {
          a("idle"), c(""), r(""), i.current = null, f.current = null;
        },
        currentQuery: u
      }
    )
  ] });
}, bB = document.createElement("div");
bB.className = UA.outerContainer;
document.body.appendChild(bB);
const TT = window.__gandalf_product ?? "demo", kT = window.__gandalf_api_url ?? "http://localhost:8000";
CF.render(
  /* @__PURE__ */ G.jsx(bT, { productName: TT, isWidgetVisible: !0, apiUrl: kT }),
  bB
);
