function _h(e, t) { for (var n = 0; n < t.length; n++) { const r = t[n]; if (typeof r != "string" && !Array.isArray(r)) { for (const i in r)
                if (i !== "default" && !(i in e)) { const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] }) } } } return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })) }(function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => { for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l) }).observe(document, { childList: !0, subtree: !0 });

    function n(i) { const o = {}; return i.integrity && (o.integrity = i.integrity), i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

    function r(i) { if (i.ep) return;
        i.ep = !0; const o = n(i);
        fetch(i.href, o) } })();

function Nh(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
var E = { exports: {} },
    W = {};
/**
 * @license React

 */
var di = Symbol.for("react.element"),
    Lh = Symbol.for("react.portal"),
    $h = Symbol.for("react.fragment"),
    Ah = Symbol.for("react.strict_mode"),
    Th = Symbol.for("react.profiler"),
    zh = Symbol.for("react.provider"),
    Ih = Symbol.for("react.context"),
    Dh = Symbol.for("react.forward_ref"),
    Fh = Symbol.for("react.suspense"),
    jh = Symbol.for("react.memo"),
    Mh = Symbol.for("react.lazy"),
    Cu = Symbol.iterator;

function Bh(e) { return e === null || typeof e != "object" ? null : (e = Cu && e[Cu] || e["@@iterator"], typeof e == "function" ? e : null) }
var gd = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    yd = Object.assign,
    vd = {};

function cr(e, t, n) { this.props = e, this.context = t, this.refs = vd, this.updater = n || gd }
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) { if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState") };
cr.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function wd() {}
wd.prototype = cr.prototype;

function da(e, t, n) { this.props = e, this.context = t, this.refs = vd, this.updater = n || gd }
var fa = da.prototype = new wd;
fa.constructor = da;
yd(fa, cr.prototype);
fa.isPureReactComponent = !0;
var ku = Array.isArray,
    xd = Object.prototype.hasOwnProperty,
    pa = { current: null },
    Sd = { key: !0, ref: !0, __self: !0, __source: !0 };

function Cd(e, t, n) { var r, i = {},
        o = null,
        l = null; if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) xd.call(t, r) && !Sd.hasOwnProperty(r) && (i[r] = t[r]); var s = arguments.length - 2; if (s === 1) i.children = n;
    else if (1 < s) { for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        i.children = a } if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]); return { $$typeof: di, type: e, key: o, ref: l, props: i, _owner: pa.current } }

function Uh(e, t) { return { $$typeof: di, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function ha(e) { return typeof e == "object" && e !== null && e.$$typeof === di }

function Hh(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(n) { return t[n] }) }
var Eu = /\/+/g;

function kl(e, t) { return typeof e == "object" && e !== null && e.key != null ? Hh("" + e.key) : t.toString(36) }

function Bi(e, t, n, r, i) { var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null); var l = !1; if (e === null) l = !0;
    else switch (o) {
        case "string":
        case "number":
            l = !0; break;
        case "object":
            switch (e.$$typeof) {
                case di:
                case Lh:
                    l = !0 } }
    if (l) return l = e, i = i(l), e = r === "" ? "." + kl(l, 0) : r, ku(i) ? (n = "", e != null && (n = e.replace(Eu, "$&/") + "/"), Bi(i, t, n, "", function(u) { return u })) : i != null && (ha(i) && (i = Uh(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Eu, "$&/") + "/") + e)), t.push(i)), 1; if (l = 0, r = r === "" ? "." : r + ":", ku(e))
        for (var s = 0; s < e.length; s++) { o = e[s]; var a = r + kl(o, s);
            l += Bi(o, t, n, a, i) } else if (a = Bh(e), typeof a == "function")
            for (e = a.call(e), s = 0; !(o = e.next()).done;) o = o.value, a = r + kl(o, s++), l += Bi(o, t, n, a, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return l }

function Si(e, t, n) { if (e == null) return e; var r = [],
        i = 0; return Bi(e, r, "", "", function(o) { return t.call(n, o, i++) }), r }

function bh(e) { if (e._status === -1) { var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n) }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n) }), e._status === -1 && (e._status = 0, e._result = t) } if (e._status === 1) return e._result.default; throw e._result }
var Be = { current: null },
    Ui = { transition: null },
    Wh = { ReactCurrentDispatcher: Be, ReactCurrentBatchConfig: Ui, ReactCurrentOwner: pa };
W.Children = { map: Si, forEach: function(e, t, n) { Si(e, function() { t.apply(this, arguments) }, n) }, count: function(e) { var t = 0; return Si(e, function() { t++ }), t }, toArray: function(e) { return Si(e, function(t) { return t }) || [] }, only: function(e) { if (!ha(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
W.Component = cr;
W.Fragment = $h;
W.Profiler = Th;
W.PureComponent = da;
W.StrictMode = Ah;
W.Suspense = Fh;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
W.cloneElement = function(e, t, n) { if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = yd({}, e.props),
        i = e.key,
        o = e.ref,
        l = e._owner; if (t != null) { if (t.ref !== void 0 && (o = t.ref, l = pa.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps; for (a in t) xd.call(t, a) && !Sd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]) } var a = arguments.length - 2; if (a === 1) r.children = n;
    else if (1 < a) { s = Array(a); for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s } return { $$typeof: di, type: e.type, key: i, ref: o, props: r, _owner: l } };
W.createContext = function(e) { return e = { $$typeof: Ih, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zh, _context: e }, e.Consumer = e };
W.createElement = Cd;
W.createFactory = function(e) { var t = Cd.bind(null, e); return t.type = e, t };
W.createRef = function() { return { current: null } };
W.forwardRef = function(e) { return { $$typeof: Dh, render: e } };
W.isValidElement = ha;
W.lazy = function(e) { return { $$typeof: Mh, _payload: { _status: -1, _result: e }, _init: bh } };
W.memo = function(e, t) { return { $$typeof: jh, type: e, compare: t === void 0 ? null : t } };
W.startTransition = function(e) { var t = Ui.transition;
    Ui.transition = {}; try { e() } finally { Ui.transition = t } };
W.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
W.useCallback = function(e, t) { return Be.current.useCallback(e, t) };
W.useContext = function(e) { return Be.current.useContext(e) };
W.useDebugValue = function() {};
W.useDeferredValue = function(e) { return Be.current.useDeferredValue(e) };
W.useEffect = function(e, t) { return Be.current.useEffect(e, t) };
W.useId = function() { return Be.current.useId() };
W.useImperativeHandle = function(e, t, n) { return Be.current.useImperativeHandle(e, t, n) };
W.useInsertionEffect = function(e, t) { return Be.current.useInsertionEffect(e, t) };
W.useLayoutEffect = function(e, t) { return Be.current.useLayoutEffect(e, t) };
W.useMemo = function(e, t) { return Be.current.useMemo(e, t) };
W.useReducer = function(e, t, n) { return Be.current.useReducer(e, t, n) };
W.useRef = function(e) { return Be.current.useRef(e) };
W.useState = function(e) { return Be.current.useState(e) };
W.useSyncExternalStore = function(e, t, n) { return Be.current.useSyncExternalStore(e, t, n) };
W.useTransition = function() { return Be.current.useTransition() };
W.version = "18.2.0";
(function(e) { e.exports = W })(E);
const St = Nh(E.exports),
    rs = _h({ __proto__: null, default: St }, [E.exports]);
var is = {},
    kd = { exports: {} },
    tt = {},
    Ed = { exports: {} },
    Rd = {};
/**
 * @license React

 */
(function(e) {
    function t(N, j) { var B = N.length;
        N.push(j);
        e: for (; 0 < B;) { var ne = B - 1 >>> 1,
                $ = N[ne]; if (0 < i($, j)) N[ne] = j, N[B] = $, B = ne;
            else break e } }

    function n(N) { return N.length === 0 ? null : N[0] }

    function r(N) { if (N.length === 0) return null; var j = N[0],
            B = N.pop(); if (B !== j) { N[0] = B;
            e: for (var ne = 0, $ = N.length, z = $ >>> 1; ne < z;) { var I = 2 * (ne + 1) - 1,
                    U = N[I],
                    x = I + 1,
                    V = N[x]; if (0 > i(U, B)) x < $ && 0 > i(V, U) ? (N[ne] = V, N[x] = B, ne = x) : (N[ne] = U, N[I] = B, ne = I);
                else if (x < $ && 0 > i(V, B)) N[ne] = V, N[x] = B, ne = x;
                else break e } } return j }

    function i(N, j) { var B = N.sortIndex - j.sortIndex; return B !== 0 ? B : N.id - j.id } if (typeof performance == "object" && typeof performance.now == "function") { var o = performance;
        e.unstable_now = function() { return o.now() } } else { var l = Date,
            s = l.now();
        e.unstable_now = function() { return l.now() - s } } var a = [],
        u = [],
        d = 1,
        h = null,
        m = 3,
        v = !1,
        y = !1,
        w = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(N) { for (var j = n(u); j !== null;) { if (j.callback === null) r(u);
            else if (j.startTime <= N) r(u), j.sortIndex = j.expirationTime, t(a, j);
            else break;
            j = n(u) } }

    function S(N) { if (w = !1, g(N), !y)
            if (n(a) !== null) y = !0, _t(C);
            else { var j = n(u);
                j !== null && Fe(S, j.startTime - N) } }

    function C(N, j) { y = !1, w && (w = !1, p(T), T = -1), v = !0; var B = m; try { for (g(j), h = n(a); h !== null && (!(h.expirationTime > j) || N && !me());) { var ne = h.callback; if (typeof ne == "function") { h.callback = null, m = h.priorityLevel; var $ = ne(h.expirationTime <= j);
                    j = e.unstable_now(), typeof $ == "function" ? h.callback = $ : h === n(a) && r(a), g(j) } else r(a);
                h = n(a) } if (h !== null) var z = !0;
            else { var I = n(u);
                I !== null && Fe(S, I.startTime - j), z = !1 } return z } finally { h = null, m = B, v = !1 } } var R = !1,
        A = null,
        T = -1,
        G = 5,
        M = -1;

    function me() { return !(e.unstable_now() - M < G) }

    function fe() { if (A !== null) { var N = e.unstable_now();
            M = N; var j = !0; try { j = A(!0, N) } finally { j ? ye() : (R = !1, A = null) } } else R = !1 } var ye; if (typeof c == "function") ye = function() { c(fe) };
    else if (typeof MessageChannel < "u") { var Xe = new MessageChannel,
            $e = Xe.port2;
        Xe.port1.onmessage = fe, ye = function() { $e.postMessage(null) } } else ye = function() { _(fe, 0) };

    function _t(N) { A = N, R || (R = !0, ye()) }

    function Fe(N, j) { T = _(function() { N(e.unstable_now()) }, j) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) { N.callback = null }, e.unstable_continueExecution = function() { y || v || (y = !0, _t(C)) }, e.unstable_forceFrameRate = function(N) { 0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < N ? Math.floor(1e3 / N) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return m }, e.unstable_getFirstCallbackNode = function() { return n(a) }, e.unstable_next = function(N) { switch (m) {
            case 1:
            case 2:
            case 3:
                var j = 3; break;
            default:
                j = m } var B = m;
        m = j; try { return N() } finally { m = B } }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, j) { switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3 } var B = m;
        m = N; try { return j() } finally { m = B } }, e.unstable_scheduleCallback = function(N, j, B) { var ne = e.unstable_now(); switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ne + B : ne) : B = ne, N) {
            case 1:
                var $ = -1; break;
            case 2:
                $ = 250; break;
            case 5:
                $ = 1073741823; break;
            case 4:
                $ = 1e4; break;
            default:
                $ = 5e3 } return $ = B + $, N = { id: d++, callback: j, priorityLevel: N, startTime: B, expirationTime: $, sortIndex: -1 }, B > ne ? (N.sortIndex = B, t(u, N), n(a) === null && N === n(u) && (w ? (p(T), T = -1) : w = !0, Fe(S, B - ne))) : (N.sortIndex = $, t(a, N), y || v || (y = !0, _t(C))), N }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(N) { var j = m; return function() { var B = m;
            m = j; try { return N.apply(this, arguments) } finally { m = B } } } })(Rd);
(function(e) { e.exports = Rd })(Ed);
/**
 * @license React

 */
var Od = E.exports,
    et = Ed.exports;

function P(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var Pd = new Set,
    Gr = {};

function An(e, t) { tr(e, t), tr(e + "Capture", t) }

function tr(e, t) { for (Gr[e] = t, e = 0; e < t.length; e++) Pd.add(t[e]) }
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    os = Object.prototype.hasOwnProperty,
    Vh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ru = {},
    Ou = {};

function Gh(e) { return os.call(Ou, e) ? !0 : os.call(Ru, e) ? !1 : Vh.test(e) ? Ou[e] = !0 : (Ru[e] = !0, !1) }

function Qh(e, t, n, r) { if (n !== null && n.type === 0) return !1; switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1 } }

function Yh(e, t, n, r) { if (t === null || typeof t > "u" || Qh(e, t, n, r)) return !0; if (r) return !1; if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t }
    return !1 }

function Ue(e, t, n, r, i, o, l) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l }
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { Le[e] = new Ue(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) { var t = e[0];
    Le[t] = new Ue(t, 1, !1, e[1], null, !1, !1) });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { Le[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { Le[e] = new Ue(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { Le[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { Le[e] = new Ue(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { Le[e] = new Ue(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { Le[e] = new Ue(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { Le[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var ma = /[\-:]([a-z])/g;

function ga(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) { var t = e.replace(ma, ga);
    Le[t] = new Ue(t, 1, !1, e, null, !1, !1) });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) { var t = e.replace(ma, ga);
    Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });
["xml:base", "xml:lang", "xml:space"].forEach(function(e) { var t = e.replace(ma, ga);
    Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });
["tabIndex", "crossOrigin"].forEach(function(e) { Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1) });
Le.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function ya(e, t, n, r) { var i = Le.hasOwnProperty(t) ? Le[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yh(t, n, i, r) && (n = null), r || i === null ? Gh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))) }
var Bt = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ci = Symbol.for("react.element"),
    Dn = Symbol.for("react.portal"),
    Fn = Symbol.for("react.fragment"),
    va = Symbol.for("react.strict_mode"),
    ls = Symbol.for("react.profiler"),
    _d = Symbol.for("react.provider"),
    Nd = Symbol.for("react.context"),
    wa = Symbol.for("react.forward_ref"),
    ss = Symbol.for("react.suspense"),
    as = Symbol.for("react.suspense_list"),
    xa = Symbol.for("react.memo"),
    Vt = Symbol.for("react.lazy"),
    Ld = Symbol.for("react.offscreen"),
    Pu = Symbol.iterator;

function Cr(e) { return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null) }
var ue = Object.assign,
    El;

function $r(e) { if (El === void 0) try { throw Error() } catch (n) { var t = n.stack.trim().match(/\n( *(at )?)/);
        El = t && t[1] || "" }
    return `
` + El + e }
var Rl = !1;

function Ol(e, t) { if (!e || Rl) return "";
    Rl = !0; var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0; try { if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(t, []) } catch (u) { var r = u }
                Reflect.construct(e, [], t) } else { try { t.call() } catch (u) { r = u }
                e.call(t.prototype) }
        else { try { throw Error() } catch (u) { r = u }
            e() } } catch (u) { if (u && r && typeof u.stack == "string") { for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s];) s--; for (; 1 <= l && 0 <= s; l--, s--)
                if (i[l] !== o[s]) { if (l !== 1 || s !== 1)
                        do
                            if (l--, s--, 0 > s || i[l] !== o[s]) { var a = `
` + i[l].replace(" at new ", " at "); return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a }
                    while (1 <= l && 0 <= s); break } } } finally { Rl = !1, Error.prepareStackTrace = n } return (e = e ? e.displayName || e.name : "") ? $r(e) : "" }

function Kh(e) { switch (e.tag) {
        case 5:
            return $r(e.type);
        case 16:
            return $r("Lazy");
        case 13:
            return $r("Suspense");
        case 19:
            return $r("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ol(e.type, !1), e;
        case 11:
            return e = Ol(e.type.render, !1), e;
        case 1:
            return e = Ol(e.type, !0), e;
        default:
            return "" } }

function us(e) { if (e == null) return null; if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) {
        case Fn:
            return "Fragment";
        case Dn:
            return "Portal";
        case ls:
            return "Profiler";
        case va:
            return "StrictMode";
        case ss:
            return "Suspense";
        case as:
            return "SuspenseList" } if (typeof e == "object") switch (e.$$typeof) {
        case Nd:
            return (e.displayName || "Context") + ".Consumer";
        case _d:
            return (e._context.displayName || "Context") + ".Provider";
        case wa:
            var t = e.render; return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case xa:
            return t = e.displayName || null, t !== null ? t : us(e.type) || "Memo";
        case Vt:
            t = e._payload, e = e._init; try { return us(e(t)) } catch {} }
    return null }

function Xh(e) { var t = e.type; switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return us(t);
        case 8:
            return t === va ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null; if (typeof t == "string") return t } return null }

function cn(e) { switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "" } }

function $d(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function Jh(e) { var t = $d(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") { var i = n.get,
            o = n.set; return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(l) { r = "" + l, o.call(this, l) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(l) { r = "" + l }, stopTracking: function() { e._valueTracker = null, delete e[t] } } } }

function ki(e) { e._valueTracker || (e._valueTracker = Jh(e)) }

function Ad(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var n = t.getValue(),
        r = ""; return e && (r = $d(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1 }

function to(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } }

function cs(e, t) { var n = t.checked; return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked }) }

function _u(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = cn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null } }

function Td(e, t) { t = t.checked, t != null && ya(e, "checked", t, !1) }

function ds(e, t) { Td(e, t); var n = cn(t.value),
        r = t.type; if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") { e.removeAttribute("value"); return }
    t.hasOwnProperty("value") ? fs(e, t.type, n) : t.hasOwnProperty("defaultValue") && fs(e, t.type, cn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked) }

function Nu(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var r = t.type; if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n) }

function fs(e, t, n) {
    (t !== "number" || to(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) }
var Ar = Array.isArray;

function Kn(e, t, n, r) { if (e = e.options, t) { t = {}; for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0; for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else { for (n = "" + cn(n), t = null, i = 0; i < e.length; i++) { if (e[i].value === n) { e[i].selected = !0, r && (e[i].defaultSelected = !0); return }
            t !== null || e[i].disabled || (t = e[i]) }
        t !== null && (t.selected = !0) } }

function ps(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(P(91)); return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function Lu(e, t) { var n = t.value; if (n == null) { if (n = t.children, t = t.defaultValue, n != null) { if (t != null) throw Error(P(92)); if (Ar(n)) { if (1 < n.length) throw Error(P(93));
                n = n[0] }
            t = n }
        t == null && (t = ""), n = t }
    e._wrapperState = { initialValue: cn(n) } }

function zd(e, t) { var n = cn(t.value),
        r = cn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r) }

function $u(e) { var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t) }

function Id(e) { switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml" } }

function hs(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Id(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var Ei, Dd = function(e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) { MSApp.execUnsafeLocalFunction(function() { return e(t, n, r, i) }) } : e }(function(e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for (Ei = Ei || document.createElement("div"), Ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ei.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) } });

function Qr(e, t) { if (t) { var n = e.firstChild; if (n && n === e.lastChild && n.nodeType === 3) { n.nodeValue = t; return } }
    e.textContent = t }
var Dr = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    Zh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) { Zh.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e] }) });

function Fd(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px" }

function jd(e, t) { e = e.style; for (var n in t)
        if (t.hasOwnProperty(n)) { var r = n.indexOf("--") === 0,
                i = Fd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i } }
var qh = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function ms(e, t) { if (t) { if (qh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(P(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61)) } if (t.style != null && typeof t.style != "object") throw Error(P(62)) } }

function gs(e, t) { if (e.indexOf("-") === -1) return typeof t.is == "string"; switch (e) {
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
            return !0 } }
var ys = null;

function Sa(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var vs = null,
    Xn = null,
    Jn = null;

function Au(e) { if (e = hi(e)) { if (typeof vs != "function") throw Error(P(280)); var t = e.stateNode;
        t && (t = Do(t), vs(e.stateNode, e.type, t)) } }

function Md(e) { Xn ? Jn ? Jn.push(e) : Jn = [e] : Xn = e }

function Bd() { if (Xn) { var e = Xn,
            t = Jn; if (Jn = Xn = null, Au(e), t)
            for (e = 0; e < t.length; e++) Au(t[e]) } }

function Ud(e, t) { return e(t) }

function Hd() {}
var Pl = !1;

function bd(e, t, n) { if (Pl) return e(t, n);
    Pl = !0; try { return Ud(e, t, n) } finally { Pl = !1, (Xn !== null || Jn !== null) && (Hd(), Bd()) } }

function Yr(e, t) { var n = e.stateNode; if (n === null) return null; var r = Do(n); if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r; break e;
        default:
            e = !1 }
    if (e) return null; if (n && typeof n != "function") throw Error(P(231, t, typeof n)); return n }
var ws = !1;
if (Dt) try { var kr = {};
    Object.defineProperty(kr, "passive", { get: function() { ws = !0 } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr) } catch { ws = !1 }

function em(e, t, n, r, i, o, l, s, a) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (d) { this.onError(d) } }
var Fr = !1,
    no = null,
    ro = !1,
    xs = null,
    tm = { onError: function(e) { Fr = !0, no = e } };

function nm(e, t, n, r, i, o, l, s, a) { Fr = !1, no = null, em.apply(tm, arguments) }

function rm(e, t, n, r, i, o, l, s, a) { if (nm.apply(this, arguments), Fr) { if (Fr) { var u = no;
            Fr = !1, no = null } else throw Error(P(198));
        ro || (ro = !0, xs = u) } }

function Tn(e) { var t = e,
        n = e; if (e.alternate)
        for (; t.return;) t = t.return;
    else { e = t;
        do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e) } return t.tag === 3 ? n : null }

function Wd(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function Tu(e) { if (Tn(e) !== e) throw Error(P(188)) }

function im(e) { var t = e.alternate; if (!t) { if (t = Tn(e), t === null) throw Error(P(188)); return t !== e ? null : e } for (var n = e, r = t;;) { var i = n.return; if (i === null) break; var o = i.alternate; if (o === null) { if (r = i.return, r !== null) { n = r; continue } break } if (i.child === o.child) { for (o = i.child; o;) { if (o === n) return Tu(i), e; if (o === r) return Tu(i), t;
                o = o.sibling } throw Error(P(188)) } if (n.return !== r.return) n = i, r = o;
        else { for (var l = !1, s = i.child; s;) { if (s === n) { l = !0, n = i, r = o; break } if (s === r) { l = !0, r = i, n = o; break }
                s = s.sibling } if (!l) { for (s = o.child; s;) { if (s === n) { l = !0, n = o, r = i; break } if (s === r) { l = !0, r = o, n = i; break }
                    s = s.sibling } if (!l) throw Error(P(189)) } } if (n.alternate !== r) throw Error(P(190)) } if (n.tag !== 3) throw Error(P(188)); return n.stateNode.current === n ? e : t }

function Vd(e) { return e = im(e), e !== null ? Gd(e) : null }

function Gd(e) { if (e.tag === 5 || e.tag === 6) return e; for (e = e.child; e !== null;) { var t = Gd(e); if (t !== null) return t;
        e = e.sibling } return null }
var Qd = et.unstable_scheduleCallback,
    zu = et.unstable_cancelCallback,
    om = et.unstable_shouldYield,
    lm = et.unstable_requestPaint,
    he = et.unstable_now,
    sm = et.unstable_getCurrentPriorityLevel,
    Ca = et.unstable_ImmediatePriority,
    Yd = et.unstable_UserBlockingPriority,
    io = et.unstable_NormalPriority,
    am = et.unstable_LowPriority,
    Kd = et.unstable_IdlePriority,
    Ao = null,
    Ot = null;

function um(e) { if (Ot && typeof Ot.onCommitFiberRoot == "function") try { Ot.onCommitFiberRoot(Ao, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var wt = Math.clz32 ? Math.clz32 : fm,
    cm = Math.log,
    dm = Math.LN2;

function fm(e) { return e >>>= 0, e === 0 ? 32 : 31 - (cm(e) / dm | 0) | 0 }
var Ri = 64,
    Oi = 4194304;

function Tr(e) { switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e } }

function oo(e, t) { var n = e.pendingLanes; if (n === 0) return 0; var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        l = n & 268435455; if (l !== 0) { var s = l & ~i;
        s !== 0 ? r = Tr(s) : (o &= l, o !== 0 && (r = Tr(o))) } else l = n & ~i, l !== 0 ? r = Tr(l) : o !== 0 && (r = Tr(o)); if (r === 0) return 0; if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t; if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - wt(t), i = 1 << n, r |= e[n], t &= ~i; return r }

function pm(e, t) { switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
            return -1 } }

function hm(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) { var l = 31 - wt(o),
            s = 1 << l,
            a = i[l];
        a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[l] = pm(s, t)) : a <= t && (e.expiredLanes |= s), o &= ~s } }

