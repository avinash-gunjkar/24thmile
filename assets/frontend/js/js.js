! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        var e = t.getBoundingClientRect(),
            o = {};
        for (var i in e) o[i] = e[i];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = n(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {},
            o = e.position,
            i = [];
        if ("fixed" === o) return [t];
        for (var n = t;
            (n = n.parentNode) && n && 1 === n.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(n)
            } catch (s) {}
            if ("undefined" == typeof r || null === r) return i.push(n), i;
            var a = r,
                f = a.overflow,
                l = a.overflowX,
                h = a.overflowY;
            /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n)
        }
        return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement,
            i = n(t),
            r = P();
        return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        if (M) return M;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth), document.body.removeChild(e);
        var n = o - i;
        return M = {
            width: n,
            height: n
        }
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                i = c(t).replace(o, " ");
            g(t, i)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        });
        else {
            d(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function(o) {
            e.indexOf(o) === -1 && u(t, o) && d(t, o)
        }), e.forEach(function(e) {
            u(t, e) || p(t, e)
        })
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top,
                i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
            var t = e,
                o = a(e),
                i = o,
                n = getComputedStyle(e);
            if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            G.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"])
            })
        }(), e
    }
    var E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        x = void 0;
    "undefined" == typeof x && (x = {
        modules: []
    });
    var A = null,
        T = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }(),
        S = {},
        P = function() {
            var t = A;
            t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), A = t);
            var e = t.getAttribute("data-tether-id");
            return "undefined" == typeof S[e] && (S[e] = n(t), k(function() {
                delete S[e]
            })), S[e]
        },
        M = null,
        W = [],
        k = function(t) {
            W.push(t)
        },
        _ = function() {
            for (var t = void 0; t = W.pop();) t()
        },
        B = function() {
            function t() {
                i(this, t)
            }
            return E(t, [{
                key: "on",
                value: function(t, e, o) {
                    var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: o,
                        once: i
                    })
                }
            }, {
                key: "once",
                value: function(t, e, o) {
                    this.on(t, e, o, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                        if ("undefined" == typeof e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if ("undefined" != typeof this.bindings && this.bindings[t]) {
                        for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                f = r.once,
                                l = a;
                            "undefined" == typeof l && (l = this), s.apply(l, i), f ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    x.Utils = {
        getActualBoundingClientRect: n,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: p,
        removeClass: d,
        hasClass: u,
        updateClasses: m,
        defer: k,
        flush: _,
        uniqueId: T,
        Evented: B,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        j = function(t, e, o) {
            for (var i = !0; i;) {
                var n = t,
                    r = e,
                    s = o;
                i = !1, null === n && (n = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(n, r);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var f = a.get;
                    if (void 0 === f) return;
                    return f.call(s)
                }
                var l = Object.getPrototypeOf(n);
                if (null === l) return;
                t = l, e = r, o = s, i = !0, a = l = void 0
            }
        };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var Y = x.Utils,
        r = Y.getScrollParents,
        a = Y.getBounds,
        f = Y.getOffsetParent,
        h = Y.extend,
        p = Y.addClass,
        d = Y.removeClass,
        m = Y.updateClasses,
        k = Y.defer,
        _ = Y.flush,
        l = Y.getScrollBarSize,
        s = Y.removeUtilElements,
        L = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var i = e[o];
                if (void 0 !== t.style[i]) return i
            }
        }(),
        D = [],
        X = function() {
            D.forEach(function(t) {
                t.position(!1)
            }), _()
        };
    ! function() {
        var t = null,
            e = null,
            o = null,
            i = function n() {
                return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
            };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var F = {
            center: "center",
            left: "right",
            right: "left"
        },
        H = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        N = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        U = function(t, e) {
            var o = t.left,
                i = t.top;
            return "auto" === o && (o = F[e.left]), "auto" === i && (i = H[e.top]), {
                left: o,
                top: i
            }
        },
        V = function(t) {
            var e = t.left,
                o = t.top;
            return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
                left: e,
                top: o
            }
        },
        R = function(t) {
            var e = t.split(" "),
                o = z(e, 2),
                i = o[0],
                n = o[1];
            return {
                top: i,
                left: n
            }
        },
        q = R,
        I = function(t) {
            function e(t) {
                var o = this;
                i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }
            return v(e, t), E(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                        i = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                    this.options = h(i, t);
                    var n = this.options,
                        s = n.element,
                        a = n.target,
                        f = n.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), p(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target),
                            e = {
                                height: t.height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var i = getComputedStyle(o),
                            n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        n && (r = 15);
                        var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                            e = {
                                width: 15,
                                height: .975 * s * (s / o.scrollHeight),
                                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                            },
                            f = 0;
                        s < 408 && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this.options.addTargetClasses !== !1 && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), D.forEach(function(e, o) {
                        e === t && D.splice(o, 1)
                    }), 0 === D.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var i = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var n = this._addAttachClasses;
                    t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    i.forEach(function(t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), k(function() {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var i = this.cache("element-bounds", function() {
                                return a(t.element)
                            }),
                            n = i.width,
                            r = i.height;
                        if (0 === n && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            n = s.width, r = s.height
                        } else this.lastSize = {
                            width: n,
                            height: r
                        };
                        var h = this.cache("target-bounds", function() {
                                return t.getTargetBounds()
                            }),
                            d = h,
                            p = C(V(this.attachment), {
                                width: n,
                                height: r
                            }),
                            u = C(V(o), d),
                            c = C(this.offset, {
                                width: n,
                                height: r
                            }),
                            g = C(this.targetOffset, d);
                        p = w(p, c), u = w(u, g);
                        for (var m = h.left + u.left - p.left, v = h.top + u.top - p.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y],
                                O = b.position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: o,
                                    targetPos: h,
                                    elementPos: i,
                                    offset: p,
                                    targetOffset: u,
                                    manualOffset: c,
                                    manualTargetOffset: g,
                                    scrollbarSize: S,
                                    attachment: this.attachment
                                });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                                page: {
                                    top: v,
                                    left: m
                                },
                                viewport: {
                                    top: v - pageYOffset,
                                    bottom: pageYOffset - v - r + innerHeight,
                                    left: m - pageXOffset,
                                    right: pageXOffset - m - n + innerWidth
                                }
                            },
                            A = this.target.ownerDocument,
                            T = A.defaultView,
                            S = void 0;
                        return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), ["", "static"].indexOf(A.body.style.position) !== -1 && ["", "static"].indexOf(A.body.parentElement.style.position) !== -1 || (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                            var e = t.cache("target-offsetparent", function() {
                                    return f(t.target)
                                }),
                                o = t.cache("target-offsetparent-bounds", function() {
                                    return a(e)
                                }),
                                i = getComputedStyle(e),
                                n = o,
                                r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - n.width + r.right, o.bottom = A.body.scrollHeight - o.top - n.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop,
                                    l = e.scrollLeft;
                                E.offset = {
                                    top: E.page.top - o.top + s - r.top,
                                    left: E.page.left - o.left + l - r.left
                                }
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var i in t) {
                            o[i] = {};
                            for (var n in t[i]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[i] && !y(a[i][n], t[i][n])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[i][n] = !0)
                            }
                        }
                        var l = {
                                top: "",
                                left: "",
                                right: "",
                                bottom: ""
                            },
                            d = function(t, o) {
                                var i = "undefined" != typeof e.options.optimizations,
                                    n = i ? e.options.optimizations.gpu : null;
                                if (n !== !1) {
                                    var r = void 0,
                                        s = void 0;
                                    if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                                        var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                        a || (s = Math.round(s), r = Math.round(r))
                                    }
                                    l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                            },
                            p = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                                l.position = "absolute";
                                var i = e.cache("target-offsetparent", function() {
                                    return f(e.target)
                                });
                                f(e.element) !== i && k(function() {
                                    e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                }), d(o.offset, t.offset), p = !0
                            }() : (l.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !p)
                            if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                    if ("static" !== getComputedStyle(c).position) {
                                        u = !1;
                                        break
                                    }
                                    c = c.parentNode
                                }
                                u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            } var g = {},
                            m = !1;
                        for (var n in l) {
                            var v = l[n],
                                b = this.element.style[n];
                            b !== v && (m = !0, g[n] = v)
                        }
                        m && k(function() {
                            h(e.element.style, g), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }(B);
    I.modules = [], x.position = X;
    var $ = h(I, x),
        z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Y = x.Utils,
        a = Y.getBounds,
        h = Y.extend,
        m = Y.updateClasses,
        k = Y.defer,
        G = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                s = r.height,
                f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                }),
                p = d.height,
                u = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [],
                v = h({}, n),
                y = h({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to,
                    a = t.attachment,
                    l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0,
                    d = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "),
                        m = z(c, 2);
                    d = m[0], h = m[1]
                } else h = d = a;
                var b = O(e, r);
                "target" !== d && "both" !== d || (o < b[1] && "top" === v.top && (o += p, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += p, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - p) >= b[1] && (o -= s - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= p, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - p) <= b[3] && (o += s - p, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), "target" !== h && "both" !== h || (i < b[0] && "left" === v.left && (i += u, v.left = "right"), i + f > b[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === h && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += f, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= f, y.left = "right") : i + f > b[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= f, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += f, y.left = "left") : "center" === v.left && (i + f > b[2] && "left" === y.left ? (i -= f, y.left = "right") : i < b[0] && "right" === y.left && (i += f, y.left = "left"))), "element" !== d && "both" !== d || (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), "element" !== h && "both" !== h || (i < b[0] && ("right" === y.left ? (i += f, y.left = "left") : "center" === y.left && (i += f / 2, y.left = "left")), i + f > b[2] && ("left" === y.left ? (i -= f, y.left = "right") : "center" === y.left && (i -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [],
                    C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : C.push("left")), i + f > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {
                top: o,
                left: i
            }
        }
    });
    var Y = x.Utils,
        a = Y.getBounds,
        m = Y.updateClasses,
        k = Y.defer;
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                r = n.height,
                s = n.width,
                f = this.getTargetBounds(),
                l = o + r,
                h = i + s,
                d = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                e !== i && e !== h || d.push(t)
            }), i <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                e !== o && e !== l || d.push(t)
            });
            var p = [],
                u = [],
                c = ["left", "top", "right", "bottom"];
            return p.push(this.getClass("abutted")), c.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), d.length && u.push(this.getClass("abutted")), d.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, u, p), m(e.element, u, p)
            }), !0
        }
    });
    var z = function() {
        function t(t, e) {
            var o = [],
                i = !0,
                n = !1,
                r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
            } catch (f) {
                n = !0, r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n) throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function(t) {
            var e = t.top,
                o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0,
                    r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "), i[1] = i[1] || i[0];
                    var s = i,
                        a = z(s, 2);
                    n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
                } else n = i.top, r = i.left;
                return e += n, o += r, {
                    top: e,
                    left: o
                }
            }
        }
    }), $
});
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return window.document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : window.document.documentElement
    }

    function p(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }

    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }

    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
    }

    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom';
        return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }

    function m(e, t, o, i) {
        return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function c() {
        var e = window.document.body,
            t = window.document.documentElement,
            o = ie() && window.getComputedStyle(t);
        return {
            height: m('Height', e, t, o),
            width: m('Width', e, t, o)
        }
    }

    function h(e) {
        return se({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function u(e) {
        var o = {};
        if (ie()) try {
            o = e.getBoundingClientRect();
            var i = a(e, 'top'),
                n = a(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n
        } catch (e) {} else o = e.getBoundingClientRect();
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = 'HTML' === e.nodeName ? c() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var u = t(e);
            l -= f(u, 'x'), m -= f(u, 'y'), r.width -= l, r.height -= m
        }
        return h(r)
    }

    function g(e, o) {
        var i = ie(),
            r = 'HTML' === o.nodeName,
            p = u(e),
            s = u(o),
            d = n(e),
            a = t(o),
            f = +a.borderTopWidth.split('px')[0],
            m = +a.borderLeftWidth.split('px')[0],
            c = h({
                top: p.top - s.top - f,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (c.marginTop = 0, c.marginLeft = 0, !i && r) {
            var g = +a.marginTop.split('px')[0],
                b = +a.marginLeft.split('px')[0];
            c.top -= f - g, c.bottom -= f - g, c.left -= m - b, c.right -= m - b, c.marginTop = g, c.marginLeft = b
        }
        return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)), c
    }

    function b(e) {
        var t = e.ownerDocument.documentElement,
            o = g(e, t),
            i = J(t.clientWidth, window.innerWidth || 0),
            n = J(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return h(s)
    }

    function y(e) {
        var i = e.nodeName;
        return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }

    function w(e, t, i, r) {
        var p = {
                top: 0,
                left: 0
            },
            s = d(e, t);
        if ('viewport' === r) p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
            var l = g(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var f = c(),
                    m = f.height,
                    h = f.width;
                p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = h + l.left
            } else p = l
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
    }

    function E(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = w(o, i, r, n),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return se({
                    key: e
                }, s[e], {
                    area: E(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function x(e, t, o) {
        var i = d(t, o);
        return g(o, i)
    }

    function O(e) {
        var t = window.getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + o
            };
        return n
    }

    function L(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e),
            n = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
    }

    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function C(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var i = T(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }

    function D(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t['function'] || t.fn;
            t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper), o.offsets.reference = h(o.offsets.reference), o = i(o, t))
        }), o
    }

    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = D(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function k(e, t) {
        return e.some(function(e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t
        })
    }

    function W(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r]) return r
        }
        return null
    }

    function P() {
        return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function B(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || H(n(p.parentNode), t, o, i), i.push(p)
    }

    function A(e, t, o, i) {
        o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(e, t) {
        return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function R() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function U(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i
        })
    }

    function F(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function j(e, t, o) {
        var i = T(e, function(e) {
                var o = e.name;
                return o === t
            }),
            n = !!i && e.some(function(e) {
                return e.name === o && e.enabled && e.order < i.order
            });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }

    function K(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function q(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i
    }

    function V(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = i;
            }
            var d = h(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function z(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(T(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return V(e, n, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, i) {
                U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }), n
    }

    function G(e, t) {
        var o, i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split('-')[0];
        return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof window.document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1)
        if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break
        } var i, te = Q && window.Promise,
        oe = te ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, $))
            }
        },
        ie = function() {
            return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
        },
        ne = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        re = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t
            }
        }(),
        pe = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        se = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ae = de.slice(3),
        le = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        fe = function() {
            function t(o, i) {
                var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ne(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return se({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return re(t, [{
                key: 'update',
                value: function() {
                    return N.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return P.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return R.call(this)
                }
            }]), t
        }();
    return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: pe({}, d, r[d]),
                                end: pe({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = se({}, p, l[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: G,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority,
                        p = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var o = p[e];
                                return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = p[o];
                                return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n)
                            }
                        };
                    return n.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = se({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = X,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    if (!j(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var n = e.placement.split('-')[0],
                        r = e.offsets,
                        p = r.popper,
                        s = r.reference,
                        d = -1 !== ['left', 'right'].indexOf(n),
                        a = d ? 'height' : 'width',
                        l = d ? 'Top' : 'Left',
                        f = l.toLowerCase(),
                        m = d ? 'left' : 'top',
                        c = d ? 'bottom' : 'right',
                        u = O(i)[a];
                    s[c] - u < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - u)), s[f] + u > p[c] && (e.offsets.popper[f] += s[f] + u - p[c]);
                    var g = s[f] + s[a] / 2 - u / 2,
                        b = t(e.instance.popper, 'margin' + l).replace('px', ''),
                        y = g - h(e.offsets.popper)[f] - b;
                    return y = J(_(p[a] - u, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[m] = '', e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (k(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = L(i),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case le.FLIP:
                            p = [i, n];
                            break;
                        case le.CLOCKWISE:
                            p = q(i);
                            break;
                        case le.COUNTERCLOCKWISE:
                            p = q(i, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = L(i);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = X,
                            m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                            c = f(a.left) < f(o.left),
                            h = f(a.right) > f(o.right),
                            u = f(a.top) < f(o.top),
                            g = f(a.bottom) > f(o.bottom),
                            b = 'left' === i && c || 'right' === i && h || 'top' === i && u || 'bottom' === i && g,
                            y = -1 !== ['top', 'bottom'].indexOf(i),
                            w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && u || !y && 'end' === r && g);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = D(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = h(n), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!j(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        l = r(e.instance.popper),
                        f = u(l),
                        m = {
                            position: n.position
                        },
                        c = {
                            left: X(n.left),
                            top: X(n.top),
                            bottom: X(n.bottom),
                            right: X(n.right)
                        },
                        h = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === i ? 'left' : 'right',
                        b = W('transform');
                    if (d = 'bottom' == h ? -f.height + c.bottom : c.top, s = 'right' == g ? -f.width + c.right : c.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[h] = 0, m[g] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == h ? -1 : 1,
                            w = 'right' == g ? -1 : 1;
                        m[h] = d * y, m[g] = s * w, m.willChange = h + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return Y(e.instance.popper, e.styles), F(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, i, n) {
                    var r = x(n, t, e),
                        p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), Y(t, {
                        position: 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, fe
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n(t) {
                return (t[0] || t).nodeType
            }

            function i() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function o() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in h)
                    if (void 0 !== t.style[e]) return {
                        end: h[e]
                    };
                return !1
            }

            function r(e) {
                var n = this,
                    i = !1;
                return t(this).one(c.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || c.triggerTransitionEnd(n)
                }, e), this
            }

            function s() {
                a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i())
            }
            var a = !1,
                l = 1e6,
                h = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                c = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do t += ~~(Math.random() * l); while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(e) {
                        t(e).trigger(a.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(a)
                    },
                    typeCheckConfig: function(t, i, o) {
                        for (var r in o)
                            if (o.hasOwnProperty(r)) {
                                var s = o[r],
                                    a = i[r],
                                    l = a && n(a) ? "element" : e(a);
                                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                            }
                    }
                };
            return s(), c
        }(jQuery),
        s = (function(t) {
            var e = "alert",
                i = "4.0.0-alpha.6",
                s = "bs.alert",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 150,
                u = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                d = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                f = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                _ = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t),
                            n = this._triggerCloseEvent(e);
                        n.isDefaultPrevented() || this._removeElement(e)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), this._element = null
                    }, e.prototype._getRootElement = function(e) {
                        var n = r.getSelectorFromElement(e),
                            i = !1;
                        return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i
                    }, e.prototype._triggerCloseEvent = function(e) {
                        var n = t.Event(d.CLOSE);
                        return t(e).trigger(n), n
                    }, e.prototype._removeElement = function(e) {
                        var n = this;
                        return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(c) : void this._destroyElement(e)
                    }, e.prototype._destroyElement = function(e) {
                        t(e).detach().trigger(d.CLOSED).remove()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(s);
                            o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this)
                        })
                    }, e._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = h, _._jQueryInterface
            }, _
        }(jQuery), function(t) {
            var e = "button",
                i = "4.0.0-alpha.6",
                r = "bs.button",
                s = "." + r,
                a = ".data-api",
                l = t.fn[e],
                h = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                c = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                u = {
                    CLICK_DATA_API: "click" + s + a,
                    FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
                },
                d = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.toggle = function() {
                        var e = !0,
                            n = t(this._element).closest(c.DATA_TOGGLE)[0];
                        if (n) {
                            var i = t(this._element).find(c.INPUT)[0];
                            if (i) {
                                if ("radio" === i.type)
                                    if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;
                                    else {
                                        var o = t(n).find(c.ACTIVE)[0];
                                        o && t(o).removeClass(h.ACTIVE)
                                    } e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, r), this._element = null
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(r);
                            i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]()
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle")
            }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
                var n = t(e.target).closest(c.BUTTON)[0];
                t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                return t.fn[e] = l, d._jQueryInterface
            }, d
        }(jQuery), function(t) {
            var e = "carousel",
                s = "4.0.0-alpha.6",
                a = "bs.carousel",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                d = 37,
                f = 39,
                _ = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                g = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                p = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                m = {
                    SLIDE: "slide" + l,
                    SLID: "slid" + l,
                    KEYDOWN: "keydown" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l,
                    LOAD_DATA_API: "load" + l + h,
                    CLICK_DATA_API: "click" + l + h
                },
                E = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                v = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                T = function() {
                    function h(e, i) {
                        n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                    }
                    return h.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.NEXT)
                    }, h.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, h.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(p.PREVIOUS)
                    }, h.prototype.pause = function(e) {
                        e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, h.prototype.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, h.prototype.to = function(e) {
                        var n = this;
                        this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0)) {
                            if (this._isSliding) return void t(this._element).one(m.SLID, function() {
                                return n.to(e)
                            });
                            if (i === e) return this.pause(), void this.cycle();
                            var o = e > i ? p.NEXT : p.PREVIOUS;
                            this._slide(o, this._items[e])
                        }
                    }, h.prototype.dispose = function() {
                        t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                    }, h.prototype._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(m.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(m.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        })
                    }, h.prototype._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case d:
                                t.preventDefault(), this.prev();
                                break;
                            case f:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, h.prototype._getItemIndex = function(e) {
                        return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e)
                    }, h.prototype._getItemByDirection = function(t, e) {
                        var n = t === p.NEXT,
                            i = t === p.PREVIOUS,
                            o = this._getItemIndex(e),
                            r = this._items.length - 1,
                            s = i && 0 === o || n && o === r;
                        if (s && !this._config.wrap) return e;
                        var a = t === p.PREVIOUS ? -1 : 1,
                            l = (o + a) % this._items.length;
                        return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                    }, h.prototype._triggerSlideEvent = function(e, n) {
                        var i = t.Event(m.SLIDE, {
                            relatedTarget: e,
                            direction: n
                        });
                        return t(this._element).trigger(i), i
                    }, h.prototype._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && t(n).addClass(E.ACTIVE)
                        }
                    }, h.prototype._slide = function(e, n) {
                        var i = this,
                            o = t(this._element).find(v.ACTIVE_ITEM)[0],
                            s = n || o && this._getItemByDirection(e, o),
                            a = Boolean(this._interval),
                            l = void 0,
                            h = void 0,
                            c = void 0;
                        if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void(this._isSliding = !1);
                        var d = this._triggerSlideEvent(s, c);
                        if (!d.isDefaultPrevented() && o && s) {
                            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                            var f = t.Event(m.SLID, {
                                relatedTarget: s,
                                direction: c
                            });
                            r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                                t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function() {
                                    return t(i._element).trigger(f)
                                }, 0)
                            }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle()
                        }
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = t.extend({}, _, t(this).data());
                            "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
                            var r = "string" == typeof e ? e : o.slide;
                            if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);
                            else if ("string" == typeof r) {
                                if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                n[r]()
                            } else o.interval && (n.pause(), n.cycle())
                        })
                    }, h._dataApiClickHandler = function(e) {
                        var n = r.getSelectorFromElement(this);
                        if (n) {
                            var i = t(n)[0];
                            if (i && t(i).hasClass(E.CAROUSEL)) {
                                var o = t.extend({}, t(i).data(), t(this).data()),
                                    s = this.getAttribute("data-slide-to");
                                s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault()
                            }
                        }
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function() {
                t(v.DATA_RIDE).each(function() {
                    var e = t(this);
                    T._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function() {
                return t.fn[e] = c, T._jQueryInterface
            }, T
        }(jQuery), function(t) {
            var e = "collapse",
                s = "4.0.0-alpha.6",
                a = "bs.collapse",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 600,
                d = {
                    toggle: !0,
                    parent: ""
                },
                f = {
                    toggle: "boolean",
                    parent: "string"
                },
                _ = {
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                g = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                p = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                m = {
                    ACTIVES: ".card > .show, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                E = function() {
                    function l(e, i) {
                        n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return l.prototype.toggle = function() {
                        t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                    }, l.prototype.show = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!t(this._element).hasClass(g.SHOW)) {
                            var n = void 0,
                                i = void 0;
                            if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
                                var o = t.Event(_.SHOW);
                                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                    n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));
                                    var s = this._getDimension();
                                    t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var h = function() {
                                        t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN)
                                    };
                                    if (!r.supportsTransitionEnd()) return void h();
                                    var c = s[0].toUpperCase() + s.slice(1),
                                        d = "scroll" + c;
                                    t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px"
                                }
                            }
                        }
                    }, l.prototype.hide = function() {
                        var e = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (t(this._element).hasClass(g.SHOW)) {
                            var n = t.Event(_.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension(),
                                    o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var s = function() {
                                    e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)
                                };
                                return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s()
                            }
                        }
                    }, l.prototype.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, l.prototype.dispose = function() {
                        t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, l.prototype._getConfig = function(n) {
                        return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n
                    }, l.prototype._getDimension = function() {
                        var e = t(this._element).hasClass(p.WIDTH);
                        return e ? p.WIDTH : p.HEIGHT
                    }, l.prototype._getParent = function() {
                        var e = this,
                            n = t(this._config.parent)[0],
                            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(i).each(function(t, n) {
                            e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n])
                        }), n
                    }, l.prototype._addAriaAndCollapsedClass = function(e, n) {
                        if (e) {
                            var i = t(e).hasClass(g.SHOW);
                            e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }, l._getTargetFromElement = function(e) {
                        var n = r.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, l._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this),
                                o = n.data(a),
                                r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                            if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e]()
                            }
                        })
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }]), l
                }();
            return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var n = E._getTargetFromElement(this),
                    i = t(n).data(a),
                    o = i ? "toggle" : t(this).data();
                E._jQueryInterface.call(t(n), o)
            }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
                return t.fn[e] = c, E._jQueryInterface
            }, E
        }(jQuery), function(t) {
            var e = "dropdown",
                i = "4.0.0-alpha.6",
                s = "bs.dropdown",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 27,
                u = 38,
                d = 40,
                f = 3,
                _ = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click" + a + l,
                    FOCUSIN_DATA_API: "focusin" + a + l,
                    KEYDOWN_DATA_API: "keydown" + a + l
                },
                g = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    SHOW: "show"
                },
                p = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                m = function() {
                    function e(t) {
                        n(this, e), this._element = t, this._addEventListeners()
                    }
                    return e.prototype.toggle = function() {
                        if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;
                        var n = e._getParentFromElement(this),
                            i = t(n).hasClass(g.SHOW);
                        if (e._clearMenus(), i) return !1;
                        if ("ontouchstart" in document.documentElement && !t(n).closest(p.NAVBAR_NAV).length) {
                            var o = document.createElement("div");
                            o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                        }
                        var r = {
                                relatedTarget: this
                            },
                            s = t.Event(_.SHOW, r);
                        return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(g.SHOW), t(n).trigger(t.Event(_.SHOWN, r)), !1)
                    }, e.prototype.dispose = function() {
                        t.removeData(this._element, s), t(this._element).off(a), this._element = null
                    }, e.prototype._addEventListeners = function() {
                        t(this._element).on(_.CLICK, this.toggle)
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(s);
                            if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
                                if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                i[n].call(this)
                            }
                        })
                    }, e._clearMenus = function(n) {
                        if (!n || n.which !== f) {
                            var i = t(p.BACKDROP)[0];
                            i && i.parentNode.removeChild(i);
                            for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                                var s = e._getParentFromElement(o[r]),
                                    a = {
                                        relatedTarget: o[r]
                                    };
                                if (t(s).hasClass(g.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                                    var l = t.Event(_.HIDE, a);
                                    t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)))
                                }
                            }
                        }
                    }, e._getParentFromElement = function(e) {
                        var n = void 0,
                            i = r.getSelectorFromElement(e);
                        return i && (n = t(i)[0]), n || e.parentNode
                    }, e._dataApiKeydownHandler = function(n) {
                        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
                            var i = e._getParentFromElement(this),
                                o = t(i).hasClass(g.SHOW);
                            if (!o && n.which !== c || o && n.which === c) {
                                if (n.which === c) {
                                    var r = t(i).find(p.DATA_TOGGLE)[0];
                                    t(r).trigger("focus")
                                }
                                return void t(this).trigger("click")
                            }
                            var s = t(i).find(p.VISIBLE_ITEMS).get();
                            if (s.length) {
                                var a = s.indexOf(n.target);
                                n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                            }
                        }
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = h, m._jQueryInterface
            }, m
        }(jQuery), function(t) {
            var e = "modal",
                s = "4.0.0-alpha.6",
                a = "bs.modal",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = 300,
                d = 150,
                f = 27,
                _ = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                g = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    FOCUSIN: "focusin" + l,
                    RESIZE: "resize" + l,
                    CLICK_DISMISS: "click.dismiss" + l,
                    KEYDOWN_DISMISS: "keydown.dismiss" + l,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + l,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
                    CLICK_DATA_API: "click" + l + h
                },
                m = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                },
                v = function() {
                    function h(e, i) {
                        n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return h.prototype.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, h.prototype.show = function(e) {
                        var n = this;
                        if (this._isTransitioning) throw new Error("Modal is transitioning");
                        r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);
                        var i = t.Event(p.SHOW, {
                            relatedTarget: e
                        });
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function(t) {
                            return n.hide(t)
                        }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                            t(n._element).one(p.MOUSEUP_DISMISS, function(e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return n._showElement(e)
                        }))
                    }, h.prototype.hide = function(e) {
                        var n = this;
                        if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                        var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        i && (this._isTransitioning = !0);
                        var o = t.Event(p.HIDE);
                        t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(u) : this._hideModal())
                    }, h.prototype.dispose = function() {
                        t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n
                    }, h.prototype._showElement = function(e) {
                        var n = this,
                            i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
                        var o = t.Event(p.SHOWN, {
                                relatedTarget: e
                            }),
                            s = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                            };
                        i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s()
                    }, h.prototype._enforceFocus = function() {
                        var e = this;
                        t(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n) {
                            document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                        })
                    }, h.prototype._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function(t) {
                            t.which === f && e.hide()
                        }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS)
                    }, h.prototype._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(p.RESIZE, function(t) {
                            return e._handleUpdate(t)
                        }) : t(window).off(p.RESIZE)
                    }, h.prototype._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN)
                        })
                    }, h.prototype._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, h.prototype._showBackdrop = function(e) {
                        var n = this,
                            i = t(this._element).hasClass(m.FADE) ? m.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var o = r.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function(t) {
                                    return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;
                            if (!o) return void e();
                            t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(m.SHOW);
                            var s = function() {
                                n._removeBackdrop(), e && e()
                            };
                            r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s()
                        } else e && e()
                    }, h.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, h.prototype._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h.prototype._setScrollbar = function() {
                        var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                    }, h.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, h.prototype._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, h._jQueryInterface = function(e, n) {
                        return this.each(function() {
                            var o = t(this).data(a),
                                r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                            if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
                                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                o[e](n)
                            } else r.show && o.show(n)
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return _
                        }
                    }]), h
                }();
            return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function(e) {
                var n = this,
                    i = void 0,
                    o = r.getSelectorFromElement(this);
                o && (i = t(o)[0]);
                var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var l = t(i).one(p.SHOW, function(e) {
                    e.isDefaultPrevented() || l.one(p.HIDDEN, function() {
                        t(n).is(":visible") && n.focus()
                    })
                });
                v._jQueryInterface.call(t(i), s, this)
            }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                return t.fn[e] = c, v._jQueryInterface
            }, v
        }(jQuery), function(t) {
            var e = "scrollspy",
                s = "4.0.0-alpha.6",
                a = "bs.scrollspy",
                l = "." + a,
                h = ".data-api",
                c = t.fn[e],
                u = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                d = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                f = {
                    ACTIVATE: "activate" + l,
                    SCROLL: "scroll" + l,
                    LOAD_DATA_API: "load" + l + h
                },
                _ = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                g = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                p = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                m = function() {
                    function h(e, i) {
                        var o = this;
                        n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function(t) {
                            return o._process(t)
                        }), this.refresh(), this._process()
                    }
                    return h.prototype.refresh = function() {
                        var e = this,
                            n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
                            i = "auto" === this._config.method ? n : this._config.method,
                            o = i === p.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var s = t.makeArray(t(this._selector));
                        s.map(function(e) {
                            var n = void 0,
                                s = r.getSelectorFromElement(e);
                            return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, h.prototype.dispose = function() {
                        t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h.prototype._getConfig = function(n) {
                        if (n = t.extend({}, u, n), "string" != typeof n.target) {
                            var i = t(n.target).attr("id");
                            i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return r.typeCheckConfig(e, n, d), n
                    }, h.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h.prototype._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                    }, h.prototype._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            return void(this._activeTarget !== i && this._activate(i))
                        }
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
                            r && this._activate(this._targets[o])
                        }
                    }, h.prototype._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(t) {
                            return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                        });
                        var i = t(n.join(","));
                        i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, h.prototype._clear = function() {
                        t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                            if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
                                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }]), h
                }();
            return t(window).on(f.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    m._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
                return t.fn[e] = c, m._jQueryInterface
            }, m
        }(jQuery), function(t) {
            var e = "tab",
                i = "4.0.0-alpha.6",
                s = "bs.tab",
                a = "." + s,
                l = ".data-api",
                h = t.fn[e],
                c = 150,
                u = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                d = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                f = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                _ = function() {
                    function e(t) {
                        n(this, e), this._element = t
                    }
                    return e.prototype.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
                            var n = void 0,
                                i = void 0,
                                o = t(this._element).closest(f.LIST)[0],
                                s = r.getSelectorFromElement(this._element);
                            o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
                            var a = t.Event(u.HIDE, {
                                    relatedTarget: this._element
                                }),
                                l = t.Event(u.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                s && (n = t(s)[0]), this._activate(this._element, o);
                                var h = function() {
                                    var n = t.Event(u.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        o = t.Event(u.SHOWN, {
                                            relatedTarget: i
                                        });
                                    t(i).trigger(n), t(e._element).trigger(o)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    }, e.prototype.dispose = function() {
                        t.removeClass(this._element, s), this._element = null
                    }, e.prototype._activate = function(e, n, i) {
                        var o = this,
                            s = t(n).find(f.ACTIVE_CHILD)[0],
                            a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
                            l = function() {
                                return o._transitionComplete(e, s, a, i)
                            };
                        s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW)
                    }, e.prototype._transitionComplete = function(e, n, i, o) {
                        if (n) {
                            t(n).removeClass(d.ACTIVE);
                            var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
                            s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1)
                        }
                        if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
                            var a = t(e).closest(f.DROPDOWN)[0];
                            a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0)
                        }
                        o && o()
                    }, e._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this),
                                o = i.data(s);
                            if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
                                if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                                o[n]()
                            }
                        })
                    }, o(e, null, [{
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), e
                }();
            return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e) {
                e.preventDefault(), _._jQueryInterface.call(t(this), "show")
            }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
                return t.fn[e] = h, _._jQueryInterface
            }, _
        }(jQuery), function(t) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip",
                s = "4.0.0-alpha.6",
                a = "bs.tooltip",
                l = "." + a,
                h = t.fn[e],
                c = 150,
                u = "bs-tether",
                d = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: [],
                    container: !1
                },
                f = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array",
                    container: "(string|element|boolean)"
                },
                _ = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                g = {
                    SHOW: "show",
                    OUT: "out"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    INSERTED: "inserted" + l,
                    CLICK: "click" + l,
                    FOCUSIN: "focusin" + l,
                    FOCUSOUT: "focusout" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l
                },
                m = {
                    FADE: "fade",
                    SHOW: "show"
                },
                E = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                v = {
                    element: !1,
                    enabled: !1
                },
                T = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                I = function() {
                    function h(t, e) {
                        n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    return h.prototype.enable = function() {
                        this._isEnabled = !0
                    }, h.prototype.disable = function() {
                        this._isEnabled = !1
                    }, h.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, h.prototype.toggle = function(e) {
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, h.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, h.prototype.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            t(this.element).trigger(n);
                            var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !i) return;
                            var o = this.getTipElement(),
                                s = r.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                l = this._getAttachment(a),
                                c = this.config.container === !1 ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: l,
                                element: o,
                                target: this.element,
                                classes: v,
                                classPrefix: u,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);
                            var d = function() {
                                var n = e._hoverState;
                                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e)
                            };
                            if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);
                            d()
                        }
                    }, h.prototype.hide = function(e) {
                        var n = this,
                            i = this.getTipElement(),
                            o = t.Event(this.constructor.Event.HIDE);
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        var s = function() {
                            n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                        };
                        t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "")
                    }, h.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, h.prototype.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0]
                    }, h.prototype.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether()
                    }, h.prototype.setElementContent = function(e, n) {
                        var o = this.config.html;
                        "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[o ? "html" : "text"](n)
                    }, h.prototype.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, h.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, h.prototype._getAttachment = function(t) {
                        return _[t.toUpperCase()]
                    }, h.prototype._setListeners = function() {
                        var e = this,
                            n = this.config.trigger.split(" ");
                        n.forEach(function(n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                return e.toggle(t)
                            });
                            else if (n !== T.MANUAL) {
                                var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function(t) {
                                    return e._enter(t)
                                }).on(o, e.config.selector, function(t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = t.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, h.prototype._fixTitle = function() {
                        var t = i(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, h.prototype._enter = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void(n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                            n._hoverState === g.SHOW && n.show()
                        }, n.config.delay.show)) : void n.show())
                    }, h.prototype._leave = function(e, n) {
                        var i = this.constructor.DATA_KEY;
                        if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                            n._hoverState === g.OUT && n.hide()
                        }, n.config.delay.hide)) : void n.hide()
                    }, h.prototype._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, h.prototype._getConfig = function(n) {
                        return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, h.prototype._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, h._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this).data(a),
                                o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, o(h, null, [{
                        key: "VERSION",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return d
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return f
                        }
                    }]), h
                }();
            return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
                return t.fn[e] = h, I._jQueryInterface
            }, I
        }(jQuery));
    (function(r) {
        var a = "popover",
            l = "4.0.0-alpha.6",
            h = "bs.popover",
            c = "." + h,
            u = r.fn[a],
            d = r.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            f = r.extend({}, s.DefaultType, {
                content: "(string|element|function)"
            }),
            _ = {
                FADE: "fade",
                SHOW: "show"
            },
            g = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            p = {
                HIDE: "hide" + c,
                HIDDEN: "hidden" + c,
                SHOW: "show" + c,
                SHOWN: "shown" + c,
                INSERTED: "inserted" + c,
                CLICK: "click" + c,
                FOCUSIN: "focusin" + c,
                FOCUSOUT: "focusout" + c,
                MOUSEENTER: "mouseenter" + c,
                MOUSELEAVE: "mouseleave" + c
            },
            m = function(s) {
                function u() {
                    return n(this, u), t(this, s.apply(this, arguments))
                }
                return e(u, s), u.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, u.prototype.getTipElement = function() {
                    return this.tip = this.tip || r(this.config.template)[0]
                }, u.prototype.setContent = function() {
                    var t = r(this.getTipElement());
                    this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether()
                }, u.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, u._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = r(this).data(h),
                            n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, o(u, null, [{
                    key: "VERSION",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return d
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return a
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return h
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return f
                    }
                }]), u
            }(s);
        return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function() {
            return r.fn[a] = u, m._jQueryInterface
        }, m
    })(jQuery)
}();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }

    function f(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }

    function g(a) {
        return a && !isNaN(a.getTime())
    }

    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }
        var e, f = a(b).data(),
            g = {},
            h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g
    }

    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0], q[b])) {
            var d = q[b];
            return a.each(p, function(a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }
    var j = function() {
            var b = {
                get: function(a) {
                    return this.slice(a)[0]
                },
                contains: function(a) {
                    for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                        if (this[c].valueOf() === b) return c;
                    return -1
                },
                remove: function(a) {
                    this.splice(a, 1)
                },
                replace: function(b) {
                    b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var a = new j;
                    return a.replace(this), a
                }
            };
            return function() {
                var c = [];
                return c.push.apply(c, arguments), a.extend(c, b), c
            }
        }(),
        k = function(b, c) {
            this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(r.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(a, b) {
                return parseInt(b) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    k.prototype = {
        constructor: k,
        _process_options: function(e) {
            this._o = a.extend({}, this._o, e);
            var f = this.o = a.extend({}, this._o),
                g = f.language;
            switch (q[g] || (g = g.split("-")[0], q[g] || (g = o.language)), f.language = g, f.startView) {
                case 2:
                case "decade":
                    f.startView = 2;
                    break;
                case 1:
                case "year":
                    f.startView = 1;
                    break;
                default:
                    f.startView = 0
            }
            switch (f.minViewMode) {
                case 1:
                case "months":
                    f.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    f.minViewMode = 2;
                    break;
                default:
                    f.minViewMode = 0
            }
            switch (f.maxViewMode) {
                case 0:
                case "days":
                    f.maxViewMode = 0;
                    break;
                case 1:
                case "months":
                    f.maxViewMode = 1;
                    break;
                default:
                    f.maxViewMode = 2
            }
            f.startView = Math.min(f.startView, f.maxViewMode), f.startView = Math.max(f.startView, f.minViewMode), f.multidate !== !0 && (f.multidate = Number(f.multidate) || !1, f.multidate !== !1 && (f.multidate = Math.max(0, f.multidate))), f.multidateSeparator = String(f.multidateSeparator), f.weekStart %= 7, f.weekEnd = (f.weekStart + 6) % 7;
            var h = r.parseFormat(f.format);
            if (f.startDate !== -(1 / 0) && (f.startDate ? f.startDate instanceof Date ? f.startDate = this._local_to_utc(this._zero_time(f.startDate)) : f.startDate = r.parseDate(f.startDate, h, f.language) : f.startDate = -(1 / 0)), f.endDate !== 1 / 0 && (f.endDate ? f.endDate instanceof Date ? f.endDate = this._local_to_utc(this._zero_time(f.endDate)) : f.endDate = r.parseDate(f.endDate, h, f.language) : f.endDate = 1 / 0), f.daysOfWeekDisabled = f.daysOfWeekDisabled || [], a.isArray(f.daysOfWeekDisabled) || (f.daysOfWeekDisabled = f.daysOfWeekDisabled.split(/[,\s]*/)), f.daysOfWeekDisabled = a.map(f.daysOfWeekDisabled, function(a) {
                    return parseInt(a, 10)
                }), f.daysOfWeekHighlighted = f.daysOfWeekHighlighted || [], a.isArray(f.daysOfWeekHighlighted) || (f.daysOfWeekHighlighted = f.daysOfWeekHighlighted.split(/[,\s]*/)), f.daysOfWeekHighlighted = a.map(f.daysOfWeekHighlighted, function(a) {
                    return parseInt(a, 10)
                }), f.datesDisabled = f.datesDisabled || [], !a.isArray(f.datesDisabled)) {
                var i = [];
                i.push(r.parseDate(f.datesDisabled, h, f.language)), f.datesDisabled = i
            }
            f.datesDisabled = a.map(f.datesDisabled, function(a) {
                return r.parseDate(a, h, f.language)
            });
            var j = String(f.orientation).toLowerCase().split(/\s+/g),
                k = f.orientation.toLowerCase();
            if (j = a.grep(j, function(a) {
                    return /^auto|left|right|top|bottom$/.test(a)
                }), f.orientation = {
                    x: "auto",
                    y: "auto"
                }, k && "auto" !== k)
                if (1 === j.length) switch (j[0]) {
                    case "top":
                    case "bottom":
                        f.orientation.y = j[0];
                        break;
                    case "left":
                    case "right":
                        f.orientation.x = j[0]
                } else k = a.grep(j, function(a) {
                    return /^left|right$/.test(a)
                }), f.orientation.x = k[0] || "auto", k = a.grep(j, function(a) {
                    return /^top|bottom$/.test(a)
                }), f.orientation.y = k[0] || "auto";
                else;
            if (f.defaultViewDate) {
                var l = f.defaultViewDate.year || (new Date).getFullYear(),
                    m = f.defaultViewDate.month || 0,
                    n = f.defaultViewDate.day || 1;
                f.defaultViewDate = c(l, m, n)
            } else f.defaultViewDate = d();
            f.showOnFocus = f.showOnFocus !== b ? f.showOnFocus : !0, f.zIndexOffset = f.zIndexOffset !== b ? f.zIndexOffset : 10
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
        },
        _buildEvents: function() {
            var b = {
                keyup: a.proxy(function(b) {
                    -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: a.proxy(this.keydown, this),
                paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, b]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), b],
                [this.component, {
                    click: a.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: a.proxy(this.show, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function(a) {
                    this.update(a.date)
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: a.proxy(this.click, this)
                }],
                [a(window), {
                    resize: a.proxy(this.place, this)
                }],
                [a(document), {
                    mousedown: a.proxy(function(a) {
                        this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1),
                e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        },
        show: function() {
            return this.element.attr("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this)
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        },
        remove: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function(b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)) c = b.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c), this.update(), b.preventDefault()
        },
        _utc_to_local: function(a) {
            return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        },
        _zero_utc_time: function(a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var a = this.dates.get(-1);
            return "undefined" != typeof a ? new Date(a) : null
        },
        clearDates: function() {
            var a;
            this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: f("setDates"),
        setUTCDate: f("setUTCDates"),
        setValue: function() {
            var a = this.getFormattedDate();
            return this.isInput ? this.element.val(a) : this.component && this.element.find("input").val(a), this
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(a) {
            return this._process_options({
                startDate: a
            }), this.update(), this.updateNavArrows(), this
        },
        setEndDate: function(a) {
            return this._process_options({
                endDate: a
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(a) {
            return this._process_options({
                daysOfWeekDisabled: a
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekHighlighted: function(a) {
            return this._process_options({
                daysOfWeekHighlighted: a
            }), this.update(), this
        },
        setDatesDisabled: function(a) {
            this._process_options({
                datesDisabled: a
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return this;
            var b = this.picker.outerWidth(),
                c = this.picker.outerHeight(),
                d = 10,
                e = a(this.o.container),
                f = e.width(),
                g = e.scrollTop(),
                h = e.offset(),
                i = [];
            this.element.parents().each(function() {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== b && i.push(parseInt(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
                k = this.component ? this.component.parent().offset() : this.element.offset(),
                l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                n = k.left - h.left,
                o = k.top - h.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n = k.left + m - b) : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c, q = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({
                    top: o,
                    right: r,
                    zIndex: j
                })
            } else this.picker.css({
                top: o,
                left: n,
                zIndex: j
            });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var b = this.dates.copy(),
                c = [],
                d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
            }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) {
                return r.parseDate(a, this.o.format, this.o.language)
            }, this)), c = a.grep(c, a.proxy(function(a) {
                return a < this.o.startDate || a > this.o.endDate || !a
            }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        },
        fillDow: function() {
            var a = this.o.weekStart,
                b = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(a, b) {
                    return parseInt(b) + 1
                }), b += '<th class="cw">&#160;</th>'); a < this.o.weekStart + 7;) b += '<th class="dow">' + q[this.o.language].daysMin[a++ % 7] + "</th>";
            b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
        },
        fillMonths: function() {
            for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + q[this.o.language].monthsShort[b++] + "</span>";
            this.picker.find(".datepicker-months td").html(a)
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(b) {
            var c = [],
                d = this.viewDate.getUTCFullYear(),
                f = this.viewDate.getUTCMonth(),
                g = new Date;
            return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < f ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > f) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === g.getFullYear() && b.getUTCMonth() === g.getMonth() && b.getUTCDate() === g.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), (b.valueOf() < this.o.startDate || b.valueOf() > this.o.endDate || -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)) && c.push("disabled"), -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted"), this.o.datesDisabled.length > 0 && a.grep(this.o.datesDisabled, function(a) {
                return e(b, a)
            }).length > 0 && c.push("disabled", "disabled-date"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c
        },
        fill: function() {
            var d, e = new Date(this.viewDate),
                f = e.getUTCFullYear(),
                g = e.getUTCMonth(),
                h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                j = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                l = q[this.o.language].today || q.en.today || "",
                m = q[this.o.language].clear || q.en.clear || "",
                n = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(f) && !isNaN(g)) {
                this.picker.find(".datepicker-days thead .datepicker-switch").text(r.formatDate(new c(f, g), n, this.o.language)), this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var o = c(f, g - 1, 28),
                    p = r.getDaysInMonth(o.getUTCFullYear(), o.getUTCMonth());
                o.setUTCDate(p), o.setUTCDate(p - (o.getUTCDay() - this.o.weekStart + 7) % 7);
                var s = new Date(o);
                o.getUTCFullYear() < 100 && s.setUTCFullYear(o.getUTCFullYear()), s.setUTCDate(s.getUTCDate() + 42), s = s.valueOf();
                for (var t, u = []; o.valueOf() < s;) {
                    if (o.getUTCDay() === this.o.weekStart && (u.push("<tr>"), this.o.calendarWeeks)) {
                        var v = new Date(+o + (this.o.weekStart - o.getUTCDay() - 7) % 7 * 864e5),
                            w = new Date(Number(v) + (11 - v.getUTCDay()) % 7 * 864e5),
                            x = new Date(Number(x = c(w.getUTCFullYear(), 0, 1)) + (11 - x.getUTCDay()) % 7 * 864e5),
                            y = (w - x) / 864e5 / 7 + 1;
                        u.push('<td class="cw">' + y + "</td>")
                    }
                    if (t = this.getClassNames(o), t.push("day"), this.o.beforeShowDay !== a.noop) {
                        var z = this.o.beforeShowDay(this._utc_to_local(o));
                        z === b ? z = {} : "boolean" == typeof z ? z = {
                            enabled: z
                        } : "string" == typeof z && (z = {
                            classes: z
                        }), z.enabled === !1 && t.push("disabled"), z.classes && (t = t.concat(z.classes.split(/\s+/))), z.tooltip && (d = z.tooltip)
                    }
                    t = a.unique(t), u.push('<td class="' + t.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + o.getUTCDate() + "</td>"), d = null, o.getUTCDay() === this.o.weekEnd && u.push("</tr>"), o.setUTCDate(o.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(u.join(""));
                var A = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? "Months" : f).end().find("span").removeClass("active");
                if (a.each(this.dates, function(a, b) {
                        b.getUTCFullYear() === f && A.eq(b.getUTCMonth()).addClass("active")
                    }), (h > f || f > j) && A.addClass("disabled"), f === h && A.slice(0, i).addClass("disabled"), f === j && A.slice(k + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
                    var B = this;
                    a.each(A, function(b, c) {
                        if (!a(c).hasClass("disabled")) {
                            var d = new Date(f, b, 1),
                                e = B.o.beforeShowMonth(d);
                            e === !1 && a(c).addClass("disabled")
                        }
                    })
                }
                u = "", f = 10 * parseInt(f / 10, 10);
                var C = this.picker.find(".datepicker-years").find(".datepicker-switch").text(f + "-" + (f + 9)).end().find("td");
                f -= 1;
                for (var D, E = a.map(this.dates, function(a) {
                        return a.getUTCFullYear()
                    }), F = -1; 11 > F; F++) {
                    if (D = ["year"], d = null, -1 === F ? D.push("old") : 10 === F && D.push("new"), -1 !== a.inArray(f, E) && D.push("active"), (h > f || f > j) && D.push("disabled"), this.o.beforeShowYear !== a.noop) {
                        var G = this.o.beforeShowYear(new Date(f, 0, 1));
                        G === b ? G = {} : "boolean" == typeof G ? G = {
                            enabled: G
                        } : "string" == typeof G && (G = {
                            classes: G
                        }), G.enabled === !1 && D.push("disabled"), G.classes && (D = D.concat(G.classes.split(/\s+/))), G.tooltip && (d = G.tooltip)
                    }
                    u += '<span class="' + D.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + f + "</span>", f += 1
                }
                C.html(u)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a = new Date(this.viewDate),
                    b = a.getUTCFullYear(),
                    c = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(b) {
            b.preventDefault(), b.stopPropagation();
            var d, e, f, g = a(b.target).closest("span, td, th");
            if (1 === g.length) switch (g[0].nodeName.toLowerCase()) {
                case "th":
                    switch (g[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var h = r.modes[this.viewMode].navStep * ("prev" === g[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var i = new Date;
                            i = c(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0), this.showMode(-2);
                            var j = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(i, j);
                            break;
                        case "clear":
                            this.clearDates()
                    }
                    break;
                case "span":
                    g.hasClass("disabled") || (this.viewDate.setUTCDate(1), g.hasClass("month") ? (f = 1, e = g.parent().find("span").index(g), d = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(e), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(c(d, e, f)), this.showMode()) : this.showMode(-1)) : (f = 1, e = 0, d = parseInt(g.text(), 10) || 0, this.viewDate.setUTCFullYear(d), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(d, e, f)), this.showMode(-1)), this.fill());
                    break;
                case "td":
                    g.hasClass("day") && !g.hasClass("disabled") && (f = parseInt(g.text(), 10) || 1, d = this.viewDate.getUTCFullYear(), e = this.viewDate.getUTCMonth(), g.hasClass("old") ? 0 === e ? (e = 11, d -= 1) : e -= 1 : g.hasClass("new") && (11 === e ? (e = 0, d += 1) : e += 1), this._setDate(c(d, e, f)))
            }
            this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), -1 !== b ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate");
            var c;
            this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" !== b || this.hide()
        },
        moveMonth: function(a, b) {
            if (!g(a)) return this.o.defaultViewDate;
            if (!b) return a;
            var c, d, e = new Date(a.valueOf()),
                f = e.getUTCDate(),
                h = e.getUTCMonth(),
                i = Math.abs(b);
            if (b = b > 0 ? 1 : -1, 1 === i) d = -1 === b ? function() {
                return e.getUTCMonth() === h
            } : function() {
                return e.getUTCMonth() !== c
            }, c = h + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);
            else {
                for (var j = 0; i > j; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function() {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d();) e.setUTCDate(--f), e.setUTCMonth(c);
            return e
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b)
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function(a) {
            if (!this.picker.is(":visible")) return void((40 === a.keyCode || 27 === a.keyCode) && (this.show(), a.stopPropagation()));
            var b, c, e, f = !1,
                g = this.focusDate || this.viewDate;
            switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    b = 37 === a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.dates.get(-1) || d(), b), e = this.moveYear(g, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.dates.get(-1) || d(), b), e = this.moveMonth(g, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.dates.get(-1) || d()), c.setUTCDate(c.getUTCDate() + b), e = new Date(g), e.setUTCDate(g.getUTCDate() + b)), this.dateWithinRange(e) && (this.focusDate = this.viewDate = e, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    b = 38 === a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.dates.get(-1) || d(), b), e = this.moveYear(g, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.dates.get(-1) || d(), b), e = this.moveMonth(g, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.dates.get(-1) || d()), c.setUTCDate(c.getUTCDate() + 7 * b), e = new Date(g), e.setUTCDate(g.getUTCDate() + 7 * b)), this.dateWithinRange(e) && (this.focusDate = this.viewDate = e, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    g = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(g), f = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), "function" == typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (f) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var h;
                this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
            }
        },
        showMode: function(a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a))), this.picker.children("div").hide().filter(".datepicker-" + r.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var l = function(b, c) {
        this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf()
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b)
            })
        },
        dateUpdated: function(b) {
            if (!this.updating) {
                this.updating = !0;
                var c = a(b.target).data("datepicker");
                if ("undefined" != typeof c) {
                    var d = c.getUTCDate(),
                        e = a.inArray(b.target, this.inputs),
                        f = e - 1,
                        g = e + 1,
                        h = this.inputs.length;
                    if (-1 !== e) {
                        if (a.each(this.pickers, function(a, b) {
                                b.getUTCDate() || b.setUTCDate(d)
                            }), d < this.dates[f])
                            for (; f >= 0 && d < this.dates[f];) this.pickers[f--].setUTCDate(d);
                        else if (d > this.dates[g])
                            for (; h > g && d > this.dates[g];) this.pickers[g++].setUTCDate(d);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        },
        remove: function() {
            a.map(this.pickers, function(a) {
                a.remove()
            }), delete this.element.data().datepicker
        }
    };
    var m = a.fn.datepicker,
        n = function(c) {
            var d = Array.apply(null, arguments);
            d.shift();
            var e;
            if (this.each(function() {
                    var b = a(this),
                        f = b.data("datepicker"),
                        g = "object" == typeof c && c;
                    if (!f) {
                        var j = h(this, "date"),
                            m = a.extend({}, o, j, g),
                            n = i(m.language),
                            p = a.extend({}, o, n, j, g);
                        if (b.hasClass("input-daterange") || p.inputs) {
                            var q = {
                                inputs: p.inputs || b.find("input").toArray()
                            };
                            b.data("datepicker", f = new l(this, a.extend(p, q)))
                        } else b.data("datepicker", f = new k(this, p))
                    }
                    "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
                }), e === b || e instanceof k || e instanceof l) return this;
            if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
            return e
        };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: a.noop,
            beforeShowMonth: a.noop,
            beforeShowYear: a.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            daysOfWeekHighlighted: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            maxViewMode: 2,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -(1 / 0),
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            enableOnReadonly: !0,
            container: "body",
            immediateUpdates: !1,
            title: ""
        },
        p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        },
        r = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            },
            getDaysInMonth: function(a, b) {
                return [31, r.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function(a) {
                if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
                var b = a.replace(this.validParts, "\x00").split("\x00"),
                    c = a.match(this.validParts);
                if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
                return {
                    separators: b,
                    parts: c
                }
            },
            parseDate: function(d, e, f) {
                function g() {
                    var a = this.slice(0, m[j].length),
                        b = m[j].slice(0, a.length);
                    return a.toLowerCase() === b.toLowerCase()
                }
                if (!d) return b;
                if (d instanceof Date) return d;
                if ("string" == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(d, e, f);
                var h, i, j, l = /([\-+]\d+)([dmwy])/,
                    m = d.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)) {
                    for (d = new Date, j = 0; j < m.length; j++) switch (h = l.exec(m[j]), i = parseInt(h[1]), h[2]) {
                        case "d":
                            d.setUTCDate(d.getUTCDate() + i);
                            break;
                        case "m":
                            d = k.prototype.moveMonth.call(k.prototype, d, i);
                            break;
                        case "w":
                            d.setUTCDate(d.getUTCDate() + 7 * i);
                            break;
                        case "y":
                            d = k.prototype.moveYear.call(k.prototype, d, i)
                    }
                    return c(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0)
                }
                m = d && d.match(this.nonpunctuation) || [], d = new Date;
                var n, o, p = {},
                    s = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    t = {
                        yyyy: function(a, b) {
                            return a.setUTCFullYear(b)
                        },
                        yy: function(a, b) {
                            return a.setUTCFullYear(2e3 + b)
                        },
                        m: function(a, b) {
                            if (isNaN(a)) return a;
                            for (b -= 1; 0 > b;) b += 12;
                            for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                            return a
                        },
                        d: function(a, b) {
                            return a.setUTCDate(b)
                        }
                    };
                t.M = t.MM = t.mm = t.m, t.dd = t.d, d = c(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
                var u = e.parts.slice();
                if (m.length !== u.length && (u = a(u).filter(function(b, c) {
                        return -1 !== a.inArray(c, s)
                    }).toArray()), m.length === u.length) {
                    var v;
                    for (j = 0, v = u.length; v > j; j++) {
                        if (n = parseInt(m[j], 10), h = u[j], isNaN(n)) switch (h) {
                            case "MM":
                                o = a(q[f].months).filter(g), n = a.inArray(o[0], q[f].months) + 1;
                                break;
                            case "M":
                                o = a(q[f].monthsShort).filter(g), n = a.inArray(o[0], q[f].monthsShort) + 1
                        }
                        p[h] = n
                    }
                    var w, x;
                    for (j = 0; j < s.length; j++) x = s[j], x in p && !isNaN(p[x]) && (w = new Date(d), t[x](w, p[x]), isNaN(w) || (d = w))
                }
                return d
            },
            formatDate: function(b, c, d) {
                if (!b) return "";
                if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
                var e = {
                    d: b.getUTCDate(),
                    D: q[d].daysShort[b.getUTCDay()],
                    DD: q[d].days[b.getUTCDay()],
                    m: b.getUTCMonth() + 1,
                    M: q[d].monthsShort[b.getUTCMonth()],
                    MM: q[d].months[b.getUTCMonth()],
                    yy: b.getUTCFullYear().toString().substring(2),
                    yyyy: b.getUTCFullYear()
                };
                e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
                for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                return b.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = m, this
    }, a.fn.datepicker.version = "1.5.0", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"))
    }), a(function() {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
});
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            }
        else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "../../../../../../www.youtube.com/embed/%id%_fa6dc463.html"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
! function(t, i) {
    "use strict";
    if (!i) throw new Error("Filterizr requires jQuery to work.");
    var r, e = function(t) {
        this.init(t)
    };
    e.prototype = {
        init: function(t) {
            this.root = {
                x: 0,
                y: 0,
                w: t
            }
        },
        fit: function(t) {
            var i, r, e, n = t.length,
                o = n > 0 ? t[0].h : 0;
            for (this.root.h = o, i = 0; i < n; i++) e = t[i], (r = this.findNode(this.root, e.w, e.h)) ? e.fit = this.splitNode(r, e.w, e.h) : e.fit = this.growDown(e.w, e.h)
        },
        findNode: function(t, i, r) {
            return t.used ? this.findNode(t.right, i, r) || this.findNode(t.down, i, r) : i <= t.w && r <= t.h ? t : null
        },
        splitNode: function(t, i, r) {
            return t.used = !0, t.down = {
                x: t.x,
                y: t.y + r,
                w: t.w,
                h: t.h - r
            }, t.right = {
                x: t.x + i,
                y: t.y,
                w: t.w - i,
                h: r
            }, t
        },
        growDown: function(t, i) {
            var r;
            return this.root = {
                used: !0,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + i,
                down: {
                    x: 0,
                    y: this.root.h,
                    w: this.root.w,
                    h: i
                },
                right: this.root
            }, (r = this.findNode(this.root, t, i)) ? this.splitNode(r, t, i) : null
        }
    }, i.fn.filterizr = function() {
        var t = this,
            r = arguments;
        if (t._fltr || (t._fltr = i.fn.filterizr.prototype.init(t.selector, "object" == typeof r[0] ? r[0] : void 0)), "string" == typeof r[0]) {
            if (r[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
            if ("function" != typeof t._fltr[r[0]]) throw new Error("Filterizr error: There is no such function");
            t._fltr[r[0]](r[1], r[2])
        }
        return t
    }, i.fn.filterizr.prototype = {
        init: function(t, r) {
            var e = i(t).extend(i.fn.filterizr.prototype);
            return e.options = {
                animationDuration: .5,
                callbacks: {
                    onFilteringStart: function() {},
                    onFilteringEnd: function() {},
                    onShufflingStart: function() {},
                    onShufflingEnd: function() {},
                    onSortingStart: function() {},
                    onSortingEnd: function() {}
                },
                delay: 0,
                delayMode: "progressive",
                easing: "ease-out",
                filter: "all",
                filterOutCss: {
                    opacity: 0,
                    transform: "scale(0.5)"
                },
                filterInCss: {
                    opacity: 1,
                    transform: "scale(1)"
                },
                layout: "sameSize",
                selector: "string" == typeof t ? t : ".filtr-container",
                setupControls: !0
            }, 0 === arguments.length && (t = e.options.selector, r = e.options), 1 === arguments.length && "object" == typeof arguments[0] && (r = arguments[0]), r && e.setOptions(r), e.css({
                padding: 0,
                position: "relative"
            }), e._lastCategory = 0, e._isAnimating = !1, e._isShuffling = !1, e._isSorting = !1, e._mainArray = e._getFiltrItems(), e._subArrays = e._makeSubarrays(), e._activeArray = e._getCollectionByFilter(e.options.filter), e._toggledCategories = {}, e._typedText = i("input[data-search]").val() || "", e._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var i = 16 * Math.random() | 0;
                return ("x" == t ? i : 3 & i | 8).toString(16)
            }), e._setupEvents(), e.options.setupControls && e._setupControls(), e.filter(e.options.filter), e
        },
        filter: function(t) {
            var i = this,
                r = i._getCollectionByFilter(t);
            i.options.filter = t, i.trigger("filteringStart"), i._handleFiltering(r), i._isSearchActivated() && i.search(i._typedText)
        },
        toggleFilter: function(t) {
            var i = this,
                r = [];
            i.trigger("filteringStart"), t && (i._toggledCategories[t] ? delete i._toggledCategories[t] : i._toggledCategories[t] = !0), i._multifilterModeOn() ? (r = i._makeMultifilterArray(), i._handleFiltering(r), i._isSearchActivated() && i.search(i._typedText)) : (i.filter("all"), i._isSearchActivated() && i.search(i._typedText))
        },
        search: function(t) {
            var i = this,
                r = i._multifilterModeOn() ? i._makeMultifilterArray() : i._getCollectionByFilter(i.options.filter),
                e = [],
                n = 0;
            if (i._isSearchActivated())
                for (n = 0; n < r.length; n++) {
                    r[n].text().toLowerCase().indexOf(t.toLowerCase()) > -1 && e.push(r[n])
                }
            if (e.length > 0) i._handleFiltering(e);
            else if (i._isSearchActivated())
                for (n = 0; n < i._activeArray.length; n++) i._activeArray[n]._filterOut();
            else i._handleFiltering(r)
        },
        shuffle: function() {
            var t = this;
            t._isAnimating = !0, t._isShuffling = !0, t.trigger("shufflingStart"), t._mainArray = t._fisherYatesShuffle(t._mainArray), t._subArrays = t._makeSubarrays();
            var i = t._multifilterModeOn() ? t._makeMultifilterArray() : t._getCollectionByFilter(t.options.filter);
            t._isSearchActivated() ? t.search(t._typedText) : t._placeItems(i)
        },
        sort: function(t, i) {
            var r = this;
            if (t = t || "domIndex", i = i || "asc", r._isAnimating = !0, r._isSorting = !0, r.trigger("sortingStart"), "domIndex" !== t && "sortData" !== t && "w" !== t && "h" !== t)
                for (var e = 0; e < r._mainArray.length; e++) r._mainArray[e][t] = r._mainArray[e].data(t);
            r._mainArray.sort(r._comparator(t, i)), r._subArrays = r._makeSubarrays();
            var n = r._multifilterModeOn() ? r._makeMultifilterArray() : r._getCollectionByFilter(r.options.filter);
            r._isSearchActivated() ? r.search(r._typedText) : r._placeItems(n)
        },
        setOptions: function(t) {
            var i = this,
                r = 0;
            for (var e in t) i.options[e] = t[e];
            if (i._mainArray && (t.animationDuration || t.delay || t.easing || t.delayMode))
                for (r = 0; r < i._mainArray.length; r++) i._mainArray[r].css("transition", "all " + i.options.animationDuration + "s " + i.options.easing + " " + i._mainArray[r]._calcDelay() + "ms");
            t.callbacks && (t.callbacks.onFilteringStart || (i.options.callbacks.onFilteringStart = function() {}), t.callbacks.onFilteringEnd || (i.options.callbacks.onFilteringEnd = function() {}), t.callbacks.onShufflingStart || (i.options.callbacks.onShufflingStart = function() {}), t.callbacks.onShufflingEnd || (i.options.callbacks.onShufflingEnd = function() {}), t.callbacks.onSortingStart || (i.options.callbacks.onSortingStart = function() {}), t.callbacks.onSortingEnd || (i.options.callbacks.onSortingEnd = function() {})), i.options.filterInCss.transform || (i.options.filterInCss.transform = "translate3d(0,0,0)"), i.options.filterOutCss.transform || (i.options.filterOutCss.transform = "translate3d(0,0,0)")
        },
        _getFiltrItems: function() {
            var t = this,
                r = i(t.find(".filtr-item")),
                e = [];
            return i.each(r, function(r, o) {
                var a = i(o).extend(n)._init(r, t);
                e.push(a)
            }), e
        },
        _makeSubarrays: function() {
            for (var t = this, i = [], r = 0; r < t._lastCategory; r++) i.push([]);
            for (r = 0; r < t._mainArray.length; r++)
                if ("object" == typeof t._mainArray[r]._category)
                    for (var e = t._mainArray[r]._category.length, n = 0; n < e; n++) i[t._mainArray[r]._category[n] - 1].push(t._mainArray[r]);
                else i[t._mainArray[r]._category - 1].push(t._mainArray[r]);
            return i
        },
        _makeMultifilterArray: function() {
            for (var t = [], i = {}, r = 0; r < this._mainArray.length; r++) {
                var e = this._mainArray[r],
                    n = !1,
                    o = e.domIndex in i == !1;
                if (Array.isArray(e._category)) {
                    for (var a = 0; a < e._category.length; a++)
                        if (e._category[a] in this._toggledCategories) {
                            n = !0;
                            break
                        }
                } else e._category in this._toggledCategories && (n = !0);
                o && n && (i[e.domIndex] = !0, t.push(e))
            }
            return t
        },
        _setupControls: function() {
            var t = this;
            i("*[data-filter]").click(function() {
                var r = i(this).data("filter");
                t.options.filter !== r && t.filter(r)
            }), i("*[data-multifilter]").click(function() {
                var r = i(this).data("multifilter");
                "all" === r ? (t._toggledCategories = {}, t.filter("all")) : t.toggleFilter(r)
            }), i("*[data-shuffle]").click(function() {
                t.shuffle()
            }), i("*[data-sortAsc]").click(function() {
                var r = i("*[data-sortOrder]").val();
                t.sort(r, "asc")
            }), i("*[data-sortDesc]").click(function() {
                var r = i("*[data-sortOrder]").val();
                t.sort(r, "desc")
            }), i("input[data-search]").keyup(function() {
                t._typedText = i(this).val(), t._delayEvent(function() {
                    t.search(t._typedText)
                }, 250, t._uID)
            })
        },
        _setupEvents: function() {
            var r = this;
            i(t).resize(function() {
                r._delayEvent(function() {
                    r.trigger("resizeFiltrContainer")
                }, 250, r._uID)
            }), r.on("resizeFiltrContainer", function() {
                r._multifilterModeOn() ? r.toggleFilter() : r.filter(r.options.filter)
            }).on("filteringStart", function() {
                r.options.callbacks.onFilteringStart()
            }).on("filteringEnd", function() {
                r.options.callbacks.onFilteringEnd()
            }).on("shufflingStart", function() {
                r._isShuffling = !0, r.options.callbacks.onShufflingStart()
            }).on("shufflingEnd", function() {
                r.options.callbacks.onShufflingEnd(), r._isShuffling = !1
            }).on("sortingStart", function() {
                r._isSorting = !0, r.options.callbacks.onSortingStart()
            }).on("sortingEnd", function() {
                r.options.callbacks.onSortingEnd(), r._isSorting = !1
            })
        },
        _calcItemPositions: function() {
            var t = this,
                r = t._activeArray,
                n = 0,
                o = Math.round(t.width() / t.find(".filtr-item").outerWidth()),
                a = 0,
                s = r[0].outerWidth(),
                l = 0,
                f = 0,
                c = 0,
                u = 0,
                h = 0,
                g = [];
            if ("packed" === t.options.layout) {
                i.each(t._activeArray, function(t, i) {
                    i._updateDimensions()
                });
                var _ = new e(t.outerWidth());
                for (_.fit(t._activeArray), u = 0; u < r.length; u++) g.push({
                    left: r[u].fit.x,
                    top: r[u].fit.y
                });
                n = _.root.h
            }
            if ("horizontal" === t.options.layout)
                for (a = 1, u = 1; u <= r.length; u++) s = r[u - 1].outerWidth(), l = r[u - 1].outerHeight(), g.push({
                    left: f,
                    top: c
                }), f += s, n < l && (n = l);
            else if ("vertical" === t.options.layout) {
                for (u = 1; u <= r.length; u++) l = r[u - 1].outerHeight(), g.push({
                    left: f,
                    top: c
                }), c += l;
                n = c
            } else if ("sameHeight" === t.options.layout) {
                a = 1;
                var d = t.outerWidth();
                for (u = 1; u <= r.length; u++) {
                    s = r[u - 1].width();
                    var p = r[u - 1].outerWidth(),
                        y = 0;
                    r[u] && (y = r[u].width()), g.push({
                        left: f,
                        top: c
                    }), (h = f + s + y) > d ? (h = 0, f = 0, c += r[0].outerHeight(), a++) : f += p
                }
                n = a * r[0].outerHeight()
            } else if ("sameWidth" === t.options.layout) {
                for (u = 1; u <= r.length; u++) {
                    if (g.push({
                            left: f,
                            top: c
                        }), u % o == 0 && a++, f += s, c = 0, a > 0)
                        for (h = a; h > 0;) c += r[u - o * h].outerHeight(), h--;
                    u % o == 0 && (f = 0)
                }
                for (u = 0; u < o; u++) {
                    for (var m = 0, v = u; r[v];) m += r[v].outerHeight(), v += o;
                    m > n ? (n = m, m = 0) : m = 0
                }
            } else if ("sameSize" === t.options.layout) {
                for (u = 1; u <= r.length; u++) g.push({
                    left: f,
                    top: c
                }), f += s, u % o == 0 && (c += r[0].outerHeight(), f = 0);
                n = (a = Math.ceil(r.length / o)) * r[0].outerHeight()
            }
            return t.css("height", n), g
        },
        _handleFiltering: function(t) {
            for (var i = this._getArrayOfUniqueItems(this._activeArray, t), r = 0; r < i.length; r++) i[r]._filterOut();
            this._activeArray = t, this._placeItems(t)
        },
        _multifilterModeOn: function() {
            return Object.keys(this._toggledCategories).length > 0
        },
        _isSearchActivated: function() {
            return this._typedText.length > 0
        },
        _placeItems: function(t) {
            this._isAnimating = !0, this._itemPositions = this._calcItemPositions();
            for (var i = 0; i < t.length; i++) t[i]._filterIn(this._itemPositions[i])
        },
        _getCollectionByFilter: function(t) {
            return "all" === t ? this._mainArray : this._subArrays[t - 1]
        },
        _makeDeepCopy: function(t) {
            var i = {};
            for (var r in t) i[r] = t[r];
            return i
        },
        _comparator: function(t, i) {
            return function(r, e) {
                return "asc" === i ? r[t] < e[t] ? -1 : r[t] > e[t] ? 1 : 0 : "desc" === i ? e[t] < r[t] ? -1 : e[t] > r[t] ? 1 : 0 : void 0
            }
        },
        _getArrayOfUniqueItems: function(t, i) {
            var r, e, n = [],
                o = {},
                a = i.length;
            for (r = 0; r < a; r++) o[i[r].domIndex] = !0;
            for (a = t.length, r = 0; r < a; r++)(e = t[r]).domIndex in o || n.push(e);
            return n
        },
        _delayEvent: (r = {}, function(t, i, e) {
            if (null === e) throw Error("UniqueID needed");
            r[e] && clearTimeout(r[e]), r[e] = setTimeout(t, i)
        }),
        _fisherYatesShuffle: function(t) {
            for (var i, r, e = t.length; e;) r = Math.floor(Math.random() * e--), i = t[e], t[e] = t[r], t[r] = i;
            return t
        }
    };
    var n = {
        _init: function(t, i) {
            var r = this;
            return r._parent = i, r._category = r._getCategory(), r._lastPos = {}, r.domIndex = t, r.sortData = r.data("sort"), r.w = 0, r.h = 0, r._isFilteredOut = !0, r._filteringOut = !1, r._filteringIn = !1, r.css(i.options.filterOutCss).css({
                "-webkit-backface-visibility": "hidden",
                perspective: "1000px",
                "-webkit-perspective": "1000px",
                "-webkit-transform-style": "preserve-3d",
                position: "absolute",
                transition: "all " + i.options.animationDuration + "s " + i.options.easing + " " + r._calcDelay() + "ms"
            }), r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                r._onTransitionEnd()
            }), r
        },
        _updateDimensions: function() {
            this.w = this.outerWidth(), this.h = this.outerHeight()
        },
        _calcDelay: function() {
            var t = this,
                i = 0;
            return "progressive" === t._parent.options.delayMode ? i = t._parent.options.delay * t.domIndex : t.domIndex % 2 == 0 && (i = t._parent.options.delay), i
        },
        _getCategory: function() {
            var t = this,
                i = t.data("category");
            if ("string" == typeof i) {
                i = i.split(", ");
                for (var r = 0; r < i.length; r++) {
                    if (isNaN(parseInt(i[r]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
                    parseInt(i[r]) > t._parent._lastCategory && (t._parent._lastCategory = parseInt(i[r]))
                }
            } else i > t._parent._lastCategory && (t._parent._lastCategory = i);
            return i
        },
        _onTransitionEnd: function() {
            var t = this;
            t._filteringOut ? (i(t).addClass("filteredOut"), t._isFilteredOut = !0, t._filteringOut = !1) : t._filteringIn && (t._isFilteredOut = !1, t._filteringIn = !1), t._parent._isAnimating && (t._parent._isShuffling ? t._parent.trigger("shufflingEnd") : t._parent._isSorting ? t._parent.trigger("sortingEnd") : t._parent.trigger("filteringEnd"), t._parent._isAnimating = !1)
        },
        _filterOut: function() {
            var t = this,
                i = t._parent._makeDeepCopy(t._parent.options.filterOutCss);
            i.transform += " translate3d(" + t._lastPos.left + "px," + t._lastPos.top + "px, 0)", t.css(i), t.css("pointer-events", "none"), t._filteringOut = !0
        },
        _filterIn: function(t) {
            var r = this,
                e = r._parent._makeDeepCopy(r._parent.options.filterInCss);
            i(r).removeClass("filteredOut"), r._filteringIn = !0, r._lastPos = t, r.css("pointer-events", "auto"), e.transform += " translate3d(" + t.left + "px," + t.top + "px, 0)", r.css(e)
        }
    }
}(this, jQuery);
! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports), a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function d(a, b) {
        return b.indexOf(a) >= 0
    }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            } return a
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }

    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }

    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }

    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }

    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        o = window.WeakMap || window.MozWeakMap || function() {
            function a() {
                c(this, a), this.keys = [], this.values = []
            }
            return n(a, [{
                key: "get",
                value: function(a) {
                    for (var b = 0; b < this.keys.length; b++) {
                        var c = this.keys[b];
                        if (c === a) return this.values[b]
                    }
                }
            }, {
                key: "set",
                value: function(a, b) {
                    for (var c = 0; c < this.keys.length; c++) {
                        var d = this.keys[c];
                        if (d === a) return this.values[c] = b, this
                    }
                    return this.keys.push(a), this.values.push(b), this
                }
            }]), a
        }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
            function a() {
                c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return n(a, [{
                key: "observe",
                value: function() {}
            }]), a
        }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function(a) {
            var b = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(c) {
                    "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) {
                        return b.toUpperCase()
                    });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null
                }
            }
        },
        r = function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = function() {
                    return "requestAnimationFrame" in window ? function(a) {
                        return window.requestAnimationFrame(a)
                    } : function(a) {
                        return a()
                    }
                }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
            }
            return n(a, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var a = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var b = 0; b < this.boxes.length; b++) {
                                var c = this.boxes[b];
                                this.applyStyle(c, !0)
                            }
                    if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                        var d = new p(function(b) {
                            for (var c = 0; c < b.length; c++)
                                for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                    var f = d.addedNodes[e];
                                    a.doSync(f)
                                }
                        });
                        d.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    p.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(a) {
                    if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                        a = a.parentNode || a;
                        for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                            var e = b[c];
                            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
                        }
                    }
                }
            }, {
                key: "show",
                value: function(a) {
                    return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a
                }
            }, {
                key: "applyStyle",
                value: function(a, b) {
                    var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return c.customStyle(a, b, d, e, f)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(a) {
                    if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(a, b, c, d, e) {
                    return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                        animationDuration: c
                    }), d && this.vendorSet(a.style, {
                        animationDelay: d
                    }), e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }), this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }), a
                }
            }, {
                key: "vendorSet",
                value: function(a, b) {
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = b[c];
                            a["" + c] = d;
                            for (var e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(a, b) {
                    for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                    }
                    return d
                }
            }, {
                key: "animationName",
                value: function(a) {
                    var b = void 0;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = q(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                }
            }, {
                key: "cacheAnimationName",
                value: function(a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                }
            }, {
                key: "cachedAnimationName",
                value: function(a) {
                    return this.animationNameCache.get(a)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            if (c) {
                                if (this.isVisible(c)) {
                                    this.show(c);
                                    continue
                                }
                                a.push(c)
                            }
                        }
                        this.boxes = a, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(a) {
                    for (; void 0 === a.offsetTop;) a = a.parentNode;
                    for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
                    return b
                }
            }, {
                key: "isVisible",
                value: function(a) {
                    var b = a.getAttribute("data-wow-offset") || this.config.offset,
                        c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                    return d >= e && f >= c
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && f(navigator.userAgent)
                }
            }]), a
        }();
    b["default"] = r, a.exports = b["default"]
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function s() {
                        var s, r;
                        return !i.settings.submitHandler || (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), void 0 !== r && r)
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function() {
                e = i.element(this) && e
            })), e
        },
        removeAttrs: function(e) {
            var i = {},
                s = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        },
        rules: function(e, i) {
            var s, r, n, a, o, u, l = this[0];
            if (e) switch (r = (s = t.data(l.form, "validator").settings).rules, n = t.validator.staticRules(l), e) {
                case "add":
                    t.extend(n, t.validator.normalizeRule(i)), delete n.messages, r[l.name] = n, i.messages && (s.messages[l.name] = t.extend(s.messages[l.name], i.messages));
                    break;
                case "remove":
                    return i ? (u = {}, t.each(i.split(/\s/), function(e, i) {
                        u[i] = n[i], delete n[i], "required" === i && t(l).removeAttr("aria-required")
                    }), u) : (delete r[l.name], n)
            }
            return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(l), t.validator.attributeRules(l), t.validator.dataRules(l), t.validator.staticRules(l)), l)).required && (o = a.required, delete a.required, a = t.extend({
                required: o
            }, a), t(l).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                remote: o
            })), a
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var e, i = this.groups = {};

                function s(e) {
                    var i = t.data(this[0].form, "validator"),
                        s = "on" + e.type.replace(/^validate/, ""),
                        r = i.settings;
                    r[s] && !this.is(r.ignore) && r[s].call(i, this[0], e)
                }
                t.each(this.settings.groups, function(e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
                        i[s] = e
                    })
                }), e = this.settings.rules, t.each(e, function(i, s) {
                    e[i] = t.validator.normalizeRule(s)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", s).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", s), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var i = this.clean(e),
                    s = this.validationTargetFor(i),
                    r = !0;
                return this.lastElement = s, void 0 === s ? delete this.invalid[i.name] : (this.prepareElement(s), this.currentElements = t(s), (r = !1 !== this.check(s)) ? delete this.invalid[s.name] : this.invalid[s.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t) i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i, s = t(e),
                    r = e.type;
                return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && void 0 !== e.validity ? !e.validity.badInput && s.val() : "string" == typeof(i = s.val()) ? i.replace(/\r/g, "") : i
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s, r, n = t(e).rules(),
                    a = t.map(n, function(t, e) {
                        return e
                    }).length,
                    o = !1,
                    u = this.elementValue(e);
                for (s in n) {
                    r = {
                        method: s,
                        parameters: n[s]
                    };
                    try {
                        if ("dependency-mismatch" === (i = t.validator.methods[s].call(this, u, e, r.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, r), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t
                    }
                }
                if (!o) return this.objectLength(n) && this.successList.push(e), !0
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var s = this.defaultMessage(e, i.method),
                    r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e,
                    method: i.method
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var s, r, n, a = this.errorsFor(e),
                    o = this.idOrName(e),
                    u = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (s = a = t("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e), a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + o + "']").length && (n = a.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), u ? u.match(new RegExp("\\b" + n + "\\b")) || (u += " " + n) : u = n, t(e).attr("aria-describedby", u), (r = this.groups[e.name]) && t.each(this.groups, function(e, i) {
                    i === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e),
                    s = t(e).attr("aria-describedby"),
                    r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (r = r + ", #" + s.replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(e) {
            var i, s, r = {},
                n = t(e),
                a = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? ("" === (s = e.getAttribute(i)) && (s = !0), s = !!s) : s = n.attr(i), /min|max/.test(i) && (null === a || /number|range|text/.test(a)) && (s = Number(s)), s || 0 === s ? r[i] = s : a === i && "range" !== a && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(e) {
            var i, s, r = {},
                n = t(e);
            for (i in t.validator.methods) void 0 !== (s = n.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (r[i] = s);
            return r
        },
        staticRules: function(e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(s, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var n = !0;
                        switch (typeof r.depends) {
                            case "string":
                                n = !!t(r.depends, i.form).length;
                                break;
                            case "function":
                                n = r.depends.call(i, i)
                        }
                        n ? e[s] = void 0 === r.param || r.param : delete e[s]
                    }
                } else delete e[s]
            }), t.each(e, function(s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function(e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i, s, r = 0,
                    n = 0,
                    a = !1;
                if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19) return !1;
                for (i = t.length - 1; i >= 0; i--) s = t.charAt(i), n = parseInt(s, 10), a && (n *= 2) > 9 && (n -= 9), r += n, a = !a;
                return r % 10 == 0
            },
            minlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= s
            },
            maxlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r <= s
            },
            rangelength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || r >= s[0] && r <= s[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === r.val()
            },
            remote: function(e, i, s) {
                if (this.optional(i)) return "dependency-mismatch";
                var r, n, a = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), a.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = a.message, s = "string" == typeof s && {
                    url: s
                } || s, a.old === e ? a.valid : (a.old = e, r = this, this.startRequest(i), (n = {})[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: n,
                    context: r.currentForm,
                    success: function(s) {
                        var n, o, u, l = !0 === s || "true" === s;
                        r.settings.messages[i.name].remote = a.originalMessage, l ? (u = r.formSubmitted, r.prepareElement(i), r.formSubmitted = u, r.successList.push(i), delete r.invalid[i.name], r.showErrors()) : (n = {}, o = s || r.defaultMessage(i, "remote"), n[i.name] = a.message = t.isFunction(o) ? o(e) : o, r.invalid[i.name] = !0, r.showErrors(n)), a.valid = l, r.stopRequest(i, l)
                    }
                }, s)), "pending")
            }
        }
    }), t.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, s) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(), i[r] = s)
    }) : (e = t.ajax, t.ajax = function(s) {
        var r = ("mode" in s ? s : t.ajaxSettings).mode,
            n = ("port" in s ? s : t.ajaxSettings).port;
        return "abort" === r ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    }), t.extend(t.fn, {
        validateDelegate: function(e, i, s) {
            return this.bind(i, function(i) {
                var r = t(i.target);
                if (r.is(e)) return s.apply(r, arguments)
            })
        }
    })
});
! function(e) {
    "use strict";
    var t, n, i, s;
    e(".steps").validate({
        errorClass: "invalid",
        errorElement: "span",
        errorPlacement: function(e, t) {
            e.insertAfter(t.next("span").children())
        },
        highlight: function(t) {
            e(t).next("span").show()
        },
        unhighlight: function(t) {
            e(t).next("span").hide()
        }
    }), e(".next").click(function() {
        if (e(".steps").validate({
                errorClass: "invalid",
                errorElement: "span",
                errorPlacement: function(e, t) {
                    e.insertAfter(t.next("span").children())
                },
                highlight: function(t) {
                    e(t).next("span").show()
                },
                unhighlight: function(t) {
                    e(t).next("span").hide()
                }
            }), !e(".steps").valid()) return !0;
        t = e(this).parent(), n = e(this).parent().next(), e("#progressbar li").eq(e("fieldset").index(n)).addClass("active"), n.show(), t.animate({
            opacity: 0
        }, {
            step: function(e) {
                s = 1 - e, n.css({
                    opacity: s
                })
            },
            duration: 1,
            complete: function() {
                t.hide()
            }
        })
    }), e(".submit").click(function() {
        if (e(".steps").validate({
                errorClass: "invalid",
                errorElement: "span",
                errorPlacement: function(e, t) {
                    e.insertAfter(t.next("span").children())
                },
                highlight: function(t) {
                    e(t).next("span").show()
                },
                unhighlight: function(t) {
                    e(t).next("span").hide()
                }
            }), !e(".steps").valid()) return !0;
        t = e(this).parent(), n = e(this).parent().next(), e("#progressbar li").eq(e("fieldset").index(n)).addClass("active"), n.show(), t.animate({
            opacity: 0
        }, {
            step: function(e) {
                s = 1 - e, n.css({
                    opacity: s
                })
            },
            duration: 1,
            complete: function() {
                t.hide()
            }
        })
    }), e(".previous").click(function() {
        t = e(this).parent(), i = e(this).parent().prev(), e("#progressbar li").eq(e("fieldset").index(t)).removeClass("active"), i.show(), t.animate({
            opacity: 0
        }, {
            step: function(e) {
                s = 1 - e, i.css({
                    opacity: s
                })
            },
            duration: 1,
            complete: function() {
                t.hide()
            }
        })
    })
}(jQuery);
! function(s) {
    "use strict";

    function e(e) {
        switch (e) {
            case 0:
                s("#chat_converse").css("display", "none"), s("#chat_body").css("display", "none"), s("#chat_form").css("display", "none"), s(".chat_login").css("display", "block"), s(".chat_fullscreen_loader").css("display", "none"), s("#chat_fullscreen").css("display", "none");
                break;
            case 1:
                s("#chat_converse").css("display", "block"), s("#chat_body").css("display", "none"), s("#chat_form").css("display", "none"), s(".chat_login").css("display", "none"), s(".chat_fullscreen_loader").css("display", "block")
        }
    }
    e(0), s("#prime").on("click", function() {
        s(".prime").toggleClass("fa-comments-o"), s(".prime").toggleClass("fa-close"), s(".prime").toggleClass("is-active"), s(".prime").toggleClass("is-visible"), s("#prime").toggleClass("is-float"), s(".chat").toggleClass("is-visible"), s(".fab").toggleClass("is-visible")
    }), s("#chat_first_screen").on("click", function() {
        e(1)
    }), s("#chat_second_screen").on("click", function() {
        e(2)
    }), s("#chat_fullscreen_loader").on("click", function() {
        s(".fullscreen").toggleClass("zmdi-window-maximize"), s(".fullscreen").toggleClass("zmdi-window-restore"), s(".chat").toggleClass("chat_fullscreen"), s(".fab").toggleClass("is-hide"), s(".header_img").toggleClass("change_img"), s(".img_container").toggleClass("change_img"), s(".chat_header").toggleClass("chat_header2"), s(".fab_field").toggleClass("fab_field2"), s(".chat_converse").toggleClass("chat_converse2")
    })
}(jQuery);

