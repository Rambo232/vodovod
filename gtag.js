(function () {
	try {
		(function () {
			function Re(a, c, b, d) {
				var e = this; return D(window, "c.i", function () {
					function f(E, M, O) { e[M] = Xk(k, l, O || p, M, E) } function g(E, M) { var O = Id(k, l, "", E)(k, l); O && (U(O.then) ? O.then(Jb(h)(M)) : h(O, M)); return O } function h(E, M) { E && (U(E) ? m.push(E) : M && m.push(E[M])) } var k = window; (!k || isNaN(a) && !a) && Se(); var l = Yk(a, Te, c, b, d), m = [], p = [Pg, Id, Qg]; p.unshift(Zk); var q = u(Q, g), r = A(Q, gc), t = P(l); l.id || ob(k, t, "Invalid Metrika id: " + l.id); var y = hc.o("counters", {}); if (y[t]) return ob(k, t, "Duplicate counter " + t + " initialization"),
						y[t]; y[t] = e; hc.C("counters", y); hc.Ka("counter", e); z(function (E) { E(k, l) }, Ue); $k(k, l); g(al); g(bl); Jd(k); z(q, Ve); g(cl); r.push(dl); r.push(el); g(fl); f(gl(k, l), "hit"); f(hl(k, l), "params"); t = g(il, Sa({ unsubscribe: 1 })); e.trackHash = Id(k, l, "", n(t, Sa({ Lj: 1 }))); f(Kd(k, l), "reachGoal"); g(jl); t = g(kl, Sa({ zd: 1 })); f(n(t, Sa({ Ti: 1 })), "notBounce"); f(ll(k, l), "firstPartyParams"); f(G([k, l], ml), "firstPartyParamsHashed"); f(n(t, Sa({ ac: 1 })), "accurateTrackBounce"); g(nl); t = g(ol, Sa({ zd: 1 })); f(n(t, Sa({ Gh: 1 })), "extLink"); f(n(t, Sa({ Zg: 1 })),
							"addFileExtension"); f(n(t, Sa({ file: 1 })), "file"); f(n(t, Sa({ fd: 1 })), "trackLinks"); f(pl(k, l), "userParams"); f(ql(k, l, m), "destruct", [Pg, Qg]); f(rl(k, l), "setUserID"); e.getClientID = g(sl) || B; g(tl); f(ul(k, l), "clickmap"); f(vl(k, l), "enableAll"); g(wl); g(xl); g(yl); r.push(zl); g(Al); Kb(k, G([k, r, q, 1, "a.i"], Rg)); g(Bl); Cl(k); z(function (E) { var M = E[0]; f((0, E[1])(k, l), M) }, yc); z(q, pb)
				})()
			} function ml(a, c, b) {
				var d, e, f = Da(a, c); f && (qb(b) ? La(ca(b)) ? (a = Sg(b)) && La(a) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = a, e), d)) : Ab(a, c, "First party params error. Empty object.")() :
					Ab(a, c, "First party params error. Not an object.")())
			} function Sg(a) { a = Ea(a); return N(function (c, b) { var d = b[0], e = b[1], f = qb(e); if (!Ia(e) && !f) return c; e = f ? Sg(e) : e; La(e) && c.push([d, e]); return c }, [], a) } function Tg(a, c, b) { void 0 === b && (b = 0); c = Ea(c); c = N(function (d, e) { var f = e[0], g = e[1], h = qb(g); if (!Ia(g) && !h) return d; h ? g = Tg(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Dl(g) : "email" === f && (g = El(g)), g = Ug(a, g)) : g = K.resolve(g); d.push(g.then(function (k) { return [f, k] })); return d }, [], c); return K.all(c) } function El(a) {
				var c =
					rb(a).toLowerCase().split("@"), b = c[0]; c = c[1]; if (!c) return a; c = c.replace("googlemail.com", "gmail.com"); Vg(c) && (c = "yandex.ru"); "yandex.ru" === c ? b = b.replace(We, "-") : "gmail.com" === c && (b = b.replace(We, "")); a = Xe(b, "+"); -1 !== a && (b = b.slice(0, a)); return b + "@" + c
			} function Dl(a) { a = Lb(a); return "8" === a[0] ? "7" + a.slice(1) : a } function Ug(a, c) {
				return new K(function (b, d) {
					var e = (new a.TextEncoder).encode(c); a.crypto.subtle.digest("SHA-256", e).then(function (f) {
						f = new a.Blob([f], { type: "application/octet-binary" }); var g = new a.FileReader;
						g.onload = function (h) { h = n(h, "target.result"); var k = (h || "").indexOf(","); -1 !== k ? b(h.substring(k + 1)) : d(zc("fpm.i")) }; g.readAsDataURL(f)
					}, d)
				})
			} function Fl(a, c) {
				function b() { m.hidden ? x(g.style, Vc(["top", "right", "left", "background"], "initial")) : x(g.style, Vc(["top", "right", "left"], "0"), { background: "rgba(0, 0, 0, .3)" }); r.parentNode || (p.appendChild(k), p.appendChild(r)); m.hidden = !m.hidden; p.hidden = !p.hidden; q.hidden = !q.hidden } function d(M) {
					var O = f("div"); x(O.style, ic("2px", "18px"), Ac, {
						left: "15px", top: "7px",
						background: "#2f3747", borderRadius: "2px"
					}); O.style.transform = "rotate(" + M + "deg)"; return O
				} function e(M, O, wa, xa, sb) { var Bc = f("div"); x(Bc.style, ic(O + "px", wa + "px"), Ac, { left: M + "px", bottom: 0, background: xa, borderTopLeftRadius: sb }); return Bc } var f = Ya(a); if (!f) return B; var g = f("div"); g.classList.add("__ym_wv_ign"); x(g.style, Wg, { bottom: "0", width: "100%", zIndex: "999999999" }); var h = f("div"); x(h.style, ic("24px"), Ac, Ye, { top: "12px", right: "10px", background: "#3367dc", overflow: "hidden" }); var k = f("div"); x(k.style, {
					border: "2px solid transparent",
					animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
				}, Ye, Ac, ic("48px"), Vc(["top", "left"], "calc(50% - 24px)"), Vc(["borderTopColor", "borderLeftColor"], "#fc0")); var l = f("style"); l.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}"; k.appendChild(l); var m = f("div"); m.id = "__ym_wv_ign__opener"; x(m.style, ic("46px", "48px"), Wg, { right: "0", bottom: "60px", cursor: "pointer", background: "#fff", borderRadius: "16px 0 0 16px", boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)" });
				var p = f("div"); x(p.style, Ac, Vc(["top", "right", "bottom"], "0"), { width: "600px", background: "#fff" }); var q = f("div"); q.id = "__ym_wv_ign__closer"; x(q.style, ic("32px"), Ac, Ye, { top: "12px", right: "612px", cursor: "pointer", background: "#fff" }); l = f("iframe"); l.src = "https://metrika.yandex.ru/widget/iframe-check"; var r = f("iframe"); x(r.style, ic("100%"), { border: "none" }); r.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c; p.hidden = !0; q.hidden = !0; q.appendChild(d(45)); q.appendChild(d(-45)); p.appendChild(l); h.appendChild(e(0,
					8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)")); h.appendChild(e(8, 9, 16, "#04acff", "3px")); h.appendChild(e(17, 7, 24, "#ffdd13")); m.appendChild(h); g.appendChild(p); g.appendChild(q); var t = ["click", "touchstart"]; h = ia(a); var y = a.document.body; l = [h.D(m, t, b), h.D(q, t, b), h.D(l, ["load"], G([ya, [C(p.removeChild, p, l), C(g.appendChild, g, m)]], z)), h.D(r, ["load"], C(p.removeChild, p, k)), C(y.removeChild, y, g)]; var E = G([ya, l], z); l.push(h.D(a, ["securitypolicyviolation"],
						function (M) { (M = n(M, "blockedURI")) && 0 <= M.indexOf("https://metrika.yandex.ru") && E() })); y.appendChild(g); return E
			} function Vc(a, c) { return N(function (b, d) { b[d] = c; return b }, {}, a) } function ic(a, c) { var b; return b = {}, b.width = a, b.height = c || a, b } function Gl(a, c, b, d) { d = n(d, "target"); (d = Wb("button,input", a, d)) && "submit" === d.type && (d = Xg(a, d)) && (b.push(d), Y(a, G([!1, a, c, b, d], Yg), 300)) } function Yg(a, c, b, d, e) {
				var f = Mb(c)(e, d), g = -1 !== f; if (a || g) g && d.splice(f, 1), a = Zg(c, e), a = "?" + Wc(a), d = G([c, b, "Form goal. Counter " + b.id +
					". Form: " + a + "."], $g), Kd(c, b, "form", d)(a)
			} function $g(a, c, b) { return Hl(a, c).then(function (d) { d && Ab(a, c, b)() }) } function dl(a, c) { var b = Il(a), d = ta(a, "r", c), e = D(a, "rts.p"); return ma(a, c, C(N, null, function (f, g) { var h = { id: g.th, aa: g.aa }; h = d({ ca: g.ij, J: za(g.hh), G: g.$, V: { Tb: g.Tb } }, h, g.oj)["catch"](e); return f.then(v(h, Q)) }, K.resolve(""), b))["catch"](e) } function Jl(a, c) {
				try { var b = c.origin } catch (e) { } if (b) {
					var d = Na(u(Ta, ua(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
					b = H(b.replace(/\/?$/, "/"), Kl); if (d || b) d = Bb(a, c.data), "appendremote" === n(d, "action") && (b = Nb(a), b.C("oo", !0), b.o("stopRecorder", B)(), Ll(a, c, d))
				}
			} function ah(a, c) {
				var b, d, e, f, g = c.data; g = void 0 === g ? "" : g; var h = c.id; h = void 0 === h ? "" : h; var k = L(a), l = {}; l.getCachedTags = bh; l.form = (b = {}, b.closest = v(a, Xg), b.select = Ml, b.getData = v(a, Zg), b); l.button = (d = {}, d.closest = v(a, ch), d.select = dh, d.getData = v(a, eh), d); l.phone = (e = {}, e.hidePhones = G([a, null, [g]], fh), e); l.status = (f = {}, f.checkStatus = G([a, Fa(h)], Nl), f); k.C("_u", l);
				b = c.lang; b = void 0 === b ? "" : b; d = c.appVersion; d = void 0 === d ? "" : d; e = c.fileId; e = void 0 === e ? "" : e; f = c.beta; f = void 0 === f ? !1 : f; d = I(".", u(eb(u(Q, Fa)), Cc(Boolean))(d.split("."))); H(e, Ol) && H(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"), b = gh(b) ? b : "") : b = ""; b && Dc(a, { src: b })
			} function Pl(a, c) {
				var b = Ya(a); if (b) {
					b = b("div"); var d = Xb(a); if (d) {
						b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
						var e = b.firstChild; e.onload = function () { Dc(e.contentWindow, { src: c }) }; a._ym__remoteIframeEl = e; d.appendChild(b); b.removeChild(e); var f = null; b.attachShadow ? f = b.attachShadow({ mode: "open" }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot()); f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
					}
				}
			} function Nl(a) { var c, b = hh(a); a = L(a).o("getCounters", Ld)(); a = A(V("id"), a); return c = { id: b }, c.counterFound = !!b && H(b, a), c } function Zg(a, c, b) {
				return ih(a,
					c, ["i", "n", "p"], void 0, b)
			} function Bl(a, c) { var b = jh(a), d = P(c), e = b[d]; e || (e = {}, b[d] = e); e.yi = !0; if (b = e.sg) d = kh(a), z(d, b) } function Ql(a, c, b, d) { var e; if (a = Da(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); H(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.og((e = {}, e.type = "params", e.data = f, e))) } } function Rl(a) {
				var c = B, b = null, d = a.length; if (0 !== a.length && a[0]) {
					var e = a.slice(-1)[0]; U(e) && (c = e, d = a.length + -1); var f = a.slice(-2)[0]; U(f) && (c = f, b = e, d = a.length +
						-2); d = a.slice(0, d); return { vh: b, Za: c, $: 1 === d.length ? a[0] : Ec(d) }
				}
			} function Sl(a) { var c = n(a, "speechSynthesis.getVoices"); if (!c) return ""; a = C(c, a.speechSynthesis); return jc(function (b) { return A(v(b, n), Tl) }, a()) } function Ul(a, c, b) { return I("x", A(u(Q, ra("concat", "" + a), v(b, n)), c)) } function Vl(a, c) {
				var b = c.lh; if (!Wl(a, b)) return ""; var d = []; a: { var e = Xl(a, b); try { var f = G(e, u)()(); break a } catch (E) { if ("ccf" === E.message) { f = null; break a } fb(E) } f = void 0 } if (Oa(f)) var g = ""; else try { g = f.toDataURL() } catch (E) { g = "" } (f = g) &&
					d.push(f); var h = b.getContextAttributes(); try { var k = Ja(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : [] } catch (E) { k = [] } k = I(";", k); f = Ze(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = Ze(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l = b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS), q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
						b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (q) { var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT); 0 === r && (r = 2) } r = {
							vk: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h, "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": p, "webgl max anisotropy": q ? r : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
							"webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE), "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS), "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
							"webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": Ze(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS), "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS), "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
						}; $e(d, r, ": "); a: {
							try {
								var t = b.getExtension("WEBGL_debug_renderer_info");
								if (t) { var y = { "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL) }; break a }
							} catch (E) { } y = {}
						} $e(d, y); if (!b.getShaderPrecisionFormat) return I("~", d); $e(d, Yl(b)); return I("~", d)
			} function $e(a, c, b) { void 0 === b && (b = ":"); z(function (d) { return a.push("" + d[0] + b + d[1]) }, Ea(c)) } function Zl(a, c, b, d) {
				c = d.o("cc"); d = G(["cc", ""], d.C); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && Fa(e)) && 1440 < da(a)(ib) - e) return d(); b.C("cc", c) } else ja(0)(c) ||
					d()
			} function $l(a, c, b, d) {
				return ma(a, c, function (e) {
					if ("0" === n(e, "settings.pcs") && !Xc(a)) if (e = d.o("zzlc"), W(e) || Oa(e) || "na" === e) {
						e = "ru"; var f = lh(a, 68), g = mh(a, 79); if (f || g) e = "md"; if (f = Ya(a)) {
							var h = f("iframe"); x(h.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); h.src = "https://mc.yandex." + e + nh("L21ldHJpa2EvenpsYy5odG1s"); if (e = Xb(a)) {
								e.appendChild(h); var k = 0, l = ia(a).D(a, ["message"], D(a, "zz.m", function (m) {
									(m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (kc(h), m = m.substr(8), d.C("zzlc",
										m), b.C("zzlc", m), l(), ka(a, k))
								})); k = Y(a, u(l, v(h, kc)), 3E3)
							}
						}
					} else b.C("zzlc", e)
				})
			} function am(a, c, b) {
				var d, e; c = Za(v(a, n), bm); c = W(c) ? null : n(a, c); if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
					var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel"); U(a) && (C(a, f, "y.metrika")(), a = n(f, "createOffer"), U(a) && !a.length && (a = C(a, f)(), d = n(a, "then"), U(d) && C(d, a, function (g) { var h = n(f, "setLocalDescription"); U(h) && C(h, f, g, B, B)() })(), x(f, (e = {}, e.onicecandidate = function () {
						var g, h = n(f, "close");
						if (U(h)) { h = C(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) { f.onicecandidate = B; "closed" !== f.iceConnectionState && h(); return } k && 0 < k.length && (g = lc(k[1]), b.C("pp", g)); f.onicecandidate = B; h() }
					}, e))))
				}
			} function cm(a, c, b) {
				var d, e = oh(a, c); if (e) {
					e.ba.D(["gpu-get"], function () { var h; return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h }); var f = n(a, "opener"); if (f) {
						var g = Y(a, G([a, c, b], ph), 200, "pu.m"); e.De(f, (d = {}, d.type = "gpu-get", d), function (h, k) {
							var l = n(k, "pu"); l && (ka(a,
								g), b.C("pu", l))
						})
					} else ph(a, c, b)
				}
			} function ph(a, c, b) { var d = n(a, "location.host"); a = Md(a, c); b.C("pu", "" + lc(d) + a) } function qh(a, c, b) { c = Fc(a, void 0, c); c = rh(a, c.o("phc_settings") || ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g ? dm(a, b.ic, { Bg: em }).bg(g).then(function (h) { return fm(b, { Cb: d, Nb: e, rg: f }, h.ja, g, h.ua) })["catch"](function () { }) : K.resolve() } function em(a, c, b) {
				a = gm(b.Xc); if ("href" === b.Ae) {
					var d = b.rb; c = d.href; b = c.replace(a, b.Va); if (c !== b) return d.href =
						b, !0
				} else if ((a = null === (d = b.rb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Va)) && a !== b.rb.textContent) return b.rb.textContent = a, !0; return !1
			} function fm(a, c, b, d, e) {
				var f; c.Cb && c.Nb && (c.Cb === a.Cb && c.Nb === a.Nb || x(a, c, { ja: {}, cb: !0 }), 0 < e && $a(a.ua, [e]), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.ja[l] && a.ja[l][g] ? a.ja[l][g] : 0); x(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = 1 + (a.ja[l] ? a.ja[l][g] : 0); x(a.ja, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, b), a.Nf && (a.cb || b.length) &&
					((c = Da(a.l, a.ic)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Cb, f.orderId = a.Nb, f.service_id = a.rg, f.phones = a.ja, f.performance = a.ua, f)), a.cb = !1))
			} function fh(a, c, b) { var d; c = sh(a, c, { Bg: hm, Qi: (d = {}, d.href = !0, d) }); b = X(Boolean, A(function (f) { return "*" === f ? f : Lb(f) }, b)); var e = A(u(Q, ra("concat", [""]), im("reverse"), ya), b); b = Yc(a); d = th(a, b, 1E3); c = C(c.bg, c, e, !1); d.D(c); jm(a, b); uh(a, b); c() } function hm(a, c, b) {
				var d = Ya(a), e = b.rb, f = b.Xc, g = e.parentNode, h = e.textContent; if ("text" === b.Ae && h && d && g) {
					b = d("small"); vh(b); var k =
						h.split(""), l = wh(h).length; z(ra("appendChild", b), N(function (m, p) { var q = m.ia, r = m.Ig, t = d("small"); t.innerHTML = p; var y = km.test(p); vh(t); y && (t.style.opacity = "" + (l - r - 1) / l); q.push(t); return { ia: q, Ig: r + (y ? 1 : 0) } }, { ia: [], Ig: 0 }, k).ia); lm(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0
				} return !1
			} function lm(a, c, b, d) {
				function e() { z(v(["style", "opacity", ""], Ec), na(b.childNodes)); if (c) { var k = Da(a, c); k && k.extLink("tel:" + d, {}) } g(); h() } var f = ia(a), g = B, h = B; g = f.D(b, ["mouseenter"], function (k) {
					if (k.target === b) {
						var l =
							Y(a, e, 200, "ph.h.e"); (h || B)(); h = f.D(b, ["mouseleave"], function (m) { m.target === b && ka(a, l) })
					}
				})
			} function uh(a, c) { Yb(a)(Ua(B, function () { var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); Aa("MutationObserver", a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e) })) } function jm(a, c) { return ia(a).D(a, ["load"], c.O) } function sh(a, c, b) {
				function d(k) { var l; return f(a, c, k) ? null === (l = h[k.Xc]) || void 0 === l ? void 0 : l.gd : null } var e, f = b.Bg; b = b.Qi; var g = void 0 === b ? (e = {}, e.href = !0, e.text =
					!0, e) : b, h; return { bg: function (k) { return new K(function (l, m) { k && k.length || m(); h = xh()(k); Yb(a)(Ua(v({ ja: [], ua: 0 }, l), function () { var p = da(a), q = p(Z), r = g.href ? mm(a, h) : [], t = g.text ? yh(a, h) : []; l({ ja: X(ea, X(Boolean, A(d, r.concat(t)))), ua: p(Z) - q }) })) }) } }
			} function mm(a, c) {
				var b = a.document.body; if (!b) return []; var d = zh(c); return N(function (e, f) {
					var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) {
						var k = (d.exec(h) || [])[0], l = k ? Lb(k) : "", m = c[l]; W(m) || !l && "*" !== m.gd[0] || (e.push({
							Ae: "href",
							rb: f, Xc: l, Va: Ah(k, c[l].Va), Dj: g
						}), g = Lb(h.slice(4)), l = xh()([l ? m.gd : [g, ""]]), e.push.apply(e, yh(a, l, f)))
					} return e
				}, [], na(b.querySelectorAll("a")))
			} function yh(a, c, b) {
				void 0 === b && (b = a.document.body); if (!b) return []; var d = [], e = zh(c); af(a, b, function (f) { if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) { var g = X(Boolean, e.exec(f.textContent || "") || []); z(function (h) { var k = Lb(h); W(c[k]) || d.push({ Ae: "text", rb: f, Xc: k, Va: Ah(h, c[k].Va), Dj: f.textContent || "" }) }, g) } }, function (f) {
					return e.test(f.textContent ||
						"") ? 1 : 0
				}, a.NodeFilter.SHOW_TEXT); return d
			} function xh() { return Zc(function (a, c) { var b = A(Lb, c), d = b[0]; b = b[1]; a[d] = { Va: b, gd: c }; var e = Bh(d); e !== d && (a[e] = { Va: Bh(b), gd: c }); return a }, {}) } function Ah(a, c) { for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) { var h = d[g]; "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g]) } return I("", b) + c.slice(f + 1) } function Bh(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function zh(a) {
				return new RegExp("(?:" + I("|",
					A(Ch, ca(a))) + ")")
			} function nm(a) { a = Ya(a); if (!a) return ""; a = a("video"); try { var c = ra("canPlayType", a), b = jc(function (d) { return A(u(Q, ra("concat", d + "; codecs=")), om) }, Dh); return A(c, [].concat(Dh, b)) } catch (d) { return "canPlayType" } } function pm(a) { var c = n(a, "matchMedia"); if (c && Aa("matchMedia", c)) { var b = ra("matchMedia", a); return N(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, qm) } } function Yl(a) {
				return N(function (c, b) {
					var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") ||
						"n"; c[d + " precision rangeMax"] = n(e, "rangeMax") || "n"; return c
				}, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
					a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int",
					a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
			} function Xl(a, c) {
				return [function () { var b = c.createBuffer(); b && c.getParameter && Aa("getParameter", c.getParameter) || bf(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(rm); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.Gi = 3; b.Ui = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); d && e || bf(); return { ye: d, Yj: e, Xj: b } }, function (b) {
					var d =
						b.ye, e = b.Yj; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"); c.compileShader(e); c.attachShader(d, e); (d = c.createShader(c.FRAGMENT_SHADER)) || bf(); return x(b, { Th: d })
				}, function (b) {
					var d = b.ye, e = b.Th; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"); c.compileShader(e); c.attachShader(d,
						e); c.linkProgram(d); c.useProgram(d); return b
				}, function (b) { var d = b.ye; b = b.Xj; d.Wj = c.getAttribLocation(d, "attrVertex"); d.Wi = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Qk); c.vertexAttribPointer(d.Wj, b.Gi, c.FLOAT, !1, 0, 0); c.uniform2f(d.Wi, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.Ui); return c.canvas }]
			} function Wl(a, c) { if (!U(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !Aa("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function Ze(a, c) {
				c.clearColor(0,
					0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]"
			} function sm(a) { try { var c = La(a) ? a : []; return I(",", [a.name, a.description, u(na, Cc(Boolean), eb(tm), $c(","))(c)]) } catch (b) { return "" } } function tm(a) { return I(",", [a.description, a.suffixes, a.type]) } function um(a, c, b) {
				function d(q) { return function () { var r = b.o("scip", "") + q; b.C("scip", r) } } var e, f = ad(a, "ci"); f = Cb(a, f); var g = cf(a), h = da(a)(ib), k = ["sync.cook.int"], l = vm(g.o("sci"));
				if (!l || 1440 < h - l) {
					b.C("scip", "0"); var m = d("a"), p = df(a, c); return f({ oa: k, G: (e = {}, e.duid = p, e.hid = "" + Zb(a), e) }, ["https://an.yandex.ru/sync_cookie"], { vb: 1500, jd: !0 }).then(function (q) { q = n(q.Sb, "CookieMatchUrls"); ea(q) || (q = []); La(q) ? d("1")() : m(); var r = ad(a, "c"), t = Cb(a, r); q = A(function (y, E) { var M = "" + y + (mc(y, "?") ? "&" : "?") + "duid=" + p; return t({ oa: k }, ["https://" + M], { vb: 1500 }).then(B, u(d("b"), d("" + E))) }, X(Ia, q)); return K.all(q) }, m).then(function () { var q = b.o("scip"); !q || mc(q, "a") || mc(q, "b") || (g.C("sci", h), d("2")()) },
						B)
				} return K.resolve()
			} function Eh(a) { return { da: function (c, b) { if (!c.J) return b(); var d = L(a).o("fid"); !Fh && d && (Nd(c, "fid", d), Fh = !0); return b() } } } function wm(a, c) { var b = a.document; if (H(b.readyState, ["interactive", "complete"])) Kb(a, c); else { var d = ia(a), e = d.D, f = d.Yb, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function ef(a) { return { da: function (c, b) { var d = c.J; if (d) { var e = L(a).o("adBlockEnabled"); e && d.C("adb", e) } b() } } } function xm(a) {
				var c = D(a,
					"i.clch", zm); ia(a).D(a.document, ["click"], C(c, null, a), { passive: !1 }); return function (b) { var d = oa.Na, e = a.Ya[oa.Db], f = !!e._informer; e._informer = x({ domain: "informer.yandex.ru" }, b); f || Dc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" }) }
			} function Am(a, c, b) {
				var d, e = Gh(a, c), f = T(a); f = Od(f.protocol + "//" + f.hostname + f.pathname); c = Md(a, c); var g = ""; do g += Va(a); while (g.length < c.length); g = g.slice(0, c.length); a = ""; for (var h = 0; h < c.length; h += 1)a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10; c = [g, a]; a = c[0]; c = c[1]; return (d =
					{}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
			} function Bm(a, c, b, d) { a = n(d, "data"); if (Ia(a)) { var e = a.split("*"); a = e[0]; var f = e[1]; e = e[2]; "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e) } } function Gc(a, c, b) { return { da: function (d, e) { ff(d) ? e() : ma(a, b, function (f) { var g; if (f = n(f, "settings.hittoken")) f = (g = {}, g.hittoken = f, g), d.G = x(d.G || {}, f); e() }) } } } function Cm(a, c) {
				var b =
					Pa(a); if ("" !== b.o("cc")) return 0; var d = v("cc", b.C); d(0); var e = da(a), f = L(a); f = u(V(Sa({ Sb: 1 }) + ".c"), bd(function (g) { d(g + "&" + e(ib)) }), v("cc", f.C)); ta(a, "6", c)({}).then(f)["catch"](u(bd(function () { var g = e(ib); b.C("cc", "&" + g) }), D(a, "cc")))
			} function Pd(a, c) { if (!c) return !1; var b = T(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function Dm(a, c) { return ma(a, c, function (b) { var d = n(b, "settings.dr"); return { Ah: Em(a, d), isEnabled: n(b, "settings.auto_goals") } }) } function Fm(a, c, b, d, e) {
				b = gf(a.document.body,
					b); d = gf(a.document.body, d); H(e.target, [b, d]) && hf(a, c)
			} function Hh(a, c, b, d) { (b = Gm(a, d, b)) && hf(a, c, b) } function Ih(a, c) { var b = Jh(a, c); return Hm(a, b) } function Jh(a, c) { var b = gf(a.document.body, c); return b ? Im(a, b) : "" } function hf(a, c, b) { if (c = Da(a, c)) a = Ec(["dr", b || "" + Va(a, 10, 99)]), c.params(Ec(["__ym", a])) } function gf(a, c) { var b = null; try { b = c ? Hc(c, a) : b } catch (d) { } return b } function Kh(a) { a = na(nh(a)); return A(function (c) { c = c.charCodeAt(0).toString(2); return Lh("0", 8, c) }, a) } function Im(a, c) {
				if (!c) return ""; var b =
					[], d = n(a, "document"); af(a, c, function (e) { if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value); (f = f && f.trim()) && b.push(f) }); return 0 === b.length ? "" : b.join(" ")
			} function Jm(a, c, b) { a = Ba(b); b = a[1]; "track" === a[0] && c({ version: "0", sc: b }) } function Km(a, c, b) { if (b) { var d = b.version; (b = n(Lm, d + "." + b.sc)) && (c && H(b, Mm) || a("ym-" + b + "-" + d)) } } function Qd(a, c, b) {
				return function (d) {
					var e, f, g = Da(c, b); g && Nm(a, d, c) && (g = C(g.params, g), (d = jf(a,
						d, "goods")) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
				}
			} function Om(a, c, b, d) { var e, f; c = n(d, "ecommerce") || {}; var g = n(d, "event") || ""; c = (g = Mh[g]) ? jf(g, c, "items") : void 0; if (!c) a: { c = d; !ea(d) && Rd(a, La(d)) && (c = Ba(c)); if (ea(c) && (a = Mh[c[1]], "event" === c[0] && a)) { c = jf(a, c[2], "items"); break a } c = void 0 } (d = c || Pm(d)) && b && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)) } function Pm(a) { var c = n(a, "ecommerce") || {}; a = X(nc(Qm), ca(c)); a = N(function (b, d) { b[d] = c[d]; return b }, {}, a); return ca(a).length ? a : void 0 } function Nm(a,
				c, b) { var d = !1, e = ""; if (!qb(c)) return ob(b, "", "Ecommerce data should be an object"), d; var f = c.goods; switch (a) { case "detail": case "add": case "remove": ea(f) && f.length ? (d = kf(function (g) { return qb(g) && (Ia(g.id) || Rd(b, g.id) || Ia(g.name)) }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array"; break; case "purchase": Rd(b, c.id) || Ia(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field" }ob(b, "", e); return d }
			function jf(a, c, b) { var d, e; if (c) { var f = c.purchase || c; c = ca(f); var g = f[b]; if (g) { var h = (d = {}, d[a] = (e = {}, e.products = A(Rm, g), e), d); 1 < c.length && (h[a].actionField = N(function (k, l) { if (l === b) return k; if ("currency" === l) return h.currencyCode = f.currency, k; k[lf[l] || l] = f[l]; return k }, {}, c)); return h } } } function Rm(a) { var c = {}; z(function (b) { var d = lf[b] || b; -1 !== b.indexOf("item_category") ? (d = lf.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b] }, ca(a)); return c } function Sm(a, c) {
				var b = Pa(a), d = "wv2rf:" + P(c), e = c.Bb,
				f = Jd(a), g = b.o(d), h = c.Oj; return W(f) || Oa(g) ? ua(function (k, l) { ma(a, c, function (m) { var p = n(m, "settings.webvisor.forms"); p = !n(m, "settings.x3") && p; f = Jd(a) || n(m, "settings.eu"); b.C(d, cd(p)); l({ Bb: e, Lf: !!f, $f: p, Dg: h }) }) }) : mf({ Bb: e, Lf: f, $f: !!Fa(g), Dg: h })
			} function Tm() {
				var a = N(function (c, b) { c[b[0]] = { pd: 0, ih: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265],
				["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]); return { ah: function (c) { if (c.length) return { type: "activity", data: N(function (b, d) { var e = a[d]; return Math.round(b + e.pd * e.ih) }, 0, ca(a)) } }, Xi: function (c) { c && (c = a[c.data.type]) && (c.pd += 1) } }
			} function Um(a) {
				if (a.type && a.event) switch (a.type) {
					case "page": var c = a.data, b = c.Ba, d = c.dd, e = c.content; delete c.Ba; delete c.dd; delete c.content; c = { type: "page", data: { M: a.M || 0, content: e, Ba: b, dd: d, Z: c } }; a.L && (c.L = a.L); return c; case "event": a: {
						c =
						{ type: "event", L: a.L, data: { M: a.M, type: a.event, Z: {} } }; b = x({}, a.data); switch (a.event) {
							case "zoom": c.data.Z = { Kg: { x: 0, y: 0, level: 0 }, Mg: b, duration: 1 }; break; case "keystroke": c.data.Z = b.Kc; break; case "deviceRotation": case "resize": c.data.Z = b; break; case "windowfocus": case "windowblur": case "focus": c.data.target = b.target; c.data.Z = null; break; case "touchmove": case "touchstart": case "touchend": case "touchcancel": case "touchforcechange": case "scroll": case "change": case "click": case "mousemove": case "mousedown": case "mouseup": case "selection": case "stylechange": c.data.target =
								b.target; delete b.target; c.data.Z = b; break; case "srcset": a = { type: "mutation", L: a.L, data: { M: a.M, Z: { Ea: [{ od: [{ id: b.target, Ab: { src: { Oc: "", n: b.value, r: !1 } }, za: 0 }] }], index: 0 } } }; break a
						}a = c
					} break; case "mutation": return Vm(a)
				}return a
			} function Vm(a) {
				var c = x({}, a.data), b = []; switch (a.event) {
					case "tc": b = [{ d: [{ id: c.target, lc: { Oc: "", n: c.value }, za: c.index }] }]; break; case "ac": b = [{ od: [{ id: c.target, Ab: N(function (d, e) { var f = e[1]; d[e[0]] = { Oc: "", n: f, r: la(f) }; return d }, {}, Ea(c.attributes)), za: c.index }] }]; break; case "re": b =
						[{ Xe: A(function (d) { return { id: d, za: c.index } }, c.ia) }]; break; case "ad": b = [{ $e: A(function (d) { return { id: d.id, Tf: d.name, Uf: d.Sf, me: d.parent, pe: d.se, de: d.next, Ab: d.attributes, za: c.index, lc: d.content, Pa: d.hidden } }, c.ia) }]
				}return { type: "mutation", L: a.L, data: { M: a.M, Z: { Ea: b, index: c.index } } }
			} function Wm(a) {
				return {
					Vh: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, Xh: function () {
						if (a.document.doctype) {
							var c = x({ name: "html", publicId: "", systemId: "" }, a.document.doctype),
							b = c.publicId, d = c.systemId; return "<!DOCTYPE " + I("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
						} return null
					}, ji: function () { try { if (!a.sessionStorage) return null; var c = a.sessionStorage.getItem("__vw_tab_guid"), b = !1; try { var d = a.opener ? a.opener.sessionStorage : null; b = !!d && c === d.getItem("__vw_tab_guid") } catch (e) { b = !0 } if (!c || b) c = Nh(), a.sessionStorage.setItem("__vw_tab_guid", c); return c } catch (e) { return null } }
				}
			} function Xm(a, c, b) {
				var d = dd(a), e = ia(a), f = Ob(a), g = c.Id(), h = !n(a, "postMessage") ||
					f && !n(a, "parent.postMessage"), k = v(d, Q); if (h) { if (!g) return Y(a, C(d.O, d, "i", { ra: !1 }), 10), { Hd: k, lg: B, stop: B }; fb(Qa()) } d.D(["sr"], function (r) { var t, y = Oh(a, r.source); y && nf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.qa().Y(y), t)) }); d.D(["sd"], function (r) { var t = r.data; r = r.source; (a === r || Oh(a, r)) && d.O("sdr", { data: t.data, M: t.frameId }) }); if (f && !g) {
						var l = !1, m = 0, p = function () { var r; nf(a, a.parent, (r = {}, r.type = "sr", r)); m = Y(a, p, 100, "if.i") }; p(); var q = function (r) {
							d.fa(["\u043d"], q); ka(a, m); var t = Ic(a, r.origin).host;
							l || r.source !== a.parent || !r.data.frameId || "about:blank" !== T(a).host && !H(t, b) || (l = !0, d.O("i", { M: r.data.frameId, ra: !0 }))
						}; d.D(["\u043d"], q); Y(a, function () { d.fa(["\u043d"], q); ka(a, m); l || (l = !0, d.O("i", { ra: !1 })) }, 2E3, "if.r")
					} e = e.D(a, ["message"], function (r) { var t = Bb(a, r.data); t && t.type && H(t.type, Ym) && d.O(t.type, { data: t, source: r.source, origin: r.origin }) }); return { Hd: k, lg: function (r) { var t; return nf(a, a.parent, (t = {}, t.frameId = c.Id(), t.data = r, t.type = "sd", t)) }, stop: e }
			} function Oh(a, c) {
				try {
					return Za(u(V("contentWindow"),
						ja(c)), na(a.document.querySelectorAll("iframe")))
				} catch (b) { return null }
			} function nf(a, c, b) { a = jb(a, b); c.postMessage(a, "*") } function Nh() { return $b() + $b() + "-" + $b() + "-" + $b() + "-" + $b() + "-" + $b() + $b() + $b() } function $b() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } function Zm(a, c) { if (Ia(c)) return c; var b = a.textContent; if (Ia(b)) return b; b = a.data; if (Ia(b)) return b; b = a.nodeValue; return Ia(b) ? b : "" } function $m(a, c, b, d, e) {
				void 0 === d && (d = {}); void 0 === e && (e = Ga(c)); var f = x(N(function (h, k) {
					h[k.name] =
					k.value; return h
				}, {}, na(c.attributes)), d); x(f, an(c, e, f)); var g = (d = N(function (h, k) { var l = k[0], m = Sd(a, c, l, k[1], b, e), p = m.value; la(p) ? delete f[l] : f[l] = p; return h || m.jb }, !1, Ea(f))) && ed(c); g && (f.width = g.width, f.height = g.height); return { jb: d, eh: f }
			} function an(a, c, b) { var d = {}; of(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function Sd(a, c, b, d, e, f) {
				void 0 === f && (f = Ga(c)); var g = { jb: !1, value: d }; if (of(c)) "value" === b ? !la(d) && "" !== d && (b = e.Lf, f = e.$f, e = fd(a, c), f ? (b = gd(a, c, b), a = b.Td, c = b.Dd, b = b.mb,
					g.jb = !c && (e || a)) : (g.jb = e, b = !Td(c)), b || e) && (g.value = I("", A(v("\u2022", Q), ("" + d).split("")))) : "checked" === b && H((c.getAttribute("type") || "").toLowerCase(), bn) ? g.value = c.checked ? "checked" : null : cn.test(b) && pf(a, c) && (g.value = null); else if ("IMG" === f && "src" === b) (e = fd(a, c)) ? (g.jb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : "";
					else if (H(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === Xe(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && H(b, ["src", "type"])) g.value = null; return g
			} function qf(a, c, b, d) { void 0 === d && (d = "wv2"); return { H: function (e, f) { return D(a, d + "." + b + "." + f, e, void 0, c) } } } function Ph(a, c, b, d) { if (c) { var e = []; c && (a.document.documentElement.contains(c) ? af(a, c, ra("push", e), d) : $a(e, Qh(a, c, d))); z(b, e) } } function af(a, c, b, d, e) {
				function f(g) {
					return U(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT :
						a.NodeFilter.FILTER_ACCEPT
				} void 0 === e && (e = -1); if (U(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !rf(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: f } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
			} function Qh(a, c, b) { var d = [], e = u(Q, ra("push", d)); U(b) ? (b = b(c), (la(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) { c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) { var g = Qh(a, c[b]); z(e, g) } } return d } function dn(a, c, b, d, e) {
				function f() { k && k.stop() } if (!c.xb) return K.resolve(B);
				var g = ta(a, "4", c), h = { G: { "wv-type": "0" }, J: za() }; b = new en(a, b, function (l, m, p) { if (!g) return K.resolve(); m = "wv-data=" + Rh(l, !0); for (var q = l.length, r = 0, t = 255, y = 255, E, M, O; q;) { E = 21 < q ? 21 : q; q -= E; do M = "string" === typeof l ? l.charCodeAt(r) : l[r], r += 1, 255 < M && (O = M >> 8, M &= 255, M ^= O), t += M, y += t; while (--E); t = (t & 255) + (t >> 8); y = (y & 255) + (y >> 8) } l = (t & 255) + (t >> 8) << 8 | (y & 255) + (y >> 8); return g(x({}, h, { ca: m, G: { "wv-check": 65535 === l ? 0 : l, "wv-type": "0" } }), c, p)["catch"](D(a, "m.n.m.s")) }); var k = fn(a, b, d, e); return ma(a, c, function (l) {
					l && L(a).C("isEU",
						n(l, "settings.eu")); L(a).o("oo") || k && Sh(a, l) && k.start(); return f
				})
			} function fn(a, c, b, d) {
				var e = a.document, f = [], g = ia(a), h = ":submit" + Math.random(), k = [], l = C(c.flush, c), m = ha(function (r, t) { D(a, "hfv." + r, function () { try { var y = t.type } catch (E) { return } y = H(y, d); c.push(t, { type: r }); y && l() })() }), p = D(a, "sfv", function () {
					var r = b(a), t = gn(a); z(function (y) { f.push(g.D(y.target, [y.event], m(y.type))) }, r); z(function (y) { f.push(g.D(y.target, [y.event], D(a, "hff." + y.type + "." + y.event, function (E) { z(ua({ l: a, ma: E, flush: l }), y.N) }))) },
						t); k = Th(a, "form", e); e.attachEvent && (r = Th(a, "form *", e), z(function (y) { f.push(g.D(y, ["submit"], m("form"))) }, k), z(function (y) { sf(y) && f.push(g.D(y, ["change"], m("formInput"))) }, r)); z(function (y) { var E = y.submit; if (U(E) || "object" === typeof E && hn.test("" + E)) y[h] = E, y.submit = D(a, "fv", function () { var M = { target: y, type: "submit" }; m("document")(M); return y[h]() }) }, k)
				}), q = D(a, "ufv", function () { z(ya, f); z(function (r) { r && (r.submit = r[h]) }, k); c.flush() }); return { start: p, stop: q }
			} function jn(a, c) {
				var b = X(function (e) {
					return 0 <
						e.N.length
				}, c), d = Uh({ target: a.document, type: "document" }); return A(u(Q, d, kn(a)), b)
			} function Vh(a, c) { var b = a.l, d = [], e = c.form; if (!c[Ra] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; Ud(h) && !h[Ra] && $a(d, oc(b, h)) } } else $a(d, oc(b, c)); return d } function tf(a) { if (hd) { hd = !1; var c = tb(a.l), b = []; gb(a.l, b, 15) ? a = [] : (S(b, c), a = b); return a } } function Wh(a) { if (!hd) { hd = !0; a = tb(a.l); var c = []; Pb(c, 14); S(c, a); return c } } function ln(a, c, b) {
				var d = c[Ra]; if (d) {
					a: {
						var e = tb(a), f = c[Ra]; if (0 < f) {
							var g = []; c = uf(a,
								c); var h = pc[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.Xf) { h.Xf = k; if (gb(a, g, 9)) { a = []; break a } S(g, e); S(g, f); S(g, c[0]); S(g, c[1]) } if (l !== h.size) { h.size = l; if (gb(a, g, 10)) { a = []; break a } S(g, e); S(g, f); S(g, c[2]); S(g, c[3]) } if (g.length) { a = g; break a }
						} a = []
					} $a(b, a)
				} return d
			} function gd(a, c, b) { void 0 === b && (b = !1); if ("button" === c.getAttribute("type")) return { mb: !1, Dd: !1, Td: !1 }; var d = Td(c), e = vf(c); a = wf(a, c) || b && e; return { mb: !(d || !a), Dd: d, Td: e } } function wf(a, c) { return pf(a, c) || id(a, c) ? !0 : fd(a, c) } function vf(a) {
				if (!a) return !1;
				var c = a.placeholder, b = a.type; a = X(Xh, [a.className, a.id, a.name]); return b && H(b, mn) || Na(Ta(nn), a) || Xh(c) && on.test(c)
			} function Xh(a) { return !!(a && 2 < a.length) } function of(a) { try { var c = Ga(a); if (H(c, xf)) { if ("INPUT" === c) { var b = a.type; return !b || H(b.toLocaleLowerCase(), pn) } return !0 } } catch (d) { } return !1 } function Yh(a, c) { return c && qc("(ym-disable-submit|-metrika-noform)", c) } function Td(a) { return a && qc("ym-record-keys", a) } function qn(a, c) {
				return I("", A(function (b) {
					return a.isNaN(b) ? rn.test(b) ? (b = b.toUpperCase() ===
						b ? sn : tn, String.fromCharCode(Va(a, b[0], b[1]))) : b : "" + Va(a, 0, 9)
				}, c.split("")))
			} function fd(a, c) { if (la(c)) return !1; if (rf(c)) { var b = c.parentNode; return (la(b) ? 0 : 11 === b.nodeType) ? !1 : fd(a, c.parentNode) } if (un.test(c.className)) return !0; b = Zh(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content *"); return d && (vn.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d } function Sh(a, c) {
				var b = ac(a), d = b.o("visorc"); H(d, ["w", "b"]) || (d = ""); $h(a) && ai(a, Vd, "visorc") && !wn.test(ub(a) || "") || (d = "b"); var e =
					n(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = L(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.C("visorc", d, 30); return "w" === d
			} function bi(a) { return !!Za(function (c) { return H(c.type, ["articleInfo", "publishersHeader"]) }, a) } function ci(a) { var c = yf(a).isEnabled, b = !1; try { b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size } catch (d) { } return kf(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")]) } function zf(a, c) {
				var b = c[1][3], d = 0, e = new a.Uint8Array(c[0]);
				return rc([b], function (f, g) { if (!f) return e; f[0](a, f[2], e, d); d += f[1]; g.push(f[3]); return e })
			} function Wd(a, c, b) {
				a = c(b); c = [B, 0, 0]; var d = [0, c, c, void 0]; return rc(a, function (e, f) {
					var g = e[0], h = e[1], k = e[2]; if (0 === g) return k(d, h), d; if (void 0 === h || null === h) return d; var l = g >> 3; if (g & 1) sc(d, kb(l)), h = k(h), l & 2 && sc(d, kb(h[1])), sc(d, h); else if (g & 4) for (g = h.length - 1; 0 <= g;) { var m = k(h[g]); m.push([0, 0, Af]); m.push([0, kb(l), sc]); m.unshift([0, 0, Bf]); f.push.apply(f, m); --g } else if (g & 2) {
						k = e[2]; var p = e[3], q = e[4], r = e[5], t = ca(h);
						for (g = t.length - 1; 0 <= g;)m = t[g], m = [[0, 0, Bf], [q, h[m], r], [k, m, p], [0, 0, Af], [0, kb(l), sc]], f.push.apply(f, m), --g
					} else m = k(h), m.push([0, 0, Af]), m.push([0, kb(l), sc]), m.unshift([0, 0, Bf]), f.push.apply(f, m); return d
				})
			} function Bf(a) { var c = a[1], b = a[0], d = a[2]; a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [B, 0, 0], a[2] = a[1]); sc(a, kb(b)); b && (a[2][3] = c[3], a[2] = d, a[0] += b) } function Af(a) { a[3] = [a[0], a[1], a[2], a[3]]; a[1] = [B, 0, 0]; a[2] = a[1]; a[0] = 0 } function sc(a, c) { a[0] += c[1]; a[2][3] = c; a[2] = c } function Cf(a) {
				return [[385,
					a.Yg, kb], [336, a.lj, xn], [272, a.bh, yn], [208, a.event, zn], [144, a.Oi, An], [80, a.page, Bn]]
			} function Cn(a) { return [[321, a.end, Qb], [273, a.qh, Dn], [193, a.page, J], [144, a.data, Cf], [65, a.L, J]] } function di(a) { return [[84, a.buffer, Cn]] } function En(a) { return [[129, a.position, J], [81, a.name, R]] } function Fn(a) { return [[81, a.name, R]] } function Gn(a) { return [[81, a.name, R]] } function yn(a) { return [[593, a.Sj, R], [532, a.rj, En], [449, a.cf, J], [401, a.kj, R], [340, a.Gj, Fn], [276, a.fh, Gn], [209, a.gj, R], [145, a.hj, R], [65, a.id, kb]] } function Hn(a) {
				return [[513,
					a.cf, J], [489, a.Li, jd], [385, a.ib, J], [321, a.height, J], [257, a.width, J], [193, a.y, J], [129, a.x, J], [65, a.id, kb]]
			} function xn(a) { return [[129, a.ib, J], [84, a.dh, Hn]] } function In(a) { return [[81, a.hash, R]] } function Jn(a) { return [[209, a.stack, R], [145, a.Fh, R], [81, a.code, R]] } function Kn(a) { return [[193, a.orientation, J], [129, a.height, J], [65, a.width, J]] } function Ln(a) { return [[84, a.Kc, Mn]] } function Mn(a) { return [[273, a.Lc, R], [193, a.Mf, Qb], [145, a.key, R], [65, a.id, J]] } function Nn(a) { return [[145, a.value, R], [81, a.Jk, R]] } function On(a) {
				return [[149,
					a.bc, R], [81, a.method, R]]
			} function Pn(a) { return [[257, a.pb, J], [193, a.qb, J], [129, a.height, J], [65, a.width, J]] } function Qn(a) { return [[144, a.Mg, ei], [80, a.Kg, ei]] } function ei(a) { return [[193, a.y, J], [129, a.x, J], [105, a.level, jd]] } function Rn(a) { return [[84, a.touches, Sn]] } function Sn(a) { return [[297, a.force, jd], [233, a.y, jd], [169, a.x, jd], [81, a.id, R]] } function Tn(a) { return [[193, a.hidden, Qb], [129, a.checked, Qb], [81, a.value, R]] } function Un(a) { return [[257, a.jf, J], [193, a.ug, J], [129, a.end, J], [65, a.start, J]] } function Vn() { return [] }
			function Wn(a) { return [[193, a.page, Qb], [129, a.y, J], [65, a.x, J]] } function Xn(a) { return [[129, a.y, J], [65, a.x, J]] } function Yn(a) { return [[84, a.Ea, Zn]] } function Zn(a) { return [[257, a.index, J], [209, a.ke, R], [145, a.style, R], [65, a.target, J]] } function zn(a) {
				return [[1168, a.zj, Yn], [1104, a.wi, In], [1040, a.Jh, Jn], [976, a.zh, Kn], [912, a.Ii, Ln], [848, a.nj, Pn], [784, a.bk, Qn], [720, a.Kk, Nn], [656, a.Gk, On], [592, a.Hj, Rn], [528, a.mh, Tn], [464, a.uj, Un], [400, a.Zj, Vn], [336, a.sj, Wn], [272, a.Mi, Xn], [193, a.M, Xd], [129, a.target, Xd], [65, a.type,
					kb]]
			} function An(a) { return [[257, a.M, Xd], [208, a.Z, $n], [129, a.L, J], [65, a.target, J]] } function $n(a) { return [[148, a.Ea, ao], [65, a.index, J]] } function ao(a) { return [[276, a.d, bo], [212, a.od, co], [148, a.$e, eo], [84, a.Xe, fo]] } function bo(a) { return [[193, a.za, J], [144, a.lc, fi], [65, a.id, J]] } function co(a) { return [[193, a.za, J], [146, a.Ab, 81, R, 144, fi], [65, a.id, J]] } function fi(a) { return [[193, a.r, Qb], [145, a.n, R], [81, a.Oc, R]] } function eo(a) {
				return [[641, a.Pa, Qb], [577, a.za, J], [513, a.de, J], [465, a.lc, R], [402, a.Ab, 81, R, 145, R],
				[321, a.pe, J], [273, a.Uf, R], [193, a.me, J], [145, a.Tf, R], [65, a.id, J]]
			} function fo(a) { return [[321, a.za, J], [257, a.me, J], [193, a.de, J], [129, a.pe, J], [65, a.id, J]] } function Bn(a) { return [[321, a.Ba, go], [273, a.dd, R], [193, a.M, Xd], [148, a.content, ho], [80, a.Z, io]] } function ho(a) { return [[513, a.hidden, Qb], [449, a.se, J], [385, a.next, J], [337, a.content, R], [257, a.parent, J], [210, a.attributes, 81, R, 145, R], [145, a.name, R], [65, a.id, J]] } function io(a) {
				return [[724, a.Ck, jo], [656, a.location, ko], [592, a.viewport, gi], [528, a.screen, gi],
				[449, a.Ef, Qb], [401, a.af, R], [337, a.referrer, R], [273, a.Eg, R], [209, a.Ye, R], [145, a.title, R], [81, a.doctype, R]]
			} function jo(a) { return [[133, a.scroll, J], [65, a.target, J]] } function ko(a) { return [[209, a.path, R], [145, a.protocol, R], [81, a.host, R]] } function gi(a) { return [[129, a.height, J], [65, a.width, J]] } function R(a) { var c = lo({}, a, [], 0); return c ? [mo, c, a] : [hi, 0, 0] } function Dn(a) { return [no, a.length, a] } function Qb(a) { return [hi, 1, a ? 1 : 0] } function go(a) {
				a = ii(a); var c = a[0], b = a[1], d = (b >>> 28 | c << 4) >>> 0; c >>>= 24; return [ji, 0 ===
					c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
			} function jd(a) { return [oo, 4, a] } function Xd(a) { return kb((a << 1 ^ a >> 31) >>> 0) } function J(a) { return 0 > a ? [ji, 10, ii(a)] : kb(a) } function kb(a) { return [po, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a] } function po(a, c, b, d) { for (a = c; 127 < a;)b[d++] = a & 127 | 128, a >>>= 7; b[d] = a } function hi(a, c, b, d) { b[d] = c } function no(a, c, b, d) { for (a = 0; a < c.length; ++a)b[d + a] = c[a] } function ki(a) {
				return function (c, b, d, e) {
					for (var f, g = 0, h = 0; h < b.length; ++h)if (c =
						b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c; else { if (2048 > c) { if (a) { g += 2; continue } d[e++] = c >> 6 | 192 } else { if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) { if (a) { g += 4; continue } c = 65536 + ((c & 1023) << 10) + (f & 1023); ++h; d[e++] = c >> 18 | 240; d[e++] = c >> 12 & 63 | 128 } else { if (a) { g += 3; continue } d[e++] = c >> 12 | 224 } d[e++] = c >> 6 & 63 | 128 } d[e++] = c & 63 | 128 } return a ? g : e
				}
			} function oo(a, c, b, d) { return qo(a)(a, c, b, d) } function ro(a, c, b, d) {
				var e = 0 > c ? 1 : 0; e && (c = -c); if (0 === c) kd(0 < 1 / c ? 0 : 2147483648, b, d); else if (a.isNaN(c)) kd(2143289344, b, d);
				else if (3.4028234663852886E38 < c) kd((e << 31 | 2139095040) >>> 0, b, d); else if (1.1754943508222875E-38 > c) kd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d); else { var f = a.Math.floor(a.Math.log(c) / Math.LN2); kd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d) }
			} function kd(a, c, b) { c[b] = a & 255; c[b + 1] = a >>> 8 & 255; c[b + 2] = a >>> 16 & 255; c[b + 3] = a >>> 24 } function ji(a, c, b, d) { a = c[0]; for (c = c[1]; a;)b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7; for (; 127 < c;)b[d++] = c & 127 | 128, c >>>= 7; b[d++] = c } function ii(a) {
				if (!a) return [0,
					0]; var c = 0 > a; c && (a = -a); var b = a >>> 0; a = (a - b) / 4294967296 >>> 0; c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0))); return [a, b]
			} function Yd(a) { return ea(a) ? A(Yd, a) : la(a) || "object" !== typeof a ? a : N(function (c, b) { var d = b[0], e = b[1], f = so[d]; W(f) && (f = d); e = H(f, to) ? e : Yd(e); f ? c[f] = e : c[d] = e; return c }, {}, Ea(a)) } function uo(a, c) {
				return ma(a, c, function (b) {
					var d = L(a); P(c); if (!d.o("dSync", !1)) return d.C("dSync", !0), li(a, b, {
						$a: c, Vc: "s", Yd: "ds", Bj: function (e, f, g) {
							var h = e.Sb; e = e.host; if (n(h, "settings")) return fb(Qa("ds.e"));
							f = f(Z) - g; g = e[1]; var k, l; h = za((k = {}, k.di = h, k.dit = f, k.dip = g, k)); k = (l = {}, l["page-url"] = T(a).href, l); return ta(a, "S", mi)({ J: h, G: k }, mi)["catch"](D(a, "ds.rs"))
						}
					})
				})
			} function li(a, c, b) { var d = b.$a, e = da(a), f = vo(a, c.userData, d), g = wo(a); return g.length ? xo(a, e, f, c, b).then(function () { return yo(a, g, f, e, b) }, B) : K.resolve() } function wo(a) { var c = ld(a); a = u(Df, nc(["iPhone", "iPad"]))(a); return c ? zo : a ? Ao : [] } function yo(a, c, b, d, e) {
				var f = e.Bj, g = void 0 === f ? B : f, h = e.Yd, k = d(Z); return Bo(a, c, e)(Ua(function (l) {
					z(function (m) {
						m &&
						Zd(a, h + ".s", m)
					}, l); l = d(ib); b.C(h, l)
				}, function (l) { b.C(h, d(ib)); g(l, d, k) }))
			} function xo(a, c, b, d, e) { var f = e.Yd, g = e.$a; return new K(function (h, k) { var l = b.o(f, 0); l = parseInt("" + l, 10); return 60 >= c(ib) - l ? k() : Co(a) ? h(void 0) : ni(d) ? k() : h(Do(a, g)) }) } function Bo(a, c, b) {
				var d = b.Vc, e = b.data, f = ta(a, d, b.$a); a = x({}, oi); e && x(a.G, e); return Eo(A(function (g) {
					return Fo(f(oi, A(function (h) {
						var k = h[1], l = h[2]; h = I("", A(function (m) { return String.fromCharCode(m.charCodeAt(0) + 10) }, h[0].split(""))); return "http" + (l ? "s" : "") + "://" +
							h + ":" + k + "/" + Go[d]
					}, g), { Jg: !1, qj: !0 }).then(function (h) { return x({}, h, { host: g[h.Uj] }) }))
				}, c))
			} function vo(a, c, b) { var d = c || {}, e = ta(a, "u", b), f = Pa(a); return { o: function (g, h) { return W(d[g]) ? f.o(g, h) : d[g] }, C: function (g, h) { var k, l = "" + h; d[g] = l; f.C(g, l); return e({ G: (k = {}, k.key = g, k.value = l, k) }, [oa.Na + "//" + tc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s")) } } } function pi(a, c, b) {
				var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { C(e, d)(jb(a, c)) } catch (f) { } else qi = Y(a, G([a, c, 2 * b], pi), b, "ai.d"); return function () {
					return ka(a,
						qi)
				}
			} function Ho(a, c, b) { if (b && (b = ch(a, b), b = eh(a, b))) { b = "?" + Wc(b); var d = Ab(a, c, "Button goal. Counter " + c.id + ". Button: " + b + "."); Kd(a, c, "btn", d)(b) } } function Io(a, c) { var b; a((b = {}, b.clickmap = W(c) ? !0 : c, b)) } function Jo(a, c, b, d, e) { var f; c = { J: za(), G: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f) }; d(c, e)["catch"](D(a, "c.s.c")) } function Ko(a, c, b, d, e) {
				if (md(a, "ymDisabledClickmap") || !c || !c.element) return !1; a = Ga(c.element); if (e && !e(c.element, a) || H(c.button, [2, 3]) && "A" !== a || Na(ja(a), d)) return !1; d = c.element; if (c &&
					b) { if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1 } for (; d;) { if (Lo(d)) return !1; d = d.parentElement } return !0
			} function Mo(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function No(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function ri(a,
				c) { var b = Xb(a), d = Ef(a); return { x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0 } } function Oo(a, c) {
					if (a.Mj()) {
						var b = si(c); if (b && !qc("ym-disable-tracklink", b)) {
							var d = a.l, e = a.uh, f = a.$a, g = a.sender, h = a.Kh, k = f.wc, l = b.href, m = rb(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")); m = l === m ? "" : m; if (qc("ym-external-link", b)) $d(d, f, { url: l, Jb: !0, title: m, sender: g }); else {
								k = k ? Ic(d, k).hostname : T(d).hostname; h = RegExp("\\.(" + I("|", A(Po, h)) + ")$", "i"); var p = b.protocol + "//" +
									b.hostname + b.pathname; h = ti.test(p) || ti.test(l) || h.test(l) || h.test(p); b = b.hostname; ae(k) === ae(b) ? h ? $d(d, f, { url: l, Hc: !0, title: m, sender: g }) : m && e.C("il", rb(m).slice(0, 100)) : l && Qo.test(l) || $d(d, f, { url: l, Mc: !0, Jb: !0, Hc: h, title: m, sender: g })
							}
						}
					}
				} function $d(a, c, b, d) {
					var e, f = za(); b.Hc && f.C("dl", "1"); b.Jb && f.C("ln", "1"); f = { J: f, V: { title: b.title, Mc: !!b.Mc, $: b.$ }, G: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.wc || T(a).href, e) }; e = "Link"; b.Hc ? e = b.Jb ? "Ext link - File" : "File" : b.Jb && (e = "Ext link"); c = b.sender(f, c).then(d ||
						B).then(Ab(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b)); return Jc(a, "cl.p.s", c, b.Za || B, b.l)
				} function Ro(a, c) { var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks = e, d)) } function So(a, c, b, d) { var e = T(a), f = e.hostname; e = e.href; if (c = nd(c).url) a = Ic(a, c), f = a.hostname, e = a.href; return [d + "://" + f + "/" + b, e || ""] } function be(a, c) { return function (b) { ui(a, c, b) } } function To(a, c) { Ff(a)(function (b) { delete b[c] }) } function ui(a, c, b) { Ff(a)(function (d) { d[c] = x(d[c] || {}, b) }) } function Ff(a) {
					a =
					L(a); var c = a.o("dsjf") || ua({}); a.Ka("dsjf", c); return c
				} function Jc(a, c, b, d, e) { var f = G([a, d, e], Gf); return b.then(f, function (g) { f(); Zd(a, c, g) }) } function vi(a, c) { L(a).C("dce:" + c, !0); var b = L(a).o("dclq:" + c); b && (z(function (d) { var e = d[0]; d = d[1]; ya.apply(void 0, sa([od(a, c)[e]], d)) }, b), b.splice(0, b.length)) } function Ab(a, c, b, d) { return Hf(c) ? B : v(G(sa([a, P(c)], d ? [b + ". Params:", d] : [b]), ob), ya) } function ob() { var a = Ba(arguments), c = a.slice(2); od(a[0], a[1]).log.apply(ob, c) } function yf(a) {
					var c = "1" === ac(a).o("debug"),
					b = -1 < T(a).href.indexOf("_ym_debug=1"); a = a._ym_debug; return { ui: c, Ci: a || b, isEnabled: Na(Boolean, [c, a, b]) }
				} function ma(a, c, b) { a = P(c); return wi()(Uo(a)).then(b) } function Vo(a, c, b) { c = P(c); a = If(a); b = x({ Mh: a(Z) }, b); return wi()(Wo(c, b)) } function Wo(a, c) { return function (b) { var d = b[a]; d ? (d.mj = c, d.eg = !0, d.dg ? d.dg(c) : d.Ta = K.resolve(c)) : b[a] = { Ta: K.resolve(c), mj: c, eg: !0 } } } function ce(a, c, b) {
					var d = de(a, c, b); return function (e, f, g) {
						var h; e = x({ J: za() }, e); e.G || (e.G = {}); var k = e.G; k.wmode = "0"; k["wv-part"] = "" + g; k["wv-hit"] =
							k["wv-hit"] || "" + Zb(a); k["page-url"] = k["page-url"] || a.location.href; k.rn = k.rn || "" + Va(a); if (!k["wv-type"]) { g = e.Ia || {}; var l = g.df, m = "4", p = "2"; g.Kf && (m = "5", p = "3"); k["wv-type"] = l ? m : p } f = "webvisor/" + f.id; return d(x(e, { G: k }), f, { Qb: (h = {}, h["Content-Type"] = "text/plain", h), Hg: "POST" })
					}
				} function Xo(a, c, b) { var d; (d = vb[c]) || (d = Db); var e = A(Kc, d); z(function (f) { return e.unshift(f) }, Jf); return A(u(xi([a, c, b]), ya), e) } function aa(a, c, b) { vb[a] || (vb[a] = []); c && !la(b) && yi(vb[a], c, b) } function yi(a, c, b) {
					for (var d = [c, b], e =
						-1E4, f = 0; f < a.length; f += 1) { var g = a[f], h = g[0]; g = g[1]; if (b === g && h === c) return; if (b < g && b >= e) { a.splice(f, 0, d); return } e = g } a.push(d)
				} function zi(a, c) {
					var b = T(a), d = b.href, e = b.host, f = -1; if (!Ia(c) || W(c)) return d; b = c.replace(Ai, ""); if (-1 !== b.search(Yo)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length - 1] = b, I("/",
						d); return ""
				} function Zo(a) { a = $o(a); return ap[a] || a } function bp(a) { a = Bi(a); return cp[a] || "ru" } function dp(a, c, b, d) {
					var e = c.J; if (b.$j || !e) d(); else {
						var f = ee(a), g = Fc(a, ""); d = u(function () { var r = Ci(f); r = "" + r + ep(r, g); e.C("gdpr", r); Nd(c, "gdpr", r) }, d); if (3 === b.id) d(); else {
							var h = L(a), k = h.o("f1"); if (k) k(d); else if (k = (k = Ci(f)) ? A(v(fe, n), k.split(",")) : [], Di(k)) d(); else {
								var l = ge(a), m = T(a), p = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck")); m = g.o("gdpr"); g.o("yandex_login") ? (k.push("13"), g.C("gdpr",
									Lc, 525600)) : l ? H(m, bc) ? m === Kf ? k.push("12") : k.push("3") : Lf(a) || pd(a) ? k.push("17") : fp(a) && k.push("28") : k.push("14"); var q = v(f, gp); Di(k) ? (z(q, k), d()) : (he.push(d), h.C("f1", function (r, t) { var y = 0; if (t) { var E = jb(a, t) || ""; y += E.length } he.push(r); 1E6 >= y && he.push(r) }), (0, Mf[0])(a).then(V("params.eu")).then(function (r) { if (r || p) { g.C("gdpr_popup", Kf); hp(a, b); if (Ob(a)) return ip(a, q, b); var t = Ei(a, f); if (t) return r = jp(a, q, t, b), r.then(G([a, b], kp)), r } r || q("8"); return K.resolve({ value: Lc, Ud: !0 }) }).then(function (r) {
										g.pc("gdpr_popup");
										if (r) { var t = r.value; r = r.Ud; H(t, bc) && g.C("gdpr", t, r ? void 0 : 525600) } t = rc(he, ya); uc(a, t, 20)(Ua(D(a, "gdr"), B)); h.C("f1", ya)
									})["catch"](D(a, "gdp.a")))
							}
						}
					}
				} function kp(a, c) { if (ge(a)) { var b = ee(a), d = Da(a, c); d = d && d.params; b = A(v(lp, n), Nf(b)); d && b.length && d("gdpr", X(Boolean, b)) } } function ip(a, c, b) {
					var d = ie(a, b); return new K(function (e) {
						var f; if (d) {
							var g = d.ba, h = u(v("4", c), v(null, e)), k = Y(a, h, 2E3, "gdp.f.t"); d.og((f = {}, f.type = "isYandex", f)).then(function (l) {
								l.isYandex ? (c("5"), g.D(sa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"],
									Of), function (m) { e({ value: Fi(m[1].type) }) })) : (c("6"), e(null))
							})["catch"](h).then(G([a, k], ka))
						} else e({ value: Kf, Ud: !0 })
					})
				} function hp(a, c) { var b = ie(a, c); b && b.ba.D(["isYandex"], function () { var d; return d = { type: "isYandex" }, d.isYandex = ge(a), d }); return b } function jp(a, c, b, d) {
					var e = mp(a, d.ak), f = ie(a, d); if (!f) return K.resolve({ value: Lc, Ud: !0 }); var g = Dc(a, { src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + "_inversed_buttons.js" }); return new K(function (h, k) {
						g ? (c("7"), g.onerror = function () {
							var l; c("9"); f.ng((l = {},
								l.type = "GDPR-ok-view-default", l)); h(null)
						}, g.onload = function () { c("10"); b.D(sa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Of), function (l) { var m; l = l.type; f.ng((m = {}, m.type = l, m)); h({ value: Fi(l) }) }) }) : (c("9"), k(Qa("gdp.e")))
					})
				} function mp(a, c) { var b = c || Bi(a); return H(b, np) ? b : "en" } function Pf() {
					return function (a, c, b) {
						return {
							da: function (d, e) {
								var f, g = d.J, h = d.Wa, k = d.G; if (g && k) {
									var l = da(a); g.Vb("rqnl", 1); for (var m = qd(a), p = 1; m[p];)p += 1; d.V || (d.V = {}); d.V.Tb = p; m[p] = (f = {}, f.protocol = oa.Na, f.host = tc, f.resource =
										"watch", f.postParams = d.ca, f.time = l(Z), f.counterType = b.aa, f.params = k, f.browserInfo = g.l(), f.counterId = b.id, f.ghid = Zb(a), f); h && (h.Vb("rqnl", 1), m[p].telemetry = h.l()); Qf(a)
								} e()
							}, xa: function (d, e) { Gi(a, d); e() }
						}
					}
				} function Gi(a, c) { var b = qd(a); c.J && !Oa(b) && c.V && (delete b[c.V.Tb], Qf(a)) } function Qf(a) { var c = qd(a); Pa(a).C("retryReqs", c) } function Rf(a, c, b) {
					return {
						da: function (d, e) {
							var f = d.J; if (f && (!b || b.mg)) {
								var g = a.document.title; d.V && d.V.title && (g = d.V.title); var h = cc("getElementsByTagName", a.document); "string" !==
									typeof g && h && (g = h("title"), g = (g = n(g, "0.innerHtml")) ? g : ""); g = g.slice(0, oa.Rg); f.C("t", g)
							} e()
						}
					}
				} function Rb(a) { void 0 === a && (a = op); return function (c, b, d) { return { da: function (e, f) { var g = e.J, h = e.G; g && h && z(function (k) { var l = je[k], m = "bi", p = g; l || (l = ab[k], m = "tel", p = Nd(e)); l && (l = F(m + ":" + k, l, null)(c, d, e), p.Vb(k, l)) }, a); f() } } } } function pp(a) { if (pd(a)) return null; var c = qp(a), b = c.Zf; W(b) && (c.Zf = null, rp(a).then(function (d) { c.Zf = d })); return b ? 1 : null } function sp(a, c, b) {
					c = P(c); a = Hi(a); b = b.G; if ((void 0 === b ? {} : b).nohit) return null;
					var d = b = null; n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = tp); if (!b) { var e = n(a, "timing"); e && (b = up, d = e) } if (!b) return null; a = vp(a, d, b); c = wp(c); return (c = xp(c, a)) && I(",", c)
				} function xp(a, c) { var b = a.length ? A(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; z(u(Q, ra("push", a)), c); return X(ja(null), b).length === a.length ? null : b } function vp(a, c, b) {
					return A(function (d) {
						var e = d[0], f = d[1]; if (U(e)) return e(a, c) || null; if (U(f)) return null; var g = !(!c[e] || !c[f]); !g && 2 === d.length &&
							(g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ii[d[0]] || Ii[g])); return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
					}, b)
				} function rd(a, c, b) { return { da: function (d, e) { var f = Ji(b), g = d.J; g ? ff(d) ? (f.rf = g, e()) : f.Ec ? f.Ec.push(e) : e() : e() }, xa: function (d, e) { var f = d.J, g = Ji(b); if (f) { var h = g.Ec; g.rf === f && h && (z(ya, h), g.Ec = null) } e() } } } function ff(a) { return (a = a.J) && a.o("pv") && !a.o("ar") } function Rh(a, c) {
					void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
						var g =
							(a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
					} switch (b - d) {
						case 1: b = a[d] << 4; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b &
							63], "=", "="); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
					}e = e.join(""); return c ? Ki(e, !0) : e
				} function nh(a, c) {
					void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = Ki(b)); b.length % 4;)b += "="; do {
						var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
						g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)); if (0 > f || 0 > g || 0 > h || 0 > k) return ""; var l = f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
					} while (e < b.length); return d
				} function Ki(a,
					c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return yp[b] || b }) : "" } function zp(a, c, b, d, e, f, g, h) { var k = b.o(f); la(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g)); W(h) || h.Vb(f, "" + k); return k } function Ap(a, c) { if (sd(a)) { var b = ub(a).match(Bp); if (b && b.length) return b[1] === c } return !1 } function lh(a, c) { if (td(a) && c) { var b = ub(a).match(Cp); if (b && b.length) return +b[1] >= c } return !1 } function mh(a, c) { var b = ub(a); return b && (b = b.match(Dp)) && 1 < b.length ? Fa(b[1]) >= c : !1 } function Li(a, c) {
						var b = oh(a, c), d = [],
						e = []; if (!b) return null; var f = G([a, b.De], Ep), g = v(f, Fp); b.ba.D(["initToParent"], function (h) { g(d, b.children[h[1].counterId]) }).D(["parentConnect"], function (h) { g(e, b.Pb[h[1].counterId]) }); return { ba: b.ba, Nk: function (h, k) { return new K(function (l, m) { b.De(h, k, function (p, q) { l([p, q]) }); Y(a, v(Qa(), m), 5100, "is.o") }) }, ng: function (h) { var k = { qg: [], Oe: [], data: h }; d.push(k); return f(b.children, k, h) }, og: function (h) { var k = { qg: [], Oe: [], data: h }; e.push(k); return f(b.Pb, k, h) } }
					} function Fp(a, c, b) {
						c = X(function (d) {
							return !H(b.info.counterId,
								d.Oe)
						}, c); z(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c)
					} function Ep(a, c, b, d, e) { return (new K(function (f, g) { var h = ca(b), k = u(d.resolve ? d.resolve : Q, bd(f)), l = u(d.reject ? d.reject : Q, bd(g)); d.resolve = k; d.reject = l; z(function (m) { var p; d.Oe.push(m); var q = b[m], r = Y(a, v(Qa(), l), 5100, "is.m"); c(q.window, x(e, (p = {}, p.toCounter = Fa(m), p)), function (t, y) { ka(a, r); d.qg.push(m); d.resolve && d.resolve(y) }) }, h) }))["catch"](D(a, "if.b")) } function Gp(a, c) {
						var b = ud(a); c.D(["initToParent"], function (d) {
							var e =
								d[0]; d = d[1]; window.window && (b.children[d.counterId] = { info: d, window: e.source })
						}).D(["initToChild"], function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.O("parentConnect", [e, d]) }).D(["parentConnect"], function (d) { var e = d[1]; e.counterId && (b.Pb[e.counterId] = { info: e, window: d[0].source }) })
					} function Hp(a) {
						if (Aa("MutationObserver", a.MutationObserver)) {
							var c = ud(a).children, b = new a.MutationObserver(function () { z(function (d) { c[d].window.window || delete c[d] }, ca(c)) }); Yb(a)(Ua(B, function () {
								b.observe(a.document.body,
									{ subtree: !0, childList: !0 })
							}))
						}
					} function Ip(a, c) { return function (b, d) { var e, f = { oc: da(a)(Z), key: a.Math.random(), dir: 0 }; b.length && (f.oc = Fa(b[0]), f.key = parseFloat(b[1]), f.dir = Fa(b[2])); x(d, c); var g = (e = { data: d }, e.__yminfo = I(":", ["__yminfo", f.oc, f.key, f.dir]), e); return { Z: f, wg: jb(a, g) || "" } } } function Yb(a, c) { function b(e) { n(c, d) ? e() : Y(a, v(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return ua(function (e, f) { b(f) }) } function Zb(a) {
						var c = L(a), b = c.o("hitId"); b || (b = Va(a), c.C("hitId",
							b)); return b
					} function Da(a, c) { var b = L(a).o("counters", {}), d = P(c); return b[d] } function Nd(a, c, b) { void 0 === b && (b = null); a.Wa || (a.Wa = Mi()); c && a.Wa.Vb(c, b); return a.Wa } function Sf(a) { return { da: function (c, b) { var d = a.document, e = c.J; if (e && Tf(a)) { var f = ia(a), g = function (h) { Tf(a) || (f.Yb(d, Ni, g), b()); return h }; f.D(d, Ni, g); e.C("pr", "1") } else b() } } } function bb(a, c, b) {
						var d = de(a, c, b); return function (e, f) {
							var g, h = x({ J: za() }, e), k = h.G, l = h.J; k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g); "0" !== f.aa &&
								(k["cnt-class"] = f.aa); g = x(h, { G: x(h.G || {}, k) }); h = ""; if (g.J) { k = P(f); k = Oi(f)[k] || {}; var m = k.status; "rt" === k.Vc && m ? (1 === m && (h = Gh(a, f) + "."), g.J.C("rt", m)) : h = "" } x(g, { Ff: h }); return d(g, "watch/" + f.id, { jd: !(!l.o("pv") || l.o("ar") || l.o("wh")) })
						}
					} function de(a, c, b) { var d = Cb(a, c); return function (e, f, g) { void 0 === g && (g = {}); var h = Jp(a); e.Ff && (h = "" + e.Ff + h); f = [oa.Na + "//" + (h || tc) + "/" + f]; return Uf(a, b, e, !0).then(G([e, f, g], d)).then(function (k) { e.pj = k.Sb; return Uf(a, b, e).then(v(k.Sb, Q)) }) } } function Jp(a) {
						var c = tc, b = n(a,
							"document.referrer"); if (!b) return c; a = Ic(a, b).host; a = Vg(a); return c = Pi + "." + (a || Kp)
					} function Qi(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function Uf(a, c, b, d) { void 0 === d && (d = !1); return new K(function (e, f) { function g(l, m) { m(); e() } var h = c.slice(); h.push({ da: g, xa: g }); var k = rc(h, function (l, m) { var p = d ? l.da : l.xa; if (p) try { p(b, m) } catch (q) { k(Lp), f(q) } else m() }); k(Ri) }) } function Kb(a, c, b) {
						var d = b || "as"; if (a.postMessage && !a.attachEvent) {
							b = ia(a); var e = "__ym__promise_" +
								Va(a) + "_" + Va(a), f = B; d = D(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.D(a, ["message"], d); a.postMessage(e, "*")
						} else Y(a, c, 0, d)
					} function Rg(a, c, b, d, e) { void 0 === d && (d = 1); void 0 === e && (e = "itc"); c = rc(c, b); uc(a, c, d)(Ua(D(a, e), B)) } function uc(a, c, b, d) {
						void 0 === b && (b = 1); void 0 === d && (d = Si); Vf = Infinity === b; return ua(function (e, f) {
							function g() {
								try { var k = c(d(a, b)); h = h.concat(k) } catch (l) { return e(l) } c(Mp); if (c(vd)) return f(h), Ti(a); Vf ? (c(d(a, 1E4)),
									f(h), Ti(a)) : Y(a, g, 100)
							} var h = []; Np(g)
						})
					} function Ti(a) { if (Wf.length) { var c = Wf.shift(); Vf ? c() : Y(a, c, 100) } else Xf = !1 } function Np(a) { Xf ? Wf.push(a) : (Xf = !0, a()) } function mf(a) { return ua(function (c, b) { b(a) }) } function Fo(a) { return ua(function (c, b) { a.then(b, c) }) } function Op(a) { var c = [], b = 0; return ua(function (d, e) { z(function (f, g) { f(Ua(d, function (h) { try { c[g] = h, b += 1, b === a.length && e(c) } catch (k) { d(k) } })) }, a) }) } function Eo(a) {
						var c = [], b = !1; return ua(function (d, e) {
							function f(g) { c.push(g) === a.length && d(c) } z(function (g) {
								g(Ua(f,
									function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } }))
							}, a)
						})
					} function Ua(a, c) { return function (b) { return b(a, c) } } function rc(a, c) { void 0 === c && (c = Q); return ua({ Qa: a, Vd: c, Ie: !1, sa: 0 }) } function Ri(a) { function c() { function d() { b = !0; a.sa += 1 } b = !1; a.Vd(a.Qa[a.sa], function () { d() }); b || (a.sa += 1, d = C(Ri, null, a)) } for (var b = !0; !vd(a) && b;)c() } function Si(a, c) { return function (b) { var d = da(a), e = d(Z); return Ui(function (f, g) { d(Z) - e >= c && g(Vi) })(b) } } function ke(a, c) {
						return function (b) {
							var d = da(a), e = d(Z); return le(function (f) {
								d(Z) -
								e >= c && Vi(f)
							})(b)
						}
					} function le(a) { return function (c) { for (var b; c.Qa.length && !vd(c);)b = c.Qa.pop(), b = c.Vd(b, c.Qa), a(c); return b } } function Pp(a) { vd(a) && fb(zc("i")); var c = a.Vd(a.Qa[a.sa]); a.sa += 1; return c } function Mp(a) { a.Ie = !1 } function Vi(a) { a.Ie = !0 } function Lp(a) { a.sa = a.Qa.length } function vd(a) { return a.Ie || a.Qa.length <= a.sa } function Cb(a, c) { return function (b, d, e) { void 0 === e && (e = {}); return Wi(a, c, d, b, x(e, { oa: b.oa || [], ca: e.ca || b.ca })) } } function Wi(a, c, b, d, e, f, g) {
						var h; void 0 === f && (f = 0); void 0 === g && (g =
							0); var k = x({}, e), l = c[g], m = l[0]; l = l[1]; var p = x({}, d.G), q = da(a); d.J && (p["browser-info"] = za(d.J.l()).C("st", q(me)).Ca()); !p.t && (q = d.Wa) && (q.C("ti", m), p.t = q.Ca()); q = b[f]; k.Qb && k.Qb["Content-Type"] || !k.ca || (k.Qb = x({}, k.Qb, (h = {}, h["Content-Type"] = "application/x-www-form-urlencoded", h)), k.ca = "site-info=" + Od(k.ca)); k.Hg = k.ca ? "POST" : "GET"; k.Rb = p; k.oa.push(m); return l("" + q + (d.Ia && d.Ia.Ri ? "/1" : ""), k).then(function (r) { return { Sb: r, Uj: f } })["catch"](function (r) {
								var t = g + 1 >= c.length, y = f + 1 >= b.length; t && y && fb(r); return Wi(a,
									c, b, d, e, !y && t ? f + 1 : f, t ? 0 : g + 1)
							})
					} function df(a, c) { var b = c.Zd, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = ac(a), f = Pa(a), g = da(a), h = g(me), k = Xi(a, c), l = k[0]; k = k[1]; var m = e.o("d"); Yi(a, c); var p = !1; !k && l && (k = l, p = !0); if (!k) k = I("", [g(me), Va(a)]), p = !0; else if (!m || 15768E3 < h - Fa(m)) p = !0; p && !c.kb && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b)); f.C(d, k); return k } function Xi(a, c) { var b = Pa(a), d = ac(a), e = c.Zd || "uid"; return [b.o(e), d.o(e)] } function tb(a) { a = da(a); return Math.round(a(Yf) / 50) } function Yf(a) {
						var c = a.ua, b = c[1];
						a = c[0] && b ? b() : Z(a) - a.xi; return Math.round(a)
					} function me(a) { return Math.round(Z(a) / 1E3) } function ib(a) { return Math.floor(Z(a) / 1E3 / 60) } function Z(a) { var c = a.Qe; return 0 !== c ? c : Zf(a.l, a.ua) } function If(a) { var c = ia(a), b = Zi(a), d = { l: a, Qe: 0, ua: b, xi: Zf(a, b) }, e = b[1]; b[0] && e || c.D(a, ["beforeunload", "unload"], function () { 0 === d.Qe && (d.Qe = Zf(a, d.ua)) }); return ua(d) } function Qp(a) { return (10 > a ? "0" : "") + a } function cf(a, c, b) {
						void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d = "" + b + c + "_"; return {
							Sd: Rp(a), o: function (e, f) {
								var g =
									$i(a, "" + d + e); return Oa(g) && !W(f) ? f : g
							}, C: function (e, f) { aj(a, "" + d + e, f); return this }, pc: function (e) { bj(a, "" + d + e); return this }
						}
					} function aj(a, c, b) { var d = $f(a); a = jb(a, b); if (!Oa(a)) try { d.setItem(c, a) } catch (e) { } } function $i(a, c) { var b = $f(a); try { return Bb(a, b.getItem(c)) } catch (d) { } return null } function bj(a, c) { var b = $f(a); try { b.removeItem(c) } catch (d) { } } function $f(a) { try { return a.localStorage } catch (c) { } return null } function $h(a, c, b) {
						ag(a, "metrika_enabled", "1", 0, c, b, !0); var d = cj(a); (d = d && d.metrika_enabled) &&
							dj(a, "metrika_enabled", c, b, !0); return !!d
					} function ag(a, c, b, d, e, f, g) { void 0 === g && (g = !1); if (ai(a, Vd, c)) { var h = c + "=" + encodeURIComponent(b) + ";"; h += "" + Sp(a); if (d) { var k = new Date; k.setTime(k.getTime() + 6E4 * d); h += "expires=" + k.toUTCString() + ";" } e && (d = e.replace(Tp, ""), h += "domain=" + d + ";"); try { a.document.cookie = h + ("path=" + (f || "/")), g || (ej(a)[c] = b) } catch (l) { } } } function Vd(a, c) { var b = ej(a); return b ? b[c] || null : null } function cj(a) {
						try {
							var c = a.document.cookie; if (!la(c)) {
								var b = {}; z(function (d) {
									d = d.split("="); var e =
										d[1]; b[rb(d[0])] = rb(fj(e))
								}, (c || "").split(";")); return b
							}
						} catch (d) { } return null
					} function ai(a, c, b) { H(b, ["gdpr", "gdpr_popup", "metrika_enabled", "_ym_debug_build"]) ? a = !0 : (b = ee(a), b = Nf(b), a = c(a, "gdpr"), a = X(nc(Up), b).length ? !0 : H(a, [Lc, Vp])); return a } function Fi(a) { if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Lc; a = a.replace("GDPR-ok-view-detailed-", ""); return H(a, bc) ? a : Lc } function Ei(a, c, b) { void 0 === b && (b = Q); var d = dd(a); b(d); var e = v(d, Wp); ne(a, c, function (f) { f.ta.D(e) }); return d } function Wp(a,
						c) { var b = n(c, "ymetrikaEvent"); b && a.O(n(b, "type"), b) } function ne(a, c, b, d) { void 0 === b && (b = B); void 0 === d && (d = !1); var e = Yc(a); if (c && U(c.push)) { var f = c.push; c.push = function () { var g = Ba(arguments), h = g[0]; d && e.O(h); g = f.apply(c, g); d || e.O(h); return g }; a = { ta: e, unsubscribe: function () { c.push = f } }; b(a); z(e.O, c); return a } } function ee(a) { a = L(a); var c = a.o("dataLayer", []); a.C("dataLayer", c); return c } function gp(a, c) { var b, d; a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function th(a, c, b) {
							function d() {
								f = 0; g && (g =
									!1, f = Y(a, d, b), e.O(h))
							} var e = Yc(a), f, g = !1, h; c.D(function (k) { g = !0; h = k; f || d(); return B }); return e
						} function Xp(a, c) { return a.clearInterval(c) } function Yp(a, c, b, d) { return a.setInterval(D(a, "i.err." + (d || "def"), c), b) } function Y(a, c, b, d) { return oe(a, D(a, "d.err." + (d || "def"), c), b) } function dd(a) { var c = {}; return { D: function (b, d) { z(function (e) { n(c, e) || (c[e] = Yc(a)); c[e].D(d) }, b); return this }, fa: function (b, d) { z(function (e) { n(c, e) && c[e].fa(d) }, b); return this }, O: function (b, d) { return n(c, b) ? D(a, "e." + d, c[b].O)(d) : [] } } }
			function Yc(a) { var c = [], b = {}; b.Fk = c; b.D = u(ra("push", c), v(b, Q)); b.fa = u(Jb(Mb(a))(c), Jb(ra("splice", c))(1), v(b, Q)); b.O = u(Q, Jb(ya), Zp(c)); return b } function F(a, c, b) { return function () { return D(arguments[0], a, c, b).apply(this, arguments) } } function D(a, c, b, d, e) { var f = fb, g = b || f; return function () { var h = d; try { h = g.apply(e || null, arguments) } catch (k) { Zd(a, c, k) } return h } } function Zf(a, c) { var b = c || Zi(a), d = b[0]; b = b[1]; return !isNaN(d) && U(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function Zi(a) {
				a =
				Hi(a); var c = n(a, "timing.navigationStart"), b = n(a, "now"); b && (b = C(b, a)); return [c, b]
			} function Hi(a) { return n(a, "performance") || n(a, "webkitPerformance") } function Zd(a, c, b) {
				var d, e, f, g, h; if (!(.01 >= a.Math.random())) {
					var k = "u.a.e", l = ""; b && ("object" === typeof b ? (k = b.message, l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + b); if (!($p(k) || Na(u(ra("indexOf", k), ja(-1), Sb), aq) || bq(k) && .1 <= a.Math.random())) {
						c = (d = {}, d.jserrs = (e = {}, e[oa.Xa] = (f = {}, f[k] = (g = {}, g[c] = (h = {}, h[a.location.href] = l,
							h), g), f), e), d); a: { var m; d = oa.Na + "//" + tc + "/watch/" + oa.Ng; try { var p = ad(a, "er")[0]; var q = void 0 === p ? [] : p; var r = q[1]; var t = void 0 === r ? null : r } catch (y) { break a } p = (m = {}, m["browser-info"] = "ar:1:pv:1:v:" + oa.Xa + ":vf:" + Mc.version, m["page-url"] = a.location && "" + a.location.href, m); a = jb(a, c); if (t && a) t(d, { Rb: p, oa: [], ca: "site-info=" + Od(a) })["catch"](B) }
					}
				}
			} function Eb(a) { return A(function (c) { return !c || H(c, a) ? c : 0 }, dc) } function gj(a) { return !pd(a) && hj(a) } function bg(a) { return Ya(a) ? v(a, cq) : !1 } function hj(a) {
				var c = n(a,
					"navigator.sendBeacon"); return c && Aa("sendBeacon", c) ? G([a, C(c, n(a, "navigator"))], dq) : !1
			} function dq(a, c, b, d) { return new K(function (e, f) { if (!n(a, "navigator.onLine")) return f(); var g = x(d.Rb, { "force-urlencoded": 1 }); g = b + "?" + Wc(g) + (d.ca ? "&" + d.ca : ""); return 2E3 < g.length ? f(Qa("sb.tlq")) : c(g) ? e("") : f() }) } function cq(a, c, b) {
				return new K(function (d, e) {
					var f, g, h = "_ymjsp" + Va(a), k = x((f = {}, f.callback = h, f), b.Rb), l = G([a, h], eq); a[h] = function (p) { try { l(), kc(m), d(p) } catch (q) { e(q) } }; k.wmode = "5"; var m = Dc(a, (g = {}, g.src =
						ij(c, b, k), g)); if (!m) return l(), e(zc("jp.s")); f = v(m, kc); f = u(f, v(Qa(b.oa), e)); g = oe(a, f, b.vb || 1E4); g = G([a, g], ka); m.onload = g; m.onerror = u(l, g, f)
				})
			} function eq(a, c) { try { delete a[c] } catch (b) { a[c] = void 0 } } function wd(a) { var c = Ya(a); return c ? G([a, c], fq) : !1 } function fq(a, c, b, d) {
				return new K(function (e, f) {
					var g = Xb(a), h = c("img"), k = u(v(h, kc), v(Qa(d.oa), f)), l = oe(a, k, d.vb || 3E3); h.onerror = k; h.onload = u(v(h, kc), v(null, e), G([a, l], ka)); k = x({}, d.Rb); delete k.wmode; h.src = ij(b, d, k); sd(a) && (x(h.style, {
						position: "absolute",
						visibility: "hidden", width: "0px", height: "0px"
					}), g.appendChild(h))
				})
			} function eh(a, c, b) { var d = Ga(c); return d && ih(a, c, X(Boolean, ["p", gq[d], "c"]), dh, b) } function ch(a, c) { var b = Wb(cg, a, c); if (!b) { var d = Wb("div", a, c); d && (wb(cg + ",div", d).length || (b = d)) } return b } function ih(a, c, b, d, e) { return N(function (f, g) { var h = null; g in jj ? h = c.getAttribute && c.getAttribute(jj[g]) : g in Nc && (h = "p" === g ? Nc[g](a, c, e) : "c" === g ? Nc[g](a, c, d) : Nc[g](a, c)); h && (h = h.slice(0, kj[g] || 100), f[g] = dg[g] ? "" + lc(h) : h); return f }, {}, b) } function Th(a,
				c, b) { if (xd(a)) return na(b.querySelectorAll(c)); var d = lj(c.split(" "), b); return X(function (e, f) { return Mb(a)(e, d) === f }, d) } function lj(a, c) { var b = sa(a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ? jc(v(b, lj), na(d)) : na(d) } function Hc(a, c) { if (c.querySelector) return c.querySelector(a); var b = wb(a, c); return b && b.length ? b[0] : null } function wb(a, c) { if (!c) return []; var b = c.querySelectorAll(a); return b ? na(b) : [] } function si(a) {
					var c = null; try { c = a.target || a.srcElement } catch (b) { } if (c) {
						3 ===
						c.nodeType && (c = c.parentNode); for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));)a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase(); return c.href ? c : null
					} return null
				} function Dc(a, c) {
					var b = a.document, d = x({ type: "text/javascript", charset: "utf-8", async: !0 }, c), e = Ya(a); if (e) {
						var f = e("script"); mj(Ea, eb(function (l) { var m = l[0]; l = l[1]; "async" === m && l ? f.async = !0 : f[m] = l }))(d); try {
							var g = cc("getElementsByTagName",
								b), h = g("head")[0]; if (!h) { var k = g("html")[0]; h = e("head"); k && k.appendChild(h) } h.insertBefore(f, h.firstChild); return f
						} catch (l) { }
					}
				} function hq(a, c, b) { var d = nj(c); H(b, d.ob) || d.ob.push(b); if (Oa(d.eb)) { b = Ya(a); if (!b) return null; b = b("iframe"); x(b.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); b.src = c; a = Xb(a); if (!a) return null; a.appendChild(b); d.eb = b } else (a = n(d.eb, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.eb } function iq(a, c) {
					var b = ea(a) ? a : [a]; c = c || document; if (c.querySelectorAll) {
						var d =
							I(", ", A(function (e) { return "." + e }, b)); return na(c.querySelectorAll(d))
					} if (c.getElementsByClassName) return jc(u(ra("getElementsByClassName", c), na), b); d = c.getElementsByTagName("*"); b = "(" + I("|", b) + ")"; return X(v(b, qc), na(d))
				} function eg(a, c, b) { for (var d = "", e = bh(), f = Ga(c) || "*"; c && c.parentNode && !H(f, ["BODY", "HTML"]);)d += e[f] || "*", d += oj(a, c, b) || "", c = c.parentElement, f = Ga(c) || "*"; return rb(d, 128) } function oj(a, c, b) {
					if (a = pe(a, c)) {
						a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] &&
							a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) }
					} return 0
				} function pe(a, c) { var b = n(a, "document"); if (!c || c === b.documentElement) return null; if (c === vc(a)) return b.documentElement; b = null; try { b = c.parentNode } catch (d) { } return b } function uf(a, c) { var b = fg(a, c), d = b.left; b = b.top; var e = qe(a, c); return [d, b, e[0], e[1]] } function qe(a, c) {
					var b = n(a, "document"); if (c === vc(a) || c === b.documentElement) { b = Xb(a); var d = yd(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = ed(c)) ? [b.width,
					b.height] : [c.offsetWidth, c.offsetHeight]
				} function fg(a, c) { var b = c, d = n(a, "document"), e = Ga(b); if (!b || !b.ownerDocument || "PARAM" === e || b === vc(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = b.getBoundingClientRect && ed(b)) return b = Ef(a), { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e } } function Wb(a, c, b) {
					if (!(c && c.Element && c.Element.prototype && c.document && b)) return null; if (c.Element.prototype.closest && Aa("closest",
						c.Element.prototype.closest) && b.closest) return b.closest(a); var d = Zh(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (xd(c)) { for (a = na((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Mb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } return null
				} function xd(a) { return !(!Aa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll) } function pj(a) {
					return re(a) &&
						!Na(ja(a.type), jq) ? se(a) ? !a.checked : !a.value : kq(a) ? !a.value : lq(a) ? 0 > a.selectedIndex : !0
				} function Ga(a) { if (a) try { var c = a.nodeName; if (Ia(c)) return c; c = a.tagName; if (Ia(c)) return c } catch (b) { } } function qj(a, c) { var b = a.document.getElementsByTagName("form"); return Mb(a)(c, na(b)) } function mq(a, c, b) {
					b = cc("dispatchEvent", b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (Aa("(Event|Object|constructor)", e) || te(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) {
						if ((a = cc("createEvent",
							n(a, "document"))) && U(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) }
					} d && b(d)
				} function ed(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) { return "object" === typeof c && null !== c && 16389 === (c.Vf && c.Vf & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function Ef(a) {
					var c = vc(a), b = n(a, "document"); return {
						x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c &&
							c.scrollTop || 0
					}
				} function yd(a) { var c = gg(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = Xb(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight] } function gg(a) { var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return la(c) || la(b) ? null : [Math.floor(c), Math.floor(b), a] } function Xb(a) { var c = n(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : vc(a) || b } function vc(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } }
			function qc(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function wc(a) { var c; try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c } function kc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Tb(a) { return a ? a.innerText || "" : "" } function rf(a) { if (la(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function rb(a, c) {
				if (a) {
					var b = rj ? rj.call(a) : ("" + a).replace(Ai, ""); return c &&
						b.length > c ? b.substring(0, c) : b
				} return ""
			} function Ub(a) { var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) { a: { if (nq.test(a.location.host) && a.opera && U(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1 } c = !c } return c ? v(a, oq) : !1 } function oq(a, c, b) {
				var d, e = new a.XMLHttpRequest, f = b.ca, g = x(b.jd ? (d = {}, d.wmode = "7", d) : {}, b.Rb); return new K(function (h, k) {
					e.open(b.Hg || "GET", c + "?" + Wc(g), !0); e.withCredentials = !1 !== b.Jg; b.vb && (e.timeout =
						b.vb); mj(Ea, eb(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.Qb); var l = G([a, e, Qa(b.oa), b.jd, b.qj, h, k], pq); e.onreadystatechange = l; try { e.send(f) } catch (m) { }
				})
			} function pq(a, c, b, d, e, f, g, h) { if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(zc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50))); else { e = null; if (d) try { (e = Bb(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h } function ij(a, c, b) {
				(b = Wc(b)) && (a += "?" + b); c.ca && (a += (b ? "&" : "?") + c.ca);
				return a
			} function jb(a, c, b) { try { return a.JSON.stringify(c, null, b) } catch (d) { return null } } function Wc(a) { return a ? u(Ea, Zc(function (c, b) { var d = b[0], e = b[1]; W(e) || la(e) || c.push(d + "=" + Od(e)); return c }, []), $c("&"))(a) : "" } function qq(a) { return a ? u(eb(function (c) { c = c.split("="); var b = c[1]; return [c[0], la(b) ? void 0 : fj(b)] }), Zc(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {} } function fj(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function Od(a) {
				try { return encodeURIComponent(a) } catch (c) { } a =
					I("", X(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a)
			} function Se() { var a = Ba(arguments); return fb(Qa(a)) } function Qa(a) { var c = ""; ea(a) ? c = I(".", a) : Ia(a) && (c = a); return zc("err.kn(" + oa.Xa + ")" + c) } function rq(a) { this.message = a } function sj(a, c, b, d, e) { var f = a.addEventListener && a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b) } function T(a) {
				return N(function (c,
					b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, sq)
			} function Vg(a) { var c = a.match(tj); if (c) { a = c[1]; if (c = c[2]) return H(c, hg) ? c : !1; if (a) return hg[0] } return !1 } function Yk(a, c, b, d, e) { var f = "object" === typeof a ? a : { id: a, aa: d, hc: e, $: b }; a = N(function (g, h) { var k = h[1], l = k.Si; k = f[k.le]; g[h[0]] = l ? l(k) : k; return g }, {}, Ea(c)); uj(a, a.$ || {}); return a } function tq(a, c) { return N(function (b, d) { b[c[d[0]].le] = d[1]; return b }, {}, Ea(a)) } function vj(a) { a = P(a); return ec[a] && ec[a].Jj } function uj(a, c) {
				var b = P(a), d = n(c, "__ym.turbo_page"),
				e = n(c, "__ym.turbo_page_id"); ec[b] || (ec[b] = {}); if (d || e) ec[b].Jj = d, ec[b].Kj = e
			} function wj(a) { return ue(a) || ld(a) || /mobile/i.test(ub(a)) || !W(n(a, "orientation")) } function Tf(a) { return H("prerender", A(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Va(a, c, b) { var d = W(b); W(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function vm(a) { try { return parseInt(a, 10) } catch (c) { return null } } function Rd(a, c) {
				return a.isFinite(c) && !a.isNaN(c) && "[object Number]" ===
					ig(c)
			} function uq(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function $a(a, c) { z(u(Q, ra("push", a)), c); return a } function jg(a, c) { return Array.prototype.sort.call(c, a) } function na(a) { return a ? ea(a) ? a : ve ? ve(a) : "number" === typeof a.length && 0 <= a.length ? xj(a) : [] : [] } function kg(a, c, b) { return b ? a : c } function vq(a, c) { if (!td(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function wq(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function xq(a,
				c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] } function yj(a) { return W(a) ? [] : zd(function (c, b) { c.push([b, a[b]]); return c }, [], zj(a)) } function yq(a, c) { return zd(function (b, d, e) { d = a(d, e); return b.concat(ea(d) ? d : [d]) }, [], c) } function Aj(a, c) { return zd(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function zq() { var a = Ba(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) md(b, d) && (c[d] = b[d]); md(b, "toString") && (c.toString = b.toString) } return c } function zj(a) {
					var c = [],
					b; for (b in a) md(a, b) && c.push(b); return c
				} function Aq(a, c) { return 1 <= Bj(ja(a), c).length } function Bj(a, c) { return zd(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function ea(a) { if (Ad) return Ad(a); (Ad = Ja(Array.isArray, "isArray")) || (Ad = Bq); return Ad(a) } function Gf(a, c, b) { try { if (U(c)) { var d = Ba(arguments).slice(3); la(b) ? c.apply(void 0, d) : C.apply(void 0, sa([c, b], d))() } } catch (e) { oe(a, v(e, fb), 0) } } function fb(a) { throw a; } function oe(a, c, b) { return cc("setTimeout", a)(c, b) } function ka(a, c) {
					return cc("clearTimeout",
						a)(c)
				} function Ld() { return [] } function Oc() { return {} } function cc(a, c) { var b = n(c, a), d = n(c, "constructor.prototype." + a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d } function Fb(a, c) { return function () { var b = Ba(arguments), d = b[0]; b = b.slice(1); var e = L(d), f = e.o("m904", {}), g = n(f, a); g || (g = w(c), f[a] = g, e.C("m904", f)); return g.apply(void 0, sa([d], b)) } } function Ec(a, c) {
					void 0 === c && (c = {}); if (!a || 1 > a.length) return c; N(function (b, d, e) {
						if (e === a.length - 1) return b; e ===
							a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {}); return b[d]
					}, c, a); return c
				} function n(a, c) { return a ? N(function (b, d) { if (la(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function Nb(a) { a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return { Ka: function (b, d) { lg.call(c, b) || (c[b] = d); return this }, C: function (b, d) { c[b] = d; return this }, o: function (b, d) { var e = c[b]; return lg.call(c, b) || W(d) ? e : d } } } function md(a, c) { return la(a) ? !1 : lg.call(a, c) } function w(a, c) {
					var b = [], d = []; var e = c ? c : Q; return function () {
						var f =
							Ba(arguments), g = e.apply(void 0, f), h = Cj(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f
					}
				} function Mb(a) { if (mg) return mg; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b = a.Array && a.Array.prototype && Ja(a.Array.prototype.indexOf, "indexOf"); return mg = a = c && b ? function (d, e) { return b.call(e, d) } : Cq } function Cq(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function ya(a, c) { return c ? a(c) : a() } function u() {
					var a = Ba(arguments), c = a.shift(); return function () {
						var b =
							c.apply(void 0, arguments); return N(Dj, b, a)
					}
				} function Zc(a, c) { return G([a, c], N) } function Ta(a) { return ra("test", a) } function ra(a, c) { return C(c[a], c) } function v(a, c) { return G([a], c) } function G(a, c) { return C.apply(void 0, sa([c, null], a)) } function Dq() {
					var a = Ba(arguments), c = a[0], b = a[1], d = a.slice(2); return function () {
						var e = sa(d, Ba(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(c, sa([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Ej(f, e, b); delete b[f]; return e } return Ej(c,
							e)
					}
				} function Ej(a, c, b) { void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; U(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e](); return f } function qb(a) { return !Oa(a) && !W(a) && "[object Object]" === ig(a) } function la(a) { return W(a) || Oa(a) } function U(a) { return "function" === typeof a } function Jb(a) { return function (c) { return function (b) { return a(b, c) } } } function ha(a) { return function (c) { return function (b) { return a(c, b) } } }
			function Dj(a, c) { return c(a) } function Eq(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function Po(a) { return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(We, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}") } function mc(a, c) { return !(!a || -1 === Xe(a, c)) } function Xe(a, c) {
				if (Fj) var b = Fj.call(a, c); else a: {
					b = 0; for (var d =
						a.length - c.length, e = 0; e < a.length; e += 1) { b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) { b = e - c.length + 1; break a } if (!b && e > d) break } b = -1
				} return b
			} function Ia(a) { return "string" === typeof a } function ig(a) { return Object.prototype.toString.call(a) } function Ba(a) { if (ve) try { return ve(a) } catch (c) { } return xj(a) } function xj(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function ng(a, c) {
				ng = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) {
					for (var e in d) d.hasOwnProperty(e) &&
						(b[e] = d[e])
				}; return ng(a, c)
			} function zd(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function Ja(a, c) { return Aa(c, a) && a } function Aa(a, c) { var b = we(a, c); c && !b && og.push([a, c]); return b } function we(a, c) { if (!c || "function" !== typeof c) return !1; try { var b = "" + c } catch (h) { return !1 } var d = b.length; if (d > 35 + a.length) return !1; for (var e = d - 13, f = 0, g = 8; g < d; g += 1) { f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0; if (12 === f) return !0; if (!f && g > e) break } return !1 } function B() { } function Sb(a) { return !a } function xb(a,
				c) { return c } function Q(a) { return a } function Ha(a, c) { function b() { this.constructor = a } ng(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } function sa() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function lc(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function Fq() { } function Gq(a,
					c) { return function () { a.apply(c, arguments) } } function Ca(a) { if (!(this instanceof Ca)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof a) throw new TypeError("not a function"); this.Da = 0; this.Ve = !1; this.Ma = void 0; this.yb = []; Gj(a, this) } function Hj(a, c) { for (; 3 === a.Da;)a = a.Ma; 0 === a.Da ? a.yb.push(c) : (a.Ve = !0, Ca.We(function () { var b = 1 === a.Da ? c.Yi : c.bj; if (null === b) (1 === a.Da ? pg : Bd)(c.Ta, a.Ma); else { try { var d = b(a.Ma) } catch (e) { Bd(c.Ta, e); return } pg(c.Ta, d) } })) } function pg(a, c) {
						try {
							if (c ===
								a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) { var b = c.then; if (c instanceof Ca) { a.Da = 3; a.Ma = c; qg(a); return } if ("function" === typeof b) { Gj(Gq(b, c), a); return } } a.Da = 1; a.Ma = c; qg(a)
						} catch (d) { Bd(a, d) }
					} function Bd(a, c) { a.Da = 2; a.Ma = c; qg(a) } function qg(a) { 2 === a.Da && 0 === a.yb.length && Ca.We(function () { a.Ve || Ca.Xg(a.Ma) }); for (var c = 0, b = a.yb.length; c < b; c++)Hj(a, a.yb[c]); a.yb = null } function Hq(a, c, b) {
						this.Yi = "function" === typeof a ? a : null; this.bj =
							"function" === typeof c ? c : null; this.Ta = b
					} function Gj(a, c) { var b = !1; try { a(function (d) { b || (b = !0, pg(c, d)) }, function (d) { b || (b = !0, Bd(c, d)) }) } catch (d) { b || (b = !0, Bd(c, d)) } } function Bb(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function dj(a, c, b, d, e) { void 0 === e && (e = !1); return ag(a, c, "", -100, b, d, e) } function Fc(a, c, b) {
						void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = Iq(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return {
							pc: function (g, h, k) { dj(a, "" + c + g + f, h || e, k); return this },
							o: function (g) { return Vd(a, "" + c + g + f) }, C: function (g, h, k, l, m) { ag(a, "" + c + g + f, h, k, l || e, m); return this }
						}
					} function Ic(a, c) { var b = Jq(a); return b ? (b.href = c, { protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href }) : {} } function lb(a, c) {
						a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>>
							16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
					} function fc(a, c) {
						a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] +=
							a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
					} function Pc(a, c) { c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c] } function hb(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function pa(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function Ij(a) {
						a = pa(a, [0, a[0] >>> 1]); a = lb(a, [4283543511, 3981806797]);
						a = pa(a, [0, a[0] >>> 1]); a = lb(a, [3301882366, 444984403]); return a = pa(a, [0, a[0] >>> 1])
					} function Kq(a, c) {
						void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { R: [0, d], T: [0, d] }; for (var f = 0; f < e; f += 16) {
							var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) <<
								16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = lb(h, xe); h = Pc(h, 31); h = lb(h, ye); g.R = pa(g.R, h); g.R = Pc(g.R, 27); g.R = fc(g.R, g.T); g.R = fc(lb(g.R, [0, 5]), [0, 1390208809]); k = lb(k, ye); k = Pc(k, 33); k = lb(k, xe); g.T = pa(g.T, k); g.T = Pc(g.T, 31); g.T = fc(g.T, g.R); g.T = fc(lb(g.T, [0, 5]), [0, 944331445])
						} e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
							case 15: h = pa(h, hb([0, b.charCodeAt(f + 14)], 48)); case 14: h = pa(h, hb([0, b.charCodeAt(f +
								13)], 40)); case 13: h = pa(h, hb([0, b.charCodeAt(f + 12)], 32)); case 12: h = pa(h, hb([0, b.charCodeAt(f + 11)], 24)); case 11: h = pa(h, hb([0, b.charCodeAt(f + 10)], 16)); case 10: h = pa(h, hb([0, b.charCodeAt(f + 9)], 8)); case 9: h = pa(h, [0, b.charCodeAt(f + 8)]), h = lb(h, ye), h = Pc(h, 33), h = lb(h, xe), d.T = pa(d.T, h); case 8: g = pa(g, hb([0, b.charCodeAt(f + 7)], 56)); case 7: g = pa(g, hb([0, b.charCodeAt(f + 6)], 48)); case 6: g = pa(g, hb([0, b.charCodeAt(f + 5)], 40)); case 5: g = pa(g, hb([0, b.charCodeAt(f + 4)], 32)); case 4: g = pa(g, hb([0, b.charCodeAt(f + 3)], 24)); case 3: g =
									pa(g, hb([0, b.charCodeAt(f + 2)], 16)); case 2: g = pa(g, hb([0, b.charCodeAt(f + 1)], 8)); case 1: g = pa(g, [0, b.charCodeAt(f)]), g = lb(g, xe), g = Pc(g, 31), g = lb(g, ye), d.R = pa(d.R, g)
						}d.R = pa(d.R, [0, b.length]); d.T = pa(d.T, [0, b.length]); d.R = fc(d.R, d.T); d.T = fc(d.T, d.R); d.R = Ij(d.R); d.T = Ij(d.T); d.R = fc(d.R, d.T); d.T = fc(d.T, d.R); return ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
					} function Jj(a) {
						return (a =
							T(a).hash.split("#")[1]) ? a.split("?")[0] : ""
					} function Lq(a, c) { var b = Jj(a); Kj = Yp(a, function () { var d = Jj(a); d !== b && (c(), b = d) }, 200, "t.h"); return C(Xp, null, a, Kj) } function Mq(a, c, b) { var d, e, f = c.aa, g = c.Se, h = c.wc, k = L(a), l = za((d = {}, d.wh = "1", d.pv = "1", d)); rg(f) && a.Wg && a.Wg.ck && l.C("ad", "1"); g && l.C("ut", "1"); f = k.o("lastReferrer"); d = T(a).href; h = { G: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e), J: l }; b(h, c)["catch"](D(a, "g.s")); k.C("lastReferrer", d) } function Nq(a, c, b) {
						function d() { sg[t] = !0; f(!1); c() } function e() {
							ka(a,
								ze[t]); if (sg[t]) f(!1); else { var E = Math.max(0, b - (m ? p : p + h(Z) - q)); E ? ze[t] = Y(a, d, E, "u.t.d.c") : d() }
						} function f(E) { z(function (M) { var O = M[0], wa = M[1]; M = M[2]; E ? r.D(O, wa, M) : r.Yb(O, wa, M) }, y) } var g = v(!1, f); if (te(a)) return { id: Y(a, c, b, "u.t.d"), gf: g }; var h = da(a), k = !1, l = !1, m = !0, p = 0, q = h(Z), r = ia(a), t = Lj; Lj += 1; ze[t] = 0; var y = [[a, ["blur"], function () { m = k = l = !0; p += h(Z) - q; q = h(Z); e() }], [a, ["focus"], function () { k || l || (p = 0); q = h(Z); k = l = !0; m = !1; e() }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () {
							l || (k = !0, m = !1,
								l = !0, e())
						}]]; f(!0); e(); return { id: t, gf: g }
					} function Id(a, c, b, d) { return function () { if (Da(a, c)) { var e = Ba(arguments); return d.apply(void 0, e) } } } function Zk(a, c, b, d) { var e = Oq[b]; return e ? function () { var f = Ba(arguments); try { var g = d.apply(void 0, f); var h = L(a); h.Ka("mt", {}); var k = h.o("mt"), l = k[e]; k[e] = l ? l + 1 : 1 } catch (m) { fb(m) } return g } : d } function Cd(a, c, b) { var d = c.getAttribute("itemtype"); b = wb('[itemprop~="' + b + '"]', c); return d ? X(function (e) { return e.parentNode && Wb("[itemtype]", a, e.parentNode) === c }, b) : b } function cb(a,
						c, b) { return (a = Cd(a, c, b)) && a.length ? a[0] : null } function Wa(a) { if (!a) return ""; a = ea(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || Tb(a[0]) : "" } function Mj(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Wa(a) : "" } function id(a, c, b) { a = c && (mc(c.className, "ym-disable-keys") || mc(c.className, "-metrika-nokeys")); return b && c ? a || !!iq(["ym-disable-keys", "-metrika-nokeys"], c).length : a } function pf(a, c) {
							return re(c) ? "password" === c.type || c.name && H(c.name.toLowerCase(), Nj) || c.id &&
								H(c.id.toLowerCase(), Nj) : !1
						} function Oj(a, c) { var b = Math.max(0, Math.min(c, 65535)); $a(a, [b >> 8, b & 255]) } function Pb(a, c) { $a(a, [c & 255]) } function gb(a, c, b) { return -1 !== Mb(a)(b, Pq) ? (Pb(c, b), !1) : !0 } function S(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)$a(a, [b & 127 | 128]), b >>= 7; $a(a, [b]) } function tg(a, c) { S(a, c.length); for (var b = 0; b < c.length; b += 1)S(a, c.charCodeAt(b)) } function ug(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)Oj(a, b.charCodeAt(d)) } function Qq(a, c) {
							var b =
								[]; if (gb(a, b, 27)) return []; S(b, c); return b
						} function Rq(a, c) {
							var b = Ga(c); if (!b) return c[Ra] = -1, null; var d = +c[Ra]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.jk) return null; e = e.parentElement } e = 64; var f = pe(a, c), g = f && f[Ra] ? f[Ra] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = Sq()[b]; h || (e |= 2); var k = oj(a, c); k || (e |= 4); var l = uf(a, c); (f = f ? uf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); pc[d].Xf = l[0] + "x" + l[1]; pc[d].size = l[2] + "x" + l[3]; c.id && "string" ===
								typeof c.id && (e |= 32); f = []; if (gb(a, f, 1)) return null; S(f, d); Pb(f, e); S(f, g); h ? Pb(f, h) : ug(f, b); k && S(f, k); e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3])); e & 32 && ug(f, c.id); Pb(f, 0); return f
						} function Tq(a, c) {
							var b = c[Ra]; if (!b || 0 > b || !sf(c) || !c.form || Yh(a, c.form)) return []; var d = qj(a, c.form); if (0 > d) return []; if (re(c)) { var e = { text: 0, color: 0, oc: 0, rk: 0, "datetime-local": 0, email: 0, Vf: 0, Mk: 0, search: 0, Pk: 0, time: 0, url: 0, month: 0, Rk: 0, password: 2, Lk: 3, nk: 4, file: 6, image: 7 }; e = e[c.type] } else {
								e = { gk: 1, hk: 5 }; var f = Ga(c); e = W(f) ?
									"" : e[f]
							} if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if (gb(a, g, 7)) return []; S(g, b); S(g, d); S(g, e); tg(g, c.name || ""); S(g, f); return g
						} function Uq(a, c, b) { var d = qj(a, b); if (0 > d) return []; var e = b.elements, f = e.length; b = []; for (var g = 0; g < f; g += 1)if (!pj(e[g])) { var h = e[g][Ra]; h && 0 < h && b.push(h) } e = []; if (gb(a, e, 11)) return []; S(e, c); S(e, d); S(e, b.length); for (a = 0; a < b.length; a += 1)S(e, b[a]); return e } function oc(a,
							c, b) { void 0 === b && (b = []); for (var d = []; c && !ln(a, c, b); c = pe(a, c))d.push(c); z(function (e) { pc.ud += 1; var f = pc.ud; e[Ra] = f; pc[f] = {}; f = Rq(a, e); e = Tq(a, e); f && e && ($a(b, f), $a(b, e)) }, Vq(d)); return b } function Wq(a) { var c = a.ma; if (!hd || c && !c.fromElement) return Wh(a) } function Xq(a) { var c = a.ma; if (c && !c.toElement) return tf(a) } function Pj(a) { var c = wc(a.ma); if (c && Ud(c)) { var b = Vh(a, c); var d = tb(a.l), e = []; gb(a.l, e, 17) ? a = [] : (S(e, d), S(e, c[Ra]), a = e); return sa(b, a) } } function Qj(a) {
								var c = a.l, b = a.ma.target; if (b && Ud(b)) {
									c = oc(c, b);
									var d = tb(a.l), e = []; gb(a.l, e, 18) ? a = [] : (S(e, d), S(e, b[Ra]), a = e); return sa(c, a)
								}
							} function Rj(a) { var c = a.l, b = wc(a.ma); if (!b || pf(c, b) || id(c, b)) return []; if (sf(b)) { var d = L(c).o("isEU"), e = gd(c, b, d), f = e.mb; d = e.Td; e = e.Dd; if (se(b)) var g = b.checked; else g = b.value, g = f ? I("", Sj(g.split(""))) : g; c = oc(c, b); f = tb(a.l); d = d && !e; e = []; gb(a.l, e, 39) ? a = [] : (S(e, f), S(e, b[Ra]), ug(e, String(g)), Pb(e, d ? 1 : 0), a = e); return sa(c, a) } } function Ae(a) {
								var c = a.l, b = a.ma, d = wc(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = v(e, $a); d && Ud(d) ?
									f(Vh(a, d)) : f(oc(c, d)); var g = ri(c, b); a = tb(a.l); f = b.type; var h = [g.x, g.y]; g = b.which; b = b.button; var k; var l = qe(c, d); var m = l[0]; for (l = l[1]; d && (!m || !l);)if (d = pe(c, d)) l = qe(c, d), m = l[0], l = l[1]; d ? (m = d[Ra], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = fg(c, d), gb(c, k, l) ? c = [] : (S(k, a), S(k, m), S(k, Math.max(0, h[0] - d.left)), S(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Pb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = []; return sa(e,
										c)
							} function Yq(a) {
								var c = null, b = a.l, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Oa(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try { for (; c && 1 !== c.nodeType;)c = c.parentNode } catch (g) { return [] } if (!c) return []; d = gd(b, c).mb || id(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = gd(b, d).mb || id(b, d, !0), f += 1; if (e !== vg) return vg =
									e, d = d ? I("", Sj(e.split(""))) : e, e = tb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], gb(a.l, c, 29) ? a = [] : (S(c, e), tg(c, b), tg(c, d), a = c), a
							} function Zq(a) { return sa(Ae(a), Yq(a) || []) } function Tj(a) { return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0) } function Uj(a) { var c = []; wg || (wg = !0, vg && c.push.apply(c, Qq(a.l, tb(a.l))), Kb(a.l, function () { wg = !1 }, "fv.c")); return c } function Vj(a,
								c, b, d) { var e = wc(c); if (!e || wf(a, e)) return []; var f = Td(e), g = vf(e); c = gd(a, e).mb; var h = L(a); if (!f && (g && h.o("isEU") || id(a, e))) a = []; else { f = oc(a, e); h = tb(a); g = []; if (gb(a, g, 38)) a = []; else { S(g, h); Oj(g, b); Pb(g, d); a = e[Ra]; if (!a || 0 > a) a = 0; S(g, a); Pb(g, c ? 1 : 0); a = g } a = sa(f, a) } return a } function $q(a) {
									var c = a.l, b = a.ma, d = b.keyCode, e = Tj(b), f = [], g = v(f, $a); if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <=
										d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(Vj(c, b, d, e | 16)), xg = !1, Kb(c, function () { xg = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(Uj(a)); return f
								} function ar(a) { var c = a.l; a = a.ma; var b = []; xg && !yg && 0 !== a.which && (b.push.apply(b, Vj(c, a, a.charCode || a.keyCode, Tj(a))), yg = !0, Kb(c, function () { yg = !1 }, "fv.kp")); return b } function Wj(a) {
									var c = a.l, b = wc(a.ma); if (!b || Yh(c, b)) return []; var d = []; if ("FORM" === b.nodeName) {
										for (var e = b.elements, f = 0; f < e.length; f += 1)pj(e[f]) || d.push.apply(d, oc(c, e[f])); d.push.apply(d, Uq(c, tb(a.l),
											b))
									} return d
								} function br(a) { var c = a.flush; a = wc(a.ma); "BODY" === Ga(a) && c() } function zm(a, c) { var b, d = wc(c), e = oa.Db, f = Nb(a); if (d && qc("ym-advanced-informer", d)) { var g = f.o("ifc", 0) + 1; f.C("ifc", g); g = d.getAttribute("data-lang"); var h = Fa(d.getAttribute("data-cid") || ""); if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1 } } function Qg(a, c, b, d) {
									return function () {
										var e = Da(a, c), f = Ba(arguments); d.apply(void 0,
											f); return e
									}
								} function Pg(a, c, b, d) { return D(a, "cm." + b, d) } function Xk(a, c, b, d, e) { return b.length && e ? G(N(function (f, g, h) { return b[h] ? f.concat(G([a, c, d], g)) : f }, [], b), u)()(e) : e } var Mc = { construct: "Metrika2", callbackPostfix: "2", version: "at6op7b9z7b01ildsv2t4", host: "mc.yandex.ru" }, og = [], ve = Ja(Array.from, "from"), We = /\./g, Fj = Ja(String.prototype.indexOf, "indexOf"), Xj = Ja(Array.prototype.join, "join"), I = Xj ? function (a, c) { return Xj.call(c, a) } : Eq, ja = ha(function (a, c) { return a === c }), bd = ha(function (a, c) { a(c); return c }),
									$c = ha(I), ua = ha(Dj), Oa = ja(null), W = ja(void 0), Yj = Ja(Function.prototype.bind, "bind"), C = Yj ? function () { var a = Ba(arguments); return Yj.apply(a[0], sa([a[1]], a.slice(2))) } : Dq, xi = ha(G), im = ha(ra), Zj = Ja(Array.prototype.reduce, "reduce"), N = Zj ? function (a, c, b) { return Zj.call(b, a, c) } : zd, mj = u, cr = u(Q, ya), mg, Cj = Mb(window), dr = Jb(Cj), lg = Object.prototype.hasOwnProperty, L = w(Nb), V = Jb(n), La = V("length"), kf = Array.prototype.every ? function (a, c) { return Array.prototype.every.call(c, a) } : function (a, c) {
										return N(function (b, d) {
											return b ?
												a(d) : !1
										}, !0, c)
									}, Ad, Bq = u(ig, ja("[object Array]")), er = u(yj, v(V("1"), Aj)), ak = Ja(Array.prototype.filter, "filter"), X = ak ? function (a, c) { return ak.call(c, a) } : Bj, Cc = ha(X), Za = Aa("find", Array.prototype.find) ? function (a, c) { return Array.prototype.find.call(c, a) } : xq, H = Array.prototype.includes ? function (a, c) { return Array.prototype.includes.call(c, a) } : Aq, nc = Jb(H), bk = w(function (a) { a = n(a, "navigator") || {}; var c = n(a, "userAgent") || ""; return { Jf: -1 < (n(a, "vendor") || "").indexOf("Apple"), Gg: c } }), td = w(function (a) {
										var c = n(a,
											"document.documentElement.style"); a = n(a, "InstallTrigger"); return !(!(c && "MozAppearance" in c) || la(a))
									}), ck = Ja(Array.prototype.map, "map"), A = ck && vq(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? ck.call(c, a) : [] } : Aj, z = A, jc = Array.prototype.flatMap ? function (a, c) { return Array.prototype.flatMap.call(c, a) } : yq, eb = ha(A), Zp = Jb(A), Na = kg(function (a, c) { return Array.prototype.some.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 }, Aa("some", Array.prototype.some)),
									Be = w(Mb), Kc = V("0"), fr = ha(jg), dk = Ja(Array.prototype.reverse, "reverse"), Vq = dk ? function (a) { return dk.call(a) } : uq, ek = Jb(parseInt), Fa = ek(10), zg = ek(2), Ea = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : yj, ca = Object.keys ? Object.keys : zj, gr = Object.values ? Object.values : er, x = Object.assign || zq, Uh = ha(function (a, c) { return x({}, a, c) }), Xc = w(u(V("String.fromCharCode"), v("fromCharCode", Aa), Sb)), ub = w(V("navigator.userAgent")), ue = w(u(ub, Ta(/ipad|iphone|ipod/i))), Df = w(function (a) {
										return n(a, "navigator.platform") ||
											""
									}), hr = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "), Lf = w(function (a) { var c = bk(a); a = c.Jf; c = c.Gg; var b = ra("indexOf", c); b = Na(u(b, ja(-1), Sb), hr); var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/; return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b) }), sd = w(function (a) { a = bk(a); var c = a.Gg; return a.Jf && !c.match("CriOS") }), ir = Ta(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
									jr = Ta(/; wv\)/), pd = w(function (a) { a = ub(a); return jr(a) || ir(a) }), kr = /Chrome\/(\d+)\./, lr = w(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(kr)) && a.length ? 76 <= Fa(a[1]) : !1 }), ld = w(function (a) { var c = (ub(a) || "").toLowerCase(); a = Df(a); return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a)) }), mr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), nr = w(function (a) {
										var c = n(a, "navigator.connection.type"); if (W(c)) return null; a = Be(a)(c,
											mr); return -1 === a ? c : "" + a
									}), te = w(u(V("document.addEventListener"), Sb)), fk = w(function (a) { var c = n(a, "navigator") || {}; return N(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), Bi = w(function (a) { var c = n(a, "navigator") || {}; a = fk(a); Ia(a) || (a = "", c = n(c, "languages.0"), Ia(c) && (a = c)); return a.toLowerCase().split("-")[0] }), Ob = w(function (a) { var c = !1; try { c = a.top !== a } catch (b) { } return c }), or = w(function (a) { var c = !1; try { c = a.top.contentWindow } catch (b) { } return c }), pr =
										w(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }), qr = w(function (a) {
											var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum"); var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"];
											return !!(Na(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Na(v(n(a, "document"), n), c) || b || d && Na(C(d.getAttribute, d), e))
										}), rr = w(function (a) { return !!(Na(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ub(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), sr = w(function (a) { return kf(v(a, n), ["ia_document.shareURL", "ia_document.referrer"]) }), tr = w(function (a) {
											a = n(a, "navigator.plugins"); return !!(a && La(a) && Na(u(V("name"), Ta(/Chrome PDF Viewer/)),
												a))
										}), ur = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), fp = w(u(V("navigator.userAgent"), Ta(ur))), Ce = w(function (a) {
											var c = ub(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <=
												(c ? +c[1] : 0) ? !0 : (ue(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && sd(a)
										}), vr = Mc.construct, tc = Mc.host, Ag = te(window), oa = { Tg: 24226447, Ng: 26302566, Vg: 51533966, dk: 65446441, Na: "https:", Xa: "904", Db: vr, Sg: Ag ? 512 : 2048, Qg: Ag ? 512 : 2048, Rg: Ag ? 100 : 400, ek: 100, fk: "noindex" }, ec = {}, P = w(function (a) { return a.id + ":" + a.aa }), rg = ja("1"), gk = ha(function (a, c) { var b = c || {}; return { l: v(b, Q), o: function (d, e) { var f = b[d]; return W(f) && !W(e) ? e : f }, C: function (d, e) { b[d] = e; return this }, Vb: function (d, e) { return "" === e || la(e) ? this : this.C(d, e) }, Ca: v(b, a) } }),
									za = gk(function (a) { var c = ""; a = N(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], Ea(a)); c && a.push(c); return I(":", a) }), sq = "hash host hostname href pathname port protocol search".split(" "), hg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "), tj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, $o = w(function (a) { a = T(a).hostname.split("."); return a[a.length - 1] }), hk = w(function (a) { return -1 !== T(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }),
									ae = w(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), wr = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/, ge = w(function (a) { a = T(a).hostname; var c = !1; a && (c = -1 !== a.search(wr)); return c }), xr = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, Co = w(function (a) {
										a = T(a).hostname;
										var c = !1; a && (c = -1 !== a.search(xr)); return c
									}), yr = w(function (a) { a = T(a).hostname; var c = !1; a && (c = -1 !== a.search(tj)); return c }), ik = u(T, V("protocol"), ja("https:")), Sp = w(function (a) { return lr(a) && ik(a) ? "SameSite=None;Secure;" : "" }), zr = w(function (a) { var c = !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", B, b) } catch (d) { } return c }), Ar = ha(function (a, c) { return a ? x({ capture: !0, passive: !0 }, c || {}) : !!c }), ia = w(function (a) {
										a = zr(a);
										var c = Ar(a), b = {}; return x(b, { D: function (d, e, f, g) { z(function (h) { var k = c(g); sj(d, h, f, k, !1) }, e); return C(b.Yb, b, d, e, f, g) }, Yb: function (d, e, f, g) { z(function (h) { var k = c(g); sj(d, h, f, k, !0) }, e) } })
									}), Br = setTimeout; Ca.prototype["catch"] = function (a) { return this.then(null, a) }; Ca.prototype.then = function (a, c) { var b = new this.constructor(Fq); Hj(this, new Hq(a, c, b)); return b }; Ca.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) };
			Ca.all = function (a) { return new Ca(function (c, b) { function d(h, k) { try { if (k && ("object" === typeof k || "function" === typeof k)) { var l = k.then; if ("function" === typeof l) { l.call(k, function (m) { d(h, m) }, b); return } } e[h] = k; 0 === --f && c(e) } catch (m) { b(m) } } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array")); var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g]) }) }; Ca.resolve = function (a) {
				return a && "object" === typeof a && a.constructor ===
					Ca ? a : new Ca(function (c) { c(a) })
			}; Ca.reject = function (a) { return new Ca(function (c, b) { b(a) }) }; Ca.race = function (a) { return new Ca(function (c, b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)Ca.resolve(a[d]).then(c, b) }) }; Ca.We = "function" === typeof setImmediate && function (a) { setImmediate(a) } || function (a) { Br(a, 0) }; Ca.Xg = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var K =
				window.Promise, Cr = Ja(K, "Promise"), jk = Ja(n(K, "resolve"), "resolve"), kk = Ja(n(K, "reject"), "reject"), lk = Ja(n(K, "all"), "all"); if (H(!1, [Cr, jk, kk, lk])) K = Ca; else { var De = function (a) { return new Promise(a) }; De.resolve = C(jk, K); De.reject = C(kk, K); De.all = C(lk, K); K = De } var aq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Dd, zc = function (a) { return function (c) { if (Dd) return new Dd(c); if (Aa("Error", a.Error)) return Dd = a.Error, new a.Error(c); Dd = rq; return new Dd(c) } }(window),
					bq = Ta(/^http./), $p = Ta(/^err.kn/), nq = /[^a-z0-9.:-]/, Ai = /^\s+|\s+$/g, rj = Ja(String.prototype.trim, "trim"), mk = ha(function (a, c) { return c.replace(a, "") }), wh = mk(/\s/g), Lb = mk(/\D/g), Dr = w(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }), Ya = w(u(V("document"), v("createElement", cc))), Zh = w(function (a) {
						var c = n(a, "Element.prototype"); return c ? (a = Za(function (b) { return Aa(b, c[b]) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ?
							c[a] : null : null
					}), Er = ja("INPUT"), re = u(Ga, Er), Fr = ja("TEXTAREA"), kq = u(Ga, Fr), Gr = ja("SELECT"), lq = u(Ga, Gr), se = u(V("type"), Ta(/^(checkbox|radio)$/)), sf = u(Ga, Ta(/^INPUT|SELECT|TEXTAREA$/)), Ud = u(Ga, Ta(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), xf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), jq = ["submit", "image", "hidden"], nk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
					bh = w(function () { for (var a = 59, c = {}, b = 0; b < nk.length; b += 1)c[nk[b]] = String.fromCharCode(a), a += 1; return c }), nj = w(function (a) { return { xk: a, eb: null, ob: [] } }), kj = {}, dg = {}; kj.p = 500; var jj = { i: "id", n: "name", h: "href", ty: "type" }; dg.h = !0; dg.c = !0; var Nc = {}; Nc.p = eg; Nc.c = function (a, c, b) { (a = rb(n(c, "textContent"))) && b && (b = b(c), b.length && Na(u(V("textContent"), rb, ja(a)), b) && (a = "")); re(c) && (a = rb(c.getAttribute && c.getAttribute("value") || a)); return a }; var Qc, cg = "button," + A(function (a) { return 'input[type="' + a + '"]' }, ["button",
						"submit", "reset", "file"]).join(",") + ",a", dh = v(cg, wb), gq = (Qc = {}, Qc.A = "h", Qc.BUTTON = "i", Qc.DIV = "i", Qc.INPUT = "ty", Qc), Ee, dc = []; dc.push(gj, 0, Ub, bg, wd); var ok = [Ub]; ok.push(bg); var pk = Eb(ok), Rc = Eb([wd]), Hr = Eb([gj, wd]), Fe = Eb([0, Ub, bg, wd]), qa = {}; x(qa, (Ee = {}, Ee.h = pk, Ee.er = Rc, Ee)); qa.pi = Rc; qa.m = Hr; qa["2"] = dc; qa.t = dc; qa.a = Fe; qa.n = dc; qa.r = Fe; qa["1"] = Fe; qa.g = Fe; qa.c = Rc; var ad = w(function (a, c) { var b; (b = c ? qa[c] : dc) || (b = []); b = N(function (d, e, f) { (e = e && e(a)) && d.push([f, e]); return d }, [], b); b.length || Se(); return b }, xb),
							Ir = nc([26812653]), Hf = w(u(V("id"), Ir), P), bc = ["0", "1", "2", "3"], Lc = bc[0], Kf = bc[1], Vp = bc[2], Of = A(u(Q, ra("concat", "GDPR-ok-view-detailed-")), bc), fe = sa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Of, ["28", "29", "30"]), Up = "3 13 14 15 16 17 28".split(" "), Nf = u(eb(V("ymetrikaEvent.type")), Cc(nc(fe))), ej = Fb("gsc", cj), Tp = /:\d+$/, Iq = w(function (a) {
								var c = (T(a).host || "").split("."); return 1 === c.length ? c[0] : N(function (b,
									d, e) { e += 1; 2 <= e && !b && (e = I(".", c.slice(-e)), $h(a, e) && (b = e)); return b }, "", c)
							}), ac = w(Fc), Rp = w(function (a) { aj(a, "_ymBRC", "1"); var c = "1" !== $i(a, "_ymBRC"); c || bj(a, "_ymBRC"); return c }), Pa = w(cf), Sc = w(cf, function (a, c, b) { return "" + c + b }), da = w(If), Yi = Fb("r", function (a, c) { var b = Xi(a, c), d = b[0]; return !b[1] && d }), Md = w(df, function (a, c) { return "{" + c.Zd + c.kb }), Oi = w(Oc, P), Gh = u(Md, lc), Ui = ha(function (a, c) { for (var b = []; !vd(c);) { var d = Pp(c); a(d, function (e) { return e(c) }); b.push(d) } return b }), Bg = ha(function (a, c) {
								return ua(function (b,
									d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) })
							}), Ge = ha(function (a, c) { return ua(function (b, d) { return c(b, function (e) { try { a(e)(Ua(b, d)) } catch (f) { b(f) } }) }) }), Wf = [], Xf = !1, Vf = !1, Jq = w(function (a) { if (a = Ya(a)) return a("a") }), qk = oa.Na + "//" + tc + "/metrika", rk = qk + "/metrika_match.html", sk = tc.split("."), Kp = sk.pop(), Pi = I(".", sk), Ni = ["webkitvisibilitychange", "visibilitychange"], Mi = gk(function (a) { a = Ea(a); return I("", A(function (c) { var b = c[0]; c = c[1]; return Oa(c) ? "" : b + "(" + c + ")" }, a)) }), Gb = G([1, null], kg), cd = G([1,
								0], kg), Qo = /^ *(data|javascript):/i, ti = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"), Ka, Oq = (Ka = {}, Ka.hit = "h", Ka.experiments = "ex", Ka.params = "p", Ka.reachGoal =
									"g", Ka.userParams = "up", Ka.trackHash = "th", Ka.accurateTrackBounce = "atb", Ka.notBounce = "nb", Ka.addFileExtension = "fe", Ka.extLink = "el", Ka.file = "fc", Ka.trackLinks = "tl", Ka.destruct = "d", Ka.setUserID = "ui", Ka.getClientID = "ci", Ka.clickmap = "cm", Ka.enableAll = "ea", Ka), ud = w(function () { return { Pb: {}, pending: {}, children: {} } }), Cg = V("postMessage"), Jr = F("s.f", function (a, c, b, d, e) {
										c = c(d); var f = ud(a), g = I(":", [c.Z.oc, c.Z.key]); if (Cg(b)) {
											f.pending[g] = e; try { b.postMessage(c.wg, "*") } catch (h) { delete f.pending[g]; return } Y(a, function () { delete f.pending[g] },
												5E3, "if.s")
										}
									}), Kr = F("s.fh", function (a, c, b, d, e, f) {
										var g = null, h = null, k = ud(a), l = null; try { g = Bb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!la(h) && h.substring && "__yminfo" === h.substring(0, 8) && !la(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !ea(l) && l.type && "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !Oa(k) && Cg(k) && (f = d.O(l.type, [f, l]), e = A(u(Q, Uh(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.wg, "*")) } } else g === "" + h && ea(l) &&
											X(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
									}), oh = w(function (a, c) {
										var b, d = cc("getElementsByTagName", n(a, "document")), e = ud(a), f = Cg(a), g = dd(a), h = ia(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + Zb(a), b); Gp(a, g); Hp(a); b = Ip(a, f); var k = G([a, v([], b)], Jr); z(function (l) { var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" }, function (p, q) { g.O("initToParent", [p, q]) }) }, d);
										Ob(a) && k(a.parent, { type: "initToParent" }, function (l, m) { g.O("parentConnect", [l, m]) }); h.D(a, ["message"], G([a, c, b, g, f], Kr)); return { ba: g, Pb: e.Pb, children: e.children, De: k }
									}, u(xb, P)), ie = w(Li, u(xb, P)), Ma = { id: "id", Se: "ut", aa: "type", Zd: "ldc", kb: "nck", wc: "url", Sh: "referrer" }, Lr = /^\d+$/, Hb = { id: function (a) { a = "" + (a || "0"); Lr.test(a) || (a = "0"); try { var c = Fa(a) } catch (b) { c = 0 } return c }, aa: function (a) { return "" + (a || 0 === a ? a : "0") }, kb: Boolean, Se: Boolean }; Ma.hc = "defer"; Hb.hc = Boolean; Ma.$j = "yaDisableGDPR"; Ma.ak = "yaGDPRLang";
			Ma.qc = "ecommerce"; Hb.qc = function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }; Ma.$ = "params"; Hb.$ = function (a) { return qb(a) || ea(a) ? a : null }; Ma.Re = "userParams"; Ma.ac = "accurateTrackBounce"; Ma.Cg = "triggerEvent"; Hb.Cg = Boolean; Ma.mg = "sendTitle"; Hb.mg = function (a) { return !!a || W(a) }; Ma.Ne = "trackHash"; Hb.Ne = Boolean; Ma.rh = "clickmap"; Ma.xb = "webvisor"; Hb.xb = Boolean; Ma.Oj = "trustedDomains"; Ma.Bb = "childIframe"; Hb.Bb = Boolean; Ma.fd = "trackLinks"; Ma.Bh = "enableAll"; Ma.hf = "disableFomAnalytics"; Hb.hf = Boolean; var Te = N(function (a,
				c) { var b = c[0]; a[b] = { le: c[1], Si: Hb[b] }; return a }, {}, Ea(Ma)), Mr = F("pa.plgn", function (a, c) { var b = ie(a, c); b && b.ba.D(["pluginInfo"], D(a, "c.plgn", function () { var d = L(a); d.C("cmc", d.o("cmc", 0) + 1); return tq(c, Te) })) }), yb, xc, lf = (yb = {}, yb.transaction_id = "id", yb.item_id = "id", yb.item_name = "name", yb.item_brand = "brand", yb.promotion_name = "coupon", yb.index = "position", yb.item_variant = "variant", yb.value = "revenue", yb.item_category = "category", yb), Mh = (xc = {}, xc.view_item = "detail", xc.add_to_cart = "add", xc.remove_from_cart =
					"remove", xc.begin_checkout = "checkout", xc.purchase = "purchase", xc), Qm = "currencyCode add delete remove purchase checkout detail".split(" "), He = ha(function (a, c) { return L(c).o(a, null) }), Nr = w(function () { var a = 0; return function () { return a += 1 } }), Or = u(P, Nr, ya), ab = { mc: function (a) { a = Nb(a).o("mt", {}); a = Ea(a); return a.length ? N(function (c, b, d) { return "" + c + (d ? "-" : "") + b[0] + "-" + b[1] }, "", a) : null } }; ab.oo = He("oo"); ab.pmc = He("cmc"); ab.clc = function (a) {
						var c = L(a).o("cls", { ec: 0, x: 0, y: 0 }), b = c.ec, d = c.x; c = c.y; return b ? b + "-" +
							a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
					}; ab.lt = function (a) { var c = Nb(a).o("lt", null); return c ? a.Math.round(100 * c) : c }; ab.yu = function (a) { var c = T(a); return H(c.hostname, ["dzen.ru", "ya.ru"]) ? (Fc(a, "").o("yandexuid") || "").substring(0, 25) : null }; ab.re = u(function (a, c) { return !c.kb && Yi(a, c) }, Gb); ab.aw = function (a) { a = Za(u(la, Sb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]); return la(a) ? null : cd(!a) }; ab.ifc = function (a) { return Nb(a).o("ifc") }; ab.ifb = function (a) { return Nb(a).o("ifb") };
			ab.rqnt = function (a, c, b) { a = b.G; return !a || a.nohit ? null : Or(c) }; ab.ecs = function (a) { return Nb(a).o("ecs") }; ab.csi = He("scip"); var Pr = ca(ab), Ed = w(function (a) { a = n(a, "console"); var c = n(a, "log"); c = we("log", c) ? C(c, a) : B; var b = n(a, "warn"); b = we("warn", b) ? C(b, a) : c; var d = n(a, "error"); a = we("error", d) ? C(d, a) : c; return { log: c, error: a, warn: b } }), Qr = F("p.cd", function (a, c) {
				if (ld(a) || ue(a)) {
					var b = Pa(a); if (la(b.o("jn"))) {
						b.C("jn", !1); var d = a.pk || sd(a) ? function () { } : /./, e = Ed(a, P(c)); d.toString = function () { b.C("jn", !0); return "Yandex.Metrika counter is initialized" };
						e.log("%c%s", "color: inherit", d)
					}
				}
			}), Cp = /Firefox\/([0-9]+)/, Bp = /([0-9\\.]+) Safari/, Rr = /\sYptp\/\d\.(\d+)\s/, Dp = /Edg\/(\d+)\./, tk = w(function (a) { var c; a: { if ((c = ub(a)) && (c = Rr.exec(c)) && 1 < c.length) { c = Fa(c[1]); break a } c = 0 } return 50 <= c && 99 >= c || mh(a, 79) ? !1 : !Ce(a) || Lf(a) }), uk = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
				Sr = w(function (a) { a = Ya(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = C(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), vk = Ja(String.prototype.repeat, "repeat"), Tr = vk ? function (a, c) { return vk.call(a, c) } : wq, Lh = v(!0, function (a, c, b, d) { b = c.length && (b - d.length) / c.length; if (0 >= b) return d; c = Tr(c, b); return a ? c + d : d + c }), xe = [2277735313, 289559509], ye = [1291169091,
					658871167], yp = { "*": "+", "-": "/", ik: "=", "+": "*", "/": "-", "=": "_" }, Ur = w(u(da, ua(function (a) { return -(new a.l.Date).getTimezoneOffset() }))), Vr = u(da, ua(function (a) { a = new a.l.Date; return I("", A(Qp, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })), Wr = u(da, ua(me)), wk = w(u(da, ua(function (a) { return a.ua[0] }))), Ji = w(function () { return { rf: null, Ec: [] } }, P), Xr = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Yr = w(function (a, c) {
						var b = ac(a), d = T(a).search.match(Xr); return d && 2 <= d.length ? (d = d[2],
							c.kb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
					}), up = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd",
						"loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], mb, tp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Ii = (mb = {}, mb.responseEnd = 1, mb.domInteractive =
							1, mb.domContentLoadedEventStart = 1, mb.domContentLoadedEventEnd = 1, mb.domComplete = 1, mb.loadEventStart = 1, mb.loadEventEnd = 1, mb.unloadEventStart = 1, mb.unloadEventEnd = 1, mb.secureConnectionStart = 1, mb), wp = w(Ld), qp = w(Oc), rp = w(function (a) {
								var c = n(a, "webkitRequestFileSystem"); if (U(c) && !ld(a)) return (new K(C(c, a, 0, 0))).then(function () { var d = n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {} }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](v(!0, Q)); if (td(a)) return c = n(a, "navigator.serviceWorker"),
									K.resolve(W(c)); c = n(a, "openDatabase"); if (sd(a) && U(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return K.resolve(b) } return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
							}), Zr = w(function (a) { return U(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null }), xk = /\/$/, $r = w(Oc), fa, as = w(function (a) { a = L(a); var c = a.o("counterNum", 0) + 1; a.C("counterNum", c); return c }, u(xb, P)), je = (fa = {}, fa.vf = v(Mc.version, Q), fa.nt = nr, fa.fp = function (a, c, b) {
								if (b.G && b.G.nohit) return null; c = P(c);
								b = $r(a); if (b[c]) return null; a: { var d = wk(a), e = n(a, "performance.getEntriesByType"); if (U(e)) { if (a = X(u(Q, V("name"), ja("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else { e = n(a, "chrome.loadTimes"); if (U(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0 } return a ? (b[c] = a, Math.round(a)) : null
							}, fa.fu = function (a, c, b) {
								var d = b.G; if (!d) return null; c = (n(a, "document.referrer") ||
									"").replace(xk, ""); b = (d["page-ref"] || "").replace(xk, ""); d = d["page-url"]; a = T(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b
							}, fa.en = Dr, fa.la = fk, fa.ut = function (a, c, b) { var d = b.V; b = b.G; d = d && d.Mc; b && (yr(a) || c.Se || d) && (b.ut = "noindex"); return null }, fa.v = v(oa.Xa, Q), fa.cn = as, fa.dp = function (a) {
								var c = L(a), b = c.o("bt", {}); if (W(c.o("bt"))) {
									var d = n(a, "navigator.getBattery"); try { b.p = d && d.call(a.navigator) } catch (e) { } c.C("bt", b); b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function (e) {
										b.Vj = n(e, "charging") && 0 === n(e,
											"chargingTime")
									}))
								} return cd(b.Vj)
							}, fa.ls = w(function (a, c) { var b = Sc(a, c.id), d = da(a), e = b.o("lsid"); return +e ? e : (d = Va(a, 0, d(Z)), b.C("lsid", d), d) }, xb), fa.hid = Zb, fa.z = Ur, fa.i = Vr, fa.et = Wr, fa.c = u(V("navigator.cookieEnabled"), Gb), fa.rn = u(Q, Va), fa.rqn = function (a, c, b) { b = b.G; if (!b || b.nohit) return null; c = P(c); a = Sc(a, c); c = (a.o("reqNum", 0) || 0) + 1; a.C("reqNum", c); if (a.o("reqNum") === c) return c; a.pc("reqNum"); return null }, fa.u = Md, fa.tp = u(xb, vj, Gb), fa.tpid = u(xb, function (a) { a = P(a); return ec[a] && ec[a].Kj || null }), fa.w =
								function (a) { a = yd(a); return a[0] + "x" + a[1] }, fa.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return I("x", [a, b, c]) } return null }, fa.sk = V("devicePixelRatio"), fa.ifr = u(Ob, Gb), fa.j = u(pr, Gb), fa.sti = function (a) { return Ob(a) ? or(a) ? "1" : null : null }, fa), yk = function () {
									var a, c = {}, b = {}; c.bu = Zr; c.pri = pp; c.wv = v(2, Q); b.we = function (d, e) { return Gb(e.xb) }; c.ds = sp; b.co = function (d) { return cd(L(d).o("jn")) }; c.td = Yr; x(c, (a = {}, a.iss = u(qr, Gb), a.hdl = u(rr, Gb),
										a.iia = u(sr, Gb), a.cpf = u(tr, Gb), a.ntf = w(function (d) { a: switch (n(d, "Notification.permission")) { case "denied": d = !1; break a; case "granted": d = !0; break a; default: d = null }return Oa(d) ? null : d ? 2 : 1 }), a.eu = He("isEU"), a.ns = wk, a.np = function (d) { if (Va(d, 0, 100)) d = null; else { d = rb(Df(d), 100); for (var e = [], f = 0; f < d.length; f++) { var g = d.charCodeAt(f); 128 > g ? e.push(g) : (127 < g && 2048 > g ? e.push(g >> 6 | 192) : (e.push(g >> 12 | 224), e.push(g >> 6 & 63 | 128)), e.push(g & 63 | 128)) } d = Rh(e) } return d }, a)); return { yh: c, $g: b }
								}(), bs = yk.$g; x(je, yk.yh); var cs =
									ca(je); x(je, bs); var op = cs.concat(Pr), qd = Fb("retryReqs", function (a) { return Pa(a).o("retryReqs", {}) }), Il = F("g.r", function (a) { var c = da(a), b = qd(a), d = c(Z), e = Zb(a); return N(function (f, g) { var h = g[0], k = g[1]; k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({ protocol: k.protocol, host: k.host, oj: k.resource, ij: k.postParams, $: k.params, hh: k.browserInfo, Wa: k.telemetry, zk: k.ghid, time: k.time, Tb: Fa(h), th: k.counterId, aa: k.counterType })); return f }, [], Ea(b)) }), Mf = [],
										np = "ru en et fi lt lv pl fr no sr".split(" "), Vb, lp = (Vb = {}, Vb["GDPR-ok"] = "ok", Vb["GDPR-ok-view-default"] = "ok-default", Vb["GDPR-ok-view-detailed"] = "ok-detailed", Vb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Vb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Vb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Vb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Vb), he = [], Ci = u(Nf, eb(dr(fe)), $c(",")), Di = u(Cc(nc(fe)), La, Boolean), ep = w(function (a, c) { var b = c.o("gdpr"); return H(b, bc) ? "-" + b : "" }), nb,
										db, ap = (nb = {}, nb.am = "com.am", nb.tr = "com.tr", nb.ge = "com.ge", nb.il = "co.il", nb["\u0440\u0444"] = "ru", nb["xn--p1ai"] = "ru", nb["\u0443\u043a\u0440"] = "ua", nb["xn--j1amh"] = "ua", nb["\u0431\u0435\u043b"] = "by", nb["xn--90ais"] = "by", nb), zk = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ }, cp = (db = {}, db.ka = "ge", db.ro = "md", db.tg = "tj", db.tk = "tm", db.et = "ee", db.hy = "com.am", db.he = "co.li", db.ky = "kg", db.uk = "ua", db.be = "by", db.tr = "com.tr",
											db.kk = "kz", db), Ak = w(Ld), ds = w(function () { var a = N(function (c, b) { "ru" !== b && (c[b] = Pi + "." + b); return c }, {}, hg); z(function (c) { a[c] = c }, ca(zk)); return a }), es = w(function (a) { var c = T(a).hostname; return (a = Za(function (b) { return b[1].test(c) }, Ea(zk))) && a[0] }), fs = ha(function (a, c) { var b = bp(c), d = [es(c) || Zo(c)]; hk(c) && d.push(b); var e = da(c); b = Pa(c); var f = b.o("synced", {}); d = X(function (g) { if (a[g]) { var h = (f[g] || 1) + 1440 < e(ib); h && delete f[g]; return h } }, d); b.C("synced", f); return A(function (g) { return { Cj: a[g], Ki: g } }, d) }), gs =
											function (a, c) { return function (b, d, e) { d = P(e); d = ds(d); var f = fs(d); return Ce(b) || td(b) ? {} : { da: function (g, h) { var k = g.J, l = L(b), m = hk(b), p = Ob(b); k = !(k && k.o("pv")); if (!m || p || k) return h(); m = f(b); if (!m.length) return h(); if (l.o("startSync")) Ak(b).push(h); else { l.C("startSync", !0); l = G([b, m, B], a); m = Mf[0]; if (!m) return h(); m(b).then(l).then(h, u(bd(h), D(b, c)))["catch"](B) } } } } }(function (a, c) {
												var b = da(a), d = L(a), e = Pa(a), f = ad(a, "c"), g = Cb(a, f); return N(function (h, k) {
													function l() {
														var q = e.o("synced"); d.C("startSync", !1);
														q && (q[k.Ki] = p, e.C("synced", q)); z(ya, Ak(a))
													} var m = g({ oa: ["sync.cook"] }, [oa.Na + "//" + k.Cj + "/sync_cookie_image_check"], { vb: 1500 }), p; m.then(function () { p = b(ib); l() })["catch"](function () { p = b(ib) - 1435; l() }); m = v(m, Q); return h.then(m)
												}, K.resolve(""), c)["catch"](D(a, "ctl"))
											}, "sy.c"), Yo = /^[a-z][\w.+-]+:/i, Bk = {}, Ck = w(Ld), Ie, Db = [[Sf, 1], [rd, 2], [Rb(), 3], [Rf, 4]], Jf = []; Jf.push(function (a, c, b) { return { da: function (d, e) { dp(a, d, b, e) } } }); var Ib = v(Db, yi); Ib(gs, 5); Ib(function (a, c, b) {
												return {
													xa: function (d, e) {
														var f = Da(a, b); f =
															f && f.userParams; var g = (d.V || {}).Re; f && g && f(g); e()
													}
												}
											}, 0); Ib(Pf(), 100); var vb = (Ie = {}, Ie.h = Db, Ie.er = [], Ie); vb["2"] = Db; Ib(function (a, c, b) {
												return {
													da: function (d, e) { var f = (d.V || {}).$; if (f && (uj(b, f), !d.ca && d.J && d.G)) { var g = jb(a, f), h = Ck(a), k = d.J.o("pv"); g && !d.G.nohit && (k ? encodeURIComponent(g).length > oa.Qg ? h.push([d.J, f]) : d.G["site-info"] = g : (d.ca = g, d.Ia || (d.Ia = {}), d.Ia.Ri = !0)) } e() }, xa: function (d, e) {
														var f = Ck(a), g = Da(a, b), h = g && g.params; h && (g = X(u(Kc, ja(d.J)), f), z(function (k) { h(k[1]); k = Be(a)(k, f); f.splice(k, 1) },
															g)); e()
													}
												}
											}, -1); vb["1"] = X(u(Kc, ja(Rf), Sb), Db); Ib(function (a, c, b) { return { da: function (d, e) { var f = d.J, g = d.G; if (!f || !g) return e(); !Bk[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp, Bk[b.id] = !0); f = g["page-ref"]; var h = g["page-url"]; f && h !== f ? g["page-ref"] = zi(a, f) : delete g["page-ref"]; g["page-url"] = zi(a, h).slice(0, oa.Sg); return e() } } }, -100); vb.a = Db; vb.g = Db; aa("r", rd, 1); aa("r", function () {
												return function (a) {
													return {
														da: function (c, b) {
															var d = c.J, e = void 0 === d ? za() : d, f = c.Wa, g = c.V.Tb, h = qd(a); d = e.o("rqnl", 0) + 1; e.C("rqnl",
																d); var k = e = n(h, I(".", [g, "browserInfo"])); e && (e.rqnl = d); f && (f.C("rqnl", d), f = n(h, I(".", [g, "telemetry"]))) && (f.rqnl = d, k = k || e); k && Qf(a); b()
														}, xa: function (c, b) { Gi(a, c); b() }
													}
												}
											}(), 2); vb.t = Db; aa("n", Sf, 1); aa("n", rd, 2); aa("n", Rb(), 3); aa("n", Pf(), 100); aa("m", Rb(["u", "v", "vf"]), 1); aa("m", Pf(), 2); aa("pi"); var Je, Dk = C(K.reject, K, Qa()), va = (Je = {}, Je.h = bb, Je.er = v(Dk, Q), Je); va.a = bb; va.n = bb; va["1"] = bb; va.c = Cb; va.g = bb; va["2"] = bb; va.r = function (a, c, b) {
												var d = ce(a, c, b), e = bb(a, c, b); return function (f, g, h) {
													return "webvisor" ===
														h ? d(f, g, f.G["wv-part"]) : e(f, g)
												}
											}; va.pi = Cb; va.m = function (a, c, b) { return function (d, e) { var f, g = d.G; g = (f = {}, f["page-url"] = g && g["page-url"] || "", f); f = x(d, { G: x(d.G || {}, g) }); return de(a, c, b)(f, "clmap/" + e.id)["catch"](D(a, "c.m")) } }; va.t = bb; var ta = F("g.sen", function (a, c, b) { var d = ad(a, c); b = Xo(a, c, b); var e = va[c], f = e ? e(a, d, b) : bb(a, d, b); return function () { var g = Ba(arguments), h = g.slice(1); g = x(g[0], { oa: [c] }); return f.apply(void 0, sa([g], h)) } }, Dk), Uo = ha(function (a, c) {
												if (!c[a]) {
													var b, d = new K(function (e) { b = e }); c[a] =
														{ dg: b, Ta: d, eg: !1 }
												} return c[a].Ta
											}), wi = w(u(Oc, ua)), ni = u(V("settings.pcs"), ja("1")), hs = F("dc.init", function (a, c) { function b(k) { for (var l = [], m = 1; m < arguments.length; m++)l[m - 1] = arguments[m]; L(a).o("dce:" + c, !1) && e[k].apply(e, l); L(a).o("dclq:" + c).push([k, l]) } var d = T(a), e = Ed(a, c); L(a).Ka("dclq:" + c, []); var f = ac(a), g = yf(a), h = g.Ci; g = g.ui; h && !g && f.C("debug", "1", void 0, d.host); return h || g ? { log: v("log", b), warn: v("warn", b), error: v("error", b) } : { log: B, warn: B, error: B } }), od = w(hs, xb), $k = F("p.dc", function (a, c) {
												var b =
													P(c); vi(a, ""); vi(a, b)
											}), cl = D(window, "h.p", function (a, c) { var b, d, e = ta(a, "h", c), f = c.wc || "" + T(a).href, g = c.Sh || a.document.referrer, h = { J: za((b = {}, b.pv = 1, b)), G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d), V: {} }; h.V.$ = c.$; h.V.Re = c.Re; c.hc && h.G && (h.G.nohit = "1"); return e(h, c).then(function (k) { k && (c.hc || Ab(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.$)(), Kb(a, G([a, c, k], Vo))) })["catch"](D(a, "h.g.s")) }), nd = w(Oc, P), gl = F("p.ar", function (a, c) {
												var b = ta(a, "a", c); return function (d, e, f, g, h, k) {
													var l, m, p =
														{ G: {}, J: za((l = {}, l.pv = 1, l.ar = 1, l)) }; if (d) return e = qb(e) ? { title: e.title, ag: e.referer, $: e.params, Za: e.callback, l: e.ctx } : { title: e, ag: f, $: g, Za: h, l: k }, f = nd(c), f.url !== d && (f.ref = f.url, f.url = d), d = d || T(a).href, f = e.ag || f.ref || a.document.referrer, g = Ab(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.$), h = x(p.V || {}, { $: e.$, title: e.title }), p = b(x(p, { V: h, G: x(p.G || {}, (m = {}, m["page-url"] = d, m["page-ref"] = f, m)) }), c).then(g), Jc(a, "p.ar.s", p, e.Za || B, e.l)
												}
											}), Ke = ha(function (a, c) {
												var b = {}; Ff(a)(function (d) {
													b =
													d[c] || {}
												}); return b
											}), is = F("c.c.cc", function (a) { var c = L(a), b = u(Ke(a), function (d) { var e; return x({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e)) }); return D(a, "g.c.cc", u(C(c.o, c, "counters", {}), ca, eb(b))) }), bl = F("gt.c.rs", function (a, c) { var b, d = P(c), e = c.id, f = c.aa, g = c.rh, h = c.xb, k = c.Ne, l = G([a, d], To); ui(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.webvisor = !!h, b.trackHash = !!k, b)); return l }), Kj, il = F("th.e", function (a, c) {
												function b() { f || (h = md(a, "onhashchange") ? ia(a).D(a, ["hashchange"], g) : Lq(a, g)) }
												var d = ta(a, "t", c), e = be(a, P(c)), f = !1, g = D(a, "h.h.ch", C(Mq, null, a, c, d)), h = B; c.Ne && (b(), f = !0); return { Lj: D(a, "tr.hs.h", function (k) { var l; k ? b() : h(); f = !!k; e((l = {}, l.trackHash = f, l)) }), unsubscribe: h }
											}), Lj = 1, sg = {}, ze = {}, kl = F("nb.p", function (a, c) {
												function b(E) { k() || (E = "number" === typeof E ? E : 15E3, E = Nq(a, d(!1), E), r = E.id, y = E.gf, l()) } function d(E) {
													return function (M) {
														var O, wa, xa; void 0 === M && (M = (O = {}, O.ctx = {}, O.callback = B, O)); if (E || !q && !h.Sd) {
															q = !0; l(); r && (O = r, te(a) ? ka(a, O) : (sg[O] = !0, ka(a, ze[O] || 0))); var sb = m(Z); O =
																(Fa(h.o("lastHit")) || 0) < sb - 18E5; var Bc = .1 > Math.random(); h.C("lastHit", sb); sb = za((wa = {}, wa.nb = "1", wa.cl = t, wa.ar = "1", wa)); wa = nd(c); wa = { G: (xa = {}, xa["page-url"] = wa.url || T(a).href, xa), J: sb, V: { force: E } }; xa = Ed(a, P(c)).warn; !M.callback && M.ctx && xa('"callback" argument missing'); (xa = E || O || Bc) || (xa = a.location.href, O = a.document.referrer, xa = !(xa && O ? Qi(xa) === Qi(O) : !xa && !O)); if (xa) return xa = f(wa, c), Jc(a, "l.o.l", xa, M.callback, M.ctx)
														} return null
													}
												} var e, f = ta(a, "n", c), g = P(c), h = Sc(a, c.id), k = v(v(g, Ke(a)), u(ya, V("accurateTrackBounce"))),
													l = v((e = {}, e.accurateTrackBounce = !0, e), be(a, g)), m = da(a), p = m(Z), q = !1, r = 0, t = 0, y; ma(a, c, function (E) { t = E.Mh - p }); c.ac && b(c.ac); return { Ti: d(!0), ac: b, zd: y }
											}), Dg = ["yandex_metrika_callback" + Mc.callbackPostfix, "yandex_metrika_callbacks" + Mc.callbackPostfix], js = F("cb.i", function (a) { var c = Dg[0], b = Dg[1]; if (U(a[c])) a[c](); "object" === typeof a[b] && z(function (d, e) { a[b][e] = null; Gf(a, d) }, a[b]); z(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, Dg) }), Ek = { Ak: Ta(/[/&=?#]/) }, Kd = F("go.in", function (a, c, b, d) {
												void 0 === b && (b =
													"goal"); return function (e, f, g, h) { var k, l; if (!e || Ek[b] && Ek[b](e)) return null; var m = f, p = g || B; U(f) && (p = f, m = void 0, h = g); var q = Ab(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m), r = "goal" === b; f = ta(a, "g", c); g = So(a, c, e, b); e = g[0]; g = g[1]; m = f({ V: { $: m }, J: za((k = {}, k.ar = 1, k)), G: (l = {}, l["page-url"] = e, l["page-ref"] = g, l) }, c).then(function () { r && q(); d && d() }); return Jc(a, "g.s", m, p, h) }
											}), ks = ha(function (a, c) { Ia(c) ? a.push(c) : z(u(Q, ra("push", a)), c) }), ol = F("cl.p", function (a, c) {
												function b(m, p, q, r) {
													void 0 === r && (r = {}); q ?
														$d(a, c, { url: q, Jb: !0, Hc: m, Mc: p, sender: d, l: r.ctx, Za: r.callback, title: r.title, $: r.params }) : f.warn("Empty link")
												} var d = ta(a, "2", c), e = [], f = Ed(a, P(c)), g = P(c), h = D(a, "s.s.tr", v(be(a, g), Ro)); g = { l: a, $a: c, Kh: e, sender: d, globalStorage: L(a), uh: Sc(a, c.id), Bk: Zb(a), Mj: v(v(g, Ke(a)), u(ya, V("trackLinks"))) }; g = D(a, "cl.p.c", v(g, Oo)); g = ia(a).D(a, ["click"], g); c.fd && h(c.fd); var k = D(a, "file.clc", G([!0, !1], b)), l = D(a, "e.l.l.clc", G([!1, !0], b)); e = D(a, "add.f.e.clc", ks(e)); return { file: k, Gh: l, Zg: e, fd: h, zd: g }
											}), Lo = ha(qc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
												tl = F("clm.p", function (a, c) {
													if (Xc(a)) return B; var b = ta(a, "m", c), d = P(c), e = da(a), f = e(Z), g = v(v(d, Ke(a)), u(ya, V("clickmap"))), h, k = null; d = D(a, "clm.p.c", function (l) {
														var m = g(); if (m) {
															var p = L(a), q = p.o("cls", { ec: 0, x: 0, y: 0 }); p.C("cls", { ec: q.ec + 1, x: q.x + l.clientX, y: q.y + l.clientY }); p = "object" === typeof m ? m : {}; q = p.filter; m = p.isTrackHash || !1; var r = A(function (y) { return ("" + y).toUpperCase() }, p.ignoreTags || []); W(h) && (h = p.quota || null); var t = !!p.quota; l = { element: Mo(a, l), position: ri(a, l), button: No(l), time: e(Z) }; p = T(a).href;
															if (Ko(a, l, k, r, q)) { if (t) { if (!h) return; --h } r = qe(a, l.element); q = r[0]; r = r[1]; t = fg(a, l.element); q = ["rn", Va(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", eg(a, l.element), "X", l.position.x, "Y", l.position.y]; q = I(":", q); m && (q += ":wh:1"); Jo(a, p, q, b, c); k = l }
														}
													}); return ia(a).D(n(a, "document"), ["click"], d)
												}), ls = w(function (a) {
													var c = L(a), b = c.o("isEU"); if (W(b)) {
														var d = Fa(Vd(a, "is_gdpr") || ""); if (H(d, [0, 1])) c.C("isEU", d), b = !!d;
														else if (a = Pa(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
													} return b
												}, function (a) { return L(a).o("isEU") }), Jd = F("i.e", ls), Sa = u(ca, Kc), ul = F("c.m.p", function (a, c) { var b = P(c); return v(be(a, b), Io) }), vl = F("e.a.p", function (a, c) { var b = Da(a, c); b = G([u(Q, ua(!0)), X(Boolean, A(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A); c.Bh && b(); return b }), yl = F("s.f.i", function (a, c) {
													return ma(a, c, function (b) {
														if (n(b, "settings.button_goals") || -1 !== T(a).href.indexOf("yagoalsbuttons=1")) ia(a).D(a, ["click"],
															D(a, "c.t.c", u(V("target"), G([a, c], Id(a, c, "", Ho))))), Ab(a, c, "Button goal. Counter " + c.id + ". Init.")()
													})
												}), qi, Al = F("p.ai", function (a, c) { return new K(function (b) { (pd(a) || Lf(a)) && b(ma(a, c, function (d) { var e; return (d = n(d, "settings.sbp")) ? pi(a, x({}, d, (e = {}, e.c = c.id, e)), 10) : B })); b(B) }) }), gc = [], pb = [], Ve = [], yc = [], Ue = [], Fk = [], ms = F("p.fh", function (a, c) {
													var b, d; void 0 === c && (c = !0); var e = Pa(a), f = da(a), g = e.o("wasSynced"), h = { id: 3, aa: "0" }; return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : ta(a, "f", h)({
														J: za((b = {}, b.pv = 1, b)),
														G: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = a.document.referrer, d)
													}, h).then(function (k) { var l; k = (l = {}, l.time = f(Z), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l); e.C("wasSynced", k); return k })["catch"](D(a, "f.h"))
												}), ns = ha(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.$d.C("ymoo" + a.Fa, a.Ag(ib)), a.vd && a.vd.destruct && a.vd.destruct()) }), zo = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Ao = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]],
												[["oWdZ[nc[jh_YW$Yec", 29010, 1]]], oi = { G: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, mi = { id: 42822899, aa: "0" }, Le, Go = (Le = {}, Le.s = "p", Le["8"] = "i", Le), Do = Fb("csp", function (a, c) { return ta(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), Me = "et w v z i u vf".split(" "); Me.push("we"); var so = {
													L: "stamp", M: "frameId", Z: "meta", af: "base", Ef: "hasBase", Ye: "address", Eg: "ua", se: "prev", Sf: "namespace", Kc: "keystrokes", Mf: "isMeta", Lc: "modifier", qb: "pageWidth", pb: "pageHeight", ug: "startNode", jf: "endNode", Kg: "zoomFrom", Mg: "zoomTo",
													level: "level", duration: "duration", za: "i", Oc: "o", n: "n", r: "r", lc: "ct", Ab: "at", Tf: "nm", Uf: "ns", me: "pa", pe: "pr", de: "nx", Pa: "h", Ea: "changes", Xe: "a", $e: "b", od: "c", ke: "op"
												}, to = ["attributes", "attrs"], Ne = function () {
													function a(c) { this.l = c } a.prototype.Ca = function (c) { var b = Yd(c); c = A(C(this.Ja, this), b); return mf(jb(this.l, A(function (d, e) { var f; return x({}, b[e], (f = {}, f.data = d, f)) }, c))) }; a.prototype.Ja = function (c) { var b = c.data; "string" !== typeof b && (b = jb(this.l, Yd(c.data))); return b }; a.prototype.Oa = function (c) { return encodeURIComponent(c).length };
													a.prototype.cd = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return !!this.l.JSON }; return a
												}(), qo = w(function (a) {
													function c(f, g, h, k) { d[0] = g; h[k] = e[3]; h[k + 1] = e[2]; h[k + 2] = e[1]; h[k + 3] = e[0] } function b(f, g, h, k) { d[0] = g; h[k] = e[0]; h[k + 1] = e[1]; h[k + 2] = e[2]; h[k + 3] = e[3] } if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return ro; var d = new Float32Array([-0]), e = new Uint8Array(d.buffer); return 128 === e[3] ?
														b : c
												}), mo = ki(!1), lo = ki(!0), os = { Gj: "topics", kj: "publicationDate", hj: "pageUrlCanonical", Sj: "updateDate", fh: "authors", bh: "articleInfo", rj: "rubric", lj: "publishersHeader", ib: "involvedTime", gj: "pageTitle", Li: "maxScrolled", cf: "chars", dh: "articleMeta" }, ps = function () {
													function a(c) { this.l = c; this.Kb = u(Ea, Zc(function (b, d) { b[d[1]] = d[0]; return b }, {}))(os) } a.prototype.yg = function (c) { var b, d = this.qe(c.data); return { L: da(this.l)(Yf), data: (b = {}, b[this.Kb[c.type]] = d, b) } }; a.prototype.qe = function (c) {
														var b = this; return ea(c) ?
															A(C(this.qe, this), c) : qb(c) ? u(Ea, Zc(function (d, e) { var f = e[0]; d[b.Kb[f] || f] = b.qe(e[1]); return d }, {}))(c) : c
													}; a.prototype.Ja = function (c) { return Wd(this.l, Cf, this.yg(c))(le(B)) }; a.prototype.Oa = function (c) { return c[0] }; a.prototype.cd = function (c) { return [c] }; a.prototype.Ca = function (c) { var b = this; c = Wd(this.l, di, { buffer: A(C(this.yg, this), c) }); return uc(this.l, c, 20, ke)(Ge(function (d) { d = zf(b.l, d.slice(-4)); return uc(b.l, d, 20, ke) }))(Bg(function (d) { return d[d.length - 1] })) }; a.prototype.isEnabled = function () { return ci(this.l) };
													return a
												}(), Gk = function () { function a(c, b, d) { this.ff = 0; this.oe = 1; this.kd = 5E3; this.l = c; this.va = b; this.Ee = d } a.prototype.bd = function () { this.ff = Y(this.l, u(C(this.flush, this), C(this.bd, this)), this.kd, "b.f") }; a.prototype.send = function (c, b) { var d = this.Ee(c, b || [], this.oe); this.oe += 1; return d }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a }(), Eg, Fg = (Eg = function (a) {
													function c(b, d, e, f) {
														void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.Me = 0; d.zb = 0; d.Le = 0; d.buffer = []; d.kd = 2E3; d.ba = dd(b); d.bd();
														d.Le = f; return d
													} Ha(c, a); c.prototype.wf = function (b) { return X(Boolean, this.ba.O("ag", b)) }; c.prototype.uf = function (b, d) { var e = this; b(Ua(D(this.l, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.yj = function (b, d) { var e = this; ka(this.l, this.ff); var f = Math.ceil(this.va.Oa(d) / 63E4), g = this.va.cd(d, f); z(function (h, k) { var l, m = x({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l)); l = e.va.Ca([m], !1); e.uf(l, [m]) }, g); this.bd() }; c.prototype.send = function (b, d) {
														var e = this; this.ba.O("se", d); return a.prototype.send.call(this,
															b, d).then(Q, function () { e.ba.O("see", d) })
													}; c.Gd = function (b, d, e, f, g) { c.md["" + b + d] || (this.md[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.md[d] }; c.prototype.Fi = function () { return this.Le && this.Me >= this.Le }; c.prototype.push = function (b) { var d = this; if (!this.Fi()) { this.ba.O("p", b); var e = this.va.Ja(b), f = this.va.Oa(e); 7E5 < f ? this.yj(b, e) : (e = this.wf(this.buffer.concat([b])), e = N(function (g, h) { return g + d.va.Oa(d.va.Ja(h)) }, 0, e), this.zb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.zb += f) } }; c.prototype.D =
														function (b, d) { this.ba.D([b], d) }; c.prototype.fa = function (b, d) { this.ba.fa([b], d) }; c.prototype.flush = function () { var b = this.buffer.concat(this.wf(this.buffer)); if (b.length) { this.buffer = []; this.Me += this.zb; this.zb = 0; var d = this.va.Ca(b); this.uf(d, b) } }; return c
												}(Gk), Eg.md = {}, Eg), Fd, Gg = (Fd = {}, Fd[1] = 500, Fd[2] = 500, Fd[3] = 0, Fd), Hg = function () {
													function a(c, b) {
														var d, e = this; this.id = "a"; this.Rd = !1; this.Fb = {}; this.sb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), Wf: ["article"] };
														this.Pe = (d = {}, d.Answer = 3, d.Review = 2, d); this.sh = w(function (f, g) { ob(e.l, e.Fa, "Warning: content has only " + g.chars + " chars. Required " + Gg[g.type], g) }); this.l = c; this.root = Xb(c); this.Fa = b
													} a.prototype.Ga = function (c) { return c.element }; a.prototype.xf = function (c, b) { var d = this, e; D(this.l, "P.s." + b, function () { e = d.Fb[b].call(d, c) })(); return e }; a.prototype.jj = function (c) {
														var b = x({}, c); this.Rd && !b.id && H(c.type, [3, 2]) && (c = I(", ", A(V("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle =
															this.ki(b.fc)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.hi()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
													}; a.prototype.ya = function (c) { var b = this, d = {}, e = this.Ga(c); if (!e) return null; d.type = c.type; z(function (g) { d[g] = b.xf(c, g) }, ca(this.Fb)); var f = da(this.l); d.stamp = f(Yf); d.element = c.element; d.fc = e; d = this.jj(d); d.id = d.id ? lc(d.id) : 1; d.update = function (g) { return b.Ga(c) ? b.xf(c, g) : void 0 }; return d }; a.prototype.ki = function (c) {
														for (var b =
															1; 5 >= b; b += 1) { var d = Wa(Hc("h" + b, c)); if (d) return d }
													}; a.prototype.hi = function () { var c = Hc('[rel="canonical"]', this.root); if (c) return c.href }; a.prototype.Cf = function () { return 1 }; a.prototype.vc = function () { return [] }; a.prototype.Lh = function () {
														var c = this, b = this.vc(), d = 1; return N(function (e, f) {
															var g = c.ya({ element: f, type: c.Cf(f) }) || []; ea(g) || (g = [g]); g = N(function (h, k) { var l = h.values, m = h.Gf; k && k.chars > Gg[k.type] && !H(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Gg[k.type] && c.sh(k.id, k); return { values: l, Gf: m } }, {
																values: [],
																Gf: A(V("id"), e)
															}, g).values; return e.concat(A(function (h) { var k; h = x((k = { index: d, pg: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
														}, [], b)
													}; return a
												}(), Hk = function (a) {
													function c() {
														var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Rd = !0; d.ef = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']); d.Fb = (b = {}, b.id = function (e) { var f = e.data["@id"]; e = e.data.mainEntity || e.data.mainEntityOfPage; !f && e && (f = e["@id"]); return f },
															b.chars = function (e) { return "string" === typeof e.data.text ? e.data.text.length : Tb(this.Ga(e)).length }, b.authors = function (e) { var f = []; f = f.concat(this.uc(e.data, "author")); f = f.concat(this.uc(e.data.mainEntity, "author")); return f.concat(this.uc(e.data.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
																var f = e.data.headline || ""; e.data.lk && (f += " " + e.data.alternativeHeadline); "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed)); 3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
																return f
															}, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.uc(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
																var f = this, g = this.Ga(e); e = X(Boolean, A(function (h) { if (h = Bb(f.l, Tb(h))) { var k = f.yf(h); if (k) return N(function (l, m) { return l ? l : "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" === h["@type"]) return h } return null }, [e.element].concat(wb(this.ef,
																	document.body === g ? document.documentElement : g)))); return e.length && (e = e[0].itemListElement, ea(e)) ? X(Boolean, A(function (h) { return h.item && !f.l.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
															}, b); return d
													} Ha(c, a); c.prototype.uc = function (b, d, e) { void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = ea(b[d]) ? b[d] : [b[d]]; b = X(Q, A(function (f) { return f ? "string" === typeof f ? f : N(function (g, h) { return g || "" + f[h] }, "", e) : null }, b)); return A(function (f) { var g; return g = {}, g.name = f, g }, b) }; c.prototype.Ga =
														function (b) { var d = b.element, e = b.data["@id"], f = b.data.url; b = null; f && "string" === typeof f && (b = this.qf(f)); !b && e && "string" === typeof e && (b = this.qf(e)); b || (b = e = d.parentNode, !Wb("head", this.l, d) && e && 0 !== Tb(e).length) || (b = this.l.document.body); return b }; c.prototype.qf = function (b) { try { var d = Ic(this.l, b).hash; if (d) { var e = Hc(d, this.l.document.body); if (e) return e } } catch (f) { } return null }; c.prototype.ne = function (b) { return this.Pe[b["@type"]] || 1 }; c.prototype.ya = function (b) {
															var d = this, e = b.element; if (!b.data && (b.data =
																Bb(this.l, Tb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ea(b.data))) return null; var f = this.yf(b.data); if (f) return A(function (h) { if (!H(h["@type"], d.sb["schema.org"])) return null; h = { element: e, data: h, type: d.ne(h) }; return a.prototype.ya.call(d, h) }, f); if ("QAPage" === b.data["@type"]) { var g = b.data.mainEntity || b.data.mainEntityOfPage; if (!g) return null } "Question" === b.data["@type"] && (g = b.data); return g ? (b = jc(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (h) {
																	var k; if (!h || !H(h["@type"], d.sb["schema.org"])) return null;
																	h = { element: e, type: d.ne(h), data: x((k = {}, k.parentItem = g, k), h) }; return a.prototype.ya.call(d, h)
																}, b)) : H(b.data["@type"], this.sb["schema.org"]) ? a.prototype.ya.call(this, x(b, { type: this.ne(b.data) })) : null
														}; c.prototype.vc = function () { return wb(this.ef, this.root) }; c.prototype.yf = function (b) { return ea(b) && b || b && ea(b["@graph"]) && b["@graph"] }; return c
												}(Hg), Ig = function (a) {
													function c() {
														var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Rd = !0; d.Pj = ra("exec", new RegExp("schema.org\\/(" + I("|", ca(d.Pe)) + ")$"));
														d.Fb = (b = {}, b.id = function (e) { e = e.element; var f = cb(this.l, e, "identifier"); return f ? Wa(f) : (f = cb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) { var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = cb(this.l, e, g[h]); if (k) { f = Wa(k).length; break } } e = Tb(e); 0 === f && e && (f += e.length); return f }, b.topics = function (e) {
															var f = this, g = Cd(this.l, e.element, "about"); return A(function (h) {
																var k =
																	{ name: Wa(h) }; if (g = cb(f.l, h, "name")) k.name = Wa(g); return k
															}, g)
														}, b.rubric = function (e) { var f = this; (e = Hc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Hc('[itemtype$="schema.org/BreadcrumbList"]', this.root)); return e ? A(function (g) { return { name: Wa(cb(f.l, g, "name")), position: Wa(cb(f.l, g, "position")) } }, Cd(this.l, e, "itemListElement")) : [] }, b.updateDate = function (e) { return (e = cb(this.l, e.element, "dateModified")) ? Mj(e) : "" }, b.publicationDate = function (e) {
															return (e = cb(this.l, e.element, "datePublished")) ?
																Mj(e) : ""
														}, b.pageUrlCanonical = function (e) { e = Cd(this.l, e.element, "url"); if (e.length) { var f = e[0]; return f.href ? f.href : Wa(e) } return null }, b.pageTitle = function (e) { var f = "", g = e.element, h = cb(this.l, g, "headline"); h && (f += Wa(h)); (h = cb(this.l, g, "alternativeHeadline")) && (f += " " + Wa(h)); "" === f && ((h = cb(this.l, g, "name")) || (h = cb(this.l, g, "itemReviewed")), h && (f += Wa(h))); 3 === e.type && (e = Wb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = cb(this.l, e, "text")) && (f += Wa(e)); return f }, b.authors = function (e) {
															var f = this; e =
																Cd(this.l, e.element, "author"); return A(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = cb(f.l, g, "name")) && (k.name = Wa(h)); k.name || (k.name = g.getAttribute("content") || Tb(g) || g.getAttribute("href")); return k }, e)
														}, b); return d
													} Ha(c, a); c.prototype.Cf = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.Pj(b)) ? this.Pe[b[1]] : 1 }; c.prototype.ya = function (b) { return b.element && Tb(b.element).length ? a.prototype.ya.call(this, b) : null }; c.prototype.vc =
														function () { var b = I(",", A(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.sb["schema.org"])); return wb(b, this.root) }; return c
												}(Hg), Ik = function (a) {
													function c(b, d) {
														var e, f = a.call(this, b, d) || this; f.id = "o"; f.Fb = (e = {}, e.chars = function (g) { g = this.Ga(g); return Tb(g).length }, e.authors = function (g) { return this.Fd(g.data.author) }, e.pageTitle = function (g) { return this.Bc(g.data.title) || "" }, e.updateDate = function (g) { return this.Bc(g.data.modified_time) }, e.publicationDate = function (g) { return this.Bc(g.data.published_time) },
															e.pageUrlCanonical = function (g) { return this.Bc(g.data.url) }, e.rubric = function (g) { return this.Fd(g.data.section) }, e.topics = function (g) { return this.Fd(g.data.tag) }, e); f.Ch = new RegExp("^(og:)?((" + I("|", f.sb.Wf) + "):)?"); return f
													} Ha(c, a); c.prototype.Fd = function (b) { var d; return b ? ea(b) ? A(function (e) { var f; return f = {}, f.name = e, f }, b) : [(d = {}, d.name = b, d)] : [] }; c.prototype.Bc = function (b) { return ea(b) ? b.length ? b[0] : null : b }; c.prototype.vc = function () { var b = wb('meta[property="og:type"]', this.l.document.body); return [this.l.document.head].concat(b) };
													c.prototype.Yh = function (b) { var d = this, e = b.element, f = {}, g = this.Ga(b); e = wb("meta[property]", e === this.l.document.head ? e : g); if (e.length) z(function (h) { try { if (h.parentNode === g || h.parentNode === d.l.document.head) { var k = h.getAttribute("property").replace(d.Ch, ""), l = Wa(h); f[k] ? ea(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l } } catch (m) { Zd(d.l, "og.ed", m) } }, e); else return null; return H(f.type, this.sb.Wf) ? x(b, { data: f }) : null }; c.prototype.Ga = function (b) { b = b.element; var d = this.l.document; return b === d.head ? d.body : b.parentNode };
													c.prototype.ya = function (b) { return (b = this.Yh(b)) ? a.prototype.ya.call(this, b) : null }; return c
												}(Hg), Jk = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), qs = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), rs = function () {
													function a(c, b, d, e) {
														this.Ic = !1; this.Z = {}; this.scroll = { x: 0, y: 0 }; this.ib = this.Qf = 0; this.ae = this.Yf = ""; this.ga = []; this.La = 0; this.wb = { Pa: 0, Te: 0 }; this.Og = qs; this.buffer =
															d; this.$b = C(this.$b, this); this.xc = C(this.xc, this); this.Pc = C(this.Pc, this); this.l = c; this.Fa = e; this.Zc = b; this.Wd = "pai" + b.id; this.Gb(); this.lf = ia(this.l); this.time = da(this.l); this.Fg(); this.Md = L(this.l)
													} a.prototype.start = function () {
														var c = this; if (!this.Ic) {
															this.buffer.D("ag", this.xc); this.buffer.D("se", this.Pc); this.Aj(); var b = this.Md.o(this.Wd, []), d = !b.length; b.push(C(this.Hi, this)); this.Md.Ka(this.Wd, b); d && this.gg(); var e = function (f, g) { return (f.Be || 0) <= (g.Be || 0) ? g : f }; ia(this.l).D(this.l, ["click"], function (f) {
																if (c.ga.length) {
																	f =
																	si(f); var g = T(c.l).hostname, h; if (h = f) h = ae(f.hostname) === ae(g); h && (f = N(e, c.ga[0], c.ga).id, g = Zb(c.l), Sc(c.l, c.Fa.split(":")[0]).C("pai", f + "-" + g))
																}
															}); this.$b({ type: "page", target: this.l })
														}
													}; a.prototype.stop = function () { this.buffer.fa("se", this.Pc); this.buffer.fa("ag", this.xc); this.Qj(); this.Ic = !0 }; a.prototype.Of = function (c) { return Wb("html", this.l, c) !== this.l.document.documentElement }; a.prototype.gg = function () {
														var c = this; D(this.l, "p.ic" + this.Zc.id, function () {
															if (!c.Ic) {
																var b = c.Md.o(c.Wd), d = c.Zc.Lh(); z(function (e) {
																	var f =
																		A(function (g) { return x({}, g) }, d); U(e) && e(f)
																}, b); c.La = Y(c.l, C(c.gg, c), 1E3, "p")
															}
														})()
													}; a.prototype.Hi = function (c) { this.Ic || (this.Rj(c), this.Tj(), this.vj()) }; a.prototype.$b = function (c) {
														var b = this; D(this.l, "p.ec." + this.Zc.id, function () {
															try { var d = c.type; var e = c.target } catch (l) { return } var f = "page" === d; if ("scroll" === d || f) { var g = [b.l, b.l.document, b.l.document.documentElement, vc(b.l)]; H(e, g) && b.Gb() } ("resize" === d || f) && b.Fg(); d = b.time(Z); var h = Math.min(d - b.Qf, 5E3); b.ib += Math.round(h); b.Qf = d; if (b.Z && b.scroll &&
																b.wb) { var k = b.wb.Pa * b.wb.Te; b.ga = A(function (l) { var m = x({}, l), p = b.Z[m.id], q = ed(l.fc); if (!p || b.Of(m.element) || !q) return m; l = b.l.Math; p = l.max((b.scroll.y + b.wb.Pa - p.y) / p.height, 0); var r = q.height * q.width; q = b.jh(q); m.Be = q / k; m.visibility = q / r; if (.9 <= m.visibility || .1 <= m.Be) m.involvedTime += h; m.maxScrolled = l.round(1E4 * p) / 1E4; return m }, b.ga) }
														})()
													}; a.prototype.jh = function (c) {
														var b = c.top, d = c.bottom, e = c.left, f = this.wb, g = f.Te; f = f.Pa; var h = this.l.Math; c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g); return (h.min(h.max(d,
															0), f) - h.min(h.max(b, 0), f)) * c
													}; a.prototype.Rj = function (c) { var b = A(function (d) { return d.id }, this.ga); this.ga = this.ga.concat(X(function (d) { return !H(d.id, b) }, c)) }; a.prototype.Fg = function () { var c = gg(this.l) || yd(this.l); this.wb = { Te: c[0], Pa: c[1] } }; a.prototype.Tj = function () {
														var c = this; D(this.l, "p.um." + this.Zc.id, function () {
															var b = []; c.Gb(); c.Z = N(function (d, e) {
																var f; if (c.Of(e.element)) b.push(e), delete d[e.id]; else {
																	var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled ||
																		0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.fc && (f = ed(e.fc)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g
																} return d
															}, {}, c.ga); z(function (d) { d = Be(c.l)(d, c.ga); c.ga.splice(d, 1) }, b)
														})()
													}; a.prototype.Pc = function () { this.Yf = this.ae }; a.prototype.xc = function () {
														var c, b, d = A(v(this.Z, n), ca(this.Z)); return d.length && (this.ae = jb(this.l, d), this.Yf !== this.ae) ? (c = {}, c.type = "publishersHeader", c.data =
															(b = {}, b.articleMeta = d || [], b.involvedTime = this.ib, b), c) : null
													}; a.prototype.vj = function () { var c = this; if (this.ga.length) { var b = X(function (d) { return !d.pg }, this.ga); z(function (d) { var e, f = N(function (g, h) { d[h] && (g[h] = d[h]); return g }, {}, c.Og); c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e)); d.pg = !0 }, b); b.length && ob(this.l, this.Fa, "Publisher content info found: ", b) } }; a.prototype.Aj = function () { this.lf.D(this.l, Jk, this.$b) }; a.prototype.Qj = function () { this.lf.Yb(this.l, Jk, this.$b) }; a.prototype.Gb =
														function () { this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 } }; return a
												}(), Gd = {}; Hk && (Gd.json_ld = Hk); Ig && (Gd.schema = Ig, Gd.microdata = Ig); Ik && (Gd.opengraph = Ik); var ss = F("p.p", function (a, c) {
													function b(l, m, p) { var q = x({}, k); q.ca = l; q.Ia.df = bi(m); return e(x({}, q), c, p)["catch"](D(a, "s.ww.p")) } if (!Aa("querySelectorAll", a.document.querySelectorAll)) return K.resolve(); var d = [new Ne(a)]; d.unshift(new ps(a));
													var e = ta(a, "p", c), f = Za(function (l) { return l.isEnabled() }, d); d = za(); var g = Sc(a, c.id), h = g.o("pai"); h && (g.pc("pai"), d.C("pai", h)); var k = { G: {}, J: d, Ia: { Kf: !(f instanceof Ne) } }; return ma(a, c, D(a, "ps.s", function (l) { if (l = n(l, "settings.publisher.schema")) { l = vj(c) ? "microdata" : l; var m = Gd[l]; if (m && f) { var p = P(c), q = Fg.Gd(p, "e", b, f, a); m = new m(a, p); (new rs(a, m, q, p)).start(); ob(a, p, 'Publishers analytics schema "' + l + '"') } } }))
												}), ts = function () {
													function a(c, b) { this.l = c; this.Wh = b } a.prototype.Ca = function (c) {
														return mf(jc(C(this.Ja,
															this), c))
													}; a.prototype.Ja = function (c, b) { var d = this, e = [], f = this.Wh(this.l, b && b.type, c.type); f && (e = jc(function (g) { return g({ l: d.l, ma: c }) || [] }, f)); return e }; a.prototype.Oa = function (c) { return c.length }; a.prototype.cd = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
												}(), en = function (a) {
													function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.Pg = 7500; b.kd = 3E4; b.bd(); return b } Ha(c, a); c.prototype.push = function (b, d) {
														var e = this.va.Ja(b, d); $a(this.buffer, e); this.va.Oa(this.buffer) >
															this.Pg && this.flush()
													}; c.prototype.flush = function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c
												}(Gk), wn = /opera mini/i, Kk = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
													mn = ["email", "tel"], un = /ym-hide-content/, vn = /ym-show-content/, rn = /^[\w\u0410-\u042f\u0430-\u044f]$/, sn = [65, 90], tn = [97, 122], pn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), nn = new RegExp("(" + I("|", Kk) + ")", "i"), Nj = ["password", "passwd", "pswd"], on = new RegExp("(" + I("|", Kk.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
														")", "i"), Ra = "metrikaId_" + Math.random(), pc = { ud: 0 }, Sq = w(function () {
															var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
																43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
																100, a
														}), Pq = [17, 18, 38, 32, 39, 15, 11, 7, 1], us = function () {
															var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
															return {
																yk: new RegExp("(" + I("|", a) + ")", "i"), Ik: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
																	")", "i"), wk: /ym-record-keys/i, Vi: "\u2022", Hk: 88
															}
														}(), Sj = eb(v(us.Vi, Q)), hd = !0, vg = "", wg = !1, xg = !0, yg = !1, kn = ha(function (a, c) { var b = G([a, "efv." + c.event], D); c.N = A(u(Q, b), c.N); return c }), Lk = w(function (a) {
															var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(tf), b.push(Wq), b.push(Xq)); a.document.addEventListener ? c.push(Qj) : (b.push(Pj), d.push(Qj)); c = sa([{ target: a, type: "window", event: "beforeunload", N: [B] }, { target: a, type: "window", event: "unload", N: [B] }, { event: "click", N: [Ae] }, { event: "dblclick", N: [Ae] }, {
																event: "mousedown",
																N: [Ae]
															}, { event: "mouseup", N: [Zq] }, { event: "keydown", N: [$q] }, { event: "keypress", N: [ar] }, { event: "copy", N: [Uj] }, { event: "blur", N: c }, { event: "focusin", N: b }, { event: "focusout", N: d }], !a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", N: [Wh] }, { target: a, type: "window", event: "blur", N: [tf] }] : [], a.document.addEventListener ? [{ event: "focus", N: [Pj] }, { event: "change", N: [Rj] }, { event: "submit", N: [Wj] }] : [{ type: "formInput", event: "change", N: [Rj] }, { type: "form", event: "submit", N: [Wj] }]); return jn(a, c)
														}), gn =
														w(function (a) { return sa(vc(a) ? [{ target: a, type: "document", event: "mouseleave", N: [br] }] : []) }), vs = ["submit", "beforeunload", "unload"], ws = w(function (a, c) { var b = c(a); return N(function (d, e) { d[e.type + ":" + e.event] = e.N; return d }, {}, b) }), xs = v(Lk, function (a, c, b, d) { return ws(c, a)[b + ":" + d] || [] }), hn = /^\s*function submit\(\)/, ys = F("fw.p", function (a, c) {
															var b; if (!(b = c.hf || !c.xb)) { var d = L(a), e = !1; b = d.o("hitParam", {}); var f = P(c); b[f] && (d = d.o("counters", {}), e = !(!rg(c.aa) || d[f])); b[f] = 1; b = e } if (b) return K.resolve(B); b = new ts(a,
																xs); return dn(a, c, b, Lk, vs)
														}), Xa = function () { function a(c, b, d) { this.Ji = "wv2.c"; this.Mb = []; this.ha = []; this.l = c; this.K = qf(c, this, d, this.Ji); this.F = b; this.ab = this.F.$h(); this.start = this.K.H(this.start, "st"); this.stop = this.K.H(this.stop, "sp") } a.prototype.start = function () { var c = this; this.Mb = A(function (b) { var d = b[0], e = b[2]; b = C(c.K.H(b[1], d[0]), c); return c.ab.D(e || c.l, d, b) }, this.ha) }; a.prototype.stop = function () { z(ya, this.Mb) }; a.prototype.Y = function (c) { return this.F.qa().Y(c) }; return a }(), bn = ["checkbox", "radio"],
													cn = /pwd|value|password/i, Jg = V("location.href"), zs = function (a) {
														function c(b, d, e) { d = a.call(this, b, d, e) || this; d.na = { elements: [], attributes: [] }; d.index = 0; d.ee = d.K.H(d.ee, "o"); d.wd = d.K.H(d.wd, "io"); d.ld = d.K.H(d.ld, "ao"); d.ve = d.K.H(d.ve, "a"); d.te = d.K.H(d.te, "at"); d.xe = d.K.H(d.xe, "r"); d.ue = d.K.H(d.ue, "c"); d.ta = new b.MutationObserver(d.ee); return d } Ha(c, a); c.prototype.start = function () {
															this.ta.observe(this.l.document.documentElement, {
																attributes: !0, characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0,
																characterDataOldValue: !0
															})
														}; c.prototype.stop = function () { this.ta.disconnect() }; c.prototype.ld = function (b) { var d = b.target; b = b.attributeName; var e = this.na.elements.indexOf(d); -1 === e && (e = this.na.elements.push(d) - 1, this.na.attributes[e] = {}); this.na.attributes[e] || (this.na.attributes[e] = {}); e = this.na.attributes[e]; var f = d.getAttribute(b); e[b] = Sd(this.l, d, b, f, this.F.zc()).value }; c.prototype.wd = function (b) {
															function d(k) { var l = Mb(e.l)(k, f); return -1 === l ? (f.push(k), k = { Cd: {} }, g.push(k), k) : g[l] } var e = this, f = [],
																g = []; z(function (k) { var l = k.attributeName, m = k.removedNodes, p = k.oldValue, q = k.target, r = k.nextSibling, t = k.previousSibling; switch (k.type) { case "attributes": e.ld(k); var y = d(q); y.Cd[l] || (y.Cd[l] = Sd(e.l, q, l, p, e.F.zc()).value); break; case "childList": m && z(function (E) { y = d(E); y.sf || x(y, { sf: q, Qh: r ? r : void 0, Rh: t ? t : void 0 }) }, na(m)); break; case "characterData": y = d(q), y.tf || (y.tf = p) } }, b); var h = this.F.qa(); z(function (k, l) { h.Fe(k, g[l]) }, f)
														}; c.prototype.ee = function (b) {
															var d = this; if (Jg(this.l)) {
																var e = this.F.L(); this.wd(b);
																z(function (f) { var g = f.addedNodes, h = f.removedNodes, k = f.target; switch (f.type) { case "childList": h && h.length && d.xe(na(h), e); g && g.length && d.ve(na(g), e); break; case "characterData": d.ue(k, e) } }, b); this.te(e)
															} else this.stop()
														}; c.prototype.te = function (b) { var d = this; z(function (e, f) { var g = d.yc(); d.F.X("mutation", { index: g, attributes: d.na.attributes[f], target: d.Y(e) }, "ac", b) }, this.na.elements); this.na.elements = []; this.na.attributes = [] }; c.prototype.ve = function (b, d) {
															var e = this, f = this.yc(); this.F.qa().Dc({
																ia: b, ad: function (g) {
																	g =
																	A(function (h) { h = x({}, h); delete h.node; return h }, g); e.F.X("mutation", { index: f, ia: g }, "ad", d)
																}
															})
														}; c.prototype.xe = function (b, d) { var e = this, f = this.yc(), g = this.F.qa(), h = A(function (k) { var l = g.removeNode(k); Ph(e.l, k, function (m) { g.removeNode(m) }); return l }, b); this.F.X("mutation", { index: f, ia: h }, "re", d) }; c.prototype.ue = function (b, d) { var e = this.yc(); this.F.X("mutation", { value: b.textContent, target: this.Y(b), index: e }, "tc", d) }; c.prototype.yc = function () { var b = this.index; this.index += 1; return b }; return c
													}(Xa), As = function () {
														function a(c,
															b) {
																var d = this; this.tc = []; this.bb = []; this.ce = 1; this.La = 0; this.lb = {}; this.Gc = {}; this.Od = function (f) { return d.bb.length ? H(f, d.bb) : !1 }; this.removeNode = function (f) { var g = d.Y(f), h = Ga(f); if (h) return h = "NR:" + h.toLowerCase(), d.Od(h) && d.ba.O(h, { data: { node: f, id: g } }), g }; this.gb = function (f) { var g = Ga(f); if (g) { var h = f.__ym_indexer; h || (h = d.ce, f.__ym_indexer = h, d.ce += 1, g = "NA:" + g.toLowerCase(), d.Od(g) && d.ba.O(g, { data: { node: f, id: h } })); return h } return null }; this.l = c; var e = qf(c, this, "i"); this.ba = dd(c); this.options = b; this.start =
																	e.H(this.start, "st"); this.stop = e.H(this.stop, "sp"); this.Y = e.H(this.Y, "i"); this.Fe = e.H(this.Fe, "o"); this.Dc = e.H(this.Dc, "a"); this.removeNode = e.H(this.removeNode, "r"); this.ea = e.H(this.ea, "s")
														} a.prototype.Fe = function (c, b) { var d = this.gb(c); Oa(d) || (this.Gc[d] && this.Y(c), this.Gc[d] = b) }; a.prototype.D = function (c, b, d) { c = "" + b + c; this.bb.push(c); this.Od(c) || this.bb.push(c); this.ba.D([c], d) }; a.prototype.fa = function (c, b, d) { var e = "" + b + c; this.bb = X(function (f) { return f !== e }, this.bb); this.ba.fa([e], d) }; a.prototype.start =
															function () { this.La = Y(this.l, u(C(this.ea, this, !1), this.start), 50, "i.s") }; a.prototype.stop = function () { this.flush(); ka(this.l, this.La); this.tc = [] }; a.prototype.Dc = function (c) { var b = this, d = [], e = 0, f = { ad: c.ad, result: [], Fc: 0, ia: d }; this.tc.push(f); z(function (g) { Ph(b.l, g, function (h) { var k = b.gb(h); Oa(k) || (d.push(h), b.lb[k] && b.Y(h), b.lb[k] = { node: h, event: f, Nj: e }, e += 1) }) }, c.ia) }; a.prototype.Y = function (c) {
																if (c === this.l) return 0; var b = this.gb(c), d = this.lb[b], e = this.Uh(b), f = e.sf, g = e.Cd, h = e.tf, k = e.Qh, l = e.Rh; if (d) {
																	e =
																	d.event; d = d.Nj; var m = this.l.document.documentElement === c; k = k || c.nextSibling; var p = l || c.previousSibling; l = !m && k ? this.gb(k) : null; p = !m && p ? this.gb(p) : null; m = this.l; k = this.options; f = this.gb(f || c.parentNode || c.parentElement) || 0; var q = g, r = void 0; void 0 === p && (p = null); void 0 === l && (l = null); void 0 === q && (q = {}); void 0 === r && (r = Ga(c)); if (W(r)) c = void 0; else {
																		g = { id: b, se: p !== f ? p : null, next: l !== f ? l : null, parent: f, name: r.toLowerCase(), node: c }; if (rf(c)) {
																			if (h = Zm(c, h), g.attributes = {}, g.content = h) if (c = fd(m, c)) g.content = "" !==
																				h.trim() ? qn(m, h) : h, g.hidden = c
																		} else h = $m(m, c, k, q, r), m = h.jb, g.attributes = h.eh, m && (g.hidden = m), c.namespaceURI && mc(c.namespaceURI, "svg") && (g.Sf = c.namespaceURI); c = g
																	} if (W(c)) return; delete this.lb[b]; e.result[d] = c; e.Fc += 1; e.ia.length === e.Fc && e.ad(e.result)
																} return b
															}; a.prototype.flush = function () { this.ea(!0) }; a.prototype.ea = function (c) {
																var b = this; if (Jg(this.l)) {
																	var d = ca(this.lb); d = A(function (e) { return b.lb[e].node }, d); d = rc(d, this.Y); c = c ? Ui(B) : Si(this.l, 20); d(c); this.tc = X(function (e) { return e.Fc !== e.result.length },
																		this.tc)
																}
															}; a.prototype.Uh = function (c) { if (Oa(c)) return {}; var b = this.Gc[c]; return b ? (delete this.Gc[c], b) : {} }; return a
													}(), Bs = ["input", "change", "keyup", "paste", "cut"], Cs = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.inputs = {}; b.yd = !1; b.Qc = b.K.H(b.Qc, "ii"); b.Rc = b.K.H(b.Rc, "ir"); b.Wc = b.K.H(b.Wc, "ri"); b.hd = b.K.H(b.hd, "ur"); b.Nd = b.K.H(b.Nd, "ce"); b.Cc = b.K.H(b.Cc, "vc"); return b } Ha(c, a); c.prototype.start = function () {
															var b = this, d = this.F.qa(); this.yd = this.nh(); z(function (e) {
																e = e.toLowerCase(); d.D(e,
																	"NA:", C(b.Qc, b)); d.D(e, "NR:", C(b.Rc, b))
															}, xf); this.Mb = [this.ab.D(this.l.document, Bs, C(this.Nd, this)), function () { z(function (e) { e = e.toLowerCase(); d.fa(e, "NA:", b.Qc); d.fa(e, "NR:", b.Rc) }, xf); z(b.hd, ca(b.inputs)) }]
														}; c.prototype.hd = function (b) { if (this.yd) { var d = this.inputs[b]; d && (b = d.ej, d = d.element, b && this.l.Object.defineProperty(d, this.Ac(d), b)) } }; c.prototype.Rc = function (b) { b && this.hd(b.data.id) }; c.prototype.Qc = function (b) { b && (b = b.data, this.Wc(b.node, b.id)) }; c.prototype.Ac = function (b) {
															return se(b) ? "checked" :
																"value"
														}; c.prototype.Nd = function (b) { if (b = b.target) { var d = this.Ac(b); this.Cc(b[d], b) } }; c.prototype.Cc = function (b, d) { var e = this.Y(d), f = this.inputs[e]; if (!f && (f = this.Wc(f, e), !f)) return; e = f.ph; var g = f.value, h = this.Ac(d); b && !H(typeof b, ["string", "boolean", "number"]) || b === g || (g = Sd(this.l, d, h, b, this.F.zc()).value, e ? this.F.X("event", { target: this.Y(d), checked: !!b }, "change") : (e = Td(d), h = vf(d), this.F.X("event", { value: g, hidden: h && !e, target: this.Y(d) }, "change")), f.value = b) }; c.prototype.Wc = function (b, d) {
															var e = this;
															if (!of(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null; var f = se(b), g = this.Ac(b), h = { element: b, ph: f, value: b[g] }; this.inputs[d] = h; this.yd && Kb(this.l, function () { var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}, l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}, m = x({}, k, l); if (Aa("((set)?(\\s?" + g + ")?)?", m.set)) { try { e.l.Object.defineProperty(b, g, x({}, m, { configurable: !0, set: function (p) { e.Cc(p, this); return m.set.call(this, p) } })) } catch (p) { } h.ej = m } });
															return h
														}; c.prototype.nh = function () {
															var b = !0, d = Ya(this.l)("input"); try {
																d = Ya(this.l)("input"); d.value = "INPUT_VALUE"; d.style.setProperty("display", "none", "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}, f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}, g = x({}, e, f); this.l.Object.defineProperty(d, "value", x({}, g, { configurable: !0, set: function (h) { return g.set.call(d, h) } }));
																"INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
															} catch (h) { b = !1 } return b
														}; return c
													}(Xa), Ds = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Sa = { width: 0, height: 0, pb: 0, qb: 0, orientation: 0 }; b.ha.push([["resize"], b.cj]); b.ha.push([["orientationchange"], b.aj]); return b } Ha(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.jg() }; c.prototype.cj = function () { var b = this.Ld(); this.vi(b) && (this.Sa = b, this.kg(b)) }; c.prototype.aj = function () {
															var b = this.Ld();
															this.Sa.orientation !== b.orientation && (this.Sa = b, this.wj(b))
														}; c.prototype.Pf = function (b) { return !b.height || !b.width || !b.qb || !b.pb }; c.prototype.vi = function (b) { return b.height !== this.Sa.height || b.width !== this.Sa.width }; c.prototype.Ld = function () { var b = this.F.fb(), d = yd(this.l), e = d[0]; d = d[1]; b = b.Kd(); return { width: e, height: d, qb: b ? b.scrollWidth : 0, pb: b ? b.scrollHeight : 0, orientation: this.F.fb().bi() } }; c.prototype.wj = function (b) {
															var d; void 0 === d && (d = this.F.L()); this.F.X("event", {
																width: b.width, height: b.height,
																orientation: b.orientation
															}, "deviceRotation", d)
														}; c.prototype.kg = function (b, d) { void 0 === d && (d = this.F.L()); this.F.X("event", { width: b.width, height: b.height, qb: b.qb, pb: b.pb }, "resize", d) }; c.prototype.jg = function () { var b = this.Ld(); this.Pf(b) ? Y(this.l, C(this.jg, this), 300) : (this.Pf(this.Sa) && (this.Sa = b), this.kg(b, 0)) }; return c
													}(Xa), Oe = function () {
														function a(c) { this.index = 0; this.ub = {}; this.l = c } a.prototype.kc = function (c, b, d) {
															void 0 === d && (d = {}); var e = da(this.l), f = this.index; this.index += 1; this.ub[f] = {
																La: 0, Ub: !1,
																Oh: c, bc: [], Xd: e(Z)
															}; var g = this; return function () { var h = Ba(arguments), k = d.cb && !g.ub[f].Ub, l = g.ub[f]; ka(g.l, l.La); l.bc = h; l.Ub = !0; var m = e(Z); if (k || m - l.Xd >= b) c.apply(void 0, h), l.Xd = m; l.La = Y(g.l, function () { k || (c.apply(void 0, h), l.Xd = e(Z)); l.Ub = !1; l.bc = [] }, b, "th") }
														}; a.prototype.flush = function () { var c = this; z(function (b) { var d = c.ub[b], e = d.La, f = d.Oh, g = d.bc; d.Ub && (c.ub[b].Ub = !1, f.apply(void 0, g), ka(c.l, e)) }, ca(this.ub)) }; return a
													}(), Es = function (a) {
														function c(b, d, e) {
															d = a.call(this, b, d, e) || this; d.zg = []; d.Ue = {
																x: 0,
																y: 0
															}; d.wa = new Oe(b); d.Uc = d.K.H(d.Uc, "o"); d.ha.push([["scroll"], d.dj]); return d
														} Ha(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.F.X("event", { x: Math.max(this.l.scrollX, 0), y: Math.max(this.l.scrollY, 0), page: !0, target: -1 }, "scroll", 0) }; c.prototype.stop = function () { a.prototype.stop.call(this); this.wa.flush() }; c.prototype.dj = function (b) {
															if (this.F.fb().If()) this.Uc(b); else {
																var d = b.target, e = X(function (f) { return f[0] === d }, this.zg).pop(); e ? e = e[1] : (e = this.wa.kc(C(this.Uc, this), 100, { cb: !0 }),
																	this.zg.push([d, e])); e(b)
															}
														}; c.prototype.Uc = function (b) { var d = this.F.fb().Kd(); b = b.target; var e = this.Gb(b); d = Na(ja(b), [d, this.l, this.l.document]); var f = Math.max(e.left, 0); e = Math.max(e.top, 0); if (d) { if (this.Ue.x === f && this.Ue.y === e) return; this.Ue = { x: f, y: e } } this.F.X("event", { x: f, y: e, page: d, target: d ? -1 : this.Y(b) }, "scroll") }; c.prototype.Gb = function (b) {
															var d = { left: 0, top: 0 }; if (!b) return d; if (b.window === b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView ||
																e.parentWindow, h = e.body; return b !== e || (b = this.F.fb().Kd(), b) ? H(b, [f, h]) ? { top: b.scrollTop || g.scrollY, left: b.scrollLeft || g.scrollX } : { top: b.scrollTop || 0, left: b.scrollLeft || 0 } : d
														}; return c
													}(Xa), Fs = ["mousemove", "mousedown", "mouseup", "click"], Gs = function (a) {
														function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ha.push([Fs, d.$i]); d.wa = new Oe(b); d.Nc = d.K.H(d.Nc, "n"); d.Ej = d.K.H(d.wa.kc(C(d.Nc, d), 100), "t"); return d } Ha(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.wa.flush() }; c.prototype.$i = function (b) {
															var d =
																null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.Ej(b) : this.Nc(b)
														}; c.prototype.Nc = function (b) { var d = b.type, e = b.clientX; e = void 0 === e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.l.document.elementFromPoint(e, f); this.F.X("event", { x: e || 0, y: f || 0, target: this.Y(b) }, d) }; return c
													}(Xa), Hs = ["focus", "blur"], Is = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ha.push([Hs, b.Ph]); return b } Ha(c, a); c.prototype.Ph = function (b) {
															var d = b.target; b = b.type; this.F.X("event", {
																target: this.Y(d ===
																	this.l ? this.l.document.documentElement : d)
															}, b)
														}; return c
													}(Xa), Js = w(function (a) { var c = Ja(a.getSelection, "getSelection"); return c ? C(c, a) : B }), Ks = u(Js, ya), Ls = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], Ms = /text|search|password|tel|url/, Ns = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Pd = !1; b.ha.push([Ls, b.si]); return b } Ha(c, a); c.prototype.si = function (b) {
															var d = this.F, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.ii(b) : this.gi()) && e.start !== e.end ?
																(this.Pd = !0, d.X("event", e, "selection")) : this.Pd && (this.Pd = !1, d.X("event", { start: 0, end: 0 }, "selection"))
														}; c.prototype.gi = function () { var b = Ks(this.l); if (b && 0 < b.rangeCount) { b = b.getRangeAt(0) || this.l.document.createRange(); var d = this.Y(b.startContainer), e = this.Y(b.endContainer); if (!W(d) && !W(e)) return { start: b.startOffset, end: b.endOffset, ug: d, jf: e } } }; c.prototype.ii = function (b) { if (Ms.test(b.type || "")) { var d = this.Y(b); if (!W(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
													}(Xa), Os = {
														focus: "windowfocus",
														blur: "windowblur"
													}, Ps = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.visibility = null; W(b.l.document.hidden) ? W(b.l.document.msHidden) ? W(b.l.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.K.H(b.handleEvent, "e"); return b } Ha(c, a); c.prototype.start = function () {
															this.Mb = [this.ab.D(this.l, this.visibility ? [this.visibility.event] :
																["focus", "blur"], C(this.handleEvent, this))]
														}; c.prototype.handleEvent = function (b) { this.F.X("event", {}, Os[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type]) }; return c
													}(Xa), Qs = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], Rs = function (a) {
														function c(b, d, e) {
															d = a.call(this, b, d, e) || this; d.ed = {}; d.scrolling = !1; d.hg = 0; d.ha.push([["scroll"], d.tj, d.l.document]); d.ha.push([Qs, d.Ij, d.l.document]); d.wa = new Oe(b); d.Lb = d.K.H(d.Lb, "nh"); d.Fj = d.K.H(d.wa.kc(d.Lb, d.F.fb().If() ?
																0 : 50, { cb: !0 }), "th"); return d
														} Ha(c, a); c.prototype.tj = function () { var b = this; this.scrolling = !0; ka(this.l, this.hg); this.hg = Y(this.l, function () { b.scrolling = !1 }, 150) }; c.prototype.Ij = function (b) { var d = this, e = "touchcancel" === b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && z(function (f) { var g = d.li(f); f.__ym_touch_id = g; e && delete d.ed[f.identifier] }, na(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.Lb(b) : this.Fj(b, this.F.L()) : this.Lb(b) }; c.prototype.li = function (b) {
															this.ed[b.identifier] ||
															(this.ed[b.identifier] = Nh()); return this.ed[b.identifier]
														}; c.prototype.Lb = function (b, d) { void 0 === d && (d = this.F.L()); var e = b.type, f = A(function (g) { return { id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY), force: g.force } }, na(b.changedTouches)); 0 < f.length && this.F.X("event", { touches: f, target: this.Y(b.target) }, e, d) }; return c
													}(Xa), Ss = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ha.push([["load"], b.Zi, b.l.document]); return b } Ha(c, a); c.prototype.Zi = function (b) {
															b = b.target; "IMG" ===
																Ga(b) && b.getAttribute("srcset") && this.F.X("event", { target: this.Y(b), value: b.currentSrc }, "srcset")
														}; return c
													}(Xa), Ts = function (a) {
														function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Lg = 1; d.wa = new Oe(b); d.dc = d.K.H(d.dc, "z"); return d } Ha(c, a); c.prototype.start = function () { if (this.Df()) { a.prototype.start.call(this); this.dc(); var b = this.ab.D(n(this.l, "visualViewport"), ["resize"], this.wa.kc(this.dc, 10)); this.Mb.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.wa.flush() }; c.prototype.dc = function () {
															var b =
																this.Df(); b && b !== this.Lg && (this.Lg = b, this.xj(b))
														}; c.prototype.Df = function () { var b = gg(this.l); return b ? b[2] : null }; c.prototype.xj = function (b) { var d = Ef(this.l); this.F.X("event", { x: d.x, y: d.y, level: b }, "zoom") }; return c
													}(Xa), Hd, Pe = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, Mk = { "super": 1, qk: 2, alt: 3, shift: 4, Ok: 5, "delete": 6, mk: 6 }, Us = [4, 9, 8, 32, 37, 38, 39, 40, 46], Nk = (Hd = {}, Hd["1"] = {
														91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;",
														9: "&#8677;", 8: "&#9003;", 46: "&#9003;"
													}, Hd["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, Hd.Ni = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, Hd), Vs = /flash/, Ws = /ym-disable-keys/, Xs = /^&#/, Ys = function (a) {
														function c(b, d, e) {
															d = a.call(this, b, d, e) || this; d.hb = {}; d.Ha = 0; d.Aa = []; d.xg = []; d.rc = 0; d.cg = 0; d.ha.push([["keydown"], d.ni]); d.ha.push([["keyup"], d.oi]); d.Ug = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" :
																"2"; d.Jc = d.K.H(d.Jc, "v"); d.Ad = d.K.H(d.Ad, "ec"); d.$c = d.K.H(d.$c, "sk"); d.Jd = d.K.H(d.Jd, "gk"); d.Ge = d.K.H(d.Ge, "sc"); d.cc = d.K.H(d.cc, "cc"); d.reset = d.K.H(d.reset, "r"); d.Yc = d.K.H(d.Yc, "rs"); return d
														} Ha(c, a); c.prototype.ni = function (b) { if (this.Jc(b) && !this.Ei(b)) { var d = b.keyCode; b.repeat || this.hb[d] || (this.hb[b.keyCode] = !0, Pe[b.keyCode] && !this.Ha ? (this.Ha += 1, this.Ge(b), this.reset(300)) : this.Ha ? (this.kh(), this.ze(b), this.Ad()) : (this.reset(), this.ze(b))) } }; c.prototype.oi = function (b) {
															if (this.Jc(b)) {
																var d = b.keyCode,
																e = Pe[b.keyCode]; this.hb[b.keyCode] && (this.hb[d] = !1); e && this.Ha && (this.Ha = 0, this.hb = {}); 1 === this.Aa.length && (b = this.Aa[0], H(b.keyCode, Us) && (this.$c([b], !0), this.reset())); this.Aa = X(u(ja(d), Sb), this.Aa); ka(this.l, this.rc)
															}
														}; c.prototype.Jc = function (b) { var d = this.l.document.activeElement; b = b.target; return !Na(Boolean, [d && "OBJECT" === d.nodeName && Vs.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Ws.test(b.className)]) }; c.prototype.Ad = function () {
															this.xg = this.Aa.slice(0);
															ka(this.l, this.rc); this.rc = Y(this.l, v(this.xg, C(this.$c, this)), 0, "e.c")
														}; c.prototype.$c = function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.Jd(b); this.F.X("event", { Kc: e }, "keystroke") } }; c.prototype.Jd = function (b) { var d = this; b = A(function (e) { e = e.keyCode; var f = Pe[e], g = d.ai(e); return { id: e, key: g, Mf: !!f && Xs.test(g), Lc: f } }, b); return jg(function (e, f) { return (Mk[e.Lc] || 100) - (Mk[f.Lc] || 100) }, b) }; c.prototype.ai = function (b) { return Nk[this.Ug][b] || Nk.Ni[b] || String.fromCharCode(b) }; c.prototype.ze = function (b) {
															H(b,
																this.Aa) || this.Aa.push(b)
														}; c.prototype.Ge = function (b) { this.ze(b); this.cc() }; c.prototype.cc = function () { this.Ha ? Y(this.l, this.cc, 100) : this.Aa = [] }; c.prototype.kh = function () { ka(this.l, this.cg) }; c.prototype.reset = function (b) { b ? this.cg = Y(this.l, C(this.Yc, this), b) : this.Yc() }; c.prototype.Yc = function () { this.Ha = 0; this.Aa = []; this.hb = {}; ka(this.l, this.rc) }; c.prototype.Ei = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Pe[b.keyCode] : !1 }; return c
													}(Xa), Ym = ["sr", "sd",
														"\u043d"], Zs = /allow-same-origin/, $s = function (a) {
															function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Wb = []; d.Ed = {}; d.fe = d.K.H(d.fe, "fi"); d.ie = d.K.H(d.ie, "sd"); d.je = d.K.H(d.je, "src"); d.ta = new b.MutationObserver(d.je); return d } Ha(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.F.zc().Bb && this.F.qa().D("iframe", "NA:", C(this.fe, this)); this.F.zf().Hd().D(["sdr"], C(this.ie, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); z(function (b) { b.F.stop() }, this.Wb) }; c.prototype.je = function (b) {
																var d =
																	b.pop().target; if (b = Za(function (f) { return f.Hf === d }, this.Wb)) { this.Wb = X(function (f) { return f.Hf !== d }, this.Wb); var e = b.F.Id(); try { b.F.stop() } catch (f) { } this.jc(d, e) }
															}; c.prototype.fe = function (b) { if (b) { var d = b.data.node; this.ta.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.jc(d, b.data.id) } }; c.prototype.jc = function (b, d) { var e = this; this.Bi(b) && Yb(this.l, b)(Ua(B, function () { var f = e.F.jc(b.contentWindow, d); e.Wb.push({ F: f, Hf: b }) })) }; c.prototype.ie = function (b) {
																var d = this, e = b.M; b = b.data; this.Ed[e] ||
																	(this.Ed[e] = { data: [] }); var f = this.Ed[e]; f.data = f.data.concat(b); this.l.isNaN(f.xd) && z(function (g) { "page" === g.type && (f.xd = g.data.Ba - d.F.Af()) }, f.data); this.l.isNaN(f.xd) || (this.F.ea(A(function (g) { g.L += f.xd; g.L = d.l.Math.max(0, g.L); return g }, f.data)), f.data = [])
															}; c.prototype.Bi = function (b) { var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return b.getAttribute("_ym_ignore") || e && !e.match(Zs) || d && "about:blank" !== d && (d = Ic(this.l, d).host) && T(this.l).host !== d ? !1 : n(b, "contentWindow.location.href") }; return c
														}(Xa),
													at = function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ce = b.K.H(b.Ce, "ps"); return b } Ha(c, a); c.prototype.start = function () { this.F.qa().Dc({ ia: [this.l.document.documentElement], ad: this.Ce }) }; c.prototype.Ce = function (b) {
															var d = this.F.ei(), e = d.Vh(), f = T(this.l), g = f.host, h = f.protocol; f = f.pathname; var k = yd(this.l), l = k[0]; k = k[1]; this.F.X("page", {
																content: A(function (m) { m = x({}, m); delete m.node; return m }, b), af: e || "", Ef: !!e, viewport: { width: l, height: k }, title: this.l.document.title, doctype: d.Xh() || "", Ye: this.l.location.href,
																Eg: this.l.navigator.userAgent, referrer: this.l.document.referrer, screen: { width: this.l.screen.width, height: this.l.screen.height }, location: { host: g, protocol: h, path: f }, Ba: this.F.Af(), dd: d.ji()
															}, "page", 0)
														}; return c
													}(Xa), bt = ["addRule", "removeRule", "insertRule", "deleteRule"], Kg = [[function (a) {
														function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ua = {}; b.Xb = {}; b.Ze = 0; b.Sc = b.K.H(b.Sc, "a"); b.tb = b.K.H(b.tb, "sr"); b.Tc = b.K.H(b.Tc, "r"); b.ea = b.K.H(b.ea, "d"); return b } Ha(c, a); c.prototype.start = function () {
															var b = this.F.qa();
															b.D("style", "NA:", this.Sc); b.D("style", "NR:", this.Tc); this.ea()
														}; c.prototype.stop = function () { var b = this; a.prototype.stop.call(this); var d = this.F.qa(); d.fa("style", "NA:", this.Sc); d.fa("style", "NR:", this.Tc); this.ea(); ka(this.l, this.Ze); z(function (e) { b.Ua[e].sheet && b.fg(b.Ua[e].sheet) }, ca(this.Ua)); this.Ua = {} }; c.prototype.ea = function () {
															var b = this; z(function (d) {
																var e = d[0]; d = d[1]; if (d.length) {
																	for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) {
																		var l = d[k], m = l.L; delete l.L; m <= g + 50 ? f.push(l) : (h.push(f), g = m,
																			f = [l])
																	} f.length && h.push(f); h.length && z(function (p) { b.F.X("event", { target: Fa(e), Ea: p }, "stylechange", g) }, h); delete b.Xb[e]
																}
															}, Ea(this.Xb)); this.Ze = Y(this.l, this.ea, 100)
														}; c.prototype.tb = function (b, d, e, f, g) { void 0 === f && (f = ""); void 0 === g && (g = -1); this.Xb[b] || (this.Xb[b] = []); this.Xb[b].push({ ke: d, style: f, index: g, L: e }) }; c.prototype.fj = function (b, d) {
															var e = this, f = b.addRule, g = b.removeRule, h = b.insertRule, k = b.deleteRule; U(f) && (b.addRule = function (l, m, p) { e.tb(d, "a", e.F.L(), l + "{" + m + "}", p); return f.call(b, l, m, p) });
															U(g) && (b.removeRule = function (l) { e.tb(d, "r", e.F.L(), "", l); return g.call(b, l) }); U(h) && (b.insertRule = function (l, m) { e.tb(d, "a", e.F.L(), l, m); return h.call(b, l, m) }); U(k) && (b.deleteRule = function (l) { e.tb(d, "r", e.F.L(), "", l); return k.call(b, l) })
														}; c.prototype.fg = function (b) { var d = this; z(function (e) { var f = d.l.CSSStyleSheet.prototype[e]; U(f) && (b[e] = C(f, b)) }, bt) }; c.prototype.Hh = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Sc = function (b) {
															var d = b.data; b = d.id; d = d.node; if (d.sheet &&
																!d.getAttribute("src") && !d.innerText) { var e = d.sheet, f = this.Hh(e); if (f && f.length) { for (var g = [], h = 0; h < f.length; h += 1)g.push({ style: f[h].cssText, index: h, ke: "a" }); this.F.X("event", { Ea: g, target: b }, "stylechange") } this.fj(e, b); this.Ua[b] = d }
														}; c.prototype.Tc = function (b) { b = b.data.id; var d = this.Ua[b]; d && (delete this.Ua[b], d.sheet && this.fg(d.sheet)) }; return c
													}(Xa), "ss"], [Cs, "in"], [zs, "mu"], [Ds, "r"], [Es, "sc"], [Gs, "mo"], [Is, "f"], [Ns, "se"], [Ps, "wf"], [Rs, "t"], [Ss, "src"], [Ts, "z"], [Ys, "ks"]]; Kg.push([$s, "if"]); Kg.push([at,
														"pa"]); var ct = w(function (a) { var c = a.document; return { Kd: function () { if (c.scrollingElement) return c.scrollingElement; var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body; return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null }, bi: function () { var b = a.screen; if (!b) return 0; var d = Za(v(b, n), ["orientation", "mozOrientation", "msOrientation"]); return n(b, d + ".angle") || 0 }, Ek: v(a, Ob), If: v(a, ld), Dk: v(a, ue) } }), dt = function () {
															function a(c, b) {
																var d = this; this.Ib = 0; this.nc = []; this.Hb = null;
																this.ra = this.Zb = this.vg = !1; this.Ba = 0; this.ei = function () { return d.page }; this.Id = function () { return d.Ib }; this.Af = function () { return d.Ba }; this.$h = function () { return d.ab }; this.zf = function () { return d.Hb }; this.qa = function () { return d.Qd }; this.L = function () { return d.Ke ? d.l.Math.max(d.Ke(Z) - d.Ba, 0) : 0 }; this.zc = function () { return d.options }; this.fb = function () { return d.gh }; this.X = function (f, g, h, k) { void 0 === k && (k = d.L()); f = d.Zh(f, g, h, k); d.ea(f) }; this.Zh = function (f, g, h, k) {
																	void 0 === k && (k = d.L()); return {
																		type: f, data: g,
																		L: k, M: d.Ib, event: h
																	}
																}; this.ea = function (f) { f = ea(f) ? f : [f]; d.vg && !d.Zb ? d.ra ? (f = A(function (g) { return g.M ? g : x(g, { M: d.Ib }) }, f), d.zf().lg(f)) : (f = A(Um, f), d.Ee(f)) : d.nc = d.nc.concat(f) }; this.l = c; var e = qf(c, this, "R"); this.He = e.H(this.He, "s"); this.ea = e.H(this.ea, "sd"); e = L(c); e.o("wv2e") && Se(); e.C("wv2e", !0); this.options = b; this.ab = ia(c); this.Qd = new As(this.l, b); this.gh = ct(c); this.bf = A(function (f) { return new f[0](c, d, f[1]) }, Kg); this.zi(); this.page = Wm(this.l); this.He()
															} a.prototype.start = function (c) {
																this.vg = !0; this.Ee =
																	c; this.ig()
															}; a.prototype.stop = function () { Jg(this.l) && (z(function (c) { return c.stop() }, this.bf), this.Qd.stop(), this.Hb && this.Hb.stop(), this.ra || this.X("event", {}, "eof")) }; a.prototype.jc = function (c, b) { var d = new a(c, x({}, this.options, { M: b })); d.start(B); return d }; a.prototype.zi = function () {
																var c = this; this.ra = !!this.options.M; this.Ib = this.options.M || 0; this.Zb = !this.ra; var b = this.options.Dg || []; b.push(T(this.l).host); this.Hb = Xm(this.l, this, b); b = this.Hb.Hd(); Ob(this.l) ? this.Zb && b.D(["i"], function (d) {
																	c.ra =
																	d.ra; c.Zb = !1; d.M && (c.Ib = d.M); c.ig()
																}) : this.Zb = this.ra = !1
															}; a.prototype.ig = function () { var c = this.nc.splice(0, this.nc.length); this.ea(c) }; a.prototype.He = function () { this.Ke = If(this.l); this.Ba = this.Ke(Z); z(function (c) { c.start() }, this.bf); this.Qd.start() }; return a
														}(), ba, et = (ba = {}, ba.mousemove = 0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel =
															16, ba.touchforcechange = 17, ba.canvasMethod = 18, ba.canvasProperty = 19, ba.zoom = 20, ba.resize = 21, ba.mediaMethod = 22, ba.mediaProperty = 23, ba.keystroke = 24, ba.deviceRotation = 25, ba.fatalError = 26, ba.hashchange = 27, ba.stylechange = 28, ba), Lg = ha(function (a, c) { var b; return b = {}, b[Sa(a)] = c, b }), ft = function () {
																function a(c) {
																	var b; this.isSync = !1; this.Eb = []; this.nf = []; this.l = c; this.Kb = (b = {}, b.event = C(this.Dh, this), b.page = Lg({ page: 1 }), b.mutation = Lg({ Oi: 1 }), b.activity = Lg({ Yg: 1 }), b); this.nf = [[["scroll"], { sj: 1 }], [["selection"],
																	{ uj: 1 }], [["change", "input"], { mh: 1 }], [["keystroke"], { Ii: 1 }, { Kc: 1 }], [["zoom"], { bk: 1 }], [["resize"], { nj: 1 }], [["windowfocus", "windowblur", "focus", "blur", "eof"], { Zj: 1 }], [["mousemove", "mouseup", "mousedown", "click"], { Mi: 1 }], [["deviceRotation"], { zh: 1 }], [["fatalError"], { Jh: 1 }], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], { Hj: 1 }, { touches: 1 }, { touches: 1 }], [["hashchange"], { wi: 1 }], [["stylechange"], { zj: 1 }, { Ea: 1 }, { Ea: 1 }]]
																} a.prototype.Dh = function (c) {
																	var b, d, e = c.type, f = Za(u(Kc, v(e, H)), this.nf);
																	f || fb(zc("vem." + e)); "eof" === e && (this.isSync = !0); var g = f[1], h = f[2]; f = f[3]; var k = c.Z; return { event: (b = { type: et[e], target: c.target, M: c.M }, b[Sa(g)] = h ? (d = {}, d[Sa(h)] = f ? k[Sa(f)] : k, d) : k, b) }
																}; a.prototype.Ca = function (c, b) {
																	var d = this; void 0 === b && (b = !1); var e = rc(c, function (h) { var k = !W(h.partNum); return { data: k ? void 0 : d.Kb[h.type](h.data), qh: k ? h.data : void 0, page: h.partNum, end: h.end, L: h.L } }), f = this.isSync || b ? Infinity : 10; e = uc(this.l, e, f); var g = [e]; this.Eb.push(e); return e(Ge(function (h) {
																		h = Wd(d.l, di, { buffer: h }); h =
																			uc(d.l, h, f, ke); g.push(h); d.Eb.push(h); return h
																	}))(Ge(function (h) { h = zf(d.l, h.slice(-4)); h = uc(d.l, h, f, ke); g.push(h); d.Eb.push(h); return h }))(Bg(function (h) { h = h[h.length - 1]; z(function (k) { k = Be(d.l)(k, d.Eb); d.Eb.splice(k, 1) }, g); return h }))
																}; a.prototype.Ja = function (c) { return Wd(this.l, Cf, this.Kb[c.type](c.data))(le(B)) }; a.prototype.Oa = function (c) { return c[0] }; a.prototype.cd = function (c, b) { for (var d = zf(this.l, c)(le(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)f.push(d.slice(g * e, e * (g + 1))); return f }; a.prototype.isEnabled =
																	function () { return ci(this.l) }; return a
															}(), gt = function () {
																return function (a, c, b, d) {
																	var e = this; this.nd = this.Ob = !1; this.Ra = []; this.Rf = []; this.kf = []; this.send = function (f, g, h, k) { f = e.sender(f, e.ic, g); h && k && f.then(h, k); return f }; this.Je = function (f, g, h, k) { return new K(function (l, m) { f.push([g, h, l, m, k]) }) }; this.ti = function () { e.Ra = jg(function (h, k) { return h[4].partNum - k[4].partNum }, e.Ra); var f = N(function (h, k, l) { k = k[4]; return h && l + 1 === k.partNum }, !0, e.Ra), g = !!e.Ra[e.Ra.length - 1][4].end; return f && g }; this.Bd = function (f) {
																		Rg(e.l,
																			f.slice(), function (g) { e.send(g[0], g[1], g[2], g[3]) }, 20, "s.w2.sf.fes"); f.splice(0, f.length)
																	}; this.Nh = function () { e.nd || (e.nd = !0, e.Bd(e.Rf), e.Bd(e.kf)) }; this.oh = function (f) { return N(function (g, h) { var k = "page" === h.type && !h.M, l = "eof" === h.data.type, m = k && !!h.partNum; return { sd: g.sd || m, rd: g.rd || k, qd: g.qd || l } }, { rd: !1, qd: !1, sd: !1 }, f) }; this.ri = function (f, g, h, k) { k ? (f = e.Je(e.Ra, f, g, h[0]), e.ti() && (e.Bd(e.Ra), e.Ob = !0)) : (e.Ob = !0, f = e.send(f, g)); return f }; this.mi = function (f) {
																		var g; return e.Di ? (g = {}, g["wv-type"] = Na(function (h) {
																			return "eof" ===
																				n(h, "data.type")
																		}, f) ? "2" : "8", g) : {}
																	}; this.Bf = function (f, g, h) { g = { G: e.mi(h), J: za(), ca: g, Ia: { df: !f && bi(h), Kf: e.Ai } }; f && g.J.C("bt", 1); return g }; this.Eh = function (f, g, h) { f = e.Bf(!1, f, g); return e.Ob ? e.send(f, h) : e.Je(e.kf, f, h, g) }; this.Pi = function (f, g, h) { f = e.Bf(!0, f, g); if (e.Ob) return e.send(f, h); var k = e.oh(g), l = k.rd, m = k.qd; k = k.sd; var p; l && (p = e.ri(f, h, g, k)); e.nd ? l || (p = e.send(f, h)) : (l || (p = e.Je(e.Rf, f, h, g)), (e.Ob || m) && e.Nh()); return p }; this.Di = d; this.l = a; this.Ai = b; this.sender = ta(a, "W", c); this.ic = c
																}
															}(), ht = F("w2",
																function (a, c) {
																	function b() { h = !0 } var d = L(a), e = P(c); if (!c.xb || Xc(a) || !a.MutationObserver || !Aa("Element", a.Element)) return B; Aa("MutationObserver", a.MutationObserver) || od(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment"); var f = ua(function (k, l) { ma(a, c, l)["catch"](k) }), g = Yb(a)(Ge(G([a, c], Sm)))(Bg(function (k) { return new dt(a, k) })), h = !1; Op([g, f])(Ua(D(a, "wv2.R.c"), function (k) {
																		var l = k[0]; k = k[1]; if (!h) {
																			b = function () { h || (h = !0, l && l.stop()) }; var m = d.o("wv2Counter");
																			if (!Sh(a, k) || m) b(); else if (ia(a).D(a, ["beforeunload", "unload"], b), d.C("wv2Counter", e), d.C("stopRecorder", b), k = [new Ne(a)], k.unshift(new ft(a)), k = Za(function (t) { return t.isEnabled() }, k)) {
																				m = new gt(a, c, !(k instanceof Ne), 0); var p = Fg.Gd(e, "m", C(m.Pi, m), k, a), q = Fg.Gd(e, "e", C(m.Eh, m), k, a); k = Tm(); m = k.Xi; q.D("ag", k.ah); q.D("p", m); p.D("see", function (t) { var y = !1; z(function (E) { "page" === E.type && (y = !0) }, t); y && (h || q.push({ type: "event", data: { type: "fatalError", Z: { code: "invalid-snapshot", Fh: "p.s.f", stack: "" } } }), b()) });
																				var r = eb(function (t) { "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t) }); Y(a, b, 864E5); Kb(a, function () { l.start(r) })
																			}
																		}
																	})); return function () { return b() }
																}), Qe = F("dl.w", function (a, c, b) { var d = 0; ne(a, a[c], b) || (d = Y(a, function () { Qe(a, c, b) }, 1E3, "ec.dl")); return function () { return ka(a, d) } }), it = F("p.e", function (a, c) {
																	var b = Da(a, c); if (b) {
																		var d = L(a); b = C(b.params, b); var e = D(a, "h.ee", G([a, P(c), b], Om)), f, g = function (k) { f = k; k.ta.D(e) }; if (c.qc) return d.C("ecs", 0), Qe(a, c.qc,
																			g); var h = ma(a, c, function (k) { k = n(k, "settings.ecommerce"); d.C("ecs", 1); return k ? Qe(a, k, g) : B }); return function () { h.then(function (k) { k(); f && f.unsubscribe() }) }
																	}
																}), Ok = F("fbq.o", function (a, c, b) { var d = n(a, "fbq"); if (d && d.callMethod) { var e = function () { var g = Ba(arguments), h = d.apply(void 0, g); c(g); return h }; x(e, d); b && z(c, b); a.fbq = e } else var f = Y(a, G([a, c, sa(na(d && d.queue))], Ok), 1E3, "fbq.d"); return C(ka, null, a, f) }), jt = F("ecm.a", v("add", Qd)), kt = F("ecm.r", v("remove", Qd)), lt = F("ecm.d", v("detail", Qd)), mt = F("ecm.p",
																	v("purchase", Qd)), Tc, zb, Uc, Mg = (Tc = {}, Tc.add_to_wishlist = "add-to-wishlist", Tc.begin_checkout = "begin-checkout", Tc.generate_lead = "submit-lead", Tc.add_payment_info = "add-payment-info", Tc), Ng = (zb = {}, zb.AddToCart = "add-to-cart", zb.Lead = "submit-lead", zb.InitiateCheckout = "begin-checkout", zb.Purchase = "purchase", zb.CompleteRegistration = "register", zb.Contact = "submit-contact", zb.AddPaymentInfo = "add-payment-info", zb.AddToWishlist = "add-to-wishlist", zb.Subscribe = "subscribe", zb), Lm = (Uc = {}, Uc["1"] = Mg, Uc["2"] = Mg, Uc["3"] =
																		Mg, Uc["0"] = Ng, Uc), Mm = [Ng.AddToCart, Ng.Purchase], nt = ha(function (a, c) { var b = n(c, "ecommerce"), d = n(c, "event") || ""; if (!(b = b && d && { version: "3", sc: d })) a: { if (ea(c) || La(c)) if (b = Ba(c), d = b[1], "event" === b[0] && d) { b = { version: "2", sc: d }; break a } b = void 0 } b || (b = (b = n(c, "ecommerce")) && { version: "1", sc: I(",", ca(b)) }); b && a(b) }), ot = F("ag.e", function (a, c) {
																			var b = [], d = D(a, "ag.s", G([ya, b], z)); "0" === c.aa && ma(a, c, function (e) {
																				if (n(e, "settings.auto_goals") && Da(a, c) && (e = Kd(a, c, "autogoal"))) {
																					e = G([e, c.qc], Km); var f = nt(e); e = G([a, e],
																						Jm); b.push(Ok(a, e)); b.push(Qe(a, "dataLayer", function (g) { g.ta.D(f) }))
																				}
																			}); return d
																		}), pt = /[^\d.,]/g, qt = /[.,]$/, Hm = F("ep.pp", function (a, c) { if (!c) return 0; a: { var b = c.replace(pt, "").replace(qt, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (H(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(Lb(b[0]) + "." + Lb(d)); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0)); return b }), rt = [[["EUR", "\u20ac"], "978"], [["USD",
																			"\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], st = w(function (a) { return new RegExp(a.join("|"), "i") }), tt = F("ep.cp", function (a) {
																				if (!a) return "643"; var c = wh(a); return (a = Za(function (b) { return st(b[0]).test(c) },
																					rt)) ? a[1] : "643"
																			}), ut = w(function () {
																				function a() { var k = h + "0", l = h + "1"; f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1) } function c() { var k = h + "1"; f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1) } function b(k) { void 0 === k && (k = 1); var l = d.slice(g, g + k); g += k; return l } for (var d = Kh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
																					e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)(); return e
																			}), Em = F("ep.dec", function (a, c) {
																				if (!c || Xc(a)) return []; var b = Kh(c), d = b[1], e = b[2], f = b.slice(3); if (2 !== zg(b[0])) return []; b = ut(); f = f.join(""); e = zg(d + e); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(zg(b[g])), g = ""), h += 1; b = ""; for (f = 0; f < d.length;)e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
																					15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3); d = Bb(a, b); return ea(d) ? d : []
																			}), Gm = F("ep.ent", function (a, c, b) { a = "" + Va(a, 10, 99); b = "" + 100 * c + b + a; if (16 < La(b)) return ""; b = Lh("0", 16, b); c = b.slice(0, 8); b = b.slice(-8); c = (+c ^ 92844).toString(35); b = (+b ^ 92844).toString(35); return "" + c + "z" + b }), Pk = u(Jh, tt), Qk = F("ep.ctp", function (a, c, b, d) {
																				var e = Pk(a, b), f = Ih(a, d); Hh(a, c, e, f); Aa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () { var g = Pk(a, b), h = Ih(a, d); if (e !== g || f !== h) e = g, f = h, Hh(a, c, e, f) })).observe(a.document.body,
																					{ attributes: !0, childList: !0, subtree: !0, characterData: !0 })
																			}), vt = F("ep.chp", function (a, c, b, d, e) { b && hf(a, c); return d || e ? ia(a).D(a.document, ["click"], D(a, "ep.chp.cl", G([a, c, d, e], Fm))) : B }), At = F("ep.i", function (a, c) {
																				return xd(a) ? Dm(a, c).then(function (b) {
																					var d = b.Ah, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7], q = d[8], r = d[9], t = d[10], y = d[11], E = d[12], M = d[13], O = d[14], wa = d[15]; if (!b.isEnabled) return K.resolve(B); var xa = Pd(a, e), sb = Pd(a, h), Bc = Pd(a, m), wt = Pd(a, q), xt = "" + e + f + g === "" + h + k + l; return new K(function (yt,
																						zt) { Yb(a)(Ua(zt, function () { xa && Qk(a, c, f, g, t, y, E); sb && !xt && Qk(a, c, k, l, M, O, wa); yt(vt(a, c, Bc || wt, p, r)) })) })
																				}) : K.resolve(B)
																			}), bm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], Bt = F("cc.i", function (a, c) { var b = G([a, c], Cm); b = G([a, b, 300], Y); ma(a, c, b) }), Rk = B, Ct = Fb("isp.stat", function (a, c) {
																				return new K(function (b, d) {
																					if (hq(a, rk, "isp")) {
																						var e = function (f) { ("1" === f ? b : d)(); Rk(); f = nj(rk); H("isp", f.ob) && (f.ob = X(u(ja("isp"), Sb), f.ob), f.ob.length || (kc(f.eb), f.eb = null)) }; Rk = ia(a).D(a, ["message"],
																							G([a, c, e], Bm)); Y(a, e, 1500)
																					} else d()
																				})
																			}), xl = Fb("isp", function (a, c) { ma(a, c, function (b) { var d = Za(function (h) { return n(b, "settings." + h) }, ["rt", "mf"]); if (d && Ce(a)) { var e = ni(b) && !ge(a), f = P(c), g = Oi(c); g[f] = { Vc: d, status: e ? 3 : 4 }; if (!e) return d = Am(a, c, d), Ct(a, d).then(function () { g[f].status = 1 })["catch"](function () { g[f].status = 2 }) } })["catch"](D(a, "l.isp")) }), Dt = F("exps.int", function (a, c) {
																				return function (b, d, e) {
																					var f, g; void 0 === d && (d = B); if (b && 0 < b.length) {
																						var h = ta(a, "e", c), k = nd(c).url; b = h({
																							J: za((f = {}, f.ex = 1, f.ar =
																								1, f)), G: (g = {}, g["page-url"] = k || T(a).href, g.exp = b, g)
																						}, c); return Jc(a, "exps.s", b, d, e)
																					}
																				}
																			}), Et = v("9-d5ve+.r%7", Q), Ft = F("ad", function (a, c) {
																				if (!c.kb) {
																					var b = L(a); if (!b.o("adBlockEnabled")) {
																						var d = function (m) { H(m, ["2", "1"]) && b.C("adBlockEnabled", m) }, e = ac(a), f = e.o("isad"); if (f) d(f); else {
																							var g = v("adStatus", b.C), h = function (m) { m = m ? "1" : "2"; d(m); g("complete"); e.C("isad", m, 1200); return m }, k = ta(a, "adb", c); if (!b.o("adStatus")) {
																								g("process"); var l = "metrika/a" + Et().replace(/[^a-v]+/g, "") + "t.gif"; wm(a, function () {
																									return k({},
																										l).then(v(!1, h))["catch"](v(!0, h))
																								})
																							}
																						}
																					}
																				}
																			}), Gt = F("pr.p", function (a, c) { var b, d; if (Tf(a)) { var e = ta(a, "5", c), f = za((b = {}, b.pq = 1, b.ar = 1, b)); e({ J: f, G: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](D(a, "pr.p.s")) } }), Fh = !1, Ht = F("fid", function (a) {
																				var c, b = B; if (!U(a.PerformanceObserver)) return b; var d = L(a); if (d.o("fido")) return b; d.C("fido", !0); var e = new a.PerformanceObserver(D(a, "fid", function (f) {
																					f = f.getEntries()[0]; d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
																					b()
																				})); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
																			}), Sk = { 1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1 }, It = w(function () { return N(function (a, c) { var b = lc(c + "/tag.js"); Sk[b] || (a[b] = 1); return a }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]) }),
															Jt = F("p.sci", function (a, c) { var b = L(a); return b.o("scip") ? K.resolve() : ma(a, c, Q).then(function (d) { d = n(d, "settings.ins"); return !b.o("scip") && d ? um(a, c, b) : null }, D(a, "ins.cs")) }), Kt = F("lt.p", Fb("lt.p", function (a) { var c; if (Aa("PerformanceObserver", a.PerformanceObserver)) { var b = 0, d = new a.PerformanceObserver(D(a, "lt.o", function (e) { e && e.getEntries && (e = e.getEntries(), b = N(function (f, g) { return f + g.duration }, b, e), Nb(a).C("lt", b)) })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return B } return function () { return d.disconnect() } } return B })),
															Lt = w(u(V("performance.memory.jsHeapSizeLimit"), ra("concat", ""))), Mt = ["availWidth", "availHeight", "availTop"], Nt = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), Ot = ["webgl", "experimental-webgl"], rm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], bf = v(Qa("ccf"), fb), qm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
															Dh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), om = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), Ch = w(function (a) { return I("[^\\d<>]*", a.split("")) }), gm = w(function (a) { return new RegExp(Ch(a), "g") }), km = /\S/, vh = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ec), Tk = w(function (a) { return Xc(a) || !xd(a) }), dm = w(sh), rh = w(Bb, xb), Pt = F("phc.p", function (a, c) {
																return Tk(a) ?
																	B : ma(a, c, function (b) { var d = c.id, e = Fc(a, void 0, d), f = e.o("phc_settings") || ""; if (b = n(b, "settings.phchange")) { var g = jb(a, b) || ""; g !== f && e.C("phc_settings", g) } else f && (b = rh(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f = { Cb: "", Nb: "", rg: 0, ja: {}, ua: [], Nf: !1, cb: !0, l: a, ic: c }, x(f, { Nf: !0 }), qh(a, d, f), b = Yc(a), e = th(a, b, 1E3), d = C(qh, null, a, d, f), e.D(d), uh(a, b)) })
															}), Og = w(function (a, c, b) {
																var d = L(a); c = Pa(a); var e = []; b = G([a, b, d, c], zp); pd(a) || Ap(a, "14.1") || e.push(G([am, "pp", ""], b)); var f =
																	tk(a) && !lh(a, 68); f || e.push(G([cm, "pu", ""], b)); f || c.Sd || Ce(a) || (e.push(G([$l, "zzlc", "na"], b)), e.push(G([Zl, "cc", ""], b))); return e.length ? { xa: function (g, h) { if (0 === d.o("isEU")) try { z(cr, e) } catch (k) { } h() }, da: function (g, h) { var k = g.J; if (k && 0 === d.o("isEU")) try { z(ua(k), e) } catch (l) { } h() } } : {}
															}, function (a, c, b) { return P(b) }), Qt = u(function (a) { a = n(a, "navigator.plugins") || []; return La(a) ? u(na, Cc(Boolean), fr(function (c, b) { return c.name > b.name ? 1 : 2 }), eb(sm))(a) : "" }, $c(",")), Rt = function (a) {
																return function (c) {
																	var b = Ya(c);
																	if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.Ih; e = e.xh; try { var g = ra("getContext", b); d = A(u(Q, g), e) } catch (h) { return "" } return (g = Za(Q, d)) ? f(c, { canvas: b, lh: g }) : ""
																}
															}(function () { return { xh: Ot, Ih: Vl } }), Tl = ["name", "lang", "localService", "voiceURI", "default"], St = ["ecommerce", "user_id", "fpp"], hl = F("pa.int", function (a, c) {
																return function () {
																	var b, d, e = Ba(arguments), f = Rl(e); if (!f) return null; e = f.vh; var g = f.$; f = f.Za; if (!qb(g) && !ea(g)) return null; var h = ta(a, "1", c), k = nd(c).url, l = n(g, "__ym.user_id"), m = ca(g), p = H("__ymu",
																		m), q = H("__ym", m) && l; m = !Hf(c); var r = g; r.__ym && (r = x({}, g), r.__ym = N(function (t, y) { var E = n(g, "__ym." + y); E && (t[y] = E); return t }, {}, St), ca(r.__ym).length || delete r.__ym, m = !!ca(r).length); l = Ab(a, c, q ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + c.id, q ? void 0 : JSON.stringify(r)); h = h({ V: { $: g }, J: za((b = {}, b.pa = 1, b.ar = 1, b)), G: (d = {}, d["page-url"] = k || T(a).href, d) }, c).then(m ? l : B); return Jc(a, "p.s", h, f, e)
																}
															}), nl = F("y.p", function (a, c) {
																var b = Li(a, c); if (b) {
																	var d = ee(a), e = G([a, b, c], Ql); Ei(a, d, function (f) {
																		f.D(["params"],
																			e)
																	}); b.ba.D(["params"], u(V("1"), e))
																}
															}), Tt = Fb("is", function (a) { var c = -1 < T(a).href.indexOf("_ym_debug=200500"), b = ac(a), d = b.o("debug_build") === oa.Xa; if (c || d) return b.C("debug_build", oa.Xa), Dc(a, { src: qk + "/tag_debug.js" }) }), jh = w(Oc), Ut = u(ra("exec", /counterID=(\d+)/), V("1")), kh = ha(function (a, c) {
																var b = jh(a), d = na(c), e = d[0], f = d[1]; d = d.slice(2); if (f) {
																	var g = "" + e; var h = { id: 1, aa: "0" }; var k = Ut(g); k ? h.id = k : -1 === g.indexOf(":") ? (g = Fa(g), h.id = g) : (g = g.split(":"), k = g[1], h.id = Fa(g[0]), h.aa = rg(k) ? "1" : "0"); h = [Da(a, h), h];
																	g = h[0]; h = h[1]; k = P(h); b[k] || (b[k] = {}); b = b[k]; if (!c.pf) if ("init" === f) if (c.pf = !0, g) ob(a, "" + e, "Duplicate counter " + e + " initialization"); else { if (e = "1" === h.aa, f = Hf(h), e || f || !Tt(a)) a["yaCounter" + h.id] = new a.Ya[oa.Db](x({}, d[0], h)) } else g && g[f] && b.yi ? (g[f].apply(g, d), c.pf = !0) : (h = b.sg, h || (h = [], b.sg = h), h.push(sa([e, f], d)))
																}
															}), Xg = v("form", Wb), Ml = v("form", wb), Uk = w(function (a) { a = T(a); a = qq(a.search.substring(1)); a["_ym_status-check"] = a["_ym_status-check"] || ""; a._ym_lang = a._ym_lang || "ru"; return a }), hh = u(Uk, V("_ym_status-check"),
																Fa), Vt = u(Uk, V("_ym_lang")), Kl = ["https://iframe-toloka.com/"], gh = Ta(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), Ol = ["form", "button", "phone", "status"], Ll = w(function (a, c, b) { b.inline ? ah(a, b) : b.resource && gh(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Pl(a, b.resource)) }, function (a, c, b) { return b.id }), zl = F("cs.init",
																	function (a, c) { var b, d = hh(a); d && c.id === d && "0" === c.aa && (d = (b = {}, b.lang = Vt(a), b.fileId = "status", b.id = "" + c.id, b), Y(a, G([a, d], ah), 0, "cs")) }), pl = F("up.int", function (a, c) { return D(a, "up.c", function (b, d, e) { var f, g = Da(a, c), h = od(a, P(c)).warn; g ? qb(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || B, e)) : h("Wrong user params") : h("No counter instance found") }) }), jl = F("trigger.in", function (a, c) { c.Cg && Kb(a, G([a, "yacounter" + c.id + "inited"], mq), "t.i") }), ql = F("destruct.e", function (a, c, b) {
																		return function () {
																			var d = L(a), e = c.id;
																			z(function (f, g) { return U(f) && D(a, "dest.fr." + g, f)() }, b); delete d.o("counters")[P(c)]; delete a["yaCounter" + e]
																		}
																	}), rl = F("suid.int", function (a, c) { return function (b, d, e) { if (Ia(b) || Rd(a, b)) { var f = Da(a, c); b = Ec(["__ym", "user_id", b]); f.params(b, d || B, e) } else Ed(a, P(c)).error("Incorrect user ID") } }), sl = F("guid.int", function (a, c) { return function (b) { var d = df(a, c); b && Gf(a, b, null, d); return d } }), Hl = w(function (a, c) { return ma(a, c, V("settings.form_goals")) }, xb), Wt = v(!0, Yg), wl = F("s.f.i", function (a, c) {
																		var b = []; ia(a).D(a,
																			["click"], D(a, "s.f.c", G([a, c, b], Gl))); ia(a).D(a, ["submit"], D(a, "s.f.e", u(V("target"), G([a, c, b], Wt)))); $g(a, c, "Form goal. Counter " + c.id + ". Init.")
																	}), Xt = /[\*\.\?\(\)]/g, Yt = w(function (a, c, b) { try { var d = b.replace("\\s", " ").replace(Xt, ""); od(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter') } catch (e) { } }, xb), Cl = F("r.nn", function (a) { yf(a).isEnabled && ne(a, og, function (c) { c.ta.D(function (b) { Yt(a, b[1], b[0]); og.splice(100) }) }) }); "function" == typeof Promise && Promise.resolve();
			var Ac = { position: "absolute" }, Wg = { position: "fixed" }, Ye = { borderRadius: "50%" }, Zt = u(V("settings.sm"), ja(1)), al = Fb("siteStatistics", function (a, c) { return !wj(a) && Yb(a)(Ua(B, G([a, c, function (b) { return Zt(b) ? Fl(a, c.id) : B }], ma))) }), Vk = w(function (a) { return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob") }), ll = F("fpm", function (a, c) {
				if (!ik(a)) return B; var b = P(c); if (!Vk(a)) return ob(a, b, "Not supported"), B; var d = Da(a, c); return d ? function (e) {
					return (new K(function (f, g) {
						return qb(e) ? ca(e).length ?
							f(Tg(a, e).then(function (h) { var k, l; h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k)) }, B)) : g(Qa("fpm.l")) : g(Qa("fpm.o"))
					}))["catch"](D(a, "fpm.en"))
				} : B
			}), $t = Ta(/[a-z\u0430-\u044f,.]/gi), au = F("ice", function (a, c, b) {
				var d = Da(a, c); if (d) {
					var e = n(b, "target"); if (e && (c = n(e, "value"), (c = rb(c)) && !(100 <= La(c)))) {
						b = Lb(c); var f = 0 < c.indexOf("@"), g = "tel" === n(e, "type") || !f && La(b); if (f || g) {
							if (g) {
								if ($t(c)) return; g = c[0]; var h = b[0]; if (g !== h && "+" !== g) return; var k = c[1]; if ("+" === g && k !== h) return; c = c[La(c) - 1]; g = b[La(b) -
									1]; if (c !== g) return; c = b
							} b = f ? 5 : 11; g = f ? 100 : 16; La(c) < b || La(c) > g || Ug(a, c).then(function (l) { var m, p, q, r = eg(a, e); d.params((m = {}, m.__ym = (p = {}, p.fi = Mi((q = {}, q.a = f ? 1 : 0, q.b = r, q.c = l, q)).Ca(), p), m)) }, D(a, "ice.s"))
						}
					}
				}
			}), bu = ["text", "email", "tel"], cu = ["cc-", "name", "shipping"], du = F("icei", function (a, c) {
				return xd(a) && Vk(a) && Yb(a)(Ua(B, G([a, c, function (b) {
					var d = n(b, "settings.cf"); b = Jd(a) || n(b, "settings.eu"); if (d && !b) {
						var e = ia(a); d = wb("input", a.document.body); z(function (f) {
							wf(a, f) || !H(f.type, bu) || Na(Q, A(v(f.autocomplete,
								mc), cu)) || e.D(f, ["blur"], G([a, c], au))
						}, na(d))
					}
				}], ma)))
			}), el = Fb("gic", du), fl = F("phc.h", function (a, c) { return wj(a) || Tk(a) ? null : ma(a, c, function (b) { if (!n(b, "settings.phchange")) { var d = Fc(a, "").o("yaHidePhones"); d = d ? Bb(a, d) : ""; (b = n(b, "settings.phhide") || d) && fh(a, c, b) } }) }), hc = L(window); hc.Ka("hitParam", {}); hc.Ka("lastReferrer", window.location.href); hc.Ka("getCounters", is(window)); Ue.push(function (a, c) { if (a["disableYaCounter" + c.id]) { var b = P(c); delete L(a).o("counters", {})[b]; fb(Qa("oo.e")) } }); Jf.unshift(function (a) {
				return {
					da: function (c,
						b) { L(a).o("oo") || b() }
				}
			}); (function () { var a; Mf.push(ms); va.f = bb; x(qa, (a = {}, a.f = pk, a)); aa("f", Rb(), 1); aa("f", Rf, 2) })(); Ue.push(function (a, c) { var b = { Fa: P(c), vd: Da(a, c), Ag: da(a), $d: Pa(a) }, d = b.Ag(ib); if (!b.$d.Sd) { var e = b.$d.o("ymoo" + b.Fa); if (e && 30 > d - e) b = b.Fa, delete L(a).o("counters", {})[b], fb(Qa("uws")); else ma(a, c, ns(b))["catch"](D(a, "d.f")) } }); (function () {
				var a, c, b = Eb([Ub]); x(qa, (a = {}, a.s = b, a.S = b, a.u = Rc, a)); x(va, (c = {}, c.s = Cb, c.S = bb, c.u = Cb, c)); aa("s"); aa("u"); aa("S", Rb(["v", "hid", "u", "vf", "rn"]), 1); pb.push(F("s",
					uo))
			})(); va["8"] = Cb; qa["8"] = [hj]; pb.push(function (a, c) { return ma(a, c, function (b) { var d, e = n(b, "settings.sbp"); return e && li(a, b, { $a: c, Vc: "8", data: x({}, e, (d = {}, d.c = c.id, d)), Yd: "cs" }) }) }); aa("p", Rb(Me), 1); va.p = ce; qa.p = Eb([0, Ub]); gc.push(ss); aa("4", Rb(Me), 1); va["4"] = ce; qa["4"] = Eb([0, Ub, wd]); gc.push(ys); aa("W", Rb(Me), 1); qa.W = Eb([0, Ub]); va.W = ce; gc.push(ht); pb.push(it); yc.push(["ecommerceAdd", jt]); yc.push(["ecommerceRemove", kt]); yc.push(["ecommerceDetail", lt]); yc.push(["ecommercePurchase", mt]); pb.push(ot);
			pb.push(At); qa["6"] = Eb([0, Ub]); va["6"] = function (a, c, b) { var d = Cb(a, c); return function (e) { return Uf(a, b, e, !0).then(G([e, ["https://mc.yandex.md/cc"], { jd: !0, Jg: !1 }], d)) } }; aa("6", rd, 1); pb.push(Bt); Ib(Gc, 20); aa("f", Gc, 20); aa("n", Gc, 20); aa("1", Gc, 20); aa("d", Gc, 20); aa("5", Gc, 20); yc.push(["experiments", Dt]); vb.e = Db; va.e = bb; qa.e = dc; Te.exp = { le: "experiments" }; pb.push(Mr); (function () { Fk.push(function () { window.Ya[oa.Db].informer = xm(window) }) })(); Ib(ef, 6); aa("1", ef, 6); aa("adb"); aa("n", ef, 4); qa.adb = Rc; va.adb = de;
			Ve.push(Ft); qa["5"] = dc; va["5"] = bb; vb["5"] = X(u(Kc, nc([Sf, rd]), Sb), Db); pb.push(Gt); Ib(Eh, 7); aa("n", Eh, 6); gc.push(Ht); va.d = bb; aa("d", Rb(["hid", "u", "v", "vf"]), 1); qa.d = Rc; aa("n", function (a, c, b) {
				return {
					xa: function (d, e) {
						if (!d.V || !d.V.force) {
							var f = .002, g = b.id === oa.Tg ? 1 : .002, h, k, l, m, p; void 0 === f && (f = 1); void 0 === g && (g = 1); var q = a.performance; if (q && U(q.getEntriesByType) && (f = Math.random() > f, g = Math.random() > g, !f || !g)) {
								q = a.performance.getEntriesByType("resource"); for (var r = {}, t = {}, y = {}, E = It(a), M = 0; M < q.length; M +=
									1) { var O = q[M], wa = O.name.replace(/^https?:\/\//, "").split("?")[0], xa = lc(wa), sb = (h = {}, h.dns = Math.round(O.domainLookupEnd - O.domainLookupStart), h.tcp = Math.round(O.connectEnd - O.connectStart), h.duration = Math.round(O.duration), h.response = Math.round(O.responseEnd - O.requestStart), h); "script" !== O.initiatorType || f || (t[wa] = x(sb, (k = {}, k.name = O.name, k.decodedBodySize = O.decodedBodySize, k))); !Sk[xa] && !E[xa] || r[wa] || g || (r[wa] = x(sb, (l = {}, l.pages = a.location.href, l))) } ca(r).length && (y.timings8 = r); ca(t).length && (y.scripts =
										t); if (ca(y).length) ta(a, "d", b)({ J: za((m = {}, m.ar = "1", m.pv = "1", m)), ca: jb(a, y) || void 0, G: (p = {}, p["page-url"] = a.location && "" + a.location.href, p) }, { id: oa.Vg, aa: "0" })["catch"](D(a, "r.tim.ng2"))
							}
						} e()
					}
				}
			}, 7); qa.ci = Eb([Ub]); gc.push(Jt); pb.push(Kt); gc.push(Qr); pb.push(Pt); Ib(Og, 8); aa("f", Og, 3); aa("n", Og, 5); Ve.push(function (a) { return F("fip", function (c) { if (!tk(c) || td(c)) { var b = Pa(c); if (!b.o("fip")) { var d = u(eb(u(function (e, f) { return F("fip." + f, e)(c) }, C(Kq, null))), $c("-"))(a); b.C("fip", d) } } }) }([Rt, Qt, function (a) {
				var c =
					n(a, "ApplePaySession"), b = T(a).protocol; a = c && "https:" === b && !Ob(a) ? c : void 0; c = ""; if (!a) return c; try { c = "" + a.canMakePayments(); b = ""; var d = a.supportsVersion; if (U(d)) for (var e = 1; 20 >= e; e += 1)b += d.call(a, e) ? "" + e : "0"; return b + c } catch (f) { return c }
			}, function (a) { a = n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" }, function (a) { if (a = Sr(a)) try { for (var c = [], b = 0; b < uk.length; b += 1) { var d = a(uk[b]); c.push(d) } var e = c } catch (f) { e = [] } else e = []; return e ? I("x", e) : "" }, function (a) {
				var c = void 0; void 0 === c && (c =
					Nt); var b = n(a, "navigator") || {}; c = A(v(b, n), c); c = I("x", c); try { var d = n(a, "navigator.getGamepads"); var e = Ja(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + La(e)
			}, Lt, function (a) { a = n(a, "screen") || {}; return I("x", A(v(a, n), Mt)) }, function (a) { return I("x", Sl(a) || []) }, function (a) { a = nm(a); return ea(a) ? I("x", a) : a }, function (a) { return (a = pm(a)) ? u(gr, Cc(Q), eb(G(["", ["matches", "media"]], Ul)), v("x", I))(a) : "" }])); Ib(function (a) {
				return {
					da: function (c, b) {
						var d = c.J, e = Pa(a).o("fip"); e && d && (d.C("fip",
							e), Nd(c, "fip", cd(e))); b()
					}
				}
			}, 9); aa("h", function (a) { return { xa: function (c, b) { var d = c.pj; ff(c) && d && L(a).C("isEU", n(d, "settings.eu")); b() } } }, 3); (function (a) { var c = L(a); c.o("i") || (c.C("i", !0), ia(a).D(a, ["message"], v(a, Jl))) })(window); if (window.Ya && Re) { var Wk = oa.Db; window.Ya[Wk] = Re; js(window); var eu = window.Ya[Wk]; z(u(xi([window]), ya), Fk); eu.counters = hc.o("getCounters") } (function (a) { var c = n(a, "ym"); if (c) { var b = n(c, "a"); b || (c.a = [], b = c.a); var d = kh(a); ne(a, b, function (e) { e.ta.D(d) }, !0) } })(window)
		})()
	} catch (Re) { };
}).call(this)