function Ss(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function Xd() { var e = Ri; return Ri <<= 1, (Ri & 4194240) === 0 && (Ri = 64), e }

function _l(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

function fi(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n }

function mm(e, t) { var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) { var i = 31 - wt(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o } }

function ka(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) { var r = 31 - wt(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i } }
var q = 0;

function Jd(e) { return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1 }
var Zd, Ea, qd, ef, tf, Cs = !1,
    Pi = [],
    Zt = null,
    qt = null,
    en = null,
    Kr = new Map,
    Xr = new Map,
    Qt = [],
    gm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Iu(e, t) { switch (e) {
        case "focusin":
        case "focusout":
            Zt = null; break;
        case "dragenter":
        case "dragleave":
            qt = null; break;
        case "mouseover":
        case "mouseout":
            en = null; break;
        case "pointerover":
        case "pointerout":
            Kr.delete(t.pointerId); break;
        case "gotpointercapture":
        case "lostpointercapture":
            Xr.delete(t.pointerId) } }

function Er(e, t, n, r, i, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = hi(t), t !== null && Ea(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e) }

function ym(e, t, n, r, i) { switch (t) {
        case "focusin":
            return Zt = Er(Zt, e, t, n, r, i), !0;
        case "dragenter":
            return qt = Er(qt, e, t, n, r, i), !0;
        case "mouseover":
            return en = Er(en, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId; return Kr.set(o, Er(Kr.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Xr.set(o, Er(Xr.get(o) || null, e, t, n, r, i)), !0 } return !1 }

function nf(e) { var t = wn(e.target); if (t !== null) { var n = Tn(t); if (n !== null) { if (t = n.tag, t === 13) { if (t = Wd(n), t !== null) { e.blockedOn = t, tf(e.priority, function() { qd(n) }); return } } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } }
    e.blockedOn = null }

function Hi(e) { if (e.blockedOn !== null) return !1; for (var t = e.targetContainers; 0 < t.length;) { var n = ks(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (n === null) { n = e.nativeEvent; var r = new n.constructor(n.type, n);
            ys = r, n.target.dispatchEvent(r), ys = null } else return t = hi(n), t !== null && Ea(t), e.blockedOn = n, !1;
        t.shift() } return !0 }

function Du(e, t, n) { Hi(e) && n.delete(t) }

function vm() { Cs = !1, Zt !== null && Hi(Zt) && (Zt = null), qt !== null && Hi(qt) && (qt = null), en !== null && Hi(en) && (en = null), Kr.forEach(Du), Xr.forEach(Du) }

function Rr(e, t) { e.blockedOn === t && (e.blockedOn = null, Cs || (Cs = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, vm))) }

function Jr(e) {
    function t(i) { return Rr(i, e) } if (0 < Pi.length) { Rr(Pi[0], e); for (var n = 1; n < Pi.length; n++) { var r = Pi[n];
            r.blockedOn === e && (r.blockedOn = null) } } for (Zt !== null && Rr(Zt, e), qt !== null && Rr(qt, e), en !== null && Rr(en, e), Kr.forEach(t), Xr.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);) nf(n), n.blockedOn === null && Qt.shift() }
var Zn = Bt.ReactCurrentBatchConfig,
    lo = !0;

function wm(e, t, n, r) { var i = q,
        o = Zn.transition;
    Zn.transition = null; try { q = 1, Ra(e, t, n, r) } finally { q = i, Zn.transition = o } }

function xm(e, t, n, r) { var i = q,
        o = Zn.transition;
    Zn.transition = null; try { q = 4, Ra(e, t, n, r) } finally { q = i, Zn.transition = o } }

function Ra(e, t, n, r) { if (lo) { var i = ks(e, t, n, r); if (i === null) jl(e, t, r, so, n), Iu(e, r);
        else if (ym(i, e, t, n, r)) r.stopPropagation();
        else if (Iu(e, r), t & 4 && -1 < gm.indexOf(e)) { for (; i !== null;) { var o = hi(i); if (o !== null && Zd(o), o = ks(e, t, n, r), o === null && jl(e, t, r, so, n), o === i) break;
                i = o }
            i !== null && r.stopPropagation() } else jl(e, t, r, null, n) } }
var so = null;

function ks(e, t, n, r) { if (so = null, e = Sa(r), e = wn(e), e !== null)
        if (t = Tn(e), t === null) e = null;
        else if (n = t.tag, n === 13) { if (e = Wd(t), e !== null) return e;
        e = null } else if (n === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null } else t !== e && (e = null); return so = e, null }

function rf(e) { switch (e) {
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
            switch (sm()) {
                case Ca:
                    return 1;
                case Yd:
                    return 4;
                case io:
                case am:
                    return 16;
                case Kd:
                    return 536870912;
                default:
                    return 16 }
        default:
            return 16 } }
var Kt = null,
    Oa = null,
    bi = null;

function of() { if (bi) return bi; var e, t = Oa,
        n = t.length,
        r, i = "value" in Kt ? Kt.value : Kt.textContent,
        o = i.length; for (e = 0; e < n && t[e] === i[e]; e++); var l = n - e; for (r = 1; r <= l && t[n - r] === i[o - r]; r++); return bi = i.slice(e, 1 < r ? 1 - r : void 0) }

function Wi(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function _i() { return !0 }

function Fu() { return !1 }

function nt(e) {
    function t(n, r, i, o, l) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null; for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _i : Fu, this.isPropagationStopped = Fu, this } return ue(t.prototype, { preventDefault: function() { this.defaultPrevented = !0; var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _i) }, stopPropagation: function() { var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _i) }, persist: function() {}, isPersistent: _i }), t }
var dr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    Pa = nt(dr),
    pi = ue({}, dr, { view: 0, detail: 0 }),
    Sm = nt(pi),
    Nl, Ll, Or, To = ue({}, pi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _a, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (Nl = e.screenX - Or.screenX, Ll = e.screenY - Or.screenY) : Ll = Nl = 0, Or = e), Nl) }, movementY: function(e) { return "movementY" in e ? e.movementY : Ll } }),
    ju = nt(To),
    Cm = ue({}, To, { dataTransfer: 0 }),
    km = nt(Cm),
    Em = ue({}, pi, { relatedTarget: 0 }),
    $l = nt(Em),
    Rm = ue({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Om = nt(Rm),
    Pm = ue({}, dr, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    _m = nt(Pm),
    Nm = ue({}, dr, { data: 0 }),
    Mu = nt(Nm),
    Lm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    $m = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    Am = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function Tm(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Am[e]) ? !!t[e] : !1 }

function _a() { return Tm }
var zm = ue({}, pi, { key: function(e) { if (e.key) { var t = Lm[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = Wi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $m[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _a, charCode: function(e) { return e.type === "keypress" ? Wi(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    Im = nt(zm),
    Dm = ue({}, To, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Bu = nt(Dm),
    Fm = ue({}, pi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _a }),
    jm = nt(Fm),
    Mm = ue({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = nt(Mm),
    Um = ue({}, To, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    Hm = nt(Um),
    bm = [9, 13, 27, 32],
    Na = Dt && "CompositionEvent" in window,
    jr = null;
Dt && "documentMode" in document && (jr = document.documentMode);
var Wm = Dt && "TextEvent" in window && !jr,
    lf = Dt && (!Na || jr && 8 < jr && 11 >= jr),
    Uu = String.fromCharCode(32),
    Hu = !1;

function sf(e, t) { switch (e) {
        case "keyup":
            return bm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1 } }

function af(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var jn = !1;

function Vm(e, t) { switch (e) {
        case "compositionend":
            return af(t);
        case "keypress":
            return t.which !== 32 ? null : (Hu = !0, Uu);
        case "textInput":
            return e = t.data, e === Uu && Hu ? null : e;
        default:
            return null } }

function Gm(e, t) { if (jn) return e === "compositionend" || !Na && sf(e, t) ? (e = of(), bi = Oa = Kt = null, jn = !1, e) : null; switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null;
        case "compositionend":
            return lf && t.locale !== "ko" ? null : t.data;
        default:
            return null } }
var Qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function bu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Qm[e.type] : t === "textarea" }

function uf(e, t, n, r) { Md(r), t = ao(t, "onChange"), 0 < t.length && (n = new Pa("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
var Mr = null,
    Zr = null;

function Ym(e) { xf(e, 0) }

function zo(e) { var t = Un(e); if (Ad(t)) return e }

function Km(e, t) { if (e === "change") return t }
var cf = !1;
if (Dt) { var Al; if (Dt) { var Tl = "oninput" in document; if (!Tl) { var Wu = document.createElement("div");
            Wu.setAttribute("oninput", "return;"), Tl = typeof Wu.oninput == "function" }
        Al = Tl } else Al = !1;
    cf = Al && (!document.documentMode || 9 < document.documentMode) }

function Vu() { Mr && (Mr.detachEvent("onpropertychange", df), Zr = Mr = null) }

function df(e) { if (e.propertyName === "value" && zo(Zr)) { var t = [];
        uf(t, Zr, e, Sa(e)), bd(Ym, t) } }

function Xm(e, t, n) { e === "focusin" ? (Vu(), Mr = t, Zr = n, Mr.attachEvent("onpropertychange", df)) : e === "focusout" && Vu() }

function Jm(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return zo(Zr) }

function Zm(e, t) { if (e === "click") return zo(t) }

function qm(e, t) { if (e === "input" || e === "change") return zo(t) }

function e0(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var Ct = typeof Object.is == "function" ? Object.is : e0;

function qr(e, t) { if (Ct(e, t)) return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1; var n = Object.keys(e),
        r = Object.keys(t); if (n.length !== r.length) return !1; for (r = 0; r < n.length; r++) { var i = n[r]; if (!os.call(t, i) || !Ct(e[i], t[i])) return !1 } return !0 }

function Gu(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function Qu(e, t) { var n = Gu(e);
    e = 0; for (var r; n;) { if (n.nodeType === 3) { if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
            e = r }
        e: { for (; n;) { if (n.nextSibling) { n = n.nextSibling; break e }
                n = n.parentNode }
            n = void 0 }
        n = Gu(n) } }

function ff(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ff(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function pf() { for (var e = window, t = to(); t instanceof e.HTMLIFrameElement;) { try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 } if (n) e = t.contentWindow;
        else break;
        t = to(e.document) } return t }

function La(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function t0(e) { var t = pf(),
        n = e.focusedElem,
        r = e.selectionRange; if (t !== n && n && n.ownerDocument && ff(n.ownerDocument.documentElement, n)) { if (r !== null && La(n)) { if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) { e = e.getSelection(); var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Qu(n, o); var l = Qu(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t))) } } for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top } }
var n0 = Dt && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    Es = null,
    Br = null,
    Rs = !1;

function Yu(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Rs || Mn == null || Mn !== to(r) || (r = Mn, "selectionStart" in r && La(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && qr(Br, r) || (Br = r, r = ao(Es, "onSelect"), 0 < r.length && (t = new Pa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Mn))) }

function Ni(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
var Bn = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") },
    zl = {},
    hf = {};
Dt && (hf = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);

function Io(e) { if (zl[e]) return zl[e]; if (!Bn[e]) return e; var t = Bn[e],
        n; for (n in t)
        if (t.hasOwnProperty(n) && n in hf) return zl[e] = t[n];
    return e }
var mf = Io("animationend"),
    gf = Io("animationiteration"),
    yf = Io("animationstart"),
    vf = Io("transitionend"),
    wf = new Map,
    Ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function fn(e, t) { wf.set(e, t), An(t, [e]) }
for (var Il = 0; Il < Ku.length; Il++) { var Dl = Ku[Il],
        r0 = Dl.toLowerCase(),
        i0 = Dl[0].toUpperCase() + Dl.slice(1);
    fn(r0, "on" + i0) }
fn(mf, "onAnimationEnd");
fn(gf, "onAnimationIteration");
fn(yf, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(vf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    o0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));

function Xu(e, t, n) { var r = e.type || "unknown-event";
    e.currentTarget = n, rm(r, t, void 0, e), e.currentTarget = null }

function xf(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) { var r = e[n],
            i = r.event;
        r = r.listeners;
        e: { var o = void 0; if (t)
                for (var l = r.length - 1; 0 <= l; l--) { var s = r[l],
                        a = s.instance,
                        u = s.currentTarget; if (s = s.listener, a !== o && i.isPropagationStopped()) break e;
                    Xu(i, s, u), o = a } else
                    for (l = 0; l < r.length; l++) { if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== o && i.isPropagationStopped()) break e;
                        Xu(i, s, u), o = a } } } if (ro) throw e = xs, ro = !1, xs = null, e }

function ie(e, t) { var n = t[Ls];
    n === void 0 && (n = t[Ls] = new Set); var r = e + "__bubble";
    n.has(r) || (Sf(t, e, 2, !1), n.add(r)) }

function Fl(e, t, n) { var r = 0;
    t && (r |= 4), Sf(n, e, r, t) }
var Li = "_reactListening" + Math.random().toString(36).slice(2);

function ei(e) { if (!e[Li]) { e[Li] = !0, Pd.forEach(function(n) { n !== "selectionchange" && (o0.has(n) || Fl(n, !1, e), Fl(n, !0, e)) }); var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Li] || (t[Li] = !0, Fl("selectionchange", !1, t)) } }

function Sf(e, t, n, r) { switch (rf(t)) {
        case 1:
            var i = wm; break;
        case 4:
            i = xm; break;
        default:
            i = Ra }
    n = i.bind(null, t, n, e), i = void 0, !ws || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1) }

function jl(e, t, n, r, i) { var o = r; if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (;;) { if (r === null) return; var l = r.tag; if (l === 3 || l === 4) { var s = r.stateNode.containerInfo; if (s === i || s.nodeType === 8 && s.parentNode === i) break; if (l === 4)
                for (l = r.return; l !== null;) { var a = l.tag; if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    l = l.return }
            for (; s !== null;) { if (l = wn(s), l === null) return; if (a = l.tag, a === 5 || a === 6) { r = o = l; continue e }
                s = s.parentNode } }
        r = r.return }
    bd(function() { var u = o,
            d = Sa(n),
            h = [];
        e: { var m = wf.get(e); if (m !== void 0) { var v = Pa,
                    y = e; switch (e) {
                    case "keypress":
                        if (Wi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = Im; break;
                    case "focusin":
                        y = "focus", v = $l; break;
                    case "focusout":
                        y = "blur", v = $l; break;
                    case "beforeblur":
                    case "afterblur":
                        v = $l; break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = ju; break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = km; break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = jm; break;
                    case mf:
                    case gf:
                    case yf:
                        v = Om; break;
                    case vf:
                        v = Bm; break;
                    case "scroll":
                        v = Sm; break;
                    case "wheel":
                        v = Hm; break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = _m; break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Bu } var w = (t & 4) !== 0,
                    _ = !w && e === "scroll",
                    p = w ? m !== null ? m + "Capture" : null : m;
                w = []; for (var c = u, g; c !== null;) { g = c; var S = g.stateNode; if (g.tag === 5 && S !== null && (g = S, p !== null && (S = Yr(c, p), S != null && w.push(ti(c, S, g)))), _) break;
                    c = c.return }
                0 < w.length && (m = new v(m, y, null, n, d), h.push({ event: m, listeners: w })) } }
        if ((t & 7) === 0) { e: { if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== ys && (y = n.relatedTarget || n.fromElement) && (wn(y) || y[Ft])) break e; if ((v || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = u, y = y ? wn(y) : null, y !== null && (_ = Tn(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = u), v !== y)) { if (w = ju, S = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Bu, S = "onPointerLeave", p = "onPointerEnter", c = "pointer"), _ = v == null ? m : Un(v), g = y == null ? m : Un(y), m = new w(S, c + "leave", v, n, d), m.target = _, m.relatedTarget = g, S = null, wn(d) === u && (w = new w(p, c + "enter", y, n, d), w.target = g, w.relatedTarget = _, S = w), _ = S, v && y) t: { for (w = v, p = y, c = 0, g = w; g; g = In(g)) c++; for (g = 0, S = p; S; S = In(S)) g++; for (; 0 < c - g;) w = In(w), c--; for (; 0 < g - c;) p = In(p), g--; for (; c--;) { if (w === p || p !== null && w === p.alternate) break t;
                            w = In(w), p = In(p) }
                        w = null }
                    else w = null;
                    v !== null && Ju(h, m, v, w, !1), y !== null && _ !== null && Ju(h, _, y, w, !0) } }
            e: { if (m = u ? Un(u) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var C = Km;
                else if (bu(m))
                    if (cf) C = qm;
                    else { C = Jm; var R = Xm }
                else(v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Zm); if (C && (C = C(e, u))) { uf(h, C, n, d); break e }
                R && R(e, m, u), e === "focusout" && (R = m._wrapperState) && R.controlled && m.type === "number" && fs(m, "number", m.value) } switch (R = u ? Un(u) : window, e) {
                case "focusin":
                    (bu(R) || R.contentEditable === "true") && (Mn = R, Es = u, Br = null); break;
                case "focusout":
                    Br = Es = Mn = null; break;
                case "mousedown":
                    Rs = !0; break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Rs = !1, Yu(h, n, d); break;
                case "selectionchange":
                    if (n0) break;
                case "keydown":
                case "keyup":
                    Yu(h, n, d) } var A; if (Na) e: { switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart"; break e;
                    case "compositionend":
                        T = "onCompositionEnd"; break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate"; break e }
                T = void 0 }
            else jn ? sf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (lf && n.locale !== "ko" && (jn || T !== "onCompositionStart" ? T === "onCompositionEnd" && jn && (A = of()) : (Kt = d, Oa = "value" in Kt ? Kt.value : Kt.textContent, jn = !0)), R = ao(u, T), 0 < R.length && (T = new Mu(T, e, null, n, d), h.push({ event: T, listeners: R }), A ? T.data = A : (A = af(n), A !== null && (T.data = A)))), (A = Wm ? Vm(e, n) : Gm(e, n)) && (u = ao(u, "onBeforeInput"), 0 < u.length && (d = new Mu("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: u }), d.data = A)) }
        xf(h, t) }) }

function ti(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

function ao(e, t) { for (var n = t + "Capture", r = []; e !== null;) { var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Yr(e, n), o != null && r.unshift(ti(e, o, i)), o = Yr(e, t), o != null && r.push(ti(e, o, i))), e = e.return } return r }

function In(e) { if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5); return e || null }

function Ju(e, t, n, r, i) { for (var o = t._reactName, l = []; n !== null && n !== r;) { var s = n,
            a = s.alternate,
            u = s.stateNode; if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, i ? (a = Yr(n, o), a != null && l.unshift(ti(n, a, s))) : i || (a = Yr(n, o), a != null && l.push(ti(n, a, s)))), n = n.return }
    l.length !== 0 && e.push({ event: t, listeners: l }) }
var l0 = /\r\n?/g,
    s0 = /\u0000|\uFFFD/g;

function Zu(e) { return (typeof e == "string" ? e : "" + e).replace(l0, `
`).replace(s0, "") }

function $i(e, t, n) { if (t = Zu(t), Zu(e) !== t && n) throw Error(P(425)) }

function uo() {}
var Os = null,
    Ps = null;

function _s(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var Ns = typeof setTimeout == "function" ? setTimeout : void 0,
    a0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qu = typeof Promise == "function" ? Promise : void 0,
    u0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof qu < "u" ? function(e) { return qu.resolve(null).then(e).catch(c0) } : Ns;

function c0(e) { setTimeout(function() { throw e }) }

function Ml(e, t) { var n = t,
        r = 0;
    do { var i = n.nextSibling; if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") { if (r === 0) { e.removeChild(i), Jr(t); return }
                r-- } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i } while (n);
    Jr(t) }

function tn(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function ec(e) { e = e.previousSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var n = e.data; if (n === "$" || n === "$!" || n === "$?") { if (t === 0) return e;
                t-- } else n === "/$" && t++ }
        e = e.previousSibling } return null }
var fr = Math.random().toString(36).slice(2),
    Rt = "__reactFiber$" + fr,
    ni = "__reactProps$" + fr,
    Ft = "__reactContainer$" + fr,
    Ls = "__reactEvents$" + fr,
    d0 = "__reactListeners$" + fr,
    f0 = "__reactHandles$" + fr;

function wn(e) { var t = e[Rt]; if (t) return t; for (var n = e.parentNode; n;) { if (t = n[Ft] || n[Rt]) { if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ec(e); e !== null;) { if (n = e[Rt]) return n;
                    e = ec(e) }
            return t }
        e = n, n = e.parentNode } return null }

function hi(e) { return e = e[Rt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function Un(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(P(33)) }

function Do(e) { return e[ni] || null }
var $s = [],
    Hn = -1;

function pn(e) { return { current: e } }

function oe(e) { 0 > Hn || (e.current = $s[Hn], $s[Hn] = null, Hn--) }

function re(e, t) { Hn++, $s[Hn] = e.current, e.current = t }
var dn = {},
    De = pn(dn),
    Ve = pn(!1),
    Rn = dn;

function nr(e, t) { var n = e.type.contextTypes; if (!n) return dn; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var i = {},
        o; for (o in n) i[o] = t[o]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i }

function Ge(e) { return e = e.childContextTypes, e != null }

function co() { oe(Ve), oe(De) }

function tc(e, t, n) { if (De.current !== dn) throw Error(P(168));
    re(De, t), re(Ve, n) }

function Cf(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext(); for (var i in r)
        if (!(i in t)) throw Error(P(108, Xh(e) || "Unknown", i));
    return ue({}, n, r) }

function fo(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, Rn = De.current, re(De, e), re(Ve, Ve.current), !0 }

function nc(e, t, n) { var r = e.stateNode; if (!r) throw Error(P(169));
    n ? (e = Cf(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, oe(Ve), oe(De), re(De, e)) : oe(Ve), re(Ve, n) }
var Lt = null,
    Fo = !1,
    Bl = !1;

function kf(e) { Lt === null ? Lt = [e] : Lt.push(e) }

function p0(e) { Fo = !0, kf(e) }

function hn() { if (!Bl && Lt !== null) { Bl = !0; var e = 0,
            t = q; try { var n = Lt; for (q = 1; e < n.length; e++) { var r = n[e];
                do r = r(!0); while (r !== null) }
            Lt = null, Fo = !1 } catch (i) { throw Lt !== null && (Lt = Lt.slice(e + 1)), Qd(Ca, hn), i } finally { q = t, Bl = !1 } } return null }
var bn = [],
    Wn = 0,
    po = null,
    ho = 0,
    ot = [],
    lt = 0,
    On = null,
    At = 1,
    Tt = "";

function yn(e, t) { bn[Wn++] = ho, bn[Wn++] = po, po = e, ho = t }

function Ef(e, t, n) { ot[lt++] = At, ot[lt++] = Tt, ot[lt++] = On, On = e; var r = At;
    e = Tt; var i = 32 - wt(r) - 1;
    r &= ~(1 << i), n += 1; var o = 32 - wt(t) + i; if (30 < o) { var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, At = 1 << 32 - wt(t) + i | n << i | r, Tt = o + e } else At = 1 << o | n << i | r, Tt = e }

function $a(e) { e.return !== null && (yn(e, 1), Ef(e, 1, 0)) }

function Aa(e) { for (; e === po;) po = bn[--Wn], bn[Wn] = null, ho = bn[--Wn], bn[Wn] = null; for (; e === On;) On = ot[--lt], ot[lt] = null, Tt = ot[--lt], ot[lt] = null, At = ot[--lt], ot[lt] = null }
var qe = null,
    Ze = null,
    le = !1,
    yt = null;

function Rf(e, t) { var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n) }

function rc(e, t) { switch (e.tag) {
        case 5:
            var n = e.type; return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = tn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = On !== null ? { id: At, overflow: Tt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ze = null, !0) : !1;
        default:
            return !1 } }

function As(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function Ts(e) { if (le) { var t = Ze; if (t) { var n = t; if (!rc(e, t)) { if (As(e)) throw Error(P(418));
                t = tn(n.nextSibling); var r = qe;
                t && rc(e, t) ? Rf(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, qe = e) } } else { if (As(e)) throw Error(P(418));
            e.flags = e.flags & -4097 | 2, le = !1, qe = e } } }

function ic(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    qe = e }

function Ai(e) { if (e !== qe) return !1; if (!le) return ic(e), le = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_s(e.type, e.memoizedProps)), t && (t = Ze)) { if (As(e)) throw Of(), Error(P(418)); for (; t;) Rf(e, t), t = tn(t.nextSibling) } if (ic(e), e.tag === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
        e: { for (e = e.nextSibling, t = 0; e;) { if (e.nodeType === 8) { var n = e.data; if (n === "/$") { if (t === 0) { Ze = tn(e.nextSibling); break e }
                        t-- } else n !== "$" && n !== "$!" && n !== "$?" || t++ }
                e = e.nextSibling }
            Ze = null } } else Ze = qe ? tn(e.stateNode.nextSibling) : null; return !0 }

function Of() { for (var e = Ze; e;) e = tn(e.nextSibling) }

function rr() { Ze = qe = null, le = !1 }

function Ta(e) { yt === null ? yt = [e] : yt.push(e) }
var h0 = Bt.ReactCurrentBatchConfig;

function mt(e, t) { if (e && e.defaultProps) { t = ue({}, t), e = e.defaultProps; for (var n in e) t[n] === void 0 && (t[n] = e[n]); return t } return t }
var mo = pn(null),
    go = null,
    Vn = null,
    za = null;

function Ia() { za = Vn = go = null }

function Da(e) { var t = mo.current;
    oe(mo), e._currentValue = t }

function zs(e, t, n) { for (; e !== null;) { var r = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return } }

function qn(e, t) { go = e, za = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (We = !0), e.firstContext = null) }

function ct(e) { var t = e._currentValue; if (za !== e)
        if (e = { context: e, memoizedValue: t, next: null }, Vn === null) { if (go === null) throw Error(P(308));
            Vn = e, go.dependencies = { lanes: 0, firstContext: e } } else Vn = Vn.next = e;
    return t }
var xn = null;

function Fa(e) { xn === null ? xn = [e] : xn.push(e) }

function Pf(e, t, n, r) { var i = t.interleaved; return i === null ? (n.next = n, Fa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r) }

function jt(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null }
var Gt = !1;

function ja(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function _f(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function zt(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function nn(e, t, n) { var r = e.updateQueue; if (r === null) return null; if (r = r.shared, (Q & 2) !== 0) { var i = r.pending; return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n) } return i = r.interleaved, i === null ? (t.next = t, Fa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n) }

function Vi(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) { var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ka(e, n) } }

function oc(e, t) { var n = e.updateQueue,
        r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) { var i = null,
            o = null; if (n = n.firstBaseUpdate, n !== null) { do { var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? i = o = l : o = o.next = l, n = n.next } while (n !== null);
            o === null ? i = o = t : o = o.next = t } else i = o = t;
        n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n; return }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t }

function yo(e, t, n, r) { var i = e.updateQueue;
    Gt = !1; var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        s = i.shared.pending; if (s !== null) { i.shared.pending = null; var a = s,
            u = a.next;
        a.next = null, l === null ? o = u : l.next = u, l = a; var d = e.alternate;
        d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== l && (s === null ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = a)) } if (o !== null) { var h = i.baseState;
        l = 0, d = u = a = null, s = o;
        do { var m = s.lane,
                v = s.eventTime; if ((r & m) === m) { d !== null && (d = d.next = { eventTime: v, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
                e: { var y = e,
                        w = s; switch (m = t, v = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") { h = y.call(v, h, m); break e }
                            h = y; break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, m = typeof y == "function" ? y.call(v, h, m) : y, m == null) break e;
                            h = ue({}, h, m); break e;
                        case 2:
                            Gt = !0 } }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [s] : m.push(s)) } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (u = d = v, a = h) : d = d.next = v, l |= m; if (s = s.next, s === null) { if (s = i.shared.pending, s === null) break;
                m = s, s = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null } } while (1); if (d === null && (a = h), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) { i = t;
            do l |= i.lane, i = i.next; while (i !== t) } else o === null && (i.shared.lanes = 0);
        _n |= l, e.lanes = l, e.memoizedState = h } }

function lc(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) { var r = e[t],
                i = r.callback; if (i !== null) { if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
                i.call(r) } } }
var Nf = new Od.Component().refs;

function Is(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) }
var jo = { isMounted: function(e) { return (e = e._reactInternals) ? Tn(e) === e : !1 }, enqueueSetState: function(e, t, n) { e = e._reactInternals; var r = Me(),
            i = on(e),
            o = zt(r, i);
        o.payload = t, n != null && (o.callback = n), t = nn(e, o, i), t !== null && (xt(t, e, i, r), Vi(t, e, i)) }, enqueueReplaceState: function(e, t, n) { e = e._reactInternals; var r = Me(),
            i = on(e),
            o = zt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = nn(e, o, i), t !== null && (xt(t, e, i, r), Vi(t, e, i)) }, enqueueForceUpdate: function(e, t) { e = e._reactInternals; var n = Me(),
            r = on(e),
            i = zt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = nn(e, i, r), t !== null && (xt(t, e, r, n), Vi(t, e, r)) } };

function sc(e, t, n, r, i, o, l) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(i, o) : !0 }

function Lf(e, t, n) { var r = !1,
        i = dn,
        o = t.contextType; return typeof o == "object" && o !== null ? o = ct(o) : (i = Ge(t) ? Rn : De.current, r = t.contextTypes, o = (r = r != null) ? nr(e, i) : dn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = jo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t }

function ac(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && jo.enqueueReplaceState(t, t.state, null) }

function Ds(e, t, n, r) { var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Nf, ja(e); var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ct(o) : (o = Ge(t) ? Rn : De.current, i.context = nr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Is(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && jo.enqueueReplaceState(i, i.state, null), yo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308) }

function Pr(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") { if (n._owner) { if (n = n._owner, n) { if (n.tag !== 1) throw Error(P(309)); var r = n.stateNode } if (!r) throw Error(P(147, e)); var i = r,
                o = "" + e; return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) { var s = i.refs;
                s === Nf && (s = i.refs = {}), l === null ? delete s[o] : s[o] = l }, t._stringRef = o, t) } if (typeof e != "string") throw Error(P(284)); if (!n._owner) throw Error(P(290, e)) } return e }

function Ti(e, t) { throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function uc(e) { var t = e._init; return t(e._payload) }

function $f(e) {
    function t(p, c) { if (e) { var g = p.deletions;
            g === null ? (p.deletions = [c], p.flags |= 16) : g.push(c) } }

    function n(p, c) { if (!e) return null; for (; c !== null;) t(p, c), c = c.sibling; return null }

    function r(p, c) { for (p = new Map; c !== null;) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling; return p }

    function i(p, c) { return p = ln(p, c), p.index = 0, p.sibling = null, p }

    function o(p, c, g) { return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < c ? (p.flags |= 2, c) : g) : (p.flags |= 2, c)) : (p.flags |= 1048576, c) }

    function l(p) { return e && p.alternate === null && (p.flags |= 2), p }

    function s(p, c, g, S) { return c === null || c.tag !== 6 ? (c = Ql(g, p.mode, S), c.return = p, c) : (c = i(c, g), c.return = p, c) }

    function a(p, c, g, S) { var C = g.type; return C === Fn ? d(p, c, g.props.children, S, g.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Vt && uc(C) === c.type) ? (S = i(c, g.props), S.ref = Pr(p, c, g), S.return = p, S) : (S = Ji(g.type, g.key, g.props, null, p.mode, S), S.ref = Pr(p, c, g), S.return = p, S) }

    function u(p, c, g, S) { return c === null || c.tag !== 4 || c.stateNode.containerInfo !== g.containerInfo || c.stateNode.implementation !== g.implementation ? (c = Yl(g, p.mode, S), c.return = p, c) : (c = i(c, g.children || []), c.return = p, c) }

    function d(p, c, g, S, C) { return c === null || c.tag !== 7 ? (c = kn(g, p.mode, S, C), c.return = p, c) : (c = i(c, g), c.return = p, c) }

    function h(p, c, g) { if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ql("" + c, p.mode, g), c.return = p, c; if (typeof c == "object" && c !== null) { switch (c.$$typeof) {
                case Ci:
                    return g = Ji(c.type, c.key, c.props, null, p.mode, g), g.ref = Pr(p, null, c), g.return = p, g;
                case Dn:
                    return c = Yl(c, p.mode, g), c.return = p, c;
                case Vt:
                    var S = c._init; return h(p, S(c._payload), g) } if (Ar(c) || Cr(c)) return c = kn(c, p.mode, g, null), c.return = p, c;
            Ti(p, c) } return null }

    function m(p, c, g, S) { var C = c !== null ? c.key : null; if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : s(p, c, "" + g, S); if (typeof g == "object" && g !== null) { switch (g.$$typeof) {
                case Ci:
                    return g.key === C ? a(p, c, g, S) : null;
                case Dn:
                    return g.key === C ? u(p, c, g, S) : null;
                case Vt:
                    return C = g._init, m(p, c, C(g._payload), S) } if (Ar(g) || Cr(g)) return C !== null ? null : d(p, c, g, S, null);
            Ti(p, g) } return null }

    function v(p, c, g, S, C) { if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(g) || null, s(c, p, "" + S, C); if (typeof S == "object" && S !== null) { switch (S.$$typeof) {
                case Ci:
                    return p = p.get(S.key === null ? g : S.key) || null, a(c, p, S, C);
                case Dn:
                    return p = p.get(S.key === null ? g : S.key) || null, u(c, p, S, C);
                case Vt:
                    var R = S._init; return v(p, c, g, R(S._payload), C) } if (Ar(S) || Cr(S)) return p = p.get(g) || null, d(c, p, S, C, null);
            Ti(c, S) } return null }

    function y(p, c, g, S) { for (var C = null, R = null, A = c, T = c = 0, G = null; A !== null && T < g.length; T++) { A.index > T ? (G = A, A = null) : G = A.sibling; var M = m(p, A, g[T], S); if (M === null) { A === null && (A = G); break }
            e && A && M.alternate === null && t(p, A), c = o(M, c, T), R === null ? C = M : R.sibling = M, R = M, A = G } if (T === g.length) return n(p, A), le && yn(p, T), C; if (A === null) { for (; T < g.length; T++) A = h(p, g[T], S), A !== null && (c = o(A, c, T), R === null ? C = A : R.sibling = A, R = A); return le && yn(p, T), C } for (A = r(p, A); T < g.length; T++) G = v(A, p, T, g[T], S), G !== null && (e && G.alternate !== null && A.delete(G.key === null ? T : G.key), c = o(G, c, T), R === null ? C = G : R.sibling = G, R = G); return e && A.forEach(function(me) { return t(p, me) }), le && yn(p, T), C }

    function w(p, c, g, S) { var C = Cr(g); if (typeof C != "function") throw Error(P(150)); if (g = C.call(g), g == null) throw Error(P(151)); for (var R = C = null, A = c, T = c = 0, G = null, M = g.next(); A !== null && !M.done; T++, M = g.next()) { A.index > T ? (G = A, A = null) : G = A.sibling; var me = m(p, A, M.value, S); if (me === null) { A === null && (A = G); break }
            e && A && me.alternate === null && t(p, A), c = o(me, c, T), R === null ? C = me : R.sibling = me, R = me, A = G } if (M.done) return n(p, A), le && yn(p, T), C; if (A === null) { for (; !M.done; T++, M = g.next()) M = h(p, M.value, S), M !== null && (c = o(M, c, T), R === null ? C = M : R.sibling = M, R = M); return le && yn(p, T), C } for (A = r(p, A); !M.done; T++, M = g.next()) M = v(A, p, T, M.value, S), M !== null && (e && M.alternate !== null && A.delete(M.key === null ? T : M.key), c = o(M, c, T), R === null ? C = M : R.sibling = M, R = M); return e && A.forEach(function(fe) { return t(p, fe) }), le && yn(p, T), C }

    function _(p, c, g, S) { if (typeof g == "object" && g !== null && g.type === Fn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) { switch (g.$$typeof) {
                case Ci:
                    e: { for (var C = g.key, R = c; R !== null;) { if (R.key === C) { if (C = g.type, C === Fn) { if (R.tag === 7) { n(p, R.sibling), c = i(R, g.props.children), c.return = p, p = c; break e } } else if (R.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Vt && uc(C) === R.type) { n(p, R.sibling), c = i(R, g.props), c.ref = Pr(p, R, g), c.return = p, p = c; break e }
                                n(p, R); break } else t(p, R);
                            R = R.sibling }
                        g.type === Fn ? (c = kn(g.props.children, p.mode, S, g.key), c.return = p, p = c) : (S = Ji(g.type, g.key, g.props, null, p.mode, S), S.ref = Pr(p, c, g), S.return = p, p = S) }
                    return l(p);
                case Dn:
                    e: { for (R = g.key; c !== null;) { if (c.key === R)
                                if (c.tag === 4 && c.stateNode.containerInfo === g.containerInfo && c.stateNode.implementation === g.implementation) { n(p, c.sibling), c = i(c, g.children || []), c.return = p, p = c; break e } else { n(p, c); break }
                            else t(p, c);
                            c = c.sibling }
                        c = Yl(g, p.mode, S), c.return = p, p = c }
                    return l(p);
                case Vt:
                    return R = g._init, _(p, c, R(g._payload), S) } if (Ar(g)) return y(p, c, g, S); if (Cr(g)) return w(p, c, g, S);
            Ti(p, g) } return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, c !== null && c.tag === 6 ? (n(p, c.sibling), c = i(c, g), c.return = p, p = c) : (n(p, c), c = Ql(g, p.mode, S), c.return = p, p = c), l(p)) : n(p, c) } return _ }
var ir = $f(!0),
    Af = $f(!1),
    mi = {},
    Pt = pn(mi),
    ri = pn(mi),
    ii = pn(mi);

function Sn(e) { if (e === mi) throw Error(P(174)); return e }

function Ma(e, t) { switch (re(ii, t), re(ri, e), re(Pt, mi), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : hs(null, ""); break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = hs(t, e) }
    oe(Pt), re(Pt, t) }

function or() { oe(Pt), oe(ri), oe(ii) }

function Tf(e) { Sn(ii.current); var t = Sn(Pt.current),
        n = hs(t, e.type);
    t !== n && (re(ri, e), re(Pt, n)) }

function Ba(e) { ri.current === e && (oe(Pt), oe(ri)) }
var se = pn(0);

function vo(e) { for (var t = e; t !== null;) { if (t.tag === 13) { var n = t.memoizedState; if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if ((t.flags & 128) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return null;
            t = t.return }
        t.sibling.return = t.return, t = t.sibling } return null }
var Ul = [];

function Ua() { for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0 }
var Gi = Bt.ReactCurrentDispatcher,
    Hl = Bt.ReactCurrentBatchConfig,
    Pn = 0,
    ae = null,
    ve = null,
    xe = null,
    wo = !1,
    Ur = !1,
    oi = 0,
    m0 = 0;

function Te() { throw Error(P(321)) }

function Ha(e, t) { if (t === null) return !1; for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n])) return !1;
    return !0 }

function ba(e, t, n, r, i, o) { if (Pn = o, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gi.current = e === null || e.memoizedState === null ? w0 : x0, e = n(r, i), Ur) { o = 0;
        do { if (Ur = !1, oi = 0, 25 <= o) throw Error(P(301));
            o += 1, xe = ve = null, t.updateQueue = null, Gi.current = S0, e = n(r, i) } while (Ur) } if (Gi.current = xo, t = ve !== null && ve.next !== null, Pn = 0, xe = ve = ae = null, wo = !1, t) throw Error(P(300)); return e }

function Wa() { var e = oi !== 0; return oi = 0, e }

function Et() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return xe === null ? ae.memoizedState = xe = e : xe = xe.next = e, xe }

function dt() { if (ve === null) { var e = ae.alternate;
        e = e !== null ? e.memoizedState : null } else e = ve.next; var t = xe === null ? ae.memoizedState : xe.next; if (t !== null) xe = t, ve = e;
    else { if (e === null) throw Error(P(310));
        ve = e, e = { memoizedState: ve.memoizedState, baseState: ve.baseState, baseQueue: ve.baseQueue, queue: ve.queue, next: null }, xe === null ? ae.memoizedState = xe = e : xe = xe.next = e } return xe }

function li(e, t) { return typeof t == "function" ? t(e) : t }

function bl(e) { var t = dt(),
        n = t.queue; if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e; var r = ve,
        i = r.baseQueue,
        o = n.pending; if (o !== null) { if (i !== null) { var l = i.next;
            i.next = o.next, o.next = l }
        r.baseQueue = i = o, n.pending = null } if (i !== null) { o = i.next, r = r.baseState; var s = l = null,
            a = null,
            u = o;
        do { var d = u.lane; if ((Pn & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else { var h = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                a === null ? (s = a = h, l = r) : a = a.next = h, ae.lanes |= d, _n |= d }
            u = u.next } while (u !== null && u !== o);
        a === null ? l = r : a.next = s, Ct(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r } if (e = n.interleaved, e !== null) { i = e;
        do o = i.lane, ae.lanes |= o, _n |= o, i = i.next; while (i !== e) } else i === null && (n.lanes = 0); return [t.memoizedState, n.dispatch] }

function Wl(e) { var t = dt(),
        n = t.queue; if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e; var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState; if (i !== null) { n.pending = null; var l = i = i.next;
        do o = e(o, l.action), l = l.next; while (l !== i);
        Ct(o, t.memoizedState) || (We = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o } return [o, r] }

function zf() {}

function If(e, t) { var n = ae,
        r = dt(),
        i = t(),
        o = !Ct(r.memoizedState, i); if (o && (r.memoizedState = i, We = !0), r = r.queue, Va(jf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) { if (n.flags |= 2048, si(9, Ff.bind(null, n, r, i, t), void 0, null), Se === null) throw Error(P(349));
        (Pn & 30) !== 0 || Df(n, t, i) } return i }

function Df(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)) }

function Ff(e, t, n, r) { t.value = n, t.getSnapshot = r, Mf(t) && Bf(e) }

function jf(e, t, n) { return n(function() { Mf(t) && Bf(e) }) }

function Mf(e) { var t = e.getSnapshot;
    e = e.value; try { var n = t(); return !Ct(e, n) } catch { return !0 } }

function Bf(e) { var t = jt(e, 1);
    t !== null && xt(t, e, 1, -1) }

function cc(e) { var t = Et(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: li, lastRenderedState: e }, t.queue = e, e = e.dispatch = v0.bind(null, ae, e), [t.memoizedState, e] }

function si(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e }

function Uf() { return dt().memoizedState }

function Qi(e, t, n, r) { var i = Et();
    ae.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r) }

function Mo(e, t, n, r) { var i = dt();
    r = r === void 0 ? null : r; var o = void 0; if (ve !== null) { var l = ve.memoizedState; if (o = l.destroy, r !== null && Ha(r, l.deps)) { i.memoizedState = si(t, n, o, r); return } }
    ae.flags |= e, i.memoizedState = si(1 | t, n, o, r) }

function dc(e, t) { return Qi(8390656, 8, e, t) }

function Va(e, t) { return Mo(2048, 8, e, t) }

function Hf(e, t) { return Mo(4, 2, e, t) }

function bf(e, t) { return Mo(4, 4, e, t) }

function Wf(e, t) { if (typeof t == "function") return e = e(), t(e),
        function() { t(null) }; if (t != null) return e = e(), t.current = e,
        function() { t.current = null } }

function Vf(e, t, n) { return n = n != null ? n.concat([e]) : null, Mo(4, 4, Wf.bind(null, t, e), n) }

function Ga() {}

function Gf(e, t) { var n = dt();
    t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e) }

function Qf(e, t) { var n = dt();
    t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ha(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e) }

function Yf(e, t, n) { return (Pn & 21) === 0 ? (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n) : (Ct(n, t) || (n = Xd(), ae.lanes |= n, _n |= n, e.baseState = !0), t) }

function g0(e, t) { var n = q;
    q = n !== 0 && 4 > n ? n : 4, e(!0); var r = Hl.transition;
    Hl.transition = {}; try { e(!1), t() } finally { q = n, Hl.transition = r } }

function Kf() { return dt().memoizedState }

function y0(e, t, n) { var r = on(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xf(e)) Jf(t, n);
    else if (n = Pf(e, t, n, r), n !== null) { var i = Me();
        xt(n, e, r, i), Zf(n, t, r) } }

function v0(e, t, n) { var r = on(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Xf(e)) Jf(t, i);
    else { var o = e.alternate; if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try { var l = t.lastRenderedState,
                s = o(l, n); if (i.hasEagerState = !0, i.eagerState = s, Ct(s, l)) { var a = t.interleaved;
                a === null ? (i.next = i, Fa(t)) : (i.next = a.next, a.next = i), t.interleaved = i; return } } catch {} finally {}
        n = Pf(e, t, i, r), n !== null && (i = Me(), xt(n, e, r, i), Zf(n, t, r)) } }

function Xf(e) { var t = e.alternate; return e === ae || t !== null && t === ae }

function Jf(e, t) { Ur = wo = !0; var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t }

function Zf(e, t, n) { if ((n & 4194240) !== 0) { var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ka(e, n) } }
var xo = { readContext: ct, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 },
    w0 = { readContext: ct, useCallback: function(e, t) { return Et().memoizedState = [e, t === void 0 ? null : t], e }, useContext: ct, useEffect: dc, useImperativeHandle: function(e, t, n) { return n = n != null ? n.concat([e]) : null, Qi(4194308, 4, Wf.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return Qi(4194308, 4, e, t) }, useInsertionEffect: function(e, t) { return Qi(4, 2, e, t) }, useMemo: function(e, t) { var n = Et(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function(e, t, n) { var r = Et(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = y0.bind(null, ae, e), [r.memoizedState, e] }, useRef: function(e) { var t = Et(); return e = { current: e }, t.memoizedState = e }, useState: cc, useDebugValue: Ga, useDeferredValue: function(e) { return Et().memoizedState = e }, useTransition: function() { var e = cc(!1),
                t = e[0]; return e = g0.bind(null, e[1]), Et().memoizedState = e, [t, e] }, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) { var r = ae,
                i = Et(); if (le) { if (n === void 0) throw Error(P(407));
                n = n() } else { if (n = t(), Se === null) throw Error(P(349));
                (Pn & 30) !== 0 || Df(r, t, n) }
            i.memoizedState = n; var o = { value: n, getSnapshot: t }; return i.queue = o, dc(jf.bind(null, r, o, e), [e]), r.flags |= 2048, si(9, Ff.bind(null, r, o, n, t), void 0, null), n }, useId: function() { var e = Et(),
                t = Se.identifierPrefix; if (le) { var n = Tt,
                    r = At;
                n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = oi++, 0 < n && (t += "H" + n.toString(32)), t += ":" } else n = m0++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t }, unstable_isNewReconciler: !1 },
    x0 = { readContext: ct, useCallback: Gf, useContext: ct, useEffect: Va, useImperativeHandle: Vf, useInsertionEffect: Hf, useLayoutEffect: bf, useMemo: Qf, useReducer: bl, useRef: Uf, useState: function() { return bl(li) }, useDebugValue: Ga, useDeferredValue: function(e) { var t = dt(); return Yf(t, ve.memoizedState, e) }, useTransition: function() { var e = bl(li)[0],
                t = dt().memoizedState; return [e, t] }, useMutableSource: zf, useSyncExternalStore: If, useId: Kf, unstable_isNewReconciler: !1 },
    S0 = { readContext: ct, useCallback: Gf, useContext: ct, useEffect: Va, useImperativeHandle: Vf, useInsertionEffect: Hf, useLayoutEffect: bf, useMemo: Qf, useReducer: Wl, useRef: Uf, useState: function() { return Wl(li) }, useDebugValue: Ga, useDeferredValue: function(e) { var t = dt(); return ve === null ? t.memoizedState = e : Yf(t, ve.memoizedState, e) }, useTransition: function() { var e = Wl(li)[0],
                t = dt().memoizedState; return [e, t] }, useMutableSource: zf, useSyncExternalStore: If, useId: Kf, unstable_isNewReconciler: !1 };

function lr(e, t) { try { var n = "",
            r = t;
        do n += Kh(r), r = r.return; while (r); var i = n } catch (o) { i = `
Error generating stack: ` + o.message + `
` + o.stack } return { value: e, source: t, stack: i, digest: null } }

function Vl(e, t, n) { return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null } }

function Fs(e, t) { try { console.error(t.value) } catch (n) { setTimeout(function() { throw n }) } }
var C0 = typeof WeakMap == "function" ? WeakMap : Map;

function qf(e, t, n) { n = zt(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function() { Co || (Co = !0, Qs = r), Fs(e, t) }, n }

function ep(e, t, n) { n = zt(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") { var i = t.value;
        n.payload = function() { return r(i) }, n.callback = function() { Fs(e, t) } } var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() { Fs(e, t), typeof r != "function" && (rn === null ? rn = new Set([this]) : rn.add(this)); var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" }) }), n }

function fc(e, t, n) { var r = e.pingCache; if (r === null) { r = e.pingCache = new C0; var i = new Set;
        r.set(t, i) } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = D0.bind(null, e, t, n), t.then(e, e)) }

function pc(e) { do { var t; if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return } while (e !== null); return null }

function hc(e, t, n, r, i) { return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e) }
var k0 = Bt.ReactCurrentOwner,
    We = !1;

function je(e, t, n, r) { t.child = e === null ? Af(t, null, n, r) : ir(t, e.child, n, r) }

function mc(e, t, n, r, i) { n = n.render; var o = t.ref; return qn(t, i), r = ba(e, t, n, r, o, i), n = Wa(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (le && n && $a(t), t.flags |= 1, je(e, t, r, i), t.child) }

function gc(e, t, n, r, i) { if (e === null) { var o = n.type; return typeof o == "function" && !eu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, tp(e, t, o, r, i)) : (e = Ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e) } if (o = e.child, (e.lanes & i) === 0) { var l = o.memoizedProps; if (n = n.compare, n = n !== null ? n : qr, n(l, r) && e.ref === t.ref) return Mt(e, t, i) } return t.flags |= 1, e = ln(o, r), e.ref = t.ref, e.return = t, t.child = e }

function tp(e, t, n, r, i) { if (e !== null) { var o = e.memoizedProps; if (qr(o, r) && e.ref === t.ref)
            if (We = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)(e.flags & 131072) !== 0 && (We = !0);
            else return t.lanes = e.lanes, Mt(e, t, i) } return js(e, t, n, r, i) }

function np(e, t, n) { var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
        if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Qn, Je), Je |= n;
        else { if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(Qn, Je), Je |= e, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, re(Qn, Je), Je |= r }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, re(Qn, Je), Je |= r; return je(e, t, i, n), t.child }

function rp(e, t) { var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152) }

function js(e, t, n, r, i) { var o = Ge(n) ? Rn : De.current; return o = nr(t, o), qn(t, i), n = ba(e, t, n, r, o, i), r = Wa(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Mt(e, t, i)) : (le && r && $a(t), t.flags |= 1, je(e, t, n, i), t.child) }

function yc(e, t, n, r, i) { if (Ge(n)) { var o = !0;
        fo(t) } else o = !1; if (qn(t, i), t.stateNode === null) Yi(e, t), Lf(t, n, r), Ds(t, n, r, i), r = !0;
    else if (e === null) { var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s; var a = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = ct(u) : (u = Ge(n) ? Rn : De.current, u = nr(t, u)); var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && ac(t, l, r, u), Gt = !1; var m = t.memoizedState;
        l.state = m, yo(t, r, l, i), a = t.memoizedState, s !== r || m !== a || Ve.current || Gt ? (typeof d == "function" && (Is(t, n, d, r), a = t.memoizedState), (s = Gt || sc(t, n, s, r, m, a, u)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1) } else { l = t.stateNode, _f(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : mt(t.type, s), l.props = u, h = t.pendingProps, m = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = ct(a) : (a = Ge(n) ? Rn : De.current, a = nr(t, a)); var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== h || m !== a) && ac(t, l, r, a), Gt = !1, m = t.memoizedState, l.state = m, yo(t, r, l, i); var y = t.memoizedState;
        s !== h || m !== y || Ve.current || Gt ? (typeof v == "function" && (Is(t, n, v, r), y = t.memoizedState), (u = Gt || sc(t, n, u, r, m, y, a) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1) } return Ms(e, t, n, r, o, i) }

function Ms(e, t, n, r, i, o) { rp(e, t); var l = (t.flags & 128) !== 0; if (!r && !l) return i && nc(t, n, !1), Mt(e, t, o);
    r = t.stateNode, k0.current = t; var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && l ? (t.child = ir(t, e.child, null, o), t.child = ir(t, null, s, o)) : je(e, t, s, o), t.memoizedState = r.state, i && nc(t, n, !0), t.child }

function ip(e) { var t = e.stateNode;
    t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), Ma(e, t.containerInfo) }

function vc(e, t, n, r, i) { return rr(), Ta(i), t.flags |= 256, je(e, t, n, r), t.child }
var Bs = { dehydrated: null, treeContext: null, retryLane: 0 };

function Us(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function op(e, t, n) { var r = t.pendingProps,
        i = se.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        s; if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), re(se, i & 1), e === null) return Ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Ho(l, r, 0, null), e = kn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Us(n), t.memoizedState = Bs, e) : Qa(t, l)); if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return E0(e, t, l, r, s, i, n); if (o) { o = r.fallback, l = t.mode, i = e.child, s = i.sibling; var a = { mode: "hidden", children: r.children }; return (l & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = ln(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = ln(s, o) : (o = kn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Us(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Bs, r } return o = e.child, e = o.sibling, r = ln(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r }

function Qa(e, t) { return t = Ho({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t }

function zi(e, t, n, r) { return r !== null && Ta(r), ir(t, e.child, null, n), e = Qa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e }

function E0(e, t, n, r, i, o, l) { if (n) return t.flags & 256 ? (t.flags &= -257, r = Vl(Error(P(422))), zi(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Ho({ mode: "visible", children: r.children }, i, 0, null), o = kn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && ir(t, e.child, null, l), t.child.memoizedState = Us(l), t.memoizedState = Bs, o); if ((t.mode & 1) === 0) return zi(e, t, l, null); if (i.data === "$!") { if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst; return r = s, o = Error(P(419)), r = Vl(o, r, void 0), zi(e, t, l, r) } if (s = (l & e.childLanes) !== 0, We || s) { if (r = Se, r !== null) { switch (l & -l) {
                case 4:
                    i = 2; break;
                case 16:
                    i = 8; break;
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
                    i = 32; break;
                case 536870912:
                    i = 268435456; break;
                default:
                    i = 0 }
            i = (i & (r.suspendedLanes | l)) !== 0 ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, jt(e, i), xt(r, e, i, -1)) } return qa(), r = Vl(Error(P(421))), zi(e, t, l, r) } return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = F0.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ze = tn(i.nextSibling), qe = t, le = !0, yt = null, e !== null && (ot[lt++] = At, ot[lt++] = Tt, ot[lt++] = On, At = e.id, Tt = e.overflow, On = t), t = Qa(t, r.children), t.flags |= 4096, t) }

function wc(e, t, n) { e.lanes |= t; var r = e.alternate;
    r !== null && (r.lanes |= t), zs(e.return, t, n) }

function Gl(e, t, n, r, i) { var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i) }

function lp(e, t, n) { var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail; if (je(e, t, r.children, n), r = se.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else { if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && wc(e, n, t);
            else if (e.tag === 19) wc(e, n, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; e.sibling === null;) { if (e.return === null || e.return === t) break e;
                e = e.return }
            e.sibling.return = e.return, e = e.sibling }
        r &= 1 } if (re(se, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Gl(t, !1, i, n, o); break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) { if (e = i.alternate, e !== null && vo(e) === null) { t.child = i; break }
                e = i.sibling, i.sibling = n, n = i, i = e }
            Gl(t, !0, n, null, o); break;
        case "together":
            Gl(t, !1, null, null, void 0); break;
        default:
            t.memoizedState = null }
    return t.child }

function Yi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) }

function Mt(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, (n & t.childLanes) === 0) return null; if (e !== null && t.child !== e.child) throw Error(P(153)); if (t.child !== null) { for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
        n.sibling = null } return t.child }

function R0(e, t, n) { switch (t.tag) {
        case 3:
            ip(t), rr(); break;
        case 5:
            Tf(t); break;
        case 1:
            Ge(t.type) && fo(t); break;
        case 4:
            Ma(t, t.stateNode.containerInfo); break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            re(mo, r._currentValue), r._currentValue = i; break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (re(se, se.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? op(e, t, n) : (re(se, se.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
            re(se, se.current & 1); break;
        case 19:
            if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) { if (r) return lp(e, t, n);
                t.flags |= 128 } if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), re(se, se.current), r) break; return null;
        case 22:
        case 23:
            return t.lanes = 0, np(e, t, n) } return Mt(e, t, n) }
var sp, Hs, ap, up;
sp = function(e, t) { for (var n = t.child; n !== null;) { if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; n.sibling === null;) { if (n.return === null || n.return === t) return;
            n = n.return }
        n.sibling.return = n.return, n = n.sibling } };
Hs = function() {};
ap = function(e, t, n, r) { var i = e.memoizedProps; if (i !== r) { e = t.stateNode, Sn(Pt.current); var o = null; switch (n) {
            case "input":
                i = cs(e, i), r = cs(e, r), o = []; break;
            case "select":
                i = ue({}, i, { value: void 0 }), r = ue({}, r, { value: void 0 }), o = []; break;
            case "textarea":
                i = ps(e, i), r = ps(e, r), o = []; break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = uo) }
        ms(n, r); var l;
        n = null; for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") { var s = i[u]; for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Gr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) { var a = r[u]; if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) { for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = ""); for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]) } else n || (o || (o = []), o.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Gr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ie("scroll", e), o || s === a || (o = [])) : (o = o || []).push(u, a)) }
        n && (o = o || []).push("style", n); var u = o;
        (t.updateQueue = u) && (t.flags |= 4) } };
up = function(e, t, n, r) { n !== r && (t.flags |= 4) };

function _r(e, t) { if (!le) switch (e.tailMode) {
        case "hidden":
            t = e.tail; for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null; break;
        case "collapsed":
            n = e.tail; for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null } }

function ze(e) { var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0; if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t }

function O0(e, t, n) { var r = t.pendingProps; switch (Aa(t), t.tag) {
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
            return ze(t), null;
        case 1:
            return Ge(t.type) && co(), ze(t), null;
        case 3:
            return r = t.stateNode, or(), oe(Ve), oe(De), Ua(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ai(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yt !== null && (Xs(yt), yt = null))), Hs(e, t), ze(t), null;
        case 5:
            Ba(t); var i = Sn(ii.current); if (n = t.type, e !== null && t.stateNode != null) ap(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else { if (!r) { if (t.stateNode === null) throw Error(P(166)); return ze(t), null } if (e = Sn(Pt.current), Ai(t)) { r = t.stateNode, n = t.type; var o = t.memoizedProps; switch (r[Rt] = t, r[ni] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ie("cancel", r), ie("close", r); break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ie("load", r); break;
                        case "video":
                        case "audio":
                            for (i = 0; i < zr.length; i++) ie(zr[i], r); break;
                        case "source":
                            ie("error", r); break;
                        case "img":
                        case "image":
                        case "link":
                            ie("error", r), ie("load", r); break;
                        case "details":
                            ie("toggle", r); break;
                        case "input":
                            _u(r, o), ie("invalid", r); break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!o.multiple }, ie("invalid", r); break;
                        case "textarea":
                            Lu(r, o), ie("invalid", r) }
                    ms(n, o), i = null; for (var l in o)
                        if (o.hasOwnProperty(l)) { var s = o[l];
                            l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && $i(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && $i(r.textContent, s, e), i = ["children", "" + s]) : Gr.hasOwnProperty(l) && s != null && l === "onScroll" && ie("scroll", r) }
                    switch (n) {
                        case "input":
                            ki(r), Nu(r, o, !0); break;
                        case "textarea":
                            ki(r), $u(r); break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = uo) }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4) } else { l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Id(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Rt] = t, e[ni] = r, sp(e, t, !1, !1), t.stateNode = e;
                    e: { switch (l = gs(n, r), n) {
                            case "dialog":
                                ie("cancel", e), ie("close", e), i = r; break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ie("load", e), i = r; break;
                            case "video":
                            case "audio":
                                for (i = 0; i < zr.length; i++) ie(zr[i], e);
                                i = r; break;
                            case "source":
                                ie("error", e), i = r; break;
                            case "img":
                            case "image":
                            case "link":
                                ie("error", e), ie("load", e), i = r; break;
                            case "details":
                                ie("toggle", e), i = r; break;
                            case "input":
                                _u(e, r), i = cs(e, r), ie("invalid", e); break;
                            case "option":
                                i = r; break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, i = ue({}, r, { value: void 0 }), ie("invalid", e); break;
                            case "textarea":
                                Lu(e, r), i = ps(e, r), ie("invalid", e); break;
                            default:
                                i = r }
                        ms(n, i), s = i; for (o in s)
                            if (s.hasOwnProperty(o)) { var a = s[o];
                                o === "style" ? jd(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Dd(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qr(e, a) : typeof a == "number" && Qr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Gr.hasOwnProperty(o) ? a != null && o === "onScroll" && ie("scroll", e) : a != null && ya(e, o, a, l)) }
                        switch (n) {
                            case "input":
                                ki(e), Nu(e, r, !1); break;
                            case "textarea":
                                ki(e), $u(e); break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + cn(r.value)); break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Kn(e, !!r.multiple, o, !1) : r.defaultValue != null && Kn(e, !!r.multiple, r.defaultValue, !0); break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = uo) } switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus; break e;
                            case "img":
                                r = !0; break e;
                            default:
                                r = !1 } }
                    r && (t.flags |= 4) }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152) } return ze(t), null;
        case 6:
            if (e && t.stateNode != null) up(e, t, e.memoizedProps, r);
            else { if (typeof r != "string" && t.stateNode === null) throw Error(P(166)); if (n = Sn(ii.current), Sn(Pt.current), Ai(t)) { if (r = t.stateNode, n = t.memoizedProps, r[Rt] = t, (o = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
                        case 3:
                            $i(r.nodeValue, n, (e.mode & 1) !== 0); break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0) }
                    o && (t.flags |= 4) } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rt] = t, t.stateNode = r } return ze(t), null;
        case 13:
            if (oe(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (le && Ze !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Of(), rr(), t.flags |= 98560, o = !1;
                else if (o = Ai(t), r !== null && r.dehydrated !== null) { if (e === null) { if (!o) throw Error(P(318)); if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(P(317));
                        o[Rt] = t } else rr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    ze(t), o = !1 } else yt !== null && (Xs(yt), yt = null), o = !0; if (!o) return t.flags & 65536 ? t : null } return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (se.current & 1) !== 0 ? we === 0 && (we = 3) : qa())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
        case 4:
            return or(), Hs(e, t), e === null && ei(t.stateNode.containerInfo), ze(t), null;
        case 10:
            return Da(t.type._context), ze(t), null;
        case 17:
            return Ge(t.type) && co(), ze(t), null;
        case 19:
            if (oe(se), o = t.memoizedState, o === null) return ze(t), null; if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
                if (r) _r(o, !1);
                else { if (we !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null;) { if (l = vo(e), l !== null) { for (t.flags |= 128, _r(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return re(se, se.current & 1 | 2), t.child }
                            e = e.sibling }
                    o.tail !== null && he() > sr && (t.flags |= 128, r = !0, _r(o, !1), t.lanes = 4194304) }
            else { if (!r)
                    if (e = vo(l), e !== null) { if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _r(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !le) return ze(t), null } else 2 * he() - o.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, _r(o, !1), t.lanes = 4194304);
                o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l) } return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = he(), t.sibling = null, n = se.current, re(se, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
        case 22:
        case 23:
            return Za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Je & 1073741824) !== 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
        case 24:
            return null;
        case 25:
            return null } throw Error(P(156, t.tag)) }