(function() {
    "use strict";

    function makeTimer(end_date) {

        var endTime = new Date(end_date);
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }

    setInterval(function() {
        var end_date = $("#end_time").val();
        makeTimer(end_date);
    }, 1000);

}(jQuery));
! function(e, t, n) {
    function a(t, n) {
        this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
    }
    var i = {
            label: "MENU",
            duplicate: !0,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            appendTo: "",
            parentTag: "a",
            closeOnClick: !1,
            allowParentLinks: !1,
            nestedParentLinks: !0,
            showChildren: !1,
            removeIds: !0,
            removeClasses: !1,
            removeStyles: !1,
            brand: "",
            animations: "jquery",
            init: function() {},
            beforeOpen: function() {},
            beforeClose: function() {},
            afterOpen: function() {},
            afterClose: function() {}
        },
        s = "slicknav",
        o = "slicknav",
        l = {
            DOWN: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
    a.prototype.init = function() {
        var n, a, i = this,
            s = e(this.element),
            r = this.settings;
        if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("id")
            })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("class")
            })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function(t, n) {
                e(n).removeAttr("style")
            })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
            var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
            e(a).append(c)
        }
        i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
        var p = i.mobileNav.find("li");
        e(p).each(function() {
            var t = e(this),
                n = {};
            if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
                var a = t.contents(),
                    s = !1,
                    l = [];
                e(a).each(function() {
                    return e(this).is("ul") ? !1 : (l.push(this), void(e(this).is("a") && (s = !0)))
                });
                var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
                if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();
                else {
                    var p = e(l).wrapAll(c).parent();
                    p.addClass(o + "_row")
                }
                r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
                var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
                r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d)
            } else 0 === t.children().length && t.addClass(o + "_txtnode");
            t.children("a").attr("role", "menuitem").click(function(t) {
                r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click()
            }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function(t) {
                e(i.btn).click()
            }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function(t) {
                e(i.btn).click()
            }))
        }), e(p).each(function() {
            var t = e(this).data("menu");
            r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0)
        }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function() {
            i._outlines(!1)
        }), e(t).keyup(function() {
            i._outlines(!0)
        }), e(i.btn).click(function(e) {
            e.preventDefault(), i._menuToggle()
        }), i.mobileNav.on("click", "." + o + "_item", function(t) {
            t.preventDefault(), i._itemClick(e(this))
        }), e(i.btn).keydown(function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                case l.SPACE:
                case l.DOWN:
                    t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", "." + o + "_item", function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.ENTER:
                    t.preventDefault(), i._itemClick(e(t.target));
                    break;
                case l.RIGHT:
                    t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus()
            }
        }), i.mobileNav.on("keydown", '[role="menuitem"]', function(t) {
            var n = t || event;
            switch (n.keyCode) {
                case l.DOWN:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        r = s + 1;
                    a.length <= r && (r = 0);
                    var c = a.eq(r);
                    c.focus();
                    break;
                case l.UP:
                    t.preventDefault();
                    var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
                        s = a.index(t.target),
                        c = a.eq(s - 1);
                    c.focus();
                    break;
                case l.LEFT:
                    if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
                        var p = e(t.target).parent().parent().prev();
                        p.focus(), i._itemClick(p)
                    } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
                    break;
                case l.ESCAPE:
                    t.preventDefault(), i._menuToggle(), e(i.btn).focus()
            }
        }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function(e) {
            e.stopImmediatePropagation()
        })
    }, a.prototype._menuToggle = function(e) {
        var t = this,
            n = t.btn,
            a = t.mobileNav;
        n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n)
    }, a.prototype._itemClick = function(e) {
        var t = this,
            n = t.settings,
            a = e.data("menu");
        a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e))
    }, a.prototype._visibilityToggle = function(t, n, a, i, s) {
        function l(t, n) {
            e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t)
        }

        function r(n, a) {
            t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n)
        }
        var c = this,
            p = c.settings,
            d = c._getActionItems(t),
            u = 0;
        a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function() {
            l(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
            duration: u,
            easing: p.easingOpen,
            complete: function() {
                l(i, n)
            }
        }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function() {
            r(i, n)
        }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
            duration: u,
            easing: p.easingClose,
            complete: function() {
                r(i, n)
            }
        }))
    }, a.prototype._setVisAttr = function(t, n) {
        var a = this,
            i = t.children("li").children("ul").not("." + o + "_hidden");
        n ? i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"), a._setVisAttr(t, n)
        }) : i.each(function() {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"), a._setVisAttr(t, n)
        })
    }, a.prototype._getActionItems = function(e) {
        var t = e.data("menu");
        if (!t) {
            t = {};
            var n = e.children("li"),
                a = n.find("a");
            t.links = a.add(n.find("." + o + "_item")), e.data("menu", t)
        }
        return t.links
    }, a.prototype._outlines = function(t) {
        t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none")
    }, a.prototype.toggle = function() {
        var e = this;
        e._menuToggle()
    }, a.prototype.open = function() {
        var e = this;
        e.btn.hasClass(o + "_collapsed") && e._menuToggle()
    }, a.prototype.close = function() {
        var e = this;
        e.btn.hasClass(o + "_open") && e._menuToggle()
    }, e.fn[s] = function(t) {
        var n = arguments;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t))
        });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            var i;
            return this.each(function() {
                var o = e.data(this, "plugin_" + s);
                o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)))
            }), void 0 !== i ? i : this
        }
    }
}(jQuery, document, window);
! function() {
    "use strict";
    jQuery(document).ready(function(e) {
        e(".homepage-slides").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            autoplay: !0,
            loop: !0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: !1,
            touchDrag: !0,
            animateOut: "fadeOut"
        }), e(".homepage-slides").on("translate.owl.carousel", function() {
            e(".single-slide-item h3, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0"), e(".single-slide-item .slide-btn, .single-slide-item h2").removeClass("animated fadeInDown").css("opacity", "0")
        }), e(".homepage-slides").on("translated.owl.carousel", function() {
            e(".single-slide-item h3, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1"), e(".single-slide-item .slide-btn, .single-slide-item h2").addClass("animated fadeInDown").css("opacity", "1")
        }), e("ul#navigation").slicknav({
            prependTo: ".mobile-menu-wrapper"
        }), e(".testimonial").owlCarousel({
            items: 1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            loop: !0,
            mouseDrag: !1,
            touchDrag: !0
        }), e(".testimonial2").owlCarousel({
            items: 1,
            nav: !1,
            dots: !0,
            autoplay: !0,
            loop: !0,
            mouseDrag: !1,
            touchDrag: !0
        }), e(".our-client").owlCarousel({
            items: 6,
            nav: !1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: !1,
            autoplay: !0,
            loop: !0,
            mouseDrag: !1,
            touchDrag: !0,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1,
                    nav: !0
                },
                380: {
                    items: 2,
                    nav: !1
                },
                600: {
                    items: 4,
                    nav: !1
                },
                1e3: {
                    items: 6,
                    nav: !1
                }
            }
        }), (new WOW).init(), e(function() {
            e('[data-toggle="tooltip"]').tooltip()
        }), e(".date").datepicker({
            format: "mm/dd/yyyy h:mm:s",
            startDate: "-3d"
        }), e(".single-popup, .gallery-group-popup2 a.latest-gallery").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            image: {
                verticalFit: !0,
                titleSrc: function(e) {
                    return e.el.attr("title") + ' &middot; <a class="image-source-link" href="' + e.el.attr("data-source") + '" target="_blank">image source</a>'
                }
            },
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(e) {
                    return e.find("img")
                }
            }
        }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            preloader: !1,
            fixedContentPos: !1,
            zoom: {
                enabled: !0,
                duration: 300
            }
        }), e(".gallery-group-popup").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: !0,
                titleSrc: function(e) {
                    return e.el.attr("title") + ' &middot; <a class="image-source-link" href="' + e.el.attr("data-source") + '" target="_blank">image source</a>'
                }
            },
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function(e) {
                    return e.find("img")
                }
            }
        }), e(".scrollup").on("click", function() {
            return e("html, body").animate({
                scrollTop: 0
            }, 600), !1
        }), e(window).on("scroll", function() {

            e(this).scrollTop() > 0 ? e("header.for-sticky").addClass("sticky1") : e("header.for-sticky").removeClass("sticky"), e(this).scrollTop() > 500 ? e(".scrollup").fadeIn() : e(".scrollup").fadeOut()
        }), e(".counter").each(function() {
            var t = e(this),
                a = t.attr("data-count");
            e({
                countNum: t.text()
            }).animate({
                countNum: a
            }, {
                duration: 8e3,
                easing: "linear",
                step: function() {
                    t.text(Math.floor(this.countNum))
                },
                complete: function() {
                    t.text(this.countNum)
                }
            })
        })
    }), jQuery(window).on("load", function() {
        jQuery(".wshipping-site-preloader-wrapper").fadeOut(300), $(".simplefilter li").on("click", function() {
            $(".simplefilter li").removeClass("active"), $(this).addClass("active")
        });
        var e = {
            animationDuration: .6,
            filter: "all",
            callbacks: {
                onFilteringStart: function() {},
                onFilteringEnd: function() {}
            },
            delay: 0,
            delayMode: "alternate",
            easing: "ease-out",
            layout: "sameSize",
            selector: ".filtr-container",
            setupControls: !0
        };
        $(".filtr-container").filterizr(e).filterizr("setOptions", e)
    })
}(jQuery);