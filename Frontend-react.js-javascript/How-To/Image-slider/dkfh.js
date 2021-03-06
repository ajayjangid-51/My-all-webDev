(function (g) {
    var window = this;/*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
    var y2 = function (a) { a.S("cardstatechange", g.eO(a) && g.fO(a) ? 1 : 0) }, FBa = function (a) {
        var b = g.$h(a);
        a = g.gi(a); return new g.Jh(b.x, b.y, a.width, a.height)
    }, GBa = function (a) { return Math.pow(a, 3) }, HBa = function (a) { return 3 * a * a - 2 * a * a * a }, z2 = function (a, b) {
        var c = g.Wo("use_default_events_client") ? void 0 : g.Or;
        (0, g.Cb)(b, function (d) { d = { csn: a, ve: d.getAsJson(), eventType: 4 }; var e = { Jk: g.ft(a), mk: a }; "UNDEFINED_CSN" == a ? g.ut("visualElementShown", d, e) : c ? g.rq("visualElementShown", d, c, e) : g.Pr("visualElementShown", d, e) })
    }, A2 = function (a, b) {
        var c = g.Wo("use_default_events_client") ? void 0 : g.Or;
        (0, g.Cb)(b, function (d) { var e = void 0, f = (e = void 0 === e ? !1 : e) ? 16 : 8; d = { csn: a, ve: d.getAsJson(), eventType: f }; e = { Jk: g.ft(a), mk: a, aG: e }; "UNDEFINED_CSN" == a ? g.ut("visualElementHidden", d, e) : c ? g.rq("visualElementHidden", d, c, e) : g.Pr("visualElementHidden", d, e) })
    }, D2 = function (a) {
        a = g.Ta(a);
        delete B2[a]; g.Rb(B2) && C2 && C2.stop()
    }, JBa = function () {
        C2 || (C2 = new g.F(function () { IBa() }, 20));
        var a = C2; a.isActive() || a.start()
    }, IBa = function () {
        var a = (0, g.C)();
        g.Eb(B2, function (b) { KBa(b, a) });
        g.Rb(B2) || JBa()
    }, E2 = function (a, b, c, d) {
        g.go.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays"); if (a.length != b.length) throw Error("Start and end points must be the same length"); this.A = a; this.I = b; this.duration = c; this.F = d; this.coords = []; this.progress = this.G = 0; this.C = null
    }, KBa = function (a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime); 1 < a.progress && (a.progress = 1); a.G = 1E3 / (b - a.C); a.C = b; LBa(a, a.progress); 1 == a.progress ? (a.o = 0, D2(a), a.ue(), a.Kn()) : a.ub() && a.gu()
    }, LBa = function (a, b) {
        g.Qa(a.F) && (b = a.F(b));
        a.coords = Array(a.A.length); for (var c = 0; c < a.A.length; c++)a.coords[c] = (a.I[c] - a.A[c]) * b + a.A[c]
    }, MBa = function (a, b) {
        g.We.call(this, a);
        this.coords = b.coords; this.x = b.coords[0]; this.y = b.coords[1]; this.z = b.coords[2]; this.duration = b.duration; this.progress = b.progress; this.fps = b.G; this.state = b.o
    }, F2 = function (a, b, c, d, e) {
        E2.call(this, b, c, d, e);
        this.element = a
    }, G2 = function (a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        F2.call(this, a, b, c, d, e)
    }, H2 = function (a) {
        g.y.call(this);
        this.u = a || window; this.o = []
    }, I2 = function (a) { return a.baseUrl || null }, J2 = function (a, b) { return (0, g.Ie)((0, g.Nc)(a, b, void 0), function (c) { return !!c }) }, NBa = function (a, b, c) {
        function d(Tb) {
            var nb = Tb.hovercardButton;
            if (!nb) return null; nb = nb.subscribeButtonRenderer; if (!nb) return null; var xc = f(nb.unsubscribedButtonText), tg = f(nb.subscribedButtonText); if (nb.subscribed) { var si = f(nb.subscriberCountWithUnsubscribeText); var ti = f(nb.subscriberCountText) } else si = f(nb.subscriberCountText), ti = f(nb.subscriberCountWithSubscribeText); var ug = null; return Tb.signinEndpoint && (ug = g.Mb(Tb, "signinEndpoint", "webNavigationEndpointData", "url"), !ug) ? null : xc && (tg || ug) ? {
                subscribed: nb.subscribed, subscribeText: xc, subscribeCount: si, unsubscribeText: tg,
                unsubscribeCount: ti, enabled: nb.enabled, signinUrl: ug, classic: Tb.useClassicSubscribeButton
            } : null
        }
        function e(Tb) { if (Tb) { var nb = [], xc = Tb.videoId; xc && nb.push("v=" + xc); (xc = Tb.playlistId) && nb.push("list=" + xc); (Tb = Tb.startTimeSeconds) && nb.push("t=" + Tb); return "/watch?" + nb.join("&") } }
        function f(Tb) { if (!Tb) return null; var nb = Tb.simpleText; return nb ? nb : Tb.runs ? (0, g.Nc)(Tb.runs, function (xc) { return xc.text }).join("") : null }
        b = b.endscreenElementRenderer; if (!b) return null; var h = b.style, l = b.endpoint || {}, m = null, n = null, q = null, r = null, u = null, w = null, A = !1, z = null, E = null, D = null, H = null, Q = null; if ("VIDEO" == h) m = l.urlEndpoint ? l.urlEndpoint.url : e(l.watchEndpoint), n = !1, q = a, r = f(b.videoDuration); else if ("PLAYLIST" == h) m = l.urlEndpoint ? l.urlEndpoint.url : e(l.watchEndpoint), n = !1, q = a, u = f(b.playlistLength); else if ("CHANNEL" == h) { if (A = g.Mb(l, "browseEndpoint", "browseId")) w = A, m = "/channel/" + w; n = !1; q = "new"; (A = !!b.isSubscribe) ? z = d(b) : E = f(b.subscribersText) } else "WEBSITE" ==
            h ? ((D = g.Mb(l, "urlEndpoint", "url")) && (m = D), n = !0, q = "new", D = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" == h && (b.productPrice && (H = f(b.productPrice)), b.additionalFeesText && (Q = f(b.additionalFeesText)), (n = g.Mb(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new"); a = g.Mb(b, "title", "accessibility", "accessibilityData", "label"); var R = b.endpoint ? b.endpoint.clickTrackingParams : null, Ka = ""; if (b.metadata) { var Oa = f(b.metadata); Oa && (Ka = Oa) } return {
                id: "element-" + c, type: h, title: f(b.title), metadata: Ka, callToAction: f(b.callToAction),
                Ry: b.image, iconUrl: D, left: parseFloat(b.left), width: parseFloat(b.width), top: parseFloat(b.top), aspectRatio: parseFloat(b.aspectRatio), startMs: parseInt(b.startMs, 10), endMs: parseInt(b.endMs, 10), videoDuration: r, playlistLength: u, channelId: w, subscribeButton: z, subscribersText: E, isSubscribe: A, targetUrl: m, rH: n, uc: { itct: R }, PO: q, jm: a ? a : null, vH: b.isPlaceholder, impressionUrls: J2(b.impressionUrls || [], I2), jH: J2(b.hovercardShowUrls || [], I2), clickUrls: J2(l.loggingUrls || [], I2), visualElement: g.Zs(b.trackingParams), productPrice: H,
                additionalFeesText: Q
            }
    }, K2 = function (a, b) {
        var c = {};
        c.startMs = parseInt(a.startMs, 10); c.impressionUrls = J2(a.impressionUrls || [], I2); a.trackingParams && (c.visualElement = g.Zs(a.trackingParams)); c.elements = J2(a.elements || [], function (d, e) { return NBa(b, d, e) });
        return c
    }, L2 = function (a) {
        g.CO.call(this, a);
        this.B = this.u = null; this.o = {}; this.G = {}; this.F = this.A = null; this.M = []; a = a.O(); this.N = g.dz(a) || g.fz(a); this.R = !0; this.I = 0; this.C = new g.Js(this); g.B(this, this.C); this.C.L(this.player, g.Nz("creatorendscreen"), this.SH); this.C.L(this.player, "crx_creatorendscreen", this.TH); this.C.L(this.player, "resize", this.MA); this.C.L(window, "focus", this.KN); this.load(); var b = g.De("STYLE"); (g.ke("HEAD")[0] || document.body).appendChild(b); g.Te(this, function () { g.He(b) });
        b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
            0))
    }, OBa = function (a) { return a.player.getVideoData().fc ? "current" : a.N ? "new" : "current" }, M2 = function (a) { return "creator-endscreen-editor" === a.player.O().playerStyle }, N2 = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        g.eR(a.player.app, "creatorendscreen", void 0); a.A && (a.A.dispose(), a.A = null, a.F.dispose(), a.F = null); for (var d in a.o) a.o[d].dispose(); a.o = {}; a.G = {}; 0 < a.M.length && (a.M.forEach(function (l) { l.dispose() }), a.M.length = 0);
        a.I = 0; if ((a.u = b) && b.elements) {
            c && PBa(a); c = []; d = new g.Kz(b.startMs, 0x7ffffffffffff, { id: "ytp-ce-in-endscreen", namespace: "creatorendscreen" }); c.push(d); a.player.O().o || (a.A = new g.T({ D: "div", J: "ytp-ce-shadow" }), g.oO(a.player, a.A.element, 4), a.F = new g.XO(a.A, 200)); for (d = 0; d < b.elements.length; ++d) { var e = b.elements[d], f = QBa(a, e); a.o[e.id] = f; a.G[e.id] = e; g.oO(a.player, f.element, 4); var h = new g.Kz(e.startMs, e.endMs, { id: "ytp-ce-element-" + e.id, namespace: "creatorendscreen" }); c.push(h); RBa(a, f, e) } g.kO(a.player, c);
            a.MA()
        }
    }, PBa = function (a) {
        var b = g.ct(), c = g.et();
        c && b && a.u.visualElement && g.Bt(c, b, a.u.visualElement)
    }, QBa = function (a, b) {
        var c = null;
        switch (b.type) {
            case "VIDEO": c = { D: "div", W: ["ytp-ce-element", "ytp-ce-video"], P: { tabindex: "0", "aria-label": b.jm || "", "aria-hidden": "true" }, K: [{ D: "div", J: "ytp-ce-element-shadow" }, { D: "div", J: "ytp-ce-covering-image", P: O2(b) }, { D: "div", J: "ytp-ce-covering-shadow-top" }, { D: "a", J: "ytp-ce-covering-overlay", P: { href: P2(a, b.targetUrl), tabindex: "-1" }, K: [{ D: "div", W: ["ytp-ce-video-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"], P: { dir: g.mo(b.title || "") }, V: b.title }, { D: "div", J: "ytp-ce-video-duration", V: b.videoDuration }] }] };
                c = new g.T(c); break; case "PLAYLIST": c = {
                    D: "div", W: ["ytp-ce-element", "ytp-ce-playlist"], P: { tabindex: "0", "aria-label": b.jm || "", "aria-hidden": "true" }, K: [{ D: "div", J: "ytp-ce-element-shadow" }, { D: "div", J: "ytp-ce-covering-image", P: O2(b) }, { D: "div", J: "ytp-ce-covering-shadow-top" }, {
                        D: "a", J: "ytp-ce-covering-overlay", P: { href: P2(a, b.targetUrl), tabindex: "-1" }, K: [{ D: "div", W: ["ytp-ce-playlist-title", "yt-ui-ellipsis", "yt-ui-ellipsis-2"], P: { dir: g.mo(b.title || "") }, V: b.title }, {
                            D: "div", J: "ytp-ce-playlist-count", K: [{
                                D: "div",
                                J: "ytp-ce-playlist-icon"
                            }, { D: "div", J: "ytp-ce-playlist-count-text", V: b.playlistLength }]
                        }]
                    }]
                }; c = new g.T(c); break; case "CHANNEL": c = {
                    D: "div", W: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"], P: { tabindex: "0", "aria-label": b.jm || "", "aria-hidden": "true" }, K: [{ D: "div", J: "ytp-ce-element-shadow" }, {
                        D: "div", J: "ytp-ce-expanding-overlay", K: [{ D: "div", J: "ytp-ce-expanding-overlay-hider" }, { D: "div", J: "ytp-ce-expanding-overlay-background" }, {
                            D: "div", J: "ytp-ce-expanding-overlay-content",
                            K: [{
                                D: "div", J: "ytp-ce-expanding-overlay-body", K: [{
                                    D: "div", J: "ytp-ce-expanding-overlay-body-padding", K: [{ D: "a", W: ["ytp-ce-channel-title", "ytp-ce-link"], P: { href: P2(a, b.targetUrl), target: "_blank", tabindex: "-1", dir: g.mo(b.title || "") }, V: b.title }, b.subscribeButton ? { D: "div", J: "ytp-ce-subscribe-container", K: [{ D: "div", J: "ytp-ce-channel-subscribe" }] } : "", b.subscribersText ? { D: "div", J: "ytp-ce-channel-subscribers-text", V: b.subscribersText } : "", b.metadata ? {
                                        D: "div", W: ["ytp-ce-channel-metadata", "yt-ui-ellipsis", "yt-ui-ellipsis-3"],
                                        V: b.metadata
                                    } : ""]
                                }]
                            }]
                        }]
                    }, { D: "div", J: "ytp-ce-expanding-image", P: O2(b) }]
                }; c = new g.T(c); var d = g.le(document, "div", "ytp-ce-channel-subscribe", c.element)[0]; if (b.subscribeButton && b.channelId) {
                    g.G(d, "ytp-ce-subscribe-button"); if (a.player.O().o) { var e = null; var f = b.uc.itct } else e = "endscreen", f = null; e = new g.fQ(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, b.subscribeButton.enabled, b.subscribeButton.classic, b.channelId,
                        !!b.subscribeButton.subscribed, e, f, b.subscribeButton.signinUrl, a.player); d.appendChild(e.element); a.M.push(e)
                } break; case "WEBSITE": c = {
                    D: "div", W: ["ytp-ce-element", "ytp-ce-website"], P: { tabindex: "0", "aria-label": b.jm || "", "aria-hidden": "true" }, K: [{ D: "div", J: "ytp-ce-element-shadow" }, {
                        D: "div", J: "ytp-ce-expanding-overlay", K: [{ D: "div", J: "ytp-ce-expanding-overlay-hider" }, { D: "div", J: "ytp-ce-expanding-overlay-background" }, {
                            D: "div", J: "ytp-ce-expanding-overlay-content", K: [{
                                D: "div", J: "ytp-ce-expanding-overlay-body",
                                K: [{ D: "div", J: "ytp-ce-expanding-overlay-body-padding", K: [{ D: "div", J: "ytp-ce-website-title", P: { dir: g.mo(b.title || "") }, V: b.title }, { D: "div", J: "ytp-ce-website-metadata", V: b.metadata }, { D: "a", W: ["ytp-ce-website-goto", "ytp-ce-link"], P: { href: P2(a, b.targetUrl), target: "_blank", tabindex: "-1" }, V: b.callToAction }] }]
                            }]
                        }]
                    }, { D: "div", J: "ytp-ce-expanding-image", P: O2(b) }, { D: "div", J: "ytp-ce-expanding-icon", P: SBa(b.iconUrl) }]
                }; c = new g.T(c); break; case "CREATOR_MERCHANDISE": c = "", b.productPrice && (c = {
                    D: "div", J: "ytp-ce-merchandise-price-container",
                    K: [{ D: "div", J: "ytp-ce-merchandise-price", V: b.productPrice }]
                }, b.additionalFeesText && c.K.push({ D: "div", J: "ytp-ce-merchandise-additional-fees", V: b.additionalFeesText })), c = {
                    D: "div", W: ["ytp-ce-element", "ytp-ce-merchandise"], P: { tabindex: "0", "aria-label": b.jm || "", "aria-hidden": "true" }, K: [{ D: "div", J: "ytp-ce-element-shadow" }, {
                        D: "div", J: "ytp-ce-expanding-overlay", K: [{ D: "div", J: "ytp-ce-expanding-overlay-hider" }, { D: "div", J: "ytp-ce-expanding-overlay-background" }, {
                            D: "div", J: "ytp-ce-expanding-overlay-content", K: [{
                                D: "div",
                                J: "ytp-ce-expanding-overlay-body", K: [{ D: "div", J: "ytp-ce-expanding-overlay-body-padding", K: [{ D: "div", J: "ytp-ce-merchandise-title", P: { dir: g.mo(b.title || "") }, V: b.title }, c, { D: "div", J: "ytp-ce-merchandise-metadata", V: b.metadata }, { D: "a", W: ["ytp-ce-merchandise-goto", "ytp-ce-link"], P: { href: P2(a, b.targetUrl), target: "_blank", tabindex: "-1" }, V: b.callToAction }] }]
                            }]
                        }]
                    }, { D: "div", J: "ytp-ce-expanding-image", P: O2(b) }, {
                        D: "div", J: "ytp-ce-merchandise-invideo-cta-container", K: [{
                            D: "div", J: "ytp-ce-merchandise-invideo-cta",
                            V: b.callToAction
                        }]
                    }]
                }, c = new g.T(c)
        }b.vH && g.G(c.element, "ytp-ce-placeholder"); return c
    }, O2 = function (a) {
        if (a.Ry) var b = a.Ry.thumbnails;
        return SBa(b ? b[b.length - 1].url : null)
    }, SBa = function (a) { return a ? { style: "background-image: url(" + a + ")" } : {} }, RBa = function (a, b, c) {
        function d() { h(1) }
        function e() { h(-1) }
        b.ma("mouseenter", (0, g.x)(a.Xu, a, b, c)); b.ma("mouseleave", (0, g.x)(a.Iv, a, b, c)); a.player.O().o || b.ma("click", (0, g.x)(function (l) { g.G(l.element, "ytp-ce-element-hover") }, a, b));
        b.ma("click", (0, g.x)(a.SB, a, c)); b.ma("keypress", (0, g.x)(a.SB, a, c)); b.ma("focus", (0, g.x)(function (l, m) { this.Xu(l, m) }, a, b, c));
        b.ma("blur", (0, g.x)(function (l, m) { this.Iv(l, m) }, a, b, c));
        b.ma("touchstart", (0, g.x)(a.Xu, a, b, c)); var f = g.pe("ytp-ce-expanding-overlay-hider", b.element); f && b.L(f, "touchstart", function (l) { l = l || window.event; l.cancelBubble = !0; l.stopPropagation && l.stopPropagation(); g.eo(b.element, "ytp-ce-element-hover"); g.eo(b.element, "ytp-ce-force-expand") });
        b.ma("keydown", (0, g.x)(function (l, m) { this.R = 9 == m.keyCode && !m.shiftKey }, a, b));
        var h = (0, g.x)(function (l, m, n) { this.I += n; 0 < this.I ? (g.G(l.element, "ytp-ce-force-expand"), Q2(this, m.id, !0)) : (g.eo(l.element, "ytp-ce-force-expand"), g.eo(l.element, "ytp-ce-element-hover"), Q2(this, m.id, !1)) }, a, b, c);
        c = (0, g.x)(function (l, m) { m && (l.ma("blur", g.Ua(function () { "none" != m.style.display && a.R && m.focus() })), l.L(m, "focus", d), l.L(m, "blur", e)) }, a, b);
        c(g.pe("ytp-sb-subscribe", b.element)); c(g.pe("ytp-sb-unsubscribe", b.element)); b.ma("focus", d); b.ma("blur", e)
    }, P2 = function (a, b) {
        var c = a.player.O();
        if (b) { if (b.startsWith("//")) return c.protocol + ":" + b; if (b.startsWith("/")) return g.Iz(c) + b } else return ""; return b
    }, Q2 = function (a, b, c) {
        a.A && (c ? a.F.show() : a.F.hide());
        for (var d in a.o) d != b && g.I(a.o[d].element, "ytp-ce-element-shadow-show", c)
    }, R2 = function (a, b, c) {
        function d() { f || (e++, e == b.length && (h.stop(), c && c())) }
        if (!b || 0 == b.length || M2(a)) c && c(); else {
            b = TBa(a, b); var e = 0, f = !1, h = new g.F(function () { f = !0; c && c() }, 1E3, a);
            h.start(); for (a = 0; a < b.length; a++)g.cs(b[a], d)
        }
    }, S2 = function (a, b, c) {
        R2(a, b.clickUrls, c);
        (a = g.et()) && b.rH && g.Ct(a, b.visualElement)
    }, TBa = function (a, b) {
        var c = a.player.getVideoData().clientPlaybackNonce, d = a.player.getCurrentTime().toFixed(2);
        c = { CPN: c, AD_CPN: c, MT: d }; d = []; for (var e = 0; e < b.length; e++)d.push(UBa(b[e], c)); return d
    }, UBa = function (a, b) {
        return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function (c) {
            var d = unescape(c);
            d = d.substring(1, d.length - 1); return b[d] ? escape(b[d]) : c
        })
    }, VBa = function (a) { return Array.isArray(a) && a.length ? a[0] : a }, T2 = function (a) { return "string" === typeof a ? a : "" }, U2 = function (a, b, c) {
        for (var d in b) if (b[d] === a) return a;
        return c
    }, WBa = function (a) { this.externalId = a }, XBa = function (a, b, c, d) {
        this.value = a;
        this.target = b; this.showLinkIcon = c; this.o = d
    }, V2 = function (a) { return a.value ? a.value : null }, W2 = function (a) {
        if (!a) return null;
        var b = g.Ic(T2(a.value)); b = g.Ec(b); if (!b) return null; var c = U2(a.target, YBa, "current"); if (null == c) a = null; else { var d = a.show_link_icon; a = new XBa(b, c, "true" === d || "false" === d ? "true" === d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0) } return a
    }, ZBa = function (a, b, c, d) {
        this.type = a;
        this.trigger = b; this.url = c; this.subscribeData = d
    }, bCa = function (a) {
        if (!a) return null;
        var b = U2(a.type, $Ba), c = U2(a.trigger, aCa), d = VBa(a.url); d = W2(d ? d : null); a = VBa(a.subscribeData); var e = a ? a : null; e ? (a = T2(e.external_user_id), e = T2(e.subscription_token), a = a && e ? new WBa(a) : null) : a = null; return b ? new ZBa(b, c, d, a) : null
    }, X2 = function (a, b, c, d, e) {
        this.id = a;
        this.type = b; this.style = c; this.data = e; this.action = d || []
    }, cCa = function (a, b) { return g.eb(a.action, b, void 0) }, dCa = function (a, b) {
        this.context = a;
        this.o = b
    }, Z2 = function (a) { return a.customMessage ? Y2("div", "iv-card-message", a.customMessage) : "" }, $2 = function (a, b) {
        var c = "background-image: url(" + a + ");", d = [];
        b && d.push(b); return { D: "div", J: "iv-card-image", P: { style: c }, K: d }
    }, a3 = function (a) {
        if (!a.metaInfo || 0 === a.metaInfo.length) return "";
        var b = []; a = g.p(a.metaInfo); for (var c = a.next(); !c.done; c = a.next())b.push(Y2("li", "", c.value)); return { D: "ul", J: "iv-card-meta-info", K: b }
    }, Y2 = function (a, b, c) {
        b ? "string" === typeof b ? b = { "class": b } : Array.isArray(b) && (b = { "class": b.join(" ") }) : b = {};
        b.dir = g.mo(c); return { D: a, P: b, V: c }
    }, eCa = function (a) {
        if (!a.customMessage) return "";
        var b = ["iv-card-action", "iv-card-primary-link"], c = {}; a.bp && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.bp + ");"); c.dir = g.mo(a.customMessage); var d = [{ D: "span", V: a.customMessage }]; a.showLinkIcon && (d.push("\u00a0"), d.push({ D: "span", J: "iv-card-link-icon" })); return { D: "div", W: b, P: c, K: d }
    }, b3 = function (a, b, c, d) {
        if (d) {
            b = g.p(b);
            for (var e = b.next(); !e.done; e = b.next())a.o(e.value, d, c.id, c.uc, c.Yd.click, 5)
        }
    }, fCa = function (a, b) {
        this.merchant = a;
        this.price = b
    }, gCa = function (a) {
        var b;
        (b = a) && !(b = 1 < a.length ? "/" === a.charAt(0) && "/" !== a.charAt(1) : "/" === a) && (b = a.replace(/^(https?:)?\/\//, ""), b = b.split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" === b[0] && "youtube" === b[1] || "be" === b[0] && "youtu" === b[1]); return b ? -1 === a.indexOf("/redirect?") : !1
    }, hCa = function (a, b) { return b ? b : gCa(a) ? "current" : "new" }, c3 = function (a, b) {
        g.y.call(this);
        var c = this; this.element = a; this.context = b; this.sa = !1; this.ga = new Map; this.fa = new Map; this.context.H.addEventListener(g.Nz("annotations_module"), function (d) { (d = c.ga.get(d)) && d.apply(c) });
        this.context.H.addEventListener("crx_annotations_module", function (d) { (d = c.fa.get(d)) && d.apply(c) })
    }, d3 = function (a, b, c, d, e, f, h) {
        a.context.o.ma(b, "click", function () { a.cv(c, d, e, f || [], h || 0) });
        a.context.o.ma(b, "touchstart", function () { a.sa = !1 });
        a.context.o.ma(b, "touchmove", function () { a.sa = !0 })
    }, iCa = function (a) {
        if (a.urlEndpoint && a.urlEndpoint.url) return a.urlEndpoint.url;
        if (a.watchEndpoint && a.watchEndpoint.videoId) { var b = "/watch?v=" + a.watchEndpoint.videoId; a.watchEndpoint.playlistId && (b += "&list=" + a.watchEndpoint.playlistId); a.watchEndpoint.index && (b += "&index=" + a.watchEndpoint.index); a.watchEndpoint.startTimeSeconds && (b += "&t=" + a.watchEndpoint.startTimeSeconds); return b } return null
    }, e3 = function (a, b, c) {
        return {
            Xz: (a.impressionLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            click: (c.loggingUrls || []).map(function (d) { return d.baseUrl || "" }),
            close: (b.dismissLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            ID: (b.impressionLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            Vr: (b.clickLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" })
        }
    }, h3 = function (a, b, c) {
        c3.call(this, b, c);
        var d = this; this.H = a; this.eventId = null; this.Z = this.Ea = this.A = this.Ic = !1; this.aa = null; this.cards = []; this.va = this.I = this.Y = this.C = this.da = this.o = null; this.N = []; this.G = this.Bc = this.T = null; this.F = 0; this.U = new g.F(g.La, c.B.bb ? 4E3 : 3E3); g.B(this, this.U); this.na = new g.F(g.La); g.B(this, this.na); this.R = new dCa(c, function (e, f, h, l, m, n) { d3(d, e, f, h, l, m, n) });
        this.M = new g.T({ D: "div", J: "iv-drawer", P: { id: "iv-drawer" }, K: [{ D: "div", J: "iv-drawer-header", P: { "aria-role": "heading" }, K: [{ D: "span", J: "iv-drawer-header-text" }, { D: "button", W: ["iv-drawer-close-button", "ytp-button"], P: { "aria-label": "Hide cards", tabindex: "0" } }] }, { D: "div", J: "iv-drawer-content" }] }); g.B(this, this.M); this.B = this.M.element; this.ra = new g.XO(this.M, 330); g.B(this, this.ra); this.ya = g.pe("iv-drawer-header-text", this.B); this.u = g.pe("iv-drawer-content", this.B); this.addCueRange(0, 1E3 * c.videoData.lengthSeconds,
            "", function () { d.Ea && f3(d, "YOUTUBE_DRAWER_AUTO_OPEN") }, function () { (d.Ea = d.A) && g3(d) })
    }, jCa = function (a, b) {
        var c = b.data;
        c.autoOpenMs && a.addCueRange(c.autoOpenMs, 0x8000000000000, "", function () { f3(a, "YOUTUBE_DRAWER_AUTO_OPEN") });
        c.autoCloseMs && a.addCueRange(c.autoCloseMs, 0x8000000000000, "", function () { g3(a) });
        var d = c.headerText; g.Le(a.ya, d); a.I && a.I.setAttribute("title", d); c.eventId && (a.eventId = c.eventId); a.T = g.Zs(c.trackingParams); a.G = g.Zs(c.closeTrackingParams); a.Bc = g.Zs(c.iconTrackingParams)
    }, kCa = function (a, b) {
        var c = b.cardId ? b.cardId : "cr:" + a.F;
        if (b.content.simpleCardContentRenderer) {
            if (!b.cueRanges.length) return; var d = b.content.simpleCardContentRenderer, e = b.teaser.simpleCardTeaserRenderer, f = b.icon ? b.icon.infoCardIconRenderer : null; c = {
                id: c, timestamp: a.F, type: "simple", teaserText: g.S(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, uc: i3(a, c, b, d), sponsored: !1, Yd: e3(d, e, d.command), bh: d.trackingParams ? g.Zs(d.trackingParams) : null, uf: e.trackingParams ? g.Zs(e.trackingParams) :
                    null, Bc: f && f.trackingParams ? g.Zs(f.trackingParams) : null, imageUrl: j3(d.image.thumbnails, 290).url, displayDomain: d.displayDomain ? g.S(d.displayDomain) : null, showLinkIcon: !!d.showLinkIcon, bp: null, title: d.title ? g.S(d.title) : "", customMessage: d.callToAction ? g.S(d.callToAction) : "", url: d.command.urlEndpoint.url ? W2({ pause_on_navigation: !a.context.videoData.wa, target: "new", value: d.command.urlEndpoint.url }) : null
            }; k3(a, c)
        } else if (b.content.collaboratorInfoCardContentRenderer) {
            if (!b.cueRanges.length) return; d = b.content.collaboratorInfoCardContentRenderer;
            e = b.teaser.simpleCardTeaserRenderer; f = b.icon ? b.icon.infoCardIconRenderer : null; c = {
                id: c, timestamp: a.F, type: "collaborator", teaserText: g.S(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, uc: i3(a, c, b, d), sponsored: !1, Yd: e3(d, e, d.endpoint), bh: d.trackingParams ? g.Zs(d.trackingParams) : null, uf: e.trackingParams ? g.Zs(e.trackingParams) : null, Bc: f && f.trackingParams ? g.Zs(f.trackingParams) : null, channelId: d.endpoint.browseEndpoint.browseId,
                customMessage: d.customText ? g.S(d.customText) : null, PC: j3(d.channelAvatar.thumbnails, 290).url, title: d.channelName ? g.S(d.channelName) : "", metaInfo: [d.subscriberCountText ? g.S(d.subscriberCountText) : ""], url: W2({ pause_on_navigation: !a.context.videoData.wa, target: "new", value: d.endpoint.browseEndpoint.canonicalBaseUrl ? d.endpoint.browseEndpoint.canonicalBaseUrl : "/channel/" + d.endpoint.browseEndpoint.browseId })
            }; k3(a, c)
        } else if (b.content.playlistInfoCardContentRenderer) {
            if (!b.cueRanges.length) return; d = b.content.playlistInfoCardContentRenderer;
            e = b.teaser.simpleCardTeaserRenderer; f = b.icon ? b.icon.infoCardIconRenderer : null; c = {
                id: c, timestamp: a.F, type: "playlist", teaserText: g.S(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, uc: i3(a, c, b, d), sponsored: !1, Yd: e3(d, e, d.action), bh: d.trackingParams ? g.Zs(d.trackingParams) : null, uf: e.trackingParams ? g.Zs(e.trackingParams) : null, Bc: f && f.trackingParams ? g.Zs(f.trackingParams) : null, oo: j3(d.playlistThumbnail.thumbnails,
                    258).url, customMessage: d.customMessage ? g.S(d.customMessage) : null, playlistVideoCount: g.S(d.playlistVideoCount), title: d.playlistTitle ? g.S(d.playlistTitle) : "", metaInfo: [d.channelName ? g.S(d.channelName) : "", d.videoCountText ? g.S(d.videoCountText) : ""], url: W2({ pause_on_navigation: !a.context.videoData.wa, target: "new", value: iCa(d.action) })
            }; k3(a, c)
        } else if (b.content.videoInfoCardContentRenderer) {
            if (!b.cueRanges.length) return; d = b.content.videoInfoCardContentRenderer; e = b.teaser.simpleCardTeaserRenderer; f = b.icon ?
                b.icon.infoCardIconRenderer : null; c = {
                    id: c, timestamp: a.F, type: "video", teaserText: g.S(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, uc: i3(a, c, b, d), sponsored: !1, Yd: e3(d, e, d.action), bh: d.trackingParams ? g.Zs(d.trackingParams) : null, uf: e.trackingParams ? g.Zs(e.trackingParams) : null, Bc: f && f.trackingParams ? g.Zs(f.trackingParams) : null, oo: j3(d.videoThumbnail.thumbnails, 258).url, videoDuration: d.lengthString ? g.S(d.lengthString) :
                        null, customMessage: d.customMessage ? g.S(d.customMessage) : null, title: d.videoTitle ? g.S(d.videoTitle) : "", metaInfo: [d.channelName ? g.S(d.channelName) : "", d.viewCountText ? g.S(d.viewCountText) : ""], isLiveNow: !!d.badge, url: W2({ pause_on_navigation: !a.context.videoData.wa, target: "new", value: iCa(d.action) })
                }; k3(a, c)
        } a.F++
    }, j3 = function (a, b) {
        for (var c = -1, d = -1, e = 0; e < a.length; e++) {
            if (a[e].height === b || 290 === a[e].width) return a[e];
            ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e : ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
        } return a[0 <= d ? d : c]
    }, i3 = function (a, b, c, d) {
        return {
            feature: c.feature ? c.feature : "cards",
            src_vid: a.context.videoData.videoId, annotation_id: b, ei: a.context.videoData.eventId || "", itct: d.trackingParams || ""
        }
    }, mCa = function (a, b) {
        var c = lCa(a, b);
        c && (c === a.o && (a.o = null), a.H.removeCueRange(c.card.id), g.He(c.kt), g.ob(a.cards, c), a.ep(), l3(a))
    }, f3 = function (a, b, c) {
        if (!a.A) {
            a.ra.show();
            a.da = new g.F(function () { g.G(a.context.H.getRootNode(), g.QD.IV_DRAWER_OPEN) }, 0);
            a.da.start(); a.aa = g.Cp(a.u, "mousewheel", function (h) { a.U.start(); h.preventDefault(); h = h || window.event; var l = 0; "MozMousePixelScroll" == h.type ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = 0 == h.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3; if (h = l) a.u.scrollTop += h });
            a.A = !0; var d = g.et(); d && a.T && a.G && z2(d, [a.T, a.G]); b = { TRIGGER_TYPE: b }; for (var e = g.p(a.cards), f = e.next(); !f.done; f = e.next())f = f.value, f.xA || (f.xA = !0, nCa(a.context.logger, f.card.Yd.Xz, b)), d && z2(d, [f.card.bh]); y2(a.H); c && (a.C = new g.F(function () { a.Y = a.I; a.va.focus() }, 330), a.C.start())
        }
    }, g3 = function (a) { a.A && (a.ra.hide(), g.Dp(a.aa), a.aa = null, g.eo(a.context.H.getRootNode(), g.QD.IV_DRAWER_OPEN), a.A = !1, y2(a.H), a.C && a.C.stop(), a.C = new g.F(function () { a.Y && (a.Y.focus(), a.Y = null) }, 330), a.C.start()) }, pCa = function (a) {
        g.co(a.xa(),
            [g.QD.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"]); g.oO(a.H, a.B, 5); oCa(a); a.I = g.pe("ytp-cards-button", a.H.getRootNode()); a.va = g.pe("iv-drawer-close-button", a.B); a.Ic = !0
    }, oCa = function (a) {
        var b = g.pe("iv-drawer-close-button", a.B);
        a.context.o.ma(b, "click", a.GF, a); a.context.o.ma(a.u, "touchend", function () { a.U.start() });
        a.context.o.ma(a.u, "scroll", a.YF, a); a.context.u.subscribe("onHideControls", function () { a.Z = !0 });
        a.context.u.subscribe("onShowControls", function () { a.Z = !1 });
        a.context.u.subscribe("onVideoAreaChange", function () { a.Z = g.bo(a.H.getRootNode(), "ytp-autohide") });
        a.N.push(g.mp("iv-button-shown", a.zH, a)); a.N.push(g.mp("iv-button-hidden", a.yH, a)); a.N.push(g.mp("iv-teaser-shown", a.AI, a)); a.N.push(g.mp("iv-teaser-hidden", a.BH, a)); a.N.push(g.mp("iv-teaser-clicked", a.zI, a))
    }, k3 = function (a, b) {
        a.Ic || pCa(a);
        mCa(a, b.id); var c = qCa(a, b); if (c) { var d = { card: b, kt: c.element, xA: !1 }, e = rCa(a, d); g.ub(a.cards, e, 0, d); c.ba(a.u, e); a.ep(); b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function () { a.A || (a.o = d, l3(a), sCa(a, d), f3(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1)) }) : (c = 1E3 * a.context.H.getCurrentTime(), 5E3 > c && c > b.startMs && tCa(a, d), a.addCueRange(b.startMs, b.startMs + 1, b.id, function () { tCa(a, d) }), l3(a)) }
    }, qCa = function (a, b) {
        switch (b.type) {
            case "simple": var c = a.R;
                var d = b.displayDomain ? { D: "div", J: "iv-card-image-text", V: b.displayDomain } : void 0; var e = eCa(b); d = { D: "div", W: ["iv-card"], K: [{ D: "a", J: "iv-click-target", P: { href: b.url ? V2(b.url) || "" : "" }, K: [$2(b.imageUrl, d), { D: "div", J: "iv-card-content", K: [Y2("h2", void 0, b.title), e] }] }] }; d = new g.T(d); b3(c, g.oe("iv-click-target", d.element), b, b.url); return d; case "collaborator": return c = a.R, d = {
                    D: "div", W: ["iv-card", "iv-card-channel"], K: [{
                        D: "a", W: ["iv-click-target"], P: { href: V2(b.url) || "", "data-ytid": b.channelId }, K: [$2(b.PC),
                        { D: "div", J: "iv-card-content", K: [Z2(b), { D: "h2", J: "iv-card-primary-link", V: b.title }, a3(b)] }]
                    }]
                }, d = new g.T(d), b3(c, g.oe("iv-click-target", d.element), b, b.url), d; case "playlist": return c = a.R, d = { D: "div", W: ["iv-card", "iv-card-playlist"], K: [{ D: "a", J: "iv-click-target", P: { href: V2(b.url) || "" }, K: [$2(b.oo, { D: "div", J: "iv-card-image-overlay", K: [{ D: "span", J: "iv-card-playlist-video-count", V: b.playlistVideoCount }] }), { D: "div", J: "iv-card-content", K: [Z2(b), Y2("h2", "iv-card-primary-link", b.title), a3(b)] }] }] }, d = new g.T(d),
                    b3(c, g.oe("iv-click-target", d.element), b, b.url), d; case "productListing": c = a.R; var f = !g.jb(b.offers); d = ["iv-card"]; e = ""; var h = eCa(b); f && (d.push("iv-card-product-listing"), e = "iv-card-primary-link", h = b.offers[0], f = [], h.price && f.push({ D: "div", J: "iv-card-offer-price", V: h.price }), h.merchant && f.push({ D: "div", J: "iv-card-offer-merchant", V: h.merchant }), h = { D: "div", K: f }); f = b.url ? V2(b.url) || "" : ""; d = {
                        D: "div", W: d, P: { tabindex: "0" }, K: [{
                            D: "a", W: ["iv-card-image", "iv-click-target"], P: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");", href: f, "aria-hidden": "true", tabindex: "-1"
                            }
                        }, { D: "div", J: "iv-card-content", K: [b.sponsored ? { D: "div", J: "iv-card-sponsored", K: ["Sponsored", { D: "div", J: "iv-ad-info-container", K: [{ D: "div", J: "iv-ad-info", V: "{{adInfo}}" }, { D: "div", J: "iv-ad-info-icon-container", K: [{ D: "div", J: "iv-ad-info-icon" }, { D: "div", J: "iv-ad-info-callout" }] }] }] } : "", { D: "a", J: "iv-click-target", P: { href: f }, K: [Y2("h2", e, b.title), h] }] }]
                    }; d = new g.T(d); e = g.De("span"); g.Le(e, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                d.Cb(e, "adInfo"); b3(c, g.oe("iv-click-target", d.element), b, b.url); return d; case "video": return c = a.R, d = b.isLiveNow ? { D: "span", W: ["yt-badge", "yt-badge-live"], V: "LIVE NOW" } : null, d = { D: "div", W: ["iv-card", "iv-card-video"], K: [{ D: "a", J: "iv-click-target", P: { href: V2(b.url) || "" }, K: [$2(b.oo, b.videoDuration ? { D: "span", J: "iv-card-video-duration", V: b.videoDuration } : void 0), { D: "div", J: "iv-card-content", K: [Z2(b), Y2("h2", "iv-card-primary-link", b.title), a3(b), d] }] }] }, d = new g.T(d), b3(c, g.oe("iv-click-target", d.element),
                    b, b.url), d; default: return null
        }
    }, rCa = function (a, b) {
        if (0 === a.cards.length) return 0;
        var c = g.fb(a.cards, function (d) { return b.card.startMs > d.card.startMs || b.card.startMs === d.card.startMs && b.card.timestamp >= d.card.timestamp ? !0 : !1 });
        return -1 === c ? 0 : c + 1
    }, uCa = function (a) { return a.o ? "productListing" === a.o.card.type : (0, g.Si)(a.cards, function (b) { return "productListing" === b.card.type }) }, l3 = function (a) { g.I(a.H.getRootNode(), "ytp-cards-shopping-active", uCa(a)) }, tCa = function (a, b) {
        if (!g.bo(a.H.getRootNode(), "ytp-cards-teaser-shown")) {
            if (a.o !== b) {
                var c = g.et(), d = a.o ? a.o.card.Bc : a.Bc;
                c && d && A2(c, [d]); a.o = b; l3(a)
            } if (c = "none" != a.xa().style.display) 2 === a.context.H.getPresentingPlayerType() ? c = 1 === a.context.H.getAdState() : (c = a.context.H.getPlayerState(), d = 0 === c && 0 === a.context.H.getCurrentTime(), c = 1 === c || 3 === c || d); c && b.card.teaserDurationMs && (c = { teaserText: b.card.teaserText, durationMs: b.card.teaserDurationMs }, (d = g.dO(g.TN(a.H))) && d.Vu(!0, c)); a.na.isActive() || ((!a.A || !a.U.isActive() && a.Z) && sCa(a, b), a.na.start(910 + b.card.teaserDurationMs))
        }
    }, sCa = function (a, b) {
        if (a.M.Ma()) {
            var c = new E2([0,
                a.u.scrollTop], [0, b.kt.offsetTop], 600, HBa); a.context.A.ma(c, "animate", function (d) { a.u.scrollTop = d.y });
            a.context.A.ma(c, "finish", function (d) { a.u.scrollTop = d.y });
            c.play()
        } else a.M.fb(!0), a.u.scrollTop = b.kt.offsetTop, a.M.fb(!1)
    }, m3 = function (a) { return a.o && a.o.card ? a.o.card : a.cards[0] && a.cards[0].card ? a.cards[0].card : null }, lCa = function (a, b) { return g.eb(a.cards, function (c) { return c.card.id === b }) }, n3 = function (a, b, c) {
        c3.call(this, a, b);
        this.annotation = c; this.isActive = !1
    }, vCa = function (a) {
        var b = a.annotation.data;
        "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function () { a.show() }, function () { a.hide() })
    }, o3 = function (a, b, c) {
        n3.call(this, a, b, c);
        this.u = null; this.G = !1; this.A = null; this.B = !1; this.o = this.F = this.C = null
    }, wCa = function (a, b) {
        var c = void 0 === c ? 0 : c;
        var d = FBa(b).width; g.Wh(b, d); c = new G2(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, GBa); g.B(a, c); a.context.A.ma(c, "begin", function () { g.hi(b, !0) });
        c.play()
    }, zCa = function (a, b) {
        if (b.channel_name) {
            var c = a.createElement({
                D: "div",
                W: ["iv-branding-context-name"], V: b.channel_name
            }), d = a.createElement({ D: "div", W: ["iv-branding-context-subscribe"] }), e = b.standalone_subscribe_button_data; e && (a.o = new g.fQ(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, e.signinUrl, a.context.H), a.o.ba(d)); var f = a.createElement({ D: "div", W: ["iv-branding-context-subscribe-caret"] }), h = a.createElement({ D: "div", W: ["branding-context-container-inner"] }); h.appendChild(f);
            h.appendChild(c); h.appendChild(d); g.hi(h, !1); var l = a.createElement({ D: "div", W: ["branding-context-container-outer"] }); l.appendChild(h); g.Oh(l, "right", b.image_width + "px"); a.xa().appendChild(l); a.A = new g.F(function () { xCa(a, h, l) }, 500);
            g.B(a, a.A); a.context.o.ma(a.xa(), "mouseover", function () { yCa(a, h, l, f, b.image_height) });
            a.context.o.ma(a.xa(), "mouseout", function () { a.A.start() })
        }
    }, yCa = function (a, b, c, d, e) {
        a.A.stop();
        if (!a.B) {
            var f = g.gi(b); a.o || (g.ei(b, f.width), g.ei(c, f.width)); g.Oh(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px"); g.Oh(d, "right", "1px"); a.B = !0; g.hi(b, !0); a.C = new g.F(function () { g.G(this.xa(), "iv-branding-active") }, 0, a);
            a.C.start()
        }
    }, xCa = function (a, b, c) {
        g.eo(a.xa(), "iv-branding-active");
        a.F = new g.F(function () { g.hi(b, !1); a.o || g.ei(c, 0) }, 250);
        a.F.start(); a.B = !1
    }, ACa = function (a, b, c, d, e, f, h) {
        this.o = a;
        this.A = b; this.B = c; this.videoData = d; this.logger = e; this.H = f; this.u = h
    }, p3 = function (a, b, c) {
        n3.call(this, a, b, c);
        var d = this; this.I = this.isCollapsed = this.M = !1; this.F = 5E3; this.u = this.A = this.o = this.B = null; this.G = this.createElement({ D: "div", W: ["iv-promo-contents"] }); this.C = new g.F(function () { d.o.setAttribute("aria-hidden", "true"); g.hi(d.A, !1); g.hi(d.u, !0) }, 700, this);
        g.B(this, this.C)
    }, BCa = function (a) {
        var b = a.annotation.data;
        if ("cta" === a.annotation.style) var c = 6; else if ("video" === a.annotation.style || "playlist" === a.annotation.style) c = 7; a.F = b.collapsedelay_ms || a.F; var d = ["iv-promo", "iv-promo-inactive"]; a.xa().setAttribute("aria-hidden", "true"); a.xa().setAttribute("aria-label", "Promotion"); a.xa().tabIndex = 0; var e = a.annotation.Ac(), f = b.image_url; if (f) {
            var h = a.createElement({ D: "div", W: ["iv-promo-img", "iv-click-target"] }); f = a.createElement({ D: "img", P: { src: f, "aria-hidden": "true" } }); h.appendChild(f); b.video_duration && !b.is_live ?
                (f = a.createElement({ D: "span", J: "iv-promo-video-duration", V: b.video_duration }), h.appendChild(f)) : b.playlist_length && (f = a.createElement({ D: "span", J: "iv-promo-playlist-length", V: b.playlist_length.toString() }), h.appendChild(f)); e && d3(a, h, e, a.annotation.id, b.session_data, void 0, c)
        } e ? (f = a.createElement({ D: "a", J: "iv-promo-txt" }), g.fd(f, V2(e)), a.o = f) : a.o = a.createElement({ D: "div", J: "iv-promo-txt" }); switch (a.annotation.style) {
            case "cta": case "website": var l = a.createElement({ D: "p", K: [{ D: "strong", V: b.text_line_1 }] });
                var m = a.createElement({ D: "p", K: [{ D: "span", J: "iv-promo-link", V: b.text_line_2 }] }); if (f = b.text_line_3) { d.push("iv-promo-website-card-cta-redesign"); var n = a.createElement({ D: "button", W: ["iv-promo-round-expand-icon", "ytp-button"] }); f = a.createElement({ D: "button", W: ["iv-button", "iv-promo-button"], K: [{ D: "span", J: "iv-button-content", V: f }] }); var q = a.createElement({ D: "div", J: "iv-promo-button-container" }); q.appendChild(f); e && d3(a, a.xa(), e, a.annotation.id, b.session_data, void 0, c) } g.G(a.o, "iv-click-target"); e &&
                    d3(a, a.o, e, a.annotation.id, b.session_data, void 0, c); break; case "playlist": case "video": l = a.createElement({ D: "p", K: [{ D: "span", V: b.text_line_1 }] }), m = a.createElement({ D: "p", K: [{ D: "strong", V: b.text_line_2 }] }), b.is_live && (l = m, m = a.createElement({ D: "span", W: ["yt-badge", "iv-promo-badge-live"], V: "LIVE NOW" })), g.G(a.o, "iv-click-target"), e && d3(a, a.o, e, a.annotation.id, b.session_data, void 0, c), d.push("iv-promo-video")
        }l && a.o.appendChild(l); m && a.o.appendChild(m); a.G.appendChild(a.o); q && a.G.appendChild(q); c = a.createElement({
            D: "div",
            J: "iv-promo-actions"
        }); a.u = a.createElement({ D: "button", W: ["iv-promo-expand", "ytp-button"] }); a.u.title = "Expand"; a.context.o.ma(a.u, "click", function (r) { q3(a, 5E3, r) });
        c.appendChild(a.u); g.hi(a.u, !1); a.context.o.ma(a.xa(), "mouseover", a.QG, a); a.context.o.ma(a.xa(), "mouseout", a.PG, a); a.context.o.ma(a.xa(), "touchend", function (r) { q3(a, 5E3, r) });
        a.A = a.createElement({ D: "button", W: ["iv-promo-close", "ytp-button"] }); a.A.title = "Close"; a.context.o.ma(a.A, "click", "cta" === a.annotation.style && b.text_line_3 ? a.JG : a.IG, a); c.appendChild(a.A); g.co(a.xa(), d); h && (a.xa().appendChild(h), n && h.appendChild(n)); a.xa().appendChild(a.G); a.xa().appendChild(c)
    }, q3 = function (a, b, c) {
        c.stopPropagation();
        CCa(a); DCa(a, b); a.o.focus()
    }, ECa = function (a) { a.isCollapsed || a.I || a.B || (g.G(a.xa(), "iv-promo-collapsed"), a.isCollapsed = !0, a.C.start()) }, CCa = function (a) {
        a.C.stop();
        a.isCollapsed && (g.fo(a.xa(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.o && a.o.removeAttribute("aria-hidden"), g.hi(a.u, !1), g.hi(a.A, !0))
    }, DCa = function (a, b) {
        a.B || (a.B = g.ig(function () {
            r3(this);
            ECa(this)
        }, b, a))
    }, r3 = function (a) { a.B && (g.v.clearTimeout(a.B), a.B = null) }, FCa = function (a) { this.H = a }, nCa = function (a, b, c) { b && (c ? s3(a, b.map(function (d) { return g.In(d, c) })) : s3(a, b)) }, s3 = function (a, b, c, d) {
        var e = 1, f = void 0, h = -1;
        if (c) {
            var l = !1; f = function () { e--; e || l || (clearTimeout(h), l = !0, c()) };
            h = setTimeout(function () { l = !0; c() }, 1E3)
        } b = g.p(b || []);
        for (var m = b.next(); !m.done; m = b.next())m = m.value, e++, g.cs(m, f); d && (e++, 0 !== d && a.H.sendVideoStatsEngageEvent(d, f))
    }, t3 = function (a) {
        g.CO.call(this, a);
        var b = this; this.M = !1; this.loadNumber = 0; this.G = {}; this.logger = new FCa(this.player); this.C = new g.Js(this); this.F = this.A = null; this.events = new g.Js(this); this.I = this.o = null; this.N = []; g.B(this, this.C); this.C.L(this.player, "onVideoAreaChange", function () { b.S("onVideoAreaChange") });
        this.C.L(this.player, "onHideControls", function () { b.S("onHideControls") });
        this.C.L(this.player, "onShowControls", function () { b.S("onShowControls") });
        this.C.L(this.player, "resize", function (d) { b.S("resize", d) });
        this.C.L(this.player, "presentingplayerstatechange", function (d) { b.S("presentingplayerstatechange", d) });
        this.subscribe("presentingplayerstatechange", this.yI, this); this.subscribe("resize", this.lr, this); this.player.O().N.subscribe("vast_info_card_add", this.BC, this); g.B(this, this.events); this.R = this.createElement({ D: "div", J: "video-custom-annotations" }); this.u = new g.T({ D: "div", W: ["ytp-player-content", "ytp-iv-player-content"] }); g.B(this, this.u); g.oO(this.player, this.u.element, 4); this.u.hide(); this.B = new g.T({ D: "div", W: ["ytp-iv-video-content"] }); g.B(this, this.B); a = this.createElement({ D: "div", J: "video-annotations" });
        a.appendChild(this.R); this.B.element.appendChild(a); GCa(this) && this.load(); var c = this.createElement({ D: "style" }); (g.ke("HEAD")[0] || document.body).appendChild(c); g.Te(this, function () { g.He(c) });
        if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
            0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                    0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                        0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                            0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                                0)
    }, HCa = function (a) {
        a = a.createElement({
            D: "div",
            W: ["annotation", "annotation-type-custom"]
        }); g.hi(a, !1); return a
    }, GCa = function (a) {
        var b = a.player.O();
        a = a.player.getVideoData(); return 1 === (b.annotationsLoadPolicy || a.annotationsLoadPolicy) && !a.ix || b.N.get(a.videoId) || g.KC(a) || g.LC(a) ? !0 : !1
    }, ICa = function (a, b) {
        var c = !b.isCued() && !g.V(b, 1024);
        a.u.fb(c); a.B.fb(c)
    }, JCa = function (a, b, c) {
        a.M = !0;
        a.F = g.Qq(b, c)
    }, KCa = function (a, b) {
        for (var c = {}, d = g.p(b.attributes), e = d.next(); !e.done; e = d.next())e = e.value, c[e.name] = e.nodeValue;
        for (d = 0; d < b.childNodes.length; d++)if (e = b.childNodes[d], g.Ra(e) && 1 == e.nodeType) { if (c[e.tagName]) var f = c[e.tagName]; else if ("data" === e.tagName) { 0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" === typeof f ? f.trim() : f); continue } else f = [], c[e.tagName] = f; e && "TEXT" === e.tagName ? 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(KCa(a, e)) } return c
    }, NCa = function (a) {
        var b = a.player.getVideoData();
        if (b.cf) {
            var c = a.player.O().N.get(b.videoId); if (c) {
                var d = { format: "XML", urlParams: {}, method: "POST", withCredentials: !0, onFinish: function (e, f, h) { e = b.videoId; a.loaded && a.loadNumber === a.loadNumber && a.player.getVideoData().videoId === e && (h = g.Kq(h) && h.responseXML ? h.responseXML : null) && u3(a, h) } };
                g.Sp() && (d.onFinish = LCa(a, d.onFinish)); d.postParams = { ic_only: "1" }; MCa(d, c); a.M = !0; g.Qq(b.cf, d)
            }
        }
    }, MCa = function (a, b) {
        a.method = "POST";
        a.Hb = a.Hb || {}; b.jp && (a.Hb.ic_coll = b.jp); b.kp && (a.Hb.ic_xml = b.kp); b.so && (a.Hb.ic_track = b.so)
    }, OCa = function (a) {
        var b = new g.T({ D: "div" });
        g.hi(b.element, !1); var c = new h3(a.player, b.element, v3(a)); g.B(c, b); b.ba(a.u.element); c.eo(); return c
    }, v3 = function (a) {
        if (!a.I) {
            var b = new H2(a);
            g.B(a, b); var c = new g.x1(a); g.B(a, c); a.I = new ACa(b, c, a.player.O(), a.player.getVideoData(), a.logger, a.player, a.Ea)
        } return a.I
    }, u3 = function (a, b) {
        var c = !1, d = b.getElementsByTagName("annotations");
        if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) { var e = g.et(); if (e) { var f = g.ct(); f && g.vt(g.Wo("use_default_events_client") ? void 0 : g.Or, e, f, [g.Zs(d)]) } } d = b.getElementsByTagName("annotation"); for (e = 0; e < d.length; e++) {
            var h = KCa(a, d[e]); f = null; try {
                if (h) {
                    var l = h.id, m = /.+/; var n = "string" === typeof l && null != m && null != l && l.match(m) ? l : ""; var q = U2(h.type, PCa), r = U2(h.style, QCa), u = T2(h.data), w = 0 !== u.length ? JSON.parse(u) : {}; var A = h.action; h = bCa; if (null == A) var z = null; else if (g.Pa(A)) {
                        m = []; for (var E = g.p(A), D = E.next(); !D.done; D =
                            E.next()) { var H = h(D.value); H && m.push(H) } z = m
                    } else { var Q = h(A); z = Q ? [Q] : [] } f = n && q ? new X2(n, q, r, z, w) : null
                } else f = null
            } catch (xc) { } if (f) if ("branding" === f.type || "promotion" === f.type) { h = a; m = f; var R = HCa(h), Ka = null; switch (m.type) { case "branding": if (h.player.O().Ha) break; h.u.element.appendChild(R); Ka = new o3(R, v3(h), m); break; case "promotion": g.oO(h.player, R, 4), Ka = new p3(R, v3(h), m) }Ka && Ka.eo(); if (h = Ka) g.B(a, h), a.G[f.id] = h } else if ("card" === f.type || "drawer" === f.type) {
                a.o || (a.o = OCa(a), g.B(a, a.o)); if ("card" === f.type) {
                    c =
                    a.o; var Oa = f && f.data && f.data.card_type; h = f.data; if (Oa) switch (m = h.tracking || {}, m = { Xz: m.impression, click: m.click, close: m.close, ID: m.teaser_impression, Vr: m.teaser_click }, R = h.tracking_params || {}, Ka = null, Oa) {
                        case "collaborator": f = {
                            id: f.id, timestamp: h.timestamp || 0, type: h.card_type, teaserText: h.teaser_text, teaserDurationMs: h.teaser_duration_ms, startMs: h.start_ms, autoOpen: h.auto_open || !1, uc: h.session_data || {}, sponsored: h.sponsored || !1, Yd: m, bh: R.card ? g.Zs(R.card) : null, uf: R.teaser ? g.Zs(R.teaser) : null, Bc: R.icon ?
                                g.Zs(R.icon) : null, channelId: h.channel_id, customMessage: h.custom_message ? h.custom_message : null, PC: h.image_url, title: h.title, metaInfo: h.meta_info, url: W2({ pause_on_navigation: h.pause_on_navigation, target: h.target || "new", value: h.url })
                        }; k3(c, f); break; case "playlist": f = {
                            id: f.id, timestamp: h.timestamp || 0, type: h.card_type, teaserText: h.teaser_text, teaserDurationMs: h.teaser_duration_ms, startMs: h.start_ms, autoOpen: h.auto_open || !1, uc: h.session_data || {}, sponsored: h.sponsored || !1, Yd: m, bh: R.card ? g.Zs(R.card) : null,
                            uf: R.teaser ? g.Zs(R.teaser) : null, Bc: R.icon ? g.Zs(R.icon) : null, oo: h.image_url, playlistVideoCount: h.playlist_video_count, customMessage: h.custom_message ? h.custom_message : null, title: h.title, metaInfo: h.meta_info, url: W2({ pause_on_navigation: h.pause_on_navigation, target: h.target || "new", value: h.url })
                        }; k3(c, f); break; case "productListing": h.signin_url && (Ka = W2({ target: "current", value: h.signin_url })); Oa = []; for (var Tb = h.offers || [], nb = 0; nb < Tb.length; nb++)Oa.push(new fCa(g.nd(Tb[nb].merchant), g.nd(Tb[nb].price)));
                            f = {
                                id: f.id, timestamp: h.timestamp || 0, type: h.card_type, teaserText: h.teaser_text, teaserDurationMs: h.teaser_duration_ms, startMs: h.start_ms, autoOpen: h.auto_open || !1, uc: h.session_data || {}, sponsored: h.sponsored || !1, Yd: m, bh: R.card ? g.Zs(R.card) : null, uf: R.teaser ? g.Zs(R.teaser) : null, Bc: R.icon ? g.Zs(R.icon) : null, imageUrl: h.image_url, displayDomain: h.display_domain ? h.display_domain : null, showLinkIcon: !!h.show_link_icon, bp: h.button_icon_url ? h.button_icon_url : null, title: h.title, customMessage: h.custom_message ? h.custom_message :
                                    null, url: W2({ pause_on_navigation: h.pause_on_navigation, target: h.target || "new", value: h.url }), kU: Ka, jU: h.signin_title ? h.signin_title : void 0, iU: h.signin_message ? h.signin_message : void 0, offers: Oa
                            }; k3(c, f); break; case "simple": f = {
                                id: f.id, timestamp: h.timestamp || 0, type: h.card_type, teaserText: h.teaser_text, teaserDurationMs: h.teaser_duration_ms, startMs: h.start_ms, autoOpen: h.auto_open || !1, uc: h.session_data || {}, sponsored: h.sponsored || !1, Yd: m, bh: R.card ? g.Zs(R.card) : null, uf: R.teaser ? g.Zs(R.teaser) : null, Bc: R.icon ?
                                    g.Zs(R.icon) : null, imageUrl: h.image_url, displayDomain: h.display_domain ? h.display_domain : null, showLinkIcon: !!h.show_link_icon, bp: h.button_icon_url ? h.button_icon_url : null, title: h.title, customMessage: h.custom_message ? h.custom_message : null, url: W2({ pause_on_navigation: h.pause_on_navigation, target: h.target || "new", value: h.url })
                            }; k3(c, f); break; case "video": f = {
                                id: f.id, timestamp: h.timestamp || 0, type: h.card_type, teaserText: h.teaser_text, teaserDurationMs: h.teaser_duration_ms, startMs: h.start_ms, autoOpen: h.auto_open ||
                                    !1, uc: h.session_data || {}, sponsored: h.sponsored || !1, Yd: m, bh: R.card ? g.Zs(R.card) : null, uf: R.teaser ? g.Zs(R.teaser) : null, Bc: R.icon ? g.Zs(R.icon) : null, oo: h.image_url, videoDuration: h.video_duration || null, customMessage: h.custom_message ? h.custom_message : null, title: h.title, metaInfo: h.meta_info, isLiveNow: !!h.is_live_now, url: W2({ pause_on_navigation: h.pause_on_navigation, target: h.target || "new", value: h.url })
                            }, k3(c, f)
                    }
                } else jCa(a.o, f); c = !0
            }
        } c && (y2(a.player), a.lr())
    }, RCa = function (a, b) {
        var c = !1;
        a.o || (a.o = OCa(a), g.B(a, a.o)); for (var d = g.p(b.cards || []), e = d.next(); !e.done; e = d.next())e = e.value, e.cardRenderer && (kCa(a.o, e.cardRenderer), c = !0); c && (c = a.o, d = b.headerText ? g.S(b.headerText) : "", g.Le(c.ya, d), c.I && c.I.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.T = b.trackingParams ? g.Zs(b.trackingParams) : null, c.G = b.closeButton.infoCardIconRenderer.trackingParams ? g.Zs(b.closeButton.infoCardIconRenderer.trackingParams) : null, c.Bc = b.icon.infoCardIconRenderer.trackingParams ?
            g.Zs(b.icon.infoCardIconRenderer.trackingParams) : null, y2(a.player), a.lr())
    }, SCa = function (a, b, c, d, e) {
        if (!a.player.O().Ha) {
            var f = [];
            b.navigationEndpoint && b.navigationEndpoint.browseEndpoint && b.navigationEndpoint.browseEndpoint.browseId && f.push(new ZBa("openUrl", "click", new XBa("/channel/" + b.navigationEndpoint.browseEndpoint.browseId, "new", !0, !0), null)); var h = b.watermark.thumbnails[0]; d = { channel_name: b.channelName, end_ms: b.endTimeMs, image_height: h.height, image_type: 1, image_url: h.url, image_width: h.width, is_mobile: !1, session_data: { annotation_id: c, ei: e, feature: "iv", itct: b.trackingParams, src_vid: d }, start_ms: b.startTimeMs }; if (b.subscribeButton &&
                b.subscribeButton.subscribeButtonRenderer) {
                    d.channel_id = b.subscribeButton.subscribeButtonRenderer.channelId; b = b.subscribeButton.subscribeButtonRenderer; h = e = null; b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.S(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.S(b.subscriberCountText))) : (b.subscriberCountText && (e = g.S(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.S(b.subscriberCountWithSubscribeText))); var l = ""; b.signInEndpoint && b.signInEndpoint.webNavigationEndpointData &&
                        b.signInEndpoint.webNavigationEndpointData.url && (l = b.signInEndpoint.webNavigationEndpointData.url); b = { subscribeText: g.S(b.unsubscribedButtonText), subscribeCount: e || "", unsubscribeText: g.S(b.subscribedButtonText), unsubscribeCount: h || "", enabled: b.enabled || !1, classic: !1, subscribed: b.subscribed || !1, feature: "iv", signInUrl: l }; d.standalone_subscribe_button_data = b
            } f = new X2(c, "branding", "branding", f, d); d = HCa(a); a.u.element.appendChild(d); f = new o3(d, v3(a), f); f.eo(); g.B(f, f); a.G[c] = f
        }
    }, LCa = function (a, b) {
        return function (c) {
            for (var d =
                [], e = 0; e < arguments.length; ++e)d[e - 0] = arguments[e];
            a.ha() || (d.unshift(b), b = g.Ua.apply(window, d), a.N.push(g.Qp(b)))
        }
    }, TCa = function (a) { return "annotation-editor" === a || "live-dashboard" === a }, B2 = {}, C2 = null; g.Wa(E2, g.go); g.k = E2.prototype; g.k.getDuration = function () { return this.duration };
    g.k.play = function (a) { if (a || 0 == this.o) this.progress = 0, this.coords = this.A; else if (this.ub()) return !1; D2(this); this.startTime = a = (0, g.C)(); -1 == this.o && (this.startTime -= this.duration * this.progress); this.endTime = this.startTime + this.duration; this.C = this.startTime; this.progress || this.jr(); this.ff("play"); -1 == this.o && this.ff("resume"); this.o = 1; var b = g.Ta(this); b in B2 || (B2[b] = this); JBa(); KBa(this, a); return !0 };
    g.k.stop = function (a) { D2(this); this.o = 0; a && (this.progress = 1); LBa(this, this.progress); this.ff("stop"); this.Kn() };
    g.k.pause = function () { this.ub() && (D2(this), this.o = -1, this.ff("pause")) };
    g.k.X = function () { 0 == this.o || this.stop(!1); this.ff("destroy"); E2.wc.X.call(this) };
    g.k.destroy = function () { this.dispose() };
    g.k.gu = function () { this.ff("animate") };
    g.k.ff = function (a) { this.dispatchEvent(new MBa(a, this)) };
    g.Wa(MBa, g.We); g.Wa(F2, E2); F2.prototype.B = g.La; F2.prototype.gu = function () { this.B(); F2.wc.gu.call(this) };
    F2.prototype.Kn = function () { this.B(); F2.wc.Kn.call(this) };
    F2.prototype.jr = function () { this.B(); F2.wc.jr.call(this) };
    g.Wa(G2, F2); G2.prototype.B = function () { this.element.style.left = Math.round(this.coords[0]) + "px"; this.element.style.top = Math.round(this.coords[1]) + "px" }; g.t(H2, g.y); H2.prototype.ma = function (a, b, c, d) { c = (0, g.x)(c, d || this.u); a = g.Cp(a, b, c); this.o.push(a); return a };
    H2.prototype.Pu = function (a, b, c, d) { c = (0, g.x)(c, d || this.u); a = g.Lp(a, b, c); this.o.push(a); return a };
    H2.prototype.rb = function (a) { g.Dp(a); g.ob(this.o, a) };
    H2.prototype.X = function () { g.Dp(this.o); this.o.length = 0; g.y.prototype.X.call(this) }; g.t(L2, g.CO); g.k = L2.prototype; g.k.load = function () { g.CO.prototype.load.call(this); if (!M2(this)) { var a = g.JC(this.player.getVideoData()); if (a) a = K2(a, OBa(this)), N2(this, a, !1); else { var b = this.player.getVideoData(); a = b.videoId; this.B && this.B.abort(); a = { method: "POST", ue: (0, g.x)(this.kL, this, a), vf: { v: a }, withCredentials: !0 }; this.N && (a.vf.ptype = "embedded"); var c = this.player.getVideoData().Hm; c && (a.Hb = { ad_tracking: c }); if (b = g.IC(b)) if (b = g.Ic(b), b = g.Ec(b)) this.B = g.Qq(b, a) } } };
    g.k.unload = function () { N2(this, null); this.B && (this.B.abort(), this.B = null); g.CO.prototype.unload.call(this) };
    g.k.gd = function (a, b) { if (!M2(this)) return null; if ("loadCustomEndscreenRenderer" == a) { var c = K2(b, "new"); N2(this, c); return !0 } return null };
    g.k.getOptions = function () { return M2(this) ? ["loadCustomEndscreenRenderer"] : [] };
    g.k.kL = function (a, b) { var c = this.B = null; if (200 == b.status) { var d = b.responseText; ")]}" == d.substring(0, 3) && (d = d.substring(3), c = JSON.parse(d), c = K2(c, OBa(this))) } N2(this, c) };
    g.k.MA = function () {
        if (this.u && this.u.elements) {
            var a = this.player.getVideoContentRect(); if (a && 0 != a.width && 0 != a.height) {
                var b = this.player.getPlayerSize(); if (b && 0 != b.width && 0 != b.height) {
                    var c = a.width / a.height; var d = 0; for (var e = -1, f = 0; f < UCa.length; f++) { var h = Math.abs(b.width - UCa[f]); if (-1 == e || d >= h) e = f, d = h } d = VCa[e]; this.A && g.Oh(this.A.element, "outline-width", Math.max(b.width, b.height) + "px"); for (b = 0; b < this.u.elements.length; ++b)if (f = this.u.elements[b].id, e = this.o[f], h = this.G[f], e && h) {
                        var l = h.width * c / h.aspectRatio;
                        f = Math.round(l * a.height); var m = a.left + Math.round(h.left * a.width), n = a.top + Math.round(h.top * a.height); g.fi(e.element, Math.round(h.width * a.width), f); g.Wh(e.element, m, n); g.fo(e.element, WCa); m = h.left + h.width / 2; h = h.top + l / 2; g.G(e.element, .5 >= m && .5 >= h ? "ytp-ce-top-left-quad" : .5 < m && .5 >= h ? "ytp-ce-top-right-quad" : .5 >= m && .5 < h ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad"); g.fo(e.element, VCa); g.G(e.element, d); (e = g.le(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.Oh(e, "height", f + "px")
                    }
                }
            }
        }
    };
    g.k.SH = function (a) { if (this.u) if ("ytp-ce-in-endscreen" == a.getId()) R2(this, this.u.impressionUrls), (a = g.et()) && this.u.visualElement && g.wt(a, this.u.visualElement); else { a = a.getId().substring(15); var b = this.o[a], c = this.G[a]; g.G(b.element, "ytp-ce-element-show"); b.element.removeAttribute("aria-hidden"); b = this.player.getRootNode(); g.G(b, "ytp-ce-shown"); R2(this, c.impressionUrls); (b = g.et()) && g.wt(b, c.visualElement); this.player.O().A && this.player.oa("endscreenelementshown", a) } };
    g.k.TH = function (a) { if ("ytp-ce-in-endscreen" != a.getId()) { a = a.getId().substring(15); var b = this.o[a]; g.eo(b.element, "ytp-ce-element-show"); b.element.setAttribute("aria-hidden", !0); b = this.player.getRootNode(); g.eo(b, "ytp-ce-shown"); this.player.O().A && this.player.oa("endscreenelementhidden", a) } };
    g.k.KN = function (a) { var b = this; a.target === window && (new g.F(function () { for (var c in b.o) g.fo(b.o[c].element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"]) }, 0)).start() };
    g.k.SB = function (a, b) {
        if (a.targetUrl && (!b || "keypress" != b.type || 13 == b.keyCode)) {
            for (var c = b.target; c && !g.bo(c, "ytp-ce-element");) { g.bo(c, "subscribe-label") && S2(this, a); if (g.bo(c, "ytp-ce-channel-subscribe")) return; c = g.Je(c) } if (!c || g.bo(c, "ytp-ce-element-hover")) {
                b.preventDefault(); b.stopPropagation(); if (c = this.o[a.id]) this.Iv(c, a), c.element.blur(); b.ctrlKey || b.metaKey || "new" == a.PO ? (S2(this, a), this.uD(), this.player.pauseVideo(), c = g.Ic(P2(this, a.targetUrl)), c = g.Ec(c), g.dP(c, void 0, a.uc)) : (c = this.player.getVideoData().fc,
                    c = (0, g.x)(this.IO, this, c, P2(this, a.targetUrl), a.uc), c = (0, g.x)(this.uD, this, c), S2(this, a, c))
            }
        }
    };
    g.k.IO = function (a, b, c) { var d = g.yq(b); a && d && (d.v || d.list) ? g.MT(this.player.app, d.v, c, d.list, !1, void 0) : g.cP(b, c) };
    g.k.Xu = function (a, b) { g.bo(a.element, "ytp-ce-element-hover") || ("VIDEO" == b.type || "PLAYLIST" == b.type ? g.G(a.element, "ytp-ce-element-hover") : this.player.O().o ? (new g.F(function () { g.G(a.element, "ytp-ce-element-hover") }, 200)).start() : g.G(a.element, "ytp-ce-element-hover"), R2(this, b.jH), Q2(this, b.id, !0)) };
    g.k.Iv = function (a, b) { g.eo(a.element, "ytp-ce-element-hover"); g.eo(a.element, "ytp-ce-force-expand"); Q2(this, b.id, !1) };
    g.k.uD = function (a) { this.player.sendVideoStatsEngageEvent(17, a) };
    var UCa = [346, 426, 470, 506, 570, 640, 853, 1280, 1920], VCa = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "), WCa = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"]; var YBa = { AQ: "current", XR: "new" }; var $Ba = { CLOSE: "close", bS: "openUrl", gF: "subscribe" }, aCa = { qQ: "click", CLOSE: "close", iR: "hidden", LS: "rollOut", MS: "rollOver", SS: "shown" }; X2.prototype.Ac = function () {
        var a = cCa(this, function (b) { return "openUrl" === b.type && null != b.url });
        return a ? a.url : null
    };
    var QCa = { YP: "anchored", CE: "branding", CHANNEL: "channel", zQ: "cta", lR: "highlightText", AR: "label", PLAYLIST: "playlist", yS: "popup", ZS: "speech", gF: "subscribe", lT: "title", VIDEO: "video", yT: "website" }, PCa = { CE: "branding", iQ: "card", FQ: "drawer", kR: "highlight", LR: "marker", DS: "promotion", TEXT: "text", AT: "widget" }; g.t(c3, g.y); g.k = c3.prototype; g.k.addCueRange = function (a, b, c, d, e) { a = new g.Kz(a, b, { id: c }); a.namespace = "annotations_module"; d && this.ga.set(a, d); e && this.fa.set(a, e); g.kO(this.context.H, [a]) };
    g.k.eo = function () { this.context.u.subscribe("resize", this.ep, this) };
    g.k.xa = function () { return this.element };
    g.k.cv = function (a, b, c, d, e, f) { if (this.sa) return !1; f && (f.stopPropagation(), f.preventDefault()); this.navigate(a, c, d, e); return !1 };
    g.k.show = function () { };
    g.k.hide = function () { };
    g.k.destroy = function () { g.He(this.xa()) };
    g.k.ep = function () { };
    g.k.navigate = function (a, b, c, d) {
        var e = this, f = V2(a); if (f) {
            var h = hCa(f, a.target), l = function () { a.o && e.context.H.pauseVideo(); var m = e.context.videoData.fc || !1, n = g.yq(f || ""); m && n && (n.v || n.list) ? g.MT(e.context.H.app, n.v, b, n.list, !1, void 0) : g.dP(f || "", "current" === h ? "_top" : void 0, b) };
            "new" === h && (l(), l = null); s3(this.context.logger, c, l, d); gCa(f) || (c = g.et(), d = b.itct, c && d && g.Ct(c, g.Zs(d)))
        }
    };
    g.k.X = function () { this.ga.clear(); this.fa.clear(); g.y.prototype.X.call(this) };
    g.k.createElement = function (a) { a = new g.T(a); g.B(this, a); return a.element }; g.t(h3, c3); g.k = h3.prototype; g.k.isAvailable = function () { var a; if (a = !!this.cards.length) (a = this.H.getRootNode()) ? (a = g.gi(a), a = 173 < a.width && 173 < a.height) : a = !1; return a };
    g.k.ep = function () { var a = this.isAvailable(); g.hi(this.xa(), a); g.I(this.context.H.getRootNode(), g.QD.IV_DRAWER_ENABLED, a); y2(this.H) };
    g.k.destroy = function () { var a = g.dO(g.TN(this.H)); a && a.Vu(!1, void 0); try { this.H.getRootNode().removeChild(this.B) } catch (b) { } g.np(this.N); g.Dp(this.aa); this.da && this.da.dispose(); this.C && this.C.dispose(); c3.prototype.destroy.call(this) };
    g.k.GF = function () { if (this.A) { s3(this.context.logger, m3(this).Yd.close); var a = g.et(); a && this.G && g.Ct(a, this.G); g3(this) } };
    g.k.YF = function () { g.I(this.B, "iv-drawer-scrolled", 0 < this.u.scrollTop) };
    g.k.zH = function () { var a = g.et(), b = m3(this); b = b ? b.Bc : this.Bc; a && b && z2(a, [b]) };
    g.k.yH = function () { var a = g.et(), b = m3(this); b = b ? b.Bc : this.Bc; a && b && A2(a, [b]) };
    g.k.AI = function () { var a = m3(this); s3(this.context.logger, a.Yd.ID); var b = g.et(); b && a && z2(b, [a.uf, a.Bc]) };
    g.k.BH = function () { var a = g.et(), b = m3(this); a && b && A2(a, [b.uf]) };
    g.k.zI = function (a) { var b = m3(this), c = g.et(); this.o ? a ? (a = this.context.logger, s3(a, b.Yd.Vr), a.H.sendVideoStatsEngageEvent(4, void 0), c && b.uf && g.Ct(c, b.uf)) : (a = this.context.logger, s3(a, b.Yd.Vr), a.H.sendVideoStatsEngageEvent(4, void 0), c && b.Bc && g.Ct(c, b.Bc)) : (a = this.context.logger, s3(a, b.Yd.Vr), a.H.sendVideoStatsEngageEvent(4, void 0), c && this.Bc && g.Ct(c, this.Bc)) }; g.t(n3, c3); n3.prototype.eo = function () { c3.prototype.eo.call(this); vCa(this) };
    n3.prototype.show = function () { c3.prototype.show.call(this); var a = g.et(), b = this.annotation.data; a && b && (b = b.session_data) && z2(a, [g.Zs(b.itct)]) };
    n3.prototype.hide = function () { c3.prototype.hide.call(this); var a = g.et(), b = this.annotation.data; a && b && (b = b.session_data) && A2(a, [g.Zs(b.itct)]) }; g.t(o3, n3);
    o3.prototype.show = function () {
        if (!this.isActive) {
            n3.prototype.show.call(this); if (!this.G) {
                g.G(this.xa(), "iv-branding"); var a = this.annotation.data; this.u = this.createElement({ D: "img", W: ["branding-img", "iv-click-target"], P: { "aria-label": "Channel watermark", src: a.image_url, width: a.image_width, height: a.image_height } }); g.hi(this.u, !1); var b = this.createElement({ D: "div", W: ["branding-img-container"] }); b.appendChild(this.u); this.xa().appendChild(b); (b = this.annotation.Ac()) && d3(this, this.u, b, this.annotation.id, a.session_data);
                zCa(this, a); this.G = !0
            } g.hi(this.xa(), !0); this.isActive = !0; this.u && wCa(this, this.u)
        }
    };
    o3.prototype.hide = function () { this.isActive && (n3.prototype.hide.call(this), g.hi(this.xa(), !1), this.isActive = !1) };
    o3.prototype.destroy = function () { this.o && (this.o.dispose(), this.o = null); n3.prototype.destroy.call(this) }; g.t(p3, n3); g.k = p3.prototype; g.k.show = function () { this.isActive || (n3.prototype.show.call(this), this.M || (BCa(this), this.M = !0), g.hi(this.xa(), !0), g.ig(function () { g.eo(this.xa(), "iv-promo-inactive") }, 100, this), this.xa().removeAttribute("aria-hidden"), this.isActive = !0, r3(this), CCa(this), DCa(this, this.F)) };
    g.k.hide = function () { this.isActive && (g.G(this.xa(), "iv-promo-inactive"), this.isActive = !1, this.xa().setAttribute("aria-hidden", "true")) };
    g.k.cv = function (a, b, c, d, e, f) { return this.isCollapsed ? !1 : n3.prototype.cv.call(this, a, b, c, d, e, f) };
    g.k.QG = function (a) { this.I = !0; q3(this, 500, a) };
    g.k.PG = function () { this.I = !1; ECa(this) };
    g.k.IG = function (a) { a.stopPropagation(); this.hide() };
    g.k.JG = function (a) { a.stopPropagation(); r3(this); this.isCollapsed = !0; g.G(this.xa(), "iv-promo-collapsed-no-delay"); this.C.start() };
    g.k.destroy = function () { this.C.dispose(); n3.prototype.destroy.call(this) }; g.t(t3, g.CO); g.k = t3.prototype; g.k.gd = function (a, b) { if (!TCa(this.player.O().playerStyle)) return null; switch (a) { case "loadCustomAnnotationsXml": var c = g.w1(b); c && u3(this, c); return !0; case "removeCustomAnnotationById": return b && this.o && (mCa(this.o, b), y2(this.player)), !0 }return null };
    g.k.getOptions = function () { return TCa(this.player.O().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : [] };
    g.k.lr = function () { if (this.B) { var a = g.YN(this.player).getVideoContentRect(!0); g.fi(this.B.element, a.width, a.height); g.Wh(this.B.element, a.left, a.top) } if (this.o) { var b = this.player.Xk(); a = this.o; b = b.width; g.I(a.B, "iv-drawer-small", 426 >= b); g.I(a.B, "iv-drawer-big", 1280 <= b) } };
    g.k.yI = function (a) { ICa(this, a.state); g.V(a.state, 2) && (this.un() && this.GA() && 2 !== this.player.getPresentingPlayerType() && this.setCardsVisible(!1), this.Vu(!1)) };
    g.k.load = function () {
        function a(h) { var l = b.loadNumber; b.F = null; b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.Kq(h) && h.responseXML ? h.responseXML : null) && (u3(b, h), g.G(b.player.getRootNode(), "iv-module-loaded")) }
        var b = this; g.CO.prototype.load.call(this); ICa(this, g.aE(this.player)); this.loadNumber++; var c = this.player.getVideoData(), d = c.videoId; g.Sp() && (a = LCa(this, a)); var e = {
            format: "XML", ue: a, onError: function () { b.F = null },
            vf: {}
        }; c.isPharma && (e.vf.pharma = "1"); e.method = "POST"; e.withCredentials = !0; var f = this.player.O().N.get(d); f && MCa(e, f); f = f && (f.kp || f.jp); if (!c.Wo || f) c.cf ? JCa(this, c.cf, e) : (this.A = function () { b.Na(e) }, this.player.addEventListener("videodatachange", this.A));
        g.oO(this.player, this.B.element, 4); this.lr(); (f = g.KC(c)) && RCa(this, f); (f = g.LC(c)) && f.featuredChannel && SCa(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null)
    };
    g.k.Na = function (a) { var b = this.player.getVideoData(); b.cf && (this.A && (this.player.removeEventListener("videodatachange", this.A), this.A = null), JCa(this, b.cf, a)) };
    g.k.unload = function () { g.eR(this.player.app, "annotations_module", void 0); for (var a = g.p(Object.keys(this.G)), b = a.next(); !b.done; b = a.next())this.G[b.value].destroy(); this.I = null; this.o && (this.o.destroy(), this.o = null, y2(this.player)); this.M = !1; this.F && (this.F.abort(), this.F = null); this.G = {}; this.u.hide(); g.CO.prototype.unload.call(this); this.B.detach(); this.A && (this.player.removeEventListener("videodatachange", this.A), this.A = null) };
    g.k.BC = function (a) { a === this.player.getVideoData().videoId && (this.loaded ? NCa(this) : this.load()) };
    g.k.un = function () { return !!this.o && this.o.isAvailable() };
    g.k.GA = function () { this.un(); return !!this.o && this.o.A };
    g.k.setCardsVisible = function (a, b, c) { b = void 0 === b ? !1 : b; this.un(); this.o && (a ? c ? f3(this.o, c, b) : f3(this.o, "YOUTUBE_DRAWER_AUTO_OPEN", b) : g3(this.o)) };
    g.k.Vu = function (a, b) { this.player.S(a ? "cardsteasershow" : "cardsteaserhide", b) };
    g.k.X = function () { this.player.O().N.unsubscribe("vast_info_card_add", this.BC, this); g.eo(this.player.getRootNode(), g.QD.IV_DRAWER_OPEN); for (var a = this.N, b = 0, c = a.length; b < c; b++)g.Tp(a[b]); this.N.length = 0; g.CO.prototype.X.call(this) };
    g.k.createElement = function (a) { a = new g.T(a); g.B(this, a); return a.element }; g.NO.annotations_module = t3; g.NO.creatorendscreen = L2;
})(_yt_player);