function P0(e, t) { switch (Aa(t), t.tag) {
        case 1:
            return Ge(t.type) && co(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return or(), oe(Ve), oe(De), Ua(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ba(t), null;
        case 13:
            if (oe(se), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(P(340));
                rr() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return oe(se), null;
        case 4:
            return or(), null;
        case 10:
            return Da(t.type._context), null;
        case 22:
        case 23:
            return Za(), null;
        case 24:
            return null;
        default:
            return null } }
var Ii = !1,
    Ie = !1,
    _0 = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;

function Gn(e, t) { var n = e.ref; if (n !== null)
        if (typeof n == "function") try { n(null) } catch (r) { de(e, t, r) } else n.current = null }

function bs(e, t, n) { try { n() } catch (r) { de(e, t, r) } }
var xc = !1;

function N0(e, t) { if (Os = lo, e = pf(), La(e)) { if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else e: { n = (n = e.ownerDocument) && n.defaultView || window; var r = n.getSelection && n.getSelection(); if (r && r.rangeCount !== 0) { n = r.anchorNode; var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset; try { n.nodeType, o.nodeType } catch { n = null; break e } var l = 0,
                    s = -1,
                    a = -1,
                    u = 0,
                    d = 0,
                    h = e,
                    m = null;
                t: for (;;) { for (var v; h !== n || i !== 0 && h.nodeType !== 3 || (s = l + i), h !== o || r !== 0 && h.nodeType !== 3 || (a = l + r), h.nodeType === 3 && (l += h.nodeValue.length), (v = h.firstChild) !== null;) m = h, h = v; for (;;) { if (h === e) break t; if (m === n && ++u === i && (s = l), m === o && ++d === r && (a = l), (v = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode }
                    h = v }
                n = s === -1 || a === -1 ? null : { start: s, end: a } } else n = null }
        n = n || { start: 0, end: 0 } } else n = null; for (Ps = { focusedElem: e, selectionRange: n }, lo = !1, D = t; D !== null;)
        if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
        else
            for (; D !== null;) { t = D; try { var y = t.alternate; if ((t.flags & 1024) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) { var w = y.memoizedProps,
                                    _ = y.memoizedState,
                                    p = t.stateNode,
                                    c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : mt(t.type, w), _);
                                p.__reactInternalSnapshotBeforeUpdate = c } break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement); break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163)) } } catch (S) { de(t, t.return, S) } if (e = t.sibling, e !== null) { e.return = t.return, D = e; break }
                D = t.return }
        return y = xc, xc = !1, y }

function Hr(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) { var i = r = r.next;
        do { if ((i.tag & e) === e) { var o = i.destroy;
                i.destroy = void 0, o !== void 0 && bs(t, n, o) }
            i = i.next } while (i !== r) } }

function Bo(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) { var n = t = t.next;
        do { if ((n.tag & e) === e) { var r = n.create;
                n.destroy = r() }
            n = n.next } while (n !== t) } }

function Ws(e) { var t = e.ref; if (t !== null) { var n = e.stateNode; switch (e.tag) {
            case 5:
                e = n; break;
            default:
                e = n }
        typeof t == "function" ? t(e) : t.current = e } }

function cp(e) { var t = e.alternate;
    t !== null && (e.alternate = null, cp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rt], delete t[ni], delete t[Ls], delete t[d0], delete t[f0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null }

function dp(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Sc(e) { e: for (;;) { for (; e.sibling === null;) { if (e.return === null || dp(e.return)) return null;
            e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } }

function Vs(e, t, n) { var r = e.tag; if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = uo));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Vs(e, t, n), e = e.sibling; e !== null;) Vs(e, t, n), e = e.sibling }

function Gs(e, t, n) { var r = e.tag; if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Gs(e, t, n), e = e.sibling; e !== null;) Gs(e, t, n), e = e.sibling }
var Pe = null,
    gt = !1;

function bt(e, t, n) { for (n = n.child; n !== null;) fp(e, t, n), n = n.sibling }

function fp(e, t, n) { if (Ot && typeof Ot.onCommitFiberUnmount == "function") try { Ot.onCommitFiberUnmount(Ao, n) } catch {}
    switch (n.tag) {
        case 5:
            Ie || Gn(n, t);
        case 6:
            var r = Pe,
                i = gt;
            Pe = null, bt(e, t, n), Pe = r, gt = i, Pe !== null && (gt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode)); break;
        case 18:
            Pe !== null && (gt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Ml(e.parentNode, n) : e.nodeType === 1 && Ml(e, n), Jr(e)) : Ml(Pe, n.stateNode)); break;
        case 4:
            r = Pe, i = gt, Pe = n.stateNode.containerInfo, gt = !0, bt(e, t, n), Pe = r, gt = i; break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) { i = r = r.next;
                do { var o = i,
                        l = o.destroy;
                    o = o.tag, l !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && bs(n, t, l), i = i.next } while (i !== r) }
            bt(e, t, n); break;
        case 1:
            if (!Ie && (Gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (s) { de(n, t, s) }
            bt(e, t, n); break;
        case 21:
            bt(e, t, n); break;
        case 22:
            n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, bt(e, t, n), Ie = r) : bt(e, t, n); break;
        default:
            bt(e, t, n) } }

function Cc(e) { var t = e.updateQueue; if (t !== null) { e.updateQueue = null; var n = e.stateNode;
        n === null && (n = e.stateNode = new _0), t.forEach(function(r) { var i = j0.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i)) }) } }

function ht(e, t) { var n = t.deletions; if (n !== null)
        for (var r = 0; r < n.length; r++) { var i = n[r]; try { var o = e,
                    l = t,
                    s = l;
                e: for (; s !== null;) { switch (s.tag) {
                        case 5:
                            Pe = s.stateNode, gt = !1; break e;
                        case 3:
                            Pe = s.stateNode.containerInfo, gt = !0; break e;
                        case 4:
                            Pe = s.stateNode.containerInfo, gt = !0; break e }
                    s = s.return }
                if (Pe === null) throw Error(P(160));
                fp(o, l, i), Pe = null, gt = !1; var a = i.alternate;
                a !== null && (a.return = null), i.return = null } catch (u) { de(i, t, u) } }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) pp(t, e), t = t.sibling }

function pp(e, t) { var n = e.alternate,
        r = e.flags; switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ht(t, e), kt(e), r & 4) { try { Hr(3, e, e.return), Bo(3, e) } catch (w) { de(e, e.return, w) } try { Hr(5, e, e.return) } catch (w) { de(e, e.return, w) } } break;
        case 1:
            ht(t, e), kt(e), r & 512 && n !== null && Gn(n, n.return); break;
        case 5:
            if (ht(t, e), kt(e), r & 512 && n !== null && Gn(n, n.return), e.flags & 32) { var i = e.stateNode; try { Qr(i, "") } catch (w) { de(e, e.return, w) } } if (r & 4 && (i = e.stateNode, i != null)) { var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    a = e.updateQueue; if (e.updateQueue = null, a !== null) try { s === "input" && o.type === "radio" && o.name != null && Td(i, o), gs(s, l); var u = gs(s, o); for (l = 0; l < a.length; l += 2) { var d = a[l],
                            h = a[l + 1];
                        d === "style" ? jd(i, h) : d === "dangerouslySetInnerHTML" ? Dd(i, h) : d === "children" ? Qr(i, h) : ya(i, d, h, u) } switch (s) {
                        case "input":
                            ds(i, o); break;
                        case "textarea":
                            zd(i, o); break;
                        case "select":
                            var m = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple; var v = o.value;
                            v != null ? Kn(i, !!o.multiple, v, !1) : m !== !!o.multiple && (o.defaultValue != null ? Kn(i, !!o.multiple, o.defaultValue, !0) : Kn(i, !!o.multiple, o.multiple ? [] : "", !1)) }
                    i[ni] = o } catch (w) { de(e, e.return, w) } } break;
        case 6:
            if (ht(t, e), kt(e), r & 4) { if (e.stateNode === null) throw Error(P(162));
                i = e.stateNode, o = e.memoizedProps; try { i.nodeValue = o } catch (w) { de(e, e.return, w) } } break;
        case 3:
            if (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try { Jr(t.containerInfo) } catch (w) { de(e, e.return, w) }
            break;
        case 4:
            ht(t, e), kt(e); break;
        case 13:
            ht(t, e), kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Xa = he())), r & 4 && Cc(e); break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || d, ht(t, e), Ie = u) : ht(t, e), kt(e), r & 8192) { if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && (e.mode & 1) !== 0)
                    for (D = e, d = e.child; d !== null;) { for (h = D = d; D !== null;) { switch (m = D, v = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hr(4, m, m.return); break;
                                case 1:
                                    Gn(m, m.return); var y = m.stateNode; if (typeof y.componentWillUnmount == "function") { r = m, n = m.return; try { t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount() } catch (w) { de(r, n, w) } } break;
                                case 5:
                                    Gn(m, m.return); break;
                                case 22:
                                    if (m.memoizedState !== null) { Ec(h); continue } }
                            v !== null ? (v.return = m, D = v) : Ec(h) }
                        d = d.sibling }
                e: for (d = null, h = e;;) { if (h.tag === 5) { if (d === null) { d = h; try { i = h.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, a = h.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Fd("display", l)) } catch (w) { de(e, e.return, w) } } } else if (h.tag === 6) { if (d === null) try { h.stateNode.nodeValue = u ? "" : h.memoizedProps } catch (w) { de(e, e.return, w) } } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) { h.child.return = h, h = h.child; continue } if (h === e) break e; for (; h.sibling === null;) { if (h.return === null || h.return === e) break e;
                        d === h && (d = null), h = h.return }
                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling } } break;
        case 19:
            ht(t, e), kt(e), r & 4 && Cc(e); break;
        case 21:
            break;
        default:
            ht(t, e), kt(e) } }

function kt(e) { var t = e.flags; if (t & 2) { try { e: { for (var n = e.return; n !== null;) { if (dp(n)) { var r = n; break e }
                    n = n.return } throw Error(P(160)) } switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Qr(i, ""), r.flags &= -33); var o = Sc(e);
                    Gs(e, o, i); break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Sc(e);
                    Vs(e, s, l); break;
                default:
                    throw Error(P(161)) } }
        catch (a) { de(e, e.return, a) }
        e.flags &= -3 }
    t & 4096 && (e.flags &= -4097) }

function L0(e, t, n) { D = e, hp(e) }

function hp(e, t, n) { for (var r = (e.mode & 1) !== 0; D !== null;) { var i = D,
            o = i.child; if (i.tag === 22 && r) { var l = i.memoizedState !== null || Ii; if (!l) { var s = i.alternate,
                    a = s !== null && s.memoizedState !== null || Ie;
                s = Ii; var u = Ie; if (Ii = l, (Ie = a) && !u)
                    for (D = i; D !== null;) l = D, a = l.child, l.tag === 22 && l.memoizedState !== null ? Rc(i) : a !== null ? (a.return = l, D = a) : Rc(i); for (; o !== null;) D = o, hp(o), o = o.sibling;
                D = i, Ii = s, Ie = u }
            kc(e) } else(i.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = i, D = o) : kc(e) } }

function kc(e) { for (; D !== null;) { var t = D; if ((t.flags & 8772) !== 0) { var n = t.alternate; try { if ((t.flags & 8772) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ie || Bo(5, t); break;
                    case 1:
                        var r = t.stateNode; if (t.flags & 4 && !Ie)
                            if (n === null) r.componentDidMount();
                            else { var i = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate) }
                        var o = t.updateQueue;
                        o !== null && lc(t, o, r); break;
                    case 3:
                        var l = t.updateQueue; if (l !== null) { if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode; break;
                                case 1:
                                    n = t.child.stateNode }
                            lc(t, l, n) } break;
                    case 5:
                        var s = t.stateNode; if (n === null && t.flags & 4) { n = s; var a = t.memoizedProps; switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus(); break;
                                case "img":
                                    a.src && (n.src = a.src) } } break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) { var u = t.alternate; if (u !== null) { var d = u.memoizedState; if (d !== null) { var h = d.dehydrated;
                                    h !== null && Jr(h) } } } break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163)) }
                Ie || t.flags & 512 && Ws(t) } catch (m) { de(t, t.return, m) } } if (t === e) { D = null; break } if (n = t.sibling, n !== null) { n.return = t.return, D = n; break }
        D = t.return } }

function Ec(e) { for (; D !== null;) { var t = D; if (t === e) { D = null; break } var n = t.sibling; if (n !== null) { n.return = t.return, D = n; break }
        D = t.return } }

