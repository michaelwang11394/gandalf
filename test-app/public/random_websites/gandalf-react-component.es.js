function jC(A, e) {
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
var Mh = { exports: {} }, nl = {}, Ph = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo = Symbol.for("react.element"), YC = Symbol.for("react.portal"), zC = Symbol.for("react.fragment"), JC = Symbol.for("react.strict_mode"), ZC = Symbol.for("react.profiler"), qC = Symbol.for("react.provider"), AQ = Symbol.for("react.context"), eQ = Symbol.for("react.forward_ref"), tQ = Symbol.for("react.suspense"), rQ = Symbol.for("react.memo"), nQ = Symbol.for("react.lazy"), LB = Symbol.iterator;
function iQ(A) {
  return A === null || typeof A != "object" ? null : (A = LB && A[LB] || A["@@iterator"], typeof A == "function" ? A : null);
}
var _h = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vh = Object.assign, Gh = {};
function jn(A, e, t) {
  this.props = A, this.context = e, this.refs = Gh, this.updater = t || _h;
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
jn.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function $h() {
}
$h.prototype = jn.prototype;
function Zf(A, e, t) {
  this.props = A, this.context = e, this.refs = Gh, this.updater = t || _h;
}
var qf = Zf.prototype = new $h();
qf.constructor = Zf;
Vh(qf, jn.prototype);
qf.isPureReactComponent = !0;
var bB = Array.isArray, Wh = Object.prototype.hasOwnProperty, Ad = { current: null }, Xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function jh(A, e, t) {
  var r, n = {}, i = null, o = null;
  if (e != null) for (r in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (i = "" + e.key), e) Wh.call(e, r) && !Xh.hasOwnProperty(r) && (n[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) n.children = t;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    n.children = s;
  }
  if (A && A.defaultProps) for (r in a = A.defaultProps, a) n[r] === void 0 && (n[r] = a[r]);
  return { $$typeof: Eo, type: A, key: i, ref: o, props: n, _owner: Ad.current };
}
function oQ(A, e) {
  return { $$typeof: Eo, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function ed(A) {
  return typeof A == "object" && A !== null && A.$$typeof === Eo;
}
function aQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var TB = /\/+/g;
function Jl(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? aQ("" + A.key) : e.toString(36);
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
        case YC:
          o = !0;
      }
  }
  if (o) return o = A, n = n(o), A = r === "" ? "." + Jl(o, 0) : r, bB(n) ? (t = "", A != null && (t = A.replace(TB, "$&/") + "/"), Pa(n, e, t, "", function(l) {
    return l;
  })) : n != null && (ed(n) && (n = oQ(n, t + (!n.key || o && o.key === n.key ? "" : ("" + n.key).replace(TB, "$&/") + "/") + A)), e.push(n)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", bB(A)) for (var a = 0; a < A.length; a++) {
    i = A[a];
    var s = r + Jl(i, a);
    o += Pa(i, e, t, s, n);
  }
  else if (s = iQ(A), typeof s == "function") for (A = s.call(A), a = 0; !(i = A.next()).done; ) i = i.value, s = r + Jl(i, a++), o += Pa(i, e, t, s, n);
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
function sQ(A) {
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
var qA = { current: null }, _a = { transition: null }, lQ = { ReactCurrentDispatcher: qA, ReactCurrentBatchConfig: _a, ReactCurrentOwner: Ad };
function Yh() {
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
Y.Fragment = zC;
Y.Profiler = ZC;
Y.PureComponent = Zf;
Y.StrictMode = JC;
Y.Suspense = tQ;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lQ;
Y.act = Yh;
Y.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var r = Vh({}, A.props), n = A.key, i = A.ref, o = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (i = e.ref, o = Ad.current), e.key !== void 0 && (n = "" + e.key), A.type && A.type.defaultProps) var a = A.type.defaultProps;
    for (s in e) Wh.call(e, s) && !Xh.hasOwnProperty(s) && (r[s] = e[s] === void 0 && a !== void 0 ? a[s] : e[s]);
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
  return A = { $$typeof: AQ, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: qC, _context: A }, A.Consumer = A;
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
  return { $$typeof: eQ, render: A };
};
Y.isValidElement = ed;
Y.lazy = function(A) {
  return { $$typeof: nQ, _payload: { _status: -1, _result: A }, _init: sQ };
};
Y.memo = function(A, e) {
  return { $$typeof: rQ, type: A, compare: e === void 0 ? null : e };
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
Ph.exports = Y;
var Q = Ph.exports;
const P = /* @__PURE__ */ rl(Q), tc = /* @__PURE__ */ jC({
  __proto__: null,
  default: P
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
var uQ = Q, cQ = Symbol.for("react.element"), fQ = Symbol.for("react.fragment"), dQ = Object.prototype.hasOwnProperty, BQ = uQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gQ = { key: !0, ref: !0, __self: !0, __source: !0 };
function zh(A, e, t) {
  var r, n = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (r in e) dQ.call(e, r) && !gQ.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: cQ, type: A, key: i, ref: o, props: n, _owner: BQ.current };
}
nl.Fragment = fQ;
nl.jsx = zh;
nl.jsxs = zh;
Mh.exports = nl;
var G = Mh.exports, Jh = { exports: {} }, pe = {}, Zh = { exports: {} }, qh = {};
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
  function e(I, S) {
    var L = I.length;
    I.push(S);
    A: for (; 0 < L; ) {
      var N = L - 1 >>> 1, X = I[N];
      if (0 < n(X, S)) I[N] = S, I[L] = X, L = N;
      else break A;
    }
  }
  function t(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var S = I[0], L = I.pop();
    if (L !== S) {
      I[0] = L;
      A: for (var N = 0, X = I.length, dA = X >>> 1; N < dA; ) {
        var BA = 2 * (N + 1) - 1, gA = I[BA], rA = BA + 1, jA = I[rA];
        if (0 > n(gA, L)) rA < X && 0 > n(jA, gA) ? (I[N] = jA, I[rA] = L, N = rA) : (I[N] = gA, I[BA] = L, N = BA);
        else if (rA < X && 0 > n(jA, L)) I[N] = jA, I[rA] = L, N = rA;
        else break A;
      }
    }
    return S;
  }
  function n(I, S) {
    var L = I.sortIndex - S.sortIndex;
    return L !== 0 ? L : I.id - S.id;
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
    for (var S = t(l); S !== null; ) {
      if (S.callback === null) r(l);
      else if (S.startTime <= I) r(l), S.sortIndex = S.expirationTime, e(s, S);
      else break;
      S = t(l);
    }
  }
  function m(I) {
    if (w = !1, h(I), !p) if (t(s) !== null) p = !0, $(v);
    else {
      var S = t(l);
      S !== null && R(m, S.startTime - I);
    }
  }
  function v(I, S) {
    p = !1, w && (w = !1, B(U), U = -1), g = !0;
    var L = f;
    try {
      for (h(S), c = t(s); c !== null && (!(c.expirationTime > S) || I && !K()); ) {
        var N = c.callback;
        if (typeof N == "function") {
          c.callback = null, f = c.priorityLevel;
          var X = N(c.expirationTime <= S);
          S = A.unstable_now(), typeof X == "function" ? c.callback = X : c === t(s) && r(s), h(S);
        } else r(s);
        c = t(s);
      }
      if (c !== null) var dA = !0;
      else {
        var BA = t(l);
        BA !== null && R(m, BA.startTime - S), dA = !1;
      }
      return dA;
    } finally {
      c = null, f = L, g = !1;
    }
  }
  var C = !1, F = null, U = -1, E = 5, x = -1;
  function K() {
    return !(A.unstable_now() - x < E);
  }
  function _() {
    if (F !== null) {
      var I = A.unstable_now();
      x = I;
      var S = !0;
      try {
        S = F(!0, I);
      } finally {
        S ? M() : (C = !1, F = null);
      }
    } else C = !1;
  }
  var M;
  if (typeof d == "function") M = function() {
    d(_);
  };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(), J = V.port2;
    V.port1.onmessage = _, M = function() {
      J.postMessage(null);
    };
  } else M = function() {
    y(_, 0);
  };
  function $(I) {
    F = I, C || (C = !0, M());
  }
  function R(I, S) {
    U = y(function() {
      I(A.unstable_now());
    }, S);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, A.unstable_continueExecution = function() {
    p || g || (p = !0, $(v));
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
        var S = 3;
        break;
      default:
        S = f;
    }
    var L = f;
    f = S;
    try {
      return I();
    } finally {
      f = L;
    }
  }, A.unstable_pauseExecution = function() {
  }, A.unstable_requestPaint = function() {
  }, A.unstable_runWithPriority = function(I, S) {
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
      return S();
    } finally {
      f = L;
    }
  }, A.unstable_scheduleCallback = function(I, S, L) {
    var N = A.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? N + L : N) : L = N, I) {
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
    return X = L + X, I = { id: u++, callback: S, priorityLevel: I, startTime: L, expirationTime: X, sortIndex: -1 }, L > N ? (I.sortIndex = L, e(l, I), t(s) === null && I === t(l) && (w ? (B(U), U = -1) : w = !0, R(m, L - N))) : (I.sortIndex = X, e(s, I), p || g || (p = !0, $(v))), I;
  }, A.unstable_shouldYield = K, A.unstable_wrapCallback = function(I) {
    var S = f;
    return function() {
      var L = f;
      f = S;
      try {
        return I.apply(this, arguments);
      } finally {
        f = L;
      }
    };
  };
})(qh);
Zh.exports = qh;
var pQ = Zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hQ = Q, ge = pQ;
function H(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Aw = /* @__PURE__ */ new Set(), Yi = {};
function Gr(A, e) {
  bn(A, e), bn(A + "Capture", e);
}
function bn(A, e) {
  for (Yi[A] = e, A = 0; A < e.length; A++) Aw.add(e[A]);
}
var gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rc = Object.prototype.hasOwnProperty, wQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, kB = {}, OB = {};
function mQ(A) {
  return rc.call(OB, A) ? !0 : rc.call(kB, A) ? !1 : wQ.test(A) ? OB[A] = !0 : (kB[A] = !0, !1);
}
function vQ(A, e, t, r) {
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
function CQ(A, e, t, r) {
  if (e === null || typeof e > "u" || vQ(A, e, t, r)) return !0;
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
var MA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  MA[A] = new Ae(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  MA[e] = new Ae(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  MA[A] = new Ae(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  MA[A] = new Ae(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  MA[A] = new Ae(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  MA[A] = new Ae(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  MA[A] = new Ae(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  MA[A] = new Ae(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  MA[A] = new Ae(A, 5, !1, A.toLowerCase(), null, !1, !1);
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
  MA[e] = new Ae(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(td, rd);
  MA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(td, rd);
  MA[e] = new Ae(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  MA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
MA.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  MA[A] = new Ae(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function nd(A, e, t, r) {
  var n = MA.hasOwnProperty(e) ? MA[e] : null;
  (n !== null ? n.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (CQ(e, t, n, r) && (t = null), r || n === null ? mQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : n.mustUseProperty ? A[n.propertyName] = t === null ? n.type === 3 ? !1 : "" : t : (e = n.attributeName, r = n.attributeNamespace, t === null ? A.removeAttribute(e) : (n = n.type, t = n === 3 || n === 4 && t === !0 ? "" : "" + t, r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var yt = hQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Go = Symbol.for("react.element"), nn = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), id = Symbol.for("react.strict_mode"), nc = Symbol.for("react.profiler"), ew = Symbol.for("react.provider"), tw = Symbol.for("react.context"), od = Symbol.for("react.forward_ref"), ic = Symbol.for("react.suspense"), oc = Symbol.for("react.suspense_list"), ad = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), rw = Symbol.for("react.offscreen"), DB = Symbol.iterator;
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
function QQ(A) {
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
    case tw:
      return (A.displayName || "Context") + ".Consumer";
    case ew:
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
function yQ(A) {
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
function nw(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function FQ(A) {
  var e = nw(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), r = "" + A[e];
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
  A._valueTracker || (A._valueTracker = FQ(A));
}
function iw(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(), r = "";
  return A && (r = nw(A) ? A.checked ? "true" : "false" : A.value), A = r, A !== t ? (e.setValue(A), !0) : !1;
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
function ow(A, e) {
  e = e.checked, e != null && nd(A, "checked", e, !1);
}
function lc(A, e) {
  ow(A, e);
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
function aw(A, e) {
  var t = Ar(e.value), r = Ar(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), r != null && (A.defaultValue = "" + r);
}
function MB(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function sw(A) {
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
  return A == null || A === "http://www.w3.org/1999/xhtml" ? sw(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var Wo, lw = function(A) {
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
}, UQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Si).forEach(function(A) {
  UQ.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), Si[e] = Si[A];
  });
});
function uw(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Si.hasOwnProperty(A) && Si[A] ? ("" + e).trim() : e + "px";
}
function cw(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, n = uw(t, e[t], r);
    t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : A[t] = n;
  }
}
var EQ = mA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dc(A, e) {
  if (e) {
    if (EQ[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(H(137, A));
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
function fw(A) {
  yn ? Fn ? Fn.push(A) : Fn = [A] : yn = A;
}
function dw() {
  if (yn) {
    var A = yn, e = Fn;
    if (Fn = yn = null, PB(A), e) for (A = 0; A < e.length; A++) PB(e[A]);
  }
}
function Bw(A, e) {
  return A(e);
}
function gw() {
}
var eu = !1;
function pw(A, e, t) {
  if (eu) return A(e, t);
  eu = !0;
  try {
    return Bw(A, e, t);
  } finally {
    eu = !1, (yn !== null || Fn !== null) && (gw(), dw());
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
function IQ(A, e, t, r, n, i, o, a, s) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (u) {
    this.onError(u);
  }
}
var Li = !1, fs = null, ds = !1, wc = null, HQ = { onError: function(A) {
  Li = !0, fs = A;
} };
function xQ(A, e, t, r, n, i, o, a, s) {
  Li = !1, fs = null, IQ.apply(HQ, arguments);
}
function SQ(A, e, t, r, n, i, o, a, s) {
  if (xQ.apply(this, arguments), Li) {
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
function hw(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function _B(A) {
  if ($r(A) !== A) throw Error(H(188));
}
function LQ(A) {
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
function ww(A) {
  return A = LQ(A), A !== null ? mw(A) : null;
}
function mw(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = mw(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var vw = ge.unstable_scheduleCallback, VB = ge.unstable_cancelCallback, bQ = ge.unstable_shouldYield, TQ = ge.unstable_requestPaint, FA = ge.unstable_now, kQ = ge.unstable_getCurrentPriorityLevel, ld = ge.unstable_ImmediatePriority, Cw = ge.unstable_UserBlockingPriority, Bs = ge.unstable_NormalPriority, OQ = ge.unstable_LowPriority, Qw = ge.unstable_IdlePriority, il = null, Ze = null;
function DQ(A) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function") try {
    Ze.onCommitFiberRoot(il, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var Ne = Math.clz32 ? Math.clz32 : NQ, KQ = Math.log, RQ = Math.LN2;
function NQ(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (KQ(A) / RQ | 0) | 0;
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
function MQ(A, e) {
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
function PQ(A, e) {
  for (var t = A.suspendedLanes, r = A.pingedLanes, n = A.expirationTimes, i = A.pendingLanes; 0 < i; ) {
    var o = 31 - Ne(i), a = 1 << o, s = n[o];
    s === -1 ? (!(a & t) || a & r) && (n[o] = MQ(a, e)) : s <= e && (A.expiredLanes |= a), i &= ~a;
  }
}
function mc(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function yw() {
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
function _Q(A, e) {
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
function Fw(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uw, cd, Ew, Iw, Hw, vc = !1, Yo = [], Gt = null, $t = null, Wt = null, Zi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), Ot = [], VQ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
function GQ(A, e, t, r, n) {
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
function xw(A) {
  var e = Cr(A.target);
  if (e !== null) {
    var t = $r(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = hw(t), e !== null) {
          A.blockedOn = e, Hw(A.priority, function() {
            Ew(t);
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
function $Q() {
  vc = !1, Gt !== null && Va(Gt) && (Gt = null), $t !== null && Va($t) && ($t = null), Wt !== null && Va(Wt) && (Wt = null), Zi.forEach($B), qi.forEach($B);
}
function oi(A, e) {
  A.blockedOn === e && (A.blockedOn = null, vc || (vc = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, $Q)));
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
  for (; 0 < Ot.length && (t = Ot[0], t.blockedOn === null); ) xw(t), t.blockedOn === null && Ot.shift();
}
var Un = yt.ReactCurrentBatchConfig, ps = !0;
function WQ(A, e, t, r) {
  var n = eA, i = Un.transition;
  Un.transition = null;
  try {
    eA = 1, fd(A, e, t, r);
  } finally {
    eA = n, Un.transition = i;
  }
}
function XQ(A, e, t, r) {
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
    else if (GQ(n, A, e, t, r)) r.stopPropagation();
    else if (GB(A, r), e & 4 && -1 < VQ.indexOf(A)) {
      for (; n !== null; ) {
        var i = xo(n);
        if (i !== null && Uw(i), i = Cc(A, e, t, r), i === null && fu(A, e, r, hs, t), i === n) break;
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
    if (A = hw(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return hs = A, null;
}
function Sw(A) {
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
      switch (kQ()) {
        case ld:
          return 1;
        case Cw:
          return 4;
        case Bs:
        case OQ:
          return 16;
        case Qw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null, dd = null, Ga = null;
function Lw() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Bd = he(Yn), Ho = mA({}, Yn, { view: 0, detail: 0 }), jQ = he(Ho), ru, nu, ai, ol = mA({}, Ho, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gd, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== ai && (ai && A.type === "mousemove" ? (ru = A.screenX - ai.screenX, nu = A.screenY - ai.screenY) : nu = ru = 0, ai = A), ru);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : nu;
} }), XB = he(ol), YQ = mA({}, ol, { dataTransfer: 0 }), zQ = he(YQ), JQ = mA({}, Ho, { relatedTarget: 0 }), iu = he(JQ), ZQ = mA({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qQ = he(ZQ), Ay = mA({}, Yn, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), ey = he(Ay), ty = mA({}, Yn, { data: 0 }), jB = he(ty), ry = {
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
}, ny = {
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
}, iy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oy(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = iy[A]) ? !!e[A] : !1;
}
function gd() {
  return oy;
}
var ay = mA({}, Ho, { key: function(A) {
  if (A.key) {
    var e = ry[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = $a(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? ny[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gd, charCode: function(A) {
  return A.type === "keypress" ? $a(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? $a(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), sy = he(ay), ly = mA({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), YB = he(ly), uy = mA({}, Ho, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gd }), cy = he(uy), fy = mA({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dy = he(fy), By = mA({}, ol, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), gy = he(By), py = [9, 13, 27, 32], pd = gt && "CompositionEvent" in window, bi = null;
gt && "documentMode" in document && (bi = document.documentMode);
var hy = gt && "TextEvent" in window && !bi, bw = gt && (!pd || bi && 8 < bi && 11 >= bi), zB = " ", JB = !1;
function Tw(A, e) {
  switch (A) {
    case "keyup":
      return py.indexOf(e.keyCode) !== -1;
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
function kw(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var an = !1;
function wy(A, e) {
  switch (A) {
    case "compositionend":
      return kw(e);
    case "keypress":
      return e.which !== 32 ? null : (JB = !0, zB);
    case "textInput":
      return A = e.data, A === zB && JB ? null : A;
    default:
      return null;
  }
}
function my(A, e) {
  if (an) return A === "compositionend" || !pd && Tw(A, e) ? (A = Lw(), Ga = dd = Rt = null, an = !1, A) : null;
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
      return bw && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var vy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ZB(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!vy[A.type] : e === "textarea";
}
function Ow(A, e, t, r) {
  fw(r), e = ws(e, "onChange"), 0 < e.length && (t = new Bd("onChange", "change", null, t, r), A.push({ event: t, listeners: e }));
}
var Ti = null, eo = null;
function Cy(A) {
  Ww(A, 0);
}
function al(A) {
  var e = un(A);
  if (iw(e)) return A;
}
function Qy(A, e) {
  if (A === "change") return e;
}
var Dw = !1;
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
  Dw = ou && (!document.documentMode || 9 < document.documentMode);
}
function Ag() {
  Ti && (Ti.detachEvent("onpropertychange", Kw), eo = Ti = null);
}
function Kw(A) {
  if (A.propertyName === "value" && al(eo)) {
    var e = [];
    Ow(e, eo, A, sd(A)), pw(Cy, e);
  }
}
function yy(A, e, t) {
  A === "focusin" ? (Ag(), Ti = e, eo = t, Ti.attachEvent("onpropertychange", Kw)) : A === "focusout" && Ag();
}
function Fy(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return al(eo);
}
function Uy(A, e) {
  if (A === "click") return al(e);
}
function Ey(A, e) {
  if (A === "input" || A === "change") return al(e);
}
function Iy(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var _e = typeof Object.is == "function" ? Object.is : Iy;
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
function Rw(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Rw(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function Nw() {
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
function Hy(A) {
  var e = Nw(), t = A.focusedElem, r = A.selectionRange;
  if (e !== t && t && t.ownerDocument && Rw(t.ownerDocument.documentElement, t)) {
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
var xy = gt && "documentMode" in document && 11 >= document.documentMode, sn = null, Qc = null, ki = null, yc = !1;
function rg(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  yc || sn == null || sn !== cs(r) || (r = sn, "selectionStart" in r && hd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ki && to(ki, r) || (ki = r, r = ws(Qc, "onSelect"), 0 < r.length && (e = new Bd("onSelect", "select", null, e, t), A.push({ event: e, listeners: r }), e.target = sn)));
}
function Jo(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var ln = { animationend: Jo("Animation", "AnimationEnd"), animationiteration: Jo("Animation", "AnimationIteration"), animationstart: Jo("Animation", "AnimationStart"), transitionend: Jo("Transition", "TransitionEnd") }, su = {}, Mw = {};
gt && (Mw = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
function sl(A) {
  if (su[A]) return su[A];
  if (!ln[A]) return A;
  var e = ln[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in Mw) return su[A] = e[t];
  return A;
}
var Pw = sl("animationend"), _w = sl("animationiteration"), Vw = sl("animationstart"), Gw = sl("transitionend"), $w = /* @__PURE__ */ new Map(), ng = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function lr(A, e) {
  $w.set(A, e), Gr(e, [A]);
}
for (var lu = 0; lu < ng.length; lu++) {
  var uu = ng[lu], Sy = uu.toLowerCase(), Ly = uu[0].toUpperCase() + uu.slice(1);
  lr(Sy, "on" + Ly);
}
lr(Pw, "onAnimationEnd");
lr(_w, "onAnimationIteration");
lr(Vw, "onAnimationStart");
lr("dblclick", "onDoubleClick");
lr("focusin", "onFocus");
lr("focusout", "onBlur");
lr(Gw, "onTransitionEnd");
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
var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), by = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
function ig(A, e, t) {
  var r = A.type || "unknown-event";
  A.currentTarget = t, SQ(r, e, void 0, A), A.currentTarget = null;
}
function Ww(A, e) {
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
  t.has(r) || (Xw(e, A, 2, !1), t.add(r));
}
function cu(A, e, t) {
  var r = 0;
  e && (r |= 4), Xw(t, A, r, e);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function ro(A) {
  if (!A[Zo]) {
    A[Zo] = !0, Aw.forEach(function(t) {
      t !== "selectionchange" && (by.has(t) || cu(t, !1, A), cu(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Zo] || (e[Zo] = !0, cu("selectionchange", !1, e));
  }
}
function Xw(A, e, t, r) {
  switch (Sw(e)) {
    case 1:
      var n = WQ;
      break;
    case 4:
      n = XQ;
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
  pw(function() {
    var l = i, u = sd(t), c = [];
    A: {
      var f = $w.get(A);
      if (f !== void 0) {
        var g = Bd, p = A;
        switch (A) {
          case "keypress":
            if ($a(t) === 0) break A;
          case "keydown":
          case "keyup":
            g = sy;
            break;
          case "focusin":
            p = "focus", g = iu;
            break;
          case "focusout":
            p = "blur", g = iu;
            break;
          case "beforeblur":
          case "afterblur":
            g = iu;
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
            g = XB;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = zQ;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cy;
            break;
          case Pw:
          case _w:
          case Vw:
            g = qQ;
            break;
          case Gw:
            g = dy;
            break;
          case "scroll":
            g = jQ;
            break;
          case "wheel":
            g = gy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ey;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = YB;
        }
        var w = (e & 4) !== 0, y = !w && A === "scroll", B = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var d = l, h; d !== null; ) {
          h = d;
          var m = h.stateNode;
          if (h.tag === 5 && m !== null && (h = m, B !== null && (m = Ji(d, B), m != null && w.push(no(d, m, h)))), y) break;
          d = d.return;
        }
        0 < w.length && (f = new g(f, p, null, t, u), c.push({ event: f, listeners: w }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (f = A === "mouseover" || A === "pointerover", g = A === "mouseout" || A === "pointerout", f && t !== gc && (p = t.relatedTarget || t.fromElement) && (Cr(p) || p[pt])) break A;
        if ((g || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (p = t.relatedTarget || t.toElement, g = l, p = p ? Cr(p) : null, p !== null && (y = $r(p), p !== y || p.tag !== 5 && p.tag !== 6) && (p = null)) : (g = null, p = l), g !== p)) {
          if (w = XB, m = "onMouseLeave", B = "onMouseEnter", d = "mouse", (A === "pointerout" || A === "pointerover") && (w = YB, m = "onPointerLeave", B = "onPointerEnter", d = "pointer"), y = g == null ? f : un(g), h = p == null ? f : un(p), f = new w(m, d + "leave", g, t, u), f.target = y, f.relatedTarget = h, m = null, Cr(u) === l && (w = new w(B, d + "enter", p, t, u), w.target = h, w.relatedTarget = y, m = w), y = m, g && p) e: {
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
          g !== null && og(c, f, g, w, !1), p !== null && y !== null && og(c, y, p, w, !0);
        }
      }
      A: {
        if (f = l ? un(l) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var v = Qy;
        else if (ZB(f)) if (Dw) v = Ey;
        else {
          v = Fy;
          var C = yy;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (v = Uy);
        if (v && (v = v(A, l))) {
          Ow(c, v, t, u);
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
          if (xy) break;
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
      else an ? Tw(A, t) && (U = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (U = "onCompositionStart");
      U && (bw && t.locale !== "ko" && (an || U !== "onCompositionStart" ? U === "onCompositionEnd" && an && (F = Lw()) : (Rt = u, dd = "value" in Rt ? Rt.value : Rt.textContent, an = !0)), C = ws(l, U), 0 < C.length && (U = new jB(U, A, null, t, u), c.push({ event: U, listeners: C }), F ? U.data = F : (F = kw(t), F !== null && (U.data = F)))), (F = hy ? wy(A, t) : my(A, t)) && (l = ws(l, "onBeforeInput"), 0 < l.length && (u = new jB("onBeforeInput", "beforeinput", null, t, u), c.push({ event: u, listeners: l }), u.data = F));
    }
    Ww(c, e);
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
var Ty = /\r\n?/g, ky = /\u0000|\uFFFD/g;
function ag(A) {
  return (typeof A == "string" ? A : "" + A).replace(Ty, `
`).replace(ky, "");
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
var Ic = typeof setTimeout == "function" ? setTimeout : void 0, Oy = typeof clearTimeout == "function" ? clearTimeout : void 0, sg = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof sg < "u" ? function(A) {
  return sg.resolve(null).then(A).catch(Ky);
} : Ic;
function Ky(A) {
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
var zn = Math.random().toString(36).slice(2), ze = "__reactFiber$" + zn, io = "__reactProps$" + zn, pt = "__reactContainer$" + zn, Hc = "__reactEvents$" + zn, Ry = "__reactListeners$" + zn, Ny = "__reactHandles$" + zn;
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
var er = {}, XA = ur(er), oe = ur(!1), Dr = er;
function Tn(A, e) {
  var t = A.type.contextTypes;
  if (!t) return er;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
  var n = {}, i;
  for (i in t) n[i] = e[i];
  return r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = n), n;
}
function ae(A) {
  return A = A.childContextTypes, A != null;
}
function vs() {
  lA(oe), lA(XA);
}
function ug(A, e, t) {
  if (XA.current !== er) throw Error(H(168));
  iA(XA, e), iA(oe, t);
}
function jw(A, e, t) {
  var r = A.stateNode;
  if (e = e.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(H(108, yQ(A) || "Unknown", n));
  return mA({}, t, r);
}
function Cs(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || er, Dr = XA.current, iA(XA, A), iA(oe, oe.current), !0;
}
function cg(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(H(169));
  t ? (A = jw(A, e, Dr), r.__reactInternalMemoizedMergedChildContext = A, lA(oe), lA(XA), iA(XA, A)) : lA(oe), iA(oe, t);
}
var st = null, ul = !1, Bu = !1;
function Yw(A) {
  st === null ? st = [A] : st.push(A);
}
function My(A) {
  ul = !0, Yw(A);
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
      throw st !== null && (st = st.slice(A + 1)), vw(ld, cr), n;
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
function zw(A, e, t) {
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
  A.return !== null && (pr(A, 1), zw(A, 1, 0));
}
function md(A) {
  for (; A === Qs; ) Qs = fn[--dn], fn[dn] = null, ys = fn[--dn], fn[dn] = null;
  for (; A === Kr; ) Kr = ve[--Ce], ve[Ce] = null, ct = ve[--Ce], ve[Ce] = null, ut = ve[--Ce], ve[Ce] = null;
}
var de = null, fe = null, fA = !1, De = null;
function Jw(A, e) {
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
        e && fg(A, e) ? Jw(r, t) : (A.flags = A.flags & -4097 | 2, fA = !1, de = A);
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
    if (Sc(A)) throw Zw(), Error(H(418));
    for (; e; ) Jw(A, e), e = Xt(e.nextSibling);
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
function Zw() {
  for (var A = fe; A; ) A = Xt(A.nextSibling);
}
function kn() {
  fe = de = null, fA = !1;
}
function vd(A) {
  De === null ? De = [A] : De.push(A);
}
var Py = yt.ReactCurrentBatchConfig;
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
function qw(A) {
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
    return B = Jt(B, d), B.index = 0, B.sibling = null, B;
  }
  function i(B, d, h) {
    return B.index = h, A ? (h = B.alternate, h !== null ? (h = h.index, h < d ? (B.flags |= 2, d) : h) : (B.flags |= 2, d)) : (B.flags |= 1048576, d);
  }
  function o(B) {
    return A && B.alternate === null && (B.flags |= 2), B;
  }
  function a(B, d, h, m) {
    return d === null || d.tag !== 6 ? (d = Cu(h, B.mode, m), d.return = B, d) : (d = n(d, h), d.return = B, d);
  }
  function s(B, d, h, m) {
    var v = h.type;
    return v === on ? u(B, d, h.props.children, m, h.key) : d !== null && (d.elementType === v || typeof v == "object" && v !== null && v.$$typeof === bt && Bg(v) === d.type) ? (m = n(d, h.props), m.ref = si(B, d, h), m.return = B, m) : (m = Za(h.type, h.key, h.props, null, B.mode, m), m.ref = si(B, d, h), m.return = B, m);
  }
  function l(B, d, h, m) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Qu(h, B.mode, m), d.return = B, d) : (d = n(d, h.children || []), d.return = B, d);
  }
  function u(B, d, h, m, v) {
    return d === null || d.tag !== 7 ? (d = Sr(h, B.mode, m, v), d.return = B, d) : (d = n(d, h), d.return = B, d);
  }
  function c(B, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Cu("" + d, B.mode, h), d.return = B, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Go:
          return h = Za(d.type, d.key, d.props, null, B.mode, h), h.ref = si(B, null, d), h.return = B, h;
        case nn:
          return d = Qu(d, B.mode, h), d.return = B, d;
        case bt:
          var m = d._init;
          return c(B, m(d._payload), h);
      }
      if (hi(d) || ri(d)) return d = Sr(d, B.mode, h, null), d.return = B, d;
      ea(B, d);
    }
    return null;
  }
  function f(B, d, h, m) {
    var v = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return v !== null ? null : a(B, d, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Go:
          return h.key === v ? s(B, d, h, m) : null;
        case nn:
          return h.key === v ? l(B, d, h, m) : null;
        case bt:
          return v = h._init, f(
            B,
            d,
            v(h._payload),
            m
          );
      }
      if (hi(h) || ri(h)) return v !== null ? null : u(B, d, h, m, null);
      ea(B, h);
    }
    return null;
  }
  function g(B, d, h, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return B = B.get(h) || null, a(d, B, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Go:
          return B = B.get(m.key === null ? h : m.key) || null, s(d, B, m, v);
        case nn:
          return B = B.get(m.key === null ? h : m.key) || null, l(d, B, m, v);
        case bt:
          var C = m._init;
          return g(B, d, h, C(m._payload), v);
      }
      if (hi(m) || ri(m)) return B = B.get(h) || null, u(d, B, m, v, null);
      ea(d, m);
    }
    return null;
  }
  function p(B, d, h, m) {
    for (var v = null, C = null, F = d, U = d = 0, E = null; F !== null && U < h.length; U++) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var x = f(B, F, h[U], m);
      if (x === null) {
        F === null && (F = E);
        break;
      }
      A && F && x.alternate === null && e(B, F), d = i(x, d, U), C === null ? v = x : C.sibling = x, C = x, F = E;
    }
    if (U === h.length) return t(B, F), fA && pr(B, U), v;
    if (F === null) {
      for (; U < h.length; U++) F = c(B, h[U], m), F !== null && (d = i(F, d, U), C === null ? v = F : C.sibling = F, C = F);
      return fA && pr(B, U), v;
    }
    for (F = r(B, F); U < h.length; U++) E = g(F, B, U, h[U], m), E !== null && (A && E.alternate !== null && F.delete(E.key === null ? U : E.key), d = i(E, d, U), C === null ? v = E : C.sibling = E, C = E);
    return A && F.forEach(function(K) {
      return e(B, K);
    }), fA && pr(B, U), v;
  }
  function w(B, d, h, m) {
    var v = ri(h);
    if (typeof v != "function") throw Error(H(150));
    if (h = v.call(h), h == null) throw Error(H(151));
    for (var C = v = null, F = d, U = d = 0, E = null, x = h.next(); F !== null && !x.done; U++, x = h.next()) {
      F.index > U ? (E = F, F = null) : E = F.sibling;
      var K = f(B, F, x.value, m);
      if (K === null) {
        F === null && (F = E);
        break;
      }
      A && F && K.alternate === null && e(B, F), d = i(K, d, U), C === null ? v = K : C.sibling = K, C = K, F = E;
    }
    if (x.done) return t(
      B,
      F
    ), fA && pr(B, U), v;
    if (F === null) {
      for (; !x.done; U++, x = h.next()) x = c(B, x.value, m), x !== null && (d = i(x, d, U), C === null ? v = x : C.sibling = x, C = x);
      return fA && pr(B, U), v;
    }
    for (F = r(B, F); !x.done; U++, x = h.next()) x = g(F, B, U, x.value, m), x !== null && (A && x.alternate !== null && F.delete(x.key === null ? U : x.key), d = i(x, d, U), C === null ? v = x : C.sibling = x, C = x);
    return A && F.forEach(function(_) {
      return e(B, _);
    }), fA && pr(B, U), v;
  }
  function y(B, d, h, m) {
    if (typeof h == "object" && h !== null && h.type === on && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Go:
          A: {
            for (var v = h.key, C = d; C !== null; ) {
              if (C.key === v) {
                if (v = h.type, v === on) {
                  if (C.tag === 7) {
                    t(B, C.sibling), d = n(C, h.props.children), d.return = B, B = d;
                    break A;
                  }
                } else if (C.elementType === v || typeof v == "object" && v !== null && v.$$typeof === bt && Bg(v) === C.type) {
                  t(B, C.sibling), d = n(C, h.props), d.ref = si(B, C, h), d.return = B, B = d;
                  break A;
                }
                t(B, C);
                break;
              } else e(B, C);
              C = C.sibling;
            }
            h.type === on ? (d = Sr(h.props.children, B.mode, m, h.key), d.return = B, B = d) : (m = Za(h.type, h.key, h.props, null, B.mode, m), m.ref = si(B, d, h), m.return = B, B = m);
          }
          return o(B);
        case nn:
          A: {
            for (C = h.key; d !== null; ) {
              if (d.key === C) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                t(B, d.sibling), d = n(d, h.children || []), d.return = B, B = d;
                break A;
              } else {
                t(B, d);
                break;
              }
              else e(B, d);
              d = d.sibling;
            }
            d = Qu(h, B.mode, m), d.return = B, B = d;
          }
          return o(B);
        case bt:
          return C = h._init, y(B, d, C(h._payload), m);
      }
      if (hi(h)) return p(B, d, h, m);
      if (ri(h)) return w(B, d, h, m);
      ea(B, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (t(B, d.sibling), d = n(d, h), d.return = B, B = d) : (t(B, d), d = Cu(h, B.mode, m), d.return = B, B = d), o(B)) : t(B, d);
  }
  return y;
}
var On = qw(!0), Am = qw(!1), Fs = ur(null), Us = null, Bn = null, Cd = null;
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
  Us = A, Cd = Bn = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (re = !0), A.firstContext = null);
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
function em(A, e, t, r) {
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
function tm(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function ft(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function jt(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
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
              Tt = !0;
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
function rm(A) {
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
var Xa = yt.ReactCurrentDispatcher, pu = yt.ReactCurrentBatchConfig, Rr = 0, wA = null, HA = null, TA = null, Hs = !1, Oi = !1, so = 0, _y = 0;
function PA() {
  throw Error(H(321));
}
function xd(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!_e(A[t], e[t])) return !1;
  return !0;
}
function Sd(A, e, t, r, n, i) {
  if (Rr = i, wA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Xa.current = A === null || A.memoizedState === null ? Wy : Xy, A = t(r, n), Oi) {
    i = 0;
    do {
      if (Oi = !1, so = 0, 25 <= i) throw Error(H(301));
      i += 1, TA = HA = null, e.updateQueue = null, Xa.current = jy, A = t(r, n);
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
    s === null ? o = r : s.next = a, _e(r, e.memoizedState) || (re = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = s, t.lastRenderedState = r;
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
    _e(i, e.memoizedState) || (re = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function nm() {
}
function im(A, e) {
  var t = wA, r = He(), n = e(), i = !_e(r.memoizedState, n);
  if (i && (r.memoizedState = n, re = !0), r = r.queue, bd(sm.bind(null, t, r, A), [A]), r.getSnapshot !== e || i || TA !== null && TA.memoizedState.tag & 1) {
    if (t.flags |= 2048, uo(9, am.bind(null, t, r, n, e), void 0, null), OA === null) throw Error(H(349));
    Rr & 30 || om(t, e, n);
  }
  return n;
}
function om(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function am(A, e, t, r) {
  e.value = t, e.getSnapshot = r, lm(e) && um(A);
}
function sm(A, e, t) {
  return t(function() {
    lm(e) && um(A);
  });
}
function lm(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !_e(A, t);
  } catch {
    return !0;
  }
}
function um(A) {
  var e = ht(A, 1);
  e !== null && Me(e, A, 1, -1);
}
function hg(A) {
  var e = Xe();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lo, lastRenderedState: A }, e.queue = A, A = A.dispatch = $y.bind(null, wA, A), [e.memoizedState, A];
}
function uo(A, e, t, r) {
  return A = { tag: A, create: e, destroy: t, deps: r, next: null }, e = wA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, wA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (r = t.next, t.next = A, A.next = r, e.lastEffect = A)), A;
}
function cm() {
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
function fm(A, e) {
  return cl(4, 2, A, e);
}
function dm(A, e) {
  return cl(4, 4, A, e);
}
function Bm(A, e) {
  if (typeof e == "function") return A = A(), e(A), function() {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function() {
    e.current = null;
  };
}
function gm(A, e, t) {
  return t = t != null ? t.concat([A]) : null, cl(4, 4, Bm.bind(null, e, A), t);
}
function Td() {
}
function pm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && xd(e, r[1]) ? r[0] : (t.memoizedState = [A, e], A);
}
function hm(A, e) {
  var t = He();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && xd(e, r[1]) ? r[0] : (A = A(), t.memoizedState = [A, e], A);
}
function wm(A, e, t) {
  return Rr & 21 ? (_e(t, e) || (t = yw(), wA.lanes |= t, Nr |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, re = !0), A.memoizedState = t);
}
function Vy(A, e) {
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
function mm() {
  return He().memoizedState;
}
function Gy(A, e, t) {
  var r = zt(A);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, vm(A)) Cm(e, t);
  else if (t = em(A, e, t, r), t !== null) {
    var n = JA();
    Me(t, A, r, n), Qm(t, e, r);
  }
}
function $y(A, e, t) {
  var r = zt(A), n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (vm(A)) Cm(e, n);
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
    t = em(A, e, n, r), t !== null && (n = JA(), Me(t, A, r, n), Qm(t, e, r));
  }
}
function vm(A) {
  var e = A.alternate;
  return A === wA || e !== null && e === wA;
}
function Cm(A, e) {
  Oi = Hs = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function Qm(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    r &= A.pendingLanes, t |= r, e.lanes = t, ud(A, t);
  }
}
var xs = { readContext: Ie, useCallback: PA, useContext: PA, useEffect: PA, useImperativeHandle: PA, useInsertionEffect: PA, useLayoutEffect: PA, useMemo: PA, useReducer: PA, useRef: PA, useState: PA, useDebugValue: PA, useDeferredValue: PA, useTransition: PA, useMutableSource: PA, useSyncExternalStore: PA, useId: PA, unstable_isNewReconciler: !1 }, Wy = { readContext: Ie, useCallback: function(A, e) {
  return Xe().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: Ie, useEffect: wg, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, ja(
    4194308,
    4,
    Bm.bind(null, e, A),
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
  return e = t !== void 0 ? t(e) : e, r.memoizedState = r.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, r.queue = A, A = A.dispatch = Gy.bind(null, wA, A), [r.memoizedState, A];
}, useRef: function(A) {
  var e = Xe();
  return A = { current: A }, e.memoizedState = A;
}, useState: hg, useDebugValue: Td, useDeferredValue: function(A) {
  return Xe().memoizedState = A;
}, useTransition: function() {
  var A = hg(!1), e = A[0];
  return A = Vy.bind(null, A[1]), Xe().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var r = wA, n = Xe();
  if (fA) {
    if (t === void 0) throw Error(H(407));
    t = t();
  } else {
    if (t = e(), OA === null) throw Error(H(349));
    Rr & 30 || om(r, e, t);
  }
  n.memoizedState = t;
  var i = { value: t, getSnapshot: e };
  return n.queue = i, wg(sm.bind(
    null,
    r,
    i,
    A
  ), [A]), r.flags |= 2048, uo(9, am.bind(null, r, i, t, e), void 0, null), t;
}, useId: function() {
  var A = Xe(), e = OA.identifierPrefix;
  if (fA) {
    var t = ct, r = ut;
    t = (r & ~(1 << 32 - Ne(r) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = so++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = _y++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, Xy = {
  readContext: Ie,
  useCallback: pm,
  useContext: Ie,
  useEffect: bd,
  useImperativeHandle: gm,
  useInsertionEffect: fm,
  useLayoutEffect: dm,
  useMemo: hm,
  useReducer: hu,
  useRef: cm,
  useState: function() {
    return hu(lo);
  },
  useDebugValue: Td,
  useDeferredValue: function(A) {
    var e = He();
    return wm(e, HA.memoizedState, A);
  },
  useTransition: function() {
    var A = hu(lo)[0], e = He().memoizedState;
    return [A, e];
  },
  useMutableSource: nm,
  useSyncExternalStore: im,
  useId: mm,
  unstable_isNewReconciler: !1
}, jy = { readContext: Ie, useCallback: pm, useContext: Ie, useEffect: bd, useImperativeHandle: gm, useInsertionEffect: fm, useLayoutEffect: dm, useMemo: hm, useReducer: wu, useRef: cm, useState: function() {
  return wu(lo);
}, useDebugValue: Td, useDeferredValue: function(A) {
  var e = He();
  return HA === null ? e.memoizedState = A : wm(e, HA.memoizedState, A);
}, useTransition: function() {
  var A = wu(lo)[0], e = He().memoizedState;
  return [A, e];
}, useMutableSource: nm, useSyncExternalStore: im, useId: mm, unstable_isNewReconciler: !1 };
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
  var r = JA(), n = zt(A), i = ft(r, n);
  i.payload = e, t != null && (i.callback = t), e = jt(A, i, n), e !== null && (Me(e, A, n, r), Wa(e, A, n));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var r = JA(), n = zt(A), i = ft(r, n);
  i.tag = 1, i.payload = e, t != null && (i.callback = t), e = jt(A, i, n), e !== null && (Me(e, A, n, r), Wa(e, A, n));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = JA(), r = zt(A), n = ft(t, r);
  n.tag = 2, e != null && (n.callback = e), e = jt(A, n, r), e !== null && (Me(e, A, r, t), Wa(e, A, r));
} };
function mg(A, e, t, r, n, i, o) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(r, i, o) : e.prototype && e.prototype.isPureReactComponent ? !to(t, r) || !to(n, i) : !0;
}
function ym(A, e, t) {
  var r = !1, n = er, i = e.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (n = ae(e) ? Dr : XA.current, r = e.contextTypes, i = (r = r != null) ? Tn(A, n) : er), e = new e(t, i), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = fl, A.stateNode = e, e._reactInternals = A, r && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = n, A.__reactInternalMemoizedMaskedChildContext = i), e;
}
function vg(A, e, t, r) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, r), e.state !== A && fl.enqueueReplaceState(e, e.state, null);
}
function kc(A, e, t, r) {
  var n = A.stateNode;
  n.props = t, n.state = A.memoizedState, n.refs = {}, Ud(A);
  var i = e.contextType;
  typeof i == "object" && i !== null ? n.context = Ie(i) : (i = ae(e) ? Dr : XA.current, n.context = Tn(A, i)), n.state = A.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Tc(A, e, i, t), n.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (e = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), e !== n.state && fl.enqueueReplaceState(n, n.state, null), Es(A, t, n, r), n.state = A.memoizedState), typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function Kn(A, e) {
  try {
    var t = "", r = e;
    do
      t += QQ(r), r = r.return;
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
var Yy = typeof WeakMap == "function" ? WeakMap : Map;
function Fm(A, e, t) {
  t = ft(-1, t), t.tag = 3, t.payload = { element: null };
  var r = e.value;
  return t.callback = function() {
    Ls || (Ls = !0, $c = r), Oc(A, e);
  }, t;
}
function Um(A, e, t) {
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
    r = A.pingCache = new Yy();
    var n = /* @__PURE__ */ new Set();
    r.set(e, n);
  } else n = r.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), r.set(e, n));
  n.has(t) || (n.add(t), A = lF.bind(null, A, e, t), e.then(A, A));
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
var zy = yt.ReactCurrentOwner, re = !1;
function zA(A, e, t, r) {
  e.child = A === null ? Am(e, null, t, r) : On(e, A.child, t, r);
}
function Fg(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return En(e, n), r = Sd(A, e, t, r, i, n), t = Ld(), A !== null && !re ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && t && wd(e), e.flags |= 1, zA(A, e, r, n), e.child);
}
function Ug(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" && !Pd(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = i, Em(A, e, i, r, n)) : (A = Za(t.type, null, r, e, e.mode, n), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (i = A.child, !(A.lanes & n)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : to, t(o, r) && A.ref === e.ref) return wt(A, e, n);
  }
  return e.flags |= 1, A = Jt(i, r), A.ref = e.ref, A.return = e, e.child = A;
}
function Em(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (to(i, r) && A.ref === e.ref) if (re = !1, e.pendingProps = r = i, (A.lanes & n) !== 0) A.flags & 131072 && (re = !0);
    else return e.lanes = A.lanes, wt(A, e, n);
  }
  return Dc(A, e, t, r, n);
}
function Im(A, e, t) {
  var r = e.pendingProps, n = r.children, i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, iA(pn, ce), ce |= t;
  else {
    if (!(t & 1073741824)) return A = i !== null ? i.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, iA(pn, ce), ce |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, iA(pn, ce), ce |= r;
  }
  else i !== null ? (r = i.baseLanes | t, e.memoizedState = null) : r = t, iA(pn, ce), ce |= r;
  return zA(A, e, n, t), e.child;
}
function Hm(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Dc(A, e, t, r, n) {
  var i = ae(t) ? Dr : XA.current;
  return i = Tn(e, i), En(e, n), t = Sd(A, e, t, r, i, n), r = Ld(), A !== null && !re ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~n, wt(A, e, n)) : (fA && r && wd(e), e.flags |= 1, zA(A, e, t, n), e.child);
}
function Eg(A, e, t, r, n) {
  if (ae(t)) {
    var i = !0;
    Cs(e);
  } else i = !1;
  if (En(e, n), e.stateNode === null) Ya(A, e), ym(e, t, r), kc(e, t, r, n), r = !0;
  else if (A === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var s = o.context, l = t.contextType;
    typeof l == "object" && l !== null ? l = Ie(l) : (l = ae(t) ? Dr : XA.current, l = Tn(e, l));
    var u = t.getDerivedStateFromProps, c = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== l) && vg(e, o, r, l), Tt = !1;
    var f = e.memoizedState;
    o.state = f, Es(e, r, o, n), s = e.memoizedState, a !== r || f !== s || oe.current || Tt ? (typeof u == "function" && (Tc(e, t, u, r), s = e.memoizedState), (a = Tt || mg(e, t, a, r, f, s, l)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = s), o.props = r, o.state = s, o.context = l, r = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), r = !1);
  } else {
    o = e.stateNode, tm(A, e), a = e.memoizedProps, l = e.type === e.elementType ? a : ke(e.type, a), o.props = l, c = e.pendingProps, f = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ae(t) ? Dr : XA.current, s = Tn(e, s));
    var g = t.getDerivedStateFromProps;
    (u = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || f !== s) && vg(e, o, r, s), Tt = !1, f = e.memoizedState, o.state = f, Es(e, r, o, n);
    var p = e.memoizedState;
    a !== c || f !== p || oe.current || Tt ? (typeof g == "function" && (Tc(e, t, g, r), p = e.memoizedState), (l = Tt || mg(e, t, l, r, f, p, s) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, p, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, p, s)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = p), o.props = r, o.state = p, o.context = s, r = l) : (typeof o.componentDidUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === A.memoizedProps && f === A.memoizedState || (e.flags |= 1024), r = !1);
  }
  return Kc(A, e, t, r, i, n);
}
function Kc(A, e, t, r, n, i) {
  Hm(A, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return n && cg(e, t, !1), wt(A, e, i);
  r = e.stateNode, zy.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return e.flags |= 1, A !== null && o ? (e.child = On(e, A.child, null, i), e.child = On(e, null, a, i)) : zA(A, e, a, i), e.memoizedState = r.state, n && cg(e, t, !0), e.child;
}
function xm(A) {
  var e = A.stateNode;
  e.pendingContext ? ug(A, e.pendingContext, e.pendingContext !== e.context) : e.context && ug(A, e.context, !1), Ed(A, e.containerInfo);
}
function Ig(A, e, t, r, n) {
  return kn(), vd(n), e.flags |= 256, zA(A, e, t, r), e.child;
}
var Rc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nc(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function Sm(A, e, t) {
  var r = e.pendingProps, n = pA.current, i = !1, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0), a ? (i = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (n |= 1), iA(pA, n & 1), A === null)
    return Lc(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = r.children, A = r.fallback, i ? (r = e.mode, i = e.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = gl(o, r, 0, null), A = Sr(A, r, t, null), i.return = e, A.return = e, i.sibling = A, e.child = i, e.child.memoizedState = Nc(t), e.memoizedState = Rc, A) : kd(e, o));
  if (n = A.memoizedState, n !== null && (a = n.dehydrated, a !== null)) return Jy(A, e, o, r, a, n, t);
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
function Jy(A, e, t, r, n, i, o) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, r = mu(Error(H(422))), ta(A, e, o, r)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (i = r.fallback, n = e.mode, r = gl({ mode: "visible", children: r.children }, n, 0, null), i = Sr(i, n, o, null), i.flags |= 2, r.return = e, i.return = e, r.sibling = i, e.child = r, e.mode & 1 && On(e, A.child, null, o), e.child.memoizedState = Nc(o), e.memoizedState = Rc, i);
  if (!(e.mode & 1)) return ta(A, e, o, null);
  if (n.data === "$!") {
    if (r = n.nextSibling && n.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(H(419)), r = mu(i, r, void 0), ta(A, e, o, r);
  }
  if (a = (o & A.childLanes) !== 0, re || a) {
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
  return n.data === "$?" ? (e.flags |= 128, e.child = A.child, e = uF.bind(null, A), n._reactRetry = e, null) : (A = i.treeContext, fe = Xt(n.nextSibling), de = e, fA = !0, De = null, A !== null && (ve[Ce++] = ut, ve[Ce++] = ct, ve[Ce++] = Kr, ut = A.id, ct = A.overflow, Kr = e), e = kd(e, r.children), e.flags |= 4096, e);
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
function Lm(A, e, t) {
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
function Zy(A, e, t) {
  switch (e.tag) {
    case 3:
      xm(e), kn();
      break;
    case 5:
      rm(e);
      break;
    case 1:
      ae(e.type) && Cs(e);
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
        return r.dehydrated !== null ? (iA(pA, pA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? Sm(A, e, t) : (iA(pA, pA.current & 1), A = wt(A, e, t), A !== null ? A.sibling : null);
      iA(pA, pA.current & 1);
      break;
    case 19:
      if (r = (t & e.childLanes) !== 0, A.flags & 128) {
        if (r) return Lm(A, e, t);
        e.flags |= 128;
      }
      if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), iA(pA, pA.current), r) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Im(A, e, t);
  }
  return wt(A, e, t);
}
var bm, Mc, Tm, km;
bm = function(A, e) {
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
Tm = function(A, e, t, r) {
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
km = function(A, e, t, r) {
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
function qy(A, e, t) {
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
      return ae(e.type) && vs(), _A(e), null;
    case 3:
      return r = e.stateNode, Dn(), lA(oe), lA(XA), Hd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (A === null || A.child === null) && (Aa(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, De !== null && (jc(De), De = null))), Mc(A, e), _A(e), null;
    case 5:
      Id(e);
      var n = yr(ao.current);
      if (t = e.type, A !== null && e.stateNode != null) Tm(A, e, t, r, n), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
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
          o = n.nodeType === 9 ? n : n.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = sw(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = o.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof r.is == "string" ? A = o.createElement(t, { is: r.is }) : (A = o.createElement(t), t === "select" && (o = A, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : A = o.createElementNS(A, t), A[ze] = e, A[io] = r, bm(A, e, !1, !1), e.stateNode = A;
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
              i === "style" ? cw(A, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && lw(A, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && zi(A, s) : typeof s == "number" && zi(A, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Yi.hasOwnProperty(i) ? s != null && i === "onScroll" && oA("scroll", A) : s != null && nd(A, i, s, o));
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
      if (A && e.stateNode != null) km(A, e, A.memoizedProps, r);
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
        if (fA && fe !== null && e.mode & 1 && !(e.flags & 128)) Zw(), kn(), e.flags |= 98560, i = !1;
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
      return ae(e.type) && vs(), _A(e), null;
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
      return Nd(), r = e.memoizedState !== null, A !== null && A.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? ce & 1073741824 && (_A(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _A(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, e.tag));
}
function AF(A, e) {
  switch (md(e), e.tag) {
    case 1:
      return ae(e.type) && vs(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Dn(), lA(oe), lA(XA), Hd(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
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
var ra = !1, WA = !1, eF = typeof WeakSet == "function" ? WeakSet : Set, O = null;
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
function tF(A, e) {
  if (Fc = ps, A = Nw(), hd(A)) {
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
  return p = xg, xg = !1, p;
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
function Om(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, Om(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[ze], delete e[io], delete e[Hc], delete e[Ry], delete e[Ny])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function Dm(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function Sg(A) {
  A: for (; ; ) {
    for (; A.sibling === null; ) {
      if (A.return === null || Dm(A.return)) return null;
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
  for (t = t.child; t !== null; ) Km(A, e, t), t = t.sibling;
}
function Km(A, e, t) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
    Ze.onCommitFiberUnmount(il, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      WA || gn(t, e);
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
      if (!WA && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        n = r = r.next;
        do {
          var i = n, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Pc(t, e, o), n = n.next;
        } while (n !== r);
      }
      Et(A, e, t);
      break;
    case 1:
      if (!WA && (gn(t, e), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      t.mode & 1 ? (WA = (r = WA) || t.memoizedState !== null, Et(A, e, t), WA = r) : Et(A, e, t);
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
    t === null && (t = A.stateNode = new eF()), e.forEach(function(r) {
      var n = cF.bind(null, A, r);
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
      Km(i, o, n), DA = null, Oe = !1;
      var s = n.alternate;
      s !== null && (s.return = null), n.return = null;
    } catch (l) {
      vA(n, e, l);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Rm(e, A), e = e.sibling;
}
function Rm(A, e) {
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
          a === "input" && i.type === "radio" && i.name != null && ow(n, i), Bc(a, o);
          var l = Bc(a, i);
          for (o = 0; o < s.length; o += 2) {
            var u = s[o], c = s[o + 1];
            u === "style" ? cw(n, c) : u === "dangerouslySetInnerHTML" ? lw(n, c) : u === "children" ? zi(n, c) : nd(n, u, c, l);
          }
          switch (a) {
            case "input":
              lc(n, i);
              break;
            case "textarea":
              aw(n, i);
              break;
            case "select":
              var f = n._wrapperState.wasMultiple;
              n._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              g != null ? Qn(n, !!i.multiple, g, !1) : f !== !!i.multiple && (i.defaultValue != null ? Qn(
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
      if (u = t !== null && t.memoizedState !== null, A.mode & 1 ? (WA = (l = WA) || u, Le(e, A), WA = l) : Le(e, A), $e(A), r & 8192) {
        if (l = A.memoizedState !== null, (A.stateNode.isHidden = l) && !u && A.mode & 1) for (O = A, u = A.child; u !== null; ) {
          for (c = O = u; O !== null; ) {
            switch (f = O, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Di(4, f, f.return);
                break;
              case 1:
                gn(f, f.return);
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
                gn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Tg(c);
                  continue;
                }
            }
            g !== null ? (g.return = f, O = g) : Tg(c);
          }
          u = u.sibling;
        }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                n = c.stateNode, l ? (i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, s = c.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, a.style.display = uw("display", o));
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
          if (Dm(t)) {
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
function rF(A, e, t) {
  O = A, Nm(A);
}
function Nm(A, e, t) {
  for (var r = (A.mode & 1) !== 0; O !== null; ) {
    var n = O, i = n.child;
    if (n.tag === 22 && r) {
      var o = n.memoizedState !== null || ra;
      if (!o) {
        var a = n.alternate, s = a !== null && a.memoizedState !== null || WA;
        a = ra;
        var l = WA;
        if (ra = o, (WA = s) && !l) for (O = n; O !== null; ) o = O, s = o.child, o.tag === 22 && o.memoizedState !== null ? kg(n) : s !== null ? (s.return = o, O = s) : kg(n);
        for (; i !== null; ) O = i, Nm(i), i = i.sibling;
        O = n, ra = a, WA = l;
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
            WA || dl(5, e);
            break;
          case 1:
            var r = e.stateNode;
            if (e.flags & 4 && !WA) if (t === null) r.componentDidMount();
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
        WA || e.flags & 512 && _c(e);
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
var nF = Math.ceil, Ss = yt.ReactCurrentDispatcher, Od = yt.ReactCurrentOwner, Ee = yt.ReactCurrentBatchConfig, Z = 0, OA = null, IA = null, NA = 0, ce = 0, pn = ur(0), SA = 0, co = null, Nr = 0, Bl = 0, Dd = 0, Ki = null, te = null, Kd = 0, Rn = 1 / 0, ot = null, Ls = !1, $c = null, Yt = null, na = !1, Nt = null, bs = 0, Ri = 0, Wc = null, za = -1, Ja = 0;
function JA() {
  return Z & 6 ? FA() : za !== -1 ? za : za = FA();
}
function zt(A) {
  return A.mode & 1 ? Z & 2 && NA !== 0 ? NA & -NA : Py.transition !== null ? (Ja === 0 && (Ja = yw()), Ja) : (A = eA, A !== 0 || (A = window.event, A = A === void 0 ? 16 : Sw(A.type)), A) : 1;
}
function Me(A, e, t, r) {
  if (50 < Ri) throw Ri = 0, Wc = null, Error(H(185));
  Io(A, t, r), (!(Z & 2) || A !== OA) && (A === OA && (!(Z & 2) && (Bl |= t), SA === 4 && Dt(A, NA)), se(A, r), t === 1 && Z === 0 && !(e.mode & 1) && (Rn = FA() + 500, ul && cr()));
}
function se(A, e) {
  var t = A.callbackNode;
  PQ(A, e);
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) t !== null && VB(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = r & -r, A.callbackPriority !== e) {
    if (t != null && VB(t), e === 1) A.tag === 0 ? My(Og.bind(null, A)) : Yw(Og.bind(null, A)), Dy(function() {
      !(Z & 6) && cr();
    }), t = null;
    else {
      switch (Fw(r)) {
        case 1:
          t = ld;
          break;
        case 4:
          t = Cw;
          break;
        case 16:
          t = Bs;
          break;
        case 536870912:
          t = Qw;
          break;
        default:
          t = Bs;
      }
      t = Xm(t, Mm.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function Mm(A, e) {
  if (za = -1, Ja = 0, Z & 6) throw Error(H(327));
  var t = A.callbackNode;
  if (In() && A.callbackNode !== t) return null;
  var r = gs(A, A === OA ? NA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = Ts(A, r);
  else {
    e = r;
    var n = Z;
    Z |= 2;
    var i = _m();
    (OA !== A || NA !== e) && (ot = null, Rn = FA() + 500, xr(A, e));
    do
      try {
        aF();
        break;
      } catch (a) {
        Pm(A, a);
      }
    while (!0);
    Qd(), Ss.current = i, Z = n, IA !== null ? e = 0 : (OA = null, NA = 0, e = SA);
  }
  if (e !== 0) {
    if (e === 2 && (n = mc(A), n !== 0 && (r = n, e = Xc(A, n))), e === 1) throw t = co, xr(A, 0), Dt(A, r), se(A, FA()), t;
    if (e === 6) Dt(A, r);
    else {
      if (n = A.current.alternate, !(r & 30) && !iF(n) && (e = Ts(A, r), e === 2 && (i = mc(A), i !== 0 && (r = i, e = Xc(A, i))), e === 1)) throw t = co, xr(A, 0), Dt(A, r), se(A, FA()), t;
      switch (A.finishedWork = n, A.finishedLanes = r, e) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          hr(A, te, ot);
          break;
        case 3:
          if (Dt(A, r), (r & 130023424) === r && (e = Kd + 500 - FA(), 10 < e)) {
            if (gs(A, 0) !== 0) break;
            if (n = A.suspendedLanes, (n & r) !== r) {
              JA(), A.pingedLanes |= A.suspendedLanes & n;
              break;
            }
            A.timeoutHandle = Ic(hr.bind(null, A, te, ot), e);
            break;
          }
          hr(A, te, ot);
          break;
        case 4:
          if (Dt(A, r), (r & 4194240) === r) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var o = 31 - Ne(r);
            i = 1 << o, o = e[o], o > n && (n = o), r &= ~i;
          }
          if (r = n, r = FA() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * nF(r / 1960)) - r, 10 < r) {
            A.timeoutHandle = Ic(hr.bind(null, A, te, ot), r);
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
  return se(A, FA()), A.callbackNode === t ? Mm.bind(null, A) : null;
}
function Xc(A, e) {
  var t = Ki;
  return A.current.memoizedState.isDehydrated && (xr(A, e).flags |= 256), A = Ts(A, e), A !== 2 && (e = te, te = t, e !== null && jc(e)), A;
}
function jc(A) {
  te === null ? te = A : te.push.apply(te, A);
}
function iF(A) {
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
  if (Z & 6) throw Error(H(327));
  In();
  var e = gs(A, 0);
  if (!(e & 1)) return se(A, FA()), null;
  var t = Ts(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = mc(A);
    r !== 0 && (e = r, t = Xc(A, r));
  }
  if (t === 1) throw t = co, xr(A, 0), Dt(A, e), se(A, FA()), t;
  if (t === 6) throw Error(H(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, hr(A, te, ot), se(A, FA()), null;
}
function Rd(A, e) {
  var t = Z;
  Z |= 1;
  try {
    return A(e);
  } finally {
    Z = t, Z === 0 && (Rn = FA() + 500, ul && cr());
  }
}
function Mr(A) {
  Nt !== null && Nt.tag === 0 && !(Z & 6) && In();
  var e = Z;
  Z |= 1;
  var t = Ee.transition, r = eA;
  try {
    if (Ee.transition = null, eA = 1, A) return A();
  } finally {
    eA = r, Ee.transition = t, Z = e, !(Z & 6) && cr();
  }
}
function Nd() {
  ce = pn.current, lA(pn);
}
function xr(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, Oy(t)), IA !== null) for (t = IA.return; t !== null; ) {
    var r = t;
    switch (md(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && vs();
        break;
      case 3:
        Dn(), lA(oe), lA(XA), Hd();
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
  if (OA = A, IA = A = Jt(A.current, null), NA = ce = e, SA = 0, co = null, Dd = Bl = Nr = 0, te = Ki = null, Qr !== null) {
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
function Pm(A, e) {
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
          var g = Qg(o);
          if (g !== null) {
            g.flags &= -257, yg(g, o, a, i, e), g.mode & 1 && Cg(i, l, e), e = g, s = l;
            var p = e.updateQueue;
            if (p === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), e.updateQueue = w;
            } else p.add(s);
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
              var B = Fm(i, s, e);
              gg(i, B);
              break A;
            case 1:
              a = s;
              var d = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yt === null || !Yt.has(h)))) {
                i.flags |= 65536, e &= -e, i.lanes |= e;
                var m = Um(i, a, e);
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
function _m() {
  var A = Ss.current;
  return Ss.current = xs, A === null ? xs : A;
}
function Md() {
  (SA === 0 || SA === 3 || SA === 2) && (SA = 4), OA === null || !(Nr & 268435455) && !(Bl & 268435455) || Dt(OA, NA);
}
function Ts(A, e) {
  var t = Z;
  Z |= 2;
  var r = _m();
  (OA !== A || NA !== e) && (ot = null, xr(A, e));
  do
    try {
      oF();
      break;
    } catch (n) {
      Pm(A, n);
    }
  while (!0);
  if (Qd(), Z = t, Ss.current = r, IA !== null) throw Error(H(261));
  return OA = null, NA = 0, SA;
}
function oF() {
  for (; IA !== null; ) Vm(IA);
}
function aF() {
  for (; IA !== null && !bQ(); ) Vm(IA);
}
function Vm(A) {
  var e = Wm(A.alternate, A, ce);
  A.memoizedProps = A.pendingProps, e === null ? Gm(A) : IA = e, Od.current = null;
}
function Gm(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = AF(t, e), t !== null) {
        t.flags &= 32767, IA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        SA = 6, IA = null;
        return;
      }
    } else if (t = qy(t, e, ce), t !== null) {
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
    Ee.transition = null, eA = 1, sF(A, e, t, r);
  } finally {
    Ee.transition = n, eA = r;
  }
  return null;
}
function sF(A, e, t, r) {
  do
    In();
  while (Nt !== null);
  if (Z & 6) throw Error(H(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(H(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (_Q(A, i), A === OA && (IA = OA = null, NA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || na || (na = !0, Xm(Bs, function() {
    return In(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var o = eA;
    eA = 1;
    var a = Z;
    Z |= 4, Od.current = null, tF(A, t), Rm(t, A), Hy(Uc), ps = !!Fc, Uc = Fc = null, A.current = t, rF(t), TQ(), Z = a, eA = o, Ee.transition = i;
  } else A.current = t;
  if (na && (na = !1, Nt = A, bs = n), i = A.pendingLanes, i === 0 && (Yt = null), DQ(t.stateNode), se(A, FA()), e !== null) for (r = A.onRecoverableError, t = 0; t < e.length; t++) n = e[t], r(n.value, { componentStack: n.stack, digest: n.digest });
  if (Ls) throw Ls = !1, A = $c, $c = null, A;
  return bs & 1 && A.tag !== 0 && In(), i = A.pendingLanes, i & 1 ? A === Wc ? Ri++ : (Ri = 0, Wc = A) : Ri = 0, cr(), null;
}
function In() {
  if (Nt !== null) {
    var A = Fw(bs), e = Ee.transition, t = eA;
    try {
      if (Ee.transition = null, eA = 16 > A ? 16 : A, Nt === null) var r = !1;
      else {
        if (A = Nt, Nt = null, bs = 0, Z & 6) throw Error(H(331));
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
                      Di(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) c.return = u, O = c;
                  else for (; O !== null; ) {
                    u = O;
                    var f = u.sibling, g = u.return;
                    if (Om(u), u === l) {
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
                Di(9, i, i.return);
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
        if (Z = n, cr(), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
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
  e = Kn(t, e), e = Fm(A, e, 1), A = jt(A, e, 1), e = JA(), A !== null && (Io(A, 1, e), se(A, e));
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
        A = Kn(t, A), A = Um(e, A, 1), e = jt(e, A, 1), A = JA(), e !== null && (Io(e, 1, A), se(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function lF(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e), e = JA(), A.pingedLanes |= A.suspendedLanes & t, OA === A && (NA & t) === t && (SA === 4 || SA === 3 && (NA & 130023424) === NA && 500 > FA() - Kd ? xr(A, 0) : Dd |= t), se(A, e);
}
function $m(A, e) {
  e === 0 && (A.mode & 1 ? (e = jo, jo <<= 1, !(jo & 130023424) && (jo = 4194304)) : e = 1);
  var t = JA();
  A = ht(A, e), A !== null && (Io(A, e, t), se(A, t));
}
function uF(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), $m(A, t);
}
function cF(A, e) {
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
  r !== null && r.delete(e), $m(A, t);
}
var Wm;
Wm = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || oe.current) re = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return re = !1, Zy(A, e, t);
    re = !!(A.flags & 131072);
  }
  else re = !1, fA && e.flags & 1048576 && zw(e, ys, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var r = e.type;
      Ya(A, e), A = e.pendingProps;
      var n = Tn(e, XA.current);
      En(e, t), n = Sd(null, e, r, A, n, t);
      var i = Ld();
      return e.flags |= 1, typeof n == "object" && n !== null && typeof n.render == "function" && n.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, ae(r) ? (i = !0, Cs(e)) : i = !1, e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, Ud(e), n.updater = fl, e.stateNode = n, n._reactInternals = e, kc(e, r, A, t), e = Kc(null, e, r, !0, i, t)) : (e.tag = 0, fA && i && wd(e), zA(null, e, n, t), e = e.child), e;
    case 16:
      r = e.elementType;
      A: {
        switch (Ya(A, e), A = e.pendingProps, n = r._init, r = n(r._payload), e.type = r, n = e.tag = dF(r), A = ke(r, A), n) {
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
        if (xm(e), A === null) throw Error(H(387));
        r = e.pendingProps, i = e.memoizedState, n = i.element, tm(A, e), Es(e, r, null, t);
        var o = e.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
          n = Kn(Error(H(423)), e), e = Ig(A, e, r, t, n);
          break A;
        } else if (r !== n) {
          n = Kn(Error(H(424)), e), e = Ig(A, e, r, t, n);
          break A;
        } else for (fe = Xt(e.stateNode.containerInfo.firstChild), de = e, fA = !0, De = null, t = Am(e, null, r, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (kn(), r === n) {
            e = wt(A, e, t);
            break A;
          }
          zA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return rm(e), A === null && Lc(e), r = e.type, n = e.pendingProps, i = A !== null ? A.memoizedProps : null, o = n.children, Ec(r, n) ? o = null : i !== null && Ec(r, i) && (e.flags |= 32), Hm(A, e), zA(A, e, o, t), e.child;
    case 6:
      return A === null && Lc(e), null;
    case 13:
      return Sm(A, e, t);
    case 4:
      return Ed(e, e.stateNode.containerInfo), r = e.pendingProps, A === null ? e.child = On(e, null, r, t) : zA(A, e, r, t), e.child;
    case 11:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Fg(A, e, r, n, t);
    case 7:
      return zA(A, e, e.pendingProps, t), e.child;
    case 8:
      return zA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return zA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (r = e.type._context, n = e.pendingProps, i = e.memoizedProps, o = n.value, iA(Fs, r._currentValue), r._currentValue = o, i !== null) if (_e(i.value, o)) {
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
      return n = e.type, r = e.pendingProps.children, En(e, t), n = Ie(n), r = r(n), e.flags |= 1, zA(A, e, r, t), e.child;
    case 14:
      return r = e.type, n = ke(r, e.pendingProps), n = ke(r.type, n), Ug(A, e, r, n, t);
    case 15:
      return Em(A, e, e.type, e.pendingProps, t);
    case 17:
      return r = e.type, n = e.pendingProps, n = e.elementType === r ? n : ke(r, n), Ya(A, e), e.tag = 1, ae(r) ? (A = !0, Cs(e)) : A = !1, En(e, t), ym(e, r, n), kc(e, r, n, t), Kc(null, e, r, !0, A, t);
    case 19:
      return Lm(A, e, t);
    case 22:
      return Im(A, e, t);
  }
  throw Error(H(156, e.tag));
};
function Xm(A, e) {
  return vw(A, e);
}
function fF(A, e, t, r) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ye(A, e, t, r) {
  return new fF(A, e, t, r);
}
function Pd(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function dF(A) {
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
    case rw:
      return gl(t, n, i, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case ew:
          o = 10;
          break A;
        case tw:
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
  return A = ye(22, A, r, e), A.elementType = rw, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function Cu(A, e, t) {
  return A = ye(6, A, null, e), A.lanes = t, A;
}
function Qu(A, e, t) {
  return e = ye(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function BF(A, e, t, r, n) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tu(0), this.expirationTimes = tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tu(0), this.identifierPrefix = r, this.onRecoverableError = n, this.mutableSourceEagerHydrationData = null;
}
function _d(A, e, t, r, n, i, o, a, s) {
  return A = new BF(A, e, t, a, s), e === 1 ? (e = 1, i === !0 && (e |= 8)) : e = 0, i = ye(3, null, null, e), A.current = i, i.stateNode = A, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ud(i), A;
}
function gF(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: nn, key: r == null ? null : "" + r, children: A, containerInfo: e, implementation: t };
}
function jm(A) {
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
function Ym(A, e, t, r, n, i, o, a, s) {
  return A = _d(t, r, !0, A, n, i, o, a, s), A.context = jm(null), t = A.current, r = JA(), n = zt(t), i = ft(r, n), i.callback = e ?? null, jt(t, i, n), A.current.lanes = n, Io(A, n, r), se(A, r), A;
}
function pl(A, e, t, r) {
  var n = e.current, i = JA(), o = zt(n);
  return t = jm(t), e.context === null ? e.context = t : e.pendingContext = t, e = ft(i, o), e.payload = { element: A }, r = r === void 0 ? null : r, r !== null && (e.callback = r), A = jt(n, e, o), A !== null && (Me(A, n, o, i), Wa(A, n, o)), o;
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
function pF() {
  return null;
}
var zm = typeof reportError == "function" ? reportError : function(A) {
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
    var e = Iw();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Ot.length && e !== 0 && e < Ot[t].priority; t++) ;
    Ot.splice(t, 0, A), t === 0 && xw(A);
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
function hF(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var l = ks(o);
        i.call(l);
      };
    }
    var o = Ym(e, r, A, 0, null, !1, !1, "", Rg);
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
  } else o = hF(t, e, A, n, r);
  return ks(o);
}
Uw = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = wi(e.pendingLanes);
        t !== 0 && (ud(e, t | 1), se(e, FA()), !(Z & 6) && (Rn = FA() + 500, cr()));
      }
      break;
    case 13:
      Mr(function() {
        var r = ht(A, 1);
        if (r !== null) {
          var n = JA();
          Me(r, A, 1, n);
        }
      }), Vd(A, 1);
  }
};
cd = function(A) {
  if (A.tag === 13) {
    var e = ht(A, 134217728);
    if (e !== null) {
      var t = JA();
      Me(e, A, 134217728, t);
    }
    Vd(A, 134217728);
  }
};
Ew = function(A) {
  if (A.tag === 13) {
    var e = zt(A), t = ht(A, e);
    if (t !== null) {
      var r = JA();
      Me(t, A, e, r);
    }
    Vd(A, e);
  }
};
Iw = function() {
  return eA;
};
Hw = function(A, e) {
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
            iw(r), lc(r, n);
          }
        }
      }
      break;
    case "textarea":
      aw(A, t);
      break;
    case "select":
      e = t.value, e != null && Qn(A, !!t.multiple, e, !1);
  }
};
Bw = Rd;
gw = Mr;
var wF = { usingClientEntryPoint: !1, Events: [xo, un, ll, fw, dw, Rd] }, ui = { findFiberByHostInstance: Cr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mF = { bundleType: ui.bundleType, version: ui.version, rendererPackageName: ui.rendererPackageName, rendererConfig: ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = ww(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: ui.findFiberByHostInstance || pF, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ia.isDisabled && ia.supportsFiber) try {
    il = ia.inject(mF), Ze = ia;
  } catch {
  }
}
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wF;
pe.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$d(e)) throw Error(H(200));
  return gF(A, e, null, t);
};
pe.createRoot = function(A, e) {
  if (!$d(A)) throw Error(H(299));
  var t = !1, r = "", n = zm;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = _d(A, 1, !1, null, null, t, !1, r, n), A[pt] = e.current, ro(A.nodeType === 8 ? A.parentNode : A), new Gd(e);
};
pe.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(H(188)) : (A = Object.keys(A).join(","), Error(H(268, A)));
  return A = ww(e), A = A === null ? null : A.stateNode, A;
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
  var r = t != null && t.hydratedSources || null, n = !1, i = "", o = zm;
  if (t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = Ym(e, null, A, 1, t ?? null, n, !1, i, o), A[pt] = e.current, ro(A), r) for (A = 0; A < r.length; A++) t = r[A], n = t._getVersion, n = n(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, n] : e.mutableSourceEagerHydrationData.push(
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
function Jm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm);
    } catch (A) {
      console.error(A);
    }
}
Jm(), Jh.exports = pe;
var vl = Jh.exports;
const vF = /* @__PURE__ */ rl(vl), CF = "_dialog_uavra_1", QF = "_overlay_uavra_6", yF = "_container_uavra_13", FF = "_dialogPanel_uavra_24", UF = "_searchIcon_uavra_34", EF = "_inputField_uavra_45", IF = "_inputWrapper_uavra_58", HF = "_loading_uavra_64", xF = "_gradientShift_uavra_1", It = {
  dialog: CF,
  overlay: QF,
  container: yF,
  dialogPanel: FF,
  searchIcon: UF,
  inputField: EF,
  inputWrapper: IF,
  loading: HF,
  gradientShift: xF
};
var SF = Object.defineProperty, LF = (A, e, t) => e in A ? SF(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, yu = (A, e, t) => (LF(A, typeof e != "symbol" ? e + "" : e, t), t);
let bF = class {
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
}, Lr = new bF();
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
let ZA = (A, e) => {
  Lr.isServer ? Q.useEffect(A, e) : Q.useLayoutEffect(A, e);
};
function Wr(A) {
  let e = Q.useRef(A);
  return ZA(() => {
    e.current = A;
  }, [A]), e;
}
let hA = function(A) {
  let e = Wr(A);
  return P.useCallback((...t) => e.current(...t), [e]);
}, TF = Q.createContext(void 0);
function kF() {
  return Q.useContext(TF);
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
  a = a ?? OF;
  let s = Zm(e, A);
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
    let f = u.props, g = f == null ? void 0 : f.className, p = typeof g == "function" ? (...B) => Yc(g(...B), s.className) : Yc(g, s.className), w = p ? { className: p } : {}, y = Zm(u.props, wr(Fu(s, ["ref"])));
    for (let B in c) B in y && delete c[B];
    return Q.cloneElement(u, Object.assign({}, y, c, l, { ref: n(u.ref, l.ref) }, w));
  }
  return Q.createElement(i, Object.assign({}, Fu(s, ["ref"]), i !== Q.Fragment && l, i !== Q.Fragment && c), u);
}
function OF(...A) {
  return A.every((e) => e == null) ? void 0 : (e) => {
    for (let t of A) t != null && (typeof t == "function" ? t(e) : t.current = e);
  };
}
function Zm(...A) {
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
function Fu(A, e = []) {
  let t = Object.assign({}, A);
  for (let r of e) r in t && delete t[r];
  return t;
}
let DF = "div";
var Ds = ((A) => (A[A.None = 1] = "None", A[A.Focusable = 2] = "Focusable", A[A.Hidden = 4] = "Hidden", A))(Ds || {});
function KF(A, e) {
  var t;
  let { features: r = 1, ...n } = A, i = { ref: e, "aria-hidden": (r & 2) === 2 ? !0 : (t = n["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se({ ourProps: i, theirProps: n, slot: {}, defaultTag: DF, name: "Hidden" });
}
let zc = le(KF), RF = Q.createContext(null);
function NF({ children: A }) {
  let e = Q.useContext(RF);
  if (!e) return P.createElement(P.Fragment, null, A);
  let { target: t } = e;
  return t ? vl.createPortal(P.createElement(P.Fragment, null, A), t) : null;
}
let qm = Symbol();
function MF(A, e = !0) {
  return Object.assign(A, { [qm]: e });
}
function et(...A) {
  let e = Q.useRef(A);
  Q.useEffect(() => {
    e.current = A;
  }, [A]);
  let t = hA((r) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(r) : n.current = r);
  });
  return A.every((r) => r == null || (r == null ? void 0 : r[qm])) ? void 0 : t;
}
let jd = Q.createContext(null);
jd.displayName = "DescriptionContext";
function A0() {
  let A = Q.useContext(jd);
  if (A === null) {
    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e, A0), e;
  }
  return A;
}
function PF() {
  let [A, e] = Q.useState([]);
  return [A.length > 0 ? A.join(" ") : void 0, Q.useMemo(() => function(t) {
    let r = hA((i) => (e((o) => [...o, i]), () => e((o) => {
      let a = o.slice(), s = a.indexOf(i);
      return s !== -1 && a.splice(s, 1), a;
    }))), n = Q.useMemo(() => ({ register: r, slot: t.slot, name: t.name, props: t.props, value: t.value }), [r, t.slot, t.name, t.props, t.value]);
    return P.createElement(jd.Provider, { value: n }, t.children);
  }, [e])];
}
let _F = "p";
function VF(A, e) {
  let t = Q.useId(), r = kF(), { id: n = `headlessui-description-${t}`, ...i } = A, o = A0(), a = et(e);
  ZA(() => o.register(n), [n, o.register]);
  let s = r || !1, l = Q.useMemo(() => ({ ...o.slot, disabled: s }), [o.slot, s]), u = { ref: a, ...o.props, id: n };
  return Se({ ourProps: u, theirProps: i, slot: l, defaultTag: _F, name: o.name || "Description" });
}
let GF = le(VF), $F = Object.assign(GF, {});
var e0 = ((A) => (A.Space = " ", A.Enter = "Enter", A.Escape = "Escape", A.Backspace = "Backspace", A.Delete = "Delete", A.ArrowLeft = "ArrowLeft", A.ArrowUp = "ArrowUp", A.ArrowRight = "ArrowRight", A.ArrowDown = "ArrowDown", A.Home = "Home", A.End = "End", A.PageUp = "PageUp", A.PageDown = "PageDown", A.Tab = "Tab", A))(e0 || {});
let WF = Q.createContext(() => {
});
function XF({ value: A, children: e }) {
  return P.createElement(WF.Provider, { value: A }, e);
}
let jF = class extends Map {
  constructor(e) {
    super(), this.factory = e;
  }
  get(e) {
    let t = super.get(e);
    return t === void 0 && (t = this.factory(e), this.set(e, t)), t;
  }
};
function t0(A, e) {
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
function r0(A) {
  return Q.useSyncExternalStore(A.subscribe, A.getSnapshot, A.getSnapshot);
}
let YF = new jF(() => t0(() => [], { ADD(A) {
  return this.includes(A) ? this : [...this, A];
}, REMOVE(A) {
  let e = this.indexOf(A);
  if (e === -1) return this;
  let t = this.slice();
  return t.splice(e, 1), t;
} }));
function Jn(A, e) {
  let t = YF.get(e), r = Q.useId(), n = r0(t);
  if (ZA(() => {
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
function zF(A, { allowed: e, disallowed: t } = {}) {
  let r = Jn(A, "inert-others");
  ZA(() => {
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
function n0(A, e, t) {
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
let Zc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((A) => `${A}:not([tabindex='-1'])`).join(","), JF = ["[data-autofocus]"].map((A) => `${A}:not([tabindex='-1'])`).join(",");
var lt = ((A) => (A[A.First = 1] = "First", A[A.Previous = 2] = "Previous", A[A.Next = 4] = "Next", A[A.Last = 8] = "Last", A[A.WrapAround = 16] = "WrapAround", A[A.NoScroll = 32] = "NoScroll", A[A.AutoFocus = 64] = "AutoFocus", A))(lt || {}), qc = ((A) => (A[A.Error = 0] = "Error", A[A.Overflow = 1] = "Overflow", A[A.Success = 2] = "Success", A[A.Underflow = 3] = "Underflow", A))(qc || {}), ZF = ((A) => (A[A.Previous = -1] = "Previous", A[A.Next = 1] = "Next", A))(ZF || {});
function qF(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(Zc)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function AU(A = document.body) {
  return A == null ? [] : Array.from(A.querySelectorAll(JF)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var i0 = ((A) => (A[A.Strict = 0] = "Strict", A[A.Loose = 1] = "Loose", A))(i0 || {});
function eU(A, e = 0) {
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
var tU = ((A) => (A[A.Keyboard = 0] = "Keyboard", A[A.Mouse = 1] = "Mouse", A))(tU || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (A) => {
  A.metaKey || A.altKey || A.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (A) => {
  A.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : A.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function dt(A) {
  A == null || A.focus({ preventScroll: !0 });
}
let rU = ["textarea", "input"].join(",");
function nU(A) {
  var e, t;
  return (t = (e = A == null ? void 0 : A.matches) == null ? void 0 : e.call(A, rU)) != null ? t : !1;
}
function iU(A, e = (t) => t) {
  return A.slice().sort((t, r) => {
    let n = e(t), i = e(r);
    if (n === null || i === null) return 0;
    let o = n.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Mi(A, e, { sorted: t = !0, relativeTo: r = null, skipElements: n = [] } = {}) {
  let i = Array.isArray(A) ? A.length > 0 ? A[0].ownerDocument : document : A.ownerDocument, o = Array.isArray(A) ? t ? iU(A) : A : e & 64 ? AU(A) : qF(A);
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
  return e & 6 && nU(f) && f.select(), 2;
}
function o0() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function oU() {
  return /Android/gi.test(window.navigator.userAgent);
}
function aU() {
  return o0() || oU();
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
function a0(A, e, t, r) {
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
function sU(A, e, t) {
  let r = Jn(A, "outside-click"), n = Wr(t), i = Q.useCallback(function(s, l) {
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
    return !eU(u, i0.Loose) && u.tabIndex !== -1 && s.preventDefault(), n.current(s, u);
  }, [n]), o = Q.useRef(null);
  ci(r, "pointerdown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ci(r, "mousedown", (s) => {
    var l, u;
    o.current = ((u = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : u[0]) || s.target;
  }, !0), ci(r, "click", (s) => {
    aU() || o.current && (i(s, () => o.current), o.current = null);
  }, !0);
  let a = Q.useRef({ x: 0, y: 0 });
  ci(r, "touchstart", (s) => {
    a.current.x = s.touches[0].clientX, a.current.y = s.touches[0].clientY;
  }, !0), ci(r, "touchend", (s) => {
    let l = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(l.x - a.current.x) >= Pg || Math.abs(l.y - a.current.y) >= Pg)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), a0(r, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Lo(...A) {
  return Q.useMemo(() => Wd(...A), [...A]);
}
function s0(A, e, t, r) {
  let n = Wr(t);
  Q.useEffect(() => {
    A = A ?? window;
    function i(o) {
      n.current(o);
    }
    return A.addEventListener(e, i, r), () => A.removeEventListener(e, i, r);
  }, [A, e, r]);
}
function lU() {
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
function uU() {
  return o0() ? { before({ doc: A, d: e, meta: t }) {
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
function cU() {
  return { before({ doc: A, d: e }) {
    e.style(A.documentElement, "overflow", "hidden");
  } };
}
function fU(A) {
  let e = {};
  for (let t of A) Object.assign(e, t(e));
  return e;
}
let Fr = t0(() => /* @__PURE__ */ new Map(), { PUSH(A, e) {
  var t;
  let r = (t = this.get(A)) != null ? t : { doc: A, count: 0, d: fr(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(e), this.set(A, r), this;
}, POP(A, e) {
  let t = this.get(A);
  return t && (t.count--, t.meta.delete(e)), this;
}, SCROLL_PREVENT({ doc: A, d: e, meta: t }) {
  let r = { doc: A, d: e, meta: fU(t) }, n = [uU(), lU(), cU()];
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
function dU(A, e, t = () => ({ containers: [] })) {
  let r = r0(Fr), n = e ? r.get(e) : void 0, i = n ? n.count > 0 : !1;
  return ZA(() => {
    if (!(!e || !A)) return Fr.dispatch("PUSH", e, t), () => Fr.dispatch("POP", e, t);
  }, [A, e]), i;
}
function BU(A, e, t = () => [document.body]) {
  let r = Jn(A, "scroll-lock");
  dU(r, e, (n) => {
    var i;
    return { containers: [...(i = n.containers) != null ? i : [], t] };
  });
}
function gU(A) {
  let e = { called: !1 };
  return (...t) => {
    if (!e.called) return e.called = !0, A(...t);
  };
}
function pU(A = 0) {
  let [e, t] = Q.useState(A), r = Q.useCallback((s) => t(s), [e]), n = Q.useCallback((s) => t((l) => l | s), [e]), i = Q.useCallback((s) => (e & s) === s, [e]), o = Q.useCallback((s) => t((l) => l & ~s), [t]), a = Q.useCallback((s) => t((l) => l ^ s), [t]);
  return { flags: e, setFlag: r, addFlag: n, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var hU = ((A) => (A[A.None = 0] = "None", A[A.Closed = 1] = "Closed", A[A.Enter = 2] = "Enter", A[A.Leave = 4] = "Leave", A))(hU || {});
function wU(A) {
  let e = {};
  for (let t in A) A[t] === !0 && (e[`data-${t}`] = "");
  return e;
}
function mU(A, e, t, r) {
  let [n, i] = Q.useState(t), { hasFlag: o, addFlag: a, removeFlag: s } = pU(A && n ? 3 : 0), l = Q.useRef(!1), u = Q.useRef(!1), c = Xd();
  return ZA(function f() {
    var g;
    if (!A) return;
    t && i(!0);
    let p = e.current;
    return p ? ((g = r == null ? void 0 : r.start) == null || g.call(r, t), vU(p, { inFlight: l, prepare() {
      u.current ? u.current = !1 : u.current = l.current, l.current = !0, !u.current && (t ? (a(3), s(4)) : (a(4), s(2)));
    }, run() {
      u.current ? t ? (s(3), a(4)) : (s(4), a(3)) : t ? s(1) : a(1);
    }, done() {
      var w;
      u.current && typeof p.getAnimations == "function" && p.getAnimations().length > 0 || (l.current = !1, s(7), t || i(!1), (w = r == null ? void 0 : r.end) == null || w.call(r, t));
    } })) : t ? (a(3), c.nextFrame(() => f())) : void 0;
  }, [A, t, e, c]), A ? [n, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function vU(A, { prepare: e, run: t, done: r, inFlight: n }) {
  let i = fr();
  return QU(A, { prepare: e, inFlight: n }), i.nextFrame(() => {
    i.add(CU(A, r)), t();
  }), i.dispose;
}
function CU(A, e) {
  let t = gU(e), r = fr();
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
function QU(A, { inFlight: e, prepare: t }) {
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
  return l0(A) ? (A.nodeName || "").toLowerCase() : "#document";
}
function Be(A) {
  var e;
  return (A == null || (e = A.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dr(A) {
  var e;
  return (e = (l0(A) ? A.ownerDocument : A.document) || window.document) == null ? void 0 : e.documentElement;
}
function l0(A) {
  return A instanceof Node || A instanceof Be(A).Node;
}
function ne(A) {
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
function yU(A) {
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
function FU(A) {
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
  return ne(A) ? {
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
function u0(A) {
  const e = rr(A);
  return Nn(e) ? A.ownerDocument ? A.ownerDocument.body : A.body : At(e) && bo(e) ? e : u0(e);
}
function Af(A, e, t) {
  var r;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const n = u0(A), i = n === ((r = A.ownerDocument) == null ? void 0 : r.body), o = Be(n);
  return i ? e.concat(o, o.visualViewport || [], bo(n) ? n : [], o.frameElement && t ? Af(o.frameElement) : []) : e.concat(n, Af(n, [], t));
}
const fo = Math.min, Hn = Math.max, Ks = Math.round, nr = (A) => ({
  x: A,
  y: A
}), UU = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, EU = {
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
function c0(A) {
  return A === "x" ? "y" : "x";
}
function Zd(A) {
  return A === "y" ? "height" : "width";
}
function Mn(A) {
  return ["top", "bottom"].includes(Pr(A)) ? "y" : "x";
}
function qd(A) {
  return c0(Mn(A));
}
function IU(A, e, t) {
  t === void 0 && (t = !1);
  const r = ko(A), n = qd(A), i = Zd(n);
  let o = n === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (o = Rs(o)), [o, Rs(o)];
}
function HU(A) {
  const e = Rs(A);
  return [tf(A), e, tf(e)];
}
function tf(A) {
  return A.replace(/start|end/g, (e) => EU[e]);
}
function xU(A, e, t) {
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
function SU(A, e, t, r) {
  const n = ko(A);
  let i = xU(Pr(A), t === "start", r);
  return n && (i = i.map((o) => o + "-" + n), e && (i = i.concat(i.map(tf)))), i;
}
function Rs(A) {
  return A.replace(/left|right|bottom|top/g, (e) => UU[e]);
}
function LU(A) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...A
  };
}
function f0(A) {
  return typeof A != "number" ? LU(A) : {
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
  switch (ko(e)) {
    case "start":
      g[o] -= f * (t && l ? -1 : 1);
      break;
    case "end":
      g[o] += f * (t && l ? -1 : 1);
      break;
  }
  return g;
}
const bU = async (A, e, t) => {
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
  } = Vg(l, r, s), f = r, g = {}, p = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: B
    } = a[w], {
      x: d,
      y: h,
      data: m,
      reset: v
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
    }, v && p <= 50 && (p++, typeof v == "object" && (v.placement && (f = v.placement), v.rects && (l = v.rects === !0 ? await o.getElementRects({
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
    middlewareData: g
  };
};
async function d0(A, e) {
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
  } = To(e, A), p = f0(g), y = a[f ? c === "floating" ? "reference" : "floating" : c], B = Ns(await i.getClippingRect({
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
    top: (B.top - v.top + p.top) / m.y,
    bottom: (v.bottom - B.bottom + p.bottom) / m.y,
    left: (B.left - v.left + p.left) / m.x,
    right: (v.right - B.right + p.right) / m.x
  };
}
const TU = (A) => ({
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
    const c = f0(u), f = {
      x: t,
      y: r
    }, g = qd(n), p = Zd(g), w = await o.getDimensions(l), y = g === "y", B = y ? "top" : "left", d = y ? "bottom" : "right", h = y ? "clientHeight" : "clientWidth", m = i.reference[p] + i.reference[g] - f[g] - i.floating[p], v = f[g] - i.reference[g], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let F = C ? C[h] : 0;
    (!F || !await (o.isElement == null ? void 0 : o.isElement(C))) && (F = a.floating[h] || i.floating[p]);
    const U = m / 2 - v / 2, E = F / 2 - w[p] / 2 - 1, x = fo(c[B], E), K = fo(c[d], E), _ = x, M = F - w[p] - K, V = F / 2 - w[p] / 2 + U, J = ef(_, V, M), $ = !s.arrow && ko(n) != null && V !== J && i.reference[p] / 2 - (V < _ ? x : K) - w[p] / 2 < 0, R = $ ? V < _ ? V - _ : V - M : 0;
    return {
      [g]: f[g] + R,
      data: {
        [g]: J,
        centerOffset: V - J - R,
        ...$ && {
          alignmentOffset: R
        }
      },
      reset: $
    };
  }
}), kU = function(A) {
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
      } = To(A, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const B = Pr(n), d = Mn(a), h = Pr(a) === a, m = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), v = f || (h || !w ? [Rs(a)] : HU(a)), C = p !== "none";
      !f && C && v.push(...SU(a, w, p, m));
      const F = [a, ...v], U = await d0(e, y), E = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(U[B]), c) {
        const V = IU(n, o, m);
        E.push(U[V[0]], U[V[1]]);
      }
      if (x = [...x, {
        placement: n,
        overflows: E
      }], !E.every((V) => V <= 0)) {
        var K, _;
        const V = (((K = i.flip) == null ? void 0 : K.index) || 0) + 1, J = F[V];
        if (J)
          return {
            data: {
              index: V,
              overflows: x
            },
            reset: {
              placement: J
            }
          };
        let $ = (_ = x.filter((R) => R.overflows[0] <= 0).sort((R, I) => R.overflows[1] - I.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var M;
              const R = (M = x.filter((I) => {
                if (C) {
                  const S = Mn(I.placement);
                  return S === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  S === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((S) => S > 0).reduce((S, L) => S + L, 0)]).sort((I, S) => I[1] - S[1])[0]) == null ? void 0 : M[0];
              R && ($ = R);
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
async function OU(A, e) {
  const {
    placement: t,
    platform: r,
    elements: n
  } = A, i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), o = Pr(t), a = ko(t), s = Mn(t) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, c = To(e, A);
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
const DU = function(A) {
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
      } = e, s = await OU(e, A);
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
}, KU = function(A) {
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
      } = To(A, e), l = {
        x: t,
        y: r
      }, u = await d0(e, s), c = Mn(Pr(n)), f = c0(c);
      let g = l[f], p = l[c];
      if (i) {
        const y = f === "y" ? "top" : "left", B = f === "y" ? "bottom" : "right", d = g + u[y], h = g - u[B];
        g = ef(d, g, h);
      }
      if (o) {
        const y = c === "y" ? "top" : "left", B = c === "y" ? "bottom" : "right", d = p + u[y], h = p - u[B];
        p = ef(d, p, h);
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
function B0(A) {
  const e = Ve(A);
  let t = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const n = At(A), i = n ? A.offsetWidth : t, o = n ? A.offsetHeight : r, a = Ks(t) !== i || Ks(r) !== o;
  return a && (t = i, r = o), {
    width: t,
    height: r,
    $: a
  };
}
function g0(A) {
  return ne(A) ? A : A.contextElement;
}
function xn(A) {
  const e = g0(A);
  if (!At(e))
    return nr(1);
  const t = e.getBoundingClientRect(), {
    width: r,
    height: n,
    $: i
  } = B0(e);
  let o = (i ? Ks(t.width) : t.width) / r, a = (i ? Ks(t.height) : t.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const RU = /* @__PURE__ */ nr(0);
function p0(A) {
  const e = Be(A);
  return !Jd() || !e.visualViewport ? RU : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function NU(A, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== Be(A) ? !1 : e;
}
function Bo(A, e, t, r) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const n = A.getBoundingClientRect(), i = g0(A);
  let o = nr(1);
  e && (r ? ne(r) && (o = xn(r)) : o = xn(A));
  const a = NU(i, t, r) ? p0(i) : nr(0);
  let s = (n.left + a.x) / o.x, l = (n.top + a.y) / o.y, u = n.width / o.x, c = n.height / o.y;
  if (i) {
    const f = Be(i), g = r && ne(r) ? Be(r) : r;
    let p = f, w = p.frameElement;
    for (; w && r && g !== p; ) {
      const y = xn(w), B = w.getBoundingClientRect(), d = Ve(w), h = B.left + (w.clientLeft + parseFloat(d.paddingLeft)) * y.x, m = B.top + (w.clientTop + parseFloat(d.paddingTop)) * y.y;
      s *= y.x, l *= y.y, u *= y.x, c *= y.y, s += h, l += m, p = Be(w), w = p.frameElement;
    }
  }
  return Ns({
    width: u,
    height: c,
    x: s,
    y: l
  });
}
function MU(A) {
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
function PU(A) {
  return Array.from(A.getClientRects());
}
function h0(A) {
  return Bo(dr(A)).left + yl(A).scrollLeft;
}
function _U(A) {
  const e = dr(A), t = yl(A), r = A.ownerDocument.body, n = Hn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Hn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -t.scrollLeft + h0(A);
  const a = -t.scrollTop;
  return Ve(r).direction === "rtl" && (o += Hn(e.clientWidth, r.clientWidth) - n), {
    width: n,
    height: i,
    x: o,
    y: a
  };
}
function VU(A, e) {
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
function GU(A, e) {
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
    r = VU(A, t);
  else if (e === "document")
    r = _U(dr(A));
  else if (ne(e))
    r = GU(e, t);
  else {
    const n = p0(A);
    r = {
      ...e,
      x: e.x - n.x,
      y: e.y - n.y
    };
  }
  return Ns(r);
}
function w0(A, e) {
  const t = rr(A);
  return t === e || !ne(t) || Nn(t) ? !1 : Ve(t).position === "fixed" || w0(t, e);
}
function $U(A, e) {
  const t = e.get(A);
  if (t)
    return t;
  let r = Af(A, [], !1).filter((a) => ne(a) && Zn(a) !== "body"), n = null;
  const i = Ve(A).position === "fixed";
  let o = i ? rr(A) : A;
  for (; ne(o) && !Nn(o); ) {
    const a = Ve(o), s = zd(o);
    !s && a.position === "fixed" && (n = null), (i ? !s && !n : !s && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || bo(o) && !s && w0(A, o)) ? r = r.filter((u) => u !== o) : n = a, o = rr(o);
  }
  return e.set(A, r), r;
}
function WU(A) {
  let {
    element: e,
    boundary: t,
    rootBoundary: r,
    strategy: n
  } = A;
  const o = [...t === "clippingAncestors" ? Ql(e) ? [] : $U(e, this._c) : [].concat(t), r], a = o[0], s = o.reduce((l, u) => {
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
function XU(A) {
  const {
    width: e,
    height: t
  } = B0(A);
  return {
    width: e,
    height: t
  };
}
function jU(A, e, t) {
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
    } else n && (s.x = h0(n));
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
function m0(A, e) {
  const t = Be(A);
  if (Ql(A))
    return t;
  if (!At(A)) {
    let n = rr(A);
    for (; n && !Nn(n); ) {
      if (ne(n) && !Uu(n))
        return n;
      n = rr(n);
    }
    return t;
  }
  let r = $g(A, e);
  for (; r && yU(r) && Uu(r); )
    r = $g(r, e);
  return r && Nn(r) && Uu(r) && !zd(r) ? t : r || FU(A) || t;
}
const YU = async function(A) {
  const e = this.getOffsetParent || m0, t = this.getDimensions, r = await t(A.floating);
  return {
    reference: jU(A.reference, await e(A.floating), A.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zU(A) {
  return Ve(A).direction === "rtl";
}
const JU = {
  convertOffsetParentRelativeRectToViewportRelativeRect: MU,
  getDocumentElement: dr,
  getClippingRect: WU,
  getOffsetParent: m0,
  getElementRects: YU,
  getClientRects: PU,
  getDimensions: XU,
  getScale: xn,
  isElement: ne,
  isRTL: zU
}, ZU = DU, qU = KU, A1 = kU, Wg = TU, e1 = (A, e, t) => {
  const r = /* @__PURE__ */ new Map(), n = {
    platform: JU,
    ...t
  }, i = {
    ...n.platform,
    _c: r
  };
  return bU(A, e, {
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
function v0(A) {
  return typeof window > "u" ? 1 : (A.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xg(A, e) {
  const t = v0(A);
  return Math.round(e * t) / t;
}
function jg(A) {
  const e = Q.useRef(A);
  return qa(() => {
    e.current = A;
  }), e;
}
function t1(A) {
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
  Ms(f, r) || g(r);
  const [p, w] = Q.useState(null), [y, B] = Q.useState(null), d = Q.useCallback((R) => {
    R !== C.current && (C.current = R, w(R));
  }, []), h = Q.useCallback((R) => {
    R !== F.current && (F.current = R, B(R));
  }, []), m = i || p, v = o || y, C = Q.useRef(null), F = Q.useRef(null), U = Q.useRef(u), E = s != null, x = jg(s), K = jg(n), _ = Q.useCallback(() => {
    if (!C.current || !F.current)
      return;
    const R = {
      placement: e,
      strategy: t,
      middleware: f
    };
    K.current && (R.platform = K.current), e1(C.current, F.current, R).then((I) => {
      const S = {
        ...I,
        isPositioned: !0
      };
      M.current && !Ms(U.current, S) && (U.current = S, vl.flushSync(() => {
        c(S);
      }));
    });
  }, [f, e, t, K]);
  qa(() => {
    l === !1 && U.current.isPositioned && (U.current.isPositioned = !1, c((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const M = Q.useRef(!1);
  qa(() => (M.current = !0, () => {
    M.current = !1;
  }), []), qa(() => {
    if (m && (C.current = m), v && (F.current = v), m && v) {
      if (x.current)
        return x.current(m, v, _);
      _();
    }
  }, [m, v, _, x, E]);
  const V = Q.useMemo(() => ({
    reference: C,
    floating: F,
    setReference: d,
    setFloating: h
  }), [d, h]), J = Q.useMemo(() => ({
    reference: m,
    floating: v
  }), [m, v]), $ = Q.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!J.floating)
      return R;
    const I = Xg(J.floating, u.x), S = Xg(J.floating, u.y);
    return a ? {
      ...R,
      transform: "translate(" + I + "px, " + S + "px)",
      ...v0(J.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: I,
      top: S
    };
  }, [t, a, J.floating, u.x, u.y]);
  return Q.useMemo(() => ({
    ...u,
    update: _,
    refs: V,
    elements: J,
    floatingStyles: $
  }), [u, _, V, J, $]);
}
const r1 = (A) => {
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
}, n1 = (A, e) => ({
  ...ZU(A),
  options: [A, e]
}), i1 = (A, e) => ({
  ...qU(A),
  options: [A, e]
}), o1 = (A, e) => ({
  ...A1(A),
  options: [A, e]
}), a1 = (A, e) => ({
  ...r1(A),
  options: [A, e]
}), C0 = {
  ...tc
}, s1 = C0.useInsertionEffect, l1 = s1 || ((A) => A());
function u1(A) {
  const e = Q.useRef(() => {
  });
  return l1(() => {
    e.current = A;
  }), Q.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
var rf = typeof document < "u" ? Q.useLayoutEffect : Q.useEffect;
let Yg = !1, c1 = 0;
const zg = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + c1++
);
function f1() {
  const [A, e] = Q.useState(() => Yg ? zg() : void 0);
  return rf(() => {
    A == null && e(zg());
  }, []), Q.useEffect(() => {
    Yg = !0;
  }, []), A;
}
const d1 = C0.useId, B1 = d1 || f1;
function g1() {
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
const p1 = /* @__PURE__ */ Q.createContext(null), h1 = /* @__PURE__ */ Q.createContext(null), w1 = () => {
  var A;
  return ((A = Q.useContext(p1)) == null ? void 0 : A.id) || null;
}, m1 = () => Q.useContext(h1);
function v1(A) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: r
  } = A, n = B1(), i = Q.useRef({}), [o] = Q.useState(() => g1()), a = w1() != null, [s, l] = Q.useState(r.reference), u = u1((g, p, w) => {
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
function C1(A) {
  A === void 0 && (A = {});
  const {
    nodeId: e
  } = A, t = v1({
    ...A,
    elements: {
      reference: null,
      floating: null,
      ...A.elements
    }
  }), r = A.rootContext || t, n = r.elements, [i, o] = Q.useState(null), [a, s] = Q.useState(null), u = (n == null ? void 0 : n.reference) || i, c = Q.useRef(null), f = m1();
  rf(() => {
    u && (c.current = u);
  }, [u]);
  const g = t1({
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
  return rf(() => {
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
let Fl = Q.createContext(null);
Fl.displayName = "OpenClosedContext";
var Ke = ((A) => (A[A.Open = 1] = "Open", A[A.Closed = 2] = "Closed", A[A.Closing = 4] = "Closing", A[A.Opening = 8] = "Opening", A))(Ke || {});
function Ul() {
  return Q.useContext(Fl);
}
function Q1({ value: A, children: e }) {
  return P.createElement(Fl.Provider, { value: A }, e);
}
function y1({ children: A }) {
  return P.createElement(Fl.Provider, { value: null }, A);
}
function F1(A) {
  function e() {
    document.readyState !== "loading" && (A(), document.removeEventListener("DOMContentLoaded", e));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e), e());
}
let Kt = [];
F1(() => {
  function A(e) {
    e.target instanceof HTMLElement && e.target !== document.body && Kt[0] !== e.target && (Kt.unshift(e.target), Kt = Kt.filter((t) => t != null && t.isConnected), Kt.splice(10));
  }
  window.addEventListener("click", A, { capture: !0 }), window.addEventListener("mousedown", A, { capture: !0 }), window.addEventListener("focus", A, { capture: !0 }), document.body.addEventListener("click", A, { capture: !0 }), document.body.addEventListener("mousedown", A, { capture: !0 }), document.body.addEventListener("focus", A, { capture: !0 });
});
function Q0(A) {
  let e = hA(A), t = Q.useRef(!1);
  Q.useEffect(() => (t.current = !1, () => {
    t.current = !0, Cl(() => {
      t.current && e();
    });
  }), [e]);
}
function U1() {
  let A = typeof document > "u";
  return "useSyncExternalStore" in tc ? ((e) => e.useSyncExternalStore)(tc)(() => () => {
  }, () => !1, () => !A) : !1;
}
function Oo() {
  let A = U1(), [e, t] = Q.useState(Lr.isHandoffComplete);
  return e && Lr.isHandoffComplete === !1 && t(!1), Q.useEffect(() => {
    e !== !0 && t(!0);
  }, [e]), Q.useEffect(() => Lr.handoff(), []), A ? !1 : e;
}
let y0 = Q.createContext(!1);
function E1() {
  return Q.useContext(y0);
}
function Jg(A) {
  return P.createElement(y0.Provider, { value: A.force }, A.children);
}
function I1(A) {
  let e = E1(), t = Q.useContext(U0), r = Lo(A), [n, i] = Q.useState(() => {
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
let F0 = Q.Fragment, H1 = le(function(A, e) {
  let t = A, r = Q.useRef(null), n = et(MF((u) => {
    r.current = u;
  }), e), i = Lo(r), o = I1(r), [a] = Q.useState(() => {
    var u;
    return Lr.isServer ? null : (u = i == null ? void 0 : i.createElement("div")) != null ? u : null;
  }), s = Q.useContext(nf), l = Oo();
  return ZA(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), ZA(() => {
    if (a && s) return s.register(a);
  }, [s, a]), Q0(() => {
    var u;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((u = o.parentElement) == null || u.removeChild(o)));
  }), l ? !o || !a ? null : vl.createPortal(Se({ ourProps: { ref: n }, theirProps: t, slot: {}, defaultTag: F0, name: "Portal" }), a) : null;
});
function x1(A, e) {
  let t = et(e), { enabled: r = !0, ...n } = A;
  return r ? P.createElement(H1, { ...n, ref: t }) : Se({ ourProps: { ref: t }, theirProps: n, slot: {}, defaultTag: F0, name: "Portal" });
}
let S1 = Q.Fragment, U0 = Q.createContext(null);
function L1(A, e) {
  let { target: t, ...r } = A, n = { ref: et(e) };
  return P.createElement(U0.Provider, { value: t }, Se({ ourProps: n, theirProps: r, defaultTag: S1, name: "Popover.Group" }));
}
let nf = Q.createContext(null);
function b1() {
  let A = Q.useContext(nf), e = Q.useRef([]), t = hA((i) => (e.current.push(i), A && A.register(i), () => r(i))), r = hA((i) => {
    let o = e.current.indexOf(i);
    o !== -1 && e.current.splice(o, 1), A && A.unregister(i);
  }), n = Q.useMemo(() => ({ register: t, unregister: r, portals: e }), [t, r, e]);
  return [e, Q.useMemo(() => function({ children: i }) {
    return P.createElement(nf.Provider, { value: n }, i);
  }, [n])];
}
let T1 = le(x1), E0 = le(L1), k1 = Object.assign(T1, { Group: E0 });
function O1(A, e = typeof document < "u" ? document.defaultView : null, t) {
  let r = Jn(A, "escape");
  s0(e, "keydown", (n) => {
    r && (n.defaultPrevented || n.key === e0.Escape && t(n));
  });
}
function D1() {
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
function K1({ defaultContainers: A = [], portals: e, mainTreeNodeRef: t } = {}) {
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
    return t != null ? null : P.createElement(zc, { features: Ds.Hidden, ref: n });
  }, [n, t]) };
}
function AB() {
  let A = Q.useRef(!1);
  return ZA(() => (A.current = !0, () => {
    A.current = !1;
  }), []), A;
}
var vi = ((A) => (A[A.Forwards = 0] = "Forwards", A[A.Backwards = 1] = "Backwards", A))(vi || {});
function R1() {
  let A = Q.useRef(0);
  return a0(!0, "keydown", (e) => {
    e.key === "Tab" && (A.current = e.shiftKey ? 1 : 0);
  }, !0), A;
}
function I0(A) {
  if (!A) return /* @__PURE__ */ new Set();
  if (typeof A == "function") return new Set(A());
  let e = /* @__PURE__ */ new Set();
  for (let t of A.current) t.current instanceof HTMLElement && e.add(t.current);
  return e;
}
let N1 = "div";
var mr = ((A) => (A[A.None = 0] = "None", A[A.InitialFocus = 1] = "InitialFocus", A[A.TabLock = 2] = "TabLock", A[A.FocusLock = 4] = "FocusLock", A[A.RestoreFocus = 8] = "RestoreFocus", A[A.AutoFocus = 16] = "AutoFocus", A))(mr || {});
function M1(A, e) {
  let t = Q.useRef(null), r = et(t, e), { initialFocus: n, initialFocusFallback: i, containers: o, features: a = 15, ...s } = A;
  Oo() || (a = 0);
  let l = Lo(t);
  G1(a, { ownerDocument: l });
  let u = $1(a, { ownerDocument: l, container: t, initialFocus: n, initialFocusFallback: i });
  W1(a, { ownerDocument: l, container: t, containers: o, previousActiveElement: u });
  let c = R1(), f = hA((B) => {
    let d = t.current;
    d && ((h) => h())(() => {
      tr(c.current, { [vi.Forwards]: () => {
        Mi(d, lt.First, { skipElements: [B.relatedTarget, i] });
      }, [vi.Backwards]: () => {
        Mi(d, lt.Last, { skipElements: [B.relatedTarget, i] });
      } });
    });
  }), g = Jn(!!(a & 2), "focus-trap#tab-lock"), p = Xd(), w = Q.useRef(!1), y = { ref: r, onKeyDown(B) {
    B.key == "Tab" && (w.current = !0, p.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(B) {
    if (!(a & 4)) return;
    let d = I0(o);
    t.current instanceof HTMLElement && d.add(t.current);
    let h = B.relatedTarget;
    h instanceof HTMLElement && h.dataset.headlessuiFocusGuard !== "true" && (H0(d, h) || (w.current ? Mi(t.current, tr(c.current, { [vi.Forwards]: () => lt.Next, [vi.Backwards]: () => lt.Previous }) | lt.WrapAround, { relativeTo: B.target }) : B.target instanceof HTMLElement && dt(B.target)));
  } };
  return P.createElement(P.Fragment, null, g && P.createElement(zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }), Se({ ourProps: y, theirProps: s, defaultTag: N1, name: "FocusTrap" }), g && P.createElement(zc, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ds.Focusable }));
}
let P1 = le(M1), _1 = Object.assign(P1, { features: mr });
function V1(A = !0) {
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
function G1(A, { ownerDocument: e }) {
  let t = !!(A & 8), r = V1(t);
  Yd(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && dt(r());
  }, [t]), Q0(() => {
    t && dt(r());
  });
}
function $1(A, { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: n }) {
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
function W1(A, { ownerDocument: e, container: t, containers: r, previousActiveElement: n }) {
  let i = AB(), o = !!(A & 4);
  s0(e == null ? void 0 : e.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let s = I0(r);
    t.current instanceof HTMLElement && s.add(t.current);
    let l = n.current;
    if (!l) return;
    let u = a.target;
    u && u instanceof HTMLElement ? H0(s, u) ? (n.current = u, dt(u)) : (a.preventDefault(), a.stopPropagation(), dt(l)) : dt(n.current);
  }, !0);
}
function H0(A, e) {
  for (let t of A) if (t.contains(e)) return !0;
  return !1;
}
function x0(A) {
  var e;
  return !!(A.enter || A.enterFrom || A.enterTo || A.leave || A.leaveFrom || A.leaveTo) || ((e = A.as) != null ? e : L0) !== Q.Fragment || P.Children.count(A.children) === 1;
}
let El = Q.createContext(null);
El.displayName = "TransitionContext";
var X1 = ((A) => (A.Visible = "visible", A.Hidden = "hidden", A))(X1 || {});
function j1() {
  let A = Q.useContext(El);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
function Y1() {
  let A = Q.useContext(Il);
  if (A === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return A;
}
let Il = Q.createContext(null);
Il.displayName = "NestingContext";
function Hl(A) {
  return "children" in A ? Hl(A.children) : A.current.filter(({ el: e }) => e.current !== null).filter(({ state: e }) => e === "visible").length > 0;
}
function S0(A, e) {
  let t = Wr(A), r = Q.useRef([]), n = AB(), i = Xd(), o = hA((g, p = Mt.Hidden) => {
    let w = r.current.findIndex(({ el: y }) => y === g);
    w !== -1 && (tr(p, { [Mt.Unmount]() {
      r.current.splice(w, 1);
    }, [Mt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var y;
      !Hl(r) && n.current && ((y = t.current) == null || y.call(t));
    }));
  }), a = hA((g) => {
    let p = r.current.find(({ el: w }) => w === g);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: g, state: "visible" }), () => o(g, Mt.Unmount);
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
let L0 = Q.Fragment, b0 = Os.RenderStrategy;
function z1(A, e) {
  var t, r;
  let { transition: n = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: s, enter: l, enterFrom: u, enterTo: c, entered: f, leave: g, leaveFrom: p, leaveTo: w, ...y } = A, B = Q.useRef(null), d = x0(A), h = et(...d ? [B, e] : e === null ? [] : [e]), m = (t = y.unmount) == null || t ? Mt.Unmount : Mt.Hidden, { show: v, appear: C, initial: F } = j1(), [U, E] = Q.useState(v ? "visible" : "hidden"), x = Y1(), { register: K, unregister: _ } = x;
  ZA(() => K(B), [K, B]), ZA(() => {
    if (m === Mt.Hidden && B.current) {
      if (v && U !== "visible") {
        E("visible");
        return;
      }
      return tr(U, { hidden: () => _(B), visible: () => K(B) });
    }
  }, [U, B, K, _, v, m]);
  let M = Oo();
  ZA(() => {
    if (d && M && U === "visible" && B.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [B, U, M, d]);
  let V = F && !C, J = C && v && F, $ = Q.useRef(!1), R = S0(() => {
    $.current || (E("hidden"), _(B));
  }, x), I = hA((BA) => {
    $.current = !0;
    let gA = BA ? "enter" : "leave";
    R.onStart(B, gA, (rA) => {
      rA === "enter" ? i == null || i() : rA === "leave" && (a == null || a());
    });
  }), S = hA((BA) => {
    let gA = BA ? "enter" : "leave";
    $.current = !1, R.onStop(B, gA, (rA) => {
      rA === "enter" ? o == null || o() : rA === "leave" && (s == null || s());
    }), gA === "leave" && !Hl(R) && (E("hidden"), _(B));
  });
  Q.useEffect(() => {
    d && n || (I(v), S(v));
  }, [v, d, n]);
  let L = !(!n || !d || !M || V), [, N] = mU(L, B, v, { start: I, end: S }), X = wr({ ref: h, className: ((r = Yc(y.className, J && l, J && u, N.enter && l, N.enter && N.closed && u, N.enter && !N.closed && c, N.leave && g, N.leave && !N.closed && p, N.leave && N.closed && w, !N.transition && v && f)) == null ? void 0 : r.trim()) || void 0, ...wU(N) }), dA = 0;
  return U === "visible" && (dA |= Ke.Open), U === "hidden" && (dA |= Ke.Closed), N.enter && (dA |= Ke.Opening), N.leave && (dA |= Ke.Closing), P.createElement(Il.Provider, { value: R }, P.createElement(Q1, { value: dA }, Se({ ourProps: X, theirProps: y, defaultTag: L0, features: b0, visible: U === "visible", name: "Transition.Child" })));
}
function J1(A, e) {
  let { show: t, appear: r = !1, unmount: n = !0, ...i } = A, o = Q.useRef(null), a = x0(A), s = et(...a ? [o, e] : e === null ? [] : [e]);
  Oo();
  let l = Ul();
  if (t === void 0 && l !== null && (t = (l & Ke.Open) === Ke.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, c] = Q.useState(t ? "visible" : "hidden"), f = S0(() => {
    t || c("hidden");
  }), [g, p] = Q.useState(!0), w = Q.useRef([t]);
  ZA(() => {
    g !== !1 && w.current[w.current.length - 1] !== t && (w.current.push(t), p(!1));
  }, [w, t]);
  let y = Q.useMemo(() => ({ show: t, appear: r, initial: g }), [t, r, g]);
  n0(t, o, () => c("hidden")), ZA(() => {
    t ? c("visible") : !Hl(f) && o.current !== null && c("hidden");
  }, [t, f]);
  let B = { unmount: n }, d = hA(() => {
    var m;
    g && p(!1), (m = A.beforeEnter) == null || m.call(A);
  }), h = hA(() => {
    var m;
    g && p(!1), (m = A.beforeLeave) == null || m.call(A);
  });
  return P.createElement(Il.Provider, { value: f }, P.createElement(El.Provider, { value: y }, Se({ ourProps: { ...B, as: Q.Fragment, children: P.createElement(T0, { ref: s, ...B, ...i, beforeEnter: d, beforeLeave: h }) }, theirProps: {}, defaultTag: Q.Fragment, features: b0, visible: u === "visible", name: "Transition" })));
}
function Z1(A, e) {
  let t = Q.useContext(El) !== null, r = Ul() !== null;
  return P.createElement(P.Fragment, null, !t && r ? P.createElement(of, { ref: e, ...A }) : P.createElement(T0, { ref: e, ...A }));
}
let of = le(J1), T0 = le(z1), go = le(Z1), k0 = Object.assign(of, { Child: go, Root: of });
var q1 = ((A) => (A[A.Open = 0] = "Open", A[A.Closed = 1] = "Closed", A))(q1 || {}), AE = ((A) => (A[A.SetTitleId = 0] = "SetTitleId", A))(AE || {});
let eE = { 0(A, e) {
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
function tE(A, e) {
  return tr(e.type, eE, A, e);
}
let Zg = le(function(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-${t}`, open: n, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: s = !0, __demoMode: l = !1, ...u } = A, c = Q.useRef(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (c.current || (c.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Ul();
  n === void 0 && f !== null && (n = (f & Ke.Open) === Ke.Open);
  let g = Q.useRef(null), p = et(g, e), w = Lo(g), y = n ? 0 : 1, [B, d] = Q.useReducer(tE, { titleId: null, descriptionId: null, panelRef: Q.createRef() }), h = hA(() => i(!1)), m = hA((L) => d({ type: 0, id: L })), v = Oo() ? y === 0 : !1, [C, F] = b1(), U = { get current() {
    var L;
    return (L = B.panelRef.current) != null ? L : g.current;
  } }, { resolveContainers: E, mainTreeNodeRef: x, MainTreeNode: K } = K1({ portals: C, defaultContainers: [U] }), _ = f !== null ? (f & Ke.Closing) === Ke.Closing : !1;
  zF(l || _ ? !1 : v, { allowed: hA(() => {
    var L, N;
    return [(N = (L = g.current) == null ? void 0 : L.closest("[data-headlessui-portal]")) != null ? N : null];
  }), disallowed: hA(() => {
    var L, N;
    return [(N = (L = x.current) == null ? void 0 : L.closest("body > *:not(#headlessui-portal-root)")) != null ? N : null];
  }) }), sU(v, E, (L) => {
    L.preventDefault(), h();
  }), O1(v, w == null ? void 0 : w.defaultView, (L) => {
    L.preventDefault(), L.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), h();
  }), BU(l || _ ? !1 : v, w, E), n0(v, g, h);
  let [M, V] = PF(), J = Q.useMemo(() => [{ dialogState: y, close: h, setTitleId: m }, B], [y, B, h, m]), $ = Q.useMemo(() => ({ open: y === 0 }), [y]), R = { ref: p, id: r, role: a, tabIndex: -1, "aria-modal": l ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": B.titleId, "aria-describedby": M }, I = !D1(), S = mr.None;
  return v && !l && (S |= mr.RestoreFocus, S |= mr.TabLock, s && (S |= mr.AutoFocus), I && (S |= mr.InitialFocus)), P.createElement(y1, null, P.createElement(Jg, { force: !0 }, P.createElement(k1, null, P.createElement(eB.Provider, { value: J }, P.createElement(E0, { target: g }, P.createElement(Jg, { force: !1 }, P.createElement(V, { slot: $ }, P.createElement(F, null, P.createElement(_1, { initialFocus: o, initialFocusFallback: g, containers: E, features: S }, P.createElement(XF, { value: h }, Se({ ourProps: R, theirProps: u, slot: $, defaultTag: rE, features: nE, visible: y === 0, name: "Dialog" })))))))))), P.createElement(NF, null, P.createElement(K, null)));
}), rE = "div", nE = Os.RenderStrategy | Os.Static;
function iE(A, e) {
  let { transition: t = !1, open: r, ...n } = A, i = Ul(), o = A.hasOwnProperty("open") || i !== null, a = A.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof A.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${A.open}`);
  if (typeof A.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${A.onClose}`);
  return i === null && r !== void 0 && !n.static ? P.createElement(k0, { show: r, transition: t, unmount: n.unmount }, P.createElement(Zg, { ref: e, ...n })) : P.createElement(Zg, { ref: e, open: r, ...n });
}
let oE = "div";
function aE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-panel-${t}`, transition: n = !1, ...i } = A, [{ dialogState: o }, a] = xl("Dialog.Panel"), s = et(e, a.panelRef), l = Q.useMemo(() => ({ open: o === 0 }), [o]), u = hA((c) => {
    c.stopPropagation();
  });
  return P.createElement(n ? go : Q.Fragment, null, Se({ ourProps: { ref: s, id: r, onClick: u }, theirProps: i, slot: l, defaultTag: oE, name: "Dialog.Panel" }));
}
let sE = "div";
function lE(A, e) {
  let { transition: t = !1, ...r } = A, [{ dialogState: n }] = xl("Dialog.Backdrop"), i = Q.useMemo(() => ({ open: n === 0 }), [n]);
  return P.createElement(t ? go : Q.Fragment, null, Se({ ourProps: { ref: e, "aria-hidden": !0 }, theirProps: r, slot: i, defaultTag: sE, name: "Dialog.Backdrop" }));
}
let uE = "h2";
function cE(A, e) {
  let t = Q.useId(), { id: r = `headlessui-dialog-title-${t}`, ...n } = A, [{ dialogState: i, setTitleId: o }] = xl("Dialog.Title"), a = et(e);
  Q.useEffect(() => (o(r), () => o(null)), [r, o]);
  let s = Q.useMemo(() => ({ open: i === 0 }), [i]);
  return Se({ ourProps: { ref: a, id: r }, theirProps: n, slot: s, defaultTag: uE, name: "Dialog.Title" });
}
let fE = le(iE), O0 = le(aE);
le(lE);
let dE = le(cE), BE = Object.assign(fE, { Panel: O0, Title: dE, Description: $F });
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
function gE(A, e) {
  if (!(A instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pE(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
  }
}
function hE(A, e, t) {
  return e && pE(A.prototype, e), Object.defineProperty(A, "prototype", {
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
  return mE(A) || CE(A, e) || D0(A, e) || yE();
}
function Do(A) {
  return wE(A) || vE(A) || D0(A) || QE();
}
function wE(A) {
  if (Array.isArray(A)) return af(A);
}
function mE(A) {
  if (Array.isArray(A)) return A;
}
function vE(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function CE(A, e) {
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
function D0(A, e) {
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
function QE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ap = function() {
}, rB = {}, K0 = {}, R0 = null, N0 = {
  mark: Ap,
  measure: Ap
};
try {
  typeof window < "u" && (rB = window), typeof document < "u" && (K0 = document), typeof MutationObserver < "u" && (R0 = MutationObserver), typeof performance < "u" && (N0 = performance);
} catch {
}
var FE = rB.navigator || {}, ep = FE.userAgent, tp = ep === void 0 ? "" : ep, ir = rB, uA = K0, rp = R0, aa = N0;
ir.document;
var Ft = !!uA.documentElement && !!uA.head && typeof uA.addEventListener == "function" && typeof uA.createElement == "function", M0 = ~tp.indexOf("MSIE") || ~tp.indexOf("Trident/"), sa, la, ua, ca, fa, mt = "___FONT_AWESOME___", sf = 16, P0 = "fa", _0 = "svg-inline--fa", _r = "data-fa-i2svg", lf = "data-fa-pseudo-element", UE = "data-fa-pseudo-element-pending", nB = "data-prefix", iB = "data-icon", np = "fontawesome-i2svg", EE = "async", IE = ["HTML", "HEAD", "STYLE", "SCRIPT"], V0 = function() {
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
}), ua)), HE = Ko((ca = {}, LA(ca, sA, {
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
}), ca)), xE = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, G0 = "fa-layers-text", SE = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, LE = Ko((fa = {}, LA(fa, sA, {
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
}), fa)), $0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bE = $0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), TE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ur = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, mo = /* @__PURE__ */ new Set();
Object.keys(ho[sA]).map(mo.add.bind(mo));
Object.keys(ho[CA]).map(mo.add.bind(mo));
var kE = [].concat(oB, Do(mo), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ur.GROUP, Ur.SWAP_OPACITY, Ur.PRIMARY, Ur.SECONDARY]).concat($0.map(function(A) {
  return "".concat(A, "x");
})).concat(bE.map(function(A) {
  return "w-".concat(A);
})), Pi = ir.FontAwesomeConfig || {};
function OE(A) {
  var e = uA.querySelector("script[" + A + "]");
  if (e)
    return e.getAttribute(A);
}
function DE(A) {
  return A === "" ? !0 : A === "false" ? !1 : A === "true" ? !0 : A;
}
if (uA && typeof uA.querySelector == "function") {
  var KE = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  KE.forEach(function(A) {
    var e = tB(A, 2), t = e[0], r = e[1], n = DE(OE(t));
    n != null && (Pi[r] = n);
  });
}
var W0 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: P0,
  replacementClass: _0,
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
var Pn = k(k({}, W0), Pi);
Pn.autoReplaceSvg || (Pn.observeMutations = !1);
var D = {};
Object.keys(W0).forEach(function(A) {
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
function RE(A) {
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
function NE(A) {
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
var ME = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function vo() {
  for (var A = 12, e = ""; A-- > 0; )
    e += ME[Math.random() * 62 | 0];
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
function X0(A) {
  return "".concat(A).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function PE(A) {
  return Object.keys(A || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat(X0(A[t]), '" ');
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
function _E(A) {
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
function VE(A) {
  var e = A.transform, t = A.width, r = t === void 0 ? sf : t, n = A.height, i = n === void 0 ? sf : n, o = A.startCentered, a = o === void 0 ? !1 : o, s = "";
  return a && M0 ? s += "translate(".concat(e.x / Ht - r / 2, "em, ").concat(e.y / Ht - i / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(e.x / Ht, "em), calc(-50% + ").concat(e.y / Ht, "em)) ") : s += "translate(".concat(e.x / Ht, "em, ").concat(e.y / Ht, "em) "), s += "scale(".concat(e.size / Ht * (e.flipX ? -1 : 1), ", ").concat(e.size / Ht * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
}
var GE = `:root, :host {
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
function j0() {
  var A = P0, e = _0, t = D.cssPrefix, r = D.replacementClass, n = GE;
  if (t !== A || r !== e) {
    var i = new RegExp("\\.".concat(A, "\\-"), "g"), o = new RegExp("\\--".concat(A, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    n = n.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(a, ".".concat(r));
  }
  return n;
}
var ip = !1;
function Eu() {
  D.autoAddCss && !ip && (NE(j0()), ip = !0);
}
var $E = {
  mixout: function() {
    return {
      dom: {
        css: j0,
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
var Re = vt[mt], Y0 = [], WE = function A() {
  uA.removeEventListener("DOMContentLoaded", A), _s = 1, Y0.map(function(e) {
    return e();
  });
}, _s = !1;
Ft && (_s = (uA.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(uA.readyState), _s || uA.addEventListener("DOMContentLoaded", WE));
function XE(A) {
  Ft && (_s ? setTimeout(A, 0) : Y0.push(A));
}
function Ro(A) {
  var e = A.tag, t = A.attributes, r = t === void 0 ? {} : t, n = A.children, i = n === void 0 ? [] : n;
  return typeof A == "string" ? X0(A) : "<".concat(e, " ").concat(PE(r), ">").concat(i.map(Ro).join(""), "</").concat(e, ">");
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
function jE(A) {
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
  var e = jE(A);
  return e.length === 1 ? e[0].toString(16) : null;
}
function YE(A, e) {
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
var da, Ba, ga, hn = Re.styles, zE = Re.shims, JE = (da = {}, LA(da, sA, Object.values(wo[sA])), LA(da, CA, Object.values(wo[CA])), da), lB = null, z0 = {}, J0 = {}, Z0 = {}, q0 = {}, Av = {}, ZE = (Ba = {}, LA(Ba, sA, Object.keys(po[sA])), LA(Ba, CA, Object.keys(po[CA])), Ba);
function qE(A) {
  return ~kE.indexOf(A);
}
function AI(A, e) {
  var t = e.split("-"), r = t[0], n = t.slice(1).join("-");
  return r === A && n !== "" && !qE(n) ? n : null;
}
var ev = function() {
  var e = function(i) {
    return Iu(hn, function(o, a, s) {
      return o[s] = Iu(a, i, {}), o;
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
  }), J0 = e(function(n, i, o) {
    if (n[o] = o, i[2]) {
      var a = i[2].filter(function(s) {
        return typeof s == "string";
      });
      a.forEach(function(s) {
        n[s] = o;
      });
    }
    return n;
  }), Av = e(function(n, i, o) {
    var a = i[2];
    return n[o] = o, a.forEach(function(s) {
      n[s] = o;
    }), n;
  });
  var t = "far" in hn || D.autoFetchSvg, r = Iu(zE, function(n, i) {
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
  Z0 = r.names, q0 = r.unicodes, lB = Ll(D.styleDefault, {
    family: D.familyDefault
  });
};
RE(function(A) {
  lB = Ll(A.styleDefault, {
    family: D.familyDefault
  });
});
ev();
function uB(A, e) {
  return (z0[A] || {})[e];
}
function eI(A, e) {
  return (J0[A] || {})[e];
}
function Er(A, e) {
  return (Av[A] || {})[e];
}
function tv(A) {
  return Z0[A] || {
    prefix: null,
    iconName: null
  };
}
function tI(A) {
  var e = q0[A], t = uB("fas", A);
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
    var c = AI(D.cssPrefix, u);
    if (hn[u] ? (u = JE[a].includes(u) ? HE[a][u] : u, o = u, l.prefix = u) : ZE[a].indexOf(u) > -1 ? (o = u, l.prefix = Ll(u, {
      family: a
    })) : c ? l.iconName = c : u !== D.replacementClass && u !== i[sA] && u !== i[CA] && l.rest.push(u), !n && l.prefix && l.iconName) {
      var f = o === "fa" ? tv(l.iconName) : {}, g = Er(l.prefix, l.iconName);
      f.prefix && (o = null), l.iconName = f.iconName || g || l.iconName, l.prefix = f.prefix || l.prefix, l.prefix === "far" && !hn.far && hn.fas && !D.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, cB());
  return (A.includes("fa-brands") || A.includes("fab")) && (s.prefix = "fab"), (A.includes("fa-duotone") || A.includes("fad")) && (s.prefix = "fad"), !s.prefix && a === CA && (hn.fass || D.autoFetchSvg) && (s.prefix = "fass", s.iconName = Er(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = or() || "fas"), s;
}
var rI = /* @__PURE__ */ function() {
  function A() {
    gE(this, A), this.definitions = {};
  }
  return hE(A, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        t.definitions[a] = k(k({}, t.definitions[a] || {}), o[a]), cf(a, o[a]);
        var s = wo[sA][a];
        s && cf(s, o[a]), ev();
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
}(), lp = [], wn = {}, Sn = {}, nI = Object.keys(Sn);
function iI(A, e) {
  var t = e.mixoutsTo;
  return lp = A, wn = {}, Object.keys(Sn).forEach(function(r) {
    nI.indexOf(r) === -1 && delete Sn[r];
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
    return e = Er(t, e) || e, op(rv.definitions, t, e) || op(Re.styles, t, e);
}
var rv = new rI(), oI = function() {
  D.autoReplaceSvg = !1, D.observeMutations = !1, Vr("noAuto");
}, aI = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ft ? (Vr("beforeI2svg", e), Ct("pseudoElements2svg", e), Ct("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    D.autoReplaceSvg === !1 && (D.autoReplaceSvg = !0), D.observeMutations = !0, XE(function() {
      lI({
        autoReplaceSvgRoot: t
      }), Vr("watch", e);
    });
  }
}, sI = {
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
    if (typeof e == "string" && (e.indexOf("".concat(D.cssPrefix, "-")) > -1 || e.match(xE))) {
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
  noAuto: oI,
  config: D,
  dom: aI,
  parse: sI,
  library: rv,
  findIconDefinition: df,
  toHtml: Ro
}, lI = function() {
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
function uI(A) {
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
function cI(A) {
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
  var e = A.icons, t = e.main, r = e.mask, n = A.prefix, i = A.iconName, o = A.transform, a = A.symbol, s = A.title, l = A.maskId, u = A.titleId, c = A.extra, f = A.watchable, g = f === void 0 ? !1 : f, p = r.found ? r : t, w = p.width, y = p.height, B = n === "fak", d = [D.replacementClass, i ? "".concat(D.cssPrefix, "-").concat(i) : ""].filter(function(E) {
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
  g && (h.attributes[_r] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || vo())
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
  }), C = r.found && t.found ? Ct("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Ct("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, F = C.children, U = C.attributes;
  return v.children = F, v.attributes = U, a ? cI(v) : uI(v);
}
function up(A) {
  var e = A.content, t = A.width, r = A.height, n = A.transform, i = A.title, o = A.extra, a = A.watchable, s = a === void 0 ? !1 : a, l = k(k(k({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (l[_r] = "");
  var u = k({}, o.styles);
  sB(n) && (u.transform = VE({
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
function fI(A) {
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
var dI = {
  found: !1,
  width: 512,
  height: 512
};
function BI(A, e) {
  !V0 && !D.showMissingIcons && A && console.error('Icon with name "'.concat(A, '" and prefix "').concat(e, '" is missing.'));
}
function gf(A, e) {
  var t = e;
  return e === "fa" && D.styleDefault !== null && (e = or()), new Promise(function(r, n) {
    if (Ct("missingIconAbstract"), t === "fa") {
      var i = tv(A) || {};
      A = i.iconName || A, e = i.prefix || e;
    }
    if (A && e && Hu[e] && Hu[e][A]) {
      var o = Hu[e][A];
      return r(Bf(o));
    }
    BI(A, e), r(k(k({}, dI), {}, {
      icon: D.showMissingIcons && A ? Ct("missingIconAbstract") || {} : {}
    }));
  });
}
var cp = function() {
}, pf = D.measurePerformance && aa && aa.mark && aa.measure ? aa : {
  mark: cp,
  measure: cp
}, Ci = 'FA "6.5.2"', gI = function(e) {
  return pf.mark("".concat(Ci, " ").concat(e, " begins")), function() {
    return nv(e);
  };
}, nv = function(e) {
  pf.mark("".concat(Ci, " ").concat(e, " ends")), pf.measure("".concat(Ci, " ").concat(e), "".concat(Ci, " ").concat(e, " begins"), "".concat(Ci, " ").concat(e, " ends"));
}, dB = {
  begin: gI,
  end: nv
}, As = function() {
};
function fp(A) {
  var e = A.getAttribute ? A.getAttribute(_r) : null;
  return typeof e == "string";
}
function pI(A) {
  var e = A.getAttribute ? A.getAttribute(nB) : null, t = A.getAttribute ? A.getAttribute(iB) : null;
  return e && t;
}
function hI(A) {
  return A && A.classList && A.classList.contains && A.classList.contains(D.replacementClass);
}
function wI() {
  if (D.autoReplaceSvg === !0)
    return es.replace;
  var A = es[D.autoReplaceSvg];
  return A || es.replace;
}
function mI(A) {
  return uA.createElementNS("http://www.w3.org/2000/svg", A);
}
function vI(A) {
  return uA.createElement(A);
}
function iv(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, r = t === void 0 ? A.tag === "svg" ? mI : vI : t;
  if (typeof A == "string")
    return uA.createTextNode(A);
  var n = r(A.tag);
  Object.keys(A.attributes || []).forEach(function(o) {
    n.setAttribute(o, A.attributes[o]);
  });
  var i = A.children || [];
  return i.forEach(function(o) {
    n.appendChild(iv(o, {
      ceFn: r
    }));
  }), n;
}
function CI(A) {
  var e = " ".concat(A.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var es = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(n) {
        t.parentNode.insertBefore(iv(n), t);
      }), t.getAttribute(_r) === null && D.keepOriginalSource) {
        var r = uA.createComment(CI(t));
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
function ov(A, e) {
  var t = typeof e == "function" ? e : As;
  if (A.length === 0)
    t();
  else {
    var r = dp;
    D.mutateApproach === EE && (r = ir.requestAnimationFrame || dp), r(function() {
      var n = wI(), i = dB.begin("mutate");
      A.map(n), i(), t();
    });
  }
}
var BB = !1;
function av() {
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
          if (c.type === "childList" && c.addedNodes.length > 0 && !fp(c.addedNodes[0]) && (D.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && D.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && fp(c.target) && ~TE.indexOf(c.attributeName))
            if (c.attributeName === "class" && pI(c.target)) {
              var f = bl(aB(c.target)), g = f.prefix, p = f.iconName;
              c.target.setAttribute(nB, g || u), p && c.target.setAttribute(iB, p);
            } else hI(c.target) && n(c.target);
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
function QI() {
  Vs && Vs.disconnect();
}
function yI(A) {
  var e = A.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(r, n) {
    var i = n.split(":"), o = i[0], a = i.slice(1);
    return o && a.length > 0 && (r[o] = a.join(":").trim()), r;
  }, {})), t;
}
function FI(A) {
  var e = A.getAttribute("data-prefix"), t = A.getAttribute("data-icon"), r = A.innerText !== void 0 ? A.innerText.trim() : "", n = bl(aB(A));
  return n.prefix || (n.prefix = or()), e && t && (n.prefix = e, n.iconName = t), n.iconName && n.prefix || (n.prefix && r.length > 0 && (n.iconName = eI(n.prefix, A.innerText) || uB(n.prefix, uf(A.innerText))), !n.iconName && D.autoFetchSvg && A.firstChild && A.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = A.firstChild.data)), n;
}
function UI(A) {
  var e = qn(A.attributes).reduce(function(n, i) {
    return n.name !== "class" && n.name !== "style" && (n[i.name] = i.value), n;
  }, {}), t = A.getAttribute("title"), r = A.getAttribute("data-fa-title-id");
  return D.autoA11y && (t ? e["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(r || vo()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function EI() {
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
  }, t = FI(A), r = t.iconName, n = t.prefix, i = t.rest, o = UI(A), a = ff("parseNodeAttributes", {}, A), s = e.styleParser ? yI(A) : [];
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
var II = Re.styles;
function sv(A) {
  var e = D.autoReplaceSvg === "nest" ? gp(A, {
    styleParser: !1
  }) : gp(A);
  return ~e.extra.classes.indexOf(G0) ? Ct("generateLayersText", A, e) : Ct("generateSvgReplacementMutation", A, e);
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
  }).concat(Object.keys(II));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(G0, ":not([").concat(_r, "])")].concat(i.map(function(u) {
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
      var f = sv(c);
      f && u.push(f);
    } catch (g) {
      V0 || g.name === "MissingIcon" && console.error(g);
    }
    return u;
  }, []);
  return new Promise(function(u, c) {
    Promise.all(l).then(function(f) {
      ov(f, function() {
        r("active"), r("complete"), n("pending"), typeof e == "function" && e(), s(), u();
      });
    }).catch(function(f) {
      s(), c(f);
    });
  });
}
function HI(A) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sv(A).then(function(t) {
    t && ov([t], e);
  });
}
function xI(A) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : df(e || {}), n = t.mask;
    return n && (n = (n || {}).icon ? n : df(n || {})), A(r, k(k({}, t), {}, {
      mask: n
    }));
  };
}
var SI = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, n = r === void 0 ? Je : r, i = t.symbol, o = i === void 0 ? !1 : i, a = t.mask, s = a === void 0 ? null : a, l = t.maskId, u = l === void 0 ? null : l, c = t.title, f = c === void 0 ? null : c, g = t.titleId, p = g === void 0 ? null : g, w = t.classes, y = w === void 0 ? [] : w, B = t.attributes, d = B === void 0 ? {} : B, h = t.styles, m = h === void 0 ? {} : h;
  if (e) {
    var v = e.prefix, C = e.iconName, F = e.icon;
    return Tl(k({
      type: "icon"
    }, e), function() {
      return Vr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), D.autoA11y && (f ? d["aria-labelledby"] = "".concat(D.replacementClass, "-title-").concat(p || vo()) : (d["aria-hidden"] = "true", d.focusable = "false")), fB({
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
        titleId: p,
        extra: {
          attributes: d,
          styles: m,
          classes: y
        }
      });
    });
  }
}, LI = {
  mixout: function() {
    return {
      icon: xI(SI)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = pp, t.nodeCallback = HI, t;
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
      return new Promise(function(g, p) {
        Promise.all([gf(n, a), u.iconName ? gf(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var y = tB(w, 2), B = y[0], d = y[1];
          g([t, fB({
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
}, bI = {
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
}, TI = {
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
          }), fI({
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
}, kI = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? Je : n, o = r.title, a = o === void 0 ? null : o, s = r.classes, l = s === void 0 ? [] : s, u = r.attributes, c = u === void 0 ? {} : u, f = r.styles, g = f === void 0 ? {} : f;
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
              styles: g,
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
      if (M0) {
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
}, OI = new RegExp('"', "ug"), hp = [1105920, 1112319];
function DI(A) {
  var e = A.replace(OI, ""), t = YE(e, 0), r = t >= hp[0] && t <= hp[1], n = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: uf(n ? e[0] : e),
    isSecondary: r || n
  };
}
function wp(A, e) {
  var t = "".concat(UE).concat(e.replace(":", "-"));
  return new Promise(function(r, n) {
    if (A.getAttribute(t) !== null)
      return r();
    var i = qn(A.children), o = i.filter(function(F) {
      return F.getAttribute(lf) === e;
    })[0], a = ir.getComputedStyle(A, e), s = a.getPropertyValue("font-family").match(SE), l = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !s)
      return A.removeChild(o), r();
    if (s && u !== "none" && u !== "") {
      var c = a.getPropertyValue("content"), f = ~["Sharp"].indexOf(s[2]) ? CA : sA, g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? ho[f][s[2].toLowerCase()] : LE[f][l], p = DI(c), w = p.value, y = p.isSecondary, B = s[0].startsWith("FontAwesome"), d = uB(g, w), h = d;
      if (B) {
        var m = tI(w);
        m.iconName && m.prefix && (d = m.iconName, g = m.prefix);
      }
      if (d && !y && (!o || o.getAttribute(nB) !== g || o.getAttribute(iB) !== h)) {
        A.setAttribute(t, h), o && A.removeChild(o);
        var v = EI(), C = v.extra;
        C.attributes[lf] = e, gf(d, g).then(function(F) {
          var U = fB(k(k({}, v), {}, {
            icons: {
              main: F,
              mask: cB()
            },
            prefix: g,
            iconName: h,
            extra: C,
            watchable: !0
          })), E = uA.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? A.insertBefore(E, A.firstChild) : A.appendChild(E), E.outerHTML = U.map(function(x) {
            return Ro(x);
          }).join(`
`), A.removeAttribute(t), r();
        }).catch(n);
      } else
        r();
    } else
      r();
  });
}
function KI(A) {
  return Promise.all([wp(A, "::before"), wp(A, "::after")]);
}
function RI(A) {
  return A.parentNode !== document.head && !~IE.indexOf(A.tagName.toUpperCase()) && !A.getAttribute(lf) && (!A.parentNode || A.parentNode.tagName !== "svg");
}
function mp(A) {
  if (Ft)
    return new Promise(function(e, t) {
      var r = qn(A.querySelectorAll("*")).filter(RI).map(KI), n = dB.begin("searchPseudoElements");
      av(), Promise.all(r).then(function() {
        n(), hf(), e();
      }).catch(function() {
        n(), hf(), t();
      });
    });
}
var NI = {
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
}, vp = !1, MI = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          av(), vp = !0;
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
        QI();
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
}, PI = {
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
function _I(A) {
  return A.tag === "g" ? A.children : [A];
}
var VI = {
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
      var r = t.children, n = t.attributes, i = t.main, o = t.mask, a = t.maskId, s = t.transform, l = i.width, u = i.icon, c = o.width, f = o.icon, g = _E({
        transform: s,
        containerWidth: c,
        iconWidth: l
      }), p = {
        tag: "rect",
        attributes: k(k({}, xu), {}, {
          fill: "white"
        })
      }, w = u.children ? {
        children: u.children.map(Qp)
      } : {}, y = {
        tag: "g",
        attributes: k({}, g.inner),
        children: [Qp(k({
          tag: u.tag,
          attributes: k(k({}, u.attributes), g.path)
        }, w))]
      }, B = {
        tag: "g",
        attributes: k({}, g.outer),
        children: [y]
      }, d = "mask-".concat(a || vo()), h = "clip-".concat(a || vo()), m = {
        tag: "mask",
        attributes: k(k({}, xu), {}, {
          id: d,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, B]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h
          },
          children: _I(f)
        }, m]
      };
      return r.push(v, {
        tag: "rect",
        attributes: k({
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(d, ")")
        }, xu)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, GI = {
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
}, $I = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, WI = [$E, LI, bI, TI, kI, NI, MI, PI, VI, GI, $I];
iI(WI, {
  mixoutsTo: we
});
we.noAuto;
we.config;
we.library;
we.dom;
var wf = we.parse;
we.findIconDefinition;
we.toHtml;
var XI = we.icon;
we.layer;
we.text;
we.counter;
var lv = { exports: {} }, jI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", YI = jI, zI = YI;
function uv() {
}
function cv() {
}
cv.resetWarningCache = uv;
var JI = function() {
  function A(r, n, i, o, a, s) {
    if (s !== zI) {
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
    checkPropTypes: cv,
    resetWarningCache: uv
  };
  return t.PropTypes = t, t;
};
lv.exports = JI();
var ZI = lv.exports;
const j = /* @__PURE__ */ rl(ZI);
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
function qI(A, e) {
  if (A == null) return {};
  var t = {}, r = Object.keys(A), n, i;
  for (i = 0; i < r.length; i++)
    n = r[i], !(e.indexOf(n) >= 0) && (t[n] = A[n]);
  return t;
}
function AH(A, e) {
  if (A == null) return {};
  var t = qI(A, e), r, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(A);
    for (n = 0; n < i.length; n++)
      r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(A, r) && (t[r] = A[r]);
  }
  return t;
}
function mf(A) {
  return eH(A) || tH(A) || rH(A) || nH();
}
function eH(A) {
  if (Array.isArray(A)) return vf(A);
}
function tH(A) {
  if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A);
}
function rH(A, e) {
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
function nH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iH(A) {
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
  }, mn(e, "fa-".concat(B), typeof B < "u" && B !== null), mn(e, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0), mn(e, "fa-pull-".concat(h), typeof h < "u" && h !== null), mn(e, "fa-swap-opacity", A.swapOpacity), e);
  return Object.keys(m).map(function(v) {
    return m[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function oH(A) {
  return A = A - 0, A === A;
}
function fv(A) {
  return oH(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(e, t) {
    return t ? t.toUpperCase() : "";
  }), A.substr(0, 1).toLowerCase() + A.substr(1));
}
var aH = ["style"];
function sH(A) {
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function lH(A) {
  return A.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, t) {
    var r = t.indexOf(":"), n = fv(t.slice(0, r)), i = t.slice(r + 1).trim();
    return n.startsWith("webkit") ? e[sH(n)] = i : e[n] = i, e;
  }, {});
}
function dv(A, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(s) {
    return dv(A, s);
  }), n = Object.keys(e.attributes || {}).reduce(function(s, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        s.attrs.className = u, delete e.attributes.class;
        break;
      case "style":
        s.attrs.style = lH(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? s.attrs[l.toLowerCase()] = u : s.attrs[fv(l)] = u;
    }
    return s;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, a = AH(t, aH);
  return n.attrs.style = je(je({}, n.attrs.style), o), A.apply(void 0, [e.tag, je(je({}, n.attrs), a)].concat(mf(r)));
}
var Bv = !1;
try {
  Bv = !0;
} catch {
}
function uH() {
  if (!Bv && console && typeof console.error == "function") {
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
}, gB = /* @__PURE__ */ P.forwardRef(function(A, e) {
  var t = je(je({}, Up), A), r = t.icon, n = t.mask, i = t.symbol, o = t.className, a = t.title, s = t.titleId, l = t.maskId, u = Fp(r), c = Su("classes", [].concat(mf(iH(t)), mf((o || "").split(" ")))), f = Su("transform", typeof t.transform == "string" ? wf.transform(t.transform) : t.transform), g = Su("mask", Fp(n)), p = XI(u, je(je(je(je({}, c), f), g), {}, {
    symbol: i,
    title: a,
    titleId: s,
    maskId: l
  }));
  if (!p)
    return uH("Could not find icon", u), null;
  var w = p.abstract, y = {
    ref: e
  };
  return Object.keys(t).forEach(function(B) {
    Up.hasOwnProperty(B) || (y[B] = t[B]);
  }), cH(w[0], y);
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
var cH = dv.bind(null, P.createElement), fH = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, dH = fH, ie = function() {
  return ie = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ie.apply(this, arguments);
};
function Co(A, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return A.concat(i || Array.prototype.slice.call(e));
}
var aA = "-ms-", Vi = "-moz-", q = "-webkit-", gv = "comm", kl = "rule", pB = "decl", BH = "@import", pv = "@keyframes", gH = "@layer", hv = Math.abs, hB = String.fromCharCode, Cf = Object.assign;
function pH(A, e) {
  return kA(A, 0) ^ 45 ? (((e << 2 ^ kA(A, 0)) << 2 ^ kA(A, 1)) << 2 ^ kA(A, 2)) << 2 ^ kA(A, 3) : 0;
}
function wv(A) {
  return A.trim();
}
function at(A, e) {
  return (A = e.exec(A)) ? A[0] : A;
}
function W(A, e, t) {
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
function mv(A) {
  return A.length;
}
function Qi(A, e) {
  return e.push(A), A;
}
function hH(A, e) {
  return A.map(e).join("");
}
function Ep(A, e) {
  return A.filter(function(t) {
    return !at(t, e);
  });
}
var Ol = 1, Vn = 1, vv = 0, xe = 0, UA = 0, Ai = "";
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
function wH() {
  return UA;
}
function mH() {
  return UA = xe > 0 ? kA(Ai, --xe) : 0, Vn--, UA === 10 && (Vn = 1, Ol--), UA;
}
function Pe() {
  return UA = xe < vv ? kA(Ai, xe++) : 0, Vn++, UA === 10 && (Vn = 1, Ol++), UA;
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
function vH(A) {
  return Ol = Vn = 1, vv = Ye(Ai = A), xe = 0, [];
}
function CH(A) {
  return Ai = "", A;
}
function Lu(A) {
  return wv(Kl(xe - 1, yf(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
}
function QH(A) {
  for (; (UA = br()) && UA < 33; )
    Pe();
  return Qf(A) > 2 || Qf(UA) > 3 ? "" : " ";
}
function yH(A, e) {
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
function FH(A, e) {
  for (; Pe() && A + UA !== 57; )
    if (A + UA === 84 && br() === 47)
      break;
  return "/*" + Kl(e, xe - 1) + "*" + hB(A === 47 ? A : Pe());
}
function UH(A) {
  for (; !Qf(br()); )
    Pe();
  return Kl(A, xe);
}
function EH(A) {
  return CH(ns("", null, null, null, [""], A = vH(A), 0, [0], A));
}
function ns(A, e, t, r, n, i, o, a, s) {
  for (var l = 0, u = 0, c = o, f = 0, g = 0, p = 0, w = 1, y = 1, B = 1, d = 0, h = "", m = n, v = i, C = r, F = h; y; )
    switch (p = d, d = Pe()) {
      case 40:
        if (p != 108 && kA(F, c - 1) == 58) {
          ts(F += W(Lu(d), "&", "&\f"), "&\f", hv(l ? a[l - 1] : 0)) != -1 && (B = -1);
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
        F += QH(p);
        break;
      case 92:
        F += yH(rs() - 1, 7);
        continue;
      case 47:
        switch (br()) {
          case 42:
          case 47:
            Qi(IH(FH(Pe(), rs()), e, t, s), s);
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
            B == -1 && (F = W(F, /\f/g, "")), g > 0 && Ye(F) - c && Qi(g > 32 ? Hp(F + ";", r, t, c - 1, s) : Hp(W(F, " ", "") + ";", r, t, c - 2, s), s);
            break;
          case 59:
            F += ";";
          default:
            if (Qi(C = Ip(F, e, t, l, u, n, a, h, m = [], v = [], c, i), i), d === 123)
              if (u === 0)
                ns(F, e, C, C, m, i, c, a, v);
              else
                switch (f === 99 && kA(F, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ns(A, C, C, r && Qi(Ip(A, C, C, 0, 0, n, a, h, n, m = [], c, v), v), n, v, c, a, r ? m : v);
                    break;
                  default:
                    ns(F, C, C, C, [""], v, 0, a, v);
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
          else if (d == 125 && w++ == 0 && mH() == 125)
            continue;
        }
        switch (F += hB(d), d * w) {
          case 38:
            B = u > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            a[l++] = (Ye(F) - 1) * B, B = 1;
            break;
          case 64:
            br() === 45 && (F += Lu(Pe())), f = br(), u = c = Ye(h = F += UH(rs())), d++;
            break;
          case 45:
            p === 45 && Ye(F) == 2 && (w = 0);
        }
    }
  return i;
}
function Ip(A, e, t, r, n, i, o, a, s, l, u, c) {
  for (var f = n - 1, g = n === 0 ? i : [""], p = mv(g), w = 0, y = 0, B = 0; w < r; ++w)
    for (var d = 0, h = _n(A, f + 1, f = hv(y = o[w])), m = A; d < p; ++d)
      (m = wv(y > 0 ? g[d] + " " + h : W(h, /&\f/g, g[d]))) && (s[B++] = m);
  return Dl(A, e, t, n === 0 ? kl : a, s, l, u, c);
}
function IH(A, e, t, r) {
  return Dl(A, e, t, gv, hB(wH()), _n(A, 2, -2), 0, r);
}
function Hp(A, e, t, r, n) {
  return Dl(A, e, t, pB, _n(A, 0, r), _n(A, r + 1, -1), r, n);
}
function Cv(A, e, t) {
  switch (pH(A, e)) {
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
      if (!at(A, /flex-|baseline/)) return aA + "grid-column-align" + _n(A, e) + A;
      break;
    case 2592:
    case 3360:
      return aA + W(A, "template-", "") + A;
    case 4384:
    case 3616:
      return t && t.some(function(r, n) {
        return e = n, at(r.props, /grid-\w+-end/);
      }) ? ~ts(A + (t = t[e].value), "span", 0) ? A : aA + W(A, "-start", "") + A + aA + "grid-row-span:" + (~ts(t, "span", 0) ? at(t, /\d+/) : +at(t, /\d+/) - +at(A, /\d+/)) + ";" : aA + W(A, "-start", "") + A;
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
        switch (kA(A, e + 1)) {
          case 109:
            if (kA(A, e + 4) !== 45)
              break;
          case 102:
            return W(A, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + Vi + (kA(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ts(A, "stretch", 0) ? Cv(W(A, "stretch", "fill-available"), e, t) + A : A;
        }
      break;
    case 5152:
    case 5920:
      return W(A, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, n, i, o, a, s, l) {
        return aA + n + ":" + i + l + (o ? aA + n + "-span:" + (a ? s : +s - +i) + l : "") + A;
      });
    case 4949:
      if (kA(A, e + 6) === 121)
        return W(A, ":", ":" + q) + A;
      break;
    case 6444:
      switch (kA(A, kA(A, 14) === 45 ? 18 : 11)) {
        case 120:
          return W(A, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + q + (kA(A, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + aA + "$2box$3") + A;
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
function $s(A, e) {
  for (var t = "", r = 0; r < A.length; r++)
    t += e(A[r], r, A, e) || "";
  return t;
}
function HH(A, e, t, r) {
  switch (A.type) {
    case gH:
      if (A.children.length) break;
    case BH:
    case pB:
      return A.return = A.return || A.value;
    case gv:
      return "";
    case pv:
      return A.return = A.value + "{" + $s(A.children, r) + "}";
    case kl:
      if (!Ye(A.value = A.props.join(","))) return "";
  }
  return Ye(t = $s(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
}
function xH(A) {
  var e = mv(A);
  return function(t, r, n, i) {
    for (var o = "", a = 0; a < e; a++)
      o += A[a](t, r, n, i) || "";
    return o;
  };
}
function SH(A) {
  return function(e) {
    e.root || (e = e.return) && A(e);
  };
}
function LH(A, e, t, r) {
  if (A.length > -1 && !A.return)
    switch (A.type) {
      case pB:
        A.return = Cv(A.value, A.length, t);
        return;
      case pv:
        return $s([xt(A, { value: W(A.value, "@", "@" + q) })], r);
      case kl:
        if (A.length)
          return hH(t = A.props, function(n) {
            switch (at(n, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Yr(xt(A, { props: [W(n, /:(read-\w+)/, ":" + Vi + "$1")] })), Yr(xt(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
              case "::placeholder":
                Yr(xt(A, { props: [W(n, /:(plac\w+)/, ":" + q + "input-$1")] })), Yr(xt(A, { props: [W(n, /:(plac\w+)/, ":" + Vi + "$1")] })), Yr(xt(A, { props: [W(n, /:(plac\w+)/, aA + "input-$1")] })), Yr(xt(A, { props: [n] })), Cf(A, { props: Ep(t, r) });
                break;
            }
            return "";
          });
    }
}
var bH = {
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
}, Gn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Qv = "active", yv = "data-styled-version", Rl = "6.1.11", wB = `/*!sc*/
`, mB = typeof window < "u" && "HTMLElement" in window, TH = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Nl = Object.freeze([]), $n = Object.freeze({});
function kH(A, e, t) {
  return t === void 0 && (t = $n), A.theme !== t.theme && A.theme || e || t.theme;
}
var Fv = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), OH = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, DH = /(^-|-$)/g;
function xp(A) {
  return A.replace(OH, "-").replace(DH, "");
}
var KH = /(a)(d)/gi, pa = 52, Sp = function(A) {
  return String.fromCharCode(A + (A > 25 ? 39 : 97));
};
function Ff(A) {
  var e, t = "";
  for (e = Math.abs(A); e > pa; e = e / pa | 0) t = Sp(e % pa) + t;
  return (Sp(e % pa) + t).replace(KH, "$1-$2");
}
var bu, Uv = 5381, vn = function(A, e) {
  for (var t = e.length; t; ) A = 33 * A ^ e.charCodeAt(--t);
  return A;
}, Ev = function(A) {
  return vn(Uv, A);
};
function Iv(A) {
  return Ff(Ev(A) >>> 0);
}
function RH(A) {
  return A.displayName || A.name || "Component";
}
function Tu(A) {
  return typeof A == "string" && !0;
}
var Hv = typeof Symbol == "function" && Symbol.for, xv = Hv ? Symbol.for("react.memo") : 60115, NH = Hv ? Symbol.for("react.forward_ref") : 60112, MH = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, PH = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Sv = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, _H = ((bu = {})[NH] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, bu[xv] = Sv, bu);
function Lp(A) {
  return ("type" in (e = A) && e.type.$$typeof) === xv ? Sv : "$$typeof" in A ? _H[A.$$typeof] : MH;
  var e;
}
var VH = Object.defineProperty, GH = Object.getOwnPropertyNames, bp = Object.getOwnPropertySymbols, $H = Object.getOwnPropertyDescriptor, WH = Object.getPrototypeOf, Tp = Object.prototype;
function Lv(A, e, t) {
  if (typeof e != "string") {
    if (Tp) {
      var r = WH(e);
      r && r !== Tp && Lv(A, r, t);
    }
    var n = GH(e);
    bp && (n = n.concat(bp(e)));
    for (var i = Lp(A), o = Lp(e), a = 0; a < n.length; ++a) {
      var s = n[a];
      if (!(s in PH || t && t[s] || o && s in o || i && s in i)) {
        var l = $H(e, s);
        try {
          VH(A, s, l);
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
var XH = function() {
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
}, jH = function(A, e) {
  os = e + 1, is.set(A, e), Ws.set(e, A);
}, YH = "style[".concat(Gn, "][").concat(yv, '="').concat(Rl, '"]'), zH = new RegExp("^".concat(Gn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), JH = function(A, e, t) {
  for (var r, n = t.split(","), i = 0, o = n.length; i < o; i++) (r = n[i]) && A.registerName(e, r);
}, ZH = function(A, e) {
  for (var t, r = ((t = e.textContent) !== null && t !== void 0 ? t : "").split(wB), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(zH);
      if (s) {
        var l = 0 | parseInt(s[1], 10), u = s[2];
        l !== 0 && (jH(u, l), JH(A, u, s[3]), A.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(a);
    }
  }
};
function qH() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bv = function(A) {
  var e = document.head, t = A || e, r = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(Gn, "]")));
    return s[s.length - 1];
  }(t), i = n !== void 0 ? n.nextSibling : null;
  r.setAttribute(Gn, Qv), r.setAttribute(yv, Rl);
  var o = qH();
  return o && r.setAttribute("nonce", o), t.insertBefore(r, i), r;
}, A4 = function() {
  function A(e) {
    this.element = bv(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
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
}(), e4 = function() {
  function A(e) {
    this.element = bv(e), this.nodes = this.element.childNodes, this.length = 0;
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
}(), t4 = function() {
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
}(), kp = mB, r4 = { isServer: !mB, useCSSOMInjection: !TH }, Tv = function() {
  function A(e, t, r) {
    e === void 0 && (e = $n), t === void 0 && (t = {});
    var n = this;
    this.options = ie(ie({}, r4), e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && mB && kp && (kp = !1, function(i) {
      for (var o = document.querySelectorAll(YH), a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        l && l.getAttribute(Gn) !== Qv && (ZH(i, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), CB(this, function() {
      return function(i) {
        for (var o = i.getTag(), a = o.length, s = "", l = function(c) {
          var f = function(B) {
            return Ws.get(B);
          }(c);
          if (f === void 0) return "continue";
          var g = i.names.get(f), p = o.getGroup(c);
          if (g === void 0 || p.length === 0) return "continue";
          var w = "".concat(Gn, ".g").concat(c, '[id="').concat(f, '"]'), y = "";
          g !== void 0 && g.forEach(function(B) {
            B.length > 0 && (y += "".concat(B, ","));
          }), s += "".concat(p).concat(w, '{content:"').concat(y, '"}').concat(wB);
        }, u = 0; u < a; u++) l(u);
        return s;
      }(n);
    });
  }
  return A.registerId = function(e) {
    return ha(e);
  }, A.prototype.reconstructWithOptions = function(e, t) {
    return t === void 0 && (t = !0), new A(ie(ie({}, this.options), e), this.gs, t && this.names || void 0);
  }, A.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, A.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(t) {
      var r = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new t4(n) : r ? new A4(n) : new e4(n);
    }(this.options), new XH(e)));
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
}(), n4 = /&/g, i4 = /^\s*\/\/.*$/gm;
function kv(A, e) {
  return A.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(e, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(e, " ")), t.props = t.props.map(function(r) {
      return "".concat(e, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = kv(t.children, e)), t;
  });
}
function o4(A) {
  var e, t, r, n = $n, i = n.options, o = i === void 0 ? $n : i, a = n.plugins, s = a === void 0 ? Nl : a, l = function(f, g, p) {
    return p.startsWith(t) && p.endsWith(t) && p.replaceAll(t, "").length > 0 ? ".".concat(e) : f;
  }, u = s.slice();
  u.push(function(f) {
    f.type === kl && f.value.includes("&") && (f.props[0] = f.props[0].replace(n4, t).replace(r, l));
  }), o.prefix && u.push(LH), u.push(HH);
  var c = function(f, g, p, w) {
    g === void 0 && (g = ""), p === void 0 && (p = ""), w === void 0 && (w = "&"), e = w, t = g, r = new RegExp("\\".concat(t, "\\b"), "g");
    var y = f.replace(i4, ""), B = EH(p || g ? "".concat(p, " ").concat(g, " { ").concat(y, " }") : y);
    o.namespace && (B = kv(B, o.namespace));
    var d = [];
    return $s(B, xH(u.concat(SH(function(h) {
      return d.push(h);
    })))), d;
  };
  return c.hash = s.length ? s.reduce(function(f, g) {
    return g.name || No(15), vn(f, g.name);
  }, Uv).toString() : "", c;
}
var a4 = new Tv(), If = o4(), Ov = P.createContext({ shouldForwardProp: void 0, styleSheet: a4, stylis: If });
Ov.Consumer;
P.createContext(void 0);
function Op() {
  return Q.useContext(Ov);
}
var Dv = function() {
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
}(), s4 = function(A) {
  return A >= "A" && A <= "Z";
};
function Dp(A) {
  for (var e = "", t = 0; t < A.length; t++) {
    var r = A[t];
    if (t === 1 && r === "-" && A[0] === "-") return A;
    s4(r) ? e += "-" + r.toLowerCase() : e += r;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Kv = function(A) {
  return A == null || A === !1 || A === "";
}, Rv = function(A) {
  var e, t, r = [];
  for (var n in A) {
    var i = A[n];
    A.hasOwnProperty(n) && !Kv(i) && (Array.isArray(i) && i.isCss || Wn(i) ? r.push("".concat(Dp(n), ":"), i, ";") : Qo(i) ? r.push.apply(r, Co(Co(["".concat(n, " {")], Rv(i), !1), ["}"], !1)) : r.push("".concat(Dp(n), ": ").concat((e = n, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || e in bH || e.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function Tr(A, e, t, r) {
  if (Kv(A)) return [];
  if (vB(A)) return [".".concat(A.styledComponentId)];
  if (Wn(A)) {
    if (!Wn(i = A) || i.prototype && i.prototype.isReactComponent || !e) return [A];
    var n = A(e);
    return Tr(n, e, t, r);
  }
  var i;
  return A instanceof Dv ? t ? (A.inject(t, r), [A.getName(r)]) : [A] : Qo(A) ? Rv(A) : Array.isArray(A) ? Array.prototype.concat.apply(Nl, A.map(function(o) {
    return Tr(o, e, t, r);
  })) : [A.toString()];
}
function l4(A) {
  for (var e = 0; e < A.length; e += 1) {
    var t = A[e];
    if (Wn(t) && !vB(t)) return !1;
  }
  return !0;
}
var u4 = Ev(Rl), c4 = function() {
  function A(e, t, r) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && l4(e), this.componentId = t, this.baseHash = vn(u4, t), this.baseStyle = r, Tv.registerId(t);
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
        var g = Ff(s >>> 0);
        t.hasNameForId(this.componentId, g) || t.insertRules(this.componentId, g, r(l, ".".concat(g), void 0, this.componentId)), n = Ir(n, g);
      }
    }
    return n;
  }, A;
}(), Nv = P.createContext(void 0);
Nv.Consumer;
var ku = {};
function f4(A, e, t) {
  var r = vB(A), n = A, i = !Tu(A), o = e.attrs, a = o === void 0 ? Nl : o, s = e.componentId, l = s === void 0 ? function(m, v) {
    var C = typeof m != "string" ? "sc" : xp(m);
    ku[C] = (ku[C] || 0) + 1;
    var F = "".concat(C, "-").concat(Iv(Rl + C + ku[C]));
    return v ? "".concat(v, "-").concat(F) : F;
  }(e.displayName, e.parentComponentId) : s, u = e.displayName, c = u === void 0 ? function(m) {
    return Tu(m) ? "styled.".concat(m) : "Styled(".concat(RH(m), ")");
  }(A) : u, f = e.displayName && e.componentId ? "".concat(xp(e.displayName), "-").concat(e.componentId) : e.componentId || l, g = r && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, p = e.shouldForwardProp;
  if (r && n.shouldForwardProp) {
    var w = n.shouldForwardProp;
    if (e.shouldForwardProp) {
      var y = e.shouldForwardProp;
      p = function(m, v) {
        return w(m, v) && y(m, v);
      };
    } else p = w;
  }
  var B = new c4(t, f, r ? n.componentStyle : void 0);
  function d(m, v) {
    return function(C, F, U) {
      var E = C.attrs, x = C.componentStyle, K = C.defaultProps, _ = C.foldedComponentIds, M = C.styledComponentId, V = C.target, J = P.useContext(Nv), $ = Op(), R = C.shouldForwardProp || $.shouldForwardProp, I = kH(F, J, K) || $n, S = function(gA, rA, jA) {
        for (var ti, Br = ie(ie({}, rA), { className: void 0, theme: jA }), zl = 0; zl < gA.length; zl += 1) {
          var _o = Wn(ti = gA[zl]) ? ti(Br) : ti;
          for (var Ut in _o) Br[Ut] = Ut === "className" ? Ir(Br[Ut], _o[Ut]) : Ut === "style" ? ie(ie({}, Br[Ut]), _o[Ut]) : _o[Ut];
        }
        return rA.className && (Br.className = Ir(Br.className, rA.className)), Br;
      }(E, F, I), L = S.as || V, N = {};
      for (var X in S) S[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && S.theme === I || (X === "forwardedAs" ? N.as = S.forwardedAs : R && !R(X, L) || (N[X] = S[X]));
      var dA = function(gA, rA) {
        var jA = Op(), ti = gA.generateAndInjectStyles(rA, jA.styleSheet, jA.stylis);
        return ti;
      }(x, S), BA = Ir(_, M);
      return dA && (BA += " " + dA), S.className && (BA += " " + S.className), N[Tu(L) && !Fv.has(L) ? "class" : "className"] = BA, N.ref = U, Q.createElement(L, N);
    }(h, m, v);
  }
  d.displayName = c;
  var h = P.forwardRef(d);
  return h.attrs = g, h.componentStyle = B, h.displayName = c, h.shouldForwardProp = p, h.foldedComponentIds = r ? Ir(n.foldedComponentIds, n.styledComponentId) : "", h.styledComponentId = f, h.target = r ? n.target : A, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(m) {
    this._foldedDefaultProps = r ? function(v) {
      for (var C = [], F = 1; F < arguments.length; F++) C[F - 1] = arguments[F];
      for (var U = 0, E = C; U < E.length; U++) Ef(v, E[U], !0);
      return v;
    }({}, n.defaultProps, m) : m;
  } }), CB(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && Lv(h, A, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Kp(A, e) {
  for (var t = [A[0]], r = 0, n = e.length; r < n; r += 1) t.push(e[r], A[r + 1]);
  return t;
}
var Rp = function(A) {
  return Object.assign(A, { isCss: !0 });
};
function Mv(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  if (Wn(A) || Qo(A)) return Rp(Tr(Kp(Nl, Co([A], e, !0))));
  var r = A;
  return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? Tr(r) : Rp(Tr(Kp(r, e)));
}
function Hf(A, e, t) {
  if (t === void 0 && (t = $n), !e) throw No(1, e);
  var r = function(n) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return A(e, t, Mv.apply(void 0, Co([n], i, !1)));
  };
  return r.attrs = function(n) {
    return Hf(A, e, ie(ie({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, r.withConfig = function(n) {
    return Hf(A, e, ie(ie({}, t), n));
  }, r;
}
var Pv = function(A) {
  return Hf(f4, A);
}, Xr = Pv;
Fv.forEach(function(A) {
  Xr[A] = Pv(A);
});
function QB(A) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  var r = Uf(Mv.apply(void 0, Co([A], e, !1))), n = Iv(r);
  return new Dv(n, r);
}
const d4 = "#4fa94d", B4 = {
  "aria-busy": !0,
  role: "progressbar"
}, g4 = Xr.div`
  display: ${(A) => A.$visible ? "flex" : "none"};
`, p4 = "http://www.w3.org/2000/svg", Te = 242.776657104492, h4 = 1.6, w4 = QB`
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
  animation: ${w4} ${h4}s linear infinite;
`;
const m4 = QB`
to {
   transform: rotate(360deg);
 }
`;
Xr.svg`
  animation: ${m4} 0.75s steps(12, end) infinite;
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
const v4 = ({ height: A = 80, width: e = 80, strokeWidth: t = 2, radius: r = 1, color: n = d4, ariaLabel: i = "tail-spin-loading", wrapperStyle: o, wrapperClass: a, visible: s = !0 }) => {
  const l = parseInt(String(t)), u = l + 36, c = l / 2, f = c + parseInt(String(r)) - 1;
  return /* @__PURE__ */ G.jsx(g4, {
    style: o,
    $visible: s,
    className: a,
    "data-testid": "tail-spin-loading",
    "aria-label": i,
    ...B4,
    children: /* @__PURE__ */ G.jsxs("svg", {
      width: e,
      height: A,
      viewBox: `0 0 ${u} ${u}`,
      xmlns: p4,
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
                stopColor: n,
                stopOpacity: "0",
                offset: "0%"
              }),
              /* @__PURE__ */ G.jsx("stop", {
                stopColor: n,
                stopOpacity: ".631",
                offset: "63.146%"
              }),
              /* @__PURE__ */ G.jsx("stop", {
                stopColor: n,
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
                stroke: n,
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
}, C4 = QB`
to {
   stroke-dashoffset: 136;
 }
`;
Xr.polygon`
  stroke-dasharray: 17;
  animation: ${C4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Xr.svg`
  transform-origin: 50% 65%;
`;
var _v = { exports: {} };
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
})(_v);
var Q4 = _v.exports;
const Vv = /* @__PURE__ */ rl(Q4);
function y4({
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
  return /* @__PURE__ */ G.jsx(k0, { show: A, appear: !0, children: /* @__PURE__ */ G.jsx(BE, { className: It.dialog, onClose: s, children: /* @__PURE__ */ G.jsxs("form", { onSubmit: a, "data-isgandalf": !0, children: [
    /* @__PURE__ */ G.jsx(
      go,
      {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ G.jsx("div", { className: It.overlay })
      }
    ),
    /* @__PURE__ */ G.jsx("div", { className: It.container, children: /* @__PURE__ */ G.jsx(
      go,
      {
        enter: "ease-out duration-150",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-100",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ G.jsx(O0, { className: It.dialogPanel, children: /* @__PURE__ */ G.jsxs(
          "div",
          {
            className: Vv(It.inputWrapper, {
              [It.loading]: t
            }),
            children: [
              /* @__PURE__ */ G.jsx(
                gB,
                {
                  icon: dH,
                  className: It.searchIcon,
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ G.jsx(
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
              t && /* @__PURE__ */ G.jsx(
                v4,
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
const F4 = "_container_jio72_1", U4 = "_widgetButton_jio72_10", E4 = "_buttonContentWrapper_jio72_25", I4 = "_buttonContent_jio72_25", H4 = "_withComplete_jio72_45", x4 = "_loading_jio72_68", S4 = "_gradientShift_jio72_1", L4 = "_containerRotate_jio72_1", b4 = "_waitingForUser_jio72_81", T4 = "_pulse_jio72_1", k4 = "_arrow_jio72_112", O4 = "_outerContainer_jio72_121", D4 = "_floatingPopover_jio72_135", K4 = "_elasticPopIn_jio72_1", R4 = "_popoverLoadingOuter_jio72_153", N4 = "_popoverLoading_jio72_153", M4 = "_options_jio72_180", P4 = "_optionAppear_jio72_1", _4 = "_optionsButton_jio72_198", GA = {
  container: F4,
  widgetButton: U4,
  buttonContentWrapper: E4,
  buttonContent: I4,
  withComplete: H4,
  loading: x4,
  gradientShift: S4,
  containerRotate: L4,
  waitingForUser: b4,
  pulse: T4,
  arrow: k4,
  outerContainer: O4,
  floatingPopover: D4,
  elasticPopIn: K4,
  popoverLoadingOuter: R4,
  popoverLoading: N4,
  options: M4,
  optionAppear: P4,
  optionsButton: _4
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
}, V4 = function(A) {
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
}, Np = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", G4 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ma = 0; ma < Np.length; ma++)
  G4[Np.charCodeAt(ma)] = ma;
var Mp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var va = 0; va < Mp.length; va++)
  yi[Mp.charCodeAt(va)] = va;
var $4 = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = yi[A.charCodeAt(r)], o = yi[A.charCodeAt(r + 1)], a = yi[A.charCodeAt(r + 2)], s = yi[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, W4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, X4 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, kr = 5, yB = 11, Ou = 2, j4 = yB - kr, Gv = 65536 >> kr, Y4 = 1 << kr, Du = Y4 - 1, z4 = 1024 >> kr, J4 = Gv + z4, Z4 = J4, q4 = 32, Ax = Z4 + q4, ex = 65536 >> yB, tx = 1 << j4, rx = tx - 1, Pp = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, nx = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, ix = function(A, e) {
  var t = $4(A), r = Array.isArray(t) ? X4(t) : new Uint32Array(t), n = Array.isArray(t) ? W4(t) : new Uint16Array(t), i = 24, o = Pp(n, i / 2, r[4] / 2), a = r[5] === 2 ? Pp(n, (i + r[4]) / 2) : nx(r, Math.ceil((i + r[4]) / 4));
  return new ox(r[0], r[1], r[2], r[3], o, a);
}, ox = (
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
          return t = this.index[Gv + (e - 55296 >> kr)], t = (t << Ou) + (e & Du), this.data[t];
        if (e < this.highStart)
          return t = Ax - ex + (e >> yB), t = this.index[t], t += e >> kr & rx, t = this.index[t], t = (t << Ou) + (e & Du), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), _p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ax = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ca = 0; Ca < _p.length; Ca++)
  ax[_p.charCodeAt(Ca)] = Ca;
var sx = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Vp = 50, lx = 1, $v = 2, Wv = 3, ux = 4, cx = 5, Gp = 7, Xv = 8, $p = 9, Pt = 10, Lf = 11, Wp = 12, bf = 13, fx = 14, Fi = 15, Tf = 16, Qa = 17, fi = 18, dx = 19, Xp = 20, kf = 21, di = 22, Ku = 23, zr = 24, ue = 25, Ui = 26, Ei = 27, Jr = 28, Bx = 29, vr = 30, gx = 31, ya = 32, Fa = 33, Of = 34, Df = 35, Kf = 36, yo = 37, Rf = 38, as = 39, ss = 40, Ru = 41, jv = 42, px = 43, hx = [9001, 65288], Yv = "!", z = "×", Ua = "÷", Nf = ix(sx), nt = [vr, Kf], Mf = [lx, $v, Wv, cx], zv = [Pt, Xv], jp = [Ei, Ui], wx = Mf.concat(zv), Yp = [Rf, as, ss, Of, Df], mx = [Fi, bf], vx = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], n = [];
  return A.forEach(function(i, o) {
    var a = Nf.get(i);
    if (a > Vp ? (n.push(!0), a -= Vp) : n.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(i) !== -1)
      return r.push(o), t.push(Tf);
    if (a === ux || a === Lf) {
      if (o === 0)
        return r.push(o), t.push(vr);
      var s = t[o - 1];
      return wx.indexOf(s) === -1 ? (r.push(r[o - 1]), t.push(s)) : (r.push(o), t.push(vr));
    }
    if (r.push(o), a === gx)
      return t.push(e === "strict" ? kf : yo);
    if (a === jv || a === Bx)
      return t.push(vr);
    if (a === px)
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
}, Cx = function(A, e, t, r, n) {
  if (t[r] === 0)
    return z;
  var i = r - 1;
  if (Array.isArray(n) && n[i] === !0)
    return z;
  var o = i - 1, a = i + 1, s = e[i], l = o >= 0 ? e[o] : 0, u = e[a];
  if (s === $v && u === Wv)
    return z;
  if (Mf.indexOf(s) !== -1)
    return Yv;
  if (Mf.indexOf(u) !== -1 || zv.indexOf(u) !== -1)
    return z;
  if (zp(i, e) === Xv)
    return Ua;
  if (Nf.get(A[i]) === Lf || (s === ya || s === Fa) && Nf.get(A[a]) === Lf || s === Gp || u === Gp || s === $p || [Pt, bf, Fi].indexOf(s) === -1 && u === $p || [Qa, fi, dx, zr, Jr].indexOf(u) !== -1 || zp(i, e) === di || Nu(Ku, di, i, e) || Nu([Qa, fi], kf, i, e) || Nu(Wp, Wp, i, e))
    return z;
  if (s === Pt)
    return Ua;
  if (s === Ku || u === Ku)
    return z;
  if (u === Tf || s === Tf)
    return Ua;
  if ([bf, Fi, kf].indexOf(u) !== -1 || s === fx || l === Kf && mx.indexOf(s) !== -1 || s === Jr && u === Kf || u === Xp || nt.indexOf(u) !== -1 && s === ue || nt.indexOf(s) !== -1 && u === ue || s === Ei && [yo, ya, Fa].indexOf(u) !== -1 || [yo, ya, Fa].indexOf(s) !== -1 && u === Ui || nt.indexOf(s) !== -1 && jp.indexOf(u) !== -1 || jp.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [Ei, Ui].indexOf(s) !== -1 && (u === ue || [di, Fi].indexOf(u) !== -1 && e[a + 1] === ue) || // ( OP | HY ) × NU
  [di, Fi].indexOf(s) !== -1 && u === ue || // NU ×	(NU | SY | IS)
  s === ue && [ue, Jr, zr].indexOf(u) !== -1)
    return z;
  if ([ue, Jr, zr, Qa, fi].indexOf(u) !== -1)
    for (var c = i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return z;
      if ([Jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([Ei, Ui].indexOf(u) !== -1)
    for (var c = [Qa, fi].indexOf(s) !== -1 ? o : i; c >= 0; ) {
      var f = e[c];
      if (f === ue)
        return z;
      if ([Jr, zr].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (Rf === s && [Rf, as, Of, Df].indexOf(u) !== -1 || [as, Of].indexOf(s) !== -1 && [as, ss].indexOf(u) !== -1 || [ss, Df].indexOf(s) !== -1 && u === ss || Yp.indexOf(s) !== -1 && [Xp, Ui].indexOf(u) !== -1 || Yp.indexOf(u) !== -1 && s === Ei || nt.indexOf(s) !== -1 && nt.indexOf(u) !== -1 || s === zr && nt.indexOf(u) !== -1 || nt.concat(ue).indexOf(s) !== -1 && u === di && hx.indexOf(A[a]) === -1 || nt.concat(ue).indexOf(u) !== -1 && s === fi)
    return z;
  if (s === Ru && u === Ru) {
    for (var g = t[i], p = 1; g > 0 && (g--, e[g] === Ru); )
      p++;
    if (p % 2 !== 0)
      return z;
  }
  return s === ya && u === Fa ? z : Ua;
}, Qx = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = vx(A, e.lineBreak), r = t[0], n = t[1], i = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
    return [ue, vr, jv].indexOf(a) !== -1 ? yo : a;
  }));
  var o = e.wordBreak === "keep-all" ? i.map(function(a, s) {
    return a && A[s] >= 19968 && A[s] <= 40959;
  }) : void 0;
  return [r, n, o];
}, yx = (
  /** @class */
  function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Yv, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return yA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), Fx = function(A, e) {
  var t = Pl(A), r = Qx(t, e), n = r[0], i = r[1], o = r[2], a = t.length, s = 0, l = 0;
  return {
    next: function() {
      if (l >= a)
        return { done: !0, value: null };
      for (var u = z; l < a && (u = Cx(t, i, n, ++l, o)) === z; )
        ;
      if (u !== z || l === a) {
        var c = new yx(t, u, s, l);
        return s = l, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Ux = 1, Ex = 2, Mo = 4, Jp = 8, Xs = 10, Zp = 47, Gi = 92, Ix = 9, Hx = 32, Ea = 34, Bi = 61, xx = 35, Sx = 36, Lx = 37, Ia = 39, Ha = 40, gi = 41, bx = 95, ee = 45, Tx = 33, kx = 60, Ox = 62, Dx = 64, Kx = 91, Rx = 93, Nx = 61, Mx = 123, xa = 63, Px = 125, qp = 124, _x = 126, Vx = 128, Ah = 65533, Mu = 42, Hr = 43, Gx = 44, $x = 58, Wx = 59, Fo = 46, Xx = 0, jx = 8, Yx = 11, zx = 14, Jx = 31, Zx = 127, We = -1, Jv = 48, Zv = 97, qv = 101, qx = 102, AS = 117, eS = 122, AC = 65, eC = 69, tC = 70, tS = 85, rS = 90, $A = function(A) {
  return A >= Jv && A <= 57;
}, nS = function(A) {
  return A >= 55296 && A <= 57343;
}, Zr = function(A) {
  return $A(A) || A >= AC && A <= tC || A >= Zv && A <= qx;
}, iS = function(A) {
  return A >= Zv && A <= eS;
}, oS = function(A) {
  return A >= AC && A <= rS;
}, aS = function(A) {
  return iS(A) || oS(A);
}, sS = function(A) {
  return A >= Vx;
}, Sa = function(A) {
  return A === Xs || A === Ix || A === Hx;
}, js = function(A) {
  return aS(A) || sS(A) || A === bx;
}, eh = function(A) {
  return js(A) || $A(A) || A === ee;
}, lS = function(A) {
  return A >= Xx && A <= jx || A === Yx || A >= zx && A <= Jx || A === Zx;
}, kt = function(A, e) {
  return A !== Gi ? !1 : e !== Xs;
}, La = function(A, e, t) {
  return A === ee ? js(e) || kt(e, t) : js(A) ? !0 : !!(A === Gi && kt(A, e));
}, Pu = function(A, e, t) {
  return A === Hr || A === ee ? $A(e) ? !0 : e === Fo && $A(t) : $A(A === Fo ? e : A);
}, uS = function(A) {
  var e = 0, t = 1;
  (A[e] === Hr || A[e] === ee) && (A[e] === ee && (t = -1), e++);
  for (var r = []; $A(A[e]); )
    r.push(A[e++]);
  var n = r.length ? parseInt(yA.apply(void 0, r), 10) : 0;
  A[e] === Fo && e++;
  for (var i = []; $A(A[e]); )
    i.push(A[e++]);
  var o = i.length, a = o ? parseInt(yA.apply(void 0, i), 10) : 0;
  (A[e] === eC || A[e] === qv) && e++;
  var s = 1;
  (A[e] === Hr || A[e] === ee) && (A[e] === ee && (s = -1), e++);
  for (var l = []; $A(A[e]); )
    l.push(A[e++]);
  var u = l.length ? parseInt(yA.apply(void 0, l), 10) : 0;
  return t * (n + a * Math.pow(10, -o)) * Math.pow(10, s * u);
}, cS = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, fS = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, dS = {
  type: 4
  /* COMMA_TOKEN */
}, BS = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, gS = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, pS = {
  type: 21
  /* COLUMN_TOKEN */
}, hS = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, wS = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, mS = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, vS = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, CS = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, ba = {
  type: 23
  /* BAD_URL_TOKEN */
}, QS = {
  type: 1
  /* BAD_STRING_TOKEN */
}, yS = {
  type: 25
  /* CDO_TOKEN */
}, FS = {
  type: 24
  /* CDC_TOKEN */
}, US = {
  type: 26
  /* COLON_TOKEN */
}, ES = {
  type: 27
  /* SEMICOLON_TOKEN */
}, IS = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, HS = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, xS = {
  type: 31
  /* WHITESPACE_TOKEN */
}, Pf = {
  type: 32
  /* EOF_TOKEN */
}, rC = (
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
        case xx:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (eh(t) || kt(r, n)) {
            var i = La(t, r, n) ? Ex : Ux, o = this.consumeName();
            return { type: 5, value: o, flags: i };
          }
          break;
        case Sx:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), BS;
          break;
        case Ia:
          return this.consumeStringToken(Ia);
        case Ha:
          return cS;
        case gi:
          return fS;
        case Mu:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), CS;
          break;
        case Hr:
          if (Pu(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Gx:
          return dS;
        case ee:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (Pu(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (La(a, s, l))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === ee && l === Ox)
            return this.consumeCodePoint(), this.consumeCodePoint(), FS;
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
        case $x:
          return US;
        case Wx:
          return ES;
        case kx:
          if (this.peekCodePoint(0) === Tx && this.peekCodePoint(1) === ee && this.peekCodePoint(2) === ee)
            return this.consumeCodePoint(), this.consumeCodePoint(), yS;
          break;
        case Dx:
          var c = this.peekCodePoint(0), f = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (La(c, f, g)) {
            var o = this.consumeName();
            return { type: 7, value: o };
          }
          break;
        case Kx:
          return IS;
        case Gi:
          if (kt(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Rx:
          return HS;
        case Nx:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), gS;
          break;
        case Mx:
          return mS;
        case Px:
          return vS;
        case AS:
        case tS:
          var p = this.peekCodePoint(0), w = this.peekCodePoint(1);
          return p === Hr && (Zr(w) || w === xa) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case qp:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), hS;
          if (this.peekCodePoint(0) === qp)
            return this.consumeCodePoint(), pS;
          break;
        case _x:
          if (this.peekCodePoint(0) === Bi)
            return this.consumeCodePoint(), wS;
          break;
        case We:
          return Pf;
      }
      return Sa(e) ? (this.consumeWhiteSpace(), xS) : $A(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : js(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: yA(e) };
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
          return s === xa ? Jv : s;
        })), 16), i = parseInt(yA.apply(void 0, e.map(function(s) {
          return s === xa ? tC : s;
        })), 16);
        return { type: 30, start: n, end: i };
      }
      var o = parseInt(yA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === ee && Zr(this.peekCodePoint(1))) {
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
        if (n === Ea || n === Ia || n === Ha || lS(n))
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
          return this._value.splice(0, r), QS;
        if (n === Gi) {
          var i = this._value[r + 1];
          i !== We && i !== void 0 && (i === Xs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : kt(n, i) && (t += this.consumeStringSlice(r), t += yA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Mo, r = this.peekCodePoint(0);
      for ((r === Hr || r === ee) && e.push(this.consumeCodePoint()); $A(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === Fo && $A(n))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var i = this.peekCodePoint(2);
      if ((r === eC || r === qv) && ((n === Hr || n === ee) && $A(i) || $A(n)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Jp; $A(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [uS(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), o = this.peekCodePoint(2);
      if (La(n, i, o)) {
        var a = this.consumeName();
        return { type: 15, number: t, flags: r, unit: a };
      }
      return n === Lx ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (Zr(e)) {
        for (var t = yA(e); Zr(this.peekCodePoint(0)) && t.length < 6; )
          t += yA(this.consumeCodePoint());
        Sa(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || nS(r) || r > 1114111 ? Ah : r;
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
), nC = (
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
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || LS(r, e))
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
}, SS = function(A) {
  return A.type === 0;
}, _f = function(A, e) {
  return tA(A) && A.value === e;
}, iC = function(A) {
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
}, LS = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, sr = function(A) {
  return A.type === 17 || A.type === 15;
}, EA = function(A) {
  return A.type === 16 || sr(A);
}, oC = function(A) {
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
}, aC = "deg", sC = "grad", lC = "rad", uC = "turn", _l = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case aC:
          return Math.PI * e.number / 180;
        case sC:
          return Math.PI / 200 * e.number;
        case lC:
          return e.number;
        case uC:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, cC = function(A) {
  return A.type === 15 && (A.unit === aC || A.unit === sC || A.unit === lC || A.unit === uC);
}, fC = function(A) {
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
      var t = bS[e.name];
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
  var c = l <= 0.5 ? l * (s + 1) : l + s - l * s, f = l * 2 - c, g = _u(f, c, a + 1 / 3), p = _u(f, c, a), w = _u(f, c, a - 1 / 3);
  return Vt(g * 255, p * 255, w * 255, u);
}, bS = {
  hsl: nh,
  hsla: nh,
  rgb: rh,
  rgba: rh
}, $i = function(A, e) {
  return Zt.parse(A, nC.create(e).parseComponentValue());
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
}, TS = {
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
}, kS = {
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
      for (var c = o - l, f = n[l - 1], g = (u - f) / (c + 1), p = 1; p <= c; p++)
        n[l + p - 1] = g * p;
      l = null;
    }
  }
  return A.map(function(w, y) {
    var B = w.color;
    return { color: B, stop: Math.max(Math.min(1, n[y] / e), 0) };
  });
}, OS = function(A, e, t) {
  var r = e / 2, n = t / 2, i = nA(A[0], e) - r, o = n - nA(A[1], t);
  return (Math.atan2(o, i) + Math.PI * 2) % (Math.PI * 2);
}, DS = function(A, e, t) {
  var r = typeof A == "number" ? A : OS(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), i = e / 2, o = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
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
}, KS = function(A, e, t, r, n) {
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
}, RS = function(A, e) {
  var t = Fe(180), r = [];
  return tt(e).forEach(function(n, i) {
    if (i === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to") {
        t = fC(n);
        return;
      } else if (cC(o)) {
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
        t = fC(n);
        return;
      } else if (cC(o)) {
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
}, NS = function(A, e) {
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
          var c = Zt.parse(A, f[1]), g = f[0];
          ei(g) && r.push({
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
}, dC = "closest-side", BC = "farthest-side", gC = "closest-corner", pC = "farthest-corner", hC = "circle", wC = "ellipse", mC = "cover", vC = "contain", MS = function(A, e) {
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
            case hC:
              return t = 0, !1;
            case wC:
              return t = 1, !1;
            case "at":
              return l = !0, !1;
            case dC:
              return r = 0, !1;
            case mC:
            case BC:
              return r = 1, !1;
            case vC:
            case gC:
              return r = 2, !1;
            case pC:
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
          case hC:
            return t = 0, !1;
          case wC:
            return t = 1, !1;
          case vC:
          case dC:
            return r = 0, !1;
          case BC:
            return r = 1, !1;
          case gC:
            return r = 2, !1;
          case mC:
          case pC:
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
}, PS = function(A) {
  return A.type === 1;
}, _S = function(A) {
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
      var r = CC[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function VS(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!CC[A.name]);
}
var CC = {
  "linear-gradient": RS,
  "-moz-linear-gradient": Ta,
  "-ms-linear-gradient": Ta,
  "-o-linear-gradient": Ta,
  "-webkit-linear-gradient": Ta,
  "radial-gradient": MS,
  "-moz-radial-gradient": ka,
  "-ms-radial-gradient": ka,
  "-o-radial-gradient": ka,
  "-webkit-radial-gradient": ka,
  "-webkit-gradient": NS
}, GS = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Xn(r) && VS(r);
    }).map(function(r) {
      return UB.parse(A, r);
    });
  }
}, $S = {
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
}, WS = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(EA);
    }).map(oC);
  }
}, XS = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(tA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(jS);
  }
}, jS = function(A) {
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
var YS = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return tt(e).map(function(t) {
      return t.filter(zS);
    });
  }
}, zS = function(A) {
  return tA(A) || EA(A);
}, Gl = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, JS = Gl("top"), ZS = Gl("right"), qS = Gl("bottom"), AL = Gl("left"), $l = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return oC(t.filter(EA));
    }
  };
}, eL = $l("top-left"), tL = $l("top-right"), rL = $l("bottom-right"), nL = $l("bottom-left"), Wl = function(A) {
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
}, iL = Wl("top"), oL = Wl("right"), aL = Wl("bottom"), sL = Wl("left"), Xl = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return Po(t) ? t.number : 0;
    }
  };
}, lL = Xl("top"), uL = Xl("right"), cL = Xl("bottom"), fL = Xl("left"), dL = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, BL = {
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
}, gL = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(tA).reduce(
      function(t, r) {
        return t | pL(r.value);
      },
      0
      /* NONE */
    );
  }
}, pL = function(A) {
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
}, hL = {
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
}, wL = {
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
var mL = {
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
}, vL = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, ah = function(A, e) {
  return tA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : EA(A) ? nA(A, e) : e;
}, CL = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : UB.parse(A, e);
  }
}, QL = {
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
}, yL = jl("top"), FL = jl("right"), UL = jl("bottom"), EL = jl("left"), IL = {
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
}, HL = {
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
}, xL = Yl("top"), SL = Yl("right"), LL = Yl("bottom"), bL = Yl("left"), TL = {
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
}, kL = {
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
}, OL = {
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
}, DL = {
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
}, KL = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = ML[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, RL = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, NL = function(A) {
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
}, ML = {
  matrix: RL,
  matrix3d: NL
}, sh = {
  type: 16,
  number: 50,
  flags: Mo
}, PL = [sh, sh], _L = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(EA);
    return t.length !== 2 ? PL : [t[0], t[1]];
  }
}, VL = {
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
var GL = {
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
}, $L = {
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
}, QC = {
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
}, WL = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return ei(e) ? e.number : 1;
  }
}, XL = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, jL = {
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
}, YL = {
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
}, zL = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, JL = {
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
}, ZL = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(tA).map(function(t) {
      return t.value;
    });
  }
}, qL = {
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
}, Ab = {
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
}, eb = {
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
    for (var r = [], n = e.filter(iC), i = 0; i < n.length; i++) {
      var o = n[i], a = n[i + 1];
      if (o.type === 20) {
        var s = a && ei(a) ? a.number : 1;
        r.push({ counter: o.value, increment: s });
      }
    }
    return r;
  }
}, tb = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(iC), n = 0; n < r.length; n++) {
      var i = r[n], o = r[n + 1];
      if (tA(i) && i.value !== "none") {
        var a = o && ei(o) ? o.number : 0;
        t.push({ counter: i.value, reset: a });
      }
    }
    return t;
  }
}, rb = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(Po).map(function(t) {
      return QC.parse(A, t);
    });
  }
}, nb = {
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
    var r = [], n = e.filter(SS);
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
}, ib = {
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
}, ob = {
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
}, ab = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, sb = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Po(e) ? e.number : 0;
  }
}, lb = (
  /** @class */
  function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = T(e, rb, t.animationDuration), this.backgroundClip = T(e, TS, t.backgroundClip), this.backgroundColor = T(e, kS, t.backgroundColor), this.backgroundImage = T(e, GS, t.backgroundImage), this.backgroundOrigin = T(e, $S, t.backgroundOrigin), this.backgroundPosition = T(e, WS, t.backgroundPosition), this.backgroundRepeat = T(e, XS, t.backgroundRepeat), this.backgroundSize = T(e, YS, t.backgroundSize), this.borderTopColor = T(e, JS, t.borderTopColor), this.borderRightColor = T(e, ZS, t.borderRightColor), this.borderBottomColor = T(e, qS, t.borderBottomColor), this.borderLeftColor = T(e, AL, t.borderLeftColor), this.borderTopLeftRadius = T(e, eL, t.borderTopLeftRadius), this.borderTopRightRadius = T(e, tL, t.borderTopRightRadius), this.borderBottomRightRadius = T(e, rL, t.borderBottomRightRadius), this.borderBottomLeftRadius = T(e, nL, t.borderBottomLeftRadius), this.borderTopStyle = T(e, iL, t.borderTopStyle), this.borderRightStyle = T(e, oL, t.borderRightStyle), this.borderBottomStyle = T(e, aL, t.borderBottomStyle), this.borderLeftStyle = T(e, sL, t.borderLeftStyle), this.borderTopWidth = T(e, lL, t.borderTopWidth), this.borderRightWidth = T(e, uL, t.borderRightWidth), this.borderBottomWidth = T(e, cL, t.borderBottomWidth), this.borderLeftWidth = T(e, fL, t.borderLeftWidth), this.boxShadow = T(e, ib, t.boxShadow), this.color = T(e, dL, t.color), this.direction = T(e, BL, t.direction), this.display = T(e, gL, t.display), this.float = T(e, hL, t.cssFloat), this.fontFamily = T(e, YL, t.fontFamily), this.fontSize = T(e, zL, t.fontSize), this.fontStyle = T(e, qL, t.fontStyle), this.fontVariant = T(e, ZL, t.fontVariant), this.fontWeight = T(e, JL, t.fontWeight), this.letterSpacing = T(e, wL, t.letterSpacing), this.lineBreak = T(e, mL, t.lineBreak), this.lineHeight = T(e, vL, t.lineHeight), this.listStyleImage = T(e, CL, t.listStyleImage), this.listStylePosition = T(e, QL, t.listStylePosition), this.listStyleType = T(e, Vf, t.listStyleType), this.marginTop = T(e, yL, t.marginTop), this.marginRight = T(e, FL, t.marginRight), this.marginBottom = T(e, UL, t.marginBottom), this.marginLeft = T(e, EL, t.marginLeft), this.opacity = T(e, WL, t.opacity);
      var i = T(e, IL, t.overflow);
      this.overflowX = i[0], this.overflowY = i[i.length > 1 ? 1 : 0], this.overflowWrap = T(e, HL, t.overflowWrap), this.paddingTop = T(e, xL, t.paddingTop), this.paddingRight = T(e, SL, t.paddingRight), this.paddingBottom = T(e, LL, t.paddingBottom), this.paddingLeft = T(e, bL, t.paddingLeft), this.paintOrder = T(e, ob, t.paintOrder), this.position = T(e, kL, t.position), this.textAlign = T(e, TL, t.textAlign), this.textDecorationColor = T(e, XL, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = T(e, jL, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = T(e, OL, t.textShadow), this.textTransform = T(e, DL, t.textTransform), this.transform = T(e, KL, t.transform), this.transformOrigin = T(e, _L, t.transformOrigin), this.visibility = T(e, VL, t.visibility), this.webkitTextStrokeColor = T(e, ab, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = T(e, sb, t.webkitTextStrokeWidth), this.wordBreak = T(e, GL, t.wordBreak), this.zIndex = T(e, $L, t.zIndex);
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
), ub = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = T(e, Ab, t.content), this.quotes = T(e, nb, t.quotes);
    }
    return A;
  }()
), uh = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = T(e, eb, t.counterIncrement), this.counterReset = T(e, tb, t.counterReset);
    }
    return A;
  }()
), T = function(A, e, t) {
  var r = new rC(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(n);
  var i = new nC(r.read());
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
          return QC.parse(A, i.parseComponentValue());
      }
      break;
  }
}, cb = "data-html2canvas-debug", fb = function(A) {
  var e = A.getAttribute(cb);
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
  var t = fb(A);
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
      this.styles = new lb(e, window.getComputedStyle(t, null)), Xf(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ml(this.context, t), Gf(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), db = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Hi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Oa = 0; Oa < ch.length; Oa++)
  Hi[ch.charCodeAt(Oa)] = Oa;
var Bb = function(A) {
  var e = A.length * 0.75, t = A.length, r, n = 0, i, o, a, s;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), u = Array.isArray(l) ? l : new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Hi[A.charCodeAt(r)], o = Hi[A.charCodeAt(r + 1)], a = Hi[A.charCodeAt(r + 2)], s = Hi[A.charCodeAt(r + 3)], u[n++] = i << 2 | o >> 4, u[n++] = (o & 15) << 4 | a >> 2, u[n++] = (a & 3) << 6 | s & 63;
  return l;
}, gb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, pb = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, Or = 5, EB = 11, Vu = 2, hb = EB - Or, yC = 65536 >> Or, wb = 1 << Or, Gu = wb - 1, mb = 1024 >> Or, vb = yC + mb, Cb = vb, Qb = 32, yb = Cb + Qb, Fb = 65536 >> EB, Ub = 1 << hb, Eb = Ub - 1, fh = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Ib = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Hb = function(A, e) {
  var t = Bb(A), r = Array.isArray(t) ? pb(t) : new Uint32Array(t), n = Array.isArray(t) ? gb(t) : new Uint16Array(t), i = 24, o = fh(n, i / 2, r[4] / 2), a = r[5] === 2 ? fh(n, (i + r[4]) / 2) : Ib(r, Math.ceil((i + r[4]) / 4));
  return new xb(r[0], r[1], r[2], r[3], o, a);
}, xb = (
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
          return t = this.index[yC + (e - 55296 >> Or)], t = (t << Vu) + (e & Gu), this.data[t];
        if (e < this.highStart)
          return t = yb - Fb + (e >> EB), t = this.index[t], t += e >> Or & Eb, t = this.index[t], t = (t << Vu) + (e & Gu), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), dh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Sb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Da = 0; Da < dh.length; Da++)
  Sb[dh.charCodeAt(Da)] = Da;
var Lb = 1, $u = 2, Wu = 3, Bh = 4, gh = 5, bb = 7, ph = 8, Xu = 9, ju = 10, hh = 11, wh = 12, mh = 13, vh = 14, Yu = 15, Tb = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var i = A.charCodeAt(t++);
      (i & 64512) === 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}, kb = function() {
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
}, Ob = Hb(db), me = "×", zu = "÷", Db = function(A) {
  return Ob.get(A);
}, Kb = function(A, e, t) {
  var r = t - 2, n = e[r], i = e[t - 1], o = e[t];
  if (i === $u && o === Wu)
    return me;
  if (i === $u || i === Wu || i === Bh || o === $u || o === Wu || o === Bh)
    return zu;
  if (i === ph && [ph, Xu, hh, wh].indexOf(o) !== -1 || (i === hh || i === Xu) && (o === Xu || o === ju) || (i === wh || i === ju) && o === ju || o === mh || o === gh || o === bb || i === Lb)
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
}, Rb = function(A) {
  var e = Tb(A), t = e.length, r = 0, n = 0, i = e.map(Db);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var o = me; r < t && (o = Kb(e, i, ++r)) === me; )
        ;
      if (o !== me || r === t) {
        var a = kb.apply(null, e.slice(n, r));
        return n = r, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, Nb = function(A) {
  for (var e = Rb(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Mb = function(A) {
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
}, Pb = function(A) {
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
}, _b = function() {
  return typeof new Image().crossOrigin < "u";
}, Vb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Gb = function(A) {
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
}, $b = function(A) {
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
    var A = Mb(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && Pb(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = Gb(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? $b(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = _b();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = Vb();
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
), Wb = function(A, e, t, r) {
  var n = Yb(e, t), i = [], o = 0;
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
        i.push(new Xi(a, Xb(A, r))), r = c;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
    o += a.length;
  }), i;
}, Xb = function(A, e) {
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
  return Nb(A);
}, jb = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return Jb(A, e);
}, Yb = function(A, e) {
  return e.letterSpacing !== 0 ? IB(A) : jb(A, e);
}, zb = [32, 160, 4961, 65792, 65793, 4153, 4241], Jb = function(A, e) {
  for (var t = Fx(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], n, i = function() {
    if (n.value) {
      var o = n.value.slice(), a = Pl(o), s = "";
      a.forEach(function(l) {
        zb.indexOf(l) === -1 ? s += yA(l) : (s.length && r.push(s), r.push(yA(l)), s = "");
      }), s.length && r.push(s);
    }
  }; !(n = t.next()).done; )
    i();
  return r;
}, Zb = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = qb(t.data, r.textTransform), this.textBounds = Wb(e, this.text, r, t);
    }
    return A;
  }()
), qb = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(A2, e2);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, A2 = /(^|\s|:|-|\(|\))([a-z])/g, e2 = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, FC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  }(rt)
), UC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  }(rt)
), EC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = new XMLSerializer(), o = Ml(t, r);
      return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  }(rt)
), IC = (
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
), t2 = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], r2 = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], n2 = function(A) {
  return A.width > A.height ? new Qt(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Qt(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, i2 = function(A) {
  var e = A.type === o2 ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, zs = "checkbox", Js = "radio", o2 = "password", Fh = 707406591, HB = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = i2(r), (n.type === zs || n.type === Js) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], n.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], n.bounds = n2(n.bounds)), n.type) {
        case zs:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = t2;
          break;
        case Js:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = r2;
          break;
      }
      return n;
    }
    return e;
  }(rt)
), HC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, i = r.options[r.selectedIndex || 0];
      return n.value = i && i.text || "", n;
    }
    return e;
  }(rt)
), xC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  }(rt)
), SC = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = bC(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement ? $i(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Bt.TRANSPARENT, o = r.contentWindow.document.body ? $i(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Bt.TRANSPARENT;
          n.backgroundColor = qt(i) ? qt(o) ? n.styles.backgroundColor : o : i;
        }
      } catch {
      }
      return n;
    }
    return e;
  }(rt)
), a2 = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var n = e.firstChild, i = void 0; n; n = i)
    if (i = n.nextSibling, TC(n) && n.data.trim().length > 0)
      t.textNodes.push(new Zb(A, n, t.styles));
    else if (Cn(n))
      if (KC(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(a) {
          return ls(A, a, t, r);
        });
      else {
        var o = LC(A, n);
        o.styles.isVisible() && (s2(n, o, r) ? o.flags |= 4 : l2(o.styles) && (o.flags |= 2), a2.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? ls(A, n.shadowRoot, o, r) : !Zs(n) && !kC(n) && !qs(n) && ls(A, n, o, r));
      }
}, LC = function(A, e) {
  return jf(e) ? new FC(A, e) : OC(e) ? new UC(A, e) : kC(e) ? new EC(A, e) : u2(e) ? new IC(A, e) : c2(e) ? new Wf(A, e) : f2(e) ? new HB(A, e) : qs(e) ? new HC(A, e) : Zs(e) ? new xC(A, e) : DC(e) ? new SC(A, e) : new rt(A, e);
}, bC = function(A, e) {
  var t = LC(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, s2 = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || xB(A) && t.styles.isTransparent();
}, l2 = function(A) {
  return A.isPositioned() || A.isFloating();
}, TC = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Cn = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, Xf = function(A) {
  return Cn(A) && typeof A.style < "u" && !us(A);
}, us = function(A) {
  return typeof A.className == "object";
}, u2 = function(A) {
  return A.tagName === "LI";
}, c2 = function(A) {
  return A.tagName === "OL";
}, f2 = function(A) {
  return A.tagName === "INPUT";
}, d2 = function(A) {
  return A.tagName === "HTML";
}, kC = function(A) {
  return A.tagName === "svg";
}, xB = function(A) {
  return A.tagName === "BODY";
}, OC = function(A) {
  return A.tagName === "CANVAS";
}, Uh = function(A) {
  return A.tagName === "VIDEO";
}, jf = function(A) {
  return A.tagName === "IMG";
}, DC = function(A) {
  return A.tagName === "IFRAME";
}, Eh = function(A) {
  return A.tagName === "STYLE";
}, B2 = function(A) {
  return A.tagName === "SCRIPT";
}, Zs = function(A) {
  return A.tagName === "TEXTAREA";
}, qs = function(A) {
  return A.tagName === "SELECT";
}, KC = function(A) {
  return A.tagName === "SLOT";
}, Ih = function(A) {
  return A.tagName.indexOf("-") > 0;
}, g2 = (
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
}, p2 = {
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
}, h2 = {
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
}, RC = function(A, e, t, r) {
  var n = "";
  do
    t || A--, n = r(A) + n, A /= e;
  while (A * e >= e);
  return n;
}, QA = function(A, e, t, r, n) {
  var i = t - e + 1;
  return (A < 0 ? "-" : "") + (RC(Math.abs(A), i, r, function(o) {
    return yA(Math.floor(o % i) + e);
  }) + n);
}, gr = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return RC(Math.abs(A), r, !1, function(n) {
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
      return qr(A, 1, 19999, h2, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return qr(A, 1, 10999, p2, 3, r);
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
}, NC = "data-html2canvas-ignore", Th = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new g2(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = w2(e, t);
      if (!n.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var i = e.defaultView.pageXOffset, o = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = C2(n).then(function() {
        return YA(r, void 0, void 0, function() {
          var u, c;
          return VA(this, function(f) {
            switch (f.label) {
              case 0:
                return this.scrolledElements.forEach(U2), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), u = this.options.onclone, c = this.clonedReferenceElement, typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
              case 1:
                f.sent(), f.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, v2(s)] : [3, 4];
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
      return s.open(), s.write(y2(document.doctype) + "<html></html>"), F2(this.referenceElement.ownerDocument, i, o), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (Gf(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (OC(e))
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
      (!Cn(t) || !B2(t) && !t.hasAttribute(NC) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Cn(t) || !Eh(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling)
        if (Cn(i) && KC(i) && typeof i.assignedNodes == "function") {
          var o = i.assignedNodes();
          o.length && o.forEach(function(a) {
            return n.appendChildNode(t, a, r);
          });
        } else
          this.appendChildNode(t, i, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (TC(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && Cn(e) && (Xf(e) || us(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var i = r.getComputedStyle(e), o = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && Xf(n) && (this.clonedReferenceElement = n), xB(n) && H2(n);
        var s = this.counters.parse(new uh(this.context, i)), l = this.resolvePseudoContent(e, n, o, ji.BEFORE);
        Ih(e) && (t = !0), Uh(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var u = this.resolvePseudoContent(e, n, a, ji.AFTER);
        return u && n.appendChild(u), this.counters.pop(s), (i && (this.options.copyStyles || us(e)) && !DC(e) || t) && Zu(i, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]), (Zs(e) || qs(e)) && (Zs(n) || qs(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var i = this;
      if (r) {
        var o = r.content, a = t.ownerDocument;
        if (!(!a || !o || o === "none" || o === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new uh(this.context, r));
          var s = new ub(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Zu(r, l), s.content.forEach(function(c) {
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
                var p = c.values.filter(Xn), w = p[0], y = p[1];
                if (w && tA(w)) {
                  var B = i.counters.getCounterValue(w.value), d = y && tA(y) ? Vf.parse(i.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Uo(B, d, !1)));
                }
              } else if (c.name === "counters") {
                var h = c.values.filter(Xn), w = h[0], m = h[1], y = h[2];
                if (w && tA(w)) {
                  var v = i.counters.getCounterValues(w.value), C = y && tA(y) ? Vf.parse(i.context, y.value) : 3, F = m && m.type === 0 ? m.value : "", U = v.map(function(K) {
                    return Uo(K, C, !1);
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
var w2 = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(NC, "true"), A.body.appendChild(t), t;
}, m2 = function(A) {
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
}, v2 = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(m2));
}, C2 = function(A) {
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
}, Q2 = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Zu = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    Q2.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, y2 = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, F2 = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, U2 = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, E2 = ":before", I2 = ":after", Yf = "___html2canvas___pseudoelement_before", zf = "___html2canvas___pseudoelement_after", kh = `{
    content: "" !important;
    display: none !important;
}`, H2 = function(A) {
  x2(A, "." + Yf + E2 + kh + `
         .` + zf + I2 + kh);
}, x2 = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, MC = (
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
), S2 = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Ac(e) || k2(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return YA(this, void 0, void 0, function() {
        var t, r, n, i, o = this;
        return VA(this, function(a) {
          switch (a.label) {
            case 0:
              return t = MC.isSameOrigin(e), r = !qu(e) && this._options.useCORS === !0 && KA.SUPPORT_CORS_IMAGES && !t, n = !qu(e) && !t && !Ac(e) && typeof this._options.proxy == "string" && KA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !qu(e) && !Ac(e) && !n && !r ? [
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
                }, u.onerror = l, (O2(i) || r) && (u.crossOrigin = "anonymous"), u.src = i, u.complete === !0 && setTimeout(function() {
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
), L2 = /^data:image\/svg\+xml/i, b2 = /^data:image\/.*;base64,/i, T2 = /^data:image\/.*/i, k2 = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !D2(A);
}, qu = function(A) {
  return T2.test(A);
}, O2 = function(A) {
  return b2.test(A);
}, Ac = function(A) {
  return A.substr(0, 4) === "blob";
}, D2 = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || L2.test(A);
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
}, K2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Ii(t.borderTopLeftRadius, r.width, r.height), i = n[0], o = n[1], a = Ii(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], u = Ii(t.borderBottomRightRadius, r.width, r.height), c = u[0], f = u[1], g = Ii(t.borderBottomLeftRadius, r.width, r.height), p = g[0], w = g[1], y = [];
      y.push((i + s) / r.width), y.push((p + c) / r.width), y.push((o + w) / r.height), y.push((l + f) / r.height);
      var B = Math.max.apply(Math, y);
      B > 1 && (i /= B, o /= B, s /= B, l /= B, c /= B, f /= B, p /= B, w /= B);
      var d = r.width - s, h = r.height - f, m = r.width - c, v = r.height - w, C = t.borderTopWidth, F = t.borderRightWidth, U = t.borderBottomWidth, E = t.borderLeftWidth, x = nA(t.paddingTop, e.bounds.width), K = nA(t.paddingRight, e.bounds.width), _ = nA(t.paddingBottom, e.bounds.width), M = nA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + E / 3, r.top + C / 3, i - E / 3, o - C / 3, AA.TOP_LEFT) : new b(r.left + E / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 3, s - F / 3, l - C / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 3, f - U / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 3, r.top + r.height - U / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || w > 0 ? cA(r.left + E / 3, r.top + v, p - E / 3, w - U / 3, AA.BOTTOM_LEFT) : new b(r.left + E / 3, r.top + r.height - U / 3), this.topLeftBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + E * 2 / 3, r.top + C * 2 / 3, i - E * 2 / 3, o - C * 2 / 3, AA.TOP_LEFT) : new b(r.left + E * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || o > 0 ? cA(r.left + d, r.top + C * 2 / 3, s - F * 2 / 3, l - C * 2 / 3, AA.TOP_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F * 2 / 3, f - U * 2 / 3, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F * 2 / 3, r.top + r.height - U * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || w > 0 ? cA(r.left + E * 2 / 3, r.top + v, p - E * 2 / 3, w - U * 2 / 3, AA.BOTTOM_LEFT) : new b(r.left + E * 2 / 3, r.top + r.height - U * 2 / 3), this.topLeftBorderStroke = i > 0 || o > 0 ? cA(r.left + E / 2, r.top + C / 2, i - E / 2, o - C / 2, AA.TOP_LEFT) : new b(r.left + E / 2, r.top + C / 2), this.topRightBorderStroke = i > 0 || o > 0 ? cA(r.left + d, r.top + C / 2, s - F / 2, l - C / 2, AA.TOP_RIGHT) : new b(r.left + r.width - F / 2, r.top + C / 2), this.bottomRightBorderStroke = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c - F / 2, f - U / 2, AA.BOTTOM_RIGHT) : new b(r.left + r.width - F / 2, r.top + r.height - U / 2), this.bottomLeftBorderStroke = p > 0 || w > 0 ? cA(r.left + E / 2, r.top + v, p - E / 2, w - U / 2, AA.BOTTOM_LEFT) : new b(r.left + E / 2, r.top + r.height - U / 2), this.topLeftBorderBox = i > 0 || o > 0 ? cA(r.left, r.top, i, o, AA.TOP_LEFT) : new b(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? cA(r.left + d, r.top, s, l, AA.TOP_RIGHT) : new b(r.left + r.width, r.top), this.bottomRightBorderBox = c > 0 || f > 0 ? cA(r.left + m, r.top + h, c, f, AA.BOTTOM_RIGHT) : new b(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || w > 0 ? cA(r.left, r.top + v, p, w, AA.BOTTOM_LEFT) : new b(r.left, r.top + r.height), this.topLeftPaddingBox = i > 0 || o > 0 ? cA(r.left + E, r.top + C, Math.max(0, i - E), Math.max(0, o - C), AA.TOP_LEFT) : new b(r.left + E, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width - F), r.top + C, d > r.width + F ? 0 : Math.max(0, s - F), Math.max(0, l - C), AA.TOP_RIGHT) : new b(r.left + r.width - F, r.top + C), this.bottomRightPaddingBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - E), r.top + Math.min(h, r.height - U), Math.max(0, c - F), Math.max(0, f - U), AA.BOTTOM_RIGHT) : new b(r.left + r.width - F, r.top + r.height - U), this.bottomLeftPaddingBox = p > 0 || w > 0 ? cA(r.left + E, r.top + Math.min(v, r.height - U), Math.max(0, p - E), Math.max(0, w - U), AA.BOTTOM_LEFT) : new b(r.left + E, r.top + r.height - U), this.topLeftContentBox = i > 0 || o > 0 ? cA(r.left + E + M, r.top + C + x, Math.max(0, i - (E + M)), Math.max(0, o - (C + x)), AA.TOP_LEFT) : new b(r.left + E + M, r.top + C + x), this.topRightContentBox = s > 0 || l > 0 ? cA(r.left + Math.min(d, r.width + E + M), r.top + C + x, d > r.width + E + M ? 0 : s - E + M, l - (C + x), AA.TOP_RIGHT) : new b(r.left + r.width - (F + K), r.top + C + x), this.bottomRightContentBox = c > 0 || f > 0 ? cA(r.left + Math.min(m, r.width - (E + M)), r.top + Math.min(h, r.height + C + x), Math.max(0, c - (F + K)), f - (U + _), AA.BOTTOM_RIGHT) : new b(r.left + r.width - (F + K), r.top + r.height - (U + _)), this.bottomLeftContentBox = p > 0 || w > 0 ? cA(r.left + E + M, r.top + v, Math.max(0, p - (E + M)), w - (U + _), AA.BOTTOM_LEFT) : new b(r.left + E + M, r.top + r.height - (U + _));
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
}, R2 = function(A) {
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
}, N2 = (
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
), M2 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), P2 = function(A) {
  return A.type === 0;
}, PC = function(A) {
  return A.type === 1;
}, _2 = function(A) {
  return A.type === 2;
}, Oh = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, V2 = function(A, e, t, r, n) {
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
}, _C = (
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
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new K2(this.container), this.container.styles.opacity < 1 && this.effects.push(new M2(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
        this.effects.push(new N2(r, n, i));
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
          return !PC(s);
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
    ), a = new VC(n, A);
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
      var l = i || n.styles.isPositioned() ? t : e, u = new _C(a);
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
      Jf(a, u, i ? u : t, s);
    } else
      n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), Jf(a, e, t, s);
    xA(
      n.flags,
      8
      /* IS_LIST_OWNER */
    ) && GC(n, s);
  });
}, GC = function(A, e) {
  for (var t = A instanceof Wf ? A.start : 1, r = A instanceof Wf ? A.reversed : !1, n = 0; n < e.length; n++) {
    var i = e[n];
    i.container instanceof IC && typeof i.container.value == "number" && i.container.value !== 0 && (t = i.container.value), i.listValue = Uo(t, i.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, G2 = function(A) {
  var e = new VC(A, null), t = new _C(e), r = [];
  return Jf(e, t, t, r), GC(e.container, r), t;
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
}, $2 = function(A, e) {
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
}, W2 = function(A, e) {
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
}, X2 = function(A, e) {
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
}, $C = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, tl = function(A) {
  var e = A.styles, t = A.bounds, r = nA(e.paddingLeft, t.width), n = nA(e.paddingRight, t.width), i = nA(e.paddingTop, t.width), o = nA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, i + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + i + o));
}, j2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : $C(e);
}, Y2 = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? tl(e) : $C(e);
}, ec = function(A, e, t) {
  var r = j2(rn(A.styles.backgroundOrigin, e), A), n = Y2(rn(A.styles.backgroundClip, e), A), i = z2(rn(A.styles.backgroundSize, e), t, r), o = i[0], a = i[1], s = Ii(rn(A.styles.backgroundPosition, e), r.width - o, r.height - a), l = J2(rn(A.styles.backgroundRepeat, e), s, i, r, n), u = Math.round(r.left + s[0]), c = Math.round(r.top + s[1]);
  return [l, u, c, o, a];
}, en = function(A) {
  return tA(A) && A.value === Ln.AUTO;
}, Ma = function(A) {
  return typeof A == "number";
}, z2 = function(A, e, t) {
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
      var g = u ? r : n * i, p = c ? n : r / i;
      return [g, p];
    }
    var w = u ? r : t.width, y = c ? n : t.height;
    return [w, y];
  }
  if (s) {
    var B = 0, d = 0;
    return EA(o) ? B = nA(o, t.width) : EA(a) && (d = nA(a, t.height)), en(o) ? B = d * i : (!a || en(a)) && (d = B / i), [B, d];
  }
  var h = null, m = null;
  if (EA(o) ? h = nA(o, t.width) : a && EA(a) && (m = nA(a, t.height)), h !== null && (!a || en(a)) && (m = u && c ? h / r * n : t.height), m !== null && en(o) && (h = u && c ? m / n * r : t.width), h !== null && m !== null)
    return [h, m];
  throw new Error("Unable to calculate background-size for element");
}, rn = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, J2 = function(A, e, t, r, n) {
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
}, Z2 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Kh = "Hidden Text", q2 = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), i = this._document.createElement("span"), o = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = Z2, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(Kh)), r.appendChild(i), r.appendChild(n);
      var a = n.offsetTop - i.offsetTop + 2;
      r.removeChild(i), r.appendChild(this._document.createTextNode(Kh)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return o.removeChild(r), { baseline: a, middle: s };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), WC = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), AT = 1e4, eT = (
  /** @class */
  function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new q2(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), _2(t) && (this.ctx.globalAlpha = t.opacity), P2(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), PC(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
      }).join(""), n = oT(t.fontFamily).join(", "), i = Po(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
                  f.ctx.fillStyle = bA(r.color), f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(B) {
                    f.ctx.shadowColor = bA(B.color), f.ctx.shadowOffsetX = B.offsetX.number * f.options.scale, f.ctx.shadowOffsetY = B.offsetY.number * f.options.scale, f.ctx.shadowBlur = B.blur.number, f.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), f.ctx.shadowColor = "", f.ctx.shadowOffsetX = 0, f.ctx.shadowOffsetY = 0, f.ctx.shadowBlur = 0), r.textDecorationLine.length && (f.ctx.fillStyle = bA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(B) {
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
        var r, n, i, o, a, s, d, d, l, u, c, f, m, g, p, v, w, y, B, d, h, m, v;
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
              if (!(r instanceof FC)) return [3, 8];
              C.label = 5;
            case 5:
              return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 8];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof UC && this.renderReplacedElement(r, n, r.canvas), !(r instanceof EC)) return [3, 12];
              C.label = 9;
            case 9:
              return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return d = C.sent(), this.renderReplacedElement(r, n, d), [3, 12];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof SC && r.tree ? (l = new e(this.context, {
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
              ]), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore()) : r.type === Js && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = bA(Fh), this.ctx.fill(), this.ctx.restore())), tT(r) && r.value.length) {
                switch (f = this.createFontStyle(i), m = f[0], g = f[1], p = this.fontMetrics.getMetrics(m, g).baseline, this.ctx.font = m, this.ctx.fillStyle = bA(i.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = nT(r.styles.textAlign), v = tl(r), w = 0, r.styles.textAlign) {
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
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Xi(r.value, y), i.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!xA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (B = r.styles.listStyleImage, B.type !== 0) return [3, 18];
              d = void 0, h = B.url, C.label = 15;
            case 15:
              return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)];
            case 16:
              return d = C.sent(), this.ctx.drawImage(d, r.bounds.left - (d.width + 10), r.bounds.top), [3, 18];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + h), [3, 18];
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
      return YA(this, void 0, void 0, function() {
        var r, n, B, i, o, B, a, s, B, l, u, B, c, f, B, g, p, B, w, y, B;
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
                var c, f, g, x, $, R, M, V, U, p, x, $, R, M, V, w, y, B, d, h, m, v, C, F, U, E, x, K, _, M, V, J, $, R, I, S, L, N, X, dA, BA, gA;
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
                      return c && (g = ec(t, r, [
                        c.width,
                        c.height,
                        c.width / c.height
                      ]), x = g[0], $ = g[1], R = g[2], M = g[3], V = g[4], U = i.ctx.createPattern(i.resizeImage(c, M, V), "repeat"), i.renderRepeat(x, U, $, R)), [3, 6];
                    case 5:
                      PS(u) ? (p = ec(t, r, [null, null, null]), x = p[0], $ = p[1], R = p[2], M = p[3], V = p[4], w = DS(u.angle, M, V), y = w[0], B = w[1], d = w[2], h = w[3], m = w[4], v = document.createElement("canvas"), v.width = M, v.height = V, C = v.getContext("2d"), F = C.createLinearGradient(B, h, d, m), ih(u.stops, y).forEach(function(jA) {
                        return F.addColorStop(jA.stop, bA(jA.color));
                      }), C.fillStyle = F, C.fillRect(0, 0, M, V), M > 0 && V > 0 && (U = i.ctx.createPattern(v, "repeat"), i.renderRepeat(x, U, $, R))) : _S(u) && (E = ec(t, r, [
                        null,
                        null,
                        null
                      ]), x = E[0], K = E[1], _ = E[2], M = E[3], V = E[4], J = u.position.length === 0 ? [FB] : u.position, $ = nA(J[0], M), R = nA(J[J.length - 1], V), I = KS(u, $, R, M, V), S = I[0], L = I[1], S > 0 && L > 0 && (N = i.ctx.createRadialGradient(K + $, _ + R, 0, K + $, _ + R, S), ih(u.stops, S * 2).forEach(function(jA) {
                        return N.addColorStop(jA.stop, bA(jA.color));
                      }), i.path(x), i.ctx.fillStyle = N, S !== L ? (X = t.bounds.left + 0.5 * t.bounds.width, dA = t.bounds.top + 0.5 * t.bounds.height, BA = L / S, gA = 1 / BA, i.ctx.save(), i.ctx.translate(X, dA), i.ctx.transform(1, 0, 0, BA, 0, 0), i.ctx.translate(-X, -dA), i.ctx.fillRect(K, gA * (_ - dA) + dA, M, V * gA), i.ctx.restore()) : i.ctx.fill())), rA.label = 6;
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
          return this.path(Dh(n, r)), this.ctx.fillStyle = bA(t), this.ctx.fill(), [
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
              return o = $2(i, n), this.path(o), this.ctx.fillStyle = bA(t), this.ctx.fill(), a = W2(i, n), this.path(a), this.ctx.fill(), [
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
              )), r = t.container.styles, n = !qt(r.backgroundColor) || r.backgroundImage.length, i = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], o = rT(rn(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), qt(r.backgroundColor) || (this.ctx.fillStyle = bA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              f.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                c.ctx.save();
                var p = Al(t.curves), w = g.inset ? 0 : AT, y = V2(p, -w + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (c.path(p), c.ctx.clip(), c.mask(y)) : (c.mask(p), c.ctx.clip(), c.path(y)), c.ctx.shadowOffsetX = g.offsetX.number + w, c.ctx.shadowOffsetY = g.offsetY.number, c.ctx.shadowColor = bA(g.color), c.ctx.shadowBlur = g.blur.number, c.ctx.fillStyle = g.inset ? bA(g.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
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
      return YA(this, void 0, void 0, function() {
        var a, s, l, u, c, f, g, p, w, y, B, d, h, m, v, C, v, C;
        return VA(this, function(F) {
          return this.ctx.save(), a = X2(i, n), s = Dh(i, n), o === 2 && (this.path(s), this.ctx.clip()), Qe(s[0]) ? (l = s[0].start.x, u = s[0].start.y) : (l = s[0].x, u = s[0].y), Qe(s[1]) ? (c = s[1].end.x, f = s[1].end.y) : (c = s[1].x, f = s[1].y), n === 0 || n === 2 ? g = Math.abs(l - c) : g = Math.abs(u - f), this.ctx.beginPath(), o === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, w = r < 3 ? r * 2 : r, o === 3 && (p = r, w = r), y = !0, g <= p * 2 ? y = !1 : g <= p * 2 + w ? (B = g / (2 * p + w), p *= B, w *= B) : (d = Math.floor((g + w) / (p + w)), h = (g - d * p) / (d - 1), m = (g - (d + 1) * p) / d, w = m <= 0 || Math.abs(w - h) < Math.abs(w - m) ? h : m), y && (o === 3 ? this.ctx.setLineDash([0, p + w]) : this.ctx.setLineDash([p, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = bA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Qe(s[0]) && (v = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke()), Qe(s[1]) && (v = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([new b(v.end.x, v.end.y), new b(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = G2(t), [4, this.renderStack(r)];
            case 1:
              return n.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(WC)
), tT = function(A) {
  return A instanceof xC || A instanceof HC ? !0 : A instanceof HB && A.type !== Js && A.type !== zs;
}, rT = function(A, e) {
  switch (A) {
    case 0:
      return Al(e);
    case 2:
      return R2(e);
    case 1:
    default:
      return el(e);
  }
}, nT = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, iT = ["-apple-system", "system-ui"], oT = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return iT.indexOf(e) === -1;
  }) : A;
}, aT = (
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
        return VA(this, function(i) {
          switch (i.label) {
            case 0:
              return r = $f(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, sT(r)];
            case 1:
              return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = bA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(WC)
), sT = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, lT = (
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
), uT = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new lT({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new S2(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), cT = function(A, e) {
  return e === void 0 && (e = {}), fT(A, e);
};
typeof window < "u" && MC.setContext(window);
var fT = function(A, e) {
  return YA(void 0, void 0, void 0, function() {
    var t, r, n, i, o, a, s, l, u, c, f, g, p, w, y, B, d, h, m, v, F, C, F, U, E, x, K, _, M, V, J, $, R, I, S, L, N, X, dA, BA;
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
            useCORS: (x = e.useCORS) !== null && x !== void 0 ? x : !1
          }, i = Sf({ logging: (K = e.logging) !== null && K !== void 0 ? K : !0, cache: e.cache }, n), o = {
            windowWidth: (_ = e.windowWidth) !== null && _ !== void 0 ? _ : r.innerWidth,
            windowHeight: (M = e.windowHeight) !== null && M !== void 0 ? M : r.innerHeight,
            scrollX: (V = e.scrollX) !== null && V !== void 0 ? V : r.pageXOffset,
            scrollY: (J = e.scrollY) !== null && J !== void 0 ? J : r.pageYOffset
          }, a = new Qt(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), s = new uT(i, a), l = ($ = e.foreignObjectRendering) !== null && $ !== void 0 ? $ : !1, u = {
            allowTaint: (R = e.allowTaint) !== null && R !== void 0 ? R : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: l,
            copyStyles: l
          }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), c = new Th(s, A, u), f = c.clonedReferenceElement, f ? [4, c.toIFrame(t, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = gA.sent(), p = xB(f) || d2(f) ? V4(f.ownerDocument) : Ml(s, f), w = p.width, y = p.height, B = p.left, d = p.top, h = dT(s, f, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: h,
            scale: (S = (I = e.scale) !== null && I !== void 0 ? I : r.devicePixelRatio) !== null && S !== void 0 ? S : 1,
            x: ((L = e.x) !== null && L !== void 0 ? L : 0) + B,
            y: ((N = e.y) !== null && N !== void 0 ? N : 0) + d,
            width: (X = e.width) !== null && X !== void 0 ? X : Math.ceil(w),
            height: (dA = e.height) !== null && dA !== void 0 ? dA : Math.ceil(y)
          }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), F = new aT(s, m), [4, F.render(f)]) : [3, 3];
        case 2:
          return v = gA.sent(), [3, 5];
        case 3:
          return s.logger.debug("Document cloned, element located at " + B + "," + d + " with size " + w + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = bC(s, f), h === C.styles.backgroundColor && (C.styles.backgroundColor = Bt.TRANSPARENT), s.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), F = new eT(s, m), [4, F.render(C)];
        case 4:
          v = gA.sent(), gA.label = 5;
        case 5:
          return (!((BA = e.removeContainer) !== null && BA !== void 0) || BA) && (Th.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [2, v];
      }
    });
  });
}, dT = function(A, e, t) {
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
function BT(A) {
  return new XMLSerializer().serializeToString(A);
}
const gT = /* @__PURE__ */ new Set([
  "BUTTON",
  "A",
  "INPUT",
  "SELECT",
  "TEXTAREA"
]);
function XC(A, e) {
  A.childNodes.forEach((t) => {
    t instanceof HTMLElement && e(t) && XC(t, e);
  });
}
function pT(A, e, t, r) {
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
function hT() {
  const A = [];
  let e = 0;
  return XC(document.body, (t) => {
    if (t.attributes.getNamedItem("data-isgandalf"))
      return !1;
    const r = window.getComputedStyle(t), n = r.cursor;
    if (t.checkVisibility() && (gT.has(t.tagName) || t.onclick != null || n == "pointer" || n == "grab")) {
      const i = t.getBoundingClientRect();
      return i.width > 0 && i.height > 0 && A.push(pT(t, i, r, e++)), !1;
    }
    return !0;
  }), A;
}
async function wT({
  product: A,
  query: e,
  previousSteps: t,
  apiUrl: r
}) {
  var h;
  const n = BT(
    Rh(document.documentElement.outerHTML)
  ), i = hT(), o = await cT(document.body, {
    ignoreElements: (m) => m.hasAttribute("data-isgandalf")
  }), a = await new Promise(
    (m) => o.toBlob((v) => m(v))
  );
  if (location.hash) {
    const m = document.createElement("a");
    document.body.appendChild(m);
    const v = window.URL.createObjectURL(a);
    m.href = v, m.download = "screenshot.png", m.click(), setTimeout(() => {
      window.URL.revokeObjectURL(v), document.body.removeChild(m);
    }, 0), console.log(n);
  }
  const s = JSON.stringify(
    i.map((m) => {
      const { element: v, ...C } = m;
      return {
        ...C,
        html: Rh(v.outerHTML).body.innerHTML
      };
    }),
    null,
    2
  ), l = new FormData();
  l.append("user_input", e), l.append("product", A), l.append("previous_steps_json", JSON.stringify(t)), l.append("screen_layout", s), console.log(s), a && l.append("screenshot", a, "screenshot.png"), console.log(l);
  const c = await (await fetch(`${r}/gandalf`, {
    method: "POST",
    body: l
  })).json();
  console.log("Success:", c);
  const f = c.result.replace(/```json\n/, "").replace(/\n```/, ""), g = JSON.parse(f);
  console.log("Result Object:", g);
  const { Instructions: p, itemId: w, hasMoreInstructions: y, actionType: B } = g;
  console.log(g);
  const d = ((h = i.find((m) => m.itemId === w)) == null ? void 0 : h.element) ?? null;
  return d || console.warn("No valid target element found for the popover."), {
    Instructions: p,
    targetElement: d,
    hasMoreInstructions: y,
    actionType: B
  };
}
const mT = Q.forwardRef(
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
    })), /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
      /* @__PURE__ */ G.jsx(
        "button",
        {
          className: Vv(GA.widgetButton, {
            [GA.loading]: A === "loading",
            [GA.waitingForUser]: A === "waitingForUser",
            [GA.withComplete]: i
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
          children: /* @__PURE__ */ G.jsxs("div", { className: GA.buttonContentWrapper, children: [
            /* @__PURE__ */ G.jsx("div", { className: GA.buttonContent, children: "💬" }),
            /* @__PURE__ */ G.jsx("div", { className: GA.buttonContent, children: "✅" })
          ] })
        }
      ),
      s && A !== "idle" && /* @__PURE__ */ G.jsxs("div", { className: GA.options, children: [
        "Current processing: ",
        e,
        /* @__PURE__ */ G.jsx(
          "button",
          {
            className: GA.optionsButton,
            onClick: () => {
              r(), l(!1);
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ G.jsx(
          "button",
          {
            className: GA.optionsButton,
            onClick: () => {
              l(!1);
            },
            children: "Hide"
          }
        )
      ] })
    ] });
  }
);
let vT = 0;
function CT() {
  return vT++;
}
function Nh(A, e) {
  return e === A || e.contains(A);
}
function QT(A) {
  const e = Q.useRef(A);
  return e.current = A, Q.useCallback(() => e.current(), []);
}
const yT = ({
  productName: A,
  isWidgetVisible: e,
  apiUrl: t
}) => {
  var C, F;
  const [r, n] = Q.useState(""), i = Q.useRef(null), [o, a] = Q.useState("idle"), [s, l] = Q.useState(!1), [u, c] = Q.useState(""), f = Q.useRef(0), g = Q.useRef(null), p = Q.useRef(null), { refs: w, floatingStyles: y, middlewareData: B, placement: d } = C1({
    middleware: [n1(10), o1(), i1(), a1({ element: g })]
  }), h = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[d.split("-")[0]] || "top", m = QT(() => {
    var x;
    const U = i.current;
    if (!U)
      return;
    if (!U.hasMoreInstructions) {
      n(""), a("idle"), (x = p.current) == null || x.showComplete(), c("");
      return;
    }
    const E = U.query;
    E && (w.setReference(null), a("loading"), setTimeout(() => {
      v(E, !1);
    }, 100));
  });
  Q.useEffect(() => {
    const U = (K) => {
      K.key === "p" && (K.metaKey || K.ctrlKey) && (K.preventDefault(), l(!0));
    };
    document.addEventListener("keydown", U);
    const E = (K) => {
      var _;
      K.target instanceof Element && ((_ = i.current) == null ? void 0 : _.actionType) === "click" && w.domReference.current && w.domReference.current instanceof Element && Nh(K.target, w.domReference.current) && m();
    }, x = (K) => {
      var _;
      K.target instanceof Element && ((_ = i.current) == null ? void 0 : _.actionType) === "fill" && w.domReference.current && w.domReference.current instanceof Element && Nh(K.target, w.domReference.current) && m();
    };
    return document.addEventListener("click", E), document.addEventListener("input", x), () => {
      document.removeEventListener("keydown", U), document.removeEventListener("click", E), document.removeEventListener("input", x);
    };
  }, []);
  const v = async (U, E) => {
    var K, _, M;
    if (console.log("Submitting query from index:", U), o === "loading")
      return;
    a("loading"), E && ((K = p.current) == null || K.showOption());
    const x = CT();
    f.current = x;
    try {
      const { Instructions: V, targetElement: J, hasMoreInstructions: $, actionType: R } = await wT({
        query: U,
        previousSteps: ((_ = i.current) == null ? void 0 : _.completedSteps) ?? [],
        product: A,
        apiUrl: t
      });
      if (f.current !== x)
        return;
      V && n(V), i.current = {
        query: U,
        completedSteps: [
          ...((M = i.current) == null ? void 0 : M.completedSteps) ?? [],
          V
        ],
        hasMoreInstructions: $,
        actionType: R
      }, w.setReference(J), a($ ? "waitingForUser" : "idle"), l(!1);
    } catch (V) {
      console.error(V), a("idle");
    }
  };
  return /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
    /* @__PURE__ */ G.jsx("div", { className: GA.container, "data-isGandalf": !0, children: /* @__PURE__ */ G.jsx(
      y4,
      {
        open: s,
        query: u,
        isApiCallInProgress: o === "loading",
        setQuery: c,
        setOpen: l,
        handleSubmit: (U) => v(U, !0)
      }
    ) }),
    r !== "" && /* @__PURE__ */ G.jsx(
      "div",
      {
        ref: w.setFloating,
        style: y,
        "data-isgandalf": !0,
        children: /* @__PURE__ */ G.jsxs("div", { className: GA.floatingPopover, children: [
          r,
          o === "loading" && /* @__PURE__ */ G.jsx("div", { className: GA.popoverLoadingOuter, children: /* @__PURE__ */ G.jsx("div", { className: GA.popoverLoading }) }),
          /* @__PURE__ */ G.jsx(
            "div",
            {
              ref: g,
              className: GA.arrow,
              style: {
                [h]: "-6px",
                ...((C = B.arrow) == null ? void 0 : C.x) != null && {
                  left: `${B.arrow.x}px`
                },
                ...((F = B.arrow) == null ? void 0 : F.y) != null && {
                  top: `${B.arrow.y}px`
                }
              }
            }
          )
        ] })
      }
    ),
    e && /* @__PURE__ */ G.jsx(
      mT,
      {
        ref: p,
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
}, SB = document.createElement("div");
SB.className = GA.outerContainer;
document.body.appendChild(SB);
const FT = window.__gandalf_product ?? "demo", UT = window.__gandalf_api_url ?? "http://localhost:8000";
vF.render(
  /* @__PURE__ */ G.jsx(yT, { productName: FT, isWidgetVisible: !0, apiUrl: UT }),
  SB
);