function Rc(e) { for (; D !== null;) { var t = D; try { switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return; try { Bo(4, t) } catch (a) { de(t, n, a) } break;
                case 1:
                    var r = t.stateNode; if (typeof r.componentDidMount == "function") { var i = t.return; try { r.componentDidMount() } catch (a) { de(t, i, a) } } var o = t.return; try { Ws(t) } catch (a) { de(t, o, a) } break;
                case 5:
                    var l = t.return; try { Ws(t) } catch (a) { de(t, l, a) } } } catch (a) { de(t, t.return, a) } if (t === e) { D = null; break } var s = t.sibling; if (s !== null) { s.return = t.return, D = s; break }
        D = t.return } }
var $0 = Math.ceil,
    So = Bt.ReactCurrentDispatcher,
    Ya = Bt.ReactCurrentOwner,
    at = Bt.ReactCurrentBatchConfig,
    Q = 0,
    Se = null,
    ge = null,
    _e = 0,
    Je = 0,
    Qn = pn(0),
    we = 0,
    ai = null,
    _n = 0,
    Uo = 0,
    Ka = 0,
    br = null,
    be = null,
    Xa = 0,
    sr = 1 / 0,
    Nt = null,
    Co = !1,
    Qs = null,
    rn = null,
    Di = !1,
    Xt = null,
    ko = 0,
    Wr = 0,
    Ys = null,
    Ki = -1,
    Xi = 0;

function Me() { return (Q & 6) !== 0 ? he() : Ki !== -1 ? Ki : Ki = he() }

function on(e) { return (e.mode & 1) === 0 ? 1 : (Q & 2) !== 0 && _e !== 0 ? _e & -_e : h0.transition !== null ? (Xi === 0 && (Xi = Xd()), Xi) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rf(e.type)), e) }

function xt(e, t, n, r) { if (50 < Wr) throw Wr = 0, Ys = null, Error(P(185));
    fi(e, n, r), ((Q & 2) === 0 || e !== Se) && (e === Se && ((Q & 2) === 0 && (Uo |= n), we === 4 && Yt(e, _e)), Qe(e, r), n === 1 && Q === 0 && (t.mode & 1) === 0 && (sr = he() + 500, Fo && hn())) }

function Qe(e, t) { var n = e.callbackNode;
    hm(e, t); var r = oo(e, e === Se ? _e : 0); if (r === 0) n !== null && zu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) { if (n != null && zu(n), t === 1) e.tag === 0 ? p0(Oc.bind(null, e)) : kf(Oc.bind(null, e)), u0(function() {
            (Q & 6) === 0 && hn() }), n = null;
        else { switch (Jd(r)) {
                case 1:
                    n = Ca; break;
                case 4:
                    n = Yd; break;
                case 16:
                    n = io; break;
                case 536870912:
                    n = Kd; break;
                default:
                    n = io }
            n = Cp(n, mp.bind(null, e)) }
        e.callbackPriority = t, e.callbackNode = n } }

function mp(e, t) { if (Ki = -1, Xi = 0, (Q & 6) !== 0) throw Error(P(327)); var n = e.callbackNode; if (er() && e.callbackNode !== n) return null; var r = oo(e, e === Se ? _e : 0); if (r === 0) return null; if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Eo(e, r);
    else { t = r; var i = Q;
        Q |= 2; var o = yp();
        (Se !== e || _e !== t) && (Nt = null, sr = he() + 500, Cn(e, t));
        do try { z0(); break } catch (s) { gp(e, s) }
        while (1);
        Ia(), So.current = o, Q = i, ge !== null ? t = 0 : (Se = null, _e = 0, t = we) } if (t !== 0) { if (t === 2 && (i = Ss(e), i !== 0 && (r = i, t = Ks(e, i))), t === 1) throw n = ai, Cn(e, 0), Yt(e, r), Qe(e, he()), n; if (t === 6) Yt(e, r);
        else { if (i = e.current.alternate, (r & 30) === 0 && !A0(i) && (t = Eo(e, r), t === 2 && (o = Ss(e), o !== 0 && (r = o, t = Ks(e, o))), t === 1)) throw n = ai, Cn(e, 0), Yt(e, r), Qe(e, he()), n; switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    vn(e, be, Nt); break;
                case 3:
                    if (Yt(e, r), (r & 130023424) === r && (t = Xa + 500 - he(), 10 < t)) { if (oo(e, 0) !== 0) break; if (i = e.suspendedLanes, (i & r) !== r) { Me(), e.pingedLanes |= e.suspendedLanes & i; break }
                        e.timeoutHandle = Ns(vn.bind(null, e, be, Nt), t); break }
                    vn(e, be, Nt); break;
                case 4:
                    if (Yt(e, r), (r & 4194240) === r) break; for (t = e.eventTimes, i = -1; 0 < r;) { var l = 31 - wt(r);
                        o = 1 << l, l = t[l], l > i && (i = l), r &= ~o } if (r = i, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $0(r / 1960)) - r, 10 < r) { e.timeoutHandle = Ns(vn.bind(null, e, be, Nt), r); break }
                    vn(e, be, Nt); break;
                case 5:
                    vn(e, be, Nt); break;
                default:
                    throw Error(P(329)) } } } return Qe(e, he()), e.callbackNode === n ? mp.bind(null, e) : null }

function Ks(e, t) { var n = br; return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = Eo(e, t), e !== 2 && (t = be, be = n, t !== null && Xs(t)), e }

function Xs(e) { be === null ? be = e : be.push.apply(be, e) }

function A0(e) { for (var t = e;;) { if (t.flags & 16384) { var n = t.updateQueue; if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) { var i = n[r],
                        o = i.getSnapshot;
                    i = i.value; try { if (!Ct(o(), i)) return !1 } catch { return !1 } } } if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else { if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return !0;
                t = t.return }
            t.sibling.return = t.return, t = t.sibling } } return !0 }

function Yt(e, t) { for (t &= ~Ka, t &= ~Uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) { var n = 31 - wt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r } }

function Oc(e) { if ((Q & 6) !== 0) throw Error(P(327));
    er(); var t = oo(e, 0); if ((t & 1) === 0) return Qe(e, he()), null; var n = Eo(e, t); if (e.tag !== 0 && n === 2) { var r = Ss(e);
        r !== 0 && (t = r, n = Ks(e, r)) } if (n === 1) throw n = ai, Cn(e, 0), Yt(e, t), Qe(e, he()), n; if (n === 6) throw Error(P(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, be, Nt), Qe(e, he()), null }

function Ja(e, t) { var n = Q;
    Q |= 1; try { return e(t) } finally { Q = n, Q === 0 && (sr = he() + 500, Fo && hn()) } }

function Nn(e) { Xt !== null && Xt.tag === 0 && (Q & 6) === 0 && er(); var t = Q;
    Q |= 1; var n = at.transition,
        r = q; try { if (at.transition = null, q = 1, e) return e() } finally { q = r, at.transition = n, Q = t, (Q & 6) === 0 && hn() } }

function Za() { Je = Qn.current, oe(Qn) }

function Cn(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, a0(n)), ge !== null)
        for (n = ge.return; n !== null;) { var r = n; switch (Aa(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && co(); break;
                case 3:
                    or(), oe(Ve), oe(De), Ua(); break;
                case 5:
                    Ba(r); break;
                case 4:
                    or(); break;
                case 13:
                    oe(se); break;
                case 19:
                    oe(se); break;
                case 10:
                    Da(r.type._context); break;
                case 22:
                case 23:
                    Za() }
            n = n.return }
    if (Se = e, ge = e = ln(e.current, null), _e = Je = t, we = 0, ai = null, Ka = Uo = _n = 0, be = br = null, xn !== null) { for (t = 0; t < xn.length; t++)
            if (n = xn[t], r = n.interleaved, r !== null) { n.interleaved = null; var i = r.next,
                    o = n.pending; if (o !== null) { var l = o.next;
                    o.next = i, r.next = l }
                n.pending = r }
        xn = null } return e }

function gp(e, t) { do { var n = ge; try { if (Ia(), Gi.current = xo, wo) { for (var r = ae.memoizedState; r !== null;) { var i = r.queue;
                    i !== null && (i.pending = null), r = r.next }
                wo = !1 } if (Pn = 0, xe = ve = ae = null, Ur = !1, oi = 0, Ya.current = null, n === null || n.return === null) { we = 1, ai = t, ge = null; break }
            e: { var o = e,
                    l = n.return,
                    s = n,
                    a = t; if (t = _e, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") { var u = a,
                        d = s,
                        h = d.tag; if ((d.mode & 1) === 0 && (h === 0 || h === 11 || h === 15)) { var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null) } var v = pc(l); if (v !== null) { v.flags &= -257, hc(v, l, s, o, t), v.mode & 1 && fc(o, u, t), t = v, a = u; var y = t.updateQueue; if (y === null) { var w = new Set;
                            w.add(a), t.updateQueue = w } else y.add(a); break e } else { if ((t & 1) === 0) { fc(o, u, t), qa(); break e }
                        a = Error(P(426)) } } else if (le && s.mode & 1) { var _ = pc(l); if (_ !== null) {
                        (_.flags & 65536) === 0 && (_.flags |= 256), hc(_, l, s, o, t), Ta(lr(a, s)); break e } }
                o = a = lr(a, s), we !== 4 && (we = 2), br === null ? br = [o] : br.push(o), o = l;do { switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t; var p = qf(o, a, t);
                            oc(o, p); break e;
                        case 1:
                            s = a; var c = o.type,
                                g = o.stateNode; if ((o.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (rn === null || !rn.has(g)))) { o.flags |= 65536, t &= -t, o.lanes |= t; var S = ep(o, s, t);
                                oc(o, S); break e } }
                    o = o.return } while (o !== null) }
            wp(n) } catch (C) { t = C, ge === n && n !== null && (ge = n = n.return); continue } break } while (1) }

function yp() { var e = So.current; return So.current = xo, e === null ? xo : e }

function qa() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || (_n & 268435455) === 0 && (Uo & 268435455) === 0 || Yt(Se, _e) }

function Eo(e, t) { var n = Q;
    Q |= 2; var r = yp();
    (Se !== e || _e !== t) && (Nt = null, Cn(e, t));
    do try { T0(); break } catch (i) { gp(e, i) }
    while (1);
    if (Ia(), Q = n, So.current = r, ge !== null) throw Error(P(261)); return Se = null, _e = 0, we }

function T0() { for (; ge !== null;) vp(ge) }

function z0() { for (; ge !== null && !om();) vp(ge) }

function vp(e) { var t = Sp(e.alternate, e, Je);
    e.memoizedProps = e.pendingProps, t === null ? wp(e) : ge = t, Ya.current = null }

function wp(e) { var t = e;
    do { var n = t.alternate; if (e = t.return, (t.flags & 32768) === 0) { if (n = O0(n, t, Je), n !== null) { ge = n; return } } else { if (n = P0(n, t), n !== null) { n.flags &= 32767, ge = n; return } if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { we = 6, ge = null; return } } if (t = t.sibling, t !== null) { ge = t; return }
        ge = t = e } while (t !== null);
    we === 0 && (we = 5) }

function vn(e, t, n) { var r = q,
        i = at.transition; try { at.transition = null, q = 1, I0(e, t, n, r) } finally { at.transition = i, q = r } return null }

function I0(e, t, n, r) { do er(); while (Xt !== null); if ((Q & 6) !== 0) throw Error(P(327));
    n = e.finishedWork; var i = e.finishedLanes; if (n === null) return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
    e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (mm(e, o), e === Se && (ge = Se = null, _e = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Di || (Di = !0, Cp(io, function() { return er(), null })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) { o = at.transition, at.transition = null; var l = q;
        q = 1; var s = Q;
        Q |= 4, Ya.current = null, N0(e, n), pp(n, e), t0(Ps), lo = !!Os, Ps = Os = null, e.current = n, L0(n), lm(), Q = s, q = l, at.transition = o } else e.current = n; if (Di && (Di = !1, Xt = e, ko = i), o = e.pendingLanes, o === 0 && (rn = null), um(n.stateNode), Qe(e, he()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Co) throw Co = !1, e = Qs, Qs = null, e; return (ko & 1) !== 0 && e.tag !== 0 && er(), o = e.pendingLanes, (o & 1) !== 0 ? e === Ys ? Wr++ : (Wr = 0, Ys = e) : Wr = 0, hn(), null }

function er() { if (Xt !== null) { var e = Jd(ko),
            t = at.transition,
            n = q; try { if (at.transition = null, q = 16 > e ? 16 : e, Xt === null) var r = !1;
            else { if (e = Xt, Xt = null, ko = 0, (Q & 6) !== 0) throw Error(P(331)); var i = Q; for (Q |= 4, D = e.current; D !== null;) { var o = D,
                        l = o.child; if ((D.flags & 16) !== 0) { var s = o.deletions; if (s !== null) { for (var a = 0; a < s.length; a++) { var u = s[a]; for (D = u; D !== null;) { var d = D; switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hr(8, d, o) } var h = d.child; if (h !== null) h.return = d, D = h;
                                    else
                                        for (; D !== null;) { d = D; var m = d.sibling,
                                                v = d.return; if (cp(d), d === u) { D = null; break } if (m !== null) { m.return = v, D = m; break }
                                            D = v } } } var y = o.alternate; if (y !== null) { var w = y.child; if (w !== null) { y.child = null;
                                    do { var _ = w.sibling;
                                        w.sibling = null, w = _ } while (w !== null) } }
                            D = o } } if ((o.subtreeFlags & 2064) !== 0 && l !== null) l.return = o, D = l;
                    else e: for (; D !== null;) { if (o = D, (o.flags & 2048) !== 0) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Hr(9, o, o.return) }
                        var p = o.sibling; if (p !== null) { p.return = o.return, D = p; break e }
                        D = o.return } } var c = e.current; for (D = c; D !== null;) { l = D; var g = l.child; if ((l.subtreeFlags & 2064) !== 0 && g !== null) g.return = l, D = g;
                    else e: for (l = c; D !== null;) { if (s = D, (s.flags & 2048) !== 0) try { switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Bo(9, s) } } catch (C) { de(s, s.return, C) }
                        if (s === l) { D = null; break e } var S = s.sibling; if (S !== null) { S.return = s.return, D = S; break e }
                        D = s.return } } if (Q = i, hn(), Ot && typeof Ot.onPostCommitFiberRoot == "function") try { Ot.onPostCommitFiberRoot(Ao, e) } catch {}
                r = !0 } return r } finally { q = n, at.transition = t } } return !1 }

function Pc(e, t, n) { t = lr(n, t), t = qf(e, t, 1), e = nn(e, t, 1), t = Me(), e !== null && (fi(e, 1, t), Qe(e, t)) }

function de(e, t, n) { if (e.tag === 3) Pc(e, e, n);
    else
        for (; t !== null;) { if (t.tag === 3) { Pc(t, e, n); break } else if (t.tag === 1) { var r = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) { e = lr(n, e), e = ep(t, e, 1), t = nn(t, e, 1), e = Me(), t !== null && (fi(t, 1, e), Qe(t, e)); break } }
            t = t.return } }

function D0(e, t, n) { var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (_e & n) === n && (we === 4 || we === 3 && (_e & 130023424) === _e && 500 > he() - Xa ? Cn(e, 0) : Ka |= n), Qe(e, t) }

function xp(e, t) { t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Oi, Oi <<= 1, (Oi & 130023424) === 0 && (Oi = 4194304))); var n = Me();
    e = jt(e, t), e !== null && (fi(e, t, n), Qe(e, n)) }

function F0(e) { var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), xp(e, n) }

function j0(e, t) { var n = 0; switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane); break;
        case 19:
            r = e.stateNode; break;
        default:
            throw Error(P(314)) }
    r !== null && r.delete(t), xp(e, n) }
var Sp;
Sp = function(e, t, n) { if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current) We = !0;
        else { if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return We = !1, R0(e, t, n);
            We = (e.flags & 131072) !== 0 }
    else We = !1, le && (t.flags & 1048576) !== 0 && Ef(t, ho, t.index); switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Yi(e, t), e = t.pendingProps; var i = nr(t, De.current);
            qn(t, n), i = ba(null, t, r, e, i, n); var o = Wa(); return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (o = !0, fo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ja(t), i.updater = jo, t.stateNode = i, i._reactInternals = t, Ds(t, r, e, n), t = Ms(null, t, r, !0, o, n)) : (t.tag = 0, le && o && $a(t), je(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: { switch (Yi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = B0(r), e = mt(r, e), i) {
                    case 0:
                        t = js(null, t, r, e, n); break e;
                    case 1:
                        t = yc(null, t, r, e, n); break e;
                    case 11:
                        t = mc(null, t, r, e, n); break e;
                    case 14:
                        t = gc(null, t, r, mt(r.type, e), n); break e } throw Error(P(306, r, "")) }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), js(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), yc(e, t, r, i, n);
        case 3:
            e: { if (ip(t), e === null) throw Error(P(387));r = t.pendingProps, o = t.memoizedState, i = o.element, _f(e, t), yo(t, r, null, n); var l = t.memoizedState; if (r = l.element, o.isDehydrated)
                    if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) { i = lr(Error(P(423)), t), t = vc(e, t, r, n, i); break e } else if (r !== i) { i = lr(Error(P(424)), t), t = vc(e, t, r, n, i); break e } else
                    for (Ze = tn(t.stateNode.containerInfo.firstChild), qe = t, le = !0, yt = null, n = Af(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else { if (rr(), r === i) { t = Mt(e, t, n); break e }
                    je(e, t, r, n) }
                t = t.child }
            return t;
        case 5:
            return Tf(t), e === null && Ts(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, _s(r, i) ? l = null : o !== null && _s(r, o) && (t.flags |= 32), rp(e, t), je(e, t, l, n), t.child;
        case 6:
            return e === null && Ts(t), null;
        case 13:
            return op(e, t, n);
        case 4:
            return Ma(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ir(t, null, r, n) : je(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), mc(e, t, r, i, n);
        case 7:
            return je(e, t, t.pendingProps, n), t.child;
        case 8:
            return je(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return je(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: { if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, re(mo, r._currentValue), r._currentValue = l, o !== null)
                    if (Ct(o.value, l)) { if (o.children === i.children && !Ve.current) { t = Mt(e, t, n); break e } } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) { var s = o.dependencies; if (s !== null) { l = o.child; for (var a = s.firstContext; a !== null;) { if (a.context === r) { if (o.tag === 1) { a = zt(-1, n & -n), a.tag = 2; var u = o.updateQueue; if (u !== null) { u = u.shared; var d = u.pending;
                                                d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a } }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), zs(o.return, n, t), s.lanes |= n; break }
                                    a = a.next } } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) { if (l = o.return, l === null) throw Error(P(341));
                                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), zs(l, n, t), l = o.sibling } else l = o.child; if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null;) { if (l === t) { l = null; break } if (o = l.sibling, o !== null) { o.return = l.return, l = o; break }
                                    l = l.return }
                            o = l }
                    je(e, t, i.children, n), t = t.child }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, qn(t, n), i = ct(i), r = r(i), t.flags |= 1, je(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = mt(r, t.pendingProps), i = mt(r.type, i), gc(e, t, r, i, n);
        case 15:
            return tp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), Yi(e, t), t.tag = 1, Ge(r) ? (e = !0, fo(t)) : e = !1, qn(t, n), Lf(t, r, i), Ds(t, r, i, n), Ms(null, t, r, !0, e, n);
        case 19:
            return lp(e, t, n);
        case 22:
            return np(e, t, n) } throw Error(P(156, t.tag)) };

function Cp(e, t) { return Qd(e, t) }

function M0(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function st(e, t, n, r) { return new M0(e, t, n, r) }

function eu(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function B0(e) { if (typeof e == "function") return eu(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === wa) return 11; if (e === xa) return 14 } return 2 }

function ln(e, t) { var n = e.alternate; return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

function Ji(e, t, n, r, i, o) { var l = 2; if (r = e, typeof e == "function") eu(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case Fn:
            return kn(n.children, i, o, t);
        case va:
            l = 8, i |= 8; break;
        case ls:
            return e = st(12, n, t, i | 2), e.elementType = ls, e.lanes = o, e;
        case ss:
            return e = st(13, n, t, i), e.elementType = ss, e.lanes = o, e;
        case as:
            return e = st(19, n, t, i), e.elementType = as, e.lanes = o, e;
        case Ld:
            return Ho(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case _d:
                    l = 10; break e;
                case Nd:
                    l = 9; break e;
                case wa:
                    l = 11; break e;
                case xa:
                    l = 14; break e;
                case Vt:
                    l = 16, r = null; break e }
            throw Error(P(130, e == null ? e : typeof e, "")) }
    return t = st(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t }

function kn(e, t, n, r) { return e = st(7, e, r, t), e.lanes = n, e }

function Ho(e, t, n, r) { return e = st(22, e, r, t), e.elementType = Ld, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

function Ql(e, t, n) { return e = st(6, e, null, t), e.lanes = n, e }

function Yl(e, t, n) { return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function U0(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null }

function tu(e, t, n, r, i, o, l, s, a) { return e = new U0(e, t, n, s, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = st(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ja(o), e }

function H0(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n } }

function kp(e) { if (!e) return dn;
    e = e._reactInternals;
    e: { if (Tn(e) !== e || e.tag !== 1) throw Error(P(170)); var t = e;do { switch (t.tag) {
                case 3:
                    t = t.stateNode.context; break e;
                case 1:
                    if (Ge(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e } }
            t = t.return } while (t !== null); throw Error(P(171)) }
    if (e.tag === 1) { var n = e.type; if (Ge(n)) return Cf(e, n, t) } return t }

function Ep(e, t, n, r, i, o, l, s, a) { return e = tu(n, r, !0, e, i, o, l, s, a), e.context = kp(null), n = e.current, r = Me(), i = on(n), o = zt(r, i), o.callback = t != null ? t : null, nn(n, o, i), e.current.lanes = i, fi(e, i, r), Qe(e, r), e }

function bo(e, t, n, r) { var i = t.current,
        o = Me(),
        l = on(i); return n = kp(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(i, t, l), e !== null && (xt(e, i, l, o), Vi(e, i, l)), l }

function Ro(e) { if (e = e.current, !e.child) return null; switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode } }

function _c(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t } }

function nu(e, t) { _c(e, t), (e = e.alternate) && _c(e, t) }

function b0() { return null }
var Rp = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function ru(e) { this._internalRoot = e }
Wo.prototype.render = ru.prototype.render = function(e) { var t = this._internalRoot; if (t === null) throw Error(P(409));
    bo(e, t, null, null) };
Wo.prototype.unmount = ru.prototype.unmount = function() { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var t = e.containerInfo;
        Nn(function() { bo(null, e, null, null) }), t[Ft] = null } };

function Wo(e) { this._internalRoot = e }
Wo.prototype.unstable_scheduleHydration = function(e) { if (e) { var t = ef();
        e = { blockedOn: null, target: e, priority: t }; for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
        Qt.splice(n, 0, e), n === 0 && nf(e) } };

function iu(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function Vo(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function Nc() {}

function W0(e, t, n, r, i) { if (i) { if (typeof r == "function") { var o = r;
            r = function() { var u = Ro(l);
                o.call(u) } } var l = Ep(t, r, e, 0, null, !1, !1, "", Nc); return e._reactRootContainer = l, e[Ft] = l.current, ei(e.nodeType === 8 ? e.parentNode : e), Nn(), l } for (; i = e.lastChild;) e.removeChild(i); if (typeof r == "function") { var s = r;
        r = function() { var u = Ro(a);
            s.call(u) } } var a = tu(e, 0, !1, null, null, !1, !1, "", Nc); return e._reactRootContainer = a, e[Ft] = a.current, ei(e.nodeType === 8 ? e.parentNode : e), Nn(function() { bo(t, a, n, r) }), a }

function Go(e, t, n, r, i) { var o = n._reactRootContainer; if (o) { var l = o; if (typeof i == "function") { var s = i;
            i = function() { var a = Ro(l);
                s.call(a) } }
        bo(t, l, e, i) } else l = W0(n, t, e, i, r); return Ro(l) }
Zd = function(e) { switch (e.tag) {
        case 3:
            var t = e.stateNode; if (t.current.memoizedState.isDehydrated) { var n = Tr(t.pendingLanes);
                n !== 0 && (ka(t, n | 1), Qe(t, he()), (Q & 6) === 0 && (sr = he() + 500, hn())) } break;
        case 13:
            Nn(function() { var r = jt(e, 1); if (r !== null) { var i = Me();
                    xt(r, e, 1, i) } }), nu(e, 1) } };
Ea = function(e) { if (e.tag === 13) { var t = jt(e, 134217728); if (t !== null) { var n = Me();
            xt(t, e, 134217728, n) }
        nu(e, 134217728) } };
qd = function(e) { if (e.tag === 13) { var t = on(e),
            n = jt(e, t); if (n !== null) { var r = Me();
            xt(n, e, t, r) }
        nu(e, t) } };
ef = function() { return q };
tf = function(e, t) { var n = q; try { return q = e, t() } finally { q = n } };
vs = function(e, t, n) { switch (t) {
        case "input":
            if (ds(e, n), t = n.name, n.type === "radio" && t != null) { for (n = e; n.parentNode;) n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) { var r = n[t]; if (r !== e && r.form === e.form) { var i = Do(r); if (!i) throw Error(P(90));
                        Ad(r), ds(r, i) } } } break;
        case "textarea":
            zd(e, n); break;
        case "select":
            t = n.value, t != null && Kn(e, !!n.multiple, t, !1) } };
Ud = Ja;
Hd = Nn;
var V0 = { usingClientEntryPoint: !1, Events: [hi, Un, Do, Md, Bd, Ja] },
    Nr = { findFiberByHostInstance: wn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    G0 = { bundleType: Nr.bundleType, version: Nr.version, rendererPackageName: Nr.rendererPackageName, rendererConfig: Nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Bt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Vd(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Nr.findFiberByHostInstance || b0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Fi.isDisabled && Fi.supportsFiber) try { Ao = Fi.inject(G0), Ot = Fi } catch {} }
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0;
tt.createPortal = function(e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!iu(t)) throw Error(P(200)); return H0(e, t, null, n) };
tt.createRoot = function(e, t) { if (!iu(e)) throw Error(P(299)); var n = !1,
        r = "",
        i = Rp; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = tu(e, 1, !1, null, null, n, !1, r, i), e[Ft] = t.current, ei(e.nodeType === 8 ? e.parentNode : e), new ru(t) };
tt.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e))); return e = Vd(t), e = e === null ? null : e.stateNode, e };
tt.flushSync = function(e) { return Nn(e) };
tt.hydrate = function(e, t, n) { if (!Vo(t)) throw Error(P(200)); return Go(null, e, t, !0, n) };
tt.hydrateRoot = function(e, t, n) { if (!iu(e)) throw Error(P(405)); var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        l = Rp; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ep(t, null, e, 1, n != null ? n : null, i, !1, o, l), e[Ft] = t.current, ei(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new Wo(t) };
tt.render = function(e, t, n) { if (!Vo(t)) throw Error(P(200)); return Go(null, e, t, !1, n) };
tt.unmountComponentAtNode = function(e) { if (!Vo(e)) throw Error(P(40)); return e._reactRootContainer ? (Nn(function() { Go(null, null, e, !1, function() { e._reactRootContainer = null, e[Ft] = null }) }), !0) : !1 };
tt.unstable_batchedUpdates = Ja;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!Vo(n)) throw Error(P(200)); if (e == null || e._reactInternals === void 0) throw Error(P(38)); return Go(e, t, n, !1, r) };
tt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t) } catch (n) { console.error(n) } }
    t(), e.exports = tt })(kd);
var Lc = kd.exports;
is.createRoot = Lc.createRoot, is.hydrateRoot = Lc.hydrateRoot;
var ou = { exports: {} },
    ee = {};
/**
 * @license React

 */
var lu = Symbol.for("react.element"),
    su = Symbol.for("react.portal"),
    Qo = Symbol.for("react.fragment"),
    Yo = Symbol.for("react.strict_mode"),
    Ko = Symbol.for("react.profiler"),
    Xo = Symbol.for("react.provider"),
    Jo = Symbol.for("react.context"),
    Q0 = Symbol.for("react.server_context"),
    Zo = Symbol.for("react.forward_ref"),
    qo = Symbol.for("react.suspense"),
    el = Symbol.for("react.suspense_list"),
    tl = Symbol.for("react.memo"),
    nl = Symbol.for("react.lazy"),
    Y0 = Symbol.for("react.offscreen"),
    Op;
Op = Symbol.for("react.module.reference");

function ft(e) { if (typeof e == "object" && e !== null) { var t = e.$$typeof; switch (t) {
            case lu:
                switch (e = e.type, e) {
                    case Qo:
                    case Ko:
                    case Yo:
                    case qo:
                    case el:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Q0:
                            case Jo:
                            case Zo:
                            case nl:
                            case tl:
                            case Xo:
                                return e;
                            default:
                                return t } }
            case su:
                return t } } }
ee.ContextConsumer = Jo;
ee.ContextProvider = Xo;
ee.Element = lu;
ee.ForwardRef = Zo;
ee.Fragment = Qo;
ee.Lazy = nl;
ee.Memo = tl;
ee.Portal = su;
ee.Profiler = Ko;
ee.StrictMode = Yo;
ee.Suspense = qo;
ee.SuspenseList = el;
ee.isAsyncMode = function() { return !1 };
ee.isConcurrentMode = function() { return !1 };
ee.isContextConsumer = function(e) { return ft(e) === Jo };
ee.isContextProvider = function(e) { return ft(e) === Xo };
ee.isElement = function(e) { return typeof e == "object" && e !== null && e.$$typeof === lu };
ee.isForwardRef = function(e) { return ft(e) === Zo };
ee.isFragment = function(e) { return ft(e) === Qo };
ee.isLazy = function(e) { return ft(e) === nl };
ee.isMemo = function(e) { return ft(e) === tl };
ee.isPortal = function(e) { return ft(e) === su };
ee.isProfiler = function(e) { return ft(e) === Ko };
ee.isStrictMode = function(e) { return ft(e) === Yo };
ee.isSuspense = function(e) { return ft(e) === qo };
ee.isSuspenseList = function(e) { return ft(e) === el };
ee.isValidElementType = function(e) { return typeof e == "string" || typeof e == "function" || e === Qo || e === Ko || e === Yo || e === qo || e === el || e === Y0 || typeof e == "object" && e !== null && (e.$$typeof === nl || e.$$typeof === tl || e.$$typeof === Xo || e.$$typeof === Jo || e.$$typeof === Zo || e.$$typeof === Op || e.getModuleId !== void 0) };
ee.typeOf = ft;
(function(e) { e.exports = ee })(ou);

function K0(e) {
    function t($, z, I, U, x) { for (var V = 0, L = 0, ce = 0, X = 0, Z, b, Ee = 0, He = 0, Y, Ae = Y = Z = 0, J = 0, Re = 0, xr = 0, Oe = 0, xi = I.length, Sr = xi - 1, pt, H = "", pe = "", Sl = "", Cl = "", Ht; J < xi;) { if (b = I.charCodeAt(J), J === Sr && L + X + ce + V !== 0 && (L !== 0 && (b = L === 47 ? 10 : 47), X = ce = V = 0, xi++, Sr++), L + X + ce + V === 0) { if (J === Sr && (0 < Re && (H = H.replace(m, "")), 0 < H.trim().length)) { switch (b) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            H += I.charAt(J) }
                    b = 59 } switch (b) {
                    case 123:
                        for (H = H.trim(), Z = H.charCodeAt(0), Y = 1, Oe = ++J; J < xi;) { switch (b = I.charCodeAt(J)) {
                                case 123:
                                    Y++; break;
                                case 125:
                                    Y--; break;
                                case 47:
                                    switch (b = I.charCodeAt(J + 1)) {
                                        case 42:
                                        case 47:
                                            e: { for (Ae = J + 1; Ae < Sr; ++Ae) switch (I.charCodeAt(Ae)) {
                                                    case 47:
                                                        if (b === 42 && I.charCodeAt(Ae - 1) === 42 && J + 2 !== Ae) { J = Ae + 1; break e } break;
                                                    case 10:
                                                        if (b === 47) { J = Ae + 1; break e } }
                                                J = Ae } } break;
                                case 91:
                                    b++;
                                case 40:
                                    b++;
                                case 34:
                                case 39:
                                    for (; J++ < Sr && I.charCodeAt(J) !== b;); } if (Y === 0) break;
                            J++ } switch (Y = I.substring(Oe, J), Z === 0 && (Z = (H = H.replace(h, "").trim()).charCodeAt(0)), Z) {
                            case 64:
                                switch (0 < Re && (H = H.replace(m, "")), b = H.charCodeAt(1), b) {
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        Re = z; break;
                                    default:
                                        Re = _t } if (Y = t(z, Re, Y, b, x + 1), Oe = Y.length, 0 < N && (Re = n(_t, H, xr), Ht = s(3, Y, Re, z, ye, fe, Oe, b, x, U), H = Re.join(""), Ht !== void 0 && (Oe = (Y = Ht.trim()).length) === 0 && (b = 0, Y = "")), 0 < Oe) switch (b) {
                                    case 115:
                                        H = H.replace(R, l);
                                    case 100:
                                    case 109:
                                    case 45:
                                        Y = H + "{" + Y + "}"; break;
                                    case 107:
                                        H = H.replace(c, "$1 $2"), Y = H + "{" + Y + "}", Y = $e === 1 || $e === 2 && o("@" + Y, 3) ? "@-webkit-" + Y + "@" + Y : "@" + Y; break;
                                    default:
                                        Y = H + Y, U === 112 && (Y = (pe += Y, "")) } else Y = ""; break;
                            default:
                                Y = t(z, n(z, H, xr), Y, U, x + 1) }
                        Sl += Y, Y = xr = Re = Ae = Z = 0, H = "", b = I.charCodeAt(++J); break;
                    case 125:
                    case 59:
                        if (H = (0 < Re ? H.replace(m, "") : H).trim(), 1 < (Oe = H.length)) switch (Ae === 0 && (Z = H.charCodeAt(0), Z === 45 || 96 < Z && 123 > Z) && (Oe = (H = H.replace(" ", ":")).length), 0 < N && (Ht = s(1, H, z, $, ye, fe, pe.length, U, x, U)) !== void 0 && (Oe = (H = Ht.trim()).length) === 0 && (H = "\0\0"), Z = H.charCodeAt(0), b = H.charCodeAt(1), Z) {
                            case 0:
                                break;
                            case 64:
                                if (b === 105 || b === 99) { Cl += H + I.charAt(J); break }
                            default:
                                H.charCodeAt(Oe - 1) !== 58 && (pe += i(H, Z, b, H.charCodeAt(2))) }
                        xr = Re = Ae = Z = 0, H = "", b = I.charCodeAt(++J) } } switch (b) {
                case 13:
                case 10:
                    L === 47 ? L = 0 : 1 + Z === 0 && U !== 107 && 0 < H.length && (Re = 1, H += "\0"), 0 < N * B && s(0, H, z, $, ye, fe, pe.length, U, x, U), fe = 1, ye++; break;
                case 59:
                case 125:
                    if (L + X + ce + V === 0) { fe++; break }
                default:
                    switch (fe++, pt = I.charAt(J), b) {
                        case 9:
                        case 32:
                            if (X + V + L === 0) switch (Ee) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    pt = ""; break;
                                default:
                                    b !== 32 && (pt = " ") }
                            break;
                        case 0:
                            pt = "\\0"; break;
                        case 12:
                            pt = "\\f"; break;
                        case 11:
                            pt = "\\v"; break;
                        case 38:
                            X + L + V === 0 && (Re = xr = 1, pt = "\f" + pt); break;
                        case 108:
                            if (X + L + V + Xe === 0 && 0 < Ae) switch (J - Ae) {
                                case 2:
                                    Ee === 112 && I.charCodeAt(J - 3) === 58 && (Xe = Ee);
                                case 8:
                                    He === 111 && (Xe = He) }
                            break;
                        case 58:
                            X + L + V === 0 && (Ae = J); break;
                        case 44:
                            L + ce + X + V === 0 && (Re = 1, pt += "\r"); break;
                        case 34:
                        case 39:
                            L === 0 && (X = X === b ? 0 : X === 0 ? b : X); break;
                        case 91:
                            X + L + ce === 0 && V++; break;
                        case 93:
                            X + L + ce === 0 && V--; break;
                        case 41:
                            X + L + V === 0 && ce--; break;
                        case 40:
                            if (X + L + V === 0) { if (Z === 0) switch (2 * Ee + 3 * He) {
                                    case 533:
                                        break;
                                    default:
                                        Z = 1 }
                                ce++ } break;
                        case 64:
                            L + ce + X + V + Ae + Y === 0 && (Y = 1); break;
                        case 42:
                        case 47:
                            if (!(0 < X + V + ce)) switch (L) {
                                case 0:
                                    switch (2 * b + 3 * I.charCodeAt(J + 1)) {
                                        case 235:
                                            L = 47; break;
                                        case 220:
                                            Oe = J, L = 42 } break;
                                case 42:
                                    b === 47 && Ee === 42 && Oe + 2 !== J && (I.charCodeAt(Oe + 2) === 33 && (pe += I.substring(Oe, J + 1)), pt = "", L = 0) } }
                    L === 0 && (H += pt) }
            He = Ee, Ee = b, J++ } if (Oe = pe.length, 0 < Oe) { if (Re = z, 0 < N && (Ht = s(2, pe, Re, $, ye, fe, Oe, U, x, U), Ht !== void 0 && (pe = Ht).length === 0)) return Cl + pe + Sl; if (pe = Re.join(",") + "{" + pe + "}", $e * Xe !== 0) { switch ($e !== 2 || o(pe, 2) || (Xe = 0), Xe) {
                    case 111:
                        pe = pe.replace(S, ":-moz-$1") + pe; break;
                    case 112:
                        pe = pe.replace(g, "::-webkit-input-$1") + pe.replace(g, "::-moz-$1") + pe.replace(g, ":-ms-input-$1") + pe }
                Xe = 0 } } return Cl + pe + Sl }

    function n($, z, I) { var U = z.trim().split(_);
        z = U; var x = U.length,
            V = $.length; switch (V) {
            case 0:
            case 1:
                var L = 0; for ($ = V === 0 ? "" : $[0] + " "; L < x; ++L) z[L] = r($, z[L], I).trim(); break;
            default:
                var ce = L = 0; for (z = []; L < x; ++L)
                    for (var X = 0; X < V; ++X) z[ce++] = r($[X] + " ", U[L], I).trim() } return z }

    function r($, z, I) { var U = z.charCodeAt(0); switch (33 > U && (U = (z = z.trim()).charCodeAt(0)), U) {
            case 38:
                return z.replace(p, "$1" + $.trim());
            case 58:
                return $.trim() + z.replace(p, "$1" + $.trim());
            default:
                if (0 < 1 * I && 0 < z.indexOf("\f")) return z.replace(p, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim()) } return $ + z }

    function i($, z, I, U) { var x = $ + ";",
            V = 2 * z + 3 * I + 4 * U; if (V === 944) { $ = x.indexOf(":", 9) + 1; var L = x.substring($, x.length - 1).trim(); return L = x.substring(0, $).trim() + L + ";", $e === 1 || $e === 2 && o(L, 1) ? "-webkit-" + L + L : L } if ($e === 0 || $e === 2 && !o(x, 1)) return x; switch (V) {
            case 1015:
                return x.charCodeAt(10) === 97 ? "-webkit-" + x + x : x;
            case 951:
                return x.charCodeAt(3) === 116 ? "-webkit-" + x + x : x;
            case 963:
                return x.charCodeAt(5) === 110 ? "-webkit-" + x + x : x;
            case 1009:
                if (x.charCodeAt(4) !== 100) break;
            case 969:
            case 942:
                return "-webkit-" + x + x;
            case 978:
                return "-webkit-" + x + "-moz-" + x + x;
            case 1019:
            case 983:
                return "-webkit-" + x + "-moz-" + x + "-ms-" + x + x;
            case 883:
                if (x.charCodeAt(8) === 45) return "-webkit-" + x + x; if (0 < x.indexOf("image-set(", 11)) return x.replace(me, "$1-webkit-$2") + x; break;
            case 932:
                if (x.charCodeAt(4) === 45) switch (x.charCodeAt(5)) {
                    case 103:
                        return "-webkit-box-" + x.replace("-grow", "") + "-webkit-" + x + "-ms-" + x.replace("grow", "positive") + x;
                    case 115:
                        return "-webkit-" + x + "-ms-" + x.replace("shrink", "negative") + x;
                    case 98:
                        return "-webkit-" + x + "-ms-" + x.replace("basis", "preferred-size") + x }
                return "-webkit-" + x + "-ms-" + x + x;
            case 964:
                return "-webkit-" + x + "-ms-flex-" + x + x;
            case 1023:
                if (x.charCodeAt(8) !== 99) break; return L = x.substring(x.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + L + "-webkit-" + x + "-ms-flex-pack" + L + x;
            case 1005:
                return y.test(x) ? x.replace(v, ":-webkit-") + x.replace(v, ":-moz-") + x : x;
            case 1e3:
                switch (L = x.substring(13).trim(), z = L.indexOf("-") + 1, L.charCodeAt(0) + L.charCodeAt(z)) {
                    case 226:
                        L = x.replace(C, "tb"); break;
                    case 232:
                        L = x.replace(C, "tb-rl"); break;
                    case 220:
                        L = x.replace(C, "lr"); break;
                    default:
                        return x } return "-webkit-" + x + "-ms-" + L + x;
            case 1017:
                if (x.indexOf("sticky", 9) === -1) break;
            case 975:
                switch (z = (x = $).length - 10, L = (x.charCodeAt(z) === 33 ? x.substring(0, z) : x).substring($.indexOf(":", 7) + 1).trim(), V = L.charCodeAt(0) + (L.charCodeAt(7) | 0)) {
                    case 203:
                        if (111 > L.charCodeAt(8)) break;
                    case 115:
                        x = x.replace(L, "-webkit-" + L) + ";" + x; break;
                    case 207:
                    case 102:
                        x = x.replace(L, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + x.replace(L, "-webkit-" + L) + ";" + x.replace(L, "-ms-" + L + "box") + ";" + x } return x + ";";
            case 938:
                if (x.charCodeAt(5) === 45) switch (x.charCodeAt(6)) {
                    case 105:
                        return L = x.replace("-items", ""), "-webkit-" + x + "-webkit-box-" + L + "-ms-flex-" + L + x;
                    case 115:
                        return "-webkit-" + x + "-ms-flex-item-" + x.replace(T, "") + x;
                    default:
                        return "-webkit-" + x + "-ms-flex-line-pack" + x.replace("align-content", "").replace(T, "") + x }
                break;
            case 973:
            case 989:
                if (x.charCodeAt(3) !== 45 || x.charCodeAt(4) === 122) break;
            case 931:
            case 953:
                if (M.test($) === !0) return (L = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? i($.replace("stretch", "fill-available"), z, I, U).replace(":fill-available", ":stretch") : x.replace(L, "-webkit-" + L) + x.replace(L, "-moz-" + L.replace("fill-", "")) + x; break;
            case 962:
                if (x = "-webkit-" + x + (x.charCodeAt(5) === 102 ? "-ms-" + x : "") + x, I + U === 211 && x.charCodeAt(13) === 105 && 0 < x.indexOf("transform", 10)) return x.substring(0, x.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + x } return x }

    function o($, z) { var I = $.indexOf(z === 1 ? ":" : "{"),
            U = $.substring(0, z !== 3 ? I : 10); return I = $.substring(I + 1, $.length - 1), j(z !== 2 ? U : U.replace(G, "$1"), I, z) }

    function l($, z) { var I = i(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2)); return I !== z + ";" ? I.replace(A, " or ($1)").substring(4) : "(" + z + ")" }

    function s($, z, I, U, x, V, L, ce, X, Z) { for (var b = 0, Ee = z, He; b < N; ++b) switch (He = Fe[b].call(d, $, Ee, I, U, x, V, L, ce, X, Z)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                Ee = He }
        if (Ee !== z) return Ee }

    function a($) { switch ($) {
            case void 0:
            case null:
                N = Fe.length = 0; break;
            default:
                if (typeof $ == "function") Fe[N++] = $;
                else if (typeof $ == "object")
                    for (var z = 0, I = $.length; z < I; ++z) a($[z]);
                else B = !!$ | 0 } return a }

    function u($) { return $ = $.prefix, $ !== void 0 && (j = null, $ ? typeof $ != "function" ? $e = 1 : ($e = 2, j = $) : $e = 0), u }

    function d($, z) { var I = $; if (33 > I.charCodeAt(0) && (I = I.trim()), ne = I, I = [ne], 0 < N) { var U = s(-1, z, I, I, ye, fe, 0, 0, 0, 0);
            U !== void 0 && typeof U == "string" && (z = U) } var x = t(_t, I, z, 0, 0); return 0 < N && (U = s(-2, x, I, I, ye, fe, x.length, 0, 0, 0), U !== void 0 && (x = U)), ne = "", Xe = 0, fe = ye = 1, x } var h = /^\0+/g,
        m = /[\0\r\f]/g,
        v = /: */g,
        y = /zoo|gra/,
        w = /([,: ])(transform)/g,
        _ = /,\r+?/g,
        p = /([\t\r\n ])*\f?&/g,
        c = /@(k\w+)\s*(\S*)\s*/,
        g = /::(place)/g,
        S = /:(read-only)/g,
        C = /[svh]\w+-[tblr]{2}/,
        R = /\(\s*(.*)\s*\)/g,
        A = /([\s\S]*?);/g,
        T = /-self|flex-/g,
        G = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        M = /stretch|:\s*\w+\-(?:conte|avail)/,
        me = /([^-])(image-set\()/,
        fe = 1,
        ye = 1,
        Xe = 0,
        $e = 1,
        _t = [],
        Fe = [],
        N = 0,
        j = null,
        B = 0,
        ne = ""; return d.use = a, d.set = u, e !== void 0 && u(e), d }
var X0 = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };

function J0(e) { var t = Object.create(null); return function(n) { return t[n] === void 0 && (t[n] = e(n)), t[n] } }
var Z0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    $c = J0(function(e) { return Z0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91 }),
    Pp = { exports: {} },
    te = {};
/** @license React v16.13.1

 */
var ke = typeof Symbol == "function" && Symbol.for,
    au = ke ? Symbol.for("react.element") : 60103,
    uu = ke ? Symbol.for("react.portal") : 60106,
    rl = ke ? Symbol.for("react.fragment") : 60107,
    il = ke ? Symbol.for("react.strict_mode") : 60108,
    ol = ke ? Symbol.for("react.profiler") : 60114,
    ll = ke ? Symbol.for("react.provider") : 60109,
    sl = ke ? Symbol.for("react.context") : 60110,
    cu = ke ? Symbol.for("react.async_mode") : 60111,
    al = ke ? Symbol.for("react.concurrent_mode") : 60111,
    ul = ke ? Symbol.for("react.forward_ref") : 60112,
    cl = ke ? Symbol.for("react.suspense") : 60113,
    q0 = ke ? Symbol.for("react.suspense_list") : 60120,
    dl = ke ? Symbol.for("react.memo") : 60115,
    fl = ke ? Symbol.for("react.lazy") : 60116,
    eg = ke ? Symbol.for("react.block") : 60121,
    tg = ke ? Symbol.for("react.fundamental") : 60117,
    ng = ke ? Symbol.for("react.responder") : 60118,
    rg = ke ? Symbol.for("react.scope") : 60119;

function rt(e) { if (typeof e == "object" && e !== null) { var t = e.$$typeof; switch (t) {
            case au:
                switch (e = e.type, e) {
                    case cu:
                    case al:
                    case rl:
                    case ol:
                    case il:
                    case cl:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case sl:
                            case ul:
                            case fl:
                            case dl:
                            case ll:
                                return e;
                            default:
                                return t } }
            case uu:
                return t } } }

function _p(e) { return rt(e) === al }
te.AsyncMode = cu;
te.ConcurrentMode = al;
te.ContextConsumer = sl;
te.ContextProvider = ll;
te.Element = au;
te.ForwardRef = ul;
te.Fragment = rl;
te.Lazy = fl;
te.Memo = dl;
te.Portal = uu;
te.Profiler = ol;
te.StrictMode = il;
te.Suspense = cl;
te.isAsyncMode = function(e) { return _p(e) || rt(e) === cu };
te.isConcurrentMode = _p;
te.isContextConsumer = function(e) { return rt(e) === sl };
te.isContextProvider = function(e) { return rt(e) === ll };
te.isElement = function(e) { return typeof e == "object" && e !== null && e.$$typeof === au };
te.isForwardRef = function(e) { return rt(e) === ul };
te.isFragment = function(e) { return rt(e) === rl };
te.isLazy = function(e) { return rt(e) === fl };
te.isMemo = function(e) { return rt(e) === dl };
te.isPortal = function(e) { return rt(e) === uu };
te.isProfiler = function(e) { return rt(e) === ol };
te.isStrictMode = function(e) { return rt(e) === il };
te.isSuspense = function(e) { return rt(e) === cl };
te.isValidElementType = function(e) { return typeof e == "string" || typeof e == "function" || e === rl || e === al || e === ol || e === il || e === cl || e === q0 || typeof e == "object" && e !== null && (e.$$typeof === fl || e.$$typeof === dl || e.$$typeof === ll || e.$$typeof === sl || e.$$typeof === ul || e.$$typeof === tg || e.$$typeof === ng || e.$$typeof === rg || e.$$typeof === eg) };
te.typeOf = rt;
(function(e) { e.exports = te })(Pp);
var du = Pp.exports,
    ig = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
    og = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    lg = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    Np = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    fu = {};
fu[du.ForwardRef] = lg;
fu[du.Memo] = Np;

function Ac(e) { return du.isMemo(e) ? Np : fu[e.$$typeof] || ig }
var sg = Object.defineProperty,
    ag = Object.getOwnPropertyNames,
    Tc = Object.getOwnPropertySymbols,
    ug = Object.getOwnPropertyDescriptor,
    cg = Object.getPrototypeOf,
    zc = Object.prototype;

function Lp(e, t, n) { if (typeof t != "string") { if (zc) { var r = cg(t);
            r && r !== zc && Lp(e, r, n) } var i = ag(t);
        Tc && (i = i.concat(Tc(t))); for (var o = Ac(e), l = Ac(t), s = 0; s < i.length; ++s) { var a = i[s]; if (!og[a] && !(n && n[a]) && !(l && l[a]) && !(o && o[a])) { var u = ug(t, a); try { sg(e, a, u) } catch {} } } } return e }
var dg = Lp;

function vt() { return (vt = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }
var Ic = function(e, t) { for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]); return n },
    Js = function(e) { return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ou.exports.typeOf(e) },
    Oo = Object.freeze([]),
    sn = Object.freeze({});

function ar(e) { return typeof e == "function" }

function Dc(e) { return e.displayName || e.name || "Component" }

function pu(e) { return e && typeof e.styledComponentId == "string" }
var ur = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
    hu = typeof window < "u" && "HTMLElement" in window,
    fg = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : !1),
    pg = {};

function Ln(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) }
var hg = function() {
        function e(n) { this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n } var t = e.prototype; return t.indexOfGroup = function(n) { for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i]; return r }, t.insertRules = function(n, r) { if (n >= this.groupSizes.length) { for (var i = this.groupSizes, o = i.length, l = o; n >= l;)(l <<= 1) < 0 && Ln(16, "" + n);
                this.groupSizes = new Uint32Array(l), this.groupSizes.set(i), this.length = l; for (var s = o; s < l; s++) this.groupSizes[s] = 0 } for (var a = this.indexOfGroup(n + 1), u = 0, d = r.length; u < d; u++) this.tag.insertRule(a, r[u]) && (this.groupSizes[n]++, a++) }, t.clearGroup = function(n) { if (n < this.length) { var r = this.groupSizes[n],
                    i = this.indexOfGroup(n),
                    o = i + r;
                this.groupSizes[n] = 0; for (var l = i; l < o; l++) this.tag.deleteRule(i) } }, t.getGroup = function(n) { var r = ""; if (n >= this.length || this.groupSizes[n] === 0) return r; for (var i = this.groupSizes[n], o = this.indexOfGroup(n), l = o + i, s = o; s < l; s++) r += this.tag.getRule(s) + `/*!sc*/
`; return r }, e }(),
    Zi = new Map,
    Po = new Map,
    Vr = 1,
    ji = function(e) { if (Zi.has(e)) return Zi.get(e); for (; Po.has(Vr);) Vr++; var t = Vr++; return Zi.set(e, t), Po.set(t, e), t },
    mg = function(e) { return Po.get(e) },
    gg = function(e, t) { t >= Vr && (Vr = t + 1), Zi.set(e, t), Po.set(t, e) },
    yg = "style[" + ur + '][data-styled-version="5.3.6"]',
    vg = new RegExp("^" + ur + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    wg = function(e, t, n) { for (var r, i = n.split(","), o = 0, l = i.length; o < l; o++)(r = i[o]) && e.registerName(t, r) },
    xg = function(e, t) { for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, o = n.length; i < o; i++) { var l = n[i].trim(); if (l) { var s = l.match(vg); if (s) { var a = 0 | parseInt(s[1], 10),
                        u = s[2];
                    a !== 0 && (gg(u, a), wg(e, u, s[3]), e.getTag().insertRules(a, r)), r.length = 0 } else r.push(l) } } },
    Sg = function() { return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null },
    $p = function(e) { var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            i = function(s) { for (var a = s.childNodes, u = a.length; u >= 0; u--) { var d = a[u]; if (d && d.nodeType === 1 && d.hasAttribute(ur)) return d } }(n),
            o = i !== void 0 ? i.nextSibling : null;
        r.setAttribute(ur, "active"), r.setAttribute("data-styled-version", "5.3.6"); var l = Sg(); return l && r.setAttribute("nonce", l), n.insertBefore(r, o), r },
    Cg = function() {
        function e(n) { var r = this.element = $p(n);
            r.appendChild(document.createTextNode("")), this.sheet = function(i) { if (i.sheet) return i.sheet; for (var o = document.styleSheets, l = 0, s = o.length; l < s; l++) { var a = o[l]; if (a.ownerNode === i) return a }
                Ln(17) }(r), this.length = 0 } var t = e.prototype; return t.insertRule = function(n, r) { try { return this.sheet.insertRule(r, n), this.length++, !0 } catch { return !1 } }, t.deleteRule = function(n) { this.sheet.deleteRule(n), this.length-- }, t.getRule = function(n) { var r = this.sheet.cssRules[n]; return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "" }, e }(),
    kg = function() {
        function e(n) { var r = this.element = $p(n);
            this.nodes = r.childNodes, this.length = 0 } var t = e.prototype; return t.insertRule = function(n, r) { if (n <= this.length && n >= 0) { var i = document.createTextNode(r),
                    o = this.nodes[n]; return this.element.insertBefore(i, o || null), this.length++, !0 } return !1 }, t.deleteRule = function(n) { this.element.removeChild(this.nodes[n]), this.length-- }, t.getRule = function(n) { return n < this.length ? this.nodes[n].textContent : "" }, e }(),
    Eg = function() {
        function e(n) { this.rules = [], this.length = 0 } var t = e.prototype; return t.insertRule = function(n, r) { return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0) }, t.deleteRule = function(n) { this.rules.splice(n, 1), this.length-- }, t.getRule = function(n) { return n < this.length ? this.rules[n] : "" }, e }(),
    Fc = hu,
    Rg = { isServer: !hu, useCSSOMInjection: !fg },
    _o = function() {
        function e(n, r, i) { n === void 0 && (n = sn), r === void 0 && (r = {}), this.options = vt({}, Rg, {}, n), this.gs = r, this.names = new Map(i), this.server = !!n.isServer, !this.server && hu && Fc && (Fc = !1, function(o) { for (var l = document.querySelectorAll(yg), s = 0, a = l.length; s < a; s++) { var u = l[s];
                    u && u.getAttribute(ur) !== "active" && (xg(o, u), u.parentNode && u.parentNode.removeChild(u)) } }(this)) }
        e.registerId = function(n) { return ji(n) }; var t = e.prototype; return t.reconstructWithOptions = function(n, r) { return r === void 0 && (r = !0), new e(vt({}, this.options, {}, n), this.gs, r && this.names || void 0) }, t.allocateGSInstance = function(n) { return this.gs[n] = (this.gs[n] || 0) + 1 }, t.getTag = function() { return this.tag || (this.tag = (i = (r = this.options).isServer, o = r.useCSSOMInjection, l = r.target, n = i ? new Eg(l) : o ? new Cg(l) : new kg(l), new hg(n))); var n, r, i, o, l }, t.hasNameForId = function(n, r) { return this.names.has(n) && this.names.get(n).has(r) }, t.registerName = function(n, r) { if (ji(n), this.names.has(n)) this.names.get(n).add(r);
            else { var i = new Set;
                i.add(r), this.names.set(n, i) } }, t.insertRules = function(n, r, i) { this.registerName(n, r), this.getTag().insertRules(ji(n), i) }, t.clearNames = function(n) { this.names.has(n) && this.names.get(n).clear() }, t.clearRules = function(n) { this.getTag().clearGroup(ji(n)), this.clearNames(n) }, t.clearTag = function() { this.tag = void 0 }, t.toString = function() { return function(n) { for (var r = n.getTag(), i = r.length, o = "", l = 0; l < i; l++) { var s = mg(l); if (s !== void 0) { var a = n.names.get(s),
                            u = r.getGroup(l); if (a && u && a.size) { var d = ur + ".g" + l + '[id="' + s + '"]',
                                h = "";
                            a !== void 0 && a.forEach(function(m) { m.length > 0 && (h += m + ",") }), o += "" + u + d + '{content:"' + h + `"}/*!sc*/
` } } } return o }(this) }, e }(),
    Og = /(a)(d)/gi,
    jc = function(e) { return String.fromCharCode(e + (e > 25 ? 39 : 97)) };

function Zs(e) { var t, n = ""; for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = jc(t % 52) + n; return (jc(t % 52) + n).replace(Og, "$1-$2") }
var Yn = function(e, t) { for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n); return e },
    Ap = function(e) { return Yn(5381, e) };

function Tp(e) { for (var t = 0; t < e.length; t += 1) { var n = e[t]; if (ar(n) && !pu(n)) return !1 } return !0 }
var Pg = Ap("5.3.6"),
    _g = function() {
        function e(t, n, r) { this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && Tp(t), this.componentId = n, this.baseHash = Yn(Pg, n), this.baseStyle = r, _o.registerId(n) } return e.prototype.generateAndInjectStyles = function(t, n, r) { var i = this.componentId,
                o = []; if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
                if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId)) o.push(this.staticRulesId);
                else { var l = $n(this.rules, t, n, r).join(""),
                        s = Zs(Yn(this.baseHash, l) >>> 0); if (!n.hasNameForId(i, s)) { var a = r(l, "." + s, void 0, i);
                        n.insertRules(i, s, a) }
                    o.push(s), this.staticRulesId = s }
            else { for (var u = this.rules.length, d = Yn(this.baseHash, r.hash), h = "", m = 0; m < u; m++) { var v = this.rules[m]; if (typeof v == "string") h += v;
                    else if (v) { var y = $n(v, t, n, r),
                            w = Array.isArray(y) ? y.join("") : y;
                        d = Yn(d, w + m), h += w } } if (h) { var _ = Zs(d >>> 0); if (!n.hasNameForId(i, _)) { var p = r(h, "." + _, void 0, i);
                        n.insertRules(i, _, p) }
                    o.push(_) } } return o.join(" ") }, e }(),
    Ng = /^\s*\/\/.*$/gm,
    Lg = [":", "[", ".", "#"];

function $g(e) { var t, n, r, i, o = e === void 0 ? sn : e,
        l = o.options,
        s = l === void 0 ? sn : l,
        a = o.plugins,
        u = a === void 0 ? Oo : a,
        d = new K0(s),
        h = [],
        m = function(w) {
            function _(p) { if (p) try { w(p + "}") } catch {} } return function(p, c, g, S, C, R, A, T, G, M) { switch (p) {
                    case 1:
                        if (G === 0 && c.charCodeAt(0) === 64) return w(c + ";"), ""; break;
                    case 2:
                        if (T === 0) return c + "/*|*/"; break;
                    case 3:
                        switch (T) {
                            case 102:
                            case 112:
                                return w(g[0] + c), "";
                            default:
                                return c + (M === 0 ? "/*|*/" : "") }
                    case -2:
                        c.split("/*|*/}").forEach(_) } } }(function(w) { h.push(w) }),
        v = function(w, _, p) { return _ === 0 && Lg.indexOf(p[n.length]) !== -1 || p.match(i) ? w : "." + t };

    function y(w, _, p, c) { c === void 0 && (c = "&"); var g = w.replace(Ng, ""),
            S = _ && p ? p + " " + _ + " { " + g + " }" : g; return t = c, n = _, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), d(p || !_ ? "" : _, S) } return d.use([].concat(u, [function(w, _, p) { w === 2 && p.length && p[0].lastIndexOf(n) > 0 && (p[0] = p[0].replace(r, v)) }, m, function(w) { if (w === -2) { var _ = h; return h = [], _ } }])), y.hash = u.length ? u.reduce(function(w, _) { return _.name || Ln(15), Yn(w, _.name) }, 5381).toString() : "", y }
var zp = St.createContext();
zp.Consumer;
var Ip = St.createContext(),
    Ag = (Ip.Consumer, new _o),
    qs = $g();

function Dp() { return E.exports.useContext(zp) || Ag }

function Fp() { return E.exports.useContext(Ip) || qs }
var Tg = function() {
        function e(t, n) { var r = this;
            this.inject = function(i, o) { o === void 0 && (o = qs); var l = r.name + o.hash;
                i.hasNameForId(r.id, l) || i.insertRules(r.id, l, o(r.rules, l, "@keyframes")) }, this.toString = function() { return Ln(12, String(r.name)) }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n } return e.prototype.getName = function(t) { return t === void 0 && (t = qs), this.name + t.hash }, e }(),
    zg = /([A-Z])/,
    Ig = /([A-Z])/g,
    Dg = /^ms-/,
    Fg = function(e) { return "-" + e.toLowerCase() };

function Mc(e) { return zg.test(e) ? e.replace(Ig, Fg).replace(Dg, "-ms-") : e }
var Bc = function(e) { return e == null || e === !1 || e === "" };

function $n(e, t, n, r) { if (Array.isArray(e)) { for (var i, o = [], l = 0, s = e.length; l < s; l += 1)(i = $n(e[l], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i)); return o } if (Bc(e)) return ""; if (pu(e)) return "." + e.styledComponentId; if (ar(e)) { if (typeof(u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t) return e; var a = e(t); return $n(a, t, n, r) } var u; return e instanceof Tg ? n ? (e.inject(n, r), e.getName(r)) : e : Js(e) ? function d(h, m) { var v, y, w = []; for (var _ in h) h.hasOwnProperty(_) && !Bc(h[_]) && (Array.isArray(h[_]) && h[_].isCss || ar(h[_]) ? w.push(Mc(_) + ":", h[_], ";") : Js(h[_]) ? w.push.apply(w, d(h[_], _)) : w.push(Mc(_) + ": " + (v = _, (y = h[_]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in X0 ? String(y).trim() : y + "px") + ";")); return m ? [m + " {"].concat(w, ["}"]) : w }(e) : e.toString() }
var Uc = function(e) { return Array.isArray(e) && (e.isCss = !0), e };

function jp(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return ar(e) || Js(e) ? Uc($n(Ic(Oo, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Uc($n(Ic(e, n))) }
var Mp = function(e, t, n) { return n === void 0 && (n = sn), e.theme !== n.theme && e.theme || t || n.theme },
    jg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Mg = /(^-|-$)/g;

function Kl(e) { return e.replace(jg, "-").replace(Mg, "") }
var Bp = function(e) { return Zs(Ap(e) >>> 0) };

function Mi(e) { return typeof e == "string" && !0 }
var ea = function(e) { return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e) },
    Bg = function(e) { return e !== "__proto__" && e !== "constructor" && e !== "prototype" };

function Ug(e, t, n) { var r = e[n];
    ea(t) && ea(r) ? Up(r, t) : e[n] = t }

function Up(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; for (var i = 0, o = n; i < o.length; i++) { var l = o[i]; if (ea(l))
            for (var s in l) Bg(s) && Ug(e, l[s], s) } return e }
var ui = St.createContext();
ui.Consumer;

function Hg(e) { var t = E.exports.useContext(ui),
        n = E.exports.useMemo(function() { return function(r, i) { if (!r) return Ln(14); if (ar(r)) { var o = r(i); return o } return Array.isArray(r) || typeof r != "object" ? Ln(8) : i ? vt({}, i, {}, r) : r }(e.theme, t) }, [e.theme, t]); return e.children ? St.createElement(ui.Provider, { value: n }, e.children) : null }
var Xl = {};

function Hp(e, t, n) { var r = pu(e),
        i = !Mi(e),
        o = t.attrs,
        l = o === void 0 ? Oo : o,
        s = t.componentId,
        a = s === void 0 ? function(c, g) { var S = typeof c != "string" ? "sc" : Kl(c);
            Xl[S] = (Xl[S] || 0) + 1; var C = S + "-" + Bp("5.3.6" + S + Xl[S]); return g ? g + "-" + C : C }(t.displayName, t.parentComponentId) : s,
        u = t.displayName,
        d = u === void 0 ? function(c) { return Mi(c) ? "styled." + c : "Styled(" + Dc(c) + ")" }(e) : u,
        h = t.displayName && t.componentId ? Kl(t.displayName) + "-" + t.componentId : t.componentId || a,
        m = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
        v = t.shouldForwardProp;
    r && e.shouldForwardProp && (v = t.shouldForwardProp ? function(c, g, S) { return e.shouldForwardProp(c, g, S) && t.shouldForwardProp(c, g, S) } : e.shouldForwardProp); var y, w = new _g(n, h, r ? e.componentStyle : void 0),
        _ = w.isStatic && l.length === 0,
        p = function(c, g) { return function(S, C, R, A) { var T = S.attrs,
                    G = S.componentStyle,
                    M = S.defaultProps,
                    me = S.foldedComponentIds,
                    fe = S.shouldForwardProp,
                    ye = S.styledComponentId,
                    Xe = S.target,
                    $e = function(U, x, V) { U === void 0 && (U = sn); var L = vt({}, x, { theme: U }),
                            ce = {}; return V.forEach(function(X) { var Z, b, Ee, He = X; for (Z in ar(He) && (He = He(L)), He) L[Z] = ce[Z] = Z === "className" ? (b = ce[Z], Ee = He[Z], b && Ee ? b + " " + Ee : b || Ee) : He[Z] }), [L, ce] }(Mp(C, E.exports.useContext(ui), M) || sn, C, T),
                    _t = $e[0],
                    Fe = $e[1],
                    N = function(U, x, V, L) { var ce = Dp(),
                            X = Fp(),
                            Z = x ? U.generateAndInjectStyles(sn, ce, X) : U.generateAndInjectStyles(V, ce, X); return Z }(G, A, _t),
                    j = R,
                    B = Fe.$as || C.$as || Fe.as || C.as || Xe,
                    ne = Mi(B),
                    $ = Fe !== C ? vt({}, C, {}, Fe) : C,
                    z = {}; for (var I in $) I[0] !== "$" && I !== "as" && (I === "forwardedAs" ? z.as = $[I] : (fe ? fe(I, $c, B) : !ne || $c(I)) && (z[I] = $[I])); return C.style && Fe.style !== C.style && (z.style = vt({}, C.style, {}, Fe.style)), z.className = Array.prototype.concat(me, ye, N !== ye ? N : null, C.className, Fe.className).filter(Boolean).join(" "), z.ref = j, E.exports.createElement(B, z) }(y, c, g, _) }; return p.displayName = d, (y = St.forwardRef(p)).attrs = m, y.componentStyle = w, y.displayName = d, y.shouldForwardProp = v, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Oo, y.styledComponentId = h, y.target = r ? e.target : e, y.withComponent = function(c) { var g = t.componentId,
            S = function(R, A) { if (R == null) return {}; var T, G, M = {},
                    me = Object.keys(R); for (G = 0; G < me.length; G++) T = me[G], A.indexOf(T) >= 0 || (M[T] = R[T]); return M }(t, ["componentId"]),
            C = g && g + "-" + (Mi(c) ? c : Kl(Dc(c))); return Hp(c, vt({}, S, { attrs: m, componentId: C }), n) }, Object.defineProperty(y, "defaultProps", { get: function() { return this._foldedDefaultProps }, set: function(c) { this._foldedDefaultProps = r ? Up({}, e.defaultProps, c) : c } }), y.toString = function() { return "." + y.styledComponentId }, i && dg(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y }
var ta = function(e) { return function t(n, r, i) { if (i === void 0 && (i = sn), !ou.exports.isValidElementType(r)) return Ln(1, String(r)); var o = function() { return n(r, i, jp.apply(void 0, arguments)) }; return o.withConfig = function(l) { return t(n, r, vt({}, i, {}, l)) }, o.attrs = function(l) { return t(n, r, vt({}, i, { attrs: Array.prototype.concat(i.attrs, l).filter(Boolean) })) }, o }(Hp, e) };
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) { ta[e] = ta(e) });
var bg = function() {
    function e(n, r) { this.rules = n, this.componentId = r, this.isStatic = Tp(n), _o.registerId(this.componentId + 1) } var t = e.prototype; return t.createStyles = function(n, r, i, o) { var l = o($n(this.rules, r, i, o).join(""), ""),
            s = this.componentId + n;
        i.insertRules(s, s, l) }, t.removeStyles = function(n, r) { r.clearRules(this.componentId + n) }, t.renderStyles = function(n, r, i, o) { n > 2 && _o.registerId(this.componentId + n), this.removeStyles(n, i), this.createStyles(n, r, i, o) }, e }();

function Wg(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; var i = jp.apply(void 0, [e].concat(n)),
        o = "sc-global-" + Bp(JSON.stringify(i)),
        l = new bg(i, o);

    function s(u) { var d = Dp(),
            h = Fp(),
            m = E.exports.useContext(ui),
            v = E.exports.useRef(d.allocateGSInstance(o)).current; return d.server && a(v, u, d, m, h), E.exports.useLayoutEffect(function() { if (!d.server) return a(v, u, d, m, h),
                function() { return l.removeStyles(v, d) } }, [v, u, d, m, h]), null }

    function a(u, d, h, m, v) { if (l.isStatic) l.renderStyles(u, pg, h, v);
        else { var y = vt({}, d, { theme: Mp(d, m, s.defaultProps) });
            l.renderStyles(u, y, h, v) } } return St.memo(s) }
const F = ta,
    Vg = Wg `
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, body * {
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({theme:e})=>e.COLORS.GRAY_200};
      border-radius: 8px;
    }
  }
  body {
    background-color: ${({theme:e})=>e.COLORS.BACKGROUND_800};
    color: ${({theme:e})=>e.COLORS.WHITE};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
  }
  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }
  legend, button, a, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`,
    Gg = { COLORS: { BACKGROUND_900: "#00070A", BACKGROUND_800: "#000A0F", BACKGROUND_700: "#00111A", BACKGROUND_600: "#001119", BACKGROUND_400: "#0D1D25", WHITE: "#FFF", GRAY_500: "#7C7C8A", GRAY_200: "#C4C4CC", GRAY_100: "#E1E1E6", RED: "#92000E", LIGHT_GREEN: "#82F3FF", LIGHT_BLUE: "#065E7C" } };

function bp(e, t) { return function() { return e.apply(t, arguments) } }
const { toString: Wp } = Object.prototype, { getPrototypeOf: mu } = Object, gu = (e => t => { const n = Wp.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()) })(Object.create(null)), Ut = e => (e = e.toLowerCase(), t => gu(t) === e), pl = e => t => typeof t === e, { isArray: gi } = Array, na = pl("undefined");

function Qg(e) { return e !== null && !na(e) && e.constructor !== null && !na(e.constructor) && pr(e.constructor.isBuffer) && e.constructor.isBuffer(e) }
const Vp = Ut("ArrayBuffer");

function Yg(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vp(e.buffer), t }
const Kg = pl("string"),
    pr = pl("function"),
    Gp = pl("number"),
    Qp = e => e !== null && typeof e == "object",
    Xg = e => e === !0 || e === !1,
    qi = e => { if (gu(e) !== "object") return !1; const t = mu(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e) },
    Jg = Ut("Date"),
    Zg = Ut("File"),
    qg = Ut("Blob"),
    e1 = Ut("FileList"),
    t1 = e => Qp(e) && pr(e.pipe),
    n1 = e => { const t = "[object FormData]"; return e && (typeof FormData == "function" && e instanceof FormData || Wp.call(e) === t || pr(e.toString) && e.toString() === t) },
    r1 = Ut("URLSearchParams"),
    i1 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function hl(e, t, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u") return; let r, i; if (typeof e != "object" && (e = [e]), gi(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else { const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = o.length; let s; for (r = 0; r < l; r++) s = o[r], t.call(null, e[s], s, e) } }

function ra() { const e = {},
        t = (n, r) => { qi(e[r]) && qi(n) ? e[r] = ra(e[r], n) : qi(n) ? e[r] = ra({}, n) : gi(n) ? e[r] = n.slice() : e[r] = n }; for (let n = 0, r = arguments.length; n < r; n++) arguments[n] && hl(arguments[n], t); return e }
const o1 = (e, t, n, { allOwnKeys: r } = {}) => (hl(t, (i, o) => { n && pr(i) ? e[o] = bp(i, n) : e[o] = i }, { allOwnKeys: r }), e),
    l1 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    s1 = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n) },
    a1 = (e, t, n, r) => { let i, o, l; const s = {}; if (t = t || {}, e == null) return t;
        do { for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) l = i[o], (!r || r(l, e, t)) && !s[l] && (t[l] = e[l], s[l] = !0);
            e = n !== !1 && mu(e) } while (e && (!n || n(e, t)) && e !== Object.prototype); return t },
    u1 = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; const r = e.indexOf(t, n); return r !== -1 && r === n },
    c1 = e => { if (!e) return null; if (gi(e)) return e; let t = e.length; if (!Gp(t)) return null; const n = new Array(t); for (; t-- > 0;) n[t] = e[t]; return n },
    d1 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && mu(Uint8Array)),
    f1 = (e, t) => { const r = (e && e[Symbol.iterator]).call(e); let i; for (;
            (i = r.next()) && !i.done;) { const o = i.value;
            t.call(e, o[0], o[1]) } },
    p1 = (e, t) => { let n; const r = []; for (;
            (n = e.exec(t)) !== null;) r.push(n); return r },
    h1 = Ut("HTMLFormElement"),
    m1 = e => e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(n, r, i) { return r.toUpperCase() + i }),
    Hc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype),
    g1 = Ut("RegExp"),
    Yp = (e, t) => { const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        hl(n, (i, o) => { t(i, o, e) !== !1 && (r[o] = i) }), Object.defineProperties(e, r) },
    y1 = e => { Yp(e, (t, n) => { const r = e[n]; if (!!pr(r)) { if (t.enumerable = !1, "writable" in t) { t.writable = !1; return }
                t.set || (t.set = () => { throw Error("Can not read-only method '" + n + "'") }) } }) },
    v1 = (e, t) => { const n = {},
            r = i => { i.forEach(o => { n[o] = !0 }) }; return gi(e) ? r(e) : r(String(e).split(t)), n },
    w1 = () => {},
    x1 = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    k = { isArray: gi, isArrayBuffer: Vp, isBuffer: Qg, isFormData: n1, isArrayBufferView: Yg, isString: Kg, isNumber: Gp, isBoolean: Xg, isObject: Qp, isPlainObject: qi, isUndefined: na, isDate: Jg, isFile: Zg, isBlob: qg, isRegExp: g1, isFunction: pr, isStream: t1, isURLSearchParams: r1, isTypedArray: d1, isFileList: e1, forEach: hl, merge: ra, extend: o1, trim: i1, stripBOM: l1, inherits: s1, toFlatObject: a1, kindOf: gu, kindOfTest: Ut, endsWith: u1, toArray: c1, forEachEntry: f1, matchAll: p1, isHTMLForm: h1, hasOwnProperty: Hc, hasOwnProp: Hc, reduceDescriptors: Yp, freezeMethods: y1, toObjectSet: v1, toCamelCase: m1, noop: w1, toFiniteNumber: x1 };

function K(e, t, n, r, i) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i) }
k.inherits(K, Error, { toJSON: function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code, status: this.response && this.response.status ? this.response.status : null } } });
const Kp = K.prototype,
    Xp = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { Xp[e] = { value: e } });
Object.defineProperties(K, Xp);
Object.defineProperty(Kp, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, i, o) => { const l = Object.create(Kp); return k.toFlatObject(e, l, function(a) { return a !== Error.prototype }, s => s !== "isAxiosError"), K.call(l, e.message, t, n, r, i), l.cause = e, l.name = e.name, o && Object.assign(l, o), l };
var S1 = typeof self == "object" ? self.FormData : window.FormData;

function ia(e) { return k.isPlainObject(e) || k.isArray(e) }

function Jp(e) { return k.endsWith(e, "[]") ? e.slice(0, -2) : e }

function bc(e, t, n) { return e ? e.concat(t).map(function(i, o) { return i = Jp(i), !n && o ? "[" + i + "]" : i }).join(n ? "." : "") : t }

function C1(e) { return k.isArray(e) && !e.some(ia) }
const k1 = k.toFlatObject(k, {}, null, function(t) { return /^is[A-Z]/.test(t) });

function E1(e) { return e && k.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator] }

function ml(e, t, n) { if (!k.isObject(e)) throw new TypeError("target must be an object");
    t = t || new(S1 || FormData), n = k.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(w, _) { return !k.isUndefined(_[w]) }); const r = n.metaTokens,
        i = n.visitor || d,
        o = n.dots,
        l = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && E1(t); if (!k.isFunction(i)) throw new TypeError("visitor must be a function");

    function u(y) { if (y === null) return ""; if (k.isDate(y)) return y.toISOString(); if (!a && k.isBlob(y)) throw new K("Blob is not supported. Use a Buffer instead."); return k.isArrayBuffer(y) || k.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y }

    function d(y, w, _) { let p = y; if (y && !_ && typeof y == "object") { if (k.endsWith(w, "{}")) w = r ? w : w.slice(0, -2), y = JSON.stringify(y);
            else if (k.isArray(y) && C1(y) || k.isFileList(y) || k.endsWith(w, "[]") && (p = k.toArray(y))) return w = Jp(w), p.forEach(function(g, S) {!(k.isUndefined(g) || g === null) && t.append(l === !0 ? bc([w], S, o) : l === null ? w : w + "[]", u(g)) }), !1 } return ia(y) ? !0 : (t.append(bc(_, w, o), u(y)), !1) } const h = [],
        m = Object.assign(k1, { defaultVisitor: d, convertValue: u, isVisitable: ia });

    function v(y, w) { if (!k.isUndefined(y)) { if (h.indexOf(y) !== -1) throw Error("Circular reference detected in " + w.join("."));
            h.push(y), k.forEach(y, function(p, c) {
                (!(k.isUndefined(p) || p === null) && i.call(t, p, k.isString(c) ? c.trim() : c, w, m)) === !0 && v(p, w ? w.concat(c) : [c]) }), h.pop() } } if (!k.isObject(e)) throw new TypeError("data must be an object"); return v(e), t }

function Wc(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) { return t[r] }) }

function yu(e, t) { this._pairs = [], e && ml(e, this, t) }
const Zp = yu.prototype;
Zp.append = function(t, n) { this._pairs.push([t, n]) };
Zp.toString = function(t) { const n = t ? function(r) { return t.call(this, r, Wc) } : Wc; return this._pairs.map(function(i) { return n(i[0]) + "=" + n(i[1]) }, "").join("&") };

function R1(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }

function qp(e, t, n) { if (!t) return e; const r = n && n.encode || R1,
        i = n && n.serialize; let o; if (i ? o = i(t, n) : o = k.isURLSearchParams(t) ? t.toString() : new yu(t, n).toString(r), o) { const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o } return e }
class Vc { constructor() { this.handlers = [] }
    use(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1 }
    eject(t) { this.handlers[t] && (this.handlers[t] = null) }
    clear() { this.handlers && (this.handlers = []) }
    forEach(t) { k.forEach(this.handlers, function(r) { r !== null && t(r) }) } }
const eh = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    O1 = typeof URLSearchParams < "u" ? URLSearchParams : yu,
    P1 = FormData,
    _1 = (() => { let e; return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u" })(),
    It = { isBrowser: !0, classes: { URLSearchParams: O1, FormData: P1, Blob }, isStandardBrowserEnv: _1, protocols: ["http", "https", "file", "blob", "url", "data"] };

function N1(e, t) { return ml(e, new It.classes.URLSearchParams, Object.assign({ visitor: function(n, r, i, o) { return It.isNode && k.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments) } }, t)) }

function L1(e) { return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]) }

function $1(e) { const t = {},
        n = Object.keys(e); let r; const i = n.length; let o; for (r = 0; r < i; r++) o = n[r], t[o] = e[o]; return t }

function th(e) {
    function t(n, r, i, o) { let l = n[o++]; const s = Number.isFinite(+l),
            a = o >= n.length; return l = !l && k.isArray(i) ? i.length : l, a ? (k.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r, !s) : ((!i[l] || !k.isObject(i[l])) && (i[l] = []), t(n, r, i[l], o) && k.isArray(i[l]) && (i[l] = $1(i[l])), !s) } if (k.isFormData(e) && k.isFunction(e.entries)) { const n = {}; return k.forEachEntry(e, (r, i) => { t(L1(r), i, n, 0) }), n } return null }

function A1(e, t, n) { const r = n.config.validateStatus;!n.status || !r || r(n.status) ? e(n) : t(new K("Request failed with status code " + n.status, [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) }
const T1 = It.isStandardBrowserEnv ? function() { return { write: function(n, r, i, o, l, s) { const a = [];
            a.push(n + "=" + encodeURIComponent(r)), k.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), k.isString(o) && a.push("path=" + o), k.isString(l) && a.push("domain=" + l), s === !0 && a.push("secure"), document.cookie = a.join("; ") }, read: function(n) { const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")); return r ? decodeURIComponent(r[3]) : null }, remove: function(n) { this.write(n, "", Date.now() - 864e5) } } }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }();

function z1(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) }

function I1(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }

function nh(e, t) { return e && !z1(t) ? I1(e, t) : t }
const D1 = It.isStandardBrowserEnv ? function() { const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a"); let r;

    function i(o) { let l = o; return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname } } return r = i(window.location.href),
        function(l) { const s = k.isString(l) ? i(l) : l; return s.protocol === r.protocol && s.host === r.host } }() : function() { return function() { return !0 } }();

function yi(e, t, n) { K.call(this, e == null ? "canceled" : e, K.ERR_CANCELED, t, n), this.name = "CanceledError" }
k.inherits(yi, K, { __CANCEL__: !0 });

function F1(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || "" }
const j1 = k.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    M1 = e => { const t = {}; let n, r, i; return e && e.split(`
`).forEach(function(l) { i = l.indexOf(":"), n = l.substring(0, i).trim().toLowerCase(), r = l.substring(i + 1).trim(), !(!n || t[n] && j1[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r) }), t },
    Gc = Symbol("internals"),
    rh = Symbol("defaults");

function Ir(e) { return e && String(e).trim().toLowerCase() }

function eo(e) { return e === !1 || e == null ? e : k.isArray(e) ? e.map(eo) : String(e) }

function B1(e) { const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);) t[r[1]] = r[2]; return t }

function Qc(e, t, n, r) { if (k.isFunction(r)) return r.call(this, t, n); if (!!k.isString(t)) { if (k.isString(r)) return t.indexOf(r) !== -1; if (k.isRegExp(r)) return r.test(t) } }

function U1(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r) }

function H1(e, t) { const n = k.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function(i, o, l) { return this[r].call(this, t, i, o, l) }, configurable: !0 }) }) }

function Lr(e, t) { t = t.toLowerCase(); const n = Object.keys(e); let r = n.length,
        i; for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null }

function ut(e, t) { e && this.set(e), this[rh] = t || null }
Object.assign(ut.prototype, { set: function(e, t, n) { const r = this;

        function i(o, l, s) { const a = Ir(l); if (!a) throw new Error("header name must be a non-empty string"); const u = Lr(r, a);
            u && s !== !0 && (r[u] === !1 || s === !1) || (r[u || l] = eo(o)) } return k.isPlainObject(e) ? k.forEach(e, (o, l) => { i(o, l, t) }) : i(t, e, n), this }, get: function(e, t) { if (e = Ir(e), !e) return; const n = Lr(this, e); if (n) { const r = this[n]; if (!t) return r; if (t === !0) return B1(r); if (k.isFunction(t)) return t.call(this, r, n); if (k.isRegExp(t)) return t.exec(r); throw new TypeError("parser must be boolean|regexp|function") } }, has: function(e, t) { if (e = Ir(e), e) { const n = Lr(this, e); return !!(n && (!t || Qc(this, this[n], n, t))) } return !1 }, delete: function(e, t) { const n = this; let r = !1;

        function i(o) { if (o = Ir(o), o) { const l = Lr(n, o);
                l && (!t || Qc(n, n[l], l, t)) && (delete n[l], r = !0) } } return k.isArray(e) ? e.forEach(i) : i(e), r }, clear: function() { return Object.keys(this).forEach(this.delete.bind(this)) }, normalize: function(e) { const t = this,
            n = {}; return k.forEach(this, (r, i) => { const o = Lr(n, i); if (o) { t[o] = eo(r), delete t[i]; return } const l = e ? U1(i) : String(i).trim();
            l !== i && delete t[i], t[l] = eo(r), n[l] = !0 }), this }, toJSON: function(e) { const t = Object.create(null); return k.forEach(Object.assign({}, this[rh] || null, this), (n, r) => { n == null || n === !1 || (t[r] = e && k.isArray(n) ? n.join(", ") : n) }), t } });
Object.assign(ut, { from: function(e) { return k.isString(e) ? new this(M1(e)) : e instanceof this ? e : new this(e) }, accessor: function(e) { const n = (this[Gc] = this[Gc] = { accessors: {} }).accessors,
            r = this.prototype;

        function i(o) { const l = Ir(o);
            n[l] || (H1(r, o), n[l] = !0) } return k.isArray(e) ? e.forEach(i) : i(e), this } });
ut.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
k.freezeMethods(ut.prototype);
k.freezeMethods(ut);

function b1(e, t) { e = e || 10; const n = new Array(e),
        r = new Array(e); let i = 0,
        o = 0,
        l; return t = t !== void 0 ? t : 1e3,
        function(a) { const u = Date.now(),
                d = r[o];
            l || (l = u), n[i] = a, r[i] = u; let h = o,
                m = 0; for (; h !== i;) m += n[h++], h = h % e; if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - l < t) return; const v = d && u - d; return v ? Math.round(m * 1e3 / v) : void 0 } }

function Yc(e, t) { let n = 0; const r = b1(50, 250); return i => { const o = i.loaded,
            l = i.lengthComputable ? i.total : void 0,
            s = o - n,
            a = r(s),
            u = o <= l;
        n = o; const d = { loaded: o, total: l, progress: l ? o / l : void 0, bytes: s, rate: a || void 0, estimated: a && l && u ? (l - o) / a : void 0 };
        d[t ? "download" : "upload"] = !0, e(d) } }

function Kc(e) { return new Promise(function(n, r) { let i = e.data; const o = ut.from(e.headers).normalize(),
            l = e.responseType; let s;

        function a() { e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s) }
        k.isFormData(i) && It.isStandardBrowserEnv && o.setContentType(!1); let u = new XMLHttpRequest; if (e.auth) { const v = e.auth.username || "",
                y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(v + ":" + y)) } const d = nh(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), qp(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;

        function h() { if (!u) return; const v = ut.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                w = { data: !l || l === "text" || l === "json" ? u.responseText : u.response, status: u.status, statusText: u.statusText, headers: v, config: e, request: u };
            A1(function(p) { n(p), a() }, function(p) { r(p), a() }, w), u = null } if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {!u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h) }, u.onabort = function() {!u || (r(new K("Request aborted", K.ECONNABORTED, e, u)), u = null) }, u.onerror = function() { r(new K("Network Error", K.ERR_NETWORK, e, u)), u = null }, u.ontimeout = function() { let y = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"; const w = e.transitional || eh;
                e.timeoutErrorMessage && (y = e.timeoutErrorMessage), r(new K(y, w.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, e, u)), u = null }, It.isStandardBrowserEnv) { const v = (e.withCredentials || D1(d)) && e.xsrfCookieName && T1.read(e.xsrfCookieName);
            v && o.set(e.xsrfHeaderName, v) }
        i === void 0 && o.setContentType(null), "setRequestHeader" in u && k.forEach(o.toJSON(), function(y, w) { u.setRequestHeader(w, y) }), k.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), l && l !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Yc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Yc(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = v => {!u || (r(!v || v.type ? new yi(null, e, u) : v), u.abort(), u = null) }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s))); const m = F1(d); if (m && It.protocols.indexOf(m) === -1) { r(new K("Unsupported protocol " + m + ":", K.ERR_BAD_REQUEST, e)); return }
        u.send(i || null) }) }
const Xc = { http: Kc, xhr: Kc },
    Jc = { getAdapter: e => { if (k.isString(e)) { const t = Xc[e]; if (!e) throw Error(k.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`); return t } if (!k.isFunction(e)) throw new TypeError("adapter is not a function"); return e }, adapters: Xc },
    W1 = { "Content-Type": "application/x-www-form-urlencoded" };

function V1() { let e; return typeof XMLHttpRequest < "u" ? e = Jc.getAdapter("xhr") : typeof process < "u" && k.kindOf(process) === "process" && (e = Jc.getAdapter("http")), e }

function G1(e, t, n) { if (k.isString(e)) try { return (t || JSON.parse)(e), k.trim(e) } catch (r) { if (r.name !== "SyntaxError") throw r }
    return (n || JSON.stringify)(e) }
const hr = { transitional: eh, adapter: V1(), transformRequest: [function(t, n) { const r = n.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            o = k.isObject(t); if (o && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)) return i && i ? JSON.stringify(th(t)) : t; if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t; if (k.isArrayBufferView(t)) return t.buffer; if (k.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let s; if (o) { if (r.indexOf("application/x-www-form-urlencoded") > -1) return N1(t, this.formSerializer).toString(); if ((s = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) { const a = this.env && this.env.FormData; return ml(s ? { "files[]": t } : t, a && new a, this.formSerializer) } } return o || i ? (n.setContentType("application/json", !1), G1(t)) : t }], transformResponse: [function(t) { const n = this.transitional || hr.transitional,
            r = n && n.forcedJSONParsing,
            i = this.responseType === "json"; if (t && k.isString(t) && (r && !this.responseType || i)) { const l = !(n && n.silentJSONParsing) && i; try { return JSON.parse(t) } catch (s) { if (l) throw s.name === "SyntaxError" ? K.from(s, K.ERR_BAD_RESPONSE, this, null, this.response) : s } } return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: It.classes.FormData, Blob: It.classes.Blob }, validateStatus: function(t) { return t >= 200 && t < 300 }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
k.forEach(["delete", "get", "head"], function(t) { hr.headers[t] = {} });
k.forEach(["post", "put", "patch"], function(t) { hr.headers[t] = k.merge(W1) });

function Jl(e, t) { const n = this || hr,
        r = t || n,
        i = ut.from(r.headers); let o = r.data; return k.forEach(e, function(s) { o = s.call(n, o, i.normalize(), t ? t.status : void 0) }), i.normalize(), o }

function ih(e) { return !!(e && e.__CANCEL__) }

function Zl(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new yi }

function Zc(e) { return Zl(e), e.headers = ut.from(e.headers), e.data = Jl.call(e, e.transformRequest), (e.adapter || hr.adapter)(e).then(function(r) { return Zl(e), r.data = Jl.call(e, e.transformResponse, r), r.headers = ut.from(r.headers), r }, function(r) { return ih(r) || (Zl(e), r && r.response && (r.response.data = Jl.call(e, e.transformResponse, r.response), r.response.headers = ut.from(r.response.headers))), Promise.reject(r) }) }

function ci(e, t) { t = t || {}; const n = {};

    function r(u, d) { return k.isPlainObject(u) && k.isPlainObject(d) ? k.merge(u, d) : k.isPlainObject(d) ? k.merge({}, d) : k.isArray(d) ? d.slice() : d }

    function i(u) { if (k.isUndefined(t[u])) { if (!k.isUndefined(e[u])) return r(void 0, e[u]) } else return r(e[u], t[u]) }

    function o(u) { if (!k.isUndefined(t[u])) return r(void 0, t[u]) }

    function l(u) { if (k.isUndefined(t[u])) { if (!k.isUndefined(e[u])) return r(void 0, e[u]) } else return r(void 0, t[u]) }

    function s(u) { if (u in t) return r(e[u], t[u]); if (u in e) return r(void 0, e[u]) } const a = { url: o, method: o, data: o, baseURL: l, transformRequest: l, transformResponse: l, paramsSerializer: l, timeout: l, timeoutMessage: l, withCredentials: l, adapter: l, responseType: l, xsrfCookieName: l, xsrfHeaderName: l, onUploadProgress: l, onDownloadProgress: l, decompress: l, maxContentLength: l, maxBodyLength: l, beforeRedirect: l, transport: l, httpAgent: l, httpsAgent: l, cancelToken: l, socketPath: l, responseEncoding: l, validateStatus: s }; return k.forEach(Object.keys(e).concat(Object.keys(t)), function(d) { const h = a[d] || i,
            m = h(d);
        k.isUndefined(m) && h !== s || (n[d] = m) }), n }
const oh = "1.1.3",
    vu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { vu[e] = function(r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e } });
const qc = {};
vu.transitional = function(t, n, r) {
    function i(o, l) { return "[Axios v" + oh + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "") } return (o, l, s) => { if (t === !1) throw new K(i(l, " has been removed" + (n ? " in " + n : "")), K.ERR_DEPRECATED); return n && !qc[l] && (qc[l] = !0, console.warn(i(l, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, l, s) : !0 } };

function Q1(e, t, n) { if (typeof e != "object") throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let i = r.length; for (; i-- > 0;) { const o = r[i],
            l = t[o]; if (l) { const s = e[o],
                a = s === void 0 || l(s, o, e); if (a !== !0) throw new K("option " + o + " must be " + a, K.ERR_BAD_OPTION_VALUE); continue } if (n !== !0) throw new K("Unknown option " + o, K.ERR_BAD_OPTION) } }
const oa = { assertOptions: Q1, validators: vu },
    Wt = oa.validators;
class En { constructor(t) { this.defaults = t, this.interceptors = { request: new Vc, response: new Vc } }
    request(t, n) { typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ci(this.defaults, n); const { transitional: r, paramsSerializer: i } = n;
        r !== void 0 && oa.assertOptions(r, { silentJSONParsing: Wt.transitional(Wt.boolean), forcedJSONParsing: Wt.transitional(Wt.boolean), clarifyTimeoutError: Wt.transitional(Wt.boolean) }, !1), i !== void 0 && oa.assertOptions(i, { encode: Wt.function, serialize: Wt.function }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase(); const o = n.headers && k.merge(n.headers.common, n.headers[n.method]);
        o && k.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(y) { delete n.headers[y] }), n.headers = new ut(n.headers, o); const l = []; let s = !0;
        this.interceptors.request.forEach(function(y) { typeof y.runWhen == "function" && y.runWhen(n) === !1 || (s = s && y.synchronous, l.unshift(y.fulfilled, y.rejected)) }); const a = [];
        this.interceptors.response.forEach(function(y) { a.push(y.fulfilled, y.rejected) }); let u, d = 0,
            h; if (!s) { const v = [Zc.bind(this), void 0]; for (v.unshift.apply(v, l), v.push.apply(v, a), h = v.length, u = Promise.resolve(n); d < h;) u = u.then(v[d++], v[d++]); return u }
        h = l.length; let m = n; for (d = 0; d < h;) { const v = l[d++],
                y = l[d++]; try { m = v(m) } catch (w) { y.call(this, w); break } } try { u = Zc.call(this, m) } catch (v) { return Promise.reject(v) } for (d = 0, h = a.length; d < h;) u = u.then(a[d++], a[d++]); return u }
    getUri(t) { t = ci(this.defaults, t); const n = nh(t.baseURL, t.url); return qp(n, t.params, t.paramsSerializer) } }
k.forEach(["delete", "get", "head", "options"], function(t) { En.prototype[t] = function(n, r) { return this.request(ci(r || {}, { method: t, url: n, data: (r || {}).data })) } });
k.forEach(["post", "put", "patch"], function(t) {
    function n(r) { return function(o, l, s) { return this.request(ci(s || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: l })) } }
    En.prototype[t] = n(), En.prototype[t + "Form"] = n(!0) });
class wu { constructor(t) { if (typeof t != "function") throw new TypeError("executor must be a function."); let n;
        this.promise = new Promise(function(o) { n = o }); const r = this;
        this.promise.then(i => { if (!r._listeners) return; let o = r._listeners.length; for (; o-- > 0;) r._listeners[o](i);
            r._listeners = null }), this.promise.then = i => { let o; const l = new Promise(s => { r.subscribe(s), o = s }).then(i); return l.cancel = function() { r.unsubscribe(o) }, l }, t(function(o, l, s) { r.reason || (r.reason = new yi(o, l, s), n(r.reason)) }) }
    throwIfRequested() { if (this.reason) throw this.reason }
    subscribe(t) { if (this.reason) { t(this.reason); return }
        this._listeners ? this._listeners.push(t) : this._listeners = [t] }
    unsubscribe(t) { if (!this._listeners) return; const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1) }
    static source() { let t; return { token: new wu(function(i) { t = i }), cancel: t } } }

function Y1(e) { return function(n) { return e.apply(null, n) } }

function K1(e) { return k.isObject(e) && e.isAxiosError === !0 }

function lh(e) { const t = new En(e),
        n = bp(En.prototype.request, t); return k.extend(n, En.prototype, t, { allOwnKeys: !0 }), k.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) { return lh(ci(e, i)) }, n }
const Ke = lh(hr);
Ke.Axios = En;
Ke.CanceledError = yi;
Ke.CancelToken = wu;
Ke.isCancel = ih;
Ke.VERSION = oh;
Ke.toFormData = ml;
Ke.AxiosError = K;
Ke.Cancel = Ke.CanceledError;
Ke.all = function(t) { return Promise.all(t) };
Ke.spread = Y1;
Ke.isAxiosError = K1;
Ke.formToJSON = e => th(k.isHTMLForm(e) ? new FormData(e) : e);
const Ne = Ke.create({ baseURL: "https://food-explorer-jfl3.onrender.com" });
var gl = { exports: {} },
    yl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1 = E.exports,
    J1 = Symbol.for("react.element"),
    Z1 = Symbol.for("react.fragment"),
    q1 = Object.prototype.hasOwnProperty,
    ey = X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ty = { key: !0, ref: !0, __self: !0, __source: !0 };

function sh(e, t, n) { var r, i = {},
        o = null,
        l = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref); for (r in t) q1.call(t, r) && !ty.hasOwnProperty(r) && (i[r] = t[r]); if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]); return { $$typeof: J1, type: e, key: o, ref: l, props: i, _owner: ey.current } }
yl.Fragment = Z1;
yl.jsx = sh;
yl.jsxs = sh;
(function(e) { e.exports = yl })(gl);
const ny = gl.exports.Fragment,
    f = gl.exports.jsx,
    O = gl.exports.jsxs,
    ah = E.exports.createContext({});

function ry({ children: e }) { const [t, n] = E.exports.useState({}), [r, i] = E.exports.useState(!1);
    async function o({ email: s, password: a }) { try { i(!0); const u = await Ne.post("/sessions", { email: s, password: a }),
                { user: d, token: h } = u.data;
            localStorage.setItem("@foodexplorer:user", JSON.stringify(d)), localStorage.setItem("@foodexplorer:token", h), Ne.defaults.headers.common.Authorization = `Bearer ${h}`, n({ user: d, token: h }), i(!1) } catch (u) { u.response ? alert(u.response.data.message) : alert("N\xE3o foi poss\xEDvel entrar"), i(!1) } }
    async function l() { localStorage.removeItem("@foodexplorer:user"), localStorage.removeItem("@foodexplorer:token"), n({}) } return E.exports.useEffect(() => { const s = localStorage.getItem("@foodexplorer:user"),
            a = localStorage.getItem("@foodexplorer:token");
        a && s && (Ne.defaults.headers.common.Authorization = `Bearer ${a}`, n({ token: a, user: JSON.parse(s) })) }, []), f(ah.Provider, { value: { signIn: o, signOut: l, loading: r, setLoading: i, user: t.user }, children: e }) }

function mn() { return E.exports.useContext(ah) }
const uh = E.exports.createContext({});

function iy({ children: e }) { const [t, n] = E.exports.useState(JSON.parse(localStorage.getItem("@foodexplorer:favorites")) || []);

    function r(o) { n([...t, o]) }

    function i(o) { n(t.filter(l => l.id !== o.id)) } return E.exports.useEffect(() => { localStorage.setItem("@foodexplorer:favorites", JSON.stringify(t)) }, [t]), f(uh.Provider, { value: { favorites: t, addDishToFavorite: r, removeDishFromFavorite: i }, children: e }) }

function ch() { return E.exports.useContext(uh) }
const dh = E.exports.createContext({});

function oy({ children: e }) { const [t, n] = E.exports.useState(JSON.parse(localStorage.getItem("@foodexplorer:cart")) || []), [r, i] = E.exports.useState(JSON.parse(localStorage.getItem("paymentAccept")) || !1), [o, l] = E.exports.useState([]);

    function s(h, m, v) { try { const { id: y, title: w, price: _ } = h, p = m * Number(_.replace(",", ".")), c = { id: y, title: w, price: p, image: v, quantity: m }; if (t.some(S => S.title === c.title)) return alert("Esse item j\xE1 est\xE1 no carrinho");
            n(S => [...S, c]) } catch (y) { y.response ? alert(y.response.data.message) : alert("N\xE3o foi poss\xEDvel adicionar o item ao carrinho") }
        alert("Item adicionado ao carrinho") }

    function a(h) { n(m => m.filter(v => v.id !== h)) } const u = t.reduce((h, m) => h + m.price, 0);
    async function d(h, m) { localStorage.removeItem("@foodexplorer:cart"), localStorage.removeItem("paymentAccept"), n([]), i(!1), await Ne.delete(`/carts/${h}`), m("/") } return E.exports.useEffect(() => { localStorage.setItem("@foodexplorer:cart", JSON.stringify(t)) }, [t]), E.exports.useEffect(() => { localStorage.setItem("paymentAccept", JSON.stringify(r)) }, [r]), f(dh.Provider, { value: { cart: t, handleAddDishToCart: s, handleRemoveDishFromCart: a, total: String(u).replace(".", ","), paymentAccept: r, setPaymentAccept: i, orders: o, setOrders: l, handleResetCart: d }, children: e }) }

function mr() { return E.exports.useContext(dh) }
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function No() { return No = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, No.apply(this, arguments) }
var Jt;
(function(e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" })(Jt || (Jt = {}));
const ed = "popstate";

function ly(e) { e === void 0 && (e = {});

    function t(r, i) { let { pathname: o, search: l, hash: s } = r.location; return la("", { pathname: o, search: l, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default") }

    function n(r, i) { return typeof i == "string" ? i : sa(i) } return ay(t, n, null, e) }

function sy() { return Math.random().toString(36).substr(2, 8) }

function td(e) { return { usr: e.state, key: e.key } }

function la(e, t, n, r) { return n === void 0 && (n = null), No({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? gr(t) : t, { state: n, key: t && t.key || r || sy() }) }

function sa(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t }

function gr(e) { let t = {}; if (e) { let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n)); let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e) } return t }

function ay(e, t, n, r) { r === void 0 && (r = {}); let { window: i = document.defaultView, v5Compat: o = !1 } = r, l = i.history, s = Jt.Pop, a = null;

    function u() { s = Jt.Pop, a && a({ action: s, location: m.location }) }

    function d(v, y) { s = Jt.Push; let w = la(m.location, v, y);
        n && n(w, v); let _ = td(w),
            p = m.createHref(w); try { l.pushState(_, "", p) } catch { i.location.assign(p) }
        o && a && a({ action: s, location: w }) }

    function h(v, y) { s = Jt.Replace; let w = la(m.location, v, y);
        n && n(w, v); let _ = td(w),
            p = m.createHref(w);
        l.replaceState(_, "", p), o && a && a({ action: s, location: w }) } let m = {get action() { return s }, get location() { return e(i, l) }, listen(v) { if (a) throw new Error("A history only accepts one active listener"); return i.addEventListener(ed, u), a = v, () => { i.removeEventListener(ed, u), a = null } }, createHref(v) { return t(i, v) }, push: d, replace: h, go(v) { return l.go(v) } }; return m }
var nd;
(function(e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" })(nd || (nd = {}));

function uy(e, t, n) { n === void 0 && (n = "/"); let r = typeof t == "string" ? gr(t) : t,
        i = ph(r.pathname || "/", n); if (i == null) return null; let o = fh(e);
    cy(o); let l = null; for (let s = 0; l == null && s < o.length; ++s) l = wy(o[s], i); return l }

function fh(e, t, n, r) { return t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""), e.forEach((i, o) => { let l = { relativePath: i.path || "", caseSensitive: i.caseSensitive === !0, childrenIndex: o, route: i };
        l.relativePath.startsWith("/") && (Ce(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let s = an([r, l.relativePath]),
            a = n.concat(l);
        i.children && i.children.length > 0 && (Ce(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), fh(i.children, t, a, s)), !(i.path == null && !i.index) && t.push({ path: s, score: yy(s, i.index), routesMeta: a }) }), t }

function cy(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : vy(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))) }
const dy = /^:\w+$/,
    fy = 3,
    py = 2,
    hy = 1,
    my = 10,
    gy = -2,
    rd = e => e === "*";

function yy(e, t) { let n = e.split("/"),
        r = n.length; return n.some(rd) && (r += gy), t && (r += py), n.filter(i => !rd(i)).reduce((i, o) => i + (dy.test(o) ? fy : o === "" ? hy : my), r) }

function vy(e, t) { return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0 }

function wy(e, t) { let { routesMeta: n } = e, r = {}, i = "/", o = []; for (let l = 0; l < n.length; ++l) { let s = n[l],
            a = l === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            d = xy({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u); if (!d) return null;
        Object.assign(r, d.params); let h = s.route;
        o.push({ params: r, pathname: an([i, d.pathname]), pathnameBase: Ry(an([i, d.pathnameBase])), route: h }), d.pathnameBase !== "/" && (i = an([i, d.pathnameBase])) } return o }

function xy(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = Sy(e.path, e.caseSensitive, e.end), i = t.match(n); if (!i) return null; let o = i[0],
        l = o.replace(/(.)\/+$/, "$1"),
        s = i.slice(1); return { params: r.reduce((u, d, h) => { if (d === "*") { let m = s[h] || "";
                l = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1") } return u[d] = Cy(s[h] || "", d), u }, {}), pathname: o, pathnameBase: l, pattern: e } }

function Sy(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), hh(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (l, s) => (r.push(s), "([^\\/]+)")); return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r] }

function Cy(e, t) { try { return decodeURIComponent(e) } catch (n) { return hh(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e } }

function ph(e, t) { if (t === "/") return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/" }

function Ce(e, t) { if (e === !1 || e === null || typeof e > "u") throw new Error(t) }

function hh(e, t) { if (!e) { typeof console < "u" && console.warn(t); try { throw new Error(t) } catch {} } }

function ky(e, t) { t === void 0 && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? gr(e) : e; return { pathname: n ? n.startsWith("/") ? n : Ey(n, t) : t, search: Oy(r), hash: Py(i) } }

function Ey(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(i => { i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i) }), n.length > 1 ? n.join("/") : "/" }

function ql(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.' }

function mh(e, t, n, r) { r === void 0 && (r = !1); let i;
    typeof e == "string" ? i = gr(e) : (i = No({}, e), Ce(!i.pathname || !i.pathname.includes("?"), ql("?", "pathname", "search", i)), Ce(!i.pathname || !i.pathname.includes("#"), ql("#", "pathname", "hash", i)), Ce(!i.search || !i.search.includes("#"), ql("#", "search", "hash", i))); let o = e === "" || i.pathname === "",
        l = o ? "/" : i.pathname,
        s; if (r || l == null) s = n;
    else { let h = t.length - 1; if (l.startsWith("..")) { let m = l.split("/"); for (; m[0] === "..";) m.shift(), h -= 1;
            i.pathname = m.join("/") }
        s = h >= 0 ? t[h] : "/" } let a = ky(i, s),
        u = l && l !== "/" && l.endsWith("/"),
        d = (o || l === ".") && n.endsWith("/"); return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a }
const an = e => e.join("/").replace(/\/\/+/g, "/"),
    Ry = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Oy = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Py = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class _y { constructor(t, n, r) { this.status = t, this.statusText = n || "", this.data = r } }

function Ny(e) { return e instanceof _y }
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function aa() { return aa = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, aa.apply(this, arguments) }

function Ly(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
const $y = typeof Object.is == "function" ? Object.is : Ly,
    { useState: Ay, useEffect: Ty, useLayoutEffect: zy, useDebugValue: Iy } = rs;

function Dy(e, t, n) { const r = t(),
        [{ inst: i }, o] = Ay({ inst: { value: r, getSnapshot: t } }); return zy(() => { i.value = r, i.getSnapshot = t, es(i) && o({ inst: i }) }, [e, r, t]), Ty(() => (es(i) && o({ inst: i }), e(() => { es(i) && o({ inst: i }) })), [e]), Iy(r), r }

function es(e) { const t = e.getSnapshot,
        n = e.value; try { const r = t(); return !$y(n, r) } catch { return !0 } }

function Fy(e, t, n) { return t() }
const jy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    My = !jy,
    By = My ? Fy : Dy;
"useSyncExternalStore" in rs && (e => e.useSyncExternalStore)(rs);
const Uy = E.exports.createContext(null),
    Hy = E.exports.createContext(null),
    gh = E.exports.createContext(null),
    xu = E.exports.createContext(null),
    vl = E.exports.createContext(null),
    yr = E.exports.createContext({ outlet: null, matches: [] }),
    yh = E.exports.createContext(null);

function by(e, t) { let { relative: n } = t === void 0 ? {} : t;
    vi() || Ce(!1); let { basename: r, navigator: i } = E.exports.useContext(xu), { hash: o, pathname: l, search: s } = xh(e, { relative: n }), a = l; return r !== "/" && (a = l === "/" ? r : an([r, l])), i.createHref({ pathname: a, search: s, hash: o }) }

function vi() { return E.exports.useContext(vl) != null }

function wl() { return vi() || Ce(!1), E.exports.useContext(vl).location }

function vh(e) { return e.filter((t, n) => n === 0 || !t.route.index && t.pathnameBase !== e[n - 1].pathnameBase) }

function zn() { vi() || Ce(!1); let { basename: e, navigator: t } = E.exports.useContext(xu), { matches: n } = E.exports.useContext(yr), { pathname: r } = wl(), i = JSON.stringify(vh(n).map(s => s.pathnameBase)), o = E.exports.useRef(!1); return E.exports.useEffect(() => { o.current = !0 }), E.exports.useCallback(function(s, a) { if (a === void 0 && (a = {}), !o.current) return; if (typeof s == "number") { t.go(s); return } let u = mh(s, JSON.parse(i), r, a.relative === "path");
        e !== "/" && (u.pathname = u.pathname === "/" ? e : an([e, u.pathname])), (a.replace ? t.replace : t.push)(u, a.state, a) }, [e, t, i, r]) }

function wh() { let { matches: e } = E.exports.useContext(yr), t = e[e.length - 1]; return t ? t.params : {} }

function xh(e, t) { let { relative: n } = t === void 0 ? {} : t, { matches: r } = E.exports.useContext(yr), { pathname: i } = wl(), o = JSON.stringify(vh(r).map(l => l.pathnameBase)); return E.exports.useMemo(() => mh(e, JSON.parse(o), i, n === "path"), [e, o, i, n]) }

function Wy(e, t) { vi() || Ce(!1); let n = E.exports.useContext(gh),
        { matches: r } = E.exports.useContext(yr),
        i = r[r.length - 1],
        o = i ? i.params : {};
    i && i.pathname; let l = i ? i.pathnameBase : "/";
    i && i.route; let s = wl(),
        a; if (t) { var u; let y = typeof t == "string" ? gr(t) : t;
        l === "/" || ((u = y.pathname) == null ? void 0 : u.startsWith(l)) || Ce(!1), a = y } else a = s; let d = a.pathname || "/",
        h = l === "/" ? d : d.slice(l.length) || "/",
        m = uy(e, { pathname: h }),
        v = Yy(m && m.map(y => Object.assign({}, y, { params: Object.assign({}, o, y.params), pathname: an([l, y.pathname]), pathnameBase: y.pathnameBase === "/" ? l : an([l, y.pathnameBase]) })), r, n || void 0); return t ? f(vl.Provider, { value: { location: aa({ pathname: "/", search: "", hash: "", state: null, key: "default" }, a), navigationType: Jt.Pop }, children: v }) : v }

function Vy() { let e = Xy(),
        t = Ny(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        i = { padding: "0.5rem", backgroundColor: r },
        o = { padding: "2px 4px", backgroundColor: r }; return O(ny, { children: [f("h2", { children: "Unhandled Thrown Error!" }), f("h3", { style: { fontStyle: "italic" }, children: t }), n ? f("pre", { style: i, children: n }) : null, f("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }), O("p", { children: ["You can provide a way better UX than this when your app throws errors by providing your own\xA0", f("code", { style: o, children: "errorElement" }), " props on\xA0", f("code", { style: o, children: "<Route>" })] })] }) }
class Gy extends E.exports.Component { constructor(t) { super(t), this.state = { location: t.location, error: t.error } }
    static getDerivedStateFromError(t) { return { error: t } }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location ? { error: t.error, location: t.location } : { error: t.error || n.error, location: n.location } }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n) }
    render() { return this.state.error ? f(yh.Provider, { value: this.state.error, children: this.props.component }) : this.props.children } }

function Qy(e) { let { routeContext: t, match: n, children: r } = e, i = E.exports.useContext(Uy); return i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id), f(yr.Provider, { value: t, children: r }) }

function Yy(e, t, n) { if (t === void 0 && (t = []), e == null)
        if (n != null && n.errors) e = n.matches;
        else return null;
    let r = e,
        i = n == null ? void 0 : n.errors; if (i != null) { let o = r.findIndex(l => l.route.id && (i == null ? void 0 : i[l.route.id]));
        o >= 0 || Ce(!1), r = r.slice(0, Math.min(r.length, o + 1)) } return r.reduceRight((o, l, s) => { let a = l.route.id ? i == null ? void 0 : i[l.route.id] : null,
            u = n ? l.route.errorElement || f(Vy, {}) : null,
            d = () => f(Qy, { match: l, routeContext: { outlet: o, matches: t.concat(r.slice(0, s + 1)) }, children: a ? u : l.route.element !== void 0 ? l.route.element : o }); return n && (l.route.errorElement || s === 0) ? f(Gy, { location: n.location, component: u, error: a, children: d() }) : d() }, null) }
var id;
(function(e) { e.UseRevalidator = "useRevalidator" })(id || (id = {}));
var ua;
(function(e) { e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator" })(ua || (ua = {}));

function Ky(e) { let t = E.exports.useContext(gh); return t || Ce(!1), t }

function Xy() { var e; let t = E.exports.useContext(yh),
        n = Ky(ua.UseRouteError),
        r = E.exports.useContext(yr),
        i = r.matches[r.matches.length - 1]; return t || (r || Ce(!1), i.route.id || Ce(!1), (e = n.errors) == null ? void 0 : e[i.route.id]) }

function $t(e) { Ce(!1) }

function Jy(e) { let { basename: t = "/", children: n = null, location: r, navigationType: i = Jt.Pop, navigator: o, static: l = !1 } = e;
    vi() && Ce(!1); let s = t.replace(/^\/*/, "/"),
        a = E.exports.useMemo(() => ({ basename: s, navigator: o, static: l }), [s, o, l]);
    typeof r == "string" && (r = gr(r)); let { pathname: u = "/", search: d = "", hash: h = "", state: m = null, key: v = "default" } = r, y = E.exports.useMemo(() => { let w = ph(u, s); return w == null ? null : { pathname: w, search: d, hash: h, state: m, key: v } }, [s, u, d, h, m, v]); return y == null ? null : f(xu.Provider, { value: a, children: f(vl.Provider, { children: n, value: { location: y, navigationType: i } }) }) }

function Sh(e) { let { children: t, location: n } = e, r = E.exports.useContext(Hy), i = r && !t ? r.router.routes : ca(t); return Wy(i, n) }
var od;
(function(e) { e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error" })(od || (od = {}));
new Promise(() => {});

function ca(e, t) { t === void 0 && (t = []); let n = []; return E.exports.Children.forEach(e, (r, i) => { if (!E.exports.isValidElement(r)) return; if (r.type === E.exports.Fragment) { n.push.apply(n, ca(r.props.children, t)); return }
        r.type !== $t && Ce(!1), !r.props.index || !r.props.children || Ce(!1); let o = [...t, i],
            l = { id: r.props.id || o.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, hasErrorBoundary: r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle };
        r.props.children && (l.children = ca(r.props.children, o)), n.push(l) }), n }
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zy(e, t) { if (e == null) return {}; var n = {},
        r = Object.keys(e),
        i, o; for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]); return n }

function qy(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) }

function ev(e, t) { return e.button === 0 && (!t || t === "_self") && !qy(e) }
const tv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];

function nv(e) { let { basename: t, children: n, window: r } = e, i = E.exports.useRef();
    i.current == null && (i.current = ly({ window: r, v5Compat: !0 })); let o = i.current,
        [l, s] = E.exports.useState({ action: o.action, location: o.location }); return E.exports.useLayoutEffect(() => o.listen(s), [o]), f(Jy, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: o }) }
const gn = E.exports.forwardRef(function(t, n) { let { onClick: r, relative: i, reloadDocument: o, replace: l, state: s, target: a, to: u, preventScrollReset: d } = t, h = Zy(t, tv), m = by(u, { relative: i }), v = rv(u, { replace: l, state: s, target: a, preventScrollReset: d, relative: i });

    function y(w) { r && r(w), w.defaultPrevented || v(w) } return f("a", {...h, href: m, onClick: o ? r : y, ref: n, target: a }) });
var ld;
(function(e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher" })(ld || (ld = {}));
var sd;
(function(e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" })(sd || (sd = {}));

function rv(e, t) { let { target: n, replace: r, state: i, preventScrollReset: o, relative: l } = t === void 0 ? {} : t, s = zn(), a = wl(), u = xh(e, { relative: l }); return E.exports.useCallback(d => { if (ev(d, n)) { d.preventDefault(); let h = r !== void 0 ? r : sa(a) === sa(u);
            s(e, { replace: h, state: i, preventScrollReset: o, relative: l }) } }, [a, s, u, r, i, n, e, o, l]) }
var Ch = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    ad = St.createContext && St.createContext(Ch),
    un = globalThis && globalThis.__assign || function() { return un = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++) { t = arguments[n]; for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]) } return e }, un.apply(this, arguments) },
    iv = globalThis && globalThis.__rest || function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]); return n };

function kh(e) { return e && e.map(function(t, n) { return St.createElement(t.tag, un({ key: n }, t.attr), kh(t.child)) }) }

function it(e) { return function(t) { return f(ov, {...un({ attr: un({}, e.attr) }, t), children: kh(e.child) }) } }

function ov(e) { var t = function(n) { var r = e.attr,
            i = e.size,
            o = e.title,
            l = iv(e, ["attr", "size", "title"]),
            s = i || n.size || "1em",
            a; return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), O("svg", {...un({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, l, { className: a, style: un(un({ color: e.color || n.color }, n.style), e.style), height: s, width: s, xmlns: "http://www.w3.org/2000/svg" }), children: [o && f("title", { children: o }), e.children] }) }; return ad !== void 0 ? f(ad.Consumer, { children: function(n) { return t(n) } }) : t(Ch) }

function xl(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "15 18 9 12 15 6" } }] })(e) }

function lv(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "9 18 15 12 9 6" } }] })(e) }

function sv(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" } }, { tag: "polyline", attr: { points: "16 17 21 12 16 7" } }, { tag: "line", attr: { x1: "21", y1: "12", x2: "9", y2: "12" } }] })(e) }

function av(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } }, { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } }, { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } }] })(e) }

function Eh(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } }] })(e) }

function Su(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "12", y1: "5", x2: "12", y2: "19" } }, { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } }] })(e) }

function uv(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" } }, { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } }] })(e) }

function Rh(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" } }, { tag: "polyline", attr: { points: "17 8 12 3 7 8" } }, { tag: "line", attr: { x1: "12", y1: "3", x2: "12", y2: "15" } }] })(e) }

function Oh(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } }, { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } }] })(e) }
const cv = "/assets/logo.23ad99b0.svg",
    Lo = "/assets/receipt.f0a15e14.svg",
    dv = F.header `
  width: 100%;
  height: 10.4rem;

  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_700};
`,
    fv = F.div `
  max-width: 136.8rem;
  height: 10.4rem;
  margin-inline: auto;
  padding-inline: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    transition: all 1s;

    svg {
      margin-top: .3rem;
      color: white;
      font-size: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem;

    > button {
      display: none;
    } 
  }
`,
    pv = F.div `
  position: absolute;
  top: 10.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  height: 40rem;

  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_900};
  padding-inline: 4rem;
  padding-top: 5rem;

  opacity: ${({isVisible:e})=>e?1:0};
  visibility: ${({isVisible:e})=>e?"visible":"hidden"};
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-20%)"};

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  transition: all 0.4s;

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
    height: 0;

    margin-left: 3.2rem;

    flex-direction: row;
    align-items: center;
    background: none;

    opacity: 1;
    visibility: visible;

    transform: translateY(0);
    transition: all 0s;
  }
`,
    hv = F(gn)
`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  color: ${({theme:e})=>e.COLORS.WHITE};
`, mv = F.button `
  color: ${({theme:e})=>e.COLORS.GRAY_100};
  background: none;
  border: none;
  font-size: 1.6rem;
`, gv = F(gn)
`
  background-color: ${({theme:e})=>e.COLORS.RED};
  color: ${({theme:e})=>e.COLORS.GRAY_100};
  padding-inline: 1.2rem;
  border-radius: 0.5rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`, yv = F.div `
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_400};
  border-radius: 0.5rem;
  padding-right: 1.6rem;
  position: relative;

  > svg {
    left: 1.6rem;
    position: absolute;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;

    padding-left: 4.8rem;
    border: none;
    background: transparent;
    color: ${({theme:e})=>e.COLORS.WHITE};

    &::placeholder {
      color: ${({theme:e})=>e.COLORS.GRAY_500};
    }
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`, ud = F.button `
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  background-color: ${({theme:e})=>e.COLORS.RED};
  color: ${({theme:e})=>e.COLORS.WHITE};
  font-size: 1.4rem;

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    width: 21.6rem;
  }
`, vv = F(gn)
`
  > svg {
    font-size: 2.2rem;
    color: ${({theme:e})=>e.COLORS.WHITE};
  } 
`;

function vr({ search: e, functionButton: t }) { const [n, r] = E.exports.useState(!1), { user: i, signOut: o } = mn(), { cart: l, orders: s } = mr(), a = zn(), u = l.length === 0;

    function d() { a("/cart") }

    function h() { a("/orders") } return f(dv, { children: O(fv, { children: [O(hv, { to: "/", children: [f("img", { src: cv, alt: "pol\xEDgono azul" }), f("strong", { children: "food explorer" })] }), O(pv, { isVisible: n, children: [i.isAdmin ? f(gv, { to: "/new", children: "+ Adicionar novo prato" }) : f(mv, { type: "button", onClick: t, children: "Meus favoritos" }), O(yv, { children: [f(uv, { size: 20 }), f("input", { type: "text", placeholder: "Busque pelas op\xE7\xF5es de pratos", onChange: m => { e(m.target.value) } })] }), i.isAdmin ? O(ud, { type: "button", onClick: h, children: [f("img", { src: Lo, alt: "receipt" }), "pedidos", O("span", { children: ["(", s.length, ")"] })] }) : O(ud, { type: "button", onClick: d, disabled: u, children: [f("img", { src: Lo, alt: "receipt" }), "Meu pedido ", O("span", { children: ["(", l.length, ")"] })] }), f(vv, { to: "/", onClick: o, children: f(sv, {}) })] }), f("button", { type: "button", onClick: () => r(!n), children: n ? f(Oh, {}) : f(av, {}) })] }) }) }
const wv = F.section `
  padding-inline: 4rem;
  margin-bottom: 4rem;
  > h2 {
    font-size: clamp(2rem, 2rem + 3vw, 3.2rem);
    margin-bottom: 4rem;
  }
  
  @media (min-width: 768px) {
    padding-inline: 0;
  }
`,
    xv = F.div `
  position: relative;
  max-width: 136.8rem;
  > div {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .btn-left, .btn-right {
    position: absolute;
    z-index: 5;
    height: 51.2rem;
    width: 11.6rem;
    padding-inline: 1rem;
    color: ${({theme:e})=>e.COLORS.WHITE};
    display: none;
  }
  .btn-left {
    top: 0;
    left: 0;
    border: none;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }
  .btn-right {
    top: 0;
    right: 0;
    justify-content: flex-end;
    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }
  @media (min-width: 768px) {
    .btn-left, .btn-right {
      display: flex;
      align-items: center;
      transition: all ease 0.5s;
      opacity: 0;
    }
    &:hover {
      .btn-left, .btn-right {
        opacity: 1;
      }
    }
  }
`;

function ts({ title: e, children: t }) { const n = E.exports.useRef(null);

    function r(o) { o.preventDefault(), n.current.scrollLeft -= n.current.offsetWidth }

    function i(o) { o.preventDefault(), n.current.scrollLeft += n.current.offsetWidth } return O(wv, { children: [f("h2", { children: e }), O(xv, { children: [f("button", { className: "btn-left", onClick: r, children: f(xl, { size: 50 }) }), f("div", { ref: n, children: t }), f("button", { className: "btn-right", onClick: i, children: f(lv, { size: 50 }) })] })] }) }

function Sv(e) { return it({ tag: "svg", attr: { viewBox: "0 0 256 512" }, child: [{ tag: "path", attr: { d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" } }] })(e) }

function Cv(e) { return it({ tag: "svg", attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" } }] })(e) }

function cd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" } }] })(e) }
const kv = F.button `
  width: 100%;
  height: 4.8rem;
  
  border: none;
  border-radius: 0.8rem;
  background: ${({theme:e})=>e.COLORS.RED};
  color: ${({theme:e})=>e.COLORS.WHITE};
  font-size: 1.4rem;

  display: ${({isInvisible:e})=>e?"none":"flex"};
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function wi({ title: e, image: t, isInvisible: n = !1, ...r }) { return O(kv, { type: "button", isInvisible: n, ...r, children: [t ? f("img", { src: t, alt: "\xEDcone do bot\xE3o" }) : "", e] }) }
const Ev = "/assets/heart.bcecd9f2.svg",
    Rv = "/assets/heart-fill.1c8ddbac.svg",
    Ov = F.div `
  width: 30rem;
  height: 51.2rem;
  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_900};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  flex: none;

  > button:first-child {
    display: flex;
    position: absolute;
    top: 2.1rem;
    right: 2.1rem;

    background: none;
    border: none;

    svg {
      fill: ${({theme:e,isFavorite:t})=>t?e.COLORS.RED:e.COLORS.WHITE};
    }
  }

  > div:nth-child(2) {
    width: 17.6rem;
    height: 17.6rem;
    img {
      width: 100%;
    }
  }

  > a {
    h3 {
    margin-top: 1.6rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    font-weight: 700;

    color: ${({theme:e})=>e.COLORS.WHITE};

    display: flex;
    align-items: center;
    }
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    padding-inline: 4rem;
    color: ${({theme:e})=>e.COLORS.GRAY_200};
  }

  > strong {
    font-size: 3.2rem;
    color: ${({theme:e})=>e.COLORS.LIGHT_GREEN};
    margin-block: 1.6rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.7rem;
    width: 22rem;

    position: relative;
    z-index: 10;

    span {
      font-size: 2rem;
      font-weight: 700;
    }
    
    .btn {
      background: none;
      border: none;
      color: ${({theme:e})=>e.COLORS.WHITE};

      display: flex;
      align-items: center;

      position: relative;

      z-index: 6;
    }

  }
`;

function ns({ data: e, ...t }) { const [n, r] = E.exports.useState(1), { user: i } = mn(), { favorites: o, addDishToFavorite: l, removeDishFromFavorite: s } = ch(), { handleAddDishToCart: a, paymentAccept: u } = mr(), d = o.some(c => c.title === e.title), h = zn(), m = `${Ne.defaults.baseURL}/files/${e.image}`;

    function v() { n >= 9 || r(n + 1) }

    function y() { n <= 1 || r(n - 1) }

    function w(c) { h(`/details/${c}`) }

    function _(c) { h(`/edit/${c}`) }
    async function p() { window.confirm("Deseja realmente remover esse prato?") && (console.log(e.id), await Ne.delete(`/dishes/${e.id}`), location.reload()) } return O(Ov, {...t, children: [i.isAdmin ? f("button", { onClick: p, children: f(Cv, { size: 25 }) }) : f("button", { type: "button", onClick: () => d ? s(e) : l(e), children: f("img", { src: d ? Rv : Ev, alt: "heart" }) }), f("div", { children: f("img", { src: m, alt: e.title }) }), f("a", { type: "button", onClick: i.isAdmin ? () => _(e.id) : () => w(e.id), children: O("h3", { children: [e.title, " ", f(Sv, {})] }) }), f("p", { children: e.description }), O("strong", { children: ["R$ ", e.price] }), i.isAdmin ? f("div", {}) : O("div", { children: [f("button", { onClick: y, className: "btn", children: f(Eh, { size: 25 }) }), O("span", { children: ["0", n] }), f("button", { onClick: v, className: "btn", children: f(Su, { size: 25 }) }), f(wi, { title: "incluir", onClick: () => a(e, n, m), disabled: u })] })] }) }
const Pv = "/assets/logo-footer.11fee272.svg",
    _v = F.footer `
  width: 100%;
  height: 12.4rem;
  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_700};
  margin-top: 10rem;
`,
    Nv = F.div `
  height: 100%;
  max-width: 136.8rem;
  margin-inline: auto;
  padding-inline: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    img {
      opacity: .3;
    }
    span {
      font-size: 2.4rem;
      opacity: .3;
    }
  }
  > p {
    font-size: 1.4rem;
    color: ${({theme:e})=>e.COLORS.GRAY_200};
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem
  }
`;

function wr() { return f(_v, { children: O(Nv, { children: [O("div", { children: [f("img", { src: Pv, alt: "Logo" }), f("span", { children: "food explorer" })] }), f("p", { children: "\xA9 2022 - Todos os direitos reservados." })] }) }) }
const Lv = "/assets/cover-photo.039995e9.png",
    $v = F.div `
  width: 100%;
  margin-inline: auto;
`,
    Av = F.div `
  max-width: 136.8rem;
  flex: 1;
  
  @media (min-width: 768px) {
    padding-inline: 12.3rem;
    margin-inline: auto;
  }
`,
    Tv = F.div `
  margin-top: 3rem;
  margin-inline: auto;
  padding-inline: 4rem;
  margin-bottom: 4.8rem;
  > img {
    width: 100%;
  }
  
  > div {
    margin-top: 2rem;
     h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(2.6rem, 1rem + 3vw, 4rem);
      margin-bottom: 0.8rem;
     }
     p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
     }
  }

  @media (min-width: 1224px) {
    height: 26rem;
    margin-top: 16.4rem;
    border-radius: 0.8rem;
    justify-content: flex-end;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    display: flex;
    align-items: center;
    position: relative;
    > img {
      width: max(63.2rem);
      position: absolute;
      bottom: 0;
      left: -5rem;
    }
    > div {
      margin-top: 0;
    }
  }
`;

function zv() { const [e, t] = E.exports.useState([]), [n, r] = E.exports.useState(""), { favorites: i } = ch();

    function o(l) { l.length !== 0 && t(i) } return E.exports.useEffect(() => { async function l() { const s = await Ne.get(`/dishes?title=${n}`);
            t(s.data) }
        l() }, [n, i.length === 0]), O($v, { children: [f(vr, { search: r, functionButton: () => o(i) }), O(Av, { children: [O(Tv, { children: [f("img", { src: Lv, alt: "cover photo" }), O("div", { children: [f("h1", { children: "Sabores inigual\xE1veis" }), f("p", { children: "Sinta o cuidado do preparo com ingredientes selecionados" })] })] }), e.filter(l => l.category == "pratos principais").length > 0 && f(ts, { title: "Pratos principais", children: e.filter(l => l.category == "pratos principais").map(l => f(ns, { data: l }, String(l.id))) }), e.filter(l => l.category == "sobremesas").length > 0 && f(ts, { title: "Sobremesas", children: e.filter(l => l.category == "sobremesas").map(l => f(ns, { data: l }, String(l.id))) }), e.filter(l => l.category == "bebidas").length > 0 && f(ts, { title: "Bebidas", children: e.filter(l => l.category == "bebidas").map(l => f(ns, { data: l }, String(l.id))) })] }), f(wr, {})] }) }
const Iv = "/assets/alface.d2de2346.png",
    Dv = "/assets/tomate.b4b48145.png",
    Fv = "/assets/rabanete.b9e38cc2.png",
    jv = "/assets/pao-naan.fde170d0.png",
    Mv = "/assets/pao.93380ebe.png",
    Bv = "/assets/presunto.7e0b752c.png",
    Uv = "/assets/rucula.26185fb3.png",
    Hv = "/assets/camarao.0c4ae306.png",
    bv = "/assets/massa.4df83da7.png",
    Wv = "/assets/pesto.5f3e9db5.png",
    Vv = "/assets/pepino.a94d035e.png",
    Gv = "/assets/ameixa.c56743a7.png",
    Qv = "/assets/farinha.3f3d8df9.png",
    Yv = "/assets/pessego.29244ed7.png",
    Kv = "/assets/amendoas.3fa43bf8.png",
    Xv = "/assets/claras.b6a6b4e2.png",
    dd = "/assets/damasco.904417d9.png",
    Jv = "/assets/maracuja.7f8a6d36.png",
    Zv = "/assets/cafe.5e19d825.png",
    qv = "/assets/canela.7a2310ca.png",
    ew = "/assets/aniz.caf41099.png",
    tw = "/assets/limao.3f4d56ab.png",
    nw = "/assets/whiskey.fc19f6fe.png",
    rw = "/assets/maca.c4e54eff.png",
    iw = F.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  > img {
    width: 7.2rem;
    height: 7.2rem;
  }
  .ingredient-name {
    font-size: 1.8rem;
    color: ${({theme:e})=>e.COLORS.GRAY_100};
  }
`;

function ow({ ingredient: e }) {
    function t(r) { let i = r.toLowerCase().trim(); return i == "alface" ? Iv : i == "tomate" ? Dv : i == "rabanete" ? Fv : i == "p\xE3o naan" ? jv : i == "p\xE3o" ? Mv : i == "presunto" ? Bv : i == "r\xFAcula" ? Uv : i == "camar\xE3o" ? Hv : i == "massa" ? bv : i == "pesto" ? Wv : i == "pepino" ? Vv : i == "ameixa" ? Gv : i == "farinha" ? Qv : i == "p\xEAssego" ? Yv : i == "am\xEAndoas" ? Kv : i == "claras" ? Xv : i == "damasco" ? dd : i == "maracuj\xE1" ? Jv : i == "caf\xE9" ? Zv : i == "canela" ? qv : i == "aniz" ? ew : i == "lim\xE3o" ? tw : i == "whiskey" ? nw : i == "ma\xE7\xE3" ? rw : dd } let n = t(e); return O(iw, { children: [f("img", { src: n, alt: "" }), f("span", { className: "ingredient-name", children: e })] }) }
const lw = F.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;                 
`,
    sw = F.div `
  width: 100%;
  margin: 2.4rem auto 4rem;
  display: flex;
  
  > a {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

    color: ${({theme:e})=>e.COLORS.WHITE};
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`,
    aw = F.div `
  max-width: 136.8rem;
  height: 100%;
  padding-inline: 4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-inline: 12.3rem;
    gap: 4rem;
  }
`,
    uw = F.main `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    max-width: 25rem;
    border-radius: 50%;

    img {
      max-width: 100%;
    }
  }

  > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins', sans-serif;

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.8rem;
      font-size: clamp(2.4rem, 1rem + 3vw, 4rem);
      font-weight: 700;
    }

    p {
      text-align: center;
      font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);
      color: ${({theme:e})=>e.COLORS.GRAY_200};
    }

    div:nth-child(5) {
      width: 5rem;
      
      img {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;

    > div:nth-child(1) {
      max-width: 39rem;
      border-radius: 50%;
    }

    > div:nth-child(2) {
      max-width: 60rem;
      align-items: flex-start;

      h1 {
        margin-top: 0;
      }

      p {
        text-align: left;
      }

      div:nth-child(5) {
        width: 10rem;
        img {
          display: block;
        }
      }
    }
  }
`,
    cw = F.div `
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-block: 3rem;
`,
    dw = F.div `
  margin-top: 2rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 1.7rem;
  width: 100%;

  strong {
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    color: ${({theme:e})=>e.COLORS.LIGHT_GREEN};
    min-width: 10rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }
    
  .btn {
    background: none;
    border: none;
    color: ${({theme:e})=>e.COLORS.WHITE};

    display: flex;
    align-items: center;

    position: relative;

    z-index: 6;
  }

  @media (min-width: 768px) {
    padding-inline: 0;
     
    > strong{
      min-width: 14rem;
    } 
  }
`;

function fw() { const [e, t] = E.exports.useState(1), [n, r] = E.exports.useState(null), i = wh(), { handleAddDishToCart: o } = mr();
    console.log(n); const l = n && `${Ne.defaults.baseURL}/files/${n.image}`;

    function s() { e >= 9 || t(e + 1) }

    function a() { e <= 1 || t(e - 1) } return E.exports.useEffect(() => { async function u() { const d = await Ne.get(`/dishes/${i.id}`);
            r(d.data) }
        u() }, []), O(lw, { children: [f(vr, {}), O(aw, { children: [f(sw, { children: O(gn, { to: "/", children: [" ", f(xl, { size: 30 }), "Voltar"] }) }), n && O(uw, { children: [f("div", { children: f("img", { src: l, alt: `imagem de ${n.title}` }) }), O("div", { children: [f("h1", { children: n.title }), f("p", { children: n.description }), f(cw, { children: n.ingredients.map(u => f(ow, { ingredient: u.name }, String(u.id))) }), O(dw, { children: [O("strong", { children: ["R$ ", n.price] }), f("button", { onClick: a, className: "btn", children: f(Eh, { size: 25 }) }), O("span", { children: ["0", e] }), f("button", { onClick: s, className: "btn", children: f(Su, { size: 25 }) }), f("div", { children: f(wi, { title: "incluir", image: Lo, onClick: () => o(n, e, l) }) })] })] })] })] }), f(wr, {})] }) }

function fd(e) { return it({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z" } }] }] })(e) }
const pw = F.div `
  height: 10rem;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  > div {

    img {
      width: 7.2rem;
      height: 7.2rem;
      border-radius: 50%;

      object-fit: cover;
    }
  }
`,
    hw = F.div `
  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 2rem;
    }

    strong {
      font-size: 1.2rem;
      color: ${({theme:e})=>e.COLORS.GRAY_200};
    }
  }

  > button {
    margin-top: 1rem;
    border: none;
    background: transparent;
    color: #da505d;
    font-size: 1.2rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

function mw({ data: e }) { const { handleRemoveDishFromCart: t, paymentAccept: n } = mr(); return O(pw, { children: [f("div", { children: f("img", { src: e.image, alt: "imagem do prato" }) }), O(hw, { children: [O("div", { children: [O("span", { children: [e.quantity, "X"] }), f("span", { children: e.title }), O("strong", { children: ["R$ ", e.price] })] }), f("button", { type: "button", onClick: () => t(e.id), disabled: n, children: "Excluir" })] })] }) }
const gw = F.div `
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme:e})=>e.COLORS.GRAY_200};

  > input {
    height: 4.8rem;
    padding: 1.4rem;

    border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 0.5rem;

    color: ${({theme:e})=>e.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({theme:e})=>e.COLORS.GRAY_500};
      font-size: 1.6rem;
    }
  }
`;

function Ye({ label: e, title: t, ...n }) { return O(gw, { children: [f("label", { htmlFor: e, children: t }), f("input", { id: e, ...n })] }) }
const yw = "/assets/pix.16369e2d.svg",
    vw = "/assets/credit-card.e3f455a5.svg",
    ww = "/assets/qr-code.d475431d.png",
    xw = F.div `
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`,
    Sw = F.main `
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: 136.8rem;
  padding-inline: 4rem;
  margin-inline: auto;
  > div {
    padding-top: 3.4rem;
    width: 100%;

    h3 {
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      margin-bottom: 3rem;
    }

    .section-order {
      height: 40rem;
      padding-right: 4rem;
      overflow-y: auto;
      width: max-content;
    }

    .result {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-inline: 12.3rem;
    justify-content: space-between;
    width: 100%;
  }
`,
    Cw = F.div `
  max-width: 35rem;

  > div {
    border: 1px solid rgba(255, 255, 255, 0.1);

    div:nth-child(1) {
      display: flex;

      button {
        width: 100%;
        height: 8.1rem;

        border: 1px solid rgba(255, 255, 255, 0.1);
        background: transparent;

        color: white;
        font-size: 1.6rem;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
      }
      .add-background {
        background: rgba(255, 255, 255, 0.05);
      }

      .button-pix {
        background: ${({ButtonBackgroundIsActive:e})=>e?"rgba(255, 255, 255, 0.05)":"none"};
      }

      .button-credit {
        background: ${({ButtonBackgroundIsActive:e})=>e?"none":"rgba(255, 255, 255, 0.05)"};
      }
    }

    .option-payment {
      padding: 4rem 4rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        max-width: 100%;
        margin-inline: auto;
        padding-bottom: 2rem
      }

      @media (min-width: 768px) {
        padding: 4rem 9rem;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 53rem;
  }
  
`,
    kw = F.section `
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.7rem;

  .data-card {
    display: flex;
    gap: 1.4rem;
    margin-bottom: 3.7rem;

    input {
      width: 100%;
    }
  }

`,
    pd = F.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-block: 2.2rem;
  
  > svg {
    font-size: 10.4rem;
    color: ${({theme:e})=>e.COLORS.GRAY_200};
  }

  > p {
    color: ${({theme:e})=>e.COLORS.GRAY_200};
    font-size: 2.4rem;
  }
`;

function Ew() { const [e, t] = E.exports.useState(!0), [n, r] = E.exports.useState(), [i, o] = E.exports.useState(!1), { cart: l, total: s, paymentAccept: a, setPaymentAccept: u, handleResetCart: d } = mr(), { user: h } = mn(), m = zn();

    function v(c) { let g; if (c.status == "pendente") g = "Seu pedido est\xE1 pendente";
        else if (c.status == "preparando") g = "Seu pedido est\xE1 em processo de preparo";
        else if (c.status == "entregue") g = "Seu pedido foi entregue";
        else return; return g }

    function y(c) { return { status: "pendente", paymentMethod: e ? "pix" : "creditCard", orders: c.map(g => ({ id: g.id, title: g.title, quantity: g.quantity })) } }

    function w() { t(!0) }

    function _() { t(!1) }
    async function p(c) { u(!0), o(!0); const g = y(c);
        await Ne.post("/carts", g), o(!1) } return E.exports.useEffect(() => { async function c() { const g = await Ne.get(`/carts/${h.id}`);
            r(g.data) }
        c() }, []), O(xw, { children: [f(vr, {}), O(Sw, { children: [O("div", { children: [f("h3", { children: "Meu pedido" }), f("div", { className: "section-order", children: l && l.map(c => f(mw, { data: c }, String(c.id))) }), f("div", { className: "result", children: O("p", { children: ["Total: R$ ", f("span", { children: s })] }) })] }), O(Cw, { ButtonBackgroundIsActive: e, children: [f("h3", { children: "Pagamento" }), O("div", { children: [O("div", { children: [O("button", { className: "button-pix", type: "button", onClick: w, children: [f("img", { src: yw, alt: "\xEDcone do pix" }), "Pix"] }), O("button", { className: "button-credit", type: "button", onClick: _, children: [f("img", { src: vw, alt: "\xEDcone de um cart\xE3o de credito" }), "Cr\xE9dito"] })] }), O("div", { className: "option-payment", children: [e ? a ? O(pd, { children: [n && n.status == "entregue" ? f(fd, {}) : f(cd, {}), n && n.status == "entregue" ? "" : f("p", { children: "Pagamento aprovado! " }), n && f("span", { children: v(n) }), n && n.status == "entregue" ? f("button", { onClick: () => d(h.id, m), children: "Pedido recebido" }) : f("span", {})] }) : f("img", { src: ww, alt: "qr code" }) : a ? O(pd, { children: [n && n.status == "entregue" ? f(fd, {}) : f(cd, {}), n && n.status == "entregue" ? "" : f("p", { children: "Pagamento aprovado! " }), n && f("span", { children: v(n) }), n && n.status == "entregue" ? f("button", { children: "Pedido recebido" }) : f("span", {})] }) : O(kw, { children: [f(Ye, { type: "number", title: "N\xFAmero do Cart\xE3o", label: "card-number", placeholder: "0000 0000 0000 0000" }), O("div", { className: "data-card", children: [f(Ye, { type: "data", title: "Validade", label: "validated", placeholder: "04/25" }), f(Ye, { type: "number", title: "CVC", label: "cvc", placeholder: "000" })] })] }), f(wi, { image: Lo, title: i ? "Realizando pagamento" : "Finalizar pagamento", onClick: () => p(l), isInvisible: a, disabled: i })] })] })] })] }), f(wr, {})] }) }
const Rw = F.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({theme:e})=>e.COLORS.GRAY_200};
`,
    Ow = F.textarea `
  width: 100%;
  height: 17.2rem;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({theme:e})=>e.COLORS.WHITE};
  padding: 1.4rem;
  border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
  border-radius: 0.5rem;
  background: transparent;
  &::placeholder {
    color: ${({theme:e})=>e.COLORS.GRAY_500};
    font-size: 1.6rem;
  }
`;

function Ph({ label: e, title: t, value: n, ...r }) { return O(Rw, { children: [f("label", { htmlFor: e, children: t }), f(Ow, { id: e, ...r, children: n })] }) }
const Pw = F.div `
  display: flex;
  align-items: center;
  background-color: ${({isNew:e})=>e?"transparent":"#1A2327"};
  color: ${({theme:e,isNew:t})=>t?e.COLORS.GRAY_500:"#FFFFFF"};
  border: ${({theme:e,isNew:t})=>t?`
1 px dashed $ { e.COLORS.GRAY_500 }
`:"none"};
  padding-right: 1.2rem;
  border-radius: 0.8rem;
  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
  }
  .button-delete {
    color: #FFFFFF;
  }
  .button-add {
    color: ${({theme:e})=>e.COLORS.GRAY_500}
  }
  > input {
    height: 3.2rem;
    width: 10rem;
    padding: 1.2rem;
    font-size: 1.6rem;
    color: ${({theme:e,isNew:t})=>t?e.COLORS.GRAY_500:"#FFFFFF"};
    background: transparent;
    border: none;
  }
`;

function $o({ isNew: e = !1, value: t, onClick: n, ...r }) { return O(Pw, { isNew: e, children: [f("input", { type: "text", value: t, readOnly: !e, ...r }), f("button", { type: "button", onClick: n, className: e ? "button-add" : "button-delete", children: e ? f(Su, {}) : f(Oh, {}) })] }) }
const _w = F.div `
 width: 100%;
 min-height: 100vh;

 display: flex;
 flex-direction: column;
`,
    Nw = F.main `
 width: 100%;flex: 1;
 max-width: 136.8rem;
 height: 100%;
 padding-inline: 4rem;
 margin-inline: auto;


 @media (min-width: 768px) {

   width: 100%;

   padding-inline: 12.3rem;

 }
`,
    Lw = F.div `
 width: 100%;
 margin: 2.4rem auto 4rem;
 display: flex;
 
 > a {
   display: flex;
   align-items: center;
   font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

   color: ${({theme:e})=>e.COLORS.WHITE};
 }

 @media (min-width: 768px) {
   padding-inline: 0;
 }
`,
    $w = F.form `
 display: flex;
 flex-direction: column;

 > header {
   legend {
     font-size: 3.2rem;
     margin-bottom: 3.2rem;
   }
 } 

 .smallBox {
   max-width: 23rem;

   #file {
     color: ${({theme:e})=>e.COLORS.GRAY_200};
     display: flex;
     flex-direction: column;
     gap: 0.8rem;

     div {
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;

       border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
       border-radius: 0.5rem;
       height: 4.8rem;
       width: 22.9rem;

       color: ${({theme:e})=>e.COLORS.WHITE};
     }
   }

   input[type="file"] {
     display: none;
   }
 }

 > button {
   margin-top: 2.4rem;
   height: 4.8rem;
   width: 100%;
   background: #1A2327;
   border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
   border-radius: 0.5rem;
   color: ${({theme:e})=>e.COLORS.WHITE};

   align-self: flex-end;

   &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
   }

   @media (min-width: 768px) {
     width: 35.7rem;
   }

 }

`,
    hd = F.div `
 display: flex;
 flex-wrap: wrap;
 
 margin-bottom: 4rem;

 gap: 4rem;

 @media (min-width: 768px) {
   flex-wrap: nowrap;
   column-gap: 3.2rem;
 }
`,
    Aw = F.div `
 width: 100%;
 height: 4.8rem;
 display: flex;
 flex-direction: column;
 gap: 0.8rem;
 color: ${({theme:e})=>e.COLORS.GRAY_200};

 margin-bottom: 4rem;

 > div {
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
   max-height: max-content;
   padding: 0.8rem;

   border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
   border-radius: 0.5rem;
 }

 @media (min-width: 768px) {
   margin-bottom: 0;

   > div {
     max-height: 4.8rem;
     gap: 2rem;
   }
 }
`;

function Tw() { const [e, t] = E.exports.useState(null), [n, r] = E.exports.useState(""), [i, o] = E.exports.useState(""), [l, s] = E.exports.useState(""), [a, u] = E.exports.useState(""), [d, h] = E.exports.useState([]), [m, v] = E.exports.useState(""), [y, w] = E.exports.useState(!1), { user: _ } = mn(), p = zn();

    function c() { h(C => [...C, m]), v("") }

    function g(C) { h(R => R.filter(A => A !== C)) }
    async function S() { if (!e) return alert("Adicione uma imagem para o prato"); if (!n) return alert("Adicione um titulo para o prato"); if (!i) return alert("Adicione uma descri\xE7\xE3o para o prato"); if (!l) return alert("Adicione um categoria para o prato"); if (!a) return alert("Adicione um pre\xE7o para o prato"); if (m) return alert("Voc\xEA deixou um ingrediente no campo para adicionar, mas n\xE3o clicou em adicionar. Clique para adicionar ou deixe o campo vazio."); if (d.length < 1) return alert("Adicione pelo menos um ingrediente");
        w(!0); const C = new FormData;
        C.append("image", e), C.append("title", n), C.append("description", i), C.append("category", l), C.append("price", a), d.map(R => C.append("ingredients", R)), await Ne.post("/dishes", C), alert("Prato cadastrado com sucesso"), p("/"), w(!1) } return O(_w, { children: [f(vr, {}), _.isAdmin && O(Nw, { children: [f(Lw, { children: O(gn, { to: "/", children: [" ", f(xl, { size: 30 }), "Voltar"] }) }), O($w, { children: [f("header", { children: f("legend", { children: "Criar prato" }) }), O(hd, { children: [f("div", { className: "smallBox", children: O("label", { id: "file", htmlFor: "image", children: ["Imagem do prato", O("div", { children: [f(Rh, { size: 24 }), f("span", { children: "Selecione a imagem" }), f("input", { id: "image", type: "file", onChange: C => t(C.target.files[0]) })] })] }) }), f(Ye, { label: "name", title: "Nome do prato", type: "text", placeholder: "Ex.: Salada Ceasar", onChange: C => r(C.target.value) }), f(Ye, { label: "category", title: "Categoria", type: "text", placeholder: "pratos principais", onChange: C => s(C.target.value) })] }), O(hd, { children: [O(Aw, { children: [f("span", { children: "Ingredientes" }), O("div", { children: [d.map((C, R) => f($o, { value: C, onClick: () => g(C) }, String(R))), f($o, { isNew: !0, value: m, placeholder: "Adicionar", onChange: C => v(C.target.value), onClick: c })] })] }), f("div", { className: "smallBox", children: f(Ye, { label: "price", title: "Pre\xE7o", type: "text", placeholder: "R$ 00,00", onChange: C => u(C.target.value) }) })] }), f(Ph, { label: "Description", title: "Descri\xE7\xE3o", placeholder: "Fale brevemente sobre o prato, seus ingredientes e composi\xE7\xE3o", onChange: C => o(C.target.value) }), f("button", { type: "button", onClick: S, disabled: y, children: y ? "Adicionando pedido" : "Adicionar pedido" })] })] }), f(wr, {})] }) }
const zw = F.div `
 width: 100%;
 min-height: 100vh;

 display: flex;
 flex-direction: column;
`,
    Iw = F.main `
 width: 100%;flex: 1;
 max-width: 136.8rem;
 height: 100%;
 padding-inline: 4rem;
 margin-inline: auto;


 @media (min-width: 768px) {

   width: 100%;

   padding-inline: 12.3rem;

 }
`,
    Dw = F.div `
 width: 100%;
 margin: 2.4rem auto 4rem;
 display: flex;
 
 > a {
   display: flex;
   align-items: center;
   font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

   color: ${({theme:e})=>e.COLORS.WHITE};
 }

 @media (min-width: 768px) {
   padding-inline: 0;
 }
`,
    Fw = F.form `
 display: flex;
 flex-direction: column;

 > header {
   legend {
     font-size: 3.2rem;
     margin-bottom: 3.2rem;
   }
 } 

 .smallBox {
   max-width: 23rem;

   #file {
     color: ${({theme:e})=>e.COLORS.GRAY_200};
     display: flex;
     flex-direction: column;
     gap: 0.8rem;

     div {
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;

       border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
       border-radius: 0.5rem;
       height: 4.8rem;
       width: 22.9rem;

       color: ${({theme:e})=>e.COLORS.WHITE};
     }
   }

   input[type="file"] {
     display: none;
   }
 }

 > button {
   margin-top: 2.4rem;
   height: 4.8rem;
   width: 100%;
   background: #1A2327;
   border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
   border-radius: 0.5rem;
   color: ${({theme:e})=>e.COLORS.WHITE};

   align-self: flex-end;
   
   &:disabled {
     opacity: 0.5;
     cursor: not-allowed;
   }

   @media (min-width: 768px) {
     width: 35.7rem;
   }

 }

`,
    md = F.div `
 display: flex;
 flex-wrap: wrap;
 
 margin-bottom: 4rem;

 gap: 4rem;

 @media (min-width: 768px) {
   flex-wrap: nowrap;
   column-gap: 3.2rem;
 }
`,
    jw = F.div `
 width: 100%;
 height: 4.8rem;
 display: flex;
 flex-direction: column;
 gap: 0.8rem;
 color: ${({theme:e})=>e.COLORS.GRAY_200};

 margin-bottom: 8rem;

 > div {
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   max-height: max-content;
   padding: 0.8rem;

   border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
   border-radius: 0.5rem;
 }

 @media (min-width: 768px) {
   margin-bottom: 0;

   > div {
     max-height: 4.8rem;
     gap: 2rem;
   }
 }
`;

function Mw() { const [e, t] = E.exports.useState(null), [n, r] = E.exports.useState(""), [i, o] = E.exports.useState(""), [l, s] = E.exports.useState(""), [a, u] = E.exports.useState(""), [d, h] = E.exports.useState([]), [m, v] = E.exports.useState(""), [y, w] = E.exports.useState(!1), { user: _ } = mn(), p = zn(), c = wh();

    function g() { h(R => [...R, m]), v("") }

    function S(R) { h(A => A.filter(T => T !== R)) }
    async function C() { if (!e) return alert("Adicione uma imagem para o prato"); if (!n) return alert("Adicione um titulo para o prato"); if (!i) return alert("Adicione uma descri\xE7\xE3o para o prato"); if (!l) return alert("Adicione um categoria para o prato"); if (!a) return alert("Adicione um pre\xE7o para o prato"); if (m) return alert("Voc\xEA deixou um ingrediente no campo para adicionar, mas n\xE3o clicou em adicionar. Clique para adicionar ou deixe o campo vazio."); if (d.length < 1) return alert("Adicione pelo menos um ingrediente");
        w(!0); const R = new FormData;
        R.append("image", e), R.append("title", n), R.append("description", i), R.append("category", l), R.append("price", a), d.map(A => R.append("ingredients", A)), await Ne.put(`/dishes/${c.id}`, R), alert("Prato atualizado com sucesso"), p("/"), w(!1) } return E.exports.useEffect(() => { async function R() { const A = await Ne.get(`/dishes/${c.id}`),
                { title: T, description: G, category: M, price: me, ingredients: fe } = A.data;
            r(T), o(G), s(M), u(me), h(fe.map(ye => ye.name)) }
        R() }, []), O(zw, { children: [f(vr, {}), _.isAdmin && O(Iw, { children: [f(Dw, { children: O(gn, { to: "/", children: [" ", f(xl, { size: 30 }), "Voltar"] }) }), O(Fw, { children: [f("header", { children: f("legend", { children: "Editar prato" }) }), O(md, { children: [f("div", { className: "smallBox", children: O("label", { id: "file", htmlFor: "image", children: ["Imagem do prato", O("div", { children: [f(Rh, { size: 24 }), f("span", { children: "Selecione a imagem" }), f("input", { id: "image", type: "file", onChange: R => t(R.target.files[0]) })] })] }) }), f(Ye, { label: "name", title: "Nome do prato", type: "text", placeholder: "Ex.: Salada Ceasar", value: n, onChange: R => r(R.target.value) }), f(Ye, { label: "category", title: "Categoria", type: "text", placeholder: "pratos principais", value: l, onChange: R => s(R.target.value) })] }), O(md, { children: [O(jw, { children: [f("span", { children: "Ingredientes" }), O("div", { children: [d.map((R, A) => f($o, { value: R, onClick: () => S(R) }, String(A))), f($o, { isNew: !0, value: m, placeholder: "Adicionar", onChange: R => v(R.target.value), onClick: g })] })] }), f("div", { className: "smallBox", children: f(Ye, { label: "price", title: "Pre\xE7o", type: "text", value: a, placeholder: "R$ 00,00", onChange: R => u(R.target.value) }) })] }), f(Ph, { label: "Description", title: "Descri\xE7\xE3o", defaultValue: i, placeholder: "Fale brevemente sobre o prato, seus ingredientes e composi\xE7\xE3o", onChange: R => o(R.target.value) }), f("button", { type: "button", onClick: C, disabled: y, children: y ? "Atualizando pedido" : "Atualizar pedido" })] })] }), f(wr, {})] }) }
const Bw = F.div `
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`,
    Uw = F.div `
  flex: 1;
  max-width: 136.8rem;
  padding-inline: 4rem;
  margin: 0 auto;

  > h3 {
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    margin-block: 3.4rem;
  }

  > main {
    max-width: 100%;
    margin-inline: auto;
  }

  @media (min-width: 768px) {
    main {
      width: 136.8rem;
    }

    padding-inline: 12.3rem;
  }
`,
    Hw = F.table `
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 2px solid #192227;
    padding-inline: 1rem;
  }

  @media (min-width: 768px) {
    th, td {
      padding-inline: 2.4rem;
    }
  }
`,
    bw = F.thead `
  text-align: left;
  height: 4.5rem;
`,
    Ww = F.tbody `
  > tr {
    height: 8rem;

    td {
      font-size: 1.4rem;
      color: ${({theme:e})=>e.COLORS.GRAY_200};
    }
  }
`,
    Vw = F.div `
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    

    position: absolute;
    left: 1.6rem;
  }

  .pendente {
    background: red;
  }

  .preparando {
    background: yellow;
  }

  .entregue {
    background: #04D361;
  }

  select {
    width: 100%;
    background-color: ${({theme:e})=>e.COLORS.BACKGROUND_800};
    padding: 1.3rem 1.6rem 1.3rem 3.2rem;
    color: white;

    border: 1px solid ${({theme:e})=>e.COLORS.WHITE};
    border-radius: 0.5rem;

    appearance: none;
    -webkit-appearance: none;

    @media (min-width: 768px) {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 1rem top 50%;
      width: 17.5rem;
    }
  }
`;

function Gw() { const { user: e } = mn(), { orders: t, setOrders: n } = mr();
    async function r(o, l) { let s = l.target.value; const a = { id: o.id, status: s };
        await Ne.put("/carts", a), location.reload() }

    function i(o) { const l = new Date(o); let s = (l.getMonth() + 1).toString();
        s = s.length == 1 ? `0${s}` : s; let a = l.getMinutes().toString(); return a = a.length == 1 ? `0${a}` : a, `${l.getDate()}/${s} \xE0s ${l.getHours()-3}h${a}` } return E.exports.useEffect(() => { async function o() { const l = await Ne.get("/carts");
            n(l.data) }
        o() }, []), O(Bw, { children: [f(vr, {}), e.isAdmin && O(Uw, { children: [f("h3", { children: "Pedidos" }), f("main", { children: O(Hw, { children: [f(bw, { children: O("tr", { children: [f("th", { children: "Status" }), f("th", { children: "C\xF3digo" }), f("th", { children: "Detalhamento" }), f("th", { children: "Data e hora" })] }) }), f(Ww, { children: t && t.map(o => O("tr", { children: [f("td", { children: O(Vw, { children: [f("span", { id: "orderStatus", className: o.status }), O("select", { name: "select", id: "select", onChange: l => r(o, l), children: [f("option", { defaultValue: o.status, children: o.status }), f("option", { value: "pendente", children: " Pendente " }), f("option", { value: "preparando", children: " Preparando" }), f("option", { value: "entregue", children: " Entregue" })] })] }) }), O("td", { children: ["00000", o.id] }), f("td", { children: o.orders.map(l => O("span", { children: [" ", l.quantity, " x ", l.title, ",", " "] }, l.title)) }), f("td", { children: i(o.created_at) })] }, String(o.id))) })] }) })] }), f(wr, {})] }) }

function Qw() { return O(Sh, { children: [f($t, { path: "/", element: f(zv, {}) }), f($t, { path: "/details/:id", element: f(fw, {}) }), f($t, { path: "/cart", element: f(Ew, {}) }), f($t, { path: "/new", element: f(Tw, {}) }), f($t, { path: "/edit/:id", element: f(Mw, {}) }), f($t, { path: "/orders", element: f(Gw, {}) })] }) }
const Yw = F.div `
  width: 100%;
  height: 100vh;

  > div {
    padding-block: 5rem;
    max-width: 47.6rem;

    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 2rem;   

    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    width: 120rem;
  }
`,
    Kw = F.form `
  margin-inline: auto;
  padding-block: 6.4rem;
  padding-inline: 2.4rem;
  border-radius: 1.6rem;
  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_600};
  max-width: 47.6rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.2rem;

> legend {
  font-size: 3.2rem;
  text-align: center;
}

> a {
  color: ${({theme:e})=>e.COLORS.WHITE};
  font-size: 1.4rem;
  text-align: center;
}

@media (min-width: 768px) {
  margin-inline: 0;
  padding: 6.4rem;
}
`;

function Xw() { const [e, t] = E.exports.useState(""), [n, r] = E.exports.useState(""), { signIn: i, loading: o, setLoading: l } = mn();

    function s() { i({ email: e, password: n }) } return O(Yw, { children: [O("div", { children: [f("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: f("path", { d: "M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z", fill: "#065E7C" }) }), f("h1", { children: "food explorer" })] }), O(Kw, { children: [f("legend", { children: "Fa\xE7a login" }), f(Ye, { type: "email", label: "email", title: "Email", placeholder: "Exemplo: exemplo@exemplo.com", onChange: a => t(a.target.value), required: !0 }), f(Ye, { type: "password", label: "password", title: "Senha", placeholder: "No m\xEDnimo 6 caracteres", onChange: a => r(a.target.value), minLength: "6", required: !0 }), f(wi, { title: o ? "Entrando" : "Entrar", onClick: s, disabled: o }), f(gn, { to: "/register", children: "Criar uma conta" })] })] }) }
const Jw = F.div `
  width: 100%;
  height: 100vh;
  > div {
    padding-block: 5rem;
    max-width: 47.6rem;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 2rem;   
    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    width: 120rem;
  }
`,
    Zw = F.form `
  margin-inline: auto;
  padding-block: 6.4rem;
  padding-inline: 2.4rem;
  border-radius: 1.6rem;
  background-color: ${({theme:e})=>e.COLORS.BACKGROUND_600};
  max-width: 47.6rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.2rem;
> legend {
  font-size: 3.2rem;
  text-align: center;
}

> a {
  color: ${({theme:e})=>e.COLORS.WHITE};
  font-size: 1.4rem;
  text-align: center;
}

@media (min-width: 768px) {
  margin-inline: 0;
  padding: 6.4rem;
}
`;

function qw() { const [e, t] = E.exports.useState(""), [n, r] = E.exports.useState(""), [i, o] = E.exports.useState(""), [l, s] = E.exports.useState(!1), a = zn();

    function u() { if (!e || !n || !i) return alert("Preencha todos os campos"); if (i.length < 6) return alert("A senha deve conter no m\xEDnimo 6 caracteres!");
        s(!0), Ne.post("/users", { name: e, email: n, password: i }).then(() => { alert("Usu\xE1rio cadastrado com sucesso!"), a("/"), s(!1) }).catch(d => { d.response ? alert(d.response.data.message) : alert("N\xE3o foi poss\xEDvel cadastrar"), s(!1) }) } return O(Jw, { children: [O("div", { children: [f("svg", { width: "44", height: "48", viewBox: "0 0 44 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: f("path", { d: "M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z", fill: "#065E7C" }) }), f("h1", { children: "food explorer" })] }), O(Zw, { children: [f("legend", { children: "Crie sua conta" }), f(Ye, { type: "text", label: "name", title: "Seu nome", placeholder: "Exemplo: Maria da Silva", onChange: d => t(d.target.value), required: !0 }), f(Ye, { type: "email", label: "email", title: "Email", placeholder: "Exemplo: exemplo@exemplo.com", onChange: d => r(d.target.value), required: !0 }), f(Ye, { type: "password", label: "password", title: "Senha", placeholder: "No m\xEDnimo 6 caracteres", onChange: d => o(d.target.value), minLength: "6", required: !0 }), f(wi, { title: l ? "Cadastrando" : "Criar conta", onClick: u, disabled: l }), f(gn, { to: "/", children: "J\xE1 tenho uma conta" })] })] }) }

function ex() { return O(Sh, { children: [f($t, { path: "/", element: f(Xw, {}) }), f($t, { path: "/register", element: f(qw, {}) })] }) }

function tx() { const { user: e } = mn(); return f(nv, { children: e ? f(Qw, {}) : f(ex, {}) }) }
is.createRoot(document.getElementById("root")).render(f(St.StrictMode, { children: O(Hg, { theme: Gg, children: [f(Vg, {}), f(ry, { children: f(oy, { children: f(iy, { children: f(tx, {}) }) }) })] }) }